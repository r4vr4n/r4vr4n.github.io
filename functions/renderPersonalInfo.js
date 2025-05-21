/**
 * Renders the personal information section
 * @param {Object} personalInfo - Personal information data
 */
export function renderPersonalInfo(personalInfo) {
  const personalInfoSection = document.getElementById("personal-info")
  personalInfoSection.innerHTML = `
	<div>
  <h1>${personalInfo.name}</h1>
  <h3>
  ${personalInfo.title}
  </h3> 
	</div>
<div class="social-links">
    <div>
    <span class="social-link">
    <img src="./AtIcon.svg" alt="LinkedIn" class="social-icon" width="16px" height="16px" /><a href="mailto:${personalInfo.contact.email}"
    >${personalInfo.contact.email}</a
    ></span>
    
    <span class="social-link"
    > <img src="./PhoneIcon.svg" alt="LinkedIn" class="social-icon" width="16px" height="16px" /><a href="tel:${personalInfo.contact.phone}"
    >${personalInfo.contact.phone}</a
    ></span
    >
    </div>
    <div>
    <span class="social-link">
    <img src="./LinkedInIcon.svg" alt="LinkedIn" class="social-icon" width="16px" height="16px" />
    <a href=  ${personalInfo.contact.linkedin}>
    ${personalInfo.contact.linkedin}</a
    >
    </span>
    <span class="social-link">
    <img src="./LocationPinIcon.svg" alt="Location" class="social-icon" width="16px" height="16px"  />
    ${personalInfo.contact.location}
    </span>
    </div>
  </div>
  `
}
