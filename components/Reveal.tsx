
import React, { useEffect, useRef, useState } from 'react';

interface RevealProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  direction?: 'up' | 'down' | 'left' | 'right';
  threshold?: number;
}

export const Reveal: React.FC<RevealProps> = ({ 
  children, 
  className = "", 
  delay = 0, 
  direction = 'up',
  threshold = 0.1
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold }
    );

    const currentRef = ref.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [threshold]);

  const getDirectionClasses = () => {
    switch (direction) {
      case 'up': return isVisible ? 'translate-y-0' : 'translate-y-12';
      case 'down': return isVisible ? 'translate-y-0' : '-translate-y-12';
      case 'left': return isVisible ? 'translate-x-0' : 'translate-x-12';
      case 'right': return isVisible ? 'translate-x-0' : '-translate-x-12';
      default: return '';
    }
  };

  return (
    <div
      ref={ref}
      style={{ transitionDelay: `${delay}ms` }}
      className={`
        transition-all duration-[1200ms] cubic-bezier(0.22, 1, 0.36, 1)
        ${isVisible ? 'opacity-100' : 'opacity-0'}
        ${getDirectionClasses()}
        ${className}
      `}
    >
      {children}
    </div>
  );
};
