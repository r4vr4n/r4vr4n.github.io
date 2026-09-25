import { DOM_IDS } from "../constants/dom-ids.js"

/**
 * Triggers the browser's native print-to-PDF, which keeps the resume's
 * text selectable/searchable (ATS parsers read a rasterized PDF as an
 * image with no extractable text).
 */
function generatePDF() {
  window.print()
}

/**
 * Sets up the download button functionality
 */
export function setupDownloadButton() {
  const downloadBtn = document.getElementById(DOM_IDS.DOWNLOAD_BTN)

  if (downloadBtn) {
    downloadBtn.addEventListener("click", generatePDF)
  }

  // Handle keyboard shortcut (Ctrl+P / Cmd+P)
  document.addEventListener("keydown", (e) => {
    if ((e.ctrlKey || e.metaKey) && e.key === "p") {
      e.preventDefault()
      generatePDF()
    }
  })
}
