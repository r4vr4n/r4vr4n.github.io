/**
 * Renders the interests section
 * @param {Array} interests - Interests data
 */
export function renderInterests(interests) {
  const interestsSection = document.getElementById("interests")
  interestsSection.innerHTML = interests
    .map((interest, index) =>
      index === interests.length - 1 ? interest : `${interest} · `
    )
    .join("")
}
