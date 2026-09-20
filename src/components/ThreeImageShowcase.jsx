import React from 'react';
import { Maximize2, Sparkles, ArrowUpRight } from 'lucide-react';
import { threeImageShowcase } from '../data/portfolioData';

export const ThreeImageShowcase = ({ onEnlargeImage }) => {
  return (
    <section className="py-20 sm:py-28 px-4 sm:px-6 max-w-6xl mx-auto relative z-10">
      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-24">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-pink-accent/10 border border-pink-accent/30 text-pink-accent text-xs font-semibold uppercase tracking-wider mb-4">
          <Sparkles className="w-3.5 h-3.5" />
          <span>Cinematic Showcase Gallery</span>
        </div>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
          Visual Systems &amp; Architectures
        </h2>
        <p className="text-sm sm:text-base text-gray-400 mt-3 max-w-xl mx-auto">
          An in-depth chronological tour of our primary digital experiences, design frameworks, and interactive interfaces.
        </p>
      </div>

      {/* 3 Showcase Projects */}
      <div className="flex flex-col gap-16 sm:gap-24 md:gap-32">
        {threeImageShowcase.map((project) => {
          const isRight = project.alignment === 'right';
          const isLeft = project.alignment === 'left';

          return (
            <div
              key={project.id}
              className={`flex flex-col ${
                isRight ? 'lg:items-end' : isLeft ? 'lg:items-start' : 'items-center'
              } w-full`}
            >
              {/* Card Container */}
              <div
                className={`w-full ${
                  isRight || isLeft ? 'lg:w-[92%]' : 'w-full'
                } rounded-3xl sm:rounded-[36px] glass-card-elevated border border-white/[0.08] hover:border-pink-accent/30 transition-all duration-500 overflow-hidden shadow-2xl shadow-black/90 group`}
              >
                {/* Header bar inside card */}
                <div className="px-6 py-4 sm:px-8 sm:py-5 border-b border-white/[0.06] flex items-center justify-between bg-[#0d0d11]/80">
                  <div className="flex items-center gap-3">
                    <span className="font-mono text-xs font-bold tracking-widest text-pink-accent bg-pink-accent/10 px-2.5 py-1 rounded-full border border-pink-accent/20">
                      {project.projectNumber}
                    </span>
                    <span className="text-xs sm:text-sm font-medium text-gray-400">
                      {project.category}
                    </span>
                  </div>

                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => onEnlargeImage(project.image, project.title)}
                      className="p-1.5 rounded-full text-gray-400 hover:text-white hover:bg-white/10 transition-colors"
                      title="Inspect High Resolution"
                    >
                      <Maximize2 className="w-4 h-4" />
                    </button>
                  </div>
                </div>

                {/* Main Visual Presentation */}
                <div
                  className="relative cursor-pointer bg-[#08080c] overflow-hidden max-h-[620px] flex items-center justify-center p-2 sm:p-4"
                  onClick={() => onEnlargeImage(project.image, project.title)}
                >
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-auto max-h-[580px] object-contain rounded-xl sm:rounded-2xl transition-transform duration-700 ease-out group-hover:scale-[1.015]"
                    loading="lazy"
                  />

                  {/* Hover Quick Action Badge */}
                  <div className="absolute top-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none hidden sm:flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#050507]/90 backdrop-blur-md border border-white/20 text-xs font-semibold text-white shadow-xl">
                    <span>Click to Zoom</span>
                    <Maximize2 className="w-3.5 h-3.5 text-pink-accent" />
                  </div>
                </div>

                {/* Footer details */}
                <div className="p-6 sm:p-8 bg-[#0d0d11]/90 border-t border-white/[0.06]">
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                    <div className="max-w-2xl">
                      <h3 className="text-xl sm:text-2xl font-bold text-white mb-2 group-hover:text-pink-accent transition-colors">
                        {project.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-gray-400 leading-relaxed font-normal">
                        {project.description}
                      </p>
                    </div>

                    <div className="flex flex-wrap items-center gap-2 self-start md:self-center shrink-0">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-2.5 py-1 rounded-md text-[11px] font-medium bg-white/[0.04] border border-white/[0.08] text-gray-300"
                        >
                          {tag}
                        </span>
                      ))}
                      <button
                        onClick={() => onEnlargeImage(project.image, project.title)}
                        className="inline-flex items-center gap-1 px-3 py-1 rounded-md text-xs font-semibold bg-pink-accent/15 border border-pink-accent/30 text-pink-accent hover:bg-pink-accent hover:text-[#050507] transition-all ml-1"
                      >
                        Explore <ArrowUpRight className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};
