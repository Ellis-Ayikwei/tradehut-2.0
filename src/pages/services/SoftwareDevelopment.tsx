import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { 
    Code, 
    Globe, 
    Smartphone,
    ShoppingCart,
    Palette,
    Gauge,
    CheckCircle,
    ArrowRight,
    Layout,
    Layers,
    Zap,
    Search,
    Shield
} from 'lucide-react';
import {
    IconCode,
    IconBrandReact,
    IconBrandVue,
    IconBrandAngular,
    IconBrandNodejs,
    IconDatabase,
    IconApi,
    IconDeviceMobileCode,
    IconDeviceMobile
} from '@tabler/icons-react';
import SoftwareDevelopmentModal from '../../components/Services/SoftwareDevelopmentModal';

const softwareServices = [
    {
        icon: <IconCode className="w-8 h-8" />,
        title: 'Custom Web Applications',
        description: 'Tailored web solutions built with modern technologies',
        services: ['React/Vue/Angular Apps', 'Progressive Web Apps', 'SaaS Applications', 'Dashboard Development', 'API Integration'],
        gradient: 'from-blue-500 to-cyan-500',
        technologies: ['React', 'Vue.js', 'Node.js', 'MongoDB']
    },
    {
        icon: <IconDeviceMobile className="w-8 h-8" />,
        title: 'Mobile App Development',
        description: 'Native and cross-platform mobile applications',
        services: ['iOS Development', 'Android Development', 'React Native', 'Flutter Apps', 'App Store Deployment'],
        gradient: 'from-purple-500 to-pink-500',
        technologies: ['React Native', 'Flutter', 'Swift', 'Kotlin']
    },
    {
        icon: <ShoppingCart className="w-8 h-8" />,
        title: 'E-Commerce Solutions',
        description: 'Complete online store setup with payment integration',
        services: ['Online Store Setup', 'Payment Gateway Integration', 'Inventory Management', 'Shopping Cart', 'Order Tracking'],
        gradient: 'from-green-500 to-emerald-500',
        technologies: ['WooCommerce', 'Shopify', 'Stripe', 'PayPal']
    },
    {
        icon: <IconDeviceMobileCode className="w-8 h-8" />,
        title: 'Responsive Web Design',
        description: 'Beautiful, mobile-first websites that work on all devices',
        services: ['Mobile-First Design', 'Cross-Browser Compatible', 'SEO Optimization', 'Fast Loading', 'Accessibility'],
        gradient: 'from-orange-500 to-red-500',
        technologies: ['HTML5', 'CSS3', 'JavaScript', 'Bootstrap']
    },
    {
        icon: <IconApi className="w-8 h-8" />,
        title: 'API Development',
        description: 'Robust backend solutions and API integrations',
        services: ['RESTful APIs', 'GraphQL', 'Third-party Integration', 'Database Design', 'Authentication'],
        gradient: 'from-indigo-500 to-purple-500',
        technologies: ['Node.js', 'Express', 'PostgreSQL', 'JWT']
    },
    {
        icon: <IconDatabase className="w-8 h-8" />,
        title: 'Desktop Applications',
        description: 'Cross-platform desktop software solutions',
        services: ['Electron Apps', 'Windows Applications', 'macOS Applications', 'Linux Applications', 'System Integration'],
        gradient: 'from-teal-500 to-cyan-500',
        technologies: ['Electron', 'Python', 'C#', 'Java']
    }
];

const developmentProcess = [
    {
        phase: 'Discovery',
        description: 'Understanding your business needs and goals',
        activities: ['Requirements gathering', 'Market research', 'Technical planning']
    },
    {
        phase: 'Design',
        description: 'Creating user-friendly interfaces and experiences',
        activities: ['Wireframing', 'UI/UX design', 'Prototype development']
    },
    {
        phase: 'Development',
        description: 'Building your application with clean, scalable code',
        activities: ['Frontend development', 'Backend development', 'Database setup']
    },
    {
        phase: 'Testing',
        description: 'Ensuring quality and performance',
        activities: ['Unit testing', 'Integration testing', 'User acceptance testing']
    },
    {
        phase: 'Deployment',
        description: 'Launching your application to the world',
        activities: ['Server setup', 'Domain configuration', 'SSL implementation']
    },
    {
        phase: 'Maintenance',
        description: 'Ongoing support and improvements',
        activities: ['Bug fixes', 'Updates', 'Performance optimization']
    }
];

const SoftwareDevelopment: React.FC = () => {
    const [selectedService, setSelectedService] = useState<any>(null);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true });

    const handleServiceClick = (service: any) => {
        const serviceData = {
            title: service.title,
            description: service.description,
            icon: service.icon,
            features: service.services,
            packages: [
                {
                    name: 'Starter',
                    price: 'GHC 5,000',
                    features: [
                        'Up to 5 pages/screens',
                        'Responsive design',
                        'Basic features',
                        'Contact form',
                        '3 months support'
                    ]
                },
                {
                    name: 'Professional',
                    price: 'GHC 15,000',
                    features: [
                        'Up to 15 pages/screens',
                        'Custom design',
                        'Advanced features',
                        'Payment integration',
                        '6 months support',
                        'Performance optimization'
                    ],
                    popular: true
                },
                {
                    name: 'Enterprise',
                    price: 'GHC 35,000+',
                    features: [
                        'Unlimited pages/screens',
                        'Fully custom solution',
                        'E-commerce functionality',
                        'API integrations',
                        'Advanced analytics',
                        '12 months support',
                        'Priority maintenance',
                        'Dedicated project manager'
                    ]
                }
            ],
            duration: '4-12 weeks depending on scope',
            warranty: '6 months free maintenance',
            process: developmentProcess.map(p => `${p.phase}: ${p.description}`),
            faqs: [
                {
                    question: 'What technologies do you use?',
                    answer: 'We use modern technologies like React, React Native, Flutter, Node.js, and more. We choose the best tech stack based on your project requirements.'
                },
                {
                    question: 'Do you provide hosting and deployment?',
                    answer: 'Yes! We can set up and manage hosting on platforms like AWS, Vercel, App Store, Google Play, or any provider of your choice.'
                },
                {
                    question: 'Can you maintain my application?',
                    answer: 'Absolutely! We offer ongoing maintenance packages to keep your application updated, secure, and running smoothly.'
                }
            ]
        };
        setSelectedService(serviceData);
        setIsModalOpen(true);
    };

    return (
        <>
            {/* Hero Section */}
            <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-950 via-green-950 to-emerald-950">
                {/* Background Effects */}
                <div className="absolute inset-0">
                    <div className="absolute top-1/4 left-1/3 w-96 h-96 bg-green-500/20 rounded-full blur-3xl"></div>
                    <div className="absolute bottom-1/4 right-1/3 w-96 h-96 bg-emerald-500/20 rounded-full blur-3xl"></div>
                    <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:4rem_4rem]"></div>
                </div>

                <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-green-600/20 to-emerald-600/20 rounded-full border border-green-500/20 mb-6">
                            <Code className="w-4 h-4 text-green-400" />
                            <span className="text-sm text-green-300 font-medium">Modern Software Development</span>
                        </div>
                        
                        <h1 className="text-5xl lg:text-6xl font-bold text-white mb-6">
                            Build Your Digital
                            <span className="block bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">
                                Presence Today
                            </span>
                        </h1>
                        
                        <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                            Custom software solutions - web, mobile, and desktop applications that drive results. 
                            From concept to deployment, we bring your vision to life.
                        </p>

                        <div className="flex flex-wrap gap-4 justify-center">
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
                                className="px-8 py-4 bg-gradient-to-r from-green-600 to-emerald-600 text-white rounded-xl font-medium shadow-lg hover:shadow-xl transition-all duration-300"
                            >
                                View Services
                            </motion.button>
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="px-8 py-4 bg-white/10 backdrop-blur-sm border border-white/20 text-white rounded-xl font-medium hover:bg-white/20 transition-all duration-300"
                            >
                                See Portfolio
                            </motion.button>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Features Section */}
            <section className="py-20 bg-gradient-to-b from-slate-900 to-slate-950">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-12"
                    >
                        <h2 className="text-4xl font-bold text-white mb-4">
                            Why Choose Our Software Development?
                        </h2>
                        <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                            We deliver more than just code - we create digital experiences
                        </p>
                    </motion.div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {[
                            { icon: <Palette className="w-6 h-6" />, title: 'Modern Design', description: 'Clean, contemporary designs that captivate users' },
                            { icon: <Smartphone className="w-6 h-6" />, title: 'Cross-Platform', description: 'Solutions that work on all devices and platforms' },
                            { icon: <Gauge className="w-6 h-6" />, title: 'Fast Performance', description: 'Optimized for speed and user experience' },
                            { icon: <Search className="w-6 h-6" />, title: 'SEO Optimized', description: 'Built to rank well in search engines' },
                            { icon: <Shield className="w-6 h-6" />, title: 'Secure Code', description: 'Following best security practices' },
                            { icon: <Layers className="w-6 h-6" />, title: 'Scalable', description: 'Built to grow with your business' },
                            { icon: <Zap className="w-6 h-6" />, title: 'Latest Tech', description: 'Using modern frameworks and tools' },
                            { icon: <Globe className="w-6 h-6" />, title: 'Global Ready', description: 'Multi-language and currency support' }
                        ].map((feature, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:bg-white/10 transition-all duration-300"
                            >
                                <div className="w-12 h-12 bg-gradient-to-r from-green-600 to-emerald-600 rounded-xl flex items-center justify-center text-white mb-4">
                                    {feature.icon}
                                </div>
                                <h3 className="text-lg font-semibold text-white mb-2">
                                    {feature.title}
                                </h3>
                                <p className="text-gray-400 text-sm">
                                    {feature.description}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Services Grid */}
            <section id="services" className="py-20 bg-slate-950">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-12"
                    >
                        <h2 className="text-4xl font-bold text-white mb-4">
                            Software Development Services
                        </h2>
                        <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                            From simple websites to complex applications, we've got you covered
                        </p>
                    </motion.div>

                    <div ref={ref} className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {softwareServices.map((service, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={inView ? { opacity: 1, scale: 1 } : {}}
                                transition={{ delay: index * 0.1 }}
                                onClick={() => handleServiceClick(service)}
                                className="group cursor-pointer"
                            >
                                <div className="relative h-full bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/10 overflow-hidden hover:bg-white/10 hover:border-white/20 transition-all duration-300">
                                    {/* Icon */}
                                    <div className={`w-20 h-20 bg-gradient-to-r ${service.gradient} rounded-2xl flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform`}>
                                        {service.icon}
                                    </div>

                                    {/* Content */}
                                    <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-green-400 transition-colors">
                                        {service.title}
                                    </h3>
                                    <p className="text-gray-400 mb-6">
                                        {service.description}
                                    </p>

                                    {/* Services List */}
                                    <div className="space-y-2 mb-6">
                                        {service.services.slice(0, 3).map((item, idx) => (
                                            <div key={idx} className="flex items-center gap-2 text-gray-300">
                                                <CheckCircle className="w-4 h-4 text-green-400" />
                                                <span className="text-sm">{item}</span>
                                            </div>
                                        ))}
                                        {service.services.length > 3 && (
                                            <p className="text-sm text-gray-500 pl-6">
                                                +{service.services.length - 3} more features
                                            </p>
                                        )}
                                    </div>

                                    {/* Technologies */}
                                    <div className="flex flex-wrap gap-2 mb-6">
                                        {service.technologies.map((tech, idx) => (
                                            <span key={idx} className="px-3 py-1 bg-white/5 rounded-lg text-xs text-gray-300 border border-white/10">
                                                {tech}
                                            </span>
                                        ))}
                                    </div>

                                    {/* CTA */}
                                    <div className="flex items-center gap-2 text-green-400 group-hover:text-green-300 transition-colors">
                                        <span className="font-medium">Learn More</span>
                                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                    </div>

                                    {/* Hover Effect */}
                                    <div className="absolute inset-0 bg-gradient-to-r from-green-600/5 to-emerald-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Development Process */}
            <section className="py-20 bg-gradient-to-b from-slate-950 to-slate-900">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-12"
                    >
                        <h2 className="text-4xl font-bold text-white mb-4">
                            Our Development Process
                        </h2>
                        <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                            A proven methodology that delivers results
                        </p>
                    </motion.div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {developmentProcess.map((process, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="relative"
                            >
                                <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:bg-white/10 transition-all duration-300 h-full">
                                    <div className="flex items-center gap-4 mb-4">
                                        <div className="w-12 h-12 bg-gradient-to-r from-green-600 to-emerald-600 rounded-xl flex items-center justify-center text-white font-bold">
                                            {index + 1}
                                        </div>
                                        <h3 className="text-xl font-semibold text-white">
                                            {process.phase}
                                        </h3>
                                    </div>
                                    <p className="text-gray-400 mb-4">
                                        {process.description}
                                    </p>
                                    <ul className="space-y-2">
                                        {process.activities.map((activity, idx) => (
                                            <li key={idx} className="flex items-center gap-2 text-sm text-gray-300">
                                                <div className="w-1.5 h-1.5 bg-green-400 rounded-full"></div>
                                                {activity}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 bg-slate-900">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="bg-gradient-to-r from-green-600/20 to-emerald-600/20 backdrop-blur-sm rounded-3xl p-12 border border-white/10"
                    >
                        <h2 className="text-3xl font-bold text-white mb-4">
                            Ready to Build Something Amazing?
                        </h2>
                        <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                            Let's discuss your project and bring your ideas to life with modern software development
                        </p>
                        <div className="flex flex-wrap gap-4 justify-center">
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                onClick={() => setIsModalOpen(true)}
                                className="px-8 py-4 bg-gradient-to-r from-green-600 to-emerald-600 text-white rounded-xl font-medium shadow-lg hover:shadow-xl transition-all duration-300"
                            >
                                Start Your Project
                            </motion.button>
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="px-8 py-4 bg-white/10 backdrop-blur-sm border border-white/20 text-white rounded-xl font-medium hover:bg-white/20 transition-all duration-300"
                            >
                                View Portfolio
                            </motion.button>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Service Modal */}
            {selectedService && (
                <SoftwareDevelopmentModal
                    isOpen={isModalOpen}
                    onClose={() => setIsModalOpen(false)}
                    service={selectedService}
                />
            )}
        </>
    );
};

export default SoftwareDevelopment;

