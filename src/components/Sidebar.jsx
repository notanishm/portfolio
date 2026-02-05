import { Home, User, Code, Folder, Award, Mail } from 'lucide-react';

const iconMap = {
  Home: <Home size={20} />,
  User: <User size={20} />,
  Code: <Code size={20} />,
  Folder: <Folder size={20} />,
  Award: <Award size={20} />,
  Mail: <Mail size={20} />,
};

const navItems = [
  { id: 'home', label: 'Home', icon: 'Home' },
  { id: 'about', label: 'About', icon: 'User' },
  { id: 'skills', label: 'Skills', icon: 'Code' },
  { id: 'projects', label: 'Projects', icon: 'Folder' },
  { id: 'certifications', label: 'Certifications', icon: 'Award' },
  { id: 'contact', label: 'Contact', icon: 'Mail' },
];

function Sidebar({ activeId, onItemClick }) {
  return (
    <aside className="fixed left-4 top-1/2 -translate-y-1/2 z-50 flex flex-col gap-2">
      {navItems.map((item) => {
        const Icon = iconMap[item.icon];
        const isActive = activeId === item.id;
        return (
          <button
            key={item.id}
            onClick={() => onItemClick(item.id)}
            className={`group relative flex items-center gap-3 px-3 py-2 rounded-lg transition-all duration-300 ${
              isActive 
                ? 'bg-black/10' 
                : 'hover:bg-black/5'
            }`}
            title={item.label}
          >
            <span className={`${isActive ? 'text-black' : 'text-black/60 group-hover:text-black'} transition-colors`}>
              {Icon}
            </span>
            <span className={`${isActive ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0'} text-sm font-medium text-black whitespace-nowrap transition-all duration-300`}>
              {item.label}
            </span>
          </button>
        );
      })}
    </aside>
  );
}

export default Sidebar;
