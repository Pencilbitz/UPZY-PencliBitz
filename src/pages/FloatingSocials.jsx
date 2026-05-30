import React from "react";
import { Instagram, Linkedin, MessageCircle, Share2 } from "lucide-react";

const socialLinks = [
  {
    name: "WhatsApp",
    icon: MessageCircle,
    url: "https://api.whatsapp.com/send/?phone=919600921734",
    color: "hover:bg-[#25D366] hover:text-white",
    borderColor: "hover:border-[#25D366]",
    glow: "shadow-[#25D366]/20"
  },
  {
    name: "LinkedIn",
    icon: Linkedin,
    url: "https://linkedin.com", // Add your link here
    color: "hover:bg-[#0077B5] hover:text-white",
    borderColor: "hover:border-[#0077B5]",
    glow: "shadow-[#0077B5]/20"
  },
  {
    name: "Instagram",
    icon: Instagram,
    url: "https://instagram.com", // Add your link here
    color: "hover:bg-gradient-to-tr hover:from-[#f9ce34] hover:via-[#ee2a7b] hover:to-[#6228d7] hover:text-white",
    borderColor: "hover:border-[#ee2a7b]",
    glow: "shadow-[#ee2a7b]/20"
  }
];

export default function FloatingSocials() {
  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-center gap-3.5 sm:bottom-8 sm:right-8">
      {/* Decorative Label - Appears on Hover */}
      <div className="group flex flex-col items-center gap-3.5">
        {socialLinks.map((social) => {
          const Icon = social.icon;
          return (
            <div key={social.name} className="relative flex items-center justify-end group/item">
              {/* Tooltip Label */}
              <span className="absolute right-14 scale-75 opacity-0 rounded-lg bg-[#16161D] border border-white/10 px-3 py-1.5 text-[10px] font-black uppercase tracking-widest text-zinc-400 shadow-xl transition-all duration-200 group-hover/item:scale-100 group-item/item:opacity-100 pointer-events-none md:block hidden group-hover/item:opacity-100 whitespace-nowrap">
                {social.name}
              </span>

              {/* Floating Action Button */}
              <a
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Connect with us on ${social.name}`}
                className={`w-12 h-12 rounded-full bg-[#111218]/80 backdrop-blur-md border border-white/5 text-zinc-400 flex items-center justify-center shadow-xl transition-all duration-300 ${social.color} ${social.borderColor} hover:scale-110 hover:shadow-lg ${social.glow}`}
              >
                <Icon className="w-5 h-5 transition-transform duration-300" />
              </a>
            </div>
          );
        })}
        
        {/* Core Anchor Trigger Node (Optional central hub design feature) */}
        <div className="w-10 h-[1px] bg-white/10 my-1 rounded-full hidden md:block"></div>
        <div className="w-8 h-8 rounded-full bg-orange-500/10 border border-orange-500/20 text-orange-500 flex items-center justify-center text-[10px] font-black uppercase tracking-wider select-none animate-pulse hidden md:flex">
          <Share2 className="w-3.5 h-3.5" />
        </div>
      </div>
    </div>
  );
}