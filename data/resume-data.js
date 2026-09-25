/**
 * Consolidated resume data
 * Single source of truth for all resume content
 */

export const RESUME_DATA = {
  // =========================================
  // Personal Information
  // =========================================
  personalInfo: {
    name: "Rajeev Ranjan",
    title: "Full-Stack Engineer",
    contact: {
      email: "rajeevranjan19@outlook.com",
      phone: "+91 7543898325",
      location: "Bengaluru, KA, IN",
      linkedin: "https://www.linkedin.com/in/r4vr4n",
      github: "https://www.github.com/r4vr4n",
    },
  },

  // =========================================
  // Professional Summary
  // =========================================
  summary:
    "Full-Stack Engineer with 5+ years of experience shipping production web applications end to end, from React/TypeScript frontends to Python/FastAPI services orchestrated with Temporal, PostgreSQL, and Neo4j. Currently building the core UI and backend workflows for an LLM-powered data platform at scale. Proven track record in performance optimization, distributed systems, and mentoring developers, with a consistent focus on delivering high-impact solutions that drive business results.",

  // =========================================
  // Work Experience
  // =========================================
  workExperience: [
    {
      company: "Teragonia",
      position: "Software Engineer (Full-Stack)",
      period: "09/2025 - Present",
      location: "Bengaluru, KA · On-site",
      description:
        "Teragonia builds an LLM-powered platform that automates Kimball/dbt data warehouse modeling directly from raw Snowflake sources.",
      responsibilities: [
        "Built the core product UI (<strong>React Flow + ELK.js</strong> graph editor, live pipeline DAG, virtualized data catalog), cutting p95 drag latency from 333ms to 50-100ms.",
        "Designed human-in-the-loop approval workflows for 10,000+ tables, wired to <strong>Temporal</strong> signal-based approval gates.",
        "Delivered backend features in <strong>FastAPI</strong>: Temporal-based report generation and Excel data-model import/export with atomic transactions & real-time SSE progress.",
        "Built per-user Snowflake access via <strong>Auth0 OAuth</strong> and led a platform-wide API redesign from a nested to a flat resource model.",
        "Rebuilt the <strong>Playwright</strong> E2E suite into six parallel CI legs, each backed by a deterministic seed dataset.",
      ],
      techStack: [
        "TypeScript",
        "React 19",
        "TanStack Query/Table/Router",
        "Zustand",
        "React Flow",
        "Python",
        "FastAPI",
        "SQLAlchemy",
        "Temporal",
        "PostgreSQL",
        "Neo4j",
        "Snowflake",
        "Auth0",
        "Playwright",
      ],
    },
    {
      company: "DashClicks",
      position: "Senior Frontend Engineer",
      period: "11/2024 - 06/2025",
      location: "Jaipur, RJ · Remote",
      description:
        "DashClicks is a technology company focused on providing software solutions that enhance business operations.",
      responsibilities: [
        "Set up CI pipeline eliminating ~5 mins. of pre-commit hook processing per commit, saving ~8 hrs. of devs' time weekly.",
        "Launched an activity feed that enhanced client follow-ups & increased support team efficiency by 70%.",
        "Reduced bundle size by 40% using vanilla JS & Tailwind CSS, enhancing performance & UX for <strong>Conversation Plugin</strong>.",
      ],
      techStack: [
        "ReactJS v19",
        "MUI v5",
        "React Query v3",
        "Nx",
        "Jest",
        "Cypress",
        "Docker",
        "React Hook Form",
        "React Table",
        "CI/CD",
        "Socket.io",
      ],
    },
    {
      company: "Reconect.ai",
      position: "Contract Engineer",
      period: "08/2024 - 11/2024",
      location: "Bengaluru, KA · On-site",
      description:
        "Reconect.ai is a fintech firm focused on debt collection using digital channels.",
      responsibilities: [
        "Programmed campaign management system eliminating 20+ hours of manual trigger setup & monitoring each week.",
        "Built real-time analytics dashboards using <strong>Recharts</strong> for tracking debt collection performance metrics.",
        "Implemented automated testing with <strong>Playwright</strong>, achieving 85%+ code coverage for critical workflows.",
      ],
      techStack: [
        "ReactJS v18",
        "Mantine UI",
        "React Query v5",
        "Playwright",
        "Recharts",
        "React Table",
      ],
    },
    {
      company: "Zeitview",
      position: "Senior Frontend Engineer",
      period: "03/2022 - 08/2024",
      location: "Bengaluru, KA · Remote",
      description:
        "Zeitview is a global leader in providing drone services for asset management, leveraging advanced technologies.",
      responsibilities: [
        "Crafted <strong>DEM viewer</strong> for reducing project planning time while improving site assessment accuracy by 90%.",
        "Improved field issue tracking by 80% using coordinate-based tagging which simplified communication.",
        "Optimized <strong>Construction Monitoring</strong> codebase, slashing re-renders & boosting performance by 75%.",
        "Provided technical mentorship to 3 developers, resulting in 70% improvement in their PR approval rate.",
        "Spearheaded <strong>Analysis Tool's</strong> development eliminating external dependencies, accelerating analyst workflows by 50%.",
      ],
      techStack: [
        "MUI v5",
        "MapBox",
        "CesiumJS",
        "React-Konva",
        "kr-pano",
        "Playwright",
        "Mantine UI",
        "Recharts",
        "React Table",
        "Formik",
        "CI/CD",
        "Vitest",
      ],
      achievement: {
        title: "Resourceful Employee Of The Year",
        description: "Awarded for high-impact problem-solving with limited resources.",
        date: "12/2024",
      },
    },
    {
      company: "Estate Protocol",
      position: "Frontend Engineer",
      period: "06/2021 - 02/2022",
      location: "Noida, UP · Remote",
      description:
        "Estate Protocol is a blockchain-based real estate platform facilitating seamless transactions & processes.",
      responsibilities: [
        "Integrated Airdrop system using Web3.js serving 2,000+ claimants, achieving 90% delivery success rate.",
        "Implemented pixel-perfect landing page design achieving a 90+ Lighthouse performance score.",
      ],
      techStack: [
        "NextJS",
        "Tailwind CSS",
        "Context API",
        "Framer motion",
        "Web3.js",
      ],
    },
    {
      company: "Solytics Partners",
      position: "Junior Frontend Engineer",
      period: "06/2020 - 06/2021",
      location: "Pune, MH · Remote",
      description:
        "Solytics Partners is analytics firm focused on solving client problems through an amalgamation of advanced analytics, new-age technologies, & deep domain expertise.",
      responsibilities: [
        "Delivered 8 core modules for <strong>Nimbus Duo</strong> on schedule.",
        "Built <strong>Inventory Management</strong> system MVP in 2 weeks.",
      ],
      techStack: [
        "ReactJS v16",
        "Redux",
        "Redux Saga",
        "Material UI v4",
        "Bootstrap v4",
        "React Table v6",
        "Plotly JS",
        "Jest",
      ],
    },
  ],

  // =========================================
  // Skills (Categorized)
  // =========================================
  skills: {
    Core: ["JavaScript (ES6+)", "TypeScript", "HTML5", "CSS3"],
    Frameworks: ["ReactJS", "NextJS", "NodeJS", "ExpressJS", "FastAPI"],
    "State Management": [
      "Redux",
      "MobX",
      "Zustand",
      "Context API",
      "React Query",
    ],
    "UI & Styling": [
      "Material UI",
      "Mantine UI",
      "Tailwind CSS",
      "Sass/SCSS",
      "Styled Components",
      "Framer Motion",
      "Storybook",
    ],
    Testing: [
      "Jest",
      "Cypress",
      "Playwright",
      "Vitest",
      "React Testing Library",
    ],
    Geospatial: ["MapBox", "CesiumJS", "React-Konva", "kr-pano"],
    "DevOps & Tools": [
      "Docker",
      "CI/CD",
      "Git",
      "Github Actions",
      "Nx",
      "Webpack",
      "Vite",
      "Sentry",
      "Figma",
      "AWS",
    ],
    "Backend & Data": [
      "Python",
      "SQLAlchemy",
      "Alembic",
      "Pydantic",
      "Temporal",
      "PostgreSQL",
      "Neo4j",
      "MongoDB",
      "REST APIs",
      "WebSockets",
      "Socket.io",
      "OAuth2/Auth0",
    ],
    Other: [
      "Performance Optimization",
      "Web Security",
      "Web Accessibility (a11y)",
      "Agile/Scrum",
      "System Design",
    ],
  },

  // =========================================
  // Education
  // =========================================
  education: [
    {
      degree: "B.Tech in Computer Science & Engineering",
      institution: "Biju Patnaik University of Technology",
      location: "Bhubaneswar, OD",
      period: "03/2015 - 03/2019",
    },
  ],

  // =========================================
  // Certifications
  // =========================================
  certifications: [
    {
      name: "Certified MERN stack developer",
      issuer: "AttainU - Online Bootcamp",
      period: "07/2019 - 05/2020",
      id: "AUFS004052",
      url: "https://drive.google.com/file/d/1nXaNlu_RY5WGe2-9mIHVXUFUOnAGRBme/view",
      location: "Bangalore, KA",
    },
  ],
}

