import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import DomeGallery from '../components/DomeGallery';
import { cn } from '@/src/lib/utils';
import { SafeImage } from '../components/SafeImage';

const PROJECTS_IMAGES = [
  {
    id: 'comm-dsa-04',
    src: 'https://lh3.googleusercontent.com/d/16UwjT1SSzMIS4bVDiB8ZcntJuJcSwtrQ',
    alt: 'A & A Wealth',
    category: 'Commercial',
    description: 'A & A Wealth is a modern commercial office space designed to create a professional yet comfortable working environment. The project features elegant interiors, premium materials, warm lighting, and smart space planning that together give the office a sophisticated and welcoming feel.'
  },
  {
    id: 'res-dsa-02',
    src: 'https://lh3.googleusercontent.com/d/1zaZHAGa2m57NF8IZXKgQfkCN6--SVy3I',
    alt: 'The White House',
    category: 'Residential',
    description: 'The White House is a modern architectural masterpiece featuring clean lines, minimal aesthetics, and functional design tailored for luxury living.'
  },
  {
    id: 'res-dsa-10',
    src: 'https://lh3.googleusercontent.com/d/1T8U7brn4ddyC2AvlBXLJe_Q6lR9r8gEB',
    alt: 'Serene Sanctuary',
    category: 'Residential',
    description: 'Serene Sanctuary is an elegant luxury residential interior showcasing magnificent spatial design, sophisticated bespoke fittings, warm lighting, and a modern minimal layout that provides the ultimate cozy and premium comfort.'
  },
  {
    id: 'comm-dsa-06',
    src: 'https://lh3.googleusercontent.com/d/1ZfjIAL296LD5uhCuifOGUUhAAFEkFWoB',
    alt: 'iFlair',
    category: 'Commercial',
    description: 'iFlair is a modern commercial office space designed with clean interiors, smart workspace planning, and contemporary aesthetics to create a comfortable and productive working environment.'
  },
  {
    id: 'comm-dsa-01',
    src: 'https://lh3.googleusercontent.com/d/1lT_rM9G9pB9t4vHywDCfQy7h5OHwJM41',
    alt: 'Achira Diamond & Fashion',
    category: 'Commercial',
    description: 'Achira Diamond & Fashion is a premium boutique commercial project designed with a focus on sophisticated interiors, efficient layout, and modern lighting to create a professional business environment.'
  },
  {
    id: 'res-dsa-04',
    src: 'https://lh3.googleusercontent.com/d/1ATpVoCZUuKvgssfy4TcClIPCA6v8K3yz',
    alt: 'JS House',
    category: 'Residential',
    description: 'JS House is a modern residential interior designed with warm textures, elegant furniture, and a clean contemporary layout to create a comfortable and inviting living experience.'
  },
  {
    id: 'comm-dsa-02',
    src: 'https://lh3.googleusercontent.com/d/1_BEEwFeRswSl-qmhg6cGM3CSVZBNxitc',
    alt: 'JD Office',
    category: 'Commercial',
    description: 'A premium JD office designed with elegant interiors, warm lighting, and modern detailing to create a professional yet luxurious workspace. The space combines comfort, sophistication, and functionality for a refined office experience.'
  },
  {
    id: 'res-dsa-06',
    src: 'https://lh3.googleusercontent.com/d/18wghnSqoU4DceWGwb3OrGqMIb-bCrx_4',
    alt: 'DHS House',
    category: 'Residential',
    description: 'DHS House is a modern residential interior designed with clean lines, premium materials, and warm lighting to create a sophisticated and welcoming home environment.'
  },
  {
    id: 'res-dsa-01',
    src: 'https://lh3.googleusercontent.com/d/1IvJZ2tMlDc86dsptcjWoTjVBbn2GLJXe',
    alt: 'Subtle Sanctuary',
    category: 'Residential',
    description: 'This home interior combines simplicity, functionality, and modern design with soft color tones, spacious layouts, and refined finishes for comfortable everyday living'
  },
  {
    id: 'comm-dsa-05',
    src: 'https://lh3.googleusercontent.com/d/1n1BRt7ypqRy_2DlVe1vLwKxtfrSIOAor',
    alt: 'Safal',
    category: 'Commercial',
    description: 'Safal is a modern commercial project designed with efficient space planning and premium detailing to create a professional business environment.'
  },
  {
    id: 'res-dsa-08',
    src: 'https://lh3.googleusercontent.com/d/1fQxUcOX6Xya8S1QgM-SEPknvST3Z-XPV',
    alt: 'Anchor House',
    category: 'Residential',
    description: 'Anchor House is a modern residential interior designed with warm tones, elegant wall detailing, and comfortable seating to create a calm and welcoming living space'
  },
  {
    id: 'res-dsa-07',
    src: 'https://lh3.googleusercontent.com/d/1Tzq0ooCQnYLh-F6ns11Wfy1QK7K3W0jh',
    alt: 'CP House',
    category: 'Residential',
    description: 'JS House This home interior combines simplicity and elegance through minimal design, soft color tones, and smart space planning for a modern everyday lifestyle.'
  },
  {
    id: 'res-dsa-05',
    src: 'https://lh3.googleusercontent.com/d/1UlOsOlkAnM_Z-ohufO0QsFR1gQ7NzcnK',
    alt: 'JD Bedroom',
    category: 'Residential',
    description: 'JS House Designed with a balance of luxury and comfort, this JD Bedroom offers modern interiors, rich textures, and a peaceful ambiance perfect for everyday relaxation.'
  },
  {
    id: 'res-dsa-09',
    src: 'https://lh3.googleusercontent.com/d/1A7n2KoNaNadZKVmfg8rAfJLm45iip4Ki',
    alt: 'Shela House',
    category: 'Residential',
    description: 'Shela House is a modern residential interior designed with clean lines, warm lighting, and elegant finishes that create a calm and welcoming living experience.'
  },
  {
    id: 'comm-dsa-07',
    src: 'https://lh3.googleusercontent.com/d/10bqHIbfF1VJqrGk1I_iC9AyLh_aKscph',
    alt: 'Shlip Aaron',
    category: 'Commercial',
    description: 'Shlip Aaron is a premium commercial office space featuring state-of-the-art office interiors, modern materials, sophisticated lighting designs, and highly functional workspace planning.'
  }
];

export const ProjectsPage: React.FC = () => {
  const [activeFilter, setActiveFilter] = React.useState<string>(() => {
    return sessionStorage.getItem('projects-active-filter') || 'All';
  });
  
  React.useEffect(() => {
    sessionStorage.setItem('projects-active-filter', activeFilter);
  }, [activeFilter]);
  
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
              <div className="absolute -top-10 -left-6 text-[150px] font-bold opacity-[0.05] select-none pointer-events-none text-white whitespace-nowrap">
                PROJECTS
              </div>
            </div>
            
            <p className="text-white/80 text-base md:text-lg max-w-md leading-relaxed font-light mb-12 border-l border-white/10 pl-8">
              A collection of architectural narratives that redefine modern living through 
              timeless aesthetics and meticulous spatial planning.
            </p>

            {/* High-End Social Links */}
            <div className="flex items-center gap-10 text-[11px] tracking-[0.4em] font-bold uppercase">
              <a 
                href="https://www.instagram.com/dsa.architects.and.interiors" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-white/80 hover:text-white transition-all duration-500 hover:scale-105"
              >
                Instagram
              </a>
              <span className="w-10 h-[1px] bg-white/10" />
              <a 
                href="https://www.facebook.com/dsa.architects.and.interiors" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-white/80 hover:text-white transition-all duration-500 hover:scale-105"
              >
                Facebook
              </a>
              <span className="w-10 h-[1px] bg-white/10" />
              <a 
                href="https://www.linkedin.com/company/dsa-architects-interiors/?viewAsMember=true" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-white/80 hover:text-white transition-all duration-500 hover:scale-105"
              >
                LinkedIn
              </a>
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
            <SafeImage 
              src="https://lh3.googleusercontent.com/d/151kmI4LQypjKjzhQatTQCO-aAXyGuBhE" 
              alt="Architectural Masterpiece" 
              loading="eager"
              decoding="async"
              size="hero"
              objectFit="cover"
              className="w-full h-full group-hover:scale-105 transition-transform duration-[3s]"
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
          <SafeImage 
            src="https://lh3.googleusercontent.com/d/151kmI4LQypjKjzhQatTQCO-aAXyGuBhE" 
            alt="Mobile Bg" 
            objectFit="cover"
            className="w-full h-full grayscale-0"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black via-black/80 to-black" />
        </div>

        {/* Refined Scroll Indicator */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.4 }}
          transition={{ delay: 2, duration: 1 }}
          className="absolute bottom-10 right-10 flex items-center gap-6 optimize-gpu"
        >
          <span className="text-[9px] tracking-[0.5em] text-white/70 uppercase">Architecture Hero 02</span>
          <div className="w-16 h-[1px] bg-white/20" />
        </motion.div>
      </section>

      {/* Filter Section - High Energy Cinematic Style */}
      <section className="bg-black pt-16 pb-6 border-b border-white/5 relative overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute top-0 left-0 w-full h-full pointer-events-none opacity-20">
          <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-neon-cyan/20 rounded-full blur-[120px] animate-pulse" />
          <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-electric-purple/10 rounded-full blur-[120px] animate-pulse delay-700" />
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            className="text-center mb-8"
          >
            <span className="text-neon-cyan text-[10px] font-black tracking-[1em] uppercase block mb-3">Discovery</span>
            <h2 className="text-white text-3xl md:text-5xl font-display font-thin tracking-widest uppercase">
              Project <span className="text-gradient font-bold">Spheres</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {[
              { name: 'All', img: 'https://lh3.googleusercontent.com/d/151kmI4LQypjKjzhQatTQCO-aAXyGuBhE', type: 'Complete' },
              { name: 'Residential', img: 'https://lh3.googleusercontent.com/d/1zaZHAGa2m57NF8IZXKgQfkCN6--SVy3I', type: 'Living' },
              { name: 'Commercial', img: 'https://lh3.googleusercontent.com/d/1lT_rM9G9pB9t4vHywDCfQy7h5OHwJM41', type: 'Luxe Retail' },
              { name: 'Dome Gallery', img: 'https://lh3.googleusercontent.com/d/1XibxVzxzjgvmI85XDUywtUpJTUus7bzM', type: 'Concept' }
            ].map((cat, idx) => (
              <motion.button
                key={cat.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: idx * 0.1 }}
                whileHover={{ y: -5 }}
                onClick={() => {
                  setActiveFilter(cat.name);
                  const element = document.getElementById('project-results');
                  if (element) {
                    element.scrollIntoView({ behavior: 'smooth', block: 'start' });
                  }
                }}
                className={cn(
                  "relative h-[220px] rounded-3xl transition-all duration-700 overflow-hidden text-left group",
                  activeFilter === cat.name 
                    ? "ring-2 ring-neon-cyan ring-offset-4 ring-offset-black shadow-[0_0_50px_rgba(30,227,249,0.3)]" 
                    : "ring-1 ring-white/10 opacity-70 hover:opacity-100"
                )}
              >
                {/* Background Image with Layered Overlays */}
                <SafeImage 
                   src={cat.img} 
                   alt={cat.name} 
                   loading="lazy"
                   decoding="async"
                   size="medium"
                   objectFit="cover"
                   className="absolute inset-0 w-full h-full object-top transition-all duration-1000 group-hover:scale-110"
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
                      activeFilter === cat.name ? "text-neon-cyan" : "text-white/70"
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
                <div className="absolute top-4 left-6 text-9xl font-black text-white/5 select-none pointer-events-none group-hover:text-white/10 transition-all">
                  0{idx + 1}
                </div>
              </motion.button>
            ))}
          </div>
        </div>
      </section>

      <div id="project-results" className="scroll-mt-24" />
      
      <AnimatePresence mode="wait">
        {activeFilter === 'Dome Gallery' ? (
          <motion.section 
            key="dome-gallery"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: '100vh' }}
            exit={{ opacity: 0, height: 0 }}
            className="relative w-full bg-black overflow-hidden"
          >
            <DomeGallery 
              images={[
                'https://lh3.googleusercontent.com/d/1IvJZ2tMlDc86dsptcjWoTjVBbn2GLJXe',
                'https://lh3.googleusercontent.com/d/1WC-BXDJSfS3GKFozaBavmZkHfrGeWE8k',
                'https://lh3.googleusercontent.com/d/1cb-sHqV2zBhZm-q_xzutywoL5Mk38mOx',
                'https://lh3.googleusercontent.com/d/1A-GMMiT7zVSVme_9ANjVRoJpd6cbuNjY',
                'https://lh3.googleusercontent.com/d/1ATpVoCZUuKvgssfy4TcClIPCA6v8K3yz',
                'https://lh3.googleusercontent.com/d/1QtyrH4BL03_19HDNi4U5L8jdjWxbGmqG',
                'https://lh3.googleusercontent.com/d/1UlOsOlkAnM_Z-ohufO0QsFR1gQ7NzcnK',
                'https://lh3.googleusercontent.com/d/1zLZcMS7ehDmOXqZ3xftn68HSZIpPf-eG',
                'https://lh3.googleusercontent.com/d/1WTeS-ivEHtUgCizv4QWCr-0OMg4-h8gT',
                'https://lh3.googleusercontent.com/d/13dT40m1keBawrXj_LTFiqHf5L68DurIW',
                'https://lh3.googleusercontent.com/d/1OlTdX7oAFnvHokByvAo7CDRtG3Ev0jKh',
                'https://lh3.googleusercontent.com/d/1WcsfUWRrmZ3_KCXMIssJEjm0p6WzBCld',
                'https://lh3.googleusercontent.com/d/1-muYkqhKVHIFcPnOTRMuHckfveopxo9M',
                'https://lh3.googleusercontent.com/d/1EsMLe08jkprzx3ZDo1GAcmzZH3N-Frpp',
                'https://lh3.googleusercontent.com/d/1U7YxzdLn1xQcth_3bK9aNjKxS9XHEMJ9',
                'https://lh3.googleusercontent.com/d/1f9c0oNatpygcipVjuBuTEn6JukHXPiXT',
                'https://lh3.googleusercontent.com/d/1fQxUcOX6Xya8S1QgM-SEPknvST3Z-XPV',
                'https://lh3.googleusercontent.com/d/1W3WQQZozxeLqmqfLGkhsrE2YFcShJycD',
                'https://lh3.googleusercontent.com/d/1nCDhbW97MEx7Teo-E8-0FM74rds5iXr6',
                'https://lh3.googleusercontent.com/d/1sN2oH3O1ZuOl6CPssgOQXNVWE-gAe6Yf',
                'https://lh3.googleusercontent.com/d/1A7n2KoNaNadZKVmfg8rAfJLm45iip4Ki',
                'https://lh3.googleusercontent.com/d/1CwpouFmp3RkObvO8v0kStEZr5Qho1upO',
                'https://lh3.googleusercontent.com/d/1VmORiXXnSwLwAMa6ZFZNUyFSeODRuJvZ',
                'https://lh3.googleusercontent.com/d/17OkF3i4Ktbnkjw21ieEtiueXdcppqQhA',
                'https://lh3.googleusercontent.com/d/1UZf7kEu_LgU7H725aGhIs2oD3r7dxsaL',
                'https://lh3.googleusercontent.com/d/1yNArVeNijD0ZdMs_b6gVzA4cDGZQrNDa',
                'https://lh3.googleusercontent.com/d/1BFzYFW7w2D_fSzHxGGXC0jP_9NLJ1k0O',
                'https://lh3.googleusercontent.com/d/1O52HcsPN87XM4fbK7Geh4MXe4Gd49je-',
                'https://lh3.googleusercontent.com/d/1_BEEwFeRswSl-qmhg6cGM3CSVZBNxitc',
                'https://lh3.googleusercontent.com/d/16UwjT1SSzMIS4bVDiB8ZcntJuJcSwtrQ',
                'https://lh3.googleusercontent.com/d/1JHPhEFvokVoMViai2JRY2C97I_wcZ5Ap',
                'https://lh3.googleusercontent.com/d/1gtqBoeZxA4aXSYVrnm_ldNO2G0aOFjhJ',
                'https://lh3.googleusercontent.com/d/1Wi0ySgvW2nXAkjt9VZO_142AScdkhoe5',
                'https://lh3.googleusercontent.com/d/1cCkNNGVuquVa7qJsIwU3DaB3HmLywvn5',
                'https://lh3.googleusercontent.com/d/1w2v0x_u3_eykFh4KxJHv9UdmK4AL_PrY',
                'https://lh3.googleusercontent.com/d/1i2Yqp-lSj_-Jjv7UUTPNFJDn0OhmvOr2',
                'https://lh3.googleusercontent.com/d/1n1BRt7ypqRy_2DlVe1vLwKxtfrSIOAor',
                'https://lh3.googleusercontent.com/d/1x4dXgc6hRFY3orI353oZn6N5aqjmkWRt',
                'https://lh3.googleusercontent.com/d/1-z9QVSJHey4ihF6Pwnj26-KEnj-wKPUV',
                'https://lh3.googleusercontent.com/d/13nXjHCUV7Xwp08vBD9hlm7_OuAj5ojeA',
                'https://lh3.googleusercontent.com/d/16DTIb9D_Uc7F_EZNe2bUHR8Ho1yNrEia',
                'https://lh3.googleusercontent.com/d/18SLksv2YuecX-2m5uf_0RjLZhSrBaF7P',
                'https://lh3.googleusercontent.com/d/1KVLAxgv8m7HbwmUkQyjXAR1mYoWGRZyP',
                'https://lh3.googleusercontent.com/d/1fRywdtBR8KPW3elUsh2gVq1DDGUKaCZO',
              ]}
              fit={0.8}
              fitBasis="height"
              padFactor={0.02}
              minRadius={600}
              maxVerticalRotationDeg={4}
              segments={28}
              grayscale={false}
              overlayBlurColor="#000000"
              openedImageWidth="min(1200px, 90vw)"
              openedImageHeight="min(800px, 85vh)"
              imageBorderRadius="50%"
              openedImageBorderRadius="12px"
            />
          </motion.section>
        ) : (
          <section 
            className="relative z-20 px-6 py-16 bg-obsidian/40 backdrop-blur-3xl border-y border-white/5 content-visibility-auto"
          >
            <div className="max-w-7xl mx-auto">
              <div className="flex flex-col gap-32">
                {filteredProjects.map((project, i) => (
                  <motion.div 
                    key={project.id}
                    layout
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 1, delay: i * 0.1 }}
                    className={`flex flex-col ${i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} gap-12 md:gap-24 items-center`}
                  >
                    <div className="w-full md:w-1/2 aspect-[16/9] overflow-hidden rounded-2xl border border-white/10 group relative">
                      <SafeImage 
                        src={project.src} 
                        alt={project.alt} 
                        loading="lazy"
                        decoding="async"
                        size="medium"
                        objectFit="cover"
                        className="w-full h-full object-top transition-all duration-1000 hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    </div>
                    <div className="w-full md:w-1/2 flex flex-col gap-8">
                      <span className="text-neon-cyan text-[11px] font-bold tracking-[0.5em] uppercase">Project Discovery</span>
                      <h3 className="text-4xl md:text-6xl font-display font-thin text-white tracking-tight">{project.alt}</h3>
                      <p className="text-white/70 text-base leading-relaxed max-w-md font-light">
                        {project.description || 'Redefining contemporary living through an uncompromising commitment to structural integrity and spatial harmony. This project stands as a testament to the DSA design philosophy.'}
                      </p>
                      <div className="flex gap-6">
                        <Link to={`/project/${project.id}`}>
                          <button className="px-10 py-4 rounded-full bg-white text-obsidian text-[10px] font-bold tracking-widest uppercase hover:bg-neon-cyan transition-all">
                            View Project Gallery
                          </button>
                        </Link>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>
        )}
      </AnimatePresence>

      {/* Ambient Glows */}
      <div className="fixed -top-1/4 -left-1/4 w-1/2 h-1/2 bg-neon-cyan/5 rounded-full blur-[150px] pointer-events-none optimize-gpu" />
      <div className="fixed -bottom-1/4 -right-1/4 w-1/2 h-1/2 bg-electric-purple/5 rounded-full blur-[150px] pointer-events-none optimize-gpu" />
      
      <Footer />
    </div>
  );
};
