import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Link } from 'react-router-dom';
import { ArrowLeft, Code, MapPin, Clock, Briefcase, ArrowRight } from 'lucide-react';

const jobOpenings = [
    {
        id: 1,
        title: 'Senior Full-Stack Developer',
        department: 'Engineering',
        location: 'Remote / San Francisco, CA',
        type: 'Full-time',
        description: 'We are looking for an experienced full-stack developer to join our engineering team.',
        requirements: ['5+ years of experience', 'React, Node.js, PostgreSQL', 'Cloud infrastructure knowledge']
    },
    {
        id: 2,
        title: 'DevOps Engineer',
        department: 'Engineering',
        location: 'Remote',
        type: 'Full-time',
        description: 'Join our DevOps team to help scale our infrastructure and deployment processes.',
        requirements: ['3+ years of DevOps experience', 'Docker, Kubernetes, AWS', 'CI/CD pipelines']
    },
    {
        id: 3,
        title: 'Customer Support Specialist',
        department: 'Support',
        location: 'San Francisco, CA',
        type: 'Full-time',
        description: 'Help our customers succeed by providing exceptional technical support.',
        requirements: ['2+ years of customer support', 'Technical troubleshooting skills', 'Excellent communication']
    }
];

const Careers: React.FC = () => {
    const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true });

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
                            <Briefcase className="w-4 h-4 text-blue-400" />
                            <span className="text-sm text-blue-300 font-medium">Join Our Team</span>
                        </motion.div>
                        
                        <h1 className="text-4xl lg:text-6xl font-bold text-white mb-4">
                            Careers at
                            <span className="block bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                                TradeHut
                            </span>
                        </h1>
                        
                        <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                            Build the future of technology with us. We're always looking for talented individuals to join our team.
                        </p>
                    </motion.div>

                    <div ref={ref} className="space-y-6">
                        {jobOpenings.map((job, index) => (
                            <motion.div
                                key={job.id}
                                initial={{ opacity: 0, y: 30 }}
                                animate={inView ? { opacity: 1, y: 0 } : {}}
                                transition={{ delay: index * 0.1 }}
                                whileHover={{ y: -2 }}
                                className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all duration-300"
                            >
                                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                                    <div className="flex-1">
                                        <h3 className="text-2xl font-bold text-white mb-2">{job.title}</h3>
                                        <div className="flex flex-wrap items-center gap-4 text-sm text-gray-400 mb-3">
                                            <div className="flex items-center gap-2">
                                                <MapPin className="w-4 h-4" />
                                                <span>{job.location}</span>
                                            </div>
                                            <div className="flex items-center gap-2">
                                                <Clock className="w-4 h-4" />
                                                <span>{job.type}</span>
                                            </div>
                                            <div className="flex items-center gap-2">
                                                <Code className="w-4 h-4" />
                                                <span>{job.department}</span>
                                            </div>
                                        </div>
                                        <p className="text-gray-300 mb-4">{job.description}</p>
                                        <ul className="space-y-2">
                                            {job.requirements.map((req, idx) => (
                                                <li key={idx} className="flex items-start gap-2 text-sm text-gray-400">
                                                    <span className="text-[#e5500e] mt-1">•</span>
                                                    <span>{req}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                    <motion.button
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.95 }}
                                        className="px-6 py-3 bg-[#e5500e] text-white rounded-xl font-medium hover:bg-[#d44a0d] transition-all duration-300 flex items-center gap-2 whitespace-nowrap"
                                    >
                                        <span>Apply Now</span>
                                        <ArrowRight className="w-4 h-4" />
                                    </motion.button>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Careers;

