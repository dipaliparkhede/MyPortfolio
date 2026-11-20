import React from 'react';
import { 
  Sparkles, 
  Briefcase, 
  GraduationCap, 
  FolderGit2, 
  Award, 
  MapPin, 
  Calendar,
  CheckCircle,
  ArrowUpRight
} from 'lucide-react';
import { personalInfo } from '../data/personalInfo';
import TiltCard from './TiltCard';

export default function About() {
  const statIcons = [
    <Briefcase className="w-5 h-5 text-violet-400" />,
    <GraduationCap className="w-5 h-5 text-cyan-400" />,
    <FolderGit2 className="w-5 h-5 text-indigo-400" />,
    <Award className="w-5 h-5 text-emerald-400" />
  ];

  return (
    <section id="about" className="py-24 relative overflow-hidden bg-navy-950/40 dark:bg-navy-950/40 bg-slate-50/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full border border-violet-500/20 bg-violet-500/10 text-violet-400 text-xs font-semibold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
            <span>Profile & Background</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white dark:text-white text-slate-900 tracking-tight">
            About Me
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-violet-500 to-cyan-400 rounded-full mt-3" />
        </div>

        {/* 3D Top Info Cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 mb-16 perspective-1000">
          {personalInfo.stats.map((stat, idx) => (
            <TiltCard
              key={stat.label}
              maxTilt={10}
              scale={1.035}
              className="glass-card p-5 sm:p-6 rounded-2xl flex flex-col items-center text-center group hover-card-3d cursor-default"
            >
              <div className="w-12 h-12 rounded-xl bg-white/5 dark:bg-white/5 bg-slate-100 flex items-center justify-center mb-3 group-hover:scale-110 group-hover:bg-violet-500/15 transition-all duration-300 translate-z-10 shadow-sm">
                {statIcons[idx]}
              </div>
              <span className="text-xl sm:text-2xl font-bold text-white dark:text-white text-slate-900 tracking-tight translate-z-20">
                {stat.value}
              </span>
              <span className="text-sm font-semibold text-violet-400 dark:text-violet-400 text-violet-600 mt-0.5 translate-z-10">
                {stat.label}
              </span>
              <span className="text-xs text-slate-400 dark:text-slate-400 text-slate-500 mt-1">
                {stat.sub}
              </span>
            </TiltCard>
          ))}
        </div>

        {/* Narrative & Philosophy Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start perspective-1000">
          
          {/* Narrative Column */}
          <div className="lg:col-span-6 flex flex-col gap-6">
            <TiltCard
              maxTilt={6}
              scale={1.015}
              className="glass-card p-6 sm:p-8 rounded-2xl hover-card-3d"
            >
              <h3 className="text-xl font-bold text-white dark:text-white text-slate-900 mb-4 flex items-center gap-2">
                <span>Who I Am</span>
                <span className="text-cyan-400 text-sm font-normal">/ Full Stack Vision</span>
              </h3>
              
              <p className="text-slate-300 dark:text-slate-300 text-slate-600 text-base leading-relaxed mb-4">
                {personalInfo.aboutIntro}
              </p>
              
              <p className="text-slate-300 dark:text-slate-300 text-slate-600 text-base leading-relaxed mb-4">
                {personalInfo.aboutInterests}
              </p>

              <p className="text-slate-300 dark:text-slate-300 text-slate-600 text-base leading-relaxed">
                {personalInfo.aboutPhilosophy}
              </p>

              <div className="mt-6 pt-6 border-t border-white/10 dark:border-white/10 border-slate-200 grid grid-cols-2 gap-4">
                <div className="p-3 rounded-xl bg-white/5 dark:bg-white/5 bg-slate-100/50 hover:border-violet-500/30 transition-colors">
                  <span className="text-xs font-mono uppercase tracking-wider text-slate-400">Current Base:</span>
                  <p className="text-sm font-semibold text-white dark:text-white text-slate-900 mt-0.5 flex items-center gap-1.5">
                    <MapPin className="w-4 h-4 text-violet-400" />
                    Pune, Maharashtra
                  </p>
                </div>
                <div className="p-3 rounded-xl bg-white/5 dark:bg-white/5 bg-slate-100/50 hover:border-cyan-500/30 transition-colors">
                  <span className="text-xs font-mono uppercase tracking-wider text-slate-400">Primary Focus:</span>
                  <p className="text-sm font-semibold text-white dark:text-white text-slate-900 mt-0.5 flex items-center gap-1.5">
                    <CheckCircle className="w-4 h-4 text-emerald-400" />
                    MERN & Scalable Apps
                  </p>
                </div>
              </div>
            </TiltCard>
          </div>

          {/* Career Journey Timeline Column */}
          <div className="lg:col-span-6">
            <TiltCard
              maxTilt={6}
              scale={1.015}
              className="glass-card p-6 sm:p-8 rounded-2xl hover-card-3d"
            >
              <h3 className="text-xl font-bold text-white dark:text-white text-slate-900 mb-6 flex items-center gap-2">
                <span>Personal Journey & Milestones</span>
              </h3>

              <div className="relative border-l-2 border-violet-500/30 ml-3 space-y-8 py-2">
                {personalInfo.careerJourney.map((step, idx) => (
                  <div key={idx} className="relative pl-7 group">
                    {/* Timeline Node */}
                    <div className="absolute -left-[9px] top-1.5 w-4 h-4 rounded-full bg-navy-900 dark:bg-navy-900 bg-white border-2 border-violet-400 group-hover:border-cyan-400 group-hover:scale-125 transition-all duration-300 shadow-md shadow-violet-500/30 group-hover:shadow-[0_0_12px_#38BDF8]" />

                    <div className="inline-flex items-center gap-1.5 text-xs font-mono font-semibold text-cyan-400 dark:text-cyan-400 text-violet-600 mb-1">
                      <Calendar className="w-3.5 h-3.5" />
                      <span>{step.year}</span>
                    </div>

                    <h4 className="text-base font-bold text-white dark:text-white text-slate-900 group-hover:text-violet-300 transition-colors">
                      {step.title}
                    </h4>

                    <div className="text-xs font-medium text-slate-400 dark:text-slate-400 text-slate-500 mb-1.5">
                      {step.institution}
                    </div>

                    <p className="text-xs sm:text-sm text-slate-300 dark:text-slate-300 text-slate-600 leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                ))}
              </div>
            </TiltCard>
          </div>

        </div>

      </div>
    </section>
  );
}
