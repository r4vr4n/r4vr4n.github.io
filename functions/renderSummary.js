/**
 * Renders the professional summary section
 * @param {string} summary - Summary text
 */
export function renderSummary(summary) {
  const summarySection = document.getElementById("summary")
  summarySection.innerHTML = `<p class="summary-text">${summary}</p>`
}

