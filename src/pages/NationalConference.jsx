import React from 'react';
import { motion } from 'framer-motion';
import {
    Calendar, MapPin, Users, Award, Play, ChevronRight,
    CheckCircle2, ArrowRight, Search, Globe, Share2,
    Shield, Sparkles, Trophy, BookOpen, Mail, FileText, Lightbulb,
    Zap, Microscope, Heart
} from 'lucide-react';

const NationalConference = () => {
    const features = [
        {
            icon: Users,
            title: "Expert Speakers",
            desc: "Learn from leading experts and innovators from top institutions across the country."
        },
        {
            icon: Microscope,
            title: "Research & Innovation",
            desc: "Explore cutting-edge research and innovative ideas across multiple disciplines."
        },
        {
            icon: Share2,
            title: "Networking",
            desc: "Connect with professionals, scholars, and peers to build valuable relationships."
        },
        {
            icon: Award,
            title: "Publication Opportunities",
            desc: "Get your research published in reputed journals and conference proceedings."
        }
    ];

    const conferences = [
        {
            title: "National Conference on Advances in Artificial Intelligence",
            desc: "Exploring the latest breakthroughs and future directions in Artificial Intelligence and its real-world applications.",
            date: "15 - 16 Jun 2025",
            location: "Bangalore, India",
            tags: ["Artificial Intelligence", "Machine Learning"],
            image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=800"
        },
        {
            title: "National Conference on Sustainable Engineering & Technology",
            desc: "Bringing together innovations in sustainable engineering for a greener and smarter tomorrow.",
            date: "20 - 21 Jul 2025",
            location: "Chennai, India",
            tags: ["Sustainability", "Engineering"],
            image: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&q=80&w=800"
        },
        {
            title: "National Conference on Emerging Trends in Biotechnology",
            desc: "A platform to discuss the latest trends and technologies shaping the future of biotechnology.",
            date: "10 - 11 Aug 2025",
            location: "Hyderabad, India",
            tags: ["Biotechnology", "Life Sciences"],
            image: "https://png.pngtree.com/thumb_back/fh260/background/20250224/pngtree-futuristic-dna-strand-floating-in-a-high-tech-blue-background-cutting-image_16996008.jpg"
        },
        {
            title: "National Conference on Digital Transformation & Marketing",
            desc: "Understanding the digital shift and modern marketing strategies in today's competitive world.",
            date: "05 - 06 Sep 2025",
            location: "Pune, India",
            tags: ["Marketing", "Digital Transformation"],
            image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800"
        }
    ];

    const stats = [
        { label: "Conferences", value: "25+", icon: Trophy },
        { label: "Participants", value: "5000+", icon: Users },
        { label: "Expert Speakers", value: "300+", icon: Sparkles },
        { label: "Institutions", value: "100+", icon: Award },
        { label: "Satisfaction Rate", value: "98%", icon: CheckCircle2 }
    ];

    return (
        <div className="min-h-screen bg-[#0B0B0F] text-white font-sans selection:bg-[#FF7A00]/20 selection:text-[#FF7A00] pt-20">
            {/* Hero Section */}
            <section className="relative px-6 py-12 md:py-20 overflow-hidden">
                <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12">
                    <motion.div 
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        className="flex-1 text-left"
                    >
                        <span className="px-4 py-1.5 bg-[#FF7A00]/10 text-[#FF7A00] text-xs font-bold rounded-full border border-[#FF7A00]/20 tracking-widest uppercase mb-6 inline-block">
                            National Conferences
                        </span>
                        <h1 className="text-5xl md:text-7xl font-black mb-8 leading-tight">
                            Discover. Learn.<br />
                            <span className="text-[#FF7A00]">Connect. Grow.</span>
                        </h1>
                        <p className="text-lg text-gray-400 mb-10 leading-relaxed max-w-xl">
                            Join leading researchers, academicians, and industry experts at our National Conferences and be part of meaningful discussions and innovations.
                        </p>
                        <div className="flex flex-wrap gap-4">
                            <button 
                                onClick={() => document.getElementById('upcoming').scrollIntoView({ behavior: 'smooth' })}
                                className="px-8 py-4 bg-[#FF7A00] text-[#0B0B0F] font-black rounded-2xl hover:bg-[#FFA500] transition-all transform hover:scale-105 flex items-center gap-3 shadow-lg shadow-[#FF7A00]/20"
                            >
                                Upcoming Conferences <ArrowRight size={20} />
                            </button>
                            <button onClick={() => document.getElementById('call').scrollIntoView({ behavior: 'smooth' })} className="px-8 py-4 bg-transparent border border-white/10 text-white font-bold rounded-2xl hover:bg-white/5 transition-all flex items-center gap-3">
                                Call for Papers <Users size={18} />
                            </button>
                        </div>
                    </motion.div>

                    <motion.div 
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8 }}
                        className="flex-1 relative"
                    >
                        <div className="relative z-10 rounded-[40px] overflow-hidden border border-[#FF7A00]/30 shadow-2xl shadow-[#FF7A00]/10">
                            <img 
                                src="https://cdn.imageurlgenerator.com/uploads/c4538cf4-64bb-4edd-b774-a9a8493742ee.png" 
                                alt="Conference" 
                                className="w-full h-full object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-[#0B0B0F] via-transparent to-transparent opacity-60"></div>
                            
                         
                        </div>
                        
                        {/* Decorative elements */}
                        <div className="absolute -top-10 -right-10 w-40 h-40 bg-[#FF7A00]/20 rounded-full blur-[80px] -z-10 animate-pulse"></div>
                        <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-indigo-600/20 rounded-full blur-[80px] -z-10 animate-pulse delay-700"></div>
                        
                        {/* Grid Dot Pattern */}
                        <div className="absolute top-0 right-0 grid grid-cols-6 gap-2 opacity-20 -mr-8 -mt-8">
                            {[...Array(24)].map((_, i) => (
                                <div key={i} className="w-1.5 h-1.5 bg-[#FF7A00] rounded-full"></div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Features Section */}
            <section className="py-20 px-6">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {features.map((item, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.1 }}
                                className="p-8 bg-[#16181D] border border-white/5 rounded-[32px] hover:border-[#FF7A00]/30 transition-all group"
                            >
                                <div className="w-14 h-14 bg-[#FF7A00]/10 rounded-2xl flex items-center justify-center text-[#FF7A00] mb-6 group-hover:scale-110 transition-transform">
                                    <item.icon size={28} />
                                </div>
                                <h3 className="text-xl font-bold mb-4">{item.title}</h3>
                                <p className="text-gray-400 text-sm leading-relaxed">{item.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Upcoming Conferences */}
            <section id="upcoming" className="py-20 px-6 bg-[#0D0E14]">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-black mb-4">Upcoming National Conferences</h2>
                        <div className="h-1.5 w-24 bg-[#FF7A00] mx-auto rounded-full"></div>
                    </div>

                    <div className="space-y-6">
                        {conferences.map((conf, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                className="bg-[#16181D] border border-white/5 rounded-[32px] p-4 md:p-6 flex flex-col md:flex-row items-center gap-8 hover:border-[#FF7A00]/20 transition-all group"
                            >
                                <div className="w-full md:w-64 h-48 rounded-2xl overflow-hidden flex-shrink-0">
                                    <img src={conf.image} alt={conf.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                                </div>
                                
                                <div className="flex-1 text-left">
                                    <h3 className="text-2xl font-bold mb-3 group-hover:text-[#FF7A00] transition-colors">{conf.title}</h3>
                                    <p className="text-gray-400 text-sm mb-6 max-w-2xl">{conf.desc}</p>
                                    <div className="flex flex-wrap gap-2">
                                        {conf.tags.map((tag, tIdx) => (
                                            <span key={tIdx} className="px-4 py-1.5 bg-white/5 rounded-full text-[10px] font-bold text-gray-500 border border-white/5 uppercase tracking-wider">{tag}</span>
                                        ))}
                                    </div>
                                </div>

                                <div className="w-full md:w-auto flex flex-col md:items-end gap-6 md:pl-8 md:border-l border-white/5">
                                    <div className="space-y-3">
                                        <div className="flex items-center gap-3 text-sm font-bold text-white">
                                            <Calendar size={18} className="text-[#FF7A00]" />
                                            {conf.date}
                                        </div>
                                        <div className="flex items-center gap-3 text-sm font-bold text-gray-400">
                                            <MapPin size={18} className="text-[#FF7A00]" />
                                            {conf.location}
                                        </div>
                                    </div>
                                    <button className="w-full md:w-auto px-8 py-3.5 bg-[#FF7A00] text-[#0B0B0F] font-black rounded-xl hover:bg-[#FFA500] transition-all flex items-center justify-center gap-2 text-sm shadow-lg shadow-[#FF7A00]/10">
                                        View Details <ArrowRight size={18} />
                                    </button>
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    <div className="mt-16 text-center">
                        <button className="px-8 py-3 bg-transparent border border-white/10 text-white font-bold rounded-xl hover:bg-white/5 transition-all flex items-center gap-2 mx-auto">
                            View All Conferences <ArrowRight size={18} className="text-[#FF7A00]" />
                        </button>
                    </div>
                </div>
            </section>

            {/* Stats Section */}
            <section className="py-16 px-6 bg-[#16181D] border-y border-white/5">
                <div className="max-w-7xl mx-auto flex flex-wrap justify-center md:justify-between gap-12">
                    {stats.map((stat, idx) => (
                        <div key={idx} className="flex items-center gap-5 text-left">
                            <div className="w-12 h-12 bg-[#FF7A00]/10 rounded-xl flex items-center justify-center text-[#FF7A00]">
                                <stat.icon size={24} />
                            </div>
                            <div>
                                <h4 className="text-3xl font-black text-white leading-none mb-1">{stat.value}</h4>
                                <p className="text-[10px] font-bold text-gray-500 uppercase tracking-widest">{stat.label}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Call for Papers Banner */}
            <section id='call' className="py-20 px-6">
                <div className="max-w-7xl mx-auto">
                    <div className="relative bg-[#16181D] border border-white/5 rounded-[40px] p-10 md:p-10 overflow-hidden flex flex-col md:flex-row items-center justify-between gap-8 group">
                        {/* Background Decoration */}
                        <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-[#FF7A00]/5 rounded-full blur-[100px] -z-10 group-hover:bg-[#FF7A00]/10 transition-colors duration-700"></div>
                        
                        <div className="flex items-center gap-8 flex-1">
                            <div className="w-20 h-20 bg-white/5 rounded-3xl flex items-center justify-center text-[#FF7A00] flex-shrink-0 relative overflow-hidden">
                                <FileText size={40} />
                                <div className="absolute inset-0 bg-gradient-to-tr from-[#FF7A00]/20 to-transparent"></div>
                            </div>
                            <div className="text-left">
                                <h2 className="text-4xl font-black mb-4">Call for Papers</h2>
                                <p className="text-lg text-gray-400 max-w-lg">Share your research and be a part of our upcoming national conferences.</p>
                            </div>
                        </div>

                        <button className="px-10 py-5 bg-[#FF7A00] text-[#0B0B0F] font-black rounded-2xl hover:bg-[#FFA500] transition-all transform hover:scale-105 flex items-center gap-3 shadow-2xl shadow-[#FF7A00]/20">
                            Submit Your Paper <ArrowRight size={20} />
                        </button>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default NationalConference;
