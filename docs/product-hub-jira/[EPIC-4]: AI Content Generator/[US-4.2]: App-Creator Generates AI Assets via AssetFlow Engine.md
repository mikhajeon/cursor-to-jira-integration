# [US-4.2]: App-Creator Generates AI Assets via AssetFlow Engine

**Jira:** [DPH-399](https://datacomgroup.atlassian.net/browse/DPH-399)


### Epic details

**Jira:** [DPH-244](https://datacomgroup.atlassian.net/browse/DPH-244)

| Field | Value |
|-------|--------|
| **Name** | [EPIC-4]: AI Content Generator |
| **Description** | See below |
| **Work type** | Epic |
| **Status** | To Do |
| **Assignee** | — |
| **Assignees** (extra) | — |
| **Priority** | Critical (P1) |
| **Linked work items** | — |

**Description:**


### Story details

| Field | Value |
|-------|--------|
| **Name** | [US-4.2]: App-Creator Generates Advanced Content via AssetFlow Engine |
| **Description** | See below |
| **Work type** | User Story |
| **Assignee** | — |
| **Assignees** (extra) | — |
| **Priority** | Critical (P1) |
| **Story point estimate** | 10 |
| **Sprint** | — |
| **Status** | Draft |
| **Linked work items** | [DPH-609](https://datacomgroup.atlassian.net/browse/DPH-609) (Requirement) |


---
As an **app-creator**,  
I want to optionally generate a user guide and video guide for my micro-app,  
So that app-users can learn how to use my product through step-by-step and visual formats.

**Acceptance Criteria:**

1. After basic content is saved (US-4.1), `Generate User Guide` and `Generate Video Guide` buttons are displayed
2. On click, the Product Hub AI reads my code and metadata and sends a structured generation request to the AssetFlow Engine (AFE) via REST API
3. A status indicator is shown while generating — video generation notes it may take 20–60 minutes
4. Generation continues in the background if I navigate away
5. I can cancel generation at any time via a `Cancel` button (confirmed by modal); AFE stops the job and the generate button becomes available again
6. On completion, AFE returns the generated asset (HTML slideshow or MP4) to Product Hub via webhook callback
7. The asset is displayed on my product listing with `Accept` and `Reject` options
8. Accepting saves the asset to my product listing; rejecting discards it and re-enables the generate button
9. On failure, an error message is displayed with a `Regenerate` button
10. Both user guide and video guide are optional — I can proceed without either
11. The `Submit for Approval` button is locked until I have accepted or rejected any guide I chose to generate
12. AFE uses a consistent format template across all products to ensure uniform output


### Subtasks

#### [DPH-510] [4.2-FE]  Frontend scope (React + AI assets via AssetFlow Engine)

**Jira:** [DPH-510](https://datacomgroup.atlassian.net/browse/DPH-510) · **Status:** To Do

| Field | Value |
|-------|--------|
| **Name** | [4.2-FE]  Frontend scope (React + AI assets via AssetFlow Engine) |
| **Description** | See below |
| **Work type** | Task / Bug |
| **Status** | To Do |
| **Story point estimate** | — |
| **Priority** | Low (P4) |
| **Assignee** | Gavin Yan |
| **Assignees** (extra) | — |
| **Sprint** | — |
| **Linked work items** | — |

**Description:**

**Entry & buttons (depends on US-4.1)**

- FE-1 — Show "Generate User Guide" and "Generate Video Guide" only after basic content is saved (US-4.1). Hide or disable both until then (AC1).

- FE-2 — On "Generate User Guide" or "Generate Video Guide" click, call backend to start the job; on success switch to "generating" state (hide that Generate button, show status) (AC2, AC3).

**Status & long-running**

- FE-3 — Generating state: show a clear status indicator (e.g. "Generating…" or step text). For Video Guide, show that it may take 20–60 minutes (AC3).

- FE-4 — Poll or push for job status: use backend job-status API (or WebSocket/SSE) so the user sees up-to-date state; if the user leaves and comes back, show the correct status (AC4).

**Cancel**

- FE-5 — Cancel button and confirmation: show a "Cancel" button while generating; on click open a confirmation modal (e.g. "Are you sure you want to cancel?"); on confirm call backend cancel; on success hide status and show the Generate button again (AC5).

**Asset display & review**

- FE-6 — Show generated asset on product listing/detail: when status is completed, render User Guide (HTML slideshow in iframe or safe HTML) and Video Guide (video player or MP4 link) in "my product" list or product detail (AC7).

- FE-7 — Accept and Reject: show "Accept" and "Reject" next to the asset. Accept calls backend and updates UI (e.g. mark as accepted, remove from "pending review"). Reject calls backend, clears the asset from view, and shows the Generate button again for that type (AC8).

**Failure & retry**

- FE-8 — Failed state: show error message from backend and a "Regenerate" button; on click call backend again to start a new generation (AC9).

**Submit lock & optionality**

- FE-9 — "Submit for Approval" lock: use backend "can submit" or local state so that if there is any User Guide or Video Guide that was generated but not yet Accepted or Rejected, "Submit for Approval" is disabled; enable it only when all such guides are Accepted or Rejected (AC11).

- FE-10 — Optional flow: do not require generating either guide; user can skip both and continue. Only when the user has chosen to generate a guide must they Accept or Reject before Submit is allowed (AC10).

**Suggested implementation order**

FE-1 → FE-2 → FE-3 → FE-4 → FE-6 → FE-7 → FE-5 → FE-8 → FE-9 → FE-10.

#### [DPH-511] [4.2-BE] Tasks

**Jira:** [DPH-511](https://datacomgroup.atlassian.net/browse/DPH-511) · **Status:** To Do

| Field | Value |
|-------|--------|
| **Name** | [4.2-BE] Tasks |
| **Description** | See below |
| **Work type** | Task / Bug |
| **Status** | To Do |
| **Story point estimate** | — |
| **Priority** | Low (P4) |
| **Assignee** | Rithvik Sharma |
| **Assignees** (extra) | — |
| **Sprint** | — |
| **Linked work items** | — |

**Description:**

- [Dev] [BE] Handle AFE webhook for user guide completion
- [Dev] [BE] Generate standardised instruction and send to AFE API

#### [DPH-552] Rithvik's old tasks

**Jira:** [DPH-552](https://datacomgroup.atlassian.net/browse/DPH-552) · **Status:** To Do

| Field | Value |
|-------|--------|
| **Name** | Rithvik's old tasks |
| **Description** | See below |
| **Work type** | Task / Bug |
| **Status** | To Do |
| **Story point estimate** | — |
| **Priority** | Low (P4) |
| **Assignee** | Rithvik Sharma |
| **Assignees** (extra) | — |
| **Sprint** | — |
| **Linked work items** | — |

**Description:**

- [BE] API skeleton: basic CRUD for submissions, local file storage
- [FE] Checkpoint 1 UI: step editor + approval
- [FE] Script pipeline: mock LLM, checkpoint 2 UI
- [BE] Video pipeline: mock HeyGen with polling + status
- [BE] Integration: swap mocks for real services behind env flags
- [BE] Hardening: validation, error handling, rate limits, logging
- [UX] Refer to Dipesh notes and instructions for researching about Multi-agent flow for generating documentation (for security team and product hub content)

#### [DPH-605] [4.2-UX] Tasks

**Jira:** [DPH-605](https://datacomgroup.atlassian.net/browse/DPH-605) · **Status:** To Do

| Field | Value |
|-------|--------|
| **Name** | [4.2-UX] Tasks |
| **Description** | See below |
| **Work type** | Task / Bug |
| **Status** | To Do |
| **Story point estimate** | — |
| **Priority** | Low |
| **Assignee** | Ben Schaumkel |
| **Assignees** (extra) | — |
| **Sprint** | — |
| **Linked work items** | — |

**Description:**

UX indicate Background generation for user

#### [DPH-619] [4.2-UX] Generate video / user guide progress update / estimated time remaining on "My Apps"

**Jira:** [DPH-619](https://datacomgroup.atlassian.net/browse/DPH-619) · **Status:** To Do

| Field | Value |
|-------|--------|
| **Name** | [4.2-UX] Generate video / user guide progress update / estimated time remaining on "My Apps" |
| **Description** | See below |
| **Work type** | Task / Bug |
| **Status** | To Do |
| **Story point estimate** | — |
| **Priority** | Low |
| **Assignee** | Ben Schaumkel |
| **Assignees** (extra) | — |
| **Sprint** | — |
| **Linked work items** | — |

**Description:**

_No description._

#### [DPH-620] [4.2-UX] cancel / accept / status changes

**Jira:** [DPH-620](https://datacomgroup.atlassian.net/browse/DPH-620) · **Status:** To Do

| Field | Value |
|-------|--------|
| **Name** | [4.2-UX] cancel / accept / status changes |
| **Description** | See below |
| **Work type** | Task / Bug |
| **Status** | To Do |
| **Story point estimate** | — |
| **Priority** | Low |
| **Assignee** | Ben Schaumkel |
| **Assignees** (extra) | — |
| **Sprint** | — |
| **Linked work items** | — |

**Description:**

_No description._

#### [DPH-621] [4.2-UX] `submit for approval` button / modal

**Jira:** [DPH-621](https://datacomgroup.atlassian.net/browse/DPH-621) · **Status:** To Do

| Field | Value |
|-------|--------|
| **Name** | [4.2-UX] `submit for approval` button / modal |
| **Description** | See below |
| **Work type** | Task / Bug |
| **Status** | To Do |
| **Story point estimate** | — |
| **Priority** | Lowest |
| **Assignee** | Ben Schaumkel |
| **Assignees** (extra) | — |
| **Sprint** | — |
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
