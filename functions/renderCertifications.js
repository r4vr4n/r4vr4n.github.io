/**
 * Renders the certifications section
 * @param {Array} certifications - Certification data
 */
export function renderCertifications(certifications) {
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
        <div>
        <div class="period">${cert.period}</div>
        <div class="location">${cert.location}</div>
        </div>
      </div>
    `

    certificationsSection.appendChild(certElement)
  }
}
