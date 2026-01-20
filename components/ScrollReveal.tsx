
import React, { useEffect, useRef, useState } from 'react';

interface ScrollRevealProps {
  children: React.ReactNode;
  animation?: 'fade-up' | 'fade-in' | 'zoom-in' | 'slide-left' | 'slide-right';
  className?: string;
  delay?: number;
}

const ScrollReveal: React.FC<ScrollRevealProps> = ({ 
  children, 
  animation = 'fade-up', 
  className = '',
  delay = 0 
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const domRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 });

    const current = domRef.current;
    if (current) observer.observe(current);

    return () => {
      if (current) observer.unobserve(current);
    };
  }, []);

  const getAnimationStyles = () => {
    const base = "transition-all duration-1000 ease-out transform";
    
    if (!isVisible) {
      switch (animation) {
        case 'fade-up': return `${base} opacity-0 translate-y-12`;
        case 'fade-in': return `${base} opacity-0`;
        case 'zoom-in': return `${base} opacity-0 scale-90`;
        case 'slide-left': return `${base} opacity-0 -translate-x-12`;
        case 'slide-right': return `${base} opacity-0 translate-x-12`;
        default: return `${base} opacity-0 translate-y-12`;
      }
    }
    return `${base} opacity-100 translate-y-0 translate-x-0 scale-100`;
  };

  return (
    <div 
      ref={domRef} 
      className={`${className} ${getAnimationStyles()}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
};

export default ScrollReveal;
