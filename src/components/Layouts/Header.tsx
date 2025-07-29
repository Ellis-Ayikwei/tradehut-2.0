import { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import React from 'react';
import ContactModal from './ContactModal';

interface NavItemProps {
    item: {
        name: string;
        path?: string;
        action?: () => void;
    };
}

const Header: React.FC = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const location = useLocation();
    const [isContactModalOpen, setIsContactModalOpen] = useState(false);

    const mystoryRef = useRef(null);
    const storeRef = useRef(null);
    const servicesRef = useRef(null);
    const productsRef = useRef(null);

    const mainNavItems = [{ name: 'Home', path: '/' }];
    const centerNavItems = [
        { name: 'About', path: '/aboutUs' },
        { name: 'Services', path: '#services' },
        { name: 'Products', path: '#products' },
    ];
    const endNavItems = [
        {
            name: 'Contact',
            action: () => setIsContactModalOpen(true),
        },
    ];

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const NavItem = ({ item }: NavItemProps) => (
        <motion.div 
            whileHover={{ scale: 1.05 }} 
            whileTap={{ scale: 0.95 }}
            className="relative"
        >
            {item.action ? (
                <button
                    onClick={item.action}
                    className="relative px-6 py-2 text-gray-700 font-medium transition-all duration-300 hover:text-primary group"
                >
                    <span className="relative z-10">{item.name}</span>
                    <motion.div
                        className="absolute inset-0 bg-gradient-to-r from-primary/10 to-primary/5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                        initial={{ scale: 0.8 }}
                        whileHover={{ scale: 1 }}
                    />
                    <motion.div
                        className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-primary to-primary-dark origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300"
                    />
                </button>
            ) : (
                <Link
                    to={item.path || '#'}
                    onClick={(e) => {
                        if (item.path?.startsWith('#')) {
                            e.preventDefault();
                            const id = item.path.substring(1);
                            const element = document.getElementById(id);
                            if (element) {
                                element.scrollIntoView({ behavior: 'smooth' });
                            }
                        }
                    }}
                    className="relative px-6 py-2 text-gray-700 font-medium transition-all duration-300 hover:text-primary group"
                >
                    <span className="relative z-10">{item.name}</span>
                    <motion.div
                        className="absolute inset-0 bg-gradient-to-r from-primary/10 to-primary/5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                        initial={{ scale: 0.8 }}
                        whileHover={{ scale: 1 }}
                    />
                    <motion.div
                        className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-primary to-primary-dark origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300"
                    />
                </Link>
            )}
        </motion.div>
    );

    const mobileMenuVariants = {
        closed: {
            opacity: 0,
            y: -20,
            transition: {
                duration: 0.3,
                staggerChildren: 0.05,
                staggerDirection: -1,
            },
        },
        open: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.3,
                staggerChildren: 0.07,
                delayChildren: 0.2,
            },
        },
    };

    const mobileItemVariants = {
        closed: { opacity: 0, x: -20 },
        open: { opacity: 1, x: 0 },
    };

    return (
        <>
            <motion.header
                initial={{ y: -100 }}
                animate={{ y: 0 }}
                transition={{ duration: 0.6, ease: 'easeOut' }}
                className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
                    isScrolled 
                        ? 'backdrop-blur-xl bg-white/80 shadow-lg border-b border-gray-200/50' 
                        : 'backdrop-blur-md bg-white/60'
                }`}
            >
                <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between h-20">
                        {/* Logo */}
                        <motion.div 
                            className="flex items-center space-x-8"
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5 }}
                        >
                            <Link to="/" className="flex items-center space-x-3 group">
                                <motion.div
                                    whileHover={{ rotate: 360 }}
                                    transition={{ duration: 0.5 }}
                                    className="w-10 h-10 bg-gradient-to-br from-primary to-primary-dark rounded-xl flex items-center justify-center shadow-lg group-hover:shadow-primary/30"
                                >
                                    <span className="text-white font-bold text-xl">E</span>
                                </motion.div>
                                <span className="text-2xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
                                    Ellis Tech
                                </span>
                            </Link>
                        </motion.div>

                        {/* Desktop Navigation */}
                        <div className="hidden lg:flex items-center space-x-1">
                            {mainNavItems.map((item, index) => (
                                <motion.div
                                    key={item.name}
                                    initial={{ opacity: 0, y: -20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5, delay: index * 0.1 }}
                                >
                                    <NavItem item={item} />
                                </motion.div>
                            ))}
                            {centerNavItems.map((item, index) => (
                                <motion.div
                                    key={item.name}
                                    initial={{ opacity: 0, y: -20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5, delay: (index + 1) * 0.1 }}
                                >
                                    <NavItem item={item} />
                                </motion.div>
                            ))}
                        </div>

                        {/* CTA Button */}
                        <motion.div 
                            className="hidden lg:flex items-center space-x-4"
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5 }}
                        >
                            {endNavItems.map((item) => (
                                <motion.button
                                    key={item.name}
                                    onClick={item.action}
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    className="relative px-8 py-3 bg-gradient-to-r from-primary to-primary-dark text-white font-semibold rounded-full shadow-lg hover:shadow-primary/30 transition-all duration-300 overflow-hidden group"
                                >
                                    <span className="relative z-10">{item.name}</span>
                                    <motion.div
                                        className="absolute inset-0 bg-gradient-to-r from-primary-dark to-primary"
                                        initial={{ x: '100%' }}
                                        whileHover={{ x: 0 }}
                                        transition={{ duration: 0.3 }}
                                    />
                                </motion.button>
                            ))}
                        </motion.div>

                        {/* Mobile Menu Button */}
                        <motion.button
                            whileTap={{ scale: 0.9 }}
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                            className="lg:hidden relative w-10 h-10 flex items-center justify-center rounded-lg hover:bg-gray-100 transition-colors duration-200"
                        >
                            <div className="relative w-6 h-5 flex flex-col justify-center">
                                <motion.span
                                    animate={{
                                        rotate: isMobileMenuOpen ? 45 : 0,
                                        y: isMobileMenuOpen ? 0 : -8,
                                    }}
                                    transition={{ duration: 0.3 }}
                                    className="absolute w-full h-0.5 bg-gray-800 rounded-full"
                                />
                                <motion.span
                                    animate={{
                                        opacity: isMobileMenuOpen ? 0 : 1,
                                    }}
                                    transition={{ duration: 0.3 }}
                                    className="absolute w-full h-0.5 bg-gray-800 rounded-full"
                                />
                                <motion.span
                                    animate={{
                                        rotate: isMobileMenuOpen ? -45 : 0,
                                        y: isMobileMenuOpen ? 0 : 8,
                                    }}
                                    transition={{ duration: 0.3 }}
                                    className="absolute w-full h-0.5 bg-gray-800 rounded-full"
                                />
                            </div>
                        </motion.button>
                    </div>

                    {/* Mobile Menu */}
                    <AnimatePresence>
                        {isMobileMenuOpen && (
                            <motion.div
                                variants={mobileMenuVariants}
                                initial="closed"
                                animate="open"
                                exit="closed"
                                className="lg:hidden absolute top-full left-0 right-0 bg-white/95 backdrop-blur-xl shadow-xl border-t border-gray-200/50"
                            >
                                <div className="px-4 py-6 space-y-2">
                                    {[...mainNavItems, ...centerNavItems, ...endNavItems].map((item) => (
                                        <motion.div
                                            key={item.name}
                                            variants={mobileItemVariants}
                                        >
                                            {item.action ? (
                                                <button
                                                    onClick={() => {
                                                        item.action();
                                                        setIsMobileMenuOpen(false);
                                                    }}
                                                    className="block w-full text-left px-6 py-3 text-gray-700 font-medium hover:bg-gradient-to-r hover:from-primary/10 hover:to-primary/5 rounded-lg transition-all duration-300"
                                                >
                                                    {item.name}
                                                </button>
                                            ) : (
                                                <Link
                                                    to={item.path || '#'}
                                                    onClick={(e) => {
                                                        if (item.path?.startsWith('#')) {
                                                            e.preventDefault();
                                                            const id = item.path.substring(1);
                                                            const element = document.getElementById(id);
                                                            if (element) {
                                                                element.scrollIntoView({ behavior: 'smooth' });
                                                            }
                                                        }
                                                        setIsMobileMenuOpen(false);
                                                    }}
                                                    className="block px-6 py-3 text-gray-700 font-medium hover:bg-gradient-to-r hover:from-primary/10 hover:to-primary/5 rounded-lg transition-all duration-300"
                                                >
                                                    {item.name}
                                                </Link>
                                            )}
                                        </motion.div>
                                    ))}
                                </div>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </nav>
            </motion.header>
            <ContactModal isOpen={isContactModalOpen} onClose={() => setIsContactModalOpen(false)} />
        </>
    );
};

export default Header;
