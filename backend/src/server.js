import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import morgan from 'morgan';
import compression from 'compression';
import rateLimit from 'express-rate-limit';
import cookieParser from 'cookie-parser';
import path from 'path';
import { fileURLToPath } from 'url';
import dotenv from 'dotenv';

// Local imports
import connectDB from './config/database.js';
import authRoutes from './routes/authRoutes.js';
import productRoutes from './routes/productRoutes.js';
import repairRoutes from './routes/repairRoutes.js';
import orderRoutes from './routes/orderRoutes.js';
import adminRoutes from './routes/adminRoutes.js';

// Load environment variables
dotenv.config();

// Get current directory for ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Create Express app
const app = express();

// Connect to database
connectDB();

// Security middleware
app.use(helmet({
    crossOriginEmbedderPolicy: false,
    contentSecurityPolicy: {
        directives: {
            defaultSrc: ["'self'"],
            styleSrc: ["'self'", "'unsafe-inline'", "https://fonts.googleapis.com"],
            fontSrc: ["'self'", "https://fonts.gstatic.com"],
            imgSrc: ["'self'", "data:", "https:", "http:"],
            scriptSrc: ["'self'"],
        },
    },
}));

// Rate limiting
const limiter = rateLimit({
    windowMs: 15 * 60 * 1000, // 15 minutes
    max: 100, // limit each IP to 100 requests per windowMs
    message: {
        success: false,
        message: 'Too many requests from this IP, please try again later.'
    },
    standardHeaders: true,
    legacyHeaders: false,
});

// Auth rate limiting (more strict)
const authLimiter = rateLimit({
    windowMs: 15 * 60 * 1000, // 15 minutes
    max: 5, // limit each IP to 5 auth requests per windowMs
    message: {
        success: false,
        message: 'Too many authentication attempts, please try again later.'
    },
    standardHeaders: true,
    legacyHeaders: false,
});

// Apply rate limiting
app.use('/api/', limiter);
app.use('/api/auth', authLimiter);

// CORS configuration
const corsOptions = {
    origin: function (origin, callback) {
        const allowedOrigins = [
            'http://localhost:3000',
            'http://localhost:5173',
            'http://127.0.0.1:3000',
            'http://127.0.0.1:5173',
            process.env.FRONTEND_URL,
        ].filter(Boolean);

        // Allow requests with no origin (like mobile apps or curl requests)
        if (!origin) return callback(null, true);
        
        if (allowedOrigins.includes(origin)) {
            callback(null, true);
        } else {
            callback(new Error('Not allowed by CORS'));
        }
    },
    credentials: true,
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization', 'X-Requested-With'],
    exposedHeaders: ['X-Total-Count', 'X-Total-Pages']
};

app.use(cors(corsOptions));

// Body parsing middleware
app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ extended: true, limit: '10mb' }));
app.use(cookieParser());

// Compression middleware
app.use(compression());

// Logging middleware
if (process.env.NODE_ENV === 'development') {
    app.use(morgan('dev'));
} else {
    app.use(morgan('combined'));
}

// Serve static files
app.use('/uploads', express.static(path.join(__dirname, '../public/uploads')));

// Health check endpoint
app.get('/health', (req, res) => {
    res.status(200).json({
        success: true,
        message: 'TradeHut API is running',
        timestamp: new Date().toISOString(),
        environment: process.env.NODE_ENV,
        version: '1.0.0'
    });
});

// API routes
app.use('/api/auth', authRoutes);
app.use('/api/products', productRoutes);
app.use('/api/repairs', repairRoutes);
app.use('/api/orders', orderRoutes);
app.use('/api/admin', adminRoutes);

// Welcome route
app.get('/', (req, res) => {
    res.status(200).json({
        success: true,
        message: 'Welcome to TradeHut API',
        documentation: '/api/docs',
        health: '/health',
        version: '1.0.0'
    });
});

// API documentation (placeholder)
app.get('/api/docs', (req, res) => {
    res.status(200).json({
        success: true,
        message: 'TradeHut API Documentation',
        endpoints: {
            auth: {
                login: 'POST /api/auth/login',
                register: 'POST /api/auth/register',
                profile: 'GET /api/auth/me',
                logout: 'GET /api/auth/logout'
            },
            products: {
                list: 'GET /api/products',
                create: 'POST /api/products',
                details: 'GET /api/products/:id',
                update: 'PUT /api/products/:id',
                delete: 'DELETE /api/products/:id'
            },
            repairs: {
                list: 'GET /api/repairs',
                create: 'POST /api/repairs',
                details: 'GET /api/repairs/:id',
                update: 'PUT /api/repairs/:id',
                track: 'GET /api/repairs/track/:jobNumber'
            },
            orders: {
                list: 'GET /api/orders',
                create: 'POST /api/orders',
                details: 'GET /api/orders/:id',
                update: 'PUT /api/orders/:id'
            },
            admin: {
                dashboard: 'GET /api/admin/dashboard',
                users: 'GET /api/admin/users',
                analytics: 'GET /api/admin/analytics'
            }
        }
    });
});

// 404 handler for API routes
app.use('/api/*', (req, res) => {
    res.status(404).json({
        success: false,
        message: `API route ${req.originalUrl} not found`
    });
});

// Global error handler
app.use((err, req, res, next) => {
    console.error('Error:', err);

    // Mongoose bad ObjectId
    if (err.name === 'CastError') {
        return res.status(400).json({
            success: false,
            message: 'Invalid resource ID'
        });
    }

    // Mongoose duplicate key
    if (err.code === 11000) {
        const field = Object.keys(err.keyValue)[0];
        return res.status(400).json({
            success: false,
            message: `${field} already exists`
        });
    }

    // Mongoose validation error
    if (err.name === 'ValidationError') {
        const errors = Object.values(err.errors).map(val => val.message);
        return res.status(400).json({
            success: false,
            message: 'Validation Error',
            errors
        });
    }

    // JWT errors
    if (err.name === 'JsonWebTokenError') {
        return res.status(401).json({
            success: false,
            message: 'Invalid token'
        });
    }

    if (err.name === 'TokenExpiredError') {
        return res.status(401).json({
            success: false,
            message: 'Token expired'
        });
    }

    // CORS error
    if (err.message === 'Not allowed by CORS') {
        return res.status(403).json({
            success: false,
            message: 'CORS policy violation'
        });
    }

    // Default error
    res.status(err.statusCode || 500).json({
        success: false,
        message: err.message || 'Internal Server Error',
        ...(process.env.NODE_ENV === 'development' && { stack: err.stack })
    });
});

// Handle unhandled promise rejections
process.on('unhandledRejection', (err, promise) => {
    console.error('Unhandled Promise Rejection:', err.message);
    // Close server & exit process
    process.exit(1);
});

// Handle uncaught exceptions
process.on('uncaughtException', (err) => {
    console.error('Uncaught Exception:', err.message);
    process.exit(1);
});

// Set port
const PORT = process.env.PORT || 5000;

// Start server
const server = app.listen(PORT, () => {
    console.log(`
    🚀 TradeHut API Server is running!
    
    📍 Environment: ${process.env.NODE_ENV || 'development'}
    🌐 Port: ${PORT}
    🔗 URL: http://localhost:${PORT}
    📚 Docs: http://localhost:${PORT}/api/docs
    ❤️  Health: http://localhost:${PORT}/health
    
    Ready to serve requests! 🎉
    `);
});

// Graceful shutdown
process.on('SIGTERM', () => {
    console.log('SIGTERM signal received: closing HTTP server');
    server.close(() => {
        console.log('HTTP server closed');
        process.exit(0);
    });
});

export default app;