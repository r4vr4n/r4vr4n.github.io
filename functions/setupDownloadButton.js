import { DOM_IDS } from "../constants/dom-ids.js"

/**
 * PDF generation options
 * Configured to fit all content on a single A4 page
 */
const PDF_OPTIONS = {
  margin: 5,
  filename: "Rajeev_Ranjan_Resume.pdf",
  image: { type: "jpeg", quality: 0.98 },
  html2canvas: {
    scale: 2,
    useCORS: true,
    letterRendering: true,
  },
  jsPDF: {
    unit: "mm",
    format: "a4",
    orientation: "portrait",
  },
  pagebreak: { mode: "avoid-all" },
}

/**
 * Generates and downloads PDF from the resume container
 */
async function generatePDF() {
  const container = document.getElementById(DOM_IDS.CONTAINER)
  const downloadBtn = document.getElementById(DOM_IDS.DOWNLOAD_BTN)

  if (!container) {
    console.error("Resume container not found")
    return
  }

  // Update button state
  const originalText = downloadBtn.textContent
  downloadBtn.textContent = "Generating..."
  downloadBtn.disabled = true

  try {
    // Check if html2pdf is available
    if (typeof html2pdf === "undefined") {
      console.warn("html2pdf not loaded, falling back to print")
      window.print()
      return
    }

    // Generate PDF
    await html2pdf().set(PDF_OPTIONS).from(container).save()
  } catch (error) {
    console.error("PDF generation failed:", error)
    // Fallback to browser print
    window.print()
  } finally {
    // Restore button state
    downloadBtn.textContent = originalText
    downloadBtn.disabled = false
  }
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
