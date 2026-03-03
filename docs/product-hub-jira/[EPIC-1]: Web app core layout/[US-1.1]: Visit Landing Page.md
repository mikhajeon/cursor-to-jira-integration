# [US-1.1]: Visit Landing Page

**Jira:** [DPH-189](https://datacomgroup.atlassian.net/browse/DPH-189)


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
| **Name** | [US-1.1]: Visit Landing Page |
| **Description** | See below |
| **Work type** | User Story |
| **Assignee** | — |
| **Assignees** (extra) | — |
| **Priority** | Critical (P1) |
| **Story point estimate** | 8 |
| **Sprint** | DPH Sprint 2, DPH Sprint 1 |
| **Status** | Test Failed |
| **Linked work items** | — |


---
As a user (app-creator or app-user)

I would like to access Product Hub website at [chosen domain name]

So that I am directed to the landing page.

 

### AC

1. User visit [domain name] and they are directed to the website landing page
2. The landing page will have a header section with the following details visible on top of the page

        1. Datacom Logo (works as Home button)
        2. Directory (Catalogue)
        3. My Apps (Products created by user) (new: this page should contain user-creations
        4. Shared with me (Products shared to me)
        5. Guidelines (Submission requirement guide)
        6. My Submissions (Submissions portal / pending) (new: this page should contain brief guidelines)
        7. Sign-up / Log-in
3. The header will be fixed and visible across all the pages on the website
4. All pages on the website will have a footer with the details below displayed at the bottom of the page

        1. Datacom Logo
        2. Site map
        3. Link to key datacom sites (sharepoint, etc)
5. Footer will scroll-with-parent
6. The landing page should be divided into 4 segments aside from the header and footer such that the user can scroll down the page to view segments

        1. 1st segment is the background image and headline
        2. 2nd segment should display the unique selling-point of Product Hub
        3. 3rd segment should display top 3 tools by usage popularity
        4. 4th segment should display top 4 testimonials / reviews

 

Mock-up to be provided by UX designer

---

Old task descrip For Information Only:



Create a dev-ready landing page mockup/prototype that will be handed off to Gavin Yan for immediate development.

**Key Sections to Consider:**

- Hero/value proposition area
- Marketplace preview showing available micro-apps
- Platform benefits or how it works
- Navigation and footer

**Acceptance Criteria:**

- Design is dev-ready for Gavin to start implementation immediately
- Gavin’s developed page should be ready to present by Thursday if possible.
- Adhere to Datacom brand-guideline.md as much as possible.


### Subtasks

#### [DPH-622] [Bug-1.1]: Auto infinite-scroll issue

**Jira:** [DPH-622](https://datacomgroup.atlassian.net/browse/DPH-622) · **Status:** Blocked

| Field | Value |
|-------|--------|
| **Name** | [Bug-1.1]: Auto infinite-scroll issue |
| **Description** | See below |
| **Work type** | Task / Bug |
| **Status** | Blocked |
| **Story point estimate** | — |
| **Priority** | Critical (P1) |
| **Assignee** | Rithvik Sharma |
| **Assignees** (extra) | — |
| **Sprint** | DPH Sprint 2, DPH Sprint 1 |
| **Linked work items** | [DPH-623](https://datacomgroup.atlassian.net/browse/DPH-623) (Resolve) |

**Description:**

US 1.2 AC 4.d
   I know that we initially thought the auto-load more function was useful, but in the case where the user wants to access the footer, they can’t if there are say, 100 apps on the hub, and it keeps on loading.

**Steps to Reproduce**

1. Navigate to... Directory
2. Scroll down to… the bottom of the landing
3. Observe... automatic loading of ‘Recommended for you’ apps

**Expected Result** What *should* happen.

1. Should let the user decide whether or not they load more apps.
2. should let the user reach the footer

**Actual Result** What *actually* happens.

1. user has to spend time continuously scrolling to reach the footer as apps keep loading.

**Impact**

- **Severity:** Critical / **High** / Medium / Low
- **Affected Users:** e.g. **All users** / Admin only
- **Frequency:** **Always** / Intermittent / Rare

**Attachments** Screenshots, screen recordings, error logs, console output.

#### [DPH-549] [1.1-UX] Tasks

**Jira:** [DPH-549](https://datacomgroup.atlassian.net/browse/DPH-549) · **Status:** Done

| Field | Value |
|-------|--------|
| **Name** | [1.1-UX] Tasks |
| **Description** | See below |
| **Work type** | Task / Bug |
| **Status** | Done |
| **Story point estimate** | — |
| **Priority** | Critical (P1) |
| **Assignee** | Ben Schaumkel |
| **Assignees** (extra) | — |
| **Sprint** | DPH Sprint 2, DPH Sprint 1 |
| **Linked work items** | — |

**Description:**

Consolidated from original UX subtasks:

- Define landing page information architecture
- Create Navbar & Footer (components across every page)
- Discover Section
- Featured apps section
- Submission section
- FAQ Section
- Reference & stick to Datacom brand guidelines & Brandhub guidelines
- Assist devs in implementation
- Track issues and problems for potential automation
- Developer handover
- Reference the "AI Products Hub" brief
- Brainstorming & Ideation
- Confirm correct classes, colours and typography styles

#### [DPH-550] [1.1-FE] Tasks

**Jira:** [DPH-550](https://datacomgroup.atlassian.net/browse/DPH-550) · **Status:** Done

| Field | Value |
|-------|--------|
| **Name** | [1.1-FE] Tasks |
| **Description** | See below |
| **Work type** | Task / Bug |
| **Status** | Done |
| **Story point estimate** | — |
| **Priority** | Critical (P1) |
| **Assignee** | Rithvik Sharma |
| **Assignees** (extra) | — |
| **Sprint** | DPH Sprint 2, DPH Sprint 1 |
| **Linked work items** | — |

**Description:**

Consolidated from original FE subtasks:

- Implement Global Header Component — Create the Product Hub global header following Figma. Responsive nav, hamburger, cursor rules, button states, accessibility. AC: design system match, responsive, focus trap, aria-labels, reusable.
- Implement Global Footer Component — Build global footer with link groups, icons, responsive behavior, theme consistency. AC: Figma match, links/icons correct, responsive, reusable.
- Implement Landing Page Structure & Core Sections — Entire landing page (sections 1–10) from Figma. AC: sections match, responsive, backgrounds/transitions, CTA states, content/assets.
- Refactor Into Reusable Feature/Card Components — Refactor static sections into reusable components. AC: reusable components, documented props, design parity, consistent use.
- Design Asset Integration & Visual Polish — Icons, spacing, brand guidelines, fix inconsistencies. AC: icons match, spacing/CSS variables, visual states, pixel-perfect.
- Accessibility & UX Enhancements — Focus management, keyboard, aria, assistive text. AC: focus trap, Escape, aria-labels, keyboard nav, no regressions.
- FAQ Section Redesign — New FAQ layout and interaction. AC: layout/specs, typography/spacing, responsive, clean integration.
- Write Tests for Components & Page — Unit/integration tests for header, footer, sections, components. AC: core interactions, render, validated, CI.
- Code Review, Cleanup & Merge — Cleanup, review comments, code quality, merge. AC: lint/build pass, naming/structure, feedback addressed, merged.

#### [DPH-551] [1.1-BE] Tasks

**Jira:** [DPH-551](https://datacomgroup.atlassian.net/browse/DPH-551) · **Status:** Done

| Field | Value |
|-------|--------|
| **Name** | [1.1-BE] Tasks |
| **Description** | See below |
| **Work type** | Task / Bug |
| **Status** | Done |
| **Story point estimate** | — |
| **Priority** | Critical (P1) |
| **Assignee** | Gavin Yan |
| **Assignees** (extra) | — |
| **Sprint** | DPH Sprint 2, DPH Sprint 1 |
| **Linked work items** | — |

**Description:**

No backend-specific subtasks for this story.

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
Old task descrip For Information Only:



Create a dev-ready landing page mockup/prototype that will be handed off to Gavin Yan for immediate development.

**Key Sections to Consider:**

- Hero/value proposition area
- Marketplace preview showing available micro-apps
- Platform benefits or how it works
- Navigation and footer

**Acceptance Criteria:**

- Design is dev-ready for Gavin to start implementation immediately
- Gavin’s developed page should be ready to present by Thursday if possible.
- Adhere to Datacom brand-guideline.md as much as possible.
