/**
 * Renders the live projects section
 * @param {Array} projects - Projects data
 */
export function renderLiveProjects(projects) {
  const projectsSection = document.getElementById("projects")
  projectsSection.innerHTML = ""

  for (const project of projects) {
    const projectElement = document.createElement("div")
    projectElement.className = "project-item"

    // Sort technologies alphabetically if they exist
    const sortedTechnologies = project.technologies
      ? [...project.technologies].sort()
      : []

    const techStackHtml = sortedTechnologies.length
      ? `<div class="tech-stack">
          <span class="tech-stack-label">Tech Stack:</span>
          <span class="tech-stack-items">${sortedTechnologies.join(", ")}</span>
        </div>`
      : ""

    projectElement.innerHTML = `
      <div class="project-header">
        <div class="project-name"><a href="${
          project.url
        }" target="_blank" class="project-link">${project.url.replace(
      "https://",
      ""
    )}</a>
    </div> 
		<div class="project-description"> - ${project.description}</div>
      </div>
      ${techStackHtml}
      `

    projectsSection.appendChild(projectElement)
  }
}
