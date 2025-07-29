import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
    ShoppingBag,
    Search,
    Filter,
    Eye,
    CheckCircle,
    Clock,
    XCircle,
    Truck,
    Package,
    DollarSign,
    Calendar,
    User,
    ArrowLeft,
    Download,
    TrendingUp
} from 'lucide-react';
import {
    IconShoppingCart,
    IconPackage,
    IconTruck,
    IconCreditCard
} from '@tabler/icons-react';

interface Order {
    id: string;
    orderNumber: string;
    customer: string;
    email: string;
    items: number;
    total: number;
    status: 'pending' | 'processing' | 'shipped' | 'delivered' | 'cancelled';
    paymentStatus: 'paid' | 'pending' | 'failed';
    date: string;
    shippingMethod: string;
}

const AdminOrders: React.FC = () => {
    const [orders] = useState<Order[]>([
        {
            id: '1',
            orderNumber: 'ORD-2024-001',
            customer: 'John Doe',
            email: 'john@example.com',
            items: 3,
            total: 1599.97,
            status: 'processing',
            paymentStatus: 'paid',
            date: '2024-01-16',
            shippingMethod: 'Express'
        },
        {
            id: '2',
            orderNumber: 'ORD-2024-002',
            customer: 'Jane Smith',
            email: 'jane@example.com',
            items: 1,
            total: 249.99,
            status: 'shipped',
            paymentStatus: 'paid',
            date: '2024-01-15',
            shippingMethod: 'Standard'
        },
        {
            id: '3',
            orderNumber: 'ORD-2024-003',
            customer: 'Bob Johnson',
            email: 'bob@example.com',
            items: 2,
            total: 899.98,
            status: 'delivered',
            paymentStatus: 'paid',
            date: '2024-01-14',
            shippingMethod: 'Express'
        },
        {
            id: '4',
            orderNumber: 'ORD-2024-004',
            customer: 'Alice Brown',
            email: 'alice@example.com',
            items: 4,
            total: 2199.96,
            status: 'pending',
            paymentStatus: 'pending',
            date: '2024-01-16',
            shippingMethod: 'Standard'
        }
    ]);

    const [searchTerm, setSearchTerm] = useState('');
    const [filterStatus, setFilterStatus] = useState('all');
    const [filterPayment, setFilterPayment] = useState('all');

    const filteredOrders = orders.filter(order => {
        const matchesSearch = 
            order.orderNumber.toLowerCase().includes(searchTerm.toLowerCase()) ||
            order.customer.toLowerCase().includes(searchTerm.toLowerCase()) ||
            order.email.toLowerCase().includes(searchTerm.toLowerCase());
        const matchesStatus = filterStatus === 'all' || order.status === filterStatus;
        const matchesPayment = filterPayment === 'all' || order.paymentStatus === filterPayment;
        return matchesSearch && matchesStatus && matchesPayment;
    });

    const getStatusBadge = (status: string) => {
        const statusConfig = {
            'pending': { color: 'bg-yellow-500/20 text-yellow-400', icon: <Clock className="w-3 h-3" />, label: 'Pending' },
            'processing': { color: 'bg-blue-500/20 text-blue-400', icon: <Package className="w-3 h-3" />, label: 'Processing' },
            'shipped': { color: 'bg-purple-500/20 text-purple-400', icon: <Truck className="w-3 h-3" />, label: 'Shipped' },
            'delivered': { color: 'bg-green-500/20 text-green-400', icon: <CheckCircle className="w-3 h-3" />, label: 'Delivered' },
            'cancelled': { color: 'bg-red-500/20 text-red-400', icon: <XCircle className="w-3 h-3" />, label: 'Cancelled' }
        };

        const config = statusConfig[status as keyof typeof statusConfig];
        return (
            <span className={`inline-flex items-center gap-1 px-2 py-1 ${config.color} rounded-full text-xs`}>
                {config.icon}
                {config.label}
            </span>
        );
    };

    const getPaymentBadge = (status: string) => {
        const paymentConfig = {
            'paid': 'bg-green-500/20 text-green-400',
            'pending': 'bg-yellow-500/20 text-yellow-400',
            'failed': 'bg-red-500/20 text-red-400'
        };

        return (
            <span className={`px-2 py-1 ${paymentConfig[status as keyof typeof paymentConfig]} rounded-full text-xs capitalize`}>
                {status}
            </span>
        );
    };

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
                            <h1 className="text-2xl font-bold text-white">Orders Management</h1>
                        </div>
                        <button className="px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-white hover:bg-white/10 transition-colors flex items-center gap-2">
                            <Download className="w-4 h-4" />
                            Export Orders
                        </button>
                    </div>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                {/* Stats Cards */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
                    {[
                        { 
                            label: 'Total Orders', 
                            value: orders.length, 
                            icon: <ShoppingBag className="w-5 h-5" />, 
                            color: 'from-green-600 to-emerald-600',
                            trend: '+12%'
                        },
                        { 
                            label: 'Pending Orders', 
                            value: orders.filter(o => o.status === 'pending').length, 
                            icon: <Clock className="w-5 h-5" />, 
                            color: 'from-yellow-600 to-orange-600',
                            trend: '-5%'
                        },
                        { 
                            label: 'Total Revenue', 
                            value: `$${orders.reduce((sum, o) => sum + o.total, 0).toFixed(2)}`, 
                            icon: <DollarSign className="w-5 h-5" />, 
                            color: 'from-blue-600 to-purple-600',
                            trend: '+18%'
                        },
                        { 
                            label: 'Avg Order Value', 
                            value: `$${(orders.reduce((sum, o) => sum + o.total, 0) / orders.length).toFixed(2)}`, 
                            icon: <TrendingUp className="w-5 h-5" />, 
                            color: 'from-purple-600 to-pink-600',
                            trend: '+8%'
                        }
                    ].map((stat, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                            className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10"
                        >
                            <div className="flex items-center justify-between mb-4">
                                <div className={`w-12 h-12 bg-gradient-to-r ${stat.color} rounded-xl flex items-center justify-center text-white`}>
                                    {stat.icon}
                                </div>
                                <span className={`text-sm font-medium ${stat.trend.startsWith('+') ? 'text-green-400' : 'text-red-400'}`}>
                                    {stat.trend}
                                </span>
                            </div>
                            <p className="text-3xl font-bold text-white mb-1">{stat.value}</p>
                            <p className="text-gray-400 text-sm">{stat.label}</p>
                        </motion.div>
                    ))}
                </div>

                {/* Filters */}
                <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 mb-8">
                    <div className="flex flex-col lg:flex-row gap-4">
                        {/* Search */}
                        <div className="flex-1">
                            <div className="relative">
                                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                                <input
                                    type="text"
                                    placeholder="Search by order number, customer, or email..."
                                    value={searchTerm}
                                    onChange={(e) => setSearchTerm(e.target.value)}
                                    className="w-full pl-10 pr-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-green-500"
                                />
                            </div>
                        </div>

                        {/* Status Filter */}
                        <select
                            value={filterStatus}
                            onChange={(e) => setFilterStatus(e.target.value)}
                            className="px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white focus:outline-none focus:border-green-500"
                        >
                            <option value="all">All Status</option>
                            <option value="pending">Pending</option>
                            <option value="processing">Processing</option>
                            <option value="shipped">Shipped</option>
                            <option value="delivered">Delivered</option>
                            <option value="cancelled">Cancelled</option>
                        </select>

                        {/* Payment Filter */}
                        <select
                            value={filterPayment}
                            onChange={(e) => setFilterPayment(e.target.value)}
                            className="px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white focus:outline-none focus:border-green-500"
                        >
                            <option value="all">All Payments</option>
                            <option value="paid">Paid</option>
                            <option value="pending">Pending</option>
                            <option value="failed">Failed</option>
                        </select>

                        {/* Date Range */}
                        <button className="px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white hover:bg-white/10 transition-colors flex items-center gap-2">
                            <Calendar className="w-4 h-4" />
                            Last 30 Days
                        </button>
                    </div>
                </div>

                {/* Orders Table */}
                <div className="bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 overflow-hidden">
                    <div className="overflow-x-auto">
                        <table className="w-full">
                            <thead>
                                <tr className="border-b border-white/10">
                                    <th className="px-6 py-4 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">Order</th>
                                    <th className="px-6 py-4 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">Customer</th>
                                    <th className="px-6 py-4 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">Date</th>
                                    <th className="px-6 py-4 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">Items</th>
                                    <th className="px-6 py-4 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">Total</th>
                                    <th className="px-6 py-4 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">Status</th>
                                    <th className="px-6 py-4 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">Payment</th>
                                    <th className="px-6 py-4 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">Shipping</th>
                                    <th className="px-6 py-4 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">Actions</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-white/10">
                                {filteredOrders.map((order) => (
                                    <motion.tr
                                        key={order.id}
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        className="hover:bg-white/5 transition-colors"
                                    >
                                        <td className="px-6 py-4 whitespace-nowrap">
                                            <span className="text-white font-medium">{order.orderNumber}</span>
                                        </td>
                                        <td className="px-6 py-4">
                                            <div>
                                                <div className="text-white">{order.customer}</div>
                                                <div className="text-gray-400 text-sm">{order.email}</div>
                                            </div>
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap">
                                            <span className="text-gray-300">{order.date}</span>
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap">
                                            <span className="text-gray-300">{order.items} items</span>
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap">
                                            <span className="text-white font-medium">${order.total.toFixed(2)}</span>
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap">
                                            {getStatusBadge(order.status)}
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap">
                                            {getPaymentBadge(order.paymentStatus)}
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap">
                                            <span className="text-gray-300 text-sm">{order.shippingMethod}</span>
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap">
                                            <button className="p-2 hover:bg-white/10 rounded-lg transition-colors text-gray-400 hover:text-white">
                                                <Eye className="w-4 h-4" />
                                            </button>
                                        </td>
                                    </motion.tr>
                                ))}
                            </tbody>
                        </table>
                    </div>

                    {/* Pagination */}
                    <div className="px-6 py-4 border-t border-white/10">
                        <div className="flex items-center justify-between">
                            <p className="text-gray-400 text-sm">
                                Showing 1 to {filteredOrders.length} of {orders.length} results
                            </p>
                            <div className="flex items-center gap-2">
                                <button className="px-3 py-1 bg-white/5 border border-white/10 rounded-lg text-gray-400 hover:bg-white/10 transition-colors">
                                    Previous
                                </button>
                                <button className="px-3 py-1 bg-green-600 text-white rounded-lg">
                                    1
                                </button>
                                <button className="px-3 py-1 bg-white/5 border border-white/10 rounded-lg text-gray-400 hover:bg-white/10 transition-colors">
                                    Next
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AdminOrders;