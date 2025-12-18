import { DOM_IDS } from "../constants/dom-ids.js"
import { getAndClearElement, createElement } from "../utils/dom.js"

/**
 * Renders the education section
 * @param {Array} education - Education data
 */
export function renderEducation(education) {
  const section = getAndClearElement(DOM_IDS.EDUCATION)
  if (!section) return

  for (const edu of education) {
    const element = createElement("div", "education-item")

    element.innerHTML = `
      <div class="education-header">
        <div>
          <div class="degree">${edu.degree}</div>
          <div class="institution">${edu.institution}</div>
        </div>
        <div>
          <div class="period">${edu.period}</div>
          <div class="location">${edu.location}</div>
        </div>
      </div>
    `

    section.appendChild(element)
  }
}
