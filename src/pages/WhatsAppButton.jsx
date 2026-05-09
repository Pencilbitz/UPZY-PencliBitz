import React from 'react';
import { motion } from 'framer-motion';

const WhatsAppButton = () => {
    const phoneNumber = "919000000000"; // Replace with actual number
    const message = "Hello! I would like to enquire about your courses and conferences.";
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            className="fixed bottom-8 right-8 z-[9999]"
        >
            {/* Pulsing background effect */}
            <div className="absolute inset-0 bg-[#25D366] rounded-full animate-ping opacity-25"></div>
            
            <a 
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="relative flex items-center gap-3 bg-[#25D366] hover:bg-[#20ba5a] text-white px-3 py-3 rounded-full shadow-2xl transition-all group overflow-hidden"
            >
                {/* Shine effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                
                <svg 
                    viewBox="0 0 24 24" 
                    className="w-6 h-6 fill-white group-hover:rotate-12 transition-transform"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.438 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.414 0 .018 5.396.015 12.03c0 2.12.554 4.189 1.605 6.006L0 24l6.149-1.613a11.78 11.78 0 005.897 1.583h.005c6.634 0 12.032-5.396 12.035-12.032a11.762 11.762 0 00-3.525-8.491z"/>
                </svg>
                
            </a>
            
        </motion.div>
    );
};

export default WhatsAppButton;
