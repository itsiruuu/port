import { useEffect, useMemo, useRef } from 'react';
import { createPortal } from 'react-dom';
import { gsap } from 'gsap';
import './TargetCursor.css';

const isMobileDevice = () => {
  if (typeof window === 'undefined') return true;
  return (
    window.innerWidth <= 768 ||
    'ontouchstart' in window ||
    navigator.maxTouchPoints > 0 ||
    /android|iphone|ipad|ipod|mobile/i.test(navigator.userAgent)
  );
};

const TargetCursor = ({
  targetSelector = '.cursor-target',
  spinDuration = 2,
  hideDefaultCursor = true,
  hoverDuration = 0.2,
  parallaxOn = true,
  cursorColor = '#ffffff',
  cursorColorOnTarget,
}) => {
  const cursorRef = useRef(null);
  const dotRef = useRef(null);
  const cornersRef = useRef(null);
  const spinTimeline = useRef(null);
  const activeTarget = useRef(null);
  const targetPositions = useRef(null);
  const activeStrength = useRef({ value: 0 });
  const isMobile = useMemo(isMobileDevice, []);

  useEffect(() => {
    if (isMobile || !cursorRef.current) return undefined;

    const cursor = cursorRef.current;
    cornersRef.current = cursor.querySelectorAll('.target-cursor-corner');
    const corners = Array.from(cornersRef.current);
    const originalCursor = document.body.style.cursor;
    if (hideDefaultCursor) document.body.style.cursor = 'none';

    const resetCorners = () => {
      const positions = [
        { x: -18, y: -18 },
        { x: 6, y: -18 },
        { x: 6, y: 6 },
        { x: -18, y: 6 },
      ];
      corners.forEach((corner, index) => {
        gsap.to(corner, { ...positions[index], duration: 0.3, ease: 'power3.out' });
      });
    };

    const startSpin = () => {
      spinTimeline.current?.kill();
      spinTimeline.current = gsap.timeline({ repeat: -1 }).to(cursor, {
        rotation: '+=360',
        duration: spinDuration,
        ease: 'none',
      });
    };

    const moveCursor = (event) => {
      gsap.to(cursor, {
        x: event.clientX,
        y: event.clientY,
        duration: 0.1,
        ease: 'power3.out',
      });
    };

    const updateParallax = () => {
      if (!targetPositions.current || !activeTarget.current || !parallaxOn) return;
      const cursorX = gsap.getProperty(cursor, 'x');
      const cursorY = gsap.getProperty(cursor, 'y');
      const strength = activeStrength.current.value;
      corners.forEach((corner, index) => {
        const position = targetPositions.current[index];
        gsap.to(corner, {
          x: (position.x - cursorX) * strength,
          y: (position.y - cursorY) * strength,
          duration: 0.2,
          ease: 'power1.out',
          overwrite: 'auto',
        });
      });
    };

    const handleMouseOver = (event) => {
      const target = event.target.closest?.(targetSelector);
      if (!target || activeTarget.current === target) return;
      activeTarget.current = target;
      spinTimeline.current?.pause();
      gsap.set(cursor, { rotation: 0 });

      const rect = target.getBoundingClientRect();
      targetPositions.current = [
        { x: rect.left - 3, y: rect.top - 3 },
        { x: rect.right - 12 + 3, y: rect.top - 3 },
        { x: rect.right - 12 + 3, y: rect.bottom - 12 + 3 },
        { x: rect.left - 3, y: rect.bottom - 12 + 3 },
      ];
      gsap.to(activeStrength.current, { value: 1, duration: hoverDuration, ease: 'power2.out' });
      if (cursorColorOnTarget) {
        gsap.to([...corners, dotRef.current], {
          borderColor: cursorColorOnTarget,
          backgroundColor: cursorColorOnTarget,
          duration: 0.15,
        });
      }
      updateParallax();
    };

    const handleMouseOut = (event) => {
      const target = event.target.closest?.(targetSelector);
      if (!target || event.relatedTarget?.closest?.(targetSelector) === target) return;
      if (activeTarget.current !== target) return;
      activeTarget.current = null;
      targetPositions.current = null;
      gsap.to(activeStrength.current, { value: 0, duration: hoverDuration, overwrite: true });
      gsap.to([...corners, dotRef.current], {
        borderColor: cursorColor,
        backgroundColor: cursorColor,
        duration: 0.15,
      });
      resetCorners();
      startSpin();
    };

    const handleMouseDown = () => {
      gsap.to(dotRef.current, { scale: 0.7, duration: 0.2 });
      gsap.to(cursor, { scale: 0.9, duration: 0.2 });
    };
    const handleMouseUp = () => {
      gsap.to(dotRef.current, { scale: 1, duration: 0.2 });
      gsap.to(cursor, { scale: 1, duration: 0.2 });
    };

    gsap.set(cursor, { x: window.innerWidth / 2, y: window.innerHeight / 2 });
    resetCorners();
    startSpin();
    gsap.ticker.add(updateParallax);
    window.addEventListener('mousemove', moveCursor);
    window.addEventListener('mouseover', handleMouseOver);
    window.addEventListener('mouseout', handleMouseOut);
    window.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mouseup', handleMouseUp);

    return () => {
      gsap.ticker.remove(updateParallax);
      spinTimeline.current?.kill();
      window.removeEventListener('mousemove', moveCursor);
      window.removeEventListener('mouseover', handleMouseOver);
      window.removeEventListener('mouseout', handleMouseOut);
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
      document.body.style.cursor = originalCursor;
    };
  }, [cursorColor, cursorColorOnTarget, hideDefaultCursor, hoverDuration, isMobile, parallaxOn, spinDuration, targetSelector]);

  if (isMobile || typeof document === 'undefined') return null;

  return createPortal(
    <div ref={cursorRef} className="target-cursor-wrapper" aria-hidden="true">
      <div ref={dotRef} className="target-cursor-dot" style={{ backgroundColor: cursorColor }} />
      <div className="target-cursor-corner corner-tl" style={{ borderColor: cursorColor }} />
      <div className="target-cursor-corner corner-tr" style={{ borderColor: cursorColor }} />
      <div className="target-cursor-corner corner-br" style={{ borderColor: cursorColor }} />
      <div className="target-cursor-corner corner-bl" style={{ borderColor: cursorColor }} />
    </div>,
    document.body
  );
};

export default TargetCursor;
