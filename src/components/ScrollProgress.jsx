import React, { useState, useEffect } from 'react';

/**
 * ScrollProgress - Pinned top-of-screen glowing progress bar showing reading progress
 */
export default function ScrollProgress() {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (totalHeight > 0) {
        const currentProgress = (window.scrollY / totalHeight) * 100;
        setScrollProgress(Math.min(100, Math.max(0, currentProgress)));
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="fixed top-0 left-0 right-0 h-[3.5px] z-[100] bg-transparent pointer-events-none">
      <div
        className="h-full bg-gradient-to-r from-violet-600 via-indigo-500 to-cyan-400 transition-[width] duration-75 ease-out shadow-[0_0_12px_rgba(139,92,246,0.8),0_0_24px_rgba(56,189,248,0.6)]"
        style={{ width: `${scrollProgress}%` }}
      />
    </div>
  );
}
