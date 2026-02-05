import { useState, useRef, useEffect } from 'react';

const menuItems = [
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'certifications', label: 'Certifications' },
  { id: 'contact', label: 'Contact' },
];

function FlowingMenu({ onItemSelect, children }) {
  const [activeItem, setActiveItem] = useState(null);
  const [isExpanded, setIsExpanded] = useState(false);
  const menuRef = useRef(null);

  const handleItemClick = (itemId) => {
    setActiveItem(itemId);
    onItemSelect?.(itemId);
    setIsExpanded(false);
  };

  const toggleMenu = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <>
      <div
        ref={menuRef}
        className="flowing-menu"
        onClick={toggleMenu}
        style={{
          position: 'fixed',
          top: '50%',
          left: '40px',
          transform: 'translateY(-50%)',
          width: isExpanded ? '280px' : '80px',
          height: isExpanded ? `${menuItems.length * 64 + 140}px` : '80px',
          background: 'rgba(0, 0, 0, 0.6)',
          backdropFilter: 'blur(20px)',
          borderRadius: '20px',
          border: '1px solid rgba(255, 255, 255, 0.1)',
          overflow: 'hidden',
          zIndex: 100,
          cursor: 'pointer',
          transition: 'width 0.4s cubic-bezier(0.34, 1.56, 0.64, 1), height 0.4s cubic-bezier(0.34, 1.56, 0.64, 1)',
        }}
      >
        <div
          className="menu-header"
          style={{
            padding: '16px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
          }}
        >
          <span
            style={{
              fontSize: '18px',
              fontWeight: 700,
              color: '#fff',
              whiteSpace: 'nowrap',
              opacity: isExpanded ? 1 : 0,
              transition: 'opacity 0.3s',
            }}
          >
            Menu
          </span>
          <div
            style={{
              width: 20,
              height: 20,
              position: 'relative',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <div
              style={{
                position: 'absolute',
                width: '100%',
                height: '2px',
                background: '#fff',
                transform: isExpanded ? 'rotate(45deg)' : 'rotate(0deg)',
                transition: 'transform 0.3s',
              }}
            />
            <div
              style={{
                position: 'absolute',
                width: '100%',
                height: '2px',
                background: '#fff',
                transform: isExpanded ? 'rotate(-45deg)' : 'rotate(0deg)',
                opacity: isExpanded ? 1 : 0,
                transition: 'transform 0.3s, opacity 0.3s',
              }}
            />
          </div>
        </div>

        <div
          className="menu-items"
          style={{
            padding: '12px',
            opacity: isExpanded ? 1 : 0,
            pointerEvents: isExpanded ? 'auto' : 'none',
            transition: 'opacity 0.3s',
          }}
        >
          {menuItems.map((item, index) => (
            <div
              key={item.id}
              onClick={(e) => {
                e.stopPropagation();
                handleItemClick(item.id);
              }}
              style={{
                padding: '14px 16px',
                marginBottom: '4px',
                borderRadius: '12px',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                gap: '12px',
                background:
                  activeItem === item.id
                    ? 'rgba(255, 255, 255, 0.15)'
                    : 'transparent',
                transition: 'background 0.2s',
                animation: isExpanded ? `slideIn 0.3s ease forwards ${index * 0.05}s` : 'none',
                opacity: 0,
                transform: 'translateX(-20px)',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = 'rgba(255, 255, 255, 0.1)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background =
                  activeItem === item.id
                    ? 'rgba(255, 255, 255, 0.15)'
                    : 'transparent';
              }}
            >
              <span
                style={{
                  fontSize: '16px',
                  fontWeight: 500,
                  color: '#fff',
                }}
              >
                {item.label}
              </span>
            </div>
          ))}
        </div>

        {!isExpanded && (
          <div
            style={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: '6px',
              pointerEvents: 'none',
            }}
          >
            {menuItems.slice(0, 3).map((_, i) => (
              <div
                key={i}
                style={{
                  width: activeItem ? '16px' : '24px',
                  height: '3px',
                  background: 'rgba(255, 255, 255, 0.8)',
                  borderRadius: '2px',
                  transition: 'width 0.3s',
                }}
              />
            ))}
          </div>
        )}
      </div>

      {activeItem && (
        <div
          className="content-panel"
          onClick={() => setActiveItem(null)}
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: 'rgba(0, 0, 0, 0.3)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 50,
            animation: 'fadeIn 0.3s ease',
          }}
        >
          <div
            className="panel-inner"
            onClick={(e) => e.stopPropagation()}
            style={{
              width: 'min(700px, 90vw)',
              maxHeight: 'min(600px, 80vh)',
              background: 'rgba(0, 0, 0, 0.85)',
              backdropFilter: 'blur(30px)',
              borderRadius: '24px',
              border: '1px solid rgba(255, 255, 255, 0.15)',
              overflow: 'auto',
              padding: '40px',
              position: 'relative',
              animation: 'scaleIn 0.3s ease',
            }}
          >
            <button
              onClick={() => setActiveItem(null)}
              style={{
                position: 'absolute',
                top: '20px',
                right: '20px',
                background: 'rgba(255, 255, 255, 0.1)',
                border: 'none',
                borderRadius: '50%',
                width: 40,
                height: 40,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                color: '#fff',
                fontSize: '20px',
              }}
            >
              ×
            </button>
            {children}
          </div>
        </div>
      )}

      <style>{`
        @keyframes slideIn {
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes scaleIn {
          from {
            opacity: 0;
            transform: translate(-50%, -50%) scale(0.95);
          }
          to {
            opacity: 1;
            transform: translate(-50%, -50%) scale(1);
          }
        }
      `}</style>
    </>
  );
}

export default FlowingMenu;
