# 🚀 TradeHut Deployment Guide

This guide covers various deployment options for the TradeHut application, from development to production.

## 📋 Prerequisites

- Node.js 16+
- MongoDB 4.4+
- Docker (optional but recommended)
- Git

## 🔧 Quick Development Setup

### Option 1: Automated Setup (Recommended)

```bash
# Clone the repository
git clone <repository-url>
cd tradehut

# Run the automated setup script
./start-dev.sh
```

The script will:
- ✅ Check prerequisites
- 🐳 Start MongoDB with Docker if needed
- 📦 Install all dependencies
- 🚀 Start both frontend and backend
- 👑 Create admin user
- 📱 Open the application

### Option 2: Manual Setup

```bash
# Clone and setup backend
cd backend
npm install
cp .env.example .env
# Edit .env with your configuration

# Start MongoDB (choose one option)
# Option A: Docker
docker run -d --name mongodb -p 27017:27017 mongo:7.0

# Option B: Local installation
sudo systemctl start mongod

# Start backend
npm run dev

# In another terminal, setup frontend
cd ..
npm install
npm run dev
```

## 🌐 Production Deployment

### 🔷 Railway (Recommended for Backend)

Railway offers excellent Node.js support with automatic deployments.

1. **Prepare your backend**
   ```bash
   cd backend
   # Ensure package.json has correct start script
   ```

2. **Deploy to Railway**
   - Connect your GitHub repository
   - Set environment variables:
     ```
     NODE_ENV=production
     MONGODB_URI=your_mongodb_connection_string
     JWT_SECRET=your_strong_jwt_secret
     CLOUDINARY_CLOUD_NAME=your_cloudinary_name
     CLOUDINARY_API_KEY=your_api_key
     CLOUDINARY_API_SECRET=your_api_secret
     ```

3. **Database Setup**
   - Use Railway's MongoDB plugin, or
   - MongoDB Atlas (recommended)

### 🔷 Vercel (Recommended for Frontend)

Perfect for React applications with great performance.

1. **Prepare frontend**
   ```bash
   npm run build
   ```

2. **Deploy to Vercel**
   - Connect GitHub repository
   - Set environment variables:
     ```
     VITE_API_URL=https://your-backend-url.com
     ```

3. **Domain Setup**
   - Add custom domain if needed
   - Configure redirects in `vercel.json`

### 🔷 Netlify (Alternative for Frontend)

Another excellent option for static sites.

1. **Build and Deploy**
   ```bash
   npm run build
   # Upload dist/ folder to Netlify
   ```

2. **Environment Variables**
   ```
   VITE_API_URL=https://your-backend-url.com
   ```

### 🔷 Heroku (Full Stack)

Deploy both frontend and backend on Heroku.

**Backend Deployment:**

1. **Prepare Heroku app**
   ```bash
   cd backend
   heroku create tradehut-api
   ```

2. **Set environment variables**
   ```bash
   heroku config:set NODE_ENV=production
   heroku config:set MONGODB_URI=your_mongodb_uri
   heroku config:set JWT_SECRET=your_jwt_secret
   ```

3. **Deploy**
   ```bash
   git push heroku main
   ```

**Frontend Deployment:**

1. **Build for production**
   ```bash
   npm run build
   ```

2. **Deploy to Heroku**
   ```bash
   heroku create tradehut-app
   # Use heroku-buildpack-static
   heroku buildpacks:set https://github.com/heroku/heroku-buildpack-static
   ```

### 🔷 Digital Ocean / VPS

For more control over your deployment.

**Server Setup:**

1. **Initial server configuration**
   ```bash
   # Update system
   sudo apt update && sudo apt upgrade -y
   
   # Install Node.js
   curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -
   sudo apt-get install -y nodejs
   
   # Install MongoDB
   sudo apt-get install -y mongodb
   
   # Install PM2 for process management
   sudo npm install -g pm2
   
   # Install Nginx
   sudo apt install nginx
   ```

2. **Deploy application**
   ```bash
   # Clone repository
   git clone <repository-url>
   cd tradehut
   
   # Setup backend
   cd backend
   npm ci --production
   cp .env.example .env
   # Edit .env file
   
   # Start with PM2
   pm2 start src/server.js --name tradehut-api
   pm2 startup
   pm2 save
   
   # Build frontend
   cd ..
   npm ci
   npm run build
   ```

3. **Nginx Configuration**
   ```nginx
   # /etc/nginx/sites-available/tradehut
   server {
       listen 80;
       server_name your-domain.com;
       
       # Frontend
       location / {
           root /path/to/tradehut/dist;
           try_files $uri $uri/ /index.html;
       }
       
       # Backend API
       location /api {
           proxy_pass http://localhost:5000;
           proxy_http_version 1.1;
           proxy_set_header Upgrade $http_upgrade;
           proxy_set_header Connection 'upgrade';
           proxy_set_header Host $host;
           proxy_cache_bypass $http_upgrade;
       }
   }
   ```

### 🐳 Docker Deployment

Use Docker for consistent deployments across environments.

**Development with Docker:**
```bash
# Start development environment
docker-compose up -d

# View logs
docker-compose logs -f

# Stop services
docker-compose down
```

**Production with Docker:**
```bash
# Build and start production services
docker-compose --profile production up -d

# Scale services
docker-compose up -d --scale backend=3
```

**Docker Swarm (Multiple Servers):**
```bash
# Initialize swarm
docker swarm init

# Deploy stack
docker stack deploy -c docker-compose.yml tradehut
```

## 🗄️ Database Setup

### MongoDB Atlas (Recommended)

1. Create account at [MongoDB Atlas](https://www.mongodb.com/atlas)
2. Create cluster
3. Setup database user and whitelist IPs
4. Get connection string
5. Update `MONGODB_URI` in environment variables

### Local MongoDB

```bash
# Ubuntu/Debian
sudo apt-get install mongodb

# macOS
brew install mongodb-community

# Start service
sudo systemctl start mongod
```

## 🔒 Security Checklist

### Environment Variables
- [ ] Strong JWT secret (32+ characters)
- [ ] Secure database credentials
- [ ] API keys properly set
- [ ] No sensitive data in repository

### Server Security
- [ ] HTTPS enabled (SSL certificate)
- [ ] Firewall configured
- [ ] Regular security updates
- [ ] Strong server passwords
- [ ] SSH key authentication

### Application Security
- [ ] Rate limiting enabled
- [ ] Input validation active
- [ ] CORS properly configured
- [ ] Helmet security headers
- [ ] Error handling doesn't expose secrets

## 🔍 Monitoring & Logging

### Application Monitoring

**PM2 Monitoring:**
```bash
# Monitor processes
pm2 monit

# View logs
pm2 logs

# Restart app
pm2 restart tradehut-api
```

**Health Checks:**
- Backend: `GET /health`
- Frontend: Check if site loads
- Database: Connection status

### Error Tracking

Consider integrating:
- Sentry for error tracking
- LogRocket for user sessions
- Google Analytics for user behavior

## 🚀 Performance Optimization

### Frontend
- [ ] Bundle size optimization
- [ ] Image optimization (WebP)
- [ ] Lazy loading components
- [ ] CDN for static assets
- [ ] Gzip compression

### Backend
- [ ] Database indexing
- [ ] Response caching
- [ ] Connection pooling
- [ ] Image compression
- [ ] API response optimization

### Database
- [ ] Proper indexes
- [ ] Connection pooling
- [ ] Regular backups
- [ ] Performance monitoring

## 🔄 CI/CD Pipeline

### GitHub Actions Example

```yaml
# .github/workflows/deploy.yml
name: Deploy to Production

on:
  push:
    branches: [main]

jobs:
  deploy-backend:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      - name: Deploy to Railway
        uses: railway/railway@v1
        with:
          token: ${{ secrets.RAILWAY_TOKEN }}

  deploy-frontend:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      - name: Deploy to Vercel
        uses: vercel/action@v1
        with:
          vercel-token: ${{ secrets.VERCEL_TOKEN }}
```

## 🔧 Troubleshooting

### Common Issues

**MongoDB Connection Failed:**
```bash
# Check if MongoDB is running
sudo systemctl status mongod

# Check connection string
echo $MONGODB_URI
```

**Port Already in Use:**
```bash
# Kill process using port
sudo kill -9 $(sudo lsof -t -i:5000)

# Or use different port
PORT=5001 npm start
```

**Build Failures:**
```bash
# Clear node modules and reinstall
rm -rf node_modules package-lock.json
npm install

# Clear npm cache
npm cache clean --force
```

**SSL Certificate Issues:**
```bash
# Let's Encrypt with Certbot
sudo certbot --nginx -d your-domain.com
```

## 📚 Additional Resources

- [Node.js Production Best Practices](https://nodejs.org/en/docs/guides/nodejs-docker-webapp/)
- [React Deployment Guide](https://create-react-app.dev/docs/deployment/)
- [MongoDB Atlas Documentation](https://docs.atlas.mongodb.com/)
- [Docker Best Practices](https://docs.docker.com/develop/dev-best-practices/)

## 🆘 Support

If you encounter issues during deployment:

1. Check the logs for error messages
2. Verify environment variables
3. Ensure all services are running
4. Check network connectivity
5. Review security settings

For additional support, contact: support@tradehut.com

---

**Happy Deploying! 🚀**