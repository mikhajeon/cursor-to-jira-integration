# [US-4.3]: App-Creator Reviews Generated Content and Submits for Approval

**Jira:** [DPH-400](https://datacomgroup.atlassian.net/browse/DPH-400)


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
| **Name** | [US-4.3]: App-Creator Reviews Generated Content and Submits for Approval |
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
I want to review my generated content and submit for approval,  
So that my product listing is complete and ready for admin review.

**Acceptance Criteria:**

1. The `Submit for Approval` button is visible once basic content is saved
2. The button remains locked if I have triggered a user guide or video guide but not yet accepted or rejected it — a tooltip explains why
3. Once all content is ready, clicking `Submit for Approval` shows a confirmation modal summarising: Introduction, Business Value, Example Use Case, and any accepted guides (user guide and/or video)
4. On confirmation, the app status updates to Pending Approval and a success message is displayed
5. The admin receives an email notification (per US-0.2) with: product name, app-creator name, submission timestamp, and a direct link to the product in the dashboard
6. The app appears in the admin's pending approval queue immediately after submission
7. Only one admin can review a submission at a time to prevent duplicate reviews
8. I cannot edit my content while the submission is pending — editing is re-enabled only after the admin responds
9. The content generation page is accessible at any time from My Apps → My Uploads → Development in Progress
10. Returning to the page always shows content in its last saved state


### Subtasks

#### [DPH-512] [4.3-FE] Tasks

**Jira:** [DPH-512](https://datacomgroup.atlassian.net/browse/DPH-512) · **Status:** To Do

| Field | Value |
|-------|--------|
| **Name** | [4.3-FE] Tasks |
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

- [Dev] [FE] Lock `Submit for Approval` until video accepted/rejected
- [Dev] [FE] Display MP4 video with `Accept` and `Reject` options
- [Dev] [FE] Display video generation status 20-60 min with cancel option

#### [DPH-513] [4.3-BE] Tasks

**Jira:** [DPH-513](https://datacomgroup.atlassian.net/browse/DPH-513) · **Status:** To Do

| Field | Value |
|-------|--------|
| **Name** | [4.3-BE] Tasks |
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

- [Dev] [BE] Handle AFE webhook and send email notification
- [Dev] [BE] Generate standardised instruction and send to AFE API

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
