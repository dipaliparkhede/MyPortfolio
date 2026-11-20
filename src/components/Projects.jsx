import React, { useState } from 'react';
import { 
  FolderGit2, 
  Sparkles, 
  Github, 
  ExternalLink, 
  CheckCircle2, 
  Layers, 
  ArrowRight,
  Star,
  Eye,
  ShieldCheck,
  Cpu
} from 'lucide-react';
import { projects, projectCategories } from '../data/projects';
import ProjectModal from './ProjectModal';
import TiltCard from './TiltCard';

export default function Projects() {
  const [selectedCategory, setSelectedCategory] = useState('All Projects');
  const [activeModalProject, setActiveModalProject] = useState(null);

  const filteredProjects = selectedCategory === 'All Projects'
    ? projects
    : projects.filter(p => p.category === selectedCategory || (p.secondaryCategories && p.secondaryCategories.includes(selectedCategory)));

  return (
    <section id="projects" className="py-24 relative overflow-hidden bg-grid-pattern">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full border border-violet-500/20 bg-violet-500/10 text-violet-400 text-xs font-semibold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5 text-cyan-400 animate-spin-slow" />
            <span>Featured Portfolio Works</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white dark:text-white text-slate-900 tracking-tight">
            Featured Projects
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-violet-500 to-cyan-400 rounded-full mt-3 mb-4" />
          <p className="max-w-2xl text-slate-400 dark:text-slate-400 text-slate-600 text-sm sm:text-base">
            Showcasing an enterprise-grade full-stack recruitment portal alongside machine learning and healthcare diagnostic applications with interactive 3D perspective previews.
          </p>
        </div>

        {/* Category Filter Pills */}
        <div className="flex items-center justify-center flex-wrap gap-2.5 mb-14">
          {projectCategories.map((cat) => {
            const isActive = selectedCategory === cat;
            return (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`btn-3d px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 ${
                  isActive
                    ? 'bg-gradient-to-r from-violet-600 via-indigo-600 to-cyan-500 text-white shadow-lg shadow-violet-600/30 scale-105'
                    : 'glass-panel text-slate-300 dark:text-slate-300 text-slate-600 hover:text-white hover:border-violet-500/50'
                }`}
              >
                {cat}
              </button>
            );
          })}
        </div>

        {/* Projects 3D Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 perspective-1000">
          {filteredProjects.map((proj) => {
            const isJobConnect = proj.id === 'jobconnect';

            return (
              <TiltCard
                key={proj.id}
                maxTilt={isJobConnect ? 6 : 9}
                scale={1.018}
                className={`glass-panel rounded-3xl overflow-hidden flex flex-col justify-between transition-all duration-300 group hover-card-3d ${
                  isJobConnect
                    ? 'border-2 border-violet-500/60 shadow-xl shadow-violet-600/20 ring-1 ring-violet-500/40 lg:col-span-2'
                    : 'border border-white/10 dark:border-white/10 border-slate-200 hover:border-violet-500/50'
                }`}
              >
                {/* Visual Header / Banner */}
                <div className={`relative p-6 sm:p-8 bg-gradient-to-r ${proj.gradient} text-white overflow-hidden translate-z-10`}>
                  {/* Subtle pattern overlay */}
                  <div className="absolute inset-0 bg-black/25 backdrop-blur-[1px]" />
                  
                  <div className="relative z-10 flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-4">
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-mono font-bold px-3 py-1 rounded-full bg-white/20 backdrop-blur-md border border-white/30 tracking-wide uppercase shadow-sm">
                        {proj.category}
                      </span>
                      {proj.isFeatured && (
                        <span className="flex items-center gap-1 text-xs font-bold px-3 py-1 rounded-full bg-amber-400 text-slate-950 shadow-md shadow-amber-400/20 animate-pulse-subtle">
                          <Star className="w-3.5 h-3.5 fill-current" />
                          <span>Special Priority</span>
                        </span>
                      )}
                    </div>
                    <span className="text-xs font-mono text-white/90 px-2.5 py-1 rounded-md bg-black/40 border border-white/10">
                      {proj.badge}
                    </span>
                  </div>

                  <div className="relative z-10 translate-z-20">
                    <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight mb-2 drop-shadow-md">
                      {proj.name}
                    </h3>
                    <p className="text-sm text-white/90 line-clamp-2 max-w-2xl leading-relaxed">
                      {proj.tagline}
                    </p>
                  </div>
                </div>

                {/* Body Content */}
                <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between translate-z-10">
                  <div>
                    {/* Short Description */}
                    <p className="text-sm sm:text-base text-slate-300 dark:text-slate-300 text-slate-600 leading-relaxed mb-6">
                      {proj.description}
                    </p>

                    {/* Key Highlights / Features Preview */}
                    <div className="space-y-2 mb-6">
                      <span className="text-xs font-mono uppercase tracking-wider text-slate-400 font-semibold block mb-2">
                        Key Features:
                      </span>
                      {proj.keyFeatures.slice(0, isJobConnect ? 4 : 3).map((feat, fIdx) => (
                        <div key={fIdx} className="flex items-start gap-2 text-xs sm:text-sm text-slate-300 dark:text-slate-300 text-slate-600 group-hover:text-slate-200 transition-colors">
                          <CheckCircle2 className="w-4 h-4 text-cyan-400 flex-shrink-0 mt-0.5" />
                          <span className="line-clamp-2">{feat}</span>
                        </div>
                      ))}
                    </div>

                    {/* Tech Badges */}
                    <div className="mb-6">
                      <span className="text-xs font-mono uppercase tracking-wider text-slate-400 font-semibold block mb-2">
                        Technology Stack:
                      </span>
                      <div className="flex flex-wrap gap-1.5 sm:gap-2">
                        {proj.techStack.map((tech) => (
                          <span
                            key={tech}
                            className="px-2.5 py-1 rounded-lg text-xs font-medium bg-white/5 dark:bg-white/5 bg-slate-100 text-violet-300 dark:text-violet-300 text-violet-700 border border-white/10 dark:border-white/10 border-slate-200 group-hover:border-violet-500/40 hover:scale-105 transition-all"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Actions Bar */}
                  <div className="pt-4 border-t border-white/10 dark:border-white/10 border-slate-200 flex flex-wrap items-center justify-between gap-3 translate-z-20">
                    <div className="flex items-center gap-3">
                      <a
                        href={proj.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-3d flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold text-white bg-slate-800 hover:bg-slate-700 dark:bg-navy-800 dark:hover:bg-navy-700 border border-white/10"
                      >
                        <Github className="w-4 h-4" />
                        <span>Source Code</span>
                      </a>

                      {proj.liveDemo && (
                        <a
                          href={proj.liveDemo}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="btn-3d flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold text-white bg-emerald-600 hover:bg-emerald-500"
                        >
                          <ExternalLink className="w-4 h-4" />
                          <span>Live Demo</span>
                        </a>
                      )}
                    </div>

                    <button
                      onClick={() => setActiveModalProject(proj)}
                      className="btn-3d flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold text-violet-400 dark:text-violet-400 text-violet-700 hover:text-cyan-400 hover:bg-violet-500/10 group/btn"
                    >
                      <Eye className="w-4 h-4" />
                      <span>View Full Details</span>
                      <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover/btn:translate-x-1" />
                    </button>
                  </div>
                </div>
              </TiltCard>
            );
          })}
        </div>

      </div>

      {/* Project Detail Modal */}
      {activeModalProject && (
        <ProjectModal
          project={activeModalProject}
          onClose={() => setActiveModalProject(null)}
        />
      )}
    </section>
  );
}
