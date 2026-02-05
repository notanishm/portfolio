import DitherBackground from './components/DitherBackground';
import TargetCursor from './components/TargetCursor';
import FlowingMenu from './components/FlowingMenu';

// Menu items for the flowing menu
const menuItems = [
  { 
    link: '#about', 
    text: 'About', 
    image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=600&h=400&fit=crop'
  },
  { 
    link: '#skills', 
    text: 'Skills', 
    image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=600&h=400&fit=crop'
  },
  { 
    link: '#projects', 
    text: 'Projects', 
    image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=600&h=400&fit=crop'
  },
  { 
    link: '#certifications', 
    text: 'Certifications', 
    image: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=600&h=400&fit=crop'
  },
  { 
    link: '#contact', 
    text: 'Contact', 
    image: 'https://images.unsplash.com/photo-1596526131083-e8c633c948d2?w=600&h=400&fit=crop'
  }
];

function App() {
  return (
    <div style={{ 
      width: '100vw', 
      height: '100vh', 
      overflow: 'hidden',
      position: 'relative'
    }}>
      <TargetCursor 
        targetSelector=".cursor-target"
        spinDuration={2}
        hideDefaultCursor={true}
        hoverDuration={0.2}
        parallaxOn={true}
      />
      <DitherBackground />
      
      <div style={{ 
        position: 'relative', 
        width: '100%', 
        height: '100%',
        zIndex: 10
      }}>
        <FlowingMenu 
          items={menuItems}
          speed={15}
          textColor="#ffffff"
          bgColor="transparent"
          marqueeBgColor="#ffffff"
          marqueeTextColor="#060010"
          borderColor="#ffffff"
        />
      </div>
    </div>
  );
}

export default App;
