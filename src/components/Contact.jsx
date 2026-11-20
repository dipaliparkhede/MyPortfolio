import React, { useState } from 'react';
import { 
  Mail, 
  Send, 
  Linkedin, 
  Github, 
  MapPin, 
  Copy, 
  Check, 
  Sparkles, 
  AlertCircle, 
  CheckCircle2,
  ExternalLink
} from 'lucide-react';
import { personalInfo } from '../data/personalInfo';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isCopied, setIsCopied] = useState(false);
  const [statusMessage, setStatusMessage] = useState(null);

  const validate = () => {
    const errs = {};
    if (!formData.name.trim()) errs.name = 'Please enter your full name';
    if (!formData.email.trim()) {
      errs.email = 'Please enter your email';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errs.email = 'Please enter a valid email address';
    }
    if (!formData.subject.trim()) errs.subject = 'Please provide a subject';
    if (!formData.message.trim() || formData.message.trim().length < 10) {
      errs.message = 'Please provide a message of at least 10 characters';
    }
    return errs;
  };

  const handleChange = (e) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
    if (errors[e.target.name]) {
      setErrors(prev => ({ ...prev, [e.target.name]: null }));
    }
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personalInfo.email);
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 2500);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setIsSubmitting(true);
    
    // Construct real mailto URL
    const mailtoUrl = `mailto:${personalInfo.email}?subject=${encodeURIComponent(
      `[Portfolio Inquiry] ${formData.subject} - from ${formData.name}`
    )}&body=${encodeURIComponent(
      `Hello Dipali,\n\nMy Name: ${formData.name}\nMy Email: ${formData.email}\n\nMessage:\n${formData.message}\n\nSent via Portfolio Contact Form`
    )}`;

    setTimeout(() => {
      setIsSubmitting(false);
      setStatusMessage({
        type: 'success',
        text: 'Opening your mail client to send your message directly to Dipali. You can also copy her email address above!'
      });
      // Trigger user's mail client
      window.location.href = mailtoUrl;
    }, 600);
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden bg-grid-pattern">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full border border-violet-500/20 bg-violet-500/10 text-violet-400 text-xs font-semibold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Direct Communication</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white dark:text-white text-slate-900 tracking-tight">
            Let's Build Something Amazing Together
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-violet-500 to-cyan-400 rounded-full mt-3 mb-4" />
          <p className="max-w-2xl text-slate-400 dark:text-slate-400 text-slate-600 text-sm sm:text-base leading-relaxed">
            I'm always interested in connecting with developers, recruiters, and organizations working on exciting technology projects. Feel free to contact me for job opportunities, collaborations, or professional discussions.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Direct Info & Social Channels */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            
            {/* Contact Card */}
            <div className="glass-panel p-6 sm:p-8 rounded-3xl border border-white/10 hover-card-3d">
              <h3 className="text-xl font-bold text-white dark:text-white text-slate-900 mb-6 flex items-center gap-2">
                <span>Contact Channels</span>
              </h3>

              <div className="space-y-6">
                
                {/* Email Item */}
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-violet-500/10 flex items-center justify-center text-violet-400 flex-shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <span className="text-xs font-mono uppercase text-slate-400 block mb-0.5">Direct Email</span>
                    <a
                      href={`mailto:${personalInfo.email}`}
                      className="text-sm sm:text-base font-bold text-white dark:text-white text-slate-900 hover:text-cyan-400 transition-colors break-all"
                    >
                      {personalInfo.email}
                    </a>
                    <div className="mt-1.5">
                      <button
                        onClick={handleCopyEmail}
                        className="inline-flex items-center gap-1.5 text-xs font-mono text-cyan-400 hover:text-violet-300 transition-colors"
                      >
                        {isCopied ? (
                          <>
                            <Check className="w-3.5 h-3.5 text-emerald-400" />
                            <span className="text-emerald-400">Copied to Clipboard!</span>
                          </>
                        ) : (
                          <>
                            <Copy className="w-3.5 h-3.5" />
                            <span>Copy Email Address</span>
                          </>
                        )}
                      </button>
                    </div>
                  </div>
                </div>

                {/* Location Item */}
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-cyan-500/10 flex items-center justify-center text-cyan-400 flex-shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs font-mono uppercase text-slate-400 block mb-0.5">Location</span>
                    <span className="text-sm sm:text-base font-bold text-white dark:text-white text-slate-900">
                      {personalInfo.location}
                    </span>
                    <p className="text-xs text-slate-400 mt-0.5">
                      Open to on-site, hybrid, or remote positions
                    </p>
                  </div>
                </div>

                {/* LinkedIn Item */}
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-indigo-500/10 flex items-center justify-center text-indigo-400 flex-shrink-0">
                    <Linkedin className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs font-mono uppercase text-slate-400 block mb-0.5">LinkedIn Profile</span>
                    <a
                      href={personalInfo.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm sm:text-base font-bold text-cyan-400 hover:underline flex items-center gap-1"
                    >
                      <span>linkedin.com/in/dipali-parkhede</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>

                {/* GitHub Item */}
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-slate-800 flex items-center justify-center text-slate-200 flex-shrink-0">
                    <Github className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs font-mono uppercase text-slate-400 block mb-0.5">GitHub Repositories</span>
                    <a
                      href={personalInfo.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm sm:text-base font-bold text-cyan-400 hover:underline flex items-center gap-1"
                    >
                      <span>github.com/dipaliparkhede</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>

              </div>
            </div>

            {/* Availability Box */}
            <div className="p-5 rounded-2xl bg-gradient-to-r from-violet-600/20 to-cyan-500/15 border border-violet-500/30 flex items-center gap-4">
              <span className="relative flex h-3.5 w-3.5 flex-shrink-0">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-emerald-500"></span>
              </span>
              <div className="text-xs sm:text-sm text-slate-300 dark:text-slate-300 text-slate-700">
                <strong className="text-white dark:text-white text-slate-900 block font-semibold">Immediate Availability</strong>
                Actively interviewing for Full Stack, Frontend, and Software Engineering positions.
              </div>
            </div>

          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7">
            <div className="glass-panel p-6 sm:p-8 rounded-3xl border border-white/10 hover-card-3d">
              <h3 className="text-xl font-bold text-white dark:text-white text-slate-900 mb-2">
                Send a Message
              </h3>
              <p className="text-xs sm:text-sm text-slate-400 mb-6">
                Fill in the details below to start a conversation. Submitting opens a draft in your email client.
              </p>

              {statusMessage && (
                <div className="mb-6 p-4 rounded-xl bg-emerald-500/15 border border-emerald-500/30 text-emerald-300 text-xs sm:text-sm flex items-start gap-2.5">
                  <CheckCircle2 className="w-5 h-5 flex-shrink-0 text-emerald-400 mt-0.5" />
                  <span>{statusMessage.text}</span>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-4">
                
                {/* Name & Email Row */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs font-mono uppercase tracking-wider text-slate-300 dark:text-slate-300 text-slate-700 block mb-1.5">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="e.g. Dipali Parkhede"
                      className={`w-full px-4 py-3 rounded-xl bg-black/25 dark:bg-black/25 bg-white border ${
                        errors.name ? 'border-rose-500' : 'border-white/10 dark:border-white/10 border-slate-300'
                      } text-white dark:text-white text-slate-900 text-sm focus:outline-none focus:border-violet-500 transition-colors`}
                    />
                    {errors.name && (
                      <span className="text-rose-400 text-xs mt-1 block flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" /> {errors.name}
                      </span>
                    )}
                  </div>

                  <div>
                    <label className="text-xs font-mono uppercase tracking-wider text-slate-300 dark:text-slate-300 text-slate-700 block mb-1.5">
                      Your Email *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="e.g. name@company.com"
                      className={`w-full px-4 py-3 rounded-xl bg-black/25 dark:bg-black/25 bg-white border ${
                        errors.email ? 'border-rose-500' : 'border-white/10 dark:border-white/10 border-slate-300'
                      } text-white dark:text-white text-slate-900 text-sm focus:outline-none focus:border-violet-500 transition-colors`}
                    />
                    {errors.email && (
                      <span className="text-rose-400 text-xs mt-1 block flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" /> {errors.email}
                      </span>
                    )}
                  </div>
                </div>

                {/* Subject */}
                <div>
                  <label className="text-xs font-mono uppercase tracking-wider text-slate-300 dark:text-slate-300 text-slate-700 block mb-1.5">
                    Subject *
                  </label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="e.g. Full Stack Developer Opportunity at..."
                    className={`w-full px-4 py-3 rounded-xl bg-black/25 dark:bg-black/25 bg-white border ${
                      errors.subject ? 'border-rose-500' : 'border-white/10 dark:border-white/10 border-slate-300'
                    } text-white dark:text-white text-slate-900 text-sm focus:outline-none focus:border-violet-500 transition-colors`}
                  />
                  {errors.subject && (
                    <span className="text-rose-400 text-xs mt-1 block flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" /> {errors.subject}
                    </span>
                  )}
                </div>

                {/* Message */}
                <div>
                  <label className="text-xs font-mono uppercase tracking-wider text-slate-300 dark:text-slate-300 text-slate-700 block mb-1.5">
                    Message *
                  </label>
                  <textarea
                    rows={5}
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Describe your role requirements, team details, or collaboration ideas..."
                    className={`w-full px-4 py-3 rounded-xl bg-black/25 dark:bg-black/25 bg-white border ${
                      errors.message ? 'border-rose-500' : 'border-white/10 dark:border-white/10 border-slate-300'
                    } text-white dark:text-white text-slate-900 text-sm focus:outline-none focus:border-violet-500 transition-colors resize-none`}
                  />
                  {errors.message && (
                    <span className="text-rose-400 text-xs mt-1 block flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" /> {errors.message}
                    </span>
                  )}
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="btn-3d w-full flex items-center justify-center gap-2 px-6 py-4 rounded-xl font-semibold text-white bg-gradient-to-r from-violet-600 via-indigo-600 to-cyan-500 shadow-lg shadow-violet-600/30 disabled:opacity-70"
                >
                  {isSubmitting ? (
                    <div className="flex items-center gap-2">
                      <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                      <span>Preparing email draft...</span>
                    </div>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      <span>Send Direct Message</span>
                    </>
                  )}
                </button>

              </form>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
