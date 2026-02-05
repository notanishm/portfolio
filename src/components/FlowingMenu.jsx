import { useState, useRef, useEffect } from 'react';

const menuItems = [
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'certifications', label: 'Certifications' },
  { id: 'contact', label: 'Contact' },
];

function FlowingMenu({ onItemSelect, photoUrl, name, title, children }) {
  const [activeItem, setActiveItem] = useState(null);
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef(null);

  const handleItemClick = (itemId) => {
    setActiveItem(itemId);
    onItemSelect?.(itemId);
  };

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <>
      <div className="flowing-menu-container" ref={menuRef}>
        <div className="profile-section">
          {photoUrl ? (
            <img src={photoUrl} alt={name} className="profile-photo" />
          ) : (
            <div className="profile-placeholder">
              <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                <circle cx="12" cy="7" r="4" />
              </svg>
            </div>
          )}
          <div className="profile-info">
            <h2 className="profile-name">{name || 'Your Name'}</h2>
            <p className="profile-title">{title || 'Your Title'}</p>
          </div>
        </div>

        <button
          className={`menu-toggle ${isOpen ? 'active' : ''}`}
          onClick={() => setIsOpen(!isOpen)}
        >
          <span className="hamburger">
            <span className="line" />
            <span className="line" />
            <span className="line" />
          </span>
        </button>

        <div className={`menu-items-container ${isOpen ? 'open' : ''}`}>
          {menuItems.map((item, index) => (
            <button
              key={item.id}
              className={`menu-item ${activeItem === item.id ? 'active' : ''}`}
              onClick={() => handleItemClick(item.id)}
              style={{ '--item-index': index }}
            >
              <span className="menu-item-icon">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  {item.id === 'about' && <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />}
                  {item.id === 'skills' && <path d="M12 2v20M2 12h20M5.5 5.5l13 13M18.5 5.5l-13 13" />}
                  {item.id === 'projects' && <rect x="3" y="3" width="18" height="18" rx="2" />}
                  {item.id === 'certifications' && <path d="M12 15l-2 5l9-11h-6l2-5l-9 11h6z" />}
                  {item.id === 'contact' && <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />}
                </svg>
              </span>
              <span className="menu-item-label">{item.label}</span>
            </button>
          ))}
        </div>
      </div>

      {activeItem && (
        <div
          className="content-overlay"
          onClick={() => setActiveItem(null)}
        >
          <div className="content-panel" onClick={(e) => e.stopPropagation()}>
            <button className="close-btn" onClick={() => setActiveItem(null)}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M18 6L6 18M6 6l12 12" />
              </svg>
            </button>
            {children}
          </div>
        </div>
      )}

      <style>{`
        .flowing-menu-container {
          position: fixed;
          top: 0;
          left: 0;
          width: 320px;
          height: 100vh;
          background: rgba(0, 0, 0, 0.4);
          backdrop-filter: blur(30px);
          border-right: 1px solid rgba(255, 255, 255, 0.08);
          padding: 24px;
          z-index: 100;
          display: flex;
          flex-direction: column;
        }

        .profile-section {
          display: flex;
          align-items: center;
          gap: 14px;
          padding-bottom: 24px;
          border-bottom: 1px solid rgba(255, 255, 255, 0.08);
          margin-bottom: 24px;
        }

        .profile-photo {
          width: 52px;
          height: 52px;
          border-radius: 14px;
          object-fit: cover;
        }

        .profile-placeholder {
          width: 52px;
          height: 52px;
          border-radius: 14px;
          background: rgba(255, 255, 255, 0.08);
          display: flex;
          align-items: center;
          justify-content: center;
          color: rgba(255, 255, 255, 0.5);
        }

        .profile-info {
          flex: 1;
        }

        .profile-name {
          font-size: 16px;
          font-weight: 700;
          color: #fff;
          margin-bottom: 4px;
        }

        .profile-title {
          font-size: 13px;
          color: rgba(255, 255, 255, 0.5);
          line-height: 1.4;
        }

        .menu-toggle {
          position: absolute;
          top: 24px;
          right: -60px;
          width: 44px;
          height: 44px;
          background: rgba(0, 0, 0, 0.4);
          backdrop-filter: blur(30px);
          border: 1px solid rgba(255, 255, 255, 0.08);
          border-radius: 12px;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.3s ease;
        }

        .menu-toggle:hover {
          background: rgba(255, 255, 255, 0.1);
        }

        .menu-toggle.active {
          background: rgba(255, 255, 255, 0.15);
        }

        .hamburger {
          display: flex;
          flex-direction: column;
          gap: 5px;
          pointer-events: none;
        }

        .hamburger .line {
          width: 18px;
          height: 2px;
          background: #fff;
          border-radius: 2px;
          transition: all 0.3s ease;
        }

        .menu-toggle.active .line:nth-child(1) {
          transform: rotate(45deg) translate(5px, 5px);
        }

        .menu-toggle.active .line:nth-child(2) {
          opacity: 0;
        }

        .menu-toggle.active .line:nth-child(3) {
          transform: rotate(-45deg) translate(5px, -5px);
        }

        .menu-items-container {
          display: flex;
          flex-direction: column;
          gap: 8px;
          opacity: 0;
          transform: translateX(-20px);
          pointer-events: none;
          transition: all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
        }

        .menu-items-container.open {
          opacity: 1;
          transform: translateX(0);
          pointer-events: auto;
        }

        .menu-item {
          display: flex;
          align-items: center;
          gap: 14px;
          padding: 14px 16px;
          background: transparent;
          border: none;
          border-radius: 12px;
          cursor: pointer;
          color: rgba(255, 255, 255, 0.7);
          font-size: 15px;
          font-weight: 500;
          transition: all 0.3s ease;
          animation: menuSlideIn 0.5s cubic-bezier(0.34, 1.56, 0.64, 1) backwards;
          animation-delay: calc(var(--item-index) * 0.08s);
        }

        @keyframes menuSlideIn {
          from {
            opacity: 0;
            transform: translateX(-30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        .menu-item:hover {
          background: rgba(255, 255, 255, 0.08);
          color: #fff;
        }

        .menu-item.active {
          background: rgba(255, 255, 255, 0.12);
          color: #fff;
        }

        .menu-item-icon {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 22px;
          height: 22px;
        }

        .content-overlay {
          position: fixed;
          top: 0;
          left: 320px;
          right: 0;
          bottom: 0;
          background: rgba(0, 0, 0, 0.5);
          backdrop-filter: blur(10px);
          z-index: 50;
          animation: fadeIn 0.3s ease;
        }

        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }

        .content-panel {
          position: absolute;
          top: 0;
          right: 0;
          width: min(600px, calc(100% - 60px));
          height: 100%;
          background: rgba(10, 10, 10, 0.95);
          backdrop-filter: blur(40px);
          border-left: 1px solid rgba(255, 255, 255, 0.06);
          overflow-y: auto;
          padding: 40px;
          animation: slideIn 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
        }

        @keyframes slideIn {
          from {
            opacity: 0;
            transform: translateX(100%);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        .close-btn {
          position: absolute;
          top: 24px;
          right: 24px;
          width: 40px;
          height: 40px;
          background: rgba(255, 255, 255, 0.08);
          border: none;
          border-radius: 10px;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #fff;
          transition: all 0.2s ease;
        }

        .close-btn:hover {
          background: rgba(255, 255, 255, 0.15);
        }

        .content-panel::-webkit-scrollbar {
          width: 6px;
        }

        .content-panel::-webkit-scrollbar-track {
          background: transparent;
        }

        .content-panel::-webkit-scrollbar-thumb {
          background: rgba(255, 255, 255, 0.15);
          border-radius: 3px;
        }

        .content-panel::-webkit-scrollbar-thumb:hover {
          background: rgba(255, 255, 255, 0.25);
        }
      `}</style>
    </>
  );
}

export default FlowingMenu;
