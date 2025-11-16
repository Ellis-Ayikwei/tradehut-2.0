import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Tooltip from '../../components/common/Tooltip';
import { 
    Users,
    Search,
    Filter,
    Eye,
    Edit,
    Ban,
    CheckCircle,
    XCircle,
    Shield,
    Mail,
    Phone,
    Calendar,
    ArrowLeft,
    Plus,
    Download,
    UserCheck,
    UserX
} from 'lucide-react';
import {
    IconUser,
    IconUserCheck,
    IconUserX,
    IconShieldCheck
} from '@tabler/icons-react';

interface User {
    id: string;
    name: string;
    email: string;
    phone: string;
    role: 'customer' | 'technician' | 'admin';
    status: 'active' | 'inactive' | 'suspended';
    joinDate: string;
    lastActive: string;
    orders: number;
    totalSpent: number;
    avatar: string;
}

const AdminUsers: React.FC = () => {
    const [users] = useState<User[]>([
        {
            id: '1',
            name: 'John Doe',
            email: 'john@example.com',
            phone: '+1 234 567 890',
            role: 'customer',
            status: 'active',
            joinDate: '2023-12-01',
            lastActive: '2 hours ago',
            orders: 12,
            totalSpent: 3456.78,
            avatar: '/api/placeholder/40/40'
        },
        {
            id: '2',
            name: 'Mike Tech',
            email: 'mike@techhub.com',
            phone: '+1 234 567 891',
            role: 'technician',
            status: 'active',
            joinDate: '2023-06-15',
            lastActive: '5 minutes ago',
            orders: 0,
            totalSpent: 0,
            avatar: '/api/placeholder/40/40'
        },
        {
            id: '3',
            name: 'Jane Smith',
            email: 'jane@example.com',
            phone: '+1 234 567 892',
            role: 'customer',
            status: 'inactive',
            joinDate: '2023-10-20',
            lastActive: '3 days ago',
            orders: 5,
            totalSpent: 1234.56,
            avatar: '/api/placeholder/40/40'
        },
        {
            id: '4',
            name: 'Admin User',
            email: 'admin@techhub.com',
            phone: '+1 234 567 893',
            role: 'admin',
            status: 'active',
            joinDate: '2023-01-01',
            lastActive: 'Online now',
            orders: 0,
            totalSpent: 0,
            avatar: '/api/placeholder/40/40'
        }
    ]);

    const [searchTerm, setSearchTerm] = useState('');
    const [filterRole, setFilterRole] = useState('all');
    const [filterStatus, setFilterStatus] = useState('all');

    const filteredUsers = users.filter(user => {
        const matchesSearch = 
            user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
            user.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
            user.phone.includes(searchTerm);
        const matchesRole = filterRole === 'all' || user.role === filterRole;
        const matchesStatus = filterStatus === 'all' || user.status === filterStatus;
        return matchesSearch && matchesRole && matchesStatus;
    });

    const getStatusBadge = (status: string) => {
        const statusConfig = {
            'active': { color: 'bg-green-500/20 text-green-400', icon: <CheckCircle className="w-3 h-3" /> },
            'inactive': { color: 'bg-gray-500/20 text-gray-400', icon: <XCircle className="w-3 h-3" /> },
            'suspended': { color: 'bg-red-500/20 text-red-400', icon: <Ban className="w-3 h-3" /> }
        };

        const config = statusConfig[status as keyof typeof statusConfig];
        return (
            <span className={`inline-flex items-center gap-1 px-2 py-1 ${config.color} rounded-full text-xs`}>
                {config.icon}
                <span className="capitalize">{status}</span>
            </span>
        );
    };

    const getRoleBadge = (role: string) => {
        const roleConfig = {
            'customer': { color: 'bg-blue-500/20 text-blue-400', icon: <IconUser className="w-3 h-3" /> },
            'technician': { color: 'bg-purple-500/20 text-purple-400', icon: <IconUserCheck className="w-3 h-3" /> },
            'admin': { color: 'bg-orange-500/20 text-orange-400', icon: <IconShieldCheck className="w-3 h-3" /> }
        };

        const config = roleConfig[role as keyof typeof roleConfig];
        return (
            <span className={`inline-flex items-center gap-1 px-2 py-1 ${config.color} rounded-full text-xs`}>
                {config.icon}
                <span className="capitalize">{role}</span>
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
                            <h1 className="text-2xl font-bold text-white">Users Management</h1>
                        </div>
                        <div className="flex gap-3">
                            <button className="px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-white hover:bg-white/10 transition-colors flex items-center gap-2">
                                <Download className="w-4 h-4" />
                                Export
                            </button>
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="px-4 py-2 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-lg font-medium shadow-lg hover:shadow-xl transition-all duration-300 flex items-center gap-2"
                            >
                                <Plus className="w-4 h-4" />
                                Add User
                            </motion.button>
                        </div>
                    </div>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                {/* Stats Cards */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
                    {[
                        { 
                            label: 'Total Users', 
                            value: users.length, 
                            icon: <Users className="w-5 h-5" />, 
                            color: 'from-purple-600 to-pink-600' 
                        },
                        { 
                            label: 'Active Users', 
                            value: users.filter(u => u.status === 'active').length, 
                            icon: <UserCheck className="w-5 h-5" />, 
                            color: 'from-green-600 to-emerald-600' 
                        },
                        { 
                            label: 'Suspended', 
                            value: users.filter(u => u.status === 'suspended').length, 
                            icon: <UserX className="w-5 h-5" />, 
                            color: 'from-red-600 to-pink-600' 
                        },
                        { 
                            label: 'New This Month', 
                            value: 28, 
                            icon: <Calendar className="w-5 h-5" />, 
                            color: 'from-blue-600 to-cyan-600' 
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
                                <span className="text-3xl font-bold text-white">{stat.value}</span>
                            </div>
                            <p className="text-gray-400">{stat.label}</p>
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
                                    placeholder="Search by name, email, or phone..."
                                    value={searchTerm}
                                    onChange={(e) => setSearchTerm(e.target.value)}
                                    className="w-full pl-10 pr-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-purple-500"
                                />
                            </div>
                        </div>

                        {/* Role Filter */}
                        <select
                            value={filterRole}
                            onChange={(e) => setFilterRole(e.target.value)}
                            className="px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white focus:outline-none focus:border-purple-500"
                        >
                            <option value="all">All Roles</option>
                            <option value="customer">Customers</option>
                            <option value="technician">Technicians</option>
                            <option value="admin">Admins</option>
                        </select>

                        {/* Status Filter */}
                        <select
                            value={filterStatus}
                            onChange={(e) => setFilterStatus(e.target.value)}
                            className="px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white focus:outline-none focus:border-purple-500"
                        >
                            <option value="all">All Status</option>
                            <option value="active">Active</option>
                            <option value="inactive">Inactive</option>
                            <option value="suspended">Suspended</option>
                        </select>
                    </div>
                </div>

                {/* Users Table */}
                <div className="bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 overflow-hidden">
                    <div className="overflow-x-auto">
                        <table className="w-full">
                            <thead>
                                <tr className="border-b border-white/10">
                                    <th className="px-6 py-4 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">User</th>
                                    <th className="px-6 py-4 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">Contact</th>
                                    <th className="px-6 py-4 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">Role</th>
                                    <th className="px-6 py-4 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">Status</th>
                                    <th className="px-6 py-4 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">Joined</th>
                                    <th className="px-6 py-4 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">Last Active</th>
                                    <th className="px-6 py-4 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">Orders</th>
                                    <th className="px-6 py-4 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">Spent</th>
                                    <th className="px-6 py-4 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">Actions</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-white/10">
                                {filteredUsers.map((user) => (
                                    <motion.tr
                                        key={user.id}
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        className="hover:bg-white/5 transition-colors"
                                    >
                                        <td className="px-6 py-4 whitespace-nowrap">
                                            <div className="flex items-center gap-3">
                                                <img
                                                    src={user.avatar}
                                                    alt={user.name}
                                                    className="w-10 h-10 rounded-full object-cover"
                                                />
                                                <div>
                                                    <div className="text-white font-medium">{user.name}</div>
                                                    <div className="text-gray-400 text-sm">ID: {user.id}</div>
                                                </div>
                                            </div>
                                        </td>
                                        <td className="px-6 py-4">
                                            <div className="space-y-1">
                                                <div className="flex items-center gap-2 text-gray-300">
                                                    <Mail className="w-3 h-3 text-gray-500" />
                                                    <span className="text-sm">{user.email}</span>
                                                </div>
                                                <div className="flex items-center gap-2 text-gray-300">
                                                    <Phone className="w-3 h-3 text-gray-500" />
                                                    <span className="text-sm">{user.phone}</span>
                                                </div>
                                            </div>
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap">
                                            {getRoleBadge(user.role)}
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap">
                                            {getStatusBadge(user.status)}
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap">
                                            <span className="text-gray-300 text-sm">{user.joinDate}</span>
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap">
                                            <span className={`text-sm ${user.lastActive === 'Online now' ? 'text-green-400' : 'text-gray-400'}`}>
                                                {user.lastActive}
                                            </span>
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap">
                                            <span className="text-gray-300">{user.orders}</span>
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap">
                                            <span className="text-white font-medium">
                                                ${user.totalSpent.toFixed(2)}
                                            </span>
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap">
                                            <div className="flex items-center gap-2">
                                                <Tooltip content="View User Details">
                                                    <Link to={`/admin/users/view/${user.id}`}>
                                                        <button className="p-2 hover:bg-white/10 rounded-lg transition-colors text-gray-400 hover:text-white">
                                                            <Eye className="w-4 h-4" />
                                                        </button>
                                                    </Link>
                                                </Tooltip>
                                                <Tooltip content="Edit User">
                                                    <Link to={`/admin/users/edit/${user.id}`}>
                                                        <button className="p-2 hover:bg-white/10 rounded-lg transition-colors text-gray-400 hover:text-white">
                                                            <Edit className="w-4 h-4" />
                                                        </button>
                                                    </Link>
                                                </Tooltip>
                                                {user.status !== 'suspended' && (
                                                    <Tooltip content="Suspend User">
                                                        <button className="p-2 hover:bg-white/10 rounded-lg transition-colors text-gray-400 hover:text-red-400">
                                                            <Ban className="w-4 h-4" />
                                                        </button>
                                                    </Tooltip>
                                                )}
                                            </div>
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
                                Showing 1 to {filteredUsers.length} of {users.length} results
                            </p>
                            <div className="flex items-center gap-2">
                                <button className="px-3 py-1 bg-white/5 border border-white/10 rounded-lg text-gray-400 hover:bg-white/10 transition-colors">
                                    Previous
                                </button>
                                <button className="px-3 py-1 bg-purple-600 text-white rounded-lg">
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

export default AdminUsers;