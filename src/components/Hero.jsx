import React from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export const Hero = ({ onOpenContactModal }) => {
  const scrollToProjects = (e) => {
    e.preventDefault();
    const projectsSection = document.getElementById('projects');
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-[90vh] sm:min-h-screen flex flex-col justify-center items-center text-center px-4 sm:px-6 pt-28 sm:pt-36 pb-16 max-w-5xl mx-auto z-10"
    >
      {/* Eyebrow badge */}
      <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.04] border border-white/[0.08] mb-6 sm:mb-8 backdrop-blur-md">
        <Sparkles className="w-3.5 h-3.5 text-pink-accent animate-pulse" />
        <span className="text-xs sm:text-xs font-semibold tracking-widest text-gray-300 uppercase">
          {personalInfo.heroEyebrow}{' '}
          <span className="text-pink-accent font-bold tracking-wider">{personalInfo.name.toUpperCase()}</span>
        </span>
      </div>

      {/* Main Cinematic Headline */}
      <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold text-white tracking-tight leading-[1.12] sm:leading-[1.1] max-w-4xl mx-auto mb-6 sm:mb-8">
        I build websites that are <br className="hidden sm:block" />
        fast, modern, and{' '}
        <span className="text-pink-accent text-glow-pink inline-block relative">
          {personalInfo.heroHeadlineAccent}
          <span className="absolute -bottom-1 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-pink-accent to-transparent opacity-80" />
        </span>
      </h1>

      {/* Supporting paragraph */}
      <p className="text-base sm:text-lg md:text-xl text-gray-400 font-normal leading-relaxed max-w-2xl mx-auto mb-9 sm:mb-11">
        {personalInfo.heroBio}
      </p>

      {/* Action Buttons */}
      <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto">
        <a
          href="#projects"
          onClick={scrollToProjects}
          className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full text-sm font-semibold text-white glass-card hover:bg-white/[0.08] hover:border-white/20 transition-all duration-300 group shadow-lg shadow-black/50"
        >
          <span>View My Work</span>
          <ArrowRight className="w-4 h-4 text-pink-accent group-hover:translate-x-1 transition-transform" />
        </a>

        <button
          onClick={onOpenContactModal}
          className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full text-sm font-semibold text-[#050507] bg-pink-accent hover:bg-pink-hover transition-all duration-300 shadow-lg shadow-pink-accent/25 hover:shadow-pink-accent/40 hover:-translate-y-0.5 active:translate-y-0"
        >
          Let's Work Together
        </button>
      </div>
    </section>
  );
};