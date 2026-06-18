import React, { useEffect } from 'react';
import { motion } from 'motion/react';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import { NebulaBackground } from '../components/NebulaBackground';
import { LayoutGrid, Palette, ShieldCheck, Award, Users, Lightbulb } from 'lucide-react';
import { Assembly } from '../components/Assembly';
import { ChromaGrid } from '../components/ChromaGrid';
import { cn } from '@/src/lib/utils';
import { SafeImage } from '../components/SafeImage';

export const AboutPage: React.FC = () => {
  const teamItems = [
    {
      image: "/images/drive_111OTmw-5OnABcNOMgnx4ko3C1cndGuPc.jpg",
      title: "Tanish Jain",
      subtitle: "Social media manager & website developer",
      handle: "@tanishjain",
      borderColor: "#7000FF",
      gradient: "linear-gradient(180deg, #7000FF, #000)",
    },
    {
      image: "/images/drive_10nFCmvCeEitMYkquFOZlifiAI7sbZdrh.jpg",
      title: "Dhruv Solanki",
      subtitle: "Draftsman",
      handle: "@dhruvsolanki",
      borderColor: "#00F3FF",
      gradient: "linear-gradient(180deg, #00F3FF, #000)",
    },
    {
      image: "/images/drive_1m5u6VbAhfgU-G97qKkeqMo_7Sspdvx1z.jpg",
      title: "Ronak Shah",
      subtitle: "Site supervisor",
      handle: "@ronakshah",
      borderColor: "#FF00E5",
      gradient: "linear-gradient(180deg, #FF00E5, #000)",
    }
  ];

  return (
    <div className="relative min-h-screen bg-black">
      {/* Cinematic Watermark matching Gallery style */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-0 touch-none overflow-hidden">
        <h2 className="text-white/[0.03] text-[200px] md:text-[450px] font-black uppercase tracking-tighter select-none rotate-12">About</h2>
      </div>

      <div className="fixed inset-0 z-0">
        <SafeImage 
          src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop" 
          alt="Architectural Backdrop" 
          objectFit="cover"
          className="w-full h-full opacity-20 brightness-50"
        />
        <div className="absolute inset-0 bg-black/60 backdrop-blur-[2px]" />
      </div>
      <Navbar />
      
      <main className="pt-24 pb-20">
        <div className="max-w-7xl mx-auto px-6">
          {/* Hero Section of About Page */}
          <section className="mb-4 relative">
            <div className="flex justify-between items-start mb-6 border-b border-white/10 pb-6">
              {/* "About" Label - Top Left Corner */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                className="flex flex-col gap-2"
              >
                <span className="text-neon-cyan text-[10px] font-bold tracking-[1em] uppercase font-mono">
                   About
                </span>
                <span className="text-white/70 text-4xl font-extralight tracking-tighter uppercase">Studio</span>
              </motion.div>

              {/* DSA Headline - Central and Small */}
              <motion.div 
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                className="absolute left-1/2 -translate-x-1/2 top-0"
              >
                <h1 className="text-[10px] md:text-xs font-medium text-white tracking-[0.6em] uppercase border border-white/20 px-8 py-3 rounded-full bg-black/40 backdrop-blur-md">
                  DSA Architects & Interior Design
                </h1>
              </motion.div>
              
              {/* Optional Right Accoutrement to balance */}
              <div className="hidden md:block text-right">
              </div>
            </div>

            {/* Split Content Layout */}
            <div className="grid lg:grid-cols-12 gap-8 items-start relative z-10">
              {/* Description Column - Left */}
              <div className="lg:col-span-8 space-y-8">
                <motion.div 
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                >
                  <p className="text-white text-2xl md:text-4xl font-light leading-snug tracking-tight mb-8 max-w-4xl">
                    <strong className="text-white font-medium border-b border-white/20 pb-1">DSA Architects & Interior Design</strong> is a creative studio dedicated to designing modern, functional, and elegant spaces.
                  </p>
                  <div className="w-20 h-[1px] bg-white/20 mb-8" />
                  <p className="text-white/80 text-xl font-light leading-relaxed">
                    Founded in 2018 by Ar. Dhwanish Shah, our firm focuses on delivering high-quality architectural and interior solutions that reflect both style and practicality.
                  </p>
                </motion.div>
                
                <motion.p 
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 }}
                  className="text-white/80 text-lg md:text-xl leading-relaxed font-light"
                >
                  We believe that every space should be a perfect balance of aesthetics and functionality. From residential homes to commercial projects, we work closely with our clients to understand their vision and bring it to life with precision and creativity.
                </motion.p>

                <motion.p 
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 }}
                  className="text-white/80 text-lg md:text-xl leading-relaxed font-light"
                >
                  Our approach is simple — clear planning, premium materials, and professional execution. We ensure timely project delivery, transparent processes, and attention to every detail, so our clients get the best results without compromise.
                </motion.p>

                <motion.div 
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 }}
                  className="pt-8 border-t border-white/10"
                >
                  <p className="text-white font-light text-2xl md:text-3xl tracking-tight leading-snug">
                    With a strong foundation in design and innovation, DSA continues to create spaces that are not just beautiful, but meaningful and long-lasting.
                  </p>
                </motion.div>
              </div>

              {/* Sidebar - Right side small gap maintained by gap-16 and lg:col-span-4 */}
              <motion.div 
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="lg:col-span-4 lg:sticky lg:top-40 space-y-8 pl-12 border-l border-white/10"
              >
                <div>
                  <h4 className="text-neon-cyan text-[10px] font-bold uppercase tracking-[0.3em] mb-4">Established</h4>
                  <p className="text-white text-2xl font-light">October 2018</p>
                </div>
                <div>
                  <h4 className="text-neon-cyan text-[10px] font-bold uppercase tracking-[0.3em] mb-4">Specialization</h4>
                  <p className="text-white text-xl font-light leading-relaxed">
                    Corporate Offices<br />
                    Premium Residency<br />
                    Boutique Retail
                  </p>
                </div>
                <div>
                  <h4 className="text-neon-cyan text-[10px] font-bold uppercase tracking-[0.3em] mb-4">Location</h4>
                  <p className="text-white text-xl font-light">Ahmedabad, India</p>
                </div>

              </motion.div>
            </div>
          </section>

          {/* Founder Section Integration */}
          <div id="founder-detailed" className="mt-4">
            <Assembly />
          </div>

          {/* ChromaGrid Team Section */}
          <section className="mt-4 mb-8 px-4 bg-black/40 pt-12 pb-12 rounded-[3rem] border border-white/5 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/20 to-black pointer-events-none" />
            <div className="max-w-7xl mx-auto relative z-10">
              <div className="flex flex-col items-center mb-12">
                <h2 className="text-white text-6xl md:text-7xl font-black tracking-tighter uppercase mb-4 opacity-90">Our Team</h2>
                <div className="w-40 h-[2px] bg-neon-cyan/50 shadow-[0_0_15px_rgba(0,243,255,0.5)]" />
              </div>
              
              <div className="relative min-h-[500px]">
                <ChromaGrid 
                  items={teamItems}
                  radius={400}
                  damping={0.4}
                  fadeOut={0.6}
                  columns={3}
                  rows={1}
                  ease="power3.out"
                  className="team-chroma-grid"
                />
              </div>
            </div>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
};
