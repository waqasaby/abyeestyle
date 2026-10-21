import React from 'react';
import { ArrowDown, Mail, ArrowUpRight, Sparkles } from 'lucide-react';
import { DESIGNER_INFO } from '../data/portfolioData';

interface HeroProps {
  onExploreClick: () => void;
  onContactClick: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onExploreClick, onContactClick }) => {
  return (
    <section className="relative pt-28 pb-16 lg:pt-36 lg:pb-24 overflow-hidden border-b border-neutral-800/80">
      {/* Subtle ambient lighting gradients */}
      <div className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-cyan-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/3 right-1/4 w-[28rem] h-[28rem] bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 right-1/3 w-64 h-64 bg-rose-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 relative z-10">
        {/* Split-Screen Hero Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
          {/* Left Column (Typographic Hierarchy) */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            {/* Unboxed natural editorial kicker */}
            <div className="flex items-center gap-3 text-xs tracking-wider uppercase text-neutral-400 mb-5">
              <span className="text-amber-400 font-bold tracking-widest">{DESIGNER_INFO.brandName}</span>
              <span aria-hidden="true" className="text-neutral-600">·</span>
              <span>Visual Arts & Brand Direction</span>
              <span aria-hidden="true" className="text-neutral-600">·</span>
              <span className="text-neutral-300">Available Q2 2026</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.08] text-balance mb-6 font-display">
              Graphic Design & Visual Identities Crafted by <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-amber-400 to-amber-500">{DESIGNER_INFO.brandName}</span>
            </h1>

            {/* Lead copy */}
            <p className="text-base sm:text-lg text-neutral-300 max-w-2xl leading-relaxed mb-9">
              Hi, I'm <span className="text-white font-medium">Waqas</span> — Lead Designer & Art Director at <span className="text-amber-400 font-medium">{DESIGNER_INFO.brandName}</span>. Specializing in dark aesthetic brand systems, editorial publications, high-impact poster art, and creative photoshoot direction.
            </p>

            {/* Primary Actions */}
            <div className="flex flex-wrap items-center gap-4 mb-8">
              <button
                onClick={onExploreClick}
                className="px-7 py-3.5 text-xs sm:text-sm font-semibold tracking-wider uppercase text-neutral-950 bg-amber-400 rounded-lg hover:bg-amber-300 active:scale-95 transition-all shadow-lg shadow-amber-500/20 flex items-center gap-2 cursor-pointer"
              >
                <span>Explore Showcase</span>
                <ArrowDown className="w-4 h-4" />
              </button>

              <button
                onClick={onContactClick}
                className="px-7 py-3.5 text-xs sm:text-sm font-medium tracking-wider uppercase text-white bg-neutral-900 border border-neutral-700/80 rounded-lg hover:bg-neutral-800 hover:border-neutral-600 active:scale-95 transition-all flex items-center gap-2 cursor-pointer"
              >
                <span>Hire ABYEE STYLE</span>
                <ArrowUpRight className="w-4 h-4 text-amber-400" />
              </button>

              <a
                href={`tel:${DESIGNER_INFO.phone}`}
                className="px-5 py-3.5 text-xs sm:text-sm font-medium tracking-wider text-neutral-300 bg-neutral-950 border border-neutral-800 rounded-lg hover:text-white hover:border-neutral-700 transition-all flex items-center gap-2 font-mono"
              >
                <span className="text-amber-400">Call:</span>
                <span>{DESIGNER_INFO.phone}</span>
              </a>
            </div>

            {/* Quick Contact & Location Marker */}
            <div className="flex flex-wrap items-center gap-6 text-xs text-neutral-400 pt-6 border-t border-neutral-800/80">
              <div className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-amber-400" />
                <a
                  href={`mailto:${DESIGNER_INFO.email}`}
                  className="hover:text-white transition-colors underline decoration-neutral-700 underline-offset-4"
                >
                  {DESIGNER_INFO.email}
                </a>
              </div>
              <span aria-hidden="true" className="text-neutral-700">·</span>
              <div className="flex items-center gap-2">
                <span className="text-amber-400 font-mono font-medium">Tel:</span>
                <a
                  href={`tel:${DESIGNER_INFO.phone}`}
                  className="hover:text-white transition-colors font-mono"
                >
                  {DESIGNER_INFO.phoneFormatted}
                </a>
              </div>
              <span aria-hidden="true" className="text-neutral-700">·</span>
              <span>{DESIGNER_INFO.location}</span>
            </div>
          </div>

          {/* Right Column (Hero Visual Anchor) */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-full max-w-md lg:max-w-none group">
              {/* Backglow element mirroring the red/cyan lighting in the photo */}
              <div className="absolute -inset-1.5 bg-gradient-to-tr from-cyan-500/25 via-neutral-900 to-rose-500/30 rounded-2xl blur-xl opacity-75 group-hover:opacity-100 transition duration-500" />

              {/* Main Image Container */}
              <div className="relative rounded-2xl overflow-hidden border border-neutral-800 bg-neutral-950 shadow-2xl aspect-[4/5] sm:aspect-[4/5]">
                <img
                  src={DESIGNER_INFO.heroImage}
                  alt="ABYEE STYLE - Graphic Designer & Visual Art Director"
                  className="w-full h-full object-cover object-center filter saturate-105 group-hover:scale-[1.02] transition-transform duration-700 ease-out"
                  referrerPolicy="no-referrer"
                />

                {/* Subtle dark gradient scrim at bottom */}
                <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/20 to-transparent pointer-events-none" />

                {/* Quiet Floating Metadata Overlays */}
                <div className="absolute bottom-5 left-5 right-5 p-4 rounded-xl bg-neutral-900/90 backdrop-blur-md border border-neutral-700/60 shadow-xl">
                  <div className="flex items-center justify-between text-xs mb-1">
                    <span className="font-bold text-white tracking-wider">{DESIGNER_INFO.brandName}</span>
                    <span className="text-amber-400 font-mono text-[11px] tracking-tight">PORTFOLIO · 2026</span>
                  </div>
                  <p className="text-[12px] text-neutral-400 leading-snug">
                    {DESIGNER_INFO.name} · Visual Brand Systems, Editorial & Typography
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Full-width Metric Strip below the split as per guidelines */}
        <div className="mt-16 pt-10 border-t border-neutral-800/80 grid grid-cols-2 sm:grid-cols-4 gap-6">
          {DESIGNER_INFO.metrics.map((metric, i) => (
            <div key={i} className="flex flex-col">
              <span className="text-3xl sm:text-4xl font-extrabold text-white font-display tabular-nums tracking-tight">
                {metric.value}
              </span>
              <span className="text-xs sm:text-sm text-neutral-400 font-medium mt-1">
                {metric.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
