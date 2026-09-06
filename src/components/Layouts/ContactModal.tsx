import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Phone, MessageCircle, Clock, MapPin, Send, CheckCircle } from 'lucide-react';
import { sendTelegramMessage } from '../../utils/telegram';

interface ContactModalProps {
    isOpen: boolean;
    onClose: () => void;
}

interface ContactForm {
    name: string;
    email: string;
    subject: string;
    message: string;
}

const initialFormState: ContactForm = {
    name: '',
    email: '',
    subject: '',
    message: '',
};

const contactInfo = {
    phone: '+233 24 813 8722',
    whatsapp: '+233 24 813 8722',
    location: 'Accra Mall, Spintex Road, Accra, Ghana',
    workingHours: 'Mon - Sat: 9:00 AM - 6:00 PM',
};

const inputClasses =
    'w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-brand transition-colors';
const labelClasses = 'block text-sm font-medium text-gray-400 mb-1.5';

const ContactModal: React.FC<ContactModalProps> = ({ isOpen, onClose }) => {
    const [formData, setFormData] = useState<ContactForm>(initialFormState);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        try {
            const message =
                `📧 New Contact Form Submission\n\n` +
                `👤 Name: ${formData.name}\n` +
                `📧 Email: ${formData.email}\n` +
                `📌 Subject: ${formData.subject}\n` +
                `💬 Message:\n${formData.message}`;

            const success = await sendTelegramMessage(message);

            if (success) {
                setSubmitStatus('success');
                setFormData(initialFormState);
                setTimeout(() => {
                    setSubmitStatus('idle');
                    onClose();
                }, 2000);
            } else {
                setSubmitStatus('error');
            }
        } catch (error) {
            setSubmitStatus('error');
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onClick={onClose}
                    className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm overflow-y-auto px-4 py-6 sm:py-10"
                >
                    <motion.div
                        initial={{ scale: 0.95, opacity: 0, y: 10 }}
                        animate={{ scale: 1, opacity: 1, y: 0 }}
                        exit={{ scale: 0.95, opacity: 0, y: 10 }}
                        onClick={(e: React.MouseEvent) => e.stopPropagation()}
                        className="relative w-full max-w-2xl mx-auto my-auto min-h-[200px] max-h-[90vh] flex flex-col bg-gradient-to-b from-slate-900 to-slate-950 rounded-3xl shadow-2xl border border-white/10 overflow-hidden"
                    >
                        {/* Header */}
                        <div className="relative bg-white/5 backdrop-blur-sm p-6 border-b border-white/10 sticky top-0 z-10">
                            <button
                                onClick={onClose}
                                className="absolute top-4 right-4 p-2 rounded-xl bg-white/10 hover:bg-white/20 transition-colors"
                                aria-label="Close"
                            >
                                <X className="w-5 h-5 text-white" />
                            </button>

                            <div className="flex items-center gap-4 pr-12">
                                <div className="w-14 h-14 flex-shrink-0 bg-brand rounded-2xl flex items-center justify-center text-white">
                                    <MessageCircle className="w-7 h-7" />
                                </div>
                                <div>
                                    <h2 className="text-xl sm:text-2xl font-bold text-white">Get in Touch</h2>
                                    <p className="text-gray-400 text-sm sm:text-base mt-0.5">We'd love to hear from you</p>
                                </div>
                            </div>
                        </div>

                        {/* Content */}
                        <div className="p-6 overflow-y-auto flex-grow space-y-6">
                            {/* Quick Contact Options */}
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                <a
                                    href={`https://wa.me/${contactInfo.whatsapp.replace(/\D/g, '')}`}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center p-4 bg-white/5 border border-white/10 rounded-xl hover:bg-white/10 hover:border-green-500/30 transition-all duration-300 group"
                                >
                                    <div className="w-12 h-12 flex-shrink-0 flex items-center justify-center bg-green-500/20 border border-green-500/30 rounded-xl text-green-400 group-hover:scale-105 transition-transform">
                                        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                                            <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
                                        </svg>
                                    </div>
                                    <div className="ml-4">
                                        <h3 className="text-sm font-semibold text-white">WhatsApp</h3>
                                        <p className="text-sm text-gray-400">Chat with us instantly</p>
                                    </div>
                                </a>

                                <a
                                    href={`tel:${contactInfo.phone}`}
                                    className="flex items-center p-4 bg-white/5 border border-white/10 rounded-xl hover:bg-white/10 hover:border-blue-500/30 transition-all duration-300 group"
                                >
                                    <div className="w-12 h-12 flex-shrink-0 flex items-center justify-center bg-blue-500/20 border border-blue-500/30 rounded-xl text-blue-400 group-hover:scale-105 transition-transform">
                                        <Phone className="w-6 h-6" />
                                    </div>
                                    <div className="ml-4">
                                        <h3 className="text-sm font-semibold text-white">Phone</h3>
                                        <p className="text-sm text-gray-400">Call us directly</p>
                                    </div>
                                </a>
                            </div>

                            {/* Contact Form */}
                            <div>
                                <h3 className="text-lg font-semibold text-white mb-4">Send us a Message</h3>
                                <form onSubmit={handleSubmit} className="space-y-4">
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                        <div>
                                            <label htmlFor="name" className={labelClasses}>
                                                Name
                                            </label>
                                            <input type="text" id="name" name="name" value={formData.name} onChange={handleInputChange} className={inputClasses} required />
                                        </div>
                                        <div>
                                            <label htmlFor="email" className={labelClasses}>
                                                Email
                                            </label>
                                            <input type="email" id="email" name="email" value={formData.email} onChange={handleInputChange} className={inputClasses} required />
                                        </div>
                                    </div>
                                    <div>
                                        <label htmlFor="subject" className={labelClasses}>
                                            Subject
                                        </label>
                                        <input type="text" id="subject" name="subject" value={formData.subject} onChange={handleInputChange} className={inputClasses} required />
                                    </div>
                                    <div>
                                        <label htmlFor="message" className={labelClasses}>
                                            Message
                                        </label>
                                        <textarea
                                            id="message"
                                            name="message"
                                            value={formData.message}
                                            onChange={handleInputChange}
                                            rows={4}
                                            className={`${inputClasses} resize-none`}
                                            required
                                        />
                                    </div>

                                    <div className="flex justify-end gap-3 pt-2">
                                        <button
                                            type="button"
                                            onClick={onClose}
                                            className="px-6 py-3 text-gray-400 hover:text-white transition-colors text-sm font-medium"
                                        >
                                            Cancel
                                        </button>
                                        <motion.button
                                            type="submit"
                                            disabled={isSubmitting}
                                            whileHover={{ scale: isSubmitting ? 1 : 1.03 }}
                                            whileTap={{ scale: isSubmitting ? 1 : 0.97 }}
                                            className="px-6 py-3 bg-brand text-white rounded-xl font-medium shadow-lg hover:bg-brand-hover transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2"
                                        >
                                            {isSubmitting ? (
                                                <span className="flex items-center gap-2">
                                                    <svg className="animate-spin h-4 w-4" fill="none" viewBox="0 0 24 24">
                                                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                                                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                                                    </svg>
                                                    Sending...
                                                </span>
                                            ) : submitStatus === 'success' ? (
                                                <span className="flex items-center gap-2">
                                                    <CheckCircle className="w-4 h-4" />
                                                    Message Sent!
                                                </span>
                                            ) : submitStatus === 'error' ? (
                                                'Error - Try Again'
                                            ) : (
                                                <>
                                                    <span>Send Message</span>
                                                    <Send className="w-4 h-4" />
                                                </>
                                            )}
                                        </motion.button>
                                    </div>
                                </form>
                            </div>

                            {/* Additional Info */}
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-6 border-t border-white/10">
                                <div className="p-4 bg-white/5 border border-white/10 rounded-xl">
                                    <div className="flex items-center gap-4">
                                        <div className="w-11 h-11 flex-shrink-0 flex items-center justify-center bg-white/10 rounded-xl text-gray-300">
                                            <Clock className="w-5 h-5" />
                                        </div>
                                        <div>
                                            <h3 className="text-sm font-semibold text-white">Working Hours</h3>
                                            <p className="text-sm text-gray-400">{contactInfo.workingHours}</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="p-4 bg-white/5 border border-white/10 rounded-xl">
                                    <div className="flex items-center gap-4">
                                        <div className="w-11 h-11 flex-shrink-0 flex items-center justify-center bg-white/10 rounded-xl text-gray-300">
                                            <MapPin className="w-5 h-5" />
                                        </div>
                                        <div>
                                            <h3 className="text-sm font-semibold text-white">Location</h3>
                                            <p className="text-sm text-gray-400">{contactInfo.location}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default ContactModal;
