import React, { useState } from 'react';
import { Award, Sparkles, CheckCircle2, ExternalLink, Calendar, Building, Eye, PlusCircle } from 'lucide-react';
import { certifications } from '../data/certifications';
import CertificateModal from './CertificateModal';

export default function Certifications() {
  const [selectedCert, setSelectedCert] = useState(null);
  const [activeFilter, setActiveFilter] = useState('All');

  const categories = ['All', ...new Set(certifications.map(c => c.category))];

  const filteredCerts = activeFilter === 'All'
    ? certifications
    : certifications.filter(c => c.category === activeFilter);

  return (
    <section id="certifications" className="py-24 relative overflow-hidden bg-grid-pattern">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full border border-violet-500/20 bg-violet-500/10 text-violet-400 text-xs font-semibold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Credentials & Validations</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white dark:text-white text-slate-900 tracking-tight">
            Technical Certifications
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-violet-500 to-cyan-400 rounded-full mt-3 mb-4" />
          <p className="max-w-2xl text-slate-400 dark:text-slate-400 text-slate-600 text-sm sm:text-base">
            Verified technical certifications validating Java software engineering, cloud infrastructure (AWS & Oracle), and machine learning pipelines.
          </p>
        </div>

        {/* Filter Pills */}
        <div className="flex items-center justify-center flex-wrap gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveFilter(cat)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 ${
                activeFilter === cat
                  ? 'bg-gradient-to-r from-violet-600 to-cyan-500 text-white shadow-lg shadow-violet-600/25 scale-105'
                  : 'glass-panel text-slate-300 dark:text-slate-300 text-slate-600 hover:text-white hover:border-violet-500/40'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Certificate Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {filteredCerts.map((cert) => (
            <div
              key={cert.id}
              className="glass-card p-6 rounded-3xl flex flex-col justify-between group hover:border-violet-500/50 hover:shadow-xl transition-all"
            >
              <div>
                {/* Header Badge */}
                <div className="flex items-center justify-between gap-2 mb-4">
                  <span className="text-xs font-mono font-bold px-2.5 py-1 rounded-md bg-violet-500/15 text-violet-300 dark:text-violet-300 text-violet-700 border border-violet-500/20">
                    {cert.badgeText}
                  </span>
                  <div className="flex items-center gap-1 text-[11px] font-mono text-slate-400">
                    <Calendar className="w-3.5 h-3.5 text-cyan-400" />
                    <span>{cert.date}</span>
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-base sm:text-lg font-bold text-white dark:text-white text-slate-900 group-hover:text-violet-300 transition-colors mb-2 leading-snug">
                  {cert.title}
                </h3>

                {/* Issuer */}
                <div className="flex items-start gap-2 text-xs font-semibold text-slate-400 dark:text-slate-400 text-slate-600 mb-4">
                  <Building className="w-4 h-4 text-violet-400 flex-shrink-0 mt-0.5" />
                  <span>{cert.issuer}</span>
                </div>

                {/* Score / Performance Note */}
                <div className="text-xs text-slate-300 dark:text-slate-300 text-slate-600 mb-6 line-clamp-2">
                  {cert.description}
                </div>
              </div>

              {/* Action Button */}
              <div className="pt-4 border-t border-white/10 dark:border-white/10 border-slate-200 flex items-center justify-between">
                <button
                  onClick={() => setSelectedCert(cert)}
                  className="flex items-center gap-1.5 text-xs font-semibold text-cyan-400 dark:text-cyan-400 text-violet-700 hover:text-violet-300 group-hover:translate-x-1 transition-all"
                >
                  <Eye className="w-3.5 h-3.5" />
                  <span>View Details</span>
                </button>

                {cert.credentialUrl && (
                  <a
                    href={cert.credentialUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-1.5 rounded-lg text-slate-400 hover:text-white dark:hover:text-white hover:text-slate-900 hover:bg-white/5 transition-colors"
                    title="External Verification"
                    aria-label="External Verification"
                  >
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Dynamic Extensibility Note for Dipali */}
        <div className="p-4 sm:p-5 rounded-2xl glass-panel border border-violet-500/20 max-w-2xl mx-auto flex items-start gap-3 text-xs sm:text-sm text-slate-300 dark:text-slate-300 text-slate-600">
          <Award className="w-5 h-5 text-violet-400 flex-shrink-0 mt-0.5" />
          <div>
            <span className="font-semibold text-white dark:text-white text-slate-900">
              Easily Extensible Architecture:
            </span>{' '}
            Additional NPTEL, Oracle, or hackathon certifications can be added instantly by appending to{' '}
            <code className="text-violet-400 font-mono text-xs">src/data/certifications.js</code>.
          </div>
        </div>

      </div>

      {/* Certificate Modal */}
      {selectedCert && (
        <CertificateModal
          certificate={selectedCert}
          onClose={() => setSelectedCert(null)}
        />
      )}
    </section>
  );
}
