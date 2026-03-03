# [US-0.2]: Email & notifications foundation

**Jira:** [DPH-596](https://datacomgroup.atlassian.net/browse/DPH-596)


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
| **Name** | [US-0.2]: Email & notifications foundation |
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
As a user (app-user, app-creator, admin, security team)

I want to send email notifications triggered by key workflow events,

So that all relevant stakeholders are kept informed at each stage of the micro-app lifecycle.

### AC

1. The notification system is a shared service that can be called by any user story that requires an email to be sent
2. Each email contains:

        1. The name of the micro-app
        2. The event that triggered the notification
        3. A direct link to the relevant page on Product Hub
        4. Datacom branding (logo, footer)
        5. Timestamp of the event
3. Emails are sent from a designated no-reply Datacom address (e.g. `noreply@datacom.com`)
4. If an email fails to send, the failure is logged and a retry is attempted up to 3 times before alerting the admin
5. Notification preferences are not user-configurable in this release — all role-relevant notifications are sent automatically
6. The system supports adding new notification triggers (requiring only registering a new event type and email template) without requiring changes to the core notification service.
7. All sent notifications are logged with: recipient, event type, timestamp, and delivery status

Technical note to be confirmed with Dipesh — recommended implementation via Azure Communication Services to stay within the existing Azure infrastructure



**Trigger Event**

**Recipient**

**Triggered By**

**Source Story**

Submission for approval

Admin

System (on app-creator submit)

US-4.3

Approval granted

App-creator

System (on admin approve)

US-5.2

Rejection with feedback

App-creator

System (on admin reject)

US-5.2

Staging deployment success

App-creator

System

US-6.1

Staging deployment failure

App-creator

System

US-6.1

Notify security team

Security reviewers

App-creator (manual trigger)

US-6.2

Security review approved

Admin + App-creator

System (on security approve)

US-6.3

Security review rejected

Admin + App-creator

System (on security reject)

US-6.3

Production release success

App-creator

System

US-6.4

Production release failure

Admin

System

US-6.4


### Subtasks

#### [DPH-595] [0.2-FE] Tasks

**Jira:** [DPH-595](https://datacomgroup.atlassian.net/browse/DPH-595) · **Status:** To Do

| Field | Value |
|-------|--------|
| **Name** | [0.2-FE] Tasks |
| **Description** | See below |
| **Work type** | Task / Bug |
| **Status** | To Do |
| **Story point estimate** | — |
| **Priority** | Critical (P1) |
| **Assignee** | — |
| **Assignees** (extra) | — |
| **Sprint** | — |
| **Linked work items** | — |

**Description:**

_No description._

#### [DPH-594] [0.2-BE] Tasks

**Jira:** [DPH-594](https://datacomgroup.atlassian.net/browse/DPH-594) · **Status:** To Do

| Field | Value |
|-------|--------|
| **Name** | [0.2-BE] Tasks |
| **Description** | See below |
| **Work type** | Task / Bug |
| **Status** | To Do |
| **Story point estimate** | — |
| **Priority** | Critical (P1) |
| **Assignee** | — |
| **Assignees** (extra) | — |
| **Sprint** | — |
| **Linked work items** | — |

**Description:**

_No description._

#### [DPH-593] [0.2-UX] Tasks

**Jira:** [DPH-593](https://datacomgroup.atlassian.net/browse/DPH-593) · **Status:** To Do

| Field | Value |
|-------|--------|
| **Name** | [0.2-UX] Tasks |
| **Description** | See below |
| **Work type** | Task / Bug |
| **Status** | To Do |
| **Story point estimate** | — |
| **Priority** | Critical (P1) |
| **Assignee** | — |
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
