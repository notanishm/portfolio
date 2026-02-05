export const personalInfo = {
  name: 'Anish Maisekar',
  title: 'Full Stack Developer & Security Specialist',
  email: 'anishmaisekar@outlook.com',
  phone: '+91-8668726893',
  location: 'Pune, Maharashtra, India',
  linkedin: 'https://linkedin.com/in/anish-maisekar-508158298',
  github: 'https://github.com/notanishm',
  summary: `Results-driven Full Stack Developer with expertise in building secure, scalable web applications. 
  Specialized in encryption technologies, API security, and modern web development frameworks. 
  Passionate about creating robust solutions that prioritize both functionality and security. 
  Experienced in implementing end-to-end encryption systems and secure communication protocols.`,
};

export const skills = {
  languages: [
    { name: 'JavaScript', level: 95 },
    { name: 'Python', level: 90 },
    { name: 'TypeScript', level: 85 },
    { name: 'Java', level: 80 },
    { name: 'C++', level: 75 },
  ],
  frameworks: [
    { name: 'React', level: 95 },
    { name: 'Node.js', level: 90 },
    { name: 'Express.js', level: 90 },
    { name: 'Next.js', level: 85 },
    { name: 'Django', level: 80 },
  ],
  security: [
    { name: 'Encryption (AES/RSA)', level: 90 },
    { name: 'API Security', level: 90 },
    { name: 'OAuth 2.0 / JWT', level: 85 },
    { name: 'Penetration Testing', level: 80 },
    { name: 'Security Compliance', level: 85 },
  ],
  tools: [
    { name: 'Git & GitHub', level: 95 },
    { name: 'Docker', level: 85 },
    { name: 'AWS', level: 80 },
    { name: 'MongoDB', level: 90 },
    { name: 'PostgreSQL', level: 85 },
    { name: 'Redis', level: 80 },
  ],
};

export const education = {
  degree: 'Bachelor of Technology in Computer Science',
  institution: 'Pune University',
  location: 'Pune, Maharashtra',
  period: '2021 - 2025',
  gpa: '8.5/10',
  relevantCourses: [
    'Data Structures & Algorithms',
    'Web Security',
    'Database Management',
    'Software Engineering',
    'Cryptography',
    'Computer Networks',
  ],
};

export const projects = [
  {
    id: 1,
    title: 'Encrypted Communication Platform',
    description: 'A secure, end-to-end encrypted messaging platform built with modern web technologies. Features real-time messaging with AES-256 encryption, secure file sharing, and zero-knowledge architecture.',
    technologies: ['React', 'Node.js', 'Socket.io', 'WebRTC', 'MongoDB', 'Redis'],
    features: [
      'End-to-end encryption using AES-256',
      'Real-time messaging with Socket.io',
      'Secure file sharing with encrypted storage',
      'Zero-knowledge architecture',
      'Two-factor authentication',
      'Self-destructing messages',
    ],
    github: 'https://github.com/notanishm',
    live: null,
    category: 'Security',
  },
  {
    id: 2,
    title: 'Portfolio Management Dashboard',
    description: 'A comprehensive dashboard for tracking investments and portfolio performance with real-time data visualization.',
    technologies: ['React', 'D3.js', 'Node.js', 'PostgreSQL'],
    features: [
      'Real-time stock tracking',
      'Interactive charts and graphs',
      'Portfolio performance analytics',
      'Risk assessment tools',
    ],
    github: 'https://github.com/notanishm',
    live: null,
    category: 'FinTech',
  },
  {
    id: 3,
    title: 'Secure File Sharing System',
    description: 'A secure file sharing platform with client-side encryption and granular access controls.',
    technologies: ['Next.js', 'AWS S3', 'Node.js', 'MongoDB'],
    features: [
      'Client-side encryption',
      'Role-based access control',
      'Audit logging',
      'Secure sharing links',
    ],
    github: 'https://github.com/notanishm',
    live: null,
    category: 'Security',
  },
];

export const certifications = [
  {
    id: 1,
    title: 'Security & Compliance Certification',
    issuer: 'ISC2',
    date: '2024',
    description: 'Comprehensive certification covering security frameworks, compliance standards, and risk management.',
    skills: ['Risk Management', 'Compliance', 'Security Frameworks'],
    link: null,
  },
  {
    id: 2,
    title: 'Backend Development & API Security',
    issuer: 'Coursera',
    date: '2024',
    description: 'Advanced course on building secure APIs, authentication mechanisms, and backend security best practices.',
    skills: ['API Security', 'OAuth', 'JWT', 'Backend Development'],
    link: null,
  },
  {
    id: 3,
    title: 'Frontend Development Specialization',
    issuer: 'Meta',
    date: '2023',
    description: 'Complete frontend development program covering React, responsive design, and modern JavaScript.',
    skills: ['React', 'JavaScript', 'UI/UX', 'Responsive Design'],
    link: null,
  },
  {
    id: 4,
    title: 'Web Application Security',
    issuer: 'PortSwigger',
    date: '2024',
    description: 'Hands-on training in web application security testing and vulnerability assessment.',
    skills: ['Penetration Testing', 'OWASP', 'Vulnerability Assessment'],
    link: null,
  },
];

export const navigationItems = [
  { id: 'home', label: 'Home', icon: 'Home' },
  { id: 'about', label: 'About', icon: 'User' },
  { id: 'skills', label: 'Skills', icon: 'Code' },
  { id: 'projects', label: 'Projects', icon: 'Folder' },
  { id: 'certifications', label: 'Certifications', icon: 'Award' },
  { id: 'contact', label: 'Contact', icon: 'Mail' },
];