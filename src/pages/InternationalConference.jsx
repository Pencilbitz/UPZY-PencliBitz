import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import conferencehero from '../assets/Conference-hero.png';
import {
    Calendar, MapPin, Users, Award, ChevronRight,
    ArrowRight, Globe, Share2, Sparkles, Lightbulb
} from 'lucide-react';

// Speakers Images
import speaker1 from '../assets/Conference/speakars/1.jpg';
import speaker2 from '../assets/Conference/speakars/2.jpg';
import speaker5 from '../assets/Conference/speakars/5.jpeg';
import speaker6 from '../assets/Conference/speakars/6.jpeg';

const InternationalConference = () => {
    const features = [
        { icon: Globe, title: "Global Exposure", desc: "Connect with experts and professionals from diverse countries." },
        { icon: Share2, title: "Knowledge Sharing", desc: "Exchange ideas, research, and innovations across different domains." },
        { icon: Lightbulb, title: "Collaboration", desc: "Build meaningful collaboration and future partnerships." },
        { icon: Users, title: "World-Class Speakers", desc: "Learn from internationally recognized speakers and thought leaders." },
        { icon: Award, title: "Recognition", desc: "Publish your research and gain international recognition." }
    ];

    const conferences = [
        {
            title: "Interdisciplinary Research and Global Innovation",
            date: "30 May 2026",
            location: "Chennai, Tamil Nadu, India",
            tags: ["Robotics", "Automation", "AI", "Machine Learning"],
            image: "https://img.magnific.com/premium-photo/globe-communication-information-sharing-satellites-internet-things-technologies-generative-ai_1423-7573.jpg",
            url: "/ICIRGI-30-May-2026",
        },
    ];

    const completedConferences = [
        {
            title: "Global Advances in Science, Engineering, Technology & Management",
            date: "16 May 2026",
            location: "Coimbatore, Tamil Nadu, India",
            tags: ["Sustainability", "Environment", "SDGs"],
            image: "https://etedge-insights.com/wp-content/uploads/2024/11/shutterstock_2477364131.jpg",
            url: "/ICGASETM-16-May-2026",
        },
    ];

    const speakers = [
        { name: "Dr Jiwak Raj Bajracharya", role: "Academic Dean & Principal", org: "Global Academy of Tourism, Nepal", image: speaker1 },
        { name: "Dr Anupama Chowdhury", role: "Assistant Professor", org: "Dhaka, Bangladesh", image: speaker2 },
        { name: "Dr. Sailesh S. Iyer", role: "Professor & I/c Principal", org: "NSIT-IFSCS Ahmedabad", image: speaker5 },
        { name: "Prin. Dr. Sawant Jeetendra", role: "Principal & Administrator", org: "SRSD College, Maharashtra", image: speaker6 },
    ];

    return (
        <div className="min-h-screen bg-[#060609] text-white font-sans selection:bg-[#FF7A00]/20 selection:text-[#FF7A00] overflow-x-hidden">
            
            {/* Hero Section */}
            <div 
                style={{ backgroundImage: `url(${conferencehero})` }} 
                className="bg-cover bg-center bg-no-repeat relative pt-28 sm:pt-36 md:pt-40 lg:pt-48 xl:pt-56 border-b border-white/5"
            >
                <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-[#060609]/75 to-[#060609] pointer-events-none" />
                <div className="absolute top-0 right-0 w-[280px] sm:w-[450px] md:w-[600px] lg:w-[800px] xl:w-[1000px] h-[280px] sm:h-[450px] md:h-[600px] lg:h-[800px] xl:h-[1000px] bg-[#FF7A00]/10 rounded-full blur-[80px] sm:blur-[120px] md:blur-[150px] lg:blur-[180px] -z-10 translate-x-1/4 -translate-y-1/4"></div>
                
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 relative z-10 pb-16 sm:pb-20 lg:pb-24">
                    <div className="max-w-4xl text-left">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                        >
                            <span className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-[#FF7A00]/10 text-[#FF7A00] text-[10px] sm:text-xs font-black rounded-full border border-[#FF7A00]/20 tracking-[0.2em] uppercase mb-5 sm:mb-6">
                                <Sparkles size={12} className="animate-pulse" /> International Hub
                            </span>
                            <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black mb-6 sm:mb-8 leading-[1.15] lg:leading-[1.1] tracking-tight">
                                Global Ideas. <br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF7A00] to-[#FFA500]">
                                    Stronger Together.
                                </span>
                            </h1>
                            <p className="text-sm sm:text-base md:text-lg xl:text-xl text-zinc-400 mb-8 sm:mb-10 leading-relaxed max-w-2xl font-medium">
                                Explore, collaborate, and exchange knowledge with researchers, innovators,
                                and industry leaders from around the world at our International Conferences.
                            </p>

                            <div className="flex flex-col sm:flex-row gap-4 max-w-xs sm:max-w-none">
                                <button 
                                    onClick={() => document.getElementById('upcoming-section').scrollIntoView({ behavior: 'smooth' })} 
                                    className="w-full sm:w-auto px-6 sm:px-8 py-4 bg-[#FF7A00] text-[#0B0B0F] font-black rounded-2xl hover:bg-orange-500 transition-all active:scale-[0.98] flex items-center justify-center gap-3 shadow-xl shadow-orange-500/10 text-xs sm:text-sm tracking-wider uppercase"
                                >
                                    Explore Conferences <ArrowRight size={16} />
                                </button>
                            </div>
                        </motion.div>
                    </div>
                </div>

                {/* Features Matrix Grid */}
                <div className="w-full bg-[#0D0E14]/70 backdrop-blur-md border-t border-white/5 py-8 sm:py-12 px-4 sm:px-6 lg:px-8 xl:px-12 relative z-10">
                    <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 sm:gap-6 lg:gap-4 xl:gap-6">
                        {features.map((feat, idx) => (
                            <div key={idx} className="flex sm:flex-col xl:flex-row items-start gap-4 p-4 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-[#FF7A00]/20 transition-all group">
                                <div className="w-12 h-12 shrink-0 flex items-center justify-center text-[#FF7A00] rounded-xl bg-orange-500/10 group-hover:scale-110 transition-transform">
                                    <feat.icon size={30} />
                                </div>
                                <div className="space-y-1">
                                    <h3 className="font-bold text-sm text-white">{feat.title}</h3>
                                    <p className="text-xs text-zinc-500 leading-relaxed font-medium">{feat.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Core Layout Containers */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 py-16 sm:py-24 lg:py-32 space-y-24 sm:space-y-32 xl:space-y-40">

                {/* Upcoming Conferences View Section */}
                <section id="upcoming-section" className="scroll-mt-24">
                    <div className="flex items-center justify-between gap-4 mb-8 sm:mb-12 lg:mb-16">
                        <h2 className="text-2xl sm:text-3xl md:text-4xl xl:text-5xl font-black tracking-tight">Upcoming Conferences</h2>
                    </div>

                    <div className="grid grid-cols-1 gap-6 sm:gap-8">
                        {conferences.map((conf, idx) => (
                            <div key={idx} className="bg-[#111218] border border-white/5 rounded-3xl overflow-hidden hover:border-[#FF7A00]/30 transition-all duration-300 group flex flex-col lg:flex-row items-stretch">
                                <div className="w-full lg:w-2/5 aspect-video lg:aspect-auto min-h-[200px] sm:min-h-[260px] lg:min-h-[auto] relative overflow-hidden">
                                    <img src={conf.image} alt={conf.title} className="w-full h-full object-cover group-hover:scale-105 transition-all duration-700" />
                                    <div className="absolute inset-0 bg-gradient-to-t lg:bg-gradient-to-r from-black/80 via-black/20 to-transparent" />
                                    <div className="absolute top-4 left-4">
                                        <div className="flex items-center gap-1.5 px-3 py-1.5 bg-black/60 backdrop-blur-md rounded-xl text-[10px] font-black text-[#FF7A00] uppercase tracking-wider border border-white/10">
                                            <Calendar size={12} /> {conf.date}
                                        </div>
                                    </div>ko
                                </div>
                                
                                <div className="p-5 sm:p-8 flex flex-col justify-between flex-1 gap-6 sm:gap-8">
                                    <div className="space-y-4">
                                        <h3 className="text-xl sm:text-2xl xl:text-3xl font-black leading-snug tracking-tight text-[#FF7A00] group-hover:text-[#FF7A00]/80 transition-colors">
                                            {conf.title}
                                        </h3>
                                        <div className="flex flex-wrap gap-2">
                                            {conf.tags.map((tag, tIdx) => (
                                                <span key={tIdx} className="text-[9px] sm:text-[10px] px-2.5 py-1 bg-white/5 rounded-lg font-bold uppercase tracking-widest text-zinc-400 border border-white/5">
                                                    {tag}
                                                </span>
                                            ))}
                                        </div>
                                        <div className="flex items-center gap-2 text-xs sm:text-sm text-zinc-400 font-bold pt-1">
                                            <MapPin size={14} className="text-[#FF7A00] shrink-0" /> 
                                            <span>{conf.location}</span>
                                        </div>
                                    </div>

                                    <div className="pt-4 border-t border-white/5 flex items-center justify-end">
                                        <Link to={conf.url} className="w-full sm:w-auto py-3.5 px-6 bg-white/5 hover:bg-[#FF7A00] hover:text-[#0B0B0F] font-black tracking-wider uppercase text-xs rounded-xl transition-all flex items-center justify-center gap-2">
                                            View Details <ChevronRight size={14} />
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Completed Archives Collection */}
                <section>
                    <div className="flex items-center justify-between gap-4 mb-8 sm:mb-12 lg:mb-16">
                        <h2 className="text-2xl sm:text-3xl md:text-4xl xl:text-5xl font-black tracking-tight text-zinc-300">Completed Sessions</h2>
                        <div className="w-16 md:w-24 h-1 bg-zinc-800 rounded-full hidden sm:block"></div>
                    </div>

                    <div className="grid grid-cols-1 gap-6 sm:gap-8">
                        {completedConferences.map((conf, idx) => (
                            <div key={idx} className="bg-[#111218]/80 border border-white/5 rounded-3xl overflow-hidden hover:border-[#FF7A00]/30 transition-all duration-300 group flex flex-col lg:flex-row items-stretch">
                                <div className="w-full lg:w-2/5 aspect-video lg:aspect-auto min-h-[200px] sm:min-h-[260px] lg:min-h-[auto] relative overflow-hidden">
                                    <img src={conf.image} alt={conf.title} className="w-full h-full object-cover  transition-all duration-700" />
                                    <div className="absolute  bg-gradient-to-t lg:bg-gradient-to-r from-black/90 via-black/40 to-transparent" />
                                    <div className="absolute top-4 left-4">
                                        <div className="flex items-center gap-1.5 px-3 py-1.5 bg-black/80 backdrop-blur-md rounded-xl text-[10px] font-black text-zinc-400 uppercase tracking-wider border border-white/5">
                                            <Calendar size={12} /> {conf.date}
                                        </div>
                                    </div>
                                </div>
                                
                                <div className="p-5 sm:p-8 flex flex-col justify-between flex-1 gap-6 sm:gap-8">
                                    <div className="space-y-4">
                                        <h3 className="text-xl sm:text-2xl xl:text-3xl font-black leading-snug tracking-tight text-zinc-400 group-hover:text-[#FF7A00] transition-colors">
                                            {conf.title}
                                        </h3>
                                        <div className="flex flex-wrap gap-2">
                                            {conf.tags.map((tag, tIdx) => (
                                                <span key={tIdx} className="text-[9px] sm:text-[10px] px-2.5 py-1 bg-white/5 rounded-lg font-bold uppercase tracking-widest text-zinc-500 border border-white/5">
                                                    {tag}
                                                </span>
                                            ))}
                                        </div>
                                        <div className="flex items-center gap-2 text-xs sm:text-sm text-zinc-500 font-bold pt-1">
                                            <MapPin size={14} className="text-zinc-600 shrink-0 text-[#FF7A00]" /> 
                                            <span>{conf.location}</span>
                                        </div>
                                    </div>

                                    <div className="pt-4 border-t border-white/5 flex items-center justify-end">
                                        <Link to={conf.url} className="w-full sm:w-auto py-3.5 px-6 bg-white/5 hover:bg-[#FF7A00] hover:text-[#0B0B0F] font-black tracking-wider uppercase text-xs rounded-xl transition-all flex items-center justify-center gap-2">
                                            View Details <ChevronRight size={14} />
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Speaker Layout Grid Panel */}
                <section className="bg-[#0D0D14] border border-white/5 rounded-[2rem] p-6 sm:p-10 lg:p-12 xl:p-16 relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-[#FF7A00]/5 via-transparent to-transparent pointer-events-none" />
                    
                    <div className="flex items-center justify-between gap-4 mb-10 sm:mb-14 relative z-10">
                        <h2 className="text-xl sm:text-2xl lg:text-3xl font-black flex items-center gap-3">
                            <span className="w-2 h-2 bg-[#FF7A00] rounded-full animate-ping"></span>
                            Keynote Speakers
                        </h2>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6 xl:gap-8 relative z-10">
                        {speakers.map((speaker, idx) => (
                            <div key={idx} className="group/speaker text-center bg-white/[0.01] border border-white/5 p-5 sm:p-6 rounded-2xl hover:bg-white/[0.03] hover:border-[#FF7A00]/20 transition-all duration-300 flex flex-col items-center justify-center">
                                <div className="relative mb-4 inline-block">
                                    <div className="absolute inset-0 bg-[#FF7A00]/20 rounded-full blur-md opacity-0 group-hover/speaker:opacity-100 transition-opacity duration-300" />
                                    <img
                                        src={speaker.image}
                                        alt={speaker.name}
                                        className="w-20 h-20 sm:w-24 sm:h-24 rounded-full object-cover border-4 border-white/5 group-hover/speaker:border-[#FF7A00] transition-all duration-300 relative z-10"
                                    />
                                </div>
                                <h3 className="text-sm font-black text-white mb-1 line-clamp-1 group-hover/speaker:text-[#FF7A00] transition-colors">{speaker.name}</h3>
                                <p className="text-xs text-zinc-400 font-bold line-clamp-1 mb-1">{speaker.role}</p>
                                <p className="text-[10px] text-zinc-500 font-medium italic line-clamp-2 border-t border-white/5 pt-2 mt-2 w-full">{speaker.org}</p>
                            </div>
                        ))}
                    </div>
                </section>

            </div>
        </div>
    );
};

export default InternationalConference;