import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
    faFacebookF, 
    faWhatsapp, 
    faInstagram, 
    faLinkedinIn, 
    faTwitter,
    faGithub 
} from '@fortawesome/free-brands-svg-icons';
import {
    faPhone,
    faEnvelope,
    faMapMarkerAlt,
    faArrowUp,
    faHeart,
    faPaperPlane
} from '@fortawesome/free-solid-svg-icons';
import ContactModal from './ContactModal';

interface FooterLink {
    text: string;
    href?: string;
    action?: () => void;
}

interface FooterSection {
    title: string;
    links: FooterLink[];
}

const footerSections: FooterSection[] = [
    {
        title: 'Company',
        links: [
            { text: 'About Us', href: '/aboutUs' },
            { text: 'Services', href: '#services' },
            { text: 'Products', href: '#products' },
            { text: 'Contact', action: () => {} },
        ],
    },
    {
        title: 'Services',
        links: [
            { text: 'Phone Repairs', href: '#services' },
            { text: 'Laptop Repairs', href: '#services' },
            { text: 'IT Support', href: '#services' },
            { text: 'Web Development', href: '#services' },
        ],
    },
    {
        title: 'Support',
        links: [
            { text: 'Help Center', href: '#help' },
            { text: 'Terms of Service', href: '#terms' },
            { text: 'Privacy Policy', href: '#privacy' },
            { text: 'FAQ', href: '#faq' },
        ],
    },
];

const socialLinks = [
    { icon: faFacebookF, href: 'https://facebook.com', label: 'Facebook', color: 'hover:bg-blue-600' },
    { icon: faWhatsapp, href: 'https://wa.me/1234567890', label: 'WhatsApp', color: 'hover:bg-green-500' },
    { icon: faInstagram, href: 'https://instagram.com', label: 'Instagram', color: 'hover:bg-gradient-to-br hover:from-purple-600 hover:to-pink-600' },
    { icon: faLinkedinIn, href: 'https://linkedin.com', label: 'LinkedIn', color: 'hover:bg-blue-700' },
    { icon: faTwitter, href: 'https://twitter.com', label: 'Twitter', color: 'hover:bg-sky-500' },
    { icon: faGithub, href: 'https://github.com', label: 'GitHub', color: 'hover:bg-gray-800' },
];

const Footer: React.FC = () => {
    const [isContactModalOpen, setIsContactModalOpen] = useState(false);
    const [email, setEmail] = useState('');
    const [showScrollTop, setShowScrollTop] = useState(false);

    React.useEffect(() => {
        const handleScroll = () => {
            setShowScrollTop(window.scrollY > 300);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    const handleNewsletterSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Handle newsletter subscription
        console.log('Newsletter subscription:', email);
        setEmail('');
    };

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
            },
        },
    };

    const itemVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: {
                type: 'spring',
                stiffness: 100,
            },
        },
    };

    return (
        <>
            <footer className="relative bg-gradient-to-b from-gray-900 to-black text-white pt-20 pb-8 overflow-hidden">
                {/* Background Elements */}
                <div className="absolute inset-0 z-0">
                    <div className="absolute top-0 left-0 w-96 h-96 bg-primary/10 rounded-full filter blur-3xl" />
                    <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-500/10 rounded-full filter blur-3xl" />
                    <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width="60" height="60" xmlns="http://www.w3.org/2000/svg"%3E%3Cdefs%3E%3Cpattern id="grid" width="60" height="60" patternUnits="userSpaceOnUse"%3E%3Cpath d="M 60 0 L 0 0 0 60" fill="none" stroke="rgba(255,255,255,0.02)" stroke-width="1"/%3E%3C/pattern%3E%3C/defs%3E%3Crect width="100%25" height="100%25" fill="url(%23grid)"/%3E%3C/svg%3E')] opacity-50" />
                </div>

                <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12"
                    >
                        {/* Company Info */}
                        <motion.div variants={itemVariants} className="lg:col-span-2">
                            <div className="mb-6">
                                <h3 className="text-3xl font-bold bg-gradient-to-r from-primary to-primary-light bg-clip-text text-transparent mb-4">
                                    Ellis Tech
                                </h3>
                                <p className="text-gray-400 leading-relaxed mb-6">
                                    Your trusted partner for innovative technology solutions. We deliver excellence in every project.
                                </p>
                            </div>

                            {/* Newsletter */}
                            <div className="mb-8">
                                <h4 className="text-lg font-semibold mb-4">Stay Updated</h4>
                                <form onSubmit={handleNewsletterSubmit} className="flex gap-2">
                                    <input
                                        type="email"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        placeholder="Enter your email"
                                        className="flex-1 px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-primary transition-colors"
                                        required
                                    />
                                    <motion.button
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.95 }}
                                        type="submit"
                                        className="px-6 py-3 bg-gradient-to-r from-primary to-primary-dark text-white font-semibold rounded-xl hover:shadow-lg hover:shadow-primary/25 transition-all duration-300"
                                    >
                                        <FontAwesomeIcon icon={faPaperPlane} />
                                    </motion.button>
                                </form>
                            </div>

                            {/* Social Links */}
                            <div className="flex gap-3">
                                {socialLinks.map((social, index) => (
                                    <motion.a
                                        key={index}
                                        href={social.href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        whileHover={{ scale: 1.1, y: -2 }}
                                        whileTap={{ scale: 0.95 }}
                                        className={`w-10 h-10 bg-gray-800 rounded-xl flex items-center justify-center transition-all duration-300 ${social.color} hover:text-white`}
                                        aria-label={social.label}
                                    >
                                        <FontAwesomeIcon icon={social.icon} className="text-lg" />
                                    </motion.a>
                                ))}
                            </div>
                        </motion.div>

                        {/* Footer Links */}
                        {footerSections.map((section, index) => (
                            <motion.div key={index} variants={itemVariants}>
                                <h4 className="text-lg font-semibold mb-6 text-white">{section.title}</h4>
                                <ul className="space-y-3">
                                    {section.links.map((link, linkIndex) => (
                                        <li key={linkIndex}>
                                            {link.href ? (
                                                <a
                                                    href={link.href}
                                                    className="text-gray-400 hover:text-primary transition-colors duration-300 flex items-center group"
                                                >
                                                    <span className="w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-4 group-hover:mr-2" />
                                                    {link.text}
                                                </a>
                                            ) : (
                                                <button
                                                    onClick={() => {
                                                        link.action?.();
                                                        setIsContactModalOpen(true);
                                                    }}
                                                    className="text-gray-400 hover:text-primary transition-colors duration-300 flex items-center group"
                                                >
                                                    <span className="w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-4 group-hover:mr-2" />
                                                    {link.text}
                                                </button>
                                            )}
                                        </li>
                                    ))}
                                </ul>
                            </motion.div>
                        ))}
                    </motion.div>

                    {/* Contact Info */}
                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        className="grid grid-cols-1 md:grid-cols-3 gap-6 py-8 border-t border-gray-800"
                    >
                        <motion.div variants={itemVariants} className="flex items-center gap-4">
                            <div className="w-12 h-12 bg-primary/20 rounded-xl flex items-center justify-center">
                                <FontAwesomeIcon icon={faPhone} className="text-primary" />
                            </div>
                            <div>
                                <p className="text-sm text-gray-400">Call Us</p>
                                <p className="font-semibold">+233 123 456 789</p>
                            </div>
                        </motion.div>

                        <motion.div variants={itemVariants} className="flex items-center gap-4">
                            <div className="w-12 h-12 bg-primary/20 rounded-xl flex items-center justify-center">
                                <FontAwesomeIcon icon={faEnvelope} className="text-primary" />
                            </div>
                            <div>
                                <p className="text-sm text-gray-400">Email Us</p>
                                <p className="font-semibold">info@ellistech.com</p>
                            </div>
                        </motion.div>

                        <motion.div variants={itemVariants} className="flex items-center gap-4">
                            <div className="w-12 h-12 bg-primary/20 rounded-xl flex items-center justify-center">
                                <FontAwesomeIcon icon={faMapMarkerAlt} className="text-primary" />
                            </div>
                            <div>
                                <p className="text-sm text-gray-400">Visit Us</p>
                                <p className="font-semibold">Accra, Ghana</p>
                            </div>
                        </motion.div>
                    </motion.div>

                    {/* Bottom Bar */}
                    <div className="pt-8 border-t border-gray-800">
                        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                            <motion.p 
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 0.5 }}
                                className="text-gray-400 text-sm text-center md:text-left"
                            >
                                © {new Date().getFullYear()} Ellis Tech. All rights reserved.
                            </motion.p>
                            <motion.p 
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 0.6 }}
                                className="text-gray-400 text-sm flex items-center gap-1"
                            >
                                Made with <FontAwesomeIcon icon={faHeart} className="text-red-500 animate-pulse" /> by Ellis Tech
                            </motion.p>
                        </div>
                    </div>
                </div>

                {/* Scroll to Top Button */}
                <motion.button
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ 
                        opacity: showScrollTop ? 1 : 0, 
                        scale: showScrollTop ? 1 : 0 
                    }}
                    onClick={scrollToTop}
                    className="fixed bottom-8 right-8 w-12 h-12 bg-gradient-to-r from-primary to-primary-dark text-white rounded-full shadow-lg hover:shadow-xl hover:shadow-primary/25 flex items-center justify-center transition-all duration-300 z-50"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                >
                    <FontAwesomeIcon icon={faArrowUp} />
                </motion.button>
            </footer>
            
            <ContactModal isOpen={isContactModalOpen} onClose={() => setIsContactModalOpen(false)} />
        </>
    );
};

export default Footer;
