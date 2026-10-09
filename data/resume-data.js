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
    "Full-Stack Engineer (frontend-focused) with 6+ years building production React/TypeScript apps, from greenfield products to full rewrites of legacy frontends. Built 3D/map tools for drone data (CesiumJS, Mapbox), real-time collaborative graph editors & data-dense dashboards, with hands-on backend work in Node.js & Python/FastAPI. Most recently built the data-modeling canvas & approval workflows for an AI data platform.",

  // =========================================
  // Work Experience
  // =========================================
  workExperience: [
    {
      company: "Appiness Interactive",
      companyUrl: "https://www.appinessworld.com/",
      client: "Teragonia",
      clientUrl: "https://teragonia.com/",
      position: "Senior Software Developer",
      period: "08/2025 - Present",
      location: "Bengaluru, KA · On-site",
      description:
        "Placed with Teragonia to build Data Modeling Autopilot (DMA), an LLM-powered platform that turns 10k+ raw Snowflake tables into a reviewed Kimball/dbt star schema, part of Teragonia's AI operating system, Astradis.",
      responsibilities: [
        "Built DMA's <strong>React Flow + ELK.js</strong> data-model canvas with real-time cursors & pinned comments over <strong>Centrifugo</strong> WebSockets.",
        "Cut p95 drag latency 333ms → &lt;100ms & worst mount frame 8.9s → 2.1s on 50-node graphs via <strong>Zustand</strong> slice selectors & render isolation.",
        "Built the human-in-the-loop approval UI (tag review, mart mapping, PR review) for 10,000+ tables, wired to <strong>Temporal</strong> signals.",
        "Built <strong>FastAPI</strong> features (Temporal reports, atomic Excel import/export, per-user Snowflake OAuth) & led an app-wide API redesign.",
        "Rebuilt <strong>Playwright</strong> E2E into 6 parallel CI legs, cut a 3.5-min pre-test CI wait & hit a 100 Lighthouse accessibility score.",
      ],
    },
    {
      company: "DashClicks",
      companyUrl: "https://www.dashclicks.com",
      position: "Senior Frontend Engineer",
      period: "11/2024 - 06/2025",
      location: "Jaipur, RJ · Remote",
      description:
        "DashClicks is a white-label marketing & fulfillment platform for digital agencies.",
      responsibilities: [
        "Built the client + admin <strong>activity feed</strong> end to end (UI + API): infinite scroll, filters & 18 event types for client onboarding.",
        "Migrated server state from <strong>Redux Toolkit to React Query</strong> with typed hooks & a query-key registry, eliminating redundant API calls.",
        "Built <strong>DCTable</strong> on <strong>TanStack Table + Virtual</strong> (server pagination, sorting, resizing, virtualized infinite scroll), reused app-wide.",
        "Cut the embeddable <strong>Conversation Plugin</strong> bundle by 40% with vanilla JS & set up an <strong>Nx monorepo</strong> for plugins.",
      ],
    },
    {
      company: "Reconect.ai",
      companyUrl: "https://www.reconect.ai",
      position: "Senior Frontend Developer (Contract)",
      period: "08/2024 - 11/2024",
      location: "Bengaluru, KA · On-site",
      description:
        "Early-stage fintech startup automating debt collection over digital channels, using conversation context to drive follow-ups.",
      responsibilities: [
        "Owned the frontend of the collections app: dashboards, analytics & campaign workflows.",
        "Built a campaign management system that eliminated 20+ hours/week of manual trigger setup & monitoring.",
        "Built analytics dashboards in <strong>Recharts</strong> tracking amount recovered & collection performance.",
      ],
    },
    {
      company: "Zeitview",
      companyUrl: "https://www.zeitview.com",
      position: "Senior Frontend Developer",
      period: "03/2022 - 08/2024",
      location: "Bengaluru, KA · Remote",
      description:
        "Led two web products for Zeitview's drone-based asset inspection: the internal Analysis Tool & Construction Monitoring, which gives clients site progress & actionable items.",
      responsibilities: [
        "Built the <strong>Analysis Tool</strong> from scratch as sole engineer leading 3 interns, working with analysts to replace external tools & speed up reporting.",
        "Rewrote <strong>Construction Monitoring</strong> in 6 months, replacing 500+ line useEffects with a modular architecture for pre-construction analysis.",
        "Shipped live map comments with @mentions & notifications, pinned to exact site locations.",
        "Rendered LiDAR terrain in <strong>CesiumJS</strong> with flood analysis, on-map measurement & 360° panoramas (<strong>krpano</strong>).",
      ],
    },
    {
      company: "Estate Protocol",
      companyUrl: "https://www.estateprotocol.com",
      position: "Frontend Engineer",
      period: "06/2021 - 02/2022",
      location: "Noida, UP · Remote",
      description:
        "Blockchain real estate platform where users list, bid on & stake in properties to earn revenue.",
      responsibilities: [
        "Built the token airdrop end to end (<strong>Node.js</strong> + <strong>Web3.js</strong>); 2,000+ users claimed via MetaMask, Coinbase Wallet & others.",
        "Built the property marketplace full-stack in <strong>Next.js</strong> & Node.js: listing, bidding & staking flows.",
      ],
    },
    {
      company: "Solytics Partners",
      companyUrl: "https://www.solytics-partners.com",
      position: "Software Developer (Intern → Full-time)",
      period: "09/2020 - 06/2021",
      location: "Pune, MH · Remote",
      description:
        "Analytics & fraud-detection software for banks. Joined as an intern in Sept 2020; converted to full-time in Feb 2021.",
      responsibilities: [
        "Delivered 8 core modules on schedule for <strong>Nimbus Duo</strong>, the company's fraud detection & analytics platform.",
        "Built an <strong>Inventory Management</strong> system MVP from scratch in 2 weeks.",
      ],
    },
  ],

  // =========================================
  // Skills (Categorized)
  // =========================================
  skills: {
    Languages: [
      "TypeScript",
      "JavaScript",
      "Python",
      "SQL",
    ],
    Frontend: [
      "React (16–19)",
      "Next.js",
      "TanStack Query/Table/Virtual",
      "Zustand",
      "Redux Toolkit",
      "Material UI",
      "Tailwind CSS",
      "Storybook",
    ],
    "Data & Visualization": [
      "React Flow",
      "ELK.js",
      "CesiumJS",
      "Mapbox",
      "Recharts",
      "React-Konva",
    ],
    Backend: [
      "Node.js",
      "Express",
      "FastAPI",
      "SQLAlchemy",
      "Temporal",
      "PostgreSQL",
      "Neo4j",
      "MongoDB",
      "Snowflake",
      "WebSockets/SSE",
    ],
    "Testing & DevOps": [
      "Playwright",
      "Cypress",
      "Jest",
      "Vitest",
      "React Testing Library",
      "GitHub Actions",
      "Docker",
      "Nx",
      "Vite",
      "Sentry",
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
