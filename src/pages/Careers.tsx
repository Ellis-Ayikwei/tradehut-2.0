import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowLeft, Briefcase, Mail, ArrowRight } from 'lucide-react';

const Careers: React.FC = () => {
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
                            <Briefcase className="w-4 h-4 text-white" />
                            <span className="text-sm text-white font-medium">Join Our Team</span>
                        </motion.div>

                        <h1 className="text-4xl lg:text-6xl font-bold text-white mb-4">
                            Careers at
                            <span className="block bg-gradient-to-r from-brand to-brand-light bg-clip-text text-transparent">
                                TradeHut
                            </span>
                        </h1>

                        <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                            Build the future of technology with us. We're growing, and we're always excited to
                            hear from talented people.
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="max-w-2xl mx-auto text-center bg-white/5 backdrop-blur-sm rounded-3xl p-10 border border-white/10"
                    >
                        <div className="w-16 h-16 bg-gradient-to-br from-brand-light to-brand-dark rounded-2xl flex items-center justify-center text-white mx-auto mb-6">
                            <Briefcase className="w-8 h-8" />
                        </div>
                        <h2 className="text-2xl font-bold text-white mb-3">No Open Positions Right Now</h2>
                        <p className="text-gray-400 mb-8">
                            We don't have any open roles at the moment, but we're always interested in
                            connecting with talented developers, designers, and technicians. Send us your
                            resume and we'll reach out when something opens up.
                        </p>
                        <a
                            href="mailto:careers@tradehut.com"
                            className="inline-flex items-center gap-2 px-6 py-3 bg-brand text-white rounded-xl font-medium hover:bg-brand-hover transition-all duration-300"
                        >
                            <Mail className="w-4 h-4" />
                            <span>Send Us Your Resume</span>
                            <ArrowRight className="w-4 h-4" />
                        </a>
                    </motion.div>
                </div>
            </section>
        </div>
    );
};

export default Careers;
