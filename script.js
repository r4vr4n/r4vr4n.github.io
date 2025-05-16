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

    // Render projects
    renderLiveProjects(resumeData.liveProjects)

    // Render interests
    renderInterests(resumeData.interests)

    // Set up download button functionality
    setupDownloadButton()
  } catch (error) {
    console.error("Error loading resume data:", error)
    document.body.innerHTML =
      '<div class="error">Failed to load resume data. Please try again later.</div>'
  }
})

function renderPersonalInfo(personalInfo) {
  const personalInfoSection = document.getElementById("personal-info")
  personalInfoSection.innerHTML = `
    <h1>${personalInfo.name}</h1>
    <div class="contact-info">
      <span>${personalInfo.contact.email}</span> |
      <span>${personalInfo.contact.phone}</span> |
      <span>${personalInfo.contact.location}</span>

      <div class="social-links">
      
      <span class='social-link'>
      <img src="./LinkedInIcon.svg" alt="LinkedIn" class="social-icon">
      <a href='https://www.linkedin.com/in/r4vr4n'> ${personalInfo.contact.linkedin}</a>
      </span>
      <span class='social-link'>
      <img src="./GithubIcon.svg" alt="GitHub" class="social-icon">
      <a href='https://www.github.com/r4vr4n' target="_blank">${personalInfo.contact.github}</a>
      </span>
      </div>
    </div>
  `
}

function renderWorkExperience(experiences) {
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
    const skillsHTML = job.technologies
      ? `<div class="technologies"><strong>Technologies: </strong>${job.technologies.join(
          " · "
        )} </div>`
      : ""

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
      ${skillsHTML}
    `

    workExperienceSection.appendChild(jobElement)
  }
}

function renderCertifications(certifications) {
  const certificationsSection = document.getElementById("certifications")
  certificationsSection.innerHTML = ""

  for (const cert of certifications) {
    const certElement = document.createElement("div")
    certElement.className = "certification-item"

    certElement.innerHTML = `
      <div class="certification-header">
        <div>
          <div class="cert-name">${cert.name}</div>
          <div class="cert-issuer">${cert.issuer}</div>
          <div class="cert-id">Credential ID: <a href=${cert.url} target='_blank'>${cert.id}</a></div>
        </div>
        <div class="period">${cert.period}</div>
      </div>
    `

    certificationsSection.appendChild(certElement)
  }
}

function renderEducation(education) {
  const educationSection = document.getElementById("education")
  educationSection.innerHTML = ""

  for (const edu of education) {
    const eduElement = document.createElement("div")
    eduElement.className = "education-item"

    eduElement.innerHTML = `
      <div class="education-header">
        <div>
          <div class="degree">${edu.degree}</div>
          <div class="institution">${edu.institution}</div>
        </div>
        <div>
          <div class="period">${edu.period}</div>
          <div class="location">${edu.location}</div>
        </div>
      </div>
    `

    educationSection.appendChild(eduElement)
  }
}

function renderTechnologies(technologies) {
  const technologiesListSection = document.getElementById("technologies-list")
  technologiesListSection.innerHTML = technologies
    .map((skill, index) =>
      index === technologies.length - 1 ? skill : `${skill} · `
    )
    .join("")
}

function renderLiveProjects(projects) {
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
      <div class="project-description">${project.description}</div>
      `

    projectsSection.appendChild(projectElement)
  }
}

function renderInterests(interests) {
  const interestsSection = document.getElementById("interests")
  interestsSection.innerHTML = interests
    .map((interest, index) =>
      index === interests.length - 1 ? interest : `${interest} · `
    )
    .join("")
}

// PDF download and print functionality
function setupDownloadButton() {
  const downloadBtn = document.getElementById("downloadBtn")
  if (downloadBtn) {
    downloadBtn.addEventListener("click", () => {
      // Show print dialog using browser's built-in functionality
      window.print()
    })
  }

  // Handle keyboard shortcut (Ctrl+P)
  document.addEventListener("keydown", (e) => {
    if ((e.ctrlKey || e.metaKey) && e.key === "p") {
      e.preventDefault()
      window.print()
    }
  })
}
