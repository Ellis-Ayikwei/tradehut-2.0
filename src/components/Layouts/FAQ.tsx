import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faChevronDown,
    faQuestionCircle,
    faTools,
    faCreditCard,
    faHeadset,
    faLightbulb,
    faComments
} from '@fortawesome/free-solid-svg-icons';
import ContactModal from './ContactModal';

interface FAQItem {
    question: string;
    answer: string;
    category: 'general' | 'repairs' | 'services' | 'payment';
    icon?: any;
}

const faqData: FAQItem[] = [
    {
        question: 'What services does Ellis Tech offer?',
        answer: 'We offer a comprehensive range of services including phone and laptop repairs, device sales, professional IT support, and custom web development solutions. Our team of experts ensures world-class service delivery for all your technology needs.',
        category: 'general',
        icon: faLightbulb,
    },
    {
        question: 'How long does a typical repair take?',
        answer: "Most repairs are completed within 24-48 hours. However, the exact duration depends on the type of repair and parts availability. We'll provide you with a specific timeline after diagnosing your device, and you can track your repair status online.",
        category: 'repairs',
        icon: faTools,
    },
    {
        question: 'Do you offer warranty on repairs?',
        answer: "Yes, we provide a comprehensive 90-day warranty on all our repairs. This covers both parts and labor. If you experience any issues related to our repair work within this period, we'll fix it free of charge. Extended warranty options are also available.",
        category: 'repairs',
        icon: faTools,
    },
    {
        question: 'What payment methods do you accept?',
        answer: 'We accept various payment methods including cash, mobile money (MTN, Vodafone, AirtelTigo), bank transfers, and major credit/debit cards. We also offer flexible payment plans for larger projects.',
        category: 'payment',
        icon: faCreditCard,
    },
    {
        question: 'Do you offer on-site IT support?',
        answer: 'Yes, we provide on-site IT support for businesses and individuals within Accra and surrounding areas. Our team can visit your location for installations, troubleshooting, maintenance, and emergency support.',
        category: 'services',
        icon: faHeadset,
    },
    {
        question: 'How do I track my repair status?',
        answer: 'You can easily track your repair status through our online portal using your repair ticket number. We also send SMS and email updates at each stage of the repair process to keep you informed.',
        category: 'repairs',
        icon: faTools,
    },
    {
        question: 'Do you sell genuine parts and accessories?',
        answer: 'Absolutely! We only use and sell genuine, high-quality parts and accessories. All our products come with manufacturer warranties and are sourced from authorized distributors.',
        category: 'general',
        icon: faLightbulb,
    },
    {
        question: 'What are your business hours?',
        answer: 'We are open Monday to Friday from 8:00 AM to 6:00 PM, and Saturdays from 9:00 AM to 4:00 PM. We also offer 24/7 emergency IT support for our corporate clients.',
        category: 'general',
        icon: faLightbulb,
    },
];

const categoryIcons = {
    all: faQuestionCircle,
    general: faLightbulb,
    repairs: faTools,
    services: faHeadset,
    payment: faCreditCard,
};

const FAQ = () => {
    const [isContactModalOpen, setIsContactModalOpen] = useState(false);
    const [activeCategory, setActiveCategory] = useState<string>('all');
    const [openItems, setOpenItems] = useState<number[]>([0]); // First item open by default

    const categories = [
        { id: 'all', name: 'All Questions', count: faqData.length },
        { id: 'general', name: 'General', count: faqData.filter(f => f.category === 'general').length },
        { id: 'repairs', name: 'Repairs', count: faqData.filter(f => f.category === 'repairs').length },
        { id: 'services', name: 'Services', count: faqData.filter(f => f.category === 'services').length },
        { id: 'payment', name: 'Payment', count: faqData.filter(f => f.category === 'payment').length },
    ];

    const toggleItem = (index: number) => {
        setOpenItems(openItems.includes(index) ? openItems.filter((item) => item !== index) : [...openItems, index]);
    };

    const filteredFAQs = activeCategory === 'all' ? faqData : faqData.filter((item) => item.category === activeCategory);

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
            <section id="faq" className="relative py-20 lg:py-32 bg-gradient-to-b from-gray-50 to-white overflow-hidden">
                {/* Background Elements */}
                <div className="absolute inset-0 z-0">
                    <div className="absolute top-1/2 left-0 w-96 h-96 bg-primary/5 rounded-full filter blur-3xl transform -translate-y-1/2" />
                    <div className="absolute top-1/2 right-0 w-96 h-96 bg-purple-500/5 rounded-full filter blur-3xl transform -translate-y-1/2" />
                </div>

                <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
                    {/* Header */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                        className="text-center mb-16"
                    >
                        <span className="inline-block px-4 py-2 bg-primary/10 text-primary font-semibold rounded-full text-sm mb-4">
                            FAQ
                        </span>
                        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                            Got Questions?
                            <span className="block bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent">
                                We've Got Answers
                            </span>
                        </h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            Find answers to common questions about our services and support. 
                            Can't find what you're looking for? Contact us directly.
                        </p>
                    </motion.div>

                    {/* Category Filter */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        viewport={{ once: true }}
                        className="flex flex-wrap justify-center gap-3 mb-12"
                    >
                        {categories.map((category) => (
                            <motion.button
                                key={category.id}
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                onClick={() => setActiveCategory(category.id)}
                                className={`px-6 py-3 rounded-full font-medium transition-all duration-300 flex items-center gap-2 ${
                                    activeCategory === category.id
                                        ? 'bg-gradient-to-r from-primary to-primary-dark text-white shadow-lg'
                                        : 'bg-white text-gray-700 hover:bg-gray-100 shadow-md'
                                }`}
                            >
                                <FontAwesomeIcon 
                                    icon={categoryIcons[category.id as keyof typeof categoryIcons]} 
                                    className="text-sm"
                                />
                                <span>{category.name}</span>
                                <span className={`px-2 py-0.5 rounded-full text-xs font-bold ${
                                    activeCategory === category.id
                                        ? 'bg-white/20 text-white'
                                        : 'bg-gray-200 text-gray-600'
                                }`}>
                                    {category.count}
                                </span>
                            </motion.button>
                        ))}
                    </motion.div>

                    {/* FAQ Items */}
                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        className="space-y-4"
                    >
                        <AnimatePresence mode="wait">
                            {filteredFAQs.map((item, index) => (
                                <motion.div
                                    key={`${activeCategory}-${index}`}
                                    variants={itemVariants}
                                    layout
                                    className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden"
                                >
                                    <button
                                        onClick={() => toggleItem(index)}
                                        className="w-full px-8 py-6 flex items-center justify-between text-left hover:bg-gray-50 transition-colors duration-200"
                                    >
                                        <div className="flex items-center gap-4 flex-1">
                                            <div className={`w-12 h-12 rounded-xl flex items-center justify-center bg-gradient-to-br ${
                                                item.category === 'general' ? 'from-blue-500 to-cyan-500' :
                                                item.category === 'repairs' ? 'from-purple-500 to-pink-500' :
                                                item.category === 'services' ? 'from-green-500 to-teal-500' :
                                                'from-orange-500 to-red-500'
                                            }`}>
                                                <FontAwesomeIcon 
                                                    icon={item.icon || categoryIcons[item.category]} 
                                                    className="text-white text-xl"
                                                />
                                            </div>
                                            <h3 className="text-lg font-semibold text-gray-900 pr-4">
                                                {item.question}
                                            </h3>
                                        </div>
                                        <motion.div
                                            animate={{ rotate: openItems.includes(index) ? 180 : 0 }}
                                            transition={{ duration: 0.3 }}
                                            className="flex-shrink-0"
                                        >
                                            <FontAwesomeIcon 
                                                icon={faChevronDown} 
                                                className={`text-gray-400 transition-colors ${
                                                    openItems.includes(index) ? 'text-primary' : ''
                                                }`}
                                            />
                                        </motion.div>
                                    </button>
                                    
                                    <AnimatePresence>
                                        {openItems.includes(index) && (
                                            <motion.div
                                                initial={{ height: 0, opacity: 0 }}
                                                animate={{ height: 'auto', opacity: 1 }}
                                                exit={{ height: 0, opacity: 0 }}
                                                transition={{ duration: 0.3 }}
                                                className="overflow-hidden"
                                            >
                                                <div className="px-8 pb-6">
                                                    <div className="pl-16 text-gray-600 leading-relaxed">
                                                        {item.answer}
                                                    </div>
                                                </div>
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                </motion.div>
                            ))}
                        </AnimatePresence>
                    </motion.div>

                    {/* CTA Section */}
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        viewport={{ once: true }}
                        className="mt-16 text-center"
                    >
                        <div className="bg-gradient-to-r from-primary/10 to-purple-500/10 rounded-3xl p-12 backdrop-blur-sm border border-primary/20">
                            <FontAwesomeIcon 
                                icon={faComments} 
                                className="text-5xl text-primary mb-4"
                            />
                            <h3 className="text-2xl font-bold text-gray-900 mb-4">
                                Still Have Questions?
                            </h3>
                            <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
                                Can't find the answer you're looking for? Our support team is here to help. 
                                Get in touch and we'll respond as soon as we can.
                            </p>
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                onClick={() => setIsContactModalOpen(true)}
                                className="px-8 py-4 bg-gradient-to-r from-primary to-primary-dark text-white font-semibold rounded-full shadow-lg hover:shadow-xl hover:shadow-primary/25 transition-all duration-300"
                            >
                                Contact Support
                            </motion.button>
                        </div>
                    </motion.div>
                </div>
            </section>
            
            <ContactModal isOpen={isContactModalOpen} onClose={() => setIsContactModalOpen(false)} />
        </>
    );
};

export default FAQ;
