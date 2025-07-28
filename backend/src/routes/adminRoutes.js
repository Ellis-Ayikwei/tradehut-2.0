import express from 'express';
import { protect, adminOnly, staffOnly } from '../middleware/auth.js';

const router = express.Router();

// @desc    Get admin dashboard data
// @route   GET /api/admin/dashboard
// @access  Private (Admin/Staff)
router.get('/dashboard', protect, staffOnly, async (req, res) => {
    try {
        res.status(200).json({
            success: true,
            message: 'Admin dashboard endpoint - Coming soon!',
            data: {
                totalUsers: 0,
                totalOrders: 0,
                totalRepairs: 0,
                totalRevenue: 0,
                recentActivity: []
            }
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: 'Server error'
        });
    }
});

// @desc    Get all users
// @route   GET /api/admin/users
// @access  Private (Admin only)
router.get('/users', protect, adminOnly, async (req, res) => {
    try {
        res.status(200).json({
            success: true,
            message: 'Users management endpoint - Coming soon!',
            data: []
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: 'Server error'
        });
    }
});

// @desc    Get analytics data
// @route   GET /api/admin/analytics
// @access  Private (Admin/Staff)
router.get('/analytics', protect, staffOnly, async (req, res) => {
    try {
        res.status(200).json({
            success: true,
            message: 'Analytics endpoint - Coming soon!',
            data: {
                salesTrends: [],
                popularProducts: [],
                repairStats: [],
                customerSatisfaction: 0
            }
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: 'Server error'
        });
    }
});

export default router;