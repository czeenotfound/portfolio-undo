import React, { useRef, useEffect } from 'react';

/**
 * A component that wraps content and animates it based on scroll position
 * 
 * @param {Object} props
 * @param {React.ReactNode} props.children
 * @param {string} props.className
 * @param {string} props.id
 * @param {number} props.delay
 */
const AnimatedSection = ({ children, className = '', id, delay = 0 }) => {
  const sectionRef = useRef(null);
  
  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;
    
    section.classList.add('fade-section');
    
    if (delay > 0) {
      section.style.transitionDelay = `${delay}ms`;
    }
    
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            section.classList.add('is-visible');
          }, delay);
        } else {
          section.classList.remove('is-visible');
        }
      },
      {
        root: null,
        threshold: 0.1,
        rootMargin: '0px'
      }
    );
    
    observer.observe(section);
    
    return () => {
      observer.unobserve(section);
    };
  }, [delay]);
  
  return (
    <div
      ref={sectionRef}
      id={id}
      className={`${className}`}
    >
      {children}
    </div>
  );
};

export default AnimatedSection; 