# [US-5.3]: Admin Manages App Publishing & Visibility

**Jira:** [DPH-253](https://datacomgroup.atlassian.net/browse/DPH-253)


### Epic details

**Jira:** [DPH-245](https://datacomgroup.atlassian.net/browse/DPH-245)

| Field | Value |
|-------|--------|
| **Name** | [EPIC-5]: Product Approval & Admin Dashboard |
| **Description** | See below |
| **Work type** | Epic |
| **Status** | To Do |
| **Assignee** | — |
| **Assignees** (extra) | — |
| **Priority** | Critical (P1) |
| **Linked work items** | — |

**Description:**

_No description._


### Story details

| Field | Value |
|-------|--------|
| **Name** | [US-5.3]: Admin Manages App Publishing & Visibility |
| **Description** | See below |
| **Work type** | User Story |
| **Assignee** | — |
| **Assignees** (extra) | — |
| **Priority** | Medium (P3) |
| **Story point estimate** | — |
| **Sprint** | — |
| **Status** | Draft |
| **Linked work items** | — |


---

As an admin,
I want to manage product Publish/Unpublish and Featured status,
So that I control what's live and how it's promoted, and app-creators can update their apps without losing those settings.



#### What "Published" means

• Product card appears in the catalogue.
• App-users can open the detail modal and see full content.
• Launch app / demo is available.
• Product can be Featured (if admin checks it) and Public (if admin sets it).

#### What "Unpublished" means

• Product card still appears in the catalogue, but the card clearly shows "Unpublished" (e.g. badge or label).
• App-users cannot open the detail modal — it's locked.
• App-users cannot launch the demo — it's locked.
• Featured and Public are not cleared: they are stored and restored automatically when the product is Published again.

---

#### Who can Publish / Unpublish

First time (after admin + security approval): App-creator publishes when ready.
Any time after that: Admin and app-creator can both Publish and Unpublish.

App-creator updating their app: They can Unpublish → make changes → Publish again.
• If they changed code or significant content → they must resubmit for approval before they can Publish.
• If the change is minor (e.g. copy only) → they can Publish again without re-approval.
(Exact definition of "minor" can be agreed with the team.)

---

#### Acceptance criteria

1. Publish / Unpublish control
Each approved product has a Publish / Unpublish control (no Active/Inactive). Available on the admin dashboard and, where relevant, on the app-creator's My Apps / product management.
2. Published behaviour
When Published: product in catalogue, detail modal openable, Launch/demo available.
When Unpublished: product card still in catalogue and clearly labelled "Unpublished"; detail modal and demo not accessible to app-users.
3. Featured
Admin can set a Featured checkbox on the dashboard. Only Published products can be Featured; checkbox disabled when Unpublished. When a product is Unpublished, its Featured value is saved and restored when Published again.
4. Public visibility
Only the admin can set a product's visibility to Public (from the dashboard). App-creator cannot change it: the scope selector on My Apps is disabled with the note "Contact admin to change visibility." When a product is Unpublished, its Public value is saved and restored when Published again.
5. Audit trail
Every Publish, Unpublish, and Featured change is logged with the user's name and timestamp.
6. No notification to app-creator
App-creators are not notified when an admin publishes, unpublishes, or changes Featured for their product.
7. Re-approval after big changes
If the app-creator changed code or significant content while Unpublished, they must resubmit for approval before they can Publish. Minor changes (e.g. copy only) can be Published without re-approval.

        1. Admin approval flow for marketing content
        2. Security approval flow for code changes


### Subtasks

#### [DPH-522] [5.4-UX] Tasks

**Jira:** [DPH-522](https://datacomgroup.atlassian.net/browse/DPH-522) · **Status:** To Do

| Field | Value |
|-------|--------|
| **Name** | [5.4-UX] Tasks |
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

- [UX] Design approval action buttons and rejection feedback modal

#### [DPH-523] [5.4-FE] Tasks

**Jira:** [DPH-523](https://datacomgroup.atlassian.net/browse/DPH-523) · **Status:** To Do

| Field | Value |
|-------|--------|
| **Name** | [5.4-FE] Tasks |
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

- [Dev] [FE] Build rejection feedback form with required fields
- [Dev] [FE] Implement `Approve` and `Reject` buttons

#### [DPH-524] [5.4-BE] Tasks

**Jira:** [DPH-524](https://datacomgroup.atlassian.net/browse/DPH-524) · **Status:** To Do

| Field | Value |
|-------|--------|
| **Name** | [5.4-BE] Tasks |
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

- [Dev] [BE] Allow app-creator to access content generation and tags after rejection
- [Dev] [BE] Send rejection email with feedback and content generation link
- [Dev] [BE] Update product status to 'Rejected' and log rejection history
- [Dev] [BE] Send approval email notification to app-creator
- [Dev] [BE] Update product status to 'Approved' and remove from queue

---
---
---
---
