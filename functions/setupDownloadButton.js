import { DOM_IDS } from "../constants/dom-ids.js"

/**
 * Opens print dialog for PDF generation
 * Browser's native print-to-PDF is more reliable than html2pdf
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
