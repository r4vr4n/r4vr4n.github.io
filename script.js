/**
 * Main entry point for the resume application
 * Initializes all sections on page load
 */

import {
  renderAchievements,
  renderCertifications,
  renderEducation,
  renderPersonalInfo,
  renderProjects,
  renderSkills,
  renderWorkExperience,
  setupDownloadButton,
} from "./functions/index.js"

import { RESUME_DATA } from "./data/resume-data.js"

document.addEventListener("DOMContentLoaded", () => {
  try {
    // Destructure data for cleaner access
    const {
      personalInfo,
      workExperience,
      achievements,
      skills,
      projects,
      education,
      certifications,
    } = RESUME_DATA

    // Render all sections
    renderPersonalInfo(personalInfo)
    renderWorkExperience(workExperience)
    renderAchievements(achievements)
    renderSkills(skills)
    renderProjects(projects)
    renderEducation(education)
    renderCertifications(certifications)

    // Setup interactive elements
    setupDownloadButton()
  } catch (error) {
    console.error("Error initializing resume:", error)
    document.body.innerHTML =
      '<div class="error">Failed to initialize resume. Please try again later.</div>'
  }
})
