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
    title: "Full-Stack Engineer (Frontend-focused)",
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
    "Full-Stack Engineer with 6+ years building production web apps, specializing in complex, high-performance React/TypeScript frontends (design-system components, data-dense tables and graph editors, real-time UIs), backed by hands-on Python/FastAPI, Temporal, PostgreSQL and Neo4j services. Currently shipping the core UI and backend workflows of an LLM-powered data platform. Known for measurable performance wins, a strong testing culture (Playwright/Cypress), and mentoring developers.",

  // =========================================
  // Work Experience
  // =========================================
  workExperience: [
    {
      company: "Appiness Interactive",
      companyUrl: "https://www.appinessworld.com/",
      client: "Teragonia",
      clientUrl: "https://teragonia.com/",
      position: "Software Engineer (Full-Stack)",
      period: "08/2025 - Present",
      location: "Bengaluru, KA · On-site",
      description:
        "Placed by Appiness Interactive with client Teragonia, which builds an LLM-powered platform that automates Kimball/dbt data warehouse modeling directly from raw Snowflake sources.",
      responsibilities: [
        "Built a <strong>React Flow + ELK.js</strong> data-model canvas with real-time collaboration (remote cursors, pinned comments) over <strong>Centrifugo</strong> WebSockets.",
        "Cut p95 drag latency 333ms → &lt;100ms & worst mount frame 8.9s → 2.1s on 50-node graphs via <strong>Zustand</strong> slice selectors & render isolation.",
        "Designed human-in-the-loop approval workflows for 10,000+ tables, wired to <strong>Temporal</strong> signal-based approval gates.",
        "Delivered backend features in <strong>FastAPI</strong>: Temporal-based report generation and Excel data-model import/export with atomic transactions & real-time SSE progress.",
        "Built per-user Snowflake access via <strong>Auth0 OAuth</strong> and led a platform-wide API redesign from a nested to a flat resource model.",
        "Rebuilt the <strong>Playwright</strong> E2E suite into six parallel CI legs, each backed by a deterministic seed dataset.",
      ],
      techStack: [
        "TypeScript",
        "React 19",
        "TanStack Query/Table",
        "Zustand",
        "React Flow",
        "Python",
        "FastAPI",
        "SQLAlchemy",
        "Temporal",
        "PostgreSQL",
        "Neo4j",
        "Snowflake",
        "Playwright",
      ],
    },
    {
      company: "DashClicks",
      companyUrl: "https://www.dashclicks.com",
      position: "Senior Frontend Engineer",
      period: "11/2024 - 06/2025",
      location: "Jaipur, RJ · Remote",
      description:
        "DashClicks is a technology company focused on providing software solutions that enhance business operations.",
      responsibilities: [
        "Launched a client + admin <strong>activity feed</strong> (infinite scroll, filters, 18 event types) that increased support team efficiency by 70%.",
        "Migrated server state from <strong>Redux Toolkit to React Query</strong> with typed query hooks & a query-key registry, eliminating redundant API calls.",
        "Built <strong>DCTable</strong> on <strong>TanStack Table + Virtual</strong> (server pagination, sorting, selection, resizing, virtualized infinite scroll), reused app-wide.",
        "Built a <strong>Lexical</strong> rich-text editor with an <strong>AI rephrase</strong> action for project approvals & requests.",
        "Cut <strong>Conversation Plugin</strong> bundle size by 40% (vanilla JS + Tailwind CSS) & set up an <strong>Nx monorepo</strong> for embeddable plugins.",
        "Moved pre-commit checks to CI (~8 hrs/week saved), bootstrapped <strong>Cypress</strong> E2E, migrated to <strong>React Router v6</strong> & fixed ESLint issues in 1,000+ files.",
      ],
      techStack: [
        "React 17 → 19",
        "TypeScript",
        "MUI v5",
        "React Query",
        "Redux Toolkit",
        "TanStack Table/Virtual",
        "Lexical",
        "React Router v6",
        "React Hook Form",
        "Vite",
        "Nx",
        "Cypress",
        "Jest",
      ],
    },
    {
      company: "Reconect.ai",
      companyUrl: "https://www.reconect.ai",
      position: "Contract Engineer",
      period: "08/2024 - 11/2024",
      location: "Bengaluru, KA · On-site",
      description:
        "Reconect.ai is a fintech firm building autonomous agents for debt collection.",
      responsibilities: [
        "Contributed to an autonomous debt collection agent, supporting digital collection workflows.",
        "Programmed campaign management system eliminating 20+ hours of manual trigger setup & monitoring each week.",
        "Built real-time analytics dashboards using <strong>Recharts</strong> for tracking debt collection performance metrics.",
        "Implemented automated testing with <strong>Playwright</strong>, achieving 85%+ code coverage for critical workflows.",
      ],
      techStack: [
        "React 18",
        "Mantine UI",
        "React Query v5",
        "Playwright",
        "Recharts",
        "React Table",
      ],
    },
    {
      company: "Zeitview",
      companyUrl: "https://www.zeitview.com",
      position: "Senior Frontend Engineer",
      period: "03/2022 - 08/2024",
      location: "Bengaluru, KA · Remote",
      description:
        "Worked across Zeitview's Analysis Tool and Construction Monitoring products for drone-based asset assessment.",
      responsibilities: [
        "Crafted <strong>DEM viewer</strong> for reducing project planning time while improving site assessment accuracy by 90%.",
        "Improved field issue tracking by 80% using coordinate-based tagging which simplified communication.",
        "Optimized <strong>Construction Monitoring</strong> codebase, slashing re-renders & boosting performance by 75%.",
        "Provided technical mentorship to 3 developers, resulting in 70% improvement in their PR approval rate.",
        "Spearheaded <strong>Analysis Tool's</strong> development eliminating external dependencies, accelerating analyst workflows by 50%.",
      ],
      techStack: [
        "React",
        "TypeScript",
        "MUI v5",
        "Mapbox",
        "CesiumJS",
        "React-Konva",
        "krpano",
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
      companyUrl: "https://www.estateprotocol.com",
      position: "Frontend Engineer",
      period: "06/2021 - 02/2022",
      location: "Noida, UP · Remote",
      description:
        "Estate Protocol is a blockchain-based real estate platform facilitating seamless transactions & processes.",
      responsibilities: [
        "Integrated Airdrop system using Web3.js serving 2,000+ claimants, achieving 90% delivery success rate.",
        "Built property store features for creating listings and supporting property bidding and leasing.",
        "Implemented pixel-perfect landing page design achieving a 90+ Lighthouse performance score.",
      ],
      techStack: [
        "NextJS",
        "Tailwind CSS",
        "Context API",
        "Framer Motion",
        "Web3.js",
      ],
    },
    {
      company: "Solytics Partners",
      companyUrl: "https://www.solytics-partners.com",
      position: "Frontend Engineer (Intern → Full-time)",
      period: "09/2020 - 06/2021",
      location: "Pune, MH · Remote",
      description:
        "Joined as an intern in September 2020 and converted to full-time employment in February 2021. Developed features for Nimbus Duo, an analytics and fraud detection platform for banks.",
      responsibilities: [
        "Delivered 8 core modules for <strong>Nimbus Duo</strong> on schedule.",
        "Built <strong>Inventory Management</strong> system MVP in 2 weeks.",
      ],
      techStack: [
        "React 16",
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
    Languages: [
      "TypeScript",
      "JavaScript (ES6+)",
      "Python",
      "HTML5",
      "CSS3",
      "SQL",
    ],
    "Frontend & State": [
      "React (16–19)",
      "NextJS",
      "React Router",
      "TanStack Query",
      "Redux Toolkit",
      "Zustand",
      "MobX",
      "React Hook Form",
      "Formik",
    ],
    "UI & Design Systems": [
      "Material UI",
      "Mantine UI",
      "Tailwind CSS",
      "Emotion",
      "Styled Components",
      "Sass/SCSS",
      "Framer Motion",
      "Storybook",
    ],
    "Data-heavy UI & Viz": [
      "TanStack Table/Virtual",
      "React Flow",
      "ELK.js",
      "Recharts",
      "Highcharts",
      "Mapbox",
      "CesiumJS",
      "React-Konva",
      "krpano",
    ],
    "Backend & Data": [
      "NodeJS",
      "ExpressJS",
      "FastAPI",
      "SQLAlchemy",
      "Temporal",
      "PostgreSQL",
      "Neo4j",
      "MongoDB",
      "Snowflake",
      "SSE",
      "WebSockets",
    ],
    "Testing & Quality": [
      "Playwright",
      "Cypress",
      "Jest",
      "Vitest",
      "React Testing Library",
      "ESLint",
      "Prettier",
      "Accessibility (a11y)",
    ],
    "DevOps & Tooling": [
      "Git",
      "GitHub Actions",
      "Docker",
      "CI/CD",
      "Nx",
      "pnpm",
      "Vite",
      "Webpack",
      "Lefthook",
      "Sentry",
      "Auth0",
      "AWS",
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
