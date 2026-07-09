import React from 'react';
import { motion } from 'motion/react';
import { ArrowLeft, BookOpen, Clock, Calendar, User } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import { SafeImage } from '../components/SafeImage';
import { SEO } from '../components/SEO';

interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  author: string;
  image: string;
}

const BLOG_POSTS: BlogPost[] = [
  {
    id: 'minimal-luxury-philosophy',
    title: 'The Philosophy of Minimal Luxury: Merging Indoors and Outdoors',
    excerpt: 'Explore how contemporary residential architecture integrates natural light, local stone, and green courtyards to create deep synchronicity with nature.',
    date: 'July 5, 2026',
    readTime: '6 min read',
    author: 'Dhwanish Shah',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=800'
  },
  {
    id: 'acoustic-detailing-office',
    title: 'Acoustic Detailing in Modern Corporate Workspace Design',
    excerpt: 'Bespoke detailing in executive offices requires balancing open collaboration spaces with soundproofing and luxury micro-acoustic finishes.',
    date: 'June 20, 2026',
    readTime: '8 min read',
    author: 'Ronak Shah',
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=800'
  },
  {
    id: 'bespoke-fitouts-craft',
    title: 'The Art of Bespoke Fit-outs: Transforming Space with Craftsmanship',
    excerpt: 'How custom-built furniture, premium marble selections, and precise brass inlays establish a unified architectural signature in luxury villas.',
    date: 'May 12, 2026',
    readTime: '5 min read',
    author: 'Dhwanish Shah',
    image: 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?q=80&w=800'
  }
];

export const BlogPage: React.FC = () => {
  const navigate = useNavigate();

  const handleBack = (e: React.MouseEvent) => {
    e.preventDefault();
    navigate('/');
  };

  return (
    <div className="bg-obsidian min-h-screen text-white">
      <SEO 
        title="Design Journal & Blog | Architecture & Interior Design Insights"
        description="Read the latest design trends, architecture philosophy, and construction insights from Dhwanish Shah Architects (DSA)."
      />
      <Navbar />

      <main className="pt-32 pb-24 relative overflow-hidden">
        {/* Ambient background glows */}
        <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
          <div className="absolute top-1/4 -right-20 w-96 h-96 bg-neon-cyan/5 rounded-full blur-[120px]" />
          <div className="absolute bottom-1/4 -left-20 w-96 h-96 bg-electric-purple/5 rounded-full blur-[120px]" />
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <Link 
            to="/" 
            onClick={handleBack}
            className="inline-flex items-center gap-2 text-neon-cyan text-xs font-bold tracking-[0.3em] uppercase mb-12 hover:translate-x-[-10px] transition-transform"
          >
            <ArrowLeft size={16} /> Back to Home
          </Link>

          <div className="mb-20">
            <span className="text-neon-cyan text-[10px] font-bold tracking-[0.5em] mb-4 block uppercase border-l-2 border-neon-cyan pl-4">
              DSA JOURNAL
            </span>
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-4xl md:text-7xl font-sans font-bold mb-6 tracking-tight uppercase"
            >
              Design <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-cyan via-white to-electric-purple">Insights</span>
            </motion.h1>
            <p className="text-white/60 text-lg md:text-xl font-light max-w-2xl leading-relaxed">
              Perspectives on timeless luxury, precise spatial planning, and physical craftsmanship in residential and corporate architecture.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {BLOG_POSTS.map((post, i) => (
              <motion.article
                key={post.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="group relative bg-[#09090b]/80 border border-white/5 rounded-xl overflow-hidden hover:border-neon-cyan/30 transition-all duration-500 flex flex-col h-full"
              >
                <div className="aspect-[16/10] overflow-hidden relative">
                  <SafeImage 
                    src={post.image} 
                    alt={post.title} 
                    size="medium"
                    className="w-full h-full object-cover group-hover:scale-105 transition-all duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                </div>

                <div className="p-6 flex flex-col flex-grow">
                  <div className="flex items-center gap-4 text-zinc-500 text-[10px] font-mono mb-4">
                    <span className="flex items-center gap-1">
                      <Calendar size={12} className="text-neon-cyan" />
                      {post.date}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock size={12} className="text-electric-purple" />
                      {post.readTime}
                    </span>
                  </div>

                  <h2 className="text-xl font-sans font-semibold mb-3 group-hover:text-neon-cyan transition-colors line-clamp-2">
                    {post.title}
                  </h2>

                  <p className="text-zinc-400 text-sm font-light leading-relaxed mb-6 line-clamp-3 flex-grow">
                    {post.excerpt}
                  </p>

                  <div className="flex items-center justify-between pt-4 border-t border-white/5 mt-auto">
                    <span className="flex items-center gap-2 text-zinc-400 text-xs font-medium">
                      <User size={14} className="text-neon-cyan" />
                      {post.author}
                    </span>
                    <span className="text-xs font-semibold tracking-wider text-neon-cyan uppercase group-hover:underline flex items-center gap-1">
                      Read Post <BookOpen size={12} />
                    </span>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};
