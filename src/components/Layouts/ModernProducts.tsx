import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { 
    ShoppingBag, 
    Star, 
    ArrowRight, 
    Check,
    Zap,
    Shield,
    Package,
    Truck,
    CreditCard,
    Award,
    Filter,
    Grid,
    List,
    ChevronRight,
    Sparkles
} from 'lucide-react';
import {
    IconBrandApple,
    IconBrandWindows,
    IconBrandAndroid,
    IconDeviceMobile,
    IconDeviceLaptop,
    IconDeviceTablet,
    IconDeviceWatch,
    IconHeadphones,
    IconDeviceGamepad,
    IconDeviceDesktop,
    IconMouse,
    IconKeyboard
} from '@tabler/icons-react';

const categories = [
    { id: 'all', name: 'All Products', icon: <Grid className="w-5 h-5" /> },
    { id: 'phones', name: 'Smartphones', icon: <IconDeviceMobile className="w-5 h-5" /> },
    { id: 'laptops', name: 'Laptops', icon: <IconDeviceLaptop className="w-5 h-5" /> },
    { id: 'tablets', name: 'Tablets', icon: <IconDeviceTablet className="w-5 h-5" /> },
    { id: 'accessories', name: 'Accessories', icon: <IconHeadphones className="w-5 h-5" /> }
];

const products = [
    {
        id: 1,
        category: 'phones',
        name: 'iPhone 15 Pro Max',
        brand: 'Apple',
        price: 1199,
        originalPrice: 1299,
        rating: 4.9,
        reviews: 324,
        image: '/api/placeholder/300/300',
        icon: <IconBrandApple className="w-6 h-6" />,
        features: ['A17 Pro Chip', '256GB Storage', '48MP Camera', '5G Support'],
        badge: 'Bestseller',
        gradient: 'from-gray-900 to-gray-700'
    },
    {
        id: 2,
        category: 'phones',
        name: 'Samsung Galaxy S24 Ultra',
        brand: 'Samsung',
        price: 1099,
        originalPrice: 1199,
        rating: 4.8,
        reviews: 256,
        image: '/api/placeholder/300/300',
        icon: <IconBrandAndroid className="w-6 h-6" />,
        features: ['Snapdragon 8 Gen 3', '512GB Storage', '200MP Camera', 'S Pen'],
        badge: 'New',
        gradient: 'from-blue-600 to-purple-600'
    },
    {
        id: 3,
        category: 'laptops',
        name: 'MacBook Pro 16"',
        brand: 'Apple',
        price: 2499,
        originalPrice: 2699,
        rating: 5.0,
        reviews: 189,
        image: '/api/placeholder/300/300',
        icon: <IconBrandApple className="w-6 h-6" />,
        features: ['M3 Max Chip', '32GB RAM', '1TB SSD', 'ProMotion Display'],
        badge: 'Premium',
        gradient: 'from-gray-800 to-gray-600'
    },
    {
        id: 4,
        category: 'laptops',
        name: 'Dell XPS 15',
        brand: 'Dell',
        price: 1799,
        originalPrice: 1999,
        rating: 4.7,
        reviews: 142,
        image: '/api/placeholder/300/300',
        icon: <IconBrandWindows className="w-6 h-6" />,
        features: ['Intel i9', '32GB RAM', 'RTX 4060', '4K Display'],
        badge: 'Hot Deal',
        gradient: 'from-indigo-600 to-blue-600'
    },
    {
        id: 5,
        category: 'tablets',
        name: 'iPad Pro 12.9"',
        brand: 'Apple',
        price: 1099,
        originalPrice: 1199,
        rating: 4.9,
        reviews: 267,
        image: '/api/placeholder/300/300',
        icon: <IconBrandApple className="w-6 h-6" />,
        features: ['M2 Chip', '256GB Storage', 'Face ID', 'Apple Pencil Support'],
        badge: 'Popular',
        gradient: 'from-gray-700 to-gray-500'
    },
    {
        id: 6,
        category: 'accessories',
        name: 'AirPods Pro 2',
        brand: 'Apple',
        price: 249,
        originalPrice: 279,
        rating: 4.8,
        reviews: 523,
        image: '/api/placeholder/300/300',
        icon: <IconHeadphones className="w-6 h-6" />,
        features: ['Active Noise Cancellation', 'Spatial Audio', '6hr Battery', 'MagSafe'],
        badge: 'Trending',
        gradient: 'from-white to-gray-200'
    }
];

const ModernProducts: React.FC = () => {
    const [selectedCategory, setSelectedCategory] = useState('all');
    const [hoveredProduct, setHoveredProduct] = useState<number | null>(null);
    const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true });

    const filteredProducts = selectedCategory === 'all' 
        ? products 
        : products.filter(p => p.category === selectedCategory);

    return (
        <section id="products" className="py-24 bg-gradient-to-b from-slate-900 via-slate-950 to-slate-900 relative overflow-hidden">
            {/* Background Elements */}
            <div className="absolute inset-0">
                <div className="absolute top-1/3 left-0 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>
                <div className="absolute bottom-1/3 right-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:4rem_4rem]"></div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <motion.div
                        initial={{ scale: 0 }}
                        whileInView={{ scale: 1 }}
                        viewport={{ once: true }}
                        className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-purple-600/20 to-blue-600/20 rounded-full border border-purple-500/20 mb-4"
                    >
                        <ShoppingBag className="w-4 h-4 text-purple-400" />
                        <span className="text-sm text-purple-300 font-medium">Premium Products</span>
                    </motion.div>
                    
                    <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">
                        Latest Tech
                        <span className="block bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                            At Best Prices
                        </span>
                    </h2>
                    
                    <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                        Discover our curated collection of premium devices and accessories from world-leading brands
                    </p>
                </motion.div>

                {/* Features Bar */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-12"
                >
                    {[
                        { icon: <Truck className="w-5 h-5" />, text: 'Free Shipping', subtext: 'On orders over $50' },
                        { icon: <Shield className="w-5 h-5" />, text: 'Warranty', subtext: '1 year protection' },
                        { icon: <CreditCard className="w-5 h-5" />, text: 'Secure Payment', subtext: '100% encrypted' },
                        { icon: <Award className="w-5 h-5" />, text: 'Best Quality', subtext: 'Genuine products' }
                    ].map((feature, index) => (
                        <motion.div
                            key={index}
                            whileHover={{ scale: 1.05 }}
                            className="flex items-center gap-3 p-4 bg-white/5 rounded-2xl border border-white/10 hover:bg-white/10 transition-all duration-300"
                        >
                            <div className="text-blue-400">{feature.icon}</div>
                            <div>
                                <div className="text-white font-medium text-sm">{feature.text}</div>
                                <div className="text-gray-500 text-xs">{feature.subtext}</div>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>

                {/* Category Filter */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="flex flex-wrap justify-center gap-3 mb-12"
                >
                    {categories.map((category) => (
                        <motion.button
                            key={category.id}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            onClick={() => setSelectedCategory(category.id)}
                            className={`flex items-center gap-2 px-6 py-3 rounded-xl font-medium transition-all duration-300 ${
                                selectedCategory === category.id
                                    ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg shadow-blue-500/25'
                                    : 'bg-white/5 text-gray-400 border border-white/10 hover:bg-white/10 hover:text-white'
                            }`}
                        >
                            {category.icon}
                            <span>{category.name}</span>
                        </motion.button>
                    ))}
                </motion.div>

                {/* Products Grid */}
                <div ref={ref} className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    <AnimatePresence mode="wait">
                        {filteredProducts.map((product, index) => (
                            <motion.div
                                key={product.id}
                                layout
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.8 }}
                                transition={{ delay: index * 0.1 }}
                                onMouseEnter={() => setHoveredProduct(product.id)}
                                onMouseLeave={() => setHoveredProduct(null)}
                                className="group relative"
                            >
                                <div className="relative h-full bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm rounded-3xl border border-white/10 p-6 overflow-hidden transition-all duration-300 hover:bg-white/10 hover:border-white/20">
                                    {/* Badge */}
                                    {product.badge && (
                                        <div className="absolute top-4 right-4 z-10">
                                            <div className="px-3 py-1 bg-gradient-to-r from-orange-500 to-red-500 text-white text-xs font-bold rounded-full shadow-lg">
                                                {product.badge}
                                            </div>
                                        </div>
                                    )}

                                    {/* Product Image */}
                                    <div className="relative mb-6 overflow-hidden rounded-2xl bg-gradient-to-br from-gray-800 to-gray-900 p-8">
                                        <motion.div
                                            animate={{
                                                scale: hoveredProduct === product.id ? 1.1 : 1,
                                                rotate: hoveredProduct === product.id ? 5 : 0
                                            }}
                                            transition={{ duration: 0.3 }}
                                            className="relative z-10"
                                        >
                                            <div className={`w-32 h-32 mx-auto bg-gradient-to-br ${product.gradient} rounded-2xl flex items-center justify-center text-white`}>
                                                {product.icon}
                                            </div>
                                        </motion.div>
                                        
                                        {/* Glow Effect */}
                                        <motion.div
                                            animate={{
                                                opacity: hoveredProduct === product.id ? 1 : 0
                                            }}
                                            className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 blur-xl"
                                        />
                                    </div>

                                    {/* Product Info */}
                                    <div className="space-y-4">
                                        {/* Brand and Name */}
                                        <div>
                                            <div className="text-gray-400 text-sm mb-1">{product.brand}</div>
                                            <h3 className="text-xl font-bold text-white group-hover:text-blue-400 transition-colors">
                                                {product.name}
                                            </h3>
                                        </div>

                                        {/* Rating */}
                                        <div className="flex items-center gap-2">
                                            <div className="flex items-center gap-1">
                                                {[...Array(5)].map((_, i) => (
                                                    <Star
                                                        key={i}
                                                        className={`w-4 h-4 ${
                                                            i < Math.floor(product.rating)
                                                                ? 'fill-yellow-400 text-yellow-400'
                                                                : 'text-gray-600'
                                                        }`}
                                                    />
                                                ))}
                                            </div>
                                            <span className="text-sm text-gray-400">
                                                {product.rating} ({product.reviews})
                                            </span>
                                        </div>

                                        {/* Features */}
                                        <div className="space-y-2">
                                            {product.features.slice(0, 3).map((feature, idx) => (
                                                <div key={idx} className="flex items-center gap-2 text-sm text-gray-400">
                                                    <Check className="w-3 h-3 text-green-400" />
                                                    <span>{feature}</span>
                                                </div>
                                            ))}
                                        </div>

                                        {/* Price */}
                                        <div className="flex items-end justify-between pt-4 border-t border-white/10">
                                            <div>
                                                <div className="text-2xl font-bold text-white">
                                                    ${product.price}
                                                </div>
                                                <div className="text-sm text-gray-500 line-through">
                                                    ${product.originalPrice}
                                                </div>
                                            </div>
                                            <motion.button
                                                whileHover={{ scale: 1.05 }}
                                                whileTap={{ scale: 0.95 }}
                                                className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl font-medium shadow-lg hover:shadow-xl transition-all duration-300"
                                            >
                                                <ShoppingBag className="w-4 h-4" />
                                                <span>Add to Cart</span>
                                            </motion.button>
                                        </div>
                                    </div>

                                    {/* Hover Overlay */}
                                    <motion.div
                                        className="absolute inset-0 bg-gradient-to-t from-blue-600/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                                    />
                                </div>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </div>

                {/* View All CTA */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mt-16"
                >
                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="inline-flex items-center gap-3 px-8 py-4 bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl text-white font-medium hover:bg-white/10 transition-all duration-300 group"
                    >
                        <span>View All Products</span>
                        <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl" />
                    </motion.button>
                </motion.div>
            </div>
        </section>
    );
};

export default ModernProducts;