import './index.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar/navbar'
import Hero from './components/Section/hero'
import About from './components/Section/about'
import Experience from './components/Section/experience'
import Projects from './components/Section/projects'
import Certifications from './components/Section/certifications'
import Blog from './components/Section/blog'
import Contact from './components/Section/contact'
import AnimatedSection from './components/AnimatedSection'
import BlogPost from './pages/BlogPost'
import ScrollToTop from './components/ScrollToTop'
import ScrollToTopOnMount from './components/ScrollToTopOnMount'
import ScrollToHash from './components/ScrollToHash'

function App() {
  return (
    <Router>
      <div className="app-container">
        <Navbar />
        <ScrollToTopOnMount />
        <ScrollToHash />
        
        <Routes>
          <Route path="/" element={
            <>
              <div id="home" className="min-h-screen">
                <Hero />
              </div>
              
              <AnimatedSection id="about" className="min-h-screen" delay={100}>
                <About />
              </AnimatedSection>
              
              <AnimatedSection id="experience" className="min-h-screen" delay={100}>
                <Experience />
              </AnimatedSection>
              
              <AnimatedSection id="projects" className="min-h-screen" delay={100}>
                <Projects />
              </AnimatedSection>
              
              <AnimatedSection id="certifications" className="min-h-screen" delay={100}>
                <Certifications />
              </AnimatedSection>
              
              <AnimatedSection id="blog" className="min-h-screen" delay={100}>
                <Blog />
              </AnimatedSection>
              
              <AnimatedSection id="contact" className="min-h-screen" delay={100}>
                <Contact />
              </AnimatedSection>
            </>
          } />
          
          <Route path="/blog/:id" element={<BlogPost />} />
        </Routes>

        <footer className="bg-neutral-900 py-8 text-center text-gray-400">
          <div className="container mx-auto px-4">
            <p>© {new Date().getFullYear()} Khalil Undo. All rights reserved.</p>
          </div>
        </footer>
        
        <ScrollToTop />
      </div>
    </Router>
  )
}

export default App
