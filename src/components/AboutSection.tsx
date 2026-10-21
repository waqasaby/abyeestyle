import React from 'react';
import { DESIGNER_INFO } from '../data/portfolioData';
import { ArrowUpRight, Compass, Layers, ShieldCheck, Sparkles } from 'lucide-react';

interface AboutSectionProps {
  onContactClick: () => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ onContactClick }) => {
  const principles = [
    {
      icon: Compass,
      title: 'Concept Before Decoration',
      desc: 'Form always follows a distinct narrative. I never apply ornamental styles without a clear brand thesis.',
    },
    {
      icon: Layers,
      title: 'Typographic Discipline',
      desc: 'Type is voice. Every font pairing, kerning gap, and measure is calibrated for maximum hierarchy and legibility.',
    },
    {
      icon: ShieldCheck,
      title: 'Production Precision',
      desc: 'From CMYK color profiles, bleed tolerances to SVG vector node optimization, every deliverable is press-ready.',
    },
  ];

  return (
    <section id="about" className="py-20 lg:py-28 border-b border-neutral-800/80 bg-[#09090d]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Portrait */}
          <div className="lg:col-span-5 order-2 lg:order-1">
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-br from-amber-500/20 via-neutral-900 to-cyan-500/20 rounded-2xl blur-lg opacity-70 group-hover:opacity-100 transition-opacity" />
              <div className="relative rounded-2xl overflow-hidden border border-neutral-800 bg-neutral-950 aspect-[4/5] shadow-2xl">
                <img
                  src={DESIGNER_INFO.aboutImage}
                  alt="Waqas Portrait"
                  className="w-full h-full object-cover object-top filter grayscale contrast-110 hover:grayscale-0 transition-all duration-700"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-transparent to-transparent pointer-events-none" />
                <div className="absolute bottom-4 left-4 right-4 p-4 rounded-xl bg-neutral-900/90 backdrop-blur-md border border-neutral-800">
                  <span className="text-xs uppercase tracking-wider text-amber-400 font-semibold block mb-0.5">
                    {DESIGNER_INFO.brandName} · Lead Designer
                  </span>
                  <p className="text-sm font-medium text-white">
                    {DESIGNER_INFO.fullName} · Global Practice
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Bio & Philosophy */}
          <div className="lg:col-span-7 order-1 lg:order-2 flex flex-col justify-center">
            <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-amber-400 font-semibold mb-2">
              <span>About The Designer</span>
              <span aria-hidden="true" className="text-neutral-700">·</span>
              <span className="text-neutral-400">Philosophy & Experience</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white font-display tracking-tight mb-6">
              Balancing Modernist Restraint with Dramatic Visual Punch
            </h2>

            <p className="text-base text-neutral-300 leading-relaxed mb-6">
              With over 5 years of active graphic design and art direction practice, I have partnered with fashion ateliers, music collectives, architectural journals, and commercial enterprises to formulate cohesive visual identities that leave a lasting imprint.
            </p>

            <p className="text-sm text-neutral-400 leading-relaxed mb-8">
              My methodology pairs rigorous Swiss typographic grid systems with moody, cinematic lighting and tactile print sensibilities. Whether it is a full brand identity from scratch, a multi-page exhibition catalog, or a billboard campaign, I engineer every asset to withstand the scrutiny of both critics and consumers.
            </p>

            {/* Principles */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-10">
              {principles.map((item, idx) => (
                <div key={idx} className="p-4 rounded-xl bg-neutral-950 border border-neutral-800/80">
                  <item.icon className="w-5 h-5 text-amber-400 mb-2" />
                  <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-1">
                    {item.title}
                  </h4>
                  <p className="text-[12px] text-neutral-400 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>

            {/* Software Proficiency */}
            <div className="p-6 rounded-2xl bg-neutral-950 border border-neutral-800/80 mb-8">
              <h4 className="text-xs font-semibold tracking-wider uppercase text-neutral-400 mb-4">
                Core Toolset & Craftsmanship
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-3.5">
                {DESIGNER_INFO.skills.map((skill) => (
                  <div key={skill.name} className="flex flex-col gap-1.5">
                    <div className="flex justify-between text-xs">
                      <span className="text-neutral-300 font-medium">{skill.name}</span>
                      <span className="font-mono text-neutral-400 tabular-nums">{skill.level}</span>
                    </div>
                    <div className="w-full h-1.5 bg-neutral-900 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-gradient-to-r from-amber-500 to-amber-300 rounded-full"
                        style={{ width: skill.level }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Action */}
            <div className="flex items-center gap-4">
              <button
                onClick={onContactClick}
                className="px-6 py-3 text-xs font-semibold uppercase tracking-wider text-neutral-950 bg-amber-400 hover:bg-amber-300 active:scale-95 transition-all rounded-lg flex items-center gap-2 cursor-pointer"
              >
                <span>Discuss Your Vision</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
