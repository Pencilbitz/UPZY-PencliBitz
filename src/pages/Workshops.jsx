import React, { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import { 
  Calendar, MapPin, ExternalLink, ArrowRight, Sparkles, Users, Star, 
  MessageSquare, Building2, Eye, Award, CheckCircle 
} from 'lucide-react';
import { useWorkshops } from '../context/WorkshopContext';
import { Link } from 'react-router-dom';

const Workshops = () => {
  const { getPublished } = useWorkshops();
  const published = getPublished();

  // Mocking additional data for visual enhancement
  const recentComments = [
    {
      id: 1,
      name: "Dr. Rohit Sharma",
      role: "Professor, IIT Delhi",
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=100",
      comment: "The hands-on session on Machine Learning was fantastic. Students were highly engaged and gained practical insights.",
      rating: 5,
      college: "IIT Delhi"
    },
    {
      id: 2,
      name: "Priya Varma",
      role: "Tech Lead, EduTech",
      avatar: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&q=80&w=100",
      comment: "Incredible exposure to global AI trends. The Q&A session with industry experts was an eye-opener.",
      rating: 4.8,
      college: "MIT College"
    }
  ];

  const popularColleges = [
    { name: "IIT Delhi", visits: "2,500+ Visits", rating: 4.9, logo: "🏛️" },
    { name: "Anna University", visits: "1,800+ Visits", rating: 4.7, logo: "🎓" },
    { name: "NIT Trichy", visits: "1,400+ Visits", rating: 4.6, logo: "🏫" },
  ];

  // Group workshops by this month vs upcoming
  const { thisMonthWorkshops, upcomingWorkshops } = useMemo(() => {
    const now = new Date();
    
    const thisMonth = published.filter(ws => {
      const wsDate = new Date(ws.date);
      return wsDate.getMonth() === now.getMonth() && wsDate.getFullYear() === now.getFullYear();
    });

    const upcoming = published.filter(ws => {
      const wsDate = new Date(ws.date);
      return wsDate >= now;
    });

    return { thisMonthWorkshops: thisMonth, upcomingWorkshops: upcoming };
  }, [published]);

  return (
    <div className="min-h-screen bg-[#0B0B0F] pt-40 pb-20">
      
      {/* Hero Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 mb-16">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-[#FF7A00]/10 text-[#FF7A00] text-xs font-black uppercase tracking-widest rounded-full mb-6">
            <Sparkles size={12} /> Upcoming Workshops & Events
          </span>
          <h1 className="text-4xl md:text-5xl font-black text-white mb-4">
            Learn From <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF7A00] to-[#FF5500]">Industry Experts</span>
          </h1>
          <p className="text-gray-500 text-lg max-w-2xl mx-auto font-medium">
            Join our hands-on workshops designed to elevate your skills and connect you with global professionals.
          </p>
        </motion.div>
      </div>

      {/* Main Layout Grid: Workshops and Statistics */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 grid grid-cols-1 lg:grid-cols-4 gap-12">
        
        {/* Left Side Workshop Lists (Span 3 Columns) */}
        <div className="lg:col-span-3 space-y-20">

          {/* This Month's Workshops */}
          <div>
            <div className="flex items-center justify-between mb-8">
              <div>
                <span className="text-[10px] text-[#FF7A00] font-bold tracking-widest uppercase">This Month's Focus</span>
                <h2 className="text-2xl font-black text-white">Workshops in May 2026</h2>
              </div>
              <div className="flex items-center gap-2 text-xs text-gray-500">
                <span className="w-2 h-2 rounded-full bg-[#FF7A00] animate-pulse"></span>
                <span>Active registrations</span>
              </div>
            </div>

            {thisMonthWorkshops.length === 0 ? (
              <div className="p-8 border border-white/5 rounded-[2rem] bg-[#16181D] text-center">
                <p className="text-sm text-gray-500">No workshops scheduled for this month. Check out the upcoming list below.</p>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
                {thisMonthWorkshops.map((ws, i) => (
                  <WorkshopCard key={ws.id || i} ws={ws} i={i} />
                ))}
              </div>
            )}
          </div>

          {/* All Upcoming Workshops */}
          <div>
            <div className="mb-8">
              <span className="text-[10px] text-purple-500 font-bold tracking-widest uppercase">Explore All</span>
              <h2 className="text-2xl font-black text-white">All Scheduled Workshops</h2>
            </div>

            {upcomingWorkshops.length === 0 ? (
              <div className="text-center py-24 border border-white/5 rounded-[2rem] bg-[#16181D]">
                <div className="w-24 h-24 bg-white/5 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Users size={40} className="text-gray-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-400 mb-2">No Workshops Available Yet</h3>
                <p className="text-sm text-gray-600 mb-8">Check back soon for upcoming workshops and events.</p>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
                {upcomingWorkshops.map((ws, i) => (
                  <WorkshopCard key={ws.id || i} ws={ws} i={i} />
                ))}
              </div>
            )}
          </div>

          {/* Recent Comments Section */}
          <section className="border-t border-white/5 pt-16">
            <h2 className="text-2xl font-black text-white mb-8 flex items-center gap-3">
              <MessageSquare className="text-[#FF7A00]" /> Recent Feedback & Comments
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {recentComments.map((rev) => (
                <div key={rev.id} className="p-6 bg-[#16181D] border border-white/5 rounded-3xl flex flex-col justify-between">
                  <div>
                    <div className="flex items-center gap-2 mb-4">
                      {Array.from({ length: Math.floor(rev.rating) }).map((_, idx) => (
                        <Star key={idx} size={14} className="fill-[#FF7A00] text-[#FF7A00]" />
                      ))}
                      <span className="text-xs text-gray-400 ml-1">({rev.rating}/5)</span>
                    </div>
                    <p className="text-sm text-gray-400 leading-relaxed italic mb-6">"{rev.comment}"</p>
                  </div>
                  <div className="flex items-center gap-4 border-t border-white/5 pt-4">
                    <img src={rev.avatar} alt={rev.name} className="w-10 h-10 rounded-2xl object-cover border border-white/10" />
                    <div>
                      <h4 className="text-sm font-bold text-white mb-0.5">{rev.name}</h4>
                      <p className="text-[10px] text-gray-500 font-medium">
                        {rev.role} • <span className="text-[#FF7A00]">{rev.college}</span>
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>

        {/* Right Sidebar: Additional Information (1 Column) */}
        <div className="space-y-8">
          {/* Most Active Colleges Section */}
          <div className="p-6 bg-[#16181D] border border-white/5 rounded-[2rem]">
            <h3 className="text-sm font-black text-white mb-6 flex items-center gap-2">
              <Building2 size={16} className="text-[#FF7A00]" /> Top Participating Colleges
            </h3>
            <div className="space-y-4">
              {popularColleges.map((col, idx) => (
                <div key={idx} className="flex items-center justify-between p-3 bg-white/5 rounded-2xl hover:bg-[#FF7A00]/5 transition-all">
                  <div className="flex items-center gap-3">
                    <span className="text-xl">{col.logo}</span>
                    <div>
                      <h4 className="text-xs font-bold text-white">{col.name}</h4>
                      <p className="text-[10px] text-gray-500 flex items-center gap-1">
                        <Eye size={10} /> {col.visits}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-1 text-yellow-400 text-xs font-bold">
                    <Star size={12} className="fill-yellow-400" /> <span>{col.rating}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Institutional Collaboration */}
          <div className="p-6 bg-[#16181D] border border-white/5 rounded-[2rem] text-center">
            <div className="w-12 h-12 bg-purple-500/10 rounded-2xl flex items-center justify-center text-purple-400 mx-auto mb-5">
              <Award size={24} />
            </div>
            <h3 className="text-sm font-black text-white mb-2">Collaborate With UpzyPencilBitz</h3>
            <p className="text-xs text-gray-500 leading-relaxed mb-6">
              Empower your students by hosting or co-hosting specialized global tech and engineering workshops.
            </p>
            <Link to="/contact" className="w-full py-3 bg-gradient-to-r from-purple-500 to-indigo-600 text-white text-xs font-black rounded-xl hover:scale-[1.02] transition-all flex items-center justify-center gap-2 shadow-xl">
              Collaborate <ArrowRight size={14} />
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
};

/* Mini Component for Workshop Cards with Link to Detail Page */
const WorkshopCard = ({ ws, i }) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 30 }} 
      animate={{ opacity: 1, y: 0 }} 
      transition={{ delay: i * 0.1 }}
      className="bg-[#16181D] border border-white/5 rounded-[2rem] overflow-hidden group hover:border-[#FF7A00]/20 transition-all hover:-translate-y-1 duration-300 flex flex-col justify-between"
    >
      {/* Card Header Image */}
      <div className="h-48 bg-[#0B0B0F] relative overflow-hidden">
        {ws.image ? (
          <img src={ws.image} alt={ws.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
        ) : (
          <div className="w-full h-full bg-gradient-to-br from-[#FF7A00]/10 to-purple-500/10 flex items-center justify-center">
            <Sparkles size={40} className="text-[#FF7A00]/30" />
          </div>
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-[#16181D] via-transparent to-transparent"></div>
        <div className="absolute bottom-4 left-4">
          <span className="px-3 py-1 bg-[#FF7A00] text-[#0B0B0F] rounded-full text-[10px] font-black uppercase tracking-wider">
            Workshop
          </span>
        </div>
      </div>
      
      {/* Card Content Section */}
      <div className="p-6 flex flex-col flex-grow justify-between">
        <div>
          <h3 className="text-lg font-black text-white mb-3 group-hover:text-[#FF7A00] transition-colors line-clamp-2">
            {ws.title}
          </h3>
          <div className="space-y-2.5 mb-5">
            <div className="flex items-center gap-3">
              <div className="w-7 h-7 bg-[#FF7A00]/10 rounded-lg flex items-center justify-center">
                <Calendar size={13} className="text-[#FF7A00]" />
              </div>
              <span className="text-xs text-gray-400 font-medium">
                {new Date(ws.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
              </span>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-7 h-7 bg-purple-500/10 rounded-lg flex items-center justify-center">
                <MapPin size={13} className="text-purple-400" />
              </div>
              <span className="text-xs text-gray-400 font-medium truncate">{ws.location}</span>
            </div>
          </div>
          {ws.description && (
            <p className="text-xs text-gray-500 mb-6 line-clamp-2 leading-relaxed">{ws.description}</p>
          )}
        </div>

        {/* Action Button */}
        <div>
          {ws.googleFormLink ? (
            <a 
              href={ws.googleFormLink} 
              target="_blank" 
              rel="noreferrer"
              className="w-full py-3 bg-gradient-to-r from-[#FF7A00] to-[#FF5500] text-white font-black rounded-xl text-xs flex items-center justify-center gap-2 hover:shadow-lg hover:shadow-[#FF7A00]/20 transition-all group/btn mb-3"
            >
              Register Now <ExternalLink size={12} className="group-hover/btn:translate-x-1 transition-transform" />
            </a>
          ) : (
            <div className="w-full py-3 bg-white/5 text-gray-500 font-bold rounded-xl text-xs text-center mb-3">
              Registration Coming Soon
            </div>
          )}
          
          {/* Click to Brief Detail Page Link */}
          <Link to={`/workshops/${ws.id || 'detail'}`} className="w-full py-2.5 border border-white/5 text-gray-400 hover:text-white rounded-xl text-[11px] font-bold text-center block transition-all hover:bg-white/5">
            Brief Explain & Contacts <ArrowRight size={12} className="inline ml-1" />
          </Link>
        </div>
      </div>
    </motion.div>
  );
};

export default Workshops;