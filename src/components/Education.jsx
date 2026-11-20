import React from 'react';
import { GraduationCap, Sparkles, Calendar, Award, BookOpen, Building } from 'lucide-react';
import { educations } from '../data/education';
import TiltCard from './TiltCard';

export default function Education() {
  return (
    <section id="education" className="py-24 relative overflow-hidden bg-navy-950/40 dark:bg-navy-950/40 bg-slate-50/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full border border-violet-500/20 bg-violet-500/10 text-violet-400 text-xs font-semibold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
            <span>Academic Qualifications</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white dark:text-white text-slate-900 tracking-tight">
            Education
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-violet-500 to-cyan-400 rounded-full mt-3 mb-4" />
          <p className="max-w-2xl text-slate-400 dark:text-slate-400 text-slate-600 text-sm sm:text-base">
            Formal computer science and application degrees providing strong algorithmic, software engineering, and analytical foundations.
          </p>
        </div>

        {/* Education 3D Timeline Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto perspective-1000">
          {educations.map((edu) => (
            <TiltCard
              key={edu.id}
              maxTilt={8}
              scale={1.02}
              className="glass-panel p-6 sm:p-8 rounded-3xl flex flex-col justify-between border border-white/10 dark:border-white/10 border-slate-200 hover:border-violet-500/50 hover-card-3d transition-all group"
            >
              <div>
                {/* Header status & duration */}
                <div className="flex items-center justify-between gap-2 mb-4 pb-3 border-b border-white/10 dark:border-white/10 border-slate-200 translate-z-10">
                  <span className="text-xs font-mono font-semibold px-2.5 py-1 rounded-md bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
                    {edu.status}
                  </span>
                  <div className="flex items-center gap-1.5 text-xs font-mono text-slate-400">
                    <Calendar className="w-3.5 h-3.5 text-violet-400" />
                    <span>{edu.duration}</span>
                  </div>
                </div>

                {/* Degree Name */}
                <h3 className="text-xl sm:text-2xl font-bold text-white dark:text-white text-slate-900 group-hover:text-violet-300 transition-colors mb-2 translate-z-20">
                  {edu.degree}
                </h3>

                {/* Institution & University */}
                <div className="space-y-1 mb-4 translate-z-10">
                  <div className="flex items-start gap-2 text-xs sm:text-sm text-slate-300 dark:text-slate-300 text-slate-700 font-medium">
                    <Building className="w-4 h-4 text-violet-400 flex-shrink-0 mt-0.5" />
                    <span>{edu.institution}</span>
                  </div>
                  <div className="text-xs text-violet-400 dark:text-violet-400 text-violet-700 font-medium pl-6">
                    {edu.university}
                  </div>
                </div>

                {/* Highlights */}
                <div className="space-y-2 mb-6 translate-z-10">
                  {edu.highlights.map((h, i) => (
                    <div key={i} className="flex items-start gap-2 text-xs sm:text-sm text-slate-400 dark:text-slate-400 text-slate-600">
                      <span className="w-1.5 h-1.5 rounded-full bg-violet-400 flex-shrink-0 mt-2" />
                      <span>{h}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Coursework & Score Footer */}
              <div className="pt-4 border-t border-white/10 dark:border-white/10 border-slate-200 flex items-center justify-between translate-z-20">
                <div>
                  <span className="text-xs font-mono text-slate-400">Academic Score:</span>
                  <div className="text-lg font-bold text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-cyan-400">
                    {edu.cgpa}
                  </div>
                </div>

                <div className="flex items-center gap-1.5 text-xs font-medium text-slate-300 dark:text-slate-300 text-slate-600 bg-white/5 dark:bg-white/5 bg-slate-100 px-3 py-1.5 rounded-xl border border-white/10">
                  <GraduationCap className="w-4 h-4 text-cyan-400" />
                  <span>Verified Degree</span>
                </div>
              </div>

            </TiltCard>
          ))}
        </div>

      </div>
    </section>
  );
}
