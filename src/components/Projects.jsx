import React, { useState } from 'react';
import { ExternalLink, ArrowUpRight } from 'lucide-react';
import { GithubIcon } from './Icons';
import { gridProjects } from '../data/portfolioData';


export const Projects = ({ onOpenContactModal }) => {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = ['All', 'E-Commerce', 'AI SaaS', 'Creative', 'Dashboard'];

  const filteredProjects = selectedCategory === 'All'
    ? gridProjects
    : gridProjects.filter((p) => {
        if (selectedCategory === 'E-Commerce') return p.category.includes('Commerce') || p.category.includes('Fashion');
        if (selectedCategory === 'AI SaaS') return p.category.includes('AI') || p.category.includes('SaaS');
        if (selectedCategory === 'Creative') return p.category.includes('Dining') || p.category.includes('Creative');
        if (selectedCategory === 'Dashboard') return p.category.includes('Dashboard') || p.category.includes('Fintech');
        return true;
      });

  return (
    <section id="projects" className="py-10 sm:py-14 px-4 sm:px-6 max-w-6xl mx-auto relative z-10">
      {/* Heading */}
      <div className="text-center max-w-3xl mx-auto mb-6 sm:mb-8">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
          Things I've <span className="text-pink-accent">built</span>
        </h2>
        <p className="text-sm sm:text-base text-gray-400 mt-3 max-w-2xl mx-auto leading-relaxed">
          A selection of websites and digital experiences I've developed for different businesses, products, and ideas.
        </p>
      </div>

      {/* Filter Tabs */}
      <div className="flex items-center justify-center gap-2 sm:gap-3 flex-wrap mb-8 sm:mb-10">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            className={`px-4 py-1.5 rounded-full text-xs font-semibold tracking-wide transition-all duration-200 ${
              selectedCategory === cat
                ? 'bg-pink-accent text-[#050507] shadow-md shadow-pink-accent/25'
                : 'glass-card text-gray-400 hover:text-white hover:bg-white/[0.08]'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* 6 Project Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-16 sm:mb-20">
        {filteredProjects.map((project) => (
          <article
            key={project.id}
            className="group rounded-2xl sm:rounded-3xl glass-card-elevated border border-white/[0.08] hover:border-pink-accent/40 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-pink-accent/10 flex flex-col justify-between overflow-hidden"
          >
            <div>
              {/* Project Image Preview with subtle zoom */}
              <div className="relative aspect-[16/10] overflow-hidden bg-[#0c0c11]">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0d0d11] via-transparent to-transparent opacity-80" />

                <div className="absolute top-3 left-3">
                  <span className="px-2.5 py-1 rounded-full text-[10px] font-bold tracking-wider uppercase bg-[#050507]/80 backdrop-blur-md border border-white/10 text-pink-accent">
                    {project.category}
                  </span>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-5 sm:p-6">
                <h3 className="text-lg sm:text-xl font-bold text-white mb-2 group-hover:text-pink-accent transition-colors flex items-center justify-between gap-2">
                  <span>{project.title}</span>
                  <ArrowUpRight className="w-4 h-4 opacity-0 group-hover:opacity-100 -translate-x-1 group-hover:translate-x-0 transition-all text-pink-accent shrink-0" />
                </h3>
                <p className="text-xs sm:text-sm text-gray-400 leading-relaxed font-normal mb-4">
                  {project.description}
                </p>

                {/* Tech Tags */}
                <div className="flex flex-wrap gap-1.5 mb-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-0.5 rounded text-[11px] font-medium bg-white/[0.04] text-gray-300 border border-white/[0.06]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Bottom Actions */}
            <div className="p-5 sm:p-6 pt-0 border-t border-white/[0.06] flex items-center justify-between mt-4">
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-gray-400 hover:text-white transition-colors"
                aria-label={`Source code for ${project.title}`}
              >
                <GithubIcon className="w-3.5 h-3.5" />
                <span>Source</span>
              </a>

              <a
                href={project.demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 px-3 py-1.5 rounded-full text-xs font-semibold bg-white/[0.06] hover:bg-pink-accent hover:text-[#050507] text-white border border-white/10 hover:border-pink-accent transition-all"
                aria-label={`Live demo for ${project.title}`}
              >
                <span>Live Demo</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </article>
        ))}
      </div>

      {/* Want to see more projects CTA */}
      <div className="text-center p-8 rounded-2xl glass-card border border-white/[0.06] max-w-2xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="text-left">
          <p className="text-sm font-bold text-white">Have a tailored idea in mind?</p>
          <p className="text-xs text-gray-400">Let's craft a bespoke solution tailored to your product goals.</p>
        </div>
        <button
          onClick={onOpenContactModal}
          className="px-5 py-2 rounded-full text-xs font-semibold bg-pink-accent text-[#050507] hover:bg-pink-hover transition-colors shadow-md shadow-pink-accent/20 whitespace-nowrap"
        >
          Request Custom Build
        </button>
      </div>
    </section>
  );
};
