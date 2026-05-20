import React, { useState } from "react";
import { motion } from "framer-motion";
import logo from "../assets/upzy-logo.png";
import aboutImg from "../assets/About.jpeg";
import books from "../assets/newsletter-books.png";
import InternationalConference from "./InternationalConference";

import {
  BookOpen,
  Rocket,
  Users,
  Award,
  Shield,
  Lightbulb,
  ChevronLeft,
  ChevronRight,
  Quote,
  Star,
  GraduationCap,
  Users2,
  Smile,
  PlayCircle,
  Clock,
  ArrowRight,
} from "lucide-react";

const About = () => {
  const [tIndex, setTIndex] = useState(0);
 
  const goToNext = () => {
    setTIndex((i) => (i + 1) % testimonials.length);
  };

  const features = [
    {
      icon: BookOpen,
      title: "Quality Education",
      description: "We provide well-structured courses created by experts to ensure the best learning experience.",
    },
    {
      icon: Rocket,
      title: "Career Growth",
      description: "Our courses are designed to help you gain practical skills and advance in your career.",
    },
    {
      icon: Users,
      title: "Industry Technical Partner",
      description: "Study at your own pace, anytime, anywhere with access to content during your subscription period.",
    },
    {
      icon: Award,
      title: "Trusted Platform",
      description: "Join thousands of learners who trust UPZY PencilBitz for their learning journey.",
    },
  ];

  const stats = [
    { icon: GraduationCap, value: "150+", label: "Courses" },
    { icon: Users2, value: "2K+", label: "Learners" },
    { icon: Smile, value: "50+", label: "Experts" },
    { icon: PlayCircle, value: "1M+", label: "Hours" },
    { icon: Award, value: "95%", label: "Success" },
    { icon: Clock, value: "24/7", label: "Support" },
  ];

  const values = [
    {
      icon: Shield,
      title: "Integrity",
      desc: "We believe in honesty and transparency in everything we do.",
    },
    {
      icon: Lightbulb,
      title: "Innovation",
      desc: "We continuously explore new ideas to create better solutions.",
    },
    {
      icon: Users,
      title: "Collaboration",
      desc: "Working together to achieve shared success and growth.",
    },
    {
      icon: Rocket,
      title: "Growth",
      desc: "Focused on continuous improvement and long-term success.",
    },
  ];

  return (
    <div className="min-h-screen bg-[#0B0B0F] text-white pt-40 pb-20">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Hero Section */}
        <div className="flex flex-col lg:flex-row items-center justify-between gap-16 mb-24">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="flex-1 text-center lg:text-left"
          >
            <span className="px-4 py-1.5 rounded-full bg-[#FF7A00]/10 text-[#FF7A00] text-xs font-bold uppercase tracking-wider mb-6 inline-block border border-[#FF7A00]/20">
              About Us
            </span>
            <h1 className="text-4xl md:text-6xl font-black mb-6 leading-tight tracking-tighter">
              Empowering <span className="text-[#FF7A00]">Learners.</span> <br />
              Building Futures.
            </h1>
            <p className="text-gray-400 text-lg mb-10 max-w-xl mx-auto lg:mx-0 font-medium leading-relaxed text-justify">
              At UPZY PencilBitz, we believe learning should be accessible, engaging, and effective for everyone. We're here to help you upgrade your skills and achieve your goals.
            </p>
            <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
              <button className="bg-[#FF7A00] hover:bg-[#FFA500] text-[#0B0B0F] px-8 py-4 rounded-2xl font-black text-sm shadow-lg shadow-[#FF7A00]/20 transition-all transform hover:scale-105 active:scale-95">
                Explore Courses
              </button>
              <button className="bg-white/5 border border-white/10 hover:bg-white/10 text-white px-8 py-4 rounded-2xl font-bold text-sm transition-all transform hover:scale-105 active:scale-95">
                Join Community
              </button>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex-1 relative group"
          >
            <div className="absolute inset-0 bg-[#FF7A00]/20 rounded-full blur-[100px] group-hover:bg-[#FF7A00]/30 transition-all duration-700"></div>
            <div className="relative z-10 p-8">
              <img 
                src={logo} 
                alt="UPZY Logo" 
                className="w-full max-w-[450px] mx-auto animate-float drop-shadow-[0_0_30px_rgba(255,122,0,0.3)]"
              />
            </div>
          </motion.div>
        </div>

        {/* Mission Section */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-32"
        >
          <h2 className="text-3xl md:text-5xl font-black mb-8 tracking-tight">Our Mission</h2>
          <div className="w-20 h-1.5 bg-[#FF7A00] mx-auto rounded-full mb-8"></div>
          <p className="text-gray-400 text-xl font-medium leading-relaxed text-justify">
            To deliver high-quality, industry-relevant education that empowers people to learn, grow, and succeed in a constantly changing world.
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-32">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-[#16181D] border border-white/5 p-8 rounded-[2rem] group hover:border-[#FF7A00]/30 transition-all cursor-default"
            >
              <div className="w-16 h-16 rounded-2xl bg-[#FF7A00]/10 text-[#FF7A00] flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-[#FF7A00] group-hover:text-[#0B0B0F] transition-all duration-300">
                <feature.icon size={30} />
              </div>
              <h3 className="text-white text-xl font-bold mb-4">{feature.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Stats Section */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="bg-[#16181D] border border-white/5 rounded-[3rem] p-10 mb-32 overflow-hidden relative"
        >
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#FF7A00]/5 rounded-full blur-3xl -mr-32 -mt-32"></div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 relative z-10">
            {stats.map((stat, index) => (
              <div key={index} className="text-center group">
                <div className="w-12 h-12 rounded-xl bg-white/5 text-[#FF7A00] flex items-center justify-center mx-auto mb-4 group-hover:scale-110 group-hover:bg-[#FF7A00]/10 transition-all">
                  <stat.icon size={22} />
                </div>
                <h4 className="text-2xl font-black text-white mb-1">{stat.value}</h4>
                <p className="text-gray-500 text-xs font-bold uppercase tracking-widest">{stat.label}</p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Our Story */}
        <div className="flex flex-col lg:flex-row items-center gap-16 mb-32">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex-1"
          >
            <div className="relative group">
              <div className="absolute -inset-4 bg-gradient-to-r from-[#FF7A00] to-[#FFA500] rounded-[3rem] opacity-20 blur-2xl group-hover:opacity-30 transition-opacity"></div>
              <img 
                src={aboutImg} 
                alt="Our Story" 
                className="relative z-10 rounded-[2.5rem] w-full h-[500px] object-cover border border-white/10 shadow-2xl"
              />
            </div>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex-1"
          >
            <span className="px-4 py-1 bg-[#FF7A00]/10 text-[#FF7A00] text-xs font-bold rounded-md mb-6 inline-block border border-[#FF7A00]/20">
              Our Story
            </span>
            <h2 className="text-4xl font-black mb-8 leading-tight tracking-tight">
              Education for Everyone, <br />
              Everywhere.
            </h2>
            <div className="space-y-6 text-gray-400 font-medium leading-relaxed text-justify">
              <p>
                UPZY PencilBitz was founded with a simple idea — to make quality education accessible to everyone, everywhere. What started as a small initiative is now a growing platform trusted by thousands of learners worldwide.
              </p>
              <p>
                We continuously innovate and collaborate with industry experts to bring you the most relevant and up-to-date courses. Our journey is driven by the success of our students and the impact they make in the world.
              </p>
            </div>
            <button className="mt-10 px-8 py-4 bg-[#FF7A00] hover:bg-[#FFA500] text-[#0B0B0F] font-black rounded-2xl flex items-center gap-3 transition-all transform hover:scale-105 shadow-lg shadow-[#FF7A00]/20">
              Learn More About Us <ArrowRight size={18} />
            </button>
          </motion.div>
        </div>

        {/* Values Section */}
        <div className="mb-32">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-black mb-4">Our Values</h2>
            <p className="text-gray-500 font-medium">The principles that guide everything we do</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-[#16181D] border border-white/5 p-10 rounded-[2.5rem] text-center group hover:border-[#FF7A00]/30 hover:-translate-y-2 transition-all"
              >
                <div className="w-16 h-16 mx-auto rounded-full bg-white/5 border border-white/10 flex items-center justify-center mb-6 group-hover:border-[#FF7A00]/50 group-hover:text-[#FF7A00] transition-all">
                  <item.icon size={26} />
                </div>
                <h3 className="text-xl font-bold mb-4">{item.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed font-medium">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
 
        {/* CTA Section */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative bg-[#16181D] border border-[#FF7A00]/30 rounded-[3rem] p-5 md:p-10 overflow-hidden text-center md:text-left"
        >
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#FF7A00]/10 rounded-full blur-[100px] -mr-32 -mt-32"></div>
          <div className="flex flex-col md:flex-row items-center justify-between gap-12 relative z-10">
            <div className="flex flex-col md:flex-row items-center gap-8 flex-1">
              <div className="w-24 h-24 bg-[#FF7A00]/10 rounded-[2rem] flex items-center justify-center shrink-0">
 {/* Image */}
        <img
          src={books}
          alt="Books"
          className="w-full h-full rounded-2xl object-cover hidden md:block"
        />

        {/* Text */}              </div>
              <div>
                <h3 className="text-2xl md:text-3xl font-black text-white mb-3">Start Your Learning Journey Today!</h3>
                <p className="text-gray-400 font-medium">Join thousands of learners and unlock your true potential with UPZY PencilBitz.</p>
              </div>
            </div>
            <div className="w-full md:w-auto flex flex-col sm:flex-row gap-4">
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white focus:outline-none focus:border-[#FF7A00] w-full md:w-64 transition-all"
              />
              <button className="bg-[#FF7A00] hover:bg-[#FFA500] text-[#0B0B0F] px-8 py-4 rounded-2xl font-black text-sm whitespace-nowrap shadow-lg shadow-[#FF7A00]/20 transition-all transform hover:scale-105">
                Get Started
              </button>
            </div>
          </div>
        </motion.div>
      </div>
      
      {/* Custom Styles for Animation */}
      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        .animate-float {
          animation: float 4s ease-in-out infinite;
        }
      `}} />
    </div>
  );
};

export default About;
