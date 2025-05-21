import { renderTechnologies } from "./renderTechnologies.js"
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
    const techStackHTML = renderTechnologies(job.technologies)

    jobElement.innerHTML = `
      <div class="job-header"> 
      <div>
      <div class="company">${job.company}</div> 
      <div class="position">${job.position}</div> 
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
