export const personalInfo = {
  name: 'Anish Maisekar',
  title: 'B.E. Student | Application Security & Software Development',
  email: 'anishmaisekar@outlook.com',
  phone: '+91-8668726893',
  location: 'Pune, Maharashtra, India',
  linkedin: 'https://linkedin.com/in/anish-maisekar',
  github: 'https://github.com/notanishm',
  summary:
    'Bachelor of Engineering student specializing in application security and software development. Proficient in Python, Java, C#, and JavaScript frameworks with hands-on experience in cryptography, socket programming, and API security. Certified in OWASP Top 10, HIPAA compliance, and secure coding practices. Proven ability to architect secure, scalable applications with expertise in backend development and multi-threaded systems.',
};

export const skills = {
  // Populate these from your resume. Each item can be:
  // - { name: string, level?: number }
  // - { name: string } (if you don't want proficiency)
  languages: [
    { name: 'Python' },
    { name: 'Java' },
    { name: 'C#' },
    { name: 'C/C++' },
    { name: 'JavaScript' },
    { name: 'Ruby' },
    { name: 'PHP' },
    { name: 'SQL' },
  ],
  frameworks: [
    { name: 'Django' },
    { name: '.NET' },
    { name: 'React' },
    { name: 'Angular' },
    { name: 'AngularJS' },
    { name: 'Ruby on Rails' },
    { name: 'Flask' },
    { name: 'CustomTkinter' },
  ],
  security: [
    { name: 'OWASP Top 10' },
    { name: 'API Security' },
    { name: 'Cryptography' },
    { name: 'Fernet Encryption' },
    { name: 'Secure Coding' },
    { name: 'HIPAA' },
    { name: 'Vulnerability Assessment' },
  ],
  tools: [
    { name: 'Git' },
    { name: 'GitHub' },
    { name: 'Linux' },
    { name: 'REST APIs' },
    { name: 'JSON' },
    { name: 'Socket Programming' },
    { name: 'Multi-threading' },
    { name: 'Network Security' },
    { name: 'CI/CD' },
  ],
};

export const education = [
  {
    institution: 'Hutchings High School',
    degree: 'Hutchings High School and Junior College',
    location: '',
    period: '2011-2023',
    score: '',
    relevantCourses: [],
  },
  {
    institution: 'P.E.S Modern College of Engineering, Pune University',
    degree: 'Bachelor of Engineering (B.E.)',
    location: 'Pune, Maharashtra',
    period: 'Expected 2027',
    score: '',
    relevantCourses: [],
  },
];

export const projects = [
  {
    id: 1,
    title: 'Encrypted Communication Platform',
    description:
      'Secure real-time messaging platform with end-to-end Fernet encryption, multi-threaded server architecture, and a desktop GUI client.',
    technologies: [
      'Python',
      'Cryptography',
      'Socket Programming',
      'Threading',
      'CustomTkinter',
      'JSON',
    ],
    features: [
      'Engineered secure real-time messaging with end-to-end Fernet encryption supporting 50+ concurrent users',
      'Built multi-threaded server with connection pooling, automatic failover, and session management using Python sockets',
      'Created CustomTkinter GUI client with encryption key management, clipboard integration, and JSON message protocol',
      'Implemented secure authentication with username validation, duplicate detection, and brute-force protection mechanisms',
    ],
    github: '',
    live: null,
    category: 'Security',
  },
];

export const certifications = [
  {
    id: 1,
    title: 'Security & Compliance',
    issuer: 'Checkmarx Codebashing',
    date: 'August 2025 - January 2026',
    description: '',
    bullets: [
      'Language Agnostic Application Security',
      'Source Code Security',
      'HIPAA Compliance',
      'iOS Security',
      'OWASP Top 10 for Decision Makers',
      'OWASP Top 10 for QA',
      'Supply Chain Security',
      'Brute-Force Protection',
    ],
    skills: ['OWASP Top 10', 'HIPAA', 'Secure Coding'],
    link: null,
  },
  {
    id: 2,
    title: 'Backend Development & API Security',
    issuer: 'Checkmarx Codebashing',
    date: 'August 2025 - January 2026',
    description: '',
    bullets: [
      'Python: Backend Security Basics, Django, Advanced Python 2',
      'Java: Backend Security Basics, Advanced Java 2, OWASP Java API Security, Java API Security',
      '.NET: Backend Security Basics, .NET API Security',
      'PHP: Backend Security Basics',
      'Ruby on Rails',
      'C Programming',
    ],
    skills: ['API Security', 'Secure Coding'],
    link: null,
  },
  {
    id: 3,
    title: 'Frontend Development',
    issuer: 'Checkmarx Codebashing',
    date: 'December 2025 - January 2026',
    description: '',
    bullets: ['React', 'Angular 2+', 'AngularJS'],
    skills: ['React', 'Angular'],
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

const svgDataUri = (label, accent = '#2f78ff') => {
  const svg = `<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" width="900" height="900" viewBox="0 0 900 900">
  <defs>
    <linearGradient id="g" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0" stop-color="${accent}" stop-opacity="0.95"/>
      <stop offset="1" stop-color="#0b1220" stop-opacity="1"/>
    </linearGradient>
    <radialGradient id="r" cx="50%" cy="35%" r="70%">
      <stop offset="0" stop-color="#ffffff" stop-opacity="0.12"/>
      <stop offset="1" stop-color="#ffffff" stop-opacity="0"/>
    </radialGradient>
  </defs>
  <rect width="900" height="900" fill="url(#g)"/>
  <rect width="900" height="900" fill="url(#r)"/>
  <g fill="#ffffff" fill-opacity="0.92" font-family="Inter, system-ui, -apple-system, Segoe UI, Roboto" text-anchor="middle">
    <text x="450" y="470" font-size="84" font-weight="800" letter-spacing="1">${label}</text>
  </g>
</svg>`;
  return `data:image/svg+xml,${encodeURIComponent(svg)}`;
};

// Items used by the ReactBits Infinite Menu (3D). Keep these titles generic and resume-safe.
export const menu3dItems = [
  { id: 'home', title: 'Home', description: '', link: '#home', image: '/profile-photo.jpg' },
  { id: 'about', title: 'About', description: '', link: '#about', image: svgDataUri('About', '#0ea5e9') },
  { id: 'skills', title: 'Skills', description: '', link: '#skills', image: svgDataUri('Skills', '#2f78ff') },
  { id: 'projects', title: 'Projects', description: '', link: '#projects', image: svgDataUri('Projects', '#22c55e') },
  { id: 'certifications', title: 'Certifications', description: '', link: '#certifications', image: svgDataUri('Certs', '#a855f7') },
  { id: 'contact', title: 'Contact', description: '', link: '#contact', image: svgDataUri('Contact', '#f97316') },
];
