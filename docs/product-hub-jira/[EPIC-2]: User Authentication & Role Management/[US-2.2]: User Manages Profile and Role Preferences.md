# [US-2.2]: User Manages Profile and Role Preferences

**Jira:** [DPH-238](https://datacomgroup.atlassian.net/browse/DPH-238)


### Epic details

**Jira:** [DPH-236](https://datacomgroup.atlassian.net/browse/DPH-236)

| Field | Value |
|-------|--------|
| **Name** | [EPIC-2]: User Authentication & Role Management |
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
| **Name** | [US-2.2]: User Manages Profile and Role Preferences |
| **Description** | See below |
| **Work type** | User Story |
| **Assignee** | — |
| **Assignees** (extra) | — |
| **Priority** | Critical (P1) |
| **Story point estimate** | 7 |
| **Sprint** | DPH Sprint 2 |
| **Status** | In Progress |
| **Linked work items** | — |


---
As a **user**,  
I want to set up and manage my profile and role,  
So that I receive relevant app recommendations and control my notification preferences.

**Acceptance Criteria:**

1. Clicking the profile photo in the header navigates to the Profile Settings page
2. Display name and profile photo pulled from Entra ID are shown as read-only
3. On first-time login, a role selection modal appears with the user's Entra ID role pre-selected:

        1. Confirming redirects the user to the Catalogue page with a "Welcome to Product Hub" notification
        2. since there are heaps of roles in datacom entra ID, the system must filter these down to typical roles (ex. Business related, Software Developer, etc)
4. On the Profile Settings dropdown, the user can update their role via a dropdown and save:

        1. Saving updates the role in the database and displays a success notification
        2. The updated role is used for app recommendations across the Hub
5. Notification preference toggles are available for:

        1. Admin approval updates
        2. Security test approval updates
        3. Development suggestions
6. The Profile Settings page is responsive on mobile, tablet, and desktop
7. Role editable inside the My Apps as a filter category with a [save]


### Subtasks

#### [DPH-540] [2.2-UX] Tasks

**Jira:** [DPH-540](https://datacomgroup.atlassian.net/browse/DPH-540) · **Status:** To Do

| Field | Value |
|-------|--------|
| **Name** | [2.2-UX] Tasks |
| **Description** | See below |
| **Work type** | Task / Bug |
| **Status** | To Do |
| **Story point estimate** | — |
| **Priority** | Medium (P3) |
| **Assignee** | Ben Schaumkel |
| **Assignees** (extra) | — |
| **Sprint** | DPH Sprint 2 |
| **Linked work items** | — |

**Description:**

_No description._

#### [DPH-541] [2.2-FE] Tasks

**Jira:** [DPH-541](https://datacomgroup.atlassian.net/browse/DPH-541) · **Status:** To Do

| Field | Value |
|-------|--------|
| **Name** | [2.2-FE] Tasks |
| **Description** | See below |
| **Work type** | Task / Bug |
| **Status** | To Do |
| **Story point estimate** | — |
| **Priority** | Medium (P3) |
| **Assignee** | Gavin Yan |
| **Assignees** (extra) | — |
| **Sprint** | DPH Sprint 2 |
| **Linked work items** | — |

**Description:**

# Front‑End Tasks – US 2.2: Profile & Role Management

## User Story

As a user,
 I want to set up and manage my profile and role,
 So that I receive relevant app recommendations and control my notification preferences.

---

## Front‑End Task Breakdown

### 1. Profile Access Entry Point

- Add click handler to **profile photo in the header**
- On click:

        - Open **Profile Settings page** (or panel, per UX)
- Ensure navigation works from all authenticated pages

---

### 2. Profile Settings Page Layout

- Create **Profile Settings page** structure
- Sections include:

        - User information
        - Role management
        - Notification preferences
- Ensure page supports scrolling and clean section separation

---

### 3. Display User Information (Read‑Only)

- Display the following fields (read‑only):

        - Display name (from Entra ID)
        - Profile photo (from Entra ID)
- Pull data from existing auth/user state
- Handle missing profile photo gracefully (fallback avatar)

---

### 4. First‑Time Login Role Selection Modal

- On first‑time login:

        - Display **Role Selection modal**
- Modal behaviour:

        - Role dropdown with Entra ID role pre‑selected
        - Confirm button enabled only when role is selected
- On confirm:

        - Save role to mocked profile state
        - Redirect user to **Catalogue page**
        - Display “Welcome to Product Hub” notification

---

### 5. Global Role State (Jotai)

- Create shared Jotai atom for:

        - User role
        - Role update status
- Ensure role state is accessible across:

        - Catalogue
        - Recommendations
        - My Apps
- Allow role to be updated and persisted in mock storage

---

### 6. Update Role from Profile Settings

- Add role dropdown to **Profile Settings**
- Allow user to change role
- Add **Save** button
- On save:

        - Update role in mocked profile storage
        - Update role atom
        - Display success notification

---

### 7. Role Usage for App Recommendations (Mocked)

- Use role state to:

        - Influence app recommendations (mock logic)
        - Filter or rank apps based on role
- Ensure role changes immediately affect recommendation UI

---

### 8. Notification Preferences UI

- Add notification preference toggles for:

        - Admin approval updates
        - Security test approval updates
        - Development suggestions
- Display current preferences from mocked profile data
- Allow toggles to be changed locally

---

### 9. Save Notification Preferences (Mocked)

- Add Save action for notification preferences
- On save:

        - Update mocked profile storage
        - Display success notification
- Ensure preferences persist across page reloads (mocked)

---

### 10. Role Editable in My Apps (Filter Category)

- Add role dropdown to **My Apps** as a filter category
- Allow role selection and update
- Include explicit **[Save]** action
- Sync role updates with global role state

---

### 11. Responsive Behaviour

- Ensure Profile Settings page is responsive:

        - Mobile
        - Tablet
        - Desktop
- Verify:

        - Dropdowns usable on touch
        - Toggles accessible on small screens
        - Modal layouts scale correctly

---

### 12. Accessibility & UX

- Ensure:

        - Keyboard navigation for dropdowns and toggles
        - ARIA labels for form controls
        - Clear focus states
- Provide inline validation and disabled states where applicable

---

### 13. Mocked Profile Persistence (Temporary)

- Store profile data locally (mock DB):

        - Role
        - Notification preferences
- Populate profile atoms from mock data on app load
- Ensure structure aligns with expected backend schema

---

### 14. UI Testing with Mock Data

- Verify:

        - First‑time login role modal appears correctly
        - Role updates persist and reflect across app
        - Notifications show on successful save
- Test role updates from:

        - Profile Settings
        - My Apps filter

---

### 15. Replace Mock Profile with Backend Integration (Final Task)

- Remove mocked profile storage
- Integrate backend endpoints for:

        - Fetching user profile
        - Updating user role
        - Updating notification preferences
- Update profile and role atoms from backend responses
- Validate:

        - First‑time login → Role Selection → Catalogue
        - Role updates reflected across recommendations and filters
- Final regression testing

---

## Notes / Assumptions

- Entra ID provides display name, profile photo, and initial role
- Jotai is the source of truth for profile, role, and preferences
- Profile and preference data are mocked until backend is ready
- Role impacts recommendations via mocked logic initially
- UX wireframes will be applied once provided

#### [DPH-542] [2.2-BE] User profile, role and notification preferences — API and persistence

**Jira:** [DPH-542](https://datacomgroup.atlassian.net/browse/DPH-542) · **Status:** To Do

| Field | Value |
|-------|--------|
| **Name** | [2.2-BE] User profile, role and notification preferences — API and persistence |
| **Description** | See below |
| **Work type** | Task / Bug |
| **Status** | To Do |
| **Story point estimate** | — |
| **Priority** | Medium (P3) |
| **Assignee** | Gavin Yan |
| **Assignees** (extra) | — |
| **Sprint** | DPH Sprint 2 |
| **Linked work items** | — |

**Description:**

### BE-2.2.1 — Current user profile (Entra read-only)

**Description**

1. Expose API for current user profile (e.g. GET /api/v1/users/me), auth required.

1. Return display name and profile photo URL from Entra ID (or resolve via token/Graph and return).

1. Response fields read-only; align with header display name and photo.

---

### BE-2.2.2 — First-time login and role confirmation

**Description**

1. Persist “has completed first-time role selection” (e.g. hasCompletedOnboarding or equivalent on user store).

1. Provide way for frontend to set this when user confirms role (or combine with role save in BE-2.2.3).

1. Optionally expose “is first-time login” so frontend can show role selection modal.

---

### BE-2.2.3 — Role save and update

**Description**

1. Expose API to update current user’s role (e.g. PATCH /api/v1/users/me with role in body), auth required.

1. Validate role against allowed enum and persist (user profile/preferences or user_roles).

1. Return 200 and updated payload for success toast; stored role used by recommendations/filters.

---

### BE-2.2.4 — Notification preferences read/write

**Description**

1. Support three notification toggles in user model: admin approval updates, security test approval updates, development suggestions (boolean or enum).

1. Expose GET current preferences and PATCH to update (e.g. under users/me or /users/me/notification-preferences).

1. Persist for use by notification/push logic later.

---

### BE-2.2.5 — User profile and preferences data model

**Description**

1. Design or extend user store (table or Cosmos container) for role, hasCompletedOnboarding, notification preferences, optional Entra cache.

1. Use userId (e.g. Entra sub/oid) as unique key; align with existing auth.

1. Ensure GET/PATCH users/me and recommendation/filter logic use same source of truth.

---

### BE-2.2.6 — Contract and OpenAPI

**Description**

1. users/me (and any separate preferences path) follow project response and error format.

1. Document GET/PATCH /users/me request/response (profile, role, optional notification preferences) in OpenAPI; mark auth required.

#### [DPH-573] [UX] Welcome Modal: First-time role selection, filtered Entra roles, confirm to catalogue + welcome notification

**Jira:** [DPH-573](https://datacomgroup.atlassian.net/browse/DPH-573) · **Status:** To Do

| Field | Value |
|-------|--------|
| **Name** | [UX] Welcome Modal: First-time role selection, filtered Entra roles, confirm to catalogue + welcome notification |
| **Description** | See below |
| **Work type** | Task / Bug |
| **Status** | To Do |
| **Story point estimate** | — |
| **Priority** | Low (P4) |
| **Assignee** | Ben Schaumkel |
| **Assignees** (extra) | — |
| **Sprint** | DPH Sprint 2 |
| **Linked work items** | — |

**Description:**

_No description._

#### [DPH-574] [UX] Profile Settings Page + Header Dropdown + My Apps Role Filter

**Jira:** [DPH-574](https://datacomgroup.atlassian.net/browse/DPH-574) · **Status:** Ready for QA Review

| Field | Value |
|-------|--------|
| **Name** | [UX] Profile Settings Page + Header Dropdown + My Apps Role Filter |
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

_No description._

#### [DPH-575] [UX] Feedback from devs

**Jira:** [DPH-575](https://datacomgroup.atlassian.net/browse/DPH-575) · **Status:** To Do

| Field | Value |
|-------|--------|
| **Name** | [UX] Feedback from devs |
| **Description** | See below |
| **Work type** | Task / Bug |
| **Status** | To Do |
| **Story point estimate** | — |
| **Priority** | Low (P4) |
| **Assignee** | Ben Schaumkel |
| **Assignees** (extra) | — |
| **Sprint** | DPH Sprint 2 |
| **Linked work items** | — |

**Description:**

_No description._

#### [DPH-576] [UX] Final Design + Dev Handover

**Jira:** [DPH-576](https://datacomgroup.atlassian.net/browse/DPH-576) · **Status:** To Do

| Field | Value |
|-------|--------|
| **Name** | [UX] Final Design + Dev Handover |
| **Description** | See below |
| **Work type** | Task / Bug |
| **Status** | To Do |
| **Story point estimate** | — |
| **Priority** | Low (P4) |
| **Assignee** | Ben Schaumkel |
| **Assignees** (extra) | — |
| **Sprint** | DPH Sprint 2 |
| **Linked work items** | — |

**Description:**

_No description._

---
---

## Front‑End Task Breakdown

### 1. Profile Access Entry Point

- Add click handler to **profile photo in the header**
- On click:

        - Open **Profile Settings page** (or panel, per UX)
- Ensure navigation works from all authenticated pages

---

### 2. Profile Settings Page Layout

- Create **Profile Settings page** structure
- Sections include:

        - User information
        - Role management
        - Notification preferences
- Ensure page supports scrolling and clean section separation

---

### 3. Display User Information (Read‑Only)

- Display the following fields (read‑only):

        - Display name (from Entra ID)
        - Profile photo (from Entra ID)
- Pull data from existing auth/user state
- Handle missing profile photo gracefully (fallback avatar)

---

### 4. First‑Time Login Role Selection Modal

- On first‑time login:

        - Display **Role Selection modal**
- Modal behaviour:

        - Role dropdown with Entra ID role pre‑selected
        - Confirm button enabled only when role is selected
- On confirm:

        - Save role to mocked profile state
        - Redirect user to **Catalogue page**
        - Display “Welcome to Product Hub” notification

---

### 5. Global Role State (Jotai)

- Create shared Jotai atom for:

        - User role
        - Role update status
- Ensure role state is accessible across:

        - Catalogue
        - Recommendations
        - My Apps
- Allow role to be updated and persisted in mock storage

---

### 6. Update Role from Profile Settings

- Add role dropdown to **Profile Settings**
- Allow user to change role
- Add **Save** button
- On save:

        - Update role in mocked profile storage
        - Update role atom
        - Display success notification

---

### 7. Role Usage for App Recommendations (Mocked)

- Use role state to:

        - Influence app recommendations (mock logic)
        - Filter or rank apps based on role
- Ensure role changes immediately affect recommendation UI

---

### 8. Notification Preferences UI

- Add notification preference toggles for:

        - Admin approval updates
        - Security test approval updates
        - Development suggestions
- Display current preferences from mocked profile data
- Allow toggles to be changed locally

---

### 9. Save Notification Preferences (Mocked)

- Add Save action for notification preferences
- On save:

        - Update mocked profile storage
        - Display success notification
- Ensure preferences persist across page reloads (mocked)

---

### 10. Role Editable in My Apps (Filter Category)

- Add role dropdown to **My Apps** as a filter category
- Allow role selection and update
- Include explicit **[Save]** action
- Sync role updates with global role state

---

### 11. Responsive Behaviour

- Ensure Profile Settings page is responsive:

        - Mobile
        - Tablet
        - Desktop
- Verify:

        - Dropdowns usable on touch
        - Toggles accessible on small screens
        - Modal layouts scale correctly

---

### 12. Accessibility & UX

- Ensure:

        - Keyboard navigation for dropdowns and toggles
        - ARIA labels for form controls
        - Clear focus states
- Provide inline validation and disabled states where applicable

---

### 13. Mocked Profile Persistence (Temporary)

- Store profile data locally (mock DB):

        - Role
        - Notification preferences
- Populate profile atoms from mock data on app load
- Ensure structure aligns with expected backend schema

---

### 14. UI Testing with Mock Data

- Verify:

        - First‑time login role modal appears correctly
        - Role updates persist and reflect across app
        - Notifications show on successful save
- Test role updates from:

        - Profile Settings
        - My Apps filter

---

### 15. Replace Mock Profile with Backend Integration (Final Task)

- Remove mocked profile storage
- Integrate backend endpoints for:

        - Fetching user profile
        - Updating user role
        - Updating notification preferences
- Update profile and role atoms from backend responses
- Validate:

        - First‑time login → Role Selection → Catalogue
        - Role updates reflected across recommendations and filters
- Final regression testing

---

## Notes / Assumptions

- Entra ID provides display name, profile photo, and initial role
- Jotai is the source of truth for profile, role, and preferences
- Profile and preference data are mocked until backend is ready
- Role impacts recommendations via mocked logic initially
- UX wireframes will be applied once provided

#### [DPH-542] [2.2-BE] User profile, role and notification preferences — API and persistence

**Jira:** [DPH-542](https://datacomgroup.atlassian.net/browse/DPH-542) · **Status:** To Do

| Field | Value |
|-------|--------|
| **Name** | [2.2-BE] User profile, role and notification preferences — API and persistence |
| **Description** | See below |
| **Work type** | Task / Bug |
| **Status** | To Do |
| **Story point estimate** | — |
| **Priority** | Medium (P3) |
| **Assignee** | Gavin Yan |
| **Assignees** (extra) | — |
| **Sprint** | DPH Sprint 2 |
| **Linked work items** | — |

**Description:**

### BE-2.2.1 — Current user profile (Entra read-only)

**Description**

1. Expose API for current user profile (e.g. GET /api/v1/users/me), auth required.

1. Return display name and profile photo URL from Entra ID (or resolve via token/Graph and return).

1. Response fields read-only; align with header display name and photo.

---

### BE-2.2.2 — First-time login and role confirmation

**Description**

1. Persist “has completed first-time role selection” (e.g. hasCompletedOnboarding or equivalent on user store).

1. Provide way for frontend to set this when user confirms role (or combine with role save in BE-2.2.3).

1. Optionally expose “is first-time login” so frontend can show role selection modal.

---

### BE-2.2.3 — Role save and update

**Description**

1. Expose API to update current user’s role (e.g. PATCH /api/v1/users/me with role in body), auth required.

1. Validate role against allowed enum and persist (user profile/preferences or user_roles).

1. Return 200 and updated payload for success toast; stored role used by recommendations/filters.

---

### BE-2.2.4 — Notification preferences read/write

**Description**

1. Support three notification toggles in user model: admin approval updates, security test approval updates, development suggestions (boolean or enum).

1. Expose GET current preferences and PATCH to update (e.g. under users/me or /users/me/notification-preferences).

1. Persist for use by notification/push logic later.

---

### BE-2.2.5 — User profile and preferences data model

**Description**

1. Design or extend user store (table or Cosmos container) for role, hasCompletedOnboarding, notification preferences, optional Entra cache.

1. Use userId (e.g. Entra sub/oid) as unique key; align with existing auth.

1. Ensure GET/PATCH users/me and recommendation/filter logic use same source of truth.

---

### BE-2.2.6 — Contract and OpenAPI

**Description**

1. users/me (and any separate preferences path) follow project response and error format.

1. Document GET/PATCH /users/me request/response (profile, role, optional notification preferences) in OpenAPI; mark auth required.

#### [DPH-573] [UX] Welcome Modal: First-time role selection, filtered Entra roles, confirm to catalogue + welcome notification

**Jira:** [DPH-573](https://datacomgroup.atlassian.net/browse/DPH-573) · **Status:** To Do

| Field | Value |
|-------|--------|
| **Name** | [UX] Welcome Modal: First-time role selection, filtered Entra roles, confirm to catalogue + welcome notification |
| **Description** | See below |
| **Work type** | Task / Bug |
| **Status** | To Do |
| **Story point estimate** | — |
| **Priority** | Low (P4) |
| **Assignee** | Ben Schaumkel |
| **Assignees** (extra) | — |
| **Sprint** | DPH Sprint 2 |
| **Linked work items** | — |

**Description:**

_No description._

#### [DPH-574] [UX] Profile Settings Page + Header Dropdown + My Apps Role Filter

**Jira:** [DPH-574](https://datacomgroup.atlassian.net/browse/DPH-574) · **Status:** Ready for QA Review

| Field | Value |
|-------|--------|
| **Name** | [UX] Profile Settings Page + Header Dropdown + My Apps Role Filter |
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

_No description._

#### [DPH-575] [UX] Feedback from devs

**Jira:** [DPH-575](https://datacomgroup.atlassian.net/browse/DPH-575) · **Status:** To Do

| Field | Value |
|-------|--------|
| **Name** | [UX] Feedback from devs |
| **Description** | See below |
| **Work type** | Task / Bug |
| **Status** | To Do |
| **Story point estimate** | — |
| **Priority** | Low (P4) |
| **Assignee** | Ben Schaumkel |
| **Assignees** (extra) | — |
| **Sprint** | DPH Sprint 2 |
| **Linked work items** | — |

**Description:**

_No description._

#### [DPH-576] [UX] Final Design + Dev Handover

**Jira:** [DPH-576](https://datacomgroup.atlassian.net/browse/DPH-576) · **Status:** To Do

| Field | Value |
|-------|--------|
| **Name** | [UX] Final Design + Dev Handover |
| **Description** | See below |
| **Work type** | Task / Bug |
| **Status** | To Do |
| **Story point estimate** | — |
| **Priority** | Low (P4) |
| **Assignee** | Ben Schaumkel |
| **Assignees** (extra) | — |
| **Sprint** | DPH Sprint 2 |
| **Linked work items** | — |

**Description:**

_No description._

---
---

## Front‑End Task Breakdown

### 1. Profile Access Entry Point

- Add click handler to **profile photo in the header**
- On click:

        - Open **Profile Settings page** (or panel, per UX)
- Ensure navigation works from all authenticated pages

---

### 2. Profile Settings Page Layout

- Create **Profile Settings page** structure
- Sections include:

        - User information
        - Role management
        - Notification preferences
- Ensure page supports scrolling and clean section separation

---

### 3. Display User Information (Read‑Only)

- Display the following fields (read‑only):

        - Display name (from Entra ID)
        - Profile photo (from Entra ID)
- Pull data from existing auth/user state
- Handle missing profile photo gracefully (fallback avatar)

---

### 4. First‑Time Login Role Selection Modal

- On first‑time login:

        - Display **Role Selection modal**
- Modal behaviour:

        - Role dropdown with Entra ID role pre‑selected
        - Confirm button enabled only when role is selected
- On confirm:

        - Save role to mocked profile state
        - Redirect user to **Catalogue page**
        - Display “Welcome to Product Hub” notification

---

### 5. Global Role State (Jotai)

- Create shared Jotai atom for:

        - User role
        - Role update status
- Ensure role state is accessible across:

        - Catalogue
        - Recommendations
        - My Apps
- Allow role to be updated and persisted in mock storage

---

### 6. Update Role from Profile Settings

- Add role dropdown to **Profile Settings**
- Allow user to change role
- Add **Save** button
- On save:

        - Update role in mocked profile storage
        - Update role atom
        - Display success notification

---

### 7. Role Usage for App Recommendations (Mocked)

- Use role state to:

        - Influence app recommendations (mock logic)
        - Filter or rank apps based on role
- Ensure role changes immediately affect recommendation UI

---

### 8. Notification Preferences UI

- Add notification preference toggles for:

        - Admin approval updates
        - Security test approval updates
        - Development suggestions
- Display current preferences from mocked profile data
- Allow toggles to be changed locally

---

### 9. Save Notification Preferences (Mocked)

- Add Save action for notification preferences
- On save:

        - Update mocked profile storage
        - Display success notification
- Ensure preferences persist across page reloads (mocked)

---

### 10. Role Editable in My Apps (Filter Category)

- Add role dropdown to **My Apps** as a filter category
- Allow role selection and update
- Include explicit **[Save]** action
- Sync role updates with global role state

---

### 11. Responsive Behaviour

- Ensure Profile Settings page is responsive:

        - Mobile
        - Tablet
        - Desktop
- Verify:

        - Dropdowns usable on touch
        - Toggles accessible on small screens
        - Modal layouts scale correctly

---

### 12. Accessibility & UX

- Ensure:

        - Keyboard navigation for dropdowns and toggles
        - ARIA labels for form controls
        - Clear focus states
- Provide inline validation and disabled states where applicable

---

### 13. Mocked Profile Persistence (Temporary)

- Store profile data locally (mock DB):

        - Role
        - Notification preferences
- Populate profile atoms from mock data on app load
- Ensure structure aligns with expected backend schema

---

### 14. UI Testing with Mock Data

- Verify:

        - First‑time login role modal appears correctly
        - Role updates persist and reflect across app
        - Notifications show on successful save
- Test role updates from:

        - Profile Settings
        - My Apps filter

---

### 15. Replace Mock Profile with Backend Integration (Final Task)

- Remove mocked profile storage
- Integrate backend endpoints for:

        - Fetching user profile
        - Updating user role
        - Updating notification preferences
- Update profile and role atoms from backend responses
- Validate:

        - First‑time login → Role Selection → Catalogue
        - Role updates reflected across recommendations and filters
- Final regression testing

---

## Notes / Assumptions

- Entra ID provides display name, profile photo, and initial role
- Jotai is the source of truth for profile, role, and preferences
- Profile and preference data are mocked until backend is ready
- Role impacts recommendations via mocked logic initially
- UX wireframes will be applied once provided

#### [DPH-542] [2.2-BE] User profile, role and notification preferences — API and persistence

**Jira:** [DPH-542](https://datacomgroup.atlassian.net/browse/DPH-542) · **Status:** To Do

| Field | Value |
|-------|--------|
| **Name** | [2.2-BE] User profile, role and notification preferences — API and persistence |
| **Description** | See below |
| **Work type** | Task / Bug |
| **Status** | To Do |
| **Story point estimate** | — |
| **Priority** | Medium (P3) |
| **Assignee** | Gavin Yan |
| **Assignees** (extra) | — |
| **Sprint** | DPH Sprint 2 |
| **Linked work items** | — |

**Description:**

### BE-2.2.1 — Current user profile (Entra read-only)

**Description**

1. Expose API for current user profile (e.g. GET /api/v1/users/me), auth required.

1. Return display name and profile photo URL from Entra ID (or resolve via token/Graph and return).

1. Response fields read-only; align with header display name and photo.

---

### BE-2.2.2 — First-time login and role confirmation

**Description**

1. Persist “has completed first-time role selection” (e.g. hasCompletedOnboarding or equivalent on user store).

1. Provide way for frontend to set this when user confirms role (or combine with role save in BE-2.2.3).

1. Optionally expose “is first-time login” so frontend can show role selection modal.

---

### BE-2.2.3 — Role save and update

**Description**

1. Expose API to update current user’s role (e.g. PATCH /api/v1/users/me with role in body), auth required.

1. Validate role against allowed enum and persist (user profile/preferences or user_roles).

1. Return 200 and updated payload for success toast; stored role used by recommendations/filters.

---

### BE-2.2.4 — Notification preferences read/write

**Description**

1. Support three notification toggles in user model: admin approval updates, security test approval updates, development suggestions (boolean or enum).

1. Expose GET current preferences and PATCH to update (e.g. under users/me or /users/me/notification-preferences).

1. Persist for use by notification/push logic later.

---

### BE-2.2.5 — User profile and preferences data model

**Description**

1. Design or extend user store (table or Cosmos container) for role, hasCompletedOnboarding, notification preferences, optional Entra cache.

1. Use userId (e.g. Entra sub/oid) as unique key; align with existing auth.

1. Ensure GET/PATCH users/me and recommendation/filter logic use same source of truth.

---

### BE-2.2.6 — Contract and OpenAPI

**Description**

1. users/me (and any separate preferences path) follow project response and error format.

1. Document GET/PATCH /users/me request/response (profile, role, optional notification preferences) in OpenAPI; mark auth required.

#### [DPH-573] [UX] Welcome Modal: First-time role selection, filtered Entra roles, confirm to catalogue + welcome notification

**Jira:** [DPH-573](https://datacomgroup.atlassian.net/browse/DPH-573) · **Status:** To Do

| Field | Value |
|-------|--------|
| **Name** | [UX] Welcome Modal: First-time role selection, filtered Entra roles, confirm to catalogue + welcome notification |
| **Description** | See below |
| **Work type** | Task / Bug |
| **Status** | To Do |
| **Story point estimate** | — |
| **Priority** | Low (P4) |
| **Assignee** | Ben Schaumkel |
| **Assignees** (extra) | — |
| **Sprint** | DPH Sprint 2 |
| **Linked work items** | — |

**Description:**

_No description._

#### [DPH-574] [UX] Profile Settings Page + Header Dropdown + My Apps Role Filter

**Jira:** [DPH-574](https://datacomgroup.atlassian.net/browse/DPH-574) · **Status:** Ready for QA Review

| Field | Value |
|-------|--------|
| **Name** | [UX] Profile Settings Page + Header Dropdown + My Apps Role Filter |
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

_No description._

#### [DPH-575] [UX] Feedback from devs

**Jira:** [DPH-575](https://datacomgroup.atlassian.net/browse/DPH-575) · **Status:** To Do

| Field | Value |
|-------|--------|
| **Name** | [UX] Feedback from devs |
| **Description** | See below |
| **Work type** | Task / Bug |
| **Status** | To Do |
| **Story point estimate** | — |
| **Priority** | Low (P4) |
| **Assignee** | Ben Schaumkel |
| **Assignees** (extra) | — |
| **Sprint** | DPH Sprint 2 |
| **Linked work items** | — |

**Description:**

_No description._

#### [DPH-576] [UX] Final Design + Dev Handover

**Jira:** [DPH-576](https://datacomgroup.atlassian.net/browse/DPH-576) · **Status:** To Do

| Field | Value |
|-------|--------|
| **Name** | [UX] Final Design + Dev Handover |
| **Description** | See below |
| **Work type** | Task / Bug |
| **Status** | To Do |
| **Story point estimate** | — |
| **Priority** | Low (P4) |
| **Assignee** | Ben Schaumkel |
| **Assignees** (extra) | — |
| **Sprint** | DPH Sprint 2 |
| **Linked work items** | — |

**Description:**

_No description._

---
---

## Front‑End Task Breakdown

### 1. Profile Access Entry Point

- Add click handler to **profile photo in the header**
- On click:

        - Open **Profile Settings page** (or panel, per UX)
- Ensure navigation works from all authenticated pages

---

### 2. Profile Settings Page Layout

- Create **Profile Settings page** structure
- Sections include:

        - User information
        - Role management
        - Notification preferences
- Ensure page supports scrolling and clean section separation

---

### 3. Display User Information (Read‑Only)

- Display the following fields (read‑only):

        - Display name (from Entra ID)
        - Profile photo (from Entra ID)
- Pull data from existing auth/user state
- Handle missing profile photo gracefully (fallback avatar)

---

### 4. First‑Time Login Role Selection Modal

- On first‑time login:

        - Display **Role Selection modal**
- Modal behaviour:

        - Role dropdown with Entra ID role pre‑selected
        - Confirm button enabled only when role is selected
- On confirm:

        - Save role to mocked profile state
        - Redirect user to **Catalogue page**
        - Display “Welcome to Product Hub” notification

---

### 5. Global Role State (Jotai)

- Create shared Jotai atom for:

        - User role
        - Role update status
- Ensure role state is accessible across:

        - Catalogue
        - Recommendations
        - My Apps
- Allow role to be updated and persisted in mock storage

---

### 6. Update Role from Profile Settings

- Add role dropdown to **Profile Settings**
- Allow user to change role
- Add **Save** button
- On save:

        - Update role in mocked profile storage
        - Update role atom
        - Display success notification

---

### 7. Role Usage for App Recommendations (Mocked)

- Use role state to:

        - Influence app recommendations (mock logic)
        - Filter or rank apps based on role
- Ensure role changes immediately affect recommendation UI

---

### 8. Notification Preferences UI

- Add notification preference toggles for:

        - Admin approval updates
        - Security test approval updates
        - Development suggestions
- Display current preferences from mocked profile data
- Allow toggles to be changed locally

---

### 9. Save Notification Preferences (Mocked)

- Add Save action for notification preferences
- On save:

        - Update mocked profile storage
        - Display success notification
- Ensure preferences persist across page reloads (mocked)

---

### 10. Role Editable in My Apps (Filter Category)

- Add role dropdown to **My Apps** as a filter category
- Allow role selection and update
- Include explicit **[Save]** action
- Sync role updates with global role state

---

### 11. Responsive Behaviour

- Ensure Profile Settings page is responsive:

        - Mobile
        - Tablet
        - Desktop
- Verify:

        - Dropdowns usable on touch
        - Toggles accessible on small screens
        - Modal layouts scale correctly

---

### 12. Accessibility & UX

- Ensure:

        - Keyboard navigation for dropdowns and toggles
        - ARIA labels for form controls
        - Clear focus states
- Provide inline validation and disabled states where applicable

---

### 13. Mocked Profile Persistence (Temporary)

- Store profile data locally (mock DB):

        - Role
        - Notification preferences
- Populate profile atoms from mock data on app load
- Ensure structure aligns with expected backend schema

---

### 14. UI Testing with Mock Data

- Verify:

        - First‑time login role modal appears correctly
        - Role updates persist and reflect across app
        - Notifications show on successful save
- Test role updates from:

        - Profile Settings
        - My Apps filter

---

### 15. Replace Mock Profile with Backend Integration (Final Task)

- Remove mocked profile storage
- Integrate backend endpoints for:

        - Fetching user profile
        - Updating user role
        - Updating notification preferences
- Update profile and role atoms from backend responses
- Validate:

        - First‑time login → Role Selection → Catalogue
        - Role updates reflected across recommendations and filters
- Final regression testing

---

## Notes / Assumptions

- Entra ID provides display name, profile photo, and initial role
- Jotai is the source of truth for profile, role, and preferences
- Profile and preference data are mocked until backend is ready
- Role impacts recommendations via mocked logic initially
- UX wireframes will be applied once provided

#### [DPH-542] [2.2-BE] User profile, role and notification preferences — API and persistence

**Jira:** [DPH-542](https://datacomgroup.atlassian.net/browse/DPH-542) · **Status:** To Do

| Field | Value |
|-------|--------|
| **Name** | [2.2-BE] User profile, role and notification preferences — API and persistence |
| **Description** | See below |
| **Work type** | Task / Bug |
| **Status** | To Do |
| **Story point estimate** | — |
| **Priority** | Medium (P3) |
| **Assignee** | Gavin Yan |
| **Assignees** (extra) | — |
| **Sprint** | DPH Sprint 2 |
| **Linked work items** | — |

**Description:**

### BE-2.2.1 — Current user profile (Entra read-only)

**Description**

1. Expose API for current user profile (e.g. GET /api/v1/users/me), auth required.

1. Return display name and profile photo URL from Entra ID (or resolve via token/Graph and return).

1. Response fields read-only; align with header display name and photo.

---

### BE-2.2.2 — First-time login and role confirmation

**Description**

1. Persist “has completed first-time role selection” (e.g. hasCompletedOnboarding or equivalent on user store).

1. Provide way for frontend to set this when user confirms role (or combine with role save in BE-2.2.3).

1. Optionally expose “is first-time login” so frontend can show role selection modal.

---

### BE-2.2.3 — Role save and update

**Description**

1. Expose API to update current user’s role (e.g. PATCH /api/v1/users/me with role in body), auth required.

1. Validate role against allowed enum and persist (user profile/preferences or user_roles).

1. Return 200 and updated payload for success toast; stored role used by recommendations/filters.

---

### BE-2.2.4 — Notification preferences read/write

**Description**

1. Support three notification toggles in user model: admin approval updates, security test approval updates, development suggestions (boolean or enum).

1. Expose GET current preferences and PATCH to update (e.g. under users/me or /users/me/notification-preferences).

1. Persist for use by notification/push logic later.

---

### BE-2.2.5 — User profile and preferences data model

**Description**

1. Design or extend user store (table or Cosmos container) for role, hasCompletedOnboarding, notification preferences, optional Entra cache.

1. Use userId (e.g. Entra sub/oid) as unique key; align with existing auth.

1. Ensure GET/PATCH users/me and recommendation/filter logic use same source of truth.

---

### BE-2.2.6 — Contract and OpenAPI

**Description**

1. users/me (and any separate preferences path) follow project response and error format.

1. Document GET/PATCH /users/me request/response (profile, role, optional notification preferences) in OpenAPI; mark auth required.

#### [DPH-573] [UX] Welcome Modal: First-time role selection, filtered Entra roles, confirm to catalogue + welcome notification

**Jira:** [DPH-573](https://datacomgroup.atlassian.net/browse/DPH-573) · **Status:** To Do

| Field | Value |
|-------|--------|
| **Name** | [UX] Welcome Modal: First-time role selection, filtered Entra roles, confirm to catalogue + welcome notification |
| **Description** | See below |
| **Work type** | Task / Bug |
| **Status** | To Do |
| **Story point estimate** | — |
| **Priority** | Low (P4) |
| **Assignee** | Ben Schaumkel |
| **Assignees** (extra) | — |
| **Sprint** | DPH Sprint 2 |
| **Linked work items** | — |

**Description:**

_No description._

#### [DPH-574] [UX] Profile Settings Page + Header Dropdown + My Apps Role Filter

**Jira:** [DPH-574](https://datacomgroup.atlassian.net/browse/DPH-574) · **Status:** To Do

| Field | Value |
|-------|--------|
| **Name** | [UX] Profile Settings Page + Header Dropdown + My Apps Role Filter |
| **Description** | See below |
| **Work type** | Task / Bug |
| **Status** | To Do |
| **Story point estimate** | — |
| **Priority** | Low (P4) |
| **Assignee** | Ben Schaumkel |
| **Assignees** (extra) | — |
| **Sprint** | DPH Sprint 2 |
| **Linked work items** | — |

**Description:**

_No description._

#### [DPH-575] [UX] Feedback from devs

**Jira:** [DPH-575](https://datacomgroup.atlassian.net/browse/DPH-575) · **Status:** To Do

| Field | Value |
|-------|--------|
| **Name** | [UX] Feedback from devs |
| **Description** | See below |
| **Work type** | Task / Bug |
| **Status** | To Do |
| **Story point estimate** | — |
| **Priority** | Low (P4) |
| **Assignee** | Ben Schaumkel |
| **Assignees** (extra) | — |
| **Sprint** | DPH Sprint 2 |
| **Linked work items** | — |

**Description:**

_No description._

#### [DPH-576] [UX] Final Design + Dev Handover

**Jira:** [DPH-576](https://datacomgroup.atlassian.net/browse/DPH-576) · **Status:** To Do

| Field | Value |
|-------|--------|
| **Name** | [UX] Final Design + Dev Handover |
| **Description** | See below |
| **Work type** | Task / Bug |
| **Status** | To Do |
| **Story point estimate** | — |
| **Priority** | Low (P4) |
| **Assignee** | Ben Schaumkel |
| **Assignees** (extra) | — |
| **Sprint** | DPH Sprint 2 |
| **Linked work items** | — |

**Description:**

_No description._

---
---

## Front‑End Task Breakdown

### 1. Profile Access Entry Point

- Add click handler to **profile photo in the header**
- On click:

        - Open **Profile Settings page** (or panel, per UX)
- Ensure navigation works from all authenticated pages

---

### 2. Profile Settings Page Layout

- Create **Profile Settings page** structure
- Sections include:

        - User information
        - Role management
        - Notification preferences
- Ensure page supports scrolling and clean section separation

---

### 3. Display User Information (Read‑Only)

- Display the following fields (read‑only):

        - Display name (from Entra ID)
        - Profile photo (from Entra ID)
- Pull data from existing auth/user state
- Handle missing profile photo gracefully (fallback avatar)

---

### 4. First‑Time Login Role Selection Modal

- On first‑time login:

        - Display **Role Selection modal**
- Modal behaviour:

        - Role dropdown with Entra ID role pre‑selected
        - Confirm button enabled only when role is selected
- On confirm:

        - Save role to mocked profile state
        - Redirect user to **Catalogue page**
        - Display “Welcome to Product Hub” notification

---

### 5. Global Role State (Jotai)

- Create shared Jotai atom for:

        - User role
        - Role update status
- Ensure role state is accessible across:

        - Catalogue
        - Recommendations
        - My Apps
- Allow role to be updated and persisted in mock storage

---

### 6. Update Role from Profile Settings

- Add role dropdown to **Profile Settings**
- Allow user to change role
- Add **Save** button
- On save:

        - Update role in mocked profile storage
        - Update role atom
        - Display success notification

---

### 7. Role Usage for App Recommendations (Mocked)

- Use role state to:

        - Influence app recommendations (mock logic)
        - Filter or rank apps based on role
- Ensure role changes immediately affect recommendation UI

---

### 8. Notification Preferences UI

- Add notification preference toggles for:

        - Admin approval updates
        - Security test approval updates
        - Development suggestions
- Display current preferences from mocked profile data
- Allow toggles to be changed locally

---

### 9. Save Notification Preferences (Mocked)

- Add Save action for notification preferences
- On save:

        - Update mocked profile storage
        - Display success notification
- Ensure preferences persist across page reloads (mocked)

---

### 10. Role Editable in My Apps (Filter Category)

- Add role dropdown to **My Apps** as a filter category
- Allow role selection and update
- Include explicit **[Save]** action
- Sync role updates with global role state

---

### 11. Responsive Behaviour

- Ensure Profile Settings page is responsive:

        - Mobile
        - Tablet
        - Desktop
- Verify:

        - Dropdowns usable on touch
        - Toggles accessible on small screens
        - Modal layouts scale correctly

---

### 12. Accessibility & UX

- Ensure:

        - Keyboard navigation for dropdowns and toggles
        - ARIA labels for form controls
        - Clear focus states
- Provide inline validation and disabled states where applicable

---

### 13. Mocked Profile Persistence (Temporary)

- Store profile data locally (mock DB):

        - Role
        - Notification preferences
- Populate profile atoms from mock data on app load
- Ensure structure aligns with expected backend schema

---

### 14. UI Testing with Mock Data

- Verify:

        - First‑time login role modal appears correctly
        - Role updates persist and reflect across app
        - Notifications show on successful save
- Test role updates from:

        - Profile Settings
        - My Apps filter

---

### 15. Replace Mock Profile with Backend Integration (Final Task)

- Remove mocked profile storage
- Integrate backend endpoints for:

        - Fetching user profile
        - Updating user role
        - Updating notification preferences
- Update profile and role atoms from backend responses
- Validate:

        - First‑time login → Role Selection → Catalogue
        - Role updates reflected across recommendations and filters
- Final regression testing

---

## Notes / Assumptions

- Entra ID provides display name, profile photo, and initial role
- Jotai is the source of truth for profile, role, and preferences
- Profile and preference data are mocked until backend is ready
- Role impacts recommendations via mocked logic initially
- UX wireframes will be applied once provided

#### [DPH-542] [2.2-BE] User profile, role and notification preferences — API and persistence

**Jira:** [DPH-542](https://datacomgroup.atlassian.net/browse/DPH-542) · **Status:** To Do

| Field | Value |
|-------|--------|
| **Name** | [2.2-BE] User profile, role and notification preferences — API and persistence |
| **Description** | See below |
| **Work type** | Subtask |
| **Status** | To Do |
| **Story point estimate** | — |
| **Priority** | Medium (P3) |
| **Assignee** | Gavin Yan |
| **Assignees** (extra) | — |
| **Sprint** | DPH Sprint 2 |
| **Linked work items** | — |

**Description:**

### BE-2.2.1 — Current user profile (Entra read-only)

**Description**

1. Expose API for current user profile (e.g. GET /api/v1/users/me), auth required.

1. Return display name and profile photo URL from Entra ID (or resolve via token/Graph and return).

1. Response fields read-only; align with header display name and photo.

---

### BE-2.2.2 — First-time login and role confirmation

**Description**

1. Persist “has completed first-time role selection” (e.g. hasCompletedOnboarding or equivalent on user store).

1. Provide way for frontend to set this when user confirms role (or combine with role save in BE-2.2.3).

1. Optionally expose “is first-time login” so frontend can show role selection modal.

---

### BE-2.2.3 — Role save and update

**Description**

1. Expose API to update current user’s role (e.g. PATCH /api/v1/users/me with role in body), auth required.

1. Validate role against allowed enum and persist (user profile/preferences or user_roles).

1. Return 200 and updated payload for success toast; stored role used by recommendations/filters.

---

### BE-2.2.4 — Notification preferences read/write

**Description**

1. Support three notification toggles in user model: admin approval updates, security test approval updates, development suggestions (boolean or enum).

1. Expose GET current preferences and PATCH to update (e.g. under users/me or /users/me/notification-preferences).

1. Persist for use by notification/push logic later.

---

### BE-2.2.5 — User profile and preferences data model

**Description**

1. Design or extend user store (table or Cosmos container) for role, hasCompletedOnboarding, notification preferences, optional Entra cache.

1. Use userId (e.g. Entra sub/oid) as unique key; align with existing auth.

1. Ensure GET/PATCH users/me and recommendation/filter logic use same source of truth.

---

### BE-2.2.6 — Contract and OpenAPI

**Description**

1. users/me (and any separate preferences path) follow project response and error format.

1. Document GET/PATCH /users/me request/response (profile, role, optional notification preferences) in OpenAPI; mark auth required.

#### [DPH-573] [UX] Welcome Modal: First-time role selection, filtered Entra roles, confirm to catalogue + welcome notification

**Jira:** [DPH-573](https://datacomgroup.atlassian.net/browse/DPH-573) · **Status:** To Do

| Field | Value |
|-------|--------|
| **Name** | [UX] Welcome Modal: First-time role selection, filtered Entra roles, confirm to catalogue + welcome notification |
| **Description** | See below |
| **Work type** | Subtask |
| **Status** | To Do |
| **Story point estimate** | — |
| **Priority** | Low (P4) |
| **Assignee** | Ben Schaumkel |
| **Assignees** (extra) | — |
| **Sprint** | DPH Sprint 2 |
| **Linked work items** | — |

**Description:**

_No description._

#### [DPH-574] [UX] Profile Settings Page + Header Dropdown + My Apps Role Filter

**Jira:** [DPH-574](https://datacomgroup.atlassian.net/browse/DPH-574) · **Status:** To Do

| Field | Value |
|-------|--------|
| **Name** | [UX] Profile Settings Page + Header Dropdown + My Apps Role Filter |
| **Description** | See below |
| **Work type** | Subtask |
| **Status** | To Do |
| **Story point estimate** | — |
| **Priority** | Low (P4) |
| **Assignee** | Ben Schaumkel |
| **Assignees** (extra) | — |
| **Sprint** | DPH Sprint 2 |
| **Linked work items** | — |

**Description:**

_No description._

#### [DPH-575] [UX] Feedback from devs

**Jira:** [DPH-575](https://datacomgroup.atlassian.net/browse/DPH-575) · **Status:** To Do

| Field | Value |
|-------|--------|
| **Name** | [UX] Feedback from devs |
| **Description** | See below |
| **Work type** | Subtask |
| **Status** | To Do |
| **Story point estimate** | — |
| **Priority** | Low (P4) |
| **Assignee** | Ben Schaumkel |
| **Assignees** (extra) | — |
| **Sprint** | DPH Sprint 2 |
| **Linked work items** | — |

**Description:**

_No description._

#### [DPH-576] [UX] Final Design + Dev Handover

**Jira:** [DPH-576](https://datacomgroup.atlassian.net/browse/DPH-576) · **Status:** To Do

| Field | Value |
|-------|--------|
| **Name** | [UX] Final Design + Dev Handover |
| **Description** | See below |
| **Work type** | Subtask |
| **Status** | To Do |
| **Story point estimate** | — |
| **Priority** | Low (P4) |
| **Assignee** | Ben Schaumkel |
| **Assignees** (extra) | — |
| **Sprint** | DPH Sprint 2 |
| **Linked work items** | — |

**Description:**

_No description._

---
---

## Front‑End Task Breakdown

### 1. Profile Access Entry Point

- Add click handler to **profile photo in the header**
- On click:

        - Open **Profile Settings page** (or panel, per UX)
- Ensure navigation works from all authenticated pages

---

### 2. Profile Settings Page Layout

- Create **Profile Settings page** structure
- Sections include:

        - User information
        - Role management
        - Notification preferences
- Ensure page supports scrolling and clean section separation

---

### 3. Display User Information (Read‑Only)

- Display the following fields (read‑only):

        - Display name (from Entra ID)
        - Profile photo (from Entra ID)
- Pull data from existing auth/user state
- Handle missing profile photo gracefully (fallback avatar)

---

### 4. First‑Time Login Role Selection Modal

- On first‑time login:

        - Display **Role Selection modal**
- Modal behaviour:

        - Role dropdown with Entra ID role pre‑selected
        - Confirm button enabled only when role is selected
- On confirm:

        - Save role to mocked profile state
        - Redirect user to **Catalogue page**
        - Display “Welcome to Product Hub” notification

---

### 5. Global Role State (Jotai)

- Create shared Jotai atom for:

        - User role
        - Role update status
- Ensure role state is accessible across:

        - Catalogue
        - Recommendations
        - My Apps
- Allow role to be updated and persisted in mock storage

---

### 6. Update Role from Profile Settings

- Add role dropdown to **Profile Settings**
- Allow user to change role
- Add **Save** button
- On save:

        - Update role in mocked profile storage
        - Update role atom
        - Display success notification

---

### 7. Role Usage for App Recommendations (Mocked)

- Use role state to:

        - Influence app recommendations (mock logic)
        - Filter or rank apps based on role
- Ensure role changes immediately affect recommendation UI

---

### 8. Notification Preferences UI

- Add notification preference toggles for:

        - Admin approval updates
        - Security test approval updates
        - Development suggestions
- Display current preferences from mocked profile data
- Allow toggles to be changed locally

---

### 9. Save Notification Preferences (Mocked)

- Add Save action for notification preferences
- On save:

        - Update mocked profile storage
        - Display success notification
- Ensure preferences persist across page reloads (mocked)

---

### 10. Role Editable in My Apps (Filter Category)

- Add role dropdown to **My Apps** as a filter category
- Allow role selection and update
- Include explicit **[Save]** action
- Sync role updates with global role state

---

### 11. Responsive Behaviour

- Ensure Profile Settings page is responsive:

        - Mobile
        - Tablet
        - Desktop
- Verify:

        - Dropdowns usable on touch
        - Toggles accessible on small screens
        - Modal layouts scale correctly

---

### 12. Accessibility & UX

- Ensure:

        - Keyboard navigation for dropdowns and toggles
        - ARIA labels for form controls
        - Clear focus states
- Provide inline validation and disabled states where applicable

---

### 13. Mocked Profile Persistence (Temporary)

- Store profile data locally (mock DB):

        - Role
        - Notification preferences
- Populate profile atoms from mock data on app load
- Ensure structure aligns with expected backend schema

---

### 14. UI Testing with Mock Data

- Verify:

        - First‑time login role modal appears correctly
        - Role updates persist and reflect across app
        - Notifications show on successful save
- Test role updates from:

        - Profile Settings
        - My Apps filter

---

### 15. Replace Mock Profile with Backend Integration (Final Task)

- Remove mocked profile storage
- Integrate backend endpoints for:

        - Fetching user profile
        - Updating user role
        - Updating notification preferences
- Update profile and role atoms from backend responses
- Validate:

        - First‑time login → Role Selection → Catalogue
        - Role updates reflected across recommendations and filters
- Final regression testing

---

## Notes / Assumptions

- Entra ID provides display name, profile photo, and initial role
- Jotai is the source of truth for profile, role, and preferences
- Profile and preference data are mocked until backend is ready
- Role impacts recommendations via mocked logic initially
- UX wireframes will be applied once provided

#### [DPH-542] [2.2-BE] User profile, role and notification preferences — API and persistence

**Jira:** [DPH-542](https://datacomgroup.atlassian.net/browse/DPH-542) · **Status:** To Do

| Field | Value |
|-------|--------|
| **Name** | [2.2-BE] User profile, role and notification preferences — API and persistence |
| **Description** | See below |
| **Work type** | Subtask |
| **Status** | To Do |
| **Story point estimate** | — |
| **Priority** | Medium (P3) |
| **Assignee** | Gavin Yan |
| **Assignees** (extra) | — |
| **Sprint** | DPH Sprint 2 |
| **Linked work items** | — |

**Description:**

### BE-2.2.1 — Current user profile (Entra read-only)

**Description**

1. Expose API for current user profile (e.g. GET /api/v1/users/me), auth required.

1. Return display name and profile photo URL from Entra ID (or resolve via token/Graph and return).

1. Response fields read-only; align with header display name and photo.

---

### BE-2.2.2 — First-time login and role confirmation

**Description**

1. Persist “has completed first-time role selection” (e.g. hasCompletedOnboarding or equivalent on user store).

1. Provide way for frontend to set this when user confirms role (or combine with role save in BE-2.2.3).

1. Optionally expose “is first-time login” so frontend can show role selection modal.

---

### BE-2.2.3 — Role save and update

**Description**

1. Expose API to update current user’s role (e.g. PATCH /api/v1/users/me with role in body), auth required.

1. Validate role against allowed enum and persist (user profile/preferences or user_roles).

1. Return 200 and updated payload for success toast; stored role used by recommendations/filters.

---

### BE-2.2.4 — Notification preferences read/write

**Description**

1. Support three notification toggles in user model: admin approval updates, security test approval updates, development suggestions (boolean or enum).

1. Expose GET current preferences and PATCH to update (e.g. under users/me or /users/me/notification-preferences).

1. Persist for use by notification/push logic later.

---

### BE-2.2.5 — User profile and preferences data model

**Description**

1. Design or extend user store (table or Cosmos container) for role, hasCompletedOnboarding, notification preferences, optional Entra cache.

1. Use userId (e.g. Entra sub/oid) as unique key; align with existing auth.

1. Ensure GET/PATCH users/me and recommendation/filter logic use same source of truth.

---

### BE-2.2.6 — Contract and OpenAPI

**Description**

1. users/me (and any separate preferences path) follow project response and error format.

1. Document GET/PATCH /users/me request/response (profile, role, optional notification preferences) in OpenAPI; mark auth required.

#### [DPH-573] [UX] Welcome Modal: First-time role selection, filtered Entra roles, confirm to catalogue + welcome notification

**Jira:** [DPH-573](https://datacomgroup.atlassian.net/browse/DPH-573) · **Status:** To Do

| Field | Value |
|-------|--------|
| **Name** | [UX] Welcome Modal: First-time role selection, filtered Entra roles, confirm to catalogue + welcome notification |
| **Description** | See below |
| **Work type** | Subtask |
| **Status** | To Do |
| **Story point estimate** | — |
| **Priority** | Low (P4) |
| **Assignee** | Ben Schaumkel |
| **Assignees** (extra) | — |
| **Sprint** | DPH Sprint 2 |
| **Linked work items** | — |

**Description:**

_No description._

#### [DPH-574] [UX] Profile Settings Page + Header Dropdown + My Apps Role Filter

**Jira:** [DPH-574](https://datacomgroup.atlassian.net/browse/DPH-574) · **Status:** To Do

| Field | Value |
|-------|--------|
| **Name** | [UX] Profile Settings Page + Header Dropdown + My Apps Role Filter |
| **Description** | See below |
| **Work type** | Subtask |
| **Status** | To Do |
| **Story point estimate** | — |
| **Priority** | Low (P4) |
| **Assignee** | Ben Schaumkel |
| **Assignees** (extra) | — |
| **Sprint** | DPH Sprint 2 |
| **Linked work items** | — |

**Description:**

_No description._

#### [DPH-575] [UX] Feedback from devs

**Jira:** [DPH-575](https://datacomgroup.atlassian.net/browse/DPH-575) · **Status:** To Do

| Field | Value |
|-------|--------|
| **Name** | [UX] Feedback from devs |
| **Description** | See below |
| **Work type** | Subtask |
| **Status** | To Do |
| **Story point estimate** | — |
| **Priority** | Low (P4) |
| **Assignee** | Ben Schaumkel |
| **Assignees** (extra) | — |
| **Sprint** | DPH Sprint 2 |
| **Linked work items** | — |

**Description:**

_No description._

#### [DPH-576] [UX] Final Design + Dev Handover

**Jira:** [DPH-576](https://datacomgroup.atlassian.net/browse/DPH-576) · **Status:** To Do

| Field | Value |
|-------|--------|
| **Name** | [UX] Final Design + Dev Handover |
| **Description** | See below |
| **Work type** | Subtask |
| **Status** | To Do |
| **Story point estimate** | — |
| **Priority** | Low (P4) |
| **Assignee** | Ben Schaumkel |
| **Assignees** (extra) | — |
| **Sprint** | DPH Sprint 2 |
| **Linked work items** | — |

**Description:**

_No description._

---
---

## Front‑End Task Breakdown

### 1. Profile Access Entry Point

- Add click handler to **profile photo in the header**
- On click:

        - Open **Profile Settings page** (or panel, per UX)
- Ensure navigation works from all authenticated pages

---

### 2. Profile Settings Page Layout

- Create **Profile Settings page** structure
- Sections include:

        - User information
        - Role management
        - Notification preferences
- Ensure page supports scrolling and clean section separation

---

### 3. Display User Information (Read‑Only)

- Display the following fields (read‑only):

        - Display name (from Entra ID)
        - Profile photo (from Entra ID)
- Pull data from existing auth/user state
- Handle missing profile photo gracefully (fallback avatar)

---

### 4. First‑Time Login Role Selection Modal

- On first‑time login:

        - Display **Role Selection modal**
- Modal behaviour:

        - Role dropdown with Entra ID role pre‑selected
        - Confirm button enabled only when role is selected
- On confirm:

        - Save role to mocked profile state
        - Redirect user to **Catalogue page**
        - Display “Welcome to Product Hub” notification

---

### 5. Global Role State (Jotai)

- Create shared Jotai atom for:

        - User role
        - Role update status
- Ensure role state is accessible across:

        - Catalogue
        - Recommendations
        - My Apps
- Allow role to be updated and persisted in mock storage

---

### 6. Update Role from Profile Settings

- Add role dropdown to **Profile Settings**
- Allow user to change role
- Add **Save** button
- On save:

        - Update role in mocked profile storage
        - Update role atom
        - Display success notification

---

### 7. Role Usage for App Recommendations (Mocked)

- Use role state to:

        - Influence app recommendations (mock logic)
        - Filter or rank apps based on role
- Ensure role changes immediately affect recommendation UI

---

### 8. Notification Preferences UI

- Add notification preference toggles for:

        - Admin approval updates
        - Security test approval updates
        - Development suggestions
- Display current preferences from mocked profile data
- Allow toggles to be changed locally

---

### 9. Save Notification Preferences (Mocked)

- Add Save action for notification preferences
- On save:

        - Update mocked profile storage
        - Display success notification
- Ensure preferences persist across page reloads (mocked)

---

### 10. Role Editable in My Apps (Filter Category)

- Add role dropdown to **My Apps** as a filter category
- Allow role selection and update
- Include explicit **[Save]** action
- Sync role updates with global role state

---

### 11. Responsive Behaviour

- Ensure Profile Settings page is responsive:

        - Mobile
        - Tablet
        - Desktop
- Verify:

        - Dropdowns usable on touch
        - Toggles accessible on small screens
        - Modal layouts scale correctly

---

### 12. Accessibility & UX

- Ensure:

        - Keyboard navigation for dropdowns and toggles
        - ARIA labels for form controls
        - Clear focus states
- Provide inline validation and disabled states where applicable

---

### 13. Mocked Profile Persistence (Temporary)

- Store profile data locally (mock DB):

        - Role
        - Notification preferences
- Populate profile atoms from mock data on app load
- Ensure structure aligns with expected backend schema

---

### 14. UI Testing with Mock Data

- Verify:

        - First‑time login role modal appears correctly
        - Role updates persist and reflect across app
        - Notifications show on successful save
- Test role updates from:

        - Profile Settings
        - My Apps filter

---

### 15. Replace Mock Profile with Backend Integration (Final Task)

- Remove mocked profile storage
- Integrate backend endpoints for:

        - Fetching user profile
        - Updating user role
        - Updating notification preferences
- Update profile and role atoms from backend responses
- Validate:

        - First‑time login → Role Selection → Catalogue
        - Role updates reflected across recommendations and filters
- Final regression testing

---

## Notes / Assumptions

- Entra ID provides display name, profile photo, and initial role
- Jotai is the source of truth for profile, role, and preferences
- Profile and preference data are mocked until backend is ready
- Role impacts recommendations via mocked logic initially
- UX wireframes will be applied once provided

#### [DPH-542] [2.2-BE] User profile, role and notification preferences — API and persistence

**Jira:** [DPH-542](https://datacomgroup.atlassian.net/browse/DPH-542) · **Status:** To Do

| Field | Value |
|-------|--------|
| **Name** | [2.2-BE] User profile, role and notification preferences — API and persistence |
| **Description** | See below |
| **Work type** | Subtask |
| **Status** | To Do |
| **Story point estimate** | 3 |
| **Priority** | Medium (P3) |
| **Assignee** | Gavin Yan |
| **Assignees** (extra) | — |
| **Sprint** | DPH Sprint 2 |
| **Linked work items** | — |

**Description:**

### BE-2.2.1 — Current user profile (Entra read-only)

**Description**

1. Expose API for current user profile (e.g. GET /api/v1/users/me), auth required.

1. Return display name and profile photo URL from Entra ID (or resolve via token/Graph and return).

1. Response fields read-only; align with header display name and photo.

---

### BE-2.2.2 — First-time login and role confirmation

**Description**

1. Persist “has completed first-time role selection” (e.g. hasCompletedOnboarding or equivalent on user store).

1. Provide way for frontend to set this when user confirms role (or combine with role save in BE-2.2.3).

1. Optionally expose “is first-time login” so frontend can show role selection modal.

---

### BE-2.2.3 — Role save and update

**Description**

1. Expose API to update current user’s role (e.g. PATCH /api/v1/users/me with role in body), auth required.

1. Validate role against allowed enum and persist (user profile/preferences or user_roles).

1. Return 200 and updated payload for success toast; stored role used by recommendations/filters.

---

### BE-2.2.4 — Notification preferences read/write

**Description**

1. Support three notification toggles in user model: admin approval updates, security test approval updates, development suggestions (boolean or enum).

1. Expose GET current preferences and PATCH to update (e.g. under users/me or /users/me/notification-preferences).

1. Persist for use by notification/push logic later.

---

### BE-2.2.5 — User profile and preferences data model

**Description**

1. Design or extend user store (table or Cosmos container) for role, hasCompletedOnboarding, notification preferences, optional Entra cache.

1. Use userId (e.g. Entra sub/oid) as unique key; align with existing auth.

1. Ensure GET/PATCH users/me and recommendation/filter logic use same source of truth.

---

### BE-2.2.6 — Contract and OpenAPI

**Description**

1. users/me (and any separate preferences path) follow project response and error format.

1. Document GET/PATCH /users/me request/response (profile, role, optional notification preferences) in OpenAPI; mark auth required.

#### [DPH-573] [UX] Welcome Modal: First-time role selection, filtered Entra roles, confirm to catalogue + welcome notification

**Jira:** [DPH-573](https://datacomgroup.atlassian.net/browse/DPH-573) · **Status:** To Do

| Field | Value |
|-------|--------|
| **Name** | [UX] Welcome Modal: First-time role selection, filtered Entra roles, confirm to catalogue + welcome notification |
| **Description** | See below |
| **Work type** | Subtask |
| **Status** | To Do |
| **Story point estimate** | — |
| **Priority** | Low (P4) |
| **Assignee** | Ben Schaumkel |
| **Assignees** (extra) | — |
| **Sprint** | DPH Sprint 2 |
| **Linked work items** | — |

**Description:**

_No description._

#### [DPH-574] [UX] Profile Settings Page + Header Dropdown + My Apps Role Filter

**Jira:** [DPH-574](https://datacomgroup.atlassian.net/browse/DPH-574) · **Status:** To Do

| Field | Value |
|-------|--------|
| **Name** | [UX] Profile Settings Page + Header Dropdown + My Apps Role Filter |
| **Description** | See below |
| **Work type** | Subtask |
| **Status** | To Do |
| **Story point estimate** | — |
| **Priority** | Low (P4) |
| **Assignee** | Ben Schaumkel |
| **Assignees** (extra) | — |
| **Sprint** | DPH Sprint 2 |
| **Linked work items** | — |

**Description:**

_No description._

#### [DPH-575] [UX] Feedback from devs

**Jira:** [DPH-575](https://datacomgroup.atlassian.net/browse/DPH-575) · **Status:** To Do

| Field | Value |
|-------|--------|
| **Name** | [UX] Feedback from devs |
| **Description** | See below |
| **Work type** | Subtask |
| **Status** | To Do |
| **Story point estimate** | — |
| **Priority** | Low (P4) |
| **Assignee** | Ben Schaumkel |
| **Assignees** (extra) | — |
| **Sprint** | DPH Sprint 2 |
| **Linked work items** | — |

**Description:**

_No description._

#### [DPH-576] [UX] Final Design + Dev Handover

**Jira:** [DPH-576](https://datacomgroup.atlassian.net/browse/DPH-576) · **Status:** To Do

| Field | Value |
|-------|--------|
| **Name** | [UX] Final Design + Dev Handover |
| **Description** | See below |
| **Work type** | Subtask |
| **Status** | To Do |
| **Story point estimate** | — |
| **Priority** | Low (P4) |
| **Assignee** | Ben Schaumkel |
| **Assignees** (extra) | — |
| **Sprint** | DPH Sprint 2 |
| **Linked work items** | — |

**Description:**

_No description._

---
---

## Front‑End Task Breakdown

### 1. Profile Access Entry Point

- Add click handler to **profile photo in the header**
- On click:

        - Open **Profile Settings page** (or panel, per UX)
- Ensure navigation works from all authenticated pages

---

### 2. Profile Settings Page Layout

- Create **Profile Settings page** structure
- Sections include:

        - User information
        - Role management
        - Notification preferences
- Ensure page supports scrolling and clean section separation

---

### 3. Display User Information (Read‑Only)

- Display the following fields (read‑only):

        - Display name (from Entra ID)
        - Profile photo (from Entra ID)
- Pull data from existing auth/user state
- Handle missing profile photo gracefully (fallback avatar)

---

### 4. First‑Time Login Role Selection Modal

- On first‑time login:

        - Display **Role Selection modal**
- Modal behaviour:

        - Role dropdown with Entra ID role pre‑selected
        - Confirm button enabled only when role is selected
- On confirm:

        - Save role to mocked profile state
        - Redirect user to **Catalogue page**
        - Display “Welcome to Product Hub” notification

---

### 5. Global Role State (Jotai)

- Create shared Jotai atom for:

        - User role
        - Role update status
- Ensure role state is accessible across:

        - Catalogue
        - Recommendations
        - My Apps
- Allow role to be updated and persisted in mock storage

---

### 6. Update Role from Profile Settings

- Add role dropdown to **Profile Settings**
- Allow user to change role
- Add **Save** button
- On save:

        - Update role in mocked profile storage
        - Update role atom
        - Display success notification

---

### 7. Role Usage for App Recommendations (Mocked)

- Use role state to:

        - Influence app recommendations (mock logic)
        - Filter or rank apps based on role
- Ensure role changes immediately affect recommendation UI

---

### 8. Notification Preferences UI

- Add notification preference toggles for:

        - Admin approval updates
        - Security test approval updates
        - Development suggestions
- Display current preferences from mocked profile data
- Allow toggles to be changed locally

---

### 9. Save Notification Preferences (Mocked)

- Add Save action for notification preferences
- On save:

        - Update mocked profile storage
        - Display success notification
- Ensure preferences persist across page reloads (mocked)

---

### 10. Role Editable in My Apps (Filter Category)

- Add role dropdown to **My Apps** as a filter category
- Allow role selection and update
- Include explicit **[Save]** action
- Sync role updates with global role state

---

### 11. Responsive Behaviour

- Ensure Profile Settings page is responsive:

        - Mobile
        - Tablet
        - Desktop
- Verify:

        - Dropdowns usable on touch
        - Toggles accessible on small screens
        - Modal layouts scale correctly

---

### 12. Accessibility & UX

- Ensure:

        - Keyboard navigation for dropdowns and toggles
        - ARIA labels for form controls
        - Clear focus states
- Provide inline validation and disabled states where applicable

---

### 13. Mocked Profile Persistence (Temporary)

- Store profile data locally (mock DB):

        - Role
        - Notification preferences
- Populate profile atoms from mock data on app load
- Ensure structure aligns with expected backend schema

---

### 14. UI Testing with Mock Data

- Verify:

        - First‑time login role modal appears correctly
        - Role updates persist and reflect across app
        - Notifications show on successful save
- Test role updates from:

        - Profile Settings
        - My Apps filter

---

### 15. Replace Mock Profile with Backend Integration (Final Task)

- Remove mocked profile storage
- Integrate backend endpoints for:

        - Fetching user profile
        - Updating user role
        - Updating notification preferences
- Update profile and role atoms from backend responses
- Validate:

        - First‑time login → Role Selection → Catalogue
        - Role updates reflected across recommendations and filters
- Final regression testing

---

## Notes / Assumptions

- Entra ID provides display name, profile photo, and initial role
- Jotai is the source of truth for profile, role, and preferences
- Profile and preference data are mocked until backend is ready
- Role impacts recommendations via mocked logic initially
- UX wireframes will be applied once provided

#### [DPH-542] [2.2-BE] User profile, role and notification preferences — API and persistence

**Jira:** [DPH-542](https://datacomgroup.atlassian.net/browse/DPH-542) · **Status:** To Do

| Field | Value |
|-------|--------|
| **Name** | [2.2-BE] User profile, role and notification preferences — API and persistence |
| **Description** | See below |
| **Work type** | Subtask |
| **Status** | To Do |
| **Story point estimate** | 3 |
| **Priority** | Medium (P3) |
| **Assignee** | Gavin Yan |
| **Assignees** (extra) | — |
| **Sprint** | DPH Sprint 2 |
| **Linked work items** | — |

**Description:**

### BE-2.2.1 — Current user profile (Entra read-only)

**Description**

1. Expose API for current user profile (e.g. GET /api/v1/users/me), auth required.

1. Return display name and profile photo URL from Entra ID (or resolve via token/Graph and return).

1. Response fields read-only; align with header display name and photo.

---

### BE-2.2.2 — First-time login and role confirmation

**Description**

1. Persist “has completed first-time role selection” (e.g. hasCompletedOnboarding or equivalent on user store).

1. Provide way for frontend to set this when user confirms role (or combine with role save in BE-2.2.3).

1. Optionally expose “is first-time login” so frontend can show role selection modal.

---

### BE-2.2.3 — Role save and update

**Description**

1. Expose API to update current user’s role (e.g. PATCH /api/v1/users/me with role in body), auth required.

1. Validate role against allowed enum and persist (user profile/preferences or user_roles).

1. Return 200 and updated payload for success toast; stored role used by recommendations/filters.

---

### BE-2.2.4 — Notification preferences read/write

**Description**

1. Support three notification toggles in user model: admin approval updates, security test approval updates, development suggestions (boolean or enum).

1. Expose GET current preferences and PATCH to update (e.g. under users/me or /users/me/notification-preferences).

1. Persist for use by notification/push logic later.

---

### BE-2.2.5 — User profile and preferences data model

**Description**

1. Design or extend user store (table or Cosmos container) for role, hasCompletedOnboarding, notification preferences, optional Entra cache.

1. Use userId (e.g. Entra sub/oid) as unique key; align with existing auth.

1. Ensure GET/PATCH users/me and recommendation/filter logic use same source of truth.

---

### BE-2.2.6 — Contract and OpenAPI

**Description**

1. users/me (and any separate preferences path) follow project response and error format.

1. Document GET/PATCH /users/me request/response (profile, role, optional notification preferences) in OpenAPI; mark auth required.

#### [DPH-573] [UX] Welcome Modal: First-time role selection, filtered Entra roles, confirm to catalogue + welcome notification

**Jira:** [DPH-573](https://datacomgroup.atlassian.net/browse/DPH-573) · **Status:** To Do

| Field | Value |
|-------|--------|
| **Name** | [UX] Welcome Modal: First-time role selection, filtered Entra roles, confirm to catalogue + welcome notification |
| **Description** | See below |
| **Work type** | Subtask |
| **Status** | To Do |
| **Story point estimate** | — |
| **Priority** | Low (P4) |
| **Assignee** | Ben Schaumkel |
| **Assignees** (extra) | — |
| **Sprint** | DPH Sprint 2 |
| **Linked work items** | — |

**Description:**

_No description._

#### [DPH-574] [UX] Profile Settings Page + Header Dropdown + My Apps Role Filter

**Jira:** [DPH-574](https://datacomgroup.atlassian.net/browse/DPH-574) · **Status:** To Do

| Field | Value |
|-------|--------|
| **Name** | [UX] Profile Settings Page + Header Dropdown + My Apps Role Filter |
| **Description** | See below |
| **Work type** | Subtask |
| **Status** | To Do |
| **Story point estimate** | — |
| **Priority** | Low (P4) |
| **Assignee** | Ben Schaumkel |
| **Assignees** (extra) | — |
| **Sprint** | DPH Sprint 2 |
| **Linked work items** | — |

**Description:**

_No description._

#### [DPH-575] [UX] Feedback from devs

**Jira:** [DPH-575](https://datacomgroup.atlassian.net/browse/DPH-575) · **Status:** To Do

| Field | Value |
|-------|--------|
| **Name** | [UX] Feedback from devs |
| **Description** | See below |
| **Work type** | Subtask |
| **Status** | To Do |
| **Story point estimate** | — |
| **Priority** | Low (P4) |
| **Assignee** | Ben Schaumkel |
| **Assignees** (extra) | — |
| **Sprint** | DPH Sprint 2 |
| **Linked work items** | — |

**Description:**

_No description._

#### [DPH-576] [UX] Final Design + Dev Handover

**Jira:** [DPH-576](https://datacomgroup.atlassian.net/browse/DPH-576) · **Status:** To Do

| Field | Value |
|-------|--------|
| **Name** | [UX] Final Design + Dev Handover |
| **Description** | See below |
| **Work type** | Subtask |
| **Status** | To Do |
| **Story point estimate** | — |
| **Priority** | Low (P4) |
| **Assignee** | Ben Schaumkel |
| **Assignees** (extra) | — |
| **Sprint** | DPH Sprint 2 |
| **Linked work items** | — |

**Description:**

_No description._

---
---
---
---
---
---
---
---
