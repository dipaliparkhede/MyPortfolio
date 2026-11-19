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

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
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
              <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-violet-600 to-cyan-400 p-[2px]">
                <div className="w-full h-full bg-navy-900 rounded-[10px] flex items-center justify-center font-bold text-xs text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-cyan-400">
                  DP
                </div>
              </div>
              <span className="font-extrabold text-lg tracking-tight text-white">
                {personalInfo.fullName}
              </span>
            </div>
            
            <p className="text-xs sm:text-sm text-slate-400 max-w-sm mb-4 leading-relaxed">
              Full Stack Developer specializing in React.js, Next.js, Node.js, Express.js, MongoDB, and modern web application development.
            </p>

            <div className="flex items-center gap-3">
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-xl bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white border border-white/10 transition-colors"
                aria-label="GitHub Profile"
              >
                <Github className="w-4 h-4" />
              </a>
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-xl bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white border border-white/10 transition-colors"
                aria-label="LinkedIn Profile"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href={`mailto:${personalInfo.email}`}
                className="p-2 rounded-xl bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white border border-white/10 transition-colors"
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
                  className="text-slate-400 hover:text-cyan-400 transition-colors py-1"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>

          {/* Back to top column */}
          <div className="md:col-span-2 flex md:justify-end">
            <button
              onClick={scrollToTop}
              className="flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-semibold bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white border border-white/10 hover:border-violet-500/50 transition-all group"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-4 h-4 text-violet-400 group-hover:-translate-y-1 transition-transform" />
            </button>
          </div>

        </div>

        {/* Bottom Credits */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div>
            © {currentYear} {personalInfo.fullName}. All rights reserved.
          </div>
          <div className="flex items-center gap-1 text-slate-400">
            <span>Crafted with</span>
            <span className="text-rose-500">♥</span>
            <span>using React, Tailwind CSS & Vite</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
