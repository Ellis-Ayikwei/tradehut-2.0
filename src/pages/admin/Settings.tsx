import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
    Settings,
    User,
    Bell,
    Shield,
    Globe,
    Palette,
    Database,
    Mail,
    ArrowLeft,
    Save,
    Eye,
    EyeOff,
    CheckCircle,
    AlertCircle
} from 'lucide-react';
import {
    IconSettings,
    IconUser,
    IconBell,
    IconShield,
    IconWorld,
    IconPalette,
    IconDatabase,
    IconMail
} from '@tabler/icons-react';

interface SettingsSection {
    id: string;
    title: string;
    icon: React.ReactNode;
    description: string;
}

const AdminSettings: React.FC = () => {
    const [activeSection, setActiveSection] = useState('profile');
    const [showPassword, setShowPassword] = useState(false);
    const [saveStatus, setSaveStatus] = useState<'idle' | 'saving' | 'saved'>('idle');

    const sections: SettingsSection[] = [
        {
            id: 'profile',
            title: 'Profile Settings',
            icon: <User className="w-5 h-5" />,
            description: 'Manage your personal information'
        },
        {
            id: 'notifications',
            title: 'Notifications',
            icon: <Bell className="w-5 h-5" />,
            description: 'Configure notification preferences'
        },
        {
            id: 'security',
            title: 'Security',
            icon: <Shield className="w-5 h-5" />,
            description: 'Password and authentication settings'
        },
        {
            id: 'general',
            title: 'General',
            icon: <Globe className="w-5 h-5" />,
            description: 'Language, timezone, and region'
        },
        {
            id: 'appearance',
            title: 'Appearance',
            icon: <Palette className="w-5 h-5" />,
            description: 'Theme and display preferences'
        },
        {
            id: 'backup',
            title: 'Backup & Data',
            icon: <Database className="w-5 h-5" />,
            description: 'Backup settings and data management'
        }
    ];

    const handleSave = () => {
        setSaveStatus('saving');
        setTimeout(() => {
            setSaveStatus('saved');
            setTimeout(() => setSaveStatus('idle'), 2000);
        }, 1000);
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-950 to-slate-900">
            {/* Header */}
            <div className="bg-slate-900/50 backdrop-blur-sm border-b border-white/10">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
                    <div className="flex items-center justify-between">
                        <div className="flex items-center gap-4">
                            <Link to="/admin" className="p-2 hover:bg-white/10 rounded-lg transition-colors">
                                <ArrowLeft className="w-5 h-5 text-gray-400" />
                            </Link>
                            <h1 className="text-2xl font-bold text-white">Settings</h1>
                        </div>
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            onClick={handleSave}
                            disabled={saveStatus === 'saving'}
                            className="px-4 py-2 bg-gradient-to-r from-gray-600 to-gray-700 text-white rounded-lg font-medium shadow-lg hover:shadow-xl transition-all duration-300 flex items-center gap-2 disabled:opacity-50"
                        >
                            {saveStatus === 'saving' ? (
                                <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                            ) : saveStatus === 'saved' ? (
                                <CheckCircle className="w-4 h-4" />
                            ) : (
                                <Save className="w-4 h-4" />
                            )}
                            {saveStatus === 'saving' ? 'Saving...' : saveStatus === 'saved' ? 'Saved!' : 'Save Changes'}
                        </motion.button>
                    </div>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
                    {/* Sidebar */}
                    <div className="lg:col-span-1">
                        <div className="bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 p-4">
                            <nav className="space-y-2">
                                {sections.map((section) => (
                                    <button
                                        key={section.id}
                                        onClick={() => setActiveSection(section.id)}
                                        className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200 ${
                                            activeSection === section.id
                                                ? 'bg-gradient-to-r from-gray-600 to-gray-700 text-white'
                                                : 'text-gray-400 hover:bg-white/5 hover:text-white'
                                        }`}
                                    >
                                        {section.icon}
                                        <div className="text-left">
                                            <div className="font-medium">{section.title}</div>
                                            <div className="text-xs opacity-70">{section.description}</div>
                                        </div>
                                    </button>
                                ))}
                            </nav>
                        </div>
                    </div>

                    {/* Content */}
                    <div className="lg:col-span-3">
                        <motion.div
                            key={activeSection}
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.3 }}
                            className="bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 p-8"
                        >
                            {/* Profile Settings */}
                            {activeSection === 'profile' && (
                                <div className="space-y-6">
                                    <h2 className="text-2xl font-bold text-white mb-6">Profile Settings</h2>
                                    
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <div>
                                            <label className="block text-gray-400 mb-2">First Name</label>
                                            <input
                                                type="text"
                                                defaultValue="Admin"
                                                className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-gray-500"
                                            />
                                        </div>
                                        <div>
                                            <label className="block text-gray-400 mb-2">Last Name</label>
                                            <input
                                                type="text"
                                                defaultValue="User"
                                                className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-gray-500"
                                            />
                                        </div>
                                        <div className="md:col-span-2">
                                            <label className="block text-gray-400 mb-2">Email Address</label>
                                            <input
                                                type="email"
                                                defaultValue="admin@techhub.com"
                                                className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-gray-500"
                                            />
                                        </div>
                                        <div className="md:col-span-2">
                                            <label className="block text-gray-400 mb-2">Bio</label>
                                            <textarea
                                                rows={4}
                                                defaultValue="System administrator with full access to all features."
                                                className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-gray-500"
                                            />
                                        </div>
                                    </div>
                                </div>
                            )}

                            {/* Notifications */}
                            {activeSection === 'notifications' && (
                                <div className="space-y-6">
                                    <h2 className="text-2xl font-bold text-white mb-6">Notification Preferences</h2>
                                    
                                    <div className="space-y-4">
                                        {[
                                            { id: 'email_orders', label: 'New Orders', description: 'Get notified when new orders are placed' },
                                            { id: 'email_repairs', label: 'Repair Updates', description: 'Updates on repair job status changes' },
                                            { id: 'email_users', label: 'New User Registrations', description: 'Notifications for new user sign-ups' },
                                            { id: 'email_inventory', label: 'Low Inventory Alerts', description: 'Alerts when products are running low' },
                                            { id: 'email_security', label: 'Security Alerts', description: 'Important security notifications' }
                                        ].map((notification) => (
                                            <div key={notification.id} className="flex items-center justify-between p-4 bg-white/5 rounded-xl">
                                                <div>
                                                    <h4 className="text-white font-medium">{notification.label}</h4>
                                                    <p className="text-gray-400 text-sm">{notification.description}</p>
                                                </div>
                                                <label className="relative inline-flex items-center cursor-pointer">
                                                    <input type="checkbox" className="sr-only peer" defaultChecked />
                                                    <div className="w-11 h-6 bg-white/20 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-gradient-to-r peer-checked:from-gray-600 peer-checked:to-gray-700"></div>
                                                </label>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            )}

                            {/* Security */}
                            {activeSection === 'security' && (
                                <div className="space-y-6">
                                    <h2 className="text-2xl font-bold text-white mb-6">Security Settings</h2>
                                    
                                    <div className="space-y-6">
                                        <div>
                                            <label className="block text-gray-400 mb-2">Current Password</label>
                                            <div className="relative">
                                                <input
                                                    type={showPassword ? 'text' : 'password'}
                                                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-gray-500 pr-12"
                                                    placeholder="Enter current password"
                                                />
                                                <button
                                                    onClick={() => setShowPassword(!showPassword)}
                                                    className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-white"
                                                >
                                                    {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                                                </button>
                                            </div>
                                        </div>
                                        
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                            <div>
                                                <label className="block text-gray-400 mb-2">New Password</label>
                                                <input
                                                    type="password"
                                                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-gray-500"
                                                    placeholder="Enter new password"
                                                />
                                            </div>
                                            <div>
                                                <label className="block text-gray-400 mb-2">Confirm Password</label>
                                                <input
                                                    type="password"
                                                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-gray-500"
                                                    placeholder="Confirm new password"
                                                />
                                            </div>
                                        </div>

                                        <div className="pt-6 border-t border-white/10">
                                            <h3 className="text-lg font-semibold text-white mb-4">Two-Factor Authentication</h3>
                                            <div className="flex items-center justify-between p-4 bg-white/5 rounded-xl">
                                                <div>
                                                    <h4 className="text-white font-medium">Enable 2FA</h4>
                                                    <p className="text-gray-400 text-sm">Add an extra layer of security to your account</p>
                                                </div>
                                                <button className="px-4 py-2 bg-gradient-to-r from-gray-600 to-gray-700 text-white rounded-lg font-medium hover:shadow-lg transition-all">
                                                    Setup
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )}

                            {/* General */}
                            {activeSection === 'general' && (
                                <div className="space-y-6">
                                    <h2 className="text-2xl font-bold text-white mb-6">General Settings</h2>
                                    
                                    <div className="space-y-6">
                                        <div>
                                            <label className="block text-gray-400 mb-2">Language</label>
                                            <select className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white focus:outline-none focus:border-gray-500">
                                                <option>English (US)</option>
                                                <option>Spanish</option>
                                                <option>French</option>
                                                <option>German</option>
                                            </select>
                                        </div>
                                        
                                        <div>
                                            <label className="block text-gray-400 mb-2">Timezone</label>
                                            <select className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white focus:outline-none focus:border-gray-500">
                                                <option>Pacific Time (PT)</option>
                                                <option>Eastern Time (ET)</option>
                                                <option>Central Time (CT)</option>
                                                <option>Mountain Time (MT)</option>
                                            </select>
                                        </div>
                                        
                                        <div>
                                            <label className="block text-gray-400 mb-2">Date Format</label>
                                            <select className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white focus:outline-none focus:border-gray-500">
                                                <option>MM/DD/YYYY</option>
                                                <option>DD/MM/YYYY</option>
                                                <option>YYYY-MM-DD</option>
                                            </select>
                                        </div>
                                    </div>
                                </div>
                            )}

                            {/* Appearance */}
                            {activeSection === 'appearance' && (
                                <div className="space-y-6">
                                    <h2 className="text-2xl font-bold text-white mb-6">Appearance Settings</h2>
                                    
                                    <div className="space-y-6">
                                        <div>
                                            <label className="block text-gray-400 mb-4">Theme</label>
                                            <div className="grid grid-cols-3 gap-4">
                                                {[
                                                    { name: 'Dark', color: 'from-slate-800 to-slate-900' },
                                                    { name: 'Light', color: 'from-gray-100 to-gray-200' },
                                                    { name: 'Auto', color: 'from-slate-600 to-gray-400' }
                                                ].map((theme) => (
                                                    <button
                                                        key={theme.name}
                                                        className={`p-4 rounded-xl border-2 border-white/10 hover:border-gray-500 transition-all ${
                                                            theme.name === 'Dark' ? 'border-gray-500' : ''
                                                        }`}
                                                    >
                                                        <div className={`w-full h-20 bg-gradient-to-br ${theme.color} rounded-lg mb-2`}></div>
                                                        <span className="text-white">{theme.name}</span>
                                                    </button>
                                                ))}
                                            </div>
                                        </div>
                                        
                                        <div>
                                            <label className="block text-gray-400 mb-2">Accent Color</label>
                                            <div className="flex gap-3">
                                                {[
                                                    'bg-blue-600',
                                                    'bg-purple-600',
                                                    'bg-green-600',
                                                    'bg-orange-600',
                                                    'bg-red-600',
                                                    'bg-gray-600'
                                                ].map((color) => (
                                                    <button
                                                        key={color}
                                                        className={`w-10 h-10 rounded-lg ${color} hover:scale-110 transition-transform`}
                                                    />
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )}

                            {/* Backup */}
                            {activeSection === 'backup' && (
                                <div className="space-y-6">
                                    <h2 className="text-2xl font-bold text-white mb-6">Backup & Data Management</h2>
                                    
                                    <div className="space-y-6">
                                        <div className="p-6 bg-white/5 rounded-xl">
                                            <h3 className="text-lg font-semibold text-white mb-2">Automatic Backups</h3>
                                            <p className="text-gray-400 mb-4">Your data is automatically backed up every 24 hours</p>
                                            <div className="flex items-center gap-4">
                                                <button className="px-4 py-2 bg-gradient-to-r from-gray-600 to-gray-700 text-white rounded-lg font-medium hover:shadow-lg transition-all">
                                                    Backup Now
                                                </button>
                                                <span className="text-gray-400 text-sm">Last backup: 2 hours ago</span>
                                            </div>
                                        </div>
                                        
                                        <div className="p-6 bg-white/5 rounded-xl">
                                            <h3 className="text-lg font-semibold text-white mb-2">Export Data</h3>
                                            <p className="text-gray-400 mb-4">Download all your data in various formats</p>
                                            <div className="flex gap-3">
                                                <button className="px-4 py-2 bg-white/10 text-white rounded-lg hover:bg-white/20 transition-all">
                                                    Export as CSV
                                                </button>
                                                <button className="px-4 py-2 bg-white/10 text-white rounded-lg hover:bg-white/20 transition-all">
                                                    Export as JSON
                                                </button>
                                            </div>
                                        </div>
                                        
                                        <div className="p-6 bg-red-500/10 border border-red-500/20 rounded-xl">
                                            <h3 className="text-lg font-semibold text-red-400 mb-2">Danger Zone</h3>
                                            <p className="text-gray-400 mb-4">Permanently delete all data. This action cannot be undone.</p>
                                            <button className="px-4 py-2 bg-red-600/20 text-red-400 border border-red-600/50 rounded-lg hover:bg-red-600/30 transition-all">
                                                Delete All Data
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            )}
                        </motion.div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AdminSettings;