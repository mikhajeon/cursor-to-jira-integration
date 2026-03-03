# [US-1.5]: Visit App Submission Portal

**Jira:** [DPH-249](https://datacomgroup.atlassian.net/browse/DPH-249)


### Epic details

**Jira:** [DPH-181](https://datacomgroup.atlassian.net/browse/DPH-181)

| Field | Value |
|-------|--------|
| **Name** | [EPIC-1]: Web app core layout |
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
| **Name** | [US-1.5]: Visit App Submission Portal |
| **Description** | See below |
| **Work type** | User Story |
| **Assignee** | Gavin Yan |
| **Assignees** (extra) | — |
| **Priority** | Critical (P1) |
| **Story point estimate** | 5 |
| **Sprint** | DPH Sprint 2 |
| **Status** | In Progress |
| **Linked work items** | — |


---
As an **app-creator**,  
I want to access the micro-app submission portal,  
So that I can begin uploading my micro-app.

**Acceptance Criteria:**

1. Clicking `My Submissions` in the header redirects the app-creator to the Submit an App page
2. The page displays three upload format options:

        1. ZIP file upload (drag-on upload)
        2. GitHub repository URL (text input)
        3. Live URL (text iput)
3. A multi-step workflow stepper is visible showing the full submission process:

        1. A progress indicator highlights the current step
4. The `Next` button is disabled until an upload format is selected
5. Selecting an upload format displays the relevant upload interface for that format
6. Brief submission guidelines are visible on the page


### Subtasks

#### [DPH-496] [1.5-UX] Tasks

**Jira:** [DPH-496](https://datacomgroup.atlassian.net/browse/DPH-496) · **Status:** Ready for QA Review

| Field | Value |
|-------|--------|
| **Name** | [1.5-UX] Tasks |
| **Description** | See below |
| **Work type** | Task / Bug |
| **Status** | Ready for QA Review |
| **Story point estimate** | — |
| **Priority** | Critical (P1) |
| **Assignee** | Ben Schaumkel |
| **Assignees** (extra) | — |
| **Sprint** | DPH Sprint 2 |
| **Linked work items** | — |

**Description:**

- [UX] Design Handover (figma + components + dev walkthrough)
- [UX] Final Design (Brand guidelines pass)
- [UX] Design multi-step submission workflow with stepper UI
- [UX] Design upload format selection: ZIP, GitHub URL, Live URL
- [UX] Design `Submit a Product` page & modal

#### [DPH-497] [1.5-FE] Tasks

**Jira:** [DPH-497](https://datacomgroup.atlassian.net/browse/DPH-497) · **Status:** Ready for PR Review

| Field | Value |
|-------|--------|
| **Name** | [1.5-FE] Tasks |
| **Description** | See below |
| **Work type** | Task / Bug |
| **Status** | Ready for PR Review |
| **Story point estimate** | — |
| **Priority** | Critical (P1) |
| **Assignee** | Gavin Yan |
| **Assignees** (extra) | — |
| **Sprint** | DPH Sprint 2 |
| **Linked work items** | — |

**Description:**

1. Navigation / Entry Point

        1. **Tasks**

                1. Add or verify **“Submit a Product” button** in the global header
                2. Implement **client-side routing** so clicking the button navigates to:

                        1. `/submit-product` (or agreed route)
        2. **Notes**

                1. No API calls required
                2. Route should be accessible to app-creators (auth may already exist or be mocked)



1. Submit a Product Page (Base Skeleton)

        1. **Tasks**

                1. Create **Submit a Product page component**
                2. Apply base page layout (header, container, spacing)
                3. Add placeholder content until UX wireframes are delivered
        2. **Deliverables**

                1. Page renders without errors
                2. Page is reachable via direct URL and navigation
2. Multi-Step Workflow Stepper (UI Only)

        1. **Tasks**

                1. Implement a **stepper component** (static for now)
                2. Define submission steps (example):

                        1. Upload Method
                        2. App Details
                        3. Review & Submit
                3. Highlight the **current step**
                4. Allow stepper state to be controlled internally (no backend.
        2. **Notes**

                1. Stepper does **not need full functionality**
                2. No step validation beyond what’s in this story
3. Upload Format Selection

        1. **Tasks**

                1. Display three **upload format options**:

                        1. ZIP file upload
                        2. GitHub repository URL
                        3. Live URL
                2. Implement selection state (radio buttons or selectable cards)

                        1. Only one option can be selected at a time
        2. **UX Expectations**

                1. Selected option visually highlighted
                2. Unselected options remain inactive
4. Conditional Upload Interfaces

        1. **Tasks**

                1. Show upload UI **only after** an option is selected

                        1. Implement placeholder interfaces:

                                1. ZIP: file input (no upload handling)
                                2. GitHub: URL input field
                                3. Live URL: URL input field
                2. **Notes**

                        1. No validation required beyond basic input presence
                        2. No actual file upload or API integration yet
5. Continue/Next button logic

        1. **Tasks**

                1. Render **Continue / Next** button
                2. Button is:

                        1. Disabled by default
                        2. Enabled only when an upload format is selected
                3. On click:

                        1. Advance stepper to next step (mock behavior
        2. **Notes**

                1. No form submission
                2. No persistence required
6. State Management

        1. Manage local UI state for:

                1. Selected upload format
                2. Current step
        2. Decide on state solution:

                1. Component state / hooks
                2. Lightweight store (if project standard requires it)
7. Styling & UX Consistency

        1. Match design system (buttons, inputs, spacing)
        2. Apply disabled states and hover states
        3. Ensure responsive behavior
8. Testing (Lightweight)

        1. Add basic frontend tests (if required):

                - Button navigation works
                - Continue button disabled/enabled correctly
                - Correct upload UI appears when option selected

---
---
---
---
---
---
---
