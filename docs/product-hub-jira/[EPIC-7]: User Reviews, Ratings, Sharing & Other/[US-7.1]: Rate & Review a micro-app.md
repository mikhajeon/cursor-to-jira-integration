# [US-7.1]: Rate & Review a micro-app

**Jira:** [DPH-259](https://datacomgroup.atlassian.net/browse/DPH-259)


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
| **Name** | [US-7.1]: Rate & Review a micro-app |
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
**User Story:**
As a logged-in user,
I want to rate and review a micro-app,
So that I can share my experience and help others make informed decisions

**Acceptance Criteria:**

1. **Given:** A logged-in user is on a micro-app's detail page
**When:** The user scrolls to the Reviews & Ratings section
**Then:** A `Write a Review` button is visible and enabled
2. **Given:** The user clicks `Write a Review`
**When:** The review form opens
**Then:** The form contains:

        - Star rating (1–5 stars)
        - Value lever ratings: Time, Cost, and Risk (each rated 1–5 stars)
        - Text review field (optional)
        - `Submit Review` button
3. **Given:** The user submits their review
**When:** Submission is confirmed
**Then:** The review goes live immediately on the app's detail page and the user's rating is reflected in the app's overall score
4. **Given:** The user has already submitted a review for this app
**When:** The user revisits the Reviews & Ratings section
**Then:** Their existing review is displayed with an `Edit Review` option instead of `Write a Review`
5. A user can only submit one review per micro-app
6. The star rating field is required — the text review field is optional
7. Value lever ratings (Time, Cost, Risk) feed into the app's business value score used for sorting and filtering in the catalogue

---

**Mock-up/Wireframe:** To be provided by UX designer


### Subtasks

#### [DPH-486] [7.1-UX] Tasks

**Jira:** [DPH-486](https://datacomgroup.atlassian.net/browse/DPH-486) · **Status:** To Do

| Field | Value |
|-------|--------|
| **Name** | [7.1-UX] Tasks |
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

- Design Reviews & Ratings section on app detail page
- Design review form: star rating, value lever ratings (Time, Cost, Risk), text field, and Submit button
- Design `Edit Review` state for returning reviewers

#### [DPH-489] [7.1-FE] Tasks

**Jira:** [DPH-489](https://datacomgroup.atlassian.net/browse/DPH-489) · **Status:** To Do

| Field | Value |
|-------|--------|
| **Name** | [7.1-FE] Tasks |
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

- Implement Reviews & Ratings section on app detail page
- Implement review form with star rating input (1–5)
- Implement value lever rating inputs for Time, Cost, and Risk (1–5 each)
- Implement optional text review field
- Implement `Submit Review` button with validation (star rating required)
- Display `Edit Review` option if user has already reviewed the app
- Reflect updated overall rating score on submission

#### [DPH-492] [7.1-BE] Tasks

**Jira:** [DPH-492](https://datacomgroup.atlassian.net/browse/DPH-492) · **Status:** To Do

| Field | Value |
|-------|--------|
| **Name** | [7.1-BE] Tasks |
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

- Create reviews database schema (user, app, star rating, value lever ratings, text, timestamp)
- Enforce one review per user per app at API level
- Build POST endpoint to submit a review
- Build PUT endpoint to edit an existing review
- Calculate and update overall star rating average on submission
- Calculate and update aggregate value lever scores (Time, Cost, Risk) on submission
- Feed value lever scores into app's business value score for catalogue sorting and filtering

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
