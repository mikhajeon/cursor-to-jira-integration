# [US-6.1]: Deploy apps to staging environment (for UAT and Security test)

**Jira:** [DPH-474](https://datacomgroup.atlassian.net/browse/DPH-474)


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
| **Name** | [US-6.1]: Deploy apps to staging environment (for UAT and Security test) |
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
I want my approved app automatically deployed to staging environment,  
So that UAT group members and the security team can access and review it on the Hub before any wider release.

**Acceptance Criteria:**

1. On admin approval, the system automatically triggers the staging deployment — no action required from the app-creator
2. The app's detail page shows a live deployment status: Queued → Building → Deploying → Staged (if failed deploying to staging environment, print “failed” with a retry option. Status is back to Approved)
3. On success, the staging URL is accessible to the app-creator, admin, UAT group members, and security reviewers
4. The app appears in the Hub catalogue with a UAT status badge for UAT group members and security reviewers
5. The app-creator is notified by email on completion (success or failure) (per US-0.2)
6. Build logs are accessible to the app-creator and admin from the app's draft page


### Subtasks

#### [DPH-478] [6.1-BE] Tasks

**Jira:** [DPH-478](https://datacomgroup.atlassian.net/browse/DPH-478) · **Status:** To Do

| Field | Value |
|-------|--------|
| **Name** | [6.1-BE] Tasks |
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

- Trigger deployment pipeline on admin approval event
- Implement Docker build and npm build pipeline
- Provision Azure Container App, managed identity, and budget allocation
- Configure DNS and networking for restricted staging URL
- Send email notification to app-creator on deployment complete or failed

#### [DPH-477] [6.1-FE] Tasks

**Jira:** [DPH-477](https://datacomgroup.atlassian.net/browse/DPH-477) · **Status:** To Do

| Field | Value |
|-------|--------|
| **Name** | [6.1-FE] Tasks |
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

- Display deployment status indicator: Queued, Building, Deploying, Deployed, Failed
- Display restricted staging URL on successful deployment
- Display error message and Retry Deployment option on failure
- Expose build logs on app detail page

---
---
---
---
---
---
