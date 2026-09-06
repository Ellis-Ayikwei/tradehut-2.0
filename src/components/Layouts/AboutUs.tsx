import React, { useState } from 'react';
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
    IconShieldCheck
} from '@tabler/icons-react';
import ContactModal from './ContactModal';

const values = [
    {
        icon: <IconBulb className="w-8 h-8" />,
        title: 'Innovation',
        description: 'Pushing boundaries with cutting-edge technology solutions'
    },
    {
        icon: <IconShieldCheck className="w-8 h-8" />,
        title: 'Trust',
        description: 'Building lasting relationships through transparency and reliability'
    },
    {
        icon: <Handshake className="w-8 h-8" />,
        title: 'Partnership',
        description: 'Growing together with our clients as technology partners'
    },
    {
        icon: <IconAward className="w-8 h-8" />,
        title: 'Excellence',
        description: 'Delivering world-class quality in every project we undertake'
    }
];

const achievements = [
    { number: '7+', label: 'Years of Excellence', icon: <Award className="w-6 h-6" /> },
    { number: '100+', label: 'Happy Customers', icon: <Users className="w-6 h-6" /> },
    { number: '98%', label: 'Client Satisfaction', icon: <Star className="w-6 h-6" /> },
    { number: '24/7', label: 'Support Available', icon: <Shield className="w-6 h-6" /> }
];

const AboutUs: React.FC = () => {
    const [isContactModalOpen, setIsContactModalOpen] = useState(false);
    const { ref: headerRef, inView: headerInView } = useInView({ threshold: 0.1, triggerOnce: true });
    const { ref: contentRef, inView: contentInView } = useInView({ threshold: 0.1, triggerOnce: true });
    const { ref: valuesRef, inView: valuesInView } = useInView({ threshold: 0.1, triggerOnce: true });

    return (
        <>
        <section className="py-24 bg-gradient-to-b from-slate-900 via-slate-950 to-slate-900 relative overflow-hidden">
            {/* Background Elements */}
            <div className="absolute inset-0">
                <div className="absolute top-0 left-1/4 w-96 h-96 bg-brand/10 rounded-full blur-3xl"></div>
                <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-slate-500/10 rounded-full blur-3xl"></div>
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
                        className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-br from-brand-light to-brand-dark rounded-full border border-white/10 mb-4"
                    >
                        <Briefcase className="w-4 h-4 text-white" />
                        <span className="text-sm text-white font-medium">About TradeHut</span>
                    </motion.div>

                    <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">
                        Transforming Ideas Into
                        <span className="block bg-gradient-to-r from-brand to-brand-light bg-clip-text text-transparent">
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
                                className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-brand/30 transition-colors duration-300"
                            >
                                <div className="flex items-center gap-3 mb-4">
                                    <div className="w-12 h-12 bg-gradient-to-br from-brand-light to-brand-dark rounded-xl flex items-center justify-center">
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
                                className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-brand/30 transition-colors duration-300"
                            >
                                <div className="flex items-center gap-3 mb-4">
                                    <div className="w-12 h-12 bg-gradient-to-br from-brand-light to-brand-dark rounded-xl flex items-center justify-center">
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
                            onClick={() => document.getElementById('core-values')?.scrollIntoView({ behavior: 'smooth' })}
                            className="inline-flex items-center gap-2 px-6 py-3 bg-brand text-white rounded-xl font-medium shadow-lg hover:shadow-xl transition-all duration-300 hover:bg-brand-hover"
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
                        {/* Founder Photo */}
                        <div className="relative h-full min-h-[400px] rounded-3xl overflow-hidden border border-white/10">
                            <img
                                src="/assets/images/team/ellis.jpg"
                                alt="Ellis Ayikwei, Founder of TradeHut"
                                className="absolute inset-0 w-full h-full object-cover object-top"
                            />
                            {/* Legibility gradient */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-black/10"></div>

                            {/* Founder Badge */}
                            <div className="absolute top-4 left-4 px-4 py-2 bg-black/40 backdrop-blur-md rounded-xl border border-white/10">
                                <div className="text-white font-semibold text-sm">Ellis Ayikwei</div>
                                <div className="text-gray-300 text-xs">Founder &amp; Lead Engineer</div>
                            </div>

                            {/* Floating Stats */}
                            <div className="absolute inset-x-0 bottom-0 p-4 sm:p-6">
                                <div className="grid grid-cols-2 gap-3 sm:gap-4">
                                    {achievements.map((stat, index) => (
                                        <motion.div
                                            key={index}
                                            initial={{ opacity: 0, scale: 0.5 }}
                                            animate={contentInView ? { opacity: 1, scale: 1 } : {}}
                                            transition={{ delay: 0.4 + index * 0.1, type: "spring" }}
                                            whileHover={{ scale: 1.05 }}
                                            className="bg-white/10 backdrop-blur-md rounded-2xl p-4 text-center border border-white/20"
                                        >
                                            <div className="text-brand-light mb-1 flex justify-center">
                                                {stat.icon}
                                            </div>
                                            <div className="text-2xl font-bold text-white mb-0.5">
                                                {stat.number}
                                            </div>
                                            <div className="text-xs text-gray-300">
                                                {stat.label}
                                            </div>
                                        </motion.div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>

                {/* Core Values */}
                <motion.div
                    id="core-values"
                    ref={valuesRef}
                    initial={{ opacity: 0, y: 50 }}
                    animate={valuesInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-12 scroll-mt-24"
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
                                <div className="relative h-full bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:bg-white/10 hover:border-brand/30 transition-all duration-300">
                                    <div className="w-16 h-16 bg-gradient-to-br from-brand-light to-brand-dark rounded-2xl flex items-center justify-center text-white mb-4 mx-auto group-hover:scale-110 transition-all">
                                        {value.icon}
                                    </div>
                                    <h4 className="text-xl font-semibold text-white mb-2">{value.title}</h4>
                                    <p className="text-gray-400 text-sm">{value.description}</p>
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
                    <div className="inline-flex flex-col items-center p-8 bg-brand/5 rounded-3xl border border-white/10 backdrop-blur-sm">
                        <IconRocket className="w-12 h-12 text-brand mb-4" />
                        <h3 className="text-2xl font-bold text-white mb-2">Ready to Start Your Journey?</h3>
                        <p className="text-gray-400 mb-6 max-w-md">
                            Join our growing list of satisfied customers who have transformed their business with TradeHut
                        </p>
                        <div className="flex flex-wrap gap-4 justify-center">
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                onClick={() => setIsContactModalOpen(true)}
                                className="px-6 py-3 bg-brand text-white rounded-xl font-medium shadow-lg hover:shadow-xl transition-all duration-300 hover:bg-brand-hover"
                            >
                                Get Started Today
                            </motion.button>
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                onClick={() => setIsContactModalOpen(true)}
                                className="px-6 py-3 bg-white/5 backdrop-blur-sm border border-white/10 text-white rounded-xl font-medium hover:bg-white/10 transition-all duration-300"
                            >
                                Schedule a Call
                            </motion.button>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
        <ContactModal isOpen={isContactModalOpen} onClose={() => setIsContactModalOpen(false)} />
        </>
    );
};

export default AboutUs;
