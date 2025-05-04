const observerOptions = {
  root: null,
  rootMargin: '0px',
  threshold: 0.1 
};

let lastScrollY = window.scrollY;

const visibleSections = new Set();

export function initScrollAnimations() {
  const sections = document.querySelectorAll('section, .hero, .about, .experience');
  
  sections.forEach(section => {
    section.classList.add('fade-section');
  });

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      const currentScrollY = window.scrollY;
      const scrollingDown = currentScrollY > lastScrollY;
      lastScrollY = currentScrollY;
      
      if (entry.isIntersecting) {
        visibleSections.add(entry.target);
        entry.target.classList.add('is-visible');
        entry.target.classList.remove('fade-out');
      } else {
        visibleSections.delete(entry.target);

        if (!scrollingDown) {
          entry.target.classList.add('fade-out');
          entry.target.classList.remove('is-visible');
        }
      }
    });
  }, observerOptions);

  sections.forEach(section => {
    observer.observe(section);
  });

  window.addEventListener('scroll', () => {
    const currentScrollY = window.scrollY;
    const scrollingDown = currentScrollY > lastScrollY;
    lastScrollY = currentScrollY;
    
    visibleSections.forEach(section => {
      if (scrollingDown) {
        section.classList.add('is-visible');
        section.classList.remove('fade-out');
      } else {
        
      }
    });
  }, { passive: true });
} 