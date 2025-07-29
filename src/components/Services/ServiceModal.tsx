import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
    X, 
    Calendar, 
    Clock, 
    MapPin, 
    Phone, 
    Mail, 
    User,
    CheckCircle,
    ArrowRight,
    Star,
    Shield,
    Zap,
    Award
} from 'lucide-react';
import {
    IconDeviceMobile,
    IconCurrencyDollar,
    IconClockHour4,
    IconShieldCheck
} from '@tabler/icons-react';

interface ServiceModalProps {
    isOpen: boolean;
    onClose: () => void;
    service: {
        title: string;
        description: string;
        icon: React.ReactNode;
        features: string[];
        pricing: {
            starting: string;
            factors: string[];
        };
        duration: string;
        warranty: string;
        process: string[];
        faqs: {
            question: string;
            answer: string;
        }[];
    };
}

const ServiceModal: React.FC<ServiceModalProps> = ({ isOpen, onClose, service }) => {
    const [activeTab, setActiveTab] = useState('overview');
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        deviceType: '',
        deviceBrand: '',
        deviceModel: '',
        issueDescription: '',
        preferredDate: '',
        preferredTime: ''
    });

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Handle form submission
        console.log('Form submitted:', formData);
        // Show success message
        alert('Your service request has been submitted! We\'ll contact you shortly.');
        onClose();
    };

    const tabs = [
        { id: 'overview', label: 'Overview', icon: <IconDeviceMobile className="w-4 h-4" /> },
        { id: 'pricing', label: 'Pricing', icon: <IconCurrencyDollar className="w-4 h-4" /> },
        { id: 'process', label: 'Process', icon: <IconClockHour4 className="w-4 h-4" /> },
        { id: 'book', label: 'Book Now', icon: <Calendar className="w-4 h-4" /> }
    ];

    return (
        <AnimatePresence>
            {isOpen && (
                <>
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50"
                        onClick={onClose}
                    />

                    {/* Modal */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.9, y: 20 }}
                        className="fixed inset-x-4 top-[5%] bottom-[5%] md:inset-x-auto md:left-1/2 md:-translate-x-1/2 md:w-[90%] md:max-w-4xl bg-gradient-to-b from-slate-900 to-slate-950 rounded-3xl shadow-2xl z-50 overflow-hidden border border-white/10"
                    >
                        {/* Header */}
                        <div className="relative bg-gradient-to-r from-blue-600/20 to-purple-600/20 backdrop-blur-sm p-6 border-b border-white/10">
                            <button
                                onClick={onClose}
                                className="absolute top-4 right-4 p-2 rounded-xl bg-white/10 hover:bg-white/20 transition-colors"
                            >
                                <X className="w-6 h-6 text-white" />
                            </button>
                            
                            <div className="flex items-center gap-4">
                                <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl flex items-center justify-center text-white">
                                    {service.icon}
                                </div>
                                <div>
                                    <h2 className="text-2xl font-bold text-white">{service.title}</h2>
                                    <p className="text-gray-400 mt-1">{service.description}</p>
                                </div>
                            </div>

                            {/* Tabs */}
                            <div className="flex gap-2 mt-6 overflow-x-auto">
                                {tabs.map((tab) => (
                                    <button
                                        key={tab.id}
                                        onClick={() => setActiveTab(tab.id)}
                                        className={`flex items-center gap-2 px-4 py-2 rounded-xl font-medium transition-all whitespace-nowrap ${
                                            activeTab === tab.id
                                                ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white'
                                                : 'bg-white/5 text-gray-400 hover:bg-white/10 hover:text-white'
                                        }`}
                                    >
                                        {tab.icon}
                                        <span>{tab.label}</span>
                                    </button>
                                ))}
                            </div>
                        </div>

                        {/* Content */}
                        <div className="p-6 overflow-y-auto max-h-[calc(100%-200px)]">
                            {/* Overview Tab */}
                            {activeTab === 'overview' && (
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    className="space-y-6"
                                >
                                    {/* Features */}
                                    <div>
                                        <h3 className="text-xl font-semibold text-white mb-4">Key Features</h3>
                                        <div className="grid md:grid-cols-2 gap-3">
                                            {service.features.map((feature, index) => (
                                                <div key={index} className="flex items-start gap-3 p-4 bg-white/5 rounded-xl">
                                                    <CheckCircle className="w-5 h-5 text-green-400 mt-0.5" />
                                                    <span className="text-gray-300">{feature}</span>
                                                </div>
                                            ))}
                                        </div>
                                    </div>

                                    {/* Service Info Cards */}
                                    <div className="grid md:grid-cols-3 gap-4">
                                        <div className="bg-gradient-to-br from-blue-600/10 to-purple-600/10 p-4 rounded-xl border border-white/10">
                                            <Clock className="w-8 h-8 text-blue-400 mb-2" />
                                            <h4 className="text-white font-medium mb-1">Duration</h4>
                                            <p className="text-gray-400 text-sm">{service.duration}</p>
                                        </div>
                                        <div className="bg-gradient-to-br from-green-600/10 to-emerald-600/10 p-4 rounded-xl border border-white/10">
                                            <Shield className="w-8 h-8 text-green-400 mb-2" />
                                            <h4 className="text-white font-medium mb-1">Warranty</h4>
                                            <p className="text-gray-400 text-sm">{service.warranty}</p>
                                        </div>
                                        <div className="bg-gradient-to-br from-purple-600/10 to-pink-600/10 p-4 rounded-xl border border-white/10">
                                            <Award className="w-8 h-8 text-purple-400 mb-2" />
                                            <h4 className="text-white font-medium mb-1">Quality</h4>
                                            <p className="text-gray-400 text-sm">100% Guaranteed</p>
                                        </div>
                                    </div>

                                    {/* Customer Reviews */}
                                    <div>
                                        <h3 className="text-xl font-semibold text-white mb-4">Customer Reviews</h3>
                                        <div className="flex items-center gap-4 mb-4">
                                            <div className="flex items-center gap-1">
                                                {[...Array(5)].map((_, i) => (
                                                    <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                                                ))}
                                            </div>
                                            <span className="text-white font-medium">4.9/5</span>
                                            <span className="text-gray-400">(324 reviews)</span>
                                        </div>
                                    </div>
                                </motion.div>
                            )}

                            {/* Pricing Tab */}
                            {activeTab === 'pricing' && (
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    className="space-y-6"
                                >
                                    <div className="bg-gradient-to-br from-blue-600/10 to-purple-600/10 p-6 rounded-2xl border border-white/10">
                                        <h3 className="text-2xl font-bold text-white mb-2">
                                            Starting from {service.pricing.starting}
                                        </h3>
                                        <p className="text-gray-400 mb-4">Final price depends on:</p>
                                        <div className="space-y-2">
                                            {service.pricing.factors.map((factor, index) => (
                                                <div key={index} className="flex items-center gap-2 text-gray-300">
                                                    <CheckCircle className="w-4 h-4 text-green-400" />
                                                    <span>{factor}</span>
                                                </div>
                                            ))}
                                        </div>
                                    </div>

                                    <div className="bg-white/5 p-4 rounded-xl">
                                        <p className="text-gray-300 text-sm">
                                            <strong>Note:</strong> We provide free diagnostics and exact pricing before starting any work. 
                                            No hidden charges, 100% transparency guaranteed.
                                        </p>
                                    </div>
                                </motion.div>
                            )}

                            {/* Process Tab */}
                            {activeTab === 'process' && (
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    className="space-y-6"
                                >
                                    <h3 className="text-xl font-semibold text-white mb-4">Our Process</h3>
                                    <div className="space-y-4">
                                        {service.process.map((step, index) => (
                                            <div key={index} className="flex gap-4">
                                                <div className="flex-shrink-0 w-10 h-10 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center text-white font-bold">
                                                    {index + 1}
                                                </div>
                                                <div className="flex-1">
                                                    <p className="text-gray-300">{step}</p>
                                                </div>
                                            </div>
                                        ))}
                                    </div>

                                    {/* FAQs */}
                                    <div className="mt-8">
                                        <h3 className="text-xl font-semibold text-white mb-4">Frequently Asked Questions</h3>
                                        <div className="space-y-3">
                                            {service.faqs.map((faq, index) => (
                                                <div key={index} className="bg-white/5 p-4 rounded-xl">
                                                    <h4 className="text-white font-medium mb-2">{faq.question}</h4>
                                                    <p className="text-gray-400 text-sm">{faq.answer}</p>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </motion.div>
                            )}

                            {/* Book Now Tab */}
                            {activeTab === 'book' && (
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                >
                                    <form onSubmit={handleSubmit} className="space-y-6">
                                        {/* Personal Information */}
                                        <div>
                                            <h3 className="text-xl font-semibold text-white mb-4">Personal Information</h3>
                                            <div className="grid md:grid-cols-2 gap-4">
                                                <div>
                                                    <label className="block text-gray-400 mb-2">Full Name</label>
                                                    <input
                                                        type="text"
                                                        name="name"
                                                        required
                                                        value={formData.name}
                                                        onChange={handleInputChange}
                                                        className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-blue-500"
                                                        placeholder="John Doe"
                                                    />
                                                </div>
                                                <div>
                                                    <label className="block text-gray-400 mb-2">Email</label>
                                                    <input
                                                        type="email"
                                                        name="email"
                                                        required
                                                        value={formData.email}
                                                        onChange={handleInputChange}
                                                        className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-blue-500"
                                                        placeholder="john@example.com"
                                                    />
                                                </div>
                                                <div>
                                                    <label className="block text-gray-400 mb-2">Phone</label>
                                                    <input
                                                        type="tel"
                                                        name="phone"
                                                        required
                                                        value={formData.phone}
                                                        onChange={handleInputChange}
                                                        className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-blue-500"
                                                        placeholder="+1 234 567 890"
                                                    />
                                                </div>
                                            </div>
                                        </div>

                                        {/* Device Information */}
                                        <div>
                                            <h3 className="text-xl font-semibold text-white mb-4">Device Information</h3>
                                            <div className="grid md:grid-cols-2 gap-4">
                                                <div>
                                                    <label className="block text-gray-400 mb-2">Device Type</label>
                                                    <select
                                                        name="deviceType"
                                                        required
                                                        value={formData.deviceType}
                                                        onChange={handleInputChange}
                                                        className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white focus:outline-none focus:border-blue-500"
                                                    >
                                                        <option value="">Select device type</option>
                                                        <option value="smartphone">Smartphone</option>
                                                        <option value="laptop">Laptop</option>
                                                        <option value="tablet">Tablet</option>
                                                        <option value="desktop">Desktop</option>
                                                        <option value="other">Other</option>
                                                    </select>
                                                </div>
                                                <div>
                                                    <label className="block text-gray-400 mb-2">Brand</label>
                                                    <input
                                                        type="text"
                                                        name="deviceBrand"
                                                        required
                                                        value={formData.deviceBrand}
                                                        onChange={handleInputChange}
                                                        className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-blue-500"
                                                        placeholder="Apple, Samsung, etc."
                                                    />
                                                </div>
                                                <div className="md:col-span-2">
                                                    <label className="block text-gray-400 mb-2">Model</label>
                                                    <input
                                                        type="text"
                                                        name="deviceModel"
                                                        required
                                                        value={formData.deviceModel}
                                                        onChange={handleInputChange}
                                                        className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-blue-500"
                                                        placeholder="iPhone 15 Pro, Galaxy S24, etc."
                                                    />
                                                </div>
                                            </div>
                                        </div>

                                        {/* Issue Description */}
                                        <div>
                                            <label className="block text-gray-400 mb-2">Issue Description</label>
                                            <textarea
                                                name="issueDescription"
                                                required
                                                value={formData.issueDescription}
                                                onChange={handleInputChange}
                                                rows={4}
                                                className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-blue-500"
                                                placeholder="Please describe the issue you're experiencing..."
                                            />
                                        </div>

                                        {/* Preferred Schedule */}
                                        <div>
                                            <h3 className="text-xl font-semibold text-white mb-4">Preferred Schedule</h3>
                                            <div className="grid md:grid-cols-2 gap-4">
                                                <div>
                                                    <label className="block text-gray-400 mb-2">Preferred Date</label>
                                                    <input
                                                        type="date"
                                                        name="preferredDate"
                                                        required
                                                        value={formData.preferredDate}
                                                        onChange={handleInputChange}
                                                        className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white focus:outline-none focus:border-blue-500"
                                                    />
                                                </div>
                                                <div>
                                                    <label className="block text-gray-400 mb-2">Preferred Time</label>
                                                    <select
                                                        name="preferredTime"
                                                        required
                                                        value={formData.preferredTime}
                                                        onChange={handleInputChange}
                                                        className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white focus:outline-none focus:border-blue-500"
                                                    >
                                                        <option value="">Select time</option>
                                                        <option value="morning">Morning (9AM - 12PM)</option>
                                                        <option value="afternoon">Afternoon (12PM - 5PM)</option>
                                                        <option value="evening">Evening (5PM - 8PM)</option>
                                                    </select>
                                                </div>
                                            </div>
                                        </div>

                                        {/* Submit Button */}
                                        <div className="flex justify-end gap-4">
                                            <button
                                                type="button"
                                                onClick={onClose}
                                                className="px-6 py-3 bg-white/5 text-white rounded-xl font-medium hover:bg-white/10 transition-colors"
                                            >
                                                Cancel
                                            </button>
                                            <button
                                                type="submit"
                                                className="px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl font-medium shadow-lg hover:shadow-xl transition-all duration-300 flex items-center gap-2"
                                            >
                                                <span>Book Service</span>
                                                <ArrowRight className="w-4 h-4" />
                                            </button>
                                        </div>
                                    </form>
                                </motion.div>
                            )}
                        </div>
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    );
};

export default ServiceModal;