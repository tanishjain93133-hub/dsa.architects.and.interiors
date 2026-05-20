import { useNavigate } from 'react-router-dom';
import { motion } from 'motion/react';
import { ArrowLeft } from 'lucide-react';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import { SafeImage } from '../components/SafeImage';

const ANCHOR_HOUSE_DATA = [
  { 
    image: 'https://lh3.googleusercontent.com/d/1E5xewnh4MFm2xWapf5HC8tHwKcbDPO5X', 
    title: 'Modern Living', 
    desc: 'Clean lines and warm aesthetics define the main hall.' 
  },
  { 
    image: 'https://lh3.googleusercontent.com/d/1KHVlbwwVVsVynXiB8wIeFAfynfhlR38X', 
    title: 'Spatial Harmony', 
    desc: 'A seamless transition between light and shadows.' 
  },
  { 
    image: 'https://lh3.googleusercontent.com/d/1bp9jkz-TNVWZrSIytSx5crAzXC5uRZR_', 
    title: 'Crafted Details', 
    desc: 'Intricate paneling adds texture to the modern space.' 
  },
  { 
    image: 'https://lh3.googleusercontent.com/d/1lLY4JdpG34ZWglkSrAd6USmhl4_uoEqc', 
    title: 'Elegant Entrance', 
    desc: 'Making a bold statement from the very first step.' 
  },
  { 
    image: 'https://lh3.googleusercontent.com/d/1rrNLby_fEBTkq_BJLZfvTP3L1boO8eK7', 
    title: 'Refined Comfort', 
    desc: 'Soft textures and warm lighting create a peaceful retreat.' 
  }
];

export const AnchorHousePage: React.FC = () => {
  const navigate = useNavigate();
  return (
    <div className="bg-obsidian min-h-screen text-white">
      <Navbar />
      
      <main className="pt-32 pb-24">
        <div className="max-w-7xl mx-auto px-6">
          <button 
            onClick={() => navigate(-1)} 
            className="inline-flex items-center gap-2 text-neon-cyan text-xs font-bold tracking-[0.3em] uppercase mb-12 hover:translate-x-[-10px] transition-transform cursor-pointer"
          >
            <ArrowLeft size={16} /> Back to Projects
          </button>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <h1 className="text-3xl md:text-5xl font-bold mb-4 tracking-tight uppercase">
              Anchor <span className="text-gradient">House</span>
            </h1>
            <p className="text-white/60 text-base md:text-lg max-w-2xl mx-auto font-light">
              Detailed view of the modern residential interior craftsmanship.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {ANCHOR_HOUSE_DATA.map((item, index) => (
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
