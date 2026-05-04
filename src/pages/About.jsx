import React from 'react';
import { motion } from 'framer-motion';
import { Target, Eye, Heart, Shield, Zap, Award } from 'lucide-react';

const About = () => {
  return (
    <div className="flex-1 bg-white">
      {/* About Hero */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-5xl md:text-6xl font-black text-gray-900 mb-8">Our Mission & Vision</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              At UPZY PencilBitz, we believe that education is the most powerful tool for 
              transforming lives. Our mission is to provide world-class learning 
              experiences that are accessible to everyone, everywhere.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12 text-center">
            {[
              { label: "Students", val: "50k+" },
              { label: "Courses", val: "1.2k+" },
              { label: "Instructors", val: "150+" },
              { label: "Countries", val: "80+" }
            ].map((stat, i) => (
              <div key={i}>
                <h3 className="text-4xl font-black text-indigo-600 mb-2">{stat.val}</h3>
                <p className="text-sm font-bold text-gray-400 uppercase tracking-widest">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-24 bg-gray-900 text-white overflow-hidden relative">
        <div className="absolute top-0 left-0 w-full h-full bg-indigo-600/5 -z-10"></div>
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Core Values</h2>
            <p className="text-gray-400">The principles that drive everything we do.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: "Innovation", desc: "We constantly push boundaries to create better learning tools.", icon: Zap },
              { title: "Integrity", desc: "Trust is the foundation of our community and our platform.", icon: Shield },
              { title: "Impact", desc: "We measure our success by the success of our students.", icon: Target }
            ].map((value, i) => (
              <div key={i} className="p-10 bg-white/5 border border-white/10 rounded-[2rem] hover:bg-white/10 transition-all">
                <div className="w-14 h-14 bg-indigo-500 rounded-2xl flex items-center justify-center mb-6">
                  <value.icon size={28} />
                </div>
                <h3 className="text-2xl font-bold mb-4">{value.title}</h3>
                <p className="text-gray-400 leading-relaxed">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Meet the Team</h2>
            <p className="text-gray-600">The passionate experts behind UPZY PencilBitz.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            {[1, 2, 3, 4].map(i => (
              <div key={i} className="group">
                <div className="w-48 h-48 rounded-full overflow-hidden mx-auto mb-6 border-4 border-gray-50 group-hover:border-indigo-100 transition-all">
                  <img src={`https://i.pravatar.cc/150?u=${i+10}`} alt="Team Member" className="w-full h-full object-cover" />
                </div>
                <h3 className="text-xl font-bold text-gray-900">Team Member {i}</h3>
                <p className="text-sm font-semibold text-indigo-600">Lead Instructor</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
