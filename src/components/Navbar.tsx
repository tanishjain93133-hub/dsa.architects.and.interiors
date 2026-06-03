import React from 'react';
import { motion } from 'motion/react';
import { Menu, X } from 'lucide-react';
import { cn } from '@/src/lib/utils';
import { Link, useLocation } from 'react-router-dom';
import { SafeImage } from './SafeImage';
import { InquireModal } from './InquireModal';

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const [isInquireOpen, setIsInquireOpen] = React.useState(false);
  const [scrolled, setScrolled] = React.useState(false);
  const location = useLocation();
  const isHome = location.pathname === '/';

  React.useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: isHome ? '#home' : '/' },
    { name: 'About', href: '/about' },
    { name: 'Projects', href: 'https://projects-rho-dun.vercel.app/' },
    { name: 'Testimonials', href: '/testimonials' },
    { name: 'Lights', href: isHome ? '#lights' : '/#lights' },
    { name: 'Contact Us', href: isHome ? '#contact' : '/#contact' },
  ];

  return (
    <>
      <nav
        className={cn(
          'fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-6 py-4',
          scrolled ? 'glass py-3' : 'bg-transparent'
        )}
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <Link to="/" className="flex items-center gap-4 group">
            <div className="w-10 h-10 md:w-12 md:h-12 rounded-full border border-white/20 overflow-hidden bg-black/40 backdrop-blur-md group-hover:border-neon-cyan transition-colors">
              <SafeImage 
                src="https://lh3.googleusercontent.com/d/19TvdU6o-mHetA8l28vZ6UEaEFA15bEHs" 
                alt="DSA Logo" 
                size="small"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex flex-col">
              <span className="text-white font-medium tracking-[0.2em] text-[10px] md:text-xs">DSA</span>
              <span className="text-white/70 tracking-[0.1em] text-[8px] uppercase hidden md:block">Architects & Interiors</span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-2">
            {navLinks.map((link, i) => (
              <motion.div
                key={link.name}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
              >
                {link.href.startsWith('http') || link.href.startsWith('#') || link.href.includes('#') ? (
                  <a
                    href={link.href}
                    className="px-5 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/10 text-[10px] tracking-[0.2em] text-white font-medium hover:bg-white hover:text-obsidian transition-all hover:scale-105 active:scale-95"
                  >
                    {link.name}
                  </a>
                ) : (
                  <Link
                    to={link.href}
                    className="px-5 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/10 text-[10px] tracking-[0.2em] text-white font-medium hover:bg-white hover:text-obsidian transition-all hover:scale-105 active:scale-95"
                  >
                    {link.name}
                  </Link>
                )}
              </motion.div>
            ))}

            <motion.button
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              onClick={() => setIsInquireOpen(true)}
              className="ml-4 px-6 py-2 rounded-full bg-white text-obsidian text-[10px] font-bold tracking-widest hover:bg-neon-cyan transition-colors shadow-lg"
            >
              Inquire
            </motion.button>
          </div>

          {/* Mobile Toggle */}
          <button className="md:hidden text-white" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X /> : <Menu />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="absolute top-full left-0 right-0 glass p-6 md:hidden flex flex-col gap-4"
          >
            {navLinks.map((link) => (
              link.href.startsWith('http') || link.href.startsWith('#') || link.href.includes('#') ? (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="text-lg font-display font-bold text-white hover:text-neon-cyan transition-colors"
                >
                  {link.name}
                </a>
              ) : (
                <Link
                  key={link.name}
                  to={link.href}
                  onClick={() => setIsOpen(false)}
                  className="text-lg font-display font-bold text-white hover:text-neon-cyan transition-colors"
                >
                  {link.name}
                </Link>
              )
            ))}
            <button 
              onClick={() => {
                setIsOpen(false);
                setIsInquireOpen(true);
              }}
              className="mt-4 px-6 py-4 rounded-full bg-neon-cyan text-obsidian text-sm font-bold tracking-widest"
            >
              Inquire Now
            </button>
          </motion.div>
        )}
      </nav>

      <InquireModal isOpen={isInquireOpen} onClose={() => setIsInquireOpen(false)} />
    </>
  );
};
