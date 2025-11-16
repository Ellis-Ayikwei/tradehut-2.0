import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Dialog, Transition } from '@headlessui/react';
import Select from 'react-select';
import { sendTelegramMessage } from '../../utils/telegram';
import { 
    X, 
    Calendar, 
    Clock, 
    CheckCircle,
    ArrowRight,
    Star,
    Shield,
    Award,
    Code,
    Package,
    Users,
    Globe
} from 'lucide-react';
import {
    IconDeviceMobile,
    IconCurrencyDollar,
    IconClockHour4,
    IconShieldCheck
} from '@tabler/icons-react';

interface Package {
    name: string;
    price: string;
    features: string[];
    popular?: boolean;
}

interface SoftwareDevelopmentModalProps {
    isOpen: boolean;
    onClose: () => void;
    service: {
        title: string;
        description: string;
        icon: React.ReactNode;
        features: string[];
        packages: Package[];
        duration: string;
        warranty: string;
        process: string[];
        faqs: {
            question: string;
            answer: string;
        }[];
    };
}

// Map service titles to project types
const getProjectTypeFromTitle = (title: string): string => {
    const titleLower = title.toLowerCase();
    // Check for mobile app specifically (must contain "mobile")
    if (titleLower.includes('mobile app') || (titleLower.includes('mobile') && titleLower.includes('app'))) {
        return 'mobile-app';
    }
    // Check for e-commerce
    if (titleLower.includes('e-commerce') || titleLower.includes('ecommerce')) {
        return 'ecommerce';
    }
    // Check for API development
    if (titleLower.includes('api development') || (titleLower.includes('api') && !titleLower.includes('integration'))) {
        return 'api';
    }
    // Check for desktop applications
    if (titleLower.includes('desktop')) {
        return 'desktop-app';
    }
    // Check for responsive web design
    if (titleLower.includes('responsive') || titleLower.includes('web design')) {
        return 'website';
    }
    // Default for "Custom Web Applications" and other web apps
    return 'web-app';
};

const SoftwareDevelopmentModal: React.FC<SoftwareDevelopmentModalProps> = ({ isOpen, onClose, service }) => {
    const [activeTab, setActiveTab] = useState('overview');
    const [selectedPackage, setSelectedPackage] = useState<string | null>(null);
    const [showSuccess, setShowSuccess] = useState(false);
    
    // Initialize form data with pre-selected project type
    const initialProjectType = getProjectTypeFromTitle(service.title);
    
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        company: '',
        projectType: initialProjectType,
        projectDescription: '',
        budget: '',
        timeline: '',
        preferredStartDate: '',
        additionalRequirements: ''
    });

    // Update project type when service changes
    useEffect(() => {
        if (isOpen) {
            const newProjectType = getProjectTypeFromTitle(service.title);
            setFormData(prev => ({
                ...prev,
                projectType: newProjectType
            }));
        }
    }, [service.title, isOpen]);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSelectChange = (name: string, value: { value: string; label: string } | null) => {
        setFormData({
            ...formData,
            [name]: value ? value.value : ''
        });
    };

    // React Select options
    const projectTypeOptions = [
        { value: 'website', label: 'Website' },
        { value: 'web-app', label: 'Web Application' },
        { value: 'mobile-app', label: 'Mobile Application' },
        { value: 'desktop-app', label: 'Desktop Application' },
        { value: 'ecommerce', label: 'E-Commerce' },
        { value: 'api', label: 'API Development' },
        { value: 'redesign', label: 'Website/App Redesign' },
        { value: 'other', label: 'Other' }
    ];

    const budgetOptions = [
        { value: 'under-10k', label: 'Under GHC 10,000' },
        { value: '10k-25k', label: 'GHC 10,000 - 25,000' },
        { value: '25k-50k', label: 'GHC 25,000 - 50,000' },
        { value: '50k-100k', label: 'GHC 50,000 - 100,000' },
        { value: 'over-100k', label: 'Over GHC 100,000' }
    ];

    const timelineOptions = [
        { value: 'asap', label: 'As soon as possible' },
        { value: '1-month', label: '1 month' },
        { value: '2-3-months', label: '2-3 months' },
        { value: '3-6-months', label: '3-6 months' },
        { value: 'flexible', label: 'Flexible' }
    ];

    // React Select custom styles for dark theme
    const selectStyles = {
        control: (base: any, state: any) => ({
            ...base,
            backgroundColor: 'rgba(255, 255, 255, 0.05)',
            borderColor: state.isFocused ? '#e5500e' : 'rgba(255, 255, 255, 0.1)',
            borderRadius: '0.75rem',
            padding: '0.5rem',
            minHeight: '48px',
            boxShadow: state.isFocused ? '0 0 0 1px #e5500e' : 'none',
            '&:hover': {
                borderColor: state.isFocused ? '#e5500e' : 'rgba(255, 255, 255, 0.2)'
            }
        }),
        menu: (base: any) => ({
            ...base,
            backgroundColor: '#1e293b',
            borderRadius: '0.75rem',
            border: '1px solid rgba(255, 255, 255, 0.1)',
            marginTop: '0.5rem'
        }),
        menuList: (base: any) => ({
            ...base,
            padding: '0.5rem'
        }),
        option: (base: any, state: any) => ({
            ...base,
            backgroundColor: state.isSelected
                ? '#e5500e'
                : state.isFocused
                ? 'rgba(255, 255, 255, 0.1)'
                : 'transparent',
            color: state.isSelected ? '#ffffff' : '#e2e8f0',
            borderRadius: '0.5rem',
            padding: '0.75rem',
            cursor: 'pointer',
            '&:active': {
                backgroundColor: '#d44a0d'
            }
        }),
        singleValue: (base: any) => ({
            ...base,
            color: '#ffffff'
        }),
        placeholder: (base: any) => ({
            ...base,
            color: '#6b7280'
        }),
        input: (base: any) => ({
            ...base,
            color: '#ffffff'
        }),
        indicatorSeparator: (base: any) => ({
            ...base,
            backgroundColor: 'rgba(255, 255, 255, 0.1)'
        }),
        dropdownIndicator: (base: any) => ({
            ...base,
            color: '#9ca3af',
            '&:hover': {
                color: '#ffffff'
            }
        })
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        
        try {
            const projectTypeLabel = projectTypeOptions.find(opt => opt.value === formData.projectType)?.label || formData.projectType;
            const budgetLabel = budgetOptions.find(opt => opt.value === formData.budget)?.label || formData.budget;
            const timelineLabel = timelineOptions.find(opt => opt.value === formData.timeline)?.label || formData.timeline;

            const message = `💻 New ${service.title} Quote Request\n\n` +
                `👤 Contact Information:\n` +
                `   Name: ${formData.name}\n` +
                `   Email: ${formData.email}\n` +
                `   Phone: ${formData.phone}\n` +
                `   Company: ${formData.company || 'N/A'}\n\n` +
                `📋 Project Details:\n` +
                `   Type: ${projectTypeLabel}\n` +
                `   Budget: ${budgetLabel}\n` +
                `   Timeline: ${timelineLabel}\n` +
                `   Preferred Start: ${formData.preferredStartDate || 'Not specified'}\n` +
                `${selectedPackage ? `   Selected Package: ${selectedPackage}\n` : ''}\n` +
                `📝 Project Description:\n${formData.projectDescription}\n` +
                `${formData.additionalRequirements ? `\n➕ Additional Requirements:\n${formData.additionalRequirements}` : ''}`;

            const success = await sendTelegramMessage(message);
            
            if (success) {
                setShowSuccess(true);
                setTimeout(() => {
                    setShowSuccess(false);
                    onClose();
                    setActiveTab('overview');
                    setSelectedPackage(null);
                    setFormData({
                        name: '',
                        email: '',
                        phone: '',
                        company: '',
                        projectType: initialProjectType,
                        projectDescription: '',
                        budget: '',
                        timeline: '',
                        preferredStartDate: '',
                        additionalRequirements: ''
                    });
                }, 3000);
            }
        } catch (error) {
            console.error('Error submitting form:', error);
        }
    };

    const tabs = [
        { id: 'overview', label: 'Overview', icon: <IconDeviceMobile className="w-4 h-4" /> },
        { id: 'packages', label: 'Packages', icon: <Package className="w-4 h-4" /> },
        { id: 'process', label: 'Process', icon: <IconClockHour4 className="w-4 h-4" /> },
        { id: 'book', label: 'Get Quote', icon: <Calendar className="w-4 h-4" /> }
    ];

    return (
        <Transition show={isOpen} as={React.Fragment}>
            <Dialog as="div" className="relative z-50" onClose={onClose}>
                {/* Backdrop */}
                <Transition.Child
                    as={React.Fragment}
                    enter="ease-out duration-300"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="ease-in duration-200"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                >
                    <div className="fixed inset-0 bg-black/80 backdrop-blur-sm" />
                </Transition.Child>

                {/* Modal Container */}
                <div className="fixed inset-0 overflow-y-auto">
                    <div className="flex min-h-full items-center justify-center p-4">
                        <Transition.Child
                            as={React.Fragment}
                            enter="ease-out duration-300"
                            enterFrom="opacity-0 scale-95"
                            enterTo="opacity-100 scale-100"
                            leave="ease-in duration-200"
                            leaveFrom="opacity-100 scale-100"
                            leaveTo="opacity-0 scale-95"
                        >
                            <Dialog.Panel className="w-full max-w-4xl transform overflow-hidden rounded-3xl bg-gradient-to-b from-slate-900 to-slate-950 shadow-2xl border border-white/10 transition-all">
                                {/* Header */}
                                <div className="relative bg-white/5 backdrop-blur-sm p-6 border-b border-white/10">
                                    <button
                                        onClick={onClose}
                                        className="absolute top-4 right-4 p-2 rounded-xl bg-white/10 hover:bg-white/20 transition-colors"
                                    >
                                        <X className="w-6 h-6 text-white" />
                                    </button>
                                    
                                    <div className="flex items-center gap-4">
                                        <div className="w-16 h-16 bg-[#e5500e] rounded-2xl flex items-center justify-center text-white">
                                            {service.icon}
                                        </div>
                                        <div>
                                            <Dialog.Title className="text-2xl font-bold text-white">{service.title}</Dialog.Title>
                                            <Dialog.Description className="text-gray-400 mt-1">{service.description}</Dialog.Description>
                                        </div>
                                    </div>

                                    {/* Success Message */}
                                    {showSuccess && (
                                        <motion.div
                                            initial={{ opacity: 0, y: -20 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            className="mt-6 p-4 bg-green-500/20 border border-green-500/50 rounded-xl"
                                        >
                                            <div className="flex items-center gap-3">
                                                <CheckCircle className="w-6 h-6 text-green-400" />
                                                <div>
                                                    <h4 className="text-green-400 font-semibold">Success!</h4>
                                                    <p className="text-green-300 text-sm">Your quote request has been submitted. We'll contact you shortly.</p>
                                                </div>
                                            </div>
                                        </motion.div>
                                    )}

                                    {/* Tabs */}
                                    <div className="flex gap-2 mt-6 overflow-x-auto">
                                        {tabs.map((tab) => (
                                            <button
                                                key={tab.id}
                                                onClick={() => setActiveTab(tab.id)}
                                                className={`flex items-center gap-2 px-4 py-2 rounded-xl font-medium transition-all whitespace-nowrap ${
                                                    activeTab === tab.id
                                                        ? 'bg-[#e5500e] text-white hover:bg-[#d44a0d]'
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
                                <div className="p-6 overflow-y-auto max-h-[calc(100vh-300px)]">
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
                                                <div className="bg-white/5 p-4 rounded-xl border border-white/10">
                                                    <div className="w-12 h-12 bg-[#e5500e] rounded-xl flex items-center justify-center mb-3">
                                                        <Clock className="w-6 h-6 text-white" />
                                                    </div>
                                                    <h4 className="text-white font-medium mb-1">Duration</h4>
                                                    <p className="text-gray-400 text-sm">{service.duration}</p>
                                                </div>
                                                <div className="bg-white/5 p-4 rounded-xl border border-white/10">
                                                    <div className="w-12 h-12 bg-[#e5500e] rounded-xl flex items-center justify-center mb-3">
                                                        <Shield className="w-6 h-6 text-white" />
                                                    </div>
                                                    <h4 className="text-white font-medium mb-1">Warranty</h4>
                                                    <p className="text-gray-400 text-sm">{service.warranty}</p>
                                                </div>
                                                <div className="bg-white/5 p-4 rounded-xl border border-white/10">
                                                    <div className="w-12 h-12 bg-[#e5500e] rounded-xl flex items-center justify-center mb-3">
                                                        <Award className="w-6 h-6 text-white" />
                                                    </div>
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

                                    {/* Packages Tab */}
                                    {activeTab === 'packages' && (
                                        <motion.div
                                            initial={{ opacity: 0, y: 20 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            className="space-y-6"
                                        >
                                            <h3 className="text-2xl font-bold text-white mb-6">Choose Your Package</h3>
                                            <div className="grid md:grid-cols-3 gap-6">
                                                {service.packages.map((pkg, index) => (
                                                    <motion.div
                                                        key={index}
                                                        initial={{ opacity: 0, y: 20 }}
                                                        animate={{ opacity: 1, y: 0 }}
                                                        transition={{ delay: index * 0.1 }}
                                                        onClick={() => setSelectedPackage(pkg.name)}
                                                        className={`relative cursor-pointer bg-white/5 backdrop-blur-sm rounded-2xl p-6 border transition-all duration-300 ${
                                                            selectedPackage === pkg.name
                                                                ? 'border-[#e5500e] bg-[#e5500e]/10'
                                                                : 'border-white/10 hover:border-white/20 hover:bg-white/10'
                                                        } ${pkg.popular ? 'ring-2 ring-[#e5500e]/50' : ''}`}
                                                    >
                                                        {pkg.popular && (
                                                            <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                                                                <span className="px-3 py-1 bg-[#e5500e] text-white text-xs font-semibold rounded-full">
                                                                    Popular
                                                                </span>
                                                            </div>
                                                        )}
                                                        <div className="text-center mb-4">
                                                            <h4 className="text-xl font-bold text-white mb-2">{pkg.name}</h4>
                                                            <div className="text-3xl font-bold text-[#e5500e] mb-1">{pkg.price}</div>
                                                        </div>
                                                        <ul className="space-y-3">
                                                            {pkg.features.map((feature, idx) => (
                                                                <li key={idx} className="flex items-start gap-2 text-sm text-gray-300">
                                                                    <CheckCircle className="w-4 h-4 text-green-400 mt-0.5 flex-shrink-0" />
                                                                    <span>{feature}</span>
                                                                </li>
                                                            ))}
                                                        </ul>
                                                    </motion.div>
                                                ))}
                                            </div>
                                            {selectedPackage && (
                                                <motion.div
                                                    initial={{ opacity: 0, y: 10 }}
                                                    animate={{ opacity: 1, y: 0 }}
                                                    className="mt-6 p-4 bg-[#e5500e]/10 border border-[#e5500e]/30 rounded-xl"
                                                >
                                                    <p className="text-white text-sm">
                                                        <strong>Selected:</strong> {selectedPackage} package
                                                    </p>
                                                </motion.div>
                                            )}
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
                                                        <div className="flex-shrink-0 w-10 h-10 bg-[#e5500e] rounded-full flex items-center justify-center text-white font-bold">
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

                                    {/* Get Quote Tab */}
                                    {activeTab === 'book' && (
                                        <motion.div
                                            initial={{ opacity: 0, y: 20 }}
                                            animate={{ opacity: 1, y: 0 }}
                                        >
                                            <form onSubmit={handleSubmit} className="space-y-6">
                                                {/* Personal Information */}
                                                <div>
                                                    <h3 className="text-xl font-semibold text-white mb-4">Contact Information</h3>
                                                    <div className="grid md:grid-cols-2 gap-4">
                                                        <div>
                                                            <label className="block text-gray-400 mb-2">Full Name</label>
                                                            <input
                                                                type="text"
                                                                name="name"
                                                                required
                                                                value={formData.name}
                                                                onChange={handleInputChange}
                                                                className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-[#e5500e]"
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
                                                                className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-[#e5500e]"
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
                                                                className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-[#e5500e]"
                                                                placeholder="+233 XX XXX XXXX"
                                                            />
                                                        </div>
                                                        <div>
                                                            <label className="block text-gray-400 mb-2">Company Name</label>
                                                            <input
                                                                type="text"
                                                                name="company"
                                                                value={formData.company}
                                                                onChange={handleInputChange}
                                                                className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-[#e5500e]"
                                                                placeholder="Your Company"
                                                            />
                                                        </div>
                                                    </div>
                                                </div>

                                                {/* Project Information */}
                                                <div>
                                                    <h3 className="text-xl font-semibold text-white mb-4">Project Details</h3>
                                                    <div className="grid md:grid-cols-2 gap-4">
                                                        <div>
                                                            <label className="block text-gray-400 mb-2">Project Type</label>
                                                            <Select
                                                                name="projectType"
                                                                value={projectTypeOptions.find(opt => opt.value === formData.projectType) || null}
                                                                onChange={(selected: { value: string; label: string } | null) => handleSelectChange('projectType', selected)}
                                                                options={projectTypeOptions}
                                                                styles={selectStyles}
                                                                placeholder="Select project type"
                                                                isSearchable={false}
                                                                required
                                                            />
                                                        </div>
                                                        <div>
                                                            <label className="block text-gray-400 mb-2">Budget Range</label>
                                                            <Select
                                                                name="budget"
                                                                value={budgetOptions.find(opt => opt.value === formData.budget) || null}
                                                                onChange={(selected: { value: string; label: string } | null) => handleSelectChange('budget', selected)}
                                                                options={budgetOptions}
                                                                styles={selectStyles}
                                                                placeholder="Select budget range"
                                                                isSearchable={false}
                                                                required
                                                            />
                                                        </div>
                                                        <div>
                                                            <label className="block text-gray-400 mb-2">Timeline</label>
                                                            <Select
                                                                name="timeline"
                                                                value={timelineOptions.find(opt => opt.value === formData.timeline) || null}
                                                                onChange={(selected: { value: string; label: string } | null) => handleSelectChange('timeline', selected)}
                                                                options={timelineOptions}
                                                                styles={selectStyles}
                                                                placeholder="Select timeline"
                                                                isSearchable={false}
                                                                required
                                                            />
                                                        </div>
                                                        <div>
                                                            <label className="block text-gray-400 mb-2">Preferred Start Date</label>
                                                            <input
                                                                type="date"
                                                                name="preferredStartDate"
                                                                value={formData.preferredStartDate}
                                                                onChange={handleInputChange}
                                                                className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white focus:outline-none focus:border-[#e5500e]"
                                                            />
                                                        </div>
                                                    </div>
                                                </div>

                                                {/* Project Description */}
                                                <div>
                                                    <label className="block text-gray-400 mb-2">Project Description</label>
                                                    <textarea
                                                        name="projectDescription"
                                                        required
                                                        value={formData.projectDescription}
                                                        onChange={handleInputChange}
                                                        rows={4}
                                                        className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-[#e5500e]"
                                                        placeholder="Please describe your project in detail..."
                                                    />
                                                </div>

                                                {/* Additional Requirements */}
                                                <div>
                                                    <label className="block text-gray-400 mb-2">Additional Requirements</label>
                                                    <textarea
                                                        name="additionalRequirements"
                                                        value={formData.additionalRequirements}
                                                        onChange={handleInputChange}
                                                        rows={3}
                                                        className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-[#e5500e]"
                                                        placeholder="Any specific features, integrations, or requirements..."
                                                    />
                                                </div>

                                                {/* Selected Package Display */}
                                                {selectedPackage && (
                                                    <div className="p-4 bg-[#e5500e]/10 border border-[#e5500e]/30 rounded-xl">
                                                        <p className="text-white text-sm">
                                                            <strong>Selected Package:</strong> {selectedPackage}
                                                        </p>
                                                    </div>
                                                )}

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
                                                        className="px-6 py-3 bg-[#e5500e] text-white rounded-xl font-medium shadow-lg hover:shadow-xl transition-all duration-300 hover:bg-[#d44a0d] flex items-center gap-2"
                                                    >
                                                        <span>Request Quote</span>
                                                        <ArrowRight className="w-4 h-4" />
                                                    </button>
                                                </div>
                                            </form>
                                        </motion.div>
                                    )}
                                </div>
                            </Dialog.Panel>
                        </Transition.Child>
                    </div>
                </div>
            </Dialog>
        </Transition>
    );
};

export default SoftwareDevelopmentModal;
