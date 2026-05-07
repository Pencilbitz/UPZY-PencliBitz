import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, Lock, User, Eye, EyeOff, ArrowRight, AlertCircle, CheckCircle2 } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import logo from '../assets/upzy-logo.png';

const SignUp = () => {
    const [showPassword, setShowPassword] = useState(false);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        confirmPassword: ''
    });
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const { register } = useAuth();
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');
        setSuccess('');

        if (formData.password !== formData.confirmPassword) {
            setError('Passwords do not match');
            return;
        }

        if (formData.password.length < 6) {
            setError('Password must be at least 6 characters');
            return;
        }

        setIsLoading(true);

        try {
            const result = await register(formData.name, formData.email, formData.password);
            if (result.success) {
                setSuccess('Account created successfully! Redirecting to login...');
                setTimeout(() => {
                    navigate('/login');
                }, 2000);
            } else {
                setError(result.error);
            }
        } catch (err) {
            setError('Registration failed. Please try again.');
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="min-h-full  bg-[#060606] text-white flex flex-col font-sans selection:bg-[#FF7A00]/30 selection:text-[#FF7A00]">
            <div className="relative w-full flex justify-between items-center">
                <div className="absolute bottom-5 right-0 mt-15 mr-10 w-20 h-20 bg-[#FF7A00]/10 rounded-full blur-sm" />
                <div className="ml-6 mt-6">
                <Link to="/login" className="text-gray-400 hover:text-white transition-colors text-sm font-bold flex items-center gap-2 group">
                    <ArrowRight size={16} className="rotate-180 group-hover:-translate-x-1 transition-transform" /> Back to Home
                </Link>
                </div>
            </div>
            <main className="flex-1 w-full flex items-center justify-center p-4">
                <motion.div 
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="w-full max-w-[480px] bg-[#0B0B0F] rounded-[2.5rem] p-10 border border-white/5 relative overflow-hidden shadow-2xl"
                >
                    {/* Background Glow */}
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-64 h-64 bg-[#FF7A00]/5 rounded-full blur-[100px] -z-10" />

                    {/* 3D Clipboard Decoration */}
                    <div className="absolute top-8 right-8 w-24 h-24 opacity-80 pointer-events-none z-10">
                        <img src="https://www.canburymedicalcentre.nhs.uk/api/imagehandler/?filepath=%2fmedia%2f3dfmplvw%2fcanbury_icon_register.png" alt="signup" className="w-full h-full object-contain filter drop-shadow-2xl" />
                    </div>

                    <h2 className="text-3xl font-black mb-2">Create Your Account</h2>
                    <p className="text-gray-500 text-sm mb-10 font-medium">Join UPZY PencilBitz and start learning</p>

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
                        {success && (
                            <motion.div
                                initial={{ opacity: 0, y: -10 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -10 }}
                                className="mb-6 p-4 bg-green-500/10 border border-green-500/20 rounded-2xl flex items-center gap-3 text-green-400 text-sm font-bold"
                            >
                                <CheckCircle2 size={18} className="shrink-0" />
                                {success}
                            </motion.div>
                        )}
                    </AnimatePresence>

                    <form onSubmit={handleSubmit} className="space-y-4">
                        <InputField 
                            label="Full Name" 
                            icon={<User size={20} />} 
                            placeholder="Enter your full name" 
                            value={formData.name}
                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                            required
                        />
                        <InputField 
                            label="Email Address" 
                            icon={<Mail size={20} />} 
                            placeholder="Enter your email" 
                            type="email" 
                            value={formData.email}
                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                            required
                        />
                        <InputField 
                            label="Password" 
                            icon={<Lock size={20} />} 
                            placeholder="Create a password" 
                            type="password" 
                            value={formData.password}
                            onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                            required
                        />
                        <InputField 
                            label="Confirm Password" 
                            icon={<Lock size={20} />} 
                            placeholder="Confirm your password" 
                            type="password" 
                            value={formData.confirmPassword}
                            onChange={(e) => setFormData({ ...formData, confirmPassword: e.target.value })}
                            required
                        />

                        <label className="flex items-start gap-3 cursor-pointer group mt-6">
                            <div className="relative w-5 h-5 shrink-0 mt-0.5">
                                <input type="checkbox" required className="peer absolute inset-0 opacity-0 cursor-pointer z-10" />
                                <div className="w-5 h-5 rounded-md border-2 border-white/10 bg-[#111115] peer-checked:bg-[#FF7A00] peer-checked:border-[#FF7A00] transition-all" />
                                <svg className="absolute inset-0 w-5 h-5 text-white pointer-events-none scale-0 peer-checked:scale-100 transition-transform p-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="4">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                                </svg>
                            </div>
                            <span className="text-xs text-gray-500 leading-relaxed font-medium">
                                I agree to the <span className="text-[#FF7A00] font-bold hover:underline">Terms & Conditions</span> and <span className="text-[#FF7A00] font-bold hover:underline">Privacy Policy</span>
                            </span>
                        </label>

                        <button 
                            type="submit"
                            disabled={isLoading}
                            className="w-full bg-gradient-to-r from-[#FF7A00] to-[#FF5500] text-white font-black py-4 rounded-xl shadow-xl shadow-[#FF7A00]/20 flex items-center justify-center gap-2 group mt-2 hover:scale-[1.02] active:scale-[0.98] transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                            {isLoading ? (
                                <div className="w-6 h-6 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                            ) : (
                                <>
                                    Sign Up <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                                </>
                            )}
                        </button>
                    </form>


                    <p className="text-center mt-8 text-sm text-gray-500 font-medium">
                        Already have an account? <Link to="/login" className="text-[#FF7A00] font-black hover:text-orange-400 transition-colors">Login</Link>
                    </p>
                </motion.div>
            </main>
        </div>
    );
};

const InputField = ({ label, icon, placeholder, type = "text", value, onChange, required }) => (
    <div>
        <label className="block text-xs font-bold text-gray-400 mb-2 uppercase tracking-widest">{label}</label>
        <div className="relative group">
            <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 group-focus-within:text-[#FF7A00] transition-colors">
                {icon}
            </div>
            <input 
                type={type} 
                value={value}
                onChange={onChange}
                required={required}
                placeholder={placeholder}
                className="w-full bg-[#111115] border border-white/5 rounded-xl py-3.5 pl-12 pr-4 focus:border-[#FF7A00]/50 outline-none transition-all text-sm placeholder:text-gray-700 font-medium text-white"
            />
        </div>
    </div>
);

const SocialBtn = ({ icon, label }) => (
    <button className="flex flex-col items-center justify-center gap-2 py-4 bg-[#111115] border border-white/5 rounded-2xl hover:bg-white/5 hover:border-white/10 transition-all group">
        <img src={icon} alt={label} className="w-5 h-5 group-hover:scale-110 transition-transform" />
        <span className="text-[10px] font-black text-gray-500 group-hover:text-gray-300 uppercase tracking-widest">{label}</span>
    </button>
);

export default SignUp;
