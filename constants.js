// Constants with actual data from index.json
export const PERSONAL_INFO = {
  name: "Rajeev Ranjan",
  title: "Senior Frontend Engineer",
  contact: {
    email: "rajeevranjan19@outlook.com",
    phone: "+91 7543898325",
    location: "Bengaluru, KA, India",
    linkedin: "https://www.linkedin.com/in/r4vr4n",
    github: "github.com/r4vr4n",
  },
}

export const WORK_EXPERIENCE = [
  {
    company: "DashClicks",
    position: "Senior Frontend Engineer",
    period: "11/2024 - 06/2025",
    location: "Jaipur, RJ · Remote",
    description:
      "DashClicks is a technology company focused on providing software solutions that enhance business operations.",
    responsibilities: [
      "Set up CI pipeline eliminating ~5 mins. of pre-commit hook processing per commit, saving ~8 hrs. of devs' time weekly.",
      "Delivered activity feed which streamlined client follow-ups & enabled support team to handle 70% more cases.",
      "Reduced bundle size by 40% using vanilla JS & CSS, enhancing performance & UX for <strong>Conversation Plugin</strong>.",
    ],
    tech_stack: [
      "ReactJS v19",
      "MUI v5",
      "React Query v3",
      "Nx",
      "Jest",
      "Cypress",
      "Docker",
      "React Hook Form",
      "React Table v8",
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
      "Programmed campaign management for eliminating 20+ hours of manual trigger setup  & monitoring each week.",
    ],
    tech_stack: [
      "ReactJS v18",
      "Mantine UI",
      "React Query v5",
      "Playwright",
      "Recharts",
      "React Table v8",
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
      "Spearheaded <strong>Analysis Tool's</strong>  development eliminating external dependencies, accelerating analyst workflows by 50%.",
    ],
    tech_stack: [ 
      "MUI v5", 
      "MapBox",
      "CesiumJS",
      "React-Konva",
      "kr-pano",
      "Playwright",
      "Mantine UI",
      "Recharts",
      "React Table v7",
      "Formik",
      "CI/CD",
      "Vitest",
    ],
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
    tech_stack: [
      "NextJS",
      "Tailwind CSS",
      "Context API",
      "Framer motion",
      "Web3.js",
    ],
  },
  {
    company: "Solytics Partners",
    position: "Jr. Frontend Engineer",
    period: "06/2020 - 06/2021",
    location: "Pune, MH · Remote",
    description:
      "Solytics Partners is analytics firm focused on solving client problems through an amalgamation of advanced analytics, new-age technologies, & deep domain expertise.",
    responsibilities: [
      "Successfully delivered 8 critical modules for <strong>Nimbus Duo</strong>, completing 100% of assigned requirements on schedule.",
      "Set Up & Delivered <strong>Inventory Management</strong> system MVP in 2 weeks.",
    ],
    tech_stack: [
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
]

export const CERTIFICATIONS = [
  {
    name: "Certified MERN stack developer",
    issuer: "AttainU - Online Bootcamp",
    period: "07/2019 - 05/2020",
    id: "AUFS004052",
    url: "'https://drive.google.com/file/d/1nXaNlu_RY5WGe2-9mIHVXUFUOnAGRBme/view'",
    location: "Bangalore, KA",
  },
]

export const EDUCATION = [
  {
    degree: "B.Tech in Computer Science & Engineering",
    institution: "Biju Patnaik University of Technology",
    location: "Bhubaneswar, OD",
    period: "03/2015 - 03/2019",
  },
]

export const ACHIEVEMENTS = [
  {
    title: "Resourceful Employee Of Year",
    description:
      "Awarded for innovative problem-solving & delivering high-impact solutions with limited resources.",
    date: "12/2024",
  },
]

export const LIVE_PROJECTS = [
  {
    name: "Cexdex",
    description:
      "Cexdex allows users to trade cryptocurrencies in a secure & efficient manner.",
    url: "https://stake.cexdex.app",
    tech_stack: [
      "Web3.js",
      "React",
      "Context API",
      "NodeJS",
      "ExpressJS",
      "MongoDB",
    ],
  },
  {
    name: "Estate Protocol",
    description:
      "Estate Protocol tokenizes real estate on the blockchain for crypto investment.",
    url: "https://estateprotocol.com",
    tech_stack: ["Web3.js", "NextJS", "Framer motion", "Material UI"],
  },
]
