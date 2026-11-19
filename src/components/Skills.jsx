import React, { useState } from 'react';
import { 
  Sparkles, 
  Coffee, 
  Code2, 
  FileCode, 
  Terminal, 
  Layers, 
  Globe, 
  Palette, 
  Layout, 
  Server, 
  Cpu, 
  Network, 
  ShieldCheck, 
  Database, 
  Table, 
  Cloud, 
  HardDrive, 
  FolderArchive, 
  Activity, 
  GitBranch, 
  Github, 
  Send, 
  AppWindow, 
  Users, 
  CheckCircle2 
} from 'lucide-react';
import { skillCategories } from '../data/skills';

// Dynamic Icon Map
const iconMap = {
  Coffee: Coffee,
  Code2: Code2,
  FileCode: FileCode,
  Terminal: Terminal,
  Layers: Layers,
  Globe: Globe,
  Palette: Palette,
  Layout: Layout,
  Sparkles: Sparkles,
  Server: Server,
  Cpu: Cpu,
  Network: Network,
  ShieldCheck: ShieldCheck,
  Database: Database,
  Table: Table,
  Cloud: Cloud,
  HardDrive: HardDrive,
  FolderArchive: FolderArchive,
  Activity: Activity,
  GitBranch: GitBranch,
  Github: Github,
  Send: Send,
  AppWindow: AppWindow,
  Users: Users,
  CheckCircle2: CheckCircle2
};

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState('All');

  const categoriesList = ['All', ...skillCategories.map(c => c.category)];

  const filteredCategories = activeCategory === 'All'
    ? skillCategories
    : skillCategories.filter(c => c.category === activeCategory);

  return (
    <section id="skills" className="py-24 relative overflow-hidden bg-grid-pattern">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full border border-violet-500/20 bg-violet-500/10 text-violet-400 text-xs font-semibold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Technical Capabilities</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white dark:text-white text-slate-900 tracking-tight">
            Technical Skills
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-violet-500 to-cyan-400 rounded-full mt-3 mb-4" />
          <p className="max-w-2xl text-slate-400 dark:text-slate-400 text-slate-600 text-sm sm:text-base">
            Categorized core proficiencies spanning modern frontend frameworks, backend microservices, cloud deployments, and developer tooling.
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex items-center justify-center flex-wrap gap-2 mb-12">
          {categoriesList.map((cat) => {
            const isActive = activeCategory === cat;
            return (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 ${
                  isActive
                    ? 'bg-gradient-to-r from-violet-600 to-cyan-500 text-white shadow-lg shadow-violet-600/20 scale-105'
                    : 'glass-panel text-slate-300 dark:text-slate-300 text-slate-600 hover:text-white hover:border-violet-500/40'
                }`}
              >
                {cat}
              </button>
            );
          })}
        </div>

        {/* Categorized Skill Cards */}
        <div className="space-y-12">
          {filteredCategories.map((catGroup) => (
            <div key={catGroup.category} className="glass-panel p-6 sm:p-8 rounded-3xl">
              <div className="mb-6 flex flex-col sm:flex-row sm:items-baseline justify-between gap-1 border-b border-white/10 dark:border-white/10 border-slate-200 pb-4">
                <h3 className="text-xl font-bold text-white dark:text-white text-slate-900 flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-violet-400 shadow-[0_0_8px_#8B5CF6]" />
                  <span>{catGroup.category}</span>
                </h3>
                <p className="text-xs sm:text-sm text-slate-400 dark:text-slate-400 text-slate-500">
                  {catGroup.description}
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {catGroup.skills.map((skill) => {
                  const IconComponent = iconMap[skill.icon] || Code2;
                  return (
                    <div
                      key={skill.name}
                      className="glass-card p-4 rounded-xl flex flex-col justify-between group hover:border-violet-500/50 hover:shadow-lg transition-all"
                    >
                      <div className="flex items-start justify-between gap-2 mb-3">
                        <div className="w-10 h-10 rounded-lg bg-violet-500/10 dark:bg-violet-500/10 bg-violet-50 flex items-center justify-center text-violet-400 group-hover:scale-110 group-hover:text-cyan-400 transition-all">
                          <IconComponent className="w-5 h-5" />
                        </div>
                        <span className="text-[11px] font-mono px-2 py-0.5 rounded-md bg-white/5 dark:bg-white/5 bg-slate-100 text-violet-300 dark:text-violet-300 text-violet-700 border border-white/5">
                          {skill.level}
                        </span>
                      </div>

                      <div>
                        <h4 className="text-sm font-bold text-white dark:text-white text-slate-900 group-hover:text-violet-300 transition-colors">
                          {skill.name}
                        </h4>
                        <p className="text-xs text-slate-400 dark:text-slate-400 text-slate-500 mt-1 leading-snug">
                          {skill.note}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
