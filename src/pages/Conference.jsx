import React from 'react';
import { motion } from 'framer-motion';
import {
    Calendar, MapPin, Users, Award, Play, ChevronRight,
    CheckCircle2, ArrowRight, Search, Globe, Share2,
    Shield, Sparkles, Trophy, BookOpen, Mail, FileText, Lightbulb
} from 'lucide-react';

const Conference = () => {
    // Define features once
    const features = [
        {
            icon: Globe,
            title: "Global Exposure",
            desc: "Connect with experts and professionals from diverse countries."
        },
        {
            icon: Share2,
            title: "Knowledge Sharing",
            desc: "Exchange ideas, research, and innovations across different domains."
        },
        {
            icon: Lightbulb,
            title: "Collaboration",
            desc: "Build meaningful collaboration and future partnerships."
        },
        {
            icon: Users,
            title: "World-Class Speakers",
            desc: "Learn from internationally recognized speakers and thought leaders."
        },
        {
            icon: Award,
            title: "Recognition",
            desc: "Publish your research and gain international recognition."
        }
    ];

    const conferences = [
        {
            title: "International Conference on Artificial Intelligence & Data Science",
            date: "10 - 12 Sep 2025",
            location: "Singapore",
            tags: ["AI", "Data Science", "Deep Learning"],
            image: "https://as1.ftcdn.net/v2/jpg/08/95/10/54/1000_F_895105488_L9CYy44pCKJP5ufzihWMoOhlihDMfT5O.jpg"
        },
        {
            title: "International Conference on Sustainable Development Goals",
            date: "22 - 24 Oct 2025",
            location: "Amsterdam, Netherlands",
            tags: ["Sustainability", "Environment", "SDGs"],
            image: "https://media.istockphoto.com/id/1362339939/photo/deep-red-orange-sunset-behind-wind-turbines.jpg?s=170667a&w=0&k=20&c=2lSd-19OX8RXl-qb4JhqbFDsMkBAnUCNi6eyM8rfmv4="
        },
        {
            title: "International Conference on Biomedical Engineering",
            date: "18 - 20 Nov 2025",
            location: "Dubai, UAE",
            tags: ["Biomedical", "Healthcare", "Biotechnology"],
            image: "https://png.pngtree.com/thumb_back/fw800/background/20230526/pngtree-dna-strand-model-in-orange-light-against-black-background-image_2638294.jpg"
        },
        {
            title: "International Conference on Business & Management",
            date: "08 - 10 Dec 2025",
            location: "London, United Kingdom",
            tags: ["Business", "Management", "Leadership"],
            image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=800"
        }
    ];

    const timeline = [
        { phase: "Abstract Submission", date: "15 May - 15 June 2025" },
        { phase: "Notification of Acceptance", date: "30 June 2025" },
        { phase: "Early Bird Registration", date: "01 July - 31 July 2025" },
        { phase: "Final Registration", date: "01 Aug - 31 Aug 2025" },
        { phase: "Conference Dates", date: "10 - 12 Sep 2025" }
    ];

    const testimonials = [
        {
            quote: "The conference was incredibly organized and provided a great platform to share our research with a global audience.",
            name: "Dr. Emily Carter",
            role: "Research Scientist, Australia",
            image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=100&h=100"
        },
        {
            quote: "Excellent opportunity to network with experts and learn about the latest innovations in our field.",
            name: "Prof. Luis Martinez",
            role: "University of Madrid, Spain",
            image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=100&h=100"
        },
        {
            quote: "A truly international experience with diverse perspectives and high-quality presentations.",
            name: "Dr. Priya Sharma",
            role: "IIT Delhi, India",
            image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=100&h=100"
        }
    ];

    return (
        <div className="min-h-screen bg-[#0B0B0F] text-white font-sans selection:bg-[#FF7A00]/20 selection:text-[#FF7A00]">

            {/* Header Hero Section */}
            <div className="bg-[url('https://t4.ftcdn.net/jpg/08/45/01/87/360_F_845018709_n8XtZYzGo9Oac9jbV8PIvoJUL9ARoY3u.jpg')] bg-cover bg-center bg-no-repeat relative overflow-hidden pt-32 ">
                <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-[#FF7A00]/10 rounded-full blur-[160px] -z-10 translate-x-1/4 -translate-y-1/4"></div>
                <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-indigo-600/5 rounded-full blur-[120px] -z-10 -translate-x-1/4 translate-y-1/4"></div>

                <div className="max-w-7xl mx-auto px-6 flex flex-col lg:flex-row items-center justify-between gap-12">
                    <div className="max-w-2xl text-left">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                        >
                            <span className="px-4 py-1.5 bg-[#FF7A00]/10 text-[#FF7A00] text-xs font-bold rounded-full border border-[#FF7A00]/20 tracking-widest uppercase mb-6 inline-block">
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
                                <button className="px-7 py-4 bg-[#FF7A00] text-[#0B0B0F] font-black rounded-2xl hover:bg-[#FFA500] transition-all transform hover:scale-105 flex items-center gap-3 shadow-lg shadow-[#FF7A00]/10 text-sm">
                                    Explore Conferences <ArrowRight size={18} />
                                </button>
                                <button className="px-7 py-4 bg-[#16181D] border border-white/10 text-white font-bold rounded-2xl hover:bg-white/5 transition-all flex items-center gap-3 text-sm">
                                    Submit Your Paper <FileText size={16} />
                                </button>
                            </div>
                        </motion.div>
                    </div>

                </div>

                <div className="w-full bg-[#0D0E14] border-y border-white/5 py-12 px-6 mt-16">
                    <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-5 gap-8">
                        {features.map((feat, idx) => (
                            <div key={idx} className="relative flex items-center gap-4 py-4">
                                {/* Center Vertical Line */}
                                <div className="absolute left-6 top-0 bottom-0 w-[1px] bg-white/10 -z-10" />

                                <div className="relative">
                                    <div className="flex items-center gap-4">
                                        {/* Added background color (e.g., bg-neutral-900) to hide the line behind the icon */}
                                        <div className="w-12 h-12 bg-neutral-900 border border-white/10 rounded-2xl flex items-center justify-center text-[#FF7A00] shadow-lg hover:border-[#FF7A00]/30 transition-all z-10">
                                            <feat.icon size={20} />
                                        </div>
                                    </div>
                                </div>
                                <div className='h-full w-0.5 bg-white'></div>
                                <div className="">
                                    <h3 className="font-bold text-sm text-white">{feat.title}</h3>
                                    <p className="text-[10px] text-gray-500">{feat.desc}</p>
                                </div>
                            </div>))}
                    </div>
                </div>
            </div>

            {/* Upcoming Conferences Section */}
            <section className="py-20 px-6 bg-white/[0.02]">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-black mb-4">Upcoming International Conferences</h2>
                        <p className="text-gray-400">Join researchers and experts in upcoming sessions.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {conferences.map((conf, idx) => (
                            <div key={idx} className="bg-[#16181D] border border-white/5 rounded-3xl overflow-hidden hover:border-[#FF7A00]/30 transition-all group flex flex-col justify-between">
                                <div>
                                    <div className="h-48 overflow-hidden relative">
                                        <img src={conf.image} alt={conf.title} className="w-full h-full object-cover group-hover:scale-105 transition-all duration-500" />
                                        <div className="absolute inset-0 bg-gradient-to-t from-[#16181D] to-transparent opacity-80" />
                                        <div className="absolute bottom-4 left-4 flex gap-2">
                                            <div className="flex items-center gap-1.5 px-3 py-1 bg-black/40 backdrop-blur-md rounded-lg text-xs font-medium text-[#FF7A00]">
                                                <Calendar size={14} /> {conf.date}
                                            </div>
                                        </div>
                                    </div>
                                    <div className="p-6">
                                        <div className="flex items-center gap-2 text-xs text-gray-500 font-semibold mb-3">
                                            <MapPin size={14} className="text-[#FF7A00]" /> {conf.location}
                                        </div>
                                        <h3 className="text-lg font-bold leading-snug mb-3 group-hover:text-gray-200 duration-200">{conf.title}</h3>
                                        <div className="flex flex-wrap gap-2 mb-2">
                                            {conf.tags.map((tag, tIdx) => (
                                                <span key={tIdx} className="text-[10px] px-2.5 py-1 bg-white/5 rounded-md font-semibold tracking-wide uppercase text-gray-400 border border-white/5">{tag}</span>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                                <div className="p-6 pt-0 border-t border-white/5 mt-1">
                                    <button className="w-full py-3 bg-white/5 hover:bg-[#FF7A00] hover:text-[#0B0B0F] font-bold text-sm rounded-xl transition-all flex items-center justify-center gap-2">
                                        View Details <ChevronRight size={16} />
                                    </button>
                                </div>
                            </div>

                        ))}
                        {/* view all conferences button */}
                        <div className="col-span-full">
                            <div className="flex justify-center mt-3">
                                <button className="px-3 py-2 bg-white/5 hover:bg-[#FF7A00] hover:text-[#0B0B0F] font-bold text-sm rounded-xl transition-all flex items-center justify-center gap-2">
                                    View All Conferences <ChevronRight size={16} />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* General Stats Section */}
            <section className="py-16 px-6 border-y border-white/5 bg-[#0D0D12]">
                <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-5 gap-8 text-center">
                    <div><h4 className="text-4xl font-black text-[#FF7A00] mb-2">30+</h4><p className="text-xs text-gray-500 font-bold uppercase tracking-wider">Countries</p></div>
                    <div><h4 className="text-4xl font-black text-[#FF7A00] mb-2">2000+</h4><p className="text-xs text-gray-500 font-bold uppercase tracking-wider">Participants</p></div>
                    <div><h4 className="text-4xl font-black text-[#FF7A00] mb-2">250+</h4><p className="text-xs text-gray-500 font-bold uppercase tracking-wider">Expert Speakers</p></div>
                    <div><h4 className="text-4xl font-black text-[#FF7A00] mb-2">150+</h4><p className="text-xs text-gray-500 font-bold uppercase tracking-wider">Institutions</p></div>
                    <div><h4 className="text-4xl font-black text-[#FF7A00] mb-2">98%</h4><p className="text-xs text-gray-500 font-bold uppercase tracking-wider">Satisfaction Rate</p></div>
                </div>
            </section>

<section className="py-12 px-6 bg-[#0A0A0C]">
            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8">
                
                {/* Column 1: Conference Timeline */}
                <div className="p-8 bg-[#121214] border border-white/5 rounded-3xl flex flex-col justify-start">
                    <h2 className="text-2xl font-black mb-8 text-white">Conference Timeline</h2>
                    <div className="relative border-l border-white/10 pl-8 ml-2 space-y-8">
                        {timeline?.map((item, idx) => (
                            <div key={idx} className="relative">
                                <div className="absolute -left-[41px] top-1 w-5 h-5 rounded-full bg-[#121214] border-4 border-[#FF7A00]" />
                                <span className="text-xs text-[#FF7A00] font-bold tracking-wider uppercase">{item.date}</span>
                                <h3 className="text-lg font-bold text-white mt-1">{item.phase}</h3>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Column 2: What People Say */}
                <div className="p-8 bg-[#121214] border border-white/5 rounded-3xl flex flex-col justify-start">
                    <h2 className="text-2xl font-black mb-8 text-white">What People Say</h2>
                    <div className="flex flex-col gap-6">
                        {testimonials?.map((testimony, idx) => (
                            <div key={idx} className="p-6 bg-[#0B0B0F] border border-white/5 rounded-2xl flex flex-col justify-between">
                                <div>
                                    <div className="text-[#FF7A00] mb-4 text-3xl">"</div>
                                    <p className="text-gray-400 text-sm leading-relaxed mb-6">{testimony.quote}</p>
                                </div>
                                <div className="flex items-center gap-4">
                                    <img 
                                        src={testimony.image} 
                                        alt={testimony.name} 
                                        className="w-10 h-10 rounded-xl object-cover border border-white/10" 
                                    />
                                    <div>
                                        <h4 className="text-sm font-bold text-white mb-0.5">{testimony.name}</h4>
                                        <p className="text-xs text-gray-500 font-medium">{testimony.role}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Column 3: Call for Papers */}
                <div className="p-8 bg-[#121214] border border-white/5 rounded-3xl flex flex-col ">
                    <div>
                        <div className="inline-flex p-4 bg-white/5 border border-white/10 rounded-2xl mb-6 text-[#FF7A00]">
                            <BookOpen size={32} />
                        </div>
                        <h2 className="text-2xl font-black mb-4 text-white">Call for Papers</h2>
                        <p className="text-gray-400 text-sm leading-relaxed mb-8">
                            We invite researchers, academicians and industry experts to submit their original research papers.
                        </p>
                    </div>

                    <div>
                        <span className="text-xs font-bold uppercase tracking-wider text-white/60 mb-3 block">Submission Deadline</span>
                        <div className="p-4 bg-[#0B0B0F] border border-[#FF7A00] rounded-2xl flex items-center justify-between mb-8">
                            <div className="flex items-center gap-3 text-sm text-white font-bold">
                                <Calendar size={18} className="text-[#FF7A00]" />
                                <span>15 August 2025</span>
                            </div>
                        </div>

                        <button className="w-full py-4 bg-[#FF7A00] text-white font-bold rounded-2xl hover:bg-[#FF7A00]/90 hover:scale-[1.02] transition-all flex items-center justify-center gap-2 text-sm shadow-2xl">
                            Submit Your Paper <ArrowRight size={16} />
                        </button>
                    </div>
                </div>

            </div>
        </section>        </div>
    );
};

export default Conference;
