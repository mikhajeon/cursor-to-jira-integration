# [US-7.3]: Share a Micro-app

**Jira:** [DPH-260](https://datacomgroup.atlassian.net/browse/DPH-260)


### Epic details

**Jira:** [DPH-247](https://datacomgroup.atlassian.net/browse/DPH-247)

| Field | Value |
|-------|--------|
| **Name** | [EPIC-7]: User Reviews, Ratings, Sharing & Other |
| **Description** | See below |
| **Work type** | Epic |
| **Status** | To Do |
| **Assignee** | — |
| **Assignees** (extra) | — |
| **Priority** | Low (P4) |
| **Linked work items** | — |

**Description:**

_No description._


### Story details

| Field | Value |
|-------|--------|
| **Name** | [US-7.3]: Share a Micro-app |
| **Description** | See below |
| **Work type** | User Story |
| **Assignee** | — |
| **Assignees** (extra) | — |
| **Priority** | Low (P4) |
| **Story point estimate** | — |
| **Sprint** | — |
| **Status** | Draft |
| **Linked work items** | — |


---
## US-7.3: Share a Micro-app

**User Story:**
As a logged-in user,
I want to share a micro-app with my colleagues,
So that I can recommend useful tools to the people I work with

**Acceptance Criteria:**

1. **Given:** A logged-in user is on a micro-app's catalogue card or detail page
**When:** The user clicks the share icon
**Then:** A share modal opens with two options:

        - `Quick Share` — search and select staff to notify
        - `Email Share` — share via a generated email link
2. **Given:** The user selects `Quick Share`
**When:** The share modal opens
**Then:** A staff search bar is displayed where the user can search by name
3. **Given:** The user types a name in the staff search bar
**When:** Results appear
**Then:** Matching staff members are listed and the user can select one or more recipients
4. **Given:** The user selects recipients and clicks `Share`
**When:** The action is confirmed
**Then:** Each selected staff member receives an email containing the micro-app name, a brief description, and a link to the app's detail page
5. **Given:** The user selects `Email Share`
**When:** The option is clicked
**Then:** The user's default email client opens with a pre-populated email containing the micro-app name and a link to its detail page
6. A share confirmation message is displayed after a successful Quick Share
7. The share icon is visible on both the catalogue card and the app detail page


### Subtasks

#### [DPH-488] [7.3-UX] Tasks

**Jira:** [DPH-488](https://datacomgroup.atlassian.net/browse/DPH-488) · **Status:** To Do

| Field | Value |
|-------|--------|
| **Name** | [7.3-UX] Tasks |
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

- Design share icon placement on catalogue card and app detail page
- Design share modal with Quick Share and Email Share tabs
- Design staff search bar and recipient selection UI within Quick Share
- Design share confirmation message

#### [DPH-491] [7.3-FE] Tasks

**Jira:** [DPH-491](https://datacomgroup.atlassian.net/browse/DPH-491) · **Status:** To Do

| Field | Value |
|-------|--------|
| **Name** | [7.3-FE] Tasks |
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

- Implement share icon on catalogue card and app detail page
- Implement share modal with Quick Share and Email Share options
- Implement staff search bar with live search results by name
- Implement multi-select recipient selection in Quick Share
- Display share confirmation message after successful Quick Share
- Implement Email Share option that opens pre-populated mailto link with app name and detail page URL

#### [DPH-494] [7.3-BE] Tasks

**Jira:** [DPH-494](https://datacomgroup.atlassian.net/browse/DPH-494) · **Status:** To Do

| Field | Value |
|-------|--------|
| **Name** | [7.3-BE] Tasks |
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

- Build staff search API endpoint querying Entra ID by name
- Build POST endpoint to trigger Quick Share email to selected recipients
- Generate pre-populated email content: app name, brief description, and detail page link
- Send Quick Share notification email to each selected recipient

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
