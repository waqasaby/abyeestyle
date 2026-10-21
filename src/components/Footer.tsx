import React from 'react';
import { ArrowUp, Mail, Heart } from 'lucide-react';
import { DESIGNER_INFO } from '../data/portfolioData';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#050507] border-t border-neutral-900 py-12">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-neutral-900">
          {/* Brand */}
          <div className="flex flex-col items-center md:items-start">
            <span className="text-xl font-extrabold tracking-wider text-white font-display">
              {DESIGNER_INFO.brandName} <span className="text-amber-400 font-light text-sm tracking-widest uppercase">/ STUDIO</span>
            </span>
            <p className="text-xs text-neutral-400 mt-1">
              Graphic Design · Brand Identities · Editorial Systems · Visual Direction by {DESIGNER_INFO.name}
            </p>
          </div>

          {/* Quick links */}
          <div className="flex flex-wrap items-center justify-center gap-6 text-xs text-neutral-400 font-medium">
            <a href="#work" className="hover:text-white transition-colors">Work</a>
            <a href="#services" className="hover:text-white transition-colors">Services</a>
            <a href="#about" className="hover:text-white transition-colors">About</a>
            <a href="#contact" className="hover:text-white transition-colors">Contact</a>
            <a
              href={`tel:${DESIGNER_INFO.phone}`}
              className="text-neutral-300 hover:text-white font-mono flex items-center gap-1"
            >
              <span className="text-amber-400">Tel:</span>
              <span>{DESIGNER_INFO.phone}</span>
            </a>
            <a
              href={`mailto:${DESIGNER_INFO.email}`}
              className="text-amber-400 hover:underline flex items-center gap-1"
            >
              <Mail className="w-3.5 h-3.5" />
              <span>{DESIGNER_INFO.email}</span>
            </a>
          </div>

          {/* Back to top */}
          <button
            onClick={scrollToTop}
            className="p-2.5 rounded-lg bg-neutral-900 border border-neutral-800 text-neutral-400 hover:text-white hover:bg-neutral-800 transition-colors flex items-center gap-1 text-xs font-medium cursor-pointer"
            title="Scroll to top"
          >
            <span>Top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-6 text-[11px] text-neutral-400">
          <p>© {new Date().getFullYear()} {DESIGNER_INFO.brandName} ({DESIGNER_INFO.name}). All rights reserved. Crafted with precision.</p>
          <p className="text-neutral-400">
            Direct Line: {DESIGNER_INFO.phoneFormatted} · Worldwide Commissions
          </p>
        </div>
      </div>
    </footer>
  );
};
