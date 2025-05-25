/**
 * Renders the technologies section in organized categories
 * @param {Array} technologies - Technologies data
 */
export function renderTechnologies(technologies) {
  const technologiesListSection = document.getElementById("technologies-list")

  // Categorize technologies
  const categories = {
    Languages: [
      "JavaScript",
      "TypeScript",
      "HTML",
      "HTML5",
      "CSS",
      "CSS3",
      "SCSS",
      "SASS",
      "Less",
    ],
    "Frameworks & Libraries": [
      "ReactJS",
      "NextJS",
      "Redux",
      "Redux Saga",
      "Redux Toolkit",
      "Context API",
      "React Query",
      "React Hook Form",
      "React Table",
      "React Testing Library (RTL)",
      "React-Konva",
      "Zustand",
      "Flux",
    ],
    "UI & Styling": [
      "Material UI",
      "Mantine UI",
      "Bootstrap",
      "Tailwind CSS",
      "Styled Components",
      "Framer motion",
    ],
    "Testing & Quality": [
      "Jest",
      "Cypress",
      "Playwright",
      "Vitest",
      "Unit Testing",
      "Integration Testing",
      "End-to-End Testing (E2E)",
      "Test-Driven Development (TDD)",
      "Performance Testing",
    ],
    "Tools & Technologies": [
      "Git",
      "Docker",
      "Webpack",
      "Vite",
      "Nx",
      "Github Actions",
      "CI/CD",
      "Node.js",
      "Express.js",
      "MongoDB",
      "AWS",
      "axios",
      "REST APIs",
      "Socket.io",
      "Figma",
      "Jira",
    ],
    "Specialized Libraries": [
      "Web3.js",
      "CesiumJS",
      "MapBox",
      "kr-pano",
      "Plotly JS",
      "Recharts",
      "Formik",
      "Yup",
    ],
    "Concepts & Methodologies": [
      "Agile Methodologies",
      "User Interface design (UI design)",
      "User Experience design (UX design)",
      "Performance Optimization",
      "Cross-Browser Compatibility",
      "Responsive Web Design",
      "Progressive Web Apps (PWAs)",
      "Single Page Applications (SPAs)",
      "Web Accessibility (a11y)",
      "Web Applications",
      "Front-end Development",
      "Web Security",
      "Scalability",
      "Maintainability",
      "Code Reviews",
      "Code Refactoring",
      "Responsive Design",
      "Troubleshooting",
      "Debugging",
      "Version Control System (Git)",
      "Web Design",
    ],
    "Soft Skills": [
      "Communication",
      "Problem Solving",
      "Collaboration",
      "Teamwork",
      "Mentoring",
      "Leadership",
    ],
  }

  // Filter technologies into categories
  const organizedTechs = {}
  const unmatchedTechs = []

  // Initialize categories
  Object.keys(categories).forEach((category) => {
    organizedTechs[category] = []
  })

  // Categorize each technology
  technologies.forEach((tech) => {
    let matched = false
    for (const [category, categoryTechs] of Object.entries(categories)) {
      if (categoryTechs.includes(tech)) {
        organizedTechs[category].push(tech)
        matched = true
        break
      }
    }
    if (!matched) {
      unmatchedTechs.push(tech)
    }
  })

  // Add unmatched technologies to a "Other" category
  if (unmatchedTechs.length > 0) {
    organizedTechs["Other"] = unmatchedTechs
  }

  // Generate HTML
  let html = ""
  Object.entries(organizedTechs).forEach(([category, techs]) => {
    if (techs.length > 0) {
      html += `
        <div class="tech-category">
          <h3 class="tech-category-title">${category}</h3>
          <div class="tech-badges">
            ${techs
              .map((tech) => `<span class="tech-badge">${tech}</span>`)
              .join("")}
          </div>
        </div>
      `
    }
  })

  technologiesListSection.innerHTML = html
}
