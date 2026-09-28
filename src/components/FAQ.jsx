import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';
import { faqs } from '../data/portfolioData';
 
export const FAQ = () => {
  // Default first item open matching Screenshot 3
  const [openId, setOpenId] = useState('faq-1');

  const toggleFAQ = (id) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <section id="faq" className="py-10 sm:py-14 px-4 sm:px-6 max-w-4xl mx-auto relative z-10">
      {/* Header */}
      <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-10">
        <span className="text-xs font-bold tracking-widest text-pink-accent uppercase mb-3 inline-block">
          Curious About Working Together?
        </span>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
          Frequently Asked Questions
        </h2>
        <p className="text-sm sm:text-base text-gray-400 mt-3 font-normal leading-relaxed">
          Have a project in mind or want to know more about my process? Explore answers to some of the questions you may have before we start building something together.
        </p>
      </div>

      {/* Accordion List */}
      <div className="flex flex-col gap-3.5 sm:gap-4">
        {faqs.map((faq) => {
          const isOpen = openId === faq.id;

          return (
            <div
              key={faq.id}
              className={`rounded-2xl transition-all duration-300 overflow-hidden ${
                isOpen
                  ? 'bg-[#0d0d11] border border-pink-accent/40 shadow-lg shadow-pink-accent/5'
                  : 'bg-[#0d0d11]/60 border border-white/[0.06] hover:border-white/15'
              }`}
            >
              <button
                type="button"
                onClick={() => toggleFAQ(faq.id)}
                aria-expanded={isOpen}
                aria-controls={`faq-answer-${faq.id}`}
                className="w-full text-left px-5 sm:px-7 py-5 sm:py-6 flex items-center justify-between gap-4 focus:outline-none focus-visible:ring-2 focus-visible:ring-pink-accent"
              >
                <span
                  className={`text-base sm:text-lg font-bold transition-colors ${
                    isOpen ? 'text-pink-accent' : 'text-white'
                  }`}
                >
                  {faq.question}
                </span>

                <span
                  className={`w-7 h-7 sm:w-8 sm:h-8 rounded-full flex items-center justify-center shrink-0 transition-colors ${
                    isOpen
                      ? 'bg-pink-accent text-[#050507]'
                      : 'bg-white/[0.06] text-gray-400 group-hover:text-white'
                  }`}
                >
                  {isOpen ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                </span>
              </button>

              {/* Collapsible Answer */}
              <div
                id={`faq-answer-${faq.id}`}
                role="region"
                aria-labelledby={`faq-question-${faq.id}`}
                className={`transition-all duration-300 ease-in-out px-5 sm:px-7 ${
                  isOpen ? 'max-h-96 pb-6 opacity-100' : 'max-h-0 pb-0 opacity-0 pointer-events-none'
                }`}
              >
                <p className="text-xs sm:text-sm md:text-base text-gray-300 leading-relaxed font-normal pt-1 border-t border-white/[0.06]">
                  {faq.answer}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};
