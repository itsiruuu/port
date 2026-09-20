import React from 'react';
import { X } from 'lucide-react';

export const ImageModal = ({ isOpen, imageSrc, imageTitle, onClose }) => {
  if (!isOpen || !imageSrc) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/90 backdrop-blur-2xl animate-fade-in"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
    >
      {/* Modal Container */}
      <div
        className="relative max-w-6xl w-full max-h-[92vh] flex flex-col rounded-2xl glass-card-elevated border border-white/20 overflow-hidden shadow-2xl shadow-black"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Header */}
        <div className="px-5 py-3.5 border-b border-white/10 flex items-center justify-between bg-[#0d0d11]">
          <h3 className="text-sm sm:text-base font-bold text-white truncate max-w-lg">
            {imageTitle || "Portfolio Visual Showcase"}
          </h3>
          <button
            onClick={onClose}
            className="p-1.5 rounded-full text-gray-400 hover:text-white hover:bg-white/10 transition-colors"
            aria-label="Close image preview"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Image Display */}
        <div className="flex-1 overflow-auto bg-[#07070a] flex items-center justify-center p-2 sm:p-6">
          <img
            src={imageSrc}
            alt={imageTitle || "Showcase view"}
            className="max-w-full max-h-[80vh] object-contain rounded-lg shadow-2xl"
          />
        </div>
      </div>
    </div>
  );
};
