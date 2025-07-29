import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
    faArrowRight, 
    faExternalLinkAlt,
    faCode,
    faMobile,
    faDesktop,
    faGlobe,
    faCheck,
    faStar,
    faTag,
    faRocket,
    faShoppingCart,
    faUserGraduate,
    faChartLine
} from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import GetApp from './GetApp';
import ContactModal from './ContactModal';

interface Product {
    title: string;
    description: string;
    image: string;
    technologies: string[];
    demoLink?: string;
    githubLink?: string;
    features: string[];
    category: 'web' | 'mobile' | 'desktop';
    status: 'completed' | 'in-progress' | 'maintenance';
    price?: string;
    icon: any;
    gradient: string;
    featured?: boolean;
}

const products: Product[] = [
    {
        title: 'School Management System',
        description: 'A comprehensive school management solution with modules for administration, teachers, students, and parents.',
        image: '/src/assets/images/products/school.jpg',
        technologies: ['React', 'Node.js', 'MongoDB', 'Express', 'Socket.io'],
        features: [
            'Student Information Management',
            'Attendance Tracking',
            'Grade Management',
            'Timetable Scheduling',
            'Fee Management',
            'Parent Communication Portal',
        ],
        category: 'web',
        status: 'completed',
        price: 'GH₵ 15,000',
        icon: faUserGraduate,
        gradient: 'from-blue-500 to-indigo-600',
        featured: true,
    },
    {
        title: 'TradeHut E-commerce',
        description: 'A full-featured e-commerce platform for electronic devices and accessories with modern UI/UX.',
        image: '/src/assets/images/products/tradehut.png',
        technologies: ['React', 'Node.js', 'MongoDB', 'Stripe', 'Tailwind CSS'],
        demoLink: 'https://tradehut.demo.com',
        githubLink: 'https://github.com/yourusername/tradehut',
        features: [
            'User Authentication',
            'Product Catalog',
            'Shopping Cart',
            'Payment Integration',
            'Order Tracking',
            'Admin Dashboard',
        ],
        category: 'web',
        status: 'completed',
        icon: faShoppingCart,
        gradient: 'from-purple-500 to-pink-600',
        featured: true,
    },
    {
        title: 'Sprout Collab',
        description: 'A collaborative project management platform focused on goal tracking and team productivity.',
        image: '/src/assets/images/products/sprout.png',
        technologies: ['React', 'TypeScript', 'Firebase', 'Tailwind CSS', 'Chart.js'],
        demoLink: 'https://sproutcollab.demo.com',
        githubLink: 'https://github.com/Ellis-Ayikwei/sprout-collab',
        features: [
            'Team Collaboration',
            'Goal Tracking',
            'Task Management',
            'Real-time Updates',
            'Progress Analytics',
            'Mobile Responsive',
        ],
        category: 'mobile',
        status: 'completed',
        icon: faChartLine,
        gradient: 'from-green-500 to-teal-600',
    },
];

const categoryIcons = {
    web: faGlobe,
    mobile: faMobile,
    desktop: faDesktop,
};

const statusColors = {
    completed: 'text-green-600 bg-green-100',
    'in-progress': 'text-yellow-600 bg-yellow-100',
    maintenance: 'text-red-600 bg-red-100',
};

const Products = () => {
    const [isGetAppOpen, setIsGetAppOpen] = useState(false);
    const [isContactModalOpen, setIsContactModalOpen] = useState(false);
    const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
    const [selectedCategory, setSelectedCategory] = useState<'all' | 'web' | 'mobile' | 'desktop'>('all');
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
    
    const { ref, inView } = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });

    const filteredProducts = selectedCategory === 'all' 
        ? products 
        : products.filter(p => p.category === selectedCategory);

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
            },
        },
    };

    const itemVariants = {
        hidden: { y: 50, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: {
                type: 'spring',
                stiffness: 100,
                damping: 15,
            },
        },
    };

    const handleUseApp = (product: Product) => {
        setSelectedProduct(product);
        setIsGetAppOpen(true);
    };

    const handleGetQuote = (product: Product) => {
        setSelectedProduct(product);
        setIsContactModalOpen(true);
    };

    return (
        <>
            <section id="products" className="relative py-20 lg:py-32 bg-gradient-to-b from-white to-gray-50 overflow-hidden">
                {/* Background Elements */}
                <div className="absolute inset-0 z-0">
                    <div className="absolute top-1/3 left-0 w-96 h-96 bg-purple-500/5 rounded-full filter blur-3xl" />
                    <div className="absolute bottom-1/3 right-0 w-96 h-96 bg-primary/5 rounded-full filter blur-3xl" />
                    <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width="60" height="60" xmlns="http://www.w3.org/2000/svg"%3E%3Cdefs%3E%3Cpattern id="grid" width="60" height="60" patternUnits="userSpaceOnUse"%3E%3Cpath d="M 60 0 L 0 0 0 60" fill="none" stroke="rgba(0,0,0,0.02)" stroke-width="1"/%3E%3C/pattern%3E%3C/defs%3E%3Crect width="100%25" height="100%25" fill="url(%23grid)"/%3E%3C/svg%3E')] opacity-50" />
                </div>

                <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
                    {/* Section Header */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={inView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.6 }}
                        className="text-center mb-16"
                    >
                        <span className="inline-block px-4 py-2 bg-purple-100 text-purple-700 font-semibold rounded-full text-sm mb-4">
                            Our Products
                        </span>
                        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                            Innovative Solutions
                            <span className="block bg-gradient-to-r from-purple-600 to-primary bg-clip-text text-transparent">
                                Built for Success
                            </span>
                        </h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            Explore our portfolio of cutting-edge applications designed to transform 
                            businesses and enhance user experiences.
                        </p>
                    </motion.div>

                    {/* Category Filter */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={inView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="flex flex-wrap justify-center gap-4 mb-12"
                    >
                        {['all', 'web', 'mobile', 'desktop'].map((category) => (
                            <motion.button
                                key={category}
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                onClick={() => setSelectedCategory(category as any)}
                                className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                                    selectedCategory === category
                                        ? 'bg-gradient-to-r from-purple-600 to-primary text-white shadow-lg'
                                        : 'bg-white text-gray-700 hover:bg-gray-100 shadow-md'
                                }`}
                            >
                                <FontAwesomeIcon 
                                    icon={category === 'all' ? faRocket : categoryIcons[category as keyof typeof categoryIcons]} 
                                    className="mr-2" 
                                />
                                {category.charAt(0).toUpperCase() + category.slice(1)}
                            </motion.button>
                        ))}
                    </motion.div>

                    {/* Products Grid */}
                    <motion.div
                        ref={ref}
                        variants={containerVariants}
                        initial="hidden"
                        animate={inView ? "visible" : "hidden"}
                        className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8"
                    >
                        <AnimatePresence mode="wait">
                            {filteredProducts.map((product, index) => (
                                <motion.div
                                    key={product.title}
                                    variants={itemVariants}
                                    layout
                                    onMouseEnter={() => setHoveredIndex(index)}
                                    onMouseLeave={() => setHoveredIndex(null)}
                                    className={`group relative bg-white rounded-3xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-500 ${
                                        product.featured ? 'ring-2 ring-purple-500 ring-offset-4' : ''
                                    }`}
                                >
                                    {/* Featured Badge */}
                                    {product.featured && (
                                        <div className="absolute top-4 right-4 z-10">
                                            <span className="px-3 py-1 bg-gradient-to-r from-purple-600 to-primary text-white text-xs font-bold rounded-full flex items-center gap-1">
                                                <FontAwesomeIcon icon={faStar} className="text-xs" />
                                                Featured
                                            </span>
                                        </div>
                                    )}

                                    {/* Image Section */}
                                    <div className="relative h-64 overflow-hidden">
                                        <div className={`absolute inset-0 bg-gradient-to-br ${product.gradient} opacity-90`} />
                                        <motion.div
                                            animate={{ scale: hoveredIndex === index ? 1.1 : 1 }}
                                            transition={{ duration: 0.3 }}
                                            className="absolute inset-0 flex items-center justify-center"
                                        >
                                            <FontAwesomeIcon 
                                                icon={product.icon} 
                                                className="text-white/20 text-8xl" 
                                            />
                                        </motion.div>
                                        {product.image && (
                                            <img
                                                src={product.image}
                                                alt={product.title}
                                                className="absolute inset-0 w-full h-full object-cover mix-blend-overlay opacity-50"
                                            />
                                        )}
                                        
                                        {/* Status Badge */}
                                        <div className="absolute top-4 left-4">
                                            <span className={`px-3 py-1 text-xs font-semibold rounded-full ${statusColors[product.status]}`}>
                                                {product.status.charAt(0).toUpperCase() + product.status.slice(1)}
                                            </span>
                                        </div>

                                        {/* Category Icon */}
                                        <div className="absolute bottom-4 right-4">
                                            <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center">
                                                <FontAwesomeIcon 
                                                    icon={categoryIcons[product.category]} 
                                                    className="text-white text-xl" 
                                                />
                                            </div>
                                        </div>
                                    </div>

                                    {/* Content */}
                                    <div className="p-8">
                                        <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-purple-600 transition-colors">
                                            {product.title}
                                        </h3>
                                        <p className="text-gray-600 mb-6 line-clamp-2">
                                            {product.description}
                                        </p>

                                        {/* Technologies */}
                                        <div className="flex flex-wrap gap-2 mb-6">
                                            {product.technologies.slice(0, 3).map((tech) => (
                                                <span
                                                    key={tech}
                                                    className="px-3 py-1 bg-gray-100 text-gray-700 text-xs font-medium rounded-full"
                                                >
                                                    {tech}
                                                </span>
                                            ))}
                                            {product.technologies.length > 3 && (
                                                <span className="px-3 py-1 bg-gray-100 text-gray-700 text-xs font-medium rounded-full">
                                                    +{product.technologies.length - 3} more
                                                </span>
                                            )}
                                        </div>

                                        {/* Features Preview */}
                                        <ul className="space-y-2 mb-6">
                                            {product.features.slice(0, 3).map((feature, idx) => (
                                                <li key={idx} className="flex items-center text-sm text-gray-700">
                                                    <FontAwesomeIcon 
                                                        icon={faCheck} 
                                                        className="text-green-500 mr-2 text-xs" 
                                                    />
                                                    {feature}
                                                </li>
                                            ))}
                                        </ul>

                                        {/* Price */}
                                        {product.price && (
                                            <div className="flex items-center gap-2 mb-6">
                                                <FontAwesomeIcon icon={faTag} className="text-purple-600" />
                                                <span className="text-2xl font-bold text-gray-900">{product.price}</span>
                                            </div>
                                        )}

                                        {/* Action Buttons */}
                                        <div className="flex gap-3">
                                            {product.demoLink && (
                                                <motion.a
                                                    href={product.demoLink}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    whileHover={{ scale: 1.05 }}
                                                    whileTap={{ scale: 0.95 }}
                                                    className="flex-1 px-4 py-2 bg-gradient-to-r from-purple-600 to-primary text-white font-semibold rounded-xl text-center hover:shadow-lg transition-all duration-300"
                                                >
                                                    <FontAwesomeIcon icon={faExternalLinkAlt} className="mr-2" />
                                                    Live Demo
                                                </motion.a>
                                            )}
                                            {product.githubLink && (
                                                <motion.a
                                                    href={product.githubLink}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    whileHover={{ scale: 1.05 }}
                                                    whileTap={{ scale: 0.95 }}
                                                    className="px-4 py-2 bg-gray-900 text-white rounded-xl hover:bg-gray-800 transition-all duration-300"
                                                >
                                                    <FontAwesomeIcon icon={faGithub} />
                                                </motion.a>
                                            )}
                                            {product.price && (
                                                <motion.button
                                                    onClick={() => handleGetQuote(product)}
                                                    whileHover={{ scale: 1.05 }}
                                                    whileTap={{ scale: 0.95 }}
                                                    className="flex-1 px-4 py-2 bg-white text-purple-600 font-semibold rounded-xl border-2 border-purple-600 hover:bg-purple-50 transition-all duration-300"
                                                >
                                                    Get Quote
                                                </motion.button>
                                            )}
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </AnimatePresence>
                    </motion.div>

                    {/* CTA Section */}
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        animate={inView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.8, delay: 0.6 }}
                        className="mt-20 text-center"
                    >
                        <div className="bg-gradient-to-r from-purple-600 to-primary rounded-3xl p-12 shadow-2xl">
                            <h3 className="text-3xl font-bold text-white mb-4">
                                Have a Project in Mind?
                            </h3>
                            <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
                                Let's work together to bring your ideas to life with our expertise in 
                                modern web and mobile development.
                            </p>
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                onClick={() => setIsContactModalOpen(true)}
                                className="px-8 py-4 bg-white text-purple-600 font-bold rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
                            >
                                Start Your Project
                                <FontAwesomeIcon icon={faArrowRight} className="ml-2" />
                            </motion.button>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Modals */}
            <GetApp isOpen={isGetAppOpen} onClose={() => setIsGetAppOpen(false)} />
            <ContactModal isOpen={isContactModalOpen} onClose={() => setIsContactModalOpen(false)} />
        </>
    );
};

export default Products;
