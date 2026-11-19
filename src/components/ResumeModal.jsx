import React, { useEffect } from 'react';
import { 
  X, 
  Printer, 
  Download, 
  Mail, 
  Phone, 
  MapPin, 
  Github, 
  Linkedin, 
  CheckCircle2, 
  FileText,
  ExternalLink
} from 'lucide-react';
import { personalInfo } from '../data/personalInfo';
import { experiences } from '../data/experience';
import { educations } from '../data/education';
import { certifications } from '../data/certifications';
import { projects } from '../data/projects';

export default function ResumeModal({ onClose }) {
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

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto bg-black/85 backdrop-blur-md animate-in fade-in duration-200">
      
      {/* Modal Container */}
      <div 
        className="relative w-full max-w-4xl max-h-[92vh] overflow-y-auto rounded-3xl bg-slate-900 border border-white/20 shadow-2xl p-4 sm:p-8 text-left text-slate-100 print:bg-white print:text-black print:max-w-none print:max-h-none print:shadow-none print:border-none print:p-0"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header Actions (hidden on print) */}
        <div className="flex items-center justify-between gap-3 mb-6 pb-4 border-b border-white/10 print:hidden">
          <div className="flex items-center gap-2">
            <FileText className="w-5 h-5 text-violet-400" />
            <span className="font-bold text-base text-white">Full Stack Developer Resume</span>
            <span className="text-xs font-mono px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-300">
              Verified Source Data
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handlePrint}
              className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl text-xs font-semibold text-white bg-gradient-to-r from-violet-600 to-indigo-600 hover:from-violet-500 hover:to-cyan-500 shadow-sm transition-all"
              title="Print or Save as PDF"
            >
              <Printer className="w-4 h-4" />
              <span>Print / Save as PDF</span>
            </button>

            <button
              onClick={onClose}
              className="p-1.5 rounded-xl bg-white/5 hover:bg-white/10 text-slate-400 hover:text-white border border-white/10 transition-colors"
              aria-label="Close resume viewer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Printable Resume Document Sheet */}
        <div className="bg-slate-950 p-6 sm:p-10 rounded-2xl border border-white/10 font-sans print:bg-white print:text-black print:border-none print:p-0">
          
          {/* Header */}
          <div className="border-b border-slate-700 print:border-slate-300 pb-5 mb-5 text-center sm:text-left">
            <h1 className="text-2xl sm:text-3xl font-extrabold text-white print:text-black tracking-tight">
              {personalInfo.fullName}
            </h1>
            <p className="text-sm sm:text-base font-semibold text-violet-400 print:text-violet-700 mt-0.5">
              {personalInfo.title}
            </p>
            <div className="flex flex-wrap items-center justify-center sm:justify-start gap-y-1 gap-x-4 text-xs font-mono text-slate-300 print:text-slate-700 mt-2">
              <span className="flex items-center gap-1">
                <MapPin className="w-3.5 h-3.5 text-cyan-400 print:text-slate-600" />
                {personalInfo.location}
              </span>
              <a href={`mailto:${personalInfo.email}`} className="flex items-center gap-1 hover:underline text-cyan-300 print:text-slate-800">
                <Mail className="w-3.5 h-3.5" />
                {personalInfo.email}
              </a>
              <a href={personalInfo.linkedin} target="_blank" rel="noreferrer" className="flex items-center gap-1 hover:underline text-cyan-300 print:text-slate-800">
                <Linkedin className="w-3.5 h-3.5" />
                LinkedIn Profile
              </a>
              <a href={personalInfo.github} target="_blank" rel="noreferrer" className="flex items-center gap-1 hover:underline text-cyan-300 print:text-slate-800">
                <Github className="w-3.5 h-3.5" />
                GitHub Repositories
              </a>
            </div>
          </div>

          {/* Professional Summary */}
          <div className="mb-5">
            <h2 className="text-xs font-mono font-bold uppercase tracking-wider text-cyan-400 print:text-indigo-800 border-b border-slate-800 print:border-slate-300 pb-1 mb-2">
              Professional Summary
            </h2>
            <p className="text-xs sm:text-sm text-slate-300 print:text-slate-800 leading-relaxed">
              {personalInfo.aboutIntro} {personalInfo.aboutInterests} {personalInfo.aboutPhilosophy}
            </p>
          </div>

          {/* Technical Skills */}
          <div className="mb-5">
            <h2 className="text-xs font-mono font-bold uppercase tracking-wider text-cyan-400 print:text-indigo-800 border-b border-slate-800 print:border-slate-300 pb-1 mb-2">
              Technical Proficiencies
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-300 print:text-slate-800">
              <div><strong className="text-white print:text-black">Languages:</strong> Python, Java, JavaScript (ES6+), TypeScript</div>
              <div><strong className="text-white print:text-black">AI & Machine Learning:</strong> Scikit-learn, Random Forest, Deep Learning (EfficientNet-B0), LLMs & GenAI, FastAPI</div>
              <div><strong className="text-white print:text-black">Data Science & Analytics:</strong> Pandas, NumPy, Matplotlib, Seaborn, Power BI (Dashboards & KPI reporting)</div>
              <div><strong className="text-white print:text-black">Frontend:</strong> React.js, Next.js, Tailwind CSS, HTML5, CSS3</div>
              <div><strong className="text-white print:text-black">Backend:</strong> Node.js, Express.js, REST APIs, JWT Authentication</div>
              <div><strong className="text-white print:text-black">Databases:</strong> MongoDB, MySQL</div>
              <div><strong className="text-white print:text-black">Cloud & Infrastructure:</strong> AWS (EC2, S3, Load Balancers), Linux Administration</div>
              <div><strong className="text-white print:text-black">Developer Tools:</strong> Power BI, Git, GitHub, Postman, VS Code</div>
            </div>
          </div>

          {/* Work Experience */}
          <div className="mb-5">
            <h2 className="text-xs font-mono font-bold uppercase tracking-wider text-cyan-400 print:text-indigo-800 border-b border-slate-800 print:border-slate-300 pb-1 mb-2">
              Work Experience
            </h2>
            <div className="space-y-4">
              {experiences.map((exp) => (
                <div key={exp.id}>
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between text-xs">
                    <div>
                      <span className="font-bold text-white print:text-black text-sm">{exp.position}</span>
                      <span className="text-violet-400 print:text-violet-800 font-semibold"> – {exp.company}</span>
                    </div>
                    <span className="font-mono text-slate-400 print:text-slate-600 text-[11px]">{exp.duration} | {exp.location}</span>
                  </div>
                  <ul className="list-disc list-inside space-y-1 mt-1 text-xs text-slate-300 print:text-slate-700">
                    {exp.responsibilities.map((r, i) => (
                      <li key={i} className="leading-snug">{r}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Featured Projects */}
          <div className="mb-5">
            <h2 className="text-xs font-mono font-bold uppercase tracking-wider text-cyan-400 print:text-indigo-800 border-b border-slate-800 print:border-slate-300 pb-1 mb-2">
              Featured Projects
            </h2>
            <div className="space-y-3">
              {projects.map((proj) => (
                <div key={proj.id} className="text-xs">
                  <div className="flex items-center justify-between">
                    <div>
                      <span className="font-bold text-white print:text-black">{proj.name}</span>
                      <span className="text-[11px] font-mono text-cyan-300 print:text-indigo-700"> [{proj.category}]</span>
                      <span className="text-[11px] text-slate-400 ml-1">({proj.badge})</span>
                    </div>
                  </div>
                  <p className="text-slate-300 print:text-slate-700 mt-0.5 leading-snug">{proj.description}</p>
                  <p className="text-slate-400 print:text-slate-600 text-[11px] mt-0.5">
                    <strong>Tech:</strong> {proj.techStack.join(', ')}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Education */}
          <div className="mb-5">
            <h2 className="text-xs font-mono font-bold uppercase tracking-wider text-cyan-400 print:text-indigo-800 border-b border-slate-800 print:border-slate-300 pb-1 mb-2">
              Education
            </h2>
            <div className="space-y-2">
              {educations.map((edu) => (
                <div key={edu.id} className="flex flex-col sm:flex-row sm:items-baseline justify-between text-xs">
                  <div>
                    <span className="font-bold text-white print:text-black">{edu.degree}</span>
                    <div className="text-slate-300 print:text-slate-700 text-[11px]">{edu.institution} ({edu.university})</div>
                  </div>
                  <div className="font-mono text-right text-[11px] text-slate-400 print:text-slate-600">
                    <span>{edu.duration}</span> | <strong className="text-emerald-400 print:text-emerald-700">{edu.cgpa}</strong>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Certifications */}
          <div>
            <h2 className="text-xs font-mono font-bold uppercase tracking-wider text-cyan-400 print:text-indigo-800 border-b border-slate-800 print:border-slate-300 pb-1 mb-2">
              Verified Certifications
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-300 print:text-slate-700">
              {certifications.map((c) => (
                <div key={c.id}>
                  <strong className="text-white print:text-black">{c.title}</strong>
                  <div className="text-[11px] text-slate-400 print:text-slate-600">{c.issuer} ({c.score})</div>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* Footer info */}
        <div className="mt-4 pt-4 border-t border-white/10 flex items-center justify-between text-xs text-slate-400 print:hidden">
          <span>Dipali Vitthal Parkhede • Verified Portfolio Resume</span>
          <button
            onClick={onClose}
            className="hover:text-white transition-colors"
          >
            Close Viewer
          </button>
        </div>

      </div>
    </div>
  );
}
