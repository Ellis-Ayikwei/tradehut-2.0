import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';

const ModernNavbar: React.FC = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navigationItems = [
        { name: 'Home', href: '/' },
        { name: 'Services', href: '#services' },
        { name: 'Products', href: '#products' },
        { name: 'About', href: '/aboutUs' },
        { name: 'Contact', href: '/contactme' },
    ];

    const handleMobileMenuToggle = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    const handleLinkClick = () => {
        setIsMobileMenuOpen(false);
    };

    return (
        <motion.nav
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
                isScrolled
                    ? 'bg-white/95 backdrop-blur-lg shadow-lg border-b border-gray-200/20'
                    : 'bg-transparent'
            }`}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-20">
                    {/* Logo */}
                    <Link to="/" className="flex items-center space-x-3">
                        <div className="relative">
                            <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-purple-700 rounded-xl flex items-center justify-center shadow-lg">
                                <i className="fas fa-microchip text-white text-xl"></i>
                            </div>
                            <div className="absolute -top-1 -right-1 w-4 h-4 bg-orange-500 rounded-full animate-pulse"></div>
                        </div>
                        <div className="hidden md:block">
                            <h1 className={`font-bold text-2xl ${isScrolled ? 'text-gray-900' : 'text-white'}`}>
                                TradeHut
                            </h1>
                            <p className={`text-sm ${isScrolled ? 'text-gray-600' : 'text-gray-200'}`}>
                                IT Solutions
                            </p>
                        </div>
                    </Link>

                    {/* Desktop Navigation */}
                    <div className="hidden lg:flex items-center space-x-8">
                        {navigationItems.map((item) => (
                            <Link
                                key={item.name}
                                to={item.href}
                                className={`relative font-medium transition-colors duration-200 ${
                                    isScrolled
                                        ? 'text-gray-700 hover:text-blue-600'
                                        : 'text-white hover:text-orange-300'
                                } group`}
                            >
                                {item.name}
                                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-600 to-purple-600 transition-all duration-300 group-hover:w-full"></span>
                            </Link>
                        ))}
                    </div>

                    {/* CTA Buttons */}
                    <div className="hidden lg:flex items-center space-x-4">
                        <Link
                            to="/repairs/track"
                            className={`px-4 py-2 rounded-lg font-medium transition-all duration-200 ${
                                isScrolled
                                    ? 'text-gray-700 hover:bg-gray-100'
                                    : 'text-white hover:bg-white/10'
                            }`}
                        >
                            Track Repair
                        </Link>
                        <Link
                            to="/contactme"
                            className="px-6 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg font-medium hover:from-blue-700 hover:to-purple-700 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:scale-105"
                        >
                            Get Quote
                        </Link>
                        <Link
                            to="/admin"
                            className="px-4 py-2 bg-orange-600 text-white rounded-lg font-medium hover:bg-orange-700 transition-all duration-200"
                        >
                            <i className="fas fa-cog mr-2"></i>Admin
                        </Link>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        onClick={handleMobileMenuToggle}
                        className={`lg:hidden p-2 rounded-lg ${
                            isScrolled ? 'text-gray-700' : 'text-white'
                        }`}
                    >
                        <motion.div
                            animate={{ rotate: isMobileMenuOpen ? 45 : 0 }}
                            transition={{ duration: 0.2 }}
                        >
                            <i className={`fas ${isMobileMenuOpen ? 'fa-times' : 'fa-bars'} text-xl`}></i>
                        </motion.div>
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="lg:hidden bg-white/95 backdrop-blur-lg border-t border-gray-200/20"
                    >
                        <div className="px-4 py-6 space-y-4">
                            {navigationItems.map((item) => (
                                <Link
                                    key={item.name}
                                    to={item.href}
                                    onClick={handleLinkClick}
                                    className="block px-4 py-3 text-gray-700 hover:text-blue-600 hover:bg-gray-50 rounded-lg transition-colors duration-200 font-medium"
                                >
                                    {item.name}
                                </Link>
                            ))}
                            <div className="pt-4 border-t border-gray-200">
                                <Link
                                    to="/repairs/track"
                                    onClick={handleLinkClick}
                                    className="block px-4 py-3 text-gray-700 hover:text-blue-600 hover:bg-gray-50 rounded-lg transition-colors duration-200 font-medium"
                                >
                                    Track Repair
                                </Link>
                                <Link
                                    to="/contactme"
                                    onClick={handleLinkClick}
                                    className="block mt-2 px-4 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg font-medium text-center"
                                >
                                    Get Quote
                                </Link>
                                <Link
                                    to="/admin"
                                    onClick={handleLinkClick}
                                    className="block mt-2 px-4 py-3 bg-orange-600 text-white rounded-lg font-medium text-center"
                                >
                                    <i className="fas fa-cog mr-2"></i>Admin Panel
                                </Link>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.nav>
    );
};

export default ModernNavbar;