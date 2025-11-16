import React from 'react';
import { motion } from 'framer-motion';
import { Link, useParams } from 'react-router-dom';
import { 
    ArrowLeft,
    Edit,
    Trash2,
    Package,
    DollarSign,
    BarChart3,
    Calendar,
    User,
    Tag,
    Image as ImageIcon,
    CheckCircle,
    AlertCircle
} from 'lucide-react';

const ProductView: React.FC = () => {
    const { id } = useParams();

    // Mock product data - in real app, fetch from API
    const product = {
        id: id || '1',
        name: 'iPhone 15 Pro Max',
        category: 'Smartphones',
        brand: 'Apple',
        model: 'A2849',
        price: 1199,
        cost: 899,
        stock: 45,
        status: 'active',
        sku: 'IPH-15PM-256',
        barcode: '194253945291',
        description: 'The iPhone 15 Pro Max features a strong and light titanium design with Action button — a fast way to your favorite feature.',
        images: ['/api/placeholder/400/400'],
        specifications: {
            'Storage': '256GB',
            'Color': 'Natural Titanium',
            'Display': '6.7-inch Super Retina XDR',
            'Chip': 'A17 Pro chip',
            'Camera': '48MP Main | Ultra Wide | Telephoto',
            'Battery': 'Up to 29 hours video playback'
        },
        createdAt: '2024-01-01',
        updatedAt: '2024-01-15',
        sales: 23,
        revenue: 27577
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-950 to-slate-900">
            {/* Header */}
            <div className="bg-slate-900/50 backdrop-blur-sm border-b border-white/10">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
                    <div className="flex items-center justify-between">
                        <div className="flex items-center gap-4">
                            <Link to="/admin/products" className="p-2 hover:bg-white/10 rounded-lg transition-colors">
                                <ArrowLeft className="w-5 h-5 text-gray-400" />
                            </Link>
                            <div>
                                <h1 className="text-2xl font-bold text-white">Product Details</h1>
                                <p className="text-gray-400 text-sm">ID: {product.id}</p>
                            </div>
                        </div>
                        <div className="flex gap-3">
                            <Link to={`/admin/products/edit/${product.id}`}>
                                <motion.button
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    className="px-4 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg font-medium shadow-lg hover:shadow-xl transition-all duration-300 flex items-center gap-2"
                                >
                                    <Edit className="w-4 h-4" />
                                    Edit Product
                                </motion.button>
                            </Link>
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="px-4 py-2 bg-red-600/20 text-red-400 border border-red-600/50 rounded-lg font-medium hover:bg-red-600/30 transition-all duration-300 flex items-center gap-2"
                            >
                                <Trash2 className="w-4 h-4" />
                                Delete
                            </motion.button>
                        </div>
                    </div>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* Main Content */}
                    <div className="lg:col-span-2 space-y-8">
                        {/* Product Info */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10"
                        >
                            <div className="flex items-start gap-6">
                                <div className="w-32 h-32 bg-white/10 rounded-xl overflow-hidden">
                                    <img
                                        src={product.images[0]}
                                        alt={product.name}
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                                <div className="flex-1">
                                    <h2 className="text-2xl font-bold text-white mb-2">{product.name}</h2>
                                    <div className="flex items-center gap-4 mb-4">
                                        <span className="px-3 py-1 bg-blue-500/20 text-blue-400 rounded-full text-sm">
                                            {product.category}
                                        </span>
                                        <span className={`px-3 py-1 rounded-full text-sm ${
                                            product.status === 'active' 
                                                ? 'bg-green-500/20 text-green-400' 
                                                : 'bg-gray-500/20 text-gray-400'
                                        }`}>
                                            <CheckCircle className="w-3 h-3 inline mr-1" />
                                            {product.status}
                                        </span>
                                    </div>
                                    <p className="text-gray-300">{product.description}</p>
                                </div>
                            </div>
                        </motion.div>

                        {/* Specifications */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1 }}
                            className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10"
                        >
                            <h3 className="text-xl font-semibold text-white mb-4">Specifications</h3>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                {Object.entries(product.specifications).map(([key, value]) => (
                                    <div key={key} className="flex justify-between p-3 bg-white/5 rounded-lg">
                                        <span className="text-gray-400">{key}</span>
                                        <span className="text-white font-medium">{value}</span>
                                    </div>
                                ))}
                            </div>
                        </motion.div>

                        {/* Additional Info */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                            className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10"
                        >
                            <h3 className="text-xl font-semibold text-white mb-4">Additional Information</h3>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div className="space-y-3">
                                    <div>
                                        <p className="text-gray-400 text-sm">SKU</p>
                                        <p className="text-white font-medium">{product.sku}</p>
                                    </div>
                                    <div>
                                        <p className="text-gray-400 text-sm">Barcode</p>
                                        <p className="text-white font-medium">{product.barcode}</p>
                                    </div>
                                    <div>
                                        <p className="text-gray-400 text-sm">Brand</p>
                                        <p className="text-white font-medium">{product.brand}</p>
                                    </div>
                                </div>
                                <div className="space-y-3">
                                    <div>
                                        <p className="text-gray-400 text-sm">Model</p>
                                        <p className="text-white font-medium">{product.model}</p>
                                    </div>
                                    <div>
                                        <p className="text-gray-400 text-sm">Created Date</p>
                                        <p className="text-white font-medium">{product.createdAt}</p>
                                    </div>
                                    <div>
                                        <p className="text-gray-400 text-sm">Last Updated</p>
                                        <p className="text-white font-medium">{product.updatedAt}</p>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </div>

                    {/* Sidebar */}
                    <div className="space-y-6">
                        {/* Pricing */}
                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10"
                        >
                            <h3 className="text-lg font-semibold text-white mb-4">Pricing & Stock</h3>
                            <div className="space-y-4">
                                <div>
                                    <p className="text-gray-400 text-sm mb-1">Selling Price</p>
                                    <p className="text-3xl font-bold text-white">${product.price}</p>
                                </div>
                                <div>
                                    <p className="text-gray-400 text-sm mb-1">Cost Price</p>
                                    <p className="text-xl text-gray-300">${product.cost}</p>
                                </div>
                                <div>
                                    <p className="text-gray-400 text-sm mb-1">Profit Margin</p>
                                    <p className="text-xl text-green-400">
                                        ${product.price - product.cost} ({((product.price - product.cost) / product.cost * 100).toFixed(1)}%)
                                    </p>
                                </div>
                                <div className="pt-4 border-t border-white/10">
                                    <p className="text-gray-400 text-sm mb-1">Current Stock</p>
                                    <p className={`text-2xl font-bold ${
                                        product.stock === 0 ? 'text-red-400' : 
                                        product.stock < 20 ? 'text-yellow-400' : 'text-green-400'
                                    }`}>
                                        {product.stock} units
                                    </p>
                                </div>
                            </div>
                        </motion.div>

                        {/* Sales Stats */}
                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.1 }}
                            className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10"
                        >
                            <h3 className="text-lg font-semibold text-white mb-4">Sales Statistics</h3>
                            <div className="space-y-4">
                                <div className="flex items-center justify-between">
                                    <div className="flex items-center gap-2">
                                        <Package className="w-5 h-5 text-gray-400" />
                                        <span className="text-gray-400">Total Sales</span>
                                    </div>
                                    <span className="text-white font-medium">{product.sales} units</span>
                                </div>
                                <div className="flex items-center justify-between">
                                    <div className="flex items-center gap-2">
                                        <DollarSign className="w-5 h-5 text-gray-400" />
                                        <span className="text-gray-400">Total Revenue</span>
                                    </div>
                                    <span className="text-white font-medium">${product.revenue.toLocaleString()}</span>
                                </div>
                                <div className="flex items-center justify-between">
                                    <div className="flex items-center gap-2">
                                        <BarChart3 className="w-5 h-5 text-gray-400" />
                                        <span className="text-gray-400">Avg. per Sale</span>
                                    </div>
                                    <span className="text-white font-medium">
                                        ${(product.revenue / product.sales).toFixed(2)}
                                    </span>
                                </div>
                            </div>
                        </motion.div>

                        {/* Quick Actions */}
                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.2 }}
                            className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10"
                        >
                            <h3 className="text-lg font-semibold text-white mb-4">Quick Actions</h3>
                            <div className="space-y-3">
                                <button className="w-full px-4 py-2 bg-white/10 text-white rounded-lg hover:bg-white/20 transition-all text-left">
                                    Duplicate Product
                                </button>
                                <button className="w-full px-4 py-2 bg-white/10 text-white rounded-lg hover:bg-white/20 transition-all text-left">
                                    View Sales History
                                </button>
                                <button className="w-full px-4 py-2 bg-white/10 text-white rounded-lg hover:bg-white/20 transition-all text-left">
                                    Print Barcode
                                </button>
                                <button className="w-full px-4 py-2 bg-white/10 text-white rounded-lg hover:bg-white/20 transition-all text-left">
                                    Export Data
                                </button>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductView;