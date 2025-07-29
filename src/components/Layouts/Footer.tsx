import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
    Mail, 
    Phone, 
    MapPin, 
    Send, 
    Facebook, 
    Twitter, 
    Instagram, 
    Linkedin,
    Youtube,
    ArrowRight,
    Heart,
    Sparkles,
    Clock,
    Shield,
    Award
} from 'lucide-react';
import {
    IconBrandFacebook,
    IconBrandTwitter,
    IconBrandInstagram,
    IconBrandLinkedin,
    IconBrandYoutube,
    IconBrandGithub,
    IconMail,
    IconPhone,
    IconMapPin,
    IconClock
} from '@tabler/icons-react';

const Footer: React.FC = () => {
    const currentYear = new Date().getFullYear();

    const footerLinks = {
        company: [
            { name: 'About Us', path: '/about' },
            { name: 'Our Team', path: '/team' },
            { name: 'Careers', path: '/careers' },
            { name: 'Press Kit', path: '/press' }
        ],
        services: [
            { name: 'Device Repair', path: '#repair' },
            { name: 'IT Solutions', path: '#it-solutions' },
            { name: 'Web Development', path: '#web-dev' },
            { name: 'Tech Support', path: '#support' }
        ],
        support: [
            { name: 'Help Center', path: '/help' },
            { name: 'Contact Us', path: '/contact' },
            { name: 'Track Repair', path: '/track' },
            { name: 'Warranty', path: '/warranty' }
        ],
        legal: [
            { name: 'Privacy Policy', path: '/privacy' },
            { name: 'Terms of Service', path: '/terms' },
            { name: 'Cookie Policy', path: '/cookies' },
            { name: 'Refund Policy', path: '/refunds' }
        ]
    };

    const socialLinks = [
        { icon: <IconBrandFacebook className="w-5 h-5" />, href: '#', label: 'Facebook' },
        { icon: <IconBrandTwitter className="w-5 h-5" />, href: '#', label: 'Twitter' },
        { icon: <IconBrandInstagram className="w-5 h-5" />, href: '#', label: 'Instagram' },
        { icon: <IconBrandLinkedin className="w-5 h-5" />, href: '#', label: 'LinkedIn' },
        { icon: <IconBrandYoutube className="w-5 h-5" />, href: '#', label: 'YouTube' }
    ];

    return (
        <footer className="relative bg-gradient-to-b from-slate-900 to-black pt-20 pb-8 overflow-hidden">
            {/* Background Elements */}
            <div className="absolute inset-0">
                <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
                <div className="absolute top-0 right-0 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff02_1px,transparent_1px),linear-gradient(to_bottom,#ffffff02_1px,transparent_1px)] bg-[size:4rem_4rem]"></div>
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Newsletter Section */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-16"
                >
                    <div className="relative bg-gradient-to-r from-blue-600/20 to-purple-600/20 backdrop-blur-sm rounded-3xl p-8 lg:p-12 border border-white/10 overflow-hidden">
                        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-purple-600/10 animate-pulse"></div>
                        
                        <div className="relative z-10 grid lg:grid-cols-2 gap-8 items-center">
                            <div>
                                <h3 className="text-3xl font-bold text-white mb-4">
                                    Stay Updated with Tech News
                                </h3>
                                <p className="text-gray-300 text-lg">
                                    Get the latest updates on products, services, and exclusive offers delivered to your inbox.
                                </p>
                            </div>
                            
                            <div className="flex flex-col sm:flex-row gap-4">
                                <div className="relative flex-1">
                                    <input
                                        type="email"
                                        placeholder="Enter your email"
                                        className="w-full px-6 py-4 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 transition-colors"
                                    />
                                    <Mail className="absolute right-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                                </div>
                                <motion.button
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl font-medium shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-2"
                                >
                                    <span>Subscribe</span>
                                    <Send className="w-4 h-4" />
                                </motion.button>
                            </div>
                        </div>

                        {/* Trust Badges */}
                        <div className="mt-6 flex flex-wrap items-center gap-6 text-sm text-gray-400">
                            <div className="flex items-center gap-2">
                                <Shield className="w-4 h-4 text-green-400" />
                                <span>No spam, ever</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <Clock className="w-4 h-4 text-blue-400" />
                                <span>Weekly updates</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <Award className="w-4 h-4 text-purple-400" />
                                <span>Exclusive offers</span>
                            </div>
                        </div>
                    </div>
                </motion.div>

                {/* Main Footer Content */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8 mb-12">
                    {/* Company Info */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="lg:col-span-2"
                    >
                        <div className="flex items-center gap-2 mb-6">
                            <div className="relative">
                                <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl blur opacity-75"></div>
                                <div className="relative bg-gradient-to-r from-blue-600 to-purple-600 text-white p-2.5 rounded-xl">
                                    <Sparkles className="w-6 h-6" />
                                </div>
                            </div>
                            <div>
                                <h2 className="text-2xl font-bold text-white">TradeHut</h2>
                                <p className="text-xs text-gray-400">Innovation First</p>
                            </div>
                        </div>
                        
                        <p className="text-gray-400 mb-6 leading-relaxed">
                            Your trusted partner for all technology needs. From device repairs to enterprise solutions, 
                            we deliver excellence with cutting-edge innovation.
                        </p>

                        {/* Contact Info */}
                        <div className="space-y-3">
                            <a href="tel:+1234567890" className="flex items-center gap-3 text-gray-400 hover:text-white transition-colors">
                                <IconPhone className="w-5 h-5 text-blue-400" />
                                <span>+1 (234) 567-890</span>
                            </a>
                            <a href="mailto:info@TradeHut.com" className="flex items-center gap-3 text-gray-400 hover:text-white transition-colors">
                                <IconMail className="w-5 h-5 text-purple-400" />
                                <span>info@TradeHut.com</span>
                            </a>
                            <div className="flex items-start gap-3 text-gray-400">
                                <IconMapPin className="w-5 h-5 text-green-400 mt-0.5" />
                                <span>123 Tech Street, Silicon Valley, CA 94025</span>
                            </div>
                        </div>
                    </motion.div>

                    {/* Links Sections */}
                    {Object.entries(footerLinks).map(([category, links], index) => (
                        <motion.div
                            key={category}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                        >
                            <h3 className="text-white font-semibold mb-4 capitalize">
                                {category}
                            </h3>
                            <ul className="space-y-3">
                                {links.map((link) => (
                                    <li key={link.name}>
                                        <Link
                                            to={link.path}
                                            className="text-gray-400 hover:text-white transition-colors duration-200 flex items-center gap-2 group"
                                        >
                                            <ArrowRight className="w-3 h-3 opacity-0 -ml-5 group-hover:opacity-100 group-hover:ml-0 transition-all duration-200" />
                                            <span>{link.name}</span>
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </motion.div>
                    ))}
                </div>

                {/* Bottom Section */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="pt-8 border-t border-white/10"
                >
                    <div className="flex flex-col lg:flex-row justify-between items-center gap-6">
                        {/* Copyright */}
                        <div className="text-gray-400 text-sm text-center lg:text-left">
                            <p>© {currentYear} TradeHut. All rights reserved.</p>
                            <p className="mt-1 flex items-center justify-center lg:justify-start gap-1">
                                Made with <Heart className="w-4 h-4 text-red-500 fill-current" /> by TradeHut Team
                            </p>
                        </div>

                        {/* Social Links */}
                        <div className="flex items-center gap-4">
                            {socialLinks.map((social, index) => (
                                <motion.a
                                    key={index}
                                    href={social.href}
                                    aria-label={social.label}
                                    whileHover={{ scale: 1.1, y: -2 }}
                                    whileTap={{ scale: 0.95 }}
                                    className="w-10 h-10 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl flex items-center justify-center text-gray-400 hover:text-white hover:bg-white/10 hover:border-white/20 transition-all duration-300"
                                >
                                    {social.icon}
                                </motion.a>
                            ))}
                        </div>

                        {/* Payment Methods */}
                        <div className="flex items-center gap-4">
                            <span className="text-gray-400 text-sm">Accepted Payments:</span>
                            <div className="flex items-center gap-2">
                                {['Visa', 'Mastercard', 'PayPal', 'Apple Pay'].map((payment) => (
                                    <div
                                        key={payment}
                                        className="px-3 py-1 bg-white/5 backdrop-blur-sm border border-white/10 rounded text-xs text-gray-400"
                                    >
                                        {payment}
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>

            {/* Decorative Elements */}
            <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
        </footer>
    );
};

export default Footer;
