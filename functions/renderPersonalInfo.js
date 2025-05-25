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
    <svg stroke="var(--color-text-secondary)" fill="var(--color-text-secondary)" stroke-width="0" viewBox="0 0 24 24" width="16" height="16" xmlns="http://www.w3.org/2000/svg" class="social-icon"><path fill="none" d="M0 0h24v24H0z"></path><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10h5v-2h-5c-4.34 0-8-3.66-8-8s3.66-8 8-8 8 3.66 8 8v1.43c0 .79-.71 1.57-1.5 1.57s-1.5-.78-1.5-1.57V12c0-2.76-2.24-5-5-5s-5 2.24-5 5 2.24 5 5 5c1.38 0 2.64-.56 3.54-1.47.65.89 1.77 1.47 2.96 1.47 1.97 0 3.5-1.6 3.5-3.57V12c0-5.52-4.48-10-10-10zm0 13c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3z"></path></svg><a href="mailto:${personalInfo.contact.email}"
    >${personalInfo.contact.email}</a
    ></span>
    
    <span class="social-link"
    > <svg stroke="var(--color-text-secondary)" fill="var(--color-text-secondary)" stroke-width="0" viewBox="0 0 24 24" width="16" height="16" xmlns="http://www.w3.org/2000/svg" class="social-icon"><path fill="none" d="M0 0h24v24H0V0z"></path><path d="M6.54 5c.06.89.21 1.76.45 2.59l-1.2 1.2c-.41-1.2-.67-2.47-.76-3.79h1.51m9.86 12.02c.85.24 1.72.39 2.6.45v1.49c-1.32-.09-2.59-.35-3.8-.75l1.2-1.19M7.5 3H4c-.55 0-1 .45-1 1 0 9.39 7.61 17 17 17 .55 0 1-.45 1-1v-3.49c0-.55-.45-1-1-1-1.24 0-2.45-.2-3.57-.57a.84.84 0 0 0-.31-.05c-.26 0-.51.1-.71.29l-2.2 2.2a15.149 15.149 0 0 1-6.59-6.59l2.2-2.2c.28-.28.36-.67.25-1.02A11.36 11.36 0 0 1 8.5 4c0-.55-.45-1-1-1z"></path></svg><a href="tel:${personalInfo.contact.phone}"
    >${personalInfo.contact.phone}</a
    ></span
    >
    </div>
    <div>
    <span class="social-link">
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="16" height="16" class="social-icon" fill="var(--color-text-secondary)">
      <path d="M20.5 2h-17A1.5 1.5 0 002 3.5v17A1.5 1.5 0 003.5 22h17a1.5 1.5 0 001.5-1.5v-17A1.5 1.5 0 0020.5 2zM8 19H5v-9h3zM6.5 8.25A1.75 1.75 0 118.3 6.5a1.78 1.78 0 01-1.8 1.75zM19 19h-3v-4.74c0-1.42-.6-1.93-1.38-1.93A1.74 1.74 0 0013 14.19a.66.66 0 000 .14V19h-3v-9h2.9v1.3a3.11 3.11 0 012.7-1.4c1.55 0 3.36.86 3.36 3.66z">
      </path>
    </svg>
    <a href=  ${personalInfo.contact.linkedin}>
    ${personalInfo.contact.linkedin}</a
    >
    </span>
    <span class="social-link">
    <svg stroke="var(--color-text-secondary)" fill="var(--color-text-secondary)" stroke-width="0" viewBox="0 0 24 24" width="16" height="16" xmlns="http://www.w3.org/2000/svg" class="social-icon"><path fill="none" d="M0 0h24v24H0z"></path><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5a2.5 2.5 0 0 1 0-5 2.5 2.5 0 0 1 0 5z"></path></svg>
    ${personalInfo.contact.location}
    </span>
    </div>
  </div>
  `
}
