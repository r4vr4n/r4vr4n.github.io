# Agent instructions

Personal resume site (static HTML/CSS/vanilla JS, no build step). See [README.md](README.md) for structure.

## Source of truth and sync

- [data/resume-data.js](data/resume-data.js) is the single source of truth for all resume content.
- The GitHub profile repo `../r4vr4n` (`E:\Github\r4vr4n`) mirrors it in `README.md` and `resumecontent.js`.
  Both files are **generated**. Never edit them by hand.
- After **any** change to `data/resume-data.js`, run:

  ```sh
  node scripts/sync-profile.mjs
  node scripts/sync-profile.mjs --check   # must print "Profile repo is in sync."
  ```

- The one exception is `LIVE_PROJECTS` in `../r4vr4n/resumecontent.js`. It's maintained by hand
  there, and the script carries it over unchanged and renders it into the README's Projects section.
- A content change is only done when **both** repos are updated. Commit each repo separately, with the
  same commit message. Commit only when the user asks.

## Content rules

- No invented metrics, features, tools or responsibilities. Every claim must be something the user can
  defend in an interview. If a number is missing, write the bullet without one.
- Check Teragonia claims against `data.md`, the gitignored notes built from the user's commits.
  Unmerged or in-review work stays off the resume until it ships.
- Keep official job titles. Show wider scope (for example, backend work) in the bullets, not the title.
- Check that naming internal systems is allowed under the user's NDA. Astradis is currently named with
  the user's approval.
- Planned-but-unbuilt features (for example, Zeitview's excavation cut/fill volume) stay off the resume.
- Bullets use `<strong>` for key tech and `&lt;` for `<`. The site renders them as HTML, and the sync
  script converts them to Markdown.

## Interview prep

- `interview-prep.md` (gitignored, never publish it) has the likely cross-questions and answers for
  every resume bullet.
- When a resume claim is added, changed or removed, update the matching section of `interview-prep.md`
  in the same change.
