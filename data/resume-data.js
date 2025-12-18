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
    title: "Senior Frontend Engineer",
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
    "Senior Frontend Engineer with 5+ years of experience building scalable web applications using React, Next.js, and TypeScript. Proven track record in full-stack development with Node.js, MongoDB, and Web3 technologies. Passionate about performance optimization, mentoring developers, and delivering high-impact solutions that drive business results.",

  // =========================================
  // Work Experience
  // =========================================
  workExperience: [
    {
      company: "DashClicks",
      position: "Senior Frontend Engineer",
      period: "11/2024 - 06/2025",
      location: "Jaipur, RJ · Remote",
      summary:
        "Worked on the core ad campaign management platform, contributing to the Activity Feed module that bridged clients and internal operations team for seamless onboarding. Implemented real-time features and data visualizations to enhance platform usability.",
    },
    {
      company: "Reconect.ai",
      position: "Contract Engineer",
      period: "08/2024 - 11/2024",
      location: "Bengaluru, KA · On-site",
      summary:
        "Built the Recollect Agent platform enabling users to create interactive chat agents for automated debt collection. Developed real-time monitoring dashboards for tracking collection progress, status, and estimations.",
    },
    {
      company: "Zeitview",
      position: "Senior Frontend Engineer",
      period: "03/2022 - 08/2024",
      location: "Bengaluru, KA · Remote",
      summary:
        "Led development of geospatial analysis tools for solar site assessment and construction monitoring. Built 3D visualization features using digital elevation modeling. Mentored 3 junior developers, improving their PR approval rate by 70%. Recognized as Resourceful Employee of the Year.",
    },
    {
      company: "Estate Protocol",
      position: "Frontend Engineer",
      period: "06/2021 - 02/2022",
      location: "Noida, UP · Remote",
      summary:
        "Developed an Ethereum-based blockchain dApp enabling property owners to list assets and investors to purchase fractional ownership. Launched token airdrop system serving 2,000+ claimants with 90% success rate.",
    },
    {
      company: "Solytics Partners",
      position: "Junior Frontend Engineer",
      period: "06/2020 - 06/2021",
      location: "Pune, MH · Remote",
      summary:
        "Built the Nimbus Duo analytics dashboard for visualizing data duplication, fraud detection, and ML model performance metrics. Delivered 8 critical modules on schedule as part of the enterprise analytics platform.",
    },
  ],

  // =========================================
  // Skills (Categorized)
  // =========================================
  skills: {
    Core: ["JavaScript (ES6+)", "TypeScript", "HTML5", "CSS3"],
    Frameworks: ["ReactJS", "NextJS", "NodeJS", "ExpressJS"],
    "State Management": [
      "Redux",
      "MobX",
      "Zustand",
      "Context API",
      "React Query",
    ],
    "UI Libraries": [
      "Material UI",
      "Mantine UI",
      "Tailwind CSS",
      "Bootstrap",
      "Styled Components",
      "Framer Motion",
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
    ],
    "Databases & APIs": ["MongoDB", "REST APIs", "WebSockets", "Socket.io"],
    Other: [
      "Performance Optimization",
      "Cross-Browser Compatibility",
      "Web Security",
      "Web Accessibility (a11y)",
      "PWA",
      "SPA",
      "AWS",
    ],
  },

  // =========================================
  // Achievements
  // =========================================
  achievements: [
    {
      title: "Resourceful Employee Of The Year (Zeitview)",
      description:
        "Awarded for innovative problem-solving & delivering high-impact solutions with limited resources.",
      date: "12/2024",
    },
  ],

  // =========================================
  // Projects
  // =========================================
  projects: [
    {
      name: "Agency Operations Hub (DashClicks)",
      subtitle: "White-Label Digital Marketing Platform",
      highlights: [
        "Built Activity Feed module bridging clients and operations team for seamless onboarding.",
        "Implemented real-time notifications using <strong>Socket.io</strong> and campaign analytics with <strong>Chart.js</strong>.",
        "Developed reusable data grids using <strong>React Table</strong> for campaign management views.",
      ],
      techStack: ["ReactJS", "Material UI", "Socket.io", "Chart.js", "React Table"],
    },
    {
      name: "Collect Agent (Reconect.ai)",
      subtitle: "AI-Powered Debt Collection Platform",
      highlights: [
        "Built interactive chat agent builder enabling automated debt collection workflows.",
        "Developed real-time monitoring dashboard for tracking collection progress and estimations.",
        "Implemented UI with <strong>Mantine UI</strong>, <strong>TanStack Query</strong>, and <strong>Recharts</strong> for data visualization.",
      ],
      techStack: ["ReactJS", "TanStack Query", "Mantine UI", "Recharts", "Socket.io"],
    },
    {
      name: "Analysis Tool (Zeitview)",
      subtitle: "Solar Site Analysis & Report Generation Platform",
      highlights: [
        "Developed full-featured analysis tool enabling analysts to perform solar site assessments and generate reports.",
        "Built interactive map annotations using <strong>MapBox</strong> and <strong>React-Konva</strong> for precise measurements.",
        "Implemented geospatial data layers with <strong>TypeScript</strong> and <strong>React Query</strong> for efficient data fetching.",
      ],
      techStack: ["ReactJS", "TypeScript", "MapBox", "React-Konva", "Redux", "React Query", "Playwright"],
    },
    {
      name: "Construction Monitoring (Zeitview)",
      subtitle: "3D Drone-Based Construction Progress Tracking",
      highlights: [
        "Enabled clients to monitor construction progress using <strong>MapBox</strong> and <strong>CesiumJS</strong> for 3D visualization.",
        "Built digital elevation modeling (DEM) tools for calculating solar plant construction efforts.",
        "Developed stakeholder dashboards for effort estimation and site planning from scratch.",
      ],
      techStack: ["ReactJS", "CesiumJS", "MapBox", "React Query", "TypeScript"],
    },
    {
      name: "Estate Protocol",
      url: "https://estateprotocol.com",
      subtitle: "Ethereum Real Estate Tokenization Platform",
      highlights: [
        "Developed blockchain dApp allowing property owners to list assets and investors to purchase fractional ownership.",
        "Built <strong>Web3.js</strong> integration for wallet connections and smart contract interactions.",
        "Launched token airdrop system serving <strong>2,000+</strong> claimants with 90% success rate.",
      ],
      techStack: ["NextJS", "Web3.js", "Tailwind CSS", "Framer Motion", "Context API"],
    },
    {
      name: "Nimbus Duo (Solytics Partners)",
      subtitle: "Enterprise Analytics & Fraud Detection Dashboard",
      highlights: [
        "Built analytics dashboard for visualizing data duplication, fraud detection, and ML model performance.",
        "Implemented interactive charts using <strong>Plotly JS</strong> and data tables with <strong>React Table</strong>.",
        "Managed complex async data flows with <strong>Redux Saga</strong> for real-time metric updates.",
      ],
      techStack: ["ReactJS", "Redux", "Redux Saga", "Plotly JS", "React Table", "Material UI"],
    },
  ],

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

