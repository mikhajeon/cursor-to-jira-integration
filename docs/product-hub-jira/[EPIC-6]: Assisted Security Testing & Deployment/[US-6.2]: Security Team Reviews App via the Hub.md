# [US-6.2]: Security Team Reviews App via the Hub

**Jira:** [DPH-258](https://datacomgroup.atlassian.net/browse/DPH-258)


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
| **Name** | [US-6.2]: Security Team Reviews App via the Hub |
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
As a **security team reviewer**,  
I want to access all app materials directly within the Hub,  
So that I can complete my review in one place without needing files sent to me.

**Acceptance Criteria:**

1. 1. On the app's detail page, **additional panels are displayed based on the viewer's role (admin, security) and the app's lifecycle stage**. A ``Security Review`` panel is visible to security reviewers and admins containing: 

        1. GitHub repository URL
        2. Tech stack, dependencies, and SAST findings summary
        3. Architecture overview
        4. Auto-generated docs from Epic 4 (user guide, business value, use cases)
        5. AWAF / code validation report from Epic 3
        6. Live staging URL
2. Clicking the staging URL opens the live staging environment for hands-on testing
3. The security reviewer can set the review status to Security Review In Progress, Security Approved, or Security Rejected
4. On rejection, the reviewer can attach notes to the app record
5. Security reviewers have read-only access — they cannot modify app details or deployment config
6. The app-creator can click `Notify Security Team` (enabled after staging deployment) to alert reviewers via email/Hub notification (as per US-0.2)
7. Until a reviewer accesses the app, it is flagged as Pending Security Review in the admin dashboard


### Subtasks

#### [DPH-480] [6.2-BE] Tasks

**Jira:** [DPH-480](https://datacomgroup.atlassian.net/browse/DPH-480) · **Status:** To Do

| Field | Value |
|-------|--------|
| **Name** | [6.2-BE] Tasks |
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

- Build security doc generation service from app code analysis
- Include SAST findings, dependency vulnerabilities, tech stack, staging URL, and architecture overview
- Export generated document as PDF
- Auto-populate and send security testing request email to security team
- CC app-creator on security testing email
- Save generated document against app record
- Handle email send failure and trigger retry notification to app-creator and admin

#### [DPH-479] [6.2-FE] Tasks

**Jira:** [DPH-479](https://datacomgroup.atlassian.net/browse/DPH-479) · **Status:** To Do

| Field | Value |
|-------|--------|
| **Name** | [6.2-FE] Tasks |
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

- Display `Initiate Security Test` button, gated behind successful staging deployment
- Display submission confirmation message with sent timestamp

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
