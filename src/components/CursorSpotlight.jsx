import React, { useState, useEffect } from 'react';

/**
 * CursorSpotlight - Interactive ambient glow following mouse movement
 * Creates realistic 3D depth and spatial lighting across the portfolio.
 */
export default function CursorSpotlight() {
  const [position, setPosition] = useState({ x: -1000, y: -1000 });
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    // Only enable on fine pointer devices (desktop mouse)
    const isTouch = window.matchMedia('(pointer: coarse)').matches;
    if (isTouch) return;

    const handleMouseMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
      if (!visible) setVisible(true);
    };

    const handleMouseLeave = () => {
      setVisible(false);
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    document.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [visible]);

  if (!visible) return null;

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-10 transition-opacity duration-300 overflow-hidden"
      style={{ opacity: visible ? 1 : 0 }}
    >
      <div
        className="absolute rounded-full w-[650px] h-[650px] -translate-x-1/2 -translate-y-1/2 will-change-transform"
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
          background: 'radial-gradient(circle, rgba(139, 92, 246, 0.12) 0%, rgba(56, 189, 248, 0.05) 35%, transparent 70%)',
          filter: 'blur(30px)',
          transition: 'transform 0.05s ease-out',
        }}
      />
    </div>
  );
}
