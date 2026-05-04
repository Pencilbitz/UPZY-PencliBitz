import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, BookOpen, Users, Star, Play } from 'lucide-react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="flex-1 bg-white">
      {/* Hero Section */}
      <section className="relative pt-20 pb-32 overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-indigo-50/50 -skew-x-12 transform origin-right -z-10"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <span className="inline-block px-4 py-1.5 bg-indigo-50 text-indigo-600 text-sm font-bold rounded-full mb-6">
                Next Generation Learning
              </span>
              <h1 className="text-5xl md:text-6xl font-black text-gray-900 leading-tight mb-8">
                Master New Skills with <span className="text-indigo-600">UPZY PencilBitz</span>
              </h1>
              <p className="text-xl text-gray-600 mb-10 leading-relaxed">
                Join our community of over 50,000 learners and get access to high-quality 
                courses designed by industry experts.
              </p>
              
              <div className="flex flex-wrap gap-4">
                <button className="px-8 py-4 bg-indigo-600 text-white font-bold rounded-2xl hover:bg-indigo-700 transition-all shadow-lg shadow-indigo-200 flex items-center gap-2">
                  Get Started Free <ArrowRight size={20} />
                </button>
                <Link to="/conference" className="px-8 py-4 bg-white border border-gray-200 text-gray-700 font-bold rounded-2xl hover:bg-gray-50 transition-all flex items-center gap-2">
                  View Conference
                </Link>
              </div>
              
              <div className="mt-12 flex items-center gap-6">
                <div className="flex -space-x-4">
                  {[1, 2, 3, 4].map(i => (
                    <div key={i} className="w-12 h-12 rounded-full border-4 border-white bg-gray-200 overflow-hidden">
                      <img src={`https://i.pravatar.cc/150?u=${i}`} alt="User" />
                    </div>
                  ))}
                </div>
                <div>
                  <div className="flex items-center gap-1 text-yellow-400">
                    <Star size={16} fill="currentColor" />
                    <Star size={16} fill="currentColor" />
                    <Star size={16} fill="currentColor" />
                    <Star size={16} fill="currentColor" />
                    <Star size={16} fill="currentColor" />
                  </div>
                  <p className="text-sm font-bold text-gray-900 mt-1">4.9/5 from 2k+ reviews</p>
                </div>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="relative z-10 rounded-[2.5rem] overflow-hidden shadow-2xl border-8 border-white">
                <img 
                  src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=1200" 
                  alt="Students Learning" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-indigo-900/10"></div>
                <button className="absolute inset-0 m-auto w-20 h-20 bg-white rounded-full flex items-center justify-center shadow-2xl hover:scale-110 transition-transform group">
                  <Play size={32} className="text-indigo-600 ml-1 group-hover:scale-110 transition-transform" />
                </button>
              </div>
              
              {/* Floating Cards */}
              <div className="absolute -bottom-10 -left-10 bg-white p-6 rounded-3xl shadow-xl border border-gray-100 z-20 hidden md:block">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-emerald-50 rounded-2xl flex items-center justify-center text-emerald-600">
                    <Users size={24} />
                  </div>
                  <div>
                    <p className="text-2xl font-black text-gray-900">12k+</p>
                    <p className="text-xs font-bold text-gray-400 uppercase tracking-wider">Active Students</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-black text-gray-900 mb-4">Why Choose PencilBitz?</h2>
            <p className="text-xl text-gray-600">The most advanced platform for digital education.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: "Expert Instructors", desc: "Learn from industry professionals with years of experience.", icon: Star, color: "text-yellow-600", bg: "bg-yellow-50" },
              { title: "Global Community", desc: "Connect with students from over 150 countries around the world.", icon: Users, color: "text-indigo-600", bg: "bg-indigo-50" },
              { title: "Lifetime Access", desc: "Once you enroll, you have access to course materials forever.", icon: BookOpen, color: "text-emerald-600", bg: "bg-emerald-50" }
            ].map((feature, i) => (
              <div key={i} className="bg-white p-10 rounded-[2rem] border border-gray-100 hover:shadow-xl transition-all group hover:-translate-y-2">
                <div className={`w-14 h-14 ${feature.bg} ${feature.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                  <feature.icon size={28} />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
