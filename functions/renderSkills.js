import { DOM_IDS } from "../constants/dom-ids.js"
import { getAndClearElement, createElement } from "../utils/dom.js"

/**
 * Renders the skills section with categories
 * @param {Object} skills - Skills data organized by category
 */
export function renderSkills(skills) {
  const section = getAndClearElement(DOM_IDS.SKILLS)
  if (!section) return

  for (const [category, skillList] of Object.entries(skills)) {
    const categoryElement = createElement("div", "tech-category")

    const skillsHTML = skillList
      .map((skill) => `<span class="tech-badge">${skill}</span>`)
      .join("")

    categoryElement.innerHTML = `
      <span class="tech-category-title">${category}:</span>
      <span class="tech-skills">${skillsHTML}</span>
    `

    section.appendChild(categoryElement)
  }
}

