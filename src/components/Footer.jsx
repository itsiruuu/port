import React from 'react';
import { ArrowUp, Mail } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';
import { personalInfo } from '../data/portfolioData';

export const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="w-full border-t border-white/[0.06] bg-[#050507] py-10 px-4 sm:px-6 relative z-10">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Brand */}
        <div className="flex items-center gap-3">
          <div className="w-7 h-7 rounded-full overflow-hidden border border-pink-accent/40 shadow-sm shadow-pink-accent/20">
            <img src={personalInfo.profileImage} alt="Irin Akter - React Frontend Developer" className="w-full h-full object-cover" />
          </div>
          <span className="font-bold tracking-tight text-white text-base">
            {personalInfo.brandLogo}
          </span>
        </div>

        {/* Navigation Links */}
        <nav className="flex items-center gap-5 sm:gap-7 flex-wrap justify-center text-xs font-medium text-gray-400">
          <a href="#home" className="hover:text-pink-accent transition-colors">Home</a>
          <a href="#about" className="hover:text-pink-accent transition-colors">About</a>
          <a href="#skills" className="hover:text-pink-accent transition-colors">Skills</a>
          <a href="#projects" className="hover:text-pink-accent transition-colors">Projects</a>
          <a href="#faq" className="hover:text-pink-accent transition-colors">FAQ</a>
          <a href="#contact" className="hover:text-pink-accent transition-colors">Contact</a>
        </nav>

        {/* Social Icons & Back to Top */}
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-3">
            {/* GitHub - always shown */}
            <a
              href={personalInfo.socialLinks?.github || "https://github.com/itsiruuu"}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="text-gray-400 hover:text-white transition-colors"
            >
              <GithubIcon className="w-4 h-4" />
            </a>

            {/* Email - always shown */}
            <a
              href={personalInfo.socialLinks?.email || `mailto:${personalInfo.email}`}
              aria-label="Email"
              className="text-gray-400 hover:text-pink-accent transition-colors"
            >
              <Mail className="w-4 h-4" />
            </a>

            {/* LinkedIn - only when personalInfo.linkedinUrl is non-empty */}
            {personalInfo.linkedinUrl && (
              <a
                href={personalInfo.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <LinkedinIcon className="w-4 h-4" />
              </a>
            )}
          </div>

          <button
            onClick={scrollToTop}
            className="p-2 rounded-full bg-white/[0.04] hover:bg-pink-accent hover:text-[#050507] text-gray-400 transition-all border border-white/10"
            aria-label="Scroll to top"
            title="Scroll to top"
          >
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
