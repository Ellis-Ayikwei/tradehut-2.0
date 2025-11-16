import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowLeft, Search, HelpCircle, ChevronDown, ChevronUp, Code } from 'lucide-react';

const faqCategories = [
    {
        category: 'Getting Started',
        questions: [
            {
                q: 'How do I get started with TradeHut services?',
                a: 'Getting started is easy! Simply browse our services, select what you need, and contact us for a free consultation. Our team will guide you through the process.'
            },
            {
                q: 'What services does TradeHut offer?',
                a: 'We offer device repair, IT solutions, software development, and tech support services. Visit our services page to learn more about each offering.'
            }
        ]
    },
    {
        category: 'Device Repair',
        questions: [
            {
                q: 'How long does a repair take?',
                a: 'Most repairs are completed within 2-4 hours. Complex repairs may take 1-2 business days. We\'ll provide an estimated timeline when you bring in your device.'
            },
            {
                q: 'Do you offer warranty on repairs?',
                a: 'Yes! All repairs come with a 90-day warranty on parts and labor. Extended warranties are also available.'
            }
        ]
    },
    {
        category: 'Billing & Payments',
        questions: [
            {
                q: 'What payment methods do you accept?',
                a: 'We accept all major credit cards, PayPal, and Apple Pay. Payment is typically due upon completion of service.'
            },
            {
                q: 'Do you offer payment plans?',
                a: 'Yes, we offer flexible payment plans for larger projects. Contact us to discuss options that work for you.'
            }
        ]
    }
];

const Help: React.FC = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [openCategory, setOpenCategory] = useState<string | null>(null);
    const [openQuestion, setOpenQuestion] = useState<string | null>(null);

    return (
        <div className="min-h-screen bg-black">
            <section className="pt-32 pb-24 bg-gradient-to-b from-slate-900 via-slate-950 to-slate-900 relative overflow-hidden">
                <div className="absolute inset-0">
                    <div className="absolute top-1/4 right-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
                    <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>
                    <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff02_1px,transparent_1px),linear-gradient(to_bottom,#ffffff02_1px,transparent_1px)] bg-[size:4rem_4rem]"></div>
                </div>

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <Link
                        to="/"
                        className="inline-flex items-center gap-2 text-gray-400 hover:text-white transition-colors mb-6"
                    >
                        <ArrowLeft className="w-4 h-4" />
                        <span>Back to Home</span>
                    </Link>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-center mb-12"
                    >
                        <motion.div
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-full border border-blue-500/20 mb-4"
                        >
                            <HelpCircle className="w-4 h-4 text-blue-400" />
                            <span className="text-sm text-blue-300 font-medium">Help Center</span>
                        </motion.div>
                        
                        <h1 className="text-4xl lg:text-6xl font-bold text-white mb-4">
                            How can we
                            <span className="block bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                                help you?
                            </span>
                        </h1>
                        
                        <div className="relative max-w-2xl mx-auto mt-8">
                            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                            <input
                                type="text"
                                placeholder="Search for help..."
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                                className="w-full pl-12 pr-4 py-4 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 transition-colors"
                            />
                        </div>
                    </motion.div>

                    <div className="space-y-4">
                        {faqCategories.map((category, catIndex) => (
                            <motion.div
                                key={category.category}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: catIndex * 0.1 }}
                                className="bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 overflow-hidden"
                            >
                                <button
                                    onClick={() => setOpenCategory(openCategory === category.category ? null : category.category)}
                                    className="w-full px-6 py-4 flex items-center justify-between text-left hover:bg-white/5 transition-all"
                                >
                                    <h3 className="text-xl font-bold text-white">{category.category}</h3>
                                    {openCategory === category.category ? (
                                        <ChevronUp className="w-5 h-5 text-gray-400" />
                                    ) : (
                                        <ChevronDown className="w-5 h-5 text-gray-400" />
                                    )}
                                </button>
                                
                                {openCategory === category.category && (
                                    <div className="px-6 pb-4 space-y-3">
                                        {category.questions.map((faq, qIndex) => (
                                            <div
                                                key={qIndex}
                                                className="bg-white/5 rounded-xl p-4 border border-white/10"
                                            >
                                                <button
                                                    onClick={() => setOpenQuestion(openQuestion === `${catIndex}-${qIndex}` ? null : `${catIndex}-${qIndex}`)}
                                                    className="w-full flex items-center justify-between text-left"
                                                >
                                                    <h4 className="text-white font-medium pr-4">{faq.q}</h4>
                                                    {openQuestion === `${catIndex}-${qIndex}` ? (
                                                        <ChevronUp className="w-4 h-4 text-gray-400 flex-shrink-0" />
                                                    ) : (
                                                        <ChevronDown className="w-4 h-4 text-gray-400 flex-shrink-0" />
                                                    )}
                                                </button>
                                                {openQuestion === `${catIndex}-${qIndex}` && (
                                                    <p className="text-gray-300 mt-3 text-sm">{faq.a}</p>
                                                )}
                                            </div>
                                        ))}
                                    </div>
                                )}
                            </motion.div>
                        ))}
                    </div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4 }}
                        className="mt-12 text-center"
                    >
                        <p className="text-gray-400 mb-4">Still need help?</p>
                        <Link
                            to="/contact"
                            className="inline-flex items-center gap-2 px-6 py-3 bg-[#e5500e] text-white rounded-xl font-medium hover:bg-[#d44a0d] transition-all"
                        >
                            <span>Contact Support</span>
                        </Link>
                    </motion.div>
                </div>
            </section>
        </div>
    );
};

export default Help;

