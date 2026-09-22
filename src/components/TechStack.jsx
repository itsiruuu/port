import React from 'react';
import ScrollVelocity from './ScrollVelocity';

export const TechStack = () => {
  const icons = [
    {
      name: "VS Code",
      element: (
        <div className="w-10 h-10 rounded-lg bg-[#FF7700] flex items-center justify-center shadow-lg shadow-orange-500/20">
          <span className="font-extrabold text-white text-base tracking-tighter select-none">VS</span>
        </div>
      )
    },
    {
      name: "Elementor",
      element: (
        <div className="w-10 h-10 rounded-full bg-[#92003B] flex items-center justify-center shadow-lg shadow-pink-900/30">
          <svg viewBox="0 0 24 24" className="w-5 h-5 fill-white" aria-hidden="true">
            <rect x="7" y="6" width="2.5" height="12" rx="0.5" />
            <rect x="12" y="6" width="5.5" height="2.5" rx="0.5" />
            <rect x="12" y="10.75" width="5.5" height="2.5" rx="0.5" />
            <rect x="12" y="15.5" width="5.5" height="2.5" rx="0.5" />
          </svg>
        </div>
      )
    },
    {
      name: "Git",
      element: (
        <div className="w-9 h-9 bg-[#F05032] rounded-md rotate-45 flex items-center justify-center shadow-lg shadow-red-500/20">
          <div className="-rotate-45 flex items-center justify-center">
            <svg viewBox="0 0 24 24" className="w-5 h-5 fill-white" aria-hidden="true">
              <path d="M2.6 10.59L8.38 4.8a2.53 2.53 0 0 1 3.58 0l1.19 1.19-2.26 2.26a1.9 1.9 0 0 0-.74-.15 1.9 1.9 0 0 0-1.89 1.9 1.9 1.9 0 0 0 .52 1.3l-2.07 2.07a1.9 1.9 0 0 0-1.3-.52 1.9 1.9 0 0 0-1.9 1.9 1.9 1.9 0 0 0 1.9 1.9 1.9 1.9 0 0 0 1.9-1.9c0-.49-.19-.94-.5-1.28l2.05-2.05c.34.31.79.5 1.28.5.83 0 1.53-.54 1.79-1.29l2.42.7c-.01.12-.03.24-.03.37a1.9 1.9 0 0 0 1.9 1.9 1.9 1.9 0 0 0 1.9-1.9 1.9 1.9 0 0 0-1.9-1.9c-.49 0-.94.19-1.28.5l-2.42-.7a1.89 1.89 0 0 0-.39-.9l2.25-2.25 7.91 7.91a2.53 2.53 0 0 1 0 3.58l-5.78 5.78a2.53 2.53 0 0 1-3.58 0L2.6 14.17a2.53 2.53 0 0 1 0-3.58z"/>
            </svg>
          </div>
        </div>
      )
    },
    {
      name: "WordPress",
      element: (
        <div className="w-10 h-10 rounded-full flex items-center justify-center">
          <svg viewBox="0 0 24 24" className="w-9 h-9 fill-[#0073AA]" aria-hidden="true">
            <path d="M12 2C6.477 2 2 6.477 2 12c0 4.14 2.52 7.69 6.11 9.21L4.69 11.83C4.24 10.6 4 9.33 4 8.01 4 4.7 6.7 2 10 2c.7 0 1.38.12 2 .34V2zm0 20c-1.35 0-2.63-.27-3.8-.75l4.3-12.49 4.3 12.49c-1.17.48-2.45.75-3.8.75zm8.89-8.79l-3.42-9.92C19.48 7.31 22 10.36 22 14c0 1.81-.6 3.49-1.61 4.85l-1.5-4.64z"/>
          </svg>
        </div>
      )
    },
    {
      name: "HTML5",
      element: (
        <div className="w-9 h-10 flex items-center justify-center">
          <svg viewBox="0 0 24 24" className="w-9 h-9" aria-hidden="true">
            <path fill="#E34F26" d="M1.5 0h21l-1.91 21.563L11.977 24l-8.564-2.438L1.5 0z"/>
            <path fill="#EF652A" d="M12 22l7.15-2.04 1.63-17.96H12v20z"/>
            <path fill="#EBEBEB" d="M12 9.75H8.53l-.23-2.72H12V4.3H5.35l.71 8.17H12v-2.72zm0 7.62l-2.57-.7-.16-1.85H7.1l.31 3.74 4.59 1.27v-2.46z"/>
            <path fill="#FFFFFF" d="M12 9.75h3.63l-.34 3.89-3.29.9V17l4.56-1.27.63-7.01h-5.19V4.3h7.03l-.24 2.73H12v2.72z"/>
          </svg>
        </div>
      )
    },
    {
      name: "Figma",
      element: (
        <div className="w-7 h-10 flex items-center justify-center">
          <svg viewBox="0 0 38 57" className="w-7 h-10 fill-none" aria-hidden="true">
            <path d="M19 28.5a9.5 9.5 0 1 1 19 0 9.5 9.5 0 0 1-19 0z" fill="#1ABCFE"/>
            <path d="M0 47.5A9.5 9.5 0 0 1 9.5 38H19v9.5a9.5 9.5 0 1 1-19 0z" fill="#0ACF83"/>
            <path d="M19 0v19h9.5a9.5 9.5 0 1 0 0-19H19z" fill="#FF7262"/>
            <path d="M0 9.5A9.5 9.5 0 0 0 9.5 19H19V0H9.5A9.5 9.5 0 0 0 0 9.5z" fill="#F24E1E"/>
            <path d="M0 28.5A9.5 9.5 0 0 0 9.5 38H19V19H9.5A9.5 9.5 0 0 0 0 28.5z" fill="#A259FF"/>
          </svg>
        </div>
      )
    },
    {
      name: "React",
      element: (
        <div className="w-10 h-10 rounded-xl bg-[#161D2B] border border-[#20293D] flex items-center justify-center p-1.5 shadow-lg shadow-cyan-500/10">
          <svg viewBox="0 0 24 24" className="w-6 h-6 text-[#61DAFB] fill-current" aria-hidden="true">
            <circle cx="12" cy="12" r="2.2" />
            <path d="M12 4.5C6.75 4.5 2.5 7.86 2.5 12c0 4.14 4.25 7.5 9.5 7.5s9.5-3.36 9.5-7.5c0-4.14-4.25-7.5-9.5-7.5zm0 13c-4.14 0-7.5-2.46-7.5-5.5S7.86 6.5 12 6.5s7.5 2.46 7.5 5.5-3.36 5.5-7.5 5.5z" opacity="0.6"/>
            <path d="M5.5 7.68c-2.07 3.59-1.07 8.35 2.24 10.63 3.3 2.28 7.66 1.25 9.73-2.34 2.07-3.59 1.07-8.35-2.24-10.63-3.31-2.28-7.66-1.25-9.73 2.34z" opacity="0.6"/>
            <path d="M18.5 7.68c2.07 3.59 1.07 8.35-2.24 10.63-3.3 2.28-7.66 1.25-9.73-2.34-2.07-3.59-1.07-8.35 2.24-10.63 3.31-2.28 7.66-1.25 9.73 2.34z" opacity="0.6"/>
          </svg>
        </div>
      )
    },
    {
      name: "CSS3",
      element: (
        <div className="w-9 h-10 flex items-center justify-center">
          <svg viewBox="0 0 24 24" className="w-9 h-9" aria-hidden="true">
            <path fill="#1572B6" d="M1.5 0h21l-1.91 21.563L11.977 24l-8.564-2.438L1.5 0z"/>
            <path fill="#33A9DC" d="M12 22l7.15-2.04 1.63-17.96H12v20z"/>
            <path fill="#EBEBEB" d="M12 9.75H6.78l-.24-2.72H12V4.3H4.1l.71 8.17H12v-2.72zm0 7.62l-2.57-.7-.16-1.85H6.93l.31 3.74 4.76 1.27v-2.46z"/>
            <path fill="#FFFFFF" d="M12 9.75h5.45l-.47 5.25-4.98 1.34v2.46l7.15-1.98.85-9.77H12v2.7z"/>
          </svg>
        </div>
      )
    },
    {
      name: "JavaScript",
      element: (
        <div className="w-10 h-10 rounded-md bg-[#F7DF1E] flex items-end justify-end p-1 shadow-lg shadow-yellow-500/20">
          <span className="font-extrabold text-black text-sm tracking-tight leading-none select-none">JS</span>
        </div>
      )
    },
    {
      name: "Terminal",
      element: (
        <div className="w-10 h-10 flex items-center justify-center">
          <svg viewBox="0 0 24 24" className="w-8 h-8" fill="none" aria-hidden="true">
            <path d="M4 6L11 12L4 18" stroke="#1473E6" strokeWidth="3.2" strokeLinecap="round" strokeLinejoin="round"/>
            <line x1="13" y1="18" x2="20" y2="18" stroke="url(#cyanPurpleGrad)" strokeWidth="3.2" strokeLinecap="round"/>
            <defs>
              <linearGradient id="cyanPurpleGrad" x1="13" y1="18" x2="20" y2="18" gradientUnits="userSpaceOnUse">
                <stop stopColor="#00E5FF" />
                <stop offset="1" stopColor="#B300FF" />
              </linearGradient>
            </defs>
          </svg>
        </div>
      )
    },
    {
      name: "Webflow",
      element: (
        <div className="w-10 h-10 rounded-xl bg-[#2952E3] flex items-center justify-center p-2 shadow-lg shadow-blue-500/30">
          <svg viewBox="0 0 24 24" className="w-5 h-5 fill-white" aria-hidden="true">
            <path d="M17.85 4.5l-3.3 9.4-2.8-9.4h-3.4l-3.3 9.4-3.1-9.4H.1l4.8 14.9h3.6l3.3-9.5 3.3 9.5h3.6l4.8-14.9h-1.65z"/>
          </svg>
        </div>
      )
    }
  ];

  return (
    <div className="w-full mx-auto mb-8 sm:mb-12 relative z-10 overflow-hidden py-3">
      {/* Subtle edge fade overlays for infinite seamless marquee */}
      <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-16 sm:w-28 bg-gradient-to-r from-[#050507] to-transparent z-20" />
      <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-16 sm:w-28 bg-gradient-to-l from-[#050507] to-transparent z-20" />

      <ScrollVelocity
        texts={[
          <div className="inline-flex items-center gap-8 sm:gap-12 pr-8 sm:pr-12 py-1">
            {icons.map((tech) => (
              <div
                key={tech.name}
                className="group relative flex items-center justify-center hover:scale-125 transition-transform duration-300 cursor-pointer cursor-target shrink-0"
                title={tech.name}
              >
                {tech.element}

                {/* Hover Tooltip */}
                <span className="absolute -top-9 px-2 py-0.5 rounded text-[10px] font-medium tracking-wide bg-[#111116] border border-white/10 text-gray-200 opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none whitespace-nowrap shadow-md z-30">
                  {tech.name}
                </span>
              </div>
            ))}
          </div>
        ]}
        velocity={50}
        numCopies={8}
        className="inline-flex items-center"
      />
    </div>
  );
};

export default TechStack;
