import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Search, ChevronDown, Menu, X, Globe } from 'lucide-react';
import logo from '../assets/upzy-logo.png';
import { Link, useLocation } from 'react-router-dom';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isConferenceOpen, setIsConferenceOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Courses', path: '#' },
    { name: 'Categories', path: '#' },
    { name: 'About Us', path: '/about' },
    { name: 'Conference', path: '/conference' },
    { name: 'Contact', path: '/contact' },
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300">
      {/* Top Promotional Banner */}
      <div className="bg-[#111111] px-4 py-2 text-xs flex flex-col md:flex-row justify-center items-center border-b border-white/5 gap-2 md:gap-4">
        <div className="flex items-center space-x-2 text-gray-500">
          <span className="text-[#FF7A00]">✂️</span>
          <span>Join global experts, share ideas, and shape the future.</span>
        </div>
        <div className="flex items-center space-x-4">
          <span className="text-gray-500 flex items-center space-x-2">
            <span className="text-[#FF7A00]">📅</span>
            <span>Upcoming Event: 10 - 12 Sep 2025</span>
          </span>
          <Link to="/conference" className="bg-[#FF7A00] px-4 py-0.5 rounded-full font-bold text-[10px] text-[#0B0B0F] hover:bg-[#FFA500] transition-all">
            Learn More
          </Link>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <nav className="bg-[#0B0B0F]/80 backdrop-blur-md border-b border-white/5 py-4 px-6">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          {/* Logo Section */}
          <Link to="/" className="flex items-center gap-3 group">
            <div className="w-12 h-12 flex items-center justify-center shadow-lg  overflow-hidden group-hover:scale-105 transition-transform">
              <img className='w-full h-full object-contain ' src={logo} alt="Logo" />
            </div>
            <span className="font-black text-xl tracking-tighter text-white">
              UPZY <span className="text-[#FF7A00]">PencilBitz</span>
            </span>
          </Link>

          {/* Desktop Navigation Links */}
          <div className="hidden lg:flex items-center gap-8 text-sm font-bold text-gray-400">
            {navLinks.map((link) => (
              <div key={link.name} className="relative group">
                {link.name === 'Conference' ? (
                  <div className="relative">
                    <button 
                      onClick={() => setIsConferenceOpen(!isConferenceOpen)}
                      className={`flex items-center gap-1 transition-colors ${isActive(link.path) || isConferenceOpen ? 'text-[#FF7A00]' : 'hover:text-white'}`}
                    >
                      {link.name} <ChevronDown size={14} className={`transition-transform ${isConferenceOpen ? 'rotate-180' : ''}`} />
                    </button>
                    
                    {isConferenceOpen && (
                      <div className="absolute left-0 mt-4 w-56 bg-[#16181D] border border-white/5 rounded-2xl shadow-2xl py-3 z-50">
                        <Link to="#" className="block px-5 py-2.5 text-xs text-gray-400 hover:bg-white/5 hover:text-white transition-all">
                          National Conference
                        </Link>
                        <Link to="/conference" onClick={() => setIsConferenceOpen(false)} className="block px-5 py-2.5 text-xs text-[#FF7A00] bg-white/5 font-bold transition-all">
                          International Conference
                        </Link>
                      </div>
                    )}
                  </div>
                ) : (
                  <Link 
                    to={link.path} 
                    className={`transition-colors ${isActive(link.path) ? 'text-[#FF7A00]' : 'hover:text-white'}`}
                  >
                    {link.name}
                  </Link>
                )}
              </div>
            ))}
          </div>

          {/* Action Buttons */}
          <div className="hidden lg:flex items-center gap-5">
            <button className="text-gray-400 hover:text-white transition-colors">
              <Search size={20} />
            </button>
            <div className="h-4 w-px bg-white/10 mx-1"></div>
            <Link to="/dashboard" className="text-sm font-bold text-gray-400 hover:text-white transition-colors">
              Log In
            </Link>
            <button className="px-6 py-2.5 bg-[#FF7A00] hover:bg-[#FFA500] text-[#0B0B0F] rounded-xl font-black text-sm shadow-lg shadow-[#FF7A00]/10 transition-all transform hover:scale-105 active:scale-95">
              Sign Up
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="lg:hidden">
            <button 
              onClick={() => setIsOpen(!isOpen)} 
              className="w-10 h-10 flex items-center justify-center text-gray-400 bg-white/5 rounded-xl hover:text-white transition-all"
            >
              {isOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Panel */}
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="lg:hidden mt-4 pt-4 border-t border-white/5 space-y-2"
          >
            {navLinks.map((link) => (
              <Link 
                key={link.name}
                to={link.path} 
                onClick={() => setIsOpen(false)}
                className={`block py-3 px-4 rounded-xl font-bold transition-all ${isActive(link.path) ? 'bg-[#FF7A00]/10 text-[#FF7A00]' : 'text-gray-400 hover:bg-white/5 hover:text-white'}`}
              >
                {link.name}
              </Link>
            ))}
            <div className="pt-4 flex flex-col gap-3">
              <Link to="/dashboard" className="w-full py-4 text-center text-gray-400 font-bold hover:text-white transition-all">
                Log In
              </Link>
              <button className="w-full py-4 bg-[#FF7A00] text-[#0B0B0F] font-black rounded-2xl shadow-lg shadow-[#FF7A00]/10">
                Sign Up
              </button>
            </div>
          </motion.div>
        )}
      </nav>
    </header>
  );
}
