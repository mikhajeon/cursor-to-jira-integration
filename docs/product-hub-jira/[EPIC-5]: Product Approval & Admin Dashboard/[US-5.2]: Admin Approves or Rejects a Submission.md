# [US-5.2]: Admin Approves or Rejects a Submission

**Jira:** [DPH-252](https://datacomgroup.atlassian.net/browse/DPH-252)


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
| **Name** | [US-5.2]: Admin Approves or Rejects a Submission |
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
I want to approve or reject submitted micro-apps,  
So that only quality apps are published and app-creators understand why they were rejected.

**Acceptance Criteria:**

1. I see `Approve` and `Reject` action buttons when viewing a product in the queue
2. On approval: the product status updates to Approved, it is removed from the pending queue, and the app-creator is notified by email (per US-0.2)
3. On rejection: a modal appears requiring a rejection reason (required) and specific improvement feedback (required)
4. On rejection submission: the product status updates to Rejected, the app-creator is emailed the rejection reason and feedback with a link back to content generation (per US-0.2)
5. Each rejection is logged against the app with a count, timestamp, and admin feedback — visible to admin on resubmission
6. After rejection, the app-creator can update their content and resubmit


### Subtasks

#### [DPH-519] [5.3-UX] Tasks

**Jira:** [DPH-519](https://datacomgroup.atlassian.net/browse/DPH-519) · **Status:** To Do

| Field | Value |
|-------|--------|
| **Name** | [5.3-UX] Tasks |
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

- [UX] Design product detail view: basic content, advanced content, code analysis, tags
- [UX] Design pending approval queue UI with product cards

#### [DPH-520] [5.3-FE] Tasks

**Jira:** [DPH-520](https://datacomgroup.atlassian.net/browse/DPH-520) · **Status:** To Do

| Field | Value |
|-------|--------|
| **Name** | [5.3-FE] Tasks |
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

- [Dev] [FE] Implement email link redirect to pre-loaded product detail
- [Dev] [FE] Implement read-only product detail view
- [Dev] [FE] Implement pending approval queue sorted by submission date

#### [DPH-521] [5.3-BE] Tasks

**Jira:** [DPH-521](https://datacomgroup.atlassian.net/browse/DPH-521) · **Status:** To Do

| Field | Value |
|-------|--------|
| **Name** | [5.3-BE] Tasks |
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

- [Dev] [BE] Create API endpoint to fetch pending products

---
---
---
---
---
---
---
---
