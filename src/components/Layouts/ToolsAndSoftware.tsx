import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { 
    Code, 
    ExternalLink, 
    Github,
    ArrowRight,
    Star,
    Users,
    Database
} from 'lucide-react';
import {
    IconBrandReact,
    IconBrandNodejs,
    IconBrandPython,
    IconBrandJavascript,
    IconBrandDocker,
    IconBrandAws
} from '@tabler/icons-react';

const toolsAndSoftware = [
    {
        id: 1,
        name: 'ScrubiMail',
        description: 'Advanced email validation service with real-time verification, domain checking, and spam detection.',
        category: 'API Service',
        iframeUrl: 'https://scrubimail.com',
        tech: ['React', 'Node.js', 'PostgreSQL'],
        status: 'Live',
        users: '10K+',
        link: '#',
        github: '#',
        gradient: 'from-blue-500 to-cyan-500'
    },
    {
        id: 2,
        name: 'TradeHut',
        description: 'Comprehensive email management platform with bulk validation, analytics dashboard, and API integration.',
        category: 'Web Application',
        iframeUrl: 'https://tradehut.com',
        tech: ['React', 'Node.js', 'PostgreSQL'],
        status: 'Live',
        users: '5K+',
        link: '#',
        github: '#',
        gradient: 'from-purple-500 to-pink-500'
    },
    {
        id: 3,
        name: 'MyBasi Platform',
        description: 'A ride hailing platform for mybasi',
        category: 'Mobile Application',
        iframeUrl: 'https://mybasi.com',
        tech: ['Flutter', 'Firebase'],
        status: 'Live',
        users: '100+',
        link: '#',
        github: '#',
        gradient: 'from-green-500 to-emerald-500'
    },
    {
        id: 4,
        name: 'Mira Drinks Uk',
        description: 'A Shopify e-commerce store for Mira Drinks Uk',
        category: 'E-Commerce',
        iframeUrl: 'https://miradrinks.com',
        tech: ['Shopify', 'Liquid', 'HTML', 'CSS', 'JavaScript'],
        status: 'Live',
        users: '100+',
        link: '#',
        github: '#',
        gradient: 'from-orange-500 to-red-500'
    },
    {
        id: 5,
        name: 'MoreVans ',
        description: 'A logistics moving company',
        category: 'Web Application',
        iframeUrl: 'https://morevans.com',
        tech: ['React', 'Django', 'postgres'],
        status: 'Live',
        users: '100+',
        link: '#',
        github: '#',
        gradient: 'from-indigo-500 to-blue-500'
    }
];

const techIcons: { [key: string]: React.ReactNode } = {
    'React': <IconBrandReact className="w-5 h-5" />,
    'Node.js': <IconBrandNodejs className="w-5 h-5" />,
    'Python': <IconBrandPython className="w-5 h-5" />,
    'JavaScript': <IconBrandJavascript className="w-5 h-5" />,
    'Docker': <IconBrandDocker className="w-5 h-5" />,
    'AWS': <IconBrandAws className="w-5 h-5" />,
    'PostgreSQL': <Database className="w-5 h-5" />,
    'TypeScript': <Code className="w-5 h-5" />,
    'Redis': <Database className="w-5 h-5" />
};

const ToolsAndSoftware: React.FC = () => {
    const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true });

    return (
        <section className="py-24 bg-gradient-to-b from-slate-900 via-slate-950 to-slate-900 relative overflow-hidden">
            {/* Background Elements */}
            <div className="absolute inset-0">
                <div className="absolute top-1/4 right-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
                <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff02_1px,transparent_1px),linear-gradient(to_bottom,#ffffff02_1px,transparent_1px)] bg-[size:4rem_4rem]"></div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <motion.div
                        initial={{ scale: 0 }}
                        whileInView={{ scale: 1 }}
                        viewport={{ once: true }}
                        className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-full border border-blue-500/20 mb-4"
                    >
                        <Code className="w-4 h-4 text-blue-400" />
                        <span className="text-sm text-blue-300 font-medium">Our Creations</span>
                    </motion.div>
                    
                    <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">
                        Tools & Software
                        <span className="block bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                            We've Built
                        </span>
                    </h2>
                    
                    <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                        Discover the innovative tools and software solutions we've developed to solve real-world problems
                    </p>
                </motion.div>

                {/* Tools Grid */}
                <div ref={ref} className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {toolsAndSoftware.map((tool, index) => (
                        <motion.div
                            key={tool.id}
                            initial={{ opacity: 0, y: 30 }}
                            animate={inView ? { opacity: 1, y: 0 } : {}}
                            transition={{ delay: index * 0.1 }}
                            whileHover={{ y: -5 }}
                            className="group"
                        >
                            <div className="relative h-full bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all duration-300 overflow-hidden">
                                {/* Status Badge */}
                                <div className="absolute top-4 right-4 z-10">
                                    <span className="px-3 py-1 bg-green-500/20 text-green-400 text-xs font-medium rounded-full border border-green-500/30">
                                        {tool.status}
                                    </span>
                                </div>

                                {/* Iframe Preview */}
                                <div className="relative w-full h-48 mb-4 rounded-xl overflow-hidden border border-white/10 group-hover:border-white/20 transition-all bg-slate-900/50">
                                    <iframe
                                        src={tool.iframeUrl}
                                        className="w-full h-full border-0"
                                        title={tool.name}
                                        loading="lazy"
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                        allowFullScreen
                                    />
                                </div>

                                {/* Category */}
                                <div className="text-xs text-gray-400 mb-2">{tool.category}</div>

                                {/* Title */}
                                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-blue-400 transition-colors">
                                    {tool.name}
                                </h3>

                                {/* Description */}
                                <p className="text-sm text-gray-400 mb-4 line-clamp-2">
                                    {tool.description}
                                </p>

                                {/* Tech Stack */}
                                <div className="flex flex-wrap gap-2 mb-4">
                                    {tool.tech.map((tech) => (
                                        <div
                                            key={tech}
                                            className="flex items-center gap-1 px-2 py-1 bg-white/5 rounded-lg text-xs text-gray-300"
                                        >
                                            {techIcons[tech] || <Code className="w-3 h-3" />}
                                            <span>{tech}</span>
                                        </div>
                                    ))}
                                </div>

                                {/* Stats */}
                                <div className="flex items-center gap-4 mb-4 text-xs text-gray-400">
                                    <div className="flex items-center gap-1">
                                        <Users className="w-4 h-4" />
                                        <span>{tool.users}</span>
                                    </div>
                                    <div className="flex items-center gap-1">
                                        <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                                        <span>4.8</span>
                                    </div>
                                </div>

                                {/* Actions */}
                                <div className="flex items-center gap-3 pt-4 border-t border-white/10">
                                    <a
                                        href={tool.iframeUrl}
                                        className="flex items-center gap-2 text-sm text-blue-400 hover:text-blue-300 transition-colors group/link"
                                    >
                                        <span>View Live</span>
                                        <ExternalLink className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                                    </a>
                                    {tool.github && (
                                        <a
                                            href={tool.github}
                                            className="flex items-center gap-2 text-sm text-gray-400 hover:text-white transition-colors"
                                        >
                                            <Github className="w-4 h-4" />
                                        </a>
                                    )}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* CTA */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mt-16"
                >
                    <Link to="/projects">
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="inline-flex items-center gap-2 px-8 py-4 bg-[#e5500e] text-white rounded-xl font-medium shadow-lg hover:shadow-xl transition-all duration-300 hover:bg-[#d44a0d]"
                        >
                            <span>View All Projects</span>
                            <ArrowRight className="w-5 h-5" />
                        </motion.button>
                    </Link>
                </motion.div>
            </div>
        </section>
    );
};

export default ToolsAndSoftware;

