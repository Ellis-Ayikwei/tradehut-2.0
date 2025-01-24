'use client';

import { faFacebookF, faGithub, faInstagram, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { TextPlugin } from 'gsap/TextPlugin';
import { useRef, useState } from 'react';
import './jh.css';
import ContactModal from './ContactModal';
import IconMenu from '../Icon/IconMenu';
import IconShoppingBag from '../Icon/IconShoppingBag';

const brands = [
    { name: 'Brand 1', image: '/src/assets/images/campanies/brand1.png' },
    { name: 'Brand 2', image: '/src/assets/images/campanies/brand2.png' },
    { name: 'Brand 3', image: '/src/assets/images/campanies/brand3.png' },
    { name: 'Brand 4', image: '/src/assets/images/campanies/brand4.png' },
    { name: 'Brand 5', image: '/src/assets/images/campanies/brand5.png' },
    { name: 'Brand 6', image: '/src/assets/images/campanies/brand6.png' },
    { name: 'Brand 7', image: '/src/assets/images/campanies/brand7.png' },
    { name: 'Brand 8', image: '/src/assets/images/campanies/brand8.png' },
    { name: 'Brand 9', image: '/src/assets/images/campanies/brand9.png' },
    { name: 'Brand 10', image: '/src/assets/images/campanies/brand10.png' },
];

const socialLinks = [
    { icon: faFacebookF, href: 'https://web.facebook.com/ellis.hero/', label: 'Facebook' },
    { icon: faGithub, href: 'https://github.com/Ellis-Ayikwei', label: 'GitHub' },
    { icon: faInstagram, href: 'https://www.instagram.com/ellis_rockefeller/', label: 'Instagram' },
    { icon: faLinkedin, href: 'https://www.linkedin.com/in/ellis-armah-ayikwei-4a817b192/', label: 'LinkedIn' },
    { icon: faTwitter, href: 'https://x.com/home', label: 'Twitter' },
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
        <section className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#dc711a] to-[#B95D13FF] mx-10 my-10">
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
                    <div className="mb-10">
                        <img src="/assets/images/tradehut3.png" alt="TradeHut Logo" className="h-20 w-auto object-contain brightness-0 invert" />
                    </div>

                    {/* Alert Banner */}
                    <div className="flex items-center gap-2 px-4 py-2 mb-2 text-sm bg-white/10 backdrop-blur-sm rounded-full w-fit">
                        <span className="flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-2 w-2 rounded-full bg-white opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-white"></span>
                        </span>
                        <p className="text-white/90">
                            <span className="font-semibold text-white">New:</span> Check out our latest products and services
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
                    <div className="flex flex-wrap gap-4 mt-8">
                        <button
                            onClick={() => setIsContactModalOpen(true)}
                            className="btn btn-outline items-center px-8 py-2 text-lg font-semibold text-white bg-transparent backdrop-blur-sm rounded-full hover:bg-[#dc711a]/30 transition-all"
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
                        <a href="#store" className="inline-flex items-center px-8 py-0 text-lg font-semibold text-[#dc711a] bg-white rounded-full hover:bg-white/90 transition-all">
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
