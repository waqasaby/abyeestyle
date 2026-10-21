import React from 'react';
import { TESTIMONIALS } from '../data/portfolioData';
import { Quote } from 'lucide-react';

export const TestimonialsSection: React.FC = () => {
  return (
    <section className="py-20 lg:py-28 border-b border-neutral-800/80 bg-[#08080a]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-amber-400 font-semibold mb-2">
              <span>Client Endorsements</span>
              <span aria-hidden="true" className="text-neutral-700">·</span>
              <span className="text-neutral-400">Verifiable Outcomes</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white font-display tracking-tight">
              Trusted by Ambitious Brands & Art Directors
            </h2>
          </div>

          <p className="text-sm text-neutral-400 max-w-md">
            Direct feedback from collaborating founders, agency heads, and marketing directors.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((t, idx) => (
            <div
              key={idx}
              className="p-8 rounded-2xl bg-neutral-950 border border-neutral-800/80 hover:border-neutral-700/80 transition-colors flex flex-col justify-between"
            >
              <div>
                <Quote className="w-6 h-6 text-amber-400/80 mb-6" />
                <p className="text-sm sm:text-base text-neutral-300 leading-relaxed mb-6">
                  "{t.quote}"
                </p>
              </div>

              <div className="pt-6 border-t border-neutral-900 flex items-center justify-between">
                <div>
                  <h4 className="text-sm font-semibold text-white">
                    {t.author}
                  </h4>
                  <p className="text-xs text-neutral-400">
                    {t.role} · {t.company}
                  </p>
                </div>
                <span className="text-xs font-mono font-semibold text-amber-400 tabular-nums">
                  {t.metric}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
