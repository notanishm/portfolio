export const personalInfo = {
  name: 'Anish Maisekar',
  title: 'B.E. Student | Application Security & Software Development',
  email: 'anishmaisekar@outlook.com',
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

// Items used by the ReactBits Infinite Menu (3D).
// Thumb view shows only the topic title; when focused, the disc enlarges and reveals details.
export const menu3dItems = [
  {
    id: 'home',
    title: 'Home',
    accent: '#2f78ff',
    detailTitle: 'Anish Maisekar',
    detailLines: [
      personalInfo.title,
      personalInfo.location,
      personalInfo.email,
      personalInfo.linkedin.replace('https://', ''),
      personalInfo.github.replace('https://', ''),
    ],
  },
  {
    id: 'about',
    title: 'Professional Summary',
    accent: '#0ea5e9',
    includePhoto: true,
    detailTitle: 'Professional Summary',
    detailLines: [personalInfo.summary],
    detailFooterLines: [
      'Education',
      `${education[1].degree} | ${education[1].period}`,
      education[1].institution,
      `${education[0].degree} | ${education[0].period}`,
      education[0].degree,
    ],
  },
  {
    id: 'skills',
    title: 'Skills',
    accent: '#2f78ff',
    detailTitle: 'Technical Skills',
    detailLines: [
      `Languages: ${skills.languages.map((x) => x.name).join(', ')}`,
      `Frameworks: ${skills.frameworks.map((x) => x.name).join(', ')}`,
      `Security: ${skills.security.map((x) => x.name).join(', ')}`,
      `Tools: ${skills.tools.map((x) => x.name).join(', ')}`,
    ],
  },
  {
    id: 'projects',
    title: 'Projects',
    accent: '#22c55e',
    detailTitle: projects[0]?.title || 'Projects',
    detailLines: projects[0]?.features || [],
  },
  {
    id: 'certifications',
    title: 'Certifications',
    accent: '#a855f7',
    dense: true,
    detailTitle: 'Certifications',
    detailLines: [
      `${certifications[0].title} - ${certifications[0].issuer}`,
      certifications[0].date,
      ...certifications[0].bullets,
      '',
      `${certifications[1].title} - ${certifications[1].issuer}`,
      certifications[1].date,
      ...certifications[1].bullets,
      '',
      `${certifications[2].title} - ${certifications[2].issuer}`,
      certifications[2].date,
      ...certifications[2].bullets,
    ],
  },
  {
    id: 'contact',
    title: 'Contact',
    accent: '#f97316',
    detailTitle: 'Contact',
    detailLines: [
      personalInfo.email,
      personalInfo.phone,
      personalInfo.location,
      personalInfo.linkedin.replace('https://', ''),
      personalInfo.github.replace('https://', ''),
    ],
  },
];
