import express from 'express';
import { protect, staffOnly, optionalAuth } from '../middleware/auth.js';

const router = express.Router();

// @desc    Get all products
// @route   GET /api/products
// @access  Public
router.get('/', optionalAuth, async (req, res) => {
    try {
        res.status(200).json({
            success: true,
            message: 'Products endpoint - Coming soon!',
            data: []
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: 'Server error'
        });
    }
});

// @desc    Create new product
// @route   POST /api/products
// @access  Private (Staff/Admin)
router.post('/', protect, staffOnly, async (req, res) => {
    try {
        res.status(201).json({
            success: true,
            message: 'Product creation endpoint - Coming soon!'
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: 'Server error'
        });
    }
});

export default router;