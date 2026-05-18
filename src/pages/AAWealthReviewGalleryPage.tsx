import React from 'react';
import { motion } from 'motion/react';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import { SafeImage } from '../components/SafeImage';

const AA_WEALTH_REVIEW_DATA = [
  { 
    image: 'https://lh3.googleusercontent.com/d/11SkczFb1XHrgWcMlRyxo0Ncx1XGUsWdR', 
    title: 'Professional Ambience', 
    desc: 'Wealth management excellence reflected in elegant design.' 
  },
  { 
    image: 'https://lh3.googleusercontent.com/d/1t2y0zdd55FJSIRuzTM54EXPCSt-7Udf5', 
    title: 'STRATEGIC DETAILS', 
    desc: 'Every element chosen to represent the brand identity.' 
  },
  { 
    image: 'https://lh3.googleusercontent.com/d/1siPgPnVrWQFJycGfDi1gPHXgfUYocSbo', 
    title: 'EXECUTIVE COMFORT', 
    desc: 'Sophisticated design for private consultations.' 
  },
  { 
    image: 'https://lh3.googleusercontent.com/d/1bp9jkz-TNVWZrSIytSx5crAzXC5uRZR_', 
    title: 'MATERIAL EXCELLENCE', 
    desc: 'Premium finishes that define modern corporate interiors.' 
  },
  { 
    image: 'https://lh3.googleusercontent.com/d/1lLY4JdpG34ZWglkSrAd6USmhl4_uoEqc', 
    title: 'COLLABORATIVE AREAS', 
    desc: 'Smart space planning for productive team work.' 
  },
  { 
    image: 'https://lh3.googleusercontent.com/d/1E5xewnh4MFm2xWapf5HC8tHwKcbDPO5X', 
    title: 'REFINED WORKSPACES', 
    desc: 'Functional yet sophisticated office planning.' 
  },
  { 
    image: 'https://lh3.googleusercontent.com/d/1KHVlbwwVVsVynXiB8wIeFAfynfhlR38X', 
    title: 'WARM LIGHTING', 
    desc: 'Creating an inviting atmosphere for clients and staff.' 
  }
];

export const AAWealthReviewGalleryPage: React.FC = () => {
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
            <h1 className="text-3xl md:text-5xl font-bold mb-4 tracking-tight uppercase">
              A & A <span className="text-gradient">Wealth</span> Review
            </h1>
            <p className="text-white/60 text-base md:text-lg max-w-2xl mx-auto font-light">
              A detailed look at the premium commercial interiors of A & A Wealth through this exclusive review gallery.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {AA_WEALTH_REVIEW_DATA.map((item, index) => (
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

          {/* Final Section - Watch Full Client Review */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-32 max-w-4xl mx-auto"
          >
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-neon-cyan/30 via-electric-purple/30 to-neon-cyan/30 rounded-[2.5rem] blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
              <div className="relative glass p-12 rounded-[2.5rem] border border-white/10 bg-black/60 backdrop-blur-3xl text-center">
                <h2 className="text-3xl md:text-4xl font-bold mb-4 tracking-tight uppercase tracking-[0.05em]">
                  Watch <span className="text-gradient">Full Client Review</span>
                </h2>
                <p className="text-white/60 text-base md:text-lg mb-10 max-w-2xl mx-auto font-light leading-relaxed">
                  See the complete one-shot experience and detailed feedback from the client about their journey with DSA.
                </p>
                
                <motion.a
                  href="https://www.youtube.com/results?search_query=DSA+Architects+Ahmedabad+Review"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-flex items-center gap-3 py-4 px-10 rounded-full bg-[#FF0000] hover:bg-[#CC0000] text-white transition-all duration-300 shadow-[0_0_20px_rgba(255,0,0,0.3)] hover:shadow-[0_0_40px_rgba(255,0,0,0.5)] group/video"
                >
                  <div className="w-4 h-4 bg-white flex items-center justify-center" style={{ clipPath: 'polygon(20% 0%, 20% 100%, 100% 50%)' }} />
                  <span className="text-xs uppercase tracking-[0.2em] font-bold">
                    Play Full Review
                  </span>
                </motion.a>
              </div>
            </div>
          </motion.div>
        </div>
      </main>

      <Footer />
    </div>
  );
};
