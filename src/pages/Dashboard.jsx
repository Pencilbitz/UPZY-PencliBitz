import React from 'react';
import { motion } from 'framer-motion';
import { Layout, User, Settings, Bell, Search } from 'lucide-react';

const Dashboard = () => {
    return (
        <div className="min-h-screen bg-gray-50 flex pt-32">
            {/* Sidebar */}
            <div className="w-64 bg-white border-r border-gray-200 p-6 hidden lg:flex flex-col rounded-tr-[3rem]">
                <nav className="space-y-1 flex-1">
                    <button className="w-full flex items-center gap-3 px-4 py-3 bg-[#FF7A00]/10 text-[#FF7A00] rounded-xl font-bold transition-all">
                        <Layout className="w-5 h-5" />
                        Dashboard
                    </button>
                    <button className="w-full flex items-center gap-3 px-4 py-3 text-gray-500 hover:bg-gray-50 hover:text-gray-900 rounded-xl font-semibold transition-all">
                        <User className="w-5 h-5" />
                        Profile
                    </button>
                    <button className="w-full flex items-center gap-3 px-4 py-3 text-gray-500 hover:bg-gray-50 hover:text-gray-900 rounded-xl font-semibold transition-all">
                        <Settings className="w-5 h-5" />
                        Settings
                    </button>
                </nav>
            </div>

            {/* Main Content */}
            <div className="flex-1 flex flex-col overflow-hidden">
                <main className="flex-1 overflow-y-auto p-8">
                    <motion.div 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        <div className="mb-8">
                            <h1 className="text-3xl font-extrabold text-gray-900">Welcome to PencilBitz Dashboard! 👋</h1>
                            <p className="text-gray-500 font-medium mt-1">Exploring the world of projects and creativity.</p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                            {[1, 2, 3].map((i) => (
                                <div key={i} className="bg-white p-6 rounded-3xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                                    <div className={`w-12 h-12 rounded-2xl flex items-center justify-center mb-4 ${
                                        i === 1 ? 'bg-[#FF7A00]/10 text-[#FF7A00]' : 
                                        i === 2 ? 'bg-purple-50 text-purple-600' : 
                                        'bg-emerald-50 text-emerald-600'
                                    }`}>
                                        {i === 1 ? <Layout className="w-6 h-6" /> : i === 2 ? <User className="w-6 h-6" /> : <Settings className="w-6 h-6" />}
                                    </div>
                                    <h3 className="text-lg font-bold text-gray-900">{i === 1 ? 'Total Projects' : i === 2 ? 'Active Users' : 'System Status'}</h3>
                                    <p className="text-3xl font-black text-gray-900 mt-2">{i * 12 + 5}</p>
                                    <p className="text-sm font-medium text-emerald-600 mt-2 flex items-center gap-1">
                                        +12% <span className="text-gray-400">from last month</span>
                                    </p>
                                </div>
                            ))}
                        </div>

                        <div className="bg-white rounded-3xl border border-gray-100 shadow-sm overflow-hidden">
                            <div className="p-6 border-b border-gray-50 flex items-center justify-between">
                                <h3 className="font-bold text-gray-900">Recent Activity</h3>
                                <button className="text-[#FF7A00] font-bold text-sm hover:underline">View All</button>
                            </div>
                            <div className="p-0">
                                {[1, 2, 3, 4].map((item) => (
                                    <div key={item} className="p-6 flex items-center gap-4 hover:bg-gray-50 transition-colors border-b last:border-0 border-gray-50">
                                        <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center">
                                            <div className="w-2 h-2 rounded-full bg-[#FF7A00]"></div>
                                        </div>
                                        <div className="flex-1">
                                            <p className="text-sm font-bold text-gray-900">Project "{['Redesign', 'API Integration', 'Auth System', 'Mobile App'][item-1]}" updated</p>
                                            <p className="text-xs font-medium text-gray-400 mt-0.5">2 hours ago</p>
                                        </div>
                                        <div className="px-3 py-1 bg-gray-100 rounded-full text-[10px] font-bold text-gray-500 uppercase tracking-wider">
                                            Completed
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </motion.div>
                </main>
            </div>
        </div>
    );
};

export default Dashboard;
