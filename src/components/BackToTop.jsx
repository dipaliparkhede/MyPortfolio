import React, { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';

export default function BackToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  if (!isVisible) return null;

  return (
    <button
      onClick={scrollToTop}
      aria-label="Scroll back to top"
      className="btn-3d fixed bottom-6 right-6 z-40 p-3.5 rounded-2xl bg-navy-900/90 dark:bg-navy-900/90 bg-white/95 text-violet-400 hover:text-white hover:bg-gradient-to-r hover:from-violet-600 hover:to-cyan-500 border border-violet-500/40 shadow-2xl backdrop-blur-md transition-all duration-300 hover:scale-110 active:scale-95 group focus:outline-none hover:shadow-[0_0_25px_rgba(139,92,246,0.6)]"
    >
      <ArrowUp className="w-5 h-5 transition-transform duration-300 group-hover:-translate-y-0.5" />
    </button>
  );
}
