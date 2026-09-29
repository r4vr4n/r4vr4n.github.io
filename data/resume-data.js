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
    "Full-Stack Engineer (frontend-focused) with 6+ years building production React/TypeScript apps, from greenfield products to full rewrites of legacy frontends. Built 3D/map tools for drone data (CesiumJS, Mapbox), real-time collaborative graph editors and data-dense dashboards, with hands-on backend work in Node.js and Python/FastAPI. Currently building the data-modeling canvas and approval workflows for an AI data platform.",

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
        "Placed with Teragonia to build Data Modeling Autopilot (DMA), an LLM-powered platform that turns 10k+ raw Snowflake tables into a reviewed Kimball/dbt star schema, part of Teragonia's AI operating system, Astradis.",
      responsibilities: [
        "Built a <strong>React Flow + ELK.js</strong> data-model canvas with real-time collaboration (remote cursors, pinned comments) over <strong>Centrifugo</strong> WebSockets.",
        "Cut p95 drag latency 333ms → &lt;100ms & worst mount frame 8.9s → 2.1s on 50-node graphs via <strong>Zustand</strong> slice selectors & render isolation.",
        "Designed human-in-the-loop approval workflows for 10,000+ tables, wired to <strong>Temporal</strong> signal-based approval gates.",
        "Delivered backend features in <strong>FastAPI</strong>: Temporal-based report generation and Excel data-model import/export with atomic transactions & real-time SSE progress.",
        "Built per-user Snowflake access via <strong>Auth0 OAuth</strong> and led a platform-wide API redesign from a nested to a flat resource model.",
        "Rebuilt the <strong>Playwright</strong> E2E suite into six parallel CI legs, each backed by a deterministic seed dataset.",
        "Brought the app to a 100 <strong>Lighthouse accessibility</strong> score with app-wide <strong>keyboard shortcuts</strong>; maintained the shared <strong>UI kit</strong> package and its <strong>Storybook</strong> docs.",
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
        "Storybook",
      ],
    },
    {
      company: "DashClicks",
      companyUrl: "https://www.dashclicks.com",
      position: "Senior Frontend Engineer",
      period: "11/2024 - 06/2025",
      location: "Jaipur, RJ · Remote",
      description:
        "DashClicks is a white-label marketing and fulfillment platform for digital agencies.",
      responsibilities: [
        "Built the client + admin <strong>activity feed</strong> end to end (UI + API): infinite scroll, filters, 18 event types, giving the internal team one place to manage client onboarding.",
        "Migrated server state from <strong>Redux Toolkit to React Query</strong> with typed query hooks & a query-key registry, eliminating redundant API calls.",
        "Built <strong>DCTable</strong> on <strong>TanStack Table + Virtual</strong> (server pagination, sorting, selection, resizing, virtualized infinite scroll), reused app-wide.",
        "Built a <strong>Lexical</strong> rich-text editor with an <strong>AI rephrase</strong> action for project approvals & requests.",
        "Cut <strong>Conversation Plugin</strong> bundle size by 40% (vanilla JS + Tailwind CSS) & set up an <strong>Nx monorepo</strong> for embeddable plugins.",
        "Moved pre-commit checks to CI (~8 hrs/week saved), bootstrapped <strong>Cypress</strong> E2E, migrated to <strong>React Router v6</strong> & cleaned up ESLint issues across 1,000+ files for maintainability.",
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
        "Storybook",
      ],
    },
    {
      company: "Reconect.ai",
      companyUrl: "https://www.reconect.ai",
      position: "Contract Engineer",
      period: "08/2024 - 11/2024",
      location: "Bengaluru, KA · On-site",
      description:
        "Early-stage fintech startup automating debt collection over digital channels, using conversation context to drive follow-ups.",
      responsibilities: [
        "Owned the frontend of the collections app: dashboards, analytics and campaign workflows.",
        "Built a campaign management system that eliminated 20+ hours/week of manual trigger setup & monitoring.",
        "Built analytics dashboards in <strong>Recharts</strong> tracking amount recovered and collection performance.",
        "Wrote <strong>Playwright</strong> E2E suites covering the critical collection workflows.",
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
        "Led two web products for Zeitview's drone-based asset inspection: the internal Analysis Tool and Construction Monitoring, which gives clients site progress and actionable items.",
      responsibilities: [
        "Built the <strong>Analysis Tool</strong> from the ground up as sole engineer, leading 3 interns for a year. Worked directly with the analyst team to replace external tools and cut analysis and report-generation time.",
        "Rewrote the <strong>Construction Monitoring</strong> frontend from scratch in 6 months so it could expand from progress tracking into pre-construction site analysis. It replaced an unmaintainable codebase (components with 500+ line useEffects) with a modular React/TypeScript architecture.",
        "Shipped live map comments with @mentions and notifications, so teams could discuss issues pinned to exact site locations.",
        "Rendered LiDAR point clouds as 3D elevation terrain in <strong>CesiumJS</strong>, and shipped flood analysis showing how water moves across the site, plus on-map length/area measurement tools.",
        "Integrated 360° panoramic site imagery with <strong>krpano</strong>.",
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
    },
    {
      company: "Estate Protocol",
      companyUrl: "https://www.estateprotocol.com",
      position: "Frontend Engineer",
      period: "06/2021 - 02/2022",
      location: "Noida, UP · Remote",
      description:
        "Blockchain real estate platform where users list, bid on and stake in properties to earn revenue.",
      responsibilities: [
        "Built the token airdrop end to end (<strong>Node.js</strong> backend + React/<strong>Web3.js</strong> frontend); 2,000+ users claimed across MetaMask, Coinbase Wallet and other wallets.",
        "Built the property marketplace full-stack: listing, bidding and staking flows.",
        "Built the marketing landing page in <strong>Next.js</strong> with Framer Motion (Lighthouse 90+).",
      ],
      techStack: [
        "React",
        "NextJS",
        "Node.js",
        "Material UI",
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
        "Analytics and fraud-detection software for banks. Joined as an intern in Sept 2020; converted to full-time in Feb 2021.",
      responsibilities: [
        "Delivered 8 core modules on schedule for <strong>Nimbus Duo</strong>, the company's fraud detection and analytics platform.",
        "Built an <strong>Inventory Management</strong> system MVP from scratch in 2 weeks.",
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
      "React Hook Form",
      "Formik",
    ],
    "UI & Design Systems": [
      "Material UI",
      "Mantine UI",
      "Tailwind CSS",
      "Sass/SCSS",
      "Framer Motion",
      "Storybook",
    ],
    "Data-heavy UI & Viz": [
      "TanStack Table/Virtual",
      "React Flow",
      "ELK.js",
      "Recharts",
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
      name: "Certified MERN Stack Developer",
      issuer: "AttainU - Online Bootcamp",
      period: "07/2019 - 05/2020",
      id: "AUFS004052",
      url: "https://drive.google.com/file/d/1nXaNlu_RY5WGe2-9mIHVXUFUOnAGRBme/view",
      location: "Bangalore, KA",
    },
  ],
}
