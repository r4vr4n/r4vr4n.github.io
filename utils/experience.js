/**
 * Derives total years of professional experience from the work experience
 * data, instead of hardcoding a number that goes stale over time.
 */

const MONTHS_PER_YEAR = 12

/**
 * Parses a "MM/YYYY" date into a Date at the first of that month.
 * @param {string} monthYear - Date string in "MM/YYYY" format
 * @returns {Date}
 */
function parseMonthYear(monthYear) {
  const [month, year] = monthYear.split("/").map(Number)
  return new Date(year, month - 1, 1)
}

/**
 * Finds the earliest start date across all work experience entries.
 * @param {Array<{period: string}>} workExperience - Work experience data
 * @returns {Date}
 */
function getEarliestStartDate(workExperience) {
  const startDates = workExperience.map((job) =>
    parseMonthYear(job.period.split("-")[0].trim()),
  )
  return new Date(Math.min(...startDates))
}

/**
 * Calculates total years of experience (rounded down to the nearest whole
 * year) from the earliest work experience entry to today.
 * @param {Array<{period: string}>} workExperience - Work experience data
 * @returns {number} Whole years of experience
 */
export function getYearsOfExperience(workExperience) {
  const earliestStart = getEarliestStartDate(workExperience)
  const now = new Date()

  const totalMonths =
    (now.getFullYear() - earliestStart.getFullYear()) * MONTHS_PER_YEAR +
    (now.getMonth() - earliestStart.getMonth())

  return Math.floor(totalMonths / MONTHS_PER_YEAR)
}
