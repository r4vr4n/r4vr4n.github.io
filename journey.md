# Rajeev Ranjan: the full story behind the resume

Full-Stack Engineer (Frontend-focused) · Bengaluru, India ·
[LinkedIn](https://www.linkedin.com/in/r4vr4n) · [GitHub](https://github.com/r4vr4n) ·
[One-page resume](https://r4vr4n.github.io)

My resume fits on one page. This document is the longer version: what each product was, what I
built, the decisions behind the work, and what I learned. It runs newest first.

<!-- Notes to self: HTML comments like this one don't show when the file is rendered. Use them for
reminders about what to add later. Keep every claim here consistent with data/resume-data.js. -->

---

## At a glance

| Years | Company | Role | What I worked on |
| --- | --- | --- | --- |
| 2025 – present | Appiness Interactive (client: Teragonia) | Senior Software Developer | An LLM-powered platform that builds data warehouse models |
| 2024 – 2025 | DashClicks | Senior Frontend Engineer | A white-label marketing platform for digital agencies |
| 2024 | Reconect.ai | Senior Frontend Developer (Contract) | Debt collection over digital channels |
| 2022 – 2024 | Zeitview | Senior Frontend Developer | Drone-based inspection: analysis and construction monitoring |
| 2021 – 2022 | Estate Protocol | Frontend Engineer | A blockchain real estate platform |
| 2020 – 2021 | Solytics Partners | Software Developer | Fraud detection and analytics for banks |
| 2019 – 2020 | AttainU | Bootcamp | Full-stack MERN training |

---

## Teragonia: Data Modeling Autopilot (DMA)

**Senior Software Developer** at Appiness Interactive, placed with Teragonia · Aug 2025 – present ·
Bengaluru, on-site

### The product

Before a data consulting team can build a warehouse, it usually spends weeks working out which tables
exist, what the columns mean, which tables describe the same business entity, how they join, and which
mart tables to build. DMA automates that. It takes a client's Snowflake warehouse and dbt repo and
produces a reviewed Kimball-style (star schema) data model and the dbt code for it. DMA is part of
Teragonia's AI operating system, Astradis.

The pipeline runs these stages:
1. **Discovery:** syncs every table and the dbt project, and builds a lineage graph in Neo4j.
2. **Profiling:** computes statistics for every column and writes descriptions with an LLM.
3. **Tagging:** an LLM maps tables to business concepts, with confidence scores.
4. **Graph building:** works out join paths between tables once, so later stages reuse them.
5. **Master-table SQL:** generated per concept, in parallel.
6. **Reconciliation:** when two concepts change the same dbt file, an LLM merges the versions.
7. **Join-key scoring:** each join is scored on value overlap and whether it keeps row counts.
8. **Pull request:** opened on GitHub for a person to review and merge.

People approve the work at three gates: tags, mart-table mapping and the PR merge.

**Architecture:** React → OAuth2 Proxy → FastAPI (API, service and repository layers) → PostgreSQL and
Neo4j. Long-running work runs as Temporal workflows on separate workers, and progress reaches the UI in
real time over Centrifugo WebSockets.

### What I built

**Frontend (my main area)**
- **Data-model graph editor:** React Flow with ELK.js auto-layout, concept nodes with attribute handles,
  colour-coded edge scores, live and draft modes, multi-select batch rebuild, and real-time
  collaboration with remote cursors and pinned comments over Centrifugo.
- **Graph performance:** on a 50-concept model, p95 drag latency fell from 333 ms to under 100 ms, and
  the worst frame while loading fell from 8.9 s to about 2 s. I first ruled out the backend (the graph
  endpoint returned 136 KB in 79 ms), then removed the sources of re-renders one at a time:
  - Isolated the viewport subscription, so panning no longer re-rendered every card.
  - Moved layout state from React Context into a Zustand store, so each card subscribes only to its
    own slice.
  - Replaced about 300 identical query observers with one shared value.
  - Kept node and edge objects stable when nothing changed, so React Flow stopped remounting cards.
- **Approval-gate screens:** tag review with confidence thresholds, per-table approval state, saved
  reviewer drafts and PR review. The lists stay fast with 10,000+ tables through virtualization, tested
  against a seeded 10k-table load. A redesign keeps server data in TanStack Query and only the
  reviewer's edits in the client store, so edits survive filtering.
- **Pipeline view:** a live DAG of pipeline stages with real-time status and a polling fallback.
- **Data catalog, lineage and SQL workspace:** a virtualized catalog table, a column-level lineage
  view backed by Neo4j, and a Monaco-based SQL editor for exploring Snowflake data.
- **Quality:** a 100 Lighthouse accessibility score, app-wide keyboard shortcuts, and the shared UI kit
  documented in Storybook. I also moved the UI from MUI to the in-house design system.

**Backend (FastAPI, Temporal, PostgreSQL)**
- **Excel data-model import and export:** generated templates with cell validation, and an import that
  is truly all-or-nothing. It now runs in one database transaction, with a savepoint per relationship
  row, and streams progress over SSE. Before the fix, a 2,000-row workbook was written in up to 2,200
  separate transactions, and a failure halfway left half an import behind.
- **Report generation on Temporal,** plus KPI and reporting services with an Excel report renderer.
- **Per-user Snowflake access** through Auth0 OAuth, so queries run with each user's own permissions.
- **API redesign:** led the move from entity-nested routes to a flat resource model, across frontend
  and backend.
- **Role-based access control** that fails closed, and repairs to the database migration chain.

**Testing and developer experience**
- Rebuilt the Playwright end-to-end suite into six parallel CI jobs, each with its own database and a
  deterministic seed dataset.
- Unified database seeding behind one command, with a script that verifies the seed. Previously, tests
  skipped silently when seed data was missing, so a broken seed still showed green.
- Cut CI overhead: a faster linter (37.7 s → 0.08 s), about 110 s saved per test job, and no more
  3.5-minute wait before tests start.
- Set up git hooks, lint rules, and a coding rule book used by the team and AI coding agents.

**Stack:** TypeScript, React 19, TanStack (Query, Table, Router, Virtual), Zustand, React Flow, ELK.js,
Monaco · Python, FastAPI, SQLAlchemy, Alembic, Pydantic · PostgreSQL, Neo4j, Snowflake · Temporal,
Centrifugo, SSE · Auth0 · Playwright, Vitest, pytest · GitHub Actions

<!-- Add: screenshots or a short demo if allowed, what I learned, a favourite technical decision. -->

---

## DashClicks

**Senior Frontend Engineer** · Nov 2024 – Jun 2025 · Remote

### The product

DashClicks is a white-label marketing and fulfillment platform for digital agencies: agencies resell
its services to their own clients under their own brand.

### What I built

- **Activity feed, end to end (UI and API):** one place for the internal team to follow client
  onboarding. It covers 18 event types, with filters and infinite scroll.
- **Moved server data from Redux Toolkit to React Query,** with typed query hooks and one central
  registry of query keys. This removed duplicate API calls and a lot of repetitive code.
- **DCTable:** a reusable table on TanStack Table and TanStack Virtual, with server-side pagination,
  sorting, selection, column resizing and virtualized infinite scroll. It's used across the app.
- **Rich-text editor** on Lexical, with an AI "rephrase" action for project approvals and requests.
- **Conversation Plugin:** a chat widget embedded on customers' websites. Rewriting it in vanilla JS
  with Tailwind cut its bundle size by 40%. I also set up an Nx monorepo for the embeddable plugins.
- **Engineering hygiene:**
  - moved pre-commit checks into CI, saving about 8 hours a week across the team
  - set up Cypress end-to-end tests
  - migrated to React Router v6
  - fixed lint issues across more than 1,000 files
  - maintained the Storybook component library

**Stack:** React 17 → 19, TypeScript, MUI v5, React Query, Redux Toolkit, TanStack Table and Virtual,
Lexical, React Router v6, React Hook Form, Vite, Nx, Cypress, Jest, Storybook

<!-- Add: backend stack for the activity feed, bundle size before → after. -->

---

## Reconect.ai

**Senior Frontend Developer (Contract)** · Aug 2024 – Nov 2024 · Bengaluru, on-site

### The product

An early-stage fintech startup that automates debt collection over digital channels. It uses the
context of each conversation to decide the next follow-up, instead of sending fixed reminders.

### What I built

I owned the frontend of the collections app:
- **Campaign management:** saved the operations team more than 20 hours a week of setting up and
  monitoring follow-up triggers by hand.
- **Analytics dashboards** in Recharts: amount recovered and collection performance.
- **Playwright end-to-end tests** for the critical collection workflows.

**Stack:** React 18, Mantine UI, React Query v5, Recharts, React Table, Playwright

<!-- Add: team size, channels used (WhatsApp/SMS/email), how context drives follow-ups. -->

---

## Zeitview

**Senior Frontend Developer** · Mar 2022 – Aug 2024 · Remote. I joined as a Junior Frontend Developer
and was promoted to Senior after a year.

### The products

Zeitview inspects solar, construction and infrastructure sites using drone imagery. I led two of its
web products.

### Analysis Tool

The internal tool Zeitview's analysts use to review drone imagery and produce inspection reports.
- Built it from scratch as the **sole engineer**, and led three interns for a year: splitting the work,
  reviewing their code and pairing on hard problems.
- Worked directly with the analysts to decide what to build. It replaced the external tools they had
  relied on and made analysis and report generation faster.

<!-- Add: the analyst workflow step by step, which tools it replaced, a before/after number. -->

### Construction Monitoring

A client-facing app that shows site progress from drone captures and turns it into action items.

**Why I rewrote it:** the product was expanding into the phases before construction starts: what the
terrain looks like, how water would move if the site flooded, and how much digging or filling is needed
before building. The existing frontend couldn't support that. Some components had `useEffect` blocks
over 500 lines, there were no tests, and every change broke something else. I rewrote the frontend
from scratch in six months as a modular React/TypeScript app.

**What shipped:**
- **3D terrain:** LiDAR point clouds rendered as 3D elevation terrain in CesiumJS.
- **Flood analysis:** shows how water moves across the site.
- **Measurement tools:** length and area measured directly on the map.
- **360° panoramas** of the site, integrated with krpano.
- **Live map comments** with @mentions and notifications, pinned to exact site locations.

**In design when I left:** excavation (cut/fill) volume. It measures the volume of earth between the
terrain and a reference surface, to estimate how much digging or filling a site needs.

**Stack:** React, TypeScript, MUI v5, Mantine UI, Mapbox, CesiumJS, React-Konva, krpano, Recharts,
React Table, Formik, Playwright, Vitest

---

## Estate Protocol

**Frontend Engineer** · Jun 2021 – Feb 2022 · Remote

### The product

A blockchain real estate platform where users list, bid on and stake in properties to earn revenue.

### What I built

The team was small, so I worked across the frontend and the Node.js backend.
- **Token airdrop, end to end:** a Node.js backend and a React/Web3.js frontend. More than 2,000 users
  claimed tokens with MetaMask, Coinbase Wallet and other wallets.
- **Property marketplace, full-stack:** listing, bidding and staking flows.
- **Marketing site** in Next.js with Framer Motion, scoring 90+ on Lighthouse.

**Stack:** React, Next.js, Node.js, Material UI, Context API, Framer Motion, Web3.js

<!-- Add: chain, how the airdrop claim worked (contract design). -->

---

## Solytics Partners

**Software Developer** · Sep 2020 – Jun 2021 · Remote. I joined as an intern and became full-time in
Feb 2021.

### The product

Nimbus Duo, an analytics and fraud detection platform for banks.

### What I built

- Delivered eight core modules of Nimbus Duo on schedule.
- Built an inventory management system MVP from scratch in two weeks. It was the first product I built
  from the ground up.

**Stack:** React 16, Redux, Redux Saga, Material UI v4, Bootstrap v4, React Table, Plotly.js, Jest

<!-- Add: names of a few of the modules. -->

---

## Where it started: AttainU, 2019 – 2020

After finishing my B.Tech in Computer Science (Biju Patnaik University of Technology, 2019), I joined
AttainU's full-stack bootcamp and earned its MERN Stack Developer certificate. There I built two
full-stack projects: a cryptocurrency price tracker and an attendance management system. COVID froze
hiring soon after, and my first role came in September 2020, when Solytics Partners reached out about
an internship.

---

## What I care about

<!-- Draft, to edit in your own voice. -->
- **Measure before optimizing.** The performance wins above came from profiling first, not from
  guessing.
- **Tests that can fail.** A green test suite that checks nothing is worse than no tests.
- **Interfaces that hold up at scale:** 10,000-row tables, 3D terrain, real-time collaboration.
- **Owning the whole feature,** from the database to the pixel, when the work calls for it.
