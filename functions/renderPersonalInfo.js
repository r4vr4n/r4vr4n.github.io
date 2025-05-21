/**
 * Renders the personal information section
 * @param {Object} personalInfo - Personal information data
 */
export function renderPersonalInfo(personalInfo) {
  const personalInfoSection = document.getElementById("personal-info")
  personalInfoSection.innerHTML = `
  <h1>${personalInfo.name}</h1>
  <h3>
  React Engineer 
  </h3>
  <span class="location">
    ${personalInfo.contact.location}
    </span>
  <div class="contact-info">
    <div class="social-links">
    <div>
    <span class="social-link"
    >
    <img src="./AtIcon.svg" alt="LinkedIn" class="social-icon" width="16px" height="16px" /><a href="mailto:${personalInfo.contact.email}"
    >${personalInfo.contact.email}</a
    ></span
    >
    
    <span class="social-link"
    > <img src="./PhoneIcon.svg" alt="LinkedIn" class="social-icon" width="16px" height="16px" /><a href="tel:${personalInfo.contact.phone}"
    >${personalInfo.contact.phone}</a
    ></span
    >
    </div>
    <div>
    <span class="social-link">
    <img src="./LinkedInIcon.svg" alt="LinkedIn" class="social-icon" width="16px" height="16px" />
    <a href="https://www.linkedin.com/in/r4vr4n">
    ${personalInfo.contact.linkedin}</a
    >
    </span>
    <span class="social-link">
    <img src="./GithubIcon.svg" alt="GitHub" class="social-icon" width="16px" height="16px"  />
    <a href="https://www.github.com/r4vr4n" target="_blank"
    >${personalInfo.contact.github}</a
    >
    </span>
    </div>
    </div>
  </div>
  `
}
