import React from 'react';
import { motion } from 'motion/react';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import { SafeImage } from '../components/SafeImage';

const AA_WEALTH_DATA = [
  { 
    image: 'https://lh3.googleusercontent.com/d/1HitK9MepXCJqmoMaisI3_pUTzvYJZA00', 
    title: 'Natural Integration', 
    desc: 'Incorporating light and openness into office design.' 
  },
  { 
    image: 'https://lh3.googleusercontent.com/d/1NPceFslGWT3fUyWn6AGSqGJPxh0a4j1A', 
    title: 'Dynamic Spaces', 
    desc: 'Versatile areas for various business needs.' 
  },
  { 
    image: 'https://lh3.googleusercontent.com/d/1JHPhEFvokVoMViai2JRY2C97I_wcZ5Ap', 
    title: 'Professional Hub', 
    desc: 'A central point for excellence and collaboration.' 
  },
  { 
    image: 'https://lh3.googleusercontent.com/d/1QD35D6_0pT2a_j9vYk2IO5-BhrRbXrwc', 
    title: 'Luminous Design', 
    desc: 'Bright and energetic work environment.' 
  },
  { 
    image: 'https://lh3.googleusercontent.com/d/1Rg-tzflx4mY1yefb608u77YANq5xeFUk', 
    title: 'Structured Elegance', 
    desc: 'Defined lines and premium material choices.' 
  },
  { 
    image: 'https://lh3.googleusercontent.com/d/1MHk72anDHYgYGtCAuWJx2GWJ02Ts97UC', 
    title: 'Elite Atmosphere', 
    desc: 'A space that exudes confidence and success.' 
  },
  { 
    image: 'https://lh3.googleusercontent.com/d/1eKA1CHzewmgRmwNRWG_oI2s_fKYrSMDL', 
    title: 'Visionary Layout', 
    desc: 'Forward-thinking space management.' 
  },
  { 
    image: 'https://lh3.googleusercontent.com/d/1fsRJBocZlFhIge-FrFCk09hJwHK3Vqpt', 
    title: 'Seamless Flow', 
    desc: 'Effortless transition between different office zones.' 
  },
  { 
    image: 'https://lh3.googleusercontent.com/d/16UwjT1SSzMIS4bVDiB8ZcntJuJcSwtrQ', 
    title: 'Design Harmony', 
    desc: 'Balanced aesthetics across the workspace.' 
  },
  { 
    image: 'https://lh3.googleusercontent.com/d/1gtqBoeZxA4aXSYVrnm_ldNO2G0aOFjhJ', 
    title: 'Crafted Excellence', 
    desc: 'High-quality finishes in every corner.' 
  },
  { 
    image: 'https://lh3.googleusercontent.com/d/14xLpEu59w4M4VNtvc7GaQid9pBAwQfd-', 
    title: 'Interior Precision', 
    desc: 'Meticulous attention to internal spatial arrangements.' 
  },
  { 
    image: 'https://lh3.googleusercontent.com/d/1z1nVJt04BqT5iYcHD8cbRbvFmKg_flY_', 
    title: 'Innovative Workplace', 
    desc: 'Setting new standards for corporate interiors.' 
  },
  { 
    image: 'https://lh3.googleusercontent.com/d/1O5txCTxKc9EoSV62XE9b09ds8eZtQ61r', 
    title: 'Clean Aesthetics', 
    desc: 'Minimalist design for maximum focus.' 
  },
  { 
    image: 'https://lh3.googleusercontent.com/d/1kxc3WSIA8ddPNzX0dIpJ4FeGhQYu7uH2', 
    title: 'Modern Nuances', 
    desc: 'Subtle design elements that add character.' 
  },
  { 
    image: 'https://lh3.googleusercontent.com/d/1-yVVcug6KYFWQvXMQntsOJWdJ7skf4Mh', 
    title: 'Modern Architecture', 
    desc: 'Contemporary commercial facade design.' 
  }
];

export const AAWealthPage: React.FC = () => {
  return (
    <div className="bg-obsidian min-h-screen text-white">
      <Navbar />
      
      <main className="pt-32 pb-24">
        <div className="max-w-7xl mx-auto px-6">
          <Link to="/" className="inline-flex items-center gap-2 text-neon-cyan text-xs font-bold tracking-[0.3em] uppercase mb-12 hover:translate-x-[-10px] transition-transform">
            <ArrowLeft size={16} /> Back to Home
          </Link>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <h1 className="text-3xl md:text-5xl font-bold mb-4 tracking-tight">
              A & A <span className="text-gradient">Wealth</span>
            </h1>
            <p className="text-white/60 text-base md:text-lg max-w-2xl mx-auto font-light">
              Detailed view of the premium wealth management commercial interiors.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {AA_WEALTH_DATA.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 }}
                className="flex flex-col"
              >
                <div className="aspect-video rounded-3xl overflow-hidden border border-white/10 glass group shadow-2xl mb-6">
                  <SafeImage
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                  />
                </div>
                <div className="px-2">
                  <h3 className="text-xl font-bold text-white mb-2 tracking-tight uppercase tracking-[0.1em]">{item.title}</h3>
                  <div className="h-px w-12 bg-neon-cyan mb-3 opacity-50" />
                  <p className="text-white/40 text-sm font-light leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};
