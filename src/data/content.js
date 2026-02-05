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

const wrapWords = (text, maxChars) => {
  const words = String(text || '').replace(/\s+/g, ' ').trim().split(' ');
  const lines = [];
  let line = '';
  for (const w of words) {
    const next = line ? `${line} ${w}` : w;
    if (next.length > maxChars) {
      if (line) lines.push(line);
      line = w;
    } else {
      line = next;
    }
  }
  if (line) lines.push(line);
  return lines;
};

const svgCardDataUri = ({ title, lines, accent = '#2f78ff' }) => {
  const safeLines = (lines || []).map((l) => String(l)).filter(Boolean);
  const esc = (s) => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;');
  const titleEsc = esc(title);
  const tspans = safeLines
    .slice(0, 9)
    .map((l, i) => `<tspan x="72" dy="${i === 0 ? 0 : 44}">${esc(l)}</tspan>`)
    .join('');

  const svg = `<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" width="900" height="900" viewBox="0 0 900 900">
  <defs>
    <linearGradient id="g" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0" stop-color="${accent}" stop-opacity="0.92"/>
      <stop offset="1" stop-color="#0b1220" stop-opacity="1"/>
    </linearGradient>
    <radialGradient id="r" cx="50%" cy="25%" r="75%">
      <stop offset="0" stop-color="#ffffff" stop-opacity="0.14"/>
      <stop offset="1" stop-color="#ffffff" stop-opacity="0"/>
    </radialGradient>
    <filter id="blur" x="-20%" y="-20%" width="140%" height="140%">
      <feGaussianBlur stdDeviation="18" />
    </filter>
  </defs>

  <rect width="900" height="900" rx="72" fill="url(#g)"/>
  <rect width="900" height="900" rx="72" fill="url(#r)"/>

  <circle cx="150" cy="140" r="92" fill="#ffffff" fill-opacity="0.06" filter="url(#blur)" />
  <circle cx="720" cy="730" r="150" fill="#ffffff" fill-opacity="0.05" filter="url(#blur)" />

  <g font-family="Inter, system-ui, -apple-system, Segoe UI, Roboto" fill="#ffffff">
    <text x="72" y="120" font-size="56" font-weight="900" letter-spacing="-0.5">${titleEsc}</text>
    <rect x="72" y="150" width="756" height="2" fill="#ffffff" fill-opacity="0.22" />
    <text x="72" y="230" font-size="30" font-weight="600" fill-opacity="0.9">
      ${tspans}
    </text>
  </g>
</svg>`;

  return `data:image/svg+xml,${encodeURIComponent(svg)}`;
};

const clampLines = (arr, max) => (arr || []).filter(Boolean).slice(0, max);

const skillsLine = (label, list, maxItems) => {
  const items = (list || []).map((x) => x.name).filter(Boolean);
  const shown = items.slice(0, maxItems).join(', ');
  const suffix = items.length > maxItems ? ', ...' : '';
  return `${label}: ${shown}${suffix}`;
};

// Items used by the ReactBits Infinite Menu (3D). Each disc image contains the section content.
export const menu3dItems = [
  {
    id: 'home',
    title: 'Home',
    description: '',
    link: '#',
    // Use the provided photo on one disc.
    image: '/profile-photo.jpg',
  },
  {
    id: 'about',
    title: 'About',
    description: '',
    link: '#',
    image: svgCardDataUri({
      title: 'Professional Summary',
      accent: '#0ea5e9',
      lines: [
        ...clampLines(wrapWords(personalInfo.summary, 36), 6),
        '',
        'Education',
        `${education[1].degree} | ${education[1].period}`,
        education[1].institution,
        `${education[0].degree} | ${education[0].period}`,
      ],
    }),
  },
  {
    id: 'skills',
    title: 'Skills',
    description: '',
    link: '#',
    image: svgCardDataUri({
      title: 'Technical Skills',
      accent: '#2f78ff',
      lines: [
        skillsLine('Languages', skills.languages, 6),
        skillsLine('Frameworks', skills.frameworks, 6),
        skillsLine('Security', skills.security, 6),
        skillsLine('Tools', skills.tools, 6),
      ],
    }),
  },
  {
    id: 'projects',
    title: 'Projects',
    description: '',
    link: '#',
    image: svgCardDataUri({
      title: 'Encrypted Communication Platform',
      accent: '#22c55e',
      lines: clampLines(projects[0]?.features || [], 9),
    }),
  },
  {
    id: 'certifications',
    title: 'Certifications',
    description: '',
    link: '#',
    image: svgCardDataUri({
      title: 'Certifications',
      accent: '#a855f7',
      lines: [
        `${certifications[0].title} (${certifications[0].date})`,
        ...clampLines(certifications[0].bullets, 4),
        `${certifications[1].title} (${certifications[1].date})`,
        ...clampLines(certifications[1].bullets, 2),
        `${certifications[2].title} (${certifications[2].date})`,
        ...clampLines(certifications[2].bullets, 2),
      ],
    }),
  },
  {
    id: 'contact',
    title: 'Contact',
    description: '',
    link: '#',
    image: svgCardDataUri({
      title: 'Contact',
      accent: '#f97316',
      lines: [
        personalInfo.name,
        personalInfo.email,
        personalInfo.phone,
        personalInfo.location,
        personalInfo.linkedin.replace('https://', ''),
        personalInfo.github.replace('https://', ''),
      ],
    }),
  },
];
