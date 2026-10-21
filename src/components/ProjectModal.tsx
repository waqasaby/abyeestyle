import React, { useEffect, useState } from 'react';
import { X, ChevronLeft, ChevronRight, Check, Copy, ArrowUpRight } from 'lucide-react';
import { Project } from '../data/portfolioData';

interface ProjectModalProps {
  project: Project | null;
  allProjects: Project[];
  onClose: () => void;
  onSelectProject: (p: Project) => void;
  onInquireSimilar: (projectName: string) => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({
  project,
  allProjects,
  onClose,
  onSelectProject,
  onInquireSimilar,
}) => {
  const [copiedHex, setCopiedHex] = useState<string | null>(null);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!project) return;
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowRight') handleNext();
      if (e.key === 'ArrowLeft') handlePrev();
    };
    window.addEventListener('keydown', handleKeyDown);
    if (project) {
      document.body.style.overflow = 'hidden';
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'auto';
    };
  }, [project]);

  if (!project) return null;

  const currentIndex = allProjects.findIndex((p) => p.id === project.id);
  const handlePrev = () => {
    const prevIndex = (currentIndex - 1 + allProjects.length) % allProjects.length;
    onSelectProject(allProjects[prevIndex]);
  };
  const handleNext = () => {
    const nextIndex = (currentIndex + 1) % allProjects.length;
    onSelectProject(allProjects[nextIndex]);
  };

  const copyHex = (hex: string) => {
    navigator.clipboard.writeText(hex);
    setCopiedHex(hex);
    setTimeout(() => setCopiedHex(null), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 lg:p-8 bg-black/90 backdrop-blur-md animate-in fade-in duration-200">
      {/* Background click listener */}
      <div className="absolute inset-0" onClick={onClose} />

      {/* Main Container */}
      <div className="relative z-10 w-full max-w-5xl max-h-[92vh] bg-[#0e0e12] border border-neutral-800 rounded-2xl shadow-2xl overflow-hidden flex flex-col">
        {/* Modal Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-neutral-800 bg-[#0a0a0d] shrink-0">
          <div className="flex items-center gap-3">
            <span className="text-xs font-semibold text-amber-400 tracking-wider uppercase font-mono">
              PROJECT {currentIndex + 1} / {allProjects.length}
            </span>
            <span aria-hidden="true" className="text-neutral-700">·</span>
            <span className="text-xs text-neutral-400 hidden sm:inline">{project.category}</span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handlePrev}
              className="p-1.5 rounded-lg bg-neutral-900 border border-neutral-800 text-neutral-400 hover:text-white hover:bg-neutral-800 transition-colors"
              title="Previous project (←)"
              aria-label="Previous project"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={handleNext}
              className="p-1.5 rounded-lg bg-neutral-900 border border-neutral-800 text-neutral-400 hover:text-white hover:bg-neutral-800 transition-colors"
              title="Next project (→)"
              aria-label="Next project"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
            <button
              onClick={onClose}
              className="p-1.5 ml-2 rounded-lg bg-neutral-900 border border-neutral-800 text-neutral-400 hover:text-white hover:bg-neutral-800 transition-colors"
              title="Close (Esc)"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Modal Scrollable Content */}
        <div className="overflow-y-auto flex-1 p-6 sm:p-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Visual Preview */}
            <div className="lg:col-span-7 flex flex-col gap-4">
              <div className="rounded-xl overflow-hidden border border-neutral-800 bg-neutral-950 flex items-center justify-center max-h-[65vh]">
                <img
                  src={project.coverImage}
                  alt={project.title}
                  className="w-full h-full object-contain max-h-[65vh]"
                  referrerPolicy="no-referrer"
                />
              </div>

              {/* Color Palette Swatches */}
              <div className="p-4 rounded-xl bg-neutral-900/60 border border-neutral-800/80">
                <span className="text-xs uppercase tracking-wider text-neutral-400 font-medium block mb-2.5">
                  Project Color Hierarchy
                </span>
                <div className="flex flex-wrap items-center gap-3">
                  {project.palette.map((color, idx) => (
                    <button
                      key={idx}
                      onClick={() => copyHex(color)}
                      className="group flex items-center gap-2 px-2.5 py-1.5 rounded-lg bg-neutral-950 border border-neutral-800 hover:border-neutral-700 transition-colors text-xs text-neutral-300"
                    >
                      <span
                        className="w-4 h-4 rounded border border-neutral-700 shadow-inner"
                        style={{ backgroundColor: color }}
                      />
                      <span className="font-mono text-[11px]">{color}</span>
                      {copiedHex === color ? (
                        <Check className="w-3 h-3 text-emerald-400" />
                      ) : (
                        <Copy className="w-3 h-3 text-neutral-600 group-hover:text-neutral-400 transition-colors" />
                      )}
                    </button>
                  ))}
                  {copiedHex && (
                    <span className="text-xs text-emerald-400 ml-1">Copied to clipboard!</span>
                  )}
                </div>
              </div>
            </div>

            {/* Case Study Details */}
            <div className="lg:col-span-5 flex flex-col">
              {/* Unboxed Metadata */}
              <div className="flex items-center gap-2 text-xs text-neutral-400 mb-2">
                <span>{project.client}</span>
                <span aria-hidden="true">·</span>
                <span className="text-neutral-300">{project.year}</span>
                <span aria-hidden="true">·</span>
                <span className="text-amber-400">{project.category}</span>
              </div>

              <h2 className="text-2xl sm:text-3xl font-bold text-white font-display mb-3">
                {project.title}
              </h2>

              <p className="text-sm sm:text-base text-neutral-300 leading-relaxed mb-6">
                {project.tagline}
              </p>

              {/* In-depth story */}
              <div className="mb-6 pb-6 border-b border-neutral-800/80">
                <h3 className="text-xs font-semibold tracking-wider uppercase text-neutral-400 mb-2">
                  Overview & Direction
                </h3>
                <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed">
                  {project.description}
                </p>
              </div>

              {/* Deliverables */}
              <div className="mb-6 pb-6 border-b border-neutral-800/80">
                <h3 className="text-xs font-semibold tracking-wider uppercase text-neutral-400 mb-3">
                  Key Deliverables
                </h3>
                <div className="flex flex-wrap gap-2">
                  {project.deliverables.map((item, idx) => (
                    <span
                      key={idx}
                      className="px-2.5 py-1 text-xs rounded bg-neutral-900 border border-neutral-800 text-neutral-200"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>

              {/* Tools Used */}
              <div className="mb-6 pb-6 border-b border-neutral-800/80">
                <h3 className="text-xs font-semibold tracking-wider uppercase text-neutral-400 mb-2">
                  Software & Tools
                </h3>
                <div className="flex flex-wrap gap-2 text-xs text-neutral-400">
                  {project.tools.join(' · ')}
                </div>
              </div>

              {/* Client Review if present */}
              {project.clientReview && (
                <div className="mb-6 p-4 rounded-xl bg-neutral-900/40 border border-neutral-800/70">
                  <p className="text-xs sm:text-sm italic text-neutral-300 mb-2">
                    "{project.clientReview.quote}"
                  </p>
                  <div className="text-xs font-medium text-white">
                    {project.clientReview.author}
                    <span className="text-neutral-500 font-normal ml-1.5">
                      — {project.clientReview.role}
                    </span>
                  </div>
                </div>
              )}

              {/* Action Button */}
              <button
                onClick={() => {
                  onClose();
                  onInquireSimilar(project.title);
                }}
                className="w-full py-3 px-4 text-xs font-semibold uppercase tracking-wider text-neutral-950 bg-amber-400 hover:bg-amber-300 active:scale-98 rounded-lg transition-all shadow-md shadow-amber-500/10 flex items-center justify-center gap-2 cursor-pointer mt-auto"
              >
                <span>Inquire About Similar Project</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
