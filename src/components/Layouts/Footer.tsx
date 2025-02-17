import React, { useState } from 'react';
import ContactModal from './ContactModal';

interface FooterLink {
    text: string;
    href?: string;
    action?: () => void;
}

interface FooterSection {
    title: string;
    links: FooterLink[];
}

const footerSections: FooterSection[] = [
    {
        title: 'Company',
        links: [
            { text: 'About Us', href: '#mystory' },
            { text: 'Services', href: '#services' },
            { text: 'Products', href: '#products' },
            { text: 'Contact', action: () => {} },
        ],
    },
    {
        title: 'Services',
        links: [
            { text: 'Phone Repairs', href: '#repairs' },
            { text: 'Laptop Repairs', href: '#repairs' },
            { text: 'IT Support', href: '#support' },
            { text: 'Web Development', href: '#webdev' },
        ],
    },
    {
        title: 'Support',
        links: [
            { text: 'Help Center', href: '#help' },
            { text: 'Terms of Service', href: '#terms' },
            { text: 'Privacy Policy', href: '#privacy' },
            { text: 'FAQ', href: '#faq' },
        ],
    },
];

const socialIcons = {
    facebook: <path fillRule="evenodd" d="M6.135 3H8V0H6.135a4.147 4.147 0 0 0-4.142 4.142V6H0v3h2v9.938h3V9h2.021l.592-3H5V3.591A.6.6 0 0 1 5.592 3h.543Z" clipRule="evenodd" />,
    whatsapp: (
        <path d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z" />
    ),
    instagram: (
        <path
            fillRule="evenodd"
            d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z"
            clipRule="evenodd"
        />
    ),
};

const Footer: React.FC = () => {
    const [isContactModalOpen, setIsContactModalOpen] = useState(false);

    const sectionsWithActions = footerSections.map((section) => ({
        ...section,
        links: section.links.map((link) => ({
            ...link,
            action: link.text === 'Contact' ? () => setIsContactModalOpen(true) : undefined,
        })),
    }));

    return (
        <footer className=" dark:bg-gray-900">
            <div className="mx-auto w-full max-w-screen-xl px-4 py-12">
                <div className="grid grid-cols-2 gap-8 lg:grid-cols-4">
                    {/* Company Info */}
                    <div className="col-span-2 lg:col-span-1">
                        <div className="mb-0 md:mb-10 ">
                            <img src="/assets/images/tradehut3.png" alt="TradeHut Logo" className="h-8 w-24 md:h-20 md:w-auto object-contain" />
                        </div>
                        <h2 className="mb-6 text-lg font-semibold text-[#dc711a] flex items-center gap-2">{/* TradeHut Ghana */}</h2>
                        <p className="text-gray-600 dark:text-gray-400 mb-4">Your trusted destination for electronic device repairs, sales, and IT solutions.</p>
                        <div className="space-y-2 text-gray-600 dark:text-gray-400">
                            <p className="flex items-start">
                                <span className="mr-2">📍</span>
                                Trade Fair, Giffard Road, Accra, Ghana
                            </p>
                            <p className="flex items-start">
                                <span className="mr-2">📞</span>
                                +233 24 123 4567
                            </p>
                            <p className="flex items-start">
                                <span className="mr-2">✉️</span>
                                tradehut1@gmail.com
                            </p>
                        </div>
                    </div>

                    {/* Navigation Sections */}
                    {sectionsWithActions.map((section, index) => (
                        <div key={index}>
                            <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">{section.title}</h2>
                            <ul className="text-gray-600 dark:text-gray-400">
                                {section.links.map((link, linkIndex) => (
                                    <li key={linkIndex} className="mb-4">
                                        {link.action ? (
                                            <button onClick={link.action} className="hover:text-[#dc711a] cursor-pointer transition-colors">
                                                {link.text}
                                            </button>
                                        ) : (
                                            <a href={link.href} className="hover:text-[#dc711a] transition-colors">
                                                {link.text}
                                            </a>
                                        )}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>

                {/* Bottom Section */}
                <div className="mt-12 pt-8 border-t border-gray-200">
                    <div className="flex flex-col md:flex-row justify-between items-center">
                        <p className="text-gray-500 text-sm mb-4 md:mb-0">© {new Date().getFullYear()} TradeHut Ghana. All rights reserved.</p>

                        {/* Social Links */}
                        <div className="flex space-x-6">
                            <a href="https://facebook.com/tradehutghana" className="text-gray-500 hover:text-[#dc711a]">
                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                    {socialIcons.facebook}
                                </svg>
                            </a>
                            <a href="https://wa.me/233241234567" className="text-gray-500 hover:text-[#dc711a]">
                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 16 16" aria-hidden="true">
                                    {socialIcons.whatsapp}
                                </svg>
                            </a>
                            <a href="https://instagram.com/tradehutghana" className="text-gray-500 hover:text-[#dc711a]">
                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 16 16" aria-hidden="true">
                                    {socialIcons.instagram}
                                </svg>
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            {/* Add the modal */}
            <ContactModal isOpen={isContactModalOpen} onClose={() => setIsContactModalOpen(false)} />
        </footer>
    );
};

export default Footer;
