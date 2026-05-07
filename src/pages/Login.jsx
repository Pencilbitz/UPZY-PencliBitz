import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, Lock, Eye, EyeOff, ArrowRight, AlertCircle } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import logo from '../assets/upzy-logo.png';

const Login = () => {
    const [showPassword, setShowPassword] = useState(false);
    const [formData, setFormData] = useState({ email: '', password: '' });
    const [error, setError] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const { login } = useAuth();
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');
        setIsLoading(true);

        try {
            const result = await login(formData.email, formData.password);
            if (result.success) {
                navigate('/admin');
            } else {
                setError(result.error);
            }
        } catch (err) {
            setError('Something went wrong. Please try again.');
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="min-h-screen bg-[#060606] text-white flex flex-col font-sans selection:bg-[#FF7A00]/30 selection:text-[#FF7A00]">
            {/* Navbar */}
            <nav className="flex justify-between items-center px-8 py-6">
                <div className="flex items-center gap-2">
                    <img src={logo} alt="UPZY" className="w-8 h-8" />
                    <span className="font-black text-xl tracking-tight">UPZY <span className="text-[#FF7A00]">PencilBitz</span></span>
                </div>
                <Link to="/" className="text-gray-400 hover:text-white transition-colors text-sm font-bold flex items-center gap-2 group">
                    <ArrowRight size={16} className="rotate-180 group-hover:-translate-x-1 transition-transform" /> Back to Home
                </Link>
            </nav>

            {/* Main Content */}
            <main className="flex-1 flex items-center justify-center p-4">
                <motion.div 
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="w-full max-w-[480px] bg-[#0B0B0F] rounded-[2.5rem] p-10 border border-white/5 relative overflow-hidden shadow-2xl"
                >
                    {/* Background Glow */}
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-64 h-64 bg-[#FF7A00]/5 rounded-full blur-[100px] -z-10" />

                    {/* 3D Padlock Decoration */}
                    <div className="absolute top-8 right-8 w-24 h-24 opacity-80 pointer-events-none z-10">
                        <div className="relative w-full h-full">
                            <div className="absolute inset-0 bg-gradient-to-br from-[#FF7A00] to-orange-900 rounded-2xl blur-2xl opacity-20"></div>
                            <img src="https://cdn-icons-png.flaticon.com/512/6195/6195700.png" alt="lock" className="w-full h-full object-contain filter drop-shadow-2xl" />
                        </div>
                    </div>

                    <h2 className="text-3xl font-black mb-2">Welcome Back!</h2>
                    <p className="text-gray-500 text-sm mb-10 font-medium">Login to continue your learning journey</p>

                    <AnimatePresence mode="wait">
                        {error && (
                            <motion.div
                                initial={{ opacity: 0, y: -10 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -10 }}
                                className="mb-6 p-4 bg-red-500/10 border border-red-500/20 rounded-2xl flex items-center gap-3 text-red-400 text-sm font-bold"
                            >
                                <AlertCircle size={18} className="shrink-0" />
                                {error}
                            </motion.div>
                        )}
                    </AnimatePresence>

                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div>
                            <label className="block text-xs font-bold text-gray-400 mb-2 uppercase tracking-widest">Email Address</label>
                            <div className="relative group">
                                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500 group-focus-within:text-[#FF7A00] transition-colors" />
                                <input 
                                    type="email" 
                                    required
                                    value={formData.email}
                                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                    placeholder="Enter your email"
                                    className="w-full bg-[#111115] border border-white/5 rounded-xl py-4 pl-12 pr-4 focus:border-[#FF7A00]/50 outline-none transition-all placeholder:text-gray-700 font-medium text-white"
                                />
                            </div>
                        </div>

                        <div>
                            <label className="block text-xs font-bold text-gray-400 mb-2 uppercase tracking-widest">Password</label>
                            <div className="relative group">
                                <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500 group-focus-within:text-[#FF7A00] transition-colors" />
                                <input 
                                    type={showPassword ? "text" : "password"} 
                                    required
                                    value={formData.password}
                                    onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                                    placeholder="Enter your password"
                                    className="w-full bg-[#111115] border border-white/5 rounded-xl py-4 pl-12 pr-12 focus:border-[#FF7A00]/50 outline-none transition-all placeholder:text-gray-700 font-medium text-white"
                                />
                                <button 
                                    type="button"
                                    onClick={() => setShowPassword(!showPassword)}
                                    className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500 hover:text-white transition-colors"
                                >
                                    {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                                </button>
                            </div>
                        </div>

                        <div className="flex items-center justify-between">
                            <label className="flex items-center gap-2 cursor-pointer group">
                                <div className="relative w-5 h-5">
                                    <input type="checkbox" className="peer absolute inset-0 opacity-0 cursor-pointer z-10" />
                                    <div className="w-5 h-5 rounded-md border-2 border-white/10 bg-[#111115] peer-checked:bg-[#FF7A00] peer-checked:border-[#FF7A00] transition-all" />
                                    <svg className="absolute inset-0 w-5 h-5 text-white pointer-events-none scale-0 peer-checked:scale-100 transition-transform p-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="4">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                                    </svg>
                                </div>
                                <span className="text-sm text-gray-500 group-hover:text-gray-300 font-medium transition-colors">Remember me</span>
                            </label>
                            <button type="button" className="text-[#FF7A00] text-sm font-bold hover:text-orange-400 transition-colors">Forgot Password?</button>
                        </div>

                        <button 
                            type="submit"
                            disabled={isLoading}
                            className="w-full bg-gradient-to-r from-[#FF7A00] to-[#FF5500] text-white font-black py-4 rounded-xl shadow-xl shadow-[#FF7A00]/20 flex items-center justify-center gap-2 group hover:scale-[1.02] active:scale-[0.98] transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                            {isLoading ? (
                                <div className="w-6 h-6 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                            ) : (
                                <>
                                    Login <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                                </>
                            )}
                        </button>
                    </form>


                    <p className="text-center mt-10 text-sm text-gray-500 font-medium">
                        Don't have an account? <Link to="/signup" className="text-[#FF7A00] font-black hover:text-orange-400 transition-colors">Sign Up</Link>
                    </p>
                </motion.div>
            </main>
        </div>
    );
};

const SocialBtn = ({ icon, label }) => (
    <button className="flex flex-col items-center justify-center gap-2 py-4 bg-[#111115] border border-white/5 rounded-2xl hover:bg-white/5 hover:border-white/10 transition-all group">
        <img src={icon} alt={label} className="w-6 h-6 group-hover:scale-110 transition-transform" />
        <span className="text-[10px] font-black text-gray-500 group-hover:text-gray-300 uppercase tracking-widest">{label}</span>
    </button>
);

export default Login;
