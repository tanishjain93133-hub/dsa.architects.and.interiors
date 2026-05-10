import React from 'react';
import { motion } from 'motion/react';
import CircularGallery from './CircularGallery';

const GALLERY_ITEMS = [
  { image: 'https://lh3.googleusercontent.com/d/1zaZHAGa2m57NF8IZXKgQfkCN6--SVy3I', text: 'The White House' },
  { image: 'https://lh3.googleusercontent.com/d/151kmI4LQypjKjzhQatTQCO-aAXyGuBhE', text: 'Main Elevation' },
  { image: 'https://lh3.googleusercontent.com/d/1UlOsOlkAnM_Z-ohufO0QsFR1gQ7NzcnK', text: 'JD Bedroom' },
  { image: 'https://lh3.googleusercontent.com/d/18_7CMiYHoSYBhdpz3wpWKfoQkGwhUvof', text: 'Structure Detail' },
  { image: 'https://lh3.googleusercontent.com/d/1EsMLe08jkprzx3ZDo1GAcmzZH3N-Frpp', text: 'Aesthetic Corner' },
  { image: 'https://lh3.googleusercontent.com/d/1Tzq0ooCQnYLh-F6ns11Wfy1QK7K3W0jh', text: 'CP House' },
  { image: 'https://lh3.googleusercontent.com/d/1fQxUcOX6Xya8S1QgM-SEPknvST3Z-XPV', text: 'Anchor House' },
  { image: 'https://lh3.googleusercontent.com/d/1_BEEwFeRswSl-qmhg6cGM3CSVZBNxitc', text: 'JD Office' },
  { image: 'https://lh3.googleusercontent.com/d/1U7YxzdLn1xQcth_3bK9aNjKxS9XHEMJ9', text: 'Exterior Hub' },
  { image: 'https://lh3.googleusercontent.com/d/1VizU1uLT7de9piaTNGn2dJ3PFC1Bqc9h', text: 'Light & Shadow' },
  { image: 'https://lh3.googleusercontent.com/d/1ougaUOsunQBGofdyvOBG9Khbgdk0vqUv', text: 'Workspace Interior' },
  { image: 'https://lh3.googleusercontent.com/d/1A7n2KoNaNadZKVmfg8rAfJLm45iip4Ki', text: 'Shela House' },
  { image: 'https://lh3.googleusercontent.com/d/1XibxVzxzjgvmI85XDUywtUpJTUus7bzM', text: 'Conceptual Design' },
  { image: 'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?q=80&w=2070&auto=format&fit=crop', text: 'Modern Interior' },
  { image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2070&auto=format&fit=crop', text: 'Sleek Facade' },
  { image: 'https://lh3.googleusercontent.com/d/1lT_rM9G9pB9t4vHywDCfQy7h5OHwJM41', text: 'Achira' },
  { image: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80&w=2070&auto=format&fit=crop', text: 'Living Room' },
  { image: 'https://images.unsplash.com/photo-1493397212122-2b85edf36af6?q=80&w=2070&auto=format&fit=crop', text: 'Concrete Detail' },
  { image: 'https://images.unsplash.com/photo-1487958449943-2429e8be8625?q=80&w=2070&auto=format&fit=crop', text: 'Corporate Building' },
  { image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop', text: 'Glass Skyscraper' },
  { image: 'https://images.unsplash.com/photo-1518005020250-58003994cd32?q=80&w=2070&auto=format&fit=crop', text: 'Minimalist Staircase' },
  { image: 'https://images.unsplash.com/photo-1483366759022-7a7dba23c5d4?q=80&w=2070&auto=format&fit=crop', text: 'Library Hub' },
  { image: 'https://images.unsplash.com/photo-1464938050520-ef2270bb8ce8?q=80&w=2070&auto=format&fit=crop', text: 'Modernist Structure' },
  { image: 'https://lh3.googleusercontent.com/d/1n1BRt7ypqRy_2DlVe1vLwKxtfrSIOAor', text: 'Safal Office' },
  { image: 'https://lh3.googleusercontent.com/d/16UwjT1SSzMIS4bVDiB8ZcntJuJcSwtrQ', text: 'A & A Wealth' },
  { image: 'https://lh3.googleusercontent.com/d/1ZfjIAL296LD5uhCuifOGUUhAAFEkFWoB', text: 'iFlair' },
  { image: 'https://images.unsplash.com/photo-1511227449266-993c1350a588?q=80&w=2070&auto=format&fit=crop', text: 'Geometric Glass' },
];

export const HomeGallery: React.FC = () => {
  return (
    <section className="relative py-24 bg-black overflow-hidden select-none">
      <div className="max-w-7xl mx-auto px-6 mb-16 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="text-neon-cyan text-[10px] font-black tracking-[1em] uppercase block mb-4">Discovery</span>
          <h2 className="text-white text-5xl md:text-8xl font-thin tracking-widest uppercase">
            Project <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-cyan via-white to-electric-purple font-bold italic">Spheres</span>
          </h2>
        </motion.div>
      </div>

      <div className="relative h-[600px] w-full">
        {/* Background Watermark from Screenshot */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-0 touch-none">
          <h2 className="text-white/5 text-[150px] md:text-[300px] font-black uppercase tracking-tighter select-none">Gallery</h2>
        </div>

        <div className="absolute inset-0 z-10">
          <CircularGallery 
            items={GALLERY_ITEMS}
            bend={3}
            textColor="#ffffff"
            borderRadius={0.05}
          />
        </div>
      </div>

      <div className="text-center mt-12">
        <p className="text-white/40 text-[10px] tracking-[0.5em] uppercase">Drag to explore our architectural horizon</p>
      </div>
    </section>
  );
};
