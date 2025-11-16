# 🏪 TradeHut - Modern IT Services Management Platform

A comprehensive full-stack application for IT services, device repairs, and e-commerce sales. Built with React, Node.js, and MongoDB.

## 🌟 Features

### Frontend (React + TypeScript)
- 🎨 Modern, responsive UI with Tailwind CSS
- 🔄 Smooth animations with Framer Motion
- 📱 Mobile-first design approach
- 🎯 SEO optimized with meta tags
- ⚡ Fast loading with Vite
- 🔍 Advanced search and filtering
- 🛒 Complete e-commerce functionality
- 📊 Real-time order and repair tracking

### Backend (Node.js + Express)
- 🔐 JWT authentication with role-based access
- 📦 Complete REST API
- 🗄️ MongoDB with Mongoose ODM
- 🔒 Advanced security with rate limiting
- 📧 Email notifications
- 📁 File upload with Cloudinary
- 🔍 Advanced search and pagination
- 📈 Analytics and reporting

### Admin Dashboard
- 📊 Comprehensive analytics dashboard
- 👥 User management system
- 📦 Product inventory management
- 🔧 Repair job tracking
- 📈 Sales and performance metrics
- 🎛️ System configuration

## 🚀 Quick Start

### Prerequisites
- Node.js (v16+)
- MongoDB (v4.4+)
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd tradehut
   ```

2. **Setup Backend**
   ```bash
   cd backend
   npm install
   cp .env.example .env
   # Edit .env with your configuration
   npm run dev
   ```

3. **Setup Frontend**
   ```bash
   cd ..
   npm install
   npm run dev
   ```

4. **Create Admin User**
   ```bash
   # POST to http://localhost:5000/api/auth/create-admin
   curl -X POST http://localhost:5000/api/auth/create-admin \
     -H "Content-Type: application/json" \
     -d '{"email": "admin@tradehut.com", "password": "Admin123!"}'
   ```

## 📁 Project Structure

```
tradehut/
├── backend/                 # Node.js backend
│   ├── src/
│   │   ├── controllers/     # Route controllers
│   │   ├── models/          # MongoDB models
│   │   ├── routes/          # API routes
│   │   ├── middleware/      # Custom middleware
│   │   ├── config/          # Configuration files
│   │   └── server.js        # Main server file
│   ├── public/uploads/      # File uploads
│   └── package.json
├── src/                     # React frontend
│   ├── components/          # React components
│   │   ├── Admin/           # Admin dashboard
│   │   ├── Layouts/         # Layout components
│   │   └── Icon/            # Icon components
│   ├── pages/               # Page components
│   ├── router/              # React Router setup
│   ├── store/               # Redux store
│   └── main.tsx             # Main React entry
├── public/                  # Static assets
├── index.html               # Main HTML file
└── package.json
```

## 🌐 API Endpoints

### Authentication
- `POST /api/auth/register` - User registration
- `POST /api/auth/login` - User login
- `GET /api/auth/me` - Get current user
- `GET /api/auth/logout` - Logout

### Products
- `GET /api/products` - List products
- `POST /api/products` - Create product
- `GET /api/products/:id` - Get product
- `PUT /api/products/:id` - Update product

### Repair Jobs
- `GET /api/repairs` - List repairs
- `POST /api/repairs` - Create repair job
- `GET /api/repairs/track/:jobNumber` - Track repair

### Orders
- `GET /api/orders` - List orders
- `POST /api/orders` - Create order
- `GET /api/orders/:id` - Get order details

### Admin
- `GET /api/admin/dashboard` - Dashboard stats
- `GET /api/admin/users` - User management
- `GET /api/admin/analytics` - Analytics data

## 🎨 Frontend Routes

- `/` - Home page
- `/aboutUs` - About us page
- `/mystory` - Story page
- `/myexperience` - Experience timeline
- `/myportfolio` - Portfolio showcase
- `/contactme` - Contact page
- `/admin` - Admin dashboard

## 🔐 User Roles

### Customer
- Browse products and services
- Create repair requests
- Place orders
- Track orders and repairs
- Manage profile

### Staff
- Manage repair jobs
- Process orders
- Update inventory
- Customer communication

### Admin
- Full system access
- User management
- Analytics and reports
- System configuration

## 🚀 Deployment

### Development
```bash
# Start backend
cd backend && npm run dev

# Start frontend
npm run dev
```

### Production

#### Frontend (Vercel/Netlify)
```bash
npm run build
# Deploy dist/ folder
```

#### Backend (Railway/Heroku/VPS)
```bash
cd backend
npm start
```

#### Docker
```bash
# Build and run with Docker Compose
docker-compose up -d
```

### Environment Variables

#### Backend
```env
PORT=5000
NODE_ENV=production
MONGODB_URI=mongodb://your-db-url
JWT_SECRET=your-jwt-secret
CLOUDINARY_CLOUD_NAME=your-cloudinary-name
CLOUDINARY_API_KEY=your-api-key
CLOUDINARY_API_SECRET=your-api-secret
EMAIL_HOST=smtp.gmail.com
EMAIL_USER=your-email@gmail.com
EMAIL_PASS=your-app-password
```

#### Frontend
```env
VITE_API_URL=https://your-api-url.com
VITE_CLOUDINARY_CLOUD_NAME=your-cloudinary-name
```

## 📱 Mobile App Ready

The frontend is built with mobile-first approach and can be easily converted to:
- React Native app
- PWA (Progressive Web App)
- Capacitor app for iOS/Android

## 🛡️ Security Features

- JWT authentication with refresh tokens
- Rate limiting on API endpoints
- Input validation and sanitization
- CORS protection
- Helmet security headers
- Password hashing with bcrypt
- XSS protection
- SQL injection prevention

## 📊 Analytics & Monitoring

- Real-time sales tracking
- Customer behavior analytics
- Repair job performance metrics
- Revenue reporting
- Customer satisfaction tracking
- System health monitoring

## 🎯 SEO Optimization

- Server-side rendering ready
- Meta tags optimization
- Open Graph tags
- Twitter Card tags
- Structured data markup
- Sitemap generation
- Robot.txt optimization

## 🔧 Tech Stack

### Frontend
- **React 18** - UI framework
- **TypeScript** - Type safety
- **Tailwind CSS** - Styling
- **Framer Motion** - Animations
- **Redux Toolkit** - State management
- **React Router** - Routing
- **Axios** - HTTP client
- **Vite** - Build tool

### Backend
- **Node.js** - Runtime
- **Express.js** - Web framework
- **MongoDB** - Database
- **Mongoose** - ODM
- **JWT** - Authentication
- **Bcrypt** - Password hashing
- **Cloudinary** - Image storage
- **Nodemailer** - Email service
- **Winston** - Logging

## 🧪 Testing

```bash
# Backend tests
cd backend && npm test

# Frontend tests
npm test

# E2E tests
npm run test:e2e
```

## 📈 Performance

- **Frontend**: Optimized bundle size, code splitting, lazy loading
- **Backend**: Database indexing, caching, compression
- **Images**: WebP format, responsive images, lazy loading
- **API**: Pagination, field filtering, response compression

## 🤝 Contributing

1. Fork the repository
2. Create feature branch (`git checkout -b feature/amazing-feature`)
3. Commit changes (`git commit -m 'Add amazing feature'`)
4. Push to branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 📞 Support

- **Email**: support@tradehut.com
- **Phone**: +233 XX XXX XXXX
- **Website**: https://tradehut.com
- **Documentation**: https://docs.tradehut.com

## 🌟 Acknowledgments

- React community for excellent tools
- MongoDB for robust database
- Tailwind CSS for amazing styling
- All contributors and supporters

---

**Built with ❤️ by the TradeHut Team**