/**
 * Renders the achievements section
 * @param {Array} achievements - Achievements data
 */
export function renderAchievements(achievements) {
  const achievementsSection = document.getElementById("achievements")
  achievementsSection.innerHTML = ""

  if (!achievements || achievements.length === 0) {
    achievementsSection.innerHTML = "<p>No achievements listed.</p>"
    return
  }

  const achievementsList = document.createElement("ul")

  for (const achievement of achievements) {
    const achievementItem = document.createElement("li")
    achievementItem.className = "achievement-item"

    achievementItem.innerHTML = `
      <div class="achievement-content">
        <div class="achievement-title">${achievement.title}</div>
        <div class="achievement-description">${achievement.description}</div>
        ${
          achievement.date
            ? `<div class="achievement-date">${achievement.date}</div>`
            : ""
        }
      </div>
    `

    achievementsList.appendChild(achievementItem)
  }

  achievementsSection.appendChild(achievementsList)
}
