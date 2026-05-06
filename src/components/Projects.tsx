import React from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { ScrollVelocity } from './ScrollVelocity';
import Stack from './Stack';
import CountUp from './CountUp';

const industryExpertise = [
  "Designer", "Client", "Electrician", "Plumber", "Contractor", 
  "POP", "Mistry", "AC", "Curtain", "Glass", "Plywood", 
  "Hardware", "Laminate", "List", "Paint", "Texture", "Premium Hardware", 
  "Fabricator", "Tiles", "Marble", "Fabric", "Sanitary Fixtures", 
  "Switchboard", "Chair", "Sofa", "Dining Table", "Flooring", 
  "Fan", "Handle", "Jali", "Ceiling", "Flooring"
];

const stackImages = [
  "https://lh3.googleusercontent.com/d/1zaZHAGa2m57NF8IZXKgQfkCN6--SVy3I",
  "https://lh3.googleusercontent.com/d/151kmI4LQypjKjzhQatTQCO-aAXyGuBhE",
  "https://lh3.googleusercontent.com/d/18ZAqVZ_dUvWc_Ty2yITX2JVYMpQl0C96",
  "https://lh3.googleusercontent.com/d/18_7CMiYHoSYBhdpz3wpWKfoQkGwhUvof",
  "https://lh3.googleusercontent.com/d/1EsMLe08jkprzx3ZDo1GAcmzZH3N-Frpp",
  "https://lh3.googleusercontent.com/d/1H6q1qNWQHacRX-hMgou8B1FiWhRQChA9",
  "https://lh3.googleusercontent.com/d/1QLoxtToMtlmg-ipEwkZmSlumXOUQN8xl",
  "https://lh3.googleusercontent.com/d/1RAbB85Awvx_M7HDwpeLTHFHe_hVhD5Ei",
  "https://lh3.googleusercontent.com/d/1U7YxzdLn1xQcth_3bK9aNjKxS9XHEMJ9",
  "https://lh3.googleusercontent.com/d/1VizU1uLT7de9piaTNGn2dJ3PFC1Bqc9h",
  "https://lh3.googleusercontent.com/d/1XibxVzxzjgvmI85XDUywtUpJTUus7bzM",
  "https://lh3.googleusercontent.com/d/1iQmVJffURWt36pHSEUDtBVea6DohwNui",
  "https://lh3.googleusercontent.com/d/1ougaUOsunQBGofdyvOBG9Khbgdk0vqUv"
];

export const Projects: React.FC = () => {
  const memoizedCards = React.useMemo(() => stackImages.map((src, i) => (
    <div key={i} className="w-full h-full relative p-2">
      <img 
        src={src} 
        alt={`card-${i + 1}`} 
        loading="lazy"
        decoding="async"
        className="w-full h-full object-cover rounded-[2rem] border border-white/10 shadow-xl"
        referrerPolicy="no-referrer"
        onError={(e) => {
          const img = e.currentTarget;
          if (img.src.includes('lh3.googleusercontent.com/d/')) {
            img.src = img.src.replace('lh3.googleusercontent.com/d/', 'lh3.googleusercontent.com/u/0/d/');
          }
        }}
      />
      <div className="absolute inset-2 rounded-[2rem] bg-gradient-to-tr from-black/20 to-transparent pointer-events-none" />
    </div>
  )), []);

  return (
    <section id="projects" className="pt-0 pb-16 bg-black/30">
      <div className="mb-12">
        <ScrollVelocity texts={industryExpertise} velocity={0.6} />
      </div>
      
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col items-center text-center mb-20">
          <h2 className="text-5xl md:text-8xl font-bold mb-16 leading-tight">
            Our Achievements <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-cyan via-white to-electric-purple">
              in Numbers
            </span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-16 w-full max-w-5xl">
            <div className="flex flex-col items-center">
              <div className="text-6xl md:text-8xl font-bold mb-4 tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-neon-cyan to-white/70">
                <CountUp to={50} duration={3} decimals={0} />+
              </div>
              <p className="text-white/60 tracking-[0.3em] text-[10px] md:text-xs uppercase font-medium">
                Projects Completed
              </p>
            </div>
            <div className="flex flex-col items-center">
              <div className="text-6xl md:text-8xl font-bold mb-4 tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-electric-purple to-white/70">
                <CountUp to={7} duration={3} decimals={0} />+
              </div>
              <p className="text-white/60 tracking-[0.3em] text-[10px] md:text-xs uppercase font-medium">
                Years of Experience
              </p>
            </div>
            <div className="flex flex-col items-center">
              <div className="text-6xl md:text-8xl font-bold mb-4 flex items-baseline gap-2 tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-gold to-white/70">
                <CountUp 
                  to={100000} 
                  duration={3} 
                  decimals={0} 
                  separator="," 
                />+
              </div>
              <p className="text-white/60 tracking-[0.3em] text-[10px] md:text-xs uppercase font-medium">
                Area of sq ft design
              </p>
            </div>
          </div>
        </div>

        {/* Stack Integration Section - Refined Proportions */}
        <div className="py-16 md:py-20 border-y border-white/5 my-12">
          <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-20 px-4 md:px-0">
            {/* Left Column: Visual Stack */}
            <div className="w-full lg:w-[45%] h-[400px] md:h-[550px] relative order-2 lg:order-1">
              <Stack
                randomRotation={true}
                sensitivity={180}
                sendToBackOnClick={true}
                cards={memoizedCards}
              />
            </div>

            {/* Right Column: Narrative Content */}
            <div className="w-full lg:w-[55%] text-left order-1 lg:order-2">
              <div className="max-w-lg lg:ml-auto">
                <h2 className="text-4xl md:text-6xl font-bold text-white mb-8 leading-[1.1] tracking-tighter">
                  Project <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-electric-purple to-neon-cyan">
                    Exploration.
                  </span>
                </h2>
                
                <div className="w-16 h-1 bg-gradient-to-r from-electric-purple to-neon-cyan mb-10" />

                <p className="text-white/80 text-base md:text-lg leading-relaxed mb-12 font-light tracking-wide">
                  Step into our world of design, where every project is a journey from vision to reality. 
                  We combine innovative thinking, smart planning, and refined aesthetics to create spaces 
                  that inspire modern living and business environments.
                </p>

                <Link to="/portfolio">
                  <motion.button 
                    whileHover={{ scale: 1.05, x: 5 }}
                    whileTap={{ scale: 0.95 }}
                    className="group flex items-center gap-6 px-12 py-5 bg-white text-black font-bold rounded-full hover:bg-neon-cyan hover:text-white transition-all duration-500 tracking-[0.3em] text-[10px] uppercase shadow-lg"
                  >
                    Explore Projects
                    <span className="text-lg group-hover:translate-x-2 transition-transform duration-300">→</span>
                  </motion.button>
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Why Choose DSA Section */}
        <div className="mt-12 relative">
          <div className="flex flex-col items-center text-center mb-16">
            <h2 className="text-4xl md:text-7xl font-bold mb-8 tracking-tight">
              Why Choose <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-cyan via-white to-electric-purple">DSA?</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="glass p-10 rounded-[2.5rem] border border-white/5 hover:border-neon-cyan/30 transition-colors duration-500"
            >
              <div className="w-12 h-12 rounded-xl bg-neon-cyan/10 flex items-center justify-center mb-8">
                <span className="text-neon-cyan font-bold text-xl">01</span>
              </div>
              <h3 className="text-2xl font-bold text-white mb-6 uppercase tracking-widest">Quality & Transparency</h3>
              <p className="text-white/70 leading-relaxed font-light">
                At DSA, we focus on delivering quality, transparency, and a smooth experience for every client. 
                We complete projects on or before the promised timeline, ensuring no unnecessary delays. 
                We personally assist clients in selecting materials, ensuring full transparency with no hidden commissions.
              </p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="glass p-10 rounded-[2.5rem] border border-white/5 hover:border-electric-purple/30 transition-colors duration-500"
            >
              <div className="w-12 h-12 rounded-xl bg-electric-purple/10 flex items-center justify-center mb-8">
                <span className="text-electric-purple font-bold text-xl">02</span>
              </div>
              <h3 className="text-2xl font-bold text-white mb-6 uppercase tracking-widest">Hassle-Free Execution</h3>
              <p className="text-white/70 leading-relaxed font-light">
                Our team works with highly professional vendors, maintaining cleanliness, discipline, 
                and hassle-free execution at every stage. We use premium-quality materials, 
                including the best-grade plywood and finishes, to ensure durability and long-lasting results.
              </p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="glass p-10 rounded-[2.5rem] border border-white/5 hover:border-white/30 transition-colors duration-500"
            >
              <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center mb-8">
                <span className="text-white font-bold text-xl">03</span>
              </div>
              <h3 className="text-2xl font-bold text-white mb-6 uppercase tracking-widest">Balanced Solutions</h3>
              <p className="text-white/70 leading-relaxed font-light">
                Most importantly, we balance quality with affordability — offering budget-friendly solutions 
                without compromising on design or execution. We believe that elegant architecture 
                should be accessible and sustainable for every dream space.
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};
