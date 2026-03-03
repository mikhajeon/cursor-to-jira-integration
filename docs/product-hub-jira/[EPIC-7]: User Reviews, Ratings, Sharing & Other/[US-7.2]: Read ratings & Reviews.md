# [US-7.2]: Read ratings & Reviews

**Jira:** [DPH-485](https://datacomgroup.atlassian.net/browse/DPH-485)


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
| **Name** | [US-7.2]: Read ratings & Reviews |
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
## US-7.2: Read Ratings & Reviews

**User Story:**
As a logged-in user,
I want to read ratings and reviews left by other users on a micro-app,
So that I can make an informed decision about whether the app suits my needs

**Acceptance Criteria:**

1. **Given:** A logged-in user is on a micro-app's detail page
**When:** The user scrolls to the Reviews & Ratings section
**Then:** The following is displayed:

        - Overall star rating (average of all user ratings)
        - Aggregate value lever scores for Time, Cost, and Risk
        - Total number of reviews
        - List of individual user reviews
2. **Given:** There are multiple reviews
**When:** The user views the reviews list
**Then:** Reviews are sorted by most recent by default
3. **Given:** An individual review is displayed
**Then:** It shows: reviewer's name, date submitted, star rating, value lever ratings, and text review (if provided)
4. **Given:** No reviews have been submitted for the app yet
**Then:** A message is displayed: "No reviews yet — be the first to review this app"
5. The overall star rating and value lever scores are visible on the app's catalogue card to support discovery and filtering

---

**Mock-up/Wireframe:** To be provided by UX designer


### Subtasks

#### [DPH-487] [7.2-UX] Tasks

**Jira:** [DPH-487](https://datacomgroup.atlassian.net/browse/DPH-487) · **Status:** To Do

| Field | Value |
|-------|--------|
| **Name** | [7.2-UX] Tasks |
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

- Design overall ratings summary block: average star rating, aggregate value lever scores, total review count
- Design individual review card: reviewer name, date, star rating, value lever ratings, text review
- Design empty state: "No reviews yet — be the first to review this app"
- Design catalogue card update to surface aggregate rating and value lever scores

#### [DPH-490] [7.2-FE] Tasks

**Jira:** [DPH-490](https://datacomgroup.atlassian.net/browse/DPH-490) · **Status:** To Do

| Field | Value |
|-------|--------|
| **Name** | [7.2-FE] Tasks |
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

- Implement overall ratings summary block on app detail page
- Implement reviews list sorted by most recent by default
- Implement individual review card display
- Implement empty state message when no reviews exist
- Update catalogue card component to display overall star rating and value lever scores

#### [DPH-493] [7.2-BE] Tasks

**Jira:** [DPH-493](https://datacomgroup.atlassian.net/browse/DPH-493) · **Status:** To Do

| Field | Value |
|-------|--------|
| **Name** | [7.2-BE] Tasks |
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

- Build GET endpoint to retrieve all reviews for a given app
- Return aggregate star rating, value lever scores, and total review count per app
- Expose aggregate scores on the catalogue/listing API endpoint for filtering and sorting

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
