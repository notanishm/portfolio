import { useState, useEffect } from 'react';
import './MobileMenu.css';

function MobileMenu({ items, onItemClick, activeSection }) {
  const [isOpen, setIsOpen] = useState(false);

  // Close menu when section changes
  useEffect(() => {
    setIsOpen(false);
  }, [activeSection]);

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  return (
    <>
      {/* Hamburger Button */}
      <button
        className={`hamburger cursor-target ${isOpen ? 'open' : ''}`}
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Menu"
      >
        <span></span>
        <span></span>
        <span></span>
      </button>

      {/* Mobile Menu Overlay */}
      <div className={`mobile-menu-overlay ${isOpen ? 'open' : ''}`}>
        <nav className="mobile-menu-nav">
          {items.map((item) => (
            <button
              key={item.id}
              className={`mobile-menu-item cursor-target ${activeSection === item.id ? 'active' : ''}`}
              onClick={() => onItemClick(item.id)}
            >
              {item.text}
            </button>
          ))}
        </nav>
      </div>
    </>
  );
}

export default MobileMenu;
