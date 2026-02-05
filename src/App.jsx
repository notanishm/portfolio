import { useMemo, useRef, useState } from 'react';
import { ThemeProvider } from './context/ThemeContext';
import { Home, User, Code, Folder, Award, Mail } from 'lucide-react';
import GooeyNav from './components/GooeyNav';
import ThemeToggle from './components/ThemeToggle';
import Menu3D from './sections/Menu3D';
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

  const focusMenuItemById = (id) => {
    const idx = menu3dItems.findIndex((x) => x.id === id);
    if (idx >= 0) {
      menu3dRef.current?.focusItem(idx);
    }
  };

  const handleTopNavClick = (item) => {
    const id = item?.href?.startsWith('#') ? item.href.slice(1) : item?.id;
    if (!id) return;

    // Jump inside the 3D menu by focusing the requested item.
    focusMenuItemById(id);
    setActiveSection(id);
  };

  return (
    <ThemeProvider>
      <div className="h-screen overflow-hidden bg-white dark:bg-gray-900 transition-colors duration-300">
        {/* Navigation */}
        <GooeyNav
          items={navItems}
          activeIndex={navItems.findIndex((x) => x.id === activeSection)}
          onItemClick={(item) => handleTopNavClick(item)}
          initialActiveIndex={0}
        />

        {/* 3D Menu (only UI) */}
        <main className="h-full">
          <Menu3D
            ref={menu3dRef}
            items={menu3dItems}
            onActiveItemChange={(idx) => {
              const id = menu3dItems[idx]?.id;
              if (id) setActiveSection(id);
            }}
          />
        </main>

        {/* Theme Toggle */}
        <ThemeToggle />
      </div>
    </ThemeProvider>
  );
}

export default App;
