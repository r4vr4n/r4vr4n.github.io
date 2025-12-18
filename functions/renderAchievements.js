import { DOM_IDS } from "../constants/dom-ids.js"
import { getAndClearElement, createElement } from "../utils/dom.js"

/**
 * Renders the achievements section
 * @param {Array} achievements - Achievements data
 */
export function renderAchievements(achievements) {
  const section = getAndClearElement(DOM_IDS.ACHIEVEMENTS)
  if (!section) return

  for (const achievement of achievements) {
    const element = createElement("div", "achievement-item")

    element.innerHTML = `
      <div class="achievement-content">
        <div class="achievement-header">
          <span class="achievement-title">${achievement.title}</span>
          <span class="achievement-date">${achievement.date}</span>
        </div>
        <p class="achievement-description">${achievement.description}</p>
      </div>
    `

    section.appendChild(element)
  }
}
