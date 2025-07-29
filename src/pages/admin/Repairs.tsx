import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
    Wrench,
    Plus,
    Search,
    Filter,
    Clock,
    CheckCircle,
    AlertCircle,
    XCircle,
    Eye,
    Edit,
    Calendar,
    User,
    Smartphone,
    ArrowLeft,
    TrendingUp,
    DollarSign
} from 'lucide-react';
import {
    IconTools,
    IconDeviceMobile,
    IconDeviceLaptop,
    IconClock,
    IconAlertTriangle
} from '@tabler/icons-react';

interface Repair {
    id: string;
    jobNumber: string;
    customer: string;
    device: string;
    deviceType: 'smartphone' | 'laptop' | 'tablet' | 'desktop';
    issue: string;
    status: 'pending' | 'diagnosed' | 'in-progress' | 'completed' | 'cancelled';
    priority: 'low' | 'medium' | 'high' | 'urgent';
    technician: string;
    createdAt: string;
    estimatedCost: number;
}

const AdminRepairs: React.FC = () => {
    const [repairs] = useState<Repair[]>([
        {
            id: '1',
            jobNumber: 'REP-2024-001',
            customer: 'John Doe',
            device: 'iPhone 15 Pro',
            deviceType: 'smartphone',
            issue: 'Cracked screen',
            status: 'in-progress',
            priority: 'high',
            technician: 'Mike Tech',
            createdAt: '2024-01-15',
            estimatedCost: 199
        },
        {
            id: '2',
            jobNumber: 'REP-2024-002',
            customer: 'Jane Smith',
            device: 'MacBook Pro M3',
            deviceType: 'laptop',
            issue: 'Battery replacement',
            status: 'diagnosed',
            priority: 'medium',
            technician: 'Sarah Fix',
            createdAt: '2024-01-15',
            estimatedCost: 299
        },
        {
            id: '3',
            jobNumber: 'REP-2024-003',
            customer: 'Bob Johnson',
            device: 'iPad Air',
            deviceType: 'tablet',
            issue: 'Water damage',
            status: 'pending',
            priority: 'urgent',
            technician: 'Unassigned',
            createdAt: '2024-01-16',
            estimatedCost: 0
        },
        {
            id: '4',
            jobNumber: 'REP-2024-004',
            customer: 'Alice Brown',
            device: 'Dell XPS 15',
            deviceType: 'laptop',
            issue: 'Keyboard not working',
            status: 'completed',
            priority: 'low',
            technician: 'Mike Tech',
            createdAt: '2024-01-14',
            estimatedCost: 149
        }
    ]);

    const [searchTerm, setSearchTerm] = useState('');
    const [filterStatus, setFilterStatus] = useState('all');
    const [filterPriority, setFilterPriority] = useState('all');

    const filteredRepairs = repairs.filter(repair => {
        const matchesSearch = 
            repair.jobNumber.toLowerCase().includes(searchTerm.toLowerCase()) ||
            repair.customer.toLowerCase().includes(searchTerm.toLowerCase()) ||
            repair.device.toLowerCase().includes(searchTerm.toLowerCase());
        const matchesStatus = filterStatus === 'all' || repair.status === filterStatus;
        const matchesPriority = filterPriority === 'all' || repair.priority === filterPriority;
        return matchesSearch && matchesStatus && matchesPriority;
    });

    const getStatusBadge = (status: string) => {
        const statusConfig = {
            'pending': { color: 'bg-yellow-500/20 text-yellow-400', icon: <Clock className="w-3 h-3" />, label: 'Pending' },
            'diagnosed': { color: 'bg-blue-500/20 text-blue-400', icon: <AlertCircle className="w-3 h-3" />, label: 'Diagnosed' },
            'in-progress': { color: 'bg-purple-500/20 text-purple-400', icon: <Wrench className="w-3 h-3" />, label: 'In Progress' },
            'completed': { color: 'bg-green-500/20 text-green-400', icon: <CheckCircle className="w-3 h-3" />, label: 'Completed' },
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

    const getPriorityBadge = (priority: string) => {
        const priorityConfig = {
            'low': 'bg-gray-500/20 text-gray-400',
            'medium': 'bg-blue-500/20 text-blue-400',
            'high': 'bg-orange-500/20 text-orange-400',
            'urgent': 'bg-red-500/20 text-red-400'
        };

        return (
            <span className={`px-2 py-1 ${priorityConfig[priority as keyof typeof priorityConfig]} rounded-full text-xs capitalize`}>
                {priority}
            </span>
        );
    };

    const getDeviceIcon = (deviceType: string) => {
        switch (deviceType) {
            case 'smartphone':
                return <IconDeviceMobile className="w-5 h-5 text-gray-400" />;
            case 'laptop':
                return <IconDeviceLaptop className="w-5 h-5 text-gray-400" />;
            case 'tablet':
                return <Smartphone className="w-5 h-5 text-gray-400" />;
            default:
                return <IconDeviceMobile className="w-5 h-5 text-gray-400" />;
        }
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
                            <h1 className="text-2xl font-bold text-white">Repair Jobs Management</h1>
                        </div>
                        <Link to="/admin/repairs/new">
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="px-4 py-2 bg-gradient-to-r from-orange-600 to-red-600 text-white rounded-lg font-medium shadow-lg hover:shadow-xl transition-all duration-300 flex items-center gap-2"
                            >
                                <Plus className="w-4 h-4" />
                                New Repair Job
                            </motion.button>
                        </Link>
                    </div>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                {/* Stats Cards */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
                    {[
                        { 
                            label: 'Total Repairs', 
                            value: repairs.length, 
                            icon: <Wrench className="w-5 h-5" />, 
                            color: 'from-orange-600 to-red-600' 
                        },
                        { 
                            label: 'In Progress', 
                            value: repairs.filter(r => r.status === 'in-progress').length, 
                            icon: <Clock className="w-5 h-5" />, 
                            color: 'from-purple-600 to-pink-600' 
                        },
                        { 
                            label: 'Completed Today', 
                            value: repairs.filter(r => r.status === 'completed').length, 
                            icon: <CheckCircle className="w-5 h-5" />, 
                            color: 'from-green-600 to-emerald-600' 
                        },
                        { 
                            label: 'Revenue Today', 
                            value: `$${repairs.filter(r => r.status === 'completed').reduce((sum, r) => sum + r.estimatedCost, 0)}`, 
                            icon: <DollarSign className="w-5 h-5" />, 
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
                                    placeholder="Search by job number, customer, or device..."
                                    value={searchTerm}
                                    onChange={(e) => setSearchTerm(e.target.value)}
                                    className="w-full pl-10 pr-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-orange-500"
                                />
                            </div>
                        </div>

                        {/* Status Filter */}
                        <select
                            value={filterStatus}
                            onChange={(e) => setFilterStatus(e.target.value)}
                            className="px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white focus:outline-none focus:border-orange-500"
                        >
                            <option value="all">All Status</option>
                            <option value="pending">Pending</option>
                            <option value="diagnosed">Diagnosed</option>
                            <option value="in-progress">In Progress</option>
                            <option value="completed">Completed</option>
                            <option value="cancelled">Cancelled</option>
                        </select>

                        {/* Priority Filter */}
                        <select
                            value={filterPriority}
                            onChange={(e) => setFilterPriority(e.target.value)}
                            className="px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white focus:outline-none focus:border-orange-500"
                        >
                            <option value="all">All Priority</option>
                            <option value="low">Low</option>
                            <option value="medium">Medium</option>
                            <option value="high">High</option>
                            <option value="urgent">Urgent</option>
                        </select>
                    </div>
                </div>

                {/* Repairs Table */}
                <div className="bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 overflow-hidden">
                    <div className="overflow-x-auto">
                        <table className="w-full">
                            <thead>
                                <tr className="border-b border-white/10">
                                    <th className="px-6 py-4 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">Job Number</th>
                                    <th className="px-6 py-4 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">Customer</th>
                                    <th className="px-6 py-4 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">Device</th>
                                    <th className="px-6 py-4 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">Issue</th>
                                    <th className="px-6 py-4 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">Status</th>
                                    <th className="px-6 py-4 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">Priority</th>
                                    <th className="px-6 py-4 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">Technician</th>
                                    <th className="px-6 py-4 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">Est. Cost</th>
                                    <th className="px-6 py-4 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">Actions</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-white/10">
                                {filteredRepairs.map((repair) => (
                                    <motion.tr
                                        key={repair.id}
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        className="hover:bg-white/5 transition-colors"
                                    >
                                        <td className="px-6 py-4 whitespace-nowrap">
                                            <div className="flex items-center gap-2">
                                                <span className="text-white font-medium">{repair.jobNumber}</span>
                                            </div>
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap">
                                            <div className="flex items-center gap-2">
                                                <User className="w-4 h-4 text-gray-400" />
                                                <span className="text-gray-300">{repair.customer}</span>
                                            </div>
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap">
                                            <div className="flex items-center gap-2">
                                                {getDeviceIcon(repair.deviceType)}
                                                <span className="text-gray-300">{repair.device}</span>
                                            </div>
                                        </td>
                                        <td className="px-6 py-4">
                                            <span className="text-gray-300">{repair.issue}</span>
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap">
                                            {getStatusBadge(repair.status)}
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap">
                                            {getPriorityBadge(repair.priority)}
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap">
                                            <span className="text-gray-300">{repair.technician}</span>
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap">
                                            <span className="text-white font-medium">
                                                {repair.estimatedCost > 0 ? `$${repair.estimatedCost}` : '-'}
                                            </span>
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap">
                                            <div className="flex items-center gap-2">
                                                <button className="p-2 hover:bg-white/10 rounded-lg transition-colors text-gray-400 hover:text-white">
                                                    <Eye className="w-4 h-4" />
                                                </button>
                                                <button className="p-2 hover:bg-white/10 rounded-lg transition-colors text-gray-400 hover:text-white">
                                                    <Edit className="w-4 h-4" />
                                                </button>
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
                                Showing 1 to {filteredRepairs.length} of {repairs.length} results
                            </p>
                            <div className="flex items-center gap-2">
                                <button className="px-3 py-1 bg-white/5 border border-white/10 rounded-lg text-gray-400 hover:bg-white/10 transition-colors">
                                    Previous
                                </button>
                                <button className="px-3 py-1 bg-orange-600 text-white rounded-lg">
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

export default AdminRepairs;