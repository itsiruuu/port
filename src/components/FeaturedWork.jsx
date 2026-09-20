import React, { useState } from 'react';
import { ArrowRight, Maximize2 } from 'lucide-react';
import showcase1Img from '../assets/projects/showcase-1.png';

export const FeaturedWork = ({ onEnlargeImage }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <section className="py-20 sm:py-28 px-4 sm:px-6 max-w-6xl mx-auto relative z-10">
      {/* Heading */}
      <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight mb-4">
          Featured Work
        </h2>
        <p className="text-sm sm:text-base md:text-lg text-gray-400 font-normal leading-relaxed">
          I blend technology, creativity, and empathy to craft seamless experiences that bridge people, spaces, and services.
        </p>
      </div>

      {/* Featured Showcase Asset 1 */}
      <div
        className="relative rounded-2xl sm:rounded-3xl overflow-hidden glass-card-elevated border border-white/[0.1] shadow-2xl shadow-black/90 group cursor-pointer"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onClick={() => onEnlargeImage(showcase1Img, "Nexus Media & Interactive Commerce Ecosystem")}
      >
        {/* The visual showcase asset */}
        <div className="relative w-full aspect-video sm:aspect-[16/9] md:aspect-[16/10] overflow-hidden bg-[#0a0a0e]">
          <img
            src={showcase1Img}
            alt="Featured Work Design Ecosystem"
            className="w-full h-full object-contain object-center transition-transform duration-700 ease-out group-hover:scale-[1.02]"
            loading="eager"
          />

          {/* Interactive hover overlay */}
          <div
            className={`absolute inset-0 bg-gradient-to-t from-[#050507]/95 via-[#0d0d11]/70 to-transparent flex flex-col justify-end p-6 sm:p-10 transition-opacity duration-300 ${
              isHovered ? 'opacity-100' : 'opacity-0 sm:opacity-0'
            }`}
          >
            <div className="max-w-xl">
              <span className="inline-block px-3 py-1 rounded-full text-[11px] font-semibold tracking-wider uppercase bg-pink-accent/20 border border-pink-accent/40 text-pink-accent mb-3">
                Featured Production Case Study
              </span>
              <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-2">
                Nexus Media & Interactive Commerce Ecosystem
              </h3>
              <p className="text-xs sm:text-sm text-gray-300 line-clamp-2 sm:line-clamp-3 mb-4">
                A unified design architecture bringing together high-conversion ecommerce platforms, real-time creator streaming dashboards, and editorial typography systems.
              </p>
              <div className="flex items-center gap-3">
                <span className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-pink-accent group-hover:text-pink-hover">
                  View Full Presentation <ArrowRight className="w-4 h-4" />
                </span>
                <span className="text-xs text-gray-400 inline-flex items-center gap-1 ml-auto">
                  <Maximize2 className="w-3.5 h-3.5" /> Click to Inspect
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile persistent banner */}
        <div className="sm:hidden p-4 bg-[#0d0d11] border-t border-white/[0.08] flex items-center justify-between">
          <div>
            <h4 className="text-sm font-bold text-white">Nexus Media Platform</h4>
            <p className="text-[11px] text-pink-accent">Interactive System Showcase</p>
          </div>
          <span className="p-2 rounded-full bg-white/5 text-pink-accent">
            <Maximize2 className="w-4 h-4" />
          </span>
        </div>
      </div>
    </section>
  );
};
