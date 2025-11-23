import React from 'react';

interface SectionHeadingProps {
  category?: string;
  title: string;
  description?: string;
  centered?: boolean;
  light?: boolean;
}

const SectionHeading: React.FC<SectionHeadingProps> = ({ 
  category, 
  title, 
  description, 
  centered = false,
  light = false
}) => {
  const alignClass = centered ? "text-center mx-auto" : "text-left";
  const titleColor = light ? "text-white" : "text-prime-navy";
  const descColor = light ? "text-gray-300" : "text-gray-600";
  const lineColor = light ? "bg-white" : "bg-prime-navy";

  return (
    <div className={`mb-12 max-w-4xl ${alignClass}`}>
      {category && (
        <span className={`block mb-4 text-xs font-bold tracking-widest uppercase ${light ? 'text-blue-300' : 'text-blue-600'}`}>
          {category}
        </span>
      )}
      <div className={`w-12 h-0.5 mb-6 ${lineColor} ${centered ? 'mx-auto' : ''}`}></div>
      <h2 className={`text-3xl md:text-5xl font-serif mb-6 leading-tight ${titleColor}`}>
        {title}
      </h2>
      {description && (
        <p className={`text-lg md:text-xl font-light ${descColor}`}>
          {description}
        </p>
      )}
    </div>
  );
};

export default SectionHeading;