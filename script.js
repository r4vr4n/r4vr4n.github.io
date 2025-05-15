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

  experiences.forEach((job) => {
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
      <div class="description">
        ${job.description}
      </div>
      <ul>
        ${responsibilitiesHTML}
      </ul>
    `

    workExperienceSection.appendChild(jobElement)
  })
}

function renderSkills(skills) {
  const skillsListSection = document.getElementById("skills-list")
  skillsListSection.innerHTML = skills.join("\n· ")
}
