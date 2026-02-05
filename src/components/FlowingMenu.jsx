import { useState } from 'react';

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
  const menuRef = useState(null)[0];

  const handleItemClick = (itemId) => {
    setActiveItem(itemId);
    onItemSelect?.(itemId);
  };

  return (
    <>
      <div className="sidebar" ref={menuRef}>
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
          className="menu-toggle"
          onClick={() => setIsOpen(!isOpen)}
        >
          <span className="hamburger">
            <span className="line" />
            <span className="line" />
            <span className="line" />
          </span>
        </button>

        <div className={`menu-items ${isOpen ? 'open' : ''}`}>
          {menuItems.map((item) => (
            <button
              key={item.id}
              className={`menu-item ${activeItem === item.id ? 'active' : ''}`}
              onClick={() => handleItemClick(item.id)}
            >
              {item.label}
            </button>
          ))}
        </div>
      </div>

      {activeItem && (
        <div className="content-area">
          <div className="content-box">
            <button className="close-btn" onClick={() => setActiveItem(null)}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M18 6L6 18M6 6l12 12" />
              </svg>
            </button>
            {children}
          </div>
        </div>
      )}

      <style>{`
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        .sidebar {
          position: fixed;
          top: 0;
          left: 0;
          width: 280px;
          height: 100vh;
          background: #111;
          padding: 24px;
          z-index: 100;
        }

        .profile-section {
          display: flex;
          align-items: center;
          gap: 14px;
          padding-bottom: 24px;
          border-bottom: 1px solid #333;
          margin-bottom: 24px;
        }

        .profile-photo {
          width: 52px;
          height: 52px;
          border-radius: 12px;
          object-fit: cover;
        }

        .profile-placeholder {
          width: 52px;
          height: 52px;
          border-radius: 12px;
          background: #222;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #666;
        }

        .profile-name {
          font-size: 15px;
          font-weight: 700;
          color: #fff;
          margin-bottom: 4px;
        }

        .profile-title {
          font-size: 12px;
          color: #888;
        }

        .menu-toggle {
          position: absolute;
          top: 24px;
          right: -52px;
          width: 44px;
          height: 44px;
          background: #111;
          border: 1px solid #333;
          border-radius: 10px;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .hamburger {
          display: flex;
          flex-direction: column;
          gap: 5px;
        }

        .line {
          width: 18px;
          height: 2px;
          background: #fff;
        }

        .menu-items {
          display: flex;
          flex-direction: column;
          gap: 8px;
          opacity: 0;
          pointer-events: none;
          transition: opacity 0.2s;
        }

        .menu-items.open {
          opacity: 1;
          pointer-events: auto;
        }

        .menu-item {
          padding: 14px 16px;
          background: #1a1a1a;
          border: 1px solid #333;
          border-radius: 10px;
          cursor: pointer;
          color: #ccc;
          font-size: 14px;
          font-weight: 500;
          text-align: left;
          transition: all 0.15s;
        }

        .menu-item:hover {
          background: #252525;
          border-color: #444;
          color: #fff;
        }

        .menu-item.active {
          background: #fff;
          border-color: #fff;
          color: #000;
        }

        .content-area {
          position: fixed;
          top: 0;
          left: 280px;
          right: 0;
          bottom: 0;
          padding: 40px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: #0a0a0a;
        }

        .content-box {
          width: 100%;
          max-width: 600px;
          background: #111;
          border: 1px solid #333;
          border-radius: 16px;
          padding: 32px;
          position: relative;
        }

        .close-btn {
          position: absolute;
          top: 16px;
          right: 16px;
          width: 36px;
          height: 36px;
          background: #1a1a1a;
          border: 1px solid #333;
          border-radius: 8px;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #888;
          transition: all 0.15s;
        }

        .close-btn:hover {
          background: #222;
          color: #fff;
        }
      `}</style>
    </>
  );
}

export default FlowingMenu;
