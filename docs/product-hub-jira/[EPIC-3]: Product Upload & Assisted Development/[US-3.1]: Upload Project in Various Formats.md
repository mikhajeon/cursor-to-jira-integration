# [US-3.1]: Upload Project in Various Formats

**Jira:** [DPH-243](https://datacomgroup.atlassian.net/browse/DPH-243)


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
| **Name** | [US-3.1]: Upload Project in Various Formats |
| **Description** | See below |
| **Work type** | User Story |
| **Assignee** | — |
| **Assignees** (extra) | — |
| **Priority** | Critical (P1) |
| **Story point estimate** | 5 |
| **Sprint** | DPH Sprint 2 |
| **Status** | In Progress |
| **Linked work items** | — |


---
**User Story:**  
As an app-creator,  
I want to upload my project in various formats (ZIP, GitHub repo)
So that I can submit my micro-app regardless of how I've built it

**Acceptance Criteria:**

1. **Given:** An app-creator is on the `Submit an App` page  
**Then:** Three upload format options are displayed: ZIP file upload, GitHub repository URL, Live URL
2. **Given:** An app-creator selects ZIP file upload  
**When:** They upload a file  
**Then:** The system validates:

        - File format is .zip
        - File size does not exceed 500MB
        - ZIP contains valid project structure (has files/folders)
3. **Given:** An app-creator selects GitHub repository URL  
**When:** They enter a URL  
**Then:** The system validates:

        - URL format matches GitHub repository pattern (https://github.com/username/repo)
        - Repository is publicly accessible
        - Repository contains code files
4. **Given:** Upload validation passes (1st and 2nd step are done → prompt users on how they would like notification) passing step might take a long time - so system could emails app-creator once upload is complete)

        1. **Then:** Basic metadata is automatically extracted and stored:

                1. Project name (from repo name, ZIP name)
                2. File count and total size
                3. Primary programming language detected
        2. **And**:
5. **Given:** Upload validation fails  
**Then:** Error message is displayed with specific reason and user can retry
6. **Given:** Upload is successful  
**Then:** A Development Instance/App Draft with status Draft is created with 5-day expiry and user proceeds to next step

---

**Mock-up/Wireframe:** To be provided by UX designer


### Subtasks

#### [DPH-590] [3.1-BE] Tasks

**Jira:** [DPH-590](https://datacomgroup.atlassian.net/browse/DPH-590) · **Status:** To Do

| Field | Value |
|-------|--------|
| **Name** | [3.1-BE] Tasks |
| **Description** | See below |
| **Work type** | Task / Bug |
| **Status** | To Do |
| **Story point estimate** | — |
| **Priority** | Critical (P1) |
| **Assignee** | Gavin Yan |
| **Assignees** (extra) | — |
| **Sprint** | DPH Sprint 2 |
| **Linked work items** | — |

**Description:**

1. [BE]ZIP Upload + ZIP Metadata Extraction Endpoint
2. [BE]GitHub URL Metadata Extraction Endpoint
3. [BE]API Contract + Error Mapping

#### [DPH-591] [3.1-UX] Tasks

**Jira:** [DPH-591](https://datacomgroup.atlassian.net/browse/DPH-591) · **Status:** In Progress

| Field | Value |
|-------|--------|
| **Name** | [3.1-UX] Tasks |
| **Description** | See below |
| **Work type** | Task / Bug |
| **Status** | In Progress |
| **Story point estimate** | — |
| **Priority** | Critical (P1) |
| **Assignee** | Ben Schaumkel |
| **Assignees** (extra) | — |
| **Sprint** | DPH Sprint 2 |
| **Linked work items** | — |

**Description:**

1. Design Handover: Figma + Components + Dev Walkthrough
2. Create page view & modal view prototype
3. Create UI during long Inferencing (Time Remaining)
4. Final Design: (Brand Guidelines pass, specs, assets)
5. Iterate on feedback
6. Present to stakeholder
7. Create page view & modal view mockup
8. Create Status  states (Error/Success)
9. Create Validate states  (Error/Success)
10. Create auto upload state (zip being dragged onto the modal) or file explorer
11. Create "Product Upload" modal

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
