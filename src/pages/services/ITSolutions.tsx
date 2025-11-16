import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { 
    Server, 
    Cloud, 
    Shield, 
    Network,
    Database,
    Lock,
    CheckCircle,
    ArrowRight,
    Globe,
    Cpu,
    HardDrive,
    Wifi
} from 'lucide-react';
import {
    IconServer2,
    IconCloud,
    IconShieldLock,
    IconNetwork,
    IconDatabase,
    IconLock,
    IconDeviceAnalytics,
    IconServerCog
} from '@tabler/icons-react';
import ServiceModal from '../../components/Services/ServiceModal';

const itServices = [
    {
        icon: <IconNetwork className="w-8 h-8" />,
        title: 'Network Infrastructure',
        description: 'Design, setup, and management of robust network solutions',
        services: ['Network Design & Setup', 'Router Configuration', 'Switch Management', 'WiFi Solutions', 'VPN Setup'],
        gradient: 'from-blue-500 to-cyan-500'
    },
    {
        icon: <IconCloud className="w-8 h-8" />,
        title: 'Cloud Solutions',
        description: 'Migration, deployment, and management of cloud services',
        services: ['Cloud Migration', 'AWS/Azure Setup', 'Cloud Backup', 'SaaS Implementation', 'Cloud Security'],
        gradient: 'from-purple-500 to-pink-500'
    },
    {
        icon: <IconShieldLock className="w-8 h-8" />,
        title: 'Cybersecurity',
        description: 'Comprehensive security solutions to protect your business',
        services: ['Security Audits', 'Firewall Setup', 'Antivirus Solutions', 'Data Encryption', 'Security Training'],
        gradient: 'from-green-500 to-emerald-500'
    },
    {
        icon: <IconServer2 className="w-8 h-8" />,
        title: 'Server Management',
        description: 'Setup, maintenance, and optimization of server infrastructure',
        services: ['Server Setup', 'Performance Optimization', 'Backup Solutions', 'Disaster Recovery', '24/7 Monitoring'],
        gradient: 'from-orange-500 to-red-500'
    }
];

const benefits = [
    {
        icon: <Shield className="w-6 h-6" />,
        title: 'Enhanced Security',
        description: 'Protect your business from cyber threats with enterprise-grade security'
    },
    {
        icon: <Cpu className="w-6 h-6" />,
        title: 'Improved Performance',
        description: 'Optimize your IT infrastructure for maximum efficiency'
    },
    {
        icon: <Globe className="w-6 h-6" />,
        title: 'Scalable Solutions',
        description: 'Grow your IT capabilities as your business expands'
    },
    {
        icon: <Database className="w-6 h-6" />,
        title: 'Data Protection',
        description: 'Ensure your critical data is always backed up and secure'
    },
    {
        icon: <Network className="w-6 h-6" />,
        title: 'Reliable Connectivity',
        description: 'Maintain stable and fast network connections'
    },
    {
        icon: <Lock className="w-6 h-6" />,
        title: '24/7 Support',
        description: 'Round-the-clock monitoring and support for your systems'
    }
];

const ITSolutions: React.FC = () => {
    const [selectedService, setSelectedService] = useState<any>(null);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true });

    const handleServiceClick = (service: any) => {
        const serviceData = {
            title: service.title,
            description: service.description,
            icon: service.icon,
            features: service.services,
            pricing: {
                starting: 'GHC 3,000/month',
                factors: [
                    'Business size and needs',
                    'Number of users/devices',
                    'Service level agreement',
                    'Support requirements'
                ]
            },
            duration: 'Ongoing monthly service',
            warranty: 'SLA-backed service guarantee',
            process: [
                'Initial consultation and needs assessment',
                'Custom solution design and proposal',
                'Implementation and setup',
                'Testing and optimization',
                'Training and documentation',
                'Ongoing support and maintenance'
            ],
            faqs: [
                {
                    question: 'What size businesses do you serve?',
                    answer: 'We serve businesses of all sizes, from small startups to large enterprises. Our solutions are scalable and customized to your needs.'
                },
                {
                    question: 'Do you offer 24/7 support?',
                    answer: 'Yes! We provide round-the-clock monitoring and support for critical systems. Emergency support is always available.'
                },
                {
                    question: 'Can you work with existing systems?',
                    answer: 'Absolutely! We can integrate with and optimize your existing IT infrastructure while planning for future upgrades.'
                }
            ]
        };
        setSelectedService(serviceData);
        setIsModalOpen(true);
    };

    return (
        <>
            {/* Hero Section */}
            <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-950 via-purple-950 to-blue-950">
                {/* Background Effects */}
                <div className="absolute inset-0">
                    <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl"></div>
                    <div className="absolute bottom-1/3 left-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl"></div>
                    <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:4rem_4rem]"></div>
                </div>

                <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-purple-600/20 to-blue-600/20 rounded-full border border-purple-500/20 mb-6">
                            <Server className="w-4 h-4 text-purple-400" />
                            <span className="text-sm text-purple-300 font-medium">Enterprise IT Solutions</span>
                        </div>
                        
                        <h1 className="text-5xl lg:text-6xl font-bold text-white mb-6">
                            Complete IT
                            <span className="block bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                                Infrastructure Solutions
                            </span>
                        </h1>
                        
                        <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                            Transform your business with enterprise-grade IT solutions. 
                            From network setup to cloud migration, we handle everything.
                        </p>

                        <div className="flex flex-wrap gap-4 justify-center">
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
                                className="px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-xl font-medium shadow-lg hover:shadow-xl transition-all duration-300"
                            >
                                Explore Solutions
                            </motion.button>
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="px-8 py-4 bg-white/10 backdrop-blur-sm border border-white/20 text-white rounded-xl font-medium hover:bg-white/20 transition-all duration-300"
                            >
                                Get Consultation
                            </motion.button>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Benefits Section */}
            <section className="py-20 bg-gradient-to-b from-slate-900 to-slate-950">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-12"
                    >
                        <h2 className="text-4xl font-bold text-white mb-4">
                            Why Choose Our IT Solutions?
                        </h2>
                        <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                            Empower your business with cutting-edge technology and expert support
                        </p>
                    </motion.div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {benefits.map((benefit, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:bg-white/10 transition-all duration-300"
                            >
                                <div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-blue-600 rounded-xl flex items-center justify-center text-white mb-4">
                                    {benefit.icon}
                                </div>
                                <h3 className="text-xl font-semibold text-white mb-2">
                                    {benefit.title}
                                </h3>
                                <p className="text-gray-400">
                                    {benefit.description}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Services Grid */}
            <section id="services" className="py-20 bg-slate-950">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-12"
                    >
                        <h2 className="text-4xl font-bold text-white mb-4">
                            Our IT Services
                        </h2>
                        <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                            Comprehensive solutions for all your technology needs
                        </p>
                    </motion.div>

                    <div ref={ref} className="grid md:grid-cols-2 gap-8">
                        {itServices.map((service, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={inView ? { opacity: 1, scale: 1 } : {}}
                                transition={{ delay: index * 0.1 }}
                                onClick={() => handleServiceClick(service)}
                                className="group cursor-pointer"
                            >
                                <div className="relative h-full bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/10 overflow-hidden hover:bg-white/10 hover:border-white/20 transition-all duration-300">
                                    {/* Icon */}
                                    <div className={`w-20 h-20 bg-gradient-to-r ${service.gradient} rounded-2xl flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform`}>
                                        {service.icon}
                                    </div>

                                    {/* Content */}
                                    <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-purple-400 transition-colors">
                                        {service.title}
                                    </h3>
                                    <p className="text-gray-400 mb-6">
                                        {service.description}
                                    </p>

                                    {/* Services List */}
                                    <div className="space-y-2 mb-6">
                                        {service.services.slice(0, 3).map((item, idx) => (
                                            <div key={idx} className="flex items-center gap-2 text-gray-300">
                                                <CheckCircle className="w-4 h-4 text-green-400" />
                                                <span className="text-sm">{item}</span>
                                            </div>
                                        ))}
                                        {service.services.length > 3 && (
                                            <p className="text-sm text-gray-500 pl-6">
                                                +{service.services.length - 3} more services
                                            </p>
                                        )}
                                    </div>

                                    {/* CTA */}
                                    <div className="flex items-center gap-2 text-purple-400 group-hover:text-purple-300 transition-colors">
                                        <span className="font-medium">Learn More</span>
                                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                    </div>

                                    {/* Hover Effect */}
                                    <div className="absolute inset-0 bg-gradient-to-r from-purple-600/5 to-blue-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Process Section */}
            <section className="py-20 bg-gradient-to-b from-slate-950 to-slate-900">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-12"
                    >
                        <h2 className="text-4xl font-bold text-white mb-4">
                            How We Work
                        </h2>
                        <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                            Our proven process ensures successful IT transformation
                        </p>
                    </motion.div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {[
                            {
                                step: '01',
                                title: 'Assessment',
                                description: 'We analyze your current infrastructure and identify opportunities for improvement',
                                icon: <IconDeviceAnalytics className="w-6 h-6" />
                            },
                            {
                                step: '02',
                                title: 'Planning',
                                description: 'Custom solution design tailored to your business needs and budget',
                                icon: <IconServerCog className="w-6 h-6" />
                            },
                            {
                                step: '03',
                                title: 'Implementation',
                                description: 'Expert deployment with minimal disruption to your operations',
                                icon: <IconNetwork className="w-6 h-6" />
                            }
                        ].map((process, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.2 }}
                                className="relative"
                            >
                                <div className="text-center">
                                    <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl text-white mb-4 relative">
                                        {process.icon}
                                        <span className="absolute -top-2 -right-2 w-8 h-8 bg-slate-900 rounded-full flex items-center justify-center text-xs font-bold text-purple-400 border-2 border-purple-400">
                                            {process.step}
                                        </span>
                                    </div>
                                    <h3 className="text-xl font-semibold text-white mb-2">
                                        {process.title}
                                    </h3>
                                    <p className="text-gray-400">
                                        {process.description}
                                    </p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 bg-slate-900">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="bg-gradient-to-r from-purple-600/20 to-blue-600/20 backdrop-blur-sm rounded-3xl p-12 border border-white/10"
                    >
                        <h2 className="text-3xl font-bold text-white mb-4">
                            Ready to Transform Your IT Infrastructure?
                        </h2>
                        <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                            Let's discuss how our IT solutions can help your business grow and succeed
                        </p>
                        <div className="flex flex-wrap gap-4 justify-center">
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                onClick={() => setIsModalOpen(true)}
                                className="px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-xl font-medium shadow-lg hover:shadow-xl transition-all duration-300"
                            >
                                Schedule Consultation
                            </motion.button>
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="px-8 py-4 bg-white/10 backdrop-blur-sm border border-white/20 text-white rounded-xl font-medium hover:bg-white/20 transition-all duration-300"
                            >
                                Download IT Guide
                            </motion.button>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Service Modal */}
            {selectedService && (
                <ServiceModal
                    isOpen={isModalOpen}
                    onClose={() => setIsModalOpen(false)}
                    service={selectedService}
                />
            )}
        </>
    );
};

export default ITSolutions;