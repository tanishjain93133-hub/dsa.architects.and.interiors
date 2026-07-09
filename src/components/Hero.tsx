import React from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { cn } from '@/src/lib/utils';

import { SafeImage } from './SafeImage';

export const Hero: React.FC = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-24 pb-12 overflow-hidden bg-obsidian">
      
      {/* High-End Architectural Background (Covering the entire hero section) */}
      <motion.div
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 3, ease: "easeOut" }}
          className="absolute inset-0 -z-10 w-full h-full pointer-events-none"
      >
        {/* Google Drive: https://drive.google.com/file/d/1QzCXp_vMHvJvz2x2S0Czff8Fk2IsXN7h/view?usp=sharing */}
        <SafeImage 
          src="/images/drive_1QzCXp_vMHvJvz2x2S0Czff8Fk2IsXN7h.png" 
          alt="Premium Architectural Background" 
          size="large"
          className="w-full h-full object-cover object-center"
        />
      </motion.div>

      {/* UPPER CENTER TEXT: DSA and Dhwanish Shah Architects (just below the navigation links) */}
      <div className="absolute top-[84px] md:top-[105px] left-0 right-0 z-20 flex justify-center text-center px-6">
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 1.2 }}
          className="flex flex-col items-center gap-1.5 md:gap-2.5"
        >
          <span className="dsa-title-main text-[42px] sm:text-[56px] md:text-[72px] lg:text-[84px] tracking-[0.08em] uppercase text-black leading-none select-none">
            DSA
          </span>
          <span className="dsa-title-sub text-[11px] sm:text-[13px] md:text-[15px] lg:text-[17px] tracking-[0.4em] uppercase text-zinc-800 select-none">
            Dhwanish Shah Architects
          </span>
        </motion.div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10 w-full mt-10">
        <div className="flex flex-col items-center text-center">
          {/* Empty center content to maximize focus on the architectural sketch background and upper center branding */}
        </div>
      </div>
      
    </section>
  );
};
