/**
 * Renders the education section
 * @param {Array} education - Education data
 */
export function renderEducation(education) {
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
