import React, { useEffect } from 'react';
import Navbar from './components/Navbar';
import ContinuousConnector from './components/ContinuousConnector';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Contact from './pages/Contact';

const App: React.FC = () => {
  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('.section-transition');
      sections.forEach((section) => {
        const rect = section.getBoundingClientRect();
        const isVisible = rect.top < window.innerHeight * 0.8 && rect.bottom > 0;
        
        if (isVisible) {
          section.classList.add('animate');
        } else {
          section.classList.remove('animate');
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="smooth-scroll-container">
      {/* Persistent curved connector that flows through all sections */}
      <ContinuousConnector 
        color="rgba(188, 126, 222, 0.5)"
        strokeWidth={2}
        dashLength={10}
        dashGap={8}
        curveIntensity={0.4}
        animationSpeed={25}
        opacity={0.7}
        sections={['#home-section', '#about-section', '#projects-section', '#contact-section']}
      />
      
      <Navbar />
      <Home />
      <About />
      <Projects />
      <Contact />
    </div>
  );
};

export default App;
