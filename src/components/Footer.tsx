import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { Instagram, Facebook, Linkedin } from 'lucide-react';
import { SafeImage } from './SafeImage';

export const Footer: React.FC = () => {
  return (
    <footer className="py-12 relative overflow-hidden bg-black">
      <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-12 pt-16 relative">
          {/* Vibrant Animated Divider Line */}
          <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-neon-cyan/50 to-transparent shadow-[0_0_15px_rgba(0,240,255,0.3)]" />
          
          {/* Left: Logo */}
          <div className="flex-1 flex justify-start">
            <motion.div 
              initial={{ scale: 0.9, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              className="w-20 h-20 md:w-24 md:h-24 rounded-full border-2 border-white/10 overflow-hidden flex items-center justify-center p-0 bg-transparent shadow-2xl"
            >
              <SafeImage 
                src="https://lh3.googleusercontent.com/d/19TvdU6o-mHetA8l28vZ6UEaEFA15bEHs" 
                alt="DSA Architects Logo" 
                size="small"
                className="w-full h-full object-cover"
              />
            </motion.div>
          </div>
          
          {/* Center: Social Icons */}
          <div className="flex-1 flex justify-center">
            <div className="flex gap-4 items-center">
              <a 
                href="https://www.instagram.com/dsa.architects.and.interiors?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="p-3 rounded-full bg-white/5 border border-white/10 text-white/50 hover:text-[#E4405F] hover:border-[#E4405F]/50 hover:bg-[#E4405F]/10 transition-all transform hover:scale-110 active:scale-95 group/social"
                title="Instagram"
              >
                <motion.div whileHover={{ rotate: 5 }}>
                  <Instagram size={20} className="group-hover/social:drop-shadow-[0_0_8px_rgba(228,64,95,1)]" />
                </motion.div>
              </a>
              <a 
                href="https://www.facebook.com/dsa.architects.and.interiors" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="p-3 rounded-full bg-white/5 border border-white/10 text-white/50 hover:text-[#1877F2] hover:border-[#1877F2]/50 hover:bg-[#1877F2]/10 transition-all transform hover:scale-110 active:scale-95 group/social"
                title="Facebook"
              >
                <motion.div whileHover={{ rotate: 5 }}>
                  <Facebook size={20} className="group-hover/social:drop-shadow-[0_0_8px_rgba(24,119,242,1)]" />
                </motion.div>
              </a>
              <a 
                href="https://www.linkedin.com/company/dsa-architects-interiors/?viewAsMember=true" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="p-3 rounded-full bg-white/5 border border-white/10 text-white/50 hover:text-[#0A66C2] hover:border-[#0A66C2]/50 hover:bg-[#0A66C2]/10 transition-all transform hover:scale-110 active:scale-95 group/social"
                title="LinkedIn"
              >
                <motion.div whileHover={{ rotate: 5 }}>
                  <Linkedin size={20} className="group-hover/social:drop-shadow-[0_0_8px_rgba(10,102,194,1)]" />
                </motion.div>
              </a>

            </div>
          </div>

          {/* Right: Copyright */}
          <div className="flex-1 flex justify-end">
            <div className="flex flex-col items-center md:items-end font-display">
              <p className="text-[10px] tracking-[0.4em] text-white/95 uppercase font-medium text-center md:text-right mb-1">
                © 2026 DSA ARCHITECTS & INTERIORS
              </p>
              <p className="text-[10px] tracking-[0.4em] text-white/70 uppercase font-medium text-center md:text-right">
                ALL RIGHTS RESERVED.
              </p>
              <Link 
                to="/sync" 
                className="text-[9px] tracking-[0.4em] text-white/20 uppercase font-medium text-center md:text-right mt-2 hover:text-neon-cyan transition-colors"
                title="Google Drive Local Asset Synchronizer"
              >
                Sync Assets
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Glowing Gradient Line */}
      <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-electric-purple to-neon-cyan opacity-50 blur-[1px]" />
      <div className="absolute bottom-0 left-0 right-0 h-[10px] bg-gradient-to-r from-transparent via-electric-purple to-neon-cyan opacity-20 blur-[10px]" />
    </footer>
  );
};
