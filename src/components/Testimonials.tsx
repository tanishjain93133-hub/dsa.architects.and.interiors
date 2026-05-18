import React from 'react';
import { motion } from 'motion/react';
import { Star, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { SafeImage } from './SafeImage';

const testimonials = [
  {
    name: "C.A Chetas Patel",
    role: "Ahmedabad",
    content: "Working with DSA was a smooth and professional experience from start to finish. The team understood our vision perfectly and transformed our home into a modern, elegant, and comfortable living space. Their attention to detail, material selection, and execution quality truly exceeded our expectations.",
    rating: 4,
    image: "https://lh3.googleusercontent.com/d/1m1Di2ATc7FCF1xlCB2HHy9GTa7spClb5",
    projectName: "CP House",
    projectId: "res-dsa-07"
  },
  {
    name: "Mr Chinten Bhai",
    role: "CEO, Accurate Wealth",
    content: "Honestly, the final result looked almost exactly the same as the 3D design we were shown. Every detail from the lighting and colors to the furniture placement was executed perfectly. The entire process felt smooth and transparent, and seeing the design come to life exactly as imagined was truly satisfying.",
    rating: 4.5,
    image: "https://lh3.googleusercontent.com/d/16PrfPpHke1l4A_1xsvbVsDIBVI-CqQFh",
    projectName: "A & A Wealth",
    projectId: "comm-dsa-04"
  },
  {
    name: "Mr. Parth Shah",
    role: "Anchor",
    content: "When we first met, we had no idea how the house would turn out or how everything would be planned. But Dhwanish Shah transformed our home beyond our expectations. The entire process felt smooth and budget-friendly, and the final result looked exactly the way we had imagined. Seeing our dream home come to life so beautifully was truly satisfying.",
    rating: 4.8,
    image: "https://lh3.googleusercontent.com/d/12DLBtHG8UYHWhfPkPKE19bL1GF2tJDHt",
    projectName: "Subtle Sanctuary",
    projectId: "res-dsa-01",
    videoLink: "https://youtube.com/shorts/k-pZipf1kpM?si=2eVIdUJCAZShFEUL"
  }
];

export const Testimonials: React.FC = () => {
  return (
    <section id="testimonials" className="py-24 relative overflow-hidden bg-black/50">
      {/* Decorative background elements */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
        <div className="absolute top-1/4 -left-20 w-96 h-96 bg-neon-cyan/5 rounded-full blur-[100px]" />
        <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-electric-purple/5 rounded-full blur-[100px]" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-7xl font-bold mb-6 tracking-tight"
          >
            Client <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-cyan via-white to-electric-purple">Testimonials</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-white/60 text-lg md:text-xl max-w-2xl mx-auto font-light"
          >
            Real experiences from homeowners who trusted DSA to transform their spaces.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="group relative"
            >
              <div className="absolute -inset-0.5 bg-gradient-to-r from-neon-cyan/20 to-electric-purple/20 rounded-[2.5rem] blur opacity-0 group-hover:opacity-100 transition duration-500" />
              <div className="relative glass p-10 rounded-[2.5rem] border border-white/5 bg-black/40 backdrop-blur-xl h-full flex flex-col items-center text-center">
                <div className="w-28 h-28 rounded-full overflow-hidden border-2 border-white/10 group-hover:border-neon-cyan/50 transition-all duration-500 mb-6 flex-shrink-0 relative overflow-hidden group/img">
                  <SafeImage 
                    src={testimonial.image} 
                    alt={testimonial.name}
                    className="w-full h-full object-cover object-center"
                    size="small"
                  />
                  {/* Floating Play Button inside Image */}
                  {testimonial.videoLink && (
                    <a 
                      href={testimonial.videoLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="absolute inset-0 flex items-center justify-center bg-black/40 opacity-0 group-hover/img:opacity-100 transition-opacity duration-300"
                    >
                      <div className="w-10 h-10 rounded-full bg-[#FF0000] text-white flex items-center justify-center shadow-[0_0_15px_rgba(255,0,0,0.5)]">
                        <div className="ml-0.5 w-0 h-0 border-t-[5px] border-t-transparent border-b-[5px] border-b-transparent border-l-[8px] border-l-white" />
                      </div>
                    </a>
                  )}
                </div>

                <div className="flex gap-0.5 mb-6">
                  {[...Array(5)].map((_, i) => {
                    const isFull = i < Math.floor(testimonial.rating);
                    const isHalf = i === Math.floor(testimonial.rating) && testimonial.rating % 1 > 0;
                    
                    if (isFull) {
                      return <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />;
                    }
                    if (isHalf) {
                      return (
                        <div key={i} className="relative w-4 h-4">
                          <Star className="absolute inset-0 w-4 h-4 text-white/20" />
                          <div className="absolute inset-0 w-[50%] overflow-hidden">
                            <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                          </div>
                        </div>
                      );
                    }
                    return <Star key={i} className="w-4 h-4 text-white/20" />;
                  })}
                </div>
                
                <p className="text-white/80 text-lg leading-relaxed mb-8 font-light italic">
                  "{testimonial.content}"
                </p>

                {/* Project Button */}
                <Link to={`/project/${testimonial.projectId}`} className="mb-4">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-52 h-12 rounded-full bg-white/5 border border-white/10 hover:border-neon-cyan/50 hover:bg-white/10 transition-all duration-300 flex items-center justify-center group/btn"
                  >
                    <span className="text-white/70 text-[10px] uppercase tracking-[0.2em] font-bold group-hover/btn:text-white transition-colors">
                      {testimonial.projectName}
                    </span>
                  </motion.button>
                </Link>

                <Link 
                  to={testimonial.projectName === "CP House" ? "/cp-house-review" : testimonial.projectName === "A & A Wealth" ? "/aa-wealth-review" : (testimonial.projectName === "Subtle Sanctuary" || testimonial.projectName === "SPATIAL HARMONY") ? "/parth-shah-review" : `/project/${testimonial.projectId}`} 
                  className="mb-10"
                >
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-52 h-12 rounded-full bg-[#FF0000] hover:bg-[#CC0000] text-white flex items-center justify-center gap-2 transition-all duration-300 shadow-lg"
                  >
                    <div className="w-3 h-3 bg-white flex items-center justify-center" style={{ clipPath: 'polygon(20% 0%, 20% 100%, 100% 50%)' }} />
                    <span className="text-[10px] uppercase tracking-widest font-bold">
                      VIEW
                    </span>
                  </motion.button>
                </Link>

                <div className="mt-auto">
                  <h4 className="text-white font-bold text-xl tracking-tight">{testimonial.name}</h4>
                  <p className="text-white/40 text-xs uppercase tracking-[0.2em] mt-1">{testimonial.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
