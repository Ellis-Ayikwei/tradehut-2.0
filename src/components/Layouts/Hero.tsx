'use client';

import React, { useRef, useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { 
    ArrowRight, 
    CheckCircle2, 
    Sparkles, 
    Zap, 
    Shield, 
    Clock,
    Users,
    Award,
    Play,
    Star,
    TrendingUp,
    Globe
} from 'lucide-react';
import {
    IconBrandApple,
    IconBrandWindows,
    IconBrandAndroid,
    IconDeviceMobile,
    IconDeviceLaptop,
    IconServer,
    IconCode,
    IconHeadset,
    IconRocket,
    IconBolt,
    IconShieldCheck
} from '@tabler/icons-react';
import ContactModal from './ContactModal';
import ModernNavbar from './ModernNavbar';

const trustedBrands = [
    { name: 'Apple', icon: <IconBrandApple className="w-8 h-8" /> },
    { name: 'Samsung', icon: <IconDeviceMobile className="w-8 h-8" /> },
    { name: 'HP', icon: <IconDeviceLaptop className="w-8 h-8" /> },
    { name: 'Dell', icon: <IconServer className="w-8 h-8" /> },
    { name: 'Lenovo', icon: <IconDeviceLaptop className="w-8 h-8" /> },
    { name: 'Microsoft', icon: <IconBrandWindows className="w-8 h-8" /> },
];

const stats = [
    { number: '5000+', label: 'Devices Repaired', icon: <Zap className="w-6 h-6" /> },
    { number: '98%', label: 'Success Rate', icon: <CheckCircle2 className="w-6 h-6" /> },
    { number: '24/7', label: 'Support Available', icon: <Clock className="w-6 h-6" /> },
    { number: '50+', label: 'Expert Technicians', icon: <Users className="w-6 h-6" /> },
];

const services = [
    {
        icon: <IconDeviceMobile className="w-8 h-8" />,
        title: 'Device Repair',
        description: 'Professional repair services for smartphones, tablets, and laptops',
        color: 'from-blue-500 to-cyan-500'
    },
    {
        icon: <IconDeviceLaptop className="w-8 h-8" />,
        title: 'Device Sales',
        description: 'Premium quality devices and accessories at competitive prices',
        color: 'from-purple-500 to-pink-500'
    },
    {
        icon: <IconServer className="w-8 h-8" />,
        title: 'IT Solutions',
        description: 'Complete IT infrastructure and support services for businesses',
        color: 'from-green-500 to-emerald-500'
    },
    {
        icon: <IconCode className="w-8 h-8" />,
        title: 'Web Development',
        description: 'Custom web applications and digital solutions',
        color: 'from-orange-500 to-red-500'
    }
];

export default function Hero() {
    const [isContactModalOpen, setIsContactModalOpen] = useState(false);
    const [currentService, setCurrentService] = useState(0);
    const { ref, inView } = useInView({ threshold: 0.1 });
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end start"]
    });
    
    const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
    const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentService((prev) => (prev + 1) % services.length);
        }, 3000);
        return () => clearInterval(interval);
    }, []);

    return (
        <>
           
            
            {/* Ultra Modern Hero Section */}
            <section ref={containerRef} className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-950 via-blue-950 to-purple-950">
                {/* Advanced Background Effects */}
                <div className="absolute inset-0">
                    {/* Animated Gradient Orbs */}
                    <motion.div
                        animate={{
                            x: [0, 100, 0],
                            y: [0, -100, 0],
                        }}
                        transition={{
                            duration: 20,
                            repeat: Infinity,
                            ease: "linear"
                        }}
                        className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-blue-500/30 to-purple-500/30 rounded-full blur-3xl"
                    />
                    <motion.div
                        animate={{
                            x: [0, -100, 0],
                            y: [0, 100, 0],
                        }}
                        transition={{
                            duration: 15,
                            repeat: Infinity,
                            ease: "linear"
                        }}
                        className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-r from-cyan-500/30 to-pink-500/30 rounded-full blur-3xl"
                    />
                    
                    {/* Grid Pattern */}
                    <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff0a_1px,transparent_1px),linear-gradient(to_bottom,#ffffff0a_1px,transparent_1px)] bg-[size:4rem_4rem]"></div>
                    
                    {/* Floating Particles */}
                    {[...Array(20)].map((_, i) => (
                        <motion.div
                            key={i}
                            className="absolute w-1 h-1 bg-white/20 rounded-full"
                            style={{
                                left: `${Math.random() * 100}%`,
                                top: `${Math.random() * 100}%`,
                            }}
                            animate={{
                                y: [-20, 20, -20],
                                opacity: [0.2, 1, 0.2],
                            }}
                            transition={{
                                duration: 3 + Math.random() * 2,
                                repeat: Infinity,
                                delay: Math.random() * 2,
                            }}
                        />
                    ))}
                </div>

                {/* Main Content */}
                <motion.div 
                    style={{ y, opacity }}
                    className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32"
                >
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        {/* Left Content */}
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                        >
                            {/* Badge */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.2 }}
                                className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-md rounded-full border border-white/20 mb-6"
                            >
                                <Sparkles className="w-4 h-4 text-yellow-400" />
                                <span className="text-sm text-white/90">Trusted by 5000+ Customers</span>
                                <Star className="w-4 h-4 text-yellow-400" />
                            </motion.div>

                            {/* Main Heading */}
                            <motion.h1
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.3 }}
                                className="text-5xl lg:text-7xl font-bold text-white mb-6 leading-tight"
                            >
                                Transform Your
                                <span className="block bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                                    Tech Experience
                                </span>
                            </motion.h1>

                            {/* Description */}
                            <motion.p
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.4 }}
                                className="text-xl text-gray-300 mb-8 leading-relaxed"
                            >
                                World-class IT solutions, device repairs, and digital transformation services. 
                                We bring innovation to your fingertips with cutting-edge technology and unmatched expertise.
                            </motion.p>

                            {/* Features */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.5 }}
                                className="grid grid-cols-2 gap-4 mb-8"
                            >
                                {[
                                    { icon: <Shield className="w-5 h-5" />, text: "100% Secure" },
                                    { icon: <Zap className="w-5 h-5" />, text: "Lightning Fast" },
                                    { icon: <Award className="w-5 h-5" />, text: "Award Winning" },
                                    { icon: <Globe className="w-5 h-5" />, text: "Global Reach" }
                                ].map((feature, index) => (
                                    <div key={index} className="flex items-center gap-2 text-white/80">
                                        <div className="text-blue-400">{feature.icon}</div>
                                        <span className="text-sm">{feature.text}</span>
                                    </div>
                                ))}
                            </motion.div>

                            {/* CTA Buttons */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.6 }}
                                className="flex flex-wrap gap-4"
                            >
                                <motion.button
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    onClick={() => setIsContactModalOpen(true)}
                                    className="group relative px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl font-semibold shadow-2xl shadow-blue-500/25 overflow-hidden"
                                >
                                    <span className="relative z-10 flex items-center gap-2">
                                        Get Started
                                        <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                                    </span>
                                    <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                </motion.button>

                                <motion.button
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    className="group px-8 py-4 bg-white/10 backdrop-blur-md text-white rounded-xl font-semibold border border-white/20 hover:bg-white/20 transition-all duration-300"
                                >
                                    <span className="flex items-center gap-2">
                                        <Play className="w-5 h-5" />
                                        Watch Demo
                                    </span>
                                </motion.button>
                            </motion.div>

                            {/* Trust Indicators */}
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 0.8 }}
                                className="mt-12 flex items-center gap-8"
                            >
                                <div className="flex -space-x-3">
                                    {[...Array(4)].map((_, i) => (
                                        <div
                                            key={i}
                                            className="w-10 h-10 rounded-full bg-gradient-to-r from-blue-400 to-purple-400 border-2 border-slate-900 flex items-center justify-center text-white text-xs font-bold"
                                        >
                                            {String.fromCharCode(65 + i)}
                                        </div>
                                    ))}
                                </div>
                                <div className="text-white/80">
                                    <div className="flex items-center gap-1">
                                        {[...Array(5)].map((_, i) => (
                                            <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                                        ))}
                                    </div>
                                    <p className="text-sm mt-1">5.0 from 2,394 reviews</p>
                                </div>
                            </motion.div>
                        </motion.div>

                        {/* Right Content - 3D Card */}
                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                            className="relative"
                        >
                            {/* Floating Service Cards */}
                            <div className="relative h-[600px]">
                                {services.map((service, index) => (
                                    <motion.div
                                        key={index}
                                        className={`absolute inset-0 ${currentService === index ? 'z-20' : 'z-10'}`}
                                        initial={{ opacity: 0, scale: 0.8 }}
                                        animate={{
                                            opacity: currentService === index ? 1 : 0.3,
                                            scale: currentService === index ? 1 : 0.9,
                                            x: currentService === index ? 0 : index % 2 === 0 ? -50 : 50,
                                            y: currentService === index ? 0 : index % 2 === 0 ? -30 : 30,
                                            rotateY: currentService === index ? 0 : 15,
                                        }}
                                        transition={{ duration: 0.5 }}
                                    >
                                        <div className="h-full bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl rounded-3xl border border-white/20 p-8 shadow-2xl">
                                            <div className={`w-20 h-20 bg-gradient-to-r ${service.color} rounded-2xl flex items-center justify-center text-white mb-6`}>
                                                {service.icon}
                                            </div>
                                            <h3 className="text-3xl font-bold text-white mb-4">{service.title}</h3>
                                            <p className="text-gray-300 text-lg mb-6">{service.description}</p>
                                            
                                            {/* Service Features */}
                                            <div className="space-y-3">
                                                {['Fast Turnaround', 'Expert Team', 'Best Price', 'Warranty Included'].map((feature, i) => (
                                                    <div key={i} className="flex items-center gap-3 text-white/80">
                                                        <CheckCircle2 className="w-5 h-5 text-green-400" />
                                                        <span>{feature}</span>
                                                    </div>
                                                ))}
                                            </div>

                                            {/* Service Stats */}
                                            <div className="mt-8 pt-8 border-t border-white/10 grid grid-cols-2 gap-4">
                                                <div>
                                                    <div className="text-3xl font-bold text-white">99%</div>
                                                    <div className="text-sm text-gray-400">Satisfaction</div>
                                                </div>
                                                <div>
                                                    <div className="text-3xl font-bold text-white">24/7</div>
                                                    <div className="text-sm text-gray-400">Support</div>
                                                </div>
                                            </div>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>

                            {/* Service Indicators */}
                            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 flex gap-2 z-30">
                                {services.map((_, index) => (
                                    <button
                                        key={index}
                                        onClick={() => setCurrentService(index)}
                                        className={`w-2 h-2 rounded-full transition-all duration-300 ${
                                            currentService === index 
                                                ? 'w-8 bg-gradient-to-r from-blue-400 to-purple-400' 
                                                : 'bg-white/30'
                                        }`}
                                    />
                                ))}
                            </div>
                        </motion.div>
                    </div>
                </motion.div>

                {/* Scroll Indicator */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1 }}
                    className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
                >
                    <motion.div
                        animate={{ y: [0, 10, 0] }}
                        transition={{ duration: 1.5, repeat: Infinity }}
                        className="text-white/60 text-center"
                    >
                        <div className="text-sm mb-2">Scroll to explore</div>
                        <div className="w-6 h-10 border-2 border-white/30 rounded-full mx-auto relative">
                            <motion.div
                                animate={{ y: [0, 20, 0] }}
                                transition={{ duration: 1.5, repeat: Infinity }}
                                className="w-1.5 h-1.5 bg-white rounded-full absolute left-1/2 transform -translate-x-1/2 top-2"
                            />
                        </div>
                    </motion.div>
                </motion.div>
            </section>

            {/* Trusted Brands Section */}
            <section className="py-16 bg-gradient-to-b from-slate-950 to-slate-900">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-12"
                    >
                        <h2 className="text-3xl font-bold text-white mb-4">Trusted by Leading Brands</h2>
                        <p className="text-gray-400">We're proud to work with the world's best technology companies</p>
                    </motion.div>

                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
                        {trustedBrands.map((brand, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, scale: 0.8 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                whileHover={{ scale: 1.1 }}
                                className="flex flex-col items-center justify-center p-6 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 hover:bg-white/10 transition-all duration-300"
                            >
                                <div className="text-white/60 hover:text-white transition-colors">
                                    {brand.icon}
                                </div>
                                <span className="text-sm text-gray-400 mt-2">{brand.name}</span>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Stats Section */}
            <section ref={ref} className="py-20 bg-slate-900">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
                        {stats.map((stat, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 50 }}
                                animate={inView ? { opacity: 1, y: 0 } : {}}
                                transition={{ delay: index * 0.1, duration: 0.5 }}
                                className="text-center"
                            >
                                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl text-white mb-4">
                                    {stat.icon}
                                </div>
                                <motion.div
                                    initial={{ scale: 0 }}
                                    animate={inView ? { scale: 1 } : {}}
                                    transition={{ delay: index * 0.1 + 0.3, type: "spring" }}
                                    className="text-4xl font-bold text-white mb-2"
                                >
                                    {stat.number}
                                </motion.div>
                                <div className="text-gray-400">{stat.label}</div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Add the modal */}
            <ContactModal isOpen={isContactModalOpen} onClose={() => setIsContactModalOpen(false)} />
        </>
    );
}
