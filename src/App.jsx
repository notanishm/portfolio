import { useState, useEffect } from 'react';
import { ThemeProvider } from './context/ThemeContext';
import InfiniteMenu from './components/InfiniteMenu';
import ThemeToggle from './components/ThemeToggle';
import Hero from './sections/Hero';
import About from './sections/About';
import Skills from './sections/Skills';
import Projects from './sections/Projects';
import Certifications from './sections/Certifications';
import Contact from './sections/Contact';
import Footer from './sections/Footer';
import { navigationItems } from './data/content';

function App() {
  const [activeSection, setActiveSection] = useState('home');

  // Scroll to section handler
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const navHeight = 80;
      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
      window.scrollTo({
        top: elementPosition - navHeight,
        behavior: 'smooth',
      });
    }
  };

  // Update active section based on scroll position
  useEffect(() => {
    const handleScroll = () => {
      const sections = navigationItems.map((item) => item.id);
      const scrollPosition = window.scrollY + 200;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i]);
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <ThemeProvider>
      <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
        {/* Navigation */}
        <InfiniteMenu
          items={navigationItems}
          activeSection={activeSection}
          onNavigate={scrollToSection}
        />

        {/* Main Content */}
        <main>
          <Hero />
          <About />
          <Skills />
          <Projects />
          <Certifications />
          <Contact />
        </main>

        {/* Footer */}
        <Footer />

        {/* Theme Toggle */}
        <ThemeToggle />
      </div>
    </ThemeProvider>
  );
}

export default App;