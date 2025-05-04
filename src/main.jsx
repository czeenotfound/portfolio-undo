import { StrictMode, useEffect } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { initScrollAnimations } from './utils/scrollAnimations'

function ScrollToTop() {
  useEffect(() => {
    window.scrollTo(0, 0);
    
    if ('scrollRestoration' in history) {
      history.scrollRestoration = 'manual';
    }
    
    setTimeout(() => {
      initScrollAnimations();
    }, 100);
    
  }, []);

  return <App />;
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ScrollToTop />
  </StrictMode>,
)
