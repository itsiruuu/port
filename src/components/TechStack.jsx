import React from 'react';

export const TechStack = () => {
  const icons = [
    {
      name: "VS Code",
      color: "#007ACC",
      svg: (
        <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current" aria-hidden="true">
          <path d="M23.15 2.587L18.21.21a1.494 1.494 0 0 0-1.705.29l-9.46 8.63-4.12-3.128a.999.999 0 0 0-1.276.057L.327 7.276a1 1 0 0 0 0 1.448l3.41 3.276-3.41 3.276a1 1 0 0 0 0 1.448l1.322 1.217a1 1 0 0 0 1.276.057l4.12-3.128 9.46 8.63a1.492 1.492 0 0 0 1.704.29l4.94-2.377A1.5 1.5 0 0 0 24 19.986V4.014a1.5 1.5 0 0 0-.85-1.427zM18 16.5l-6-4.5 6-4.5v9z"/>
        </svg>
      )
    },
    {
      name: "Git",
      color: "#F05032",
      svg: (
        <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current" aria-hidden="true">
          <path d="M2.6 10.59L8.38 4.8a2.53 2.53 0 0 1 3.58 0l1.19 1.19-2.26 2.26a1.9 1.9 0 0 0-.74-.15 1.9 1.9 0 0 0-1.89 1.9 1.9 1.9 0 0 0 .52 1.3l-2.07 2.07a1.9 1.9 0 0 0-1.3-.52 1.9 1.9 0 0 0-1.9 1.9 1.9 1.9 0 0 0 1.9 1.9 1.9 1.9 0 0 0 1.9-1.9c0-.49-.19-.94-.5-1.28l2.05-2.05c.34.31.79.5 1.28.5.83 0 1.53-.54 1.79-1.29l2.42.7c-.01.12-.03.24-.03.37a1.9 1.9 0 0 0 1.9 1.9 1.9 1.9 0 0 0 1.9-1.9 1.9 1.9 0 0 0-1.9-1.9c-.49 0-.94.19-1.28.5l-2.42-.7a1.89 1.89 0 0 0-.39-.9l2.25-2.25 7.91 7.91a2.53 2.53 0 0 1 0 3.58l-5.78 5.78a2.53 2.53 0 0 1-3.58 0L2.6 14.17a2.53 2.53 0 0 1 0-3.58z"/>
        </svg>
      )
    },
    {
      name: "WordPress",
      color: "#21759B",
      svg: (
        <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current" aria-hidden="true">
          <path d="M12 2C6.477 2 2 6.477 2 12c0 4.14 2.52 7.69 6.11 9.21L4.69 11.83C4.24 10.6 4 9.33 4 8.01 4 4.7 6.7 2 10 2c.7 0 1.38.12 2 .34V2zm0 20c-1.35 0-2.63-.27-3.8-.75l4.3-12.49 4.3 12.49c-1.17.48-2.45.75-3.8.75zm8.89-8.79l-3.42-9.92C19.48 7.31 22 10.36 22 14c0 1.81-.6 3.49-1.61 4.85l-1.5-4.64z"/>
        </svg>
      )
    },
    {
      name: "HTML5",
      color: "#E34F26",
      svg: (
        <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current" aria-hidden="true">
          <path d="M1.5 0h21l-1.91 21.563L11.977 24l-8.564-2.438L1.5 0zm7.031 9.75l-.232-2.718 10.059-.002.24-2.73H5.352l.71 8.168h8.847l-.366 4.156-2.566.694-2.57-.696-.164-1.848H7.1l.307 3.738 4.57 1.267 4.562-1.267.625-7.009H8.531z"/>
        </svg>
      )
    },
    {
      name: "Figma",
      color: "#F24E1E",
      svg: (
        <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current" aria-hidden="true">
          <path d="M12 12a3 3 0 1 1 6 0 3 3 0 0 1-6 0zm-6 6a3 3 0 0 1 3-3h3v3a3 3 0 0 1-6 0zm0-6a3 3 0 0 1 3-3h3v6H9a3 3 0 0 1-3-3zm0-6a3 3 0 0 1 3-3h3v6H9a3 3 0 0 1-3-3zm6-3h3a3 3 0 0 1 0 6h-3V3z"/>
        </svg>
      )
    },
    {
      name: "React",
      color: "#61DAFB",
      svg: (
        <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current" aria-hidden="true">
          <circle cx="12" cy="12" r="2.2" />
          <path d="M12 4.5C6.75 4.5 2.5 7.86 2.5 12c0 4.14 4.25 7.5 9.5 7.5s9.5-3.36 9.5-7.5c0-4.14-4.25-7.5-9.5-7.5zm0 13c-4.14 0-7.5-2.46-7.5-5.5S7.86 6.5 12 6.5s7.5 2.46 7.5 5.5-3.36 5.5-7.5 5.5z" />
          <path d="M5.5 7.68c-2.07 3.59-1.07 8.35 2.24 10.63 3.3 2.28 7.66 1.25 9.73-2.34 2.07-3.59 1.07-8.35-2.24-10.63-3.31-2.28-7.66-1.25-9.73 2.34z" opacity="0.6"/>
        </svg>
      )
    },
    {
      name: "CSS3",
      color: "#1572B6",
      svg: (
        <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current" aria-hidden="true">
          <path d="M1.5 0h21l-1.91 21.563L11.977 24l-8.564-2.438L1.5 0zm15.72 6.422H6.78l.24 2.719h8.847l-.366 4.156-3.524.954-3.528-.954-.22-2.497H5.502l.427 4.836 6.048 1.678 6.04-1.678.853-9.584.05-.63H17.22z"/>
        </svg>
      )
    },
    {
      name: "JavaScript",
      color: "#F7DF1E",
      svg: (
        <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current" aria-hidden="true">
          <path d="M0 0h24v24H0V0z"/>
          <path fill="#050507" d="M16.5 18.5c-.7.9-1.6 1.4-2.8 1.4-2.4 0-3.6-1.4-3.6-3.8v-.2h2.5v.2c0 1.2.5 1.8 1.4 1.8.6 0 1.1-.3 1.3-.8.3-.5.3-1.8.3-2.7V6h2.5v8.5c0 1.7-.3 3.1-1.6 4zm-7.6-.2c-1 1-2.3 1.6-3.8 1.6-3.2 0-4.9-2-4.9-4.7 0-3 1.9-4.8 4.7-4.8 1.5 0 2.7.5 3.5 1.5l-1.7 1.4c-.5-.6-1.1-.9-1.8-.9-1.4 0-2.2.9-2.2 2.7 0 1.7.8 2.7 2.3 2.7.7 0 1.3-.3 1.8-.8l2.1 1.3z"/>
        </svg>
      )
    },
    {
      name: "Tailwind CSS",
      color: "#06B6D4",
      svg: (
        <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current" aria-hidden="true">
          <path d="M12.001 4.8c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C13.666 10.618 15.027 12 18.001 12c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C16.337 6.182 14.975 4.8 12.001 4.8zm-6 7.2c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624 1.177 1.194 2.538 2.576 5.512 2.576 3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C10.337 13.382 8.975 12 6.001 12z"/>
        </svg>
      )
    },
    {
      name: "Webflow",
      color: "#4353FF",
      svg: (
        <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current" aria-hidden="true">
          <path d="M17.85 4.5l-3.3 9.4-2.8-9.4h-3.4l-3.3 9.4-3.1-9.4H.1l4.8 14.9h3.6l3.3-9.5 3.3 9.5h3.6l4.8-14.9h-1.65z"/>
        </svg>
      )
    }
  ];

  return (
    <div className="w-full max-w-4xl mx-auto px-4 sm:px-6 mb-24 sm:mb-32 relative z-10">
      <div className="flex items-center justify-center gap-3 sm:gap-5 flex-wrap py-3 sm:py-4 px-4 sm:px-6 rounded-2xl glass-card border border-white/[0.06] shadow-xl shadow-black/40">
        {icons.map((tech) => (
          <div
            key={tech.name}
            className="group relative flex items-center justify-center w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-white/[0.03] hover:bg-white/[0.08] border border-white/[0.05] hover:border-pink-accent/40 transition-all duration-300 hover:scale-110 hover:-translate-y-1 cursor-pointer"
            title={tech.name}
          >
            <div 
              className="transition-colors duration-300 group-hover:drop-shadow-[0_0_8px_rgba(233,139,171,0.5)]"
              style={{ color: tech.color }}
            >
              {tech.svg}
            </div>

            {/* Hover Tooltip */}
            <span className="absolute -top-8 px-2 py-0.5 rounded text-[10px] font-medium tracking-wide bg-[#111116] border border-white/10 text-gray-200 opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none whitespace-nowrap shadow-md">
              {tech.name}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};
