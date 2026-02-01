
import React from 'react';

interface SectionHeadingProps {
  title: string;
  icon?: React.ReactNode;
}

export const SectionHeading: React.FC<SectionHeadingProps> = ({ title, icon }) => {
  return (
    <div className="flex items-center gap-3 mb-10">
      {icon && <span className="text-pink-500">{icon}</span>}
      <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white/90">
        {title}
      </h2>
    </div>
  );
};
