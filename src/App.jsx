import { useMemo, useRef, useState } from 'react';
import { ThemeProvider } from './context/ThemeContext';
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
  };

  const handleTopNavClick = (item) => {
    const id = item?.href?.startsWith('#') ? item.href.slice(1) : item?.id;
    if (!id) return;

    focusMenuItemById(id);
    setActiveSection(id);
  };

  return (
    <ThemeProvider>
      <div className="h-screen overflow-hidden bg-white dark:bg-gray-900 transition-colors duration-300">
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
