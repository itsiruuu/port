import React from 'react';
import { 
  Code2, 
  Layout, 
  Terminal, 
  GitBranch, 
  Sparkles,
  Cpu
} from 'lucide-react';
import { skills, coreToolsList } from '../data/portfolioData';

export const Skills = () => {
  const getCategoryIcon = (iconName) => {
    switch (iconName) {
      case 'Layout':
        return <Layout className="w-4 h-4 text-pink-accent" />;
      case 'Sparkles':
        return <Sparkles className="w-4 h-4 text-pink-accent" />;
      case 'Terminal':
        return <Terminal className="w-4 h-4 text-pink-accent" />;
      case 'GitBranch':
        return <GitBranch className="w-4 h-4 text-pink-accent" />;
      default:
        return <Code2 className="w-4 h-4 text-pink-accent" />;
    }
  };

  return (
    <section id="skills" className="py-12 sm:py-16 px-4 sm:px-6 max-w-6xl mx-auto relative z-10">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-12">
        <span className="text-xs font-bold tracking-widest text-pink-accent uppercase mb-3 inline-block">
          Technical Toolkit
        </span>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
          Skills &amp; <span className="text-pink-accent">Technologies</span>
        </h2>
        <p className="text-sm sm:text-base text-gray-400 mt-3 font-normal max-w-2xl mx-auto leading-relaxed">
          Technologies and tools I work with to build responsive, modern, and clean web interfaces.
        </p>
      </div>

      {/* Categorized Skills Grid - Simple honest cards with tags */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-7 mb-14 sm:mb-16">
        {skills.map((category) => (
          <div
            key={category.id}
            className="rounded-2xl sm:rounded-3xl glass-card-elevated border border-white/[0.08] hover:border-pink-accent/30 p-6 sm:p-7 flex flex-col justify-between transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-pink-accent/5 group"
          >
            <div>
              {/* Category Header */}
              <div className="flex items-center gap-3 mb-3">
                <div className="p-2 rounded-xl bg-pink-accent/10 border border-pink-accent/20">
                  {getCategoryIcon(category.iconName)}
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-white group-hover:text-pink-accent transition-colors">
                  {category.categoryTitle}
                </h3>
              </div>

              {/* 1-line honest description */}
              <p className="text-xs sm:text-sm text-gray-400 leading-relaxed font-normal mb-5">
                {category.description}
              </p>
            </div>

            {/* Skill Tags */}
            <div className="flex flex-wrap gap-2 pt-4 border-t border-white/[0.06]">
              {category.skillTags.map((tag) => (
                <span
                  key={tag}
                  className="px-3.5 py-1.5 rounded-xl bg-white/[0.04] border border-white/[0.08] text-xs font-medium text-gray-200 group-hover:border-pink-accent/30 hover:bg-pink-accent/10 hover:text-pink-accent transition-all duration-200"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Core Tools Strip */}
      <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8 pt-8 border-t border-white/[0.08] max-w-4xl mx-auto">
        <span className="text-xs font-bold tracking-wider text-gray-400 uppercase shrink-0">
          Core Tools —
        </span>

        <div className="flex items-center gap-4 sm:gap-6 flex-wrap justify-center">
          {coreToolsList.map((tool) => (
            <div
              key={tool.name}
              className="flex items-center gap-1.5 text-xs text-gray-400 hover:text-pink-accent transition-colors cursor-pointer group/tool"
            >
              <Cpu className="w-3.5 h-3.5 text-gray-500 group-hover/tool:text-pink-accent transition-colors" />
              <span className="font-medium tracking-wide">{tool.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
