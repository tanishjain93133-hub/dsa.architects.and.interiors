import React from 'react';
import { motion } from 'motion/react';
import { LayoutGrid, Palette, ShieldCheck, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { SafeImage } from './SafeImage';
import { cn } from '@/src/lib/utils';

export const About: React.FC = () => {
  const values = [
    {
      icon: <LayoutGrid className="text-neon-cyan" />,
      title: "Smart Space Design",
      desc: "Designing spaces that are practical, elegant, and perfectly suited to your lifestyle or business needs."
    },
    {
      icon: <Palette className="text-electric-purple" />,
      title: "Modern Aesthetics",
      desc: "Blending modern trends with timeless design to create interiors that feel fresh, stylish, and inviting."
    },
    {
      icon: <ShieldCheck className="text-green-400" />,
      title: "Seamless Experience",
      desc: "From concept to completion, we ensure a smooth and hassle-free design journey for every client."
    }
  ];

  return (
    <section id="about" className="pt-10 pb-12 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="aspect-square rounded-3xl overflow-hidden border border-white/10 glass p-4">
              <SafeImage
                src="/images/drive_1zIowbroWdab39MHVjBfVN_nqJFCpVJv7.jpg"
                alt="DSA Architectural Studio"
                size="large"
                className="w-full h-full object-cover rounded-2xl"
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-8">What is DSA?</h2>
            <p className="text-white/80 text-lg mb-12 leading-relaxed font-light">
              <strong className="text-white font-medium">DSA Architects & Interior Design</strong> is a creative studio dedicated to designing modern, functional, and elegant spaces. 
              Founded in 2018 by Ar. Dhwanish Shah, our firm focuses on delivering high-quality architectural and interior solutions that reflect both style and practicality.
            </p>

            <Link to="/about">
              <motion.button
                whileHover={{ scale: 1.05, x: 5 }}
                className="group flex items-center gap-3 text-neon-cyan text-[10px] tracking-[0.3em] font-bold uppercase mb-12"
              >
                Read Full Story
                <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
              </motion.button>
            </Link>

            <div className="space-y-8">
              {values.map((val, i) => (
                <motion.div
                  key={val.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="flex gap-6"
                >
                  <div className="w-12 h-12 rounded-xl glass flex items-center justify-center shrink-0">
                    {val.icon}
                  </div>
                  <div>
                    <h4 className="font-display font-bold text-xl mb-2 text-white">
                      {val.title}
                    </h4>
                    <p className="text-white/60 text-sm leading-relaxed">{val.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
