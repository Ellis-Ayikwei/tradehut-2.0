import jwt from 'jsonwebtoken';
import bcryptjs from 'bcryptjs';
import User from '../models/User.js';
import { validationResult } from 'express-validator';

// Generate JWT Token
const generateToken = (id) => {
    return jwt.sign({ id }, process.env.JWT_SECRET, {
        expiresIn: process.env.JWT_EXPIRES_IN || '30d',
    });
};

// Send token response
const sendTokenResponse = (user, statusCode, res, message) => {
    const token = generateToken(user._id);

    const options = {
        expires: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000), // 30 days
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
        sameSite: 'lax'
    };

    // Remove password from output
    user.password = undefined;

    res.status(statusCode)
        .cookie('token', token, options)
        .json({
            success: true,
            message,
            token,
            user
        });
};

// @desc    Register user
// @route   POST /api/auth/register
// @access  Public
export const register = async (req, res) => {
    try {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({
                success: false,
                message: 'Validation failed',
                errors: errors.array()
            });
        }

        const { name, email, phone, password, role = 'customer' } = req.body;

        // Check if user already exists
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).json({
                success: false,
                message: 'User already exists with this email'
            });
        }

        // Check if phone already exists
        const existingPhone = await User.findOne({ phone });
        if (existingPhone) {
            return res.status(400).json({
                success: false,
                message: 'User already exists with this phone number'
            });
        }

        // Create user
        const user = await User.create({
            name,
            email,
            phone,
            password,
            role
        });

        sendTokenResponse(user, 201, res, 'User registered successfully');

    } catch (error) {
        console.error('Registration error:', error);
        res.status(500).json({
            success: false,
            message: 'Server error during registration'
        });
    }
};

// @desc    Login user
// @route   POST /api/auth/login
// @access  Public
export const login = async (req, res) => {
    try {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({
                success: false,
                message: 'Validation failed',
                errors: errors.array()
            });
        }

        const { email, password } = req.body;

        // Check for user
        const user = await User.findOne({ email }).select('+password');
        if (!user) {
            return res.status(401).json({
                success: false,
                message: 'Invalid email or password'
            });
        }

        // Check if user is active
        if (!user.isActive) {
            return res.status(401).json({
                success: false,
                message: 'Account is deactivated. Please contact support.'
            });
        }

        // Check password
        const isMatch = await user.matchPassword(password);
        if (!isMatch) {
            return res.status(401).json({
                success: false,
                message: 'Invalid email or password'
            });
        }

        // Update last login
        user.lastLogin = new Date();
        await user.save({ validateBeforeSave: false });

        sendTokenResponse(user, 200, res, 'Login successful');

    } catch (error) {
        console.error('Login error:', error);
        res.status(500).json({
            success: false,
            message: 'Server error during login'
        });
    }
};

// @desc    Get current logged in user
// @route   GET /api/auth/me
// @access  Private
export const getMe = async (req, res) => {
    try {
        const user = await User.findById(req.user.id);
        
        res.status(200).json({
            success: true,
            user
        });
    } catch (error) {
        console.error('Get user error:', error);
        res.status(500).json({
            success: false,
            message: 'Server error fetching user data'
        });
    }
};

// @desc    Update user profile
// @route   PUT /api/auth/profile
// @access  Private
export const updateProfile = async (req, res) => {
    try {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({
                success: false,
                message: 'Validation failed',
                errors: errors.array()
            });
        }

        const fieldsToUpdate = {
            name: req.body.name,
            phone: req.body.phone,
            address: req.body.address,
            preferences: req.body.preferences
        };

        // Remove undefined fields
        Object.keys(fieldsToUpdate).forEach(key => 
            fieldsToUpdate[key] === undefined && delete fieldsToUpdate[key]
        );

        const user = await User.findByIdAndUpdate(
            req.user.id,
            fieldsToUpdate,
            {
                new: true,
                runValidators: true
            }
        );

        res.status(200).json({
            success: true,
            message: 'Profile updated successfully',
            user
        });

    } catch (error) {
        console.error('Update profile error:', error);
        res.status(500).json({
            success: false,
            message: 'Server error updating profile'
        });
    }
};

// @desc    Change password
// @route   PUT /api/auth/change-password
// @access  Private
export const changePassword = async (req, res) => {
    try {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({
                success: false,
                message: 'Validation failed',
                errors: errors.array()
            });
        }

        const { currentPassword, newPassword } = req.body;

        // Get user with password
        const user = await User.findById(req.user.id).select('+password');

        // Check current password
        const isMatch = await user.matchPassword(currentPassword);
        if (!isMatch) {
            return res.status(400).json({
                success: false,
                message: 'Current password is incorrect'
            });
        }

        // Update password
        user.password = newPassword;
        await user.save();

        res.status(200).json({
            success: true,
            message: 'Password changed successfully'
        });

    } catch (error) {
        console.error('Change password error:', error);
        res.status(500).json({
            success: false,
            message: 'Server error changing password'
        });
    }
};

// @desc    Logout user / clear cookie
// @route   GET /api/auth/logout
// @access  Private
export const logout = async (req, res) => {
    try {
        res.cookie('token', 'none', {
            expires: new Date(Date.now() + 10 * 1000),
            httpOnly: true
        });

        res.status(200).json({
            success: true,
            message: 'Logged out successfully'
        });
    } catch (error) {
        console.error('Logout error:', error);
        res.status(500).json({
            success: false,
            message: 'Server error during logout'
        });
    }
};

// @desc    Create admin user (for development/setup)
// @route   POST /api/auth/create-admin
// @access  Public (should be protected in production)
export const createAdmin = async (req, res) => {
    try {
        // Check if admin already exists
        const existingAdmin = await User.findOne({ role: 'admin' });
        if (existingAdmin) {
            return res.status(400).json({
                success: false,
                message: 'Admin user already exists'
            });
        }

        const { name = 'Admin', email, password, phone } = req.body;

        const admin = await User.create({
            name,
            email: email || process.env.ADMIN_EMAIL,
            phone: phone || '+233000000000',
            password: password || process.env.ADMIN_PASSWORD,
            role: 'admin',
            emailVerified: true
        });

        sendTokenResponse(admin, 201, res, 'Admin user created successfully');

    } catch (error) {
        console.error('Create admin error:', error);
        res.status(500).json({
            success: false,
            message: 'Server error creating admin user'
        });
    }
};