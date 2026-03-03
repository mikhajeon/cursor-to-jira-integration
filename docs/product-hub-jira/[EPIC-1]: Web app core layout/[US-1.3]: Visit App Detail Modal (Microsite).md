# [US-1.3]: Visit App Detail Modal (Microsite)

**Jira:** [DPH-340](https://datacomgroup.atlassian.net/browse/DPH-340)


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
| **Name** | [US-1.3]: Visit App Detail Modal (Microsite) |
| **Description** | See below |
| **Work type** | User Story |
| **Assignee** | Ben Schaumkel |
| **Assignees** (extra) | — |
| **Priority** | Critical (P1) |
| **Story point estimate** | 6 |
| **Sprint** | DPH Sprint 2 |
| **Status** | Ready for QA Review |
| **Linked work items** | — |


---
As an **app-user**,  
I want to view a product's detail page,  
So that I can learn about a micro-app before deciding to use it.

**Acceptance Criteria:**

1. Clicking a micro-app card from the catalogue or any listing redirects the user to the product's detail page
2. The detail page displays: app name, tier, category tags, role tags, creator name, and submission date
3. The Introduction, Business Value, and Example Use Case sections generated in Epic 4 are displayed
4. If a user guide (HTML slideshow) was generated, it is accessible and playable on the page
5. If a video guide (MP4) was generated, it is embedded and playable on the page
6. A `Launch App` button is visible and links to the app's live URL — disabled with tooltip if the app is Unpublished
7. A `Favourite` button allows app-users to save the app to their catalogue filter of faves
8. The product's current lifecycle status is displayed as a badge (see App Lifecycle Status Reference Table)
9. The app detail modal renders as a scrollable full-width modal, larger than the Agent Library modal


### Subtasks

#### [DPH-538] [1.3-FE] Tasks

**Jira:** [DPH-538](https://datacomgroup.atlassian.net/browse/DPH-538) · **Status:** Ready for QA Review

| Field | Value |
|-------|--------|
| **Name** | [1.3-FE] Tasks |
| **Description** | See below |
| **Work type** | Task / Bug |
| **Status** | Ready for QA Review |
| **Story point estimate** | — |
| **Priority** | Critical (P1) |
| **Assignee** | Rithvik Sharma |
| **Assignees** (extra) | — |
| **Sprint** | DPH Sprint 2 |
| **Linked work items** | — |

**Description:**

## Front‑End Tasks – Product Detail Page (Large Modal)

### 1. Entry Point & Modal Trigger

- Add click handler to micro‑app cards across:

        - Catalogue
        - Listings (search results, favourites, etc.)
- Open Product Detail as a **popup modal** (no full page navigation)
- Pass selected `appId` (or mock identifier) into modal
- Support modal close via:

        - Close (X)
        - ESC key
        - Click outside (if design allows)

---

### 2. Large Scrollable Modal Shell

- Create a **large modal component**, bigger than artefact library modal
- Modal should:

        - Be vertically scrollable internally
        - Lock background scroll
- Structure modal into:

        - Header (app name, status badge, close)
        - Scrollable body
        - Footer or sticky action area (Launch / Favourite)

---

### 3. Mock Data Setup (Backend in Progress)

- Define **mock data objects** aligned with agreed backend schema:

        - App metadata
        - Content sections
        - Media assets
        - App status and environment
- Store mock data locally or via mock service
- Use mock data to drive all UI rendering
- Ensure mock data supports:

        - Active vs Inactive apps
        - Apps with / without guides
        - Different environments (UAT, Staging, etc.)

---

### 4. App Metadata Display

- Display the following fields:

        - App name
        - Tier
        - Category tags
        - Role tags
        - Creator name
        - Submission date (formatted)
- Display **App Status**:

        - Active / Inactive
- Display **Environment badge** when not production:

        - UAT / Staging
        - Public / Private / Datacom as applicable

---

### 5. Content Sections (Epic 4 Output)

- Render the following sections using mock data:

        - Introduction
        - Business Value
        - Example Use Case
- Support rich text / HTML rendering
- Gracefully handle missing or empty sections

---

### 6. User Guide – HTML Slideshow (Conditional)

- If HTML slideshow exists in mock data:

        - Embed and render it on the page
        - Ensure it is playable within the modal
- Hide section if no HTML guide is present

---

### 7. Video Guide – MP4 (Conditional)

- If MP4 video exists in mock data:

        - Embed video player
        - Support play, pause, fullscreen
- Hide section if no video guide is present

---

### 8. Launch App Button

- Display **Launch App** primary CTA
- Behaviour:

        - If app is Active:

                - Button enabled
                - Opens live app URL in new tab
        - If app is Inactive:

                - Button disabled
                - Show tooltip explaining app is inactive
- Wire button behaviour using mock URLs

---

### 9. Favourite App Functionality

- Add Favourite / Unfavourite button
- Use mock state to:

        - Toggle favourite status
        - Reflect saved state in UI
- Align behaviour with “My Products → My Favourites” expectations

---

### 10. Accessibility & UX

- Ensure modal accessibility:

        - Focus trapped within modal
        - Keyboard navigation supported
        - ESC closes modal
- Add appropriate ARIA roles and labels
- Tooltips accessible via keyboard

---

### 11. Responsive Behaviour

- Ensure modal is responsive:

        - Fullscreen on smaller viewports
        - Media stacks correctly on mobile
- Test long content scrolling inside modal

---

### 12. UI Testing with Mock Data

- Verify:

        - All acceptance criteria met using mock data
        - Active vs inactive states
        - Presence / absence of guides
- Visual QA across supported browsers

---

### 13. Replace Mock Data with Live Backend Integration (Final Task)

- Remove mock data usage
- Integrate real backend endpoints for:

        - App details
        - Favourites
- Handle loading, error, and empty states
- Validate backend responses against existing UI logic
- Final regression testing

#### [DPH-539] [1.3-BE] Tasks

**Jira:** [DPH-539](https://datacomgroup.atlassian.net/browse/DPH-539) · **Status:** Ready for QA Review

| Field | Value |
|-------|--------|
| **Name** | [1.3-BE] Tasks |
| **Description** | See below |
| **Work type** | Task / Bug |
| **Status** | Ready for QA Review |
| **Story point estimate** | — |
| **Priority** | Critical (P1) |
| **Assignee** | Gavin Yan |
| **Assignees** (extra) | — |
| **Sprint** | DPH Sprint 2 |
| **Linked work items** | — |

**Description:**

### BE-1.3.1 — Product detail API (single product by ID/slug)

**Description**

1. Add endpoint (e.g. GET /api/v1/products/{productId}) to fetch one product by productId or slug.

1. Query Cosmos products by tenantId + identifier and return one document.

1. Return 200 with full payload when found; 404 with standard error format when not found or invalid.

---

### BE-1.3.2 — Detail response: metadata and tags

**Description**

1. Extend product model with name, tier, category, category/role tags, creator, submission/publish date.

1. If tags are separate entities, define link to product and return in detail API.

1. Detail API DTO includes these fields and matches OpenAPI schema.

---

### BE-1.3.3 — Rich content sections

**Description**

1. Add product fields introduction, businessValue, exampleUseCase (long text).

1. Detail API returns these three; use null or empty string when absent and keep types consistent.

---

### BE-1.3.4 — Guide and video URLs

**Description**

1. Add optional product fields userGuideHtmlUrl, videoGuideMp4Url (or equivalent).

1. Detail API returns these URLs when present; omit or null when absent; store/return URLs only, no upload.

---

### BE-1.3.5 — Launch URL and status

**Description**

1. Ensure product model has launch URL (e.g. launchUrl/demoUrl) and status (e.g. Active/Inactive, UAT/Staging).

1. Detail API returns URL and status for Launch button and status badges.

---

### BE-1.3.6 — Favourites API and “is favourited”

**Description**

1. Implement add/remove favourite API (e.g. POST/DELETE users/me/favorites/{productId} or PUT products/{productId}/favorite).

1. Persist user–product many-to-many (e.g. UserFavorites); require auth and restrict to current user.

1. Detail API or separate endpoint returns whether product is favourited (e.g. isFavorited) when authenticated.

---

### BE-1.3.7 — Contract and docs

**Description**

1. Detail API follows project common response format (success/data/meta) and error structure (code/message/details).

1. Use same error format for 404, 401, 400.

1. Update OpenAPI GET /products/{productId} schema to include all new detail fields.

---
---

### 2. Large Scrollable Modal Shell

- Create a **large modal component**, bigger than artefact library modal
- Modal should:

        - Be vertically scrollable internally
        - Lock background scroll
- Structure modal into:

        - Header (app name, status badge, close)
        - Scrollable body
        - Footer or sticky action area (Launch / Favourite)

---

### 3. Mock Data Setup (Backend in Progress)

- Define **mock data objects** aligned with agreed backend schema:

        - App metadata
        - Content sections
        - Media assets
        - App status and environment
- Store mock data locally or via mock service
- Use mock data to drive all UI rendering
- Ensure mock data supports:

        - Active vs Inactive apps
        - Apps with / without guides
        - Different environments (UAT, Staging, etc.)

---

### 4. App Metadata Display

- Display the following fields:

        - App name
        - Tier
        - Category tags
        - Role tags
        - Creator name
        - Submission date (formatted)
- Display **App Status**:

        - Active / Inactive
- Display **Environment badge** when not production:

        - UAT / Staging
        - Public / Private / Datacom as applicable

---

### 5. Content Sections (Epic 4 Output)

- Render the following sections using mock data:

        - Introduction
        - Business Value
        - Example Use Case
- Support rich text / HTML rendering
- Gracefully handle missing or empty sections

---

### 6. User Guide – HTML Slideshow (Conditional)

- If HTML slideshow exists in mock data:

        - Embed and render it on the page
        - Ensure it is playable within the modal
- Hide section if no HTML guide is present

---

### 7. Video Guide – MP4 (Conditional)

- If MP4 video exists in mock data:

        - Embed video player
        - Support play, pause, fullscreen
- Hide section if no video guide is present

---

### 8. Launch App Button

- Display **Launch App** primary CTA
- Behaviour:

        - If app is Active:

                - Button enabled
                - Opens live app URL in new tab
        - If app is Inactive:

                - Button disabled
                - Show tooltip explaining app is inactive
- Wire button behaviour using mock URLs

---

### 9. Favourite App Functionality

- Add Favourite / Unfavourite button
- Use mock state to:

        - Toggle favourite status
        - Reflect saved state in UI
- Align behaviour with “My Products → My Favourites” expectations

---

### 10. Accessibility & UX

- Ensure modal accessibility:

        - Focus trapped within modal
        - Keyboard navigation supported
        - ESC closes modal
- Add appropriate ARIA roles and labels
- Tooltips accessible via keyboard

---

### 11. Responsive Behaviour

- Ensure modal is responsive:

        - Fullscreen on smaller viewports
        - Media stacks correctly on mobile
- Test long content scrolling inside modal

---

### 12. UI Testing with Mock Data

- Verify:

        - All acceptance criteria met using mock data
        - Active vs inactive states
        - Presence / absence of guides
- Visual QA across supported browsers

---

### 13. Replace Mock Data with Live Backend Integration (Final Task)

- Remove mock data usage
- Integrate real backend endpoints for:

        - App details
        - Favourites
- Handle loading, error, and empty states
- Validate backend responses against existing UI logic
- Final regression testing

#### [DPH-539] [1.3-BE] Tasks

**Jira:** [DPH-539](https://datacomgroup.atlassian.net/browse/DPH-539) · **Status:** Ready for QA Review

| Field | Value |
|-------|--------|
| **Name** | [1.3-BE] Tasks |
| **Description** | See below |
| **Work type** | Task / Bug |
| **Status** | Ready for QA Review |
| **Story point estimate** | — |
| **Priority** | Critical (P1) |
| **Assignee** | Gavin Yan |
| **Assignees** (extra) | — |
| **Sprint** | DPH Sprint 2 |
| **Linked work items** | — |

**Description:**

### BE-1.3.1 — Product detail API (single product by ID/slug)

**Description**

1. Add endpoint (e.g. GET /api/v1/products/{productId}) to fetch one product by productId or slug.

1. Query Cosmos products by tenantId + identifier and return one document.

1. Return 200 with full payload when found; 404 with standard error format when not found or invalid.

---

### BE-1.3.2 — Detail response: metadata and tags

**Description**

1. Extend product model with name, tier, category, category/role tags, creator, submission/publish date.

1. If tags are separate entities, define link to product and return in detail API.

1. Detail API DTO includes these fields and matches OpenAPI schema.

---

### BE-1.3.3 — Rich content sections

**Description**

1. Add product fields introduction, businessValue, exampleUseCase (long text).

1. Detail API returns these three; use null or empty string when absent and keep types consistent.

---

### BE-1.3.4 — Guide and video URLs

**Description**

1. Add optional product fields userGuideHtmlUrl, videoGuideMp4Url (or equivalent).

1. Detail API returns these URLs when present; omit or null when absent; store/return URLs only, no upload.

---

### BE-1.3.5 — Launch URL and status

**Description**

1. Ensure product model has launch URL (e.g. launchUrl/demoUrl) and status (e.g. Active/Inactive, UAT/Staging).

1. Detail API returns URL and status for Launch button and status badges.

---

### BE-1.3.6 — Favourites API and “is favourited”

**Description**

1. Implement add/remove favourite API (e.g. POST/DELETE users/me/favorites/{productId} or PUT products/{productId}/favorite).

1. Persist user–product many-to-many (e.g. UserFavorites); require auth and restrict to current user.

1. Detail API or separate endpoint returns whether product is favourited (e.g. isFavorited) when authenticated.

---

### BE-1.3.7 — Contract and docs

**Description**

1. Detail API follows project common response format (success/data/meta) and error structure (code/message/details).

1. Use same error format for 404, 401, 400.

1. Update OpenAPI GET /products/{productId} schema to include all new detail fields.

---
---

### 2. Large Scrollable Modal Shell

- Create a **large modal component**, bigger than artefact library modal
- Modal should:

        - Be vertically scrollable internally
        - Lock background scroll
- Structure modal into:

        - Header (app name, status badge, close)
        - Scrollable body
        - Footer or sticky action area (Launch / Favourite)

---

### 3. Mock Data Setup (Backend in Progress)

- Define **mock data objects** aligned with agreed backend schema:

        - App metadata
        - Content sections
        - Media assets
        - App status and environment
- Store mock data locally or via mock service
- Use mock data to drive all UI rendering
- Ensure mock data supports:

        - Active vs Inactive apps
        - Apps with / without guides
        - Different environments (UAT, Staging, etc.)

---

### 4. App Metadata Display

- Display the following fields:

        - App name
        - Tier
        - Category tags
        - Role tags
        - Creator name
        - Submission date (formatted)
- Display **App Status**:

        - Active / Inactive
- Display **Environment badge** when not production:

        - UAT / Staging
        - Public / Private / Datacom as applicable

---

### 5. Content Sections (Epic 4 Output)

- Render the following sections using mock data:

        - Introduction
        - Business Value
        - Example Use Case
- Support rich text / HTML rendering
- Gracefully handle missing or empty sections

---

### 6. User Guide – HTML Slideshow (Conditional)

- If HTML slideshow exists in mock data:

        - Embed and render it on the page
        - Ensure it is playable within the modal
- Hide section if no HTML guide is present

---

### 7. Video Guide – MP4 (Conditional)

- If MP4 video exists in mock data:

        - Embed video player
        - Support play, pause, fullscreen
- Hide section if no video guide is present

---

### 8. Launch App Button

- Display **Launch App** primary CTA
- Behaviour:

        - If app is Active:

                - Button enabled
                - Opens live app URL in new tab
        - If app is Inactive:

                - Button disabled
                - Show tooltip explaining app is inactive
- Wire button behaviour using mock URLs

---

### 9. Favourite App Functionality

- Add Favourite / Unfavourite button
- Use mock state to:

        - Toggle favourite status
        - Reflect saved state in UI
- Align behaviour with “My Products → My Favourites” expectations

---

### 10. Accessibility & UX

- Ensure modal accessibility:

        - Focus trapped within modal
        - Keyboard navigation supported
        - ESC closes modal
- Add appropriate ARIA roles and labels
- Tooltips accessible via keyboard

---

### 11. Responsive Behaviour

- Ensure modal is responsive:

        - Fullscreen on smaller viewports
        - Media stacks correctly on mobile
- Test long content scrolling inside modal

---

### 12. UI Testing with Mock Data

- Verify:

        - All acceptance criteria met using mock data
        - Active vs inactive states
        - Presence / absence of guides
- Visual QA across supported browsers

---

### 13. Replace Mock Data with Live Backend Integration (Final Task)

- Remove mock data usage
- Integrate real backend endpoints for:

        - App details
        - Favourites
- Handle loading, error, and empty states
- Validate backend responses against existing UI logic
- Final regression testing

#### [DPH-539] [1.3-BE] Tasks

**Jira:** [DPH-539](https://datacomgroup.atlassian.net/browse/DPH-539) · **Status:** Ready for QA Review

| Field | Value |
|-------|--------|
| **Name** | [1.3-BE] Tasks |
| **Description** | See below |
| **Work type** | Task / Bug |
| **Status** | Ready for QA Review |
| **Story point estimate** | — |
| **Priority** | Critical (P1) |
| **Assignee** | Gavin Yan |
| **Assignees** (extra) | — |
| **Sprint** | DPH Sprint 2 |
| **Linked work items** | — |

**Description:**

### BE-1.3.1 — Product detail API (single product by ID/slug)

**Description**

1. Add endpoint (e.g. GET /api/v1/products/{productId}) to fetch one product by productId or slug.

1. Query Cosmos products by tenantId + identifier and return one document.

1. Return 200 with full payload when found; 404 with standard error format when not found or invalid.

---

### BE-1.3.2 — Detail response: metadata and tags

**Description**

1. Extend product model with name, tier, category, category/role tags, creator, submission/publish date.

1. If tags are separate entities, define link to product and return in detail API.

1. Detail API DTO includes these fields and matches OpenAPI schema.

---

### BE-1.3.3 — Rich content sections

**Description**

1. Add product fields introduction, businessValue, exampleUseCase (long text).

1. Detail API returns these three; use null or empty string when absent and keep types consistent.

---

### BE-1.3.4 — Guide and video URLs

**Description**

1. Add optional product fields userGuideHtmlUrl, videoGuideMp4Url (or equivalent).

1. Detail API returns these URLs when present; omit or null when absent; store/return URLs only, no upload.

---

### BE-1.3.5 — Launch URL and status

**Description**

1. Ensure product model has launch URL (e.g. launchUrl/demoUrl) and status (e.g. Active/Inactive, UAT/Staging).

1. Detail API returns URL and status for Launch button and status badges.

---

### BE-1.3.6 — Favourites API and “is favourited”

**Description**

1. Implement add/remove favourite API (e.g. POST/DELETE users/me/favorites/{productId} or PUT products/{productId}/favorite).

1. Persist user–product many-to-many (e.g. UserFavorites); require auth and restrict to current user.

1. Detail API or separate endpoint returns whether product is favourited (e.g. isFavorited) when authenticated.

---

### BE-1.3.7 — Contract and docs

**Description**

1. Detail API follows project common response format (success/data/meta) and error structure (code/message/details).

1. Use same error format for 404, 401, 400.

1. Update OpenAPI GET /products/{productId} schema to include all new detail fields.

---
---

### 2. Large Scrollable Modal Shell

- Create a **large modal component**, bigger than artefact library modal
- Modal should:

        - Be vertically scrollable internally
        - Lock background scroll
- Structure modal into:

        - Header (app name, status badge, close)
        - Scrollable body
        - Footer or sticky action area (Launch / Favourite)

---

### 3. Mock Data Setup (Backend in Progress)

- Define **mock data objects** aligned with agreed backend schema:

        - App metadata
        - Content sections
        - Media assets
        - App status and environment
- Store mock data locally or via mock service
- Use mock data to drive all UI rendering
- Ensure mock data supports:

        - Active vs Inactive apps
        - Apps with / without guides
        - Different environments (UAT, Staging, etc.)

---

### 4. App Metadata Display

- Display the following fields:

        - App name
        - Tier
        - Category tags
        - Role tags
        - Creator name
        - Submission date (formatted)
- Display **App Status**:

        - Active / Inactive
- Display **Environment badge** when not production:

        - UAT / Staging
        - Public / Private / Datacom as applicable

---

### 5. Content Sections (Epic 4 Output)

- Render the following sections using mock data:

        - Introduction
        - Business Value
        - Example Use Case
- Support rich text / HTML rendering
- Gracefully handle missing or empty sections

---

### 6. User Guide – HTML Slideshow (Conditional)

- If HTML slideshow exists in mock data:

        - Embed and render it on the page
        - Ensure it is playable within the modal
- Hide section if no HTML guide is present

---

### 7. Video Guide – MP4 (Conditional)

- If MP4 video exists in mock data:

        - Embed video player
        - Support play, pause, fullscreen
- Hide section if no video guide is present

---

### 8. Launch App Button

- Display **Launch App** primary CTA
- Behaviour:

        - If app is Active:

                - Button enabled
                - Opens live app URL in new tab
        - If app is Inactive:

                - Button disabled
                - Show tooltip explaining app is inactive
- Wire button behaviour using mock URLs

---

### 9. Favourite App Functionality

- Add Favourite / Unfavourite button
- Use mock state to:

        - Toggle favourite status
        - Reflect saved state in UI
- Align behaviour with “My Products → My Favourites” expectations

---

### 10. Accessibility & UX

- Ensure modal accessibility:

        - Focus trapped within modal
        - Keyboard navigation supported
        - ESC closes modal
- Add appropriate ARIA roles and labels
- Tooltips accessible via keyboard

---

### 11. Responsive Behaviour

- Ensure modal is responsive:

        - Fullscreen on smaller viewports
        - Media stacks correctly on mobile
- Test long content scrolling inside modal

---

### 12. UI Testing with Mock Data

- Verify:

        - All acceptance criteria met using mock data
        - Active vs inactive states
        - Presence / absence of guides
- Visual QA across supported browsers

---

### 13. Replace Mock Data with Live Backend Integration (Final Task)

- Remove mock data usage
- Integrate real backend endpoints for:

        - App details
        - Favourites
- Handle loading, error, and empty states
- Validate backend responses against existing UI logic
- Final regression testing

#### [DPH-539] [1.3-BE] Tasks

**Jira:** [DPH-539](https://datacomgroup.atlassian.net/browse/DPH-539) · **Status:** Ready for QA Review

| Field | Value |
|-------|--------|
| **Name** | [1.3-BE] Tasks |
| **Description** | See below |
| **Work type** | Task / Bug |
| **Status** | Ready for QA Review |
| **Story point estimate** | — |
| **Priority** | Critical (P1) |
| **Assignee** | Gavin Yan |
| **Assignees** (extra) | — |
| **Sprint** | DPH Sprint 2 |
| **Linked work items** | — |

**Description:**

### BE-1.3.1 — Product detail API (single product by ID/slug)

**Description**

1. Add endpoint (e.g. GET /api/v1/products/{productId}) to fetch one product by productId or slug.

1. Query Cosmos products by tenantId + identifier and return one document.

1. Return 200 with full payload when found; 404 with standard error format when not found or invalid.

---

### BE-1.3.2 — Detail response: metadata and tags

**Description**

1. Extend product model with name, tier, category, category/role tags, creator, submission/publish date.

1. If tags are separate entities, define link to product and return in detail API.

1. Detail API DTO includes these fields and matches OpenAPI schema.

---

### BE-1.3.3 — Rich content sections

**Description**

1. Add product fields introduction, businessValue, exampleUseCase (long text).

1. Detail API returns these three; use null or empty string when absent and keep types consistent.

---

### BE-1.3.4 — Guide and video URLs

**Description**

1. Add optional product fields userGuideHtmlUrl, videoGuideMp4Url (or equivalent).

1. Detail API returns these URLs when present; omit or null when absent; store/return URLs only, no upload.

---

### BE-1.3.5 — Launch URL and status

**Description**

1. Ensure product model has launch URL (e.g. launchUrl/demoUrl) and status (e.g. Active/Inactive, UAT/Staging).

1. Detail API returns URL and status for Launch button and status badges.

---

### BE-1.3.6 — Favourites API and “is favourited”

**Description**

1. Implement add/remove favourite API (e.g. POST/DELETE users/me/favorites/{productId} or PUT products/{productId}/favorite).

1. Persist user–product many-to-many (e.g. UserFavorites); require auth and restrict to current user.

1. Detail API or separate endpoint returns whether product is favourited (e.g. isFavorited) when authenticated.

---

### BE-1.3.7 — Contract and docs

**Description**

1. Detail API follows project common response format (success/data/meta) and error structure (code/message/details).

1. Use same error format for 404, 401, 400.

1. Update OpenAPI GET /products/{productId} schema to include all new detail fields.

---
---

### 2. Large Scrollable Modal Shell

- Create a **large modal component**, bigger than artefact library modal
- Modal should:

        - Be vertically scrollable internally
        - Lock background scroll
- Structure modal into:

        - Header (app name, status badge, close)
        - Scrollable body
        - Footer or sticky action area (Launch / Favourite)

---

### 3. Mock Data Setup (Backend in Progress)

- Define **mock data objects** aligned with agreed backend schema:

        - App metadata
        - Content sections
        - Media assets
        - App status and environment
- Store mock data locally or via mock service
- Use mock data to drive all UI rendering
- Ensure mock data supports:

        - Active vs Inactive apps
        - Apps with / without guides
        - Different environments (UAT, Staging, etc.)

---

### 4. App Metadata Display

- Display the following fields:

        - App name
        - Tier
        - Category tags
        - Role tags
        - Creator name
        - Submission date (formatted)
- Display **App Status**:

        - Active / Inactive
- Display **Environment badge** when not production:

        - UAT / Staging
        - Public / Private / Datacom as applicable

---

### 5. Content Sections (Epic 4 Output)

- Render the following sections using mock data:

        - Introduction
        - Business Value
        - Example Use Case
- Support rich text / HTML rendering
- Gracefully handle missing or empty sections

---

### 6. User Guide – HTML Slideshow (Conditional)

- If HTML slideshow exists in mock data:

        - Embed and render it on the page
        - Ensure it is playable within the modal
- Hide section if no HTML guide is present

---

### 7. Video Guide – MP4 (Conditional)

- If MP4 video exists in mock data:

        - Embed video player
        - Support play, pause, fullscreen
- Hide section if no video guide is present

---

### 8. Launch App Button

- Display **Launch App** primary CTA
- Behaviour:

        - If app is Active:

                - Button enabled
                - Opens live app URL in new tab
        - If app is Inactive:

                - Button disabled
                - Show tooltip explaining app is inactive
- Wire button behaviour using mock URLs

---

### 9. Favourite App Functionality

- Add Favourite / Unfavourite button
- Use mock state to:

        - Toggle favourite status
        - Reflect saved state in UI
- Align behaviour with “My Products → My Favourites” expectations

---

### 10. Accessibility & UX

- Ensure modal accessibility:

        - Focus trapped within modal
        - Keyboard navigation supported
        - ESC closes modal
- Add appropriate ARIA roles and labels
- Tooltips accessible via keyboard

---

### 11. Responsive Behaviour

- Ensure modal is responsive:

        - Fullscreen on smaller viewports
        - Media stacks correctly on mobile
- Test long content scrolling inside modal

---

### 12. UI Testing with Mock Data

- Verify:

        - All acceptance criteria met using mock data
        - Active vs inactive states
        - Presence / absence of guides
- Visual QA across supported browsers

---

### 13. Replace Mock Data with Live Backend Integration (Final Task)

- Remove mock data usage
- Integrate real backend endpoints for:

        - App details
        - Favourites
- Handle loading, error, and empty states
- Validate backend responses against existing UI logic
- Final regression testing

#### [DPH-539] [1.3-BE] Tasks

**Jira:** [DPH-539](https://datacomgroup.atlassian.net/browse/DPH-539) · **Status:** In Progress

| Field | Value |
|-------|--------|
| **Name** | [1.3-BE] Tasks |
| **Description** | See below |
| **Work type** | Subtask |
| **Status** | In Progress |
| **Story point estimate** | — |
| **Priority** | Critical (P1) |
| **Assignee** | Gavin Yan |
| **Assignees** (extra) | — |
| **Sprint** | DPH Sprint 2 |
| **Linked work items** | — |

**Description:**

### BE-1.3.1 — Product detail API (single product by ID/slug)

**Description**

1. Add endpoint (e.g. GET /api/v1/products/{productId}) to fetch one product by productId or slug.

1. Query Cosmos products by tenantId + identifier and return one document.

1. Return 200 with full payload when found; 404 with standard error format when not found or invalid.

---

### BE-1.3.2 — Detail response: metadata and tags

**Description**

1. Extend product model with name, tier, category, category/role tags, creator, submission/publish date.

1. If tags are separate entities, define link to product and return in detail API.

1. Detail API DTO includes these fields and matches OpenAPI schema.

---

### BE-1.3.3 — Rich content sections

**Description**

1. Add product fields introduction, businessValue, exampleUseCase (long text).

1. Detail API returns these three; use null or empty string when absent and keep types consistent.

---

### BE-1.3.4 — Guide and video URLs

**Description**

1. Add optional product fields userGuideHtmlUrl, videoGuideMp4Url (or equivalent).

1. Detail API returns these URLs when present; omit or null when absent; store/return URLs only, no upload.

---

### BE-1.3.5 — Launch URL and status

**Description**

1. Ensure product model has launch URL (e.g. launchUrl/demoUrl) and status (e.g. Active/Inactive, UAT/Staging).

1. Detail API returns URL and status for Launch button and status badges.

---

### BE-1.3.6 — Favourites API and “is favourited”

**Description**

1. Implement add/remove favourite API (e.g. POST/DELETE users/me/favorites/{productId} or PUT products/{productId}/favorite).

1. Persist user–product many-to-many (e.g. UserFavorites); require auth and restrict to current user.

1. Detail API or separate endpoint returns whether product is favourited (e.g. isFavorited) when authenticated.

---

### BE-1.3.7 — Contract and docs

**Description**

1. Detail API follows project common response format (success/data/meta) and error structure (code/message/details).

1. Use same error format for 404, 401, 400.

1. Update OpenAPI GET /products/{productId} schema to include all new detail fields.

---
---

### 2. Large Scrollable Modal Shell

- Create a **large modal component**, bigger than artefact library modal
- Modal should:

        - Be vertically scrollable internally
        - Lock background scroll
- Structure modal into:

        - Header (app name, status badge, close)
        - Scrollable body
        - Footer or sticky action area (Launch / Favourite)

---

### 3. Mock Data Setup (Backend in Progress)

- Define **mock data objects** aligned with agreed backend schema:

        - App metadata
        - Content sections
        - Media assets
        - App status and environment
- Store mock data locally or via mock service
- Use mock data to drive all UI rendering
- Ensure mock data supports:

        - Active vs Inactive apps
        - Apps with / without guides
        - Different environments (UAT, Staging, etc.)

---

### 4. App Metadata Display

- Display the following fields:

        - App name
        - Tier
        - Category tags
        - Role tags
        - Creator name
        - Submission date (formatted)
- Display **App Status**:

        - Active / Inactive
- Display **Environment badge** when not production:

        - UAT / Staging
        - Public / Private / Datacom as applicable

---

### 5. Content Sections (Epic 4 Output)

- Render the following sections using mock data:

        - Introduction
        - Business Value
        - Example Use Case
- Support rich text / HTML rendering
- Gracefully handle missing or empty sections

---

### 6. User Guide – HTML Slideshow (Conditional)

- If HTML slideshow exists in mock data:

        - Embed and render it on the page
        - Ensure it is playable within the modal
- Hide section if no HTML guide is present

---

### 7. Video Guide – MP4 (Conditional)

- If MP4 video exists in mock data:

        - Embed video player
        - Support play, pause, fullscreen
- Hide section if no video guide is present

---

### 8. Launch App Button

- Display **Launch App** primary CTA
- Behaviour:

        - If app is Active:

                - Button enabled
                - Opens live app URL in new tab
        - If app is Inactive:

                - Button disabled
                - Show tooltip explaining app is inactive
- Wire button behaviour using mock URLs

---

### 9. Favourite App Functionality

- Add Favourite / Unfavourite button
- Use mock state to:

        - Toggle favourite status
        - Reflect saved state in UI
- Align behaviour with “My Products → My Favourites” expectations

---

### 10. Accessibility & UX

- Ensure modal accessibility:

        - Focus trapped within modal
        - Keyboard navigation supported
        - ESC closes modal
- Add appropriate ARIA roles and labels
- Tooltips accessible via keyboard

---

### 11. Responsive Behaviour

- Ensure modal is responsive:

        - Fullscreen on smaller viewports
        - Media stacks correctly on mobile
- Test long content scrolling inside modal

---

### 12. UI Testing with Mock Data

- Verify:

        - All acceptance criteria met using mock data
        - Active vs inactive states
        - Presence / absence of guides
- Visual QA across supported browsers

---

### 13. Replace Mock Data with Live Backend Integration (Final Task)

- Remove mock data usage
- Integrate real backend endpoints for:

        - App details
        - Favourites
- Handle loading, error, and empty states
- Validate backend responses against existing UI logic
- Final regression testing

#### [DPH-539] [1.3-BE] Tasks

**Jira:** [DPH-539](https://datacomgroup.atlassian.net/browse/DPH-539) · **Status:** In Progress

| Field | Value |
|-------|--------|
| **Name** | [1.3-BE] Tasks |
| **Description** | See below |
| **Work type** | Subtask |
| **Status** | In Progress |
| **Story point estimate** | — |
| **Priority** | Critical (P1) |
| **Assignee** | Gavin Yan |
| **Assignees** (extra) | — |
| **Sprint** | DPH Sprint 2 |
| **Linked work items** | — |

**Description:**

### BE-1.3.1 — Product detail API (single product by ID/slug)

**Description**

1. Add endpoint (e.g. GET /api/v1/products/{productId}) to fetch one product by productId or slug.

1. Query Cosmos products by tenantId + identifier and return one document.

1. Return 200 with full payload when found; 404 with standard error format when not found or invalid.

---

### BE-1.3.2 — Detail response: metadata and tags

**Description**

1. Extend product model with name, tier, category, category/role tags, creator, submission/publish date.

1. If tags are separate entities, define link to product and return in detail API.

1. Detail API DTO includes these fields and matches OpenAPI schema.

---

### BE-1.3.3 — Rich content sections

**Description**

1. Add product fields introduction, businessValue, exampleUseCase (long text).

1. Detail API returns these three; use null or empty string when absent and keep types consistent.

---

### BE-1.3.4 — Guide and video URLs

**Description**

1. Add optional product fields userGuideHtmlUrl, videoGuideMp4Url (or equivalent).

1. Detail API returns these URLs when present; omit or null when absent; store/return URLs only, no upload.

---

### BE-1.3.5 — Launch URL and status

**Description**

1. Ensure product model has launch URL (e.g. launchUrl/demoUrl) and status (e.g. Active/Inactive, UAT/Staging).

1. Detail API returns URL and status for Launch button and status badges.

---

### BE-1.3.6 — Favourites API and “is favourited”

**Description**

1. Implement add/remove favourite API (e.g. POST/DELETE users/me/favorites/{productId} or PUT products/{productId}/favorite).

1. Persist user–product many-to-many (e.g. UserFavorites); require auth and restrict to current user.

1. Detail API or separate endpoint returns whether product is favourited (e.g. isFavorited) when authenticated.

---

### BE-1.3.7 — Contract and docs

**Description**

1. Detail API follows project common response format (success/data/meta) and error structure (code/message/details).

1. Use same error format for 404, 401, 400.

1. Update OpenAPI GET /products/{productId} schema to include all new detail fields.

---
---

### 2. Large Scrollable Modal Shell

- Create a **large modal component**, bigger than artefact library modal
- Modal should:

        - Be vertically scrollable internally
        - Lock background scroll
- Structure modal into:

        - Header (app name, status badge, close)
        - Scrollable body
        - Footer or sticky action area (Launch / Favourite)

---

### 3. Mock Data Setup (Backend in Progress)

- Define **mock data objects** aligned with agreed backend schema:

        - App metadata
        - Content sections
        - Media assets
        - App status and environment
- Store mock data locally or via mock service
- Use mock data to drive all UI rendering
- Ensure mock data supports:

        - Active vs Inactive apps
        - Apps with / without guides
        - Different environments (UAT, Staging, etc.)

---

### 4. App Metadata Display

- Display the following fields:

        - App name
        - Tier
        - Category tags
        - Role tags
        - Creator name
        - Submission date (formatted)
- Display **App Status**:

        - Active / Inactive
- Display **Environment badge** when not production:

        - UAT / Staging
        - Public / Private / Datacom as applicable

---

### 5. Content Sections (Epic 4 Output)

- Render the following sections using mock data:

        - Introduction
        - Business Value
        - Example Use Case
- Support rich text / HTML rendering
- Gracefully handle missing or empty sections

---

### 6. User Guide – HTML Slideshow (Conditional)

- If HTML slideshow exists in mock data:

        - Embed and render it on the page
        - Ensure it is playable within the modal
- Hide section if no HTML guide is present

---

### 7. Video Guide – MP4 (Conditional)

- If MP4 video exists in mock data:

        - Embed video player
        - Support play, pause, fullscreen
- Hide section if no video guide is present

---

### 8. Launch App Button

- Display **Launch App** primary CTA
- Behaviour:

        - If app is Active:

                - Button enabled
                - Opens live app URL in new tab
        - If app is Inactive:

                - Button disabled
                - Show tooltip explaining app is inactive
- Wire button behaviour using mock URLs

---

### 9. Favourite App Functionality

- Add Favourite / Unfavourite button
- Use mock state to:

        - Toggle favourite status
        - Reflect saved state in UI
- Align behaviour with “My Products → My Favourites” expectations

---

### 10. Accessibility & UX

- Ensure modal accessibility:

        - Focus trapped within modal
        - Keyboard navigation supported
        - ESC closes modal
- Add appropriate ARIA roles and labels
- Tooltips accessible via keyboard

---

### 11. Responsive Behaviour

- Ensure modal is responsive:

        - Fullscreen on smaller viewports
        - Media stacks correctly on mobile
- Test long content scrolling inside modal

---

### 12. UI Testing with Mock Data

- Verify:

        - All acceptance criteria met using mock data
        - Active vs inactive states
        - Presence / absence of guides
- Visual QA across supported browsers

---

### 13. Replace Mock Data with Live Backend Integration (Final Task)

- Remove mock data usage
- Integrate real backend endpoints for:

        - App details
        - Favourites
- Handle loading, error, and empty states
- Validate backend responses against existing UI logic
- Final regression testing

#### [DPH-539] [1.3-BE] Tasks

**Jira:** [DPH-539](https://datacomgroup.atlassian.net/browse/DPH-539) · **Status:** To Do

| Field | Value |
|-------|--------|
| **Name** | [1.3-BE] Tasks |
| **Description** | See below |
| **Work type** | Subtask |
| **Status** | To Do |
| **Story point estimate** | — |
| **Priority** | Critical (P1) |
| **Assignee** | Gavin Yan |
| **Assignees** (extra) | — |
| **Sprint** | DPH Sprint 2 |
| **Linked work items** | — |

**Description:**

### BE-1.3.1 — Product detail API (single product by ID/slug)

**Description**

1. Add endpoint (e.g. GET /api/v1/products/{productId}) to fetch one product by productId or slug.

1. Query Cosmos products by tenantId + identifier and return one document.

1. Return 200 with full payload when found; 404 with standard error format when not found or invalid.

---

### BE-1.3.2 — Detail response: metadata and tags

**Description**

1. Extend product model with name, tier, category, category/role tags, creator, submission/publish date.

1. If tags are separate entities, define link to product and return in detail API.

1. Detail API DTO includes these fields and matches OpenAPI schema.

---

### BE-1.3.3 — Rich content sections

**Description**

1. Add product fields introduction, businessValue, exampleUseCase (long text).

1. Detail API returns these three; use null or empty string when absent and keep types consistent.

---

### BE-1.3.4 — Guide and video URLs

**Description**

1. Add optional product fields userGuideHtmlUrl, videoGuideMp4Url (or equivalent).

1. Detail API returns these URLs when present; omit or null when absent; store/return URLs only, no upload.

---

### BE-1.3.5 — Launch URL and status

**Description**

1. Ensure product model has launch URL (e.g. launchUrl/demoUrl) and status (e.g. Active/Inactive, UAT/Staging).

1. Detail API returns URL and status for Launch button and status badges.

---

### BE-1.3.6 — Favourites API and “is favourited”

**Description**

1. Implement add/remove favourite API (e.g. POST/DELETE users/me/favorites/{productId} or PUT products/{productId}/favorite).

1. Persist user–product many-to-many (e.g. UserFavorites); require auth and restrict to current user.

1. Detail API or separate endpoint returns whether product is favourited (e.g. isFavorited) when authenticated.

---

### BE-1.3.7 — Contract and docs

**Description**

1. Detail API follows project common response format (success/data/meta) and error structure (code/message/details).

1. Use same error format for 404, 401, 400.

1. Update OpenAPI GET /products/{productId} schema to include all new detail fields.

---
