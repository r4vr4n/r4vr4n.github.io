# Rajeev Ranjan — Data Modeling Autopilot (Teragonia)

## Resume entry

**Software Engineer (Full-Stack, Frontend Lead) — Teragonia · Data Modeling Autopilot** · Sep 2025 – Present

- Top contributor (670+ commits) on an LLM-powered platform that automates Kimball/dbt warehouse modeling
  from 10k+ Snowflake tables, using FastAPI, Temporal, PostgreSQL, Neo4j and React/TypeScript.
- Built the core product UI: an interactive React Flow + ELK.js data-model graph editor, a live pipeline
  DAG view with WebSocket (Centrifugo) updates, column lineage, and a virtualized data catalog.
- Designed human-in-the-loop approval workflows (tag review, mart-table mapping, PR review) that handle
  10k+ tables through virtualization, wired to Temporal signal-based approval gates.
- Delivered backend features end to end: moved report generation to Temporal, Excel data-model
  import/export with SSE progress, RBAC permission enforcement, and API-key and user management APIs.
- Led a platform-wide API redesign migration (nested to flat resource model) across frontend and backend.
- Rebuilt the Playwright E2E suite and unified Postgres/Neo4j seeding for local, CI and E2E, and ran E2E in
  parallel in CI.

**Skills:** TypeScript, React 19, TanStack (Router, Query, Table, Form, Virtual), Zustand, React Flow, ELK.js,
Monaco, Recharts, Zod, Python 3.12, FastAPI, SQLAlchemy, Alembic, PostgreSQL, Neo4j, Temporal, Centrifugo
(WebSockets), SSE, Snowflake, OpenAI, OAuth2/Auth0, Playwright, Vitest, GitHub Actions, Doppler, MCP.

---

## Core strengths

- **Complex, polished UIs.** Built a graph editor, a live pipeline view, virtualized tables and a lineage
  view, with close attention to interaction detail and layout stability.
- **Performance at scale.** Virtualized views for 10k+ tables and proved it against a seeded 10k-table load.
  Cut re-renders and deferred expensive fields.
- **Consolidating shared logic.** Extract shared components, centralize data-fetching patterns, and put
  scattered setup (such as database seeding) behind one verified entry point.
- **Growing into full-stack.** Moved from frontend into Temporal workflows, transactional imports,
  access control and database migrations.
- **Raising team standards.** Introduced git hooks, CI improvements, a coding rule book and a rebuilt E2E
  suite, and moved the team toward commit messages that explain why a change was made.
- **Ownership.** Top committer on the project, with work across almost every area of the product.

---

## Project summary (interview pitch)

**Data Modeling Autopilot (DMA)** is an AI platform that builds a Kimball-style (star schema) dbt data
warehouse from raw Snowflake sources.

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
  modes, multi-select batch rebuild, hover-reveal category panels, and pinned canvas comments (draft and
  live). Cut drag and pan cost and removed redundant store subscriptions to speed it up.
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

- **Moved report generation to Temporal** workflows and activities (87 files), with real-time progress
  events.
- **Excel data-model import and export:** downloadable templates generated with openpyxl (dynamic column
  widths, cell validation, instruction sheet, row banding). Uploads are parsed into concepts and
  relationships in a single transaction, with progress streamed over SSE. Added a streaming workbook
  export endpoint.
- **Role-based access control:** enforced permissions on routes and actions end to end, and repaired the
  role migration chain.
- REST APIs and Alembic migrations for API keys, user management, canvas comments, KPIs, EDA, the catalog
  (table type, deferred column counts) and workflow-run history.
- **API redesign migration:** moved the frontend and endpoints from entity-nested routes to a flat
  resource model covering data models, workflows, approvals, real-time channels, EDA and reporting.
- Health checks for PostgreSQL and Temporal.

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
