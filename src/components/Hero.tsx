import React from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { WireframeAssembly } from './WireframeAssembly';
import { cn } from '@/src/lib/utils';

import { SafeImage } from './SafeImage';

export const Hero: React.FC = () => {
  const tagline = "Designing architecture & interiors with timeless sophistication, and meticulous care | Pan India.";
  const words = tagline.split(" ");

  return (
    <section id="home" className="relative min-h-0 md:min-h-screen h-auto flex items-start md:items-center justify-center pt-[84px] pb-[24px] md:pt-20 md:pb-0 overflow-hidden bg-obsidian">
      <WireframeAssembly />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10 w-full">
        <div className="flex flex-col items-center text-center">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.5 }}
            className="relative mb-[16px] md:mb-12"
          >
            {/* Main Brand Title with sophisticated entrance */}
            <div className="overflow-visible px-4 sm:px-10">
              <motion.h1 
                initial={{ y: "50%", opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
                className="text-[80px] sm:text-[140px] md:text-[280px] font-sans font-thin tracking-[-0.02em] text-white leading-none drop-shadow-2xl"
              >
                DSA
              </motion.h1>
            </div>
            
            {/* Sub-headline from image */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 1 }}
              className="mt-[16px] md:mt-4"
            >
              <span className="dsa-title text-sm sm:text-lg md:text-3xl tracking-[0.2em] sm:tracking-[0.4em]">
                Dhwanish Shah Architects
              </span>
            </motion.div>
          </motion.div>
 
          {/* Staggered Tagline Animation */}
          <div className="flex flex-wrap justify-center gap-x-2 gap-y-1 max-w-4xl mb-0 md:mb-14">
            {words.map((word, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ 
                  delay: 0.8 + (i * 0.05), 
                  duration: 0.5,
                  ease: "easeOut"
                }}
                className={cn(
                  "text-lg md:text-2xl tracking-wide",
                  i >= 5 
                    ? "text-zinc-950 font-bold" 
                    : "text-zinc-500 font-light"
                )}
              >
                {word}
              </motion.span>
            ))}
          </div>
 

        </div>

        {/* High-End Architectural Background (Visible & Integrated) */}
        <motion.div
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 0.7, scale: 1 }}
            transition={{ duration: 3, ease: "easeOut" }}
            className="absolute inset-0 -z-10 w-full h-full pointer-events-none"
        >
          <SafeImage 
            src="/images/drive_1X6xG-7r6aVJJEwqXFfLno2nZ6v7rLz21.jpg" 
            alt="Premium Architectural Background" 
            size="large"
            className="w-full h-full object-cover"
          />
          {/* Subtle dark overlay for better text readability */}
          <div className="absolute inset-0 bg-black/60" />
          <div className="absolute inset-0 bg-gradient-to-b from-obsidian via-transparent to-obsidian" />
        </motion.div>
      </div>
      
    </section>
  );
};
