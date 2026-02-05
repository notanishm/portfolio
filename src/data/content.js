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
