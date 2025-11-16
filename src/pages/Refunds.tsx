import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowLeft, RefreshCw, Code } from 'lucide-react';

const Refunds: React.FC = () => {
    return (
        <div className="min-h-screen bg-black">
            <section className="pt-32 pb-24 bg-gradient-to-b from-slate-900 via-slate-950 to-slate-900 relative overflow-hidden">
                <div className="absolute inset-0">
                    <div className="absolute top-1/4 right-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
                    <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>
                    <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff02_1px,transparent_1px),linear-gradient(to_bottom,#ffffff02_1px,transparent_1px)] bg-[size:4rem_4rem]"></div>
                </div>

                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
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
                            <RefreshCw className="w-4 h-4 text-blue-400" />
                            <span className="text-sm text-blue-300 font-medium">Refund Policy</span>
                        </motion.div>
                        
                        <h1 className="text-4xl lg:text-6xl font-bold text-white mb-4">
                            Refund
                            <span className="block bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                                Policy
                            </span>
                        </h1>
                        
                        <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                            Last updated: January 2024
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 space-y-6"
                    >
                        <div>
                            <h2 className="text-2xl font-bold text-white mb-4">Refund Eligibility</h2>
                            <p className="text-gray-300 leading-relaxed">
                                Refunds may be issued for services that have not been completed or in cases where we are unable to fulfill 
                                the agreed-upon service. Refund requests must be submitted within 30 days of service completion.
                            </p>
                        </div>

                        <div>
                            <h2 className="text-2xl font-bold text-white mb-4">Refund Process</h2>
                            <p className="text-gray-300 leading-relaxed mb-4">
                                To request a refund:
                            </p>
                            <ol className="space-y-2 text-gray-300 list-decimal list-inside">
                                <li>Contact our support team at support@tradehut.com</li>
                                <li>Provide your order number and reason for refund</li>
                                <li>Our team will review your request within 5 business days</li>
                                <li>If approved, refunds will be processed within 10 business days</li>
                            </ol>
                        </div>

                        <div>
                            <h2 className="text-2xl font-bold text-white mb-4">Non-Refundable Items</h2>
                            <p className="text-gray-300 leading-relaxed mb-4">
                                The following are not eligible for refunds:
                            </p>
                            <ul className="space-y-2 text-gray-300">
                                <li>• Completed repair services (covered by warranty instead)</li>
                                <li>• Digital products or software licenses</li>
                                <li>• Services cancelled after work has begun</li>
                                <li>• Custom development projects after delivery</li>
                            </ul>
                        </div>

                        <div>
                            <h2 className="text-2xl font-bold text-white mb-4">Contact Us</h2>
                            <p className="text-gray-300 leading-relaxed">
                                For refund inquiries, please contact us at refunds@tradehut.com or call +1 (234) 567-890
                            </p>
                        </div>
                    </motion.div>
                </div>
            </section>
        </div>
    );
};

export default Refunds;

