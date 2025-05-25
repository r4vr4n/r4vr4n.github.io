/**
 * Renders the work experience section
 * @param {Array} experiences - Work experience data
 */
export function renderWorkExperience(experiences) {
  const workExperienceSection = document.getElementById("work-experience")
  workExperienceSection.innerHTML = ""

  for (const job of experiences) {
    const jobElement = document.createElement("div")
    jobElement.className = "job"

    // Create responsibilities list items
    const responsibilitiesHTML = job.responsibilities
      .map((responsibility) => `<li>${responsibility}</li>`)
      .join("")

    // Create skills HTML
    const techStackHTML = job.tech_stack.length
      ? `<div class="tech-stack">
          <span class="tech-stack-label">Tech Stack:</span>
          <span class="tech-stack-items">${job.tech_stack.join(", ")}</span>
        </div>`
      : ""

    jobElement.innerHTML = `
      <div class="job-header"> 
      <div>
      <div class="position">${job.position}</div> 
      <div class="company">${job.company}</div> 
      </div>
        <div>
          <div class="period">${job.period}</div>
          <div class="location">${job.location}</div>
        </div>
      </div>  
      <ul>
        ${responsibilitiesHTML}
      </ul>
      ${techStackHTML}
    `

    workExperienceSection.appendChild(jobElement)
  }
}
