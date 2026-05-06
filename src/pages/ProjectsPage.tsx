import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Navbar } from '../components/Navbar';
import { cn } from '@/src/lib/utils';

import { HomeGallery } from '../components/HomeGallery';

const PROJECTS_IMAGES = [
  {
    id: 'res-dsa-01',
    src: 'https://lh3.googleusercontent.com/d/1IvJZ2tMlDc86dsptcjWoTjVBbn2GLJXe',
    alt: 'Lakeside Pavilion',
    category: 'Residential'
  },
  {
    id: 'res-dsa-02',
    src: 'https://lh3.googleusercontent.com/d/1zaZHAGa2m57NF8IZXKgQfkCN6--SVy3I',
    alt: 'Modernist Villa',
    category: 'Residential'
  },
  {
    id: 'comm-dsa-01',
    src: 'https://lh3.googleusercontent.com/d/1lT_rM9G9pB9t4vHywDCfQy7h5OHwJM41',
    alt: 'Corporate Hub',
    category: 'Commercial'
  },
  {
    id: 'other-dsa-01',
    src: 'https://lh3.googleusercontent.com/d/1XibxVzxzjgvmI85XDUywtUpJTUus7bzM',
    alt: 'Conceptual Design',
    category: 'Other'
  },
  {
    id: 'res-dsa-04',
    src: 'https://lh3.googleusercontent.com/d/1ATpVoCZUuKvgssfy4TcClIPCA6v8K3yz',
    alt: 'Living Space',
    category: 'Residential'
  },
  {
    id: 'res-dsa-05',
    src: 'https://lh3.googleusercontent.com/d/1UlOsOlkAnM_Z-ohufO0QsFR1gQ7NzcnK',
    alt: 'Interior Detail',
    category: 'Residential'
  },
  {
    id: 'res-dsa-06',
    src: 'https://lh3.googleusercontent.com/d/18wghnSqoU4DceWGwb3OrGqMIb-bCrx_4',
    alt: 'Master Bedroom',
    category: 'Residential'
  },
  {
    id: 'res-dsa-07',
    src: 'https://lh3.googleusercontent.com/d/1Tzq0ooCQnYLh-F6ns11Wfy1QK7K3W0jh',
    alt: 'Minimalist Void',
    category: 'Residential'
  },
  {
    id: 'res-dsa-08',
    src: 'https://lh3.googleusercontent.com/d/1fQxUcOX6Xya8S1QgM-SEPknvST3Z-XPV',
    alt: 'Corridor Perspective',
    category: 'Residential'
  },
  {
    id: 'comm-dsa-02',
    src: 'https://lh3.googleusercontent.com/d/1_BEEwFeRswSl-qmhg6cGM3CSVZBNxitc',
    alt: 'Material Dialogue',
    category: 'Commercial'
  },
  {
    id: 'comm-dsa-03',
    src: 'https://lh3.googleusercontent.com/d/1n1BRt7ypqRy_2DlVe1vLwKxtfrSIOAor',
    alt: 'Business Center',
    category: 'Commercial'
  },
  {
    id: 'comm-dsa-04',
    src: 'https://lh3.googleusercontent.com/d/11TbTFOKmmDw5GgkEcUPklEkQgWW9u06Z',
    alt: 'Iconic Shyamal',
    category: 'Commercial'
  },
  {
    id: 'comm-dsa-05',
    src: 'https://lh3.googleusercontent.com/d/1GqZsuB4FzUy9H9QA2Cnm0_ZPTsVWxnhs',
    alt: 'Safal Commercial',
    category: 'Commercial'
  },
  {
    id: 'res-dsa-09',
    src: 'https://lh3.googleusercontent.com/d/1A7n2KoNaNadZKVmfg8rAfJLm45iip4Ki',
    alt: 'Sasan Bhai Residential',
    category: 'Residential'
  }
];

export const ProjectsPage: React.FC = () => {
  const [activeFilter, setActiveFilter] = React.useState<string>('All');
  
  const filteredProjects = activeFilter === 'All' 
    ? PROJECTS_IMAGES 
    : PROJECTS_IMAGES.filter(p => p.category === activeFilter);

  const tagline = "Exploring curated architectural masterpieces through the lens of meticulous design and modern innovation.";
  const words = tagline.split(" ");

  return (
    <div className="relative w-full min-h-screen bg-black select-none no-scrollbar">
      <Navbar />
      {/* 1. TOP HERO: TemplateMonster Style Design */}
      <section className="relative h-screen flex flex-col lg:flex-row overflow-hidden bg-[#050505]">
        {/* Extreme Left: Decorative Bar */}
        <div className="hidden lg:flex flex-col items-center justify-end pb-12 w-24 border-r border-white/5 relative z-30">
          <div className="w-[1px] h-64 bg-gradient-to-t from-neon-cyan/50 to-transparent" />
        </div>

        {/* Left Column: Narrative & Typography */}
        <div className="flex-1 flex flex-col justify-center px-10 lg:px-20 relative z-20">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
          >
            <span className="text-neon-cyan text-[10px] font-bold tracking-[0.5em] mb-8 block uppercase border-l-2 border-neon-cyan pl-4">
              Complete project DSA
            </span>
            <div className="relative">
              <h1 className="text-6xl md:text-8xl lg:text-[110px] font-sans font-bold text-white leading-[0.9] tracking-tighter mb-10">
                PROJECTS
              </h1>
              {/* Large Outline Background Text */}
              <div className="absolute -top-10 -left-6 text-[150px] font-bold opacity-[0.03] select-none pointer-events-none text-white whitespace-nowrap">
                PROJECTS
              </div>
            </div>
            
            <p className="text-white/50 text-base md:text-lg max-w-md leading-relaxed font-light mb-12 border-l border-white/10 pl-8">
              A collection of architectural narratives that redefine modern living through 
              timeless aesthetics and meticulous spatial planning.
            </p>

            <div className="flex items-center gap-10 mb-16">
              <Link to="/#contact">
                 <motion.button 
                   whileHover={{ scale: 1.05 }}
                   whileTap={{ scale: 0.95 }}
                   className="px-12 py-5 bg-white text-black text-[10px] font-bold tracking-[0.3em] uppercase rounded-full hover:bg-neon-cyan hover:text-white transition-all shadow-2xl"
                 >
                   Inquire Now
                 </motion.button>
              </Link>
              <div className="flex items-center gap-4 group cursor-pointer">
                <div className="w-12 h-[1px] bg-white/20 group-hover:w-20 transition-all duration-500" />
                <span className="text-[10px] font-bold tracking-[0.3em] text-white/60 uppercase group-hover:text-white transition-colors">Discover</span>
              </div>
            </div>

            {/* Straight Social Links */}
            <div className="flex items-center gap-8 text-[10px] tracking-[0.3em] font-bold uppercase text-white/30">
              <a href="https://www.instagram.com/dsa.architects.and.interiors" target="_blank" rel="noopener noreferrer" className="hover:text-neon-cyan transition-colors">Instagram</a>
              <span className="w-8 h-[1px] bg-white/10" />
              <a href="#" className="hover:text-neon-cyan transition-colors">Facebook</a>
              <span className="w-8 h-[1px] bg-white/10" />
              <a href="#" className="hover:text-neon-cyan transition-colors">Pinterest</a>
            </div>
          </motion.div>
        </div>

        {/* Right Column: Hero Image Frame */}
        <div className="hidden lg:block lg:w-[45%] relative overflow-hidden group">
          <motion.div
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 2, ease: "easeOut" }}
            className="w-full h-full"
          >
            <img 
              src="https://lh3.googleusercontent.com/d/151kmI4LQypjKjzhQatTQCO-aAXyGuBhE" 
              alt="Architectural Masterpiece" 
              loading="lazy"
              decoding="async"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-[3s]"
              referrerPolicy="no-referrer"
              onError={(e) => {
                const img = e.currentTarget;
                if (img.src.includes('lh3.googleusercontent.com/d/')) {
                  img.src = img.src.replace('lh3.googleusercontent.com/d/', 'lh3.googleusercontent.com/u/0/d/');
                }
              }}
            />
            {/* Glossy Overlay */}
            <div className="absolute inset-0 bg-gradient-to-l from-transparent via-transparent to-[#050505]" />
          </motion.div>

          {/* Floating Stats or Numbers */}
          <div className="absolute bottom-20 left-0 translate-x-[-50%] z-30">
            <div className="flex flex-col items-center">
              <span className="text-[120px] font-bold text-white/10 leading-none">01</span>
              <div className="w-20 h-[2px] bg-neon-cyan" />
            </div>
          </div>
        </div>

        {/* Mobile View Background Image (Overlay) */}
        <div className="lg:hidden absolute inset-0 -z-10 opacity-30">
          <img 
            src="https://lh3.googleusercontent.com/d/151kmI4LQypjKjzhQatTQCO-aAXyGuBhE" 
            alt="Mobile Bg" 
            className="w-full h-full object-cover grayscale"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black via-black/80 to-black" />
        </div>

        {/* Refined Scroll Indicator */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.4 }}
          transition={{ delay: 2, duration: 1 }}
          className="absolute bottom-10 right-10 flex items-center gap-6"
        >
          <span className="text-[9px] tracking-[0.5em] text-white/40 uppercase">Architecture Hero 02</span>
          <div className="w-16 h-[1px] bg-white/20" />
        </motion.div>
      </section>

      {/* Filter Section - High Energy Cinematic Style */}
      <section className="bg-black py-16 border-b border-white/5 relative overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute top-0 left-0 w-full h-full pointer-events-none opacity-20">
          <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-neon-cyan/20 rounded-full blur-[120px] animate-pulse" />
          <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-electric-purple/10 rounded-full blur-[120px] animate-pulse delay-700" />
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="text-center mb-12"
          >
            <span className="text-neon-cyan text-[10px] font-black tracking-[1em] uppercase block mb-4">Discovery</span>
            <h2 className="text-white text-3xl md:text-5xl font-display font-thin tracking-widest uppercase">
              Project <span className="text-gradient font-bold italic">Spheres</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {[
              { name: 'All', img: 'https://lh3.googleusercontent.com/d/151kmI4LQypjKjzhQatTQCO-aAXyGuBhE', type: 'Complete' },
              { name: 'Residential', img: 'https://lh3.googleusercontent.com/d/1zaZHAGa2m57NF8IZXKgQfkCN6--SVy3I', type: 'Living' },
              { name: 'Commercial', img: 'https://lh3.googleusercontent.com/d/1lT_rM9G9pB9t4vHywDCfQy7h5OHwJM41', type: 'Workspace' },
              { name: 'Other', img: 'https://lh3.googleusercontent.com/d/1XibxVzxzjgvmI85XDUywtUpJTUus7bzM', type: 'Concept' }
            ].map((cat, idx) => (
              <motion.button
                key={cat.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: idx * 0.1 }}
                whileHover={{ y: -10 }}
                onClick={() => setActiveFilter(cat.name)}
                className={cn(
                  "relative h-[350px] rounded-3xl transition-all duration-700 overflow-hidden text-left group",
                  activeFilter === cat.name 
                    ? "ring-2 ring-neon-cyan ring-offset-4 ring-offset-black shadow-[0_0_50px_rgba(30,227,249,0.3)]" 
                    : "ring-1 ring-white/10 opacity-70 hover:opacity-100"
                )}
              >
                {/* Background Image with Layered Overlays */}
                <img 
                   src={cat.img} 
                   alt={cat.name} 
                   loading="lazy"
                   decoding="async"
                   className="absolute inset-0 w-full h-full object-cover object-top transition-all duration-1000 group-hover:scale-110"
                   referrerPolicy="no-referrer"
                   onError={(e) => {
                     const img = e.currentTarget;
                     if (img.src.includes('lh3.googleusercontent.com/d/')) {
                       img.src = img.src.replace('lh3.googleusercontent.com/d/', 'lh3.googleusercontent.com/u/0/d/');
                     }
                   }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
                <div className={cn(
                  "absolute inset-0 transition-opacity duration-1000 bg-neon-cyan/10",
                  activeFilter === cat.name ? "opacity-100" : "opacity-0 group-hover:opacity-100"
                )} />

                {/* Content */}
                <div className="absolute inset-0 p-8 flex flex-col justify-end">
                  <motion.div 
                    layout
                    className="flex flex-col gap-2"
                  >
                    <span className={cn(
                      "text-[9px] font-black tracking-[0.4em] uppercase transition-all",
                      activeFilter === cat.name ? "text-neon-cyan" : "text-white/40"
                    )}>
                      {cat.type} 0{idx + 1}
                    </span>
                    <h3 className="text-3xl font-display font-medium text-white tracking-tight leading-tight">
                      {cat.name}
                    </h3>
                  </motion.div>
                  
                  {/* Subtle Interactive Line */}
                  <div className={cn(
                    "w-0 h-[2px] bg-neon-cyan mt-4 transition-all duration-700 group-hover:w-full",
                    activeFilter === cat.name ? "w-full shadow-[0_0_10px_#1ee3f9]" : "w-0"
                  )} />
                </div>

                {/* Floating Selection Indicator */}
                <AnimatePresence>
                  {activeFilter === cat.name && (
                    <motion.div 
                      initial={{ scale: 0, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      className="absolute top-6 right-6 w-10 h-10 bg-neon-cyan text-black rounded-full flex items-center justify-center shadow-[0_0_20px_rgba(30,227,249,0.5)] z-20"
                    >
                      <div className="w-4 h-4 border-b-2 border-r-2 border-black rotate-45 mb-1" />
                    </motion.div>
                  )}
                </AnimatePresence>
                
                {/* Large Number Accent */}
                <div className="absolute top-4 left-6 text-9xl font-black italic text-white/5 select-none pointer-events-none group-hover:text-white/10 transition-all">
                  0{idx + 1}
                </div>
              </motion.button>
            ))}
          </div>
        </div>
      </section>

      <section className="relative z-20 px-6 py-16 bg-obsidian/40 backdrop-blur-3xl border-y border-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col gap-32">
            {filteredProjects.map((project, i) => (
              <motion.div 
                key={project.id}
                layout
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: i * 0.1 }}
                className={`flex flex-col ${i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} gap-12 md:gap-24 items-center`}
              >
                <div className="w-full md:w-1/2 aspect-[16/9] overflow-hidden rounded-2xl border border-white/10 group relative">
                  <img 
                    src={project.src} 
                    alt={project.alt} 
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full object-cover object-top transition-all duration-1000 hover:scale-110"
                    referrerPolicy="no-referrer"
                    onError={(e) => {
                      const img = e.currentTarget;
                      if (img.src.includes('lh3.googleusercontent.com/d/')) {
                        img.src = img.src.replace('lh3.googleusercontent.com/d/', 'lh3.googleusercontent.com/u/0/d/');
                      }
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>
                <div className="w-full md:w-1/2 flex flex-col gap-8">
                  <span className="text-neon-cyan text-[11px] font-bold tracking-[0.5em] uppercase">Featured Case Study</span>
                  <h3 className="text-4xl md:text-6xl font-display font-thin text-white tracking-tight">{project.alt}</h3>
                  <p className="text-white/40 text-base leading-relaxed max-w-md font-light">
                    Redefining contemporary living through an uncompromising commitment to structural integrity and spatial harmony. This project stands as a testament to the DSA design philosophy.
                  </p>
                  <div className="flex gap-6">
                    <Link to={`/project/${project.id}`}>
                      <button className="px-10 py-4 rounded-full bg-white text-obsidian text-[10px] font-bold tracking-widest uppercase hover:bg-neon-cyan transition-all">
                        Case Study
                      </button>
                    </Link>
                    <Link to={`/project/${project.id}#gallery`}>
                      <button className="px-10 py-4 rounded-full border border-white/10 text-white text-[10px] font-bold tracking-widest uppercase hover:bg-white/5 transition-all">
                        Gallery
                      </button>
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Ambient Glows */}
      <div className="fixed -top-1/4 -left-1/4 w-1/2 h-1/2 bg-neon-cyan/5 rounded-full blur-[150px] pointer-events-none" />
      <div className="fixed -bottom-1/4 -right-1/4 w-1/2 h-1/2 bg-electric-purple/5 rounded-full blur-[150px] pointer-events-none" />
    </div>
  );
};
