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
            <Sparkles className="w-3.5 h-3.5" />
            <span>Featured Portfolio Works</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white dark:text-white text-slate-900 tracking-tight">
            Featured Projects
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-violet-500 to-cyan-400 rounded-full mt-3 mb-4" />
          <p className="max-w-2xl text-slate-400 dark:text-slate-400 text-slate-600 text-sm sm:text-base">
            Showcasing an enterprise-grade full-stack recruitment portal alongside machine learning and healthcare diagnostic applications.
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
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 ${
                  isActive
                    ? 'bg-gradient-to-r from-violet-600 to-indigo-600 text-white shadow-lg shadow-violet-600/30 scale-105'
                    : 'glass-panel text-slate-300 dark:text-slate-300 text-slate-600 hover:text-white hover:border-violet-500/40'
                }`}
              >
                {cat}
              </button>
            );
          })}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {filteredProjects.map((proj) => {
            const isJobConnect = proj.id === 'jobconnect';

            return (
              <div
                key={proj.id}
                className={`glass-panel rounded-3xl overflow-hidden flex flex-col justify-between transition-all duration-300 group hover:-translate-y-1.5 ${
                  isJobConnect
                    ? 'border-2 border-violet-500/60 shadow-xl shadow-violet-600/15 ring-1 ring-violet-500/30 lg:col-span-2'
                    : 'border border-white/10 dark:border-white/10 border-slate-200 hover:border-violet-500/40'
                }`}
              >
                {/* Visual Header / Banner */}
                <div className={`relative p-6 sm:p-8 bg-gradient-to-r ${proj.gradient} text-white overflow-hidden`}>
                  {/* Subtle pattern overlay */}
                  <div className="absolute inset-0 bg-black/20 backdrop-blur-[1px]" />
                  
                  <div className="relative z-10 flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-4">
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-mono font-bold px-3 py-1 rounded-full bg-white/20 backdrop-blur-md border border-white/30 tracking-wide uppercase">
                        {proj.category}
                      </span>
                      {proj.isFeatured && (
                        <span className="flex items-center gap-1 text-xs font-bold px-3 py-1 rounded-full bg-amber-400 text-slate-950 shadow-sm">
                          <Star className="w-3.5 h-3.5 fill-current" />
                          <span>Special Priority</span>
                        </span>
                      )}
                    </div>
                    <span className="text-xs font-mono text-white/80 px-2.5 py-1 rounded-md bg-black/30">
                      {proj.badge}
                    </span>
                  </div>

                  <div className="relative z-10">
                    <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight mb-2">
                      {proj.name}
                    </h3>
                    <p className="text-sm text-white/90 line-clamp-2 max-w-2xl">
                      {proj.tagline}
                    </p>
                  </div>
                </div>

                {/* Body Content */}
                <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between">
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
                        <div key={fIdx} className="flex items-start gap-2 text-xs sm:text-sm text-slate-300 dark:text-slate-300 text-slate-600">
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
                            className="px-2.5 py-1 rounded-lg text-xs font-medium bg-white/5 dark:bg-white/5 bg-slate-100 text-violet-300 dark:text-violet-300 text-violet-700 border border-white/10 dark:border-white/10 border-slate-200"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Actions Bar */}
                  <div className="pt-4 border-t border-white/10 dark:border-white/10 border-slate-200 flex flex-wrap items-center justify-between gap-3">
                    <div className="flex items-center gap-3">
                      <a
                        href={proj.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold text-white bg-slate-800 hover:bg-slate-700 dark:bg-navy-800 dark:hover:bg-navy-700 border border-white/10 transition-all hover:scale-105"
                      >
                        <Github className="w-4 h-4" />
                        <span>Source Code</span>
                      </a>

                      {proj.liveDemo && (
                        <a
                          href={proj.liveDemo}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold text-white bg-emerald-600 hover:bg-emerald-500 transition-all"
                        >
                          <ExternalLink className="w-4 h-4" />
                          <span>Live Demo</span>
                        </a>
                      )}
                    </div>

                    <button
                      onClick={() => setActiveModalProject(proj)}
                      className="flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold text-violet-400 dark:text-violet-400 text-violet-700 hover:text-cyan-400 hover:bg-violet-500/10 transition-colors group/btn"
                    >
                      <Eye className="w-4 h-4" />
                      <span>View Full Details</span>
                      <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover/btn:translate-x-1" />
                    </button>
                  </div>
                </div>
              </div>
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
