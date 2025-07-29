import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { 
    Smartphone, 
    Laptop, 
    Tablet, 
    Monitor,
    Watch,
    Headphones,
    CheckCircle,
    ArrowRight,
    Clock,
    Shield,
    Wrench,
    Zap
} from 'lucide-react';
import {
    IconDeviceMobile,
    IconDeviceLaptop,
    IconDeviceTablet,
    IconDeviceDesktop,
    IconDeviceWatch,
    IconHeadphones,
    IconTools,
    IconShieldCheck
} from '@tabler/icons-react';
import ModernNavbar from '../../components/Layouts/ModernNavbar';
import Footer from '../../components/Layouts/Footer';
import ServiceModal from '../../components/Services/ServiceModal';

const deviceTypes = [
    {
        icon: <IconDeviceMobile className="w-8 h-8" />,
        title: 'Smartphone Repair',
        description: 'Screen replacement, battery issues, charging problems, and more',
        services: ['Screen Replacement', 'Battery Replacement', 'Charging Port Repair', 'Camera Repair', 'Water Damage'],
        gradient: 'from-blue-500 to-cyan-500'
    },
    {
        icon: <IconDeviceLaptop className="w-8 h-8" />,
        title: 'Laptop Repair',
        description: 'Hardware upgrades, software issues, keyboard replacement, and more',
        services: ['Screen Repair', 'Keyboard Replacement', 'SSD Upgrade', 'RAM Upgrade', 'Motherboard Repair'],
        gradient: 'from-purple-500 to-pink-500'
    },
    {
        icon: <IconDeviceTablet className="w-8 h-8" />,
        title: 'Tablet Repair',
        description: 'Screen repair, battery replacement, software troubleshooting',
        services: ['Screen Replacement', 'Battery Service', 'Charging Issues', 'Software Fix', 'Button Repair'],
        gradient: 'from-green-500 to-emerald-500'
    },
    {
        icon: <IconDeviceDesktop className="w-8 h-8" />,
        title: 'Desktop Repair',
        description: 'Component upgrades, virus removal, performance optimization',
        services: ['Hardware Upgrade', 'Virus Removal', 'OS Installation', 'Data Recovery', 'Performance Boost'],
        gradient: 'from-orange-500 to-red-500'
    }
];

const repairProcess = [
    {
        step: 1,
        title: 'Device Drop-off',
        description: 'Bring your device to our service center or schedule a pickup',
        icon: <IconDeviceMobile className="w-6 h-6" />
    },
    {
        step: 2,
        title: 'Free Diagnosis',
        description: 'Our experts analyze the issue and provide a detailed quote',
        icon: <IconTools className="w-6 h-6" />
    },
    {
        step: 3,
        title: 'Repair Approval',
        description: 'You approve the repair cost and we begin the work',
        icon: <CheckCircle className="w-6 h-6" />
    },
    {
        step: 4,
        title: 'Quality Repair',
        description: 'Expert technicians fix your device using quality parts',
        icon: <Wrench className="w-6 h-6" />
    },
    {
        step: 5,
        title: 'Testing & QC',
        description: 'Thorough testing to ensure everything works perfectly',
        icon: <IconShieldCheck className="w-6 h-6" />
    },
    {
        step: 6,
        title: 'Device Pickup',
        description: 'Collect your repaired device with warranty coverage',
        icon: <Zap className="w-6 h-6" />
    }
];

const DeviceRepair: React.FC = () => {
    const [selectedService, setSelectedService] = useState<any>(null);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true });

    const handleServiceClick = (device: any) => {
        const serviceData = {
            title: device.title,
            description: device.description,
            icon: device.icon,
            features: device.services,
            pricing: {
                starting: '$49',
                factors: [
                    'Device type and model',
                    'Severity of damage',
                    'Parts required',
                    'Urgency of repair'
                ]
            },
            duration: '2-4 hours for most repairs',
            warranty: '90 days on parts and labor',
            process: repairProcess.map(p => `${p.title}: ${p.description}`),
            faqs: [
                {
                    question: 'Do you use original parts?',
                    answer: 'We offer both original manufacturer parts and high-quality aftermarket alternatives. The choice is yours!'
                },
                {
                    question: 'How long does repair take?',
                    answer: 'Most common repairs are completed within 2-4 hours. Complex repairs may take 1-2 business days.'
                },
                {
                    question: 'Is there a warranty?',
                    answer: 'Yes! All repairs come with a 90-day warranty on parts and labor. Extended warranties are available.'
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
            <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-950 via-blue-950 to-purple-950">
                {/* Background Effects */}
                <div className="absolute inset-0">
                    <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl"></div>
                    <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl"></div>
                    <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:4rem_4rem]"></div>
                </div>

                <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-full border border-blue-500/20 mb-6">
                            <Wrench className="w-4 h-4 text-blue-400" />
                            <span className="text-sm text-blue-300 font-medium">Professional Device Repair</span>
                        </div>
                        
                        <h1 className="text-5xl lg:text-6xl font-bold text-white mb-6">
                            Expert Device
                            <span className="block bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                                Repair Services
                            </span>
                        </h1>
                        
                        <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                            From cracked screens to battery issues, our certified technicians fix all device problems 
                            with precision and care. Same-day service available!
                        </p>

                        <div className="flex flex-wrap gap-4 justify-center">
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
                                className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl font-medium shadow-lg hover:shadow-xl transition-all duration-300"
                            >
                                View Services
                            </motion.button>
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="px-8 py-4 bg-white/10 backdrop-blur-sm border border-white/20 text-white rounded-xl font-medium hover:bg-white/20 transition-all duration-300"
                            >
                                Get Free Quote
                            </motion.button>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Trust Indicators */}
            <section className="py-12 bg-gradient-to-b from-slate-900 to-slate-950">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
                        {[
                            { icon: <Clock className="w-6 h-6" />, value: '2-4 hrs', label: 'Average Repair Time' },
                            { icon: <Shield className="w-6 h-6" />, value: '90 Days', label: 'Warranty Period' },
                            { icon: <CheckCircle className="w-6 h-6" />, value: '5000+', label: 'Devices Repaired' },
                            { icon: <Zap className="w-6 h-6" />, value: '98%', label: 'Success Rate' }
                        ].map((stat, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="text-center"
                            >
                                <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl text-white mb-3">
                                    {stat.icon}
                                </div>
                                <div className="text-2xl font-bold text-white">{stat.value}</div>
                                <div className="text-gray-400 text-sm">{stat.label}</div>
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
                            Device Repair Services
                        </h2>
                        <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                            Choose your device type to see available repair services
                        </p>
                    </motion.div>

                    <div ref={ref} className="grid md:grid-cols-2 gap-8">
                        {deviceTypes.map((device, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 50 }}
                                animate={inView ? { opacity: 1, y: 0 } : {}}
                                transition={{ delay: index * 0.1 }}
                                onClick={() => handleServiceClick(device)}
                                className="group cursor-pointer"
                            >
                                <div className="relative h-full bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/10 overflow-hidden hover:bg-white/10 hover:border-white/20 transition-all duration-300">
                                    {/* Icon */}
                                    <div className={`w-20 h-20 bg-gradient-to-r ${device.gradient} rounded-2xl flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform`}>
                                        {device.icon}
                                    </div>

                                    {/* Content */}
                                    <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors">
                                        {device.title}
                                    </h3>
                                    <p className="text-gray-400 mb-6">
                                        {device.description}
                                    </p>

                                    {/* Services List */}
                                    <div className="space-y-2 mb-6">
                                        {device.services.slice(0, 3).map((service, idx) => (
                                            <div key={idx} className="flex items-center gap-2 text-gray-300">
                                                <CheckCircle className="w-4 h-4 text-green-400" />
                                                <span className="text-sm">{service}</span>
                                            </div>
                                        ))}
                                        {device.services.length > 3 && (
                                            <p className="text-sm text-gray-500 pl-6">
                                                +{device.services.length - 3} more services
                                            </p>
                                        )}
                                    </div>

                                    {/* CTA */}
                                    <div className="flex items-center gap-2 text-blue-400 group-hover:text-blue-300 transition-colors">
                                        <span className="font-medium">Learn More</span>
                                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                    </div>

                                    {/* Hover Effect */}
                                    <div className="absolute inset-0 bg-gradient-to-r from-blue-600/5 to-purple-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Repair Process */}
            <section className="py-20 bg-gradient-to-b from-slate-950 to-slate-900">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-12"
                    >
                        <h2 className="text-4xl font-bold text-white mb-4">
                            Our Repair Process
                        </h2>
                        <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                            Simple, transparent, and efficient - from drop-off to pickup
                        </p>
                    </motion.div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {repairProcess.map((process, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="relative"
                            >
                                <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:bg-white/10 transition-all duration-300">
                                    <div className="flex items-start gap-4">
                                        <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl flex items-center justify-center text-white">
                                            {process.icon}
                                        </div>
                                        <div className="flex-1">
                                            <h3 className="text-lg font-semibold text-white mb-2">
                                                Step {process.step}: {process.title}
                                            </h3>
                                            <p className="text-gray-400 text-sm">
                                                {process.description}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                
                                {/* Connection Line */}
                                {index < repairProcess.length - 1 && (
                                    <div className="hidden lg:block absolute top-1/2 -right-3 w-6 h-0.5 bg-gradient-to-r from-blue-600 to-purple-600"></div>
                                )}
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
                        className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 backdrop-blur-sm rounded-3xl p-12 border border-white/10"
                    >
                        <h2 className="text-3xl font-bold text-white mb-4">
                            Ready to Fix Your Device?
                        </h2>
                        <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                            Get a free diagnosis and quote for your device repair. 
                            Our experts are ready to help!
                        </p>
                        <div className="flex flex-wrap gap-4 justify-center">
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                onClick={() => setIsModalOpen(true)}
                                className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl font-medium shadow-lg hover:shadow-xl transition-all duration-300"
                            >
                                Book Repair Now
                            </motion.button>
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="px-8 py-4 bg-white/10 backdrop-blur-sm border border-white/20 text-white rounded-xl font-medium hover:bg-white/20 transition-all duration-300"
                            >
                                Call Us: +1 234 567 890
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

export default DeviceRepair;