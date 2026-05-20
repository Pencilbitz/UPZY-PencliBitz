import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import conferencehero from '../assets/Conference-hero.png';
import {
    Calendar, MapPin, Users, Award, Play, ChevronRight,
    CheckCircle2, ArrowRight, Search, Globe, Share2,
    Shield, Sparkles, Trophy, BookOpen, Mail, FileText, Lightbulb,
    Building, ChevronLeft, Star
} from 'lucide-react';
// Speakers Images
import speaker1 from '../assets/Conference/speakars/1.jpg';
import speaker2 from '../assets/Conference/speakars/2.jpg';
import speaker3 from '../assets/Conference/speakars/3.jpg';
import speaker4 from '../assets/Conference/speakars/4.jpg';
import speaker5 from '../assets/Conference/speakars/5.jpeg';
import speaker6 from '../assets/Conference/speakars/6.jpeg';

const InternationalConference = () => {
    const [currentSpeaker, setCurrentSpeaker] = useState(0);

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
        {
            title: "Global Advances in Science, Engineering, Technology & Management",
            date: "16 May 2026",
            location: "Coimbatore, Tamil Nadu, India",
            tags: ["Sustainability", "Environment", "SDGs"],
            image: "https://etedge-insights.com/wp-content/uploads/2024/11/shutterstock_2477364131.jpg"
        },
        {
            title: "International Conference on Biomedical Engineering",
            date: "20 Nov 2025",
            location: "Dubai, UAE",
            tags: ["Biomedical", "Healthcare", "Biotechnology"],
            image: "https://png.pngtree.com/thumb_back/fw800/background/20230526/pngtree-dna-strand-model-in-orange-light-against-black-background-image_2638294.jpg"
        },
        {
            title: "International Conference on Business & Management",
            date: "10 Dec 2025",
            location: "London, United Kingdom",
            tags: ["Business", "Management", "Leadership"],
            image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=800"
        }
    ];

    const stats = [
        { icon: Globe, value: "30+", label: "Countries" },
        { icon: Users, value: "2000+", label: "Participants" },
        { icon: Users, value: "250+", label: "Expert Speakers" },
        { icon: Building, value: "150+", label: "Institutions" },
        { icon: Shield, value: "98%", label: "Satisfaction Rate" },
    ];

    const speakers = [
        {
            name: "Dr Jiwak Raj Bajracharya",
            role: "Academic Dean and Principal Global",
            org: "Academy of Tourism Bagmati Nepal",
            image: speaker1,
        },
        {

            name: "Dr Anupama Chowdhury",
            role: "Assistant Professor",
            org: "Dhaka, Bangladesh",
            image: speaker2,
        },
        {
            name: "Dr.S.Dhanabal",
            role: "Professor",
            org: "Kongunadu College of Engineering and Technology",
            image: speaker3,
        },
        {
            name: "Dr.N.Saranya",
            role: "Professor",
            org: "KPR Institute of Engineering and Technology",
            image: speaker4,
        },
        {
            name: "Dr. Sailesh S. Iyer",
            role: "Professor and I/c Principal",
            org: "NSIT-IFSCS Ahmedabad",
            image: speaker5,
        },
        {
            name: "Prin. Dr. Sawant Jeetendra",
            role: "Principal and Administrator",
            org: "SRSD COLLEGE OF Maharashtra",
            image: speaker6,
        },
    ];

    const timeline = [
        { phase: "Abstract Submission", date: "15 May - 15 June 2026", icon: FileText },
        { phase: "Notification of Acceptance", date: "30 June 2026", icon: Shield },
        { phase: "Early Bird Registration", date: "01 July - 31 July 2026", icon: Award },
        { phase: "Final Registration", date: "01 Aug - 31 Aug 2026", icon: FileText },
        { phase: "Conference Dates", date: "10 - 12 Sep 2026", icon: Calendar }
    ];

    const testimonials = [
        {
            quote: "The conference was incredibly organized and provided a great platform to share our research with a global audience.",
            name: "Dr. Emily Carter",
            role: "Research Scientist, Australia",
            image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=100&h=100"
        },
        {
            quote: "Excellent opportunity to network with experts and learn about the latest innovations in our field.",
            name: "Prof. Luis Martinez",
            role: "University of Madrid, Spain",
            image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=100&h=100"
        },
        {
            quote: "A truly international experience with diverse perspectives and high-quality presentations.",
            name: "Dr. Priya Sharma",
            role: "IIT Delhi, India",
            image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=100&h=100"
        }
    ];

    const nextSpeaker = () => setCurrentSpeaker((prev) => (prev + 1) % speakers.length);
    const prevSpeaker = () => setCurrentSpeaker((prev) => (prev - 1 + speakers.length) % speakers.length);

    return (
        <div className="min-h-screen bg-[#0B0B0F] text-white font-sans selection:bg-[#FF7A00]/20 selection:text-[#FF7A00]">

            {/* Header Hero Section */}
            <div style={{ backgroundImage: `url(${conferencehero})` }} className={`bg-conferencehero bg-cover bg-center bg-no-repeat relative overflow-hidden pt-32 `}>
                <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-[#FF7A00]/10 rounded-full blur-[160px] -z-10 translate-x-1/4 -translate-y-1/4"></div>
                <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-indigo-600/5 rounded-full blur-[120px] -z-10 -translate-x-1/4 translate-y-1/4"></div>

                <div className="max-w-7xl mx-auto px-6 flex flex-col lg:flex-row items-center justify-between gap-12">
                    <div className="max-w-2xl text-left">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                        >
<<<<<<< HEAD
                            <span className="px-4 py-1.5 bg-[#FF7A00]/10 text-[#FF7A00] text-xs font-bold rounded-full border border-[#FF7A00]/20 tracking-widest uppercase mb-6 inline-block">
=======
                            <span className="px-4 py-1.5 bg-[#FF7A00]/10 text-[#FF7A00] text-xs rounded-full border border-[#FF7A00]/20  mb-6 inline-block font-bold uppercase tracking-wider">
>>>>>>> c94fb50 (first commit)
                                International Conferences
                            </span>
                            <h1 className="text-5xl md:text-7xl font-black mb-8 leading-tight tracking-tight">
                                Global Ideas. <br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF7A00] to-[#FFA500]">
                                    Stronger Together.
                                </span>
                            </h1>
                            <p className="text-lg text-gray-400 mb-10 leading-relaxed">
                                Explore, collaborate, and exchange knowledge with researchers, innovators,
                                and industry leaders from around the world at our International Conferences.
                            </p>

                            <div className="flex flex-wrap gap-4">
                                <button onClick={() => document.getElementById('conference').scrollIntoView({ behavior: 'smooth' })} className="px-7 py-4 bg-[#FF7A00] text-[#0B0B0F] font-black rounded-2xl hover:bg-[#FFA500] transition-all transform hover:scale-105 flex items-center gap-3 shadow-lg shadow-[#FF7A00]/10 text-sm">
                                    Explore Conferences <ArrowRight size={18} />
                                </button>
                                <button onClick={() => document.getElementById('call').scrollIntoView({ behavior: 'smooth' })} className="px-7 py-4 bg-[#16181D] border border-white/10 text-white font-bold rounded-2xl hover:bg-white/5 transition-all flex items-center gap-3 text-sm">
                                    Submit Your Paper <FileText size={16} />
                                </button>
                            </div>
                        </motion.div>
                    </div>
                </div>

                <div className="w-full bg-[#0D0E14]/80 backdrop-blur-md border-y border-white/5 py-12 px-6 mt-16">
                    <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-8">
                        {features.map((feat, idx) => (
                            <div key={idx} className="flex items-center gap-4 group">
                                <div className="w-20 h-20  flex items-center justify-center text-[#FF7A00] group-hover:border-[#FF7A00]/30 transition-all">
                                    <feat.icon size={45} />
                                </div>
                                <div>
                                    <h3 className="font-bold text-sm text-white">{feat.title}</h3>
                                    <p className="text-[10px] text-gray-500">{feat.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <div id='conference' className="max-w-7xl mx-auto px-6 py-20 space-y-32">

                {/* Upcoming Conferences Section */}
                <section>
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-black mb-4">Upcoming International Conferences</h2>
                        <div className="w-24 h-1 bg-[#FF7A00] mx-auto rounded-full"></div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {conferences.map((conf, idx) => (
                            <div key={idx} className="bg-[#16181D] border border-white/5 rounded-3xl overflow-hidden hover:border-[#FF7A00]/30 transition-all group flex flex-col justify-between">
                                <div>
                                    <div className="h-48 overflow-hidden relative">
                                        <img src={conf.image} alt={conf.title} className="w-full h-full object-cover group-hover:scale-110 transition-all duration-700" />
                                        <div className="absolute inset-0 bg-gradient-to-t from-[#16181D] to-transparent opacity-80" />
                                        <div className="absolute bottom-4 left-4">
                                            <div className="flex items-center gap-1.5 px-3 py-1 bg-black/40 backdrop-blur-md rounded-lg text-[10px] font-bold text-[#FF7A00] uppercase tracking-wider">
                                                <Calendar size={12} /> {conf.date}
                                            </div>
                                        </div>
                                    </div>
                                    <div className="p-6">
                                        <div className="flex items-center gap-2 text-xs text-gray-500 font-bold mb-3">
                                            <MapPin size={14} className="text-[#FF7A00]" /> {conf.location}
                                        </div>
                                        <h3 className="text-lg font-bold leading-tight mb-4 group-hover:text-white transition-colors">{conf.title}</h3>
                                        <div className="flex flex-wrap gap-2">
                                            {conf.tags.map((tag, tIdx) => (
                                                <span key={tIdx} className="text-[9px] px-2.5 py-1 bg-white/5 rounded-md font-bold uppercase tracking-widest text-gray-400 border border-white/5">{tag}</span>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                                <div className="p-6 pt-2 border-t border-white/5 mt-4">
                                    <Link to={conf.url} className="w-full py-3 bg-white/5 hover:bg-[#FF7A00] hover:text-[#0B0B0F] font-bold text-sm rounded-xl transition-all flex items-center justify-center gap-2">
                                        View Details <ChevronRight size={16} />
                                    </Link>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Main Content Grid (Stats, Speakers, Timeline, Papers) */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">

                    {/* Featured Speakers Section */}
                    <div className="lg:col-span-6 bg-[#0D0D14] border border-white/5 rounded-[40px] p-8 relative overflow-hidden">
                        <div className="flex items-center justify-between mb-10">
                            <h2 className="text-xl font-bold flex items-center gap-3">
                                <span className="w-2 h-2 bg-[#FF7A00] rounded-full animate-pulse"></span>
                                Featured Speakers
                            </h2>
                            <button className="text-xs font-bold text-[#FF7A00] hover:text-purple-300 transition-colors flex items-center gap-2 group">
                                View All Speakers <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                            </button>
                        </div>

                        <div className="relative">
                            <div className="flex items-center justify-between gap-4">
                                <button onClick={prevSpeaker} className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-white/10 transition-all">
                                    <ChevronLeft size={20} />
                                </button>

                                <div className="flex-1 grid grid-cols-2 md:grid-cols-4 gap-4">
                                    {speakers.map((speaker, idx) => (
                                        <motion.div
                                            key={idx}
                                            initial={{ opacity: 0, scale: 0.9 }}
                                            animate={{ opacity: 1, scale: 1 }}
                                            className="text-center group/speaker"
                                        >
                                            <div className="relative mb-4 inline-block">
                                                <div className="absolute inset-0 bg-[#FF7A00]/10 rounded-full blur-xl opacity-0 group-hover/speaker:opacity-100 transition-opacity"></div>
                                                <img
                                                    src={speaker.image}
                                                    alt={speaker.name}
                                                    className="w-24 h-24 rounded-full object-cover border-4 border-white/5 group-hover/speaker:border-[#FF7A00]/50 transition-all relative z-10"
                                                />
                                            </div>
                                            <h3 className="text-xs font-bold mb-1 truncate">{speaker.name}</h3>
                                            <p className="text-[10px] text-gray-500 font-medium mb-0.5">{speaker.role}</p>
                                            <p className="text-[9px] text-gray-600 italic">{speaker.org}</p>
                                        </motion.div>
                                    ))}
                                </div>

                                <button onClick={nextSpeaker} className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-white/10 transition-all">
                                    <ChevronRight size={20} />
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Timeline Section */}
                    <div className="lg:col-span-3 bg-[#0D0D14] border border-white/5 rounded-[40px] p-8">
                        <h2 className="text-xl font-bold mb-8">Conference Timeline</h2>
                        <div className="space-y-6">
                            {timeline.map((item, idx) => (
                                <div key={idx} className="flex gap-4 group">
                                    <div className="flex flex-col items-center">
                                        <div className="flex items-center justify-center text-[#FF7A00] group-hover:border-[#FF7A00]/50 transition-all">
                                            <item.icon size={25} />
                                        </div>
                                        {idx !== timeline.length - 1 && <div className="w-px h-full bg-white/5 my-2"></div>}
                                    </div>
                                    <div>
                                        <h3 className="text-xs font-bold text-gray-300">{item.phase}</h3>
                                        <p className="text-[10px] text-gray-500 mt-1">{item.date}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Call for Papers Card */}
                    <div id='call' className="lg:col-span-3 bg-[#0D0D14] border border-white/5 rounded-[40px] p-8 flex flex-col justify-between relative overflow-hidden group/call">
                        <div className="absolute top-0 right-0 p-8 text-[#FF7A00] opacity-20 group-hover/call:rotate-12 transition-transform">
                            <FileText size={80} />
                        </div>

                        <div>
                            <div className="flex items-center gap-3 mb-6">
                                <div className="w-12 h-12 rounded-2xl bg-[#FF7A00]/10 flex items-center justify-center text-[#FF7A00]">
                                    <FileText size={24} />
                                </div>
                                <h2 className="text-xl font-bold">Call for Papers</h2>
                            </div>
                            <p className="text-xs text-gray-500 leading-relaxed">
                                We invite researchers, academicians and industry experts to submit their original research papers.
                            </p>
                        </div>

                        <div className="mt-8 space-y-6">
                            <div>
                                <span className="text-[10px] font-bold text-gray-600 uppercase tracking-widest block mb-3">Submission Deadline</span>
                                <div className="p-4 bg-white/5 border border-white/10 rounded-2xl flex items-center gap-3">
                                    <Calendar size={16} className="text-[#FF7A00]" />
                                    <span className="text-xs font-bold">15 May 2026</span>
                                </div>
                            </div>

                            <button className="w-full py-4 bg-gradient-to-r from-[#FF7A00] to-[#FF7A00] hover:from-[#FF7A00] hover:to-[#FF7A00] text-white font-bold rounded-2xl flex items-center justify-center gap-2 transition-all transform hover:scale-[1.02] shadow-lg shadow-[#FF7A00]/20 text-sm">
                                Submit Your Paper <ArrowRight size={16} />
                            </button>
                        </div>
                    </div>
                </div>

                {/* Testimonials Section */}
                <div className="bg-[#0D0D14] border border-white/5 rounded-[40px] p-12">
                    <div className="text-center mb-12">
                        <h2 className="text-2xl font-black mb-2">What People Say</h2>
                        <div className="w-12 h-1 bg-[#FF7A00] mx-auto rounded-full"></div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {testimonials.map((test, idx) => (
                            <div key={idx} className="bg-white/5 border border-white/10 rounded-3xl p-8 hover:bg-white/[0.07] transition-all group">
                                <div className="text-[#FF7A00] mb-6 group-hover:scale-110 transition-transform inline-block">
                                    <Star size={32} />
                                </div>
                                <p className="text-sm text-gray-400 leading-relaxed mb-8 italic">
                                    "{test.quote}"
                                </p>
                                <div className="flex items-center gap-4">
                                    <img src={test.image} alt={test.name} className="w-12 h-12 rounded-2xl object-cover border border-white/10" />
                                    <div>
                                        <h4 className="text-sm font-bold">{test.name}</h4>
                                        <p className="text-[10px] text-gray-500 font-medium">{test.role}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

            </div>
        </div>
    );
};

export default InternationalConference;