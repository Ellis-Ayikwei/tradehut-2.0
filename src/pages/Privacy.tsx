import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowLeft, Shield, Code } from 'lucide-react';

const Privacy: React.FC = () => {
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
                            <Shield className="w-4 h-4 text-blue-400" />
                            <span className="text-sm text-blue-300 font-medium">Privacy Policy</span>
                        </motion.div>
                        
                        <h1 className="text-4xl lg:text-6xl font-bold text-white mb-4">
                            Privacy
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
                            <h2 className="text-2xl font-bold text-white mb-4">1. Information We Collect</h2>
                            <p className="text-gray-300 leading-relaxed">
                                We collect information that you provide directly to us, including name, email address, phone number, 
                                and device information when you use our services.
                            </p>
                        </div>

                        <div>
                            <h2 className="text-2xl font-bold text-white mb-4">2. How We Use Your Information</h2>
                            <p className="text-gray-300 leading-relaxed">
                                We use the information we collect to provide, maintain, and improve our services, process transactions, 
                                send you technical notices, and respond to your inquiries.
                            </p>
                        </div>

                        <div>
                            <h2 className="text-2xl font-bold text-white mb-4">3. Information Sharing</h2>
                            <p className="text-gray-300 leading-relaxed">
                                We do not sell, trade, or rent your personal information to third parties. We may share your information 
                                only with service providers who assist us in operating our business.
                            </p>
                        </div>

                        <div>
                            <h2 className="text-2xl font-bold text-white mb-4">4. Data Security</h2>
                            <p className="text-gray-300 leading-relaxed">
                                We implement appropriate security measures to protect your personal information against unauthorized access, 
                                alteration, disclosure, or destruction.
                            </p>
                        </div>

                        <div>
                            <h2 className="text-2xl font-bold text-white mb-4">5. Your Rights</h2>
                            <p className="text-gray-300 leading-relaxed">
                                You have the right to access, update, or delete your personal information at any time. Contact us to exercise these rights.
                            </p>
                        </div>

                        <div>
                            <h2 className="text-2xl font-bold text-white mb-4">6. Contact Us</h2>
                            <p className="text-gray-300 leading-relaxed">
                                If you have questions about this Privacy Policy, please contact us at privacy@tradehut.com
                            </p>
                        </div>
                    </motion.div>
                </div>
            </section>
        </div>
    );
};

export default Privacy;

