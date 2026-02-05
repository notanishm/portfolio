import { useState } from 'react';
import DitherBackground from './components/DitherBackground';
import FlowingMenu from './components/FlowingMenu';
import { personalInfo, skills, education, projects, certifications } from './data/content';

function AboutContent() {
  return (
    <div style={{ color: '#fff' }}>
      <h1 style={{ fontSize: '28px', fontWeight: 700, marginBottom: '24px' }}>About Me</h1>
      <p style={{ fontSize: '15px', lineHeight: 1.7, marginBottom: '24px', color: 'rgba(255,255,255,0.75)' }}>
        {personalInfo.summary}
      </p>
      <h2 style={{ fontSize: '18px', fontWeight: 600, marginBottom: '16px' }}>Education</h2>
      {education.map((edu, i) => (
        <div key={i} style={{ marginBottom: '16px' }}>
          <div style={{ fontWeight: 600, fontSize: '16px' }}>{edu.institution}</div>
          <div style={{ color: 'rgba(255,255,255,0.6)', fontSize: '13px' }}>{edu.degree}</div>
          <div style={{ color: 'rgba(255,255,255,0.5)', fontSize: '13px' }}>{edu.period}</div>
        </div>
      ))}
    </div>
  );
}

function SkillsContent() {
  return (
    <div style={{ color: '#fff' }}>
      <h1 style={{ fontSize: '28px', fontWeight: 700, marginBottom: '24px' }}>Technical Skills</h1>
      
      <div style={{ marginBottom: '20px' }}>
        <h3 style={{ fontSize: '14px', fontWeight: 600, marginBottom: '12px', color: 'rgba(255,255,255,0.5)' }}>Languages</h3>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
          {skills.languages.map((s, i) => (
            <span key={i} style={{ background: 'rgba(255,255,255,0.08)', padding: '6px 14px', borderRadius: '20px', fontSize: '13px' }}>
              {s.name}
            </span>
          ))}
        </div>
      </div>

      <div style={{ marginBottom: '20px' }}>
        <h3 style={{ fontSize: '14px', fontWeight: 600, marginBottom: '12px', color: 'rgba(255,255,255,0.5)' }}>Frameworks</h3>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
          {skills.frameworks.map((s, i) => (
            <span key={i} style={{ background: 'rgba(255,255,255,0.08)', padding: '6px 14px', borderRadius: '20px', fontSize: '13px' }}>
              {s.name}
            </span>
          ))}
        </div>
      </div>

      <div style={{ marginBottom: '20px' }}>
        <h3 style={{ fontSize: '14px', fontWeight: 600, marginBottom: '12px', color: 'rgba(255,255,255,0.5)' }}>Security</h3>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
          {skills.security.map((s, i) => (
            <span key={i} style={{ background: 'rgba(255,255,255,0.08)', padding: '6px 14px', borderRadius: '20px', fontSize: '13px' }}>
              {s.name}
            </span>
          ))}
        </div>
      </div>

      <div>
        <h3 style={{ fontSize: '14px', fontWeight: 600, marginBottom: '12px', color: 'rgba(255,255,255,0.5)' }}>Tools</h3>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
          {skills.tools.map((s, i) => (
            <span key={i} style={{ background: 'rgba(255,255,255,0.08)', padding: '6px 14px', borderRadius: '20px', fontSize: '13px' }}>
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
      <h1 style={{ fontSize: '28px', fontWeight: 700, marginBottom: '24px' }}>Projects</h1>
      {projects.map((project, i) => (
        <div key={i} style={{ marginBottom: '32px' }}>
          <h2 style={{ fontSize: '20px', fontWeight: 600, marginBottom: '12px' }}>{project.title}</h2>
          <p style={{ color: 'rgba(255,255,255,0.7)', lineHeight: 1.6, marginBottom: '16px', fontSize: '14px' }}>{project.description}</p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginBottom: '16px' }}>
            {project.technologies.map((tech, j) => (
              <span key={j} style={{ background: 'rgba(255,255,255,0.08)', padding: '4px 12px', borderRadius: '16px', fontSize: '12px' }}>
                {tech}
              </span>
            ))}
          </div>
          <ul style={{ paddingLeft: '18px', color: 'rgba(255,255,255,0.7)', fontSize: '14px' }}>
            {project.features.map((feature, j) => (
              <li key={j} style={{ marginBottom: '8px', lineHeight: 1.5 }}>{feature}</li>
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
      <h1 style={{ fontSize: '28px', fontWeight: 700, marginBottom: '24px' }}>Certifications</h1>
      {certifications.map((cert, i) => (
        <div key={i} style={{ marginBottom: '28px', paddingBottom: '24px', borderBottom: i < certifications.length - 1 ? '1px solid rgba(255,255,255,0.06)' : 'none' }}>
          <h2 style={{ fontSize: '18px', fontWeight: 600, marginBottom: '8px' }}>{cert.title}</h2>
          <div style={{ color: 'rgba(255,255,255,0.5)', fontSize: '13px', marginBottom: '12px' }}>
            {cert.issuer} | {cert.date}
          </div>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginBottom: '12px' }}>
            {cert.skills.map((skill, j) => (
              <span key={j} style={{ background: 'rgba(255,255,255,0.08)', padding: '4px 10px', borderRadius: '12px', fontSize: '12px' }}>
                {skill}
              </span>
            ))}
          </div>
          <ul style={{ paddingLeft: '18px', color: 'rgba(255,255,255,0.65)', fontSize: '13px' }}>
            {cert.bullets.slice(0, 5).map((bullet, j) => (
              <li key={j} style={{ marginBottom: '6px' }}>{bullet}</li>
            ))}
            {cert.bullets.length > 5 && (
              <li style={{ color: 'rgba(255,255,255,0.4)' }}>+ {cert.bullets.length - 5} more...</li>
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
      <h1 style={{ fontSize: '28px', fontWeight: 700, marginBottom: '24px' }}>Contact</h1>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
        <div>
          <div style={{ fontSize: '12px', color: 'rgba(255,255,255,0.4)', marginBottom: '4px' }}>Email</div>
          <div style={{ fontSize: '16px' }}>{personalInfo.email}</div>
        </div>
        <div>
          <div style={{ fontSize: '12px', color: 'rgba(255,255,255,0.4)', marginBottom: '4px' }}>Phone</div>
          <div style={{ fontSize: '16px' }}>{personalInfo.phone}</div>
        </div>
        <div>
          <div style={{ fontSize: '12px', color: 'rgba(255,255,255,0.4)', marginBottom: '4px' }}>Location</div>
          <div style={{ fontSize: '16px' }}>{personalInfo.location}</div>
        </div>
        <div>
          <div style={{ fontSize: '12px', color: 'rgba(255,255,255,0.4)', marginBottom: '4px' }}>LinkedIn</div>
          <div style={{ fontSize: '16px' }}>{personalInfo.linkedin.replace('https://', '')}</div>
        </div>
        <div>
          <div style={{ fontSize: '12px', color: 'rgba(255,255,255,0.4)', marginBottom: '4px' }}>GitHub</div>
          <div style={{ fontSize: '16px' }}>{personalInfo.github.replace('https://', '')}</div>
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
    <div style={{ minHeight: '100vh', position: 'relative' }}>
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
