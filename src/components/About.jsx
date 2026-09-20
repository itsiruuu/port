import React from 'react';
import { ArrowRight, ExternalLink } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

// =========================================================================
// ABOUT COMPONENT
// Developer introduction with circular studio portrait and bio details.
// =========================================================================

export const About = ({ onOpenContactModal }) => {
  return (
    <section id="about" className="py-20 sm:py-28 px-4 sm:px-6 max-w-5xl mx-auto relative z-10">
      {/* Section Heading */}
      <div className="text-center mb-12 sm:mb-16">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
          Meet the <span className="font-mono text-pink-accent font-bold">&lt;developer&gt;</span>
        </h2>
        <p className="text-base sm:text-lg text-gray-400 font-normal mt-2">
          behind the codebase
        </p>
      </div>

      {/* Developer Glass Card */}
      <div className="relative rounded-[32px] sm:rounded-[40px] glass-card-elevated border border-white/[0.08] hover:border-pink-accent/30 transition-all duration-500 p-6 sm:p-10 md:p-12 overflow-hidden shadow-2xl shadow-black/80 group">
        {/* Subtle ambient pink card glow */}
        <div className="absolute -top-24 -right-24 w-72 h-72 rounded-full bg-pink-accent/10 blur-[90px] pointer-events-none" />

        <div className="flex flex-col md:flex-row items-center md:items-start gap-8 sm:gap-10 md:gap-12 relative z-10">
          {/* Circular Profile Portrait */}
          <div className="shrink-0 relative">
            <div className="w-36 h-36 sm:w-44 sm:h-44 md:w-48 md:h-48 rounded-full p-1 border-2 border-pink-accent/40 shadow-xl shadow-pink-accent/15 group-hover:border-pink-accent/70 transition-all duration-500">
              <div className="w-full h-full rounded-full overflow-hidden bg-[#111116]">
                <img
                  src={personalInfo.profileImage}
                  alt={personalInfo.name}
                  className="w-full h-full object-cover contrast-110 group-hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>
            <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 px-3 py-0.5 rounded-full bg-[#111116] border border-pink-accent/30 text-[10px] uppercase font-bold tracking-wider text-pink-accent shadow-md whitespace-nowrap">
              Available for work
            </div>
          </div>

          {/* Bio & Details */}
          <div className="flex-1 text-center md:text-left">
            <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight mb-1">
              {personalInfo.name}
            </h3>
            <p className="text-xs sm:text-sm font-medium text-pink-muted tracking-wide mb-4">
              {personalInfo.role} · {personalInfo.location}
            </p>

            <p className="text-sm sm:text-base text-gray-300 leading-relaxed mb-6 font-normal">
              {personalInfo.aboutBio}
            </p>

            {/* Action Links */}
            <div className="flex flex-wrap items-center justify-center md:justify-start gap-4 pt-2 border-t border-white/[0.08]">
              <button
                onClick={onOpenContactModal}
                className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold tracking-wider uppercase text-pink-accent hover:text-pink-hover transition-colors group/btn"
              >
                <span>Initiate Project Request</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-1 transition-transform" />
              </button>

              <span className="text-white/20 hidden sm:inline">|</span>

              <a
                href={personalInfo.socialLinks.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-medium text-gray-400 hover:text-white transition-colors"
              >
                <span>View GitHub Profile</span>
                <ExternalLink className="w-3.5 h-3.5 text-gray-400" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
