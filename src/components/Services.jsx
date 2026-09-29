import React from 'react';

const SERVICES = [
  { icon: '✦', title: 'UI Engineering', desc: 'Pixel-perfect React interfaces built with clean components, responsive layouts, and attention to detail.', color: '#e98bab' },
  { icon: '◈', title: 'Responsive Websites', desc: 'Modern websites that look and work beautifully across desktops, tablets, and mobile devices.', color: '#b9a2ff' },
  { icon: '◎', title: 'Motion & Interaction', desc: 'Purposeful animations and smooth interactions that make web experiences feel engaging and polished.', color: '#fb8da0' },
  { icon: '⬡', title: 'Landing Pages', desc: 'Clean, focused landing pages designed to communicate ideas clearly and create a strong first impression.', color: '#c084fc' },
  { icon: '⊹', title: 'Website Redesign', desc: 'Refreshing existing websites with modern layouts, improved responsiveness, and a cleaner user experience.', color: '#f472b6' },
  { icon: '♡', title: 'Frontend Development', desc: 'Turning designs and ideas into functional web interfaces using React, JavaScript, Tailwind CSS, HTML, and CSS.', color: '#e879f9' },
];

export const Services = () => (
  <section id="services" className="py-12 sm:py-16 px-4 sm:px-6 relative z-10">
    <div className="max-w-6xl mx-auto">
      <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-12">
       
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
          What I <span className="text-gradient-pink italic">build.</span>
        </h2>
        <p className="text-sm sm:text-base text-gray-400 mt-3 max-w-2xl mx-auto leading-relaxed">
         From ideas to interfaces — I turn concepts into responsive, interactive, and thoughtful web experiences.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {SERVICES.map((service, index) => (
          <article
            key={service.title}
            className="group rounded-2xl glass-card-elevated border border-white/[0.08] p-6 sm:p-7 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
            style={{ transitionDelay: `${index * 60}ms` }}
          >
            <div aria-hidden="true" className="inline-block text-3xl mb-5 transition-transform duration-300 group-hover:scale-110" style={{ color: service.color }}>
              {service.icon}
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 transition-colors group-hover:text-pink-accent">{service.title}</h3>
            <p className="text-sm text-gray-400 leading-relaxed">{service.desc}</p>
          </article>
        ))}
      </div>
    </div>
  </section>
);

export default Services;
