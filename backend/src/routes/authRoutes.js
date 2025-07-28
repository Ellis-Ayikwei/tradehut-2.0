import express from 'express';
import { body } from 'express-validator';
import {
    register,
    login,
    getMe,
    updateProfile,
    changePassword,
    logout,
    createAdmin
} from '../controllers/authController.js';
import { protect } from '../middleware/auth.js';

const router = express.Router();

// Validation rules
const registerValidation = [
    body('name')
        .trim()
        .notEmpty()
        .withMessage('Name is required')
        .isLength({ min: 2, max: 50 })
        .withMessage('Name must be between 2 and 50 characters'),
    body('email')
        .isEmail()
        .withMessage('Please provide a valid email')
        .normalizeEmail(),
    body('phone')
        .trim()
        .notEmpty()
        .withMessage('Phone number is required')
        .isMobilePhone()
        .withMessage('Please provide a valid phone number'),
    body('password')
        .isLength({ min: 6 })
        .withMessage('Password must be at least 6 characters long')
        .matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/)
        .withMessage('Password must contain at least one uppercase letter, one lowercase letter, and one number')
];

const loginValidation = [
    body('email')
        .isEmail()
        .withMessage('Please provide a valid email')
        .normalizeEmail(),
    body('password')
        .notEmpty()
        .withMessage('Password is required')
];

const profileUpdateValidation = [
    body('name')
        .optional()
        .trim()
        .isLength({ min: 2, max: 50 })
        .withMessage('Name must be between 2 and 50 characters'),
    body('phone')
        .optional()
        .trim()
        .isMobilePhone()
        .withMessage('Please provide a valid phone number'),
    body('address.street')
        .optional()
        .trim()
        .isLength({ max: 200 })
        .withMessage('Street address cannot exceed 200 characters'),
    body('address.city')
        .optional()
        .trim()
        .isLength({ max: 100 })
        .withMessage('City cannot exceed 100 characters'),
    body('address.state')
        .optional()
        .trim()
        .isLength({ max: 100 })
        .withMessage('State cannot exceed 100 characters'),
    body('address.zipCode')
        .optional()
        .trim()
        .isLength({ max: 20 })
        .withMessage('Zip code cannot exceed 20 characters')
];

const changePasswordValidation = [
    body('currentPassword')
        .notEmpty()
        .withMessage('Current password is required'),
    body('newPassword')
        .isLength({ min: 6 })
        .withMessage('New password must be at least 6 characters long')
        .matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/)
        .withMessage('New password must contain at least one uppercase letter, one lowercase letter, and one number')
];

// Public routes
router.post('/register', registerValidation, register);
router.post('/login', loginValidation, login);
router.post('/create-admin', createAdmin); // Remove in production

// Protected routes
router.get('/me', protect, getMe);
router.put('/profile', protect, profileUpdateValidation, updateProfile);
router.put('/change-password', protect, changePasswordValidation, changePassword);
router.get('/logout', protect, logout);

export default router;