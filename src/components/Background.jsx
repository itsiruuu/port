import React, { useEffect, useState } from 'react';
import MoltenMetal from './MoltenMetal';

// =========================================================================
// BACKGROUND COMPONENT
// Renders the interactive mouse-following spotlight glow, ambient pink
// radial gradients, and subtle noise grain overlay.
// =========================================================================

export const Background = () => {
  const [mousePosition, setMousePosition] = useState({ x: -1000, y: -1000 });

  useEffect(() => {
    let animationFrameId;
    const handleMouseMove = (e) => {
      animationFrameId = requestAnimationFrame(() => {
        setMousePosition({ x: e.clientX, y: e.clientY });
      });
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden" aria-hidden="true">
      {/* Base deep dark background */}
      <div className="absolute inset-0 bg-[#050507]" />

      <div className="absolute inset-0 opacity-30">
        <MoltenMetal
          color1="#7d285d"
          color2="#db28ae"
          color3="#E893AC"
          speed={0.35}
          scale={4}
          detail={3}
          glow={1.6}
          coreSize={0.1}
          swirl={1}
          fold={-0.2}
          blackPoint={0.05}
          brightness={1.3}
          colorMode="molten"
          grain
          grainIntensity={0.05}
          mouseInteraction
          mouseStrength={0.3}
          opacity={1}
        />
      </div>

      {/* Top Hero radial gradient glow */}
      <div 
        className="absolute -top-[250px] left-1/2 -translate-x-1/2 w-[850px] h-[550px] rounded-full opacity-60 blur-[130px]"
        style={{
          background: 'radial-gradient(circle, rgba(233, 139, 171, 0.28) 0%, rgba(217, 133, 167, 0.12) 45%, transparent 75%)'
        }}
      />

      {/* Mid-page ambient lavender glow */}
      <div 
        className="absolute top-[35%] -left-[150px] w-[600px] h-[600px] rounded-full opacity-25 blur-[150px]"
        style={{
          background: 'radial-gradient(circle, rgba(201, 130, 170, 0.2) 0%, transparent 70%)'
        }}
      />

      {/* Bottom CTA ambient pink spotlight */}
      <div 
        className="absolute bottom-[5%] -right-[100px] w-[700px] h-[700px] rounded-full opacity-35 blur-[160px]"
        style={{
          background: 'radial-gradient(circle, rgba(233, 139, 171, 0.22) 0%, rgba(13, 13, 17, 0.8) 60%, transparent 80%)'
        }}
      />

      {/* Interactive mouse-following spotlight glow */}
      <div 
        className="absolute w-[600px] h-[600px] rounded-full transition-transform duration-300 ease-out will-change-transform opacity-35 blur-[120px]"
        style={{
          transform: `translate(${mousePosition.x - 300}px, ${mousePosition.y - 300}px)`,
          background: 'radial-gradient(circle, rgba(233, 139, 171, 0.3) 0%, rgba(217, 133, 167, 0.1) 40%, transparent 70%)',
        }}
      />

      {/* Tactile micro-grain noise overlay */}
      <div className="absolute inset-0 bg-noise opacity-40 mix-blend-screen" />
    </div>
  );
};
