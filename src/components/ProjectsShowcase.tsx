import React, { useState, useMemo } from 'react';
import { Eye, ArrowUpRight, Search } from 'lucide-react';
import { Project } from '../data/portfolioData';

interface ProjectsShowcaseProps {
  projects: Project[];
  onSelectProject: (project: Project) => void;
}

export const ProjectsShowcase: React.FC<ProjectsShowcaseProps> = ({
  projects,
  onSelectProject,
}) => {
  const [activeCategory, setActiveCategory] = useState<string>('All Works');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const categories = [
    'All Works',
    'Brand Identity',
    'Editorial & Posters',
    'Photography & Direction',
    'Typography & Layout',
  ];

  const filteredProjects = useMemo(() => {
    return projects.filter((item) => {
      const matchesCategory =
        activeCategory === 'All Works' || item.category === activeCategory;
      const matchesSearch =
        item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.tagline.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.client.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.deliverables.some((d) => d.toLowerCase().includes(searchQuery.toLowerCase()));
      return matchesCategory && matchesSearch;
    });
  }, [projects, activeCategory, searchQuery]);

  return (
    <section id="work" className="py-20 lg:py-28 border-b border-neutral-800/80 bg-[#09090c]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-amber-400 font-semibold mb-2">
              <span>Selected Works</span>
              <span aria-hidden="true" className="text-neutral-700">·</span>
              <span className="text-neutral-400">2025 — 2026</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white font-display tracking-tight">
              Featured Graphic Designs & Visual Systems
            </h2>
          </div>

          <p className="text-sm text-neutral-400 max-w-md">
            Click on any project to inspect high-resolution imagery, design rationale, color breakdown, and client deliverables.
          </p>
        </div>

        {/* Filter Controls & Search Bar */}
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4 mb-10 pb-6 border-b border-neutral-800/80">
          {/* Interactive filter tabs (functional buttons with active/inactive states) */}
          <div className="flex items-center gap-1.5 overflow-x-auto pb-2 sm:pb-0 scrollbar-none">
            {categories.map((cat) => {
              const count =
                cat === 'All Works'
                  ? projects.length
                  : projects.filter((p) => p.category === cat).length;
              const isActive = activeCategory === cat;
              return (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-3.5 py-1.5 text-xs font-medium rounded-lg whitespace-nowrap shrink-0 transition-all cursor-pointer ${
                    isActive
                      ? 'bg-neutral-800 text-white border border-neutral-700 shadow-sm'
                      : 'text-neutral-400 hover:text-white hover:bg-neutral-900/80 border border-transparent'
                  }`}
                >
                  <span>{cat}</span>
                  <span
                    className={`ml-1.5 text-[11px] tabular-nums ${
                      isActive ? 'text-amber-400 font-semibold' : 'text-neutral-500'
                    }`}
                  >
                    ({count})
                  </span>
                </button>
              );
            })}
          </div>

          {/* Quick Search Input */}
          <div className="relative w-full sm:w-64">
            <Search className="w-4 h-4 text-neutral-500 absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search project or tag..."
              className="w-full pl-9 pr-3 py-1.5 text-xs bg-neutral-900/90 border border-neutral-800 rounded-lg text-white placeholder-neutral-500 focus:outline-none focus:border-amber-400/80 transition-colors"
            />
          </div>
        </div>

        {/* Bento Grid Layout */}
        {filteredProjects.length === 0 ? (
          <div className="text-center py-16 px-4 border border-dashed border-neutral-800 rounded-2xl bg-neutral-950/40">
            <p className="text-neutral-400 text-sm mb-3">No projects matched your criteria.</p>
            <button
              onClick={() => {
                setActiveCategory('All Works');
                setSearchQuery('');
              }}
              className="text-xs text-amber-400 hover:underline uppercase tracking-wider font-semibold cursor-pointer"
            >
              Clear filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {filteredProjects.map((project, index) => {
              // Asymmetric Bento sizing: make the 1st or featured projects span 2 columns on large screens
              const isProminent = project.featured && (index === 0 || index === 3);

              return (
                <div
                  key={project.id}
                  onClick={() => onSelectProject(project)}
                  className={`group relative flex flex-col bg-neutral-950 border border-neutral-800/80 hover:border-neutral-700/90 rounded-2xl overflow-hidden cursor-pointer transition-all duration-300 hover:shadow-2xl hover:shadow-black/60 ${
                    isProminent ? 'md:col-span-2 lg:col-span-2' : 'col-span-1'
                  }`}
                >
                  {/* Image container */}
                  <div
                    className={`relative w-full overflow-hidden bg-neutral-900 ${
                      isProminent ? 'aspect-[16/10] sm:aspect-[16/9]' : 'aspect-[4/3] sm:aspect-[4/3]'
                    }`}
                  >
                    <img
                      src={project.coverImage}
                      alt={project.title}
                      className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500 ease-out"
                      referrerPolicy="no-referrer"
                    />

                    {/* Gradient overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />

                    {/* Quick view hover button */}
                    <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-200 translate-y-1 group-hover:translate-y-0">
                      <span className="p-2.5 rounded-full bg-neutral-900/90 text-white backdrop-blur-md border border-neutral-700 shadow-xl flex items-center justify-center">
                        <Eye className="w-4 h-4 text-amber-400" />
                      </span>
                    </div>

                    {/* Project tags overlaid on bottom left */}
                    <div className="absolute bottom-4 left-5 right-5 flex items-end justify-between">
                      <div className="flex flex-col">
                        {/* Unboxed clean metadata with typographic bullet */}
                        <div className="flex items-center gap-2 text-[11px] text-neutral-300 font-medium mb-1 drop-shadow-sm">
                          <span className="text-amber-400">{project.category}</span>
                          <span aria-hidden="true" className="text-neutral-500">·</span>
                          <span>{project.year}</span>
                        </div>
                        <h3 className="text-lg sm:text-xl font-bold text-white font-display tracking-tight drop-shadow-md">
                          {project.title}
                        </h3>
                      </div>
                      <span className="p-2 rounded-lg bg-neutral-900/80 border border-neutral-700/60 text-white group-hover:bg-amber-400 group-hover:text-neutral-950 transition-colors shrink-0 ml-3">
                        <ArrowUpRight className="w-4 h-4" />
                      </span>
                    </div>
                  </div>

                  {/* Card bottom details */}
                  <div className="p-5 flex flex-col justify-between flex-1 border-t border-neutral-800/80 bg-neutral-950/60">
                    <p className="text-xs sm:text-sm text-neutral-400 line-clamp-2 leading-relaxed mb-4">
                      {project.tagline}
                    </p>

                    <div className="flex items-center justify-between text-xs text-neutral-500 pt-3 border-t border-neutral-900">
                      <span className="truncate max-w-[200px]">Client: {project.client}</span>
                      <div className="flex items-center gap-1.5 shrink-0">
                        {project.palette.slice(0, 3).map((col, idx) => (
                          <span
                            key={idx}
                            className="w-2.5 h-2.5 rounded-full border border-neutral-800"
                            style={{ backgroundColor: col }}
                            title={col}
                          />
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </section>
  );
};
