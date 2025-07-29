'use client';

import { faFacebookF, faGithub, faInstagram, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { TextPlugin } from 'gsap/TextPlugin';
import { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import ContactModal from './ContactModal';
import { faArrowRight, faPlay, faRocket, faShieldAlt, faBolt } from '@fortawesome/free-solid-svg-icons';

const brands = [
    { name: 'Microsoft', image: '/assets/images/campanies/brand1.png' },
    { name: 'Google', image: '/assets/images/campanies/brand2.png' },
    { name: 'Amazon', image: '/assets/images/campanies/brand3.png' },
    { name: 'Apple', image: '/assets/images/campanies/brand4.png' },
    { name: 'Meta', image: '/assets/images/campanies/brand5.png' },
    { name: 'Netflix', image: '/assets/images/campanies/brand6.png' },
    { name: 'Tesla', image: '/assets/images/campanies/brand7.png' },
    { name: 'Adobe', image: '/assets/images/campanies/brand8.png' },
    { name: 'Spotify', image: '/assets/images/campanies/brand9.png' },
    { name: 'Oracle', image: '/assets/images/campanies/brand10.png' },
];

const socialLinks = [
    { icon: faFacebookF, href: 'https://web.facebook.com/ellis.hero/', label: 'Facebook' },
    { icon: faGithub, href: 'https://github.com/Ellis-Ayikwei', label: 'GitHub' },
    { icon: faInstagram, href: 'https://www.instagram.com/ellis_rockefeller/', label: 'Instagram' },
    { icon: faLinkedin, href: 'https://www.linkedin.com/in/ellis-armah-ayikwei-4a817b192/', label: 'LinkedIn' },
    { icon: faTwitter, href: 'https://x.com/home', label: 'Twitter' },
];

const features = [
    { icon: faRocket, text: 'Lightning Fast', color: 'from-blue-500 to-cyan-500' },
    { icon: faShieldAlt, text: 'Secure & Reliable', color: 'from-purple-500 to-pink-500' },
    { icon: faBolt, text: 'Cutting Edge', color: 'from-orange-500 to-red-500' },
];

export default function Hero() {
    const boxRef = useRef<HTMLDivElement | null>(null);
    const nameRef = useRef<HTMLParagraphElement | null>(null);
    const bgRef = useRef<HTMLDivElement | null>(null);
    const [isContactModalOpen, setIsContactModalOpen] = useState(false);

    gsap.registerPlugin(TextPlugin, ScrollTrigger);

    useGSAP(() => {
        // Smooth parallax effect for background
        gsap.to(bgRef.current, {
            yPercent: 50,
            ease: 'none',
            scrollTrigger: {
                trigger: boxRef.current,
                start: 'top top',
                end: 'bottom top',
                scrub: true,
            },
        });

        // Animated text effect
        const tl = gsap.timeline();
        tl.from('.hero-title', {
            y: 100,
            opacity: 0,
            duration: 1,
            stagger: 0.1,
            ease: 'power4.out',
        })
        .from('.hero-subtitle', {
            y: 50,
            opacity: 0,
            duration: 0.8,
            ease: 'power3.out',
        }, '-=0.5')
        .from('.hero-cta', {
            scale: 0.8,
            opacity: 0,
            duration: 0.6,
            stagger: 0.2,
            ease: 'back.out(1.7)',
        }, '-=0.3');
    });

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
                delayChildren: 0.3,
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
            <section ref={boxRef} className="relative min-h-screen flex items-center justify-center overflow-hidden">
                {/* Animated Background */}
                <div ref={bgRef} className="absolute inset-0 z-0">
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-purple-500/10 to-pink-500/20" />
                    <div className="absolute inset-0">
                        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/30 rounded-full filter blur-3xl animate-pulse" />
                        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-primary/30 rounded-full filter blur-3xl animate-pulse animation-delay-2000" />
                        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-pink-500/20 rounded-full filter blur-3xl animate-pulse animation-delay-4000" />
                    </div>
                    {/* Grid Pattern */}
                    <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width="60" height="60" xmlns="http://www.w3.org/2000/svg"%3E%3Cdefs%3E%3Cpattern id="grid" width="60" height="60" patternUnits="userSpaceOnUse"%3E%3Cpath d="M 60 0 L 0 0 0 60" fill="none" stroke="rgba(255,255,255,0.05)" stroke-width="1"/%3E%3C/pattern%3E%3C/defs%3E%3Crect width="100%25" height="100%25" fill="url(%23grid)"/%3E%3C/svg%3E')] opacity-50" />
                </div>

                {/* Main Content */}
                <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        animate="visible"
                        className="max-w-5xl mx-auto"
                    >
                        {/* Badge */}
                        <motion.div
                            initial={{ scale: 0, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            transition={{ duration: 0.5 }}
                            className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-primary/10 to-purple-500/10 backdrop-blur-sm border border-primary/20 rounded-full mb-8"
                        >
                            <span className="relative flex h-2 w-2">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                            </span>
                            <span className="text-sm font-medium text-gray-700">🚀 Welcome to the Future of Technology</span>
                        </motion.div>

                        {/* Main Title */}
                        <h1 className="hero-title text-5xl sm:text-6xl lg:text-7xl font-bold mb-6">
                            <span className="block bg-gradient-to-r from-gray-900 via-primary to-purple-600 bg-clip-text text-transparent">
                                Build Amazing
                            </span>
                            <span className="block bg-gradient-to-r from-purple-600 via-pink-600 to-primary bg-clip-text text-transparent">
                                Digital Experiences
                            </span>
                        </h1>

                        {/* Subtitle */}
                        <p className="hero-subtitle text-xl sm:text-2xl text-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed">
                            Transform your ideas into reality with cutting-edge technology and world-class expertise. 
                            We deliver innovative solutions that drive your business forward.
                        </p>

                        {/* CTA Buttons */}
                        <div className="hero-cta flex flex-col sm:flex-row gap-4 justify-center mb-16">
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                onClick={() => setIsContactModalOpen(true)}
                                className="group relative px-8 py-4 bg-gradient-to-r from-primary to-primary-dark text-white font-semibold rounded-full shadow-xl hover:shadow-2xl hover:shadow-primary/25 transition-all duration-300 overflow-hidden"
                            >
                                <span className="relative z-10 flex items-center justify-center gap-2">
                                    Get Started
                                    <FontAwesomeIcon icon={faArrowRight} className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                </span>
                                <motion.div
                                    className="absolute inset-0 bg-gradient-to-r from-primary-dark to-purple-600"
                                    initial={{ x: '100%' }}
                                    whileHover={{ x: 0 }}
                                    transition={{ duration: 0.3 }}
                                />
                            </motion.button>

                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="group px-8 py-4 bg-white/80 backdrop-blur-sm text-gray-800 font-semibold rounded-full shadow-lg hover:shadow-xl border border-gray-200 transition-all duration-300 flex items-center justify-center gap-2"
                            >
                                <FontAwesomeIcon icon={faPlay} className="w-4 h-4 text-primary" />
                                Watch Demo
                            </motion.button>
                        </div>

                        {/* Features */}
                        <motion.div 
                            variants={containerVariants}
                            className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-16"
                        >
                            {features.map((feature, index) => (
                                <motion.div
                                    key={index}
                                    variants={itemVariants}
                                    whileHover={{ y: -5 }}
                                    className="group relative p-6 bg-white/70 backdrop-blur-sm rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200/50"
                                >
                                    <div className={`w-12 h-12 bg-gradient-to-r ${feature.color} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                                        <FontAwesomeIcon icon={feature.icon} className="text-white text-xl" />
                                    </div>
                                    <h3 className="text-lg font-semibold text-gray-800">{feature.text}</h3>
                                </motion.div>
                            ))}
                        </motion.div>

                        {/* Social Links */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 1, duration: 0.5 }}
                            className="flex justify-center gap-4 mb-16"
                        >
                            {socialLinks.map((social, index) => (
                                <motion.a
                                    key={index}
                                    href={social.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    whileHover={{ scale: 1.1, y: -2 }}
                                    whileTap={{ scale: 0.95 }}
                                    className="w-12 h-12 bg-white/80 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 group"
                                >
                                    <FontAwesomeIcon 
                                        icon={social.icon} 
                                        className="text-gray-600 group-hover:text-primary transition-colors duration-300" 
                                    />
                                </motion.a>
                            ))}
                        </motion.div>

                        {/* Trusted By Section */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 1.2, duration: 0.8 }}
                            className="pt-8 border-t border-gray-200/50"
                        >
                            <p className="text-sm font-medium text-gray-500 mb-6">Trusted by industry leaders</p>
                            <div className="flex flex-wrap justify-center items-center gap-8 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
                                {brands.slice(0, 5).map((brand, index) => (
                                    <motion.img
                                        key={index}
                                        src={brand.image}
                                        alt={brand.name}
                                        className="h-8 sm:h-10 object-contain hover:scale-110 transition-transform duration-300"
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: 1.4 + index * 0.1 }}
                                    />
                                ))}
                            </div>
                        </motion.div>
                    </motion.div>
                </div>

                {/* Scroll Indicator */}
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 2, duration: 0.5 }}
                    className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
                >
                    <motion.div
                        animate={{ y: [0, 10, 0] }}
                        transition={{ repeat: Infinity, duration: 1.5 }}
                        className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center p-1"
                    >
                        <motion.div
                            animate={{ y: [0, 15, 0] }}
                            transition={{ repeat: Infinity, duration: 1.5 }}
                            className="w-1 h-3 bg-gray-400 rounded-full"
                        />
                    </motion.div>
                </motion.div>
            </section>
            <ContactModal isOpen={isContactModalOpen} onClose={() => setIsContactModalOpen(false)} />
        </>
    );
}
