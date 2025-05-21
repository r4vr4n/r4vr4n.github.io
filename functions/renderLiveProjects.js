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

    const techStackHTML = project.tech_stack.length
      ? `<div class="tech-stack">
          <span class="tech-stack-label">Tech Stack:</span>
          <span class="tech-stack-items">${project.tech_stack.join(
            ", "
          )}</span>
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
		<div class="project-description">&nbsp;- ${project.description}</div>
      </div>
      ${techStackHTML}
      `

    projectsSection.appendChild(projectElement)
  }
}
