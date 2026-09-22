import React from 'react';
import { 
  Code2, 
  Layout, 
  Terminal, 
  GitBranch, 
  Sparkles,
  Layers,
  Cpu
} from 'lucide-react';
import { FigmaIcon } from './Icons';
import { skills, coreToolsList } from '../data/portfolioData';

export const Skills = () => {
  const getSkillIcon = (iconName) => {
    switch (iconName) {
      case 'Figma':
        return <FigmaIcon className="w-4 h-4 text-pink-accent" />;
      case 'React':
        return <Code2 className="w-4 h-4 text-pink-accent" />;
      case 'Layout':
        return <Layout className="w-4 h-4 text-pink-accent" />;
      case 'Terminal':
        return <Terminal className="w-4 h-4 text-pink-accent" />;
      case 'GitBranch':
        return <GitBranch className="w-4 h-4 text-pink-accent" />;
      case 'Sparkles':
        return <Sparkles className="w-4 h-4 text-pink-accent" />;
      default:
        return <Layers className="w-4 h-4 text-pink-accent" />;
    }
  };

  return (
    <section id="skills" className="py-10 sm:py-14 px-4 sm:px-6 max-w-6xl mx-auto relative z-10">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-12">
        <span className="text-xs font-bold tracking-widest text-pink-accent uppercase mb-3 inline-block">
          Capabilities &amp; Technologies
        </span>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
          Skills &amp; <span className="text-pink-accent">Expertise</span>
        </h2>
        <p className="text-sm sm:text-base text-gray-400 mt-3 font-normal max-w-2xl mx-auto leading-relaxed">
          I combine clean code, modern frontend frameworks, and intuitive user experiences to design websites that drive growth and delight users.
        </p>
      </div>

      {/* 6 Skill Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7 mb-16 sm:mb-20">
        {skills.map((skill) => {
          // Circular SVG parameters
          const radius = 22;
          const circumference = 2 * Math.PI * radius;
          const strokeDashoffset = circumference - (skill.percentage / 100) * circumference;

          return (
            <div
              key={skill.id}
              className="rounded-2xl sm:rounded-3xl glass-card-elevated border border-white/[0.08] hover:border-pink-accent/40 p-6 sm:p-7 flex flex-col justify-between transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-pink-accent/5 group"
            >
              <div>
                {/* Top Row: Icon + Category Badge and Circular Progress */}
                <div className="flex items-center justify-between gap-3 mb-4">
                  <div className="flex items-center gap-2">
                    <div className="p-1.5 rounded-lg bg-pink-accent/10 border border-pink-accent/20">
                      {getSkillIcon(skill.iconName)}
                    </div>
                    <span className="text-[10px] sm:text-[11px] font-bold tracking-wider uppercase text-pink-accent/90">
                      {skill.categoryBadge}
                    </span>
                  </div>

                  {/* Circular Gauge */}
                  <div className="relative flex items-center justify-center w-12 h-12 shrink-0">
                    <svg className="w-12 h-12 -rotate-90" viewBox="0 0 54 54">
                      {/* Background circle */}
                      <circle
                        cx="27"
                        cy="27"
                        r={radius}
                        stroke="rgba(255, 255, 255, 0.08)"
                        strokeWidth="3.5"
                        fill="transparent"
                      />
                      {/* Animated/filled pink circle */}
                      <circle
                        cx="27"
                        cy="27"
                        r={radius}
                        stroke="#e98bab"
                        strokeWidth="3.5"
                        strokeDasharray={circumference}
                        strokeDashoffset={strokeDashoffset}
                        strokeLinecap="round"
                        fill="transparent"
                        className="transition-all duration-1000 ease-out"
                      />
                    </svg>
                    <span className="absolute text-[11px] font-bold text-white font-mono">
                      {skill.percentage}%
                    </span>
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-lg sm:text-xl font-bold text-white mb-2 group-hover:text-pink-accent transition-colors">
                  {skill.title}
                </h3>

                {/* Description */}
                <p className="text-xs sm:text-sm text-gray-400 leading-relaxed font-normal mb-6">
                  {skill.description}
                </p>
              </div>

              {/* Bottom Proficiency Level Bar */}
              <div className="pt-4 border-t border-white/[0.06]">
                <div className="flex items-center justify-between text-xs mb-2">
                  <span className="text-gray-400 font-medium">Expertise Level</span>
                  <span className="text-pink-accent font-semibold">{skill.expertiseLevel}</span>
                </div>
                <div className="w-full h-1.5 rounded-full bg-white/[0.08] overflow-hidden">
                  <div
                    className="h-full rounded-full bg-gradient-to-r from-pink-muted to-pink-accent shadow-sm shadow-pink-accent/50 transition-all duration-1000 ease-out"
                    style={{ width: `${skill.percentage}%` }}
                  />
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* CORE TOOLS - Strip */}
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
