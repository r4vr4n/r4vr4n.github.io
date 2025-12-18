import { DOM_IDS } from "../constants/dom-ids.js"
import {
  getAndClearElement,
  createElement,
  createTechStackHTML,
  createListItemsHTML,
} from "../utils/dom.js"

/**
 * Renders the projects section with detailed highlights
 * @param {Array} projects - Projects data with highlights and tech stacks
 */
export function renderProjects(projects) {
  const section = getAndClearElement(DOM_IDS.PROJECTS)
  if (!section) return

  for (const project of projects) {
    const element = createElement("div", "detailed-project-item")

    const highlightsHTML = project.highlights
      ? createListItemsHTML(project.highlights)
      : ""

    const techStackHTML = createTechStackHTML(project.techStack)

    const urlHTML = project.url
      ? `<a href="${project.url}" target="_blank" class="detailed-project-link">(${project.url})</a>`
      : ""

    element.innerHTML = `
      <div class="detailed-project-header">
        <span class="detailed-project-name">${project.name}</span>
        ${urlHTML}
      </div>
      <div class="detailed-project-subtitle">${project.subtitle || ""}</div>
      <ul class="detailed-project-highlights">
        ${highlightsHTML}
      </ul>
      ${techStackHTML}
    `

    section.appendChild(element)
  }
}
