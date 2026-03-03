# [US-3.5]: App-Creator Specifies Tags and App Visibility

**Jira:** [DPH-263](https://datacomgroup.atlassian.net/browse/DPH-263)


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
| **Name** | [US-3.5]: App-Creator Specifies Tags and App Visibility |
| **Description** | See below |
| **Work type** | User Story |
| **Assignee** | — |
| **Assignees** (extra) | — |
| **Priority** | Critical (P1) |
| **Story point estimate** | — |
| **Sprint** | — |
| **Status** | In Progress |
| **Linked work items** | — |


---
As an **app-creator**,  
I want to tag my micro-app,  
So that it is searchable and discoverable on the Product Hub.

**Acceptance Criteria:**

1. After validation passes, I am presented with a tag selection interface showing predefined categories: 

        1. Business Analysis,
        2. User Experience,
        3. Productivity,
        4. Documentation,
        5. Development Tools,
        6. Data Analysis,
        7. Other
2. App-creator may choose a team → app gets recommended to people in those teams when they visit the Product Catalogue (Directory)
3. Selected tags are highlighted and added to a "Selected Tags" section
4. I must select at least 1 tag and no more than 10 — once the limit is reached, unselected tags are disabled with tooltip: "Maximum 10 tags allowed"
5. Custom tags are not available in this MVP version
6. After selecting tags, the app-creator selects a visibility scope: 

        1. Private; or
        2. Datacom Only.
7. Selected Visibility scope is saved and applied on production release. The scope can be changed anytime from My Apps — before or after release. Only an admin can set the scope to Public.
8. Clicking `Save Category and Visibility` saves the selections and proceeds me to content generation (Epic 4)
9. App-creator can request for this app to go public (for admin to review and confirm) (if creator indicates, it needs to complete security testing etc. Have a criteria or checkbox etc (does it pass security, etc) (mikha to refine this - do questionnaries for jo etc for **criteria for public use of Datacom Products**)
(could also be a NO at this time) (COULD P3)

BA & UX → come up with the categories for AC.1 when more is needed


### Subtasks

#### [DPH-546] [3.5-UX] Tasks

**Jira:** [DPH-546](https://datacomgroup.atlassian.net/browse/DPH-546) · **Status:** Done

| Field | Value |
|-------|--------|
| **Name** | [3.5-UX] Tasks |
| **Description** | See below |
| **Work type** | Task / Bug |
| **Status** | Done |
| **Story point estimate** | — |
| **Priority** | Low (P4) |
| **Assignee** | Ben Schaumkel |
| **Assignees** (extra) | — |
| **Sprint** | — |
| **Linked work items** | — |

**Description:**

Visual Tags are created.

Tagging system must be specified first

Research how to create an intuitive tagging system for users to be able to find products they are interested in easily - filter / search for what they are needing

#### [DPH-547] [3.5-FE] Frontend scope (Tags and app visibility)

**Jira:** [DPH-547](https://datacomgroup.atlassian.net/browse/DPH-547) · **Status:** To Do

| Field | Value |
|-------|--------|
| **Name** | [3.5-FE] Frontend scope (Tags and app visibility) |
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

**Page and layout**

- FE-1 — Tags and visibility page/step: Reachable after validation. Display predefined categories and tags from backend (AC1).

- FE-2 — "Selected Tags" section: Show selected tags highlighted in a dedicated "Selected Tags" area, separate from unselected tags (AC3).

**Tag rules and interaction**

- FE-3 — Tag limits: Enforce minimum 1 and maximum 10 tags. When 10 are selected, disable all other unselected tags (AC4).

- FE-4 — When 10 tags selected, show tooltip: "Maximum 10 tags allowed." (AC4).

- FE-5 — MVP: No custom tags; only predefined tags are selectable (AC5).

**Team and visibility**

- FE-6 — Team selection: Provide team dropdown or picker; selected team(s) used for directory "recommended for your team" (AC2).

- FE-7 — Visibility scope: Single choice between Private and Datacom Only (required). Do not show or enable Public for app-creator (AC6, AC7).

**Save and My Apps**

- FE-8 — Save button: On click submit tags, team, and visibility to backend; show success and optionally proceed (AC8).

- FE-9 — Edit visibility in My Apps: Allow changing visibility (private/datacomOnly) from My Apps; if user is admin, allow setting Public (AC7).

**Optional (P3)**

- FE-10 — Request public visibility: e.g. "Request public visibility" button and flow for admin approval; can be omitted in MVP.

**Suggested implementation order**

FE-1 → FE-2 → FE-3 → FE-4 → FE-6 → FE-7 → FE-8 → FE-5 → FE-9 → FE-10 (optional).

#### [DPH-548] [3.5-BE]  Tags and optional team — predefined list, save validation and progression

**Jira:** [DPH-548](https://datacomgroup.atlassian.net/browse/DPH-548) · **Status:** To Do

| Field | Value |
|-------|--------|
| **Name** | [3.5-BE]  Tags and optional team — predefined list, save validation and progression |
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

### BE-3.5.1 — Predefined tag/category list

**Description**

- Expose API to get selectable tag/category options (e.g. GET /api/v1/tags or /catalogue/tag-options) for the tag selection UI.

- List includes predefined categories from AC (e.g. Business Analysis, User Experience, Productivity, Documentation, Development Tools, Data Analysis and others); align with final BA/UX list.

- MVP: only this predefined set; no custom tags. List may be read from config or DB and cached.

---

### BE-3.5.2 — Save tags API and validation

**Description**

- Expose API to save selected tags for current dev instance/draft (e.g. PATCH .../development-instances/{id}/tags or PUT .../tags), auth required and restricted to instance owner.

- Request body: array of tag ids or codes. Validate: min 1, max 10; each value must be in predefined list; return 400 with clear message otherwise.

- On success persist to dev instance/draft and return saved tags for frontend “Selected Tags” and disabled state.

---

### BE-3.5.3 — Tags, progress and content-generation gate

**Description**

- On save, update dev instance progress (e.g. set “Tags Specified” done) and return updated progress/percentage in response or GET dev instance.

- Expose state so Epic 4 content generation can run when “tags specified” (or equivalent) is true; do not implement content generation here, only data and state.

---

### BE-3.5.4 — Optional: team selection for recommendations (AC.1a)

**Description**

- If AC.1a (choose team → recommend to that team) is in scope: support saving “target team(s)” (or equivalent) on dev instance/submission; expose team list API (or from directory/Entra) for frontend.

- Optionally save team selection with tags; data consumed by in-Hub recommendation logic (recommendation engine can be later).

- If out of scope this sprint, note “Out of scope for MVP” or “Placeholder” in subtask.

---

### BE-3.5.5 — Contract and OpenAPI

**Description**

- Tag list, save tags, and dev instance GET follow project request/response format.

- Document in OpenAPI: GET tag options, PATCH/PUT tags (body array and validation rules), and tags + progress in dev instance response; mark auth required.

---
---

### BE-3.5.2 — Save tags API and validation

**Description**

- Expose API to save selected tags for current dev instance/draft (e.g. PATCH .../development-instances/{id}/tags or PUT .../tags), auth required and restricted to instance owner.

- Request body: array of tag ids or codes. Validate: min 1, max 10; each value must be in predefined list; return 400 with clear message otherwise.

- On success persist to dev instance/draft and return saved tags for frontend “Selected Tags” and disabled state.

---

### BE-3.5.3 — Tags, progress and content-generation gate

**Description**

- On save, update dev instance progress (e.g. set “Tags Specified” done) and return updated progress/percentage in response or GET dev instance.

- Expose state so Epic 4 content generation can run when “tags specified” (or equivalent) is true; do not implement content generation here, only data and state.

---

### BE-3.5.4 — Optional: team selection for recommendations (AC.1a)

**Description**

- If AC.1a (choose team → recommend to that team) is in scope: support saving “target team(s)” (or equivalent) on dev instance/submission; expose team list API (or from directory/Entra) for frontend.

- Optionally save team selection with tags; data consumed by in-Hub recommendation logic (recommendation engine can be later).

- If out of scope this sprint, note “Out of scope for MVP” or “Placeholder” in subtask.

---

### BE-3.5.5 — Contract and OpenAPI

**Description**

- Tag list, save tags, and dev instance GET follow project request/response format.

- Document in OpenAPI: GET tag options, PATCH/PUT tags (body array and validation rules), and tags + progress in dev instance response; mark auth required.

---
---

### BE-3.5.2 — Save tags API and validation

**Description**

- Expose API to save selected tags for current dev instance/draft (e.g. PATCH .../development-instances/{id}/tags or PUT .../tags), auth required and restricted to instance owner.

- Request body: array of tag ids or codes. Validate: min 1, max 10; each value must be in predefined list; return 400 with clear message otherwise.

- On success persist to dev instance/draft and return saved tags for frontend “Selected Tags” and disabled state.

---

### BE-3.5.3 — Tags, progress and content-generation gate

**Description**

- On save, update dev instance progress (e.g. set “Tags Specified” done) and return updated progress/percentage in response or GET dev instance.

- Expose state so Epic 4 content generation can run when “tags specified” (or equivalent) is true; do not implement content generation here, only data and state.

---

### BE-3.5.4 — Optional: team selection for recommendations (AC.1a)

**Description**

- If AC.1a (choose team → recommend to that team) is in scope: support saving “target team(s)” (or equivalent) on dev instance/submission; expose team list API (or from directory/Entra) for frontend.

- Optionally save team selection with tags; data consumed by in-Hub recommendation logic (recommendation engine can be later).

- If out of scope this sprint, note “Out of scope for MVP” or “Placeholder” in subtask.

---

### BE-3.5.5 — Contract and OpenAPI

**Description**

- Tag list, save tags, and dev instance GET follow project request/response format.

- Document in OpenAPI: GET tag options, PATCH/PUT tags (body array and validation rules), and tags + progress in dev instance response; mark auth required.

---
---

### BE-3.5.2 — Save tags API and validation

**Description**

- Expose API to save selected tags for current dev instance/draft (e.g. PATCH .../development-instances/{id}/tags or PUT .../tags), auth required and restricted to instance owner.

- Request body: array of tag ids or codes. Validate: min 1, max 10; each value must be in predefined list; return 400 with clear message otherwise.

- On success persist to dev instance/draft and return saved tags for frontend “Selected Tags” and disabled state.

---

### BE-3.5.3 — Tags, progress and content-generation gate

**Description**

- On save, update dev instance progress (e.g. set “Tags Specified” done) and return updated progress/percentage in response or GET dev instance.

- Expose state so Epic 4 content generation can run when “tags specified” (or equivalent) is true; do not implement content generation here, only data and state.

---

### BE-3.5.4 — Optional: team selection for recommendations (AC.1a)

**Description**

- If AC.1a (choose team → recommend to that team) is in scope: support saving “target team(s)” (or equivalent) on dev instance/submission; expose team list API (or from directory/Entra) for frontend.

- Optionally save team selection with tags; data consumed by in-Hub recommendation logic (recommendation engine can be later).

- If out of scope this sprint, note “Out of scope for MVP” or “Placeholder” in subtask.

---

### BE-3.5.5 — Contract and OpenAPI

**Description**

- Tag list, save tags, and dev instance GET follow project request/response format.

- Document in OpenAPI: GET tag options, PATCH/PUT tags (body array and validation rules), and tags + progress in dev instance response; mark auth required.

---
---

### BE-3.5.2 — Save tags API and validation

**Description**

- Expose API to save selected tags for current dev instance/draft (e.g. PATCH .../development-instances/{id}/tags or PUT .../tags), auth required and restricted to instance owner.

- Request body: array of tag ids or codes. Validate: min 1, max 10; each value must be in predefined list; return 400 with clear message otherwise.

- On success persist to dev instance/draft and return saved tags for frontend “Selected Tags” and disabled state.

---

### BE-3.5.3 — Tags, progress and content-generation gate

**Description**

- On save, update dev instance progress (e.g. set “Tags Specified” done) and return updated progress/percentage in response or GET dev instance.

- Expose state so Epic 4 content generation can run when “tags specified” (or equivalent) is true; do not implement content generation here, only data and state.

---

### BE-3.5.4 — Optional: team selection for recommendations (AC.1a)

**Description**

- If AC.1a (choose team → recommend to that team) is in scope: support saving “target team(s)” (or equivalent) on dev instance/submission; expose team list API (or from directory/Entra) for frontend.

- Optionally save team selection with tags; data consumed by in-Hub recommendation logic (recommendation engine can be later).

- If out of scope this sprint, note “Out of scope for MVP” or “Placeholder” in subtask.

---

### BE-3.5.5 — Contract and OpenAPI

**Description**

- Tag list, save tags, and dev instance GET follow project request/response format.

- Document in OpenAPI: GET tag options, PATCH/PUT tags (body array and validation rules), and tags + progress in dev instance response; mark auth required.

---
---

### BE-3.5.2 — Save tags API and validation

**Description**

- Expose API to save selected tags for current dev instance/draft (e.g. PATCH .../development-instances/{id}/tags or PUT .../tags), auth required and restricted to instance owner.

- Request body: array of tag ids or codes. Validate: min 1, max 10; each value must be in predefined list; return 400 with clear message otherwise.

- On success persist to dev instance/draft and return saved tags for frontend “Selected Tags” and disabled state.

---

### BE-3.5.3 — Tags, progress and content-generation gate

**Description**

- On save, update dev instance progress (e.g. set “Tags Specified” done) and return updated progress/percentage in response or GET dev instance.

- Expose state so Epic 4 content generation can run when “tags specified” (or equivalent) is true; do not implement content generation here, only data and state.

---

### BE-3.5.4 — Optional: team selection for recommendations (AC.1a)

**Description**

- If AC.1a (choose team → recommend to that team) is in scope: support saving “target team(s)” (or equivalent) on dev instance/submission; expose team list API (or from directory/Entra) for frontend.

- Optionally save team selection with tags; data consumed by in-Hub recommendation logic (recommendation engine can be later).

- If out of scope this sprint, note “Out of scope for MVP” or “Placeholder” in subtask.

---

### BE-3.5.5 — Contract and OpenAPI

**Description**

- Tag list, save tags, and dev instance GET follow project request/response format.

- Document in OpenAPI: GET tag options, PATCH/PUT tags (body array and validation rules), and tags + progress in dev instance response; mark auth required.

---
---

### BE-3.5.2 — Save tags API and validation

**Description**

- Expose API to save selected tags for current dev instance/draft (e.g. PATCH .../development-instances/{id}/tags or PUT .../tags), auth required and restricted to instance owner.

- Request body: array of tag ids or codes. Validate: min 1, max 10; each value must be in predefined list; return 400 with clear message otherwise.

- On success persist to dev instance/draft and return saved tags for frontend “Selected Tags” and disabled state.

---

### BE-3.5.3 — Tags, progress and content-generation gate

**Description**

- On save, update dev instance progress (e.g. set “Tags Specified” done) and return updated progress/percentage in response or GET dev instance.

- Expose state so Epic 4 content generation can run when “tags specified” (or equivalent) is true; do not implement content generation here, only data and state.

---

### BE-3.5.4 — Optional: team selection for recommendations (AC.1a)

**Description**

- If AC.1a (choose team → recommend to that team) is in scope: support saving “target team(s)” (or equivalent) on dev instance/submission; expose team list API (or from directory/Entra) for frontend.

- Optionally save team selection with tags; data consumed by in-Hub recommendation logic (recommendation engine can be later).

- If out of scope this sprint, note “Out of scope for MVP” or “Placeholder” in subtask.

---

### BE-3.5.5 — Contract and OpenAPI

**Description**

- Tag list, save tags, and dev instance GET follow project request/response format.

- Document in OpenAPI: GET tag options, PATCH/PUT tags (body array and validation rules), and tags + progress in dev instance response; mark auth required.

---
