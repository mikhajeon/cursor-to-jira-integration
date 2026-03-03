# [US-0.1]: Platform Foundations (DB, API, Components, Basic Azure Deploy)

**Jira:** [DPH-15](https://datacomgroup.atlassian.net/browse/DPH-15)


### Epic details

**Jira:** [DPH-162](https://datacomgroup.atlassian.net/browse/DPH-162)

| Field | Value |
|-------|--------|
| **Name** | [EPIC-0]: App Foundations |
| **Description** | See below |
| **Work type** | Epic |
| **Status** | In Progress |
| **Assignee** | — |
| **Assignees** (extra) | — |
| **Priority** | Critical (P1) |
| **Linked work items** | — |

**Description:**

_No description._


### Story details

| Field | Value |
|-------|--------|
| **Name** | [US-0.1]: Platform Foundations (DB, API, Components, Basic Azure Deploy) |
| **Description** | See below |
| **Work type** | User Story |
| **Assignee** | — |
| **Assignees** (extra) | — |
| **Priority** | Critical (P1) |
| **Story point estimate** | 5 |
| **Sprint** | DPH Sprint 2 |
| **Status** | Done |
| **Linked work items** | — |


---
As a **platform team**,  
I want a production-ready database schema, core API routes, a reusable component library, and a demo deployment,  
So that the catalogue, submission flows, and future features can be implemented and demoed.

**Acceptance Criteria:**

1. Database schema implemented (tools, checklist_items collections) with reversible migrations and seed data for at least 5 sample tools
2. API routes exist and return JSON:
2.1 GET /api/tools — supports ?category, ?search, ?page, ?limit query params
2.2 GET /api/tools/[id] — returns full tool object
2.3 POST /api/tools — creates tool, returns created object with 201
2.4 PUT /api/tools/[id] — updates tool, returns updated object
2.5 DELETE /api/tools/[id] — soft-deletes tool, returns 204
2.6 GET /api/tools/[id]/checklist — returns array of checklist items
2.7 All error responses follow: { error: string, details?: any }
3. Component library (Next + TypeScript) includes at minimum: Button, Badge, Card, Input, Header, Footer, PageLayout, ToolCard, ToolGrid, SearchBar, CategoryFilter
3.1 Modal and ProductPageLayout are required before Epic 1 completion but may be delivered in a subsequent task
4. Application deployed to dev environment via CI/CD pipeline
4.1 /api/health returns 200
4.2 Environment variables managed securely (not committed to repo)
4.3 UAT and prod deployments deferred to later sprints

---

### OLD User Story

**As a **Platform Team,
**I want **a production-ready database schema, core API routes, a reusable component library, and a demo deployment,
**So that **the catalog, submission flows and future features can be implemented and demoed.

### Acceptance Criteria

1. Database schema implemented (tools, checklist_items) with reversible migrations and 5 seed tools.
2. API routes exist: GET /api/tools (supports ?category & ?search), GET /api/tools/[id], POST /api/tools, PUT /api/tools/[id], DELETE /api/tools/[id], GET /api/tools/[id]/checklist. All error responses: { error: string, details?: any }.
3. Component library (Tailwind + TypeScript) includes Button, Badge, Card, Input, Modal, Header, Footer, PageLayout, ToolCard, ToolGrid, SearchBar, CategoryFilter, ProductPageLayout.
4. Basic Azure deployment configured (CI/CD), /api/health returns 200, env vars managed securely.


### Subtasks

#### [DPH-23] [FE] Component library scaffold only (don’t overbuild yet)

**Jira:** [DPH-23](https://datacomgroup.atlassian.net/browse/DPH-23) · **Status:** Done

| Field | Value |
|-------|--------|
| **Name** | [FE] Component library scaffold only (don’t overbuild yet) |
| **Description** | See below |
| **Work type** | Task / Bug |
| **Status** | Done |
| **Story point estimate** | — |
| **Priority** | Low (P4) |
| **Assignee** | Rithvik Sharma |
| **Assignees** (extra) | — |
| **Sprint** | DPH Sprint 2 |
| **Linked work items** | — |

**Description:**

_No description._

#### [DPH-24] [BE] Configure Azure App Service (or static site) deployment, GitHub Actions CI/CD, env var management and /api/health endpoint. Creating Azure Resource Group + Getting Access to Azure.

**Jira:** [DPH-24](https://datacomgroup.atlassian.net/browse/DPH-24) · **Status:** Done

| Field | Value |
|-------|--------|
| **Name** | [BE] Configure Azure App Service (or static site) deployment, GitHub Actions CI/CD, env var management and /api/health endpoint. Creating Azure Resource Group + Getting Access to Azure. |
| **Description** | See below |
| **Work type** | Task / Bug |
| **Status** | Done |
| **Story point estimate** | — |
| **Priority** | Low (P4) |
| **Assignee** | Dipesh Trikam |
| **Assignees** (extra) | — |
| **Sprint** | DPH Sprint 2 |
| **Linked work items** | — |

**Description:**

CI/CD PL for both PH and PH admin

#### [DPH-160] [BE] Creating Azure Resource Group (app environment) + Getting Access to Azure.

**Jira:** [DPH-160](https://datacomgroup.atlassian.net/browse/DPH-160) · **Status:** Done

| Field | Value |
|-------|--------|
| **Name** | [BE] Creating Azure Resource Group (app environment) + Getting Access to Azure. |
| **Description** | See below |
| **Work type** | Task / Bug |
| **Status** | Done |
| **Story point estimate** | — |
| **Priority** | Low (P4) |
| **Assignee** | Dipesh Trikam |
| **Assignees** (extra) | — |
| **Sprint** | DPH Sprint 2 |
| **Linked work items** | — |

**Description:**

_No description._

#### [DPH-161] [BE] Create Project Github Repo

**Jira:** [DPH-161](https://datacomgroup.atlassian.net/browse/DPH-161) · **Status:** Done

| Field | Value |
|-------|--------|
| **Name** | [BE] Create Project Github Repo |
| **Description** | See below |
| **Work type** | Task / Bug |
| **Status** | Done |
| **Story point estimate** | — |
| **Priority** | Low (P4) |
| **Assignee** | Dipesh Trikam |
| **Assignees** (extra) | — |
| **Sprint** | DPH Sprint 2 |
| **Linked work items** | — |

**Description:**

_No description._

#### [DPH-164] [BE] Create platform architecture documentation

**Jira:** [DPH-164](https://datacomgroup.atlassian.net/browse/DPH-164) · **Status:** Done

| Field | Value |
|-------|--------|
| **Name** | [BE] Create platform architecture documentation |
| **Description** | See below |
| **Work type** | Task / Bug |
| **Status** | Done |
| **Story point estimate** | — |
| **Priority** | Low (P4) |
| **Assignee** | Dipesh Trikam |
| **Assignees** (extra) | — |
| **Sprint** | DPH Sprint 2 |
| **Linked work items** | — |

**Description:**

_No description._

---
---
---
---
---
---
---
---
---
---
---
---
---
---
---
