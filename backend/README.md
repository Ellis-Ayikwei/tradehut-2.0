# TradeHut Backend API

A comprehensive Node.js backend API for TradeHut IT Services Management System.

## 🚀 Features

- **Authentication & Authorization**: JWT-based auth with role-based access control
- **Product Management**: Complete e-commerce product catalog
- **Repair Job Management**: Device repair tracking and management
- **Order Management**: E-commerce order processing
- **Admin Dashboard**: Comprehensive admin panel with analytics
- **File Upload**: Image upload with Cloudinary integration
- **Email Notifications**: Automated email notifications
- **Real-time Updates**: Socket.io integration for real-time updates
- **Security**: Rate limiting, CORS, helmet security headers
- **Validation**: Comprehensive input validation
- **Error Handling**: Centralized error handling
- **Logging**: Winston logging system

## 📋 Prerequisites

- Node.js (v16 or higher)
- MongoDB (v4.4 or higher)
- npm or yarn

## 🛠️ Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd backend
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Environment Setup**
   ```bash
   cp .env.example .env
   ```
   
   Update the `.env` file with your configuration:
   ```env
   PORT=5000
   NODE_ENV=development
   MONGODB_URI=mongodb://localhost:27017/tradehut_db
   JWT_SECRET=your_super_secret_jwt_key
   # ... other configurations
   ```

4. **Start MongoDB**
   ```bash
   # Using MongoDB service
   sudo systemctl start mongod
   
   # Or using Docker
   docker run -d -p 27017:27017 --name mongodb mongo:latest
   ```

5. **Start the server**
   ```bash
   # Development mode with auto-reload
   npm run dev
   
   # Production mode
   npm start
   ```

## 🌐 API Endpoints

### Authentication
- `POST /api/auth/register` - User registration
- `POST /api/auth/login` - User login
- `GET /api/auth/me` - Get current user
- `PUT /api/auth/profile` - Update user profile
- `PUT /api/auth/change-password` - Change password
- `GET /api/auth/logout` - Logout user
- `POST /api/auth/create-admin` - Create admin user (dev only)

### Products
- `GET /api/products` - Get all products
- `POST /api/products` - Create product (Staff/Admin)
- `GET /api/products/:id` - Get product details
- `PUT /api/products/:id` - Update product (Staff/Admin)
- `DELETE /api/products/:id` - Delete product (Admin)

### Repair Jobs
- `GET /api/repairs` - Get repair jobs
- `POST /api/repairs` - Create repair job
- `GET /api/repairs/:id` - Get repair job details
- `PUT /api/repairs/:id` - Update repair job
- `GET /api/repairs/track/:jobNumber` - Track repair job

### Orders
- `GET /api/orders` - Get orders
- `POST /api/orders` - Create order
- `GET /api/orders/:id` - Get order details
- `PUT /api/orders/:id` - Update order

### Admin
- `GET /api/admin/dashboard` - Admin dashboard data
- `GET /api/admin/users` - User management (Admin)
- `GET /api/admin/analytics` - Analytics data

## 🔐 Authentication

The API uses JWT (JSON Web Tokens) for authentication. Include the token in the Authorization header:

```
Authorization: Bearer <your-jwt-token>
```

### User Roles
- **Customer**: Can view products, create orders and repair requests
- **Staff**: Can manage products, orders, and repair jobs
- **Admin**: Full system access including user management

## 📝 Data Models

### User
```javascript
{
  name: String,
  email: String,
  phone: String,
  password: String,
  role: ['customer', 'staff', 'admin'],
  address: Object,
  isActive: Boolean,
  // ... other fields
}
```

### Product
```javascript
{
  name: String,
  description: String,
  category: String,
  brand: String,
  price: Number,
  images: Array,
  inventory: Object,
  // ... other fields
}
```

### RepairJob
```javascript
{
  jobNumber: String,
  customer: ObjectId,
  device: Object,
  issueDescription: String,
  status: String,
  cost: Object,
  // ... other fields
}
```

### Order
```javascript
{
  orderNumber: String,
  customer: ObjectId,
  items: Array,
  billing: Object,
  shipping: Object,
  payment: Object,
  // ... other fields
}
```

## 🚀 Deployment

### Production Environment

1. **Set environment variables**
   ```bash
   NODE_ENV=production
   MONGODB_URI=mongodb://your-production-db
   JWT_SECRET=your-strong-production-secret
   ```

2. **Install PM2 for process management**
   ```bash
   npm install -g pm2
   ```

3. **Start with PM2**
   ```bash
   pm2 start src/server.js --name "tradehut-api"
   pm2 startup
   pm2 save
   ```

### Docker Deployment

```dockerfile
FROM node:18-alpine
WORKDIR /app
COPY package*.json ./
RUN npm ci --only=production
COPY . .
EXPOSE 5000
CMD ["npm", "start"]
```

### Vercel Deployment

Create `vercel.json`:
```json
{
  "version": 2,
  "builds": [
    {
      "src": "src/server.js",
      "use": "@vercel/node"
    }
  ],
  "routes": [
    {
      "src": "/(.*)",
      "dest": "/src/server.js"
    }
  ]
}
```

## 🔧 Configuration

### Environment Variables

| Variable | Description | Required |
|----------|-------------|----------|
| `PORT` | Server port | No (default: 5000) |
| `NODE_ENV` | Environment mode | No (default: development) |
| `MONGODB_URI` | MongoDB connection string | Yes |
| `JWT_SECRET` | JWT secret key | Yes |
| `JWT_EXPIRES_IN` | JWT expiration time | No (default: 30d) |
| `EMAIL_HOST` | SMTP host | For email features |
| `EMAIL_USER` | SMTP username | For email features |
| `EMAIL_PASS` | SMTP password | For email features |
| `CLOUDINARY_CLOUD_NAME` | Cloudinary cloud name | For image uploads |
| `CLOUDINARY_API_KEY` | Cloudinary API key | For image uploads |
| `CLOUDINARY_API_SECRET` | Cloudinary API secret | For image uploads |

## 🧪 Testing

```bash
# Run tests
npm test

# Run tests with coverage
npm run test:coverage

# Run tests in watch mode
npm run test:watch
```

## 📊 Monitoring

The API includes:
- Health check endpoint: `GET /health`
- Request logging with Morgan
- Error logging with Winston
- Performance monitoring

## 🔒 Security Features

- **Rate Limiting**: Prevents abuse
- **CORS**: Configured for frontend domains
- **Helmet**: Security headers
- **Input Validation**: Express-validator
- **Password Hashing**: bcryptjs
- **JWT Authentication**: Secure token-based auth

## 🐛 Error Handling

All errors return a consistent format:
```json
{
  "success": false,
  "message": "Error description",
  "errors": [] // Optional validation errors
}
```

## 📈 Performance

- **Compression**: Response compression enabled
- **Database Indexing**: Optimized MongoDB indexes
- **Caching**: Response caching where appropriate
- **File Size Limits**: Configurable upload limits

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License.

## 📞 Support

For support, email support@tradehut.com or create an issue in the repository.