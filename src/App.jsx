import { useState } from 'react';
import Dither from './components/Dither';
import TargetCursor from './components/TargetCursor';
import FlowingMenu from './components/FlowingMenu';
import { personalInfo, skills, education, projects, certifications } from './data/content';

// Content Components
function AboutContent() {
  return (
    <div style={{ color: '#fff' }}>
      <div style={{ display: 'flex', alignItems: 'flex-start', gap: '32px', marginBottom: '32px' }}>
        <div style={{ flexShrink: 0 }}>
          <img 
            src="/profile-photo.jpg" 
            alt={personalInfo.name}
            style={{ 
              width: '150px', 
              height: '150px', 
              borderRadius: '16px', 
              objectFit: 'cover',
              border: '2px solid #333'
            }}
            onError={(e) => {
              e.target.style.display = 'none';
              e.target.nextSibling.style.display = 'flex';
            }}
          />
          <div style={{ 
            width: '150px', 
            height: '150px', 
            borderRadius: '16px', 
            background: '#1a1a1a',
            border: '2px solid #333',
            display: 'none',
            alignItems: 'center',
            justifyContent: 'center',
            flexDirection: 'column',
            color: '#666'
          }}>
            <svg width="50" height="50" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
              <circle cx="12" cy="7" r="4" />
            </svg>
          </div>
        </div>
        <div style={{ flex: 1 }}>
          <h1 style={{ fontSize: '32px', fontWeight: 700, marginBottom: '8px' }}>{personalInfo.name}</h1>
          <p style={{ fontSize: '18px', color: '#aaa', marginBottom: '16px' }}>{personalInfo.title}</p>
          <p style={{ fontSize: '16px', lineHeight: 1.8, color: '#ccc' }}>
            {personalInfo.summary}
          </p>
        </div>
      </div>
      
      <h2 style={{ fontSize: '24px', fontWeight: 600, marginBottom: '16px', marginTop: '32px' }}>Education</h2>
      {education.map((edu, i) => (
        <div key={i} style={{ marginBottom: '16px', padding: '16px', background: '#1a1a1a', borderRadius: '12px' }}>
          <div style={{ fontWeight: 600, fontSize: '16px', marginBottom: '6px' }}>{edu.institution}</div>
          <div style={{ color: '#aaa', fontSize: '14px' }}>{edu.degree}</div>
          <div style={{ color: '#888', fontSize: '13px' }}>{edu.period}</div>
        </div>
      ))}
    </div>
  );
}

function SkillsContent() {
  return (
    <div style={{ color: '#fff' }}>
      <h1 style={{ fontSize: '32px', fontWeight: 700, marginBottom: '24px' }}>Technical Skills</h1>
      
      <div style={{ marginBottom: '20px' }}>
        <h3 style={{ fontSize: '14px', fontWeight: 600, marginBottom: '12px', color: '#aaa', textTransform: 'uppercase', letterSpacing: '1.5px' }}>Languages</h3>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
          {skills.languages.map((s, i) => (
            <span key={i} style={{ background: '#1a1a1a', padding: '8px 16px', borderRadius: '8px', fontSize: '14px' }}>
              {s.name}
            </span>
          ))}
        </div>
      </div>

      <div style={{ marginBottom: '20px' }}>
        <h3 style={{ fontSize: '14px', fontWeight: 600, marginBottom: '12px', color: '#aaa', textTransform: 'uppercase', letterSpacing: '1.5px' }}>Frameworks</h3>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
          {skills.frameworks.map((s, i) => (
            <span key={i} style={{ background: '#1a1a1a', padding: '8px 16px', borderRadius: '8px', fontSize: '14px' }}>
              {s.name}
            </span>
          ))}
        </div>
      </div>

      <div style={{ marginBottom: '20px' }}>
        <h3 style={{ fontSize: '14px', fontWeight: 600, marginBottom: '12px', color: '#aaa', textTransform: 'uppercase', letterSpacing: '1.5px' }}>Security</h3>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
          {skills.security.map((s, i) => (
            <span key={i} style={{ background: '#1a1a1a', padding: '8px 16px', borderRadius: '8px', fontSize: '14px' }}>
              {s.name}
            </span>
          ))}
        </div>
      </div>

      <div>
        <h3 style={{ fontSize: '14px', fontWeight: 600, marginBottom: '12px', color: '#aaa', textTransform: 'uppercase', letterSpacing: '1.5px' }}>Tools</h3>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
          {skills.tools.map((s, i) => (
            <span key={i} style={{ background: '#1a1a1a', padding: '8px 16px', borderRadius: '8px', fontSize: '14px' }}>
              {s.name}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

function ProjectsContent() {
  return (
    <div style={{ color: '#fff' }}>
      <h1 style={{ fontSize: '32px', fontWeight: 700, marginBottom: '24px' }}>Projects</h1>
      {projects.map((project, i) => (
        <div key={i} style={{ marginBottom: '32px', paddingBottom: '24px', borderBottom: i < projects.length - 1 ? '1px solid #333' : 'none' }}>
          <h2 style={{ fontSize: '22px', fontWeight: 600, marginBottom: '12px' }}>{project.title}</h2>
          <p style={{ color: '#fff', lineHeight: 1.7, marginBottom: '16px', fontSize: '15px' }}>{project.description}</p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginBottom: '16px' }}>
            {project.technologies.map((tech, j) => (
              <span key={j} style={{ background: '#1a1a1a', padding: '6px 12px', borderRadius: '6px', fontSize: '13px' }}>
                {tech}
              </span>
            ))}
          </div>
          <ul style={{ paddingLeft: '20px', color: '#fff', fontSize: '14px' }}>
            {project.features.map((feature, j) => (
              <li key={j} style={{ marginBottom: '8px' }}>{feature}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}

function CertificationsContent() {
  return (
    <div style={{ color: '#fff' }}>
      <h1 style={{ fontSize: '32px', fontWeight: 700, marginBottom: '24px' }}>Certifications</h1>
      {certifications.map((cert, i) => (
        <div key={i} style={{ marginBottom: '24px', paddingBottom: '20px', borderBottom: i < certifications.length - 1 ? '1px solid #333' : 'none' }}>
          <h2 style={{ fontSize: '20px', fontWeight: 600, marginBottom: '8px' }}>{cert.title}</h2>
          <div style={{ color: '#fff', fontSize: '13px', marginBottom: '12px' }}>{cert.issuer} | {cert.date}</div>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginBottom: '12px' }}>
            {cert.skills.map((skill, j) => (
              <span key={j} style={{ background: '#1a1a1a', padding: '5px 12px', borderRadius: '6px', fontSize: '12px' }}>
                {skill}
              </span>
            ))}
          </div>
          <ul style={{ paddingLeft: '20px', color: '#fff', fontSize: '13px' }}>
            {cert.bullets.slice(0, 4).map((bullet, j) => (
              <li key={j} style={{ marginBottom: '6px' }}>{bullet}</li>
            ))}
            {cert.bullets.length > 4 && (
              <li style={{ color: '#fff' }}>+ {cert.bullets.length - 4} more...</li>
            )}
          </ul>
        </div>
      ))}
    </div>
  );
}

function ContactContent() {
  return (
    <div style={{ color: '#fff' }}>
      <h1 style={{ fontSize: '32px', fontWeight: 700, marginBottom: '24px' }}>Contact</h1>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', maxWidth: '500px' }}>
        <div style={{ padding: '16px', background: '#1a1a1a', borderRadius: '12px' }}>
          <div style={{ fontSize: '12px', color: '#888', marginBottom: '6px' }}>Email</div>
          <div style={{ fontSize: '16px' }}>{personalInfo.email}</div>
        </div>
        <div style={{ padding: '16px', background: '#1a1a1a', borderRadius: '12px' }}>
          <div style={{ fontSize: '12px', color: '#888', marginBottom: '6px' }}>Phone</div>
          <div style={{ fontSize: '16px' }}>{personalInfo.phone}</div>
        </div>
        <div style={{ padding: '16px', background: '#1a1a1a', borderRadius: '12px' }}>
          <div style={{ fontSize: '12px', color: '#888', marginBottom: '6px' }}>Location</div>
          <div style={{ fontSize: '16px' }}>{personalInfo.location}</div>
        </div>
        <div style={{ padding: '16px', background: '#1a1a1a', borderRadius: '12px' }}>
          <div style={{ fontSize: '12px', color: '#888', marginBottom: '6px' }}>LinkedIn</div>
          <div style={{ fontSize: '16px' }}>{personalInfo.linkedin.replace('https://', '')}</div>
        </div>
        <div style={{ padding: '16px', background: '#1a1a1a', borderRadius: '12px' }}>
          <div style={{ fontSize: '12px', color: '#888', marginBottom: '6px' }}>GitHub</div>
          <div style={{ fontSize: '16px' }}>{personalInfo.github.replace('https://', '')}</div>
        </div>
      </div>
    </div>
  );
}

// Menu items for the flowing menu
const menuItems = [
  { 
    id: 'about',
    link: '#about', 
    text: 'About', 
    image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=600&h=400&fit=crop'
  },
  { 
    id: 'skills',
    link: '#skills', 
    text: 'Skills', 
    image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=600&h=400&fit=crop'
  },
  { 
    id: 'projects',
    link: '#projects', 
    text: 'Projects', 
    image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=600&h=400&fit=crop'
  },
  { 
    id: 'certifications',
    link: '#certifications', 
    text: 'Certifications', 
    image: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=600&h=400&fit=crop'
  },
  { 
    id: 'contact',
    link: '#contact', 
    text: 'Contact', 
    image: 'https://images.unsplash.com/photo-1596526131083-e8c633c948d2?w=600&h=400&fit=crop'
  }
];

function App() {
  const [activeSection, setActiveSection] = useState('about');

  const renderContent = () => {
    switch (activeSection) {
      case 'about':
        return <AboutContent />;
      case 'skills':
        return <SkillsContent />;
      case 'projects':
        return <ProjectsContent />;
      case 'certifications':
        return <CertificationsContent />;
      case 'contact':
        return <ContactContent />;
      default:
        return <AboutContent />;
    }
  };

  return (
    <div style={{ 
      width: '100vw', 
      height: '100vh', 
      overflow: 'hidden',
      position: 'relative',
      background: '#0a0a0a'
    }}>
      <TargetCursor 
        targetSelector=".cursor-target"
        spinDuration={2}
        hideDefaultCursor={true}
        hoverDuration={0.2}
        parallaxOn={true}
      />
      
      {/* Background */}
      <div style={{ 
        position: 'fixed', 
        top: 0, 
        left: 0, 
        width: '100%', 
        height: '100%',
        zIndex: 0
      }}>
        <Dither
          waveColor={[0.5, 0.5, 0.5]}
          disableAnimation={false}
          enableMouseInteraction={true}
          mouseRadius={0.3}
          colorNum={4}
          waveAmplitude={0.3}
          waveFrequency={3}
          waveSpeed={0.05}
        />
      </div>
      
      {/* Menu */}
      <div style={{ 
        position: 'relative', 
        zIndex: 10
      }}>
        <FlowingMenu 
          items={menuItems}
          speed={15}
          textColor="#ffffff"
          bgColor="rgba(10, 10, 10, 0.8)"
          marqueeBgColor="#ffffff"
          marqueeTextColor="#060010"
          borderColor="#ffffff"
          onItemClick={setActiveSection}
        />
      </div>

      {/* Content */}
      <div style={{ 
        position: 'relative',
        zIndex: 5,
        height: 'calc(100vh - 50px)',
        overflowY: 'auto',
        padding: '40px',
        maxWidth: '900px',
        margin: '0 auto',
        background: 'transparent'
      }}>
        {renderContent()}
      </div>
    </div>
  );
}

export default App;
