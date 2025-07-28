import express from 'express';
import { protect, staffOnly } from '../middleware/auth.js';

const router = express.Router();

// @desc    Get all orders
// @route   GET /api/orders
// @access  Private
router.get('/', protect, async (req, res) => {
    try {
        res.status(200).json({
            success: true,
            message: 'Orders endpoint - Coming soon!',
            data: []
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: 'Server error'
        });
    }
});

// @desc    Create new order
// @route   POST /api/orders
// @access  Public
router.post('/', async (req, res) => {
    try {
        res.status(201).json({
            success: true,
            message: 'Order creation endpoint - Coming soon!'
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: 'Server error'
        });
    }
});

export default router;