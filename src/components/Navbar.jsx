import React, { useState, useEffect } from 'react';
import { Menu, X, FileDown, Code2 } from 'lucide-react';
import ThemeToggle from './ThemeToggle';

const navLinks = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Experience', href: '#experience' },
  { name: 'Projects', href: '#projects' },
  { name: 'Education', href: '#education' },
  { name: 'Certifications', href: '#certifications' },
  { name: 'Contact', href: '#contact' },
];

export default function Navbar({ activeSection, theme, toggleTheme, onOpenResume }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e, href) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-navy-900/85 dark:bg-navy-900/85 bg-white/90 backdrop-blur-md shadow-lg shadow-black/10 border-b border-white/10 dark:border-white/10 border-slate-200 py-3.5'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Brand Logo */}
          <a
            href="#home"
            onClick={(e) => handleNavClick(e, '#home')}
            className="flex items-center gap-3 group focus:outline-none"
            aria-label="Dipali Vitthal Parkhede Home"
          >
            <div className="relative w-10 h-10 rounded-xl bg-gradient-to-tr from-violet-600 via-indigo-600 to-cyan-400 p-[2px] transition-transform duration-300 group-hover:scale-105 shadow-md shadow-violet-500/20">
              <div className="w-full h-full bg-navy-900 dark:bg-navy-900 bg-white rounded-[10px] flex items-center justify-center font-bold text-sm tracking-wider text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-cyan-400">
                DP
              </div>
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-base tracking-tight text-white dark:text-white text-slate-900 group-hover:text-violet-400 transition-colors">
                Dipali Parkhede
              </span>
              <span className="text-[11px] font-mono tracking-widest uppercase text-violet-400 dark:text-violet-400 text-violet-600 font-semibold">
                Full Stack Dev
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.substring(1);
              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-all duration-200 relative ${
                    isActive
                      ? 'text-cyan-400 dark:text-cyan-400 text-violet-600 font-semibold'
                      : 'text-slate-300 dark:text-slate-300 text-slate-600 hover:text-white dark:hover:text-white hover:text-slate-900 hover:bg-white/5 dark:hover:bg-white/5 hover:bg-slate-100'
                  }`}
                >
                  {link.name}
                  {isActive && (
                    <span className="absolute bottom-0 left-3 right-3 h-[2px] bg-gradient-to-r from-violet-500 to-cyan-400 rounded-full animate-pulse" />
                  )}
                </a>
              );
            })}
          </nav>

          {/* Right Action Buttons */}
          <div className="hidden sm:flex items-center gap-3">
            <ThemeToggle theme={theme} toggleTheme={toggleTheme} />
            
            <button
              onClick={onOpenResume}
              className="flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-semibold text-white bg-gradient-to-r from-violet-600 to-indigo-600 hover:from-violet-500 hover:to-cyan-500 shadow-md shadow-violet-600/25 hover:shadow-cyan-500/25 transition-all duration-300 active:scale-95"
            >
              <FileDown className="w-4 h-4" />
              <span>Resume</span>
            </button>
          </div>

          {/* Mobile Menu & Theme Controls */}
          <div className="flex items-center gap-2 lg:hidden">
            <ThemeToggle theme={theme} toggleTheme={toggleTheme} />
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              type="button"
              className="p-2.5 rounded-xl border border-white/10 dark:border-white/10 border-slate-300 text-slate-300 dark:text-slate-300 text-slate-700 hover:bg-white/5 dark:hover:bg-white/5 hover:bg-slate-100 focus:outline-none"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-x-0 top-[65px] p-4 bg-navy-900/95 dark:bg-navy-900/95 bg-white/95 backdrop-blur-xl border-b border-white/10 dark:border-white/10 border-slate-200 shadow-2xl transition-all animate-in slide-in-from-top-4 duration-200">
          <div className="flex flex-col gap-1.5 py-2">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.substring(1);
              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className={`px-4 py-2.5 rounded-xl text-sm font-medium transition-colors flex items-center justify-between ${
                    isActive
                      ? 'bg-violet-600/20 text-cyan-400 font-semibold border border-violet-500/30'
                      : 'text-slate-300 dark:text-slate-300 text-slate-700 hover:bg-white/5 dark:hover:bg-white/5 hover:bg-slate-100'
                  }`}
                >
                  <span>{link.name}</span>
                  {isActive && <span className="w-2 h-2 rounded-full bg-cyan-400 shadow-[0_0_8px_#38BDF8]" />}
                </a>
              );
            })}
            
            <div className="pt-3 mt-2 border-t border-white/10 dark:border-white/10 border-slate-200 flex flex-col gap-2">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenResume();
                }}
                className="w-full flex items-center justify-center gap-2 px-4 py-3 rounded-xl text-sm font-semibold text-white bg-gradient-to-r from-violet-600 to-cyan-500 shadow-lg shadow-violet-600/20"
              >
                <FileDown className="w-4 h-4" />
                <span>View & Download Resume</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
