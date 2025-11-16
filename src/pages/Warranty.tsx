import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowLeft, Shield, CheckCircle, Clock, AlertCircle, Code } from 'lucide-react';

const warrantyInfo = {
    standard: {
        duration: '90 days',
        coverage: ['Parts', 'Labor', 'Workmanship'],
        exclusions: ['Physical damage after repair', 'Unauthorized modifications', 'Water damage']
    },
    extended: {
        duration: '1 year',
        coverage: ['All standard coverage', 'Priority support', 'Free diagnostics'],
        price: 'Available for additional fee'
    }
};

const Warranty: React.FC = () => {
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
                            <span className="text-sm text-blue-300 font-medium">Warranty Information</span>
                        </motion.div>
                        
                        <h1 className="text-4xl lg:text-6xl font-bold text-white mb-4">
                            Warranty
                            <span className="block bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                                Coverage
                            </span>
                        </h1>
                        
                        <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                            We stand behind our work with comprehensive warranty coverage
                        </p>
                    </motion.div>

                    <div className="grid md:grid-cols-2 gap-6 mb-8">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10"
                        >
                            <div className="flex items-center gap-3 mb-4">
                                <Shield className="w-8 h-8 text-blue-400" />
                                <h3 className="text-2xl font-bold text-white">Standard Warranty</h3>
                            </div>
                            <div className="flex items-center gap-2 mb-4">
                                <Clock className="w-5 h-5 text-yellow-400" />
                                <span className="text-xl font-semibold text-white">{warrantyInfo.standard.duration}</span>
                            </div>
                            <div className="mb-4">
                                <h4 className="text-white font-medium mb-2">Coverage Includes:</h4>
                                <ul className="space-y-2">
                                    {warrantyInfo.standard.coverage.map((item, index) => (
                                        <li key={index} className="flex items-center gap-2 text-gray-300">
                                            <CheckCircle className="w-4 h-4 text-green-400" />
                                            <span>{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1 }}
                            className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10"
                        >
                            <div className="flex items-center gap-3 mb-4">
                                <Shield className="w-8 h-8 text-purple-400" />
                                <h3 className="text-2xl font-bold text-white">Extended Warranty</h3>
                            </div>
                            <div className="flex items-center gap-2 mb-4">
                                <Clock className="w-5 h-5 text-purple-400" />
                                <span className="text-xl font-semibold text-white">{warrantyInfo.extended.duration}</span>
                            </div>
                            <div className="mb-4">
                                <h4 className="text-white font-medium mb-2">Coverage Includes:</h4>
                                <ul className="space-y-2">
                                    {warrantyInfo.extended.coverage.map((item, index) => (
                                        <li key={index} className="flex items-center gap-2 text-gray-300">
                                            <CheckCircle className="w-4 h-4 text-green-400" />
                                            <span>{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <p className="text-sm text-gray-400">{warrantyInfo.extended.price}</p>
                        </motion.div>
                    </div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10"
                    >
                        <div className="flex items-center gap-3 mb-4">
                            <AlertCircle className="w-6 h-6 text-yellow-400" />
                            <h3 className="text-xl font-bold text-white">Warranty Exclusions</h3>
                        </div>
                        <ul className="space-y-2">
                            {warrantyInfo.standard.exclusions.map((item, index) => (
                                <li key={index} className="flex items-start gap-2 text-gray-300">
                                    <span className="text-red-400 mt-1">•</span>
                                    <span>{item}</span>
                                </li>
                            ))}
                        </ul>
                    </motion.div>
                </div>
            </section>
        </div>
    );
};

export default Warranty;

