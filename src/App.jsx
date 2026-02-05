import { useMemo, useRef, useState } from 'react';
import { ThemeProvider } from './context/ThemeContext';
import Sidebar from './components/Sidebar';
import Menu3D from './sections/Menu3D';
import { menu3dItems } from './data/content';

function App() {
  const [activeSection, setActiveSection] = useState('home');
  const menu3dRef = useRef(null);

  const focusMenuItemById = (id) => {
    const idx = menu3dItems.findIndex((x) => x.id === id);
    if (idx >= 0) {
      menu3dRef.current?.focusItem(idx);
    }
    setActiveSection(id);
  };

  return (
    <ThemeProvider>
      <div className="h-screen overflow-hidden bg-white dark:bg-gray-900 transition-colors duration-300">
        <Sidebar activeId={activeSection} onItemClick={focusMenuItemById} />
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
      </div>
    </ThemeProvider>
  );
}

export default App;
