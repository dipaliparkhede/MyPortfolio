import React, { useEffect } from 'react';
import { 
  X, 
  Github, 
  ExternalLink, 
  Layers, 
  CheckCircle2, 
  Cpu, 
  Database, 
  ShieldCheck, 
  Activity,
  ArrowRight
} from 'lucide-react';

export default function ProjectModal({ project, onClose }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [onClose]);

  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
      
      {/* Modal Dialog Card */}
      <div 
        className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-3xl bg-navy-950 dark:bg-navy-950 bg-white border border-white/15 dark:border-white/15 border-slate-300 shadow-2xl p-6 sm:p-8 text-left"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-xl bg-white/5 dark:bg-white/5 bg-slate-100 hover:bg-white/10 dark:hover:bg-white/10 hover:bg-slate-200 text-slate-400 hover:text-white dark:hover:text-white hover:text-slate-900 border border-white/10 transition-colors"
          aria-label="Close project modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="pr-10 mb-6">
          <div className="flex flex-wrap items-center gap-2 mb-2">
            <span className="text-xs font-mono font-semibold px-2.5 py-0.5 rounded-full bg-violet-500/20 text-violet-300 border border-violet-500/30">
              {project.category}
            </span>
            <span className="text-xs font-mono px-2.5 py-0.5 rounded-full bg-cyan-500/20 text-cyan-300 border border-cyan-500/30">
              {project.badge}
            </span>
          </div>

          <h3 className="text-2xl sm:text-3xl font-extrabold text-white dark:text-white text-slate-900">
            {project.name}
          </h3>
          <p className="text-sm sm:text-base text-violet-400 dark:text-violet-400 text-violet-700 font-medium mt-1">
            {project.tagline}
          </p>
        </div>

        {/* Quick Highlights Bar */}
        {project.highlights && (
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-6 p-4 rounded-2xl bg-white/5 dark:bg-white/5 bg-slate-100 border border-white/10">
            {project.highlights.map((h, i) => (
              <div key={i} className="flex flex-col">
                <span className="text-[11px] font-mono text-slate-400 uppercase">{h.label}</span>
                <span className="text-sm font-bold text-white dark:text-white text-slate-900 mt-0.5">{h.val}</span>
              </div>
            ))}
          </div>
        )}

        {/* Overview */}
        <div className="mb-6">
          <h4 className="text-sm font-mono uppercase tracking-wider text-slate-400 mb-2">Project Overview</h4>
          <p className="text-sm sm:text-base text-slate-300 dark:text-slate-300 text-slate-600 leading-relaxed">
            {project.overview}
          </p>
        </div>

        {/* Key Features */}
        <div className="mb-6">
          <h4 className="text-sm font-mono uppercase tracking-wider text-slate-400 mb-3">Key Features & Implemented Workflows</h4>
          <div className="space-y-2.5">
            {project.keyFeatures.map((feat, idx) => (
              <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300 dark:text-slate-300 text-slate-600">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                <span>{feat}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Architecture Breakdown */}
        {project.architecture && (
          <div className="mb-6 p-5 rounded-2xl bg-white/5 dark:bg-white/5 bg-slate-50 border border-white/10">
            <h4 className="text-sm font-mono uppercase tracking-wider text-cyan-400 mb-3 flex items-center gap-2">
              <Layers className="w-4 h-4" />
              <span>Technical Architecture</span>
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs sm:text-sm">
              {Object.entries(project.architecture).map(([key, val]) => (
                <div key={key} className="p-3 rounded-xl bg-black/20 dark:bg-black/20 bg-white/50 border border-white/5">
                  <span className="font-mono text-xs font-semibold text-violet-400 capitalize block mb-1">
                    {key}:
                  </span>
                  <p className="text-slate-300 dark:text-slate-300 text-slate-600">{val}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Tech Stack Badges */}
        <div className="mb-8">
          <h4 className="text-sm font-mono uppercase tracking-wider text-slate-400 mb-2">Technologies Used</h4>
          <div className="flex flex-wrap gap-2">
            {project.techStack.map((tech) => (
              <span
                key={tech}
                className="px-3 py-1 rounded-lg text-xs font-semibold bg-violet-600/20 text-violet-300 dark:text-violet-300 text-violet-700 border border-violet-500/30"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Actions Footer */}
        <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-white/10">
          <div className="flex items-center gap-3">
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-5 py-2.5 rounded-xl font-semibold text-sm text-white bg-gradient-to-r from-violet-600 to-indigo-600 hover:from-violet-500 hover:to-cyan-500 shadow-md shadow-violet-600/20 transition-all"
            >
              <Github className="w-4 h-4" />
              <span>View Source Code on GitHub</span>
            </a>
          </div>

          <button
            onClick={onClose}
            className="px-5 py-2.5 rounded-xl text-sm font-medium text-slate-400 hover:text-white dark:hover:text-white hover:text-slate-900 transition-colors"
          >
            Close Details
          </button>
        </div>

      </div>
    </div>
  );
}
