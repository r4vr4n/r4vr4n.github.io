/**
 * Sets up the download button functionality
 */
export function setupDownloadButton() {
  const downloadBtn = document.getElementById("downloadBtn")
  if (downloadBtn) {
    downloadBtn.addEventListener("click", () => {
      // Show print dialog using browser's built-in functionality
      window.print()
    })
  }

  // Handle keyboard shortcut (Ctrl+P)
  document.addEventListener("keydown", (e) => {
    if ((e.ctrlKey || e.metaKey) && e.key === "p") {
      e.preventDefault()
      window.print()
    }
  })
}
