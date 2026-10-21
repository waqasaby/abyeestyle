import React, { useState, useEffect } from 'react';
import { Mail, Send, Check, Copy, ArrowUpRight, UploadCloud, MessageSquare, Clock, ShieldCheck, AlertCircle, Phone, PhoneCall } from 'lucide-react';
import { DESIGNER_INFO } from '../data/portfolioData';

interface ContactSectionProps {
  prefilledSubject?: string;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ prefilledSubject }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [projectType, setProjectType] = useState('Brand Identity');
  const [budget, setBudget] = useState('$1,500 – $3,000');
  const [timeline, setTimeline] = useState('Standard (3–4 weeks)');
  const [details, setDetails] = useState('');
  const [attachedFiles, setAttachedFiles] = useState<string[]>([]);
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);

  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    if (prefilledSubject) {
      setProjectType('Brand Identity');
      setDetails((prev) =>
        prev
          ? `${prev}\n\n[Inquiring regarding: ${prefilledSubject}]`
          : `Hello ABYEE STYLE, I would like to inquire about a project similar to "${prefilledSubject}".`
      );
    }
  }, [prefilledSubject]);

  const projectTypes = [
    'Brand Identity',
    'Editorial & Lookbook',
    'Poster & Campaign Art',
    'Creative Direction',
    'Full Brand Package',
  ];

  const budgets = [
    '$500 – $1,500',
    '$1,500 – $3,000',
    '$3,000 – $5,000',
    '$5,000+',
  ];

  const timelines = [
    'Urgent (1–2 weeks)',
    'Standard (3–4 weeks)',
    'Flexible timeline',
  ];

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(DESIGNER_INFO.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const handleCopyPhone = () => {
    navigator.clipboard.writeText(DESIGNER_INFO.phone);
    setCopiedPhone(true);
    setTimeout(() => setCopiedPhone(false), 2500);
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      const names = Array.from(e.target.files).map((f) => f.name);
      setAttachedFiles((prev) => [...prev, ...names]);
    }
  };

  const handleRemoveFile = (index: number) => {
    setAttachedFiles((prev) => prev.filter((_, i) => i !== index));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage('');

    // Form Validation
    if (!name.trim()) {
      setErrorMessage('Please enter your name.');
      return;
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email.trim())) {
      setErrorMessage('Please enter a valid email address.');
      return;
    }
    if (!details.trim()) {
      setErrorMessage('Please provide a brief outline of your design requirements.');
      return;
    }

    setStatus('submitting');

    // Simulate submission delay
    setTimeout(() => {
      setStatus('success');
    }, 900);
  };

  const resetForm = () => {
    setName('');
    setEmail('');
    setDetails('');
    setAttachedFiles([]);
    setStatus('idle');
  };

  return (
    <section id="contact" className="py-20 lg:py-28 bg-[#09090c] relative">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-amber-400 font-semibold mb-2">
              <span>Contact & Commission</span>
              <span aria-hidden="true" className="text-neutral-700">·</span>
              <span className="text-neutral-400">Direct Inquiries</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white font-display tracking-tight">
              Let's Bring Your Brand Vision to Life
            </h2>
          </div>

          <p className="text-sm text-neutral-400 max-w-md">
            Fill out the project scope form below or reach out directly at{' '}
            <button
              onClick={handleCopyEmail}
              className="text-amber-400 hover:underline font-mono inline cursor-pointer"
            >
              {DESIGNER_INFO.email}
            </button>
            .
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-start">
          {/* Left Column: Direct Info Card & Availability */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            <div className="p-8 rounded-2xl bg-neutral-950 border border-neutral-800 flex flex-col gap-6">
              <div>
                <h3 className="text-xl font-bold text-white font-display mb-2">
                  Direct Communication
                </h3>
                <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed">
                  Connect directly with <span className="text-white font-medium">{DESIGNER_INFO.brandName}</span> via phone, WhatsApp, or email. Available for brand identities, editorial layouts, and urgent creative commissions.
                </p>
              </div>

              {/* Direct Phone / Call display with copy */}
              <div className="p-4 rounded-xl bg-neutral-900/80 border border-neutral-800 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <Phone className="w-4 h-4 text-amber-400 shrink-0" />
                  <div className="flex flex-col">
                    <span className="text-[11px] uppercase tracking-wider text-neutral-500">
                      Direct Phone & WhatsApp
                    </span>
                    <a
                      href={`tel:${DESIGNER_INFO.phone}`}
                      className="text-xs sm:text-sm font-semibold text-white hover:text-amber-400 transition-colors font-mono"
                    >
                      {DESIGNER_INFO.phone} <span className="text-neutral-400 font-normal">({DESIGNER_INFO.phoneFormatted})</span>
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-1.5">
                  <a
                    href={`tel:${DESIGNER_INFO.phone}`}
                    className="p-2 rounded-lg bg-neutral-800 text-neutral-300 hover:text-white hover:bg-neutral-700 transition-colors"
                    title="Call Now"
                  >
                    <PhoneCall className="w-3.5 h-3.5 text-amber-400" />
                  </a>
                  <button
                    type="button"
                    onClick={handleCopyPhone}
                    className="p-2 rounded-lg bg-neutral-800 text-neutral-300 hover:text-white hover:bg-neutral-700 transition-colors cursor-pointer"
                    title="Copy phone number"
                    aria-label="Copy phone"
                  >
                    {copiedPhone ? (
                      <Check className="w-3.5 h-3.5 text-emerald-400" />
                    ) : (
                      <Copy className="w-3.5 h-3.5" />
                    )}
                  </button>
                </div>
              </div>

              {copiedPhone && (
                <div className="text-xs text-emerald-400 flex items-center gap-1.5 -mt-2">
                  <Check className="w-3.5 h-3.5" />
                  <span>Phone number {DESIGNER_INFO.phone} copied to clipboard!</span>
                </div>
              )}

              {/* WhatsApp Quick Action Button */}
              <a
                href={DESIGNER_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3 px-4 rounded-xl bg-emerald-600/20 hover:bg-emerald-600/30 border border-emerald-500/40 text-emerald-300 hover:text-emerald-200 text-xs font-semibold tracking-wider uppercase text-center transition-all flex items-center justify-center gap-2"
              >
                <MessageSquare className="w-4 h-4 text-emerald-400" />
                <span>Chat on WhatsApp ({DESIGNER_INFO.phone})</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-emerald-400" />
              </a>

              {/* Direct email display with copy */}
              <div className="p-4 rounded-xl bg-neutral-900/80 border border-neutral-800 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <Mail className="w-4 h-4 text-amber-400 shrink-0" />
                  <div className="flex flex-col">
                    <span className="text-[11px] uppercase tracking-wider text-neutral-500">
                      Primary Inbox
                    </span>
                    <a
                      href={`mailto:${DESIGNER_INFO.email}`}
                      className="text-xs sm:text-sm font-medium text-white hover:text-amber-400 transition-colors"
                    >
                      {DESIGNER_INFO.email}
                    </a>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={handleCopyEmail}
                  className="p-2 rounded-lg bg-neutral-800 text-neutral-300 hover:text-white hover:bg-neutral-700 transition-colors cursor-pointer"
                  title="Copy email to clipboard"
                  aria-label="Copy email"
                >
                  {copiedEmail ? (
                    <Check className="w-4 h-4 text-emerald-400" />
                  ) : (
                    <Copy className="w-4 h-4" />
                  )}
                </button>
              </div>

              {copiedEmail && (
                <div className="text-xs text-emerald-400 flex items-center gap-1.5 -mt-2">
                  <Check className="w-3.5 h-3.5" />
                  <span>Email address copied to clipboard!</span>
                </div>
              )}

              {/* Quick links & assurances */}
              <div className="space-y-4 pt-2">
                <div className="flex items-start gap-3 text-xs text-neutral-300">
                  <Clock className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold text-white block">Fast Response Guarantee</span>
                    <span className="text-neutral-400">Usually reply within 12–24 hours on all business days.</span>
                  </div>
                </div>

                <div className="flex items-start gap-3 text-xs text-neutral-300">
                  <ShieldCheck className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold text-white block">NDA & Confidentiality</span>
                    <span className="text-neutral-400">Strict privacy on all unpublished concepts and sensitive launch materials.</span>
                  </div>
                </div>
              </div>

              {/* Direct Mailto Fallback Button */}
              <a
                href={`mailto:${DESIGNER_INFO.email}?subject=Project%20Inquiry%20via%20ABYEE%20STYLE&body=Hi%20Waqas,%0A%0AI%20am%20interested%20in%20collaborating%20with%20ABYEE%20STYLE%20on%20a%20graphic%20design%20project.%0A%0AProject%20Type:%0ABudget:%0ADetails:%0A`}
                className="w-full py-3 px-4 rounded-xl border border-neutral-700 hover:border-neutral-500 bg-neutral-900/60 hover:bg-neutral-800/80 text-white text-xs font-semibold uppercase tracking-wider text-center transition-all flex items-center justify-center gap-2"
              >
                <span>Open in Native Mail Client</span>
                <ArrowUpRight className="w-4 h-4 text-amber-400" />
              </a>
            </div>
          </div>

          {/* Right Column: Interactive Form */}
          <div className="lg:col-span-7">
            <div className="p-8 sm:p-10 rounded-2xl bg-neutral-950 border border-neutral-800 shadow-2xl relative">
              {status === 'success' ? (
                <div className="py-12 flex flex-col items-center text-center">
                  <div className="w-14 h-14 rounded-full bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 mb-5">
                    <Check className="w-7 h-7" />
                  </div>
                  <h3 className="text-2xl font-bold text-white font-display mb-2">
                    Inquiry Received!
                  </h3>
                  <p className="text-sm text-neutral-300 max-w-md leading-relaxed mb-6">
                    Thank you, <span className="text-white font-semibold">{name}</span>. Your project brief has been logged. Waqas will review your specifications and get back to you at <span className="text-amber-400 font-mono">{email}</span> within 24 hours.
                  </p>
                  <div className="flex flex-wrap items-center gap-3">
                    <button
                      onClick={resetForm}
                      className="px-6 py-2.5 text-xs font-semibold uppercase tracking-wider text-neutral-950 bg-amber-400 rounded-lg hover:bg-amber-300 transition-colors cursor-pointer"
                    >
                      Send Another Message
                    </button>
                    <a
                      href={`mailto:${DESIGNER_INFO.email}?subject=Follow-up:%20${encodeURIComponent(projectType)}&body=Name:%20${encodeURIComponent(name)}%0AEmail:%20${encodeURIComponent(email)}%0ABudget:%20${encodeURIComponent(budget)}%0ATimeline:%20${encodeURIComponent(timeline)}%0A%0ADetails:%0A${encodeURIComponent(details)}`}
                      className="px-6 py-2.5 text-xs font-semibold uppercase tracking-wider text-neutral-300 bg-neutral-900 border border-neutral-700 rounded-lg hover:bg-neutral-800 transition-colors"
                    >
                      Backup via Email
                    </a>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  {errorMessage && (
                    <div className="p-4 rounded-xl bg-rose-500/10 border border-rose-500/30 text-rose-400 text-xs flex items-center gap-2.5">
                      <AlertCircle className="w-4 h-4 shrink-0" />
                      <span>{errorMessage}</span>
                    </div>
                  )}

                  {/* Name & Email inputs */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-neutral-300 mb-2">
                        Your Name <span className="text-amber-400">*</span>
                      </label>
                      <input
                        type="text"
                        required
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="e.g. Alex Morgan"
                        className="w-full px-4 py-3 bg-neutral-900 border border-neutral-800 rounded-xl text-sm text-white placeholder-neutral-500 focus:outline-none focus:border-amber-400 transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-neutral-300 mb-2">
                        Email Address <span className="text-amber-400">*</span>
                      </label>
                      <input
                        type="email"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="alex@brand.com"
                        className="w-full px-4 py-3 bg-neutral-900 border border-neutral-800 rounded-xl text-sm text-white placeholder-neutral-500 focus:outline-none focus:border-amber-400 transition-colors"
                      />
                    </div>
                  </div>

                  {/* Project Type Selector */}
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-neutral-300 mb-2.5">
                      Service / Project Type
                    </label>
                    <div className="flex flex-wrap gap-2">
                      {projectTypes.map((type) => {
                        const selected = projectType === type;
                        return (
                          <button
                            type="button"
                            key={type}
                            onClick={() => setProjectType(type)}
                            className={`px-3.5 py-2 text-xs rounded-lg transition-all cursor-pointer ${
                              selected
                                ? 'bg-amber-400 text-neutral-950 font-semibold shadow-sm'
                                : 'bg-neutral-900 text-neutral-300 hover:text-white border border-neutral-800 hover:border-neutral-700'
                            }`}
                          >
                            {type}
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  {/* Budget & Timeline Selectors */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-neutral-300 mb-2">
                        Estimated Budget
                      </label>
                      <select
                        value={budget}
                        onChange={(e) => setBudget(e.target.value)}
                        className="w-full px-4 py-3 bg-neutral-900 border border-neutral-800 rounded-xl text-xs sm:text-sm text-white focus:outline-none focus:border-amber-400 transition-colors"
                      >
                        {budgets.map((b) => (
                          <option key={b} value={b} className="bg-neutral-950 text-white">
                            {b}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-neutral-300 mb-2">
                        Timeline
                      </label>
                      <select
                        value={timeline}
                        onChange={(e) => setTimeline(e.target.value)}
                        className="w-full px-4 py-3 bg-neutral-900 border border-neutral-800 rounded-xl text-xs sm:text-sm text-white focus:outline-none focus:border-amber-400 transition-colors"
                      >
                        {timelines.map((t) => (
                          <option key={t} value={t} className="bg-neutral-950 text-white">
                            {t}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  {/* Project Details textarea */}
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-neutral-300 mb-2">
                      Project Details & Goals <span className="text-amber-400">*</span>
                    </label>
                    <textarea
                      rows={4}
                      required
                      value={details}
                      onChange={(e) => setDetails(e.target.value)}
                      placeholder="Describe your brand, key deliverables, target audience, and any visual references..."
                      className="w-full px-4 py-3 bg-neutral-900 border border-neutral-800 rounded-xl text-sm text-white placeholder-neutral-500 focus:outline-none focus:border-amber-400 transition-colors resize-y"
                    />
                  </div>

                  {/* Optional Mock File Attachment */}
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-neutral-300 mb-2">
                      Attach Reference / Moodboard (Optional)
                    </label>
                    <label className="flex items-center justify-center gap-2 p-3 border border-dashed border-neutral-800 hover:border-neutral-700 bg-neutral-900/40 rounded-xl cursor-pointer text-xs text-neutral-400 hover:text-white transition-colors">
                      <UploadCloud className="w-4 h-4 text-amber-400" />
                      <span>Choose file (PDF, PNG, JPG, Figma Link)</span>
                      <input
                        type="file"
                        multiple
                        className="hidden"
                        onChange={handleFileChange}
                      />
                    </label>
                    {attachedFiles.length > 0 && (
                      <div className="flex flex-wrap gap-2 mt-2">
                        {attachedFiles.map((file, idx) => (
                          <span
                            key={idx}
                            className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded bg-neutral-900 border border-neutral-800 text-[11px] text-neutral-300"
                          >
                            <span>{file}</span>
                            <button
                              type="button"
                              onClick={() => handleRemoveFile(idx)}
                              className="text-neutral-500 hover:text-rose-400 ml-1"
                            >
                              ✕
                            </button>
                          </span>
                        ))}
                      </div>
                    )}
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={status === 'submitting'}
                    className="w-full py-4 px-6 text-xs sm:text-sm font-semibold uppercase tracking-wider text-neutral-950 bg-amber-400 hover:bg-amber-300 active:scale-98 disabled:opacity-50 rounded-xl transition-all shadow-lg shadow-amber-500/20 flex items-center justify-center gap-2 cursor-pointer"
                  >
                    {status === 'submitting' ? (
                      <>
                        <div className="w-4 h-4 border-2 border-neutral-950 border-t-transparent rounded-full animate-spin" />
                        <span>Sending Brief...</span>
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        <span>Submit Project Brief</span>
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
