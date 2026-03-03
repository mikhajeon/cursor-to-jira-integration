# [US-5.1]: Admin Dashboard Setup & Pending Approval Queue

**Jira:** [DPH-256](https://datacomgroup.atlassian.net/browse/DPH-256)


### Epic details

**Jira:** [DPH-245](https://datacomgroup.atlassian.net/browse/DPH-245)

| Field | Value |
|-------|--------|
| **Name** | [EPIC-5]: Product Approval & Admin Dashboard |
| **Description** | See below |
| **Work type** | Epic |
| **Status** | To Do |
| **Assignee** | — |
| **Assignees** (extra) | — |
| **Priority** | Critical (P1) |
| **Linked work items** | — |

**Description:**

_No description._


### Story details

| Field | Value |
|-------|--------|
| **Name** | [US-5.1]: Admin Dashboard Setup & Pending Approval Queue |
| **Description** | See below |
| **Work type** | User Story |
| **Assignee** | — |
| **Assignees** (extra) | — |
| **Priority** | Critical (P1) |
| **Story point estimate** | — |
| **Sprint** | — |
| **Status** | Draft |
| **Linked work items** | — |


---
As an **admin**,  
I want a unified dashboard to manage Product Hub submissions,  
So that I can review and action pending micro-app approvals in one place.

**Acceptance Criteria:**

1. Base it off Agent Library in terms of UI but create the Hub-specific Admin App. (might be worth discussing with Dipesh - he may know to create the base for the admin app)
2. I can access both Agent Library management and the Product Hub approval queue from the same interface.
3. Authentication uses Entra ID, consistent with Agent Library branding and navigation.
4. The pending approval queue displays: product name, app-creator name, submission date, and current status — sorted oldest first.
5. Clicking a product in the queue opens a read-only detail view showing: 

        1. introduction,
        2. business value,
        3. example use case,
        4. user guide,
        5. video guide (if generated),
        6. code analysis results (if exists),
        7. and product tags.
6. Clicking the email notification link takes me directly to the relevant product in the dashboard.
7. The dashboard shows a summary of app counts: 

        1. total submitted,
        2. total approved,
        3. total rejected,
        4. approval rate %,
        5. active count, and
        6. inactive count
8. Dashboard metrics to be updated when user takes an action. (so I can see queue and catalog health at a glance)


### Subtasks

#### [DPH-514] [5.1-UX] Tasks

**Jira:** [DPH-514](https://datacomgroup.atlassian.net/browse/DPH-514) · **Status:** To Do

| Field | Value |
|-------|--------|
| **Name** | [5.1-UX] Tasks |
| **Description** | See below |
| **Work type** | Task / Bug |
| **Status** | To Do |
| **Story point estimate** | — |
| **Priority** | Low (P4) |
| **Assignee** | — |
| **Assignees** (extra) | — |
| **Sprint** | — |
| **Linked work items** | — |

**Description:**

- [UX] Design Product Hub sections within Agent Library UI

#### [DPH-515] [5.1-FE] Tasks

**Jira:** [DPH-515](https://datacomgroup.atlassian.net/browse/DPH-515) · **Status:** To Do

| Field | Value |
|-------|--------|
| **Name** | [5.1-FE] Tasks |
| **Description** | See below |
| **Work type** | Task / Bug |
| **Status** | To Do |
| **Story point estimate** | — |
| **Priority** | Low (P4) |
| **Assignee** | — |
| **Assignees** (extra) | — |
| **Sprint** | — |
| **Linked work items** | — |

**Description:**

- [Dev] [FE] Maintain consistent Agent Library branding and navigation
- [Dev] [FE] Integrate Product Hub tabs: Pending Queue, Analytics, Status Management
- [Dev] [FE] Rename dashboard to approved name TBC by Dipesh

#### [DPH-516] [5.1-BE] Tasks

**Jira:** [DPH-516](https://datacomgroup.atlassian.net/browse/DPH-516) · **Status:** To Do

| Field | Value |
|-------|--------|
| **Name** | [5.1-BE] Tasks |
| **Description** | See below |
| **Work type** | Task / Bug |
| **Status** | To Do |
| **Story point estimate** | — |
| **Priority** | Low (P4) |
| **Assignee** | — |
| **Assignees** (extra) | — |
| **Sprint** | — |
| **Linked work items** | — |

**Description:**

- [Dev] [BE] Configure Entra ID authentication for unified dashboard
- [Dev] [BE] Fork Agent Library admin dashboard codebase

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
