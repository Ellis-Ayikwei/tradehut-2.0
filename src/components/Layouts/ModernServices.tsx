import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Link } from 'react-router-dom';
import { 
    Smartphone, 
    Laptop, 
    Server, 
    Code, 
    Wrench,
    Shield,
    Clock,
    CheckCircle,
    ArrowRight,
    Sparkles,
    Zap,
    Globe,
    Cpu,
    Wifi,
    Database
} from 'lucide-react';
import {
    IconDeviceMobile,
    IconDeviceLaptop,
    IconServer2,
    IconCode,
    IconTools,
    IconShieldCheck,
    IconRocket,
    IconBrandApple,
    IconBrandWindows,
    IconBrandAndroid,
    IconHeadset,
    IconCloud,
    IconNetwork
} from '@tabler/icons-react';

const services = [
    {
        id: 1,
        title: 'Device Repair',
        description: 'Professional repair services for all your devices with certified technicians',
        icon: <IconDeviceMobile className="w-8 h-8" />,
        gradient: 'from-blue-600 to-cyan-600',
        features: [
            'Same-day repairs',
            'Original parts',
            '90-day warranty',
            'Free diagnostics'
        ],
        subServices: [
            { name: 'iPhone Repair', icon: <IconBrandApple className="w-5 h-5" /> },
            { name: 'Android Repair', icon: <IconBrandAndroid className="w-5 h-5" /> },
            { name: 'Laptop Repair', icon: <IconDeviceLaptop className="w-5 h-5" /> },
            { name: 'Tablet Repair', icon: <IconDeviceMobile className="w-5 h-5" /> }
        ],
        stats: { completed: '5000+', rating: '4.9/5' }
    },
    {
        id: 2,
        title: 'IT Solutions',
        description: 'Complete IT infrastructure and support services for businesses',
        icon: <IconServer2 className="w-8 h-8" />,
        gradient: 'from-purple-600 to-pink-600',
        features: [
            'Network setup',
            'Server management',
            'Cloud solutions',
            '24/7 monitoring'
        ],
        subServices: [
            { name: 'Cloud Migration', icon: <IconCloud className="w-5 h-5" /> },
            { name: 'Network Security', icon: <Shield className="w-5 h-5" /> },
            { name: 'Data Backup', icon: <Database className="w-5 h-5" /> },
            { name: 'IT Consulting', icon: <IconHeadset className="w-5 h-5" /> }
        ],
        stats: { clients: '200+', uptime: '99.9%' }
    },
    {
        id: 3,
        title: 'Web Development',
        description: 'Custom web applications and digital solutions for modern businesses',
        icon: <IconCode className="w-8 h-8" />,
        gradient: 'from-green-600 to-emerald-600',
        features: [
            'Responsive design',
            'E-commerce solutions',
            'API integration',
            'SEO optimization'
        ],
        subServices: [
            { name: 'Frontend Dev', icon: <Globe className="w-5 h-5" /> },
            { name: 'Backend Dev', icon: <Server className="w-5 h-5" /> },
            { name: 'Mobile Apps', icon: <Smartphone className="w-5 h-5" /> },
            { name: 'UI/UX Design', icon: <Sparkles className="w-5 h-5" /> }
        ],
        stats: { projects: '300+', satisfaction: '98%' }
    },
    {
        id: 4,
        title: 'Tech Support',
        description: 'Round-the-clock technical support for all your technology needs',
        icon: <IconHeadset className="w-8 h-8" />,
        gradient: 'from-orange-600 to-red-600',
        features: [
            '24/7 availability',
            'Remote assistance',
            'On-site support',
            'Priority response'
        ],
        subServices: [
            { name: 'Remote Support', icon: <Wifi className="w-5 h-5" /> },
            { name: 'Hardware Support', icon: <Cpu className="w-5 h-5" /> },
            { name: 'Software Support', icon: <Code className="w-5 h-5" /> },
            { name: 'Network Support', icon: <IconNetwork className="w-5 h-5" /> }
        ],
        stats: { resolved: '10K+', response: '<1hr' }
    }
];

const ModernServices: React.FC = () => {
    const [hoveredService, setHoveredService] = useState<number | null>(null);
    const [selectedService, setSelectedService] = useState<number>(0);
    const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true });

    return (
        <section id="services" className="py-24 bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 relative overflow-hidden">
            {/* Background Elements */}
            <div className="absolute inset-0">
                <div className="absolute top-0 left-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
                <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:4rem_4rem]"></div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <motion.div
                        initial={{ scale: 0 }}
                        whileInView={{ scale: 1 }}
                        viewport={{ once: true }}
                        className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-full border border-blue-500/20 mb-4"
                    >
                        <Zap className="w-4 h-4 text-blue-400" />
                        <span className="text-sm text-blue-300 font-medium">World-Class Services</span>
                    </motion.div>
                    
                    <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">
                        Services That
                        <span className="block bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                            Transform Business
                        </span>
                    </h2>
                    
                    <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                        From device repairs to enterprise solutions, we deliver excellence with cutting-edge technology and unmatched expertise
                    </p>
                </motion.div>

                {/* Services Grid */}
                <div ref={ref} className="grid lg:grid-cols-2 gap-8 mb-16">
                    {services.map((service, index) => (
                        <motion.div
                            key={service.id}
                            initial={{ opacity: 0, y: 50 }}
                            animate={inView ? { opacity: 1, y: 0 } : {}}
                            transition={{ delay: index * 0.1, duration: 0.5 }}
                            onMouseEnter={() => setHoveredService(service.id)}
                            onMouseLeave={() => setHoveredService(null)}
                            onClick={() => setSelectedService(index)}
                            className={`relative group cursor-pointer ${
                                selectedService === index ? 'ring-2 ring-blue-500' : ''
                            }`}
                        >
                            <div className="relative h-full bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm rounded-3xl border border-white/10 p-8 overflow-hidden transition-all duration-300 hover:bg-white/10 hover:border-white/20">
                                {/* Gradient Background */}
                                <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}></div>
                                
                                {/* Service Content */}
                                <div className="relative z-10">
                                    {/* Icon and Title */}
                                    <div className="flex items-start justify-between mb-6">
                                        <div className="flex items-center gap-4">
                                            <motion.div
                                                whileHover={{ rotate: 360 }}
                                                transition={{ duration: 0.5 }}
                                                className={`w-16 h-16 bg-gradient-to-r ${service.gradient} rounded-2xl flex items-center justify-center text-white shadow-lg`}
                                            >
                                                {service.icon}
                                            </motion.div>
                                            <div>
                                                <h3 className="text-2xl font-bold text-white mb-1">{service.title}</h3>
                                                <div className="flex items-center gap-4 text-sm">
                                                    <span className="text-gray-400">{service.stats[Object.keys(service.stats)[0]]}</span>
                                                    <span className="text-gray-600">•</span>
                                                    <span className="text-gray-400">{service.stats[Object.keys(service.stats)[1]]}</span>
                                                </div>
                                            </div>
                                        </div>
                                        <motion.div
                                            animate={{ x: hoveredService === service.id ? 0 : 10, opacity: hoveredService === service.id ? 1 : 0 }}
                                            className="text-white"
                                        >
                                            <ArrowRight className="w-6 h-6" />
                                        </motion.div>
                                    </div>

                                    {/* Description */}
                                    <p className="text-gray-300 mb-6">{service.description}</p>

                                    {/* Features */}
                                    <div className="grid grid-cols-2 gap-3 mb-6">
                                        {service.features.map((feature, idx) => (
                                            <motion.div
                                                key={idx}
                                                initial={{ opacity: 0, x: -20 }}
                                                animate={inView ? { opacity: 1, x: 0 } : {}}
                                                transition={{ delay: index * 0.1 + idx * 0.05 }}
                                                className="flex items-center gap-2 text-gray-400"
                                            >
                                                <CheckCircle className="w-4 h-4 text-green-400" />
                                                <span className="text-sm">{feature}</span>
                                            </motion.div>
                                        ))}
                                    </div>

                                    {/* Sub Services */}
                                    <div className="flex flex-wrap gap-2">
                                        {service.subServices.map((sub, idx) => (
                                            <motion.div
                                                key={idx}
                                                whileHover={{ scale: 1.05 }}
                                                className="flex items-center gap-1.5 px-3 py-1.5 bg-white/5 rounded-lg border border-white/10 hover:bg-white/10 transition-all duration-200"
                                            >
                                                <span className="text-gray-400">{sub.icon}</span>
                                                <span className="text-xs text-gray-300">{sub.name}</span>
                                            </motion.div>
                                        ))}
                                    </div>
                                </div>

                                {/* View Details Button */}
                                <Link to={`/services/${service.id === 1 ? 'device-repair' : service.id === 2 ? 'it-solutions' : service.id === 3 ? 'web-development' : 'tech-support'}`}>
                                    <motion.button
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.95 }}
                                        className="w-full mt-4 px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl font-medium shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-2"
                                    >
                                        <span>View Details</span>
                                        <ArrowRight className="w-4 h-4" />
                                    </motion.button>
                                </Link>

                                {/* Hover Effect Overlay */}
                                <motion.div
                                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent"
                                    animate={{
                                        x: hoveredService === service.id ? '100%' : '-100%',
                                    }}
                                    transition={{ duration: 0.6 }}
                                />
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* CTA Section */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center"
                >
                    <div className="inline-flex flex-col sm:flex-row items-center gap-4 p-6 bg-gradient-to-r from-blue-600/10 to-purple-600/10 rounded-3xl border border-white/10 backdrop-blur-sm">
                        <div className="flex items-center gap-3">
                            <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl flex items-center justify-center">
                                <IconRocket className="w-6 h-6 text-white" />
                            </div>
                            <div className="text-left">
                                <h3 className="text-white font-semibold">Ready to get started?</h3>
                                <p className="text-gray-400 text-sm">Transform your business with our services</p>
                            </div>
                        </div>
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl font-medium shadow-lg hover:shadow-xl transition-all duration-300"
                        >
                            <span className="flex items-center gap-2">
                                Get Free Consultation
                                <ArrowRight className="w-4 h-4" />
                            </span>
                        </motion.button>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default ModernServices;