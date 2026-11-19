import React, { useEffect } from 'react';
import { 
  X, 
  Award, 
  ExternalLink, 
  Calendar, 
  Building, 
  CheckCircle2, 
  ShieldCheck, 
  FileText,
  Download,
  Users,
  GraduationCap
} from 'lucide-react';

export default function CertificateModal({ certificate, onClose }) {
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

  if (!certificate) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto bg-black/85 backdrop-blur-md animate-in fade-in duration-200">
      
      {/* Modal Dialog Card */}
      <div 
        className="relative w-full max-w-3xl max-h-[92vh] overflow-y-auto rounded-3xl bg-navy-950 dark:bg-navy-950 bg-white border border-white/15 dark:border-white/15 border-slate-300 shadow-2xl p-6 sm:p-8 text-left"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-xl bg-white/5 dark:bg-white/5 bg-slate-100 hover:bg-white/10 dark:hover:bg-white/10 hover:bg-slate-200 text-slate-400 hover:text-white dark:hover:text-white hover:text-slate-900 border border-white/10 transition-colors z-10"
          aria-label="Close certificate modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Certificate Image Preview Banner if available */}
        {certificate.image ? (
          <div className="mb-6 rounded-2xl overflow-hidden border border-white/10 shadow-lg relative group bg-black/40">
            <img 
              src={certificate.image} 
              alt={certificate.title} 
              className="w-full h-auto max-h-[380px] object-contain rounded-xl bg-slate-950" 
            />
            <div className="absolute bottom-3 right-3 flex items-center gap-2">
              {certificate.pdfUrl && (
                <a
                  href={certificate.pdfUrl}
                  download
                  className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold text-white bg-violet-600/90 hover:bg-violet-500 backdrop-blur-md shadow-md transition-all"
                >
                  <Download className="w-3.5 h-3.5" />
                  <span>Download PDF Certificate</span>
                </a>
              )}
            </div>
          </div>
        ) : (
          <div className="w-16 h-16 rounded-2xl bg-gradient-to-tr from-violet-600 to-cyan-400 p-[2px] mb-6 shadow-lg shadow-violet-500/20">
            <div className="w-full h-full bg-navy-900 dark:bg-navy-900 bg-white rounded-[14px] flex items-center justify-center text-cyan-400">
              <Award className="w-8 h-8" />
            </div>
          </div>
        )}

        {/* Header Titles */}
        <div className="mb-6">
          <div className="flex flex-wrap items-center gap-2 mb-2">
            <span className="text-xs font-mono font-semibold px-2.5 py-0.5 rounded-full bg-violet-500/20 text-violet-300 border border-violet-500/30">
              {certificate.category}
            </span>
            <span className="text-xs font-mono px-2.5 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
              {certificate.badgeText}
            </span>
            {certificate.credits && (
              <span className="text-xs font-mono px-2.5 py-0.5 rounded-full bg-cyan-500/20 text-cyan-300 border border-cyan-500/30">
                {certificate.credits}
              </span>
            )}
          </div>

          <h3 className="text-xl sm:text-2xl font-extrabold text-white dark:text-white text-slate-900 leading-snug">
            {certificate.title}
          </h3>

          <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-xs font-mono text-slate-400 mt-2">
            <div className="flex items-center gap-1.5">
              <Building className="w-4 h-4 text-violet-400" />
              <span>{certificate.issuer}</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Calendar className="w-4 h-4 text-cyan-400" />
              <span>{certificate.date}</span>
            </div>
          </div>
        </div>

        {/* Performance Metrics Highlights */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-6 p-4 rounded-2xl bg-white/5 dark:bg-white/5 bg-slate-100 border border-white/10">
          <div>
            <span className="text-[11px] font-mono text-slate-400 block uppercase">Consolidated Score</span>
            <span className="text-base font-bold text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-cyan-400">
              {certificate.score}
            </span>
            {certificate.scoreBreakdown && (
              <span className="text-[11px] text-slate-400 block mt-0.5">{certificate.scoreBreakdown}</span>
            )}
          </div>

          {certificate.totalCandidates && (
            <div>
              <span className="text-[11px] font-mono text-slate-400 block uppercase">Registration Scale</span>
              <span className="text-xs font-semibold text-white dark:text-white text-slate-900 mt-0.5 block">
                {certificate.totalCandidates}
              </span>
            </div>
          )}

          <div>
            <span className="text-[11px] font-mono text-slate-400 block uppercase">Issuing Authority</span>
            <span className="text-xs text-slate-300 dark:text-slate-300 text-slate-700 mt-0.5 block leading-snug">
              {certificate.coordinator || certificate.issuer}
            </span>
          </div>
        </div>

        {/* Description */}
        <p className="text-sm text-slate-300 dark:text-slate-300 text-slate-600 leading-relaxed mb-6">
          {certificate.description}
        </p>

        {/* Skills Learned */}
        <div className="mb-6">
          <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-2">Key Competencies Tested</h4>
          <div className="flex flex-wrap gap-1.5">
            {certificate.skillsLearned.map((skill, idx) => (
              <span
                key={idx}
                className="px-2.5 py-1 rounded-md text-xs font-medium bg-white/5 dark:bg-white/5 bg-slate-100 text-slate-200 dark:text-slate-200 text-slate-700 border border-white/10"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>

        {/* Verification Status */}
        <div className="p-4 rounded-2xl bg-white/5 dark:bg-white/5 bg-slate-100 border border-white/10 flex items-center justify-between mb-6">
          <div>
            <span className="text-[11px] font-mono text-slate-400 block uppercase">Credential Reference</span>
            <span className="text-xs font-mono font-bold text-violet-300 dark:text-violet-300 text-violet-700">
              {certificate.credentialId}
            </span>
          </div>
          <div className="flex items-center gap-1.5 text-xs font-semibold text-emerald-400">
            <ShieldCheck className="w-4 h-4" />
            <span>Verified NPTEL Official Certificate</span>
          </div>
        </div>

        {/* Actions */}
        <div className="flex flex-wrap items-center justify-between gap-3 pt-4 border-t border-white/10">
          <div className="flex items-center gap-3">
            {certificate.pdfUrl && (
              <a
                href={certificate.pdfUrl}
                download
                className="flex items-center gap-2 px-4 py-2.5 rounded-xl font-semibold text-xs sm:text-sm text-white bg-gradient-to-r from-violet-600 to-indigo-600 hover:from-violet-500 hover:to-cyan-500 transition-all shadow-md"
              >
                <Download className="w-4 h-4" />
                <span>Download PDF Certificate</span>
              </a>
            )}

            {certificate.credentialUrl && (
              <a
                href={certificate.credentialUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-xs text-slate-300 hover:text-cyan-400 transition-colors"
              >
                <ExternalLink className="w-3.5 h-3.5" />
                <span>NPTEL Portal</span>
              </a>
            )}
          </div>

          <button
            onClick={onClose}
            className="px-4 py-2 rounded-xl text-xs sm:text-sm font-medium text-slate-400 hover:text-white dark:hover:text-white hover:text-slate-900 transition-colors"
          >
            Close
          </button>
        </div>

      </div>
    </div>
  );
}
