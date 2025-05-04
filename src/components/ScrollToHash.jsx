import { useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToHash = () => {
  const location = useLocation();
  const lastHash = useRef('');

  useEffect(() => {
    if (!location.hash || location.hash === lastHash.current) return;
    
    lastHash.current = location.hash;
    
    setTimeout(() => {
      const id = location.hash.replace('#', '');
      const element = document.getElementById(id);
      
      if (element) {
        const navbarOffset = 80;
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - navbarOffset;
        
        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    }, 100);
  }, [location]);

  return null;
};

export default ScrollToHash; 