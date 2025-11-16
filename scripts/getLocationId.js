import { google } from 'googleapis';
import dotenv from 'dotenv';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

// Load environment variables from .env file
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
dotenv.config({ path: join(__dirname, '..', '.env') });

async function getLocationId() {
  try {
    const GOOGLE_CLIENT_EMAIL = process.env.GOOGLE_CLIENT_EMAIL;
    const GOOGLE_PRIVATE_KEY = process.env.GOOGLE_PRIVATE_KEY;
    const GOOGLE_PROJECT_ID = process.env.GOOGLE_PROJECT_ID;

    if (!GOOGLE_CLIENT_EMAIL || !GOOGLE_PRIVATE_KEY || !GOOGLE_PROJECT_ID) {
      console.error('❌ Missing required environment variables:');
      console.error('   - GOOGLE_CLIENT_EMAIL:', GOOGLE_CLIENT_EMAIL ? '✓' : '✗');
      console.error('   - GOOGLE_PRIVATE_KEY:', GOOGLE_PRIVATE_KEY ? '✓' : '✗');
      console.error('   - GOOGLE_PROJECT_ID:', GOOGLE_PROJECT_ID ? '✓' : '✗');
      console.error('\n💡 Create a .env file in the root directory with these variables.');
      process.exit(1);
    }

    console.log('🔐 Authenticating with Google...');
    const auth = new google.auth.GoogleAuth({
      credentials: {
        client_email: GOOGLE_CLIENT_EMAIL,
        private_key: GOOGLE_PRIVATE_KEY.replace(/\\n/g, '\n'),
      },
      scopes: ['https://www.googleapis.com/auth/business.manage'],
    });

    const client = await auth.getClient();
    const business = google.mybusinessbusinessinformation({ version: 'v1', auth: client });

    console.log('📋 Fetching locations...');
    
    // Retry logic with exponential backoff for rate limiting
    let locations;
    let retries = 0;
    const maxRetries = 3;
    
    while (retries <= maxRetries) {
      try {
        locations = await business.accounts.locations.list({
          parent: `accounts/${GOOGLE_PROJECT_ID}`,
        });
        break; // Success, exit retry loop
      } catch (err) {
        if (err.code === 429 && retries < maxRetries) {
          const waitTime = Math.pow(2, retries) * 5; // 5s, 10s, 20s
          console.log(`⏳ Rate limit hit. Waiting ${waitTime} seconds before retry ${retries + 1}/${maxRetries}...`);
          await new Promise(resolve => setTimeout(resolve, waitTime * 1000));
          retries++;
        } else {
          throw err; // Re-throw if not rate limit or max retries reached
        }
      }
    }

    if (!locations.data.locations || locations.data.locations.length === 0) {
      console.log('⚠️  No locations found.');
      return;
    }

    console.log('\n✅ Found locations:\n');
    locations.data.locations.forEach((location, index) => {
      console.log(`📍 Location ${index + 1}:`);
      console.log(`   Name: ${location.storefrontAddress?.storeName || location.title || 'N/A'}`);
      console.log(`   Location ID: ${location.name?.split('/').pop() || 'N/A'}`);
      console.log(`   Address: ${location.storefrontAddress?.addressLines?.join(', ') || 'N/A'}`);
      console.log(`   Phone: ${location.storefrontAddress?.phoneNumber || 'N/A'}`);
      console.log('');
    });

    // Find TradeHut specifically
    const tradehutLocation = locations.data.locations.find(
      (loc) =>
        loc.storefrontAddress?.storeName?.toLowerCase().includes('tradehut') ||
        loc.title?.toLowerCase().includes('tradehut')
    );

    if (tradehutLocation) {
      const locationId = tradehutLocation.name?.split('/').pop();
      console.log('🎯 TradeHut Location Found:');
      console.log(`   Location ID: ${locationId}`);
      console.log(`\n💡 Add this to your Vercel environment variables as: GOOGLE_LOCATION_ID=${locationId}`);
    }

  } catch (err) {
    console.error('❌ Error fetching locations:', err.message);
    if (err.response) {
      console.error('   Response:', err.response.data);
    }
    process.exit(1);
  }
}

getLocationId();

