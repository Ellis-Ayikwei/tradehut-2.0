'use client';

import { faFacebookF, faGithub, faInstagram, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { TextPlugin } from 'gsap/TextPlugin';
import { useRef } from 'react';
import './jh.css';

const navigation = [
    { name: 'Product', href: '#' },
    { name: 'Features', href: '#' },
    { name: 'Marketplace', href: '#' },
    { name: 'Company', href: '#' },
];

export default function Hero() {
    const boxRef = useRef<HTMLDivElement | null>(null);
    const nameRef = useRef<HTMLParagraphElement | null>(null);
    const bgRef = useRef<HTMLDivElement | null>(null);

    gsap.registerPlugin(TextPlugin);
    gsap.registerPlugin(ScrollTrigger);

    useGSAP(() => {
        gsap.to(nameRef.current, {
            text: 'Ellis Armah Ayikwei',
            duration: 5,
        });

        gsap.to(boxRef.current, {
            rotation: 360,
            duration: 10,
            ease: 'power2.inOut',
            repeat: -1,
            yoyo: true,
            scrollTrigger: {
                trigger: '.hero',
                scrub: true,
            },
        });

        gsap.to(bgRef.current, {
            backgroundPosition: '100% 100%',
            duration: 10,
            ease: 'power2.inOut',
            repeat: -1,
            yoyo: true,
            scrollTrigger: {
                trigger: '.box',
                scrub: true,
            },
        });

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
    });

    const socialMedia = [
        { icon: faFacebookF, href: 'https://web.facebook.com/ellis.hero/' },
        { icon: faGithub, href: 'https://github.com/Ellis-Ayikwei' },
        { icon: faInstagram, href: 'https://www.instagram.com/ellis_rockefeller/' },
        { icon: faLinkedin, href: 'https://www.linkedin.com/in/ellis-armah-ayikwei-4a817b192/' },
        { icon: faTwitter, href: 'https://x.com/home' },
    ];

    return (
        <div className="hero w-full flex flex-col items-center justify-center h-auto mt-20">
            {/* Hero Content */}
            <div className="text-center text-white">
                {/* Name Section */}
                <div className="mb-6">
                    <p className="text-4xl lg:text-5xl font-bold">Hi,</p>
                    <p className="text-3xl lg:text-4xl font-semibold">My Name Is</p>
                    <p ref={nameRef} className="text-5xl lg:text-6xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-orange-400 to-yellow-500 animate-pulse">
                        Your Name
                    </p>
                </div>

                {/* What I Do Section */}
                <div className="mt-4">
                    <p className="text-2xl lg:text-3xl font-semibold">I am a</p>
                    <p className="text-3xl lg:text-4xl font-bold">Software Engineer</p>
                    <p className="text-lg lg:text-xl font-medium text-gray-300">and a Professional IT Support</p>
                </div>

                {/* Call to Action */}
                <div className="mt-8 flex gap-4 justify-center">
                    <a href="/contactme" className="px-5 py-3 bg-gradient-to-r from-orange-400 to-yellow-500 text-white rounded-lg hover:scale-105 transition duration-300 shadow-lg">
                        Let’s Work Together
                    </a>
                    <a href="#" className="px-5 py-3 bg-gradient-to-r from-orange-400 to-yellow-500 text-white rounded-lg hover:scale-105 transition duration-300 shadow-lg">
                        View My Resume
                    </a>
                </div>
            </div>
            {/* Social Media Icons */}
            <div className="flex gap-4 mt-8 justify-center">
                {socialMedia.map(({ icon, href }, idx) => (
                    <a
                        key={idx}
                        href={href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-12 h-12 bg-white text-[#dc711a] rounded-full flex items-center justify-center hover:scale-125 hover:shadow-xl transition-all duration-300"
                    >
                        <FontAwesomeIcon icon={icon} />
                    </a>
                ))}
            </div>

            {/* Skills Footer */}
            {/* <div className="flex flex-wrap justify-center gap-3 mt-8">
                    {[
                        'HTML/CSS/JavaScript',
                        'Python/Flask/Django',
                        'Typescript',
                        'Flutter',
                        'PHP',
                        'Node.js',
                        'React.js',
                        'Adobe Photoshop',
                        'Adobe XD',
                        'MongoDB',
                        'Mysql',
                        'AWS',
                        'Docker',
                        'Firebase',
                        'Git',
                        'Linux',
                        'Kubernetes',
                    ].map((badgeText, idx) => (
                        <span
                            key={idx}
                            className="px-4 py-1 rounded-full ring-2 ring-[#dc711a9f] border-2 border-[#dc711a] bg-white text-[#000000] text-sm font-semibold hover:bg-[#dc711a] hover:text-white transition duration-300"
                        >
                            {badgeText}
                        </span>
                    ))}
                </div> */}
        </div>
    );
}
