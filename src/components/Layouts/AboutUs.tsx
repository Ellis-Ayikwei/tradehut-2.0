import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { 
    Target, 
    Eye, 
    Heart,
    Award,
    Users,
    Briefcase,
    TrendingUp,
    Globe,
    Shield,
    Zap,
    CheckCircle,
    Star,
    ArrowRight,
    Handshake
} from 'lucide-react';
import {
    IconRocket,
    IconBulb,
    IconAward,
    IconChartLine,
    IconUsers,
    IconShieldCheck,
    IconSparkles
} from '@tabler/icons-react';

const values = [
    {
        icon: <IconBulb className="w-8 h-8" />,
        title: 'Innovation',
        description: 'Pushing boundaries with cutting-edge technology solutions',
        color: 'bg-orange-500'
    },
    {
        icon: <IconShieldCheck className="w-8 h-8" />,
        title: 'Trust',
        description: 'Building lasting relationships through transparency and reliability',
        color: 'bg-blue-500'
    },
    {
        icon: <Handshake className="w-8 h-8" />,
        title: 'Partnership',
        description: 'Growing together with our clients as technology partners',
        color: 'bg-purple-500'
    },
    {
        icon: <IconAward className="w-8 h-8" />,
        title: 'Excellence',
        description: 'Delivering world-class quality in every project we undertake',
        color: 'bg-green-500'
    }
];

const achievements = [
    { number: '10+', label: 'Years of Excellence', icon: <Award className="w-6 h-6" /> },
    { number: '5000+', label: 'Happy Customers', icon: <Users className="w-6 h-6" /> },
    { number: '98%', label: 'Client Satisfaction', icon: <Star className="w-6 h-6" /> },
    { number: '24/7', label: 'Support Available', icon: <Shield className="w-6 h-6" /> }
];

const AboutUs: React.FC = () => {
    const { ref: headerRef, inView: headerInView } = useInView({ threshold: 0.1, triggerOnce: true });
    const { ref: contentRef, inView: contentInView } = useInView({ threshold: 0.1, triggerOnce: true });
    const { ref: valuesRef, inView: valuesInView } = useInView({ threshold: 0.1, triggerOnce: true });

    return (
        <section className="py-24 bg-gradient-to-b from-slate-900 via-slate-950 to-slate-900 relative overflow-hidden">
            {/* Background Elements */}
            <div className="absolute inset-0">
                <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
                <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff02_1px,transparent_1px),linear-gradient(to_bottom,#ffffff02_1px,transparent_1px)] bg-[size:4rem_4rem]"></div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                {/* Section Header */}
                <motion.div
                    ref={headerRef}
                    initial={{ opacity: 0, y: 20 }}
                    animate={headerInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <motion.div
                        initial={{ scale: 0 }}
                        animate={headerInView ? { scale: 1 } : {}}
                        transition={{ delay: 0.2, type: "spring" }}
                        className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-full border border-blue-500/20 mb-4"
                    >
                        <IconSparkles className="w-4 h-4 text-blue-400" />
                        <span className="text-sm text-blue-300 font-medium">About TradeHut</span>
                    </motion.div>
                    
                    <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">
                        Transforming Ideas Into
                        <span className="block bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                            Digital Reality
                        </span>
                    </h2>
                    
                    <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                        We're not just a tech company - we're your partners in digital transformation, 
                        delivering innovative solutions that drive real business growth.
                    </p>
                </motion.div>

                {/* Main Content Grid */}
                <div ref={contentRef} className="grid lg:grid-cols-2 gap-12 mb-20">
                    {/* Left Content */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={contentInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.6 }}
                        className="space-y-6"
                    >
                        <div className="space-y-4">
                            <h3 className="text-3xl font-bold text-white">
                                Leading the Future of Technology
                            </h3>
                            <p className="text-gray-300 leading-relaxed">
                                Since our inception, TradeHut has been at the forefront of technological innovation. 
                                We combine deep industry expertise with cutting-edge technology to deliver solutions 
                                that not only meet today's challenges but anticipate tomorrow's opportunities.
                            </p>
                            <p className="text-gray-300 leading-relaxed">
                                Our team of passionate experts works tirelessly to ensure that every client receives 
                                personalized attention and solutions tailored to their unique needs. From startups to 
                                enterprises, we've helped businesses across industries harness the power of technology.
                            </p>
                        </div>

                        {/* Mission & Vision */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <motion.div
                                whileHover={{ scale: 1.02 }}
                                className="bg-gradient-to-br from-blue-600/10 to-purple-600/10 backdrop-blur-sm rounded-2xl p-6 border border-white/10"
                            >
                                <div className="flex items-center gap-3 mb-4">
                                    <div className="w-12 h-12 bg-[#e5500e] rounded-xl flex items-center justify-center">
                                        <Target className="w-6 h-6 text-white" />
                                    </div>
                                    <h4 className="text-xl font-semibold text-white">Our Mission</h4>
                                </div>
                                <p className="text-gray-300 text-sm">
                                    To empower businesses and individuals with innovative technology solutions 
                                    that drive growth, efficiency, and success in the digital age.
                                </p>
                            </motion.div>

                            <motion.div
                                whileHover={{ scale: 1.02 }}
                                className="bg-gradient-to-br from-purple-600/10 to-pink-600/10 backdrop-blur-sm rounded-2xl p-6 border border-white/10"
                            >
                                <div className="flex items-center gap-3 mb-4">
                                    <div className="w-12 h-12 bg-[#e5500e] rounded-xl flex items-center justify-center">
                                        <Eye className="w-6 h-6 text-white" />
                                    </div>
                                    <h4 className="text-xl font-semibold text-white">Our Vision</h4>
                                </div>
                                <p className="text-gray-300 text-sm">
                                    To be the global leader in technology innovation, setting new standards 
                                    for excellence and transforming how the world interacts with technology.
                                </p>
                            </motion.div>
                        </div>

                        {/* CTA Button */}
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="inline-flex items-center gap-2 px-6 py-3 bg-[#e5500e] text-white rounded-xl font-medium shadow-lg hover:shadow-xl transition-all duration-300 hover:bg-[#d44a0d]"
                        >
                            <span>Learn More About Us</span>
                            <ArrowRight className="w-4 h-4" />
                        </motion.button>
                    </motion.div>

                    {/* Right Content - Stats & Image */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        animate={contentInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="relative"
                    >
                        {/* Decorative Image/Visual */}
                        <div className="relative h-full min-h-[400px] bg-gradient-to-br from-blue-600/20 to-purple-600/20 rounded-3xl overflow-hidden">
                            <div className="absolute inset-0 bg-[url('/api/placeholder/600/400')] bg-cover bg-center opacity-50"></div>
                            
                            {/* Floating Stats */}
                            <div className="absolute inset-0 flex items-center justify-center">
                                <div className="grid grid-cols-2 gap-4 p-8">
                                    {achievements.map((stat, index) => (
                                        <motion.div
                                            key={index}
                                            initial={{ opacity: 0, scale: 0.5 }}
                                            animate={contentInView ? { opacity: 1, scale: 1 } : {}}
                                            transition={{ delay: 0.4 + index * 0.1, type: "spring" }}
                                            whileHover={{ scale: 1.05 }}
                                            className="bg-white/10 backdrop-blur-md rounded-2xl p-6 text-center border border-white/20"
                                        >
                                            <div className="text-blue-400 mb-2 flex justify-center">
                                                {stat.icon}
                                            </div>
                                            <div className="text-3xl font-bold text-white mb-1">
                                                {stat.number}
                                            </div>
                                            <div className="text-sm text-gray-300">
                                                {stat.label}
                                            </div>
                                        </motion.div>
                                    ))}
                                </div>
                            </div>

                            {/* Decorative Elements */}
                            <div className="absolute top-4 right-4">
                                <motion.div
                                    animate={{ rotate: 360 }}
                                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                                    className="w-20 h-20 border-4 border-blue-500/20 rounded-full"
                                />
                            </div>
                            <div className="absolute bottom-4 left-4">
                                <motion.div
                                    animate={{ scale: [1, 1.2, 1] }}
                                    transition={{ duration: 3, repeat: Infinity }}
                                    className="w-16 h-16 bg-purple-500/20 rounded-full blur-xl"
                                />
                            </div>
                        </div>
                    </motion.div>
                </div>

                {/* Core Values */}
                <motion.div
                    ref={valuesRef}
                    initial={{ opacity: 0, y: 50 }}
                    animate={valuesInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-12"
                >
                    <h3 className="text-3xl font-bold text-white mb-4">Our Core Values</h3>
                    <p className="text-gray-400 max-w-2xl mx-auto mb-12">
                        These principles guide everything we do and shape how we work with our clients
                    </p>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {values.map((value, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                animate={valuesInView ? { opacity: 1, y: 0 } : {}}
                                transition={{ delay: index * 0.1 }}
                                whileHover={{ y: -5 }}
                                className="group"
                            >
                                <div className="relative h-full bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:bg-white/10 transition-all duration-300">
                                    <div className={`w-16 h-16 ${value.color} rounded-2xl flex items-center justify-center text-white mb-4 mx-auto group-hover:scale-110 transition-transform`}>
                                        {value.icon}
                                    </div>
                                    <h4 className="text-xl font-semibold text-white mb-2">{value.title}</h4>
                                    <p className="text-gray-400 text-sm">{value.description}</p>
                                    
                                    {/* Hover Effect */}
                                    <div className="absolute inset-0 bg-gradient-to-r from-blue-600/5 to-purple-600/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>

                {/* Call to Action */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mt-20"
                >
                    <div className="inline-flex flex-col items-center p-8 bg-gradient-to-r from-blue-600/10 to-purple-600/10 rounded-3xl border border-white/10 backdrop-blur-sm">
                        <IconRocket className="w-12 h-12 text-blue-400 mb-4" />
                        <h3 className="text-2xl font-bold text-white mb-2">Ready to Start Your Journey?</h3>
                        <p className="text-gray-400 mb-6 max-w-md">
                            Join thousands of satisfied customers who have transformed their business with TradeHut
                        </p>
                        <div className="flex flex-wrap gap-4 justify-center">
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="px-6 py-3 bg-[#e5500e] text-white rounded-xl font-medium shadow-lg hover:shadow-xl transition-all duration-300 hover:bg-[#d44a0d]"
                            >
                                Get Started Today
                            </motion.button>
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="px-6 py-3 bg-white/5 backdrop-blur-sm border border-white/10 text-white rounded-xl font-medium hover:bg-white/10 transition-all duration-300"
                            >
                                Schedule a Call
                            </motion.button>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default AboutUs;
