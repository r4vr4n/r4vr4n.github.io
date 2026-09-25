# Rajeev Ranjan — Data Modeling Autopilot (Teragonia)

## Resume entry

**Software Engineer (Full-Stack, Frontend Lead) — Teragonia · Data Modeling Autopilot** · Sep 2025 – Present

- Top contributor (670+ commits) on an LLM-powered platform that automates Kimball/dbt warehouse modeling
  from 10k+ Snowflake tables, using FastAPI, Temporal, PostgreSQL, Neo4j and React/TypeScript.
- Built the core product UI: an interactive React Flow + ELK.js data-model graph editor, a live pipeline
  DAG view with WebSocket (Centrifugo) updates, column lineage, and a virtualized data catalog. Cut the
  graph editor's p95 drag latency from 333 ms to 50–100 ms and its worst load frame from 8.9 s to about 2 s.
- Designed human-in-the-loop approval workflows (tag review, mart-table mapping, PR review) that handle
  10k+ tables through virtualization, wired to Temporal signal-based approval gates.
- Delivered backend features end to end in FastAPI: moved executive report generation onto Temporal
  workflows, built the KPI and reporting services with an Excel report renderer, and built Excel
  data-model import/export (openpyxl) with single-transaction writes and SSE progress, which lets
  analysts make large data-model changes in one upload instead of many manual UI steps.
- Built per-user Snowflake access through Auth0 OAuth (token service, warehouse user provisioning) for
  the data-exploration module, and a backend integration with the company's AI platform (Astradis) for
  developer environments.
- Led a platform-wide API redesign migration (nested to flat resource model) across frontend and backend.
- Rebuilt the Playwright E2E suite into six parallel CI legs, each with its own database, backed by a
  deterministic seed dataset.

**Skills:** TypeScript, React 19, TanStack (Router, Query, Table, Form, Virtual), Zustand, React Flow, ELK.js,
Monaco, Recharts, Zod, Python 3.12, FastAPI, SQLAlchemy, Alembic, Pydantic, pytest, openpyxl, PostgreSQL,
Neo4j, Temporal, Centrifugo (WebSockets), SSE, Snowflake, OpenAI, OAuth2/Auth0, Playwright, Vitest,
GitHub Actions, Doppler, MCP.

---

## Core strengths

- **Complex, polished UIs.** Built a graph editor, a live pipeline view, virtualized tables and a lineage
  view, with close attention to interaction detail and layout stability.
- **Performance at scale.** Virtualized views for 10k+ tables and proved it against a seeded 10k-table load.
  Cut re-renders and deferred expensive fields.
- **Consolidating shared logic.** Extract shared components, centralize data-fetching patterns, and put
  scattered setup (such as database seeding) behind one verified entry point.
- **Growing into full-stack.** Moved from frontend into Temporal workflows, OAuth integrations,
  transactional imports, access control and database migrations.
- **Raising team standards.** Introduced git hooks, CI improvements, a coding rule book and a rebuilt E2E
  suite, and moved the team toward commit messages that explain why a change was made.
- **Ownership.** Top committer on the project, with work across almost every area of the product.

---

## Project summary (interview pitch)

**Data Modeling Autopilot (DMA)** is an AI platform that builds a Kimball-style (star schema) dbt data
warehouse from raw Snowflake sources.

**The problem it solves:** a data consulting engagement normally spends weeks working out which tables
exist, what the columns mean, which tables describe the same business entity, how they join, and which
mart tables to build. DMA takes a client's warehouse and dbt repo and produces the data model and the
dbt code itself. People only step in to approve at a few gates.

**One-liner:** Full-stack engineer (frontend lead) on an LLM-powered data-modeling autopilot that turns
10k+ raw Snowflake tables into a reviewed dbt star schema through Temporal-orchestrated AI pipelines.

**How it works:**

1. **Discovery.** Syncs every table in the warehouse and the dbt project files on GitHub, and builds a
   lineage graph in Neo4j.
2. **Profiling.** Computes statistics for every column and writes table and column descriptions with an LLM.
3. **Tagging.** An LLM maps tables to business concepts and columns to concept attributes, with confidence
   scores.
4. **Graph building.** Works out join paths between tables once, so every later stage reuses the same paths.
5. **Master-table creation.** Generates the SQL for each concept, all concepts in parallel, building only
   what the existing dbt project is missing.
6. **Reconciliation.** When two concepts change the same dbt file, an LLM merges the two versions.
7. **Join-key identification.** Scores each join on value overlap and on whether it preserves row count.
8. **Pull request.** Opens a PR on GitHub for a person to review and merge.

People approve the work at three gates (tags, mart-table mapping, PR merge). Each gate is a Temporal signal.

**Architecture:** React frontend → OAuth2 Proxy → FastAPI (API → service → repository layers) →
PostgreSQL / Neo4j. Long-running work runs as Temporal workflows on a separate worker. Progress reaches the
UI in real time over Centrifugo WebSockets. An MCP server exposes every stage's intermediate output.

---

## Detailed contributions

### Frontend (primary owner)

- Built most of the React/TypeScript frontend from the early stages; top committer on the repo across
  about 13 months.
- **Interactive data-model graph editor** (React Flow + ELK.js auto-layout): concept nodes, attribute
  handles with connection counts, colour-coded edge scores, marching-ants edge selection, live and draft
  modes, multi-select batch rebuild, hover-reveal category panels, and a searchable concept bar for large
  models. Cut drag and pan cost and removed redundant store subscriptions to speed it up. (Pinned canvas
  comments are built on a branch but not merged, so leave them off until they ship.)
- **UX improvements from a product feedback review:** led a batch of changes covering sidebar navigation
  with keyboard shortcuts, stricter entity setup, catalog filters and default sorting, a compact
  reporting layout, and one combined settings and API-keys page.
- **Pipeline (workflow) view:** live DAG of pipeline stages with real-time status over Centrifugo
  WebSockets and a polling fallback, SKIPPED and failed state handling, rebuild and retry guards, and
  loading of past workflow runs.
- **Approval-gate UI:** tag review with confidence thresholds, per-table approval state, saved reviewer
  drafts, a table-composition graph, and a PR review screen. The virtualized list handles 10k+ tables,
  tested against a seeded 10k-table load.
- **Data catalog:** virtualized TanStack Table with column pinning, backend sorting, search kept in the
  URL, tag and table-type filters, column visibility, resizable panels, column statistics charts, top-k
  values, inline description editing and data preview.
- **Entity onboarding:** multi-step wizard (Zustand-backed) for creating entities, mapping source systems
  and choosing a template data model with preview, plus bulk edits. Later reworked navigation to fold data
  sources into the entities module.
- **Column-level lineage view** (React Flow) backed by Neo4j lineage APIs.
- **SQL worksheet ("Transform" IDE)** on the Monaco editor, with query runs, a schema tree and a results
  grid. Also built an **EDA** module for exploring Snowflake data.
- **Reporting and executive dashboards:** KPI tracking with year-by-year editing, contribution rebalancing,
  metric and concept bar charts, a recommendation priority matrix, use-case management and report export.
- **Admin:** API-key management (create, edit, revoke with hold-to-confirm), user management (bulk
  create, role updates, bulk delete), and a unified system-settings page.
- Moved the UI from MUI to the in-house design system, and later to its system-props API.

### Backend and platform (FastAPI, Temporal, PostgreSQL)

#### Workflows and reporting

- **Moved executive report generation onto Temporal:** a new workflow and activities, a reports service
  (about 1,100 lines), report APIs and real-time progress events (87 files in total).
- **KPI and reporting backend:** KPI service and APIs, a KPI-to-concept mapping repository, Alembic migrations for the KPI schema, and a report export API with an Excel report
  renderer (about 1,200 lines).
- **Workflow control:** API to load a past workflow run, guards that block rebuilds on non-live versions
  or while a stage is still running, and an endpoint to re-profile a single table without a full run.

#### Integrations and security

- **Per-user Snowflake access for the EDA module:** Auth0 OAuth and token services, warehouse user
  provisioning, Snowflake repository queries, and the EDA and warehouse-auth APIs.
- **Astradis integration:** service, API client, endpoints and error handling for provisioning developer
  environments from the SQL IDE.
- **Role-based access control:** enforced permissions on routes and actions, with route-permission tests.
  Fixed role permissions and repaired the role migration chain.
- User bulk-delete endpoint.

#### Data model import and export

- **Excel templates** generated with openpyxl: current concepts and attributes, dynamic column widths,
  cell validation (such as criticality), an instruction sheet and row banding.
- **Import:** a parser and import service that turn uploaded sheets into concepts and relationships in a
  single database transaction, with partial import and progress streamed over SSE. Covered by about
  1,700 lines of pytest tests for the renderer, parser, import service and API.
- A streaming workbook export endpoint.

#### APIs, data layer and tooling

- **Catalog and profiling services:** catalog listing with backend sorting and filtering, including a
  server-side sort by column count using keyset pagination with no migration, verified on a 2,111-table
  dev database. Also table-type and row-count propagation, data-preview logic moved from the frontend into the backend, and explore and
  overview statistics in the profile and transform services.
- **Canvas comments (on a branch, not merged yet):** approval-service logic, request APIs and an Alembic
  migration for comments pinned to the graph, with service and API tests.
- **Schema and migrations:** Alembic migrations (concept category, message anchors, KPI fields, user
  roles), a deferred `n_columns_count` column to speed up table listings, and moving the Pydantic adapter
  layer from the API into schemas.
- **API redesign migration:** moved endpoints from entity-nested routes to a flat resource model covering
  requests, users, files, code references, WebSocket channels, EDA and reporting, then fixed the fallout.
- **Seeding and verification:** unified Postgres and Neo4j seeding, a seed verification script, a
  generator for a 10k-table load test, and a database diagram generator.
- Docker health checks for PostgreSQL and Temporal in the dev environment.

### Quality, testing and developer experience

- Rebuilt the **Playwright E2E suite** (entities, concept lifecycle, overview, reporting, human approval,
  Excel import), stabilized fixtures and made CI run E2E in parallel.
- **Unified database seeding** (PostgreSQL and Neo4j) behind one verified entry point for local, CI and
  E2E, with a deterministic E2E fixture dataset.
- GitHub Actions work: Doppler secrets setup, skipping backend tests when no backend files change, and
  build memory tuning.
- Set up Lefthook git hooks, commit-message conventions, ESLint (including React Compiler and CSS lint)
  and Prettier.
- Refactored data fetching on TanStack Query: a central query client, `queryOptions` and
  `mutationOptions` as the single source of truth, and central mutation notifications.
- Wrote team docs: the coding rule book, glossary and pipeline guide, used by engineers and AI coding
  agents.

---

## Interview stories

Each story uses the Situation, Task, Action, Result format. All five come from commits you wrote alone,
and the numbers are the ones you measured and recorded in the commit messages.

**Merge status as of 2026-09-25:** stories 1, 2 and 5 are on `dev`. The fixes in stories 3 and 4 are
still on the `DMA-704` branch, in review as LDMA-70. Until they merge, say "I found and fixed…, and it's
in review", not "shipped". The six parallel E2E legs in story 4 did ship, in an earlier PR.

| Question you're likely to get | Best story |
| --- | --- |
| Hardest technical problem / performance | 1. Graph editor performance |
| A bug you owned / data integrity | 2. Excel import that wasn't all-or-nothing |
| Debugging something subtle / production issue | 3. Migration that silently never ran |
| Making the team faster / going beyond your ticket | 4. Seeding and CI overhaul |
| State management / frontend design decision | 5. Reviewer edits that disappeared |

### 1. Graph editor performance (LDMA-252)

- **Situation.** The data-model graph editor felt sluggish. On a 50-concept draft with real-time updates
  connected, p95 drag latency was 333 ms and the worst frame while loading took 8.9 s.
- **Task.** Make dragging and panning feel instant without changing the feature.
- **Action.** I ruled out the backend first: the graph endpoint returned 136 KB in 79 ms, so all the cost
  was client-side rendering. Then I removed the re-render sources one by one:
  - Isolated the viewport subscription so panning no longer re-rendered every card.
  - Moved the canvas layout out of React Context into a Zustand store, so each card subscribes only to
    its own slice. Before, selecting one concept re-rendered all 50 cards.
  - Replaced about 300 query observers, one per card, menu and edge, with one shared value, since they
    were all asking the same yes/no question.
  - Kept node and edge objects stable when nothing changed, so React Flow stopped remounting unchanged
    cards. That halved the cost at the end of a drag.

  Along the way I fixed two bugs: dragged concepts snapping back until the WebSocket echo arrived, and
  real-time channels being torn down when another view still needed them.
- **Result.** p95 drag latency fell to 50–100 ms, the worst load frame to about 2 s, and panning came in
  under its 24 ms budget.
- **Lesson.** Measure before optimizing, and rule out the obvious suspect first.

### 2. Excel import that wasn't all-or-nothing (DMA-696)

- **Situation.** The data-model Excel import was documented as "all or nothing". In fact it committed
  one database transaction per concept and per relationship: up to 2,200 transactions for a 2,000-row
  workbook. A failure halfway through left half an import behind, with no way to roll it back. The
  existing tests had baked in that behavior as expected.
- **Task.** Make the import really atomic without breaking the other callers of the same services.
- **Action.**
  - Added an optional `session` parameter through the service layer. The change was additive, so the
    existing callers were unaffected.
  - Wrapped the whole write pass in one transaction.
  - Gave each relationship row its own savepoint, so one rejected row doesn't poison the whole
    transaction.
  - Caught a raw database-constraint error that my change would otherwise have turned into a 500.
  - Changed the failure summary so it no longer lists rows as "created" after they were rolled back.
  - Rewrote the tests to assert rollback, and added a test that counts transactions.
- **Result.** One commit on success, one rollback on failure, and a summary that tells users the truth.
- **Lesson.** Treat documented guarantees as things to test, and check that tests don't encode the bug.

### 3. Migration that silently never ran (DMA-704)

- **Situation.** A migration that made user roles mandatory had been placed in the middle of the Alembic
  chain, below a migration that had already been released. Any database already past that point said
  "already at head" and never ran it. So the role table stayed empty, and the permission check crashed
  with a `TypeError` instead of returning 403.
- **Task.** Repair the chain safely for databases in every state, and make permission checks fail
  closed.
- **Action.**
  - Moved the migration to the head of the chain.
  - Seeded the five roles inside the same migration, idempotently (`ON CONFLICT DO NOTHING`), so deploy
    order couldn't break it.
  - Guarded the permissions column so a missing role gives an empty list, which means a 403, never a
    crash.
  - Fixed a mutable default, a seed casing bug that created duplicate industry rows, and a discovery
    endpoint that returned 404 on seeded databases.
  - Added role tests.
- **Result.** Roles were created correctly on every database, and access control failed closed.
- **Lesson.** Migrations are distributed code. Always reason about databases that are already in the
  field, not just a fresh one.

### 4. Seeding and CI overhaul (DMA-704)

- **Situation.** CI seeded data differently from developers, so seeds that worked locally failed only in
  CI. Worse, the E2E helpers *skipped* rather than failed when seed data was missing, so a broken seed
  showed green while testing nothing. Most of the PR pipeline's time was fixed overhead, not tests.
- **Task.** One seeding path everywhere, a seed that proves itself, and a faster pipeline.
- **Action.**
  - Put local and CI seeding behind one `make db/seed` entry point.
  - Added `verify_seed.py`, which checks invariants rather than hard-coded counts, so it keeps working
    as the seed grows.
  - Seeded the real E2E pipeline DAG instead of a hand-rolled copy.
  - Measured the CI jobs on real runs and cut the waste:
    - Dropped a Playwright dependency step (about 110 s per leg).
    - Swapped three linters for ruff (37.7 s to 0.08 s), after verifying it reported exactly what
      flake8 did.
    - Stopped tests waiting 3 minutes 36 seconds on lint.
    - Fixed a cache key that never changed when dependencies did.
  - Found a "backend health check" that always passed because it was hitting the frontend's fallback
    page, and pointed it at the real API.
  - Split E2E into six parallel legs, each with its own database.
- **Result.** Faster PR feedback, a seed that can't silently break, and CI that now runs on changes it
  used to skip.
- **Lesson.** A test that can't fail is worse than no test.

### 5. Reviewer edits that disappeared (LDMA-143)

- **Situation.** On the tag-approval screen, moving the confidence slider silently threw away every tag
  the reviewer had toggled. Rejected tags were also left out of the approve request, so rejections
  never reached the backend.
- **Task.** Make the reviewer's decisions stick and actually be saved.
- **Action.**
  - Redesigned the state: server data stays in TanStack Query, and the store holds only the reviewer's
    *changes*, stored per table.
  - Worked out the effective selection at render time from the threshold plus those changes.
  - Changed the submit path to send every tag's final state, accepted and rejected.
  - Added E2E coverage for the fixes.
- **Result.** Reviewer changes survive filtering, and rejections are saved.
- **Lesson.** Keep server state and user edits separate. Copying server data into a client store is how
  edits get lost.

### Shared PRs: be careful how you describe them

Several large PRs were merged under your name but list co-authors:

| PR | Co-authors |
| --- | --- |
| Report generation on Temporal (#297) | Rokala Krishnaveni |
| EDA (#291) | Pooja Muruganandham |
| IDE / Astradis (#321) | Pooja Muruganandham |
| KPI reporting (#354, #355) | Arjun Govindan, Pooja Muruganandham |

Before telling a story about any of these, work out which parts were yours and say "we" for the rest.
Interviewers probe details, and specifics about your own part are more convincing anyway.

---

## Interview prep: "What's a weakness you're working on?"

Pick one or two. Each answer names the weakness, gives a real example, and says what you changed.
Say only what is true: the "what I changed" parts must describe things you actually do.

### 1. Shipping in PRs that are too big

> "Early on I shipped features as one large PR. The data-exploration module went out as a single PR of
> about 200 files, and the Excel import was over 10,000 lines. It worked, but it was hard for teammates
> to review properly. Now I break features into stacked PRs: backend contract first, then the UI behind a
> flag, then polish. Reviews are faster, and problems show up before they grow."

### 2. Pushing before verifying locally

> "I used to rely on CI to catch lint and type errors, which left a trail of small 'fix lint' commits.
> I set up git hooks with Lefthook so lint and type checks run before every push. I also learned to
> re-check Alembic migration heads after every rebase, because a broken migration chain had bitten us."

### 3. Leaning too hard on end-to-end tests

> "I built a strong Playwright suite, but for a while it was carrying nearly all our coverage, and we
> paid for it in slow, flaky runs. I've learned to push pure logic, like our graph-reconciliation
> helpers, down into fast unit tests, and to keep E2E for the key user journeys."

### 4. Building before settling the design

> "On one feature I changed the form-state approach three times in a week, from a form library to
> React Context to Zustand, because I started building before I understood the requirements. Now I
> write a short design note or build a throwaway spike first. It costs an hour and saves days."

### Follow-up questions to prepare for

- **"How do you decide how big a PR should be?"** Something one reviewer can properly check in about
  20 minutes, usually under 400 lines. It should be a slice that could be deployed on its own.
- **"How do you test frontend code?"** Unit-test pure functions and hooks, test components for their
  logic, and use E2E for the critical user journeys. Seed data should be deterministic so tests don't
  flake.
- **"Tell me about a performance problem you solved."** The approval list for 10k+ tables: virtualized
  it, seeded a 10k-table load to prove it, and cut redundant state subscriptions in the graph view.

---

## Notes to self (delete before sending)

- Job title is a guess from the commit mix. Replace it with your real title.
- Don't quote line counts. The raw git total (+708k) includes lockfiles and seed data.
- Check your NDA before naming internal systems (such as Astradis) or clients.
- Add impact numbers git can't show: users, time saved, runs per week.
- Other people also worked on some of these features. The bullets describe only work in your commits.
- **Once the CI overhaul (LDMA-70) merges,** add this back to the E2E resume bullet: "Cut CI overhead:
  removed a 3.5-minute wait before tests started, saved about 110 s per E2E leg, and cut backend lint
  from about 37 s to under 0.1 s."
- **Proof you can use without numbers:**
  - The Excel import was adopted right away. The first team to use it came back asking to import 17
    relationships in bulk, which became a follow-up ticket (LDMA-249).
  - You fixed an urgent workflow-page bug (LDMA-141) about 16 hours after it was reported.
- **Missing context:** most tickets before August 2026 are Jira `DMA-` keys. Authorize the Atlassian Rovo
  connector in claude.ai settings to pull the reasons and numbers from those.
- **Keep off the resume:** client names from other teams' tickets and internal Slack links.
