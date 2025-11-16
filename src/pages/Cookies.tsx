import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowLeft, Cookie as CookieIcon, Code } from 'lucide-react';

const Cookies: React.FC = () => {
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
                            <CookieIcon className="w-4 h-4 text-blue-400" />
                            <span className="text-sm text-blue-300 font-medium">Cookie Policy</span>
                        </motion.div>
                        
                        <h1 className="text-4xl lg:text-6xl font-bold text-white mb-4">
                            Cookie
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
                            <h2 className="text-2xl font-bold text-white mb-4">What Are Cookies?</h2>
                            <p className="text-gray-300 leading-relaxed">
                                Cookies are small text files that are placed on your device when you visit our website. They help us provide 
                                you with a better experience and understand how you use our services.
                            </p>
                        </div>

                        <div>
                            <h2 className="text-2xl font-bold text-white mb-4">How We Use Cookies</h2>
                            <p className="text-gray-300 leading-relaxed mb-4">
                                We use cookies for the following purposes:
                            </p>
                            <ul className="space-y-2 text-gray-300">
                                <li>• Essential cookies: Required for the website to function properly</li>
                                <li>• Analytics cookies: Help us understand how visitors interact with our website</li>
                                <li>• Preference cookies: Remember your settings and preferences</li>
                                <li>• Marketing cookies: Used to deliver relevant advertisements</li>
                            </ul>
                        </div>

                        <div>
                            <h2 className="text-2xl font-bold text-white mb-4">Managing Cookies</h2>
                            <p className="text-gray-300 leading-relaxed">
                                You can control and manage cookies through your browser settings. However, disabling certain cookies may 
                                affect the functionality of our website.
                            </p>
                        </div>

                        <div>
                            <h2 className="text-2xl font-bold text-white mb-4">Contact Us</h2>
                            <p className="text-gray-300 leading-relaxed">
                                If you have questions about our Cookie Policy, please contact us at privacy@tradehut.com
                            </p>
                        </div>
                    </motion.div>
                </div>
            </section>
        </div>
    );
};

export default Cookies;

