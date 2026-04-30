import React, { useState } from 'react';
import { Search, ChevronDown, Menu, X } from 'lucide-react';
import logo from '../assets/upzy-logo.png';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isConferenceOpen, setIsConferenceOpen] = useState(false);

  return (
    <header className="bg-black text-white font-sans w-full">
      {/* Top Promotional Banner */}
      <div className="bg-[#111111] px-4 py-2 text-xs md:text-sm flex  justify-evenly items-center border-b border-zinc-800 gap-2 md:gap-0">
        <div className="flex items-center space-x-2 text-gray-400 text-center md:text-center">
          <span>Join global experts, share ideas, and shape the future.</span>
        </div>
        
        <div className="flex items-center space-x-4">
          <span className="text-gray-400 flex items-center space-x-2 text-xs">
            <span className="text-orange-500">📅</span>
            <span>Upcoming Event: 10 - 12 Sep 2025</span>
          </span>
          <a 
            href="#" 
            className="bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-600 hover:to-red-700 text-white px-3 py-1 rounded font-semibold transition-all text-xs"
          >
            Register Now
          </a>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Logo Section */}
        <div className="flex items-center space-x-3">
          <div className="bg-orange-500 text-black font-extrabold h-10 w-10 rounded-full flex items-center justify-center text-sm shadow-md">
            <img className='w-full h-full object-cover rounded-full' src={logo} alt="" />
          </div>
          <span className="text-2xl font-bold tracking-wider">
            UPZY <span className="text-gray-400 font-light">PencilBitz</span>
          </span>
        </div>

        {/* Desktop Navigation Links */}
        <div className="hidden md:flex items-center space-x-8 text-sm text-gray-300">
          <a href="#" className="hover:text-orange-500 transition-colors">Home</a>
          
          <div className="relative group">
            <button className="flex items-center space-x-1 hover:text-orange-500 transition-colors">
              <span>Courses</span>
              <ChevronDown size={16} />
            </button>
          </div>

          <div className="relative group">
            <button className="flex items-center space-x-1 hover:text-orange-500 transition-colors">
              <span>Categories</span>
              <ChevronDown size={16} />
            </button>
          </div>

          <a href="#" className="hover:text-orange-500 transition-colors">About Us</a>
          
          {/* Conference Dropdown */}
          <div className="relative">
            <button 
              onClick={() => setIsConferenceOpen(!isConferenceOpen)}
              className="flex items-center space-x-1 text-orange-400 border-b-2 border-orange-500 pb-1 font-semibold transition-colors"
            >
              <span>Conference</span>
              <ChevronDown size={16} />
            </button>
            
            {isConferenceOpen && (
              <div className="absolute right-0 mt-3 w-52 bg-[#161616] border border-zinc-800 rounded-xl shadow-2xl py-2 z-50">
                <a href="#" className="block px-4 py-2 text-sm text-gray-400 hover:bg-zinc-800 hover:text-white transition-colors">
                  National Conference
                </a>
                <a href="#" className="block px-4 py-2 text-sm text-orange-400 bg-zinc-900/40 hover:bg-zinc-900 font-semibold transition-colors">
                  International Conference
                </a>
              </div>
            )}
          </div>

          <a href="#" className="hover:text-orange-500 transition-colors">Contact</a>
          
          {/* Utilities */}
          <button className="text-gray-400 hover:text-orange-500 transition-colors">
            <Search size={20} />
          </button>
          
          <button className="border border-zinc-700 hover:border-orange-500 px-5 py-2 rounded-xl text-sm font-semibold text-white transition-all">
            Login
          </button>
          
          <button className="bg-orange-600 hover:bg-orange-500 px-5 py-2 rounded-xl text-sm font-semibold text-white transition-all shadow-md">
            Sign Up
          </button>
        </div>

        {/* Mobile Menu Toggle Button */}
        <div className="md:hidden">
          <button 
            onClick={() => setIsOpen(!isOpen)} 
            className="text-gray-400 hover:text-white focus:outline-none transition-colors"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile Navigation Panel */}
      {isOpen && (
        <div className="md:hidden bg-[#111111] px-4 pt-3 pb-5 space-y-4 border-t border-zinc-800 transition-all">
          <a href="#" className="block py-2 text-gray-300 hover:text-orange-500 border-b border-zinc-900">Home</a>
          <a href="#" className="block py-2 text-gray-300 hover:text-orange-500 border-b border-zinc-900">Courses</a>
          <a href="#" className="block py-2 text-gray-300 hover:text-orange-500 border-b border-zinc-900">Categories</a>
          <a href="#" className="block py-2 text-gray-300 hover:text-orange-500 border-b border-zinc-900">About Us</a>
          
          <div className="py-2 border-b border-zinc-900">
            <span className="block text-orange-400 font-semibold mb-2">Conference</span>
            <div className="pl-4 space-y-2 flex flex-col">
              <a href="#" className="text-sm text-gray-400 hover:text-white">National Conference</a>
              <a href="#" className="text-sm text-orange-400 font-semibold hover:text-orange-300">International Conference</a>
            </div>
          </div>

          <a href="#" className="block py-2 text-gray-300 hover:text-orange-500 border-b border-zinc-900">Contact</a>
          
          <div className="flex flex-col space-y-3 pt-3">
            <button className="w-full border border-zinc-700 py-2.5 rounded-xl text-sm font-semibold text-center text-gray-200 hover:bg-zinc-900">
              Login
            </button>
            <button className="w-full bg-orange-600 py-2.5 rounded-xl text-sm font-semibold text-center text-white">
              Sign Up
            </button>
          </div>
        </div>
      )}
    </header>
  );
}