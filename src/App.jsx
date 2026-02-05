import { useState, useEffect, useMemo } from 'react';
import { ThemeProvider } from './context/ThemeContext';
import { Home, User, Code, Folder, Award, Mail } from 'lucide-react';
import PillNav from './components/PillNav';
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

  const navItems = useMemo(() => {
    const iconMap = {
      Home: <Home size={18} />,
      User: <User size={18} />,
      Code: <Code size={18} />,
      Folder: <Folder size={18} />,
      Award: <Award size={18} />,
      Mail: <Mail size={18} />,
    };

    return navigationItems.map((item) => ({
      ...item,
      href: `#${item.id}`,
      icon: iconMap[item.icon] ?? null,
    }));
  }, []);

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
        <PillNav
          items={navItems}
          activeHref={`#${activeSection}`}
          className=""
          baseColor="#0b1220"
          pillColor="#111a2f"
          hoveredPillTextColor="#0b1220"
          pillTextColor="#e5e7eb"
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
