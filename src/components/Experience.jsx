import React from 'react';
import { 
  Briefcase, 
  Sparkles, 
  Calendar, 
  MapPin, 
  CheckCircle2, 
  Layers, 
  Server,
  Cloud
} from 'lucide-react';
import { experiences } from '../data/experience';
import TiltCard from './TiltCard';

export default function Experience() {
  return (
    <section id="experience" className="py-24 relative overflow-hidden bg-navy-950/40 dark:bg-navy-950/40 bg-slate-50/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full border border-violet-500/20 bg-violet-500/10 text-violet-400 text-xs font-semibold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
            <span>Professional Track Record</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white dark:text-white text-slate-900 tracking-tight">
            Work Experience
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-violet-500 to-cyan-400 rounded-full mt-3 mb-4" />
          <p className="max-w-2xl text-slate-400 dark:text-slate-400 text-slate-600 text-sm sm:text-base">
            Hands-on software development and cloud operations experience contributing to real-world applications and scalable infrastructure.
          </p>
        </div>

        {/* Experience Timeline Cards */}
        <div className="space-y-8 max-w-4xl mx-auto perspective-1000">
          {experiences.map((exp, idx) => (
            <TiltCard
              key={exp.id}
              maxTilt={5}
              scale={1.015}
              className="glass-panel p-6 sm:p-8 rounded-3xl relative border border-white/10 dark:border-white/10 border-slate-200 hover:border-violet-500/50 hover-card-3d transition-all group"
            >
              {/* Header Info */}
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-4 pb-4 border-b border-white/10 dark:border-white/10 border-slate-200 translate-z-10">
                <div>
                  <div className="inline-flex items-center gap-2 text-xs font-mono font-semibold px-2.5 py-1 rounded-md bg-violet-500/10 text-violet-400 border border-violet-500/20 mb-2">
                    {exp.type}
                  </div>
                  <h3 className="text-2xl font-bold text-white dark:text-white text-slate-900 group-hover:text-violet-300 transition-colors">
                    {exp.position}
                  </h3>
                  <div className="text-base font-semibold text-cyan-400 dark:text-cyan-400 text-violet-700 mt-0.5">
                    {exp.company}
                  </div>
                </div>

                <div className="flex flex-col md:items-end text-xs font-mono text-slate-400 dark:text-slate-400 text-slate-500 gap-1.5">
                  <div className="flex items-center gap-1.5">
                    <Calendar className="w-4 h-4 text-violet-400" />
                    <span>{exp.duration} ({exp.period})</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <MapPin className="w-4 h-4 text-cyan-400" />
                    <span>{exp.location}</span>
                  </div>
                </div>
              </div>

              {/* Tagline */}
              <div className="text-sm font-medium text-slate-300 dark:text-slate-300 text-slate-700 mb-4 italic translate-z-10">
                "{exp.tagline}"
              </div>

              {/* Responsibilities List */}
              <div className="space-y-2.5 mb-6 translate-z-10">
                {exp.responsibilities.map((resp, rIdx) => (
                  <div key={rIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300 dark:text-slate-300 text-slate-600 leading-relaxed group-hover:text-slate-200 transition-colors">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5 shadow-[0_0_6px_#10B981]" />
                    <span>{resp}</span>
                  </div>
                ))}
              </div>

              {/* Skills Chips */}
              <div className="flex flex-wrap items-center gap-2 pt-4 border-t border-white/5 dark:border-white/5 border-slate-200 translate-z-20">
                <span className="text-xs font-mono text-slate-400">Tech & Practices:</span>
                {exp.skills.map((s) => (
                  <span
                    key={s}
                    className="px-2.5 py-1 rounded-lg text-xs font-medium bg-white/5 dark:bg-white/5 bg-slate-100 text-slate-200 dark:text-slate-200 text-slate-700 border border-white/10 dark:border-white/10 border-slate-200 hover:border-violet-500/40 hover:scale-105 transition-all"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </TiltCard>
          ))}
        </div>

      </div>
    </section>
  );
}
