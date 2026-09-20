import React, { useState } from 'react';
import { X, Send, Mail, MapPin, CheckCircle } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export const ContactModal = ({ isOpen, onClose }) => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    service: 'Web Development',
    budget: '$2.5k - $5k',
    message: '',
  });

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-xl animate-fade-in"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
    >
      <div
        className="relative w-full max-w-xl rounded-3xl glass-card-elevated border border-white/15 p-6 sm:p-9 shadow-2xl shadow-black overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Ambient pink spotlight */}
        <div className="absolute -top-20 -right-20 w-60 h-60 rounded-full bg-pink-accent/15 blur-[80px] pointer-events-none" />

        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full text-gray-400 hover:text-white hover:bg-white/10 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-pink-accent"
          aria-label="Close dialog"
        >
          <X className="w-5 h-5" />
        </button>

        {!submitted ? (
          <div>
            <div className="mb-6">
              <span className="text-xs font-bold tracking-widest text-pink-accent uppercase">
                Let's Connect
              </span>
              <h3 id="modal-title" className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight mt-1">
                Start a New Project
              </h3>
              <p className="text-xs sm:text-sm text-gray-400 mt-1">
                Tell me about your product, timeline, or objectives.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-medium text-gray-300 mb-1">Your Name</label>
                  <input
                    type="text"
                    required
                    placeholder="Jane Doe"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-white/[0.04] border border-white/10 focus:border-pink-accent text-sm text-white focus:outline-none transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-xs font-medium text-gray-300 mb-1">Your Email</label>
                  <input
                    type="email"
                    required
                    placeholder="jane@example.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-white/[0.04] border border-white/10 focus:border-pink-accent text-sm text-white focus:outline-none transition-colors"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-medium text-gray-300 mb-1">Service Needed</label>
                  <select
                    value={formData.service}
                    onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-[#111116] border border-white/10 focus:border-pink-accent text-sm text-white focus:outline-none transition-colors"
                  >
                    <option value="Web Development">Web Development</option>
                    <option value="UI/UX Design">UI/UX Design</option>
                    <option value="Full-Stack Application">Full-Stack Application</option>
                    <option value="Website Redesign">Website Redesign</option>
                    <option value="Performance Audit">Performance Audit</option>
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-medium text-gray-300 mb-1">Target Budget</label>
                  <select
                    value={formData.budget}
                    onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-[#111116] border border-white/10 focus:border-pink-accent text-sm text-white focus:outline-none transition-colors"
                  >
                    <option value="$1.5k - $2.5k">$1,500 – $2,500</option>
                    <option value="$2.5k - $5k">$2,500 – $5,000</option>
                    <option value="$5k - $10k">$5,000 – $10,000</option>
                    <option value="$10k+">$10,000+</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-medium text-gray-300 mb-1">Project Details</label>
                <textarea
                  rows={3}
                  required
                  placeholder="Share a brief overview of what you're building..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-white/[0.04] border border-white/10 focus:border-pink-accent text-sm text-white focus:outline-none transition-colors resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full py-3 px-6 rounded-full bg-pink-accent hover:bg-pink-hover text-[#050507] font-bold text-sm flex items-center justify-center gap-2 transition-all shadow-lg shadow-pink-accent/25 hover:shadow-pink-accent/40"
              >
                <span>Send Project Inquiry</span>
                <Send className="w-4 h-4" />
              </button>
            </form>

            <div className="mt-6 pt-5 border-t border-white/[0.08] flex items-center justify-between text-xs text-gray-400">
              <a href={`mailto:${personalInfo.email}`} className="hover:text-pink-accent flex items-center gap-1.5">
                <Mail className="w-3.5 h-3.5" />
                <span>{personalInfo.email}</span>
              </a>
              <span className="flex items-center gap-1">
                <MapPin className="w-3.5 h-3.5 text-pink-accent" />
                <span>{personalInfo.location}</span>
              </span>
            </div>
          </div>
        ) : (
          <div className="text-center py-8">
            <div className="w-16 h-16 rounded-full bg-pink-accent/20 border border-pink-accent text-pink-accent flex items-center justify-center mx-auto mb-4">
              <CheckCircle className="w-8 h-8" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-2">Message Dispatched!</h3>
            <p className="text-sm text-gray-300 max-w-md mx-auto mb-6">
              Thank you for reaching out, {formData.name || 'there'}. I have received your project details and will reply within 24 hours.
            </p>
            <button
              onClick={() => {
                setSubmitted(false);
                onClose();
              }}
              className="px-6 py-2.5 rounded-full bg-pink-accent text-[#050507] font-bold text-xs"
            >
              Back to Portfolio
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
