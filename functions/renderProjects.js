import { DOM_IDS } from "../constants/dom-ids.js"
import { getAndClearElement, createElement, createTechStackHTML } from "../utils/dom.js"

/**
 * Renders the projects section
 * @param {Array} projects - Projects data
 */
export function renderProjects(projects) {
  const section = getAndClearElement(DOM_IDS.PROJECTS)
  if (!section) return

  for (const project of projects) {
    const element = createElement("div", "project-item")

    const techStackHTML = createTechStackHTML(project.techStack)
    const displayUrl = project.url.replace("https://", "")

    element.innerHTML = `
      <div class="project-header">
        <div class="project-name">
          <a href="${project.url}" target="_blank" class="project-link">${displayUrl}</a>
        </div>
        <div class="project-description">&nbsp;- ${project.description}</div>
      </div>
      ${techStackHTML}
    `

    section.appendChild(element)
  }
}

