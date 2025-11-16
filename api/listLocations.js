import { google } from 'googleapis';

export default async function handler(req, res) {
  if (req.method !== "GET") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  try {
    const GOOGLE_CLIENT_EMAIL = process.env.GOOGLE_CLIENT_EMAIL;
    const GOOGLE_PRIVATE_KEY = process.env.GOOGLE_PRIVATE_KEY;
    const GOOGLE_PROJECT_ID = process.env.GOOGLE_PROJECT_ID;

    if (!GOOGLE_CLIENT_EMAIL || !GOOGLE_PRIVATE_KEY || !GOOGLE_PROJECT_ID) {
      return res.status(500).json({ error: "Google credentials not configured" });
    }

    const auth = new google.auth.GoogleAuth({
      credentials: {
        client_email: GOOGLE_CLIENT_EMAIL,
        private_key: GOOGLE_PRIVATE_KEY.replace(/\\n/g, '\n'),
      },
      scopes: ['https://www.googleapis.com/auth/business.manage'],
    });

    const client = await auth.getClient();
    const business = google.mybusinessbusinessinformation({ version: 'v1', auth: client });

    // List all locations for the account
    const locations = await business.accounts.locations.list({
      parent: `accounts/${GOOGLE_PROJECT_ID}`,
    });

    res.status(200).json(locations.data);
  } catch (err) {
    console.error('Error fetching locations:', err);
    res.status(500).json({ error: 'Failed to fetch locations', details: err.message });
  }
}

