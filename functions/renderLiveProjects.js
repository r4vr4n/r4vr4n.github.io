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

    projectElement.innerHTML = `
      <div class="project-header">
        <div class="project-name"><a href="${
          project.url
        }" target="_blank" class="project-link">${project.url.replace(
      "https://",
      ""
    )}</a>
    </div> 
      </div>
      <div class="project-description">- ${project.description}</div>
      `

    projectsSection.appendChild(projectElement)
  }
}
