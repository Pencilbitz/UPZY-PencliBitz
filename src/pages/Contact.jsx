import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, MessageSquare, Clock } from 'lucide-react';

const Contact = () => {
  return (
    <div className="flex-1 bg-white py-24 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-5xl font-black text-gray-900 mb-6">Get in Touch</h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Have questions about our courses or the upcoming conference? 
              Our team is here to help you every step of the way.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Contact Info */}
          <div className="lg:col-span-1 space-y-8">
            <div className="bg-gray-50 p-8 rounded-[2rem] border border-gray-100">
              <h3 className="text-2xl font-bold text-gray-900 mb-8">Contact Information</h3>
              
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-indigo-100 text-indigo-600 rounded-2xl flex items-center justify-center">
                    <Mail size={24} />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-gray-400 uppercase">Email Us</p>
                    <p className="text-lg font-bold text-gray-900">hello@pencilbitz.com</p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-emerald-100 text-emerald-600 rounded-2xl flex items-center justify-center">
                    <Phone size={24} />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-gray-400 uppercase">Call Us</p>
                    <p className="text-lg font-bold text-gray-900">+1 (555) 000-0000</p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-purple-100 text-purple-600 rounded-2xl flex items-center justify-center">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-gray-400 uppercase">Location</p>
                    <p className="text-lg font-bold text-gray-900">Silicon Valley, CA</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-indigo-600 p-8 rounded-[2rem] text-white">
              <MessageSquare size={32} className="mb-6 opacity-80" />
              <h4 className="text-xl font-bold mb-2">Live Chat Support</h4>
              <p className="text-indigo-100 mb-6">Our support team is available 24/7 to assist you with any inquiries.</p>
              <button className="w-full py-4 bg-white text-indigo-600 font-bold rounded-2xl hover:bg-gray-100 transition-all">
                Start Chatting
              </button>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <div className="bg-white p-10 rounded-[2.5rem] border border-gray-100 shadow-xl shadow-gray-100/50">
              <form className="space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-gray-700 ml-1">Full Name</label>
                    <input 
                      type="text" 
                      placeholder="John Doe" 
                      className="w-full px-6 py-4 bg-gray-50 border border-transparent rounded-2xl focus:bg-white focus:border-indigo-200 outline-none transition-all"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-gray-700 ml-1">Email Address</label>
                    <input 
                      type="email" 
                      placeholder="john@example.com" 
                      className="w-full px-6 py-4 bg-gray-50 border border-transparent rounded-2xl focus:bg-white focus:border-indigo-200 outline-none transition-all"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-bold text-gray-700 ml-1">Subject</label>
                  <input 
                    type="text" 
                    placeholder="How can we help?" 
                    className="w-full px-6 py-4 bg-gray-50 border border-transparent rounded-2xl focus:bg-white focus:border-indigo-200 outline-none transition-all"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-bold text-gray-700 ml-1">Message</label>
                  <textarea 
                    rows="6" 
                    placeholder="Your message here..." 
                    className="w-full px-6 py-4 bg-gray-50 border border-transparent rounded-2xl focus:bg-white focus:border-indigo-200 outline-none transition-all resize-none"
                  ></textarea>
                </div>

                <button className="w-full py-5 bg-indigo-600 text-white font-black rounded-[1.5rem] hover:bg-indigo-700 transition-all shadow-lg shadow-indigo-200 flex items-center justify-center gap-3 group">
                  Send Message <Send size={20} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
