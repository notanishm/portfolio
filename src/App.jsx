import { useState } from 'react';
import Dither from './components/Dither';
import TargetCursor from './components/TargetCursor';
import FlowingMenu from './components/FlowingMenu';
import ScrambledText from './components/ScrambledText';
import BorderGlow from './components/BorderGlow';
import { personalInfo, skills, education, projects, certifications } from './data/content';
import './App.css';

// Content Components
function AboutContent() {
  return (
    <div style={{ color: '#fff' }}>
      <div className="about-header" style={{ display: 'flex', alignItems: 'flex-start', gap: '32px', marginBottom: '32px' }}>
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
          <p style={{ fontSize: '18px', color: '#fff', marginBottom: '16px' }}>{personalInfo.title}</p>
          <p style={{ fontSize: '16px', lineHeight: 1.8, color: '#fff' }}>
            {personalInfo.summary}
          </p>
        </div>
      </div>
      
      <h2 style={{ fontSize: '24px', fontWeight: 600, marginBottom: '16px', marginTop: '32px' }}>Education</h2>
      {education.map((edu, i) => (
        <div key={i} style={{ marginBottom: '16px', padding: '16px', background: '#1a1a1a', borderRadius: '12px' }}>
          <div style={{ fontWeight: 600, fontSize: '16px', marginBottom: '6px' }}>{edu.institution}</div>
          <div style={{ color: '#fff', fontSize: '14px' }}>{edu.degree}</div>
          <div style={{ color: '#fff', fontSize: '13px' }}>{edu.period}</div>
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
        <h3 style={{ fontSize: '14px', fontWeight: 600, marginBottom: '12px', color: '#fff', textTransform: 'uppercase', letterSpacing: '1.5px' }}>Languages</h3>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
          {skills.languages.map((s, i) => (
            <span key={i} style={{ background: '#1a1a1a', padding: '8px 16px', borderRadius: '8px', fontSize: '14px' }}>
              {s.name}
            </span>
          ))}
        </div>
      </div>

      <div style={{ marginBottom: '20px' }}>
        <h3 style={{ fontSize: '14px', fontWeight: 600, marginBottom: '12px', color: '#fff', textTransform: 'uppercase', letterSpacing: '1.5px' }}>Frameworks</h3>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
          {skills.frameworks.map((s, i) => (
            <span key={i} style={{ background: '#1a1a1a', padding: '8px 16px', borderRadius: '8px', fontSize: '14px' }}>
              {s.name}
            </span>
          ))}
        </div>
      </div>

      <div style={{ marginBottom: '20px' }}>
        <h3 style={{ fontSize: '14px', fontWeight: 600, marginBottom: '12px', color: '#fff', textTransform: 'uppercase', letterSpacing: '1.5px' }}>Security</h3>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
          {skills.security.map((s, i) => (
            <span key={i} style={{ background: '#1a1a1a', padding: '8px 16px', borderRadius: '8px', fontSize: '14px' }}>
              {s.name}
            </span>
          ))}
        </div>
      </div>

      <div>
        <h3 style={{ fontSize: '14px', fontWeight: 600, marginBottom: '12px', color: '#fff', textTransform: 'uppercase', letterSpacing: '1.5px' }}>Tools</h3>
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

const PROJECT_COLORS = {
  Web: ['#c084fc', '#a78bfa', '#818cf8'],
  App: ['#38bdf8', '#22d3ee', '#67e8f9'],
  'Full Stack': ['#f472b6', '#fb923c', '#fbbf24'],
  ML: ['#34d399', '#a3e635', '#facc15'],
  Security: ['#f87171', '#fb923c', '#fbbf24'],
};

function ProjectsContent() {
  return (
    <div style={{ color: '#fff' }}>
      <h1 style={{ fontSize: '32px', fontWeight: 700, marginBottom: '24px' }}>Projects</h1>
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
          gridAutoRows: '1fr',
          gap: '16px',
        }}
      >
        {projects.map((project) => (
          <a
            key={project.id}
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            style={{ textDecoration: 'none', color: 'inherit', display: 'flex' }}
            className="cursor-target"
          >
            <BorderGlow
              edgeSensitivity={30}
              glowColor="40 80 80"
              backgroundColor="#120F17"
              borderRadius={16}
              glowRadius={30}
              glowIntensity={0.8}
              coneSpread={25}
              animated={false}
              colors={PROJECT_COLORS[project.category] || PROJECT_COLORS.Web}
              fillOpacity={0.4}
              className="project-card-hover"
              style={{ display: 'flex', flexDirection: 'column', width: '100%' }}
            >
              <div style={{ padding: '20px', display: 'flex', flexDirection: 'column', gap: '12px', height: '240px' }}>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <div
                      style={{
                        width: '36px',
                        height: '36px',
                        borderRadius: '8px',
                        background: '#1a1a1a',
                        border: '1px solid #262626',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        fontSize: '16px',
                        fontWeight: 700,
                        color: '#fff',
                      }}
                    >
                      {project.title.charAt(0).toUpperCase()}
                    </div>
                    <div>
                      <div style={{ fontSize: '15px', fontWeight: 600, color: '#ededed' }}>
                        {project.title}
                      </div>
                      <div style={{ fontSize: '12px', color: '#666', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
                        {project.category}
                      </div>
                    </div>
                  </div>
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    style={{ color: '#555', flexShrink: 0 }}
                  >
                    <path
                      d="M4 12L12 4M12 4H6M12 4V10"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>

                <p style={{ fontSize: '14px', color: '#888', lineHeight: 1.6, margin: 0, flex: 1, overflow: 'hidden', display: '-webkit-box', WebkitLineClamp: 3, WebkitBoxOrient: 'vertical' }}>
                  {project.description}
                </p>

                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px', marginTop: 'auto' }}>
                  {project.technologies.map((tech, j) => (
                    <span
                      key={j}
                      style={{
                        padding: '3px 8px',
                        borderRadius: '6px',
                        fontSize: '11px',
                        fontWeight: 500,
                        background: '#1a1a1a',
                        border: '1px solid #262626',
                        color: '#888',
                      }}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </BorderGlow>
          </a>
        ))}
      </div>
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
          <div style={{ fontSize: '12px', color: '#fff', marginBottom: '6px' }}>Email</div>
          <a 
            href={`mailto:${personalInfo.email}`}
            className="cursor-target"
            style={{ fontSize: '16px', color: '#fff', textDecoration: 'none' }}
          >
            {personalInfo.email}
          </a>
        </div>
        <div style={{ padding: '16px', background: '#1a1a1a', borderRadius: '12px' }}>
          <div style={{ fontSize: '12px', color: '#fff', marginBottom: '6px' }}>Phone</div>
          <a 
            href={`tel:${personalInfo.phone}`}
            className="cursor-target"
            style={{ fontSize: '16px', color: '#fff', textDecoration: 'none' }}
          >
            {personalInfo.phone}
          </a>
        </div>
        <div style={{ padding: '16px', background: '#1a1a1a', borderRadius: '12px' }}>
          <div style={{ fontSize: '12px', color: '#fff', marginBottom: '6px' }}>Location</div>
          <div style={{ fontSize: '16px' }}>{personalInfo.location}</div>
        </div>
        <div style={{ padding: '16px', background: '#1a1a1a', borderRadius: '12px' }}>
          <div style={{ fontSize: '12px', color: '#fff', marginBottom: '6px' }}>LinkedIn</div>
          <a 
            href={personalInfo.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="cursor-target"
            style={{ fontSize: '16px', color: '#fff', textDecoration: 'none' }}
          >
            {personalInfo.linkedin.replace('https://', '')}
          </a>
        </div>
        <div style={{ padding: '16px', background: '#1a1a1a', borderRadius: '12px' }}>
          <div style={{ fontSize: '12px', color: '#fff', marginBottom: '6px' }}>GitHub</div>
          <a 
            href={personalInfo.github}
            target="_blank"
            rel="noopener noreferrer"
            className="cursor-target"
            style={{ fontSize: '16px', color: '#fff', textDecoration: 'none' }}
          >
            {personalInfo.github.replace('https://', '')}
          </a>
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
        spinDuration={12}
        hideDefaultCursor={true}
        hoverDuration={0.15}
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
      <div 
        style={{ 
          position: 'relative', 
          zIndex: 10
        }}
      >
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
      <div
        className="content-wrapper"
        style={{ 
          position: 'relative',
          zIndex: 5,
          height: 'calc(100vh - 50px)',
          overflowY: 'auto',
          padding: '40px',
          maxWidth: '900px',
          margin: '0 auto',
          background: 'transparent'
        }}
      >
        {renderContent()}
      </div>

      {/* Arch Linux Text */}
      <ScrambledText 
        className="arch-text"
        radius={80}
        scrambleChars=".:-_/\\"
        soundFile="/yahoo.mp3"
      >
        I use Arch btw
      </ScrambledText>
    </div>
  );
}

export default App;
