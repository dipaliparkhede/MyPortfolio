import React from 'react';
import { Github, Linkedin, Mail, ArrowUp, Heart, Sparkles } from 'lucide-react';
import { personalInfo } from '../data/personalInfo';

const footerNav = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Experience', href: '#experience' },
  { name: 'Projects', href: '#projects' },
  { name: 'Education', href: '#education' },
  { name: 'Certifications', href: '#certifications' },
  { name: 'Contact', href: '#contact' },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollToTop = (e) => {
    if (e && e.preventDefault) e.preventDefault();
    if (e && e.stopPropagation) e.stopPropagation();

    // 1. Standard window smooth scroll
    try {
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth'
      });
    } catch {
      window.scrollTo(0, 0);
    }

    // 2. Scrolling element fallback (for Safari / mobile / container scroll)
    const scrollElem = document.scrollingElement || document.documentElement || document.body;
    if (scrollElem) {
      try {
        scrollElem.scrollTo({
          top: 0,
          left: 0,
          behavior: 'smooth'
        });
      } catch {
        // silent fallback
      }
    }

    // 3. Target #home hero section
    const homeEl = document.getElementById('home');
    if (homeEl) {
      try {
        homeEl.scrollIntoView({ behavior: 'smooth', block: 'start' });
      } catch {
        // silent fallback
      }
    }
  };

  const handleNavClick = (e, href) => {
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="relative bg-navy-950 dark:bg-navy-950 bg-slate-900 text-white border-t border-white/10 pt-16 pb-12 overflow-hidden">
      
      {/* Ambient background glow */}
      <div className="glow-orb w-80 h-80 -bottom-20 left-1/2 -translate-x-1/2 bg-violet-600/15" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center pb-12 border-b border-white/10">
          
          {/* Brand Info */}
          <div className="md:col-span-5 flex flex-col items-start">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-violet-600 to-cyan-400 p-[2px] shadow-md shadow-violet-500/20">
                <div className="w-full h-full bg-navy-900 rounded-[10px] flex items-center justify-center font-bold text-xs text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-cyan-400">
                  DP
                </div>
              </div>
              <span className="font-extrabold text-lg tracking-tight text-white">
                {personalInfo.fullName}
              </span>
            </div>
            
            <p className="text-xs sm:text-sm text-slate-400 max-w-sm mb-4 leading-relaxed">
              Full Stack Developer specializing in React.js, Next.js, Node.js, Express.js, MongoDB, Python, and modern scalable web applications.
            </p>

            <div className="flex items-center gap-3">
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-xl bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white border border-white/10 hover:border-violet-500/50 hover:scale-110 transition-all duration-300"
                aria-label="GitHub Profile"
              >
                <Github className="w-4 h-4" />
              </a>
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-xl bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white border border-white/10 hover:border-cyan-500/50 hover:scale-110 transition-all duration-300"
                aria-label="LinkedIn Profile"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href={`mailto:${personalInfo.email}`}
                className="p-2.5 rounded-xl bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white border border-white/10 hover:border-violet-500/50 hover:scale-110 transition-all duration-300"
                aria-label="Email Dipali"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Navigation Links */}
          <div className="md:col-span-5">
            <span className="text-xs font-mono uppercase tracking-widest text-violet-400 block mb-4 font-semibold">
              Navigation
            </span>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-xs">
              {footerNav.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className="text-slate-400 hover:text-cyan-400 transition-colors py-1 cursor-pointer"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>

          {/* Back to top column */}
          <div className="md:col-span-2 flex flex-col items-center md:items-end justify-center">
            <button
              type="button"
              onClick={scrollToTop}
              aria-label="Back to top of page"
              title="Back to top"
              className="btn-3d group flex items-center gap-2.5 px-4 py-2.5 rounded-2xl bg-gradient-to-r from-violet-600/30 via-indigo-600/30 to-cyan-500/30 hover:from-violet-600 hover:via-indigo-600 hover:to-cyan-500 text-white border border-violet-500/40 hover:border-cyan-400 shadow-lg shadow-violet-600/20 hover:shadow-cyan-500/30 transition-all duration-300 cursor-pointer active:scale-95"
            >
              <span className="text-xs font-semibold tracking-wide">Back to Top</span>
              <div className="w-7 h-7 rounded-xl bg-white/10 group-hover:bg-white/20 flex items-center justify-center border border-white/15 transition-all shadow-inner">
                <ArrowUp className="w-4 h-4 text-cyan-300 group-hover:text-white group-hover:-translate-y-1 transition-transform duration-300" />
              </div>
            </button>
          </div>

        </div>

        {/* Bottom Credits */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-center gap-4 text-xs text-slate-500 text-center">
          <div>
            © {currentYear} {personalInfo.fullName}. All rights reserved.
          </div>
        </div>

      </div>
    </footer>
  );
}
