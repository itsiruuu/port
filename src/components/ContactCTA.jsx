import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { GithubIcon, LinkedinIcon, InstagramIcon, BehanceIcon } from './Icons';
import { personalInfo } from '../data/portfolioData';

// =========================================================================
// CONTACT CTA COMPONENT
// Large glass card with call to action button & 4-column footer directory.
// =========================================================================

export const ContactCTA = ({ onOpenContactModal }) => {
  return (
    <section id="contact" className="py-10 sm:py-14 px-4 sm:px-6 max-w-6xl mx-auto relative z-10">
      {/* Large Glass Card Container */}
      <div className="relative rounded-[32px] sm:rounded-[44px] glass-card-elevated border border-white/[0.1] p-6 sm:p-10 md:p-14 overflow-hidden shadow-2xl shadow-black/90">
        {/* Ambient pink spotlight background */}
        <div className="absolute -bottom-32 -right-32 w-96 h-96 rounded-full bg-pink-accent/15 blur-[120px] pointer-events-none" />
        <div className="absolute -top-32 -left-32 w-80 h-80 rounded-full bg-pink-lavender/10 blur-[100px] pointer-events-none" />

        {/* Top Header Row with Headline & Pink Button */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-8 pb-8 sm:pb-12 border-b border-white/[0.08] relative z-10">
          <div>
            <h2 className="text-3xl sm:text-5xl md:text-6xl font-extrabold text-white tracking-tight leading-[1.1]">
              Ready to make your <br />
              <span className="text-white">website...</span>
            </h2>
            <p className="text-xs sm:text-sm text-gray-400 mt-3 font-normal max-w-md">
              Have a product, project, or brand vision in mind? Let's engineer something memorable together.
            </p>
          </div>

          <button
            onClick={onOpenContactModal}
            className="self-start md:self-center inline-flex items-center gap-2 px-8 sm:px-9 py-4 rounded-full bg-pink-accent hover:bg-pink-hover text-[#050507] font-bold text-sm sm:text-base tracking-wide transition-all duration-300 shadow-xl shadow-pink-accent/30 hover:shadow-pink-accent/50 hover:scale-105 active:scale-95 shrink-0 group"
          >
            <span>Ask for a quote</span>
            <ArrowUpRight className="w-5 h-5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </button>
        </div>

        {/* Bottom 4-Column Directory Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10 pt-8 sm:pt-10 relative z-10">
          {/* Column 1: Navigation */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-wider text-gray-400 mb-4">
              Navigation
            </h3>
            <ul className="space-y-2.5 text-xs sm:text-sm text-gray-300">
              <li>
                <a href="#home" className="hover:text-pink-accent transition-colors">Home</a>
              </li>
              <li>
                <a href="#about" className="hover:text-pink-accent transition-colors">About us</a>
              </li>
              <li>
                <a href="#projects" className="hover:text-pink-accent transition-colors">Projects</a>
              </li>
              <li>
                <a href="#skills" className="hover:text-pink-accent transition-colors">Services</a>
              </li>
              <li>
                <a href="#faq" className="hover:text-pink-accent transition-colors">FAQ</a>
              </li>
            </ul>
          </div>

          {/* Column 2: Services */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-wider text-gray-400 mb-4">
              Services
            </h3>
            <ul className="space-y-2.5 text-xs sm:text-sm text-gray-300">
              <li className="hover:text-pink-accent transition-colors cursor-pointer">Web design</li>
              <li className="hover:text-pink-accent transition-colors cursor-pointer">UI design</li>
              <li className="hover:text-pink-accent transition-colors cursor-pointer">Web Development</li>
              <li className="hover:text-pink-accent transition-colors cursor-pointer">UX Research</li>
              <li className="hover:text-pink-accent transition-colors cursor-pointer">Performance Tuning</li>
            </ul>
          </div>

          {/* Column 3: Contact on */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-wider text-gray-400 mb-4">
              Contact on
            </h3>
            <div className="space-y-2.5 text-xs sm:text-sm text-gray-300">
              <p>
                <a
                  href={personalInfo.socialLinks.email}
                  className="font-semibold text-white hover:text-pink-accent transition-colors break-all"
                >
                  {personalInfo.email}
                </a>
              </p>
              <p>
                <a
                  href={`tel:${personalInfo.phone.replace(/[^0-9+]/g, '')}`}
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  {personalInfo.phone}
                </a>
              </p>
              <p className="text-gray-400">
                {personalInfo.location}
              </p>
            </div>
          </div>

          {/* Column 4: Social Badges */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-wider text-gray-400 mb-4">
              Follow &amp; Connect
            </h3>
            <div className="flex items-center gap-3">
              <a
                href={personalInfo.socialLinks.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-[#0077B5]/20 hover:bg-[#0077B5] border border-[#0077B5]/40 text-white flex items-center justify-center transition-all duration-300 hover:scale-110 shadow-md"
                aria-label="LinkedIn"
              >
                <LinkedinIcon className="w-4 h-4" />
              </a>

              <a
                href={personalInfo.socialLinks.github}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/25 border border-white/20 text-white flex items-center justify-center transition-all duration-300 hover:scale-110 shadow-md"
                aria-label="GitHub"
              >
                <GithubIcon className="w-4 h-4" />
              </a>

              <a
                href={personalInfo.socialLinks.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-[#E1306C]/20 hover:bg-[#E1306C] border border-[#E1306C]/40 text-white flex items-center justify-center transition-all duration-300 hover:scale-110 shadow-md"
                aria-label="Instagram"
              >
                <InstagramIcon className="w-4 h-4" />
              </a>

              <a
                href={personalInfo.socialLinks.behance}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-pink-accent/20 hover:bg-pink-accent border border-pink-accent/40 text-white hover:text-[#050507] flex items-center justify-center transition-all duration-300 hover:scale-110 shadow-md"
                aria-label="Behance"
              >
                <BehanceIcon className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Copyright Banner */}
        <div className="mt-14 pt-8 border-t border-white/[0.06] text-center text-[11px] sm:text-xs text-gray-500 font-medium relative z-10">
          &copy; 2026 Design By &mdash; <span className="text-gray-300 font-semibold">{personalInfo.name.toUpperCase()}</span>. All rights reserved.
        </div>
      </div>
    </section>
  );
};
