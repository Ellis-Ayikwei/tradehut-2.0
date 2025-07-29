import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { 
    Headphones,
    Clock,
    MessageCircle,
    Video,
    Phone,
    Mail,
    CheckCircle,
    ArrowRight,
    Shield,
    Zap,
    Users,
    Globe
} from 'lucide-react';
import {
    IconHeadset,
    IconClock24,
    IconMessage2,
    IconVideo,
    IconPhoneCall,
    IconMail,
    IconDeviceDesktopAnalytics,
    IconBug
} from '@tabler/icons-react';
import ModernNavbar from '../../components/Layouts/ModernNavbar';
import Footer from '../../components/Layouts/Footer';
import ServiceModal from '../../components/Services/ServiceModal';

const supportServices = [
    {
        icon: <IconClock24 className="w-8 h-8" />,
        title: '24/7 Remote Support',
        description: 'Round-the-clock assistance for all your tech issues',
        services: ['Remote Desktop Support', 'Live Chat Support', 'Emergency Response', 'System Monitoring', 'Troubleshooting'],
        gradient: 'from-blue-500 to-cyan-500',
        availability: '24/7/365'
    },
    {
        icon: <IconDeviceDesktopAnalytics className="w-8 h-8" />,
        title: 'On-Site Support',
        description: 'Expert technicians at your location when needed',
        services: ['Hardware Installation', 'Network Setup', 'System Configuration', 'Training Sessions', 'Maintenance Visits'],
        gradient: 'from-purple-500 to-pink-500',
        availability: 'Business Hours + Emergency'
    },
    {
        icon: <IconBug className="w-8 h-8" />,
        title: 'Software Support',
        description: 'Comprehensive software troubleshooting and optimization',
        services: ['Software Installation', 'Updates & Patches', 'Virus Removal', 'Performance Optimization', 'Data Recovery'],
        gradient: 'from-green-500 to-emerald-500',
        availability: '24/7 Remote'
    },
    {
        icon: <IconHeadset className="w-8 h-8" />,
        title: 'Managed IT Services',
        description: 'Complete IT department for your business',
        services: ['Proactive Monitoring', 'Regular Maintenance', 'Security Updates', 'Backup Management', 'IT Consulting'],
        gradient: 'from-orange-500 to-red-500',
        availability: 'Customized SLA'
    }
];

const supportChannels = [
    {
        icon: <Phone className="w-6 h-6" />,
        title: 'Phone Support',
        description: 'Direct line to our experts',
        contact: '+1 (234) 567-890'
    },
    {
        icon: <MessageCircle className="w-6 h-6" />,
        title: 'Live Chat',
        description: 'Instant messaging support',
        contact: 'Available 24/7'
    },
    {
        icon: <Video className="w-6 h-6" />,
        title: 'Video Support',
        description: 'Face-to-face troubleshooting',
        contact: 'Schedule a session'
    },
    {
        icon: <Mail className="w-6 h-6" />,
        title: 'Email Support',
        description: 'Detailed assistance via email',
        contact: 'support@techhub.com'
    }
];

const TechSupport: React.FC = () => {
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
                starting: '$99/month',
                factors: [
                    'Support level required',
                    'Number of devices/users',
                    'Response time SLA',
                    'On-site visit frequency'
                ]
            },
            duration: service.availability,
            warranty: 'Satisfaction guaranteed',
            process: [
                'Contact our support team via your preferred channel',
                'Describe your issue to our expert technician',
                'Remote diagnosis and troubleshooting',
                'Resolution or escalation if needed',
                'Follow-up to ensure satisfaction',
                'Documentation and prevention tips'
            ],
            faqs: [
                {
                    question: 'How quickly can you respond?',
                    answer: 'Emergency support within 1 hour, standard support within 4 hours, and scheduled maintenance as per agreement.'
                },
                {
                    question: 'What is covered in support?',
                    answer: 'All hardware and software issues, network problems, security concerns, and general IT consultation.'
                },
                {
                    question: 'Do you support Mac and Linux?',
                    answer: 'Yes! Our technicians are certified in Windows, macOS, and various Linux distributions.'
                }
            ]
        };
        setSelectedService(serviceData);
        setIsModalOpen(true);
    };

    return (
        <>
            <ModernNavbar />
            
            {/* Hero Section */}
            <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-950 via-orange-950 to-red-950">
                {/* Background Effects */}
                <div className="absolute inset-0">
                    <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-orange-500/20 rounded-full blur-3xl"></div>
                    <div className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-red-500/20 rounded-full blur-3xl"></div>
                    <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:4rem_4rem]"></div>
                </div>

                <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-orange-600/20 to-red-600/20 rounded-full border border-orange-500/20 mb-6">
                            <Headphones className="w-4 h-4 text-orange-400" />
                            <span className="text-sm text-orange-300 font-medium">24/7 Technical Support</span>
                        </div>
                        
                        <h1 className="text-5xl lg:text-6xl font-bold text-white mb-6">
                            Expert Tech Support
                            <span className="block bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent">
                                When You Need It
                            </span>
                        </h1>
                        
                        <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                            Professional technical support available 24/7. From quick fixes to complex solutions, 
                            our certified experts are here to help.
                        </p>

                        <div className="flex flex-wrap gap-4 justify-center">
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
                                className="px-8 py-4 bg-gradient-to-r from-orange-600 to-red-600 text-white rounded-xl font-medium shadow-lg hover:shadow-xl transition-all duration-300"
                            >
                                Get Support Now
                            </motion.button>
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="px-8 py-4 bg-white/10 backdrop-blur-sm border border-white/20 text-white rounded-xl font-medium hover:bg-white/20 transition-all duration-300"
                            >
                                View Plans
                            </motion.button>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Support Channels */}
            <section className="py-16 bg-gradient-to-b from-slate-900 to-slate-950">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-12"
                    >
                        <h2 className="text-3xl font-bold text-white mb-4">
                            Multiple Ways to Get Help
                        </h2>
                        <p className="text-lg text-gray-400">
                            Choose your preferred support channel
                        </p>
                    </motion.div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {supportChannels.map((channel, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                whileHover={{ y: -5 }}
                                className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:bg-white/10 transition-all duration-300 text-center"
                            >
                                <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-r from-orange-600 to-red-600 rounded-xl text-white mb-4">
                                    {channel.icon}
                                </div>
                                <h3 className="text-lg font-semibold text-white mb-2">
                                    {channel.title}
                                </h3>
                                <p className="text-gray-400 text-sm mb-3">
                                    {channel.description}
                                </p>
                                <p className="text-orange-400 font-medium text-sm">
                                    {channel.contact}
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
                            Technical Support Services
                        </h2>
                        <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                            Comprehensive support solutions for all your technology needs
                        </p>
                    </motion.div>

                    <div ref={ref} className="grid md:grid-cols-2 gap-8">
                        {supportServices.map((service, index) => (
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
                                    <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-orange-400 transition-colors">
                                        {service.title}
                                    </h3>
                                    <p className="text-gray-400 mb-4">
                                        {service.description}
                                    </p>

                                    {/* Availability Badge */}
                                    <div className="inline-flex items-center gap-2 px-3 py-1 bg-green-500/20 rounded-full mb-6">
                                        <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                                        <span className="text-sm text-green-400">{service.availability}</span>
                                    </div>

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
                                    <div className="flex items-center gap-2 text-orange-400 group-hover:text-orange-300 transition-colors">
                                        <span className="font-medium">Learn More</span>
                                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                    </div>

                                    {/* Hover Effect */}
                                    <div className="absolute inset-0 bg-gradient-to-r from-orange-600/5 to-red-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Why Choose Us */}
            <section className="py-20 bg-gradient-to-b from-slate-950 to-slate-900">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-12"
                    >
                        <h2 className="text-4xl font-bold text-white mb-4">
                            Why Choose Our Support?
                        </h2>
                        <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                            Experience the difference with our professional support team
                        </p>
                    </motion.div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {[
                            {
                                icon: <Users className="w-8 h-8" />,
                                title: 'Certified Experts',
                                description: 'Our technicians are certified in major platforms and technologies',
                                stat: '50+ Experts'
                            },
                            {
                                icon: <Zap className="w-8 h-8" />,
                                title: 'Fast Response',
                                description: 'Average response time under 15 minutes for critical issues',
                                stat: '<15 min'
                            },
                            {
                                icon: <Globe className="w-8 h-8" />,
                                title: 'Global Coverage',
                                description: 'Support available in multiple languages and time zones',
                                stat: '24/7/365'
                            }
                        ].map((feature, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.2 }}
                                className="text-center"
                            >
                                <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-orange-600 to-red-600 rounded-2xl text-white mb-6">
                                    {feature.icon}
                                </div>
                                <h3 className="text-2xl font-bold text-white mb-2">
                                    {feature.title}
                                </h3>
                                <p className="text-gray-400 mb-4">
                                    {feature.description}
                                </p>
                                <div className="text-3xl font-bold text-orange-400">
                                    {feature.stat}
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
                        className="bg-gradient-to-r from-orange-600/20 to-red-600/20 backdrop-blur-sm rounded-3xl p-12 border border-white/10"
                    >
                        <h2 className="text-3xl font-bold text-white mb-4">
                            Need Technical Support Right Now?
                        </h2>
                        <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                            Our expert technicians are standing by to help you resolve any technical issues
                        </p>
                        <div className="flex flex-wrap gap-4 justify-center">
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                onClick={() => setIsModalOpen(true)}
                                className="px-8 py-4 bg-gradient-to-r from-orange-600 to-red-600 text-white rounded-xl font-medium shadow-lg hover:shadow-xl transition-all duration-300"
                            >
                                Get Immediate Support
                            </motion.button>
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="px-8 py-4 bg-white/10 backdrop-blur-sm border border-white/20 text-white rounded-xl font-medium hover:bg-white/20 transition-all duration-300"
                            >
                                Call: +1 234 567 890
                            </motion.button>
                        </div>
                    </motion.div>
                </div>
            </section>

            <Footer />

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

export default TechSupport;