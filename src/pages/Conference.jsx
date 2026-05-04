import React from 'react';
import { motion } from 'framer-motion';
import { 
    Calendar, MapPin, Users, Award, Play, ChevronRight, 
    CheckCircle2, ArrowRight, Search, Globe, Share2, 
    Shield, Sparkles, Trophy, BookOpen, Mail 
} from 'lucide-react';

const Conference = () => {
    const conferences = [
        {
            title: "International Conference on Artificial Intelligence & Data Science",
            date: "10 - 12 Sep 2025",
            location: "Singapore",
            tags: ["AI", "Data Science", "Deep Learning"],
            image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&q=80&w=800"
        },
        {
            title: "International Conference on Sustainable Development Goals",
            date: "22 - 24 Oct 2025",
            location: "Amsterdam, Netherlands",
            tags: ["Sustainability", "Environment", "SDGs"],
            image: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&q=80&w=800"
        },
        {
            title: "International Conference on Biomedical Engineering",
            date: "18 - 20 Nov 2025",
            location: "Dubai, UAE",
            tags: ["Biomedical", "Healthcare", "Biotechnology"],
            image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80&w=800"
        },
        {
            title: "International Conference on Business & Management",
            date: "08 - 10 Dec 2025",
            location: "London, United Kingdom",
            tags: ["Business", "Management", "Leadership"],
            image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=800"
        }
    ];

    const features = [
        { icon: Globe, title: "Global Exposure", desc: "Connect with experts and professionals from diverse countries." },
        { icon: Share2, title: "Knowledge Sharing", desc: "Exchange ideas, research, and innovations across different domains." },
        { icon: Sparkles, title: "Collaboration", desc: "Build meaningful collaboration and future partnerships." },
        { icon: Shield, title: "World-Class Speakers", desc: "Learn from internationally recognized speakers and thought leaders." },
        { icon: Trophy, title: "Recognition", desc: "Publish your research and gain international recognition." }
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
            {/* Hero Section */}
            <section className="relative pt-40 pb-24 px-6 overflow-hidden">
                <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-indigo-600/10 rounded-full blur-[120px] -z-10"></div>
                <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-[#FF7A00]/10 rounded-full blur-[120px] -z-10"></div>

                <div className="max-w-7xl mx-auto text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <span className="px-4 py-1.5 bg-[#FF7A00]/10 text-[#FF7A00] text-xs font-bold rounded-full border border-[#FF7A00]/20 tracking-widest uppercase mb-6 inline-block">
                            International Conferences
                        </span>
                        <h1 className="text-5xl md:text-7xl font-black mb-8 leading-tight">
                            Global Ideas. <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF7A00] to-[#FFA500]">
                                Stronger Together.
                            </span>
                        </h1>
                        <p className="text-xl text-gray-400 max-w-3xl mx-auto mb-12 leading-relaxed">
                            Explore, collaborate, and exchange knowledge with researchers, innovators, 
                            and industry leaders from around the world at our International Conferences.
                        </p>

                        <div className="flex flex-wrap justify-center gap-4">
                            <button className="px-8 py-4 bg-[#FF7A00] text-[#0B0B0F] font-black rounded-2xl hover:bg-[#FFA500] transition-all transform hover:scale-105 flex items-center gap-2 shadow-lg shadow-[#FF7A00]/10">
                                Explore Conferences <ArrowRight size={20} />
                            </button>
                            <button className="px-8 py-4 bg-white/5 border border-white/10 text-white font-bold rounded-2xl hover:bg-white/10 transition-all flex items-center gap-2">
                                Submit Your Paper
                            </button>
                        </div>
                    </motion.div>

                    {/* Features List */}
                    <div className="grid grid-cols-2 md:grid-cols-5 gap-8 mt-24 border-t border-white/5 pt-16">
                        {features.map((feat, idx) => (
                            <div key={idx} className="flex flex-col items-center text-center">
                                <div className="w-14 h-14 bg-white/5 border border-white/10 rounded-2xl flex items-center justify-center text-[#FF7A00] mb-4">
                                    <feat.icon size={24} />
                                </div>
                                <h3 className="font-bold text-white mb-2">{feat.title}</h3>
                                <p className="text-xs text-gray-500 max-w-[200px]">{feat.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Upcoming Conferences Section */}
            <section className="py-24 px-6 bg-white/[0.02]">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-black mb-4">Upcoming International Conferences</h2>
                        <p className="text-gray-400">Join researchers and experts in upcoming sessions.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {conferences.map((conf, idx) => (
                            <div 
                                key={idx}
                                className="bg-[#16181D] border border-white/5 rounded-3xl overflow-hidden hover:border-[#FF7A00]/30 transition-all group flex flex-col justify-between"
                            >
                                <div>
                                    <div className="h-48 overflow-hidden relative">
                                        <img 
                                            src={conf.image} 
                                            alt={conf.title}
                                            className="w-full h-full object-cover group-hover:scale-105 transition-all duration-500"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-[#16181D] to-transparent opacity-80" />
                                        <div className="absolute bottom-4 left-4 flex gap-2">
                                            <div className="flex items-center gap-1.5 px-3 py-1 bg-black/40 backdrop-blur-md rounded-lg text-xs font-medium text-[#FF7A00]">
                                                <Calendar size={14} /> {conf.date}
                                            </div>
                                        </div>
                                    </div>

                                    <div className="p-6">
                                        <div className="flex items-center gap-2 text-xs text-gray-500 font-semibold mb-3">
                                            <MapPin size={14} className="text-[#FF7A00]" />
                                            {conf.location}
                                        </div>
                                        <h3 className="text-lg font-bold leading-snug mb-4 group-hover:text-gray-200 duration-200">
                                            {conf.title}
                                        </h3>
                                        <div className="flex flex-wrap gap-2 mb-2">
                                            {conf.tags.map((tag, tIdx) => (
                                                <span 
                                                    key={tIdx}
                                                    className="text-[10px] px-2.5 py-1 bg-white/5 rounded-md font-semibold tracking-wide uppercase text-gray-400 border border-white/5"
                                                >
                                                    {tag}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                                <div className="p-6 pt-0 border-t border-white/5 mt-4">
                                    <button className="w-full py-3 bg-white/5 hover:bg-[#FF7A00] hover:text-[#0B0B0F] font-bold text-sm rounded-xl transition-all flex items-center justify-center gap-2">
                                        View Details <ChevronRight size={16} />
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                    
                    <div className="flex justify-center mt-12">
                        <button className="px-6 py-3 bg-white/5 border border-white/10 hover:bg-white/10 rounded-2xl font-bold flex items-center gap-2">
                            View All Conferences <ArrowRight size={18} />
                        </button>
                    </div>
                </div>
            </section>

            {/* General Stats Section */}
            <section className="py-16 px-6 border-y border-white/5 bg-[#0D0D12]">
                <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-5 gap-8 text-center">
                    <div>
                        <h4 className="text-4xl font-black text-[#FF7A00] mb-2">30+</h4>
                        <p className="text-xs text-gray-500 font-bold uppercase tracking-wider">Countries</p>
                    </div>
                    <div>
                        <h4 className="text-4xl font-black text-[#FF7A00] mb-2">2000+</h4>
                        <p className="text-xs text-gray-500 font-bold uppercase tracking-wider">Participants</p>
                    </div>
                    <div>
                        <h4 className="text-4xl font-black text-[#FF7A00] mb-2">250+</h4>
                        <p className="text-xs text-gray-500 font-bold uppercase tracking-wider">Expert Speakers</p>
                    </div>
                    <div>
                        <h4 className="text-4xl font-black text-[#FF7A00] mb-2">150+</h4>
                        <p className="text-xs text-gray-500 font-bold uppercase tracking-wider">Institutions</p>
                    </div>
                    <div className="col-span-2 md:col-span-1">
                        <h4 className="text-4xl font-black text-[#FF7A00] mb-2">98%</h4>
                        <p className="text-xs text-gray-500 font-bold uppercase tracking-wider">Satisfaction Rate</p>
                    </div>
                </div>
            </section>

            {/* Timeline and Testimonial Section */}
            <section className="py-24 px-6">
                <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-16">
                    {/* Timeline */}
                    <div>
                        <h2 className="text-3xl font-black mb-10">Conference Timeline</h2>
                        <div className="relative border-l border-white/10 pl-8 ml-2 space-y-8">
                            {timeline.map((item, idx) => (
                                <div key={idx} className="relative">
                                    <div className="absolute -left-[41px] top-1 w-5 h-5 rounded-full bg-[#0B0B0F] border-4 border-[#FF7A00]" />
                                    <span className="text-xs text-[#FF7A00] font-bold tracking-wider uppercase">
                                        {item.date}
                                    </span>
                                    <h3 className="text-lg font-bold text-white mt-1">
                                        {item.phase}
                                    </h3>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Testimonials */}
                    <div className="lg:col-span-2">
                        <h2 className="text-3xl font-black mb-10">What People Say</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {testimonials.map((testimony, idx) => (
                                <div key={idx} className="p-8 bg-[#16181D] border border-white/5 rounded-3xl flex flex-col justify-between">
                                    <div>
                                        <div className="text-[#FF7A00] mb-6">"</div>
                                        <p className="text-gray-400 text-sm leading-relaxed mb-8">
                                            {testimony.quote}
                                        </p>
                                    </div>
                                    <div className="flex items-center gap-4">
                                        <img 
                                            src={testimony.image} 
                                            alt={testimony.name} 
                                            className="w-12 h-12 rounded-2xl object-cover border border-white/10" 
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
                </div>
            </section>

            {/* Call for Papers Section */}
            <section className="py-24 px-6 bg-[#0E0E14]">
                <div className="max-w-7xl mx-auto bg-gradient-to-br from-[#FF7A00] to-[#FF8C00] rounded-[3rem] p-12 md:p-20 text-center relative overflow-hidden text-black">
                    <div className="absolute top-0 right-0 w-80 h-80 bg-white/20 rounded-full blur-3xl -mr-20 -mt-20"></div>
                    <div className="max-w-2xl mx-auto relative z-10">
                        <div className="inline-flex p-4 bg-black/10 rounded-2xl mb-6">
                            <BookOpen size={32} className="text-black" />
                        </div>
                        <h2 className="text-4xl md:text-5xl font-black mb-6 tracking-tight text-white">Call for Papers</h2>
                        <p className="text-black/80 font-medium mb-10 text-lg leading-relaxed max-w-lg mx-auto">
                            We invite researchers, academicians, and industry experts to submit their original research papers.
                        </p>
                        <div className="p-6 bg-black text-white/80 rounded-2xl flex items-center justify-between max-w-md mx-auto mb-8 border border-white/10">
                            <div className="flex items-center gap-3 text-sm">
                                <Calendar size={18} className="text-[#FF7A00]" />
                                <span>Submission Deadline: <strong>15 August 2025</strong></span>
                            </div>
                        </div>
                        <button className="px-10 py-5 bg-black text-white font-black rounded-2xl hover:bg-neutral-900 hover:scale-105 transition-all shadow-2xl flex items-center gap-3 mx-auto text-sm">
                            Submit Your Paper <ArrowRight size={18} />
                        </button>
                    </div>
                </div>
            </section>

           
        </div>
    );
};

export default Conference;