import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
    ChevronDown, 
    HelpCircle, 
    MessageCircle,
    Zap,
    Shield,
    Clock,
    DollarSign,
    Wrench,
    Package,
    HeadphonesIcon,
    Search,
    Grid
} from 'lucide-react';
import {
    IconQuestionMark,
    IconBulb,
    IconInfoCircle,
    IconMessage2
} from '@tabler/icons-react';

const faqCategories = [
    { id: 'general', name: 'General', icon: <IconInfoCircle className="w-5 h-5" /> },
    { id: 'repair', name: 'Repairs', icon: <Wrench className="w-5 h-5" /> },
    { id: 'pricing', name: 'Pricing', icon: <DollarSign className="w-5 h-5" /> },
    { id: 'support', name: 'Support', icon: <HeadphonesIcon className="w-5 h-5" /> }
];

const faqs = [
    {
        id: 1,
        category: 'general',
        question: 'What services does TradeHut offer?',
        answer: 'TradeHut provides comprehensive technology solutions including device repairs (smartphones, laptops, tablets), IT infrastructure support, custom software development (web, mobile & desktop), and 24/7 technical support. We serve both individual customers and businesses with cutting-edge solutions.',
        icon: <IconBulb className="w-6 h-6" />
    },
    {
        id: 2,
        category: 'repair',
        question: 'How long does a typical device repair take?',
        answer: 'Most common repairs like screen replacements and battery changes are completed within 2-4 hours. Complex motherboard repairs may take 1-2 business days. We offer express service for urgent repairs, and you can track your repair status online in real-time.',
        icon: <Clock className="w-6 h-6" />
    },
    {
        id: 3,
        category: 'pricing',
        question: 'Do you offer warranty on repairs?',
        answer: 'Yes! All our repairs come with a comprehensive 90-day warranty covering parts and labor. For screen replacements, we offer an extended 6-month warranty. Our premium parts come with manufacturer warranties up to 1 year.',
        icon: <Shield className="w-6 h-6" />
    },
    {
        id: 4,
        category: 'repair',
        question: 'Do you use original parts for repairs?',
        answer: 'We offer both original manufacturer parts and high-quality aftermarket alternatives. Original parts come with manufacturer warranty and are recommended for newer devices. Our aftermarket parts are thoroughly tested and offer excellent value with our standard warranty.',
        icon: <Package className="w-6 h-6" />
    },
    {
        id: 5,
        category: 'support',
        question: 'What are your support hours?',
        answer: 'Our physical locations are open Monday-Saturday 9AM-7PM. However, we offer 24/7 remote technical support for urgent issues. Our online chat support is available round the clock, and emergency on-site support can be arranged for business clients.',
        icon: <HeadphonesIcon className="w-6 h-6" />
    },
    {
        id: 6,
        category: 'pricing',
        question: 'What payment methods do you accept?',
        answer: 'We accept all major credit/debit cards, PayPal, Apple Pay, Google Pay, and bank transfers. For businesses, we offer NET 30 payment terms. We also provide flexible payment plans for repairs and purchases over $500.',
        icon: <DollarSign className="w-6 h-6" />
    },
    {
        id: 7,
        category: 'general',
        question: 'Do you offer pickup and delivery services?',
        answer: 'Yes! We offer free pickup and delivery within a 10-mile radius for repairs over $100. For other areas, we partner with secure courier services. You can also drop off your device at any of our locations or authorized service points.',
        icon: <Package className="w-6 h-6" />
    },
    {
        id: 8,
        category: 'support',
        question: 'How can I track my repair status?',
        answer: 'Once you drop off your device, you\'ll receive a tracking number via SMS and email. Use this on our website to check real-time status updates. You\'ll also receive automatic notifications at each stage of the repair process.',
        icon: <Search className="w-6 h-6" />
    }
];

const FAQ: React.FC = () => {
    const [selectedCategory, setSelectedCategory] = useState('general');
    const [openItems, setOpenItems] = useState<number[]>([]);
    const [searchTerm, setSearchTerm] = useState('');

    const toggleItem = (id: number) => {
        setOpenItems(prev => 
            prev.includes(id) 
                ? prev.filter(item => item !== id)
                : [...prev, id]
        );
    };

    const filteredFaqs = faqs.filter(faq => {
        const matchesCategory = selectedCategory === 'all' || faq.category === selectedCategory;
        const matchesSearch = faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
                            faq.answer.toLowerCase().includes(searchTerm.toLowerCase());
        return matchesCategory && matchesSearch;
    });

    return (
        <section className="py-24 bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 relative overflow-hidden">
            {/* Background Elements */}
            <div className="absolute inset-0">
                <div className="absolute top-1/4 right-0 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>
                <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff02_1px,transparent_1px),linear-gradient(to_bottom,#ffffff02_1px,transparent_1px)] bg-[size:4rem_4rem]"></div>
            </div>

            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
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
                        <HelpCircle className="w-4 h-4 text-blue-400" />
                        <span className="text-sm text-blue-300 font-medium">Got Questions?</span>
                    </motion.div>
                    
                    <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">
                        Frequently Asked
                        <span className="block bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                            Questions
                        </span>
                    </h2>
                    
                    <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                        Find answers to common questions about our services, pricing, and support
                    </p>
                </motion.div>

                {/* Search Bar */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-8"
                >
                    <div className="relative">
                        <input
                            type="text"
                            placeholder="Search for answers..."
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            className="w-full px-6 py-4 pl-14 bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 transition-all duration-300"
                        />
                        <Search className="absolute left-5 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                    </div>
                </motion.div>

                {/* Category Tabs */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="flex flex-wrap justify-center gap-3 mb-12"
                >
                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => setSelectedCategory('all')}
                        className={`flex items-center gap-2 px-4 py-2 rounded-xl font-medium transition-all duration-300 ${
                            selectedCategory === 'all'
                                ? 'bg-[#e5500e] text-white shadow-lg'
                                : 'bg-white/5 text-gray-400 border border-white/10 hover:bg-white/10 hover:text-white'
                        }`}
                    >
                        <Grid className="w-4 h-4" />
                        <span>All</span>
                    </motion.button>
                    {faqCategories.map((category) => (
                        <motion.button
                            key={category.id}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            onClick={() => setSelectedCategory(category.id)}
                            className={`flex items-center gap-2 px-4 py-2 rounded-xl font-medium transition-all duration-300 ${
                                selectedCategory === category.id
                                    ? 'bg-[#e5500e] text-white shadow-lg'
                                    : 'bg-white/5 text-gray-400 border border-white/10 hover:bg-white/10 hover:text-white'
                            }`}
                        >
                            {category.icon}
                            <span>{category.name}</span>
                        </motion.button>
                    ))}
                </motion.div>

                {/* FAQ Items */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="space-y-4"
                >
                    {filteredFaqs.length === 0 ? (
                        <div className="text-center py-12">
                            <IconQuestionMark className="w-16 h-16 text-gray-600 mx-auto mb-4" />
                            <p className="text-gray-400 text-lg">No questions found matching your search.</p>
                        </div>
                    ) : (
                        filteredFaqs.map((faq, index) => (
                            <motion.div
                                key={faq.id}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="group"
                            >
                                <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl overflow-hidden hover:bg-white/10 transition-all duration-300">
                                    <button
                                        onClick={() => toggleItem(faq.id)}
                                        className="w-full px-6 py-5 flex items-center justify-between text-left"
                                    >
                                        <div className="flex items-center gap-4">
                                            <div className="text-blue-400">
                                                {faq.icon}
                                            </div>
                                            <h3 className="text-lg font-medium text-white group-hover:text-blue-400 transition-colors">
                                                {faq.question}
                                            </h3>
                                        </div>
                                        <motion.div
                                            animate={{ rotate: openItems.includes(faq.id) ? 180 : 0 }}
                                            transition={{ duration: 0.3 }}
                                            className="text-gray-400"
                                        >
                                            <ChevronDown className="w-5 h-5" />
                                        </motion.div>
                                    </button>
                                    
                                    <AnimatePresence>
                                        {openItems.includes(faq.id) && (
                                            <motion.div
                                                initial={{ height: 0, opacity: 0 }}
                                                animate={{ height: 'auto', opacity: 1 }}
                                                exit={{ height: 0, opacity: 0 }}
                                                transition={{ duration: 0.3 }}
                                                className="overflow-hidden"
                                            >
                                                <div className="px-6 pb-5 pt-0">
                                                    <p className="text-gray-300 leading-relaxed pl-10">
                                                        {faq.answer}
                                                    </p>
                                                </div>
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                </div>
                            </motion.div>
                        ))
                    )}
                </motion.div>

                {/* Still Have Questions CTA */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mt-16 text-center"
                >
                    <div className="inline-flex flex-col items-center p-8 bg-gradient-to-r from-blue-600/10 to-purple-600/10 rounded-3xl border border-white/10 backdrop-blur-sm">
                        <IconMessage2 className="w-12 h-12 text-blue-400 mb-4" />
                        <h3 className="text-2xl font-bold text-white mb-2">Still have questions?</h3>
                        <p className="text-gray-400 mb-6">Can't find the answer you're looking for? Our team is here to help.</p>
                        <div className="flex flex-wrap gap-4 justify-center">
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="px-6 py-3 bg-[#e5500e] text-white rounded-xl font-medium shadow-lg hover:shadow-xl transition-all duration-300 hover:bg-[#d44a0d]"
                            >
                                Contact Support
                            </motion.button>
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="px-6 py-3 bg-white/5 backdrop-blur-sm border border-white/10 text-white rounded-xl font-medium hover:bg-white/10 transition-all duration-300"
                            >
                                Live Chat
                            </motion.button>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default FAQ;
