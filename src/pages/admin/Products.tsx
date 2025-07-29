import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Tooltip from '../../components/common/Tooltip';
import { 
    Package, 
    Plus, 
    Search, 
    Filter, 
    Edit, 
    Trash2, 
    Eye,
    Download,
    Upload,
    DollarSign,
    TrendingUp,
    AlertCircle,
    CheckCircle,
    ArrowLeft
} from 'lucide-react';
import {
    IconPackage,
    IconPlus,
    IconEdit,
    IconTrash,
    IconEye
} from '@tabler/icons-react';

interface Product {
    id: string;
    name: string;
    category: string;
    price: number;
    stock: number;
    status: 'active' | 'inactive' | 'out-of-stock';
    image: string;
    sales: number;
}

const AdminProducts: React.FC = () => {
    const [products] = useState<Product[]>([
        {
            id: '1',
            name: 'iPhone 15 Pro Max',
            category: 'Smartphones',
            price: 1199,
            stock: 45,
            status: 'active',
            image: '/api/placeholder/100/100',
            sales: 23
        },
        {
            id: '2',
            name: 'MacBook Air M3',
            category: 'Laptops',
            price: 1299,
            stock: 12,
            status: 'active',
            image: '/api/placeholder/100/100',
            sales: 15
        },
        {
            id: '3',
            name: 'iPad Pro 12.9"',
            category: 'Tablets',
            price: 999,
            stock: 0,
            status: 'out-of-stock',
            image: '/api/placeholder/100/100',
            sales: 8
        },
        {
            id: '4',
            name: 'AirPods Pro 2',
            category: 'Accessories',
            price: 249,
            stock: 120,
            status: 'active',
            image: '/api/placeholder/100/100',
            sales: 67
        }
    ]);

    const [searchTerm, setSearchTerm] = useState('');
    const [filterCategory, setFilterCategory] = useState('all');

    const filteredProducts = products.filter(product => {
        const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase());
        const matchesCategory = filterCategory === 'all' || product.category === filterCategory;
        return matchesSearch && matchesCategory;
    });

    const getStatusBadge = (status: string) => {
        switch (status) {
            case 'active':
                return (
                    <span className="inline-flex items-center gap-1 px-2 py-1 bg-green-500/20 text-green-400 rounded-full text-xs">
                        <CheckCircle className="w-3 h-3" />
                        Active
                    </span>
                );
            case 'inactive':
                return (
                    <span className="inline-flex items-center gap-1 px-2 py-1 bg-gray-500/20 text-gray-400 rounded-full text-xs">
                        <AlertCircle className="w-3 h-3" />
                        Inactive
                    </span>
                );
            case 'out-of-stock':
                return (
                    <span className="inline-flex items-center gap-1 px-2 py-1 bg-red-500/20 text-red-400 rounded-full text-xs">
                        <AlertCircle className="w-3 h-3" />
                        Out of Stock
                    </span>
                );
            default:
                return null;
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
                            <h1 className="text-2xl font-bold text-white">Products Management</h1>
                        </div>
                        <Link to="/admin/products/new">
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="px-4 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg font-medium shadow-lg hover:shadow-xl transition-all duration-300 flex items-center gap-2"
                            >
                                <Plus className="w-4 h-4" />
                                Add Product
                            </motion.button>
                        </Link>
                    </div>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                {/* Stats Cards */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
                    {[
                        { label: 'Total Products', value: products.length, icon: <Package className="w-5 h-5" />, color: 'from-blue-600 to-cyan-600' },
                        { label: 'Active Products', value: products.filter(p => p.status === 'active').length, icon: <CheckCircle className="w-5 h-5" />, color: 'from-green-600 to-emerald-600' },
                        { label: 'Out of Stock', value: products.filter(p => p.status === 'out-of-stock').length, icon: <AlertCircle className="w-5 h-5" />, color: 'from-red-600 to-pink-600' },
                        { label: 'Total Sales', value: products.reduce((sum, p) => sum + p.sales, 0), icon: <TrendingUp className="w-5 h-5" />, color: 'from-purple-600 to-pink-600' }
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

                {/* Actions Bar */}
                <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 mb-8">
                    <div className="flex flex-col lg:flex-row gap-4">
                        {/* Search */}
                        <div className="flex-1">
                            <div className="relative">
                                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                                <input
                                    type="text"
                                    placeholder="Search products..."
                                    value={searchTerm}
                                    onChange={(e) => setSearchTerm(e.target.value)}
                                    className="w-full pl-10 pr-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-blue-500"
                                />
                            </div>
                        </div>

                        {/* Filter */}
                        <div className="flex gap-4">
                            <select
                                value={filterCategory}
                                onChange={(e) => setFilterCategory(e.target.value)}
                                className="px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white focus:outline-none focus:border-blue-500"
                            >
                                <option value="all">All Categories</option>
                                <option value="Smartphones">Smartphones</option>
                                <option value="Laptops">Laptops</option>
                                <option value="Tablets">Tablets</option>
                                <option value="Accessories">Accessories</option>
                            </select>

                            <button className="px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white hover:bg-white/10 transition-colors flex items-center gap-2">
                                <Upload className="w-4 h-4" />
                                Import
                            </button>

                            <button className="px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white hover:bg-white/10 transition-colors flex items-center gap-2">
                                <Download className="w-4 h-4" />
                                Export
                            </button>
                        </div>
                    </div>
                </div>

                {/* Products Table */}
                <div className="bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 overflow-hidden">
                    <div className="overflow-x-auto">
                        <table className="w-full">
                            <thead>
                                <tr className="border-b border-white/10">
                                    <th className="px-6 py-4 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">Product</th>
                                    <th className="px-6 py-4 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">Category</th>
                                    <th className="px-6 py-4 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">Price</th>
                                    <th className="px-6 py-4 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">Stock</th>
                                    <th className="px-6 py-4 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">Sales</th>
                                    <th className="px-6 py-4 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">Status</th>
                                    <th className="px-6 py-4 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">Actions</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-white/10">
                                {filteredProducts.map((product) => (
                                    <motion.tr
                                        key={product.id}
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        className="hover:bg-white/5 transition-colors"
                                    >
                                        <td className="px-6 py-4 whitespace-nowrap">
                                            <div className="flex items-center gap-3">
                                                <img
                                                    src={product.image}
                                                    alt={product.name}
                                                    className="w-10 h-10 rounded-lg object-cover"
                                                />
                                                <div>
                                                    <div className="text-white font-medium">{product.name}</div>
                                                    <div className="text-gray-400 text-sm">ID: {product.id}</div>
                                                </div>
                                            </div>
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap">
                                            <span className="text-gray-300">{product.category}</span>
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap">
                                            <span className="text-white font-medium">${product.price}</span>
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap">
                                            <span className={`font-medium ${product.stock === 0 ? 'text-red-400' : product.stock < 20 ? 'text-yellow-400' : 'text-green-400'}`}>
                                                {product.stock}
                                            </span>
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap">
                                            <span className="text-gray-300">{product.sales}</span>
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap">
                                            {getStatusBadge(product.status)}
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap">
                                            <div className="flex items-center gap-2">
                                                <Tooltip content="View Details">
                                                    <Link to={`/admin/products/view/${product.id}`}>
                                                        <button className="p-2 hover:bg-white/10 rounded-lg transition-colors text-gray-400 hover:text-white">
                                                            <Eye className="w-4 h-4" />
                                                        </button>
                                                    </Link>
                                                </Tooltip>
                                                <Tooltip content="Edit Product">
                                                    <Link to={`/admin/products/edit/${product.id}`}>
                                                        <button className="p-2 hover:bg-white/10 rounded-lg transition-colors text-gray-400 hover:text-white">
                                                            <Edit className="w-4 h-4" />
                                                        </button>
                                                    </Link>
                                                </Tooltip>
                                                <Tooltip content="Delete Product">
                                                    <button className="p-2 hover:bg-white/10 rounded-lg transition-colors text-gray-400 hover:text-red-400">
                                                        <Trash2 className="w-4 h-4" />
                                                    </button>
                                                </Tooltip>
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
                                Showing 1 to {filteredProducts.length} of {products.length} results
                            </p>
                            <div className="flex items-center gap-2">
                                <button className="px-3 py-1 bg-white/5 border border-white/10 rounded-lg text-gray-400 hover:bg-white/10 transition-colors">
                                    Previous
                                </button>
                                <button className="px-3 py-1 bg-blue-600 text-white rounded-lg">
                                    1
                                </button>
                                <button className="px-3 py-1 bg-white/5 border border-white/10 rounded-lg text-gray-400 hover:bg-white/10 transition-colors">
                                    2
                                </button>
                                <button className="px-3 py-1 bg-white/5 border border-white/10 rounded-lg text-gray-400 hover:bg-white/10 transition-colors">
                                    3
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

export default AdminProducts;