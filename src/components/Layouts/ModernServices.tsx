import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

interface Service {
    id: string;
    icon: string;
    title: string;
    description: string;
    features: string[];
    gradient: string;
    image?: string;
}

const services: Service[] = [
    {
        id: 'device-repair',
        icon: 'fas fa-tools',
        title: 'Professional Device Repair',
        description: 'Expert repair services for all your electronic devices with industry-leading warranty and quality assurance.',
        features: [
            'Smartphone & Tablet Repair',
            'Laptop & Desktop Repair',
            'Gaming Console Repair',
            'Same-Day Service Available',
            '6-Month Warranty',
            'Genuine Parts Guarantee'
        ],
        gradient: 'from-blue-600 via-blue-700 to-indigo-800'
    },
    {
        id: 'device-sales',
        icon: 'fas fa-shopping-cart',
        title: 'Premium Device Sales',
        description: 'Curated selection of the latest technology devices from trusted brands at competitive prices.',
        features: [
            'Latest Smartphones',
            'High-Performance Laptops',
            'Professional Tablets',
            'Gaming Equipment',
            'Accessories & Parts',
            'Extended Warranty Options'
        ],
        gradient: 'from-purple-600 via-purple-700 to-pink-800'
    },
    {
        id: 'it-solutions',
        icon: 'fas fa-server',
        title: 'Enterprise IT Solutions',
        description: 'Comprehensive IT infrastructure and support services designed to scale with your business needs.',
        features: [
            'Network Setup & Management',
            'Cloud Solutions',
            'Cybersecurity Services',
            'Data Backup & Recovery',
            '24/7 Technical Support',
            'IT Consulting'
        ],
        gradient: 'from-emerald-600 via-green-700 to-teal-800'
    },
    {
        id: 'web-development',
        icon: 'fas fa-code',
        title: 'Custom Web Development',
        description: 'Modern, responsive web applications and digital solutions built with cutting-edge technologies.',
        features: [
            'Custom Web Applications',
            'E-commerce Solutions',
            'Mobile-Responsive Design',
            'SEO Optimization',
            'API Integration',
            'Ongoing Maintenance'
        ],
        gradient: 'from-orange-600 via-red-700 to-pink-800'
    }
];

const ModernServices: React.FC = () => {
    const [activeService, setActiveService] = useState<string>(services[0].id);
    const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true });

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.6,
                ease: "easeOut"
            }
        }
    };

    return (
        <section id="services" className="py-24 bg-gradient-to-br from-gray-50 to-blue-50 relative overflow-hidden">
            {/* Background Elements */}
            <div className="absolute inset-0">
                <div className="absolute top-0 left-0 w-96 h-96 bg-blue-200/30 rounded-full blur-3xl"></div>
                <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-200/30 rounded-full blur-3xl"></div>
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]"></div>
            </div>

            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <motion.div
                    ref={ref}
                    initial="hidden"
                    animate={inView ? "visible" : "hidden"}
                    variants={containerVariants}
                    className="text-center mb-20"
                >
                    <motion.div variants={itemVariants} className="inline-flex items-center space-x-2 bg-white/80 backdrop-blur-sm border border-blue-200 rounded-full px-6 py-3 mb-6">
                        <i className="fas fa-rocket text-blue-600"></i>
                        <span className="text-sm font-semibold text-gray-700">Our Services</span>
                    </motion.div>
                    
                    <motion.h2 variants={itemVariants} className="text-4xl md:text-6xl font-bold mb-6">
                        <span className="bg-gradient-to-r from-gray-900 via-blue-900 to-purple-900 bg-clip-text text-transparent">
                            World-Class
                        </span>
                        <br />
                        <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                            IT Services
                        </span>
                    </motion.h2>
                    
                    <motion.p variants={itemVariants} className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                        Experience excellence in every service we provide. From device repairs to enterprise solutions, 
                        we deliver cutting-edge technology services that exceed expectations.
                    </motion.p>
                </motion.div>

                {/* Services Grid */}
                <motion.div
                    initial="hidden"
                    animate={inView ? "visible" : "hidden"}
                    variants={containerVariants}
                    className="grid lg:grid-cols-2 gap-8 items-start"
                >
                    {/* Service Cards */}
                    <div className="space-y-6">
                        {services.map((service, index) => (
                            <motion.div
                                key={service.id}
                                variants={itemVariants}
                                className={`group cursor-pointer transition-all duration-500 ${
                                    activeService === service.id
                                        ? 'scale-105'
                                        : 'hover:scale-102'
                                }`}
                                onClick={() => setActiveService(service.id)}
                            >
                                <div className={`relative p-8 rounded-3xl border transition-all duration-500 ${
                                    activeService === service.id
                                        ? 'bg-white shadow-2xl border-blue-200 shadow-blue-500/20'
                                        : 'bg-white/70 hover:bg-white shadow-lg border-gray-200 hover:shadow-xl hover:border-blue-200'
                                }`}>
                                    {/* Icon */}
                                    <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${service.gradient} flex items-center justify-center mb-6 transition-all duration-500 ${
                                        activeService === service.id ? 'scale-110' : 'group-hover:scale-105'
                                    }`}>
                                        <i className={`${service.icon} text-2xl text-white`}></i>
                                    </div>

                                    {/* Content */}
                                    <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors">
                                        {service.title}
                                    </h3>
                                    
                                    <p className="text-gray-600 leading-relaxed mb-6">
                                        {service.description}
                                    </p>

                                    {/* Features - Show when active */}
                                    <motion.div
                                        initial={false}
                                        animate={{
                                            height: activeService === service.id ? 'auto' : 0,
                                            opacity: activeService === service.id ? 1 : 0
                                        }}
                                        transition={{ duration: 0.5, ease: "easeInOut" }}
                                        className="overflow-hidden"
                                    >
                                        <div className="pt-4 border-t border-gray-100">
                                            <h4 className="font-semibold text-gray-900 mb-3">Key Features:</h4>
                                            <div className="grid grid-cols-2 gap-2">
                                                {service.features.map((feature, idx) => (
                                                    <div key={idx} className="flex items-center space-x-2">
                                                        <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                                                        <span className="text-sm text-gray-600">{feature}</span>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    </motion.div>

                                    {/* Active Indicator */}
                                    {activeService === service.id && (
                                        <motion.div
                                            layoutId="activeIndicator"
                                            className="absolute -left-1 top-8 bottom-8 w-1 bg-gradient-to-b from-blue-500 to-purple-500 rounded-full"
                                        />
                                    )}
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    {/* Interactive Visual */}
                    <motion.div
                        variants={itemVariants}
                        className="lg:sticky lg:top-24"
                    >
                        <div className="relative">
                            {/* Main Visual Container */}
                            <div className="relative bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-8 shadow-2xl">
                                {/* Dynamic Background */}
                                <div className={`absolute inset-0 bg-gradient-to-br ${
                                    services.find(s => s.id === activeService)?.gradient || 'from-blue-600 to-purple-600'
                                } opacity-10 rounded-3xl transition-all duration-1000`}></div>
                                
                                {/* Content */}
                                <div className="relative z-10">
                                    {/* Active Service Display */}
                                    <motion.div
                                        key={activeService}
                                        initial={{ opacity: 0, scale: 0.8 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        transition={{ duration: 0.5 }}
                                        className="text-center"
                                    >
                                        <div className={`w-24 h-24 mx-auto rounded-3xl bg-gradient-to-r ${
                                            services.find(s => s.id === activeService)?.gradient || 'from-blue-600 to-purple-600'
                                        } flex items-center justify-center mb-8 shadow-2xl`}>
                                            <i className={`${services.find(s => s.id === activeService)?.icon} text-4xl text-white`}></i>
                                        </div>
                                        
                                        <h3 className="text-3xl font-bold text-gray-900 mb-4">
                                            {services.find(s => s.id === activeService)?.title}
                                        </h3>
                                        
                                        <p className="text-gray-600 leading-relaxed">
                                            {services.find(s => s.id === activeService)?.description}
                                        </p>
                                    </motion.div>

                                    {/* Stats Grid */}
                                    <div className="grid grid-cols-2 gap-6 mt-12">
                                        {[
                                            { number: '99.8%', label: 'Success Rate' },
                                            { number: '24/7', label: 'Support' },
                                            { number: '5000+', label: 'Happy Clients' },
                                            { number: '6mo', label: 'Warranty' }
                                        ].map((stat, index) => (
                                            <motion.div
                                                key={index}
                                                initial={{ opacity: 0, y: 20 }}
                                                animate={{ opacity: 1, y: 0 }}
                                                transition={{ delay: index * 0.1 }}
                                                className="text-center p-4 bg-white/50 backdrop-blur-sm rounded-2xl border border-white/30"
                                            >
                                                <div className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                                                    {stat.number}
                                                </div>
                                                <div className="text-sm text-gray-600 font-medium">
                                                    {stat.label}
                                                </div>
                                            </motion.div>
                                        ))}
                                    </div>

                                    {/* CTA Button */}
                                    <motion.button
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.95 }}
                                        className={`w-full mt-8 px-8 py-4 bg-gradient-to-r ${
                                            services.find(s => s.id === activeService)?.gradient || 'from-blue-600 to-purple-600'
                                        } text-white rounded-2xl font-semibold text-lg shadow-2xl hover:shadow-blue-500/25 transition-all duration-300`}
                                    >
                                        Get Started Today
                                        <i className="fas fa-arrow-right ml-2"></i>
                                    </motion.button>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </motion.div>

                {/* Process Section */}
                <motion.div
                    initial="hidden"
                    animate={inView ? "visible" : "hidden"}
                    variants={containerVariants}
                    className="mt-32"
                >
                    <motion.div variants={itemVariants} className="text-center mb-16">
                        <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                            Our <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Process</span>
                        </h3>
                        <p className="text-gray-600 text-lg">Simple, efficient, and transparent</p>
                    </motion.div>

                    <div className="grid md:grid-cols-4 gap-8">
                        {[
                            { step: '01', title: 'Consultation', description: 'Free initial assessment', icon: 'fas fa-comments' },
                            { step: '02', title: 'Diagnosis', description: 'Thorough problem analysis', icon: 'fas fa-search' },
                            { step: '03', title: 'Solution', description: 'Expert repair or service', icon: 'fas fa-cogs' },
                            { step: '04', title: 'Delivery', description: 'Quality assurance & delivery', icon: 'fas fa-check-circle' }
                        ].map((process, index) => (
                            <motion.div
                                key={index}
                                variants={itemVariants}
                                className="text-center group"
                            >
                                <div className="relative mb-6">
                                    <div className="w-20 h-20 mx-auto bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl flex items-center justify-center shadow-2xl group-hover:scale-110 transition-transform duration-300">
                                        <i className={`${process.icon} text-2xl text-white`}></i>
                                    </div>
                                    <div className="absolute -top-2 -right-2 w-8 h-8 bg-orange-500 text-white rounded-full flex items-center justify-center text-sm font-bold">
                                        {process.step}
                                    </div>
                                </div>
                                <h4 className="text-xl font-bold text-gray-900 mb-2">{process.title}</h4>
                                <p className="text-gray-600">{process.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default ModernServices;