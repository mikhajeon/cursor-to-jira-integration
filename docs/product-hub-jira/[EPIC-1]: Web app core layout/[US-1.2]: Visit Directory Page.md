# [US-1.2]: Visit Directory Page

**Jira:** [DPH-201](https://datacomgroup.atlassian.net/browse/DPH-201)


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
| **Name** | [US-1.2]: Visit Directory Page |
| **Description** | See below |
| **Work type** | User Story |
| **Assignee** | — |
| **Assignees** (extra) | — |
| **Priority** | Critical (P1) |
| **Story point estimate** | 5 |
| **Sprint** | DPH Sprint 2 |
| **Status** | Test Failed |
| **Linked work items** | — |


---
As an app-user,

I would like to visit the **Product** **Catalogue “Directory”**

So that I can view all products available on Product Hub

 

### AC

1. The app-user clicks the Catalogue page from the landing page

1. user is redirected to the Catalogue page once the call-to-action button is selected

1. There shall be a search bar under the header section

        1. have a microphone (recording UI) in the search bar (implementation US)

1. The catalogue page should have 3 segments such that the user can scroll down the page to view the contents

        1. 1st segment should display category filter options for users to specify tasks they are looking to accomplish (ex. create guides, calculate ROI) (**use case filter + role filter**)

                1. If the user selects any of the app category, the associated app on that category should be displayed
        2. 2nd segment should display 3 micro-apps most aligned to the user’s role specified on their staff profile.

                1. This should be vertically scrollable apps ordered by popularity
        3. 3rd segment should display the ALL used micro-apps sorted by popularity (access rate)
        4. There should be a link button “Load More” at the base of the 3 most used micro-apps, to expand to show 3 more micro-apps available sorted by popularity

                1. If there are more courses to be displayed the link button “Load More” should still be active
                2. If there are no more micro-apps to be displayed, the link button “Load more” will no be active”
2. Micro-app cards shall contain:

        1. Tiers: Business (big internal tools like, Conver, TACO), Enterprise (distributed out), Standard (independent apps)
        2. Categories: eg, AI-generated, Document Generation.
        3. Roles: of individual app-users
3. House both UAT and Production Apps in it. → reveal to certain people in UAT group etc.
4. Under the search bar: have filters, 

        1. new
        2. popular
        3. my favorites

Mock-up to be provided by UX designer  

Precedent below: Coursera course catalogue page: role-based course matching and skill preference filtering


### Subtasks

#### [DPH-632] [Bug-1.2.5]: Missing Quick Filters under Search bar (New, Featured, My Favorites)

**Jira:** [DPH-632](https://datacomgroup.atlassian.net/browse/DPH-632) · **Status:** To Do

| Field | Value |
|-------|--------|
| **Name** | [Bug-1.2.5]: Missing Quick Filters under Search bar (New, Featured, My Favorites) |
| **Description** | See below |
| **Work type** | Task / Bug |
| **Status** | To Do |
| **Story point estimate** | — |
| **Priority** | Critical (P1) |
| **Assignee** | — |
| **Assignees** (extra) | — |
| **Sprint** | DPH Sprint 2 |
| **Linked work items** | — |

**Description:**

_No description._

#### [DPH-630] [Bug-1.2.4]: Update Filter Categories etc to incorporate recently discussed and agreed-on selections of Filter Categories.

**Jira:** [DPH-630](https://datacomgroup.atlassian.net/browse/DPH-630) · **Status:** To Do

| Field | Value |
|-------|--------|
| **Name** | [Bug-1.2.4]: Update Filter Categories etc to incorporate recently discussed and agreed-on selections of Filter Categories. |
| **Description** | See below |
| **Work type** | Task / Bug |
| **Status** | To Do |
| **Story point estimate** | — |
| **Priority** | Low (P4) |
| **Assignee** | — |
| **Assignees** (extra) | — |
| **Sprint** | DPH Sprint 2 |
| **Linked work items** | — |

**Description:**

- refer to ben’s documentation on Categories / tags

#### [DPH-629] [Bug-1.2.3]: Featured app should not be shown here. thats for the landing page. (featured can be a filter, like the favourited apps).

**Jira:** [DPH-629](https://datacomgroup.atlassian.net/browse/DPH-629) · **Status:** To Do

| Field | Value |
|-------|--------|
| **Name** | [Bug-1.2.3]: Featured app should not be shown here. thats for the landing page. (featured can be a filter, like the favourited apps). |
| **Description** | See below |
| **Work type** | Task / Bug |
| **Status** | To Do |
| **Story point estimate** | — |
| **Priority** | Critical (P1) |
| **Assignee** | — |
| **Assignees** (extra) | — |
| **Sprint** | DPH Sprint 2 |
| **Linked work items** | — |

**Description:**

- Appears that Figma design and Acceptance Criteria does not match. (due to Sprint 1’s initial design-led development) (and we havn’t had our design x ba session going over the US at the time)
-   
- (mark this bug → Ready for QA) and let me know if you are fine with the way the Directory is now)

#### [DPH-628] [Bug-1.2.2]: Load more function should not be automated.

**Jira:** [DPH-628](https://datacomgroup.atlassian.net/browse/DPH-628) · **Status:** To Do

| Field | Value |
|-------|--------|
| **Name** | [Bug-1.2.2]: Load more function should not be automated. |
| **Description** | See below |
| **Work type** | Task / Bug |
| **Status** | To Do |
| **Story point estimate** | — |
| **Priority** | Critical (P1) |
| **Assignee** | — |
| **Assignees** (extra) | — |
| **Sprint** | DPH Sprint 2 |
| **Linked work items** | — |

**Description:**

_No description._

#### [DPH-627] [Bug-1.2.1]: Segment 3 (List of apps softed By Popularity) does not exist. This should be under the role-based recommendations

**Jira:** [DPH-627](https://datacomgroup.atlassian.net/browse/DPH-627) · **Status:** To Do

| Field | Value |
|-------|--------|
| **Name** | [Bug-1.2.1]: Segment 3 (List of apps softed By Popularity) does not exist. This should be under the role-based recommendations |
| **Description** | See below |
| **Work type** | Task / Bug |
| **Status** | To Do |
| **Story point estimate** | — |
| **Priority** | Low (P4) |
| **Assignee** | — |
| **Assignees** (extra) | — |
| **Sprint** | DPH Sprint 2 |
| **Linked work items** | — |

**Description:**

_No description._

#### [DPH-226] Add queryCategoriesList in db layer with mock data

**Jira:** [DPH-226](https://datacomgroup.atlassian.net/browse/DPH-226) · **Status:** Done

| Field | Value |
|-------|--------|
| **Name** | Add queryCategoriesList in db layer with mock data |
| **Description** | See below |
| **Work type** | Task / Bug |
| **Status** | Done |
| **Story point estimate** | — |
| **Priority** | Low (P4) |
| **Assignee** | Gavin Yan |
| **Assignees** (extra) | — |
| **Sprint** | DPH Sprint 2 |
| **Linked work items** | — |

**Description:**

In `functions/src/shared/db.ts`:

- Define a `CategoryRow` interface with at least: `id` (string), `name` (string), `displayName` (string), `displayOrder` (number). Add `iconName` and `description` as optional if needed for the API.
- Add a function `queryCategoriesList(): Promise<{ items: CategoryRow[] }>`.
- When `getConnection()` returns null (no DB configured), return mock category data. Mock list must include categories that match existing micro-app mock data, e.g. at least: `ai-tools`, `devops`, `admin`, each with a distinct id, name, displayName, and displayOrder (e.g. 1, 2, 3).
- When a real connection exists, leave a TODO to query the Categories table ordered by display_order ascending; no implementation required until DB is wired.
- Export `CategoryRow` and ensure the mock items are ordered by displayOrder in the returned array.

*Definition of done:* Calling `queryCategoriesList()` returns an array of categories with correct shape and order; no change to existing `queryMicroAppsList` or MicroAppRow.

#### [DPH-227] Add getCategories HTTP handler and register route

**Jira:** [DPH-227](https://datacomgroup.atlassian.net/browse/DPH-227) · **Status:** Done

| Field | Value |
|-------|--------|
| **Name** | Add getCategories HTTP handler and register route |
| **Description** | See below |
| **Work type** | Task / Bug |
| **Status** | Done |
| **Story point estimate** | — |
| **Priority** | Low (P4) |
| **Assignee** | Gavin Yan |
| **Assignees** (extra) | — |
| **Sprint** | DPH Sprint 2 |
| **Linked work items** | — |

**Description:**

- Create a new HTTP handler (e.g. `functions/src/handlers/getCategories.ts`) that:

        - Accepts a GET request (no required query params).
        - Calls `queryCategoriesList()` from `../shared/db.js`.
        - Returns status 200 with body `{ success: true, data: items }` where items is the array from the db layer.
        - On thrown error, returns 500 with `{ success: false, error: { code: 'INTERNAL_ERROR', message: '...' } }`.
- Register the handler in `functions/src/app.ts`: add an `app.http` entry with method GET, route `categories` (or `micro-apps/categories` if you prefer a nested path), and `authLevel: 'anonymous'` to align with catalogue browsing.
- Use the same response shape as other handlers (success, data) so the frontend can parse consistently.

*Definition of done:* GET request to the registered categories URL returns 200 and a JSON array of categories; unauthenticated access works.

#### [DPH-228] Add GET categories path and schema to OpenAPI

**Jira:** [DPH-228](https://datacomgroup.atlassian.net/browse/DPH-228) · **Status:** Done

| Field | Value |
|-------|--------|
| **Name** | Add GET categories path and schema to OpenAPI |
| **Description** | See below |
| **Work type** | Task / Bug |
| **Status** | Done |
| **Story point estimate** | — |
| **Priority** | Low (P4) |
| **Assignee** | Gavin Yan |
| **Assignees** (extra) | — |
| **Sprint** | DPH Sprint 2 |
| **Linked work items** | — |

**Description:**

In `docs/apis/openapi-spec.yaml`:

- Add a new path for the categories endpoint (e.g. `/categories` under the same `servers[].url` base as existing paths). If the API is under `/api/v1`, use `/categories` so full path is `/api/v1/categories`.
- Document GET with summary (e.g. "List categories for catalogue filters"), no required parameters, security optional or empty so it can be called without auth for catalogue.
- Add a response 200 with content type application/json and a schema that includes an array of category objects. Schema properties: `id` (string), `name` (string), `displayName` (string), `displayOrder` (integer). Optionally `iconName` (string), `description` (string).
- In `components.schemas`, add a `Category` schema and reference it in the response (e.g. `data: array of Category`). Ensure the response wrapper matches the handler (e.g. `success: boolean`, `data: array`).

*Definition of done:* OpenAPI spec validates (if you have a validator); frontend or API clients can use the spec to generate types or docs for the categories endpoint.

#### [DPH-229] Add search query param to getMicroApps (name/description)

**Jira:** [DPH-229](https://datacomgroup.atlassian.net/browse/DPH-229) · **Status:** Done

| Field | Value |
|-------|--------|
| **Name** | Add search query param to getMicroApps (name/description) |
| **Description** | See below |
| **Work type** | Task / Bug |
| **Status** | Done |
| **Story point estimate** | — |
| **Priority** | Low (P4) |
| **Assignee** | Gavin Yan |
| **Assignees** (extra) | — |
| **Sprint** | DPH Sprint 2 |
| **Linked work items** | — |

**Description:**

- In `functions/src/handlers/getMicroApps.ts`: read optional query parameter `search` from the request URL (e.g. `url.searchParams.get('search')`). Trim empty string or null and treat as undefined (no filter).
- In `functions/src/shared/db.ts`: add optional `search?: string` to `QueryMicroAppsParams`. In `queryMicroAppsList`, when `search` is provided, filter the result set so that each micro-app's `name` or `description` contains the search string (case-insensitive). Use substring match (e.g. `name.toLowerCase().includes(search.toLowerCase())` and same for description).
- Apply search filter before pagination: first filter by category/search/status, then slice for page and pageSize.
- Do not change the response shape; only the filtered list and totalCount are affected.

*Definition of done:* GET micro-apps?search=Conver returns only items whose name or description contains "Conver"; GET without search is unchanged; existing getMicroApps tests still pass; add or update a test that asserts search filtering.

#### [DPH-230] Add tags query param to getMicroApps (comma-separated)

**Jira:** [DPH-230](https://datacomgroup.atlassian.net/browse/DPH-230) · **Status:** Done

| Field | Value |
|-------|--------|
| **Name** | Add tags query param to getMicroApps (comma-separated) |
| **Description** | See below |
| **Work type** | Task / Bug |
| **Status** | Done |
| **Story point estimate** | — |
| **Priority** | Low (P4) |
| **Assignee** | Gavin Yan |
| **Assignees** (extra) | — |
| **Sprint** | DPH Sprint 2 |
| **Linked work items** | — |

**Description:**

- In `functions/src/handlers/getMicroApps.ts`: read optional query parameter `tags` from the request URL. If present, split by comma and trim each part (e.g. `tags.split(',').map(t => t.trim()).filter(Boolean)`). Pass the resulting string array to the db layer; if empty after split, treat as no filter.
- In `functions/src/shared/db.ts`: add optional `tags?: string[]` to `QueryMicroAppsParams`. In `queryMicroAppsList`, when `tags` is provided and non-empty, filter micro-apps that are associated with at least one of the given tags. Current mock data (MOCK_MICRO_APPS) does not include tag associations; either (a) add a mock `tags` array to each mock micro-app and filter by it, or (b) leave the filter as a no-op when using mock data and add a TODO comment that real DB will join MicroAppTags and filter by tag_id/name.
- Apply tags filter together with category and search (AND logic). Pagination applies after all filters.

*Definition of done:* Handler accepts `tags=foo,bar` and passes parsed array to db; db layer signature supports tags; behaviour with real data or extended mock is documented; add test for tags param if mock supports it.

#### [DPH-231] Enforce published-only for catalogue product list

**Jira:** [DPH-231](https://datacomgroup.atlassian.net/browse/DPH-231) · **Status:** Done

| Field | Value |
|-------|--------|
| **Name** | Enforce published-only for catalogue product list |
| **Description** | See below |
| **Work type** | Task / Bug |
| **Status** | Done |
| **Story point estimate** | — |
| **Priority** | Low (P4) |
| **Assignee** | Gavin Yan |
| **Assignees** (extra) | — |
| **Sprint** | DPH Sprint 2 |
| **Linked work items** | — |

**Description:**

- Ensure that when the product list is used for the *catalogue* (public-facing list of micro-apps), only items with `status === 'published'` are returned. Do not return draft or archived items.
- In `functions/src/shared/db.ts`: in `queryMicroAppsList`, when no explicit `status` is passed in params, default to filtering by `status: 'published'`. If the caller passes a specific `status` (e.g. for an admin view), respect it; otherwise for catalogue use the default published filter.
- Alternatively, in `functions/src/handlers/getMicroApps.ts`: if the endpoint is catalogue-only, always pass `status: 'published'` into the db layer and do not expose a status query param to anonymous callers. Choose one approach and document: "Catalogue list returns only published products."
- Update mock data so at least one item has status other than published (e.g. draft) and assert that the default catalogue response does not include it.

*Definition of done:* GET micro-apps (without status param, or with catalogue semantics) returns only published items; tests confirm draft/archived are excluded.

#### [DPH-232] Add recommendedForRole support (param + mock by category)

**Jira:** [DPH-232](https://datacomgroup.atlassian.net/browse/DPH-232) · **Status:** Done

| Field | Value |
|-------|--------|
| **Name** | Add recommendedForRole support (param + mock by category) |
| **Description** | See below |
| **Work type** | Task / Bug |
| **Status** | Done |
| **Story point estimate** | — |
| **Priority** | Low (P4) |
| **Assignee** | Gavin Yan |
| **Assignees** (extra) | — |
| **Sprint** | DPH Sprint 2 |
| **Linked work items** | — |

**Description:**

- In `functions/src/handlers/getMicroApps.ts`: read optional query parameter `recommendedForRole` (e.g. string value such as "Product Manager", "Developer"). When present, the handler should return a list of micro-apps considered "recommended" for that role, optionally limited (e.g. limit 6 for Segment 2).
- In `functions/src/shared/db.ts`: add optional `recommendedForRole?: string` and optional `limit?: number` to a new function or to existing params. Implement mock logic: define a simple mapping from role names to category names (e.g. "Developer" -> ["devops", "ai-tools"], "Product Manager" -> ["admin", "ai-tools"]). Return micro-apps whose category is in the mapped list for the given role, ordered by updatedAt desc (or popularity when available), and capped at limit (e.g. 6). If role is unknown, return an empty list or fallback to top N by updatedAt.
- Response shape remains the same (success, data array, meta). Meta should reflect the actual count and optionally totalCount for the recommended set.
- Document in OpenAPI: add query param `recommendedForRole` (optional string) and description that it returns role-recommended products for the catalogue.

*Definition of done:* GET micro-apps?recommendedForRole=Developer returns only micro-apps in roles-mapped categories; limit is applied; OpenAPI updated.

#### [DPH-233] Add orderBy (e.g. updatedAt / popularity) for list

**Jira:** [DPH-233](https://datacomgroup.atlassian.net/browse/DPH-233) · **Status:** Done

| Field | Value |
|-------|--------|
| **Name** | Add orderBy (e.g. updatedAt / popularity) for list |
| **Description** | See below |
| **Work type** | Task / Bug |
| **Status** | Done |
| **Story point estimate** | — |
| **Priority** | Low (P4) |
| **Assignee** | Gavin Yan |
| **Assignees** (extra) | — |
| **Sprint** | DPH Sprint 2 |
| **Linked work items** | — |

**Description:**

_No description._

#### [DPH-234] Verify pagination meta (totalCount, totalPages) in response

**Jira:** [DPH-234](https://datacomgroup.atlassian.net/browse/DPH-234) · **Status:** Done

| Field | Value |
|-------|--------|
| **Name** | Verify pagination meta (totalCount, totalPages) in response |
| **Description** | See below |
| **Work type** | Task / Bug |
| **Status** | Done |
| **Story point estimate** | — |
| **Priority** | Low (P4) |
| **Assignee** | Gavin Yan |
| **Assignees** (extra) | — |
| **Sprint** | DPH Sprint 2 |
| **Linked work items** | — |

**Description:**

- Confirm that the GET micro-apps response includes in `meta`: `page` (number), `pageSize` (number), `totalCount` (number), `totalPages` (number). totalCount must be the total number of items matching the current filters (before pagination). totalPages must be Math.ceil(totalCount / pageSize) or 1 when totalCount is 0.
- In `functions/src/handlers/getMicroApps.ts`: ensure the handler sets `meta.totalPages = Math.ceil(totalCount / pageSize) || 1` and that totalCount comes from the db layer's total count of filtered results (not the length of the current page).
- Add or update a unit test: for a known mock dataset, request page=1, pageSize=3, and assert that meta.totalCount equals the full filtered count and meta.totalPages equals the expected number of pages. Request the last page and assert the returned data length and that there are no more pages.
- Document in API overview or OpenAPI that the frontend uses meta.totalCount and meta.totalPages to control the "Load More" button state (active when more pages exist, inactive when current page is the last).

*Definition of done:* Pagination meta is correct for all page sizes and pages; test asserts totalCount and totalPages; docs mention Load More usage.

#### [DPH-235] Ensure API base URL / env for catalogue (config/env.example, env.ts)

**Jira:** [DPH-235](https://datacomgroup.atlassian.net/browse/DPH-235) · **Status:** Done

| Field | Value |
|-------|--------|
| **Name** | Ensure API base URL / env for catalogue (config/env.example, env.ts) |
| **Description** | See below |
| **Work type** | Task / Bug |
| **Status** | Done |
| **Story point estimate** | — |
| **Priority** | Low (P4) |
| **Assignee** | Gavin Yan |
| **Assignees** (extra) | — |
| **Sprint** | DPH Sprint 2 |
| **Linked work items** | — |

**Description:**

_No description._

#### [DPH-268] Research (DataAcademy AI courses - percipio AI courses - agents/prompt/product feeds & libraries)

**Jira:** [DPH-268](https://datacomgroup.atlassian.net/browse/DPH-268) · **Status:** Done

| Field | Value |
|-------|--------|
| **Name** | Research (DataAcademy AI courses - percipio AI courses - agents/prompt/product feeds & libraries) |
| **Description** | See below |
| **Work type** | Task / Bug |
| **Status** | Done |
| **Story point estimate** | — |
| **Priority** | Low (P4) |
| **Assignee** | Ben Schaumkel |
| **Assignees** (extra) | — |
| **Sprint** | DPH Sprint 2 |
| **Linked work items** | — |

**Description:**

_No description._

#### [DPH-269] Quick Wireframes (Navbar - Search + Filters - Results - Segment 1 - Segment 2 - Segment 3 - Loadmore - Footer)

**Jira:** [DPH-269](https://datacomgroup.atlassian.net/browse/DPH-269) · **Status:** Done

| Field | Value |
|-------|--------|
| **Name** | Quick Wireframes (Navbar - Search + Filters - Results - Segment 1 - Segment 2 - Segment 3 - Loadmore - Footer) |
| **Description** | See below |
| **Work type** | Task / Bug |
| **Status** | Done |
| **Story point estimate** | — |
| **Priority** | Low (P4) |
| **Assignee** | Ben Schaumkel |
| **Assignees** (extra) | — |
| **Sprint** | DPH Sprint 2 |
| **Linked work items** | — |

**Description:**

_No description._

#### [DPH-270] Prototype  (Click through with Search, Filters, Load More - User Testable)

**Jira:** [DPH-270](https://datacomgroup.atlassian.net/browse/DPH-270) · **Status:** Done

| Field | Value |
|-------|--------|
| **Name** | Prototype  (Click through with Search, Filters, Load More - User Testable) |
| **Description** | See below |
| **Work type** | Task / Bug |
| **Status** | Done |
| **Story point estimate** | — |
| **Priority** | Low (P4) |
| **Assignee** | Ben Schaumkel |
| **Assignees** (extra) | — |
| **Sprint** | DPH Sprint 2 |
| **Linked work items** | — |

**Description:**

_No description._

#### [DPH-272]  Mockups (Create for Thursday presentation - Search - states - filter UI - states - Segment 1/2/3 - states - product cards - hover, click, preview, template page - Load More states - nav/footer)

**Jira:** [DPH-272](https://datacomgroup.atlassian.net/browse/DPH-272) · **Status:** Done

| Field | Value |
|-------|--------|
| **Name** |  Mockups (Create for Thursday presentation - Search - states - filter UI - states - Segment 1/2/3 - states - product cards - hover, click, preview, template page - Load More states - nav/footer) |
| **Description** | See below |
| **Work type** | Task / Bug |
| **Status** | Done |
| **Story point estimate** | — |
| **Priority** | Low (P4) |
| **Assignee** | Ben Schaumkel |
| **Assignees** (extra) | — |
| **Sprint** | DPH Sprint 2 |
| **Linked work items** | — |

**Description:**

_No description._

#### [DPH-271] Present to Stakeholder - Iterate on feedback

**Jira:** [DPH-271](https://datacomgroup.atlassian.net/browse/DPH-271) · **Status:** Done

| Field | Value |
|-------|--------|
| **Name** | Present to Stakeholder - Iterate on feedback |
| **Description** | See below |
| **Work type** | Task / Bug |
| **Status** | Done |
| **Story point estimate** | — |
| **Priority** | Low (P4) |
| **Assignee** | Ben Schaumkel |
| **Assignees** (extra) | — |
| **Sprint** | DPH Sprint 2 |
| **Linked work items** | — |

**Description:**

_No description._

#### [DPH-274] Design Handover: Figma + Components + Dev Walkthrough

**Jira:** [DPH-274](https://datacomgroup.atlassian.net/browse/DPH-274) · **Status:** Done

| Field | Value |
|-------|--------|
| **Name** | Design Handover: Figma + Components + Dev Walkthrough |
| **Description** | See below |
| **Work type** | Task / Bug |
| **Status** | Done |
| **Story point estimate** | — |
| **Priority** | Low (P4) |
| **Assignee** | Ben Schaumkel |
| **Assignees** (extra) | — |
| **Sprint** | DPH Sprint 2 |
| **Linked work items** | — |

**Description:**

_No description._

#### [DPH-273] Final Design: (Brand Guidelines pass, specs, assets)  

**Jira:** [DPH-273](https://datacomgroup.atlassian.net/browse/DPH-273) · **Status:** Done

| Field | Value |
|-------|--------|
| **Name** | Final Design: (Brand Guidelines pass, specs, assets)   |
| **Description** | See below |
| **Work type** | Task / Bug |
| **Status** | Done |
| **Story point estimate** | — |
| **Priority** | Low (P4) |
| **Assignee** | Ben Schaumkel |
| **Assignees** (extra) | — |
| **Sprint** | DPH Sprint 2 |
| **Linked work items** | — |

**Description:**

_No description._

#### [DPH-284] Implement Catalogue Page Route and Navigation

**Jira:** [DPH-284](https://datacomgroup.atlassian.net/browse/DPH-284) · **Status:** Done

| Field | Value |
|-------|--------|
| **Name** | Implement Catalogue Page Route and Navigation |
| **Description** | See below |
| **Work type** | Task / Bug |
| **Status** | Done |
| **Story point estimate** | — |
| **Priority** | Low (P4) |
| **Assignee** | Rithvik Sharma |
| **Assignees** (extra) | — |
| **Sprint** | DPH Sprint 2 |
| **Linked work items** | — |

**Description:**

Create the Product Catalogue page route and wire the landing page call‑to‑action to navigate users to the Catalogue page.

**Acceptance Criteria:**

- Catalogue page route is created and accessible via URL
- Landing page CTA redirects to the Catalogue page
- Page loads without console errors
- Loading state is shown while data is being fetched
- Route follows existing app routing conventions

#### [DPH-285] Build Catalogue Page Layout with 3 Segments

**Jira:** [DPH-285](https://datacomgroup.atlassian.net/browse/DPH-285) · **Status:** Done

| Field | Value |
|-------|--------|
| **Name** | Build Catalogue Page Layout with 3 Segments |
| **Description** | See below |
| **Work type** | Task / Bug |
| **Status** | Done |
| **Story point estimate** | — |
| **Priority** | Low (P4) |
| **Assignee** | Rithvik Sharma |
| **Assignees** (extra) | — |
| **Sprint** | DPH Sprint 2 |
| **Linked work items** | — |

**Description:**

Create the base layout for the Product Catalogue page, including header, search bar placement, and three vertically scrollable content segments.

**Acceptance Criteria:**

- Page layout matches wireframe / design intent
- Search bar is positioned under the header
- Page contains 3 clearly separated vertical segments
- Page supports vertical scrolling across all segments
- Layout is responsive across desktop, tablet, and mobile

#### [DPH-286] Build Reusable Micro‑App Card Component

**Jira:** [DPH-286](https://datacomgroup.atlassian.net/browse/DPH-286) · **Status:** Done

| Field | Value |
|-------|--------|
| **Name** | Build Reusable Micro‑App Card Component |
| **Description** | See below |
| **Work type** | Task / Bug |
| **Status** | Done |
| **Story point estimate** | — |
| **Priority** | Low (P4) |
| **Assignee** | Rithvik Sharma |
| **Assignees** (extra) | — |
| **Sprint** | DPH Sprint 2 |
| **Linked work items** | — |

**Description:**

Create a reusable card component to display micro‑app information throughout the catalogue.

**Acceptance Criteria:**

- Card displays micro‑app name
- Tier is shown (Business, Enterprise, Standard)
- Categories and supported roles are displayed
- Card supports hover and click states
- Skeleton/loading state is implemented
- Component is reusable across all catalogue segments
- Layout is responsive and accessible

#### [DPH-287] Wire Catalogue UI to API or Mock Data

**Jira:** [DPH-287](https://datacomgroup.atlassian.net/browse/DPH-287) · **Status:** Done

| Field | Value |
|-------|--------|
| **Name** | Wire Catalogue UI to API or Mock Data |
| **Description** | See below |
| **Work type** | Task / Bug |
| **Status** | Done |
| **Story point estimate** | — |
| **Priority** | Low (P4) |
| **Assignee** | Rithvik Sharma |
| **Assignees** (extra) | — |
| **Sprint** | DPH Sprint 2 |
| **Linked work items** | — |

**Description:**

Connect the catalogue UI to available endpoints or mock data sources for development.

**Acceptance Criteria:**

- UI integrates with `getMicroApps` endpoint (or mock)
- UI integrates with `getCategories` endpoint (or mock)
- Supports query params:

        - search
        - tags / categories
        - role
        - orderBy (popularity)
- Errors are handled gracefully
- Mock data can be swapped out easily for live APIs

#### [DPH-288] Implement Catalogue Search Bar

**Jira:** [DPH-288](https://datacomgroup.atlassian.net/browse/DPH-288) · **Status:** Done

| Field | Value |
|-------|--------|
| **Name** | Implement Catalogue Search Bar |
| **Description** | See below |
| **Work type** | Task / Bug |
| **Status** | Done |
| **Story point estimate** | — |
| **Priority** | Low (P4) |
| **Assignee** | Rithvik Sharma |
| **Assignees** (extra) | — |
| **Sprint** | DPH Sprint 2 |
| **Linked work items** | — |

**Description:**

Build the search bar UI and manage search state to filter micro‑apps by name or description.

**Acceptance Criteria:**

- Search bar is visible under the header
- User can type to search micro‑apps
- Search input updates results in real time or on submit
- Debounce is applied to prevent excessive calls
- Empty search state shows all results
- Graceful fallback if API is unavailable

#### [DPH-289] Implement Category and Role Filter UI

**Jira:** [DPH-289](https://datacomgroup.atlassian.net/browse/DPH-289) · **Status:** Done

| Field | Value |
|-------|--------|
| **Name** | Implement Category and Role Filter UI |
| **Description** | See below |
| **Work type** | Task / Bug |
| **Status** | Done |
| **Story point estimate** | — |
| **Priority** | Low (P4) |
| **Assignee** | Rithvik Sharma |
| **Assignees** (extra) | — |
| **Sprint** | DPH Sprint 2 |
| **Linked work items** | — |

**Description:**

Build the first catalogue segment containing category and role‑based filters that allow users to specify tasks they want to accomplish.

**Acceptance Criteria:**

- Category filter options are rendered correctly
- Role filter options are displayed and selectable
- Selected filters are visually highlighted
- Selecting a filter updates displayed micro‑apps
- Multiple filters can be applied together
- Empty results state is handled gracefully

#### [DPH-292] Apply Responsive Styling and UX Polish

**Jira:** [DPH-292](https://datacomgroup.atlassian.net/browse/DPH-292) · **Status:** Done

| Field | Value |
|-------|--------|
| **Name** | Apply Responsive Styling and UX Polish |
| **Description** | See below |
| **Work type** | Task / Bug |
| **Status** | Done |
| **Story point estimate** | — |
| **Priority** | Low (P4) |
| **Assignee** | Rithvik Sharma |
| **Assignees** (extra) | — |
| **Sprint** | DPH Sprint 2 |
| **Linked work items** | — |

**Description:**

Ensure the Product Catalogue UI is visually polished, responsive, and consistent with the design system.

**Acceptance Criteria:**

- Layout adapts correctly to mobile, tablet, and desktop
- Spacing, typography, and colors follow design system
- Interactive elements have hover and focus states
- No layout shifts or overflow issues
- Basic accessibility checks pass (focus order, contrast)

#### [DPH-293] Frontend Testing, Refactor & Code Quality Alignment

**Jira:** [DPH-293](https://datacomgroup.atlassian.net/browse/DPH-293) · **Status:** Done

| Field | Value |
|-------|--------|
| **Name** | Frontend Testing, Refactor & Code Quality Alignment |
| **Description** | See below |
| **Work type** | Task / Bug |
| **Status** | Done |
| **Story point estimate** | — |
| **Priority** | Low (P4) |
| **Assignee** | Rithvik Sharma |
| **Assignees** (extra) | — |
| **Sprint** | DPH Sprint 2 |
| **Linked work items** | — |

**Description:**

Write frontend tests and perform a final code quality pass to ensure the Product Catalogue implementation follows project structure guidelines, brand standards, and CSS theming conventions.

**Acceptance Criteria:**

### ✅ Tests (What Is “Enough”)

- **Component tests** are written for:

        - Micro‑App Card renders correct data (name, tier, categories, roles)
        - Micro‑App Card loading/skeleton state
- **Interaction tests** cover:

        - Search input updates results (mocked data)
        - Category filter selection updates visible apps
        - “Load More” appends additional micro‑apps
- **State tests** cover:

        - Empty results state
        - Load More disabled when no more data exists
- API calls may be **mocked** (no E2E required)
- Full page E2E tests are **not required** for this story

### ✅ Code Quality & Refactor

- Code structure aligns with documented project architecture
- Components, hooks, and utilities are organized per repo guidelines
- Shared logic is extracted into reusable hooks/helpers
- No duplicated business logic across segments
- No unused imports, dead code, or TODOs remain

### ✅ Brand & Styling Compliance

- All styling uses CSS theme variables from `index.css`
- No hard‑coded brand colors, fonts, or spacing values
- Components conform to brand guidelines:

        - Typography scale
        - Spacing
        - Interaction states
- Linting and formatting rules pass without warnings

---
---
---
---
---
---
---
---
