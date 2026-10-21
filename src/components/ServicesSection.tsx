import React from 'react';
import { SERVICES } from '../data/portfolioData';
import { ArrowUpRight, CheckCircle2 } from 'lucide-react';

interface ServicesSectionProps {
  onSelectService: (serviceName: string) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onSelectService }) => {
  return (
    <section id="services" className="py-20 lg:py-28 border-b border-neutral-800/80 bg-[#08080b]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-amber-400 font-semibold mb-2">
              <span>Capabilities</span>
              <span aria-hidden="true" className="text-neutral-700">·</span>
              <span className="text-neutral-400">Services & Solutions</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white font-display tracking-tight">
              Design Systems Tailored for Cultural & Commercial Distinction
            </h2>
          </div>

          <p className="text-sm text-neutral-400 max-w-md">
            From zero-to-one brand identity creation to multi-page publication layouts and commercial campaigns.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {SERVICES.map((service) => (
            <div
              key={service.number}
              className="p-8 rounded-2xl bg-neutral-950 border border-neutral-800/80 hover:border-neutral-700 transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <span className="text-sm font-mono font-bold text-amber-400/90 tracking-wider">
                    {service.number}
                  </span>
                  <button
                    onClick={() => onSelectService(service.title)}
                    className="p-2 rounded-lg bg-neutral-900 border border-neutral-800 text-neutral-400 group-hover:text-amber-400 group-hover:border-neutral-700 transition-colors cursor-pointer"
                    title={`Inquire about ${service.title}`}
                  >
                    <ArrowUpRight className="w-4 h-4" />
                  </button>
                </div>

                <h3 className="text-xl sm:text-2xl font-bold text-white font-display tracking-tight mb-3">
                  {service.title}
                </h3>

                <p className="text-sm text-neutral-400 leading-relaxed mb-6">
                  {service.description}
                </p>

                <div className="space-y-2.5 pt-4 border-t border-neutral-900">
                  {service.deliverables.map((item, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-xs text-neutral-300">
                      <CheckCircle2 className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-neutral-900 flex items-center justify-between">
                <span className="text-[11px] uppercase tracking-wider text-neutral-500">
                  Standard Delivery · 1–3 Weeks
                </span>
                <button
                  onClick={() => onSelectService(service.title)}
                  className="text-xs text-amber-400 font-semibold hover:text-amber-300 transition-colors flex items-center gap-1 cursor-pointer"
                >
                  <span>Book This Service</span>
                  <ArrowUpRight className="w-3 h-3" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
