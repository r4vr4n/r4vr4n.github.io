/**
 * Renders the technologies section
 * @param {Array} technologies - Technologies data
 */
export function renderTechnologies(technologies) {
  const technologiesListSection = document.getElementById("technologies-list")
  technologiesListSection.innerHTML = technologies
    ?.map((skill, index) =>
      index === technologies.length - 1 ? skill : `${skill} · `
    )
    .join("")
}
