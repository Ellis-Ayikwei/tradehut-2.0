'use client';

import React, { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, useScroll, useTransform } from 'framer-motion';
import { 
    ArrowRight, 
    Play,
    Database,
    Cloud,
    Network,
    Cpu,
    Shield,
    Code,
    Headphones,
    Sparkles,
    CheckCircle2
} from 'lucide-react';
import {
    IconBrandApple,
    IconBrandWindows,
    IconDeviceMobile,
    IconDeviceLaptop,
    IconServer,
    IconBrandPython,
    IconBrandJavascript,
    IconBrandReact,
    IconBrandNodejs,
    IconBrandDocker,
    IconBrandAws,
    IconBrandGit,
    IconBrandTypescript
} from '@tabler/icons-react';
import Marquee from 'react-fast-marquee';
import ContactModal from './ContactModal';
import ModernNavbar from './ModernNavbar';

const trustedBrands = [
    { name: 'Apple', icon: <IconBrandApple className="w-8 h-8" /> },
    { name: 'Samsung', icon: <IconDeviceMobile className="w-8 h-8" /> },
    { name: 'HP', icon: <IconDeviceLaptop className="w-8 h-8" /> },
    { name: 'Dell', icon: <IconServer className="w-8 h-8" /> },
    { name: 'Lenovo', icon: <IconDeviceLaptop className="w-8 h-8" /> },
    { name: 'Microsoft', icon: <IconBrandWindows className="w-8 h-8" /> },
];

const techStack = [
    { name: 'Python', icon: IconBrandPython },
    { name: 'JavaScript', icon: IconBrandJavascript },
    { name: 'TypeScript', icon: IconBrandTypescript },
    { name: 'React', icon: IconBrandReact },
    { name: 'Node.js', icon: IconBrandNodejs },
    { name: 'Docker', icon: IconBrandDocker },
    { name: 'AWS', icon: IconBrandAws },
    { name: 'Git', icon: IconBrandGit },
    { name: 'AI/ML', icon: Cpu },
    { name: 'MCP', icon: Network },
    { name: 'Database', icon: Database },
    { name: 'Cloud', icon: Cloud },
];


export default function Hero() {
    const [isContactModalOpen, setIsContactModalOpen] = useState(false);
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end start"]
    });
    
    const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
    const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);


    return (
        <>
           
            
            {/* Ultra Modern Hero Section */}
            <section ref={containerRef} className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black py-8 sm:py-12 lg:py-0">
                {/* Minimalist Beam Arch */}
                {/* <div className="absolute inset-0 overflow-hidden">
                    <svg className="absolute top-0 left-1/2 transform -translate-x-1/2 w-full h-full" viewBox="0 0 1200 800" preserveAspectRatio="none">
                        <defs>
                            <radialGradient id="archGradient" cx="50%" cy="0%" r="30%">
                                <stop offset="0%" stopColor="#e5500e" stopOpacity="0.9" />
                                <stop offset="20%" stopColor="#e5500e" stopOpacity="0.4" />
                                <stop offset="40%" stopColor="#e5500e" stopOpacity="0.1" />
                                <stop offset="100%" stopColor="#e5500e" stopOpacity="0" />
                            </radialGradient>
                            <filter id="glow">
                                <feGaussianBlur stdDeviation="40" result="coloredBlur"/>
                                <feMerge>
                                    <feMergeNode in="coloredBlur"/>
                                    <feMergeNode in="SourceGraphic"/>
                                </feMerge>
                            </filter>
                        </defs>
                        <path
                            d="M 0,400 Q 600,-150 1200,400 L 1200,800 L 0,800 Z"
                            fill="url(#archGradient)"
                            opacity="1"
                            filter="url(#glow)"
                        />
                    </svg>
                </div> */}

                {/* Minimalist Grid Pattern */}
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:4rem_4rem]"></div>

          
          
                {/* Main Content */}
                <motion.div 
                    style={{ y, opacity }}
                    className="relative z-10 max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8 mt-16 sm:mt-20 md:mt-24 lg:mt-28"
                >
                    <div className="flex flex-col items-center">
                        {/* New Software Announcement */}
                        <motion.div
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.4 }}
                            className="text-center mb-4 sm:mb-6 w-full"
                        >
                            <Link to="https://scrubimail.com">
                                <motion.span
                                    initial={{ scale: 0.9 }}
                                    animate={{ scale: 1 }}
                                    whileHover={{ scale: 1.05 }}
                                    transition={{ delay: 0.6, type: "spring", stiffness: 200 }}
                                    className="inline-flex items-center gap-2 px-4 py-2 sm:px-5 sm:py-2.5 bg-[#e5500e]/20 backdrop-blur-sm rounded-full border border-[#e5500e]/30 text-[#e5500e] text-xs sm:text-sm font-medium hover:bg-[#e5500e]/30 transition-all duration-300 cursor-pointer"
                                >
                                    {/* Blinking Green Dot */}
                                    <motion.span
                                        animate={{ opacity: [1, 0.3, 1] }}
                                        transition={{ 
                                            duration: 1.5, 
                                            repeat: Infinity,
                                            ease: "easeInOut"
                                        }}
                                        className="relative flex items-center justify-center"
                                    >
                                        <span className="absolute w-2 h-2 bg-green-500 rounded-full"></span>
                                    </motion.span>
                                    <span>Whats New: ScrubiMail </span>
                                    <span className="ml-2 px-3 py-1 flex items-center gap-2 bg-[#e5500e] text-white rounded-full text-xs font-medium">Check it out
                                        <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                                    </span>
                                </motion.span>
                            </Link>
                        </motion.div>

                        {/* Main Heading */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.8 }}
                            className="text-center mb-3 sm:mb-4 w-full"
                        >
                            <motion.h1
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 1 }}
                                className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl font-bold text-white mb-2 sm:mb-4 leading-tight px-1 sm:px-2"
                            >
                                Effortless Technology,
                                <span className="block bg-gradient-to-r from-white via-gray-300 to-white bg-clip-text text-transparent">
                                    Expertly Managed.
                                </span>
                            </motion.h1>
                        </motion.div>

                        {/* Description and CTA */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 1.2 }}
                            className="text-center w-full max-w-xs sm:max-w-lg md:max-w-2xl px-3 sm:px-4"
                        >
                            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-300 mb-2 leading-relaxed font-medium">
                                Your Complete Technology Ecosystem, Perfected.
                            </p>
                            <p className="text-xs sm:text-sm md:text-base lg:text-lg text-gray-400 mb-3 sm:mb-4 leading-relaxed">
                                Repairs, software, cloud, automation, and everything in between. 
                                Your one-stop solution for all technology needs—from device fixes to enterprise solutions.
                            </p>

                            {/* CTA Buttons - Apple-like Dark Gradients */}
                            {/* <div className="flex flex-wrap justify-center gap-4">
                                <motion.button
                                    whileHover={{ scale: 1.02 }}
                                    whileTap={{ scale: 0.98 }}
                                    onClick={() => setIsContactModalOpen(true)}
                                    className="group relative px-8 py-3.5 bg-gradient-to-r from-gray-900 via-gray-800 to-black text-white rounded-lg font-medium shadow-lg border border-gray-700/50 hover:border-gray-600/50 transition-all duration-300 overflow-hidden"
                                >
                                    <span className="relative z-10 flex items-center gap-2">
                                        Get Started
                                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                    </span>
                                    <div className="absolute inset-0 bg-gradient-to-r from-gray-800 via-gray-700 to-gray-800 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                </motion.button>

                                <motion.button
                                    whileHover={{ scale: 1.02 }}
                                    whileTap={{ scale: 0.98 }}
                                    className="group px-8 py-3.5 bg-gradient-to-r from-black via-gray-900 to-black text-white rounded-lg font-medium border border-gray-800/50 hover:border-gray-700/50 hover:bg-gradient-to-r hover:from-gray-900 hover:via-gray-800 hover:to-gray-900 transition-all duration-300"
                                >
                                    <span className="flex items-center gap-2">
                                        <Play className="w-4 h-4" />
                                        Watch Demo
                                    </span>
                                </motion.button>
                            </div> */}
                        </motion.div>

                        {/* Tech Stack Marquee - Full Width with Fade */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 1.4 }}
                            className="w-full mt-3 sm:mt-4 mb-3 sm:mb-4 relative overflow-hidden"
                        >
                            {/* Fade overlay for soft entry/exit */}
                            <div className="absolute inset-0 z-10 pointer-events-none">
                                <div className="absolute left-0 top-0 bottom-0 w-16 sm:w-24 md:w-32 bg-gradient-to-r from-black to-transparent"></div>
                                <div className="absolute right-0 top-0 bottom-0 w-16 sm:w-24 md:w-32 bg-gradient-to-l from-black to-transparent"></div>
                            </div>
                            
                            <Marquee
                                speed={50}
                                gradient={false}
                                pauseOnHover={true}
                                className="py-2 sm:py-3 md:py-4"
                            >
                                {techStack.map((tech, index) => {
                                    const IconComponent = tech.icon;
                                    return (
                                        <div
                                            key={index}
                                            className="flex items-center gap-2 sm:gap-3 mx-2 sm:mx-4 md:mx-6 px-3 sm:px-4 md:px-6 py-2 sm:py-3 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 hover:bg-white/10 transition-all duration-300"
                                        >
                                            <div className="text-white/80 flex-shrink-0">
                                                <IconComponent className="w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8 lg:w-10 lg:h-10" />
                                            </div>
                                            <span className="text-xs sm:text-sm text-gray-300 font-medium whitespace-nowrap">
                                                {tech.name}
                                            </span>
                                        </div>
                                    );
                                })}
                            </Marquee>
                        </motion.div>

      {/* Laptop Image - Main Feature */}
      <div className="relative w-full max-w-xs sm:max-w-md md:max-w-2xl lg:max-w-3xl xl:max-w-4xl mx-auto mt-3 sm:mt-4 md:mt-6 lg:mt-8 px-1 sm:px-2 md:px-4 lg:px-0">
            {/* Glow effects around laptop */}
            <div className="absolute inset-0 bg-[#e5500e]/20 rounded-3xl blur-3xl transform scale-110"></div>
            <div className="absolute inset-0 bg-[#e5500e]/15 rounded-3xl blur-2xl transform scale-105"></div>
            <div className="absolute inset-0 bg-[#e5500e]/10 rounded-3xl blur-xl"></div>
            
            {/* Laptop image container */}
            <div className="relative">
              <img 
                src="/assets/images/hero/Macbook-Air-192.168.100.12.png" 
                alt="Email Validation Dashboard on MacBook Air"
                className="w-full h-auto mx-auto drop-shadow-2xl"
              />
              
              {/* Floating Nodes Overlay - Inside laptop screen area */}
              <div className="absolute top-[8%] left-[6%] right-[6%] bottom-[25%] pointer-events-none">
                <div className="relative w-full h-full">
                  {/* Floating Nodes */}
                  {[
                    { x: 20, y: 30, size: 16, color: 'rgb(16, 185, 129)' },
                    { x: 60, y: 50, size: 24, color: 'rgb(30, 58, 138)' },
                    { x: 80, y: 70, size: 20, color: 'rgb(16, 185, 129)' },
                    { x: 40, y: 80, size: 16, color: 'rgb(30, 58, 138)' },
                    { x: 70, y: 20, size: 20, color: 'rgb(16, 185, 129)' },
                  ].map((node, i) => (
                    <motion.div
                      key={i}
                      className="absolute rounded-full"
                      style={{
                        left: `${node.x}%`,
                        top: `${node.y}%`,
                        width: `${node.size}px`,
                        height: `${node.size}px`,
                        backgroundColor: node.color,
                      }}
                      animate={{
                        scale: [1, 1.2, 1],
                        opacity: [0.5, 1, 0.5],
                      }}
                      transition={{
                        duration: 2 + i * 0.5,
                        repeat: Infinity,
                        delay: i * 0.3,
                      }}
                    />
                  ))}

                  {/* Connection Lines */}
                  <svg className="absolute inset-0 w-full h-full opacity-30 pointer-events-none">
                    <motion.line
                      x1="20%"
                      y1="30%"
                      x2="60%"
                      y2="50%"
                      stroke="#10B981"
                      strokeWidth="1"
                      initial={{ pathLength: 0, opacity: 0 }}
                      animate={{ pathLength: 1, opacity: 0.5 }}
                      transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
                    />
                    <motion.line
                      x1="60%"
                      y1="50%"
                      x2="80%"
                      y2="70%"
                      stroke="#1E3A8A"
                      strokeWidth="1"
                      initial={{ pathLength: 0, opacity: 0 }}
                      animate={{ pathLength: 1, opacity: 0.5 }}
                      transition={{ duration: 2, delay: 0.5, repeat: Infinity, repeatType: "reverse" }}
                    />
                    <motion.line
                      x1="80%"
                      y1="70%"
                      x2="40%"
                      y2="80%"
                      stroke="#10B981"
                      strokeWidth="1"
                      initial={{ pathLength: 0, opacity: 0 }}
                      animate={{ pathLength: 1, opacity: 0.5 }}
                      transition={{ duration: 2, delay: 1, repeat: Infinity, repeatType: "reverse" }}
                    />
                  </svg>
                </div>
              </div>
            </div>

            

            {/* Floating elements around laptop - hidden on mobile */}
            <div className="hidden sm:block absolute -top-4 -right-4 sm:-top-6 sm:-right-6 w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 animate-float-slow">
              {/* Glow effect for analytics card */}
              <div className="absolute inset-0 bg-[#1E3A8A]/30 rounded-2xl sm:rounded-3xl blur-xl"></div>
              <div className="relative bg-white dark:bg-[#0d1117] rounded-2xl sm:rounded-3xl shadow-xl border border-gray-200 dark:border-[#30363d] p-3 sm:p-4 lg:p-6 transition-colors duration-300">
                <div className="w-full h-full flex flex-col justify-between">
                  <div className="flex items-center justify-between">
                    <div className="w-1 h-4 sm:h-6 bg-[#10B981] rounded-full"></div>
                    <div className="w-1 h-3 sm:h-4 bg-[#1E3A8A] rounded-full"></div>
                    <div className="w-1 h-5 sm:h-8 bg-[#10B981] rounded-full"></div>
                    <div className="w-1 h-2 sm:h-3 bg-[#EF4444] rounded-full"></div>
                  </div>
                  <div className="text-xs text-gray-500 dark:text-[#7d8590] text-center transition-colors duration-300">Analytics</div>
                </div>
              </div>
            </div>

            <div className="hidden sm:block absolute -bottom-4 -left-4 sm:-bottom-6 sm:-left-6 w-12 h-12 sm:w-16 sm:h-16 lg:w-20 lg:h-20 animate-float-medium">
              {/* Glow effect for shield */}
              <div className="absolute inset-0 bg-[#1E3A8A]/30 rounded-full blur-xl"></div>
              <div className="relative bg-white dark:bg-[#0d1117] rounded-full shadow-xl border border-gray-200 dark:border-[#30363d] flex items-center justify-center w-full h-full transition-colors duration-300">
                <Shield className="w-5 h-5 sm:w-6 sm:h-6 lg:w-8 lg:h-8 text-[#1E3A8A]" />
              </div>
            </div>
          </div>


                    </div>
                </motion.div>

                {/* Soft Gradient at Bottom */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1 }}
                    className="absolute bottom-0 left-0 right-0 h-32 pointer-events-none"
                >
                    <div className="w-full h-full bg-gradient-to-t from-black via-black/50 to-transparent"></div>
                </motion.div>
            </section>

            {/* Our Services Section */}
            <section className="py-16 bg-gradient-to-b from-slate-950 to-slate-900">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-12"
                    >
                        <h2 className="text-3xl font-bold text-white mb-4">Comprehensive Technology Solutions</h2>
                        <p className="text-gray-400">From device repairs to IT infrastructure, we provide end-to-end technology services</p>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {[
                            {
                                title: 'Device Repair',
                                description: 'Expert repair services for smartphones, laptops, and tablets',
                                icon: <IconDeviceMobile className="w-8 h-8" />,
                                stats: '5000+ Repairs',
                                link: '/services/device-repair'
                            },
                            {
                                title: 'IT Solutions',
                                description: 'Complete IT infrastructure and support for businesses',
                                icon: <IconServer className="w-8 h-8" />,
                                stats: '200+ Clients',
                                link: '/services/it-solutions'
                            },
                            {
                                title: 'Software Development',
                                description: 'Web, mobile & desktop applications',
                                icon: <Code className="w-8 h-8" />,
                                stats: '300+ Projects',
                                link: '/services/software-development'
                            },
                            {
                                title: 'Tech Support',
                                description: '24/7 technical support and professional IT services',
                                icon: <Headphones className="w-8 h-8" />,
                                stats: '24/7 Available',
                                link: '/services/tech-support'
                            }
                        ].map((service, index) => (
                            <Link key={index} to={service.link} className="block">
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1 }}
                                    whileHover={{ scale: 1.05, y: -5 }}
                                    className="flex flex-col p-6 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 hover:bg-white/10 hover:border-[#e5500e]/30 transition-all duration-300 group cursor-pointer h-full"
                                >
                                    <div className="text-white/60 group-hover:text-[#e5500e] transition-colors mb-4">
                                        {service.icon}
                                    </div>
                                    <h3 className="text-xl font-bold text-white mb-2 group-hover:text-[#e5500e] transition-colors">{service.title}</h3>
                                    <p className="text-sm text-gray-400 mb-4 flex-grow">{service.description}</p>
                                    <div className="text-xs text-[#e5500e] font-medium">{service.stats}</div>
                                </motion.div>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>


            {/* Add the modal */}
            <ContactModal isOpen={isContactModalOpen} onClose={() => setIsContactModalOpen(false)} />
        </>
    );
}
