import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowLeft, Mail, Phone, MapPin, Send, Code } from 'lucide-react';
import { sendTelegramMessage } from '../utils/telegram';

const Contact: React.FC = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });

    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        try {
            const message = `📧 New Contact Form Submission\n\n` +
                `👤 Name: ${formData.name}\n` +
                `📧 Email: ${formData.email}\n` +
                `📌 Subject: ${formData.subject}\n` +
                `💬 Message:\n${formData.message}`;

            const success = await sendTelegramMessage(message);
            
            if (success) {
                setSubmitStatus('success');
                setFormData({
                    name: '',
                    email: '',
                    subject: '',
                    message: ''
                });
                setTimeout(() => setSubmitStatus('idle'), 3000);
            } else {
                setSubmitStatus('error');
            }
        } catch (error) {
            setSubmitStatus('error');
        } finally {
            setIsSubmitting(false);
        }
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    return (
        <div className="min-h-screen bg-black">
            <section className="pt-32 pb-24 bg-gradient-to-b from-slate-900 via-slate-950 to-slate-900 relative overflow-hidden">
                <div className="absolute inset-0">
                    <div className="absolute top-1/4 right-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
                    <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>
                    <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff02_1px,transparent_1px),linear-gradient(to_bottom,#ffffff02_1px,transparent_1px)] bg-[size:4rem_4rem]"></div>
                </div>

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <Link
                        to="/"
                        className="inline-flex items-center gap-2 text-gray-400 hover:text-white transition-colors mb-6"
                    >
                        <ArrowLeft className="w-4 h-4" />
                        <span>Back to Home</span>
                    </Link>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-center mb-12"
                    >
                        <motion.div
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-full border border-blue-500/20 mb-4"
                        >
                            <Mail className="w-4 h-4 text-blue-400" />
                            <span className="text-sm text-blue-300 font-medium">Get in Touch</span>
                        </motion.div>
                        
                        <h1 className="text-4xl lg:text-6xl font-bold text-white mb-4">
                            Contact
                            <span className="block bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                                TradeHut
                            </span>
                        </h1>
                        
                        <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                            Have a question or need assistance? We're here to help!
                        </p>
                    </motion.div>

                    <div className="grid lg:grid-cols-2 gap-8">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            className="space-y-6"
                        >
                            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
                                <h3 className="text-2xl font-bold text-white mb-6">Contact Information</h3>
                                
                                <div className="space-y-4">
                                    <a href="tel:+1234567890" className="flex items-center gap-4 text-gray-300 hover:text-white transition-colors">
                                        <div className="w-12 h-12 bg-blue-500/20 rounded-xl flex items-center justify-center">
                                            <Phone className="w-6 h-6 text-blue-400" />
                                        </div>
                                        <div>
                                            <p className="text-sm text-gray-400">Phone</p>
                                            <p className="font-medium">+233 24 813 8722</p>
                                        </div>
                                    </a>
                                    
                                    <a href="mailto:info@tradehut.com" className="flex items-center gap-4 text-gray-300 hover:text-white transition-colors">
                                        <div className="w-12 h-12 bg-purple-500/20 rounded-xl flex items-center justify-center">
                                            <Mail className="w-6 h-6 text-purple-400" />
                                        </div>
                                        <div>
                                            <p className="text-sm text-gray-400">Email</p>
                                            <p className="font-medium">info@tradehut.com</p>
                                        </div>
                                    </a>
                                    
                                    <div className="flex items-start gap-4 text-gray-300">
                                        <div className="w-12 h-12 bg-green-500/20 rounded-xl flex items-center justify-center">
                                            <MapPin className="w-6 h-6 text-green-400" />
                                        </div>
                                        <div>
                                            <p className="text-sm text-gray-400">Address</p>
                                            <p className="font-medium">123 Tech Street<br />Silicon Valley, CA 94025</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10"
                        >
                            <h3 className="text-2xl font-bold text-white mb-6">Send us a Message</h3>
                            
                            <form onSubmit={handleSubmit} className="space-y-4">
                                <div>
                                    <input
                                        type="text"
                                        name="name"
                                        placeholder="Your Name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        required
                                        className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 transition-colors"
                                    />
                                </div>
                                
                                <div>
                                    <input
                                        type="email"
                                        name="email"
                                        placeholder="Your Email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        required
                                        className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 transition-colors"
                                    />
                                </div>
                                
                                <div>
                                    <input
                                        type="text"
                                        name="subject"
                                        placeholder="Subject"
                                        value={formData.subject}
                                        onChange={handleChange}
                                        required
                                        className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 transition-colors"
                                    />
                                </div>
                                
                                <div>
                                    <textarea
                                        name="message"
                                        placeholder="Your Message"
                                        value={formData.message}
                                        onChange={handleChange}
                                        required
                                        rows={5}
                                        className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 transition-colors resize-none"
                                    />
                                </div>
                                
                                <motion.button
                                    type="submit"
                                    disabled={isSubmitting}
                                    whileHover={{ scale: isSubmitting ? 1 : 1.05 }}
                                    whileTap={{ scale: isSubmitting ? 1 : 0.95 }}
                                    className="w-full px-6 py-4 bg-[#e5500e] text-white rounded-xl font-medium hover:bg-[#d44a0d] transition-all flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                                >
                                    {isSubmitting ? (
                                        <span className="flex items-center gap-2">
                                            <svg className="animate-spin h-5 w-5" fill="none" viewBox="0 0 24 24">
                                                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                                                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                                            </svg>
                                            Sending...
                                        </span>
                                    ) : submitStatus === 'success' ? (
                                        <span>Message Sent! ✓</span>
                                    ) : submitStatus === 'error' ? (
                                        <span>Error - Try Again</span>
                                    ) : (
                                        <>
                                            <span>Send Message</span>
                                            <Send className="w-4 h-4" />
                                        </>
                                    )}
                                </motion.button>
                            </form>
                        </motion.div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Contact;

