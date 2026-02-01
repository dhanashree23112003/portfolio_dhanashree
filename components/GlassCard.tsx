
import React, { useState, useRef } from 'react';

interface GlassCardProps {
  children: React.ReactNode;
  className?: string;
  isHoverable?: boolean;
}

export const GlassCard: React.FC<GlassCardProps> = ({ children, className = "", isHoverable = true }) => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [opacity, setOpacity] = useState(0);
  const cardRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;

    const div = cardRef.current;
    const rect = div.getBoundingClientRect();

    setPosition({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  const handleMouseEnter = () => setOpacity(1);
  const handleMouseLeave = () => setOpacity(0);

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={`
        relative overflow-hidden
        bg-white/[0.03] backdrop-blur-xl
        border border-white/[0.08]
        rounded-2xl
        p-6 md:p-8
        transition-all duration-500
        ${isHoverable ? 'hover:bg-white/[0.06] hover:border-white/[0.15] hover:-translate-y-1' : ''}
        ${className}
      `}
    >
      {/* Spotlight effect */}
      <div
        className="pointer-events-none absolute -inset-px transition duration-300"
        style={{
          opacity,
          background: `radial-gradient(600px circle at ${position.x}px ${position.y}px, rgba(236, 72, 153, 0.1), transparent 40%)`,
        }}
      />
      
      {/* Subtle inner glow */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/[0.02] to-transparent pointer-events-none" />
      
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
};
