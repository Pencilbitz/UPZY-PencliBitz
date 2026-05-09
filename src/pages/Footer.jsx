import React from 'react';
import { Mail, Phone, MapPin, Globe, Share2, Users, MessageSquare, Award, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import logo from '../assets/upzy-logo.png';

const Footer = () => {
    return (
        <footer className="bg-[#0b1928] border-t border-white/5 pt-20 pb-10 px-6">
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
                    {/* Brand Section */}
                    <div className="space-y-6">
                        <Link to="/" className="flex items-center gap-3 group">
                            <div className="w-12 h-12 flex items-center justify-center overflow-hidden group-hover:scale-105 transition-transform">
                                <img className='w-full h-full object-contain' src={logo} alt="Logo" />
                            </div>
                            <span className="font-black text-2xl tracking-tighter text-white">
                                UPZY <span className="text-[#FF7A00]">PencilBitz</span>
                            </span>
                        </Link>
                        <p className="text-gray-500 text-sm leading-relaxed max-w-xs font-medium">
                            Empowering the next generation of innovators through world-class 
                            digital education and international conferences. Join our global 
                            community today.
                        </p>
                        <div className="flex gap-4">
                            {[Globe, Share2, Users, MessageSquare, Award].map((Icon, i) => (
                                <a key={i} href="#" className="w-10 h-10 bg-white/5 rounded-xl flex items-center justify-center text-gray-400 hover:bg-[#FF7A00] hover:text-[#0B0B0F] transition-all">
                                    <Icon size={18} />
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="text-white font-bold mb-8 uppercase tracking-widest text-xs">Resources</h4>
                        <ul className="space-y-4">
                            {[
                                { name: 'Home', path: '/' },
                                { name: 'About Us', path: '/about' },
                                { name: 'Courses', path: '#' },
                                { name: 'Categories', path: '#' },
                                { name: 'Contact Us', path: '/contact' }
                            ].map((link) => (
                                <li key={link.name}>
                                    <Link to={link.path} className="text-gray-500 hover:text-[#FF7A00] text-sm font-semibold transition-colors">
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Conference Links */}
                    <div>
                        <h4 className="text-white font-bold mb-8 uppercase tracking-widest text-xs">Conference</h4>
                        <ul className="space-y-4">
                            {[
                                { name: 'National Conference', path: '/national-conference' },
                                { name: 'International Conference', path: '/international-conference' },
                                { name: 'Call for Papers', path: '#' },
                                { name: 'Previous Events', path: '#' },
                                { name: 'Guidelines', path: '#' }
                            ].map((link) => (
                                <li key={link.name}>
                                    <Link to={link.path} className="text-gray-500 hover:text-[#FF7A00] text-sm font-semibold transition-colors">
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Newsletter */}
                    <div>
                        <h4 className="text-white font-bold mb-8 uppercase tracking-widest text-xs">Contact Us</h4>
                        <p className="text-gray-500 text-sm mb-6 font-medium">
                        </p>
                        <div className="relative group"> 
                           
                           {/* mail */}
                           <div className="mt-8 flex items-center gap-3 text-gray-500">
                               <Mail size={16} className="text-[#FF7A00]" />
                               <span className="text-xs font-bold">support@upzypencilbitz.com</span>
                           </div>   
                           
                           
                        </div>
                        {/* phone number */}
                        <div className="mt-8 flex items-center gap-3 text-gray-500">
                            <Phone size={16} className="text-[#FF7A00]" />
                            <span className="text-xs font-bold">+91 1234567890</span>
                        </div>
                        {/* Location */}
                        <div className="mt-8 flex items-center gap-3 text-gray-500">
                            <MapPin size={16} className="text-[#FF7A00]" />
                            <span className="text-xs font-bold">Coimbatore, Tamil Nadu</span>
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
                    <p className="text-gray-600 text-xs font-bold">
                        © 2025 UPZY PencilBitz. All rights reserved.
                    </p>
                    <div className="flex gap-8 text-xs font-bold text-gray-600">
                        <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
                        <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
                        <a href="#" className="hover:text-white transition-colors">Cookie Policy</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;