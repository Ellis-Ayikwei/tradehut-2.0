import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

interface DashboardStats {
    totalOrders: number;
    totalRepairs: number;
    totalUsers: number;
    totalRevenue: number;
    pendingRepairs: number;
    completedRepairs: number;
    newCustomers: number;
    averageRating: number;
}

interface RecentActivity {
    id: string;
    type: 'order' | 'repair' | 'user';
    description: string;
    timestamp: string;
    status: 'pending' | 'completed' | 'failed';
}

const AdminDashboard: React.FC = () => {
    const [stats, setStats] = useState<DashboardStats>({
        totalOrders: 248,
        totalRepairs: 156,
        totalUsers: 342,
        totalRevenue: 45200,
        pendingRepairs: 23,
        completedRepairs: 133,
        newCustomers: 28,
        averageRating: 4.8
    });

    const [recentActivity] = useState<RecentActivity[]>([
        {
            id: '1',
            type: 'repair',
            description: 'iPhone 12 screen repair completed for John Doe',
            timestamp: '2 hours ago',
            status: 'completed'
        },
        {
            id: '2',
            type: 'order',
            description: 'New laptop order received - MacBook Air M2',
            timestamp: '4 hours ago',
            status: 'pending'
        },
        {
            id: '3',
            type: 'user',
            description: 'New customer registration: Jane Smith',
            timestamp: '6 hours ago',
            status: 'completed'
        },
        {
            id: '4',
            type: 'repair',
            description: 'Samsung Galaxy S21 battery replacement in progress',
            timestamp: '8 hours ago',
            status: 'pending'
        }
    ]);

    const [selectedTab, setSelectedTab] = useState('overview');

    const StatCard: React.FC<{
        title: string;
        value: number | string;
        change: string;
        changeType: 'positive' | 'negative';
        icon: string;
        color: string;
    }> = ({ title, value, change, changeType, icon, color }) => (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className={`bg-white rounded-xl shadow-lg p-6 border-l-4 ${color}`}
        >
            <div className="flex items-center justify-between">
                <div>
                    <p className="text-gray-600 text-sm font-medium">{title}</p>
                    <p className="text-3xl font-bold text-gray-900 mt-1">{value}</p>
                    <p className={`text-sm mt-2 ${changeType === 'positive' ? 'text-green-600' : 'text-red-600'}`}>
                        <span className={`inline-flex items-center ${changeType === 'positive' ? 'text-green-600' : 'text-red-600'}`}>
                            {changeType === 'positive' ? '↗' : '↘'} {change}
                        </span>
                        <span className="text-gray-500 ml-1">vs last month</span>
                    </p>
                </div>
                <div className={`p-3 rounded-full ${color.replace('border-l-', 'bg-').replace('-500', '-100')}`}>
                    <i className={`${icon} text-2xl ${color.replace('border-l-', 'text-')}`}></i>
                </div>
            </div>
        </motion.div>
    );

    return (
        <div className="min-h-screen bg-gray-50">
            {/* Header */}
            <div className="bg-white shadow-sm border-b">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between items-center py-6">
                        <div>
                            <h1 className="text-3xl font-bold text-gray-900">TradeHut Admin Dashboard</h1>
                            <p className="text-gray-600 mt-1">Welcome back! Here's what's happening at TradeHut today.</p>
                        </div>
                        <div className="flex items-center space-x-4">
                            <button className="bg-orange-600 text-white px-6 py-2 rounded-lg hover:bg-orange-700 transition-colors">
                                <i className="fas fa-plus mr-2"></i>
                                New Entry
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Navigation Tabs */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-6">
                <div className="border-b border-gray-200">
                    <nav className="-mb-px flex space-x-8">
                        {[
                            { id: 'overview', name: 'Overview', icon: 'fas fa-chart-line' },
                            { id: 'orders', name: 'Orders', icon: 'fas fa-shopping-bag' },
                            { id: 'repairs', name: 'Repairs', icon: 'fas fa-tools' },
                            { id: 'users', name: 'Users', icon: 'fas fa-users' },
                            { id: 'analytics', name: 'Analytics', icon: 'fas fa-chart-bar' }
                        ].map((tab) => (
                            <button
                                key={tab.id}
                                onClick={() => setSelectedTab(tab.id)}
                                className={`py-2 px-1 border-b-2 font-medium text-sm flex items-center ${
                                    selectedTab === tab.id
                                        ? 'border-orange-500 text-orange-600'
                                        : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                                }`}
                            >
                                <i className={`${tab.icon} mr-2`}></i>
                                {tab.name}
                            </button>
                        ))}
                    </nav>
                </div>
            </div>

            {/* Main Content */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                {selectedTab === 'overview' && (
                    <div className="space-y-8">
                        {/* Stats Grid */}
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                            <StatCard
                                title="Total Revenue"
                                value={`GH₵ ${stats.totalRevenue.toLocaleString()}`}
                                change="+12.5%"
                                changeType="positive"
                                icon="fas fa-dollar-sign"
                                color="border-l-green-500"
                            />
                            <StatCard
                                title="Total Orders"
                                value={stats.totalOrders}
                                change="+8.2%"
                                changeType="positive"
                                icon="fas fa-shopping-cart"
                                color="border-l-blue-500"
                            />
                            <StatCard
                                title="Active Repairs"
                                value={stats.pendingRepairs}
                                change="-3.1%"
                                changeType="negative"
                                icon="fas fa-wrench"
                                color="border-l-orange-500"
                            />
                            <StatCard
                                title="New Customers"
                                value={stats.newCustomers}
                                change="+15.3%"
                                changeType="positive"
                                icon="fas fa-user-plus"
                                color="border-l-purple-500"
                            />
                        </div>

                        {/* Charts and Activity */}
                        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                            {/* Recent Activity */}
                            <div className="lg:col-span-1">
                                <div className="bg-white rounded-xl shadow-lg p-6">
                                    <h3 className="text-lg font-semibold text-gray-900 mb-4">Recent Activity</h3>
                                    <div className="space-y-4">
                                        {recentActivity.map((activity) => (
                                            <div key={activity.id} className="flex items-start space-x-3">
                                                <div className={`p-1 rounded-full ${
                                                    activity.type === 'order' ? 'bg-blue-100' :
                                                    activity.type === 'repair' ? 'bg-orange-100' : 'bg-green-100'
                                                }`}>
                                                    <i className={`${
                                                        activity.type === 'order' ? 'fas fa-shopping-bag text-blue-600' :
                                                        activity.type === 'repair' ? 'fas fa-tools text-orange-600' :
                                                        'fas fa-user text-green-600'
                                                    } text-xs`}></i>
                                                </div>
                                                <div className="flex-1 min-w-0">
                                                    <p className="text-sm text-gray-900">{activity.description}</p>
                                                    <p className="text-xs text-gray-500">{activity.timestamp}</p>
                                                </div>
                                                <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                                                    activity.status === 'completed' ? 'bg-green-100 text-green-800' :
                                                    activity.status === 'pending' ? 'bg-yellow-100 text-yellow-800' :
                                                    'bg-red-100 text-red-800'
                                                }`}>
                                                    {activity.status}
                                                </span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>

                            {/* Quick Actions */}
                            <div className="lg:col-span-2">
                                <div className="bg-white rounded-xl shadow-lg p-6">
                                    <h3 className="text-lg font-semibold text-gray-900 mb-4">Quick Actions</h3>
                                    <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                                        {[
                                                                        { title: 'Manage Products', icon: 'fas fa-box', color: 'bg-blue-600', href: '/admin/products' },
                            { title: 'Repair Jobs', icon: 'fas fa-tools', color: 'bg-orange-600', href: '/admin/repairs' },
                            { title: 'View Orders', icon: 'fas fa-list', color: 'bg-green-600', href: '/admin/orders' },
                            { title: 'Manage Users', icon: 'fas fa-users', color: 'bg-purple-600', href: '/admin/users' },
                            { title: 'Analytics', icon: 'fas fa-chart-bar', color: 'bg-indigo-600', href: '/admin/analytics' },
                            { title: 'Settings', icon: 'fas fa-cog', color: 'bg-gray-600', href: '/admin/settings' }
                                        ].map((action, index) => (
                                            <motion.button
                                                key={index}
                                                whileHover={{ scale: 1.05 }}
                                                whileTap={{ scale: 0.95 }}
                                                className={`${action.color} text-white p-4 rounded-lg text-center hover:opacity-90 transition-opacity`}
                                            >
                                                <i className={`${action.icon} text-2xl mb-2 block`}></i>
                                                <span className="text-sm font-medium">{action.title}</span>
                                            </motion.button>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Performance Summary */}
                        <div className="bg-white rounded-xl shadow-lg p-6">
                            <h3 className="text-lg font-semibold text-gray-900 mb-4">Performance Summary</h3>
                            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                                <div className="text-center">
                                    <div className="text-3xl font-bold text-green-600">{stats.completedRepairs}</div>
                                    <div className="text-sm text-gray-600">Completed Repairs</div>
                                </div>
                                <div className="text-center">
                                    <div className="text-3xl font-bold text-blue-600">{stats.totalUsers}</div>
                                    <div className="text-sm text-gray-600">Total Customers</div>
                                </div>
                                <div className="text-center">
                                    <div className="text-3xl font-bold text-yellow-600">{stats.averageRating}</div>
                                    <div className="text-sm text-gray-600">Average Rating</div>
                                </div>
                                <div className="text-center">
                                    <div className="text-3xl font-bold text-purple-600">97%</div>
                                    <div className="text-sm text-gray-600">Success Rate</div>
                                </div>
                            </div>
                        </div>
                    </div>
                )}

                {selectedTab !== 'overview' && (
                    <div className="bg-white rounded-xl shadow-lg p-8">
                        <div className="text-center">
                            <i className="fas fa-construction text-6xl text-gray-400 mb-4"></i>
                            <h3 className="text-2xl font-semibold text-gray-900 mb-2">
                                {selectedTab.charAt(0).toUpperCase() + selectedTab.slice(1)} Management
                            </h3>
                            <p className="text-gray-600">
                                This section is under development. Full functionality will be available soon.
                            </p>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default AdminDashboard;