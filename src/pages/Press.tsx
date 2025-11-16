import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowLeft, Download, FileText, Image as ImageIcon, Code } from 'lucide-react';

const pressKit = {
    logo: {
        title: 'Company Logo',
        description: 'Download our official logo in various formats',
        files: ['Logo (PNG)', 'Logo (SVG)', 'Logo (PDF)']
    },
    brand: {
        title: 'Brand Guidelines',
        description: 'Our brand identity and usage guidelines',
        files: ['Brand Guidelines PDF']
    },
    images: {
        title: 'Press Images',
        description: 'High-resolution images for media use',
        files: ['Team Photos', 'Office Images', 'Product Screenshots']
    },
    pressReleases: [
        {
            title: 'TradeHut Launches New Platform',
            date: '2024-01-15',
            description: 'TradeHut announces the launch of its revolutionary technology platform.'
        },
        {
            title: 'Partnership with Major Tech Company',
            date: '2024-02-20',
            description: 'TradeHut partners with leading technology company to expand services.'
        }
    ]
};

const Press: React.FC = () => {
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
                        className="text-center mb-16"
                    >
                        <motion.div
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-full border border-blue-500/20 mb-4"
                        >
                            <FileText className="w-4 h-4 text-blue-400" />
                            <span className="text-sm text-blue-300 font-medium">Press Kit</span>
                        </motion.div>
                        
                        <h1 className="text-4xl lg:text-6xl font-bold text-white mb-4">
                            Press & Media
                            <span className="block bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                                Resources
                            </span>
                        </h1>
                        
                        <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                            Download our press kit, brand assets, and stay updated with our latest news
                        </p>
                    </motion.div>

                    <div className="grid md:grid-cols-3 gap-6 mb-12">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:bg-white/10 transition-all"
                        >
                            <ImageIcon className="w-8 h-8 text-blue-400 mb-4" />
                            <h3 className="text-xl font-bold text-white mb-2">{pressKit.logo.title}</h3>
                            <p className="text-gray-400 text-sm mb-4">{pressKit.logo.description}</p>
                            <button className="w-full px-4 py-2 bg-[#e5500e] text-white rounded-lg hover:bg-[#d44a0d] transition-all flex items-center justify-center gap-2">
                                <Download className="w-4 h-4" />
                                <span>Download</span>
                            </button>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1 }}
                            className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:bg-white/10 transition-all"
                        >
                            <FileText className="w-8 h-8 text-purple-400 mb-4" />
                            <h3 className="text-xl font-bold text-white mb-2">{pressKit.brand.title}</h3>
                            <p className="text-gray-400 text-sm mb-4">{pressKit.brand.description}</p>
                            <button className="w-full px-4 py-2 bg-[#e5500e] text-white rounded-lg hover:bg-[#d44a0d] transition-all flex items-center justify-center gap-2">
                                <Download className="w-4 h-4" />
                                <span>Download</span>
                            </button>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                            className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:bg-white/10 transition-all"
                        >
                            <ImageIcon className="w-8 h-8 text-green-400 mb-4" />
                            <h3 className="text-xl font-bold text-white mb-2">{pressKit.images.title}</h3>
                            <p className="text-gray-400 text-sm mb-4">{pressKit.images.description}</p>
                            <button className="w-full px-4 py-2 bg-[#e5500e] text-white rounded-lg hover:bg-[#d44a0d] transition-all flex items-center justify-center gap-2">
                                <Download className="w-4 h-4" />
                                <span>Download</span>
                            </button>
                        </motion.div>
                    </div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 }}
                    >
                        <h2 className="text-3xl font-bold text-white mb-6">Press Releases</h2>
                        <div className="space-y-4">
                            {pressKit.pressReleases.map((release, index) => (
                                <div
                                    key={index}
                                    className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:bg-white/10 transition-all"
                                >
                                    <div className="flex items-start justify-between gap-4">
                                        <div>
                                            <h3 className="text-xl font-bold text-white mb-2">{release.title}</h3>
                                            <p className="text-sm text-gray-400 mb-2">{release.date}</p>
                                            <p className="text-gray-300">{release.description}</p>
                                        </div>
                                        <button className="px-4 py-2 bg-white/10 text-white rounded-lg hover:bg-white/20 transition-all">
                                            Read More
                                        </button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </section>
        </div>
    );
};

export default Press;

