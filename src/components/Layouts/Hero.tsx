'use client';

import React, { useRef, useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import ContactModal from './ContactModal';
import ModernNavbar from './ModernNavbar';

const trustedBrands = [
    { name: 'Apple', icon: 'fab fa-apple' },
    { name: 'Samsung', icon: 'fas fa-mobile-alt' },
    { name: 'HP', icon: 'fas fa-laptop' },
    { name: 'Dell', icon: 'fas fa-desktop' },
    { name: 'Lenovo', icon: 'fas fa-laptop-code' },
    { name: 'Microsoft', icon: 'fab fa-microsoft' },
];

const stats = [
    { number: '5000+', label: 'Devices Repaired', icon: 'fas fa-tools' },
    { number: '98%', label: 'Success Rate', icon: 'fas fa-check-circle' },
    { number: '24/7', label: 'Support Available', icon: 'fas fa-headset' },
    { number: '50+', label: 'Expert Technicians', icon: 'fas fa-users' },
];

const services = [
    {
        icon: 'fas fa-mobile-alt',
        title: 'Device Repair',
        description: 'Professional repair services for smartphones, tablets, and laptops',
        color: 'from-blue-500 to-cyan-500'
    },
    {
        icon: 'fas fa-shopping-cart',
        title: 'Device Sales',
        description: 'Premium quality devices and accessories at competitive prices',
        color: 'from-purple-500 to-pink-500'
    },
    {
        icon: 'fas fa-server',
        title: 'IT Solutions',
        description: 'Complete IT infrastructure and support services for businesses',
        color: 'from-green-500 to-emerald-500'
    },
    {
        icon: 'fas fa-code',
        title: 'Web Development',
        description: 'Custom web applications and digital solutions',
        color: 'from-orange-500 to-red-500'
    }
];

export default function Hero() {
    const [isContactModalOpen, setIsContactModalOpen] = useState(false);
    const [currentService, setCurrentService] = useState(0);
    const { ref, inView } = useInView({ threshold: 0.1 });

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentService((prev) => (prev + 1) % services.length);
        }, 3000);
        return () => clearInterval(interval);
    }, []);

    return (
        <>
            <ModernNavbar />
            
            {/* Ultra Modern Hero Section */}
            <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
                {/* Animated Background Elements */}
                <div className="absolute inset-0">
                    {/* Geometric Shapes */}
                    <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-r from-blue-400/20 to-purple-500/20 rounded-full blur-3xl animate-pulse"></div>
                    <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-r from-cyan-400/20 to-blue-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-indigo-400/10 to-purple-500/10 rounded-full blur-3xl animate-spin-slow"></div>
                    
                    {/* Grid Pattern */}
                    <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]"></div>
                    
                    {/* Floating Elements */}
                    <motion.div
                        animate={{ y: [-20, 20, -20] }}
                        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                        className="absolute top-1/4 right-1/4 w-4 h-4 bg-blue-500 rounded-full opacity-60"
                    ></motion.div>
                    <motion.div
                        animate={{ y: [20, -20, 20] }}
                        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                        className="absolute bottom-1/4 left-1/4 w-6 h-6 bg-purple-500 rounded-full opacity-40"
                    ></motion.div>
                </div>

                {/* Main Content */}
                <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        {/* Left Content */}
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                            className="space-y-8"
                        >
                            {/* Badge */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.2 }}
                                className="inline-flex items-center space-x-2 bg-white/80 backdrop-blur-sm border border-blue-200 rounded-full px-4 py-2 shadow-lg"
                            >
                                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                                <span className="text-sm font-medium text-gray-700">🚀 Ghana's Leading IT Service Provider</span>
                            </motion.div>

                            {/* Main Heading */}
                            <div className="space-y-4">
                                <motion.h1
                                    initial={{ opacity: 0, y: 30 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.3 }}
                                    className="text-5xl md:text-7xl font-bold leading-tight"
                                >
                                    <span className="bg-gradient-to-r from-gray-900 via-blue-900 to-purple-900 bg-clip-text text-transparent">
                                        Next-Gen
                                    </span>
                                    <br />
                                    <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                                        IT Solutions
                                    </span>
                                </motion.h1>
                                
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.4 }}
                                    className="h-20 overflow-hidden"
                                >
                                    <motion.div
                                        animate={{ y: -currentService * 80 }}
                                        transition={{ duration: 0.5, ease: "easeInOut" }}
                                        className="space-y-4"
                                    >
                                        {services.map((service, index) => (
                                            <div key={index} className="h-16 flex items-center">
                                                <div className={`inline-flex items-center space-x-3 px-4 py-2 rounded-lg bg-gradient-to-r ${service.color} text-white shadow-lg`}>
                                                    <i className={`${service.icon} text-xl`}></i>
                                                    <span className="font-semibold text-lg">{service.title}</span>
                                                </div>
                                            </div>
                                        ))}
                                    </motion.div>
                                </motion.div>
                            </div>

                            {/* Description */}
                            <motion.p
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.5 }}
                                className="text-xl text-gray-600 leading-relaxed max-w-lg"
                            >
                                Transform your business with cutting-edge technology solutions. From device repairs to enterprise IT infrastructure, we deliver excellence at every level.
                            </motion.p>

                            {/* CTA Buttons */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.6 }}
                                className="flex flex-wrap gap-4"
                            >
                                <button
                                    onClick={() => setIsContactModalOpen(true)}
                                    className="group relative px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-2xl font-semibold text-lg shadow-2xl hover:shadow-blue-500/25 transform hover:scale-105 transition-all duration-300 overflow-hidden"
                                >
                                    <span className="relative z-10 flex items-center">
                                        Get Started Today
                                        <i className="fas fa-arrow-right ml-2 group-hover:translate-x-1 transition-transform"></i>
                                    </span>
                                    <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                </button>
                                
                                <button className="px-8 py-4 bg-white/80 backdrop-blur-sm text-gray-800 rounded-2xl font-semibold text-lg border border-gray-200 hover:bg-white hover:shadow-lg transform hover:scale-105 transition-all duration-300">
                                    <i className="fas fa-play mr-2"></i>
                                    Watch Demo
                                </button>
                            </motion.div>

                            {/* Stats */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.7 }}
                                className="grid grid-cols-2 gap-4 pt-8"
                            >
                                {stats.slice(0, 2).map((stat, index) => (
                                    <div key={index} className="text-center lg:text-left">
                                        <div className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                                            {stat.number}
                                        </div>
                                        <div className="text-gray-600 font-medium">{stat.label}</div>
                                    </div>
                                ))}
                            </motion.div>
                        </motion.div>

                        {/* Right Content - 3D Visual */}
                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8, delay: 0.3 }}
                            className="relative"
                        >
                            {/* Main Device Display */}
                            <div className="relative">
                                <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-3xl blur-3xl scale-110"></div>
                                <div className="relative bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-8 shadow-2xl">
                                    {/* Device Grid */}
                                    <div className="grid grid-cols-3 gap-6">
                                        {[
                                            { icon: 'fas fa-mobile-alt', color: 'from-blue-500 to-cyan-500' },
                                            { icon: 'fas fa-laptop', color: 'from-purple-500 to-pink-500' },
                                            { icon: 'fas fa-tablet-alt', color: 'from-green-500 to-emerald-500' },
                                            { icon: 'fas fa-desktop', color: 'from-orange-500 to-red-500' },
                                            { icon: 'fas fa-server', color: 'from-indigo-500 to-purple-500' },
                                            { icon: 'fas fa-microchip', color: 'from-cyan-500 to-blue-500' },
                                        ].map((device, index) => (
                                            <motion.div
                                                key={index}
                                                initial={{ opacity: 0, scale: 0 }}
                                                animate={{ opacity: 1, scale: 1 }}
                                                transition={{ delay: 0.8 + index * 0.1 }}
                                                whileHover={{ scale: 1.1, rotate: 5 }}
                                                className={`w-16 h-16 bg-gradient-to-r ${device.color} rounded-2xl flex items-center justify-center shadow-lg cursor-pointer`}
                                            >
                                                <i className={`${device.icon} text-white text-xl`}></i>
                                            </motion.div>
                                        ))}
                                    </div>

                                    {/* Central Hub */}
                                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                                        <motion.div
                                            animate={{ rotate: 360 }}
                                            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                                            className="w-24 h-24 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center shadow-2xl"
                                        >
                                            <i className="fas fa-network-wired text-white text-2xl"></i>
                                        </motion.div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>

                {/* Trusted Brands Section */}
                <motion.div
                    ref={ref}
                    initial={{ opacity: 0, y: 50 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.8 }}
                    className="absolute bottom-8 left-0 right-0"
                >
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="text-center mb-8">
                            <p className="text-gray-600 font-medium">Trusted by industry leaders</p>
                        </div>
                        <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
                            {trustedBrands.map((brand, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, scale: 0 }}
                                    animate={inView ? { opacity: 1, scale: 1 } : {}}
                                    transition={{ delay: index * 0.1 }}
                                    className="flex items-center space-x-2 px-4 py-2 bg-white/50 backdrop-blur-sm rounded-lg border border-gray-200/50"
                                >
                                    <i className={`${brand.icon} text-2xl text-gray-700`}></i>
                                    <span className="font-semibold text-gray-700">{brand.name}</span>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </motion.div>
            </section>

            <ContactModal isOpen={isContactModalOpen} onClose={() => setIsContactModalOpen(false)} />
        </>
    );
}
