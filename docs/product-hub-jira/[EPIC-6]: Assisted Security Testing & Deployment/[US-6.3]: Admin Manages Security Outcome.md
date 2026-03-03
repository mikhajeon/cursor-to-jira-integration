# [US-6.3]: Admin Manages Security Outcome

**Jira:** [DPH-475](https://datacomgroup.atlassian.net/browse/DPH-475)


### Epic details

**Jira:** [DPH-246](https://datacomgroup.atlassian.net/browse/DPH-246)

| Field | Value |
|-------|--------|
| **Name** | [EPIC-6]: Assisted Security Testing & Deployment |
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
| **Name** | [US-6.3]: Admin Monitors Security Review |
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
I want to monitor security review progress, 
So that I can control the pre-production rollout and keep the right people in the loop.

**Acceptance Criteria:**

1. The admin dashboard shows each staging app's security review status: Pending Security Review, Security Review in Progress, Security Approved, or Security Rejected
2. When the security team approves an app, the admin is notified and the app-creator receives an email confirming it is ready for production release (per US-0.2)
3. When the security team rejects an app, the admin is notified with the reviewer's notes, and the app-creator is emailed the rejection reasons (per US-0.2)
4. The admin can add their own notes to any app record


### Subtasks

#### [DPH-483] [6.3-FE] Tasks

**Jira:** [DPH-483](https://datacomgroup.atlassian.net/browse/DPH-483) · **Status:** To Do

| Field | Value |
|-------|--------|
| **Name** | [6.3-FE] Tasks |
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

- Add Security Testing status section to admin dashboard app record
- Allow admin to attach security team report or findings to app record
- Display security testing status history in admin app detail record

#### [DPH-481] [6.3-BE] Tasks

**Jira:** [DPH-481](https://datacomgroup.atlassian.net/browse/DPH-481) · **Status:** To Do

| Field | Value |
|-------|--------|
| **Name** | [6.3-BE] Tasks |
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

- Implement status options: Awaiting Testing, In Progress, Approved, Rejected
- Log timestamp on each status change
- Send email notification to app-creator on Approved status
- Send email notification to app-creator on Rejected status with admin reasons

---
---
---
---
---
---
---
