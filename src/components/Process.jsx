import React from 'react';
import { ArrowRight, Code2, Palette, Search, Sparkles } from 'lucide-react';
import { processData } from '../data/portfolioData';

const iconMap = {
  search: Search,
  palette: Palette,
  code: Code2,
  sparkles: Sparkles,
};

export const Process = () => (
  <section id="process" className="relative z-10 py-12 sm:py-16 px-4 sm:px-6 border-b border-white/[0.08]">
    <div className="max-w-6xl mx-auto">
      <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-12">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
          How I <span className="text-gradient-pink italic">Build</span>
        </h2>
        <p className="text-sm sm:text-base text-gray-400 mt-3 max-w-md mx-auto leading-relaxed">
         A structured yet thoughtful approach to turning ideas into polished digital experiences.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 relative">
        {processData.map((item, index) => {
          const Icon = iconMap[item.icon] || Sparkles;
          return (
            <article
              key={item.step}
              className="group relative glass-card-elevated rounded-2xl p-6 sm:p-7 transition-all duration-300 hover:-translate-y-1 hover:border-pink-accent/30 hover:shadow-xl hover:shadow-pink-accent/5"
            >
              <div className="flex items-center justify-between mb-5">
                <span className="text-xl font-bold text-pink-accent/60 group-hover:text-pink-accent transition-colors">
                  {item.step}
                </span>
                <div className="w-10 h-10 rounded-full bg-pink-accent/10 flex items-center justify-center text-pink-accent border border-pink-accent/20 group-hover:scale-110 transition-transform duration-200">
                  <Icon size={18} aria-hidden="true" />
                </div>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
              <p className="text-xs sm:text-sm text-gray-400 leading-relaxed">{item.description}</p>
              {index < processData.length - 1 && (
                <ArrowRight
                  size={16}
                  aria-hidden="true"
                  className="hidden lg:block absolute -right-3 top-1/2 -translate-y-1/2 z-20 text-pink-accent/50"
                />
              )}
            </article>
          );
        })}
      </div>
    </div>
  </section>
);

export default Process;
