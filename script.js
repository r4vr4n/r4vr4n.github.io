/**
 * Main entry point for the resume application
 * Initializes all sections on page load
 */

import {
  renderCertifications,
  renderEducation,
  renderPersonalInfo,
  renderSkills,
  renderWorkExperience,
  setupDownloadButton,
} from "./functions/index.js"

import { RESUME_DATA } from "./data/resume-data.js"
import { getYearsOfExperience } from "./utils/experience.js"

/**
 * Keeps the tab title and description meta in sync with the resume data,
 * so they don't have to be hand-edited in index.html whenever the resume
 * content (name/title/experience) changes.
 * @param {Object} personalInfo - Personal information data
 * @param {Array} workExperience - Work experience data, used to derive years of experience
 */
function syncDocumentMeta(personalInfo, workExperience) {
  const { name, title } = personalInfo
  const years = getYearsOfExperience(workExperience)

  document.title = `${name} - ${title} Resume`

  const descriptionMeta = document.querySelector('meta[name="description"]')
  if (descriptionMeta) {
    descriptionMeta.setAttribute(
      "content",
      `Resume of ${name}, ${title} with ${years}+ years of experience`,
    )
  }
}

document.addEventListener("DOMContentLoaded", () => {
  try {
    // Destructure data for cleaner access
    const { personalInfo, workExperience, skills, education, certifications } =
      RESUME_DATA

    // Render all sections
    renderPersonalInfo(personalInfo)
    renderWorkExperience(workExperience)
    renderSkills(skills)
    renderEducation(education)
    renderCertifications(certifications)

    // Keep <title>/meta description in sync with the resume data
    syncDocumentMeta(personalInfo, workExperience)

    // Setup interactive elements
    setupDownloadButton()
  } catch (error) {
    console.error("Error initializing resume:", error)
    document.body.innerHTML =
      '<div class="error">Failed to initialize resume. Please try again later.</div>'
  }
})
