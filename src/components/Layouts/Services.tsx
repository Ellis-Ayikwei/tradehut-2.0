import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
    faStore, 
    faTools, 
    faCode, 
    faHeadset,
    faArrowRight,
    faCheck,
    faLaptop,
    faMobile,
    faWrench,
    faGlobe,
    faShieldAlt,
    faClock
} from '@fortawesome/free-solid-svg-icons';
import BookRepair from './BookRepair';
import CheckStatus from './CheckStatus';
import GetSupport from './GetSupport';
import GetApp from './GetApp';
import ViewPlans from './ViewPlans';
import ContactModal from './ContactModal';
import ReviewCarousel from './ReviewCarousel';

interface ServiceItem {
    title: string;
    description: string;
    icon: any;
    gradient: string;
    image: string;
    features: string[];
    buttonText: string;
    buttonLink: string;
    accentColor: string;
}

const services: ServiceItem[] = [
    {
        title: 'Sales of Electronic Devices',
        description: 'Premium quality devices and accessories at competitive prices with warranty',
        icon: faStore,
        gradient: 'from-blue-500 to-cyan-500',
        image: '/assets/images/services/shop.png',
        features: ['Latest Laptops & PCs', 'Premium Mobile Phones', 'Genuine Accessories', 'Extended Warranty'],
        buttonText: 'Shop Now',
        buttonLink: '#shop',
        accentColor: 'blue',
    },
    {
        title: 'Mobile & Laptop Repairs',
        description: 'Expert repair services with quality guarantees and fast turnaround',
        icon: faTools,
        gradient: 'from-purple-500 to-pink-500',
        image: '/assets/images/services/repairs.png',
        features: ['Screen Replacement', 'Battery Service', 'Hardware Repairs', 'Data Recovery'],
        buttonText: 'Book Repair',
        buttonLink: '#book',
        accentColor: 'purple',
    },
    {
        title: 'Web Development',
        description: 'Custom websites and applications tailored to your business needs',
        icon: faCode,
        gradient: 'from-orange-500 to-red-500',
        image: '/assets/images/services/webdev.png',
        features: ['Custom Websites', 'Mobile Apps', 'E-commerce', 'API Integration'],
        buttonText: 'Get Started',
        buttonLink: '#website',
        accentColor: 'orange',
    },
    {
        title: 'Professional IT Support',
        description: 'Comprehensive IT solutions for businesses and individuals',
        icon: faHeadset,
        gradient: 'from-green-500 to-teal-500',
        image: '/assets/images/services/support.png',
        features: ['Network Setup', 'Security Solutions', '24/7 Support', 'Cloud Services'],
        buttonText: 'Get Support',
        buttonLink: '#support',
        accentColor: 'green',
    },
];

const stats = [
    { icon: faLaptop, value: '10K+', label: 'Devices Sold' },
    { icon: faWrench, value: '25K+', label: 'Repairs Done' },
    { icon: faGlobe, value: '500+', label: 'Websites Built' },
    { icon: faClock, value: '24/7', label: 'Support Available' },
];

const Services: React.FC = () => {
    const [isBookModalOpen, setIsBookModalOpen] = useState(false);
    const [isStatusModalOpen, setIsStatusModalOpen] = useState(false);
    const [isSupportModalOpen, setIsSupportModalOpen] = useState(false);
    const [isAppModalOpen, setIsAppModalOpen] = useState(false);
    const [isPlansModalOpen, setIsPlansModalOpen] = useState(false);
    const [isContactModalOpen, setIsContactModalOpen] = useState(false);

    const { ref, inView } = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
            },
        },
    };

    const itemVariants = {
        hidden: { y: 50, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: {
                type: 'spring',
                stiffness: 100,
                damping: 15,
            },
        },
    };

    const handleButtonClick = (buttonLink: string) => {
        switch (buttonLink) {
            case '#book':
                setIsBookModalOpen(true);
                break;
            case '#support':
                setIsSupportModalOpen(true);
                break;
            case '#shop':
            case '#website':
                setIsContactModalOpen(true);
                break;
            default:
                break;
        }
    };

    return (
        <>
            <section id="services" className="relative py-20 lg:py-32 bg-gradient-to-b from-gray-50 to-white overflow-hidden">
                {/* Background Elements */}
                <div className="absolute inset-0 z-0">
                    <div className="absolute top-0 left-0 w-96 h-96 bg-primary/5 rounded-full filter blur-3xl" />
                    <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-500/5 rounded-full filter blur-3xl" />
                </div>

                <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
                    {/* Section Header */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={inView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.6 }}
                        className="text-center mb-16"
                    >
                        <span className="inline-block px-4 py-2 bg-primary/10 text-primary font-semibold rounded-full text-sm mb-4">
                            Our Services
                        </span>
                        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                            Solutions That Drive
                            <span className="block bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent">
                                Your Success
                            </span>
                        </h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            From cutting-edge technology to expert support, we provide comprehensive solutions 
                            tailored to meet your unique needs.
                        </p>
                    </motion.div>

                    {/* Services Grid */}
                    <motion.div
                        ref={ref}
                        variants={containerVariants}
                        initial="hidden"
                        animate={inView ? "visible" : "hidden"}
                        className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20"
                    >
                        {services.map((service, index) => (
                            <motion.div
                                key={index}
                                variants={itemVariants}
                                whileHover={{ y: -10 }}
                                className="group relative bg-white rounded-3xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-500"
                            >
                                {/* Gradient Background */}
                                <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />
                                
                                <div className="relative p-8 lg:p-10">
                                    {/* Icon */}
                                    <motion.div
                                        whileHover={{ rotate: 360 }}
                                        transition={{ duration: 0.5 }}
                                        className={`w-16 h-16 bg-gradient-to-br ${service.gradient} rounded-2xl flex items-center justify-center mb-6 shadow-lg group-hover:shadow-xl transition-shadow duration-300`}
                                    >
                                        <FontAwesomeIcon icon={service.icon} className="text-white text-2xl" />
                                    </motion.div>

                                    {/* Content */}
                                    <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-primary transition-colors duration-300">
                                        {service.title}
                                    </h3>
                                    <p className="text-gray-600 mb-6 leading-relaxed">
                                        {service.description}
                                    </p>

                                    {/* Features */}
                                    <ul className="space-y-3 mb-8">
                                        {service.features.map((feature, idx) => (
                                            <motion.li
                                                key={idx}
                                                initial={{ opacity: 0, x: -20 }}
                                                animate={inView ? { opacity: 1, x: 0 } : {}}
                                                transition={{ delay: 0.1 * idx }}
                                                className="flex items-center text-gray-700"
                                            >
                                                <FontAwesomeIcon 
                                                    icon={faCheck} 
                                                    className={`text-${service.accentColor}-500 mr-3 text-sm`} 
                                                />
                                                <span className="text-sm">{feature}</span>
                                            </motion.li>
                                        ))}
                                    </ul>

                                    {/* CTA Button */}
                                    <motion.button
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.95 }}
                                        onClick={() => handleButtonClick(service.buttonLink)}
                                        className={`group/btn relative inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r ${service.gradient} text-white font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden`}
                                    >
                                        <span className="relative z-10">{service.buttonText}</span>
                                        <FontAwesomeIcon 
                                            icon={faArrowRight} 
                                            className="relative z-10 w-4 h-4 group-hover/btn:translate-x-1 transition-transform" 
                                        />
                                        <motion.div
                                            className="absolute inset-0 bg-white/20"
                                            initial={{ x: '-100%' }}
                                            whileHover={{ x: 0 }}
                                            transition={{ duration: 0.3 }}
                                        />
                                    </motion.button>

                                    {/* Decorative Element */}
                                    <div className="absolute top-0 right-0 w-32 h-32 opacity-10">
                                        <img 
                                            src={service.image} 
                                            alt={service.title}
                                            className="w-full h-full object-contain"
                                        />
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>

                    {/* Stats Section */}
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        animate={inView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        className="bg-gradient-to-r from-primary to-primary-dark rounded-3xl p-8 lg:p-12 shadow-2xl"
                    >
                        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
                            {stats.map((stat, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ scale: 0 }}
                                    animate={inView ? { scale: 1 } : {}}
                                    transition={{ duration: 0.5, delay: 0.1 * index }}
                                    className="text-center"
                                >
                                    <FontAwesomeIcon 
                                        icon={stat.icon} 
                                        className="text-white/80 text-3xl mb-3" 
                                    />
                                    <h4 className="text-3xl font-bold text-white mb-1">{stat.value}</h4>
                                    <p className="text-white/80 text-sm">{stat.label}</p>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>

                    {/* Quick Actions */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={inView ? { opacity: 1 } : {}}
                        transition={{ duration: 0.6, delay: 0.6 }}
                        className="mt-16 text-center"
                    >
                        <p className="text-gray-600 mb-6">Need help choosing the right service?</p>
                        <div className="flex flex-wrap justify-center gap-4">
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                onClick={() => setIsStatusModalOpen(true)}
                                className="px-6 py-3 bg-white text-gray-800 font-semibold rounded-full shadow-lg hover:shadow-xl border border-gray-200 transition-all duration-300"
                            >
                                Check Repair Status
                            </motion.button>
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                onClick={() => setIsPlansModalOpen(true)}
                                className="px-6 py-3 bg-white text-gray-800 font-semibold rounded-full shadow-lg hover:shadow-xl border border-gray-200 transition-all duration-300"
                            >
                                View Service Plans
                            </motion.button>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Reviews Section */}
            <ReviewCarousel />

            {/* Modals */}
            <BookRepair isOpen={isBookModalOpen} onClose={() => setIsBookModalOpen(false)} />
            <CheckStatus isOpen={isStatusModalOpen} onClose={() => setIsStatusModalOpen(false)} />
            <GetSupport isOpen={isSupportModalOpen} onClose={() => setIsSupportModalOpen(false)} />
            <GetApp isOpen={isAppModalOpen} onClose={() => setIsAppModalOpen(false)} />
            <ViewPlans isOpen={isPlansModalOpen} onClose={() => setIsPlansModalOpen(false)} />
            <ContactModal isOpen={isContactModalOpen} onClose={() => setIsContactModalOpen(false)} />
        </>
    );
};

export default Services;
