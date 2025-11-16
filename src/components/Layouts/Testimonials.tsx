'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Star, Quote } from 'lucide-react';

const testimonials = [
    {
        id: 1,
        name: 'Sarah Johnson',
        role: 'CEO',
        company: 'TechStart Ghana',
        image: 'SJ',
        rating: 5,
        review: "TradeHut's software development service exceeded our expectations. They delivered a stunning application that perfectly captures our brand essence and has significantly boosted our online presence.",
        service: 'Software Development'
    },
    {
        id: 2,
        name: 'Kwame Mensah',
        role: 'Business Owner',
        company: 'Digital Solutions',
        image: 'KM',
        rating: 5,
        review: "The phone repair service was quick and professional. They fixed my iPhone's screen in just 2 hours! The quality is outstanding and the warranty gives me peace of mind.",
        service: 'Device Repair'
    },
    {
        id: 3,
        name: 'Abena Osei',
        role: 'IT Manager',
        company: 'Ghana Tech Corp',
        image: 'AO',
        rating: 5,
        review: "Their IT support team is exceptional. They've helped us maintain our systems efficiently and resolve issues quickly. 24/7 support means we never have to worry.",
        service: 'Tech Support'
    },
    {
        id: 4,
        name: 'Michael Asante',
        role: 'Operations Director',
        company: 'Enterprise Solutions',
        image: 'MA',
        rating: 5,
        review: "The IT infrastructure solutions they provided transformed our business operations. Their expertise in cloud migration and network security is unmatched.",
        service: 'IT Solutions'
    },
    {
        id: 5,
        name: 'Ama Darko',
        role: 'Entrepreneur',
        company: 'E-commerce Plus',
        image: 'AD',
        rating: 5,
        review: "Working with TradeHut on our e-commerce platform was a game-changer. They understood our vision and delivered beyond expectations. Highly recommended!",
        service: 'Software Development'
    },
    {
        id: 6,
        name: 'David Kofi',
        role: 'Freelancer',
        company: 'Independent',
        image: 'DK',
        rating: 5,
        review: "Fast, reliable, and affordable laptop repairs. They saved my work laptop and got me back up and running the same day. Professional service all around.",
        service: 'Device Repair'
    }
];

export default function Testimonials() {
    const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true });

    return (
        <section ref={ref} className="py-20 bg-gradient-to-b from-slate-900 to-black relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff02_1px,transparent_1px),linear-gradient(to_bottom,#ffffff02_1px,transparent_1px)] bg-[size:4rem_4rem]"></div>
            
            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">
                        What Our Clients
                        <span className="block bg-gradient-to-r from-white via-gray-300 to-white bg-clip-text text-transparent">
                            Say About Us
                        </span>
                    </h2>
                    <p className="text-lg text-gray-400 max-w-2xl mx-auto">
                        Trusted by businesses and individuals across Ghana for exceptional technology solutions
                    </p>
                </motion.div>

                {/* Testimonials Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {testimonials.map((testimonial, index) => (
                        <motion.div
                            key={testimonial.id}
                            initial={{ opacity: 0, y: 30 }}
                            animate={inView ? { opacity: 1, y: 0 } : {}}
                            transition={{ delay: index * 0.1, duration: 0.5 }}
                            whileHover={{ y: -5 }}
                            className="relative bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 p-6 hover:bg-white/10 hover:border-[#e5500e]/30 transition-all duration-300 group"
                        >
                            {/* Quote Icon */}
                            <div className="absolute top-4 right-4 opacity-20 group-hover:opacity-40 transition-opacity">
                                <Quote className="w-8 h-8 text-white" />
                            </div>

                            {/* Rating */}
                            <div className="flex items-center gap-1 mb-4">
                                {[...Array(testimonial.rating)].map((_, i) => (
                                    <Star key={i} className="w-4 h-4 fill-[#e5500e] text-[#e5500e]" />
                                ))}
                            </div>

                            {/* Review Text */}
                            <p className="text-gray-300 mb-6 leading-relaxed relative z-10">
                                "{testimonial.review}"
                            </p>

                            {/* Service Badge */}
                            <div className="inline-block px-3 py-1 bg-[#e5500e]/20 border border-[#e5500e]/30 rounded-full mb-4">
                                <span className="text-xs text-[#e5500e] font-medium">{testimonial.service}</span>
                            </div>

                            {/* Author Info */}
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#e5500e]/30 to-[#e5500e]/10 border border-[#e5500e]/30 flex items-center justify-center text-white font-bold text-sm">
                                    {testimonial.image}
                                </div>
                                <div>
                                    <div className="text-white font-semibold">{testimonial.name}</div>
                                    <div className="text-sm text-gray-400">
                                        {testimonial.role} • {testimonial.company}
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}

