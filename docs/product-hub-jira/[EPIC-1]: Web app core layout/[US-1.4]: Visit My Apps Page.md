# [US-1.4]: Visit My Apps Page

**Jira:** [DPH-241](https://datacomgroup.atlassian.net/browse/DPH-241)


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
| **Name** | [US-1.4]: Visit My Apps Page |
| **Description** | See below |
| **Work type** | User Story |
| **Assignee** | Gavin Yan |
| **Assignees** (extra) | — |
| **Priority** | Critical (P1) |
| **Story point estimate** | 7 |
| **Sprint** | DPH Sprint 2 |
| **Status** | In Progress |
| **Linked work items** | — |


---
## US-1.4: User Views My Apps Page

As a **user**,  
I want to view my My Apps page,  
So that I can track my uploaded micro-apps.

**Acceptance Criteria:**

1. Clicking `My Apps` in the header redirects the user to the My Apps page
2. The page displays My Uploads, divided into Published and Development in Progress sections
3. Published cards have two buttons: `Make Updates` (redirects to development page) and `Make Requests` (dropdown with: Request disabling/re-activation, Request deletion)
4. Published cards show visibility scope, distinguished by icon:

        - `UAT` — 🧪 flask/test icon (system-controlled)
        - `Datacom Only` — Datacom 'D' logo icon (app-creator can set)
        - `Private` — 🔒 lock icon (app-creator can set)
        - `Public` — 🌐 globe icon (admin can set)
5. Published cards show admin-controlled status: 

        1. `Active`  ; or
        2. `Inactive`
        3. and if set, `Featured`
6. Development in Progress cards have two buttons: `Continue Building` (redirects to App Draft) and `Delete` (triggers delete confirmation modal with red confirm button)
7. Development in Progress cards show lifecycle status: 

        1. `Pending Approval`,
        2. `Pending Security Tests`,
        3. `Ready to Publish`, or
        4. `Vaildation Failed`
8. If there are no products in either section, a message reads: "No apps available"



Refer to App Status Table.


### Subtasks

#### [DPH-586] [1.4-UX] Tasks

**Jira:** [DPH-586](https://datacomgroup.atlassian.net/browse/DPH-586) · **Status:** Ready for QA Review

| Field | Value |
|-------|--------|
| **Name** | [1.4-UX] Tasks |
| **Description** | See below |
| **Work type** | Task / Bug |
| **Status** | Ready for QA Review |
| **Story point estimate** | — |
| **Priority** | Low (P4) |
| **Assignee** | Ben Schaumkel |
| **Assignees** (extra) | — |
| **Sprint** | DPH Sprint 2 |
| **Linked work items** | — |

**Description:**

1. [UX] Dev ready files + developer handsover + walkthrough
2. [UX] Create `My Products` cards
3. [UX] Design `My Products` dashboard

#### [DPH-587] [1.4-FE] Tasks

**Jira:** [DPH-587](https://datacomgroup.atlassian.net/browse/DPH-587) · **Status:** In Progress

| Field | Value |
|-------|--------|
| **Name** | [1.4-FE] Tasks |
| **Description** | See below |
| **Work type** | Task / Bug |
| **Status** | In Progress |
| **Story point estimate** | — |
| **Priority** | Low (P4) |
| **Assignee** | Gavin Yan |
| **Assignees** (extra) | — |
| **Sprint** | DPH Sprint 2 |
| **Linked work items** | — |

**Description:**

1. [DEV FE] API Endpoint Integration
2. [DEV FE] UI States & Visual Polish
3. [DEV FE] Metadata Insights Panel
4. [DEV FE]  Uploads – Development in Progress Section
5. [DEV FE] My Uploads – Published Section
6. [DEV FE] My Favourites Section
7. [DEV FE] My Products Page Layout
8. [DEV FE] Header Navigation to My Products

#### [DPH-588] [1.4-BE] Tasks

**Jira:** [DPH-588](https://datacomgroup.atlassian.net/browse/DPH-588) · **Status:** In Progress

| Field | Value |
|-------|--------|
| **Name** | [1.4-BE] Tasks |
| **Description** | See below |
| **Work type** | Task / Bug |
| **Status** | In Progress |
| **Story point estimate** | — |
| **Priority** | Low (P4) |
| **Assignee** | Gavin Yan |
| **Assignees** (extra) | — |
| **Sprint** | DPH Sprint 2 |
| **Linked work items** | — |

**Description:**

1. [Dev BE] Backend Endpoints (Query + Actions) + Smoke Tests
2. [Dev BE]Mock Data + Local Dev Setup
3. [Dev BE]API Contract + Docs

---
---
---
---
---
---
---
---
