import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Home, User, Code, Folder, Award, Mail, Menu, X } from 'lucide-react';

const iconMap = {
  Home,
  User,
  Code,
  Folder,
  Award,
  Mail,
};

const InfiniteMenu = ({ items, activeSection, onNavigate }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const menuRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleNavigate = (id) => {
    onNavigate(id);
    setIsOpen(false);
  };

  return (
    <>
      {/* Desktop Menu */}
      <nav className="hidden md:block fixed top-0 left-0 right-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-center items-center h-20">
            <motion.div
              initial={{ y: -100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, ease: 'easeOut' }}
              className="glass rounded-full px-8 py-3 flex items-center gap-2"
            >
              {items.map((item, index) => {
                const Icon = iconMap[item.icon];
                const isActive = activeSection === item.id;
                const isHovered = hoveredIndex === index;

                return (
                  <motion.button
                    key={item.id}
                    onClick={() => handleNavigate(item.id)}
                    onMouseEnter={() => setHoveredIndex(index)}
                    onMouseLeave={() => setHoveredIndex(null)}
                    className={`relative px-4 py-2 rounded-full transition-all duration-300 flex items-center gap-2 ${
                      isActive
                        ? 'text-white bg-primary-600'
                        : 'text-gray-600 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400'
                    }`}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Icon size={18} />
                    <span className="font-medium text-sm">{item.label}</span>
                    
                    {/* Animated background for active state */}
                    {isActive && (
                      <motion.div
                        layoutId="activeMenu"
                        className="absolute inset-0 bg-gradient-to-r from-primary-600 to-cyber-600 rounded-full -z-10"
                        transition={{ type: 'spring', bounce: 0.2, duration: 0.6 }}
                      />
                    )}
                    
                    {/* Hover indicator */}
                    {isHovered && !isActive && (
                      <motion.div
                        layoutId="hoverMenu"
                        className="absolute inset-0 bg-gray-100 dark:bg-gray-800 rounded-full -z-10"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                      />
                    )}
                  </motion.button>
                );
              })}
            </motion.div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Button */}
      <div className="md:hidden fixed top-4 right-4 z-50">
        <motion.button
          onClick={() => setIsOpen(!isOpen)}
          className="glass p-3 rounded-full text-gray-800 dark:text-white"
          whileTap={{ scale: 0.9 }}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </motion.button>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            ref={menuRef}
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="md:hidden fixed inset-0 z-40 bg-white/95 dark:bg-gray-900/95 backdrop-blur-lg"
          >
            <div className="flex flex-col items-center justify-center h-full gap-6">
              {items.map((item, index) => {
                const Icon = iconMap[item.icon];
                const isActive = activeSection === item.id;

                return (
                  <motion.button
                    key={item.id}
                    onClick={() => handleNavigate(item.id)}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className={`flex items-center gap-4 text-2xl font-semibold ${
                      isActive
                        ? 'text-primary-600 dark:text-primary-400'
                        : 'text-gray-800 dark:text-gray-200'
                    }`}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Icon size={28} />
                    {item.label}
                  </motion.button>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default InfiniteMenu;