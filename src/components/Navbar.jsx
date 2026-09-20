import React, { useState, useEffect } from 'react';
import { Mail, Menu, X } from 'lucide-react';
import { GithubIcon } from './Icons';
import { personalInfo } from '../data/portfolioData';


export const Navbar = ({ onOpenContactModal }) => {
  const [activeSection, setActiveSection] = useState('home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      const sections = ['home', 'about', 'skills', 'projects', 'faq', 'contact'];
      const scrollPosition = window.scrollY + 200;

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home', id: 'home' },
    { name: 'About', href: '#about', id: 'about' },
    { name: 'Services', href: '#skills', id: 'skills' },
    { name: 'Projects', href: '#projects', id: 'projects' },
    { name: 'Contact', href: '#contact', id: 'contact' },
  ];

  const handleNavClick = (e, href) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <header className="fixed top-5 left-0 right-0 z-50 flex justify-center px-4 sm:px-6 pointer-events-none">
        <nav
          className={`pointer-events-auto transition-all duration-300 ease-out flex items-center justify-between rounded-full glass-pill px-3.5 sm:px-5 py-2 sm:py-2.5 max-w-4xl w-full mx-auto ${
            scrolled ? 'shadow-2xl shadow-black/80 border-white/[0.12] bg-[#0d0d11]/90' : 'border-white/[0.08]'
          }`}
          aria-label="Main Navigation"
        >
          {/* Brand / Logo */}
          <a
            href="#home"
            onClick={(e) => handleNavClick(e, '#home')}
            className="flex items-center gap-2.5 group focus:outline-none focus-visible:ring-2 focus-visible:ring-pink-accent rounded-full p-1"
          >
            <div className="relative w-8 h-8 rounded-full overflow-hidden border border-pink-accent/40 shadow-sm shadow-pink-accent/20">
              <img
                src={personalInfo.profileImage}
                alt={personalInfo.name}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
              />
            </div>
            <span className="font-bold tracking-tight text-sm sm:text-base text-white group-hover:text-pink-accent transition-colors">
              {personalInfo.brandLogo}
            </span>
          </a>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center gap-1 bg-[#16161f]/60 border border-white/[0.05] rounded-full p-1">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <a
                  key={link.id}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className={`px-4 py-1.5 rounded-full text-xs font-medium transition-all duration-200 ease-out ${
                    isActive
                      ? 'bg-pink-accent text-[#050507] font-semibold shadow-md shadow-pink-accent/30'
                      : 'text-gray-300 hover:text-white hover:bg-white/[0.06]'
                  }`}
                >
                  {link.name}
                </a>
              );
            })}
          </div>

          {/* Desktop Right Quick Actions */}
          <div className="hidden md:flex items-center gap-3">
            <div className="h-4 w-[1px] bg-white/20" />
            <a
              href={personalInfo.socialLinks.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub Profile"
              className="p-1.5 text-gray-400 hover:text-white transition-colors hover:scale-110 focus:outline-none focus-visible:ring-2 focus-visible:ring-pink-accent rounded-full"
            >
              <GithubIcon className="w-4 h-4" />
            </a>
            <button
              onClick={onOpenContactModal}
              aria-label="Send Email"
              className="p-1.5 text-gray-400 hover:text-pink-accent transition-colors hover:scale-110 focus:outline-none focus-visible:ring-2 focus-visible:ring-pink-accent rounded-full"
            >
              <Mail className="w-4 h-4" />
            </button>
          </div>

          {/* Mobile Hamburger Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-gray-300 hover:text-white rounded-full focus:outline-none focus-visible:ring-2 focus-visible:ring-pink-accent"
            aria-expanded={mobileMenuOpen}
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5 text-pink-accent" /> : <Menu className="w-5 h-5" />}
          </button>
        </nav>
      </header>

      {/* Mobile Drawer Overlay */}
      {mobileMenuOpen && (
        <div
          className="fixed inset-0 z-40 bg-[#050507]/90 backdrop-blur-2xl flex flex-col justify-center items-center px-6 md:hidden animate-fade-in"
          onClick={() => setMobileMenuOpen(false)}
        >
          <div
            className="glass-card-elevated rounded-3xl p-6 w-full max-w-sm flex flex-col items-center gap-4 text-center border-white/10"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-pink-accent shadow-lg shadow-pink-accent/20 mb-2">
              <img src={personalInfo.profileImage} alt={personalInfo.name} className="w-full h-full object-cover" />
            </div>
            <p className="text-lg font-bold text-white">{personalInfo.name}</p>
            <p className="text-xs text-pink-accent -mt-3">{personalInfo.role}</p>

            <div className="w-full h-[1px] bg-white/10 my-2" />

            <div className="flex flex-col gap-2 w-full">
              {navLinks.map((link) => (
                <a
                  key={link.id}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className={`py-2.5 px-4 rounded-xl text-sm font-medium transition-colors ${
                    activeSection === link.id
                      ? 'bg-pink-accent text-[#050507] font-semibold'
                      : 'text-gray-300 hover:bg-white/5 hover:text-white'
                  }`}
                >
                  {link.name}
                </a>
              ))}
            </div>

            <div className="w-full h-[1px] bg-white/10 my-2" />

            <div className="flex items-center justify-center gap-4 w-full">
              <a
                href={personalInfo.socialLinks.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-white/5 rounded-full text-gray-300 hover:text-white hover:bg-white/10"
                aria-label="GitHub"
              >
                <GithubIcon className="w-5 h-5" />
              </a>
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenContactModal();
                }}
                className="flex-1 py-2.5 px-4 bg-pink-accent text-[#050507] font-semibold rounded-full text-sm shadow-md shadow-pink-accent/30 flex items-center justify-center gap-2"
              >
                <Mail className="w-4 h-4" />
                Let's Talk
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
