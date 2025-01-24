import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const ScrollToTop = () => {
    const [isVisible, setIsVisible] = useState(false);

    // Show button when page is scrolled up to given distance
    const toggleVisibility = () => {
        if (window.pageYOffset > 300) {
            setIsVisible(true);
        } else {
            setIsVisible(false);
        }
    };

    // Set the scroll event listener
    useEffect(() => {
        window.addEventListener('scroll', toggleVisibility);
        return () => {
            window.removeEventListener('scroll', toggleVisibility);
        };
    }, []);

    // Scroll to top handler
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

    return (
        <AnimatePresence>
            {isVisible && (
                <motion.button
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.5 }}
                    onClick={scrollToTop}
                    className="fixed bottom-8 right-8 z-50 p-4 bg-[#dc711a] hover:bg-[#b95d13] text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 group"
                    aria-label="Scroll to top"
                    whileHover={{ y: -3 }}
                    whileTap={{ scale: 0.95 }}
                >
                    <i className="fas fa-arrow-up text-xl group-hover:-translate-y-1 transition-transform"></i>
                </motion.button>
            )}
        </AnimatePresence>
    );
};

export default ScrollToTop;
