/**
 * Renders the technologies section with categories
 * @param {Object} technologies - Technologies data organized by category
 */
export function renderTechnologies(technologies) {
  const technologiesListSection = document.getElementById("technologies-list")
  technologiesListSection.innerHTML = ""

  for (const [category, skills] of Object.entries(technologies)) {
    const categoryElement = document.createElement("div")
    categoryElement.className = "tech-category"

    const skillsHTML = skills
      .map((skill) => `<span class="tech-badge">${skill}</span>`)
      .join("")

    categoryElement.innerHTML = `
      <span class="tech-category-title">${category}:</span>
      <span class="tech-skills">${skillsHTML}</span>
    `

    technologiesListSection.appendChild(categoryElement)
  }
}
