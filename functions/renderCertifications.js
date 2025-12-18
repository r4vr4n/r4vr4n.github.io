import { DOM_IDS } from "../constants/dom-ids.js"
import { getAndClearElement, createElement } from "../utils/dom.js"

/**
 * Renders the certifications section
 * @param {Array} certifications - Certification data
 */
export function renderCertifications(certifications) {
  const section = getAndClearElement(DOM_IDS.CERTIFICATIONS)
  if (!section) return

  for (const cert of certifications) {
    const element = createElement("div", "certification-item")

    element.innerHTML = `
      <div class="certification-header">
        <div>
          <div class="cert-name">${cert.name}</div>
          <div class="cert-issuer">${cert.issuer}</div>
          <div class="cert-id">Credential ID: <a href="${cert.url}" target="_blank">${cert.id}</a></div>
        </div>
        <div>
          <div class="period">${cert.period}</div>
          <div class="location">${cert.location}</div>
        </div>
      </div>
    `

    section.appendChild(element)
  }
}
