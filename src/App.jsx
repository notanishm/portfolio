import { useState, useEffect, useMemo, useRef } from 'react';
import { ThemeProvider } from './context/ThemeContext';
import { Home, User, Code, Folder, Award, Mail } from 'lucide-react';
import PillNav from './components/PillNav';
import ThemeToggle from './components/ThemeToggle';
import Hero from './sections/Hero';
import Menu3D from './sections/Menu3D';
import About from './sections/About';
import Skills from './sections/Skills';
import Projects from './sections/Projects';
import Certifications from './sections/Certifications';
import Contact from './sections/Contact';
import Footer from './sections/Footer';
import { navigationItems, menu3dItems } from './data/content';

function App() {
  const [activeSection, setActiveSection] = useState('home');
  const menu3dRef = useRef(null);

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

  const focusMenuItemById = (id) => {
    const idx = menu3dItems.findIndex((x) => x.id === id);
    if (idx >= 0) {
      menu3dRef.current?.focusItem(idx);
    }
  };

  const handleTopNavClick = (item) => {
    const id = item?.href?.startsWith('#') ? item.href.slice(1) : item?.id;
    if (!id) return;

    // Bring the 3D menu into view, then rotate/focus to the requested item.
    scrollToSection('menu');
    focusMenuItemById(id);
    setActiveSection(id);
  };

  // Update active section based on scroll position
  useEffect(() => {
    const handleScroll = () => {
      // When the 3D menu is in view, keep the nav highlight driven by the 3D menu.
      const menuEl = document.getElementById('menu');
      const scrollPosition = window.scrollY + 200;
      if (menuEl) {
        const top = menuEl.offsetTop;
        const bottom = top + menuEl.offsetHeight;
        if (scrollPosition >= top && scrollPosition < bottom) {
          return;
        }
      }

      const sections = navigationItems.map((item) => item.id);

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
          onItemClick={handleTopNavClick}
          className=""
          baseColor="#0b1220"
          pillColor="#111a2f"
          hoveredPillTextColor="#0b1220"
          pillTextColor="#e5e7eb"
        />

        {/* Main Content */}
        <main>
          <Hero />
          <Menu3D
            ref={menu3dRef}
            items={menu3dItems}
            onActiveItemChange={(idx) => {
              const id = menu3dItems[idx]?.id;
              if (id) setActiveSection(id);
            }}
            onSelect={(item) => {
              if (item?.id) scrollToSection(item.id);
            }}
          />
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
