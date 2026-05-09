import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Search, ChevronDown, Menu as MenuIcon, X, Globe, Star, Zap, Cpu, Briefcase, Microscope, Palette, Layers 
} from 'lucide-react';
import logo from '../assets/upzy-logo.png';
import { Link, useLocation } from 'react-router-dom';
// Removed unused import

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isConferenceOpen, setIsConferenceOpen] = useState(false);
  const [isWorkshopOpen, setIsWorkshopOpen] = useState(false);
  const [isCategoriesOpen, setIsCategoriesOpen] = useState(false);

  // Mobile Accordion States
  const [isMobileCategoriesOpen, setIsMobileCategoriesOpen] = useState(false);
  const [isMobileWorkshopsOpen, setIsMobileWorkshopsOpen] = useState(false);
  const [isMobileConferenceOpen, setIsMobileConferenceOpen] = useState(false);

  const location = useLocation();

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Categories', path: '#' },
    { name: 'Workshops', path: '#' },
    { name: 'Conference', path: '/international-conference' },
    { name: 'Contact', path: '/contact' },
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <header className="fixed top-0 left-0 right-0 z-[100] transition-all duration-300">
      {/* Top Promotional Banner */}
      {/* <div className="bg-[#111111] px-4 py-2 text-xs flex flex-col md:flex-row justify-center items-center border-b border-white/5 gap-2 md:gap-4 relative z-[101]">
        <div className="flex items-center space-x-2 text-gray-500">
          <span className="text-[#FF7A00]">✂️</span>
          <span>Join global experts, share ideas, and shape the future.</span>
        </div>
        <div className="flex items-center space-x-4">
          <span className="text-gray-500 flex items-center space-x-2">
            <span className="text-[#FF7A00]">📅</span>
            <span>Upcoming Event: 10 - 12 Sep 2025</span>
          </span>
          <Link to="/Conference" className="bg-[#FF7A00] px-4 py-0.5 rounded-full font-bold text-[10px] text-[#0B0B0F] hover:bg-[#FFA500] transition-all">
            Learn More
          </Link>
        </div>
      </div> */}

      {/* Main Navigation Bar */}
      <nav className="bg-[#0B0B0F]/90 backdrop-blur-xl border-b border-white/5 py-4 px-6 relative z-[100]">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          {/* Logo Section */}
          <Link to="/" className="flex items-center gap-3 group">
            <div className="w-12 h-12 flex items-center justify-center shadow-lg overflow-hidden group-hover:scale-105 transition-transform">
              <img className='w-full h-full object-contain' src={logo} alt="Logo" />
            </div>
            <span className="font-black text-xl tracking-tighter text-white">
              UPZY <span className="text-[#FF7A00]">PencilBitz</span>
            </span>
          </Link>

          {/* Desktop Navigation Links */}
          <div className="hidden lg:flex items-center gap-8 text-sm font-bold text-gray-400">
            {navLinks.map((link) => (
              <div key={link.name} className="relative">
                {link.name === 'Categories' ? (
                  <div 
                    className="relative"
                    onMouseEnter={() => setIsCategoriesOpen(true)}
                    onMouseLeave={() => setIsCategoriesOpen(false)}
                  >
                    <button className={`flex items-center gap-1 transition-colors py-2 ${isCategoriesOpen ? 'text-[#FF7A00]' : 'hover:text-white'}`}>
                      {link.name} <ChevronDown size={14} className={`transition-transform duration-300 ${isCategoriesOpen ? 'rotate-180' : ''}`} />
                    </button>
                    
                    {/* Normal 2-item Dropdown */}
                    <AnimatePresence>
                      {isCategoriesOpen && (
                        <motion.div 
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 10 }}
                          className="absolute left-1/2 -translate-x-1/2 mt-2 w-52 bg-[#16181D] border border-white/10 rounded-2xl shadow-2xl p-2 z-[200] flex flex-col gap-1"
                        >
                          <Link to="#" className="text-gray-400 hover:text-white text-xs px-4 py-2 hover:bg-white/5 rounded-xl transition-all flex items-center gap-2">
                            <Cpu size={14} /> Technology & Business
                          </Link>
                          <Link to="#" className="text-gray-400 hover:text-white text-xs px-4 py-2 hover:bg-white/5 rounded-xl transition-all flex items-center gap-2">
                            <Palette size={14} /> Science & Design
                          </Link>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ) : link.name === 'Workshops' ? (
                  <div 
                    className="relative"
                    onMouseEnter={() => setIsWorkshopOpen(true)}
                    onMouseLeave={() => setIsWorkshopOpen(false)}
                  >
                    <button className={`flex items-center gap-1 transition-colors py-2 ${isWorkshopOpen ? 'text-[#FF7A00]' : 'hover:text-white'}`}>
                      {link.name} <ChevronDown size={14} className={`transition-transform duration-300 ${isWorkshopOpen ? 'rotate-180' : ''}`} />
                    </button>

                    <AnimatePresence>
                      {isWorkshopOpen && (
                        <motion.div 
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 10 }}
                          className="absolute left-1/2 -translate-x-1/2 mt-2 w-52 bg-[#16181D] border border-white/10 rounded-2xl shadow-2xl p-2 z-[200] flex flex-col gap-1"
                        >
                          <Link to="#" className="text-gray-400 hover:text-white text-xs px-4 py-2 hover:bg-white/5 rounded-xl transition-all flex items-center gap-2">
                            <Layers size={14} /> National
                          </Link>
                          <Link to="/Workshops" className="text-gray-400 hover:text-white text-xs px-4 py-2 hover:bg-white/5 rounded-xl transition-all flex items-center gap-2">
                            <Globe size={14} /> International
                          </Link>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ) : link.name === 'Conference' ? (
                  <div 
                    className="relative"
                    onMouseEnter={() => setIsConferenceOpen(true)}
                    onMouseLeave={() => setIsConferenceOpen(false)}
                  >
                    <button className={`flex items-center gap-1 transition-colors py-2 ${isConferenceOpen ? 'text-[#FF7A00]' : 'hover:text-white'}`}>
                      {link.name} <ChevronDown size={14} className={`transition-transform duration-300 ${isConferenceOpen ? 'rotate-180' : ''}`} />
                    </button>

                    <AnimatePresence>
                      {isConferenceOpen && (
                        <motion.div 
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 10 }}
                          className="absolute left-1/2 -translate-x-1/2 mt-2 w-52 bg-[#16181D] border border-white/10 rounded-2xl shadow-2xl p-2 z-[200] flex flex-col gap-1"
                        >
                          <Link to="/national-conference" className="text-gray-400 hover:text-white text-xs px-4 py-2 hover:bg-white/5 rounded-xl transition-all flex items-center gap-2">
                            <Star size={14} /> National
                          </Link>
                          <Link to="/international-conference" className="text-gray-400 hover:text-white text-xs px-4 py-2 hover:bg-white/5 rounded-xl transition-all flex items-center gap-2">
                            <Globe size={14} /> International
                          </Link>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ) : (
                  <Link 
                    to={link.path} 
                    className={`transition-colors py-2 block ${isActive(link.path) ? 'text-[#FF7A00]' : 'hover:text-white'}`}
                  >
                    {link.name}
                  </Link>
                )}
              </div>
            ))}
          </div>

          {/* Action Buttons */}
          <div className="hidden lg:flex items-center gap-5">
            <button className="text-gray-400 hover:text-white transition-colors"><Search size={20} /></button>
            <div className="h-4 w-px bg-white/10 mx-1"></div>
            <Link to="/login" className="text-sm font-bold text-gray-400 hover:text-white transition-colors">Log In</Link>
            <Link to="/signup" className="px-6 py-2.5 bg-[#FF7A00] hover:bg-[#FFA500] text-[#0B0B0F] rounded-xl font-black text-sm shadow-lg shadow-[#FF7A00]/10 transition-all transform hover:scale-105 active:scale-95">Sign Up</Link>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="lg:hidden">
            <button 
              onClick={() => setIsOpen(!isOpen)} 
              className="w-10 h-10 flex items-center justify-center text-gray-400 bg-white/5 rounded-xl hover:text-white transition-all"
            >
              {isOpen ? <X size={20} /> : <MenuIcon size={20} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Panel */}
        <AnimatePresence>
          {isOpen && (
            <motion.div 
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden mt-4 pt-4 border-t border-white/5 space-y-2 overflow-y-auto max-h-[70vh]"
            >
              {navLinks.map((link) => (
                <div key={link.name}>
                  {link.name === 'Categories' ? (
                    <div className="py-2 px-4 rounded-xl text-gray-400 font-bold">
                      <button 
                        onClick={() => setIsMobileCategoriesOpen(!isMobileCategoriesOpen)} 
                        className="flex items-center justify-between w-full text-left"
                      >
                        <span>{link.name}</span>
                        <ChevronDown size={14} className={`transition-transform duration-300 ${isMobileCategoriesOpen ? 'rotate-180' : ''}`} />
                      </button>
                      <AnimatePresence>
                        {isMobileCategoriesOpen && (
                          <motion.div 
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                            className="pl-4 space-y-2 border-l border-white/10 mt-3 font-medium text-xs text-gray-400 overflow-hidden flex flex-col gap-1"
                          >
                            <Link to="#" className="block py-1 hover:text-white">Technology & Business</Link>
                            <Link to="#" className="block py-1 hover:text-white">Science & Design</Link>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  ) : link.name === 'Workshops' ? (
                    <div className="py-2 px-4 rounded-xl text-gray-400 font-bold">
                      <button 
                        onClick={() => setIsMobileWorkshopsOpen(!isMobileWorkshopsOpen)} 
                        className="flex items-center justify-between w-full text-left"
                      >
                        <span>{link.name}</span>
                        <ChevronDown size={14} className={`transition-transform duration-300 ${isMobileWorkshopsOpen ? 'rotate-180' : ''}`} />
                      </button>
                      <AnimatePresence>
                        {isMobileWorkshopsOpen && (
                          <motion.div 
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                            className="pl-4 space-y-2 border-l border-white/10 mt-3 font-medium text-xs text-gray-400 overflow-hidden flex flex-col gap-1"
                          >
                            <Link to="#" className="block py-1 hover:text-[#FF7A00]">National</Link>
                            <Link to="#" className="block py-1 hover:text-blue-500">International</Link>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  ) : link.name === 'Conference' ? (
                    <div className="py-2 px-4 rounded-xl text-gray-400 font-bold">
                      <button 
                        onClick={() => setIsMobileConferenceOpen(!isMobileConferenceOpen)} 
                        className="flex items-center justify-between w-full text-left"
                      >
                        <span>{link.name}</span>
                        <ChevronDown size={14} className={`transition-transform duration-300 ${isMobileConferenceOpen ? 'rotate-180' : ''}`} />
                      </button>
                      <AnimatePresence>
                        {isMobileConferenceOpen && (
                          <motion.div 
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                            className="pl-4 space-y-2 border-l border-white/10 mt-3 font-medium text-xs text-gray-400 overflow-hidden flex flex-col gap-1"
                          >
                            <Link to="/national-conference" onClick={() => setIsOpen(false)} className="block py-1 hover:text-purple-500">National</Link>
                            <Link to="/international-conference" className="block py-1 hover:text-emerald-500">International</Link>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  ) : (
                    <Link 
                      to={link.path} 
                      onClick={() => setIsOpen(false)}
                      className={`block py-3 px-4 rounded-xl font-bold transition-all ${isActive(link.path) ? 'bg-[#FF7A00]/10 text-[#FF7A00]' : 'text-gray-400 hover:bg-white/5 hover:text-white'}`}
                    >
                      {link.name}
                    </Link>
                  )}
                </div>
              ))}
              <div className="pt-4 flex flex-col gap-3 px-4">
                <Link to="/login" className="w-full py-4 text-center text-gray-400 font-bold hover:text-white transition-all">Log In</Link>
                <Link to="/signup" className="w-full py-4 bg-[#FF7A00] text-[#0B0B0F] font-black rounded-2xl shadow-lg shadow-[#FF7A00]/10 text-center">Sign Up</Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
}