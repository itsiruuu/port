import React, { useState } from 'react';
import { X, Send, Mail, MapPin, CheckCircle } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export const ContactModal = ({ isOpen, onClose }) => {
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);
  const [error, setError] = useState('');

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    service: 'Frontend Development',
    budget: '$300 - $700',
    message: '',
  });

  if (!isOpen) return null;

  const handleSubmit = async (e) => {
    e.preventDefault();

    setSending(true);
    setError('');

    try {
      const response = await fetch('https://formspree.io/f/xnpnooro', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          service: formData.service,
          budget: formData.budget,
          message: formData.message,
        }),
      });

      if (response.ok) {
        setSubmitted(true);

        setFormData({
          name: '',
          email: '',
          service: 'Frontend Development',
          budget: '$300 - $700',
          message: '',
        });
      } else {
        const data = await response.json();

        if (data.errors) {
          setError(
            data.errors.map((error) => error.message).join(', ')
          );
        } else {
          setError('Something went wrong. Please try again.');
        }
      }
    } catch (error) {
      setError(
        'Unable to send your message. Please check your internet connection and try again.'
      );
    } finally {
      setSending(false);
    }
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
            {/* Heading */}
            <div className="mb-6">
              <span className="text-xs font-bold tracking-widest text-pink-accent uppercase">
                Let's Work Together
              </span>

              <h3
                id="modal-title"
                className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight mt-1"
              >
                Have a Project in Mind?
              </h3>

              <p className="text-xs sm:text-sm text-gray-400 mt-1">
                Tell me about your idea, and let's create something great
                together.
              </p>
            </div>

            {/* Contact Form */}
            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Name & Email */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-medium text-gray-300 mb-1">
                    Your Name
                  </label>

                  <input
                    type="text"
                    name="name"
                    required
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        name: e.target.value,
                      })
                    }
                    className="w-full px-3.5 py-2.5 rounded-xl bg-white/[0.04] border border-white/10 focus:border-pink-accent text-sm text-white focus:outline-none transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs font-medium text-gray-300 mb-1">
                    Your Email
                  </label>

                  <input
                    type="email"
                    name="email"
                    required
                    placeholder="you@example.com"
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        email: e.target.value,
                      })
                    }
                    className="w-full px-3.5 py-2.5 rounded-xl bg-white/[0.04] border border-white/10 focus:border-pink-accent text-sm text-white focus:outline-none transition-colors"
                  />
                </div>
              </div>

              {/* Service & Budget */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-medium text-gray-300 mb-1">
                    Service Needed
                  </label>

                  <select
                    name="service"
                    value={formData.service}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        service: e.target.value,
                      })
                    }
                    className="w-full px-3.5 py-2.5 rounded-xl bg-[#111116] border border-white/10 focus:border-pink-accent text-sm text-white focus:outline-none transition-colors"
                  >
                    <option value="Frontend Development">
                      Frontend Development
                    </option>

                    <option value="React Website">
                      React Website
                    </option>

                    <option value="Responsive Website">
                      Responsive Website
                    </option>

                    <option value="Website Redesign">
                      Website Redesign
                    </option>

                    <option value="Landing Page">
                      Landing Page
                    </option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-medium text-gray-300 mb-1">
                    Target Budget
                  </label>

                  <select
                    name="budget"
                    value={formData.budget}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        budget: e.target.value,
                      })
                    }
                    className="w-full px-3.5 py-2.5 rounded-xl bg-[#111116] border border-white/10 focus:border-pink-accent text-sm text-white focus:outline-none transition-colors"
                  >
                    <option value="$150 - $300">
                      $150 – $300
                    </option>

                    <option value="$300 - $700">
                      $300 – $700
                    </option>

                    <option value="$700 - $1.5k">
                      $700 – $1,500
                    </option>

                    <option value="$1.5k+">
                      $1,500+
                    </option>
                  </select>
                </div>
              </div>

              {/* Project Details */}
              <div>
                <label className="block text-xs font-medium text-gray-300 mb-1">
                  Project Details
                </label>

                <textarea
                  name="message"
                  rows={4}
                  required
                  placeholder="Tell me about your project, goals, required features, or design ideas..."
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      message: e.target.value,
                    })
                  }
                  className="w-full px-3.5 py-2.5 rounded-xl bg-white/[0.04] border border-white/10 focus:border-pink-accent text-sm text-white focus:outline-none transition-colors resize-none"
                />
              </div>

              {/* Error Message */}
              {error && (
                <div className="rounded-xl border border-red-500/20 bg-red-500/10 px-4 py-3 text-xs text-red-300">
                  {error}
                </div>
              )}

              {/* Submit Button */}
              <button
                type="submit"
                disabled={sending}
                className="w-full py-3 px-6 rounded-full bg-pink-accent hover:bg-pink-hover disabled:opacity-60 disabled:cursor-not-allowed text-[#050507] font-bold text-sm flex items-center justify-center gap-2 transition-all shadow-lg shadow-pink-accent/25 hover:shadow-pink-accent/40"
              >
                {sending ? (
                  <>
                    <span>Sending...</span>
                  </>
                ) : (
                  <>
                    <span>Send Message</span>
                    <Send className="w-4 h-4" />
                  </>
                )}
              </button>
            </form>

            {/* Contact Info */}
            <div className="mt-6 pt-5 border-t border-white/[0.08] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs text-gray-400">
              <a
                href={`mailto:${personalInfo.email}`}
                className="hover:text-pink-accent flex items-center gap-1.5 transition-colors"
              >
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
          /* Success Message */
          <div className="text-center py-8">
            <div className="w-16 h-16 rounded-full bg-pink-accent/20 border border-pink-accent text-pink-accent flex items-center justify-center mx-auto mb-4">
              <CheckCircle className="w-8 h-8" />
            </div>

            <h3 className="text-2xl font-bold text-white mb-2">
              Message Sent Successfully!
            </h3>

            <p className="text-sm text-gray-300 max-w-md mx-auto mb-6">
              Thank you for reaching out. Your message has been received.
              I'll get back to you as soon as possible.
            </p>

            <button
              onClick={() => {
                setSubmitted(false);
                setError('');
                onClose();
              }}
              className="px-6 py-2.5 rounded-full bg-pink-accent hover:bg-pink-hover text-[#050507] font-bold text-xs transition-colors"
            >
              Back to Portfolio
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
