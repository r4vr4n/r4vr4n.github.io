import { DOM_IDS } from "../constants/dom-ids.js"
import { ICONS } from "../utils/icons.js"

/**
 * Renders the personal information section
 * @param {Object} personalInfo - Personal information data
 */
export function renderPersonalInfo(personalInfo) {
  const section = document.getElementById(DOM_IDS.PERSONAL_INFO)
  if (!section) return

  const { name, title, contact } = personalInfo

  section.innerHTML = `
    <div>
      <h1>${name}</h1>
      <h3>${title}</h3>
    </div>
    <div class="social-links">
      <div>
        <span class="social-link">
          ${ICONS.email}
          <a href="mailto:${contact.email}">${contact.email}</a>
        </span>
        <span class="social-link">
          ${ICONS.phone}
          <a href="tel:${contact.phone}">${contact.phone}</a>
        </span>
      </div>
      <div>
        <span class="social-link">
          ${ICONS.linkedin}
          <a href="${contact.linkedin}">${contact.linkedin}</a>
        </span>
        <span class="social-link">
          ${ICONS.location}
          ${contact.location}
        </span>
      </div>
    </div>
  `
}
