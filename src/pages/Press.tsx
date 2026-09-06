import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowLeft, Download, FileText, Image as ImageIcon, Mail } from 'lucide-react';

const pressKit = {
    logo: {
        title: 'Company Logo',
        description: 'Download our official logo',
        file: '/assets/images/hero/tradehut technologies.png',
        available: true
    },
    brand: {
        title: 'Brand Guidelines',
        description: 'Our brand identity and usage guidelines',
        available: false
    },
    images: {
        title: 'Press Images',
        description: 'High-resolution images for media use',
        available: false
    }
};

const Press: React.FC = () => {
    return (
        <div className="min-h-screen bg-black">
            <section className="pt-32 pb-24 bg-gradient-to-b from-slate-900 via-slate-950 to-slate-900 relative overflow-hidden">
                <div className="absolute inset-0">
                    <div className="absolute top-1/4 right-0 w-96 h-96 bg-brand/10 rounded-full blur-3xl"></div>
                    <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-slate-500/10 rounded-full blur-3xl"></div>
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
                        className="text-center mb-16"
                    >
                        <motion.div
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-br from-brand-light to-brand-dark rounded-full border border-white/10 mb-4"
                        >
                            <FileText className="w-4 h-4 text-white" />
                            <span className="text-sm text-white font-medium">Press Kit</span>
                        </motion.div>

                        <h1 className="text-4xl lg:text-6xl font-bold text-white mb-4">
                            Press & Media
                            <span className="block bg-gradient-to-r from-brand to-brand-light bg-clip-text text-transparent">
                                Resources
                            </span>
                        </h1>

                        <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                            Brand assets and media contact information for journalists and partners
                        </p>
                    </motion.div>

                    <div className="grid md:grid-cols-3 gap-6 mb-16">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:bg-white/10 transition-all"
                        >
                            <ImageIcon className="w-8 h-8 text-brand mb-4" />
                            <h3 className="text-xl font-bold text-white mb-2">{pressKit.logo.title}</h3>
                            <p className="text-gray-400 text-sm mb-4">{pressKit.logo.description}</p>
                            <a
                                href={pressKit.logo.file}
                                download
                                className="w-full px-4 py-2 bg-brand text-white rounded-lg hover:bg-brand-hover transition-all flex items-center justify-center gap-2"
                            >
                                <Download className="w-4 h-4" />
                                <span>Download</span>
                            </a>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1 }}
                            className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:bg-white/10 transition-all"
                        >
                            <FileText className="w-8 h-8 text-brand mb-4" />
                            <h3 className="text-xl font-bold text-white mb-2">{pressKit.brand.title}</h3>
                            <p className="text-gray-400 text-sm mb-4">{pressKit.brand.description}</p>
                            <button
                                disabled
                                className="w-full px-4 py-2 bg-white/5 text-gray-500 rounded-lg cursor-not-allowed flex items-center justify-center gap-2"
                            >
                                <span>Coming Soon</span>
                            </button>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                            className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:bg-white/10 transition-all"
                        >
                            <ImageIcon className="w-8 h-8 text-brand mb-4" />
                            <h3 className="text-xl font-bold text-white mb-2">{pressKit.images.title}</h3>
                            <p className="text-gray-400 text-sm mb-4">{pressKit.images.description}</p>
                            <button
                                disabled
                                className="w-full px-4 py-2 bg-white/5 text-gray-500 rounded-lg cursor-not-allowed flex items-center justify-center gap-2"
                            >
                                <span>Coming Soon</span>
                            </button>
                        </motion.div>
                    </div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 }}
                        className="max-w-2xl mx-auto text-center bg-white/5 backdrop-blur-sm rounded-3xl p-10 border border-white/10"
                    >
                        <Mail className="w-10 h-10 text-brand mx-auto mb-4" />
                        <h2 className="text-2xl font-bold text-white mb-3">Media Inquiries</h2>
                        <p className="text-gray-400 mb-6">
                            We don't have any press coverage to share yet, but journalists and media partners
                            are welcome to reach out for interviews, quotes, or more information about TradeHut.
                        </p>
                        <a
                            href="mailto:press@tradehut.com"
                            className="inline-flex items-center gap-2 px-6 py-3 bg-brand text-white rounded-xl font-medium hover:bg-brand-hover transition-all duration-300"
                        >
                            <Mail className="w-4 h-4" />
                            <span>press@tradehut.com</span>
                        </a>
                    </motion.div>
                </div>
            </section>
        </div>
    );
};

export default Press;
