import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
    BarChart3,
    TrendingUp,
    TrendingDown,
    Calendar,
    Download,
    ArrowLeft,
    DollarSign,
    Users,
    ShoppingBag,
    Activity,
    PieChart,
    ArrowUpRight,
    ArrowDownRight
} from 'lucide-react';
import {
    IconChartBar,
    IconChartLine,
    IconChartPie,
    IconChartDots
} from '@tabler/icons-react';

const AdminAnalytics: React.FC = () => {
    const [timeRange, setTimeRange] = useState('7days');

    // Sample data for charts
    const revenueData = [
        { day: 'Mon', revenue: 2400 },
        { day: 'Tue', revenue: 3200 },
        { day: 'Wed', revenue: 2800 },
        { day: 'Thu', revenue: 3600 },
        { day: 'Fri', revenue: 4200 },
        { day: 'Sat', revenue: 3800 },
        { day: 'Sun', revenue: 3100 }
    ];

    const categoryData = [
        { name: 'Smartphones', value: 35, color: 'from-blue-500 to-cyan-500' },
        { name: 'Laptops', value: 28, color: 'from-purple-500 to-pink-500' },
        { name: 'Accessories', value: 22, color: 'from-green-500 to-emerald-500' },
        { name: 'Tablets', value: 15, color: 'from-orange-500 to-red-500' }
    ];

    const metrics = [
        {
            title: 'Total Revenue',
            value: '$45,231',
            change: '+12.5%',
            trend: 'up',
            icon: <DollarSign className="w-5 h-5" />,
            color: 'from-blue-600 to-purple-600'
        },
        {
            title: 'Total Orders',
            value: '1,234',
            change: '+8.2%',
            trend: 'up',
            icon: <ShoppingBag className="w-5 h-5" />,
            color: 'from-green-600 to-emerald-600'
        },
        {
            title: 'New Customers',
            value: '321',
            change: '-2.4%',
            trend: 'down',
            icon: <Users className="w-5 h-5" />,
            color: 'from-purple-600 to-pink-600'
        },
        {
            title: 'Conversion Rate',
            value: '3.24%',
            change: '+0.8%',
            trend: 'up',
            icon: <Activity className="w-5 h-5" />,
            color: 'from-orange-600 to-red-600'
        }
    ];

    const topProducts = [
        { name: 'iPhone 15 Pro Max', sales: 45, revenue: '$53,955' },
        { name: 'MacBook Air M3', sales: 32, revenue: '$41,568' },
        { name: 'AirPods Pro 2', sales: 89, revenue: '$22,211' },
        { name: 'iPad Pro 12.9"', sales: 23, revenue: '$22,977' },
        { name: 'Apple Watch Series 9', sales: 56, revenue: '$22,344' }
    ];

    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-950 to-slate-900">
            {/* Header */}
            <div className="bg-slate-900/50 backdrop-blur-sm border-b border-white/10">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
                    <div className="flex items-center justify-between">
                        <div className="flex items-center gap-4">
                            <Link to="/admin" className="p-2 hover:bg-white/10 rounded-lg transition-colors">
                                <ArrowLeft className="w-5 h-5 text-gray-400" />
                            </Link>
                            <h1 className="text-2xl font-bold text-white">Analytics Dashboard</h1>
                        </div>
                        <div className="flex items-center gap-3">
                            <select
                                value={timeRange}
                                onChange={(e) => setTimeRange(e.target.value)}
                                className="px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-white focus:outline-none focus:border-indigo-500"
                            >
                                <option value="7days">Last 7 Days</option>
                                <option value="30days">Last 30 Days</option>
                                <option value="90days">Last 90 Days</option>
                                <option value="1year">Last Year</option>
                            </select>
                            <button className="px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-white hover:bg-white/10 transition-colors flex items-center gap-2">
                                <Download className="w-4 h-4" />
                                Export Report
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                {/* Metrics Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                    {metrics.map((metric, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                            className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10"
                        >
                            <div className="flex items-center justify-between mb-4">
                                <div className={`w-12 h-12 bg-gradient-to-r ${metric.color} rounded-xl flex items-center justify-center text-white`}>
                                    {metric.icon}
                                </div>
                                <div className={`flex items-center gap-1 text-sm font-medium ${
                                    metric.trend === 'up' ? 'text-green-400' : 'text-red-400'
                                }`}>
                                    {metric.trend === 'up' ? (
                                        <ArrowUpRight className="w-4 h-4" />
                                    ) : (
                                        <ArrowDownRight className="w-4 h-4" />
                                    )}
                                    {metric.change}
                                </div>
                            </div>
                            <p className="text-3xl font-bold text-white mb-1">{metric.value}</p>
                            <p className="text-gray-400 text-sm">{metric.title}</p>
                        </motion.div>
                    ))}
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* Revenue Chart */}
                    <div className="lg:col-span-2">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                            className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10"
                        >
                            <div className="flex items-center justify-between mb-6">
                                <h3 className="text-xl font-semibold text-white">Revenue Overview</h3>
                                <IconChartLine className="w-5 h-5 text-gray-400" />
                            </div>
                            
                            {/* Simple Bar Chart Visualization */}
                            <div className="h-64 flex items-end justify-between gap-4">
                                {revenueData.map((data, index) => {
                                    const height = (data.revenue / 4200) * 100;
                                    return (
                                        <div key={index} className="flex-1 flex flex-col items-center gap-2">
                                            <motion.div
                                                initial={{ height: 0 }}
                                                animate={{ height: `${height}%` }}
                                                transition={{ delay: index * 0.1, duration: 0.5 }}
                                                className="w-full bg-gradient-to-t from-blue-600 to-purple-600 rounded-t-lg relative group"
                                            >
                                                <div className="absolute -top-8 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity bg-slate-800 px-2 py-1 rounded text-xs text-white whitespace-nowrap">
                                                    ${data.revenue}
                                                </div>
                                            </motion.div>
                                            <span className="text-xs text-gray-400">{data.day}</span>
                                        </div>
                                    );
                                })}
                            </div>
                        </motion.div>
                    </div>

                    {/* Category Distribution */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 }}
                        className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10"
                    >
                        <div className="flex items-center justify-between mb-6">
                            <h3 className="text-xl font-semibold text-white">Sales by Category</h3>
                            <IconChartPie className="w-5 h-5 text-gray-400" />
                        </div>

                        <div className="space-y-4">
                            {categoryData.map((category, index) => (
                                <div key={index}>
                                    <div className="flex items-center justify-between mb-2">
                                        <span className="text-gray-300">{category.name}</span>
                                        <span className="text-white font-medium">{category.value}%</span>
                                    </div>
                                    <div className="w-full bg-white/10 rounded-full h-2 overflow-hidden">
                                        <motion.div
                                            initial={{ width: 0 }}
                                            animate={{ width: `${category.value}%` }}
                                            transition={{ delay: index * 0.1, duration: 0.5 }}
                                            className={`h-full bg-gradient-to-r ${category.color}`}
                                        />
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div className="mt-6 pt-6 border-t border-white/10">
                            <div className="flex items-center justify-between">
                                <span className="text-gray-400">Total Sales</span>
                                <span className="text-2xl font-bold text-white">$142,543</span>
                            </div>
                        </div>
                    </motion.div>
                </div>

                {/* Top Products Table */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                    className="mt-8 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 overflow-hidden"
                >
                    <div className="p-6 border-b border-white/10">
                        <h3 className="text-xl font-semibold text-white">Top Performing Products</h3>
                    </div>
                    <div className="overflow-x-auto">
                        <table className="w-full">
                            <thead>
                                <tr className="border-b border-white/10">
                                    <th className="px-6 py-4 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">Product</th>
                                    <th className="px-6 py-4 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">Sales</th>
                                    <th className="px-6 py-4 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">Revenue</th>
                                    <th className="px-6 py-4 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">Performance</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-white/10">
                                {topProducts.map((product, index) => (
                                    <tr key={index} className="hover:bg-white/5 transition-colors">
                                        <td className="px-6 py-4 whitespace-nowrap">
                                            <span className="text-white">{product.name}</span>
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap">
                                            <span className="text-gray-300">{product.sales} units</span>
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap">
                                            <span className="text-white font-medium">{product.revenue}</span>
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap">
                                            <div className="flex items-center gap-2">
                                                <div className="flex-1 bg-white/10 rounded-full h-2 overflow-hidden">
                                                    <motion.div
                                                        initial={{ width: 0 }}
                                                        animate={{ width: `${(product.sales / 89) * 100}%` }}
                                                        transition={{ delay: index * 0.1, duration: 0.5 }}
                                                        className="h-full bg-gradient-to-r from-green-500 to-emerald-500"
                                                    />
                                                </div>
                                                <TrendingUp className="w-4 h-4 text-green-400" />
                                            </div>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default AdminAnalytics;