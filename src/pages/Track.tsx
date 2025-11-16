import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowLeft, Search, Package, Clock, CheckCircle, Code } from 'lucide-react';

const Track: React.FC = () => {
    const [trackingId, setTrackingId] = useState('');
    const [repairStatus, setRepairStatus] = useState<any>(null);

    const handleTrack = (e: React.FormEvent) => {
        e.preventDefault();
        // Simulate tracking lookup
        if (trackingId) {
            setRepairStatus({
                id: trackingId,
                device: 'iPhone 14 Pro',
                status: 'In Progress',
                estimatedCompletion: '2024-01-20',
                updates: [
                    { date: '2024-01-15', status: 'Device Received', description: 'Your device has been received and is being diagnosed.' },
                    { date: '2024-01-16', status: 'Diagnosis Complete', description: 'Diagnosis complete. Repair approved and in progress.' },
                    { date: '2024-01-17', status: 'Repair In Progress', description: 'Device is currently being repaired by our technicians.' }
                ]
            });
        }
    };

    const statusColors: { [key: string]: string } = {
        'Received': 'text-blue-400',
        'In Progress': 'text-yellow-400',
        'Completed': 'text-green-400',
        'Ready for Pickup': 'text-purple-400'
    };

    return (
        <div className="min-h-screen bg-black">
            <section className="pt-32 pb-24 bg-gradient-to-b from-slate-900 via-slate-950 to-slate-900 relative overflow-hidden">
                <div className="absolute inset-0">
                    <div className="absolute top-1/4 right-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
                    <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>
                    <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff02_1px,transparent_1px),linear-gradient(to_bottom,#ffffff02_1px,transparent_1px)] bg-[size:4rem_4rem]"></div>
                </div>

                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
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
                            <Package className="w-4 h-4 text-blue-400" />
                            <span className="text-sm text-blue-300 font-medium">Track Your Repair</span>
                        </motion.div>
                        
                        <h1 className="text-4xl lg:text-6xl font-bold text-white mb-4">
                            Track Your
                            <span className="block bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                                Device Repair
                            </span>
                        </h1>
                        
                        <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                            Enter your tracking ID to check the status of your device repair
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 mb-8"
                    >
                        <form onSubmit={handleTrack} className="flex gap-4">
                            <div className="relative flex-1">
                                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                                <input
                                    type="text"
                                    placeholder="Enter tracking ID"
                                    value={trackingId}
                                    onChange={(e) => setTrackingId(e.target.value)}
                                    className="w-full pl-12 pr-4 py-4 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 transition-colors"
                                />
                            </div>
                            <motion.button
                                type="submit"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="px-8 py-4 bg-[#e5500e] text-white rounded-xl font-medium hover:bg-[#d44a0d] transition-all"
                            >
                                Track
                            </motion.button>
                        </form>
                    </motion.div>

                    {repairStatus && (
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10"
                        >
                            <div className="mb-6">
                                <h3 className="text-2xl font-bold text-white mb-2">Repair Status</h3>
                                <div className="flex items-center gap-4 text-gray-400">
                                    <span>Tracking ID: {repairStatus.id}</span>
                                    <span>•</span>
                                    <span>{repairStatus.device}</span>
                                </div>
                            </div>

                            <div className="mb-6 p-4 bg-white/5 rounded-xl border border-white/10">
                                <div className="flex items-center gap-3 mb-2">
                                    <Clock className="w-5 h-5 text-yellow-400" />
                                    <span className="text-white font-medium">Current Status: {repairStatus.status}</span>
                                </div>
                                <p className="text-gray-400 text-sm">Estimated Completion: {repairStatus.estimatedCompletion}</p>
                            </div>

                            <div>
                                <h4 className="text-lg font-bold text-white mb-4">Repair Timeline</h4>
                                <div className="space-y-4">
                                    {repairStatus.updates.map((update: any, index: number) => (
                                        <div key={index} className="flex gap-4">
                                            <div className="flex flex-col items-center">
                                                <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                                                {index < repairStatus.updates.length - 1 && (
                                                    <div className="w-0.5 h-full bg-blue-500/30 mt-2"></div>
                                                )}
                                            </div>
                                            <div className="flex-1 pb-4">
                                                <div className="flex items-center gap-2 mb-1">
                                                    <CheckCircle className="w-4 h-4 text-green-400" />
                                                    <span className="text-white font-medium">{update.status}</span>
                                                    <span className="text-gray-400 text-sm">{update.date}</span>
                                                </div>
                                                <p className="text-gray-400 text-sm">{update.description}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    )}
                </div>
            </section>
        </div>
    );
};

export default Track;

