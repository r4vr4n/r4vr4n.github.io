import { DOM_IDS } from "../constants/dom-ids.js"

/**
 * Sets up the download button functionality
 */
export function setupDownloadButton() {
  const downloadBtn = document.getElementById(DOM_IDS.DOWNLOAD_BTN)

  if (downloadBtn) {
    downloadBtn.addEventListener("click", () => {
      window.print()
    })
  }

  // Handle keyboard shortcut (Ctrl+P / Cmd+P)
  document.addEventListener("keydown", (e) => {
    if ((e.ctrlKey || e.metaKey) && e.key === "p") {
      e.preventDefault()
      window.print()
    }
  })
}
