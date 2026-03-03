# [US-3.4]: App-Creator Refactors and Reviews Code Changes

**Jira:** [DPH-262](https://datacomgroup.atlassian.net/browse/DPH-262)


### Epic details

**Jira:** [DPH-242](https://datacomgroup.atlassian.net/browse/DPH-242)

| Field | Value |
|-------|--------|
| **Name** | [EPIC-3]: Product Upload & Assisted Development |
| **Description** | See below |
| **Work type** | Epic |
| **Status** | In Progress |
| **Assignee** | — |
| **Assignees** (extra) | — |
| **Priority** | Critical (P1) |
| **Linked work items** | — |

**Description:**


### Story details

| Field | Value |
|-------|--------|
| **Name** | [US-3.4]: App-Creator Refactors and Reviews Code Changes |
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
As an **app-creator**,  
I want AI to suggest and apply code refactoring,  
So that I can bring my micro-app up to technical standards before submission.

**Acceptance Criteria:**

1. After validation (US-3.3), a refactoring checklist is displayed showing: proposed changes, estimated impact (Low/Medium/High), and per-item options to auto-refactor or manually fix
2. For each item I can select `Auto-refactor` (AI fixes it) or `Manual fix` (I fix it locally and re-upload)
3. Clicking `Submit for Auto-refactoring` triggers AI refactoring on all selected items — a progress indicator shows "Refactoring code..."
4. On completion, a code comparison view is displayed showing: side-by-side diff (original left, refactored right), files changed, and lines added/removed — with syntax highlighting and line-by-line differences (green additions, red deletions)
5. I can: `Accept All Changes`, `Reject All Changes`, or `Accept Selected Files` (per-file checkboxes)
6. Accepting runs validation automatically on the refactored code
7. Rejecting returns me to the refactoring checklist with original code retained
8. A `Download Refactored Code` button is available to save changes locally


### Subtasks

#### [DPH-504] [3.4-UX] Tasks

**Jira:** [DPH-504](https://datacomgroup.atlassian.net/browse/DPH-504) · **Status:** To Do

| Field | Value |
|-------|--------|
| **Name** | [3.4-UX] Tasks |
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

- [UX] Design refactoring checklist UI with `Auto-refactor` and `Manual fix` options

#### [DPH-505] [3.4-FE] Tasks

**Jira:** [DPH-505](https://datacomgroup.atlassian.net/browse/DPH-505) · **Status:** To Do

| Field | Value |
|-------|--------|
| **Name** | [3.4-FE] Tasks |
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

- [Dev] [FE] Implement refactoring checklist with submission

#### [DPH-506] [3.4-BE] Tasks

**Jira:** [DPH-506](https://datacomgroup.atlassian.net/browse/DPH-506) · **Status:** To Do

| Field | Value |
|-------|--------|
| **Name** | [3.4-BE] Tasks |
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

- [Dev] [BE] Implement AI auto-refactoring for selected items
- [Dev] [BE] Generate AI refactoring checklist from validation results

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
