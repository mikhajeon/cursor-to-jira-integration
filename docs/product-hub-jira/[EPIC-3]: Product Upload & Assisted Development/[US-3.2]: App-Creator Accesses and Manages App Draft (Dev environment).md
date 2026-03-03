# [US-3.2]: App-Creator Accesses and Manages App Draft (Dev environment)

**Jira:** [DPH-250](https://datacomgroup.atlassian.net/browse/DPH-250)


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
| **Name** | [US-3.2]: App-Creator Accesses and Manages App Draft (Dev environment) |
| **Description** | See below |
| **Work type** | User Story |
| **Assignee** | — |
| **Assignees** (extra) | — |
| **Priority** | Critical (P1) |
| **Story point estimate** | 7 |
| **Sprint** | DPH Sprint 2 |
| **Status** | To Do |
| **Linked work items** | — |


---
As an **app-creator**,  
I want to access and manage my Development Instance/App Draft,  
So that I can continue my micro-app submission at my own pace.

**Acceptance Criteria:**

1. From the My Apps page, clicking `Continue Building` redirects me to my App draft modal (modal for now)
2. A countdown timer displays time remaining (days, or hours if under 24hrs)

        1. My App page card to display timer
        2. email notification reminder to app-creator that “instance is going to expire”  (research about it)
3. When 2 days or less remain, an `Extend Instance` button appears — confirming adds 5 days
4. The page displays a progress checklist with completion percentage: Code Uploaded, Code Validated, Code Refactored, Tags Specified, Ready for Approval
5. Navigating away saves my progress — I can return via `Continue Building` at any time


### Subtasks

#### [DPH-498] [3.2-UX] Tasks

**Jira:** [DPH-498](https://datacomgroup.atlassian.net/browse/DPH-498) · **Status:** To Do

| Field | Value |
|-------|--------|
| **Name** | [3.2-UX] Tasks |
| **Description** | See below |
| **Work type** | Task / Bug |
| **Status** | To Do |
| **Story point estimate** | — |
| **Priority** | Critical (P1) |
| **Assignee** | — |
| **Assignees** (extra) | — |
| **Sprint** | DPH Sprint 2 |
| **Linked work items** | — |

**Description:**

- [UX] Design `Development Instance` page with countdown and checklist

#### [DPH-499] [3.2-FE] Tasks

**Jira:** [DPH-499](https://datacomgroup.atlassian.net/browse/DPH-499) · **Status:** To Do

| Field | Value |
|-------|--------|
| **Name** | [3.2-FE] Tasks |
| **Description** | See below |
| **Work type** | Task / Bug |
| **Status** | To Do |
| **Story point estimate** | — |
| **Priority** | Critical (P1) |
| **Assignee** | — |
| **Assignees** (extra) | — |
| **Sprint** | DPH Sprint 2 |
| **Linked work items** | — |

**Description:**

- [Dev] [FE] Implement progress checklist: Upload, Validate, Refactor, Tags, Approval
- [Dev] [FE] Implement `Extend Instance` button at 2 days remaining
- [Dev] [FE] Implement countdown timer: days remaining, hours on last day

#### [DPH-500] [3.2-BE] Development instance and draft progress — expiry, extend, checklist and notification data

**Jira:** [DPH-500](https://datacomgroup.atlassian.net/browse/DPH-500) · **Status:** To Do

| Field | Value |
|-------|--------|
| **Name** | [3.2-BE] Development instance and draft progress — expiry, extend, checklist and notification data |
| **Description** | See below |
| **Work type** | Task / Bug |
| **Status** | To Do |
| **Story point estimate** | — |
| **Priority** | Critical (P1) |
| **Assignee** | — |
| **Assignees** (extra) | — |
| **Sprint** | DPH Sprint 2 |
| **Linked work items** | — |

**Description:**

### BE-3.2.1 — Development instance / draft data model

**Description**

- Persist a “development instance” or draft submission per app-creator: link to user and product/app id, created time.

- Include expiry field (e.g. expiresAt) for countdown (days/hours).

- Include progress checklist fields: Code Uploaded, Code Validated, Code Refactored, Tags Specified, Ready for Approval (boolean or enum); support computing completion percentage.

---

### BE-3.2.2 — Get “my development instance” and countdown

**Description**

- Expose API (e.g. GET /api/v1/users/me/development-instance or /submissions/draft) returning current user’s dev instance/draft.

- Response includes expiresAt, time remaining (or let frontend derive from expiresAt), checklist steps and status, completion percentage, and identifier/URL to continue editing.

- Return 404 or empty when no draft so frontend can decide “Continue Building” visibility.

---

### BE-3.2.3 — Extend instance API

**Description**

- Expose API to extend dev instance (e.g. POST .../development-instances/{id}/extend or .../submissions/draft/extend), auth required and restricted to instance owner.

- On confirm, add 5 days to expiresAt and persist.

- Return new expiresAt (and optional time remaining) for frontend timer and “Extend Instance” visibility (e.g. show when ≤2 days left).

---

### BE-3.2.4 — Progress checklist save and read

**Description**

- Support updating progress on dev instance/draft (e.g. PATCH or PUT progress): Code Uploaded, Code Validated, Code Refactored, Tags Specified, Ready for Approval.

- Recompute and return completion percentage on save; support “save on navigate away” (multiple PATCH or single payload).

- GET dev instance includes full checklist and percentage for progress bar and list.

---

### BE-3.2.5 — Expiring-soon data for email reminder

**Description**

- Expose data for a job or workflow: list dev instances expiring within N days with app-creator email (or user id) for “instance is going to expire” email.

- Optionally expose API (e.g. GET .../admin/development-instances/expiring?withinDays=2) for internal or notification service; or document query approach only.

- Do not implement email sending; only provide data or query.

---

### BE-3.2.6 — Contract and OpenAPI

**Description**

- Dev instance APIs follow project response and error format.

- Document in OpenAPI: GET my dev instance, extend instance, update progress (request/response with expiresAt, checklist fields, percentage); mark auth required.

#### [DPH-577] [UX] Design "My Apps" card with timer (days/hours), progress checklist, Continue Building CTA

**Jira:** [DPH-577](https://datacomgroup.atlassian.net/browse/DPH-577) · **Status:** To Do

| Field | Value |
|-------|--------|
| **Name** | [UX] Design "My Apps" card with timer (days/hours), progress checklist, Continue Building CTA |
| **Description** | See below |
| **Work type** | Task / Bug |
| **Status** | To Do |
| **Story point estimate** | — |
| **Priority** | Low (P4) |
| **Assignee** | Ben Schaumkel |
| **Assignees** (extra) | — |
| **Sprint** | DPH Sprint 2 |
| **Linked work items** | — |

**Description:**

_No description._

#### [DPH-578] [UX] Design Dev Instance Modal (countdown, progress checklist with %, extend, save on navigate)

**Jira:** [DPH-578](https://datacomgroup.atlassian.net/browse/DPH-578) · **Status:** To Do

| Field | Value |
|-------|--------|
| **Name** | [UX] Design Dev Instance Modal (countdown, progress checklist with %, extend, save on navigate) |
| **Description** | See below |
| **Work type** | Task / Bug |
| **Status** | To Do |
| **Story point estimate** | — |
| **Priority** | Low (P4) |
| **Assignee** | Ben Schaumkel |
| **Assignees** (extra) | — |
| **Sprint** | DPH Sprint 2 |
| **Linked work items** | — |

**Description:**

_No description._

#### [DPH-579] [UX] Feedback from devs

**Jira:** [DPH-579](https://datacomgroup.atlassian.net/browse/DPH-579) · **Status:** To Do

| Field | Value |
|-------|--------|
| **Name** | [UX] Feedback from devs |
| **Description** | See below |
| **Work type** | Task / Bug |
| **Status** | To Do |
| **Story point estimate** | — |
| **Priority** | Low (P4) |
| **Assignee** | Ben Schaumkel |
| **Assignees** (extra) | — |
| **Sprint** | DPH Sprint 2 |
| **Linked work items** | — |

**Description:**

_No description._

#### [DPH-580] [UX] Final Design + Dev Handover

**Jira:** [DPH-580](https://datacomgroup.atlassian.net/browse/DPH-580) · **Status:** To Do

| Field | Value |
|-------|--------|
| **Name** | [UX] Final Design + Dev Handover |
| **Description** | See below |
| **Work type** | Task / Bug |
| **Status** | To Do |
| **Story point estimate** | — |
| **Priority** | Low (P4) |
| **Assignee** | Ben Schaumkel |
| **Assignees** (extra) | — |
| **Sprint** | DPH Sprint 2 |
| **Linked work items** | — |

**Description:**

_No description._

---
---

### BE-3.2.2 — Get “my development instance” and countdown

**Description**

- Expose API (e.g. GET /api/v1/users/me/development-instance or /submissions/draft) returning current user’s dev instance/draft.

- Response includes expiresAt, time remaining (or let frontend derive from expiresAt), checklist steps and status, completion percentage, and identifier/URL to continue editing.

- Return 404 or empty when no draft so frontend can decide “Continue Building” visibility.

---

### BE-3.2.3 — Extend instance API

**Description**

- Expose API to extend dev instance (e.g. POST .../development-instances/{id}/extend or .../submissions/draft/extend), auth required and restricted to instance owner.

- On confirm, add 5 days to expiresAt and persist.

- Return new expiresAt (and optional time remaining) for frontend timer and “Extend Instance” visibility (e.g. show when ≤2 days left).

---

### BE-3.2.4 — Progress checklist save and read

**Description**

- Support updating progress on dev instance/draft (e.g. PATCH or PUT progress): Code Uploaded, Code Validated, Code Refactored, Tags Specified, Ready for Approval.

- Recompute and return completion percentage on save; support “save on navigate away” (multiple PATCH or single payload).

- GET dev instance includes full checklist and percentage for progress bar and list.

---

### BE-3.2.5 — Expiring-soon data for email reminder

**Description**

- Expose data for a job or workflow: list dev instances expiring within N days with app-creator email (or user id) for “instance is going to expire” email.

- Optionally expose API (e.g. GET .../admin/development-instances/expiring?withinDays=2) for internal or notification service; or document query approach only.

- Do not implement email sending; only provide data or query.

---

### BE-3.2.6 — Contract and OpenAPI

**Description**

- Dev instance APIs follow project response and error format.

- Document in OpenAPI: GET my dev instance, extend instance, update progress (request/response with expiresAt, checklist fields, percentage); mark auth required.

#### [DPH-577] [UX] Design "My Apps" card with timer (days/hours), progress checklist, Continue Building CTA

**Jira:** [DPH-577](https://datacomgroup.atlassian.net/browse/DPH-577) · **Status:** To Do

| Field | Value |
|-------|--------|
| **Name** | [UX] Design "My Apps" card with timer (days/hours), progress checklist, Continue Building CTA |
| **Description** | See below |
| **Work type** | Task / Bug |
| **Status** | To Do |
| **Story point estimate** | — |
| **Priority** | Low (P4) |
| **Assignee** | Ben Schaumkel |
| **Assignees** (extra) | — |
| **Sprint** | DPH Sprint 2 |
| **Linked work items** | — |

**Description:**

_No description._

#### [DPH-578] [UX] Design Dev Instance Modal (countdown, progress checklist with %, extend, save on navigate)

**Jira:** [DPH-578](https://datacomgroup.atlassian.net/browse/DPH-578) · **Status:** To Do

| Field | Value |
|-------|--------|
| **Name** | [UX] Design Dev Instance Modal (countdown, progress checklist with %, extend, save on navigate) |
| **Description** | See below |
| **Work type** | Task / Bug |
| **Status** | To Do |
| **Story point estimate** | — |
| **Priority** | Low (P4) |
| **Assignee** | Ben Schaumkel |
| **Assignees** (extra) | — |
| **Sprint** | DPH Sprint 2 |
| **Linked work items** | — |

**Description:**

_No description._

#### [DPH-579] [UX] Feedback from devs

**Jira:** [DPH-579](https://datacomgroup.atlassian.net/browse/DPH-579) · **Status:** To Do

| Field | Value |
|-------|--------|
| **Name** | [UX] Feedback from devs |
| **Description** | See below |
| **Work type** | Task / Bug |
| **Status** | To Do |
| **Story point estimate** | — |
| **Priority** | Low (P4) |
| **Assignee** | Ben Schaumkel |
| **Assignees** (extra) | — |
| **Sprint** | DPH Sprint 2 |
| **Linked work items** | — |

**Description:**

_No description._

#### [DPH-580] [UX] Final Design + Dev Handover

**Jira:** [DPH-580](https://datacomgroup.atlassian.net/browse/DPH-580) · **Status:** To Do

| Field | Value |
|-------|--------|
| **Name** | [UX] Final Design + Dev Handover |
| **Description** | See below |
| **Work type** | Task / Bug |
| **Status** | To Do |
| **Story point estimate** | — |
| **Priority** | Low (P4) |
| **Assignee** | Ben Schaumkel |
| **Assignees** (extra) | — |
| **Sprint** | DPH Sprint 2 |
| **Linked work items** | — |

**Description:**

_No description._

---
---

### BE-3.2.2 — Get “my development instance” and countdown

**Description**

- Expose API (e.g. GET /api/v1/users/me/development-instance or /submissions/draft) returning current user’s dev instance/draft.

- Response includes expiresAt, time remaining (or let frontend derive from expiresAt), checklist steps and status, completion percentage, and identifier/URL to continue editing.

- Return 404 or empty when no draft so frontend can decide “Continue Building” visibility.

---

### BE-3.2.3 — Extend instance API

**Description**

- Expose API to extend dev instance (e.g. POST .../development-instances/{id}/extend or .../submissions/draft/extend), auth required and restricted to instance owner.

- On confirm, add 5 days to expiresAt and persist.

- Return new expiresAt (and optional time remaining) for frontend timer and “Extend Instance” visibility (e.g. show when ≤2 days left).

---

### BE-3.2.4 — Progress checklist save and read

**Description**

- Support updating progress on dev instance/draft (e.g. PATCH or PUT progress): Code Uploaded, Code Validated, Code Refactored, Tags Specified, Ready for Approval.

- Recompute and return completion percentage on save; support “save on navigate away” (multiple PATCH or single payload).

- GET dev instance includes full checklist and percentage for progress bar and list.

---

### BE-3.2.5 — Expiring-soon data for email reminder

**Description**

- Expose data for a job or workflow: list dev instances expiring within N days with app-creator email (or user id) for “instance is going to expire” email.

- Optionally expose API (e.g. GET .../admin/development-instances/expiring?withinDays=2) for internal or notification service; or document query approach only.

- Do not implement email sending; only provide data or query.

---

### BE-3.2.6 — Contract and OpenAPI

**Description**

- Dev instance APIs follow project response and error format.

- Document in OpenAPI: GET my dev instance, extend instance, update progress (request/response with expiresAt, checklist fields, percentage); mark auth required.

#### [DPH-577] [UX] Design "My Apps" card with timer (days/hours), progress checklist, Continue Building CTA

**Jira:** [DPH-577](https://datacomgroup.atlassian.net/browse/DPH-577) · **Status:** To Do

| Field | Value |
|-------|--------|
| **Name** | [UX] Design "My Apps" card with timer (days/hours), progress checklist, Continue Building CTA |
| **Description** | See below |
| **Work type** | Task / Bug |
| **Status** | To Do |
| **Story point estimate** | — |
| **Priority** | Low (P4) |
| **Assignee** | Ben Schaumkel |
| **Assignees** (extra) | — |
| **Sprint** | DPH Sprint 2 |
| **Linked work items** | — |

**Description:**

_No description._

#### [DPH-578] [UX] Design Dev Instance Modal (countdown, progress checklist with %, extend, save on navigate)

**Jira:** [DPH-578](https://datacomgroup.atlassian.net/browse/DPH-578) · **Status:** To Do

| Field | Value |
|-------|--------|
| **Name** | [UX] Design Dev Instance Modal (countdown, progress checklist with %, extend, save on navigate) |
| **Description** | See below |
| **Work type** | Task / Bug |
| **Status** | To Do |
| **Story point estimate** | — |
| **Priority** | Low (P4) |
| **Assignee** | Ben Schaumkel |
| **Assignees** (extra) | — |
| **Sprint** | DPH Sprint 2 |
| **Linked work items** | — |

**Description:**

_No description._

#### [DPH-579] [UX] Feedback from devs

**Jira:** [DPH-579](https://datacomgroup.atlassian.net/browse/DPH-579) · **Status:** To Do

| Field | Value |
|-------|--------|
| **Name** | [UX] Feedback from devs |
| **Description** | See below |
| **Work type** | Task / Bug |
| **Status** | To Do |
| **Story point estimate** | — |
| **Priority** | Low (P4) |
| **Assignee** | Ben Schaumkel |
| **Assignees** (extra) | — |
| **Sprint** | DPH Sprint 2 |
| **Linked work items** | — |

**Description:**

_No description._

#### [DPH-580] [UX] Final Design + Dev Handover

**Jira:** [DPH-580](https://datacomgroup.atlassian.net/browse/DPH-580) · **Status:** To Do

| Field | Value |
|-------|--------|
| **Name** | [UX] Final Design + Dev Handover |
| **Description** | See below |
| **Work type** | Task / Bug |
| **Status** | To Do |
| **Story point estimate** | — |
| **Priority** | Low (P4) |
| **Assignee** | Ben Schaumkel |
| **Assignees** (extra) | — |
| **Sprint** | DPH Sprint 2 |
| **Linked work items** | — |

**Description:**

_No description._

---
---

### BE-3.2.2 — Get “my development instance” and countdown

**Description**

- Expose API (e.g. GET /api/v1/users/me/development-instance or /submissions/draft) returning current user’s dev instance/draft.

- Response includes expiresAt, time remaining (or let frontend derive from expiresAt), checklist steps and status, completion percentage, and identifier/URL to continue editing.

- Return 404 or empty when no draft so frontend can decide “Continue Building” visibility.

---

### BE-3.2.3 — Extend instance API

**Description**

- Expose API to extend dev instance (e.g. POST .../development-instances/{id}/extend or .../submissions/draft/extend), auth required and restricted to instance owner.

- On confirm, add 5 days to expiresAt and persist.

- Return new expiresAt (and optional time remaining) for frontend timer and “Extend Instance” visibility (e.g. show when ≤2 days left).

---

### BE-3.2.4 — Progress checklist save and read

**Description**

- Support updating progress on dev instance/draft (e.g. PATCH or PUT progress): Code Uploaded, Code Validated, Code Refactored, Tags Specified, Ready for Approval.

- Recompute and return completion percentage on save; support “save on navigate away” (multiple PATCH or single payload).

- GET dev instance includes full checklist and percentage for progress bar and list.

---

### BE-3.2.5 — Expiring-soon data for email reminder

**Description**

- Expose data for a job or workflow: list dev instances expiring within N days with app-creator email (or user id) for “instance is going to expire” email.

- Optionally expose API (e.g. GET .../admin/development-instances/expiring?withinDays=2) for internal or notification service; or document query approach only.

- Do not implement email sending; only provide data or query.

---

### BE-3.2.6 — Contract and OpenAPI

**Description**

- Dev instance APIs follow project response and error format.

- Document in OpenAPI: GET my dev instance, extend instance, update progress (request/response with expiresAt, checklist fields, percentage); mark auth required.

#### [DPH-577] [UX] Design "My Apps" card with timer (days/hours), progress checklist, Continue Building CTA

**Jira:** [DPH-577](https://datacomgroup.atlassian.net/browse/DPH-577) · **Status:** To Do

| Field | Value |
|-------|--------|
| **Name** | [UX] Design "My Apps" card with timer (days/hours), progress checklist, Continue Building CTA |
| **Description** | See below |
| **Work type** | Task / Bug |
| **Status** | To Do |
| **Story point estimate** | — |
| **Priority** | Low (P4) |
| **Assignee** | Ben Schaumkel |
| **Assignees** (extra) | — |
| **Sprint** | DPH Sprint 2 |
| **Linked work items** | — |

**Description:**

_No description._

#### [DPH-578] [UX] Design Dev Instance Modal (countdown, progress checklist with %, extend, save on navigate)

**Jira:** [DPH-578](https://datacomgroup.atlassian.net/browse/DPH-578) · **Status:** To Do

| Field | Value |
|-------|--------|
| **Name** | [UX] Design Dev Instance Modal (countdown, progress checklist with %, extend, save on navigate) |
| **Description** | See below |
| **Work type** | Task / Bug |
| **Status** | To Do |
| **Story point estimate** | — |
| **Priority** | Low (P4) |
| **Assignee** | Ben Schaumkel |
| **Assignees** (extra) | — |
| **Sprint** | DPH Sprint 2 |
| **Linked work items** | — |

**Description:**

_No description._

#### [DPH-579] [UX] Feedback from devs

**Jira:** [DPH-579](https://datacomgroup.atlassian.net/browse/DPH-579) · **Status:** To Do

| Field | Value |
|-------|--------|
| **Name** | [UX] Feedback from devs |
| **Description** | See below |
| **Work type** | Task / Bug |
| **Status** | To Do |
| **Story point estimate** | — |
| **Priority** | Low (P4) |
| **Assignee** | Ben Schaumkel |
| **Assignees** (extra) | — |
| **Sprint** | DPH Sprint 2 |
| **Linked work items** | — |

**Description:**

_No description._

#### [DPH-580] [UX] Final Design + Dev Handover

**Jira:** [DPH-580](https://datacomgroup.atlassian.net/browse/DPH-580) · **Status:** To Do

| Field | Value |
|-------|--------|
| **Name** | [UX] Final Design + Dev Handover |
| **Description** | See below |
| **Work type** | Task / Bug |
| **Status** | To Do |
| **Story point estimate** | — |
| **Priority** | Low (P4) |
| **Assignee** | Ben Schaumkel |
| **Assignees** (extra) | — |
| **Sprint** | DPH Sprint 2 |
| **Linked work items** | — |

**Description:**

_No description._

---
---

### BE-3.2.2 — Get “my development instance” and countdown

**Description**

- Expose API (e.g. GET /api/v1/users/me/development-instance or /submissions/draft) returning current user’s dev instance/draft.

- Response includes expiresAt, time remaining (or let frontend derive from expiresAt), checklist steps and status, completion percentage, and identifier/URL to continue editing.

- Return 404 or empty when no draft so frontend can decide “Continue Building” visibility.

---

### BE-3.2.3 — Extend instance API

**Description**

- Expose API to extend dev instance (e.g. POST .../development-instances/{id}/extend or .../submissions/draft/extend), auth required and restricted to instance owner.

- On confirm, add 5 days to expiresAt and persist.

- Return new expiresAt (and optional time remaining) for frontend timer and “Extend Instance” visibility (e.g. show when ≤2 days left).

---

### BE-3.2.4 — Progress checklist save and read

**Description**

- Support updating progress on dev instance/draft (e.g. PATCH or PUT progress): Code Uploaded, Code Validated, Code Refactored, Tags Specified, Ready for Approval.

- Recompute and return completion percentage on save; support “save on navigate away” (multiple PATCH or single payload).

- GET dev instance includes full checklist and percentage for progress bar and list.

---

### BE-3.2.5 — Expiring-soon data for email reminder

**Description**

- Expose data for a job or workflow: list dev instances expiring within N days with app-creator email (or user id) for “instance is going to expire” email.

- Optionally expose API (e.g. GET .../admin/development-instances/expiring?withinDays=2) for internal or notification service; or document query approach only.

- Do not implement email sending; only provide data or query.

---

### BE-3.2.6 — Contract and OpenAPI

**Description**

- Dev instance APIs follow project response and error format.

- Document in OpenAPI: GET my dev instance, extend instance, update progress (request/response with expiresAt, checklist fields, percentage); mark auth required.

#### [DPH-577] [UX] Design "My Apps" card with timer (days/hours), progress checklist, Continue Building CTA

**Jira:** [DPH-577](https://datacomgroup.atlassian.net/browse/DPH-577) · **Status:** To Do

| Field | Value |
|-------|--------|
| **Name** | [UX] Design "My Apps" card with timer (days/hours), progress checklist, Continue Building CTA |
| **Description** | See below |
| **Work type** | Subtask |
| **Status** | To Do |
| **Story point estimate** | — |
| **Priority** | Low (P4) |
| **Assignee** | Ben Schaumkel |
| **Assignees** (extra) | — |
| **Sprint** | DPH Sprint 2 |
| **Linked work items** | — |

**Description:**

_No description._

#### [DPH-578] [UX] Design Dev Instance Modal (countdown, progress checklist with %, extend, save on navigate)

**Jira:** [DPH-578](https://datacomgroup.atlassian.net/browse/DPH-578) · **Status:** To Do

| Field | Value |
|-------|--------|
| **Name** | [UX] Design Dev Instance Modal (countdown, progress checklist with %, extend, save on navigate) |
| **Description** | See below |
| **Work type** | Subtask |
| **Status** | To Do |
| **Story point estimate** | — |
| **Priority** | Low (P4) |
| **Assignee** | Ben Schaumkel |
| **Assignees** (extra) | — |
| **Sprint** | DPH Sprint 2 |
| **Linked work items** | — |

**Description:**

_No description._

#### [DPH-579] [UX] Feedback from devs

**Jira:** [DPH-579](https://datacomgroup.atlassian.net/browse/DPH-579) · **Status:** To Do

| Field | Value |
|-------|--------|
| **Name** | [UX] Feedback from devs |
| **Description** | See below |
| **Work type** | Subtask |
| **Status** | To Do |
| **Story point estimate** | — |
| **Priority** | Low (P4) |
| **Assignee** | Ben Schaumkel |
| **Assignees** (extra) | — |
| **Sprint** | DPH Sprint 2 |
| **Linked work items** | — |

**Description:**

_No description._

#### [DPH-580] [UX] Final Design + Dev Handover

**Jira:** [DPH-580](https://datacomgroup.atlassian.net/browse/DPH-580) · **Status:** To Do

| Field | Value |
|-------|--------|
| **Name** | [UX] Final Design + Dev Handover |
| **Description** | See below |
| **Work type** | Subtask |
| **Status** | To Do |
| **Story point estimate** | — |
| **Priority** | Low (P4) |
| **Assignee** | Ben Schaumkel |
| **Assignees** (extra) | — |
| **Sprint** | DPH Sprint 2 |
| **Linked work items** | — |

**Description:**

_No description._

---
---

### BE-3.2.2 — Get “my development instance” and countdown

**Description**

- Expose API (e.g. GET /api/v1/users/me/development-instance or /submissions/draft) returning current user’s dev instance/draft.

- Response includes expiresAt, time remaining (or let frontend derive from expiresAt), checklist steps and status, completion percentage, and identifier/URL to continue editing.

- Return 404 or empty when no draft so frontend can decide “Continue Building” visibility.

---

### BE-3.2.3 — Extend instance API

**Description**

- Expose API to extend dev instance (e.g. POST .../development-instances/{id}/extend or .../submissions/draft/extend), auth required and restricted to instance owner.

- On confirm, add 5 days to expiresAt and persist.

- Return new expiresAt (and optional time remaining) for frontend timer and “Extend Instance” visibility (e.g. show when ≤2 days left).

---

### BE-3.2.4 — Progress checklist save and read

**Description**

- Support updating progress on dev instance/draft (e.g. PATCH or PUT progress): Code Uploaded, Code Validated, Code Refactored, Tags Specified, Ready for Approval.

- Recompute and return completion percentage on save; support “save on navigate away” (multiple PATCH or single payload).

- GET dev instance includes full checklist and percentage for progress bar and list.

---

### BE-3.2.5 — Expiring-soon data for email reminder

**Description**

- Expose data for a job or workflow: list dev instances expiring within N days with app-creator email (or user id) for “instance is going to expire” email.

- Optionally expose API (e.g. GET .../admin/development-instances/expiring?withinDays=2) for internal or notification service; or document query approach only.

- Do not implement email sending; only provide data or query.

---

### BE-3.2.6 — Contract and OpenAPI

**Description**

- Dev instance APIs follow project response and error format.

- Document in OpenAPI: GET my dev instance, extend instance, update progress (request/response with expiresAt, checklist fields, percentage); mark auth required.

#### [DPH-577] [UX] Design "My Apps" card with timer (days/hours), progress checklist, Continue Building CTA

**Jira:** [DPH-577](https://datacomgroup.atlassian.net/browse/DPH-577) · **Status:** To Do

| Field | Value |
|-------|--------|
| **Name** | [UX] Design "My Apps" card with timer (days/hours), progress checklist, Continue Building CTA |
| **Description** | See below |
| **Work type** | Subtask |
| **Status** | To Do |
| **Story point estimate** | — |
| **Priority** | Low (P4) |
| **Assignee** | Ben Schaumkel |
| **Assignees** (extra) | — |
| **Sprint** | DPH Sprint 2 |
| **Linked work items** | — |

**Description:**

_No description._

#### [DPH-578] [UX] Design Dev Instance Modal (countdown, progress checklist with %, extend, save on navigate)

**Jira:** [DPH-578](https://datacomgroup.atlassian.net/browse/DPH-578) · **Status:** To Do

| Field | Value |
|-------|--------|
| **Name** | [UX] Design Dev Instance Modal (countdown, progress checklist with %, extend, save on navigate) |
| **Description** | See below |
| **Work type** | Subtask |
| **Status** | To Do |
| **Story point estimate** | — |
| **Priority** | Low (P4) |
| **Assignee** | Ben Schaumkel |
| **Assignees** (extra) | — |
| **Sprint** | DPH Sprint 2 |
| **Linked work items** | — |

**Description:**

_No description._

#### [DPH-579] [UX] Feedback from devs

**Jira:** [DPH-579](https://datacomgroup.atlassian.net/browse/DPH-579) · **Status:** To Do

| Field | Value |
|-------|--------|
| **Name** | [UX] Feedback from devs |
| **Description** | See below |
| **Work type** | Subtask |
| **Status** | To Do |
| **Story point estimate** | — |
| **Priority** | Low (P4) |
| **Assignee** | Ben Schaumkel |
| **Assignees** (extra) | — |
| **Sprint** | DPH Sprint 2 |
| **Linked work items** | — |

**Description:**

_No description._

#### [DPH-580] [UX] Final Design + Dev Handover

**Jira:** [DPH-580](https://datacomgroup.atlassian.net/browse/DPH-580) · **Status:** To Do

| Field | Value |
|-------|--------|
| **Name** | [UX] Final Design + Dev Handover |
| **Description** | See below |
| **Work type** | Subtask |
| **Status** | To Do |
| **Story point estimate** | — |
| **Priority** | Low (P4) |
| **Assignee** | Ben Schaumkel |
| **Assignees** (extra) | — |
| **Sprint** | DPH Sprint 2 |
| **Linked work items** | — |

**Description:**

_No description._

---
---

### BE-3.2.2 — Get “my development instance” and countdown

**Description**

- Expose API (e.g. GET /api/v1/users/me/development-instance or /submissions/draft) returning current user’s dev instance/draft.

- Response includes expiresAt, time remaining (or let frontend derive from expiresAt), checklist steps and status, completion percentage, and identifier/URL to continue editing.

- Return 404 or empty when no draft so frontend can decide “Continue Building” visibility.

---

### BE-3.2.3 — Extend instance API

**Description**

- Expose API to extend dev instance (e.g. POST .../development-instances/{id}/extend or .../submissions/draft/extend), auth required and restricted to instance owner.

- On confirm, add 5 days to expiresAt and persist.

- Return new expiresAt (and optional time remaining) for frontend timer and “Extend Instance” visibility (e.g. show when ≤2 days left).

---

### BE-3.2.4 — Progress checklist save and read

**Description**

- Support updating progress on dev instance/draft (e.g. PATCH or PUT progress): Code Uploaded, Code Validated, Code Refactored, Tags Specified, Ready for Approval.

- Recompute and return completion percentage on save; support “save on navigate away” (multiple PATCH or single payload).

- GET dev instance includes full checklist and percentage for progress bar and list.

---

### BE-3.2.5 — Expiring-soon data for email reminder

**Description**

- Expose data for a job or workflow: list dev instances expiring within N days with app-creator email (or user id) for “instance is going to expire” email.

- Optionally expose API (e.g. GET .../admin/development-instances/expiring?withinDays=2) for internal or notification service; or document query approach only.

- Do not implement email sending; only provide data or query.

---

### BE-3.2.6 — Contract and OpenAPI

**Description**

- Dev instance APIs follow project response and error format.

- Document in OpenAPI: GET my dev instance, extend instance, update progress (request/response with expiresAt, checklist fields, percentage); mark auth required.

#### [DPH-577] [UX] Design "My Apps" card with timer (days/hours), progress checklist, Continue Building CTA

**Jira:** [DPH-577](https://datacomgroup.atlassian.net/browse/DPH-577) · **Status:** To Do

| Field | Value |
|-------|--------|
| **Name** | [UX] Design "My Apps" card with timer (days/hours), progress checklist, Continue Building CTA |
| **Description** | See below |
| **Work type** | Subtask |
| **Status** | To Do |
| **Story point estimate** | — |
| **Priority** | Low (P4) |
| **Assignee** | Ben Schaumkel |
| **Assignees** (extra) | — |
| **Sprint** | DPH Sprint 2 |
| **Linked work items** | — |

**Description:**

_No description._

#### [DPH-578] [UX] Design Dev Instance Modal (countdown, progress checklist with %, extend, save on navigate)

**Jira:** [DPH-578](https://datacomgroup.atlassian.net/browse/DPH-578) · **Status:** To Do

| Field | Value |
|-------|--------|
| **Name** | [UX] Design Dev Instance Modal (countdown, progress checklist with %, extend, save on navigate) |
| **Description** | See below |
| **Work type** | Subtask |
| **Status** | To Do |
| **Story point estimate** | — |
| **Priority** | Low (P4) |
| **Assignee** | Ben Schaumkel |
| **Assignees** (extra) | — |
| **Sprint** | DPH Sprint 2 |
| **Linked work items** | — |

**Description:**

_No description._

#### [DPH-579] [UX] Feedback from devs

**Jira:** [DPH-579](https://datacomgroup.atlassian.net/browse/DPH-579) · **Status:** To Do

| Field | Value |
|-------|--------|
| **Name** | [UX] Feedback from devs |
| **Description** | See below |
| **Work type** | Subtask |
| **Status** | To Do |
| **Story point estimate** | — |
| **Priority** | Low (P4) |
| **Assignee** | Ben Schaumkel |
| **Assignees** (extra) | — |
| **Sprint** | DPH Sprint 2 |
| **Linked work items** | — |

**Description:**

_No description._

#### [DPH-580] [UX] Final Design + Dev Handover

**Jira:** [DPH-580](https://datacomgroup.atlassian.net/browse/DPH-580) · **Status:** To Do

| Field | Value |
|-------|--------|
| **Name** | [UX] Final Design + Dev Handover |
| **Description** | See below |
| **Work type** | Subtask |
| **Status** | To Do |
| **Story point estimate** | — |
| **Priority** | Low (P4) |
| **Assignee** | Ben Schaumkel |
| **Assignees** (extra) | — |
| **Sprint** | DPH Sprint 2 |
| **Linked work items** | — |

**Description:**

_No description._

---
