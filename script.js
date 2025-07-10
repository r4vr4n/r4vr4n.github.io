// Import functions from the functions directory
import {
  renderCertifications,
  renderEducation,
  renderLiveProjects,
  renderPersonalInfo,
  renderTechnologies,
  renderWorkExperience,
  setupDownloadButton,
} from "./functions/index.js"

// Import constants containing the data
import {
  CERTIFICATIONS,
  EDUCATION,
  LIVE_PROJECTS,
  PERSONAL_INFO,
} from "./constants.js"
import { SKILLS } from "./skills.js"
import { WORK_EXPERIENCE } from "./work-experience.js"

document.addEventListener("DOMContentLoaded", () => {
  try {
    // Render personal information
    renderPersonalInfo(PERSONAL_INFO)

    // Render work experience
    renderWorkExperience(WORK_EXPERIENCE)

    // Render education
    renderEducation(EDUCATION)

    // Render certifications
    renderCertifications(CERTIFICATIONS)

    // Render technologies
    renderTechnologies(SKILLS)

    // Render projects
    renderLiveProjects(LIVE_PROJECTS)

    // Set up download button functionality
    setupDownloadButton()
  } catch (error) {
    console.error("Error initializing resume:", error)
    document.body.innerHTML =
      '<div class="error">Failed to initialize resume. Please try again later.</div>'
  }
})
