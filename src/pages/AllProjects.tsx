import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Link } from 'react-router-dom';
import { 
    Code, 
    ExternalLink, 
    Github,
    ArrowLeft,
    Star,
    Users,
    Database,
    Search
} from 'lucide-react';
import {
    IconBrandReact,
    IconBrandNodejs,
    IconBrandPython,
    IconBrandJavascript,
    IconBrandDocker,
    IconBrandAws
} from '@tabler/icons-react';
import ModernNavbar from '../components/Layouts/ModernNavbar';
import Footer from '../components/Layouts/Footer';

const allProjects = [
    {
        id: 1,
        name: 'ScrubiMail',
        description: 'Advanced email validation service with real-time verification, domain checking, and spam detection. Built for high-performance and scalability.',
        category: 'API Service',
        iframeUrl: 'https://scrubimail.com',
        tech: ['React', 'Node.js', 'PostgreSQL'],
        status: 'Live',
        users: '10K+',
        link: 'https://scrubimail.com',
        github: '#',
        gradient: 'from-blue-500 to-cyan-500',
        featured: true
    },
    {
        id: 2,
        name: 'TradeHut',
        description: 'Comprehensive email management platform with bulk validation, analytics dashboard, and API integration. Enterprise-ready solution.',
        category: 'Web Application',
        iframeUrl: 'https://tradehut.com',
        tech: ['React', 'Node.js', 'PostgreSQL'],
        status: 'Live',
        users: '5K+',
        link: 'https://tradehut.com',
        github: '#',
        gradient: 'from-purple-500 to-pink-500',
        featured: true
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
        link: 'https://mybasi.com',
        github: '#',
        gradient: 'from-green-500 to-emerald-500',
        featured: false
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
        link: 'https://miradrinks.com',
        github: '#',
        gradient: 'from-orange-500 to-red-500',
        featured: false
    },
    {
        id: 5,
        name: 'MoreVans',
        description: 'A logistics moving company',
        category: 'Web Application',
        iframeUrl: 'https://morevans.com',
        tech: ['React', 'Django', 'postgres'],
        status: 'Live',
        users: '100+',
        link: 'https://morevans.com',
        github: '#',
        gradient: 'from-indigo-500 to-blue-500',
        featured: false
    },
    {
        id: 6,
        name: 'API Gateway Service',
        description: 'High-performance API gateway with rate limiting, caching, and request routing capabilities.',
        category: 'API Service',
        iframeUrl: 'https://example.com/api-gateway',
        tech: ['Node.js', 'Redis', 'Docker'],
        status: 'Live',
        users: '8K+',
        link: '#',
        github: '#',
        gradient: 'from-yellow-500 to-orange-500',
        featured: false
    },
    {
        id: 7,
        name: 'Task Management System',
        description: 'Collaborative task management platform with real-time updates, team collaboration, and project tracking.',
        category: 'Productivity Tool',
        iframeUrl: 'https://example.com/task-management',
        tech: ['React', 'Node.js', 'MongoDB'],
        status: 'Live',
        users: '3K+',
        link: '#',
        github: '#',
        gradient: 'from-pink-500 to-rose-500',
        featured: false
    },
    {
        id: 8,
        name: 'Payment Processing API',
        description: 'Secure payment processing API with support for multiple payment gateways and fraud detection.',
        category: 'API Service',
        iframeUrl: 'https://example.com/payment-api',
        tech: ['Node.js', 'PostgreSQL', 'AWS'],
        status: 'Live',
        users: '15K+',
        link: '#',
        github: '#',
        gradient: 'from-violet-500 to-purple-500',
        featured: true
    },
    {
        id: 9,
        name: 'Content Management System',
        description: 'Modern CMS with headless architecture, multi-site support, and advanced content workflows.',
        category: 'Web Application',
        iframeUrl: 'https://example.com/cms',
        tech: ['React', 'Node.js', 'PostgreSQL'],
        status: 'Live',
        users: '4K+',
        link: '#',
        github: '#',
        gradient: 'from-teal-500 to-cyan-500',
        featured: false
    }
];

const categories = ['All', 'API Service', 'Web Application', 'Mobile Application', 'E-Commerce', 'DevOps Tool', 'Security Tool', 'Analytics Tool', 'Productivity Tool'];

const techIcons: { [key: string]: React.ReactNode } = {
    'React': <IconBrandReact className="w-5 h-5" />,
    'Node.js': <IconBrandNodejs className="w-5 h-5" />,
    'Python': <IconBrandPython className="w-5 h-5" />,
    'JavaScript': <IconBrandJavascript className="w-5 h-5" />,
    'Docker': <IconBrandDocker className="w-5 h-5" />,
    'AWS': <IconBrandAws className="w-5 h-5" />,
    'PostgreSQL': <Database className="w-5 h-5" />,
    'TypeScript': <Code className="w-5 h-5" />,
    'Redis': <Database className="w-5 h-5" />,
    'MongoDB': <Database className="w-5 h-5" />
};

const AllProjects: React.FC = () => {
    const [selectedCategory, setSelectedCategory] = useState('All');
    const [searchTerm, setSearchTerm] = useState('');
    const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true });

    const filteredProjects = allProjects.filter(project => {
        const matchesCategory = selectedCategory === 'All' || project.category === selectedCategory;
        const matchesSearch = project.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                            project.description.toLowerCase().includes(searchTerm.toLowerCase());
        return matchesCategory && matchesSearch;
    });

    return (
        <div className="min-h-screen bg-black">
            {/* <ModernNavbar /> */}
            
            <section className="pt-32 pb-24 bg-gradient-to-b from-slate-900 via-slate-950 to-slate-900 relative overflow-hidden">
                {/* Background Elements */}
                <div className="absolute inset-0">
                    <div className="absolute top-1/4 right-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
                    <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>
                    <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff02_1px,transparent_1px),linear-gradient(to_bottom,#ffffff02_1px,transparent_1px)] bg-[size:4rem_4rem]"></div>
                </div>

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    {/* Header */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="mb-12"
                    >
                        <Link
                            to="/"
                            className="inline-flex items-center gap-2 text-gray-400 hover:text-white transition-colors mb-6"
                        >
                            <ArrowLeft className="w-4 h-4" />
                            <span>Back to Home</span>
                        </Link>

                        <div className="text-center mb-8">
                            <motion.div
                                initial={{ scale: 0 }}
                                animate={{ scale: 1 }}
                                className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-full border border-blue-500/20 mb-4"
                            >
                                <Code className="w-4 h-4 text-blue-400" />
                                <span className="text-sm text-blue-300 font-medium">All Projects</span>
                            </motion.div>
                            
                            <h1 className="text-4xl lg:text-6xl font-bold text-white mb-4">
                                Our Complete
                                <span className="block bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                                    Project Portfolio
                                </span>
                            </h1>
                            
                            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                                Explore all the tools and software solutions we've built to solve real-world problems
                            </p>
                        </div>

                        {/* Search and Filter */}
                        <div className="flex flex-col md:flex-row gap-4 mb-8">
                            <div className="relative flex-1">
                                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                                <input
                                    type="text"
                                    placeholder="Search projects..."
                                    value={searchTerm}
                                    onChange={(e) => setSearchTerm(e.target.value)}
                                    className="w-full pl-12 pr-4 py-3 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 transition-colors"
                                />
                            </div>
                            <div className="flex items-center gap-2 flex-wrap">
                                {categories.map((category) => (
                                    <motion.button
                                        key={category}
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.95 }}
                                        onClick={() => setSelectedCategory(category)}
                                        className={`px-4 py-2 rounded-xl font-medium transition-all duration-300 ${
                                            selectedCategory === category
                                                ? 'bg-[#e5500e] text-white shadow-lg'
                                                : 'bg-white/5 text-gray-400 border border-white/10 hover:bg-white/10 hover:text-white'
                                        }`}
                                    >
                                        {category}
                                    </motion.button>
                                ))}
                            </div>
                        </div>
                    </motion.div>

                    {/* Projects Grid */}
                    <div ref={ref} className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {filteredProjects.length === 0 ? (
                            <div className="col-span-full text-center py-12">
                                <p className="text-gray-400 text-lg">No projects found matching your search.</p>
                            </div>
                        ) : (
                            filteredProjects.map((project, index) => (
                                <motion.div
                                    key={project.id}
                                    initial={{ opacity: 0, y: 30 }}
                                    animate={inView ? { opacity: 1, y: 0 } : {}}
                                    transition={{ delay: index * 0.1 }}
                                    whileHover={{ y: -5 }}
                                    className="group"
                                >
                                    <div className={`relative h-full bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all duration-300 ${project.featured ? 'ring-2 ring-blue-500/50' : ''}`}>
                                        {project.featured && (
                                            <div className="absolute top-4 left-4">
                                                <span className="px-3 py-1 bg-blue-500/20 text-blue-400 text-xs font-medium rounded-full border border-blue-500/30">
                                                    Featured
                                                </span>
                                            </div>
                                        )}

                                        {/* Status Badge */}
                                        <div className="absolute top-4 right-4">
                                            <span className="px-3 py-1 bg-green-500/20 text-green-400 text-xs font-medium rounded-full border border-green-500/30">
                                                {project.status}
                                            </span>
                                        </div>

                                        {/* Iframe Preview */}
                                        <div className="relative w-full h-48 mb-4 rounded-xl overflow-hidden border border-white/10 group-hover:border-white/20 transition-all bg-slate-900/50 mt-8">
                                            <iframe
                                                src={project.iframeUrl}
                                                className="w-full h-full border-0"
                                                title={project.name}
                                                loading="lazy"
                                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                                allowFullScreen
                                            />
                                        </div>

                                        {/* Category */}
                                        <div className="text-xs text-gray-400 mb-2">{project.category}</div>

                                        {/* Title */}
                                        <h3 className="text-xl font-bold text-white mb-2 group-hover:text-blue-400 transition-colors">
                                            {project.name}
                                        </h3>

                                        {/* Description */}
                                        <p className="text-sm text-gray-400 mb-4 line-clamp-3">
                                            {project.description}
                                        </p>

                                        {/* Tech Stack */}
                                        <div className="flex flex-wrap gap-2 mb-4">
                                            {project.tech.map((tech) => (
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
                                                <span>{project.users}</span>
                                            </div>
                                            <div className="flex items-center gap-1">
                                                <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                                                <span>4.8</span>
                                            </div>
                                        </div>

                                        {/* Actions */}
                                        <div className="flex items-center gap-3 pt-4 border-t border-white/10">
                                            <a
                                                href={project.iframeUrl || project.link}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="flex items-center gap-2 text-sm text-blue-400 hover:text-blue-300 transition-colors group/link"
                                            >
                                                <span>View Live</span>
                                                <ExternalLink className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                                            </a>
                                            {project.github && (
                                                <a
                                                    href={project.github}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="flex items-center gap-2 text-sm text-gray-400 hover:text-white transition-colors"
                                                >
                                                    <Github className="w-4 h-4" />
                                                </a>
                                            )}
                                        </div>
                                    </div>
                                </motion.div>
                            ))
                        )}
                    </div>

                    {/* Results Count */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="text-center mt-12 text-gray-400"
                    >
                        Showing {filteredProjects.length} of {allProjects.length} projects
                    </motion.div>
                </div>
            </section>

            <Footer />
        </div>
    );
};

export default AllProjects;

