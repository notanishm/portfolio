/* =====================================================================
   MODEL — the data and state of the app. Never touches the DOM.
   Edit your content here: featured projects, skills, image overrides.
   ===================================================================== */

const Model = {

  githubUser: "notanishm",

  contactEmail: "anishmaisekar@outlook.com",

  state: {
    screen: "home",
    menuIndex: 0,
    reposLoaded: false,
    skillsBuilt: false,
    certsBuilt: false,
  },

  featured: [
    {
      title: "Portfolio",
      tag: "Web", color: "#c084fc",
      url: "https://github.com/notanishm/portfolio",
      cta: "View on GitHub →",
      img: "assets/projects/portfolio.png",
      desc: "Personal portfolio site with a WebGL dither background, animated navigation, and a custom cursor. Built with React, Vite, Tailwind CSS, Three.js, GSAP, and Framer Motion.",
    },
    {
      title: "Agriance",
      tag: "Web", color: "#38bdf8",
      url: "https://github.com/notanishm/agriance",
      cta: "View on GitHub →",
      img: "assets/projects/agriance.png",
      desc: "React app for agriculture intelligence, powered by Google Generative AI and Supabase. Features real-time data processing and an intuitive UI for farming insights.",
    },
    {
      title: "Yapstack",
      tag: "Full Stack", color: "#f472b6",
      url: "https://github.com/notanishm/yapstack",
      cta: "View on GitHub →",
      img: "assets/projects/yapstack.png",
      desc: "Full-stack monorepo with a Next.js frontend, Fastify backend, shared TypeScript package, and PostgreSQL via Docker. Clean architecture for scalable apps.",
    },
    {
      title: "Test Model",
      tag: "ML", color: "#34d399",
      url: "https://github.com/notanishm/test_model",
      cta: "View on GitHub →",
      img: "assets/projects/test_model.png",
      desc: "Production-ready XGBoost model for predicting loan default risk with CLI, Python API, and visualization tools. Built with Scikit-learn and Pandas.",
    },
  ],

  featuredRepoNames: [
    "portfolio",
    "agriance",
    "yapstack",
    "test_model",
  ],

  hiddenRepos: [
    "hagriance",
    "notanishm",
    "contract-engine",
    "contract_engine",
    "contractengine",
  ],

  fallbackRepos: [
    {
      name: "random-mp3-player-i-made", language: "TypeScript", stargazers_count: 0,
      html_url: "https://github.com/notanishm/random-mp3-player-i-made",
      description: "Self-hosted music platform with a PS Vita-inspired UI — desktop, mobile, and server in a Turborepo monorepo.",
    },
    {
      name: "3dmapp", language: "Python", stargazers_count: 0,
      html_url: "https://github.com/notanishm/3dmapp",
      description: "3D pathfinding visualizer with a Dijkstra calculator and web-based map renderer.",
    },
    {
      name: "ghari_anime", language: "JavaScript", stargazers_count: 0,
      html_url: "https://github.com/notanishm/ghari_anime",
      description: "Anime tracking web app that scrapes AniList data and stores it in a local database.",
    },
  ],

  projectImages: {},

  langColors: {
    JavaScript: "#f1e05a", TypeScript: "#3178c6", Python: "#3572A5",
    PHP: "#4F5D95", CSS: "#663399", HTML: "#e34c26",
    "Jupyter Notebook": "#DA5B0B", Java: "#b07219", C: "#555", "C++": "#f34b7d",
    Ruby: "#701516", Shell: "#89e051",
  },

  skills: [
    { group: "Languages", items: [
      ["Python", 92], ["Java", 85], ["C#", 80], ["C/C++", 75],
      ["JavaScript", 88], ["Ruby", 70], ["PHP", 72], ["SQL", 78],
    ]},
    { group: "Frameworks", items: [
      ["Django", 82], [".NET", 78], ["React", 86], ["Angular", 80],
      ["AngularJS", 72], ["Ruby on Rails", 68], ["Flask", 76], ["CustomTkinter", 65],
    ]},
    { group: "Security", items: [
      ["OWASP Top 10", 90], ["API Security", 85], ["Cryptography", 82],
      ["Fernet Encryption", 78], ["Secure Coding", 88], ["HIPAA", 80],
      ["Vulnerability Assessment", 82],
    ]},
    { group: "Tools", items: [
      ["Git & GitHub", 88], ["Linux", 82], ["REST APIs", 84],
      ["JSON", 80], ["Socket Programming", 76], ["Multi-threading", 74],
      ["Network Security", 78], ["CI/CD", 72],
    ]},
  ],

  certifications: [
    {
      title: "Security & Compliance",
      issuer: "Checkmarx Codebashing",
      date: "August 2025 - January 2026",
      skills: ["OWASP Top 10", "HIPAA", "Secure Coding"],
      bullets: [
        "Language Agnostic Application Security",
        "Source Code Security",
        "HIPAA Compliance",
        "iOS Security",
        "OWASP Top 10 for Decision Makers",
        "OWASP Top 10 for QA",
        "Supply Chain Security",
        "Brute-Force Protection",
      ],
    },
    {
      title: "Backend Development & API Security",
      issuer: "Checkmarx Codebashing",
      date: "August 2025 - January 2026",
      skills: ["API Security", "Secure Coding"],
      bullets: [
        "Python: Backend Security Basics, Django, Advanced Python 2",
        "Java: Backend Security Basics, Advanced Java 2, OWASP Java API Security, Java API Security",
        ".NET: Backend Security Basics, .NET API Security",
        "PHP: Backend Security Basics",
        "Ruby on Rails",
        "C Programming",
      ],
    },
    {
      title: "Frontend Development",
      issuer: "Checkmarx Codebashing",
      date: "December 2025 - January 2026",
      skills: ["React", "Angular"],
      bullets: [
        "React",
        "Angular 2+",
        "AngularJS",
      ],
    },
  ],

  async fetchRepos() {
    const skip = new Set([
      ...this.featuredRepoNames,
      ...this.hiddenRepos.map(n => n.toLowerCase()),
    ]);
    const hide = name => skip.has(name) || skip.has(name.toLowerCase().replace(/[\s_]/g, "-"));
    try {
      const res = await fetch(
        `https://api.github.com/users/${this.githubUser}/repos?per_page=100&sort=updated`
      );
      if (!res.ok) throw new Error(res.status);
      const repos = (await res.json()).filter(r => !r.fork && !hide(r.name));
      return { repos, live: true };
    } catch {
      return { repos: this.fallbackRepos.filter(r => !hide(r.name)), live: false };
    }
  },
};
