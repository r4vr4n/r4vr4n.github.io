import { DOM_IDS } from "../constants/dom-ids.js"
import {
  getAndClearElement,
  createElement,
  createTechStackHTML,
  createListItemsHTML,
  createPeriodLocationHTML,
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

    const achievementHTML = job.achievement
      ? `<div class="job-achievement">
          <span class="achievement-badge">🏆 ${job.achievement.title}</span>
          <span class="achievement-desc">— ${job.achievement.description}</span>
        </div>`
      : ""

    const companyHTML = job.companyUrl
      ? `<a href="${job.companyUrl}" target="_blank" rel="noopener noreferrer" class="company">${job.company}</a>`
      : `<div class="company">${job.company}</div>`

    jobElement.innerHTML = `
      <div class="job-header">
        <div>
          <div class="position">${job.position}</div>
          ${companyHTML}
        </div>
        ${createPeriodLocationHTML(job.period, job.location)}
      </div>
      ${achievementHTML}
      <ul>
        ${responsibilitiesHTML}
      </ul>
      ${techStackHTML}
    `

    section.appendChild(jobElement)
  }
}
