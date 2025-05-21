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

document.addEventListener("DOMContentLoaded", async () => {
  try {
    // Fetch the JSON data
    const response = await fetch("index.json")
    if (!response.ok) {
      throw new Error("Failed to fetch resume data")
    }
    const resumeData = await response.json()

    // Render personal information
    renderPersonalInfo(resumeData.personalInfo)

    // Render work experience
    renderWorkExperience(resumeData.workExperience)

    // Render education
    renderEducation(resumeData.education)

    // Render certifications
    renderCertifications(resumeData.certifications)

    // Render technologies
    renderTechnologies(resumeData.technologies)

    // Render achievements (if they exist)
    // renderAchievements(resumeData.achievements)

    // Render projects
    renderLiveProjects(resumeData.liveProjects)

    // Render interests
    // renderInterests(resumeData.interests)

    // Render soft skills
    // renderSoftSkills(resumeData.softSkills)

    // Set up download button functionality
    setupDownloadButton()
  } catch (error) {
    console.error("Error loading resume data:", error)
    document.body.innerHTML =
      '<div class="error">Failed to load resume data. Please try again later.</div>'
  }
})
