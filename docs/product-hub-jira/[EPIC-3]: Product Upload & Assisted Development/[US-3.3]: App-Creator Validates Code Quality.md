# [US-3.3]: App-Creator Validates Code Quality

**Jira:** [DPH-261](https://datacomgroup.atlassian.net/browse/DPH-261)


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
| **Name** | [US-3.3]: App-Creator Validates Code Quality |
| **Description** | See below |
| **Work type** | User Story |
| **Assignee** | — |
| **Assignees** (extra) | — |
| **Priority** | Critical (P1) |
| **Story point estimate** | 9 |
| **Sprint** | — |
| **Status** | To Do |
| **Linked work items** | — |


---
As an **app-creator**,  
I want AI to validate and analyse my code,  
So that I can see if my micro-app meets technical standards before proceeding.

**Acceptance Criteria:**

1. On upload, validation runs automatically — checking: code quality and linting, security vulnerabilities, and README completeness
2. A loading indicator shows "Analysing code..." with progress percentage while running
3. On completion, a validation report displays: overall quality score, critical issues (must fix), warnings (recommended), and passed checks
4. Each issue shows: type, severity, file name, line number, description, and suggested fix
5. Critical issues block progression — a message reads "Please resolve critical issues before proceeding" with the app status changed to Validation Failed
6. No critical issues allows progression to refactoring (US-3.4)
7. A `Revalidate Code` button is available at any time — each run increments and displays a validation attempt counter (e.g., "Validation Attempt #3")
8. There is no limit on revalidation attempts (this is because we would need to have a validation **attempt tracking for each user account** instead of per upload - since they can just just reupload and have infinite attempts anyway) (for MVP, exclude having limit)


### Subtasks

#### [DPH-501] [3.3-UX] Tasks

**Jira:** [DPH-501](https://datacomgroup.atlassian.net/browse/DPH-501) · **Status:** To Do

| Field | Value |
|-------|--------|
| **Name** | [3.3-UX] Tasks |
| **Description** | See below |
| **Work type** | Task / Bug |
| **Status** | To Do |
| **Story point estimate** | — |
| **Priority** | Low (P4) |
| **Assignee** | Ben Schaumkel |
| **Assignees** (extra) | — |
| **Sprint** | — |
| **Linked work items** | — |

**Description:**

- [UX] Design validation report UI: score, critical issues, warnings

#### [DPH-502] [3.3-FE] Frontend scope (Code quality validation)

**Jira:** [DPH-502](https://datacomgroup.atlassian.net/browse/DPH-502) · **Status:** To Do

| Field | Value |
|-------|--------|
| **Name** | [3.3-FE] Frontend scope (Code quality validation) |
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

**Trigger & loading**

- FE-1 — Automatic validation after upload: When the user lands on this page or upload has just completed, the UI enters "analysing" state and polls or subscribes to backend status. No separate "Start validation" click is required (AC1).

- FE-2 — Analysing state: Show a loading indicator with the text "Analysing code..." and a progress percentage from the backend status/progress API (AC2).

**Report display**

- FE-3 — Validation report on completion: Display the full report with overall quality score, Critical issues (must fix), Warnings (recommended), and Passed checks in clear sections (AC3).

- FE-4 — Per-issue details: For each issue show Type, Severity, File name, Line number, Description, and Suggested fix (list or expandable rows) (AC4).

**Blocking & progression**

- FE-5 — When critical issues exist: Show the message "Please resolve critical issues before proceeding" and disable the "Next" or US-3.4 (refactoring) entry until the product is no longer in "Validation Failed" (AC5).

- FE-6 — When no critical issues: Enable progression to the refactoring stage (US-3.4); show "Next" or the appropriate entry (AC6).

**Revalidate**

- FE-7 — "Revalidate Code" button: Always visible and clickable; on click call the backend revalidate endpoint; on success refresh validation status and report and update the attempt count display (AC7).

- FE-8 — Show revalidation attempt count: e.g. "Validation Attempt #3". MVP: do not implement an attempt limit (AC8).

#### [DPH-503] [3.3-BE] Code quality validation — trigger, async run, report shape and progression gate

**Jira:** [DPH-503](https://datacomgroup.atlassian.net/browse/DPH-503) · **Status:** To Do

| Field | Value |
|-------|--------|
| **Name** | [3.3-BE] Code quality validation — trigger, async run, report shape and progression gate |
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

### BE-3.3.1 — Validation trigger and execution (on upload / revalidate)

**Description**

- Trigger validation when code upload completes or user clicks “Revalidate Code” (or on upstream event).

- Run or orchestrate checks: code quality & lint, security vulnerabilities, README completeness (call existing or external validation service as needed).

- Run validation asynchronously; return job/task id or status for frontend to poll progress.

---

### BE-3.3.2 — Validation job status and progress

**Description**

- Expose API to get validation status (e.g. GET .../development-instances/{id}/validation/status or by job id).

- Response includes running / completed / failed, optional progress percentage, and report id or summary when done.

- Frontend uses this for “Analysing code...” and progress percentage.

---

### BE-3.3.3 — Validation report model and response

**Description**

- Persist validation result: overall score, list of issues (type, severity, file, line, description, suggested fix), categorized as critical / warning / passed.

- Expose API to get latest report (e.g. GET .../validation/report) returning score, must-fix items, recommended items, passed items.

- Per-issue shape supports type, severity, file, line, description, suggested fix for frontend detail view.

---

### BE-3.3.4 — Progression gate (block when critical issues exist)

**Description**

- Expose in report or dev instance response whether critical issues exist (e.g. hasCriticalIssues) or whether user can proceed (e.g. canProceedToRefactor / canProceedToTagSpec).

- Block progression to refactor (US-3.4) or tag specification (US-3.5) when critical present; allow when none.

- Frontend uses this to show “Please resolve critical issues before proceeding” or enable next stage.

---

### BE-3.3.5 — Revalidate API and attempt counter

**Description**

- Expose API to trigger revalidation (e.g. POST .../validation/run), auth required and restricted to dev instance owner.

- Increment and persist validation attempt count on each run (including first run after upload); return current count in response or subsequent GET (e.g. validationAttemptNumber: 3).

- MVP: do not enforce a limit on revalidation attempts; no backend cap.

---

### BE-3.3.6 — Contract and OpenAPI

**Description**

- Validation APIs follow project response, error and async-status format.

- Document in OpenAPI: trigger validation, get status/progress, get report; schema for score, issues, hasCriticalIssues / canProceed; mark auth required.

#### [DPH-614] [3.3-UX] Infrencing Modal / Checking animation

**Jira:** [DPH-614](https://datacomgroup.atlassian.net/browse/DPH-614) · **Status:** To Do

| Field | Value |
|-------|--------|
| **Name** | [3.3-UX] Infrencing Modal / Checking animation |
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

#### [DPH-615] [3.3-UX] Code report template

**Jira:** [DPH-615](https://datacomgroup.atlassian.net/browse/DPH-615) · **Status:** To Do

| Field | Value |
|-------|--------|
| **Name** | [3.3-UX] Code report template |
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

#### [DPH-616] [3.3-UX] Create Diff report template (Each issue shows: type, severity, file name, line number, description, and suggested fix)

**Jira:** [DPH-616](https://datacomgroup.atlassian.net/browse/DPH-616) · **Status:** To Do

| Field | Value |
|-------|--------|
| **Name** | [3.3-UX] Create Diff report template (Each issue shows: type, severity, file name, line number, description, and suggested fix) |
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

---
---

### BE-3.3.2 — Validation job status and progress

**Description**

- Expose API to get validation status (e.g. GET .../development-instances/{id}/validation/status or by job id).

- Response includes running / completed / failed, optional progress percentage, and report id or summary when done.

- Frontend uses this for “Analysing code...” and progress percentage.

---

### BE-3.3.3 — Validation report model and response

**Description**

- Persist validation result: overall score, list of issues (type, severity, file, line, description, suggested fix), categorized as critical / warning / passed.

- Expose API to get latest report (e.g. GET .../validation/report) returning score, must-fix items, recommended items, passed items.

- Per-issue shape supports type, severity, file, line, description, suggested fix for frontend detail view.

---

### BE-3.3.4 — Progression gate (block when critical issues exist)

**Description**

- Expose in report or dev instance response whether critical issues exist (e.g. hasCriticalIssues) or whether user can proceed (e.g. canProceedToRefactor / canProceedToTagSpec).

- Block progression to refactor (US-3.4) or tag specification (US-3.5) when critical present; allow when none.

- Frontend uses this to show “Please resolve critical issues before proceeding” or enable next stage.

---

### BE-3.3.5 — Revalidate API and attempt counter

**Description**

- Expose API to trigger revalidation (e.g. POST .../validation/run), auth required and restricted to dev instance owner.

- Increment and persist validation attempt count on each run (including first run after upload); return current count in response or subsequent GET (e.g. validationAttemptNumber: 3).

- MVP: do not enforce a limit on revalidation attempts; no backend cap.

---

### BE-3.3.6 — Contract and OpenAPI

**Description**

- Validation APIs follow project response, error and async-status format.

- Document in OpenAPI: trigger validation, get status/progress, get report; schema for score, issues, hasCriticalIssues / canProceed; mark auth required.

#### [DPH-614] [3.3-UX] Infrencing Modal / Checking animation

**Jira:** [DPH-614](https://datacomgroup.atlassian.net/browse/DPH-614) · **Status:** To Do

| Field | Value |
|-------|--------|
| **Name** | [3.3-UX] Infrencing Modal / Checking animation |
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

#### [DPH-615] [3.3-UX] Code report template

**Jira:** [DPH-615](https://datacomgroup.atlassian.net/browse/DPH-615) · **Status:** To Do

| Field | Value |
|-------|--------|
| **Name** | [3.3-UX] Code report template |
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

#### [DPH-616] [3.3-UX] Create Diff report template (Each issue shows: type, severity, file name, line number, description, and suggested fix)

**Jira:** [DPH-616](https://datacomgroup.atlassian.net/browse/DPH-616) · **Status:** To Do

| Field | Value |
|-------|--------|
| **Name** | [3.3-UX] Create Diff report template (Each issue shows: type, severity, file name, line number, description, and suggested fix) |
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

---
---

### BE-3.3.2 — Validation job status and progress

**Description**

- Expose API to get validation status (e.g. GET .../development-instances/{id}/validation/status or by job id).

- Response includes running / completed / failed, optional progress percentage, and report id or summary when done.

- Frontend uses this for “Analysing code...” and progress percentage.

---

### BE-3.3.3 — Validation report model and response

**Description**

- Persist validation result: overall score, list of issues (type, severity, file, line, description, suggested fix), categorized as critical / warning / passed.

- Expose API to get latest report (e.g. GET .../validation/report) returning score, must-fix items, recommended items, passed items.

- Per-issue shape supports type, severity, file, line, description, suggested fix for frontend detail view.

---

### BE-3.3.4 — Progression gate (block when critical issues exist)

**Description**

- Expose in report or dev instance response whether critical issues exist (e.g. hasCriticalIssues) or whether user can proceed (e.g. canProceedToRefactor / canProceedToTagSpec).

- Block progression to refactor (US-3.4) or tag specification (US-3.5) when critical present; allow when none.

- Frontend uses this to show “Please resolve critical issues before proceeding” or enable next stage.

---

### BE-3.3.5 — Revalidate API and attempt counter

**Description**

- Expose API to trigger revalidation (e.g. POST .../validation/run), auth required and restricted to dev instance owner.

- Increment and persist validation attempt count on each run (including first run after upload); return current count in response or subsequent GET (e.g. validationAttemptNumber: 3).

- MVP: do not enforce a limit on revalidation attempts; no backend cap.

---

### BE-3.3.6 — Contract and OpenAPI

**Description**

- Validation APIs follow project response, error and async-status format.

- Document in OpenAPI: trigger validation, get status/progress, get report; schema for score, issues, hasCriticalIssues / canProceed; mark auth required.

#### [DPH-614] [3.3-UX] Infrencing Modal / Checking animation

**Jira:** [DPH-614](https://datacomgroup.atlassian.net/browse/DPH-614) · **Status:** To Do

| Field | Value |
|-------|--------|
| **Name** | [3.3-UX] Infrencing Modal / Checking animation |
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

#### [DPH-615] [3.3-UX] Code report template

**Jira:** [DPH-615](https://datacomgroup.atlassian.net/browse/DPH-615) · **Status:** To Do

| Field | Value |
|-------|--------|
| **Name** | [3.3-UX] Code report template |
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

#### [DPH-616] [3.3-UX] Create Diff report template (Each issue shows: type, severity, file name, line number, description, and suggested fix)

**Jira:** [DPH-616](https://datacomgroup.atlassian.net/browse/DPH-616) · **Status:** To Do

| Field | Value |
|-------|--------|
| **Name** | [3.3-UX] Create Diff report template (Each issue shows: type, severity, file name, line number, description, and suggested fix) |
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

---
---

### BE-3.3.2 — Validation job status and progress

**Description**

- Expose API to get validation status (e.g. GET .../development-instances/{id}/validation/status or by job id).

- Response includes running / completed / failed, optional progress percentage, and report id or summary when done.

- Frontend uses this for “Analysing code...” and progress percentage.

---

### BE-3.3.3 — Validation report model and response

**Description**

- Persist validation result: overall score, list of issues (type, severity, file, line, description, suggested fix), categorized as critical / warning / passed.

- Expose API to get latest report (e.g. GET .../validation/report) returning score, must-fix items, recommended items, passed items.

- Per-issue shape supports type, severity, file, line, description, suggested fix for frontend detail view.

---

### BE-3.3.4 — Progression gate (block when critical issues exist)

**Description**

- Expose in report or dev instance response whether critical issues exist (e.g. hasCriticalIssues) or whether user can proceed (e.g. canProceedToRefactor / canProceedToTagSpec).

- Block progression to refactor (US-3.4) or tag specification (US-3.5) when critical present; allow when none.

- Frontend uses this to show “Please resolve critical issues before proceeding” or enable next stage.

---

### BE-3.3.5 — Revalidate API and attempt counter

**Description**

- Expose API to trigger revalidation (e.g. POST .../validation/run), auth required and restricted to dev instance owner.

- Increment and persist validation attempt count on each run (including first run after upload); return current count in response or subsequent GET (e.g. validationAttemptNumber: 3).

- MVP: do not enforce a limit on revalidation attempts; no backend cap.

---

### BE-3.3.6 — Contract and OpenAPI

**Description**

- Validation APIs follow project response, error and async-status format.

- Document in OpenAPI: trigger validation, get status/progress, get report; schema for score, issues, hasCriticalIssues / canProceed; mark auth required.

#### [DPH-614] [3.3-UX] Infrencing Modal / Checking animation

**Jira:** [DPH-614](https://datacomgroup.atlassian.net/browse/DPH-614) · **Status:** To Do

| Field | Value |
|-------|--------|
| **Name** | [3.3-UX] Infrencing Modal / Checking animation |
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

#### [DPH-615] [3.3-UX] Code report template

**Jira:** [DPH-615](https://datacomgroup.atlassian.net/browse/DPH-615) · **Status:** To Do

| Field | Value |
|-------|--------|
| **Name** | [3.3-UX] Code report template |
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

#### [DPH-616] [3.3-UX] Create Diff report template (Each issue shows: type, severity, file name, line number, description, and suggested fix)

**Jira:** [DPH-616](https://datacomgroup.atlassian.net/browse/DPH-616) · **Status:** To Do

| Field | Value |
|-------|--------|
| **Name** | [3.3-UX] Create Diff report template (Each issue shows: type, severity, file name, line number, description, and suggested fix) |
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

---
---

### BE-3.3.2 — Validation job status and progress

**Description**

- Expose API to get validation status (e.g. GET .../development-instances/{id}/validation/status or by job id).

- Response includes running / completed / failed, optional progress percentage, and report id or summary when done.

- Frontend uses this for “Analysing code...” and progress percentage.

---

### BE-3.3.3 — Validation report model and response

**Description**

- Persist validation result: overall score, list of issues (type, severity, file, line, description, suggested fix), categorized as critical / warning / passed.

- Expose API to get latest report (e.g. GET .../validation/report) returning score, must-fix items, recommended items, passed items.

- Per-issue shape supports type, severity, file, line, description, suggested fix for frontend detail view.

---

### BE-3.3.4 — Progression gate (block when critical issues exist)

**Description**

- Expose in report or dev instance response whether critical issues exist (e.g. hasCriticalIssues) or whether user can proceed (e.g. canProceedToRefactor / canProceedToTagSpec).

- Block progression to refactor (US-3.4) or tag specification (US-3.5) when critical present; allow when none.

- Frontend uses this to show “Please resolve critical issues before proceeding” or enable next stage.

---

### BE-3.3.5 — Revalidate API and attempt counter

**Description**

- Expose API to trigger revalidation (e.g. POST .../validation/run), auth required and restricted to dev instance owner.

- Increment and persist validation attempt count on each run (including first run after upload); return current count in response or subsequent GET (e.g. validationAttemptNumber: 3).

- MVP: do not enforce a limit on revalidation attempts; no backend cap.

---

### BE-3.3.6 — Contract and OpenAPI

**Description**

- Validation APIs follow project response, error and async-status format.

- Document in OpenAPI: trigger validation, get status/progress, get report; schema for score, issues, hasCriticalIssues / canProceed; mark auth required.

---
---

### BE-3.3.2 — Validation job status and progress

**Description**

- Expose API to get validation status (e.g. GET .../development-instances/{id}/validation/status or by job id).

- Response includes running / completed / failed, optional progress percentage, and report id or summary when done.

- Frontend uses this for “Analysing code...” and progress percentage.

---

### BE-3.3.3 — Validation report model and response

**Description**

- Persist validation result: overall score, list of issues (type, severity, file, line, description, suggested fix), categorized as critical / warning / passed.

- Expose API to get latest report (e.g. GET .../validation/report) returning score, must-fix items, recommended items, passed items.

- Per-issue shape supports type, severity, file, line, description, suggested fix for frontend detail view.

---

### BE-3.3.4 — Progression gate (block when critical issues exist)

**Description**

- Expose in report or dev instance response whether critical issues exist (e.g. hasCriticalIssues) or whether user can proceed (e.g. canProceedToRefactor / canProceedToTagSpec).

- Block progression to refactor (US-3.4) or tag specification (US-3.5) when critical present; allow when none.

- Frontend uses this to show “Please resolve critical issues before proceeding” or enable next stage.

---

### BE-3.3.5 — Revalidate API and attempt counter

**Description**

- Expose API to trigger revalidation (e.g. POST .../validation/run), auth required and restricted to dev instance owner.

- Increment and persist validation attempt count on each run (including first run after upload); return current count in response or subsequent GET (e.g. validationAttemptNumber: 3).

- MVP: do not enforce a limit on revalidation attempts; no backend cap.

---

### BE-3.3.6 — Contract and OpenAPI

**Description**

- Validation APIs follow project response, error and async-status format.

- Document in OpenAPI: trigger validation, get status/progress, get report; schema for score, issues, hasCriticalIssues / canProceed; mark auth required.

---
---

### BE-3.3.2 — Validation job status and progress

**Description**

- Expose API to get validation status (e.g. GET .../development-instances/{id}/validation/status or by job id).

- Response includes running / completed / failed, optional progress percentage, and report id or summary when done.

- Frontend uses this for “Analysing code...” and progress percentage.

---

### BE-3.3.3 — Validation report model and response

**Description**

- Persist validation result: overall score, list of issues (type, severity, file, line, description, suggested fix), categorized as critical / warning / passed.

- Expose API to get latest report (e.g. GET .../validation/report) returning score, must-fix items, recommended items, passed items.

- Per-issue shape supports type, severity, file, line, description, suggested fix for frontend detail view.

---

### BE-3.3.4 — Progression gate (block when critical issues exist)

**Description**

- Expose in report or dev instance response whether critical issues exist (e.g. hasCriticalIssues) or whether user can proceed (e.g. canProceedToRefactor / canProceedToTagSpec).

- Block progression to refactor (US-3.4) or tag specification (US-3.5) when critical present; allow when none.

- Frontend uses this to show “Please resolve critical issues before proceeding” or enable next stage.

---

### BE-3.3.5 — Revalidate API and attempt counter

**Description**

- Expose API to trigger revalidation (e.g. POST .../validation/run), auth required and restricted to dev instance owner.

- Increment and persist validation attempt count on each run (including first run after upload); return current count in response or subsequent GET (e.g. validationAttemptNumber: 3).

- MVP: do not enforce a limit on revalidation attempts; no backend cap.

---

### BE-3.3.6 — Contract and OpenAPI

**Description**

- Validation APIs follow project response, error and async-status format.

- Document in OpenAPI: trigger validation, get status/progress, get report; schema for score, issues, hasCriticalIssues / canProceed; mark auth required.

---
---

### BE-3.3.2 — Validation job status and progress

**Description**

- Expose API to get validation status (e.g. GET .../development-instances/{id}/validation/status or by job id).

- Response includes running / completed / failed, optional progress percentage, and report id or summary when done.

- Frontend uses this for “Analysing code...” and progress percentage.

---

### BE-3.3.3 — Validation report model and response

**Description**

- Persist validation result: overall score, list of issues (type, severity, file, line, description, suggested fix), categorized as critical / warning / passed.

- Expose API to get latest report (e.g. GET .../validation/report) returning score, must-fix items, recommended items, passed items.

- Per-issue shape supports type, severity, file, line, description, suggested fix for frontend detail view.

---

### BE-3.3.4 — Progression gate (block when critical issues exist)

**Description**

- Expose in report or dev instance response whether critical issues exist (e.g. hasCriticalIssues) or whether user can proceed (e.g. canProceedToRefactor / canProceedToTagSpec).

- Block progression to refactor (US-3.4) or tag specification (US-3.5) when critical present; allow when none.

- Frontend uses this to show “Please resolve critical issues before proceeding” or enable next stage.

---

### BE-3.3.5 — Revalidate API and attempt counter

**Description**

- Expose API to trigger revalidation (e.g. POST .../validation/run), auth required and restricted to dev instance owner.

- Increment and persist validation attempt count on each run (including first run after upload); return current count in response or subsequent GET (e.g. validationAttemptNumber: 3).

- MVP: do not enforce a limit on revalidation attempts; no backend cap.

---

### BE-3.3.6 — Contract and OpenAPI

**Description**

- Validation APIs follow project response, error and async-status format.

- Document in OpenAPI: trigger validation, get status/progress, get report; schema for score, issues, hasCriticalIssues / canProceed; mark auth required.

---
---
---
---
---
---
---
---
