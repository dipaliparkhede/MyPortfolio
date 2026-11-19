import React, { useEffect, useState } from 'react';
import {
  X,
  Award,
  ExternalLink,
  Calendar,
  Building,
  ShieldCheck,
  Download,
  ZoomIn,
  ZoomOut,
  Maximize2,
  Users,
  CheckCircle2
} from 'lucide-react';

export default function CertificateModal({ certificate, onClose }) {
  const [imageZoomed, setImageZoomed] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        if (imageZoomed) setImageZoomed(false);
        else onClose();
      }
    };
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [onClose, imageZoomed]);

  if (!certificate) return null;

  // ── Full-screen image lightbox ──────────────────────────────────────────
  if (imageZoomed && certificate.image) {
    return (
      <div
        className="fixed inset-0 z-[60] flex items-center justify-center bg-black/95 backdrop-blur-sm"
        onClick={() => setImageZoomed(false)}
      >
        <button
          onClick={() => setImageZoomed(false)}
          className="absolute top-5 right-5 p-2.5 rounded-xl bg-white/10 hover:bg-white/20 text-white border border-white/20 transition-colors z-10"
          aria-label="Close full-screen view"
        >
          <X className="w-5 h-5" />
        </button>

        <span className="absolute top-5 left-5 text-xs font-mono text-white/50">
          Press ESC or click anywhere to close
        </span>

        <img
          src={certificate.image}
          alt={certificate.title}
          className="max-w-[95vw] max-h-[90vh] object-contain rounded-xl shadow-2xl select-none"
          onClick={(e) => e.stopPropagation()}
        />

        {/* Download button in lightbox */}
        <a
          href={certificate.pdfUrl || certificate.image}
          download
          onClick={(e) => e.stopPropagation()}
          className="absolute bottom-6 left-1/2 -translate-x-1/2 flex items-center gap-2 px-5 py-2.5 rounded-xl font-semibold text-sm text-white bg-gradient-to-r from-violet-600 to-cyan-500 shadow-lg shadow-violet-600/30 hover:from-violet-500 hover:to-cyan-400 transition-all"
        >
          <Download className="w-4 h-4" />
          <span>Download {certificate.pdfUrl ? 'PDF' : 'Certificate Image'}</span>
        </a>
      </div>
    );
  }

  // ── Normal Modal ────────────────────────────────────────────────────────
  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto bg-black/85 backdrop-blur-md animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-3xl max-h-[92vh] overflow-y-auto rounded-3xl bg-navy-950 dark:bg-navy-950 bg-white border border-white/15 dark:border-white/15 border-slate-300 shadow-2xl p-6 sm:p-8 text-left"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-xl bg-white/5 dark:bg-white/5 bg-slate-100 hover:bg-white/10 text-slate-400 hover:text-white dark:hover:text-white hover:text-slate-900 border border-white/10 transition-colors z-10"
          aria-label="Close certificate modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* ── Certificate Image Preview ───────────────────────── */}
        {certificate.image ? (
          <div className="mb-6 rounded-2xl overflow-hidden border border-white/10 dark:border-white/10 border-slate-200 shadow-lg bg-slate-950 dark:bg-slate-950 bg-slate-100 relative group">
            <img
              src={certificate.image}
              alt={certificate.title}
              className="w-full h-auto max-h-72 object-contain cursor-zoom-in"
              onClick={() => setImageZoomed(true)}
            />

            {/* Hover overlay actions */}
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all duration-200 flex items-center justify-center gap-3 opacity-0 group-hover:opacity-100">
              <button
                onClick={() => setImageZoomed(true)}
                className="flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs font-semibold text-white bg-black/60 backdrop-blur-md border border-white/20 hover:bg-violet-600/80 transition-all"
              >
                <Maximize2 className="w-4 h-4" />
                <span>View Full Size</span>
              </button>

              <a
                href={certificate.pdfUrl || certificate.image}
                download
                className="flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs font-semibold text-white bg-black/60 backdrop-blur-md border border-white/20 hover:bg-cyan-600/80 transition-all"
                onClick={(e) => e.stopPropagation()}
              >
                <Download className="w-4 h-4" />
                <span>Download</span>
              </a>
            </div>

            {/* Click-to-zoom hint */}
            <div className="absolute bottom-2 right-3 text-[11px] font-mono text-white/50 bg-black/50 px-2 py-0.5 rounded-md group-hover:opacity-0 transition-opacity">
              Click to view full size
            </div>
          </div>
        ) : (
          /* Fallback badge icon if no image */
          <div className="w-16 h-16 rounded-2xl bg-gradient-to-tr from-violet-600 to-cyan-400 p-[2px] mb-6 shadow-lg shadow-violet-500/20">
            <div className="w-full h-full bg-navy-900 dark:bg-navy-900 bg-white rounded-[14px] flex items-center justify-center text-cyan-400">
              <Award className="w-8 h-8" />
            </div>
          </div>
        )}

        {/* ── Category & Badge Chips ──────────────────────────── */}
        <div className="flex flex-wrap items-center gap-2 mb-3">
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

        {/* ── Certificate Title ───────────────────────────────── */}
        <h3 className="text-xl sm:text-2xl font-extrabold text-white dark:text-white text-slate-900 leading-snug mb-2">
          {certificate.title}
        </h3>

        {/* Issuer & Date */}
        <div className="flex flex-wrap items-center gap-x-5 gap-y-1 text-xs font-mono text-slate-400 mb-5">
          <div className="flex items-center gap-1.5">
            <Building className="w-4 h-4 text-violet-400 flex-shrink-0" />
            <span>{certificate.issuer}</span>
          </div>
          <div className="flex items-center gap-1.5">
            <Calendar className="w-4 h-4 text-cyan-400 flex-shrink-0" />
            <span>{certificate.date}</span>
          </div>
        </div>

        {/* ── Score & Metrics Panel ───────────────────────────── */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-5 p-4 rounded-2xl bg-white/5 dark:bg-white/5 bg-slate-100 border border-white/10">
          <div>
            <span className="text-[11px] font-mono text-slate-400 uppercase block">Score / Result</span>
            <span className="text-base font-bold text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-cyan-400 block mt-0.5">
              {certificate.score}
            </span>
            {certificate.scoreBreakdown && (
              <span className="text-[11px] text-slate-400 block mt-0.5">{certificate.scoreBreakdown}</span>
            )}
          </div>

          {certificate.totalCandidates && (
            <div className="flex flex-col">
              <span className="text-[11px] font-mono text-slate-400 uppercase block">Scale</span>
              <div className="flex items-center gap-1 mt-0.5">
                <Users className="w-3.5 h-3.5 text-violet-400 flex-shrink-0" />
                <span className="text-xs font-semibold text-white dark:text-white text-slate-900">{certificate.totalCandidates}</span>
              </div>
            </div>
          )}

          <div>
            <span className="text-[11px] font-mono text-slate-400 uppercase block">Credential ID</span>
            <span className="text-xs font-mono font-bold text-violet-300 dark:text-violet-300 text-violet-700 break-all mt-0.5 block">
              {certificate.credentialId}
            </span>
          </div>
        </div>

        {/* ── Description ─────────────────────────────────────── */}
        <p className="text-sm text-slate-300 dark:text-slate-300 text-slate-600 leading-relaxed mb-5">
          {certificate.description}
        </p>

        {/* ── Skills Learned ───────────────────────────────────── */}
        <div className="mb-5">
          <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-2">Key Competencies Covered</h4>
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

        {/* ── Verification Row ─────────────────────────────────── */}
        <div className="flex items-center gap-2 text-xs text-emerald-400 mb-6 p-3 rounded-xl bg-emerald-500/10 border border-emerald-500/20">
          <ShieldCheck className="w-4 h-4 flex-shrink-0" />
          <span>Official certificate from {certificate.issuer}. Verified by personal credential records.</span>
        </div>

        {/* ── Action Buttons Footer ────────────────────────────── */}
        <div className="flex flex-wrap items-center gap-3 pt-4 border-t border-white/10 dark:border-white/10 border-slate-200">

          {/* View Full Size */}
          {certificate.image && (
            <button
              onClick={() => setImageZoomed(true)}
              className="flex items-center gap-2 px-4 py-2.5 rounded-xl font-semibold text-xs sm:text-sm text-white bg-gradient-to-r from-violet-600 to-indigo-600 hover:from-violet-500 hover:to-cyan-500 shadow-md shadow-violet-600/20 transition-all"
            >
              <Maximize2 className="w-4 h-4" />
              <span>View Certificate Full Size</span>
            </button>
          )}

          {/* Download PDF or Image */}
          <a
            href={certificate.pdfUrl || certificate.image}
            download
            className="flex items-center gap-2 px-4 py-2.5 rounded-xl font-semibold text-xs sm:text-sm text-slate-200 dark:text-slate-200 text-slate-800 bg-white/5 dark:bg-white/5 bg-slate-100 hover:bg-white/10 dark:hover:bg-white/10 hover:bg-slate-200 border border-white/10 dark:border-white/10 border-slate-300 transition-all"
          >
            <Download className="w-4 h-4 text-cyan-400" />
            <span>Download {certificate.pdfUrl ? 'PDF' : 'Image'}</span>
          </a>

          {/* External Verify Link */}
          {certificate.credentialUrl && (
            <a
              href={certificate.credentialUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-xs font-medium text-slate-400 hover:text-cyan-400 transition-colors ml-auto"
            >
              <ExternalLink className="w-3.5 h-3.5" />
              <span>Verify Online</span>
            </a>
          )}
        </div>

      </div>
    </div>
  );
}
