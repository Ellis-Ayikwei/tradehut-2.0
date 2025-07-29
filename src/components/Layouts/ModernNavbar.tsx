import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { 
    Menu, 
    X, 
    Home, 
    Info, 
    Wrench, 
    ShoppingBag, 
    Phone,
    ChevronDown,
    Sparkles,
    Globe,
    Zap,
    Shield,
    Users,
    Award
} from 'lucide-react';
import { 
    IconDeviceMobile,
    IconDeviceLaptop,
    IconServer,
    IconCode,
    IconBrandApple,
    IconBrandWindows,
    IconBrandAndroid,
    IconHeadset
} from '@tabler/icons-react';
import ContactModal from './ContactModal';

interface NavItemProps {
    item: {
        name: string;
        path?: string;
        action?: () => void;
        icon?: React.ReactNode;
        children?: Array<{
            name: string;
            path: string;
            icon?: React.ReactNode;
            description?: string;
        }>;
    };
    isMobile?: boolean;
}

const ModernNavbar: React.FC = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
    const [isContactModalOpen, setIsContactModalOpen] = useState(false);
    const location = useLocation();

    const navItems = [
        { 
            name: 'Home', 
            path: '/',
            icon: <Home className="w-4 h-4" />
        },
        { 
            name: 'About', 
            path: '/aboutUs',
            icon: <Info className="w-4 h-4" />
        },
        { 
            name: 'Services', 
            path: '#services',
            icon: <Wrench className="w-4 h-4" />,
            children: [
                {
                    name: 'Device Repair',
                    path: '#repair',
                    icon: <IconDeviceMobile className="w-5 h-5" />,
                    description: 'Professional repair for all devices'
                },
                {
                    name: 'IT Solutions',
                    path: '#it-solutions',
                    icon: <IconServer className="w-5 h-5" />,
                    description: 'Complete IT infrastructure support'
                },
                {
                    name: 'Web Development',
                    path: '#web-dev',
                    icon: <IconCode className="w-5 h-5" />,
                    description: 'Custom web applications'
                },
                {
                    name: 'Tech Support',
                    path: '#support',
                    icon: <IconHeadset className="w-5 h-5" />,
                    description: '24/7 technical assistance'
                }
            ]
        },
        { 
            name: 'Products', 
            path: '#products',
            icon: <ShoppingBag className="w-4 h-4" />,
            children: [
                {
                    name: 'Apple Devices',
                    path: '#apple',
                    icon: <IconBrandApple className="w-5 h-5" />,
                    description: 'iPhones, iPads, MacBooks'
                },
                {
                    name: 'Windows Devices',
                    path: '#windows',
                    icon: <IconBrandWindows className="w-5 h-5" />,
                    description: 'Laptops, Desktops, Tablets'
                },
                {
                    name: 'Android Devices',
                    path: '#android',
                    icon: <IconBrandAndroid className="w-5 h-5" />,
                    description: 'Smartphones & Tablets'
                },
                {
                    name: 'Accessories',
                    path: '#accessories',
                    icon: <IconDeviceLaptop className="w-5 h-5" />,
                    description: 'Cases, Chargers, & More'
                }
            ]
        },
        {
            name: 'Contact',
            action: () => setIsContactModalOpen(true),
            icon: <Phone className="w-4 h-4" />
        }
    ];

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToSection = (elementId: string) => {
        const element = document.querySelector(elementId);
        if (element) {
            element.scrollIntoView({
                behavior: 'smooth',
                block: 'start',
            });
        }
    };

    const NavItem: React.FC<NavItemProps> = ({ item, isMobile = false }) => {
        const isActive = location.pathname === item.path || location.hash === item.path;
        const hasDropdown = item.children && item.children.length > 0;

        const handleClick = () => {
            if (item.action) {
                item.action();
            } else if (item.path?.startsWith('#')) {
                scrollToSection(item.path);
                if (isMobile) setIsMobileMenuOpen(false);
            }
            if (hasDropdown && !isMobile) {
                setActiveDropdown(activeDropdown === item.name ? null : item.name);
            }
        };

        return (
            <div className="relative group">
                <motion.div
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="relative"
                >
                    {item.path && !item.path.startsWith('#') ? (
                        <Link
                            to={item.path}
                            className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-medium transition-all duration-300 ${
                                isActive
                                    ? 'text-white bg-gradient-to-r from-blue-600 to-purple-600 shadow-lg shadow-blue-500/25'
                                    : 'text-gray-700 hover:text-gray-900 hover:bg-gray-100/80'
                            }`}
                            onClick={() => isMobile && setIsMobileMenuOpen(false)}
                        >
                            {item.icon}
                            <span>{item.name}</span>
                            {hasDropdown && <ChevronDown className="w-3 h-3 ml-1" />}
                        </Link>
                    ) : (
                        <button
                            onClick={handleClick}
                            className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-medium transition-all duration-300 ${
                                isActive
                                    ? 'text-white bg-gradient-to-r from-blue-600 to-purple-600 shadow-lg shadow-blue-500/25'
                                    : 'text-gray-700 hover:text-gray-900 hover:bg-gray-100/80'
                            }`}
                        >
                            {item.icon}
                            <span>{item.name}</span>
                            {hasDropdown && <ChevronDown className="w-3 h-3 ml-1" />}
                        </button>
                    )}
                </motion.div>

                {/* Dropdown Menu */}
                {hasDropdown && !isMobile && (
                    <AnimatePresence>
                        {activeDropdown === item.name && (
                            <motion.div
                                initial={{ opacity: 0, y: -10 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -10 }}
                                transition={{ duration: 0.2 }}
                                className="absolute top-full left-0 mt-2 w-72 bg-white/95 backdrop-blur-xl rounded-2xl shadow-2xl border border-gray-200/50 overflow-hidden z-50"
                            >
                                <div className="p-2">
                                    {item.children?.map((child) => (
                                        <button
                                            key={child.path}
                                            onClick={() => {
                                                scrollToSection(child.path);
                                                setActiveDropdown(null);
                                            }}
                                            className="w-full flex items-start gap-3 px-4 py-3 rounded-xl hover:bg-gradient-to-r hover:from-blue-50 hover:to-purple-50 transition-all duration-200 group"
                                        >
                                            <div className="text-gray-600 group-hover:text-blue-600 transition-colors">
                                                {child.icon}
                                            </div>
                                            <div className="text-left">
                                                <div className="font-medium text-gray-900 group-hover:text-blue-600 transition-colors">
                                                    {child.name}
                                                </div>
                                                {child.description && (
                                                    <div className="text-xs text-gray-500 mt-0.5">
                                                        {child.description}
                                                    </div>
                                                )}
                                            </div>
                                        </button>
                                    ))}
                                </div>
                            </motion.div>
                        )}
                    </AnimatePresence>
                )}
            </div>
        );
    };

    return (
        <>
            <motion.header
                initial={{ y: -100 }}
                animate={{ y: 0 }}
                className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
                    isScrolled 
                        ? 'py-2' 
                        : 'py-4'
                }`}
            >
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <nav className={`relative rounded-2xl transition-all duration-500 ${
                        isScrolled
                            ? 'bg-white/80 backdrop-blur-xl shadow-xl border border-gray-200/50'
                            : 'bg-white/60 backdrop-blur-md shadow-lg border border-gray-200/30'
                    }`}>
                        <div className="px-6 py-4">
                            {/* Desktop Navigation */}
                            <div className="hidden lg:flex items-center justify-between">
                                {/* Logo */}
                                <Link to="/" className="flex items-center gap-2 group">
                                    <div className="relative">
                                        <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl blur-lg opacity-75 group-hover:opacity-100 transition-opacity"></div>
                                        <div className="relative bg-gradient-to-r from-blue-600 to-purple-600 text-white p-2.5 rounded-xl">
                                            <Sparkles className="w-6 h-6" />
                                        </div>
                                    </div>
                                    <div className="flex flex-col">
                                        <span className="text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                                            TradeHut
                                        </span>
                                        <span className="text-xs text-gray-500 -mt-1">Innovation First</span>
                                    </div>
                                </Link>

                                {/* Center Navigation */}
                                <div className="flex items-center gap-2">
                                    {navItems.slice(0, -1).map((item) => (
                                        <NavItem key={item.name} item={item} />
                                    ))}
                                </div>

                                {/* CTA Button */}
                                <div className="flex items-center gap-4">
                                    <motion.button
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.95 }}
                                        onClick={() => setIsContactModalOpen(true)}
                                        className="relative group"
                                    >
                                        <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl blur-lg opacity-75 group-hover:opacity-100 transition-opacity"></div>
                                        <div className="relative flex items-center gap-2 px-6 py-2.5 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl font-medium shadow-lg">
                                            <Phone className="w-4 h-4" />
                                            <span>Get in Touch</span>
                                            <Zap className="w-4 h-4" />
                                        </div>
                                    </motion.button>
                                </div>
                            </div>

                            {/* Mobile Navigation */}
                            <div className="lg:hidden flex items-center justify-between">
                                {/* Logo */}
                                <Link to="/" className="flex items-center gap-2">
                                    <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-2 rounded-xl">
                                        <Sparkles className="w-5 h-5" />
                                    </div>
                                    <span className="text-lg font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                                        TradeHut
                                    </span>
                                </Link>

                                {/* Mobile Menu Button */}
                                <motion.button
                                    whileHover={{ scale: 1.1 }}
                                    whileTap={{ scale: 0.9 }}
                                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                                    className="p-2 rounded-xl bg-gray-100 hover:bg-gray-200 transition-colors"
                                >
                                    {isMobileMenuOpen ? (
                                        <X className="w-6 h-6 text-gray-700" />
                                    ) : (
                                        <Menu className="w-6 h-6 text-gray-700" />
                                    )}
                                </motion.button>
                            </div>

                            {/* Mobile Menu */}
                            <AnimatePresence>
                                {isMobileMenuOpen && (
                                    <motion.div
                                        initial={{ opacity: 0, height: 0 }}
                                        animate={{ opacity: 1, height: 'auto' }}
                                        exit={{ opacity: 0, height: 0 }}
                                        transition={{ duration: 0.3 }}
                                        className="lg:hidden mt-4 pb-2"
                                    >
                                        <div className="space-y-2">
                                            {navItems.map((item) => (
                                                <div key={item.name}>
                                                    <NavItem item={item} isMobile />
                                                    {item.children && (
                                                        <div className="ml-8 mt-2 space-y-1">
                                                            {item.children.map((child) => (
                                                                <button
                                                                    key={child.path}
                                                                    onClick={() => {
                                                                        scrollToSection(child.path);
                                                                        setIsMobileMenuOpen(false);
                                                                    }}
                                                                    className="w-full flex items-center gap-2 px-4 py-2 text-sm text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors"
                                                                >
                                                                    {child.icon}
                                                                    <span>{child.name}</span>
                                                                </button>
                                                            ))}
                                                        </div>
                                                    )}
                                                </div>
                                            ))}
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    </nav>
                </div>
            </motion.header>

            {/* Add Contact Modal */}
            <ContactModal isOpen={isContactModalOpen} onClose={() => setIsContactModalOpen(false)} />

            {/* Click outside to close dropdown */}
            {activeDropdown && (
                <div
                    className="fixed inset-0 z-40"
                    onClick={() => setActiveDropdown(null)}
                />
            )}
        </>
    );
};

export default ModernNavbar;