import React, { useState, useEffect } from 'react';
import { 
  Github, 
  Linkedin, 
  Mail, 
  ArrowRight, 
  FileDown, 
  Sparkles, 
  Code2, 
  Terminal, 
  CheckCircle2, 
  Layers, 
  Server, 
  Database,
  ExternalLink
} from 'lucide-react';
import { personalInfo } from '../data/personalInfo';
import TiltCard from './TiltCard';

export default function Hero({ onOpenResume }) {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(120);

  // Typewriter effect for animated roles
  useEffect(() => {
    const currentRole = personalInfo.roles[roleIndex];
    let timer;

    if (!isDeleting && displayText === currentRole) {
      timer = setTimeout(() => setIsDeleting(true), 1800);
    } else if (isDeleting && displayText === '') {
      setIsDeleting(false);
      setRoleIndex((prev) => (prev + 1) % personalInfo.roles.length);
      setTypingSpeed(100);
    } else {
      timer = setTimeout(() => {
        setDisplayText(
          isDeleting
            ? currentRole.substring(0, displayText.length - 1)
            : currentRole.substring(0, displayText.length + 1)
        );
        setTypingSpeed(isDeleting ? 40 : 80);
      }, typingSpeed);
    }

    return () => clearTimeout(timer);
  }, [displayText, isDeleting, roleIndex, typingSpeed]);

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="relative min-h-screen pt-28 pb-16 flex items-center justify-center overflow-hidden bg-grid-pattern">
      {/* Ambient background glows */}
      <div className="glow-orb w-96 h-96 -top-20 -left-20 bg-violet-600/25 animate-pulse-subtle" />
      <div className="glow-orb w-96 h-96 top-1/2 -right-20 bg-cyan-500/20 animate-pulse-subtle" />
      <div className="glow-orb w-72 h-72 -bottom-20 left-1/3 bg-indigo-600/20" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Introduction & Call to Actions */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            
            {/* Availability Pill */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-violet-500/40 bg-violet-500/10 backdrop-blur-md mb-6 shadow-lg shadow-violet-500/10 hover:border-cyan-400/60 hover:scale-105 transition-all duration-300">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
              </span>
              <span className="text-xs font-semibold uppercase tracking-wider text-violet-300 dark:text-violet-300 text-violet-700">
                {personalInfo.availability}
              </span>
            </div>

            {/* Sub-intro */}
            <p className="text-sm sm:text-base font-mono font-medium tracking-widest uppercase text-violet-400 dark:text-violet-400 text-violet-600 mb-2 flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-cyan-400 animate-spin-slow" />
              <span>{personalInfo.heroIntro}</span>
            </p>

            {/* Main Full Name */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-white dark:text-white text-slate-900 leading-[1.1] mb-4">
              {personalInfo.fullName}
            </h1>

            {/* Animated Headline / Typing Role */}
            <div className="h-12 sm:h-14 flex items-center mb-4">
              <span className="text-xl sm:text-2xl md:text-3xl font-bold text-slate-300 dark:text-slate-300 text-slate-700 mr-2">
                I am a
              </span>
              <span className="text-xl sm:text-2xl md:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-violet-400 via-indigo-300 to-cyan-400 border-b-2 border-cyan-400 pb-0.5 text-glow">
                {displayText}
              </span>
              <span className="w-0.5 h-7 sm:h-8 bg-cyan-400 ml-1 animate-pulse shadow-[0_0_8px_#38BDF8]" />
            </div>

            {/* Sub-headline */}
            <h2 className="text-base sm:text-lg font-semibold text-violet-300 dark:text-violet-300 text-slate-700 mb-4">
              {personalInfo.headline}
            </h2>

            {/* Short Bio Description */}
            <p className="text-slate-400 dark:text-slate-400 text-slate-600 text-base sm:text-lg leading-relaxed max-w-2xl mb-8">
              {personalInfo.heroDescription}
            </p>

            {/* 3D Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 mb-8 w-full sm:w-auto">
              <button
                onClick={() => scrollToSection('projects')}
                className="btn-3d group flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-white bg-gradient-to-r from-violet-600 via-indigo-600 to-cyan-500 shadow-lg shadow-violet-600/30"
              >
                <span>Explore My Work</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </button>

              <button
                onClick={onOpenResume}
                className="btn-3d flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-slate-200 dark:text-slate-200 text-slate-800 bg-white/5 dark:bg-white/5 bg-slate-100 hover:bg-white/10 dark:hover:bg-white/10 hover:bg-slate-200 border border-white/15 dark:border-white/15 border-slate-300"
              >
                <FileDown className="w-4 h-4 text-violet-400" />
                <span>Download Resume</span>
              </button>

              <button
                onClick={() => scrollToSection('contact')}
                className="btn-3d flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-violet-300 dark:text-violet-300 text-violet-700 hover:text-cyan-400 dark:hover:text-cyan-400 hover:underline underline-offset-4"
              >
                <span>Contact Me</span>
              </button>
            </div>

            {/* Social Icons & Quick Stats */}
            <div className="flex items-center gap-4 pt-4 border-t border-white/10 dark:border-white/10 border-slate-200 w-full">
              <span className="text-xs uppercase font-mono tracking-widest text-slate-400">Connect:</span>
              <div className="flex items-center gap-3">
                <a
                  href={personalInfo.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-xl border border-white/10 dark:border-white/10 border-slate-300 bg-white/5 dark:bg-white/5 bg-slate-100 text-slate-300 dark:text-slate-300 text-slate-700 hover:text-white dark:hover:text-white hover:text-violet-600 hover:border-violet-500/60 hover:-translate-y-1 hover:shadow-[0_8px_20px_rgba(139,92,246,0.3)] transition-all duration-300"
                  aria-label="GitHub Profile"
                >
                  <Github className="w-5 h-5" />
                </a>
                <a
                  href={personalInfo.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-xl border border-white/10 dark:border-white/10 border-slate-300 bg-white/5 dark:bg-white/5 bg-slate-100 text-slate-300 dark:text-slate-300 text-slate-700 hover:text-white dark:hover:text-white hover:text-cyan-500 hover:border-cyan-500/60 hover:-translate-y-1 hover:shadow-[0_8px_20px_rgba(56,189,248,0.3)] transition-all duration-300"
                  aria-label="LinkedIn Profile"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
                <a
                  href={`mailto:${personalInfo.email}`}
                  className="p-2.5 rounded-xl border border-white/10 dark:border-white/10 border-slate-300 bg-white/5 dark:bg-white/5 bg-slate-100 text-slate-300 dark:text-slate-300 text-slate-700 hover:text-white dark:hover:text-white hover:text-violet-400 hover:border-violet-500/60 hover:-translate-y-1 hover:shadow-[0_8px_20px_rgba(139,92,246,0.3)] transition-all duration-300"
                  aria-label="Send an Email"
                >
                  <Mail className="w-5 h-5" />
                </a>
              </div>
              <div className="hidden sm:flex items-center gap-2 ml-auto text-xs font-mono text-slate-400">
                <span className="w-2 h-2 rounded-full bg-violet-400 shadow-[0_0_8px_#8B5CF6]" />
                <span>Pune, Maharashtra, India</span>
              </div>
            </div>

          </div>

          {/* Right Column: 3D Interactive Terminal & Multi-Plane Depth Badges */}
          <div className="lg:col-span-5 relative flex items-center justify-center perspective-1000">
            
            {/* Glowing Backdrop Ring */}
            <div className="absolute inset-0 bg-gradient-to-tr from-violet-600/30 via-indigo-600/20 to-cyan-400/25 rounded-3xl blur-2xl transform rotate-3 scale-95 animate-pulse-subtle" />

            {/* 3D Tilt Code Window Card */}
            <TiltCard
              maxTilt={14}
              scale={1.03}
              className="relative w-full max-w-lg rounded-2xl border border-white/15 dark:border-white/15 border-slate-300 bg-navy-950/95 dark:bg-navy-950/95 bg-slate-900/95 backdrop-blur-2xl shadow-2xl shadow-black/50 overflow-hidden group hover:border-violet-500/50 hover:shadow-[0_25px_50px_-12px_rgba(139,92,246,0.35)]"
            >
              {/* Window Header */}
              <div className="flex items-center justify-between px-4 py-3 bg-white/5 border-b border-white/10 translate-z-10">
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-rose-500/80 inline-block hover:scale-125 transition-transform" />
                  <span className="w-3 h-3 rounded-full bg-amber-500/80 inline-block hover:scale-125 transition-transform" />
                  <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block hover:scale-125 transition-transform" />
                </div>
                <div className="flex items-center gap-2 text-xs font-mono text-slate-400">
                  <Terminal className="w-3.5 h-3.5 text-cyan-400" />
                  <span>developer.profile.ts</span>
                </div>
                <div className="text-[11px] font-mono text-slate-500">UTF-8</div>
              </div>

              {/* Code Editor Body with 3D Depth */}
              <div className="p-5 font-mono text-xs sm:text-sm text-slate-300 leading-relaxed overflow-x-auto translate-z-20">
                <div className="text-slate-500">// Modern Full Stack Developer Profile</div>
                <div>
                  <span className="text-violet-400">const</span>{' '}
                  <span className="text-cyan-300">dipali</span>:{' '}
                  <span className="text-indigo-300">Developer</span> = {'{'}
                </div>
                <div className="pl-4">
                  <span className="text-slate-400">name:</span>{' '}
                  <span className="text-emerald-300">"Dipali Vitthal Parkhede"</span>,
                </div>
                <div className="pl-4">
                  <span className="text-slate-400">title:</span>{' '}
                  <span className="text-emerald-300">"Full Stack Developer"</span>,
                </div>
                <div className="pl-4">
                  <span className="text-slate-400">location:</span>{' '}
                  <span className="text-emerald-300">"Pune, MH, India"</span>,
                </div>
                <div className="pl-4">
                  <span className="text-slate-400">education:</span>{' '}
                  <span className="text-emerald-300">"MCA @ SPPU (8.62 CGPA)"</span>,
                </div>
                <div className="pl-4">
                  <span className="text-slate-400">featuredProject:</span>{' '}
                  <span className="text-violet-300">"JobConnect (MERN)"</span>,
                </div>
                <div className="pl-4">
                  <span className="text-slate-400">stack:</span> [
                </div>
                <div className="pl-8 text-amber-300">
                  "React.js", "Next.js", "Node.js", "MongoDB", "Python", "AWS"
                </div>
                <div className="pl-4">],</div>
                <div className="pl-4">
                  <span className="text-slate-400">currentFocus:</span>{' '}
                  <span className="text-cyan-300">"Scalable Web Solutions & Cloud"</span>,
                </div>
                <div className="pl-4">
                  <span className="text-slate-400">readyToContribute:</span>{' '}
                  <span className="text-violet-400">true</span>
                </div>
                <div>{'};'}</div>
                <div className="mt-2 text-slate-500">
                  <span className="text-cyan-400">dipali</span>.<span className="text-violet-400">buildImpactfulApps</span>();
                </div>
              </div>

              {/* Bottom Metrics Pill */}
              <div className="px-5 py-3 bg-white/5 border-t border-white/10 flex items-center justify-between text-xs translate-z-10">
                <div className="flex items-center gap-2 text-emerald-400">
                  <CheckCircle2 className="w-4 h-4 shadow-[0_0_8px_#10B981]" />
                  <span className="font-medium">1+ Year Experience Verified</span>
                </div>
                <span className="text-violet-400 font-mono font-medium">96% NPTEL Java</span>
              </div>
            </TiltCard>

            {/* 3D Floating Tech Badges (Elevated Multi-plane) */}
            <div className="hidden sm:flex absolute -top-5 -left-4 items-center gap-2 px-3.5 py-2 rounded-xl bg-navy-900/90 dark:bg-navy-900/90 bg-white/95 border border-violet-500/50 shadow-2xl backdrop-blur-md animate-float-3d z-30 hover:scale-110 transition-transform">
              <Layers className="w-4 h-4 text-cyan-400" />
              <span className="text-xs font-semibold text-white dark:text-white text-slate-900">React & Next.js</span>
            </div>

            <div className="hidden sm:flex absolute -bottom-6 -right-2 items-center gap-2 px-3.5 py-2 rounded-xl bg-navy-900/90 dark:bg-navy-900/90 bg-white/95 border border-cyan-500/50 shadow-2xl backdrop-blur-md animate-float-3d z-30 hover:scale-110 transition-transform" style={{ animationDelay: '2.5s' }}>
              <Server className="w-4 h-4 text-violet-400" />
              <span className="text-xs font-semibold text-white dark:text-white text-slate-900">Node.js & MongoDB</span>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
