/**
 * Renders the achievements section
 * @param {Array} achievements - Achievements data
 */
export function renderAchievements(achievements) {
  const achievementsSection = document.getElementById("achievements")
  achievementsSection.innerHTML = ""

  for (const achievement of achievements) {
    const achievementElement = document.createElement("div")
    achievementElement.className = "achievement-item"

    achievementElement.innerHTML = `
      <div class="achievement-content">
        <div class="achievement-header">
          <span class="achievement-title">${achievement.title}</span>
          <span class="achievement-date">${achievement.date}</span>
        </div>
        <p class="achievement-description">${achievement.description}</p>
      </div>
    `

    achievementsSection.appendChild(achievementElement)
  }
}

