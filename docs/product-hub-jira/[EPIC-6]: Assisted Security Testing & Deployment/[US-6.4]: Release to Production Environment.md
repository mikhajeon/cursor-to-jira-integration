# [US-6.4]: Release to Production Environment

**Jira:** [DPH-476](https://datacomgroup.atlassian.net/browse/DPH-476)


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
| **Name** | [US-6.4]: Deploy App to Production |
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
I want to promote a security-approved app to a company-wide production release,  
So that only fully cleared apps reach all Datacom staff.

**Acceptance Criteria:**

1. Once security review status is Security Approved, a `Release to Production` button is enabled on the app's admin dashboard record
2. On release, the app is promoted from `staging` to `production` and status updates to Live
3. On success, a public URL is generated at `[appname].hub.datacom.com`
4. The app becomes discoverable per the app-creator's chosen visibility scope (Private or Datacom Only), replacing the UAT Badge with the corresponding visibility selection
5. The app-creator is emailed (per US-0.2) their app's public production URL
6. On failure, the admin is notified (per US-0.2) with a Retry Release option
7. The staging instance remains accessible to UAT group members until the admin explicitly decommissions it


### Subtasks

#### [DPH-484] [6.4-FE] Tasks

**Jira:** [DPH-484](https://datacomgroup.atlassian.net/browse/DPH-484) · **Status:** To Do

| Field | Value |
|-------|--------|
| **Name** | [6.4-FE] Tasks |
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

- Display `Deploy to Production` button, gated behind security Approved status
- Display Retry Deployment option on production deployment failure

#### [DPH-482] [6.4-BE] Tasks

**Jira:** [DPH-482](https://datacomgroup.atlassian.net/browse/DPH-482) · **Status:** To Do

| Field | Value |
|-------|--------|
| **Name** | [6.4-BE] Tasks |
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

- Trigger production deployment pipeline on app-creator confirmation
- Deploy app to production Azure environment
- Generate public URL following convention: `[appname].hub.datacom.com`
- Configure DNS and networking for public production URL
- Publish app to Product Hub catalogue after successful production deployment
- Send email notification to app-creator with public URL
- Send failure notification to app-creator on production deployment failure

---
---
---
---
---
---
