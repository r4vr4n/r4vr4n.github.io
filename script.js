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

    // Render skills
    renderSkills(resumeData.skills)

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

    jobElement.innerHTML = `
      <div class="job-header">
        <div>
          <div class="company">${job.company}</div>
          <div class="position">${job.position}</div>
        </div>
        <div>
          <div class="date">${job.period}</div>
          <div class="location">${job.location}</div>
        </div>
      </div> 
      <ul>
        ${responsibilitiesHTML}
      </ul>
    `

    workExperienceSection.appendChild(jobElement)
  }
}

function renderSkills(skills) {
  const skillsListSection = document.getElementById("skills-list")
  skillsListSection.innerHTML = skills
    .map((skill, index) =>
      index === skills.length - 1 ? skill : `${skill} · `
    )
    .join("")
}

// PDF download and print functionality
function setupDownloadButton() {
  const downloadBtn = document.getElementById("downloadBtn")
  if (downloadBtn) {
    downloadBtn.addEventListener("click", () => {
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
