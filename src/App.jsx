import { useState } from 'react';
import DitherBackground from './components/DitherBackground';
import TargetCursor from './components/TargetCursor';
import FlowingMenu from './components/FlowingMenu';
import { personalInfo, skills, education, projects, certifications } from './data/content';

function AboutContent() {
  return (
    <div style={{ color: '#fff' }}>
      <h1 style={{ fontSize: '24px', fontWeight: 700, marginBottom: '20px' }}>About Me</h1>
      <p style={{ fontSize: '14px', lineHeight: 1.7, marginBottom: '20px', color: '#bbb' }}>
        {personalInfo.summary}
      </p>
      <h2 style={{ fontSize: '16px', fontWeight: 600, marginBottom: '12px', marginTop: '24px' }}>Education</h2>
      {education.map((edu, i) => (
        <div key={i} style={{ marginBottom: '12px', padding: '12px', background: '#1a1a1a', borderRadius: '8px' }}>
          <div style={{ fontWeight: 600, fontSize: '14px', marginBottom: '4px' }}>{edu.institution}</div>
          <div style={{ color: '#888', fontSize: '13px' }}>{edu.degree}</div>
          <div style={{ color: '#666', fontSize: '12px' }}>{edu.period}</div>
        </div>
      ))}
    </div>
  );
}

function SkillsContent() {
  return (
    <div style={{ color: '#fff' }}>
      <h1 style={{ fontSize: '24px', fontWeight: 700, marginBottom: '20px' }}>Technical Skills</h1>
      
      <div style={{ marginBottom: '16px' }}>
        <h3 style={{ fontSize: '13px', fontWeight: 600, marginBottom: '10px', color: '#888', textTransform: 'uppercase', letterSpacing: '1px' }}>Languages</h3>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
          {skills.languages.map((s, i) => (
            <span key={i} style={{ background: '#1a1a1a', padding: '6px 12px', borderRadius: '6px', fontSize: '13px' }}>
              {s.name}
            </span>
          ))}
        </div>
      </div>

      <div style={{ marginBottom: '16px' }}>
        <h3 style={{ fontSize: '13px', fontWeight: 600, marginBottom: '10px', color: '#888', textTransform: 'uppercase', letterSpacing: '1px' }}>Frameworks</h3>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
          {skills.frameworks.map((s, i) => (
            <span key={i} style={{ background: '#1a1a1a', padding: '6px 12px', borderRadius: '6px', fontSize: '13px' }}>
              {s.name}
            </span>
          ))}
        </div>
      </div>

      <div style={{ marginBottom: '16px' }}>
        <h3 style={{ fontSize: '13px', fontWeight: 600, marginBottom: '10px', color: '#888', textTransform: 'uppercase', letterSpacing: '1px' }}>Security</h3>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
          {skills.security.map((s, i) => (
            <span key={i} style={{ background: '#1a1a1a', padding: '6px 12px', borderRadius: '6px', fontSize: '13px' }}>
              {s.name}
            </span>
          ))}
        </div>
      </div>

      <div>
        <h3 style={{ fontSize: '13px', fontWeight: 600, marginBottom: '10px', color: '#888', textTransform: 'uppercase', letterSpacing: '1px' }}>Tools</h3>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
          {skills.tools.map((s, i) => (
            <span key={i} style={{ background: '#1a1a1a', padding: '6px 12px', borderRadius: '6px', fontSize: '13px' }}>
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
      <h1 style={{ fontSize: '24px', fontWeight: 700, marginBottom: '20px' }}>Projects</h1>
      {projects.map((project, i) => (
        <div key={i} style={{ marginBottom: '24px', paddingBottom: '20px', borderBottom: i < projects.length - 1 ? '1px solid #222' : 'none' }}>
          <h2 style={{ fontSize: '18px', fontWeight: 600, marginBottom: '10px' }}>{project.title}</h2>
          <p style={{ color: '#bbb', lineHeight: 1.6, marginBottom: '14px', fontSize: '14px' }}>{project.description}</p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px', marginBottom: '14px' }}>
            {project.technologies.map((tech, j) => (
              <span key={j} style={{ background: '#1a1a1a', padding: '4px 10px', borderRadius: '4px', fontSize: '12px' }}>
                {tech}
              </span>
            ))}
          </div>
          <ul style={{ paddingLeft: '16px', color: '#999', fontSize: '13px' }}>
            {project.features.map((feature, j) => (
              <li key={j} style={{ marginBottom: '6px' }}>{feature}</li>
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
      <h1 style={{ fontSize: '24px', fontWeight: 700, marginBottom: '20px' }}>Certifications</h1>
      {certifications.map((cert, i) => (
        <div key={i} style={{ marginBottom: '20px', paddingBottom: '16px', borderBottom: i < certifications.length - 1 ? '1px solid #222' : 'none' }}>
          <h2 style={{ fontSize: '16px', fontWeight: 600, marginBottom: '6px' }}>{cert.title}</h2>
          <div style={{ color: '#888', fontSize: '12px', marginBottom: '10px' }}>{cert.issuer} | {cert.date}</div>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px', marginBottom: '10px' }}>
            {cert.skills.map((skill, j) => (
              <span key={j} style={{ background: '#1a1a1a', padding: '4px 10px', borderRadius: '4px', fontSize: '11px' }}>
                {skill}
              </span>
            ))}
          </div>
          <ul style={{ paddingLeft: '16px', color: '#999', fontSize: '12px' }}>
            {cert.bullets.slice(0, 4).map((bullet, j) => (
              <li key={j} style={{ marginBottom: '4px' }}>{bullet}</li>
            ))}
            {cert.bullets.length > 4 && (
              <li style={{ color: '#666' }}>+ {cert.bullets.length - 4} more...</li>
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
      <h1 style={{ fontSize: '24px', fontWeight: 700, marginBottom: '20px' }}>Contact</h1>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
        <div style={{ padding: '14px', background: '#1a1a1a', borderRadius: '8px' }}>
          <div style={{ fontSize: '11px', color: '#666', marginBottom: '4px' }}>Email</div>
          <div style={{ fontSize: '14px' }}>{personalInfo.email}</div>
        </div>
        <div style={{ padding: '14px', background: '#1a1a1a', borderRadius: '8px' }}>
          <div style={{ fontSize: '11px', color: '#666', marginBottom: '4px' }}>Phone</div>
          <div style={{ fontSize: '14px' }}>{personalInfo.phone}</div>
        </div>
        <div style={{ padding: '14px', background: '#1a1a1a', borderRadius: '8px' }}>
          <div style={{ fontSize: '11px', color: '#666', marginBottom: '4px' }}>Location</div>
          <div style={{ fontSize: '14px' }}>{personalInfo.location}</div>
        </div>
        <div style={{ padding: '14px', background: '#1a1a1a', borderRadius: '8px' }}>
          <div style={{ fontSize: '11px', color: '#666', marginBottom: '4px' }}>LinkedIn</div>
          <div style={{ fontSize: '14px' }}>{personalInfo.linkedin.replace('https://', '')}</div>
        </div>
        <div style={{ padding: '14px', background: '#1a1a1a', borderRadius: '8px' }}>
          <div style={{ fontSize: '11px', color: '#666', marginBottom: '4px' }}>GitHub</div>
          <div style={{ fontSize: '14px' }}>{personalInfo.github.replace('https://', '')}</div>
        </div>
      </div>
    </div>
  );
}

function App() {
  const [activeSection, setActiveSection] = useState(null);

  const handleItemSelect = (itemId) => {
    setActiveSection(itemId);
  };

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
        return null;
    }
  };

  return (
    <div style={{ minHeight: '100vh', background: '#0a0a0a' }}>
      <TargetCursor 
        targetSelector=".cursor-target"
        spinDuration={2}
        hideDefaultCursor={true}
        hoverDuration={0.2}
        parallaxOn={true}
      />
      <DitherBackground />
      
      <FlowingMenu 
        onItemSelect={handleItemSelect}
        photoUrl="/profile-photo.jpg"
        name={personalInfo.name}
        title={personalInfo.title}
      >
        {renderContent()}
      </FlowingMenu>
    </div>
  );
}

export default App;
