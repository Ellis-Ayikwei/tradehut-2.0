'use client';

import React, { useRef, useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import ContactModal from './ContactModal';
import ModernNavbar from './ModernNavbar';

const trustedBrands = [
    { name: 'Apple', icon: 'fab fa-apple' },
    { name: 'Samsung', icon: 'fas fa-mobile-alt' },
    { name: 'HP', icon: 'fas fa-laptop' },
    { name: 'Dell', icon: 'fas fa-desktop' },
    { name: 'Lenovo', icon: 'fas fa-laptop-code' },
    { name: 'Microsoft', icon: 'fab fa-microsoft' },
];

const stats = [
    { number: '5000+', label: 'Devices Repaired', icon: 'fas fa-tools' },
    { number: '98%', label: 'Success Rate', icon: 'fas fa-check-circle' },
    { number: '24/7', label: 'Support Available', icon: 'fas fa-headset' },
    { number: '50+', label: 'Expert Technicians', icon: 'fas fa-users' },
];

const services = [
    {
        icon: 'fas fa-mobile-alt',
        title: 'Device Repair',
        description: 'Professional repair services for smartphones, tablets, and laptops',
        color: 'from-blue-500 to-cyan-500'
    },
    {
        icon: 'fas fa-shopping-cart',
        title: 'Device Sales',
        description: 'Premium quality devices and accessories at competitive prices',
        color: 'from-purple-500 to-pink-500'
    },
    {
        icon: 'fas fa-server',
        title: 'IT Solutions',
        description: 'Complete IT infrastructure and support services for businesses',
        color: 'from-green-500 to-emerald-500'
    },
    {
        icon: 'fas fa-code',
        title: 'Web Development',
        description: 'Custom web applications and digital solutions',
        color: 'from-orange-500 to-red-500'
    }
];

export default function Hero() {
    const boxRef = useRef<HTMLDivElement | null>(null);
    const nameRef = useRef<HTMLParagraphElement | null>(null);
    const bgRef = useRef<HTMLDivElement | null>(null);
    const [isContactModalOpen, setIsContactModalOpen] = useState(false);

    gsap.registerPlugin(TextPlugin, ScrollTrigger);

    useGSAP(() => {
        // Animation for name text
        gsap.to(nameRef.current, {
            text: 'Ellis Armah Ayikwei',
            duration: 5,
        });

        // Hero content fade in animation
        gsap.from('.hero-content', {
            y: 50,
            opacity: 0,
            duration: 1.5,
            ease: 'power2.out',
            stagger: 0.3,
            scrollTrigger: {
                trigger: '.hero-content',
                start: 'top 80%',
            },
        });

        // Brand logos animation
        gsap.from('.brand-logo', {
            scale: 0,
            opacity: 0,
            duration: 0.5,
            stagger: 0.1,
            ease: 'back.out(1.7)',
            scrollTrigger: {
                trigger: '.brands-section',
                start: 'top 80%',
            },
        });
    });

    return (
        <section className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#dc711a] to-[#B95D13FF] mx-2 my-0 md:mx-10 md:my-10">
            {/* Background Pattern */}
            <div className="absolute inset-0">
                <div className="absolute inset-0 bg-[url('/src/assets/images/abstract-timekeeper.svg')] opacity-10" />
                <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent" />

                {/* Animated Circles */}
                <div className="absolute top-0 left-0 w-96 h-96 bg-white/10 rounded-full -translate-x-1/2 -translate-y-1/2 blur-3xl animate-blob" />
                <div className="absolute top-1/2 right-0 w-96 h-96 bg-white/5 rounded-full translate-x-1/2 -translate-y-1/2 blur-3xl animate-blob animation-delay-2000" />
                <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-white/10 rounded-full -translate-y-1/2 blur-3xl animate-blob animation-delay-4000" />
            </div>

            {/* Main Hero Content */}
            <div className="relative grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
                <div className="mr-auto place-self-center lg:col-span-7 hero-content">
                    {/* Company Logo */}
                    <div className="mb-2 md:mb-10 ">
                        <img src="/assets/images/tradehut3.png" alt="TradeHut Logo" className="h-16 w-48 md:h-20 md:w-auto object-contain brightness-0 invert" />
                    </div>

                    {/* Alert Banner */}
                    <div className="flex items-center gap-2 px-4 py-2 mb-2 text-sm bg-white/10 backdrop-blur-sm rounded-full w-fit">
                        <span className="flex h-2 w-2 ">
                            <span className="animate-ping absolute inline-flex h-2 w-2 rounded-full bg-white opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-white"></span>
                        </span>
                        <p className="text-white/90 text-xs md:text-sm">
                            <span className="font-semibold text-white">New:</span> Check out our latest products
                        </p>
                    </div>

                    {/* Hero Title */}
                    <h1 className="max-w-2xl mb-4 text-4xl font-bold tracking-tight leading-none md:text-5xl xl:text-6xl text-white">
                        Welcome to <span className="text-white/90 font-extrabold">TradeHut</span>
                    </h1>

                    {/* Hero Description */}
                    <p className="max-w-2xl mb-6 text-white/80 lg:mb-8 md:text-lg lg:text-xl font-light">
                        Your trusted destination for reliable phone and laptop repairs, sales, professional IT support, and web development services. We deliver exceptional solutions tailored to your
                        needs.
                    </p>

                    {/* CTA Button */}
                    <div className="flex flex-nowrap md:flex-wrap gap-4 mt-8">
                        <button
                            onClick={() => setIsContactModalOpen(true)}
                            className="btn btn-outline items-center px-4 md:px-8 py-2 text-sm md:text-base font-semibold text-white bg-transparent backdrop-blur-sm rounded-full hover:bg-[#dc711a]/30 transition-all"
                        >
                            Contact Us
                            <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                                />
                            </svg>
                        </button>
                        <a
                            href="#store"
                            className="inline-flex items-center px-4 md:px-8 py-2 text-sm md:text-base font-semibold text-[#dc711a] bg-white rounded-full hover:bg-white/90 transition-all"
                        >
                            <IconShoppingBag className="mr-2" /> Store
                            {/* <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                            </svg> */}
                        </a>
                    </div>

                    {/* Social Links */}
                    <div className="flex gap-4 mt-8">
                        {socialLinks.map((social, index) => (
                            <a
                                key={index}
                                href={social.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-10 h-10 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
                                aria-label={social.label}
                            >
                                <FontAwesomeIcon icon={social.icon} className="w-5 h-5" />
                            </a>
                        ))}
                    </div>
                </div>

                {/* Hero Image */}
                <div className="hidden lg:mt-0 lg:col-span-5 lg:flex hero-content">
                    <img src="/assets/images/arts/phone.png" alt="TradeHut Services" className="w-full h-auto object-contain drop-shadow-2xl animate-float" />
                </div>
            </div>

            {/* Brands Section */}
            <div className="px-4 py-5 mx-auto max-w-screen-xl text-center brands-section">
                <h4 className="font-semibold text-xl mb-3 text-white">We Deal in Brands Like</h4>
                <div className="w-24 h-1 mx-auto bg-white/20 mb-8"></div>

                <div className="flex flex-wrap justify-center gap-6">
                    {brands.map((brand, index) => (
                        <div key={index} className="shadow-sm p-2 bg-white/10 backdrop-blur-sm rounded-lg hover:bg-white/20 transition-all duration-300 w-32 h-16 flex items-center justify-center">
                            <img
                                src={brand.image}
                                alt={`${brand.name} logo`}
                                title={`${brand.name} Logo`}
                                className="max-w-[80px] max-h-[80px] object-contain brightness-0 invert hover:brightness-100 hover:invert-0 transition-all duration-300"
                            />
                        </div>
                    ))}
                </div>
            </div>

            <ContactModal isOpen={isContactModalOpen} onClose={() => setIsContactModalOpen(false)} />
        </section>
    );
}
