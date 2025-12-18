/**
 * DOM utility functions for rendering resume sections
 */

/**
 * Gets a DOM element by ID and clears its content
 * @param {string} id - The element ID
 * @returns {HTMLElement|null} The element or null if not found
 */
export function getAndClearElement(id) {
  const element = document.getElementById(id)
  if (element) {
    element.innerHTML = ""
  }
  return element
}

/**
 * Creates a DOM element with the specified class name
 * @param {string} tag - The HTML tag name
 * @param {string} className - The CSS class name
 * @returns {HTMLElement} The created element
 */
export function createElement(tag, className) {
  const element = document.createElement(tag)
  if (className) {
    element.className = className
  }
  return element
}

/**
 * Generates tech stack HTML markup
 * @param {string[]} techStack - Array of technology names
 * @returns {string} HTML string for tech stack display
 */
export function createTechStackHTML(techStack) {
  if (!techStack?.length) return ""
  return `
    <div class="tech-stack">
      <span class="tech-stack-label">Tech Stack:</span>
      <span class="tech-stack-items">${techStack.join(", ")}</span>
    </div>
  `
}

/**
 * Generates a list of items as HTML
 * @param {string[]} items - Array of list item contents
 * @returns {string} HTML string of list items
 */
export function createListItemsHTML(items) {
  return items.map((item) => `<li>${item}</li>`).join("")
}

