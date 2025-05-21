/**
 * Renders the soft skills section
 * @param {Array} softSkills - Soft skills data
 */
export function renderSoftSkills(softSkills) {
  const softSkillsSection = document.getElementById("soft-skills")
  softSkillsSection.innerHTML = softSkills
    .map((skill, index) =>
      index === softSkills.length - 1 ? skill : `${skill} · `
    )
    .join("")
}
