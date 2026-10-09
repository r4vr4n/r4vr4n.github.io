/**
 * Syncs the GitHub profile repo (../r4vr4n) from data/resume-data.js.
 *
 * Regenerates ../r4vr4n/resumecontent.js and ../r4vr4n/README.md. The only
 * hand-edited part of the profile repo is the LIVE_PROJECTS block in
 * resumecontent.js, which is carried over as-is.
 *
 * Usage:
 *   node scripts/sync-profile.mjs [profileRepoPath]          write both files
 *   node scripts/sync-profile.mjs --check [profileRepoPath]  exit 1 if out of sync
 */

import { existsSync, readFileSync, writeFileSync } from "node:fs"
import { dirname, join, resolve } from "node:path"
import { fileURLToPath, pathToFileURL } from "node:url"

const repoRoot = resolve(dirname(fileURLToPath(import.meta.url)), "..")
const args = process.argv.slice(2)
const check = args.includes("--check")
const profileRepo = resolve(
  args.find((arg) => !arg.startsWith("--")) ?? join(repoRoot, "..", "r4vr4n"),
)

const { RESUME_DATA: data } = await import(
  pathToFileURL(join(repoRoot, "data", "resume-data.js"))
)

const contentPath = join(profileRepo, "resumecontent.js")
const readmePath = join(profileRepo, "README.md")
if (!existsSync(contentPath)) {
  console.error(`Profile repo not found: ${contentPath}`)
  process.exit(1)
}

// LIVE_PROJECTS is maintained by hand in the profile repo, so keep it verbatim
const existingContent = readFileSync(contentPath, "utf8")
const projectsStart = existingContent.indexOf("export const LIVE_PROJECTS")
if (projectsStart === -1) {
  console.error(`No LIVE_PROJECTS export in ${contentPath}`)
  process.exit(1)
}
const liveProjectsSource = existingContent.slice(projectsStart)
const { LIVE_PROJECTS: liveProjects } = await import(
  `${pathToFileURL(contentPath)}?t=${Date.now()}`
)

// =========================================
// resumecontent.js
// =========================================

const toKey = (key) =>
  /^[A-Za-z_$][\w$]*$/.test(key) ? key : JSON.stringify(key)

function serialize(value, depth) {
  const pad = "  ".repeat(depth + 1)
  const end = "  ".repeat(depth)
  if (Array.isArray(value)) {
    if (!value.length) return "[]"
    const items = value.map((item) => `${pad}${serialize(item, depth + 1)},`)
    return `[\n${items.join("\n")}\n${end}]`
  }
  if (value && typeof value === "object") {
    const entries = Object.entries(value).map(
      ([key, item]) => `${pad}${toKey(key)}: ${serialize(item, depth + 1)},`,
    )
    return `{\n${entries.join("\n")}\n${end}}`
  }
  return JSON.stringify(value)
}

// Long descriptions go on their own line, matching the prettier style
const wrapLongStrings = (source) =>
  source.replace(
    /^(\s*)(description): (".{60,}"),$/gm,
    (_, indent, key, str) => `${indent}${key}:\n${indent}  ${str},`,
  )

const jobs = data.workExperience.map(({ techStack, achievement, ...job }) =>
  techStack?.length ? { ...job, tech_stack: techStack } : job,
)

const resumeContent = `// Synced from r4vr4n.github.io/data/resume-data.js (scripts/sync-profile.mjs)
export const PERSONAL_INFO = ${serialize(data.personalInfo, 0)}

export const SUMMARY =
  ${JSON.stringify(data.summary)}

export const WORK_EXPERIENCE = ${wrapLongStrings(serialize(jobs, 0))}

export const SKILLS = ${serialize(data.skills, 0)}

export const CERTIFICATIONS = ${serialize(data.certifications, 0)}

export const EDUCATION = ${serialize(data.education, 0)}

export const ACHIEVEMENTS = []

${liveProjectsSource}`

// =========================================
// README.md
// =========================================

const toMarkdown = (html) =>
  html
    .replace(/<\/?strong>/g, "**")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&amp;/g, "&")

const MONTHS = [
  "Jan", "Feb", "Mar", "Apr", "May", "Jun",
  "Jul", "Aug", "Sep", "Oct", "Nov", "Dec",
]
const formatMonth = (value) => {
  const match = value.trim().match(/^(\d{2})\/(\d{4})$/)
  return match ? `${MONTHS[Number(match[1]) - 1]} ${match[2]}` : value.trim()
}
const formatPeriod = (period, named = true) =>
  period
    .split(" - ")
    .map((part) => (named ? formatMonth(part) : part.trim()))
    .join(" – ")

const { name, title, contact } = data.personalInfo
const githubUser = contact.github.split("/").filter(Boolean).pop()

const jobSections = data.workExperience.map((job) => {
  const heading = job.client
    ? `${job.company} (Client: ${job.client})`
    : job.company
  const lines = [
    `### ${heading} | ${job.position}`,
    "",
    `_${job.location} | ${formatPeriod(job.period)}_`,
    "",
  ]
  if (job.description) lines.push(toMarkdown(job.description), "")
  lines.push(...job.responsibilities.map((item) => `- ${toMarkdown(item)}`))
  if (job.techStack?.length) lines.push(`- **Stack:** ${job.techStack.join(", ")}`)
  return lines.join("\n")
})

const projectSections = liveProjects.map((project) =>
  [
    `### ${project.name}`,
    "",
    `[${project.url.replace(/^https?:\/\//, "")}](${project.url})  `,
    `${project.description}  `,
    `**Stack:** ${project.tech_stack.join(", ")}`,
  ].join("\n"),
)

const certificationSections = data.certifications.map((cert) =>
  [
    `- **${cert.name}**  `,
    `  ${cert.issuer}, ${cert.location}  `,
    `  ${formatPeriod(cert.period, false)}  `,
    `  [View Certificate](${cert.url})`,
  ].join("\n"),
)

const educationSections = data.education.map((edu) =>
  [
    `**${edu.degree}**  `,
    `${edu.institution}, ${edu.location}  `,
    formatPeriod(edu.period, false),
  ].join("\n"),
)

const readme = `# ${name}

**${title}**

📄 **[Download resume (PDF)](https://r4vr4n.github.io/)**

## Contact Information

- **Email:** [${contact.email}](mailto:${contact.email})
- **Phone:** ${contact.phone}
- **Location:** ${contact.location.replace(/, IN$/, ", India")}
- **LinkedIn:** [${name}](${contact.linkedin})
- **GitHub:** [${githubUser}](https://github.com/${githubUser})

## Professional Summary

${toMarkdown(data.summary)}

## Skills

${Object.entries(data.skills)
  .map(([category, items]) => `- **${category}:** ${items.join(", ")}`)
  .join("\n")}

## Work Experience

${jobSections.join("\n\n")}

## Projects

${projectSections.join("\n\n")}

## Certifications

${certificationSections.join("\n\n")}

## Education

${educationSections.join("\n\n")}
`

// =========================================
// Write or check
// =========================================

// Compare ignoring line endings, since git may check files out with CRLF
const normalize = (text) => text.replace(/\r\n/g, "\n")
const outputs = [
  [contentPath, resumeContent],
  [readmePath, readme],
]

if (check) {
  const stale = outputs.filter(
    ([path, text]) =>
      !existsSync(path) || normalize(readFileSync(path, "utf8")) !== text,
  )
  for (const [path] of stale) console.error(`Out of sync: ${path}`)
  if (stale.length) {
    console.error("Run: node scripts/sync-profile.mjs")
    process.exit(1)
  }
  console.log("Profile repo is in sync.")
} else {
  for (const [path, text] of outputs) writeFileSync(path, text)
  console.log(`Synced ${contentPath} and ${readmePath}`)
}
