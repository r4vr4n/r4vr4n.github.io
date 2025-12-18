// Import functions from the functions directory
import {
  renderAchievements,
  renderCertifications,
  renderEducation,
  renderLiveProjects,
  renderPersonalInfo,
  renderSummary,
  renderTechnologies,
  renderWorkExperience,
  setupDownloadButton,
} from "./functions/index.js"

// Import constants containing the data
import {
  ACHIEVEMENTS,
  CERTIFICATIONS,
  EDUCATION,
  LIVE_PROJECTS,
  PERSONAL_INFO,
  SUMMARY,
} from "./constants.js"
import { SKILLS } from "./skills.js"
import { WORK_EXPERIENCE } from "./work-experience.js"

document.addEventListener("DOMContentLoaded", () => {
  try {
    // Render personal information
    renderPersonalInfo(PERSONAL_INFO)

    // Render summary
    // renderSummary(SUMMARY)

    // Render work experience
    renderWorkExperience(WORK_EXPERIENCE)

    // Render achievements
    renderAchievements(ACHIEVEMENTS)

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
