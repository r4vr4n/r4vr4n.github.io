import { DOM_IDS } from "../constants/dom-ids.js"
import {
  getAndClearElement,
  createElement,
  createTechStackHTML,
  createListItemsHTML,
} from "../utils/dom.js"

/**
 * Renders the work experience section
 * @param {Array} experiences - Work experience data
 */
export function renderWorkExperience(experiences) {
  const section = getAndClearElement(DOM_IDS.WORK_EXPERIENCE)
  if (!section) return

  for (const job of experiences) {
    const jobElement = createElement("div", "job")

    const responsibilitiesHTML = createListItemsHTML(job.responsibilities)
    const techStackHTML = createTechStackHTML(job.techStack)

    jobElement.innerHTML = `
      <div class="job-header">
        <div>
          <div class="position">${job.position}</div>
          <div class="company">${job.company}</div>
        </div>
        <div>
          <div class="period">${job.period}</div>
          <div class="location">${job.location}</div>
        </div>
      </div>
      <ul>
        ${responsibilitiesHTML}
      </ul>
      ${techStackHTML}
    `

    section.appendChild(jobElement)
  }
}
