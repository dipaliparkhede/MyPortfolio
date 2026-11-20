import React, { useRef, useState, useCallback } from 'react';

/**
 * TiltCard - High-performance 3D perspective tilt container with dynamic glare reflection
 * Provides realistic depth, transform-style: preserve-3d for child layers, and smooth spring physics.
 */
export default function TiltCard({
  children,
  className = '',
  maxTilt = 12,
  perspective = 1000,
  scale = 1.02,
  glare = true,
  onClick,
  ...props
}) {
  const cardRef = useRef(null);
  const [style, setStyle] = useState({
    transform: `perspective(${perspective}px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)`,
    transition: 'transform 0.5s cubic-bezier(0.23, 1, 0.32, 1)',
  });
  const [glareStyle, setGlareStyle] = useState({
    opacity: 0,
    background: 'radial-gradient(circle at 50% 50%, rgba(255,255,255,0.2) 0%, transparent 60%)',
  });

  const handleMouseMove = useCallback((e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const width = rect.width;
    const height = rect.height;

    const xPercentage = (x / width) * 2 - 1; // -1 to 1
    const yPercentage = (y / height) * 2 - 1; // -1 to 1

    const rotateX = -yPercentage * maxTilt;
    const rotateY = xPercentage * maxTilt;

    setStyle({
      transform: `perspective(${perspective}px) rotateX(${rotateX.toFixed(2)}deg) rotateY(${rotateY.toFixed(2)}deg) scale3d(${scale}, ${scale}, ${scale})`,
      transition: 'transform 0.1s ease-out',
    });

    if (glare) {
      const glareX = (x / width) * 100;
      const glareY = (y / height) * 100;
      setGlareStyle({
        opacity: 0.22,
        background: `radial-gradient(circle at ${glareX}% ${glareY}%, rgba(255,255,255,0.3) 0%, rgba(139,92,246,0.15) 30%, transparent 65%)`,
        transition: 'opacity 0.2s ease-out',
      });
    }
  }, [maxTilt, perspective, scale, glare]);

  const handleMouseEnter = useCallback(() => {
    setStyle((prev) => ({
      ...prev,
      transition: 'transform 0.15s ease-out',
    }));
  }, []);

  const handleMouseLeave = useCallback(() => {
    setStyle({
      transform: `perspective(${perspective}px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)`,
      transition: 'transform 0.6s cubic-bezier(0.23, 1, 0.32, 1)',
    });
    if (glare) {
      setGlareStyle((prev) => ({
        ...prev,
        opacity: 0,
        transition: 'opacity 0.5s ease-out',
      }));
    }
  }, [perspective, glare]);

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={onClick}
      style={style}
      className={`relative preserve-3d will-change-transform ${className}`}
      {...props}
    >
      {children}
      {glare && (
        <div
          aria-hidden="true"
          style={glareStyle}
          className="pointer-events-none absolute inset-0 z-20 rounded-[inherit] overflow-hidden mix-blend-overlay"
        />
      )}
    </div>
  );
}
