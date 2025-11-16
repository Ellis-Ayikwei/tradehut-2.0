import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Link } from 'react-router-dom';
import { ArrowLeft, Linkedin, Github, Mail, Code } from 'lucide-react';

const teamMembers = [
    {
        id: 1,
        name: 'John Doe',
        role: 'CEO & Founder',
        bio: 'Tech enthusiast with 15+ years of experience in software development and business strategy.',
        image: 'https://via.placeholder.com/300',
        linkedin: '#',
        github: '#',
        email: 'john@tradehut.com'
    },
    {
        id: 2,
        name: 'Jane Smith',
        role: 'CTO',
        bio: 'Full-stack developer and cloud architect specializing in scalable enterprise solutions.',
        image: 'https://via.placeholder.com/300',
        linkedin: '#',
        github: '#',
        email: 'jane@tradehut.com'
    },
    {
        id: 3,
        name: 'Mike Johnson',
        role: 'Head of Operations',
        bio: 'Operations expert focused on delivering exceptional customer service and streamlined processes.',
        image: 'https://via.placeholder.com/300',
        linkedin: '#',
        github: '#',
        email: 'mike@tradehut.com'
    },
    {
        id: 4,
        name: 'Sarah Williams',
        role: 'Lead Developer',
        bio: 'Frontend specialist passionate about creating beautiful and intuitive user experiences.',
        image: 'https://via.placeholder.com/300',
        linkedin: '#',
        github: '#',
        email: 'sarah@tradehut.com'
    }
];

const Team: React.FC = () => {
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
                            <Code className="w-4 h-4 text-blue-400" />
                            <span className="text-sm text-blue-300 font-medium">Our Team</span>
                        </motion.div>
                        
                        <h1 className="text-4xl lg:text-6xl font-bold text-white mb-4">
                            Meet the
                            <span className="block bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                                TradeHut Team
                            </span>
                        </h1>
                        
                        <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                            The talented individuals behind our innovative technology solutions
                        </p>
                    </motion.div>

                    <div ref={ref} className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {teamMembers.map((member, index) => (
                            <motion.div
                                key={member.id}
                                initial={{ opacity: 0, y: 30 }}
                                animate={inView ? { opacity: 1, y: 0 } : {}}
                                transition={{ delay: index * 0.1 }}
                                whileHover={{ y: -5 }}
                                className="group"
                            >
                                <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all duration-300">
                                    <div className="relative mb-4">
                                        <div className="w-full aspect-square rounded-xl overflow-hidden bg-gradient-to-br from-blue-500/20 to-purple-500/20">
                                            <img
                                                src={member.image}
                                                alt={member.name}
                                                className="w-full h-full object-cover"
                                            />
                                        </div>
                                    </div>
                                    
                                    <h3 className="text-xl font-bold text-white mb-1">{member.name}</h3>
                                    <p className="text-sm text-[#e5500e] mb-3">{member.role}</p>
                                    <p className="text-sm text-gray-400 mb-4">{member.bio}</p>
                                    
                                    <div className="flex items-center gap-3 pt-4 border-t border-white/10">
                                        <a
                                            href={member.linkedin}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="w-8 h-8 bg-white/5 rounded-lg flex items-center justify-center text-gray-400 hover:text-blue-400 hover:bg-white/10 transition-all"
                                        >
                                            <Linkedin className="w-4 h-4" />
                                        </a>
                                        <a
                                            href={member.github}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="w-8 h-8 bg-white/5 rounded-lg flex items-center justify-center text-gray-400 hover:text-white hover:bg-white/10 transition-all"
                                        >
                                            <Github className="w-4 h-4" />
                                        </a>
                                        <a
                                            href={`mailto:${member.email}`}
                                            className="w-8 h-8 bg-white/5 rounded-lg flex items-center justify-center text-gray-400 hover:text-purple-400 hover:bg-white/10 transition-all"
                                        >
                                            <Mail className="w-4 h-4" />
                                        </a>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Team;

