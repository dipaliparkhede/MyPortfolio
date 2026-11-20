import React, { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';

export default function BackToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.pageYOffset || document.documentElement.scrollTop || window.scrollY || 0;
      setIsVisible(scrollY > 300);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = (e) => {
    if (e && e.preventDefault) e.preventDefault();
    if (e && e.stopPropagation) e.stopPropagation();

    // 1. Window smooth scroll
    try {
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth'
      });
    } catch {
      window.scrollTo(0, 0);
    }

    // 2. Scrolling element fallback
    const scrollElem = document.scrollingElement || document.documentElement || document.body;
    if (scrollElem) {
      try {
        scrollElem.scrollTo({
          top: 0,
          left: 0,
          behavior: 'smooth'
        });
      } catch {
        // fallback
      }
    }

    // 3. Target #home hero section
    const homeEl = document.getElementById('home');
    if (homeEl) {
      try {
        homeEl.scrollIntoView({ behavior: 'smooth', block: 'start' });
      } catch {
        // fallback
      }
    }
  };

  if (!isVisible) return null;

  return (
    <button
      type="button"
      onClick={scrollToTop}
      aria-label="Scroll back to top"
      title="Scroll back to top"
      className="btn-3d fixed bottom-6 right-6 z-40 p-3.5 rounded-2xl bg-navy-900/90 dark:bg-navy-900/90 bg-white/95 text-violet-400 hover:text-white hover:bg-gradient-to-r hover:from-violet-600 hover:to-cyan-500 border border-violet-500/40 shadow-2xl backdrop-blur-md transition-all duration-300 hover:scale-110 active:scale-95 group focus:outline-none hover:shadow-[0_0_25px_rgba(139,92,246,0.6)] cursor-pointer"
    >
      <ArrowUp className="w-5 h-5 transition-transform duration-300 group-hover:-translate-y-1" />
    </button>
  );
}
