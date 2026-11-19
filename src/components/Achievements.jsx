import React from 'react';
import { 
  Trophy, 
  Sparkles, 
  Code2, 
  Award, 
  CheckCircle2, 
  Layers, 
  Brain, 
  Cpu, 
  ShieldCheck,
  TrendingUp
} from 'lucide-react';

const achievementCards = [
  {
    title: "Independent Full Stack Architecture",
    category: "Full Stack Development",
    icon: Layers,
    metric: "MERN Stack",
    highlight: "JobConnect Platform",
    description: "Designed, engineered, and structured JobConnect independently from database schemas and authentication to automated PDF resume parsing and role dashboards.",
    accent: "from-violet-500 to-indigo-500"
  },
  {
    title: "96% Score in NPTEL Java Certification",
    category: "Algorithmic Excellence",
    icon: Award,
    metric: "96% Elite",
    highlight: "Top Category",
    description: "Achieved elite honor roll standing in NPTEL's intensive multi-week Programming in Java examination administered by IIT Kharagpur.",
    accent: "from-amber-400 to-amber-600"
  },
  {
    title: "Dual Oracle Cloud Certifications",
    category: "Cloud & AI Credentials",
    icon: ShieldCheck,
    metric: "2 Credentials",
    highlight: "OCI AI & Data Science",
    description: "Earned industry certifications in Oracle Cloud Infrastructure 2025 AI Foundations and OCI Data Science Professional covering generative AI and ML pipelines.",
    accent: "from-cyan-400 to-blue-500"
  },
  {
    title: "Production Frontend Engineering",
    category: "Work Experience",
    icon: Code2,
    metric: "1+ Year",
    highlight: "React.js & Next.js",
    description: "Delivered reusable UI design systems and responsive component libraries at Primexop alongside cloud infrastructure support at Smart Software Services.",
    accent: "from-emerald-400 to-teal-500"
  },
  {
    title: "Applied AI & Agritech Innovation",
    category: "Applied Machine Learning",
    icon: Brain,
    metric: "Deep Learning",
    highlight: "EfficientNet-B0",
    description: "Engineered deep learning crop leaf disease diagnosis and farm decision support models for the KrushiMitra AI advisory initiative.",
    accent: "from-purple-500 to-pink-500"
  },
  {
    title: "Consistent Academic Distinction",
    category: "Master of Computer Applications",
    icon: TrendingUp,
    metric: "8.62 CGPA",
    highlight: "SPPU Pune",
    description: "Maintaining outstanding academic performance across graduate-level software architecture, data structures, and advanced cloud systems.",
    accent: "from-blue-500 to-indigo-600"
  }
];

export default function Achievements() {
  return (
    <section className="py-24 relative overflow-hidden bg-navy-950/40 dark:bg-navy-950/40 bg-slate-50/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full border border-violet-500/20 bg-violet-500/10 text-violet-400 text-xs font-semibold uppercase tracking-wider mb-3">
            <Trophy className="w-3.5 h-3.5" />
            <span>Key Accomplishments</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white dark:text-white text-slate-900 tracking-tight">
            Achievements & Professional Highlights
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-violet-500 to-cyan-400 rounded-full mt-3 mb-4" />
          <p className="max-w-2xl text-slate-400 dark:text-slate-400 text-slate-600 text-sm sm:text-base">
            Verified milestones reflecting practical engineering execution, continuous certification, and rigorous academic commitment.
          </p>
        </div>

        {/* Highlights Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {achievementCards.map((card, idx) => {
            const Icon = card.icon;
            return (
              <div
                key={idx}
                className="glass-panel p-6 sm:p-7 rounded-3xl flex flex-col justify-between border border-white/10 dark:border-white/10 border-slate-200 hover:border-violet-500/40 hover:-translate-y-1 transition-all group"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-4">
                    <div className="w-12 h-12 rounded-2xl bg-white/5 dark:bg-white/5 bg-slate-100 flex items-center justify-center text-violet-400 group-hover:scale-110 group-hover:text-cyan-400 transition-all">
                      <Icon className="w-6 h-6" />
                    </div>
                    <div className="flex flex-col items-end">
                      <span className="text-xs font-mono font-bold text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-cyan-400">
                        {card.metric}
                      </span>
                      <span className="text-[10px] font-mono text-slate-400 uppercase">
                        {card.highlight}
                      </span>
                    </div>
                  </div>

                  <span className="text-xs font-mono font-semibold uppercase tracking-wider text-violet-400 dark:text-violet-400 text-violet-700 block mb-1">
                    {card.category}
                  </span>

                  <h3 className="text-lg font-bold text-white dark:text-white text-slate-900 group-hover:text-violet-300 transition-colors mb-2">
                    {card.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-300 dark:text-slate-300 text-slate-600 leading-relaxed">
                    {card.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-white/10 dark:border-white/10 border-slate-200 flex items-center gap-2 text-xs text-emerald-400">
                  <CheckCircle2 className="w-4 h-4 flex-shrink-0" />
                  <span className="font-medium">Verified by Portfolio Transcripts</span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
