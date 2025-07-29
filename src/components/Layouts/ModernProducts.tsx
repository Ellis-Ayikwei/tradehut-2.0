import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

interface Product {
    id: string;
    name: string;
    category: 'smartphones' | 'laptops' | 'tablets' | 'accessories';
    price: number;
    originalPrice?: number;
    image: string;
    rating: number;
    reviews: number;
    features: string[];
    badge?: string;
    inStock: boolean;
}

const products: Product[] = [
    {
        id: '1',
        name: 'iPhone 15 Pro Max',
        category: 'smartphones',
        price: 8999,
        originalPrice: 9999,
        image: '/assets/images/products/iphone-15-pro.jpg',
        rating: 4.9,
        reviews: 256,
        features: ['A17 Pro Chip', '48MP Camera', '5G Ready', '1TB Storage'],
        badge: 'Best Seller',
        inStock: true
    },
    {
        id: '2',
        name: 'MacBook Pro 16"',
        category: 'laptops',
        price: 15999,
        originalPrice: 17999,
        image: '/assets/images/products/macbook-pro.jpg',
        rating: 4.8,
        reviews: 189,
        features: ['M3 Max Chip', '64GB RAM', '2TB SSD', '16" Liquid Retina'],
        badge: 'New Arrival',
        inStock: true
    },
    {
        id: '3',
        name: 'iPad Pro 12.9"',
        category: 'tablets',
        price: 7499,
        originalPrice: 8499,
        image: '/assets/images/products/ipad-pro.jpg',
        rating: 4.7,
        reviews: 142,
        features: ['M2 Chip', '12.9" Display', 'Apple Pencil', '1TB Storage'],
        inStock: true
    },
    {
        id: '4',
        name: 'Samsung Galaxy S24 Ultra',
        category: 'smartphones',
        price: 7999,
        originalPrice: 8999,
        image: '/assets/images/products/galaxy-s24.jpg',
        rating: 4.6,
        reviews: 98,
        features: ['Snapdragon 8 Gen 3', '200MP Camera', 'S Pen', '512GB Storage'],
        inStock: true
    },
    {
        id: '5',
        name: 'Dell XPS 15',
        category: 'laptops',
        price: 12999,
        image: '/assets/images/products/dell-xps.jpg',
        rating: 4.5,
        reviews: 76,
        features: ['Intel i7-13700H', '32GB RAM', 'RTX 4060', '1TB SSD'],
        inStock: true
    },
    {
        id: '6',
        name: 'AirPods Pro (3rd Gen)',
        category: 'accessories',
        price: 1499,
        originalPrice: 1799,
        image: '/assets/images/products/airpods-pro.jpg',
        rating: 4.8,
        reviews: 324,
        features: ['Active Noise Cancellation', 'Spatial Audio', 'MagSafe Case', '6hr Battery'],
        badge: 'Popular',
        inStock: true
    }
];

const categories = [
    { id: 'all', name: 'All Products', icon: 'fas fa-th-large' },
    { id: 'smartphones', name: 'Smartphones', icon: 'fas fa-mobile-alt' },
    { id: 'laptops', name: 'Laptops', icon: 'fas fa-laptop' },
    { id: 'tablets', name: 'Tablets', icon: 'fas fa-tablet-alt' },
    { id: 'accessories', name: 'Accessories', icon: 'fas fa-headphones' }
];

const ModernProducts: React.FC = () => {
    const [activeCategory, setActiveCategory] = useState('all');
    const [hoveredProduct, setHoveredProduct] = useState<string | null>(null);
    const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true });

    const filteredProducts = activeCategory === 'all' 
        ? products 
        : products.filter(product => product.category === activeCategory);

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.5,
                ease: "easeOut"
            }
        }
    };

    const ProductCard: React.FC<{ product: Product }> = ({ product }) => (
        <motion.div
            layout
            variants={itemVariants}
            className="group relative bg-white rounded-3xl shadow-lg border border-gray-100 overflow-hidden hover:shadow-2xl transition-all duration-500"
            onHoverStart={() => setHoveredProduct(product.id)}
            onHoverEnd={() => setHoveredProduct(null)}
            whileHover={{ y: -8 }}
        >
            {/* Badge */}
            {product.badge && (
                <div className="absolute top-4 left-4 z-10 px-3 py-1 bg-gradient-to-r from-orange-500 to-red-500 text-white text-xs font-bold rounded-full">
                    {product.badge}
                </div>
            )}

            {/* Discount Badge */}
            {product.originalPrice && (
                <div className="absolute top-4 right-4 z-10 px-3 py-1 bg-green-500 text-white text-xs font-bold rounded-full">
                    -{Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)}%
                </div>
            )}

            {/* Product Image */}
            <div className="relative aspect-square overflow-hidden bg-gradient-to-br from-gray-50 to-gray-100">
                <motion.img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.src = `https://via.placeholder.com/400x400/f3f4f6/6b7280?text=${encodeURIComponent(product.name)}`;
                    }}
                />
                
                {/* Overlay */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: hoveredProduct === product.id ? 1 : 0 }}
                    className="absolute inset-0 bg-black/20 flex items-center justify-center"
                >
                    <motion.button
                        initial={{ scale: 0 }}
                        animate={{ scale: hoveredProduct === product.id ? 1 : 0 }}
                        className="px-6 py-3 bg-white text-gray-900 rounded-2xl font-semibold shadow-2xl hover:bg-gray-50 transition-colors"
                    >
                        <i className="fas fa-eye mr-2"></i>
                        Quick View
                    </motion.button>
                </motion.div>
            </div>

            {/* Product Info */}
            <div className="p-6">
                {/* Rating */}
                <div className="flex items-center space-x-2 mb-3">
                    <div className="flex space-x-1">
                        {[...Array(5)].map((_, i) => (
                            <i
                                key={i}
                                className={`fas fa-star text-sm ${
                                    i < Math.floor(product.rating) ? 'text-yellow-400' : 'text-gray-300'
                                }`}
                            ></i>
                        ))}
                    </div>
                    <span className="text-sm text-gray-600">
                        {product.rating} ({product.reviews})
                    </span>
                </div>

                {/* Product Name */}
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                    {product.name}
                </h3>

                {/* Features */}
                <div className="mb-4">
                    <div className="flex flex-wrap gap-1">
                        {product.features.slice(0, 2).map((feature, index) => (
                            <span
                                key={index}
                                className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-full"
                            >
                                {feature}
                            </span>
                        ))}
                        {product.features.length > 2 && (
                            <span className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-full">
                                +{product.features.length - 2} more
                            </span>
                        )}
                    </div>
                </div>

                {/* Price */}
                <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-2">
                        <span className="text-2xl font-bold text-gray-900">
                            GH₵ {product.price.toLocaleString()}
                        </span>
                        {product.originalPrice && (
                            <span className="text-lg text-gray-500 line-through">
                                GH₵ {product.originalPrice.toLocaleString()}
                            </span>
                        )}
                    </div>
                    <div className={`px-2 py-1 rounded-full text-xs font-medium ${
                        product.inStock 
                            ? 'bg-green-100 text-green-600' 
                            : 'bg-red-100 text-red-600'
                    }`}>
                        {product.inStock ? 'In Stock' : 'Out of Stock'}
                    </div>
                </div>

                {/* Actions */}
                <div className="flex space-x-2">
                    <motion.button
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        className="flex-1 px-4 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-2xl font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-blue-500/25"
                    >
                        <i className="fas fa-shopping-cart mr-2"></i>
                        Add to Cart
                    </motion.button>
                    <motion.button
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        className="p-3 border-2 border-gray-200 text-gray-600 rounded-2xl hover:border-red-300 hover:text-red-500 transition-colors"
                    >
                        <i className="fas fa-heart"></i>
                    </motion.button>
                </div>
            </div>
        </motion.div>
    );

    return (
        <section id="products" className="py-24 bg-gradient-to-br from-white to-gray-50 relative overflow-hidden">
            {/* Background Elements */}
            <div className="absolute inset-0">
                <div className="absolute top-0 right-0 w-96 h-96 bg-purple-200/30 rounded-full blur-3xl"></div>
                <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-200/30 rounded-full blur-3xl"></div>
            </div>

            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <motion.div
                    ref={ref}
                    initial="hidden"
                    animate={inView ? "visible" : "hidden"}
                    variants={containerVariants}
                    className="text-center mb-16"
                >
                    <motion.div variants={itemVariants} className="inline-flex items-center space-x-2 bg-white/80 backdrop-blur-sm border border-purple-200 rounded-full px-6 py-3 mb-6">
                        <i className="fas fa-store text-purple-600"></i>
                        <span className="text-sm font-semibold text-gray-700">Our Products</span>
                    </motion.div>
                    
                    <motion.h2 variants={itemVariants} className="text-4xl md:text-6xl font-bold mb-6">
                        <span className="bg-gradient-to-r from-gray-900 via-purple-900 to-pink-900 bg-clip-text text-transparent">
                            Premium
                        </span>
                        <br />
                        <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                            Technology
                        </span>
                    </motion.h2>
                    
                    <motion.p variants={itemVariants} className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                        Discover our curated collection of premium devices and accessories from the world's leading technology brands.
                    </motion.p>
                </motion.div>

                {/* Category Filter */}
                <motion.div
                    initial="hidden"
                    animate={inView ? "visible" : "hidden"}
                    variants={containerVariants}
                    className="flex flex-wrap justify-center gap-3 mb-12"
                >
                    {categories.map((category) => (
                        <motion.button
                            key={category.id}
                            variants={itemVariants}
                            onClick={() => setActiveCategory(category.id)}
                            className={`px-6 py-3 rounded-2xl font-semibold transition-all duration-300 flex items-center space-x-2 ${
                                activeCategory === category.id
                                    ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-lg shadow-purple-500/25'
                                    : 'bg-white text-gray-700 border border-gray-200 hover:border-purple-300 hover:text-purple-600 hover:shadow-lg'
                            }`}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <i className={category.icon}></i>
                            <span>{category.name}</span>
                        </motion.button>
                    ))}
                </motion.div>

                {/* Products Grid */}
                <motion.div
                    layout
                    className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
                >
                    <AnimatePresence mode="wait">
                        {filteredProducts.map((product) => (
                            <ProductCard key={product.id} product={product} />
                        ))}
                    </AnimatePresence>
                </motion.div>

                {/* CTA Section */}
                <motion.div
                    initial="hidden"
                    animate={inView ? "visible" : "hidden"}
                    variants={containerVariants}
                    className="mt-20 text-center"
                >
                    <motion.div variants={itemVariants} className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-3xl p-12 text-white relative overflow-hidden">
                        {/* Background Pattern */}
                        <div className="absolute inset-0 opacity-10">
                            <div className="absolute top-0 left-0 w-32 h-32 bg-white rounded-full -translate-x-16 -translate-y-16"></div>
                            <div className="absolute bottom-0 right-0 w-48 h-48 bg-white rounded-full translate-x-24 translate-y-24"></div>
                        </div>

                        <div className="relative z-10">
                            <h3 className="text-3xl md:text-4xl font-bold mb-4">
                                Can't Find What You're Looking For?
                            </h3>
                            <p className="text-xl mb-8 opacity-90">
                                We source premium devices on demand. Let us know what you need.
                            </p>
                            <div className="flex flex-wrap justify-center gap-4">
                                <motion.button
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    className="px-8 py-4 bg-white text-purple-600 rounded-2xl font-semibold hover:bg-gray-50 transition-colors shadow-lg"
                                >
                                    <i className="fas fa-search mr-2"></i>
                                    Request Product
                                </motion.button>
                                <motion.button
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    className="px-8 py-4 border-2 border-white text-white rounded-2xl font-semibold hover:bg-white hover:text-purple-600 transition-colors"
                                >
                                    <i className="fas fa-phone mr-2"></i>
                                    Call Us
                                </motion.button>
                            </div>
                        </div>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
};

export default ModernProducts;