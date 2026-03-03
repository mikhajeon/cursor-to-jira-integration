# [US-4.1]: App-Creator Generates Basic Content

**Jira:** [DPH-398](https://datacomgroup.atlassian.net/browse/DPH-398)


### Epic details

**Jira:** [DPH-244](https://datacomgroup.atlassian.net/browse/DPH-244)

| Field | Value |
|-------|--------|
| **Name** | [EPIC-4]: AI Content Generator |
| **Description** | See below |
| **Work type** | Epic |
| **Status** | To Do |
| **Assignee** | — |
| **Assignees** (extra) | — |
| **Priority** | Critical (P1) |
| **Linked work items** | — |

**Description:**


### Story details

| Field | Value |
|-------|--------|
| **Name** | [US-4.1]: App-Creator Generates Basic Content |
| **Description** | See below |
| **Work type** | User Story |
| **Assignee** | — |
| **Assignees** (extra) | — |
| **Priority** | Critical (P1) |
| **Story point estimate** | 11 |
| **Sprint** | DPH Sprint 2 |
| **Status** | To Do |
| **Linked work items** | [DPH-609](https://datacomgroup.atlassian.net/browse/DPH-609) (Requirement) |


---
## US-4.1: App-Creator Generates Basic Content

As an **app-creator**,  
I want the Product Hub to auto-generate basic content for my micro-app,  
So that I have a complete product listing without writing it manually.

**Acceptance Criteria:**

1. After completing tag specification (Epic 3), a `Generate Basic Content` button is displayed on the Content Generation page
2. On click, the AI reads my uploaded code and metadata and generates: Introduction, Business Value (Problem + Value Levers: Time, Cost, Risk), and Example Use Case
3. A loading indicator is displayed while content is being generated
4. Each generated section is editable inline, with a per-section regeneration instruction field and `Regenerate` button
5. Clicking `Regenerate` on a section only updates that section
6. Clicking `Save` saves all sections at once and displays a success notification
7. Navigating away without saving triggers a warning: "You have unsaved changes. Are you sure you want to leave?"
8. Returning to the page after saving displays previously saved content; returning without saving shows a blank page


### Subtasks

#### [DPH-495] Test output quality of ChatGPT when you upload a project zip or Github repo URL.

**Jira:** [DPH-495](https://datacomgroup.atlassian.net/browse/DPH-495) · **Status:** To Do

| Field | Value |
|-------|--------|
| **Name** | Test output quality of ChatGPT when you upload a project zip or Github repo URL. |
| **Description** | See below |
| **Work type** | Task / Bug |
| **Status** | To Do |
| **Story point estimate** | 0 |
| **Priority** | Low (P4) |
| **Assignee** | Rithvik Sharma |
| **Assignees** (extra) | — |
| **Sprint** | DPH Sprint 2 |
| **Linked work items** | — |

**Description:**

_No description._

#### [DPH-507] [4.1-UX] Tasks

**Jira:** [DPH-507](https://datacomgroup.atlassian.net/browse/DPH-507) · **Status:** To Do

| Field | Value |
|-------|--------|
| **Name** | [4.1-UX] Tasks |
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

- [UX] Design `Content Generation` page with text sections

#### [DPH-508] [4.1-FE] Frontend scope (React + Content Generation page)

**Jira:** [DPH-508](https://datacomgroup.atlassian.net/browse/DPH-508) · **Status:** To Do

| Field | Value |
|-------|--------|
| **Name** | [4.1-FE] Frontend scope (React + Content Generation page) |
| **Description** | See below |
| **Work type** | Task / Bug |
| **Status** | To Do |
| **Story point estimate** | — |
| **Priority** | Low (P4) |
| **Assignee** | Gavin Yan |
| **Assignees** (extra) | — |
| **Sprint** | DPH Sprint 2 |
| **Linked work items** | — |

**Description:**

**Page & routing**

- FE-1 — Content generation page and route: Add a “Content Generation” page (e.g. `/submit-a-product/content` or the next step in the Epic 3 wizard). The page is only reachable after Epic 3 tag specification is complete (AC1).

- FE-2 — “Generate Basic Content” button: On the Content Generation page, show the main CTA only after tag specification is complete. On click, trigger the “generate all” flow (AC1).

**Generation & loading**

- FE-3 — Call “generate all” and show result: On button click, call the backend “generate all” endpoint; show a loading indicator while the request is in progress (AC3). On success, render Introduction, Business Value, and Example Use Case (AC2).

- FE-4 — UI for the three sections: For each section (Introduction, Business Value, Example Use Case): inline-editable area, optional “regeneration instructions” field, and a “Regenerate” button for that section (AC4).

**Single-section regenerate & save**

- FE-5 — Single-section Regenerate: When the user clicks “Regenerate” on a section, send only that section (and its instructions) to the backend and update only that section with the response; do not regenerate the others (AC5).

- FE-6 — Save and success feedback: Provide a “Save” button that submits all three sections in one request. On success, show a success notification (AC6).

**Unsaved state & persistence**

- FE-7 — Unsaved-changes prompt on leave: When there are unsaved changes, show a confirmation before leaving the page (e.g. “You have unsaved changes. Are you sure you want to leave?”) (AC7).

- FE-8 — Load content on page entry: When entering the Content Generation page, if basic content was previously saved for that product, load it via the backend and display it; if it was never saved, show an empty state (do not restore unsaved draft) (AC8).

**Suggested implementation order**

FE-1 → FE-2 → FE-3 → FE-4 → FE-5 → FE-6 → FE-7 → FE-8 (FE-7 and FE-8 can be done around FE-6).

#### [DPH-509] [4.1-BE] Tasks

**Jira:** [DPH-509](https://datacomgroup.atlassian.net/browse/DPH-509) · **Status:** To Do

| Field | Value |
|-------|--------|
| **Name** | [4.1-BE] Tasks |
| **Description** | See below |
| **Work type** | Task / Bug |
| **Status** | To Do |
| **Story point estimate** | — |
| **Priority** | Low (P4) |
| **Assignee** | Rithvik Sharma |
| **Assignees** (extra) | — |
| **Sprint** | DPH Sprint 2 |
| **Linked work items** | — |

**Description:**

- [Dev] [BE] Integrate PH AI with RAG to generate: Introduction, Business Value, Use Case



# Product Hub Backend - Content Generation Tasks

You're right, this is **Product Hub backend** work (different from Asset Flow Engine).

Here's the flow:

cssCopy code

`Product Hub UI ↓ Product Hub Backend (new endpoints you need to build) ↓ Asset Flow Engine (calls the /api/asset-flow/submit endpoint) ↓ Asset Flow Engine generates docs ↓ Asset Flow Engine returns results ↓ Product Hub stores in database ↓ Product Hub returns to UI for display/save`

---

## Backend Tasks for Product Hub

### Task 1: Create "Trigger Content Generation" Endpoint

cssCopy code

`POST /api/apps/{appId}/generate-content Request: { "appId": "app_xyz123", "contentType": "basic" // or "full" later } Response: { "jobId": "job_abc456", "status": "processing", "estimatedTime": 45 // seconds }`

**What it does:**

1. Get the app's uploaded code/metadata from database
2. Call Asset Flow Engine: `POST /api/asset-flow/submit` with repo_url/zip_file
3. Store the job_id in database (links to this app)
4. Return job_id to frontend for polling

**Database changes:**

sqlCopy code

`-- Add to apps table or create new table CREATE TABLE content_generation_jobs ( jobId UUID PRIMARY KEY, appId UUID, assetFlowSubmissionId VARCHAR,  -- ID returned from Asset Flow Engine status VARCHAR,  -- processing | completed | failed generatedContent JSON,  -- Stores the 6 sections once done createdAt TIMESTAMP, completedAt TIMESTAMP )`

---

### Task 2: Create "Check Generation Status" Endpoint (Polling)

bashCopy code

`GET /api/apps/{appId}/generate-content/status Response: { "jobId": "job_abc456", "status": "completed", // or "processing" | "failed" "progress": 100, "content": { "what_it_is": "...", "who_its_for": "...","why_it_matters": "...", "how_to_use": "...", "examples": "...", "run_it": "..." } }`

**What it does:**

1. Check database for job with this appId
2. If status is "processing", call Asset Flow Engine: `GET /api/asset-flow/submit/{submissionId}`
3. If Asset Flow Engine returns "completed", update database with generated content
4. Return current status + content to frontend

---

### Task 3: Create "Save Generated Content" Endpoint

bashCopy code

`POST /api/apps/{appId}/microsite-content Request: { "appId": "app_xyz123", "sections": { "what_it_is": "...", "who_its_for": "...", "why_it_matters": "...", "how_to_use": "...", "examples": "...", "run_it": "..." }, "source": "generated" // or "manual" } Response: { "success": true, "message": "Content saved","appId": "app_xyz123" }`

**What it does:**

1. Validate all 6 sections present
2. Save to database (microsite_content table or extend apps table)
3. Mark content_generation_job as "saved"
4. Return success response

**Database changes:**

sqlCopy code

`CREATE TABLE microsite_content ( id UUID PRIMARY KEY, appId UUID, whatItIs TEXT, whoItsFor TEXT, whyItMatters TEXT, howToUseIt TEXT, examples TEXT, runIt TEXT, source VARCHAR,  -- "generated" | "manual"savedAt TIMESTAMP, updatedAt TIMESTAMP )`

---

### Task 4: Create "Get Saved Content" Endpoint

bashCopy code

`GET /api/apps/{appId}/microsite-content Response: { "appId": "app_xyz123", "hasSavedContent": true,"content": { "what_it_is": "...", "who_its_for": "...", "why_it_matters": "...", "how_to_use": "...","examples": "...", "run_it": "..." }, "savedAt": "2025-01-15T10:30:00Z", "source": "generated" // or "manual" }`

**What it does:**

1. Query database for microsite_content with this appId
2. Return content if exists
3. Return empty/null if not saved yet

---

### Task 5: Create "Update Content" Endpoint (for manual edits)

bashCopy code

`PUT /api/apps/{appId}/microsite-content Request: { "appId": "app_xyz123", "sections": { "what_it_is": "User edited this...", "who_its_for": "...", ... } } Response: { "success": true, "message": "Content updated" }`

**What it does:**

1. Update microsite_content in database
2. Set source to "manual" (since user edited)
3. Return success

---

## Architecture Diagram

sqlCopy code

`PRODUCT HUB FRONTEND ├─ Click "Generate Basic Content" │ └─ POST /api/apps/{appId}/generate-content │ └─ PRODUCT HUB BACKEND ├─ Get app metadata from database ├─ Call Asset Flow Engine: POST /api/asset-flow/submit ├─ Store jobId in database └─ Return jobId to frontend │ └─ FRONTEND STARTS POLLING │ └─ GET/api/apps/{appId}/generate-content/status │ └─ PRODUCT HUB BACKEND ├─ Call Asset Flow Engine: GET/api/asset-flow/submit/{submissionId} ├─ If completed: fetch content ├─ Update database with content └─ Return to frontend │ └─ FRONTEND DISPLAYS CONTENT │ └─ User clicks "Save" │ └─ POST /api/apps/{appId}/microsite-content │ └─ PRODUCT HUB BACKEND ├─ Validate sections ├─ Save to database └─ Return success`

---

## Implementation Order

### Phase 1: Basic Generation Flow

1. ✅ Task 1: Trigger generation endpoint

        - Fetch app repo_url from database
        - Call Asset Flow Engine
        - Store job tracking
2. ✅ Task 2: Poll status endpoint

        - Check Asset Flow Engine status
        - Fetch results when ready
        - Store in database
3. ✅ Task 4: Get saved content endpoint

        - Retrieve from database
        - Return to frontend

### Phase 2: Saving & Editing

1. ✅ Task 3: Save content endpoint

        - Validate input
        - Store in database
        - Mark as saved
2. ✅ Task 5: Update content endpoint

        - Allow user edits
        - Track source (manual vs generated)

---

## Database Schema (Quick Reference)

sqlCopy code

`-- Extend existing apps table or create new one TABLE apps ( id UUID PRIMARY KEY, name VARCHAR, repoUrl VARCHAR, uploadedAt TIMESTAMP, ...existing fields... ) -- Track generation jobs TABLEcontent_generation_jobs ( jobId UUID PRIMARY KEY, appId UUID FOREIGN KEY, assetFlowSubmissionId VARCHAR, status VARCHAR,  -- processing | completed | failed createdAt TIMESTAMP, completedAt TIMESTAMP, FOREIGN KEY (appId) REFERENCES apps(id) ) -- Store generated/edited content TABLE microsite_content ( id UUID PRIMARYKEY, appId UUID FOREIGN KEY, whatItIs TEXT, whoItsFor TEXT, whyItMatters TEXT, howToUseIt TEXT, examples TEXT, runIt TEXT, source VARCHAR,  -- generated | manual savedAt TIMESTAMP, updatedAt TIMESTAMP, FOREIGN KEY (appId) REFERENCES apps(id) )`

---

## Polling Strategy

**Frontend polls status until completion:**

javascriptRun CodeCopy code

`// Pseudo-code async function pollGenerationStatus(appId, jobId) { let status = "processing" let attempts = 0 const maxAttempts = 60  // 60 * 2sec = 2 minutes max while (status === "processing" && attempts < maxAttempts) { const response = await fetch(`/api/apps/${appId}/generate-content/status`) const data = await response.json() if (data.status === "completed") { // Display content, enable Save buttondisplayGeneratedContent(data.content) break } if (data.status === "failed") { showError("Generation failed, try again") break } // Still processing, wait 2 seconds and try again await sleep(2000) attempts++ } }`

---

## Error Handling

Each endpoint should handle:

yamlCopy code

`POST /api/apps/{appId}/generate-content ├─ 400: appId not found ├─ 400: app has no repoUrl/zipFile (can'textract metadata) ├─ 500: Asset Flow Engine unavailable └─ 200: job created (polling should happen next)GET /api/apps/{appId}/generate-content/status ├─ 400: appId not found ├─ 404: no generation job for thisapp ├─ 500: Asset Flow Engine unavailable └─ 200: current status + content (if completed) POST/api/apps/{appId}/microsite-content ├─ 400: missing required sections ├─ 400: appId not found ├─ 400:sections fail validation (word count, etc) └─ 200: saved GET /api/apps/{appId}/microsite-content ├─ 400:appId not found ├─ 204: no content saved yet └─ 200: return content`

---

## Summary

**You need to build 5 endpoints in Product Hub:**

1. `POST /api/apps/{appId}/generate-content` — Trigger generation
2. `GET /api/apps/{appId}/generate-content/status` — Poll for results
3. `POST /api/apps/{appId}/microsite-content` — Save generated content
4. `GET /api/apps/{appId}/microsite-content` — Retrieve saved content
5. `PUT /api/apps/{appId}/microsite-content` — Update/edit content

**The flow is:**

- Trigger → Poll → Display → Save → Retrieve

**Asset Flow Engine only needs to do:**

- Generate the 6 sections and return JSON

#### [DPH-608] [4.1-PM] Create a resource group for AssetFlow Engine (Azure Container App)

**Jira:** [DPH-608](https://datacomgroup.atlassian.net/browse/DPH-608) · **Status:** Done

| Field | Value |
|-------|--------|
| **Name** | [4.1-PM] Create a resource group for AssetFlow Engine (Azure Container App) |
| **Description** | See below |
| **Work type** | Task / Bug |
| **Status** | Done |
| **Story point estimate** | — |
| **Priority** | Critical (P1) |
| **Assignee** | Dipesh Trikam |
| **Assignees** (extra) | — |
| **Sprint** | DPH Sprint 2 |
| **Linked work items** | — |

**Description:**

_No description._

#### [DPH-617] [4.1-UX] Design My apps -> Edit Product -> Regenerate Content

**Jira:** [DPH-617](https://datacomgroup.atlassian.net/browse/DPH-617) · **Status:** To Do

| Field | Value |
|-------|--------|
| **Name** | [4.1-UX] Design My apps -> Edit Product -> Regenerate Content |
| **Description** | See below |
| **Work type** | Task / Bug |
| **Status** | To Do |
| **Story point estimate** | — |
| **Priority** | Lowest |
| **Assignee** | Ben Schaumkel |
| **Assignees** (extra) | — |
| **Sprint** | DPH Sprint 2 |
| **Linked work items** | — |

**Description:**

_No description._

#### [DPH-618] [4.1-UX] Edit Product -> accept / save changes 

**Jira:** [DPH-618](https://datacomgroup.atlassian.net/browse/DPH-618) · **Status:** To Do

| Field | Value |
|-------|--------|
| **Name** | [4.1-UX] Edit Product -> accept / save changes  |
| **Description** | See below |
| **Work type** | Task / Bug |
| **Status** | To Do |
| **Story point estimate** | — |
| **Priority** | Lowest |
| **Assignee** | Ben Schaumkel |
| **Assignees** (extra) | — |
| **Sprint** | DPH Sprint 2 |
| **Linked work items** | — |

**Description:**

_No description._

---
---

## Backend Tasks for Product Hub

### Task 1: Create "Trigger Content Generation" Endpoint

cssCopy code

`POST /api/apps/{appId}/generate-content Request: { "appId": "app_xyz123", "contentType": "basic" // or "full" later } Response: { "jobId": "job_abc456", "status": "processing", "estimatedTime": 45 // seconds }`

**What it does:**

1. Get the app's uploaded code/metadata from database
2. Call Asset Flow Engine: `POST /api/asset-flow/submit` with repo_url/zip_file
3. Store the job_id in database (links to this app)
4. Return job_id to frontend for polling

**Database changes:**

sqlCopy code

`-- Add to apps table or create new table CREATE TABLE content_generation_jobs ( jobId UUID PRIMARY KEY, appId UUID, assetFlowSubmissionId VARCHAR,  -- ID returned from Asset Flow Engine status VARCHAR,  -- processing | completed | failed generatedContent JSON,  -- Stores the 6 sections once done createdAt TIMESTAMP, completedAt TIMESTAMP )`

---

### Task 2: Create "Check Generation Status" Endpoint (Polling)

bashCopy code

`GET /api/apps/{appId}/generate-content/status Response: { "jobId": "job_abc456", "status": "completed", // or "processing" | "failed" "progress": 100, "content": { "what_it_is": "...", "who_its_for": "...","why_it_matters": "...", "how_to_use": "...", "examples": "...", "run_it": "..." } }`

**What it does:**

1. Check database for job with this appId
2. If status is "processing", call Asset Flow Engine: `GET /api/asset-flow/submit/{submissionId}`
3. If Asset Flow Engine returns "completed", update database with generated content
4. Return current status + content to frontend

---

### Task 3: Create "Save Generated Content" Endpoint

bashCopy code

`POST /api/apps/{appId}/microsite-content Request: { "appId": "app_xyz123", "sections": { "what_it_is": "...", "who_its_for": "...", "why_it_matters": "...", "how_to_use": "...", "examples": "...", "run_it": "..." }, "source": "generated" // or "manual" } Response: { "success": true, "message": "Content saved","appId": "app_xyz123" }`

**What it does:**

1. Validate all 6 sections present
2. Save to database (microsite_content table or extend apps table)
3. Mark content_generation_job as "saved"
4. Return success response

**Database changes:**

sqlCopy code

`CREATE TABLE microsite_content ( id UUID PRIMARY KEY, appId UUID, whatItIs TEXT, whoItsFor TEXT, whyItMatters TEXT, howToUseIt TEXT, examples TEXT, runIt TEXT, source VARCHAR,  -- "generated" | "manual"savedAt TIMESTAMP, updatedAt TIMESTAMP )`

---

### Task 4: Create "Get Saved Content" Endpoint

bashCopy code

`GET /api/apps/{appId}/microsite-content Response: { "appId": "app_xyz123", "hasSavedContent": true,"content": { "what_it_is": "...", "who_its_for": "...", "why_it_matters": "...", "how_to_use": "...","examples": "...", "run_it": "..." }, "savedAt": "2025-01-15T10:30:00Z", "source": "generated" // or "manual" }`

**What it does:**

1. Query database for microsite_content with this appId
2. Return content if exists
3. Return empty/null if not saved yet

---

### Task 5: Create "Update Content" Endpoint (for manual edits)

bashCopy code

`PUT /api/apps/{appId}/microsite-content Request: { "appId": "app_xyz123", "sections": { "what_it_is": "User edited this...", "who_its_for": "...", ... } } Response: { "success": true, "message": "Content updated" }`

**What it does:**

1. Update microsite_content in database
2. Set source to "manual" (since user edited)
3. Return success

---

## Architecture Diagram

sqlCopy code

`PRODUCT HUB FRONTEND ├─ Click "Generate Basic Content" │ └─ POST /api/apps/{appId}/generate-content │ └─ PRODUCT HUB BACKEND ├─ Get app metadata from database ├─ Call Asset Flow Engine: POST /api/asset-flow/submit ├─ Store jobId in database └─ Return jobId to frontend │ └─ FRONTEND STARTS POLLING │ └─ GET/api/apps/{appId}/generate-content/status │ └─ PRODUCT HUB BACKEND ├─ Call Asset Flow Engine: GET/api/asset-flow/submit/{submissionId} ├─ If completed: fetch content ├─ Update database with content └─ Return to frontend │ └─ FRONTEND DISPLAYS CONTENT │ └─ User clicks "Save" │ └─ POST /api/apps/{appId}/microsite-content │ └─ PRODUCT HUB BACKEND ├─ Validate sections ├─ Save to database └─ Return success`

---

## Implementation Order

### Phase 1: Basic Generation Flow

1. ✅ Task 1: Trigger generation endpoint

        - Fetch app repo_url from database
        - Call Asset Flow Engine
        - Store job tracking
2. ✅ Task 2: Poll status endpoint

        - Check Asset Flow Engine status
        - Fetch results when ready
        - Store in database
3. ✅ Task 4: Get saved content endpoint

        - Retrieve from database
        - Return to frontend

### Phase 2: Saving & Editing

1. ✅ Task 3: Save content endpoint

        - Validate input
        - Store in database
        - Mark as saved
2. ✅ Task 5: Update content endpoint

        - Allow user edits
        - Track source (manual vs generated)

---

## Database Schema (Quick Reference)

sqlCopy code

`-- Extend existing apps table or create new one TABLE apps ( id UUID PRIMARY KEY, name VARCHAR, repoUrl VARCHAR, uploadedAt TIMESTAMP, ...existing fields... ) -- Track generation jobs TABLEcontent_generation_jobs ( jobId UUID PRIMARY KEY, appId UUID FOREIGN KEY, assetFlowSubmissionId VARCHAR, status VARCHAR,  -- processing | completed | failed createdAt TIMESTAMP, completedAt TIMESTAMP, FOREIGN KEY (appId) REFERENCES apps(id) ) -- Store generated/edited content TABLE microsite_content ( id UUID PRIMARYKEY, appId UUID FOREIGN KEY, whatItIs TEXT, whoItsFor TEXT, whyItMatters TEXT, howToUseIt TEXT, examples TEXT, runIt TEXT, source VARCHAR,  -- generated | manual savedAt TIMESTAMP, updatedAt TIMESTAMP, FOREIGN KEY (appId) REFERENCES apps(id) )`

---

## Polling Strategy

**Frontend polls status until completion:**

javascriptRun CodeCopy code

`// Pseudo-code async function pollGenerationStatus(appId, jobId) { let status = "processing" let attempts = 0 const maxAttempts = 60  // 60 * 2sec = 2 minutes max while (status === "processing" && attempts < maxAttempts) { const response = await fetch(`/api/apps/${appId}/generate-content/status`) const data = await response.json() if (data.status === "completed") { // Display content, enable Save buttondisplayGeneratedContent(data.content) break } if (data.status === "failed") { showError("Generation failed, try again") break } // Still processing, wait 2 seconds and try again await sleep(2000) attempts++ } }`

---

## Error Handling

Each endpoint should handle:

yamlCopy code

`POST /api/apps/{appId}/generate-content ├─ 400: appId not found ├─ 400: app has no repoUrl/zipFile (can'textract metadata) ├─ 500: Asset Flow Engine unavailable └─ 200: job created (polling should happen next)GET /api/apps/{appId}/generate-content/status ├─ 400: appId not found ├─ 404: no generation job for thisapp ├─ 500: Asset Flow Engine unavailable └─ 200: current status + content (if completed) POST/api/apps/{appId}/microsite-content ├─ 400: missing required sections ├─ 400: appId not found ├─ 400:sections fail validation (word count, etc) └─ 200: saved GET /api/apps/{appId}/microsite-content ├─ 400:appId not found ├─ 204: no content saved yet └─ 200: return content`

---

## Summary

**You need to build 5 endpoints in Product Hub:**

1. `POST /api/apps/{appId}/generate-content` — Trigger generation
2. `GET /api/apps/{appId}/generate-content/status` — Poll for results
3. `POST /api/apps/{appId}/microsite-content` — Save generated content
4. `GET /api/apps/{appId}/microsite-content` — Retrieve saved content
5. `PUT /api/apps/{appId}/microsite-content` — Update/edit content

**The flow is:**

- Trigger → Poll → Display → Save → Retrieve

**Asset Flow Engine only needs to do:**

- Generate the 6 sections and return JSON

#### [DPH-608] [4.1-PM] Create a resource group for AssetFlow Engine (Azure Container App)

**Jira:** [DPH-608](https://datacomgroup.atlassian.net/browse/DPH-608) · **Status:** Done

| Field | Value |
|-------|--------|
| **Name** | [4.1-PM] Create a resource group for AssetFlow Engine (Azure Container App) |
| **Description** | See below |
| **Work type** | Task / Bug |
| **Status** | Done |
| **Story point estimate** | — |
| **Priority** | Critical (P1) |
| **Assignee** | Dipesh Trikam |
| **Assignees** (extra) | — |
| **Sprint** | DPH Sprint 2 |
| **Linked work items** | — |

**Description:**

_No description._

#### [DPH-617] [4.1-UX] Design My apps -> Edit Product -> Regenerate Content

**Jira:** [DPH-617](https://datacomgroup.atlassian.net/browse/DPH-617) · **Status:** To Do

| Field | Value |
|-------|--------|
| **Name** | [4.1-UX] Design My apps -> Edit Product -> Regenerate Content |
| **Description** | See below |
| **Work type** | Task / Bug |
| **Status** | To Do |
| **Story point estimate** | — |
| **Priority** | Lowest |
| **Assignee** | Ben Schaumkel |
| **Assignees** (extra) | — |
| **Sprint** | DPH Sprint 2 |
| **Linked work items** | — |

**Description:**

_No description._

#### [DPH-618] [4.1-UX] Edit Product -> accept / save changes 

**Jira:** [DPH-618](https://datacomgroup.atlassian.net/browse/DPH-618) · **Status:** To Do

| Field | Value |
|-------|--------|
| **Name** | [4.1-UX] Edit Product -> accept / save changes  |
| **Description** | See below |
| **Work type** | Task / Bug |
| **Status** | To Do |
| **Story point estimate** | — |
| **Priority** | Lowest |
| **Assignee** | Ben Schaumkel |
| **Assignees** (extra) | — |
| **Sprint** | DPH Sprint 2 |
| **Linked work items** | — |

**Description:**

_No description._

---
---

## Backend Tasks for Product Hub

### Task 1: Create "Trigger Content Generation" Endpoint

cssCopy code

`POST /api/apps/{appId}/generate-content Request: { "appId": "app_xyz123", "contentType": "basic" // or "full" later } Response: { "jobId": "job_abc456", "status": "processing", "estimatedTime": 45 // seconds }`

**What it does:**

1. Get the app's uploaded code/metadata from database
2. Call Asset Flow Engine: `POST /api/asset-flow/submit` with repo_url/zip_file
3. Store the job_id in database (links to this app)
4. Return job_id to frontend for polling

**Database changes:**

sqlCopy code

`-- Add to apps table or create new table CREATE TABLE content_generation_jobs ( jobId UUID PRIMARY KEY, appId UUID, assetFlowSubmissionId VARCHAR,  -- ID returned from Asset Flow Engine status VARCHAR,  -- processing | completed | failed generatedContent JSON,  -- Stores the 6 sections once done createdAt TIMESTAMP, completedAt TIMESTAMP )`

---

### Task 2: Create "Check Generation Status" Endpoint (Polling)

bashCopy code

`GET /api/apps/{appId}/generate-content/status Response: { "jobId": "job_abc456", "status": "completed", // or "processing" | "failed" "progress": 100, "content": { "what_it_is": "...", "who_its_for": "...","why_it_matters": "...", "how_to_use": "...", "examples": "...", "run_it": "..." } }`

**What it does:**

1. Check database for job with this appId
2. If status is "processing", call Asset Flow Engine: `GET /api/asset-flow/submit/{submissionId}`
3. If Asset Flow Engine returns "completed", update database with generated content
4. Return current status + content to frontend

---

### Task 3: Create "Save Generated Content" Endpoint

bashCopy code

`POST /api/apps/{appId}/microsite-content Request: { "appId": "app_xyz123", "sections": { "what_it_is": "...", "who_its_for": "...", "why_it_matters": "...", "how_to_use": "...", "examples": "...", "run_it": "..." }, "source": "generated" // or "manual" } Response: { "success": true, "message": "Content saved","appId": "app_xyz123" }`

**What it does:**

1. Validate all 6 sections present
2. Save to database (microsite_content table or extend apps table)
3. Mark content_generation_job as "saved"
4. Return success response

**Database changes:**

sqlCopy code

`CREATE TABLE microsite_content ( id UUID PRIMARY KEY, appId UUID, whatItIs TEXT, whoItsFor TEXT, whyItMatters TEXT, howToUseIt TEXT, examples TEXT, runIt TEXT, source VARCHAR,  -- "generated" | "manual"savedAt TIMESTAMP, updatedAt TIMESTAMP )`

---

### Task 4: Create "Get Saved Content" Endpoint

bashCopy code

`GET /api/apps/{appId}/microsite-content Response: { "appId": "app_xyz123", "hasSavedContent": true,"content": { "what_it_is": "...", "who_its_for": "...", "why_it_matters": "...", "how_to_use": "...","examples": "...", "run_it": "..." }, "savedAt": "2025-01-15T10:30:00Z", "source": "generated" // or "manual" }`

**What it does:**

1. Query database for microsite_content with this appId
2. Return content if exists
3. Return empty/null if not saved yet

---

### Task 5: Create "Update Content" Endpoint (for manual edits)

bashCopy code

`PUT /api/apps/{appId}/microsite-content Request: { "appId": "app_xyz123", "sections": { "what_it_is": "User edited this...", "who_its_for": "...", ... } } Response: { "success": true, "message": "Content updated" }`

**What it does:**

1. Update microsite_content in database
2. Set source to "manual" (since user edited)
3. Return success

---

## Architecture Diagram

sqlCopy code

`PRODUCT HUB FRONTEND ├─ Click "Generate Basic Content" │ └─ POST /api/apps/{appId}/generate-content │ └─ PRODUCT HUB BACKEND ├─ Get app metadata from database ├─ Call Asset Flow Engine: POST /api/asset-flow/submit ├─ Store jobId in database └─ Return jobId to frontend │ └─ FRONTEND STARTS POLLING │ └─ GET/api/apps/{appId}/generate-content/status │ └─ PRODUCT HUB BACKEND ├─ Call Asset Flow Engine: GET/api/asset-flow/submit/{submissionId} ├─ If completed: fetch content ├─ Update database with content └─ Return to frontend │ └─ FRONTEND DISPLAYS CONTENT │ └─ User clicks "Save" │ └─ POST /api/apps/{appId}/microsite-content │ └─ PRODUCT HUB BACKEND ├─ Validate sections ├─ Save to database └─ Return success`

---

## Implementation Order

### Phase 1: Basic Generation Flow

1. ✅ Task 1: Trigger generation endpoint

        - Fetch app repo_url from database
        - Call Asset Flow Engine
        - Store job tracking
2. ✅ Task 2: Poll status endpoint

        - Check Asset Flow Engine status
        - Fetch results when ready
        - Store in database
3. ✅ Task 4: Get saved content endpoint

        - Retrieve from database
        - Return to frontend

### Phase 2: Saving & Editing

1. ✅ Task 3: Save content endpoint

        - Validate input
        - Store in database
        - Mark as saved
2. ✅ Task 5: Update content endpoint

        - Allow user edits
        - Track source (manual vs generated)

---

## Database Schema (Quick Reference)

sqlCopy code

`-- Extend existing apps table or create new one TABLE apps ( id UUID PRIMARY KEY, name VARCHAR, repoUrl VARCHAR, uploadedAt TIMESTAMP, ...existing fields... ) -- Track generation jobs TABLEcontent_generation_jobs ( jobId UUID PRIMARY KEY, appId UUID FOREIGN KEY, assetFlowSubmissionId VARCHAR, status VARCHAR,  -- processing | completed | failed createdAt TIMESTAMP, completedAt TIMESTAMP, FOREIGN KEY (appId) REFERENCES apps(id) ) -- Store generated/edited content TABLE microsite_content ( id UUID PRIMARYKEY, appId UUID FOREIGN KEY, whatItIs TEXT, whoItsFor TEXT, whyItMatters TEXT, howToUseIt TEXT, examples TEXT, runIt TEXT, source VARCHAR,  -- generated | manual savedAt TIMESTAMP, updatedAt TIMESTAMP, FOREIGN KEY (appId) REFERENCES apps(id) )`

---

## Polling Strategy

**Frontend polls status until completion:**

javascriptRun CodeCopy code

`// Pseudo-code async function pollGenerationStatus(appId, jobId) { let status = "processing" let attempts = 0 const maxAttempts = 60  // 60 * 2sec = 2 minutes max while (status === "processing" && attempts < maxAttempts) { const response = await fetch(`/api/apps/${appId}/generate-content/status`) const data = await response.json() if (data.status === "completed") { // Display content, enable Save buttondisplayGeneratedContent(data.content) break } if (data.status === "failed") { showError("Generation failed, try again") break } // Still processing, wait 2 seconds and try again await sleep(2000) attempts++ } }`

---

## Error Handling

Each endpoint should handle:

yamlCopy code

`POST /api/apps/{appId}/generate-content ├─ 400: appId not found ├─ 400: app has no repoUrl/zipFile (can'textract metadata) ├─ 500: Asset Flow Engine unavailable └─ 200: job created (polling should happen next)GET /api/apps/{appId}/generate-content/status ├─ 400: appId not found ├─ 404: no generation job for thisapp ├─ 500: Asset Flow Engine unavailable └─ 200: current status + content (if completed) POST/api/apps/{appId}/microsite-content ├─ 400: missing required sections ├─ 400: appId not found ├─ 400:sections fail validation (word count, etc) └─ 200: saved GET /api/apps/{appId}/microsite-content ├─ 400:appId not found ├─ 204: no content saved yet └─ 200: return content`

---

## Summary

**You need to build 5 endpoints in Product Hub:**

1. `POST /api/apps/{appId}/generate-content` — Trigger generation
2. `GET /api/apps/{appId}/generate-content/status` — Poll for results
3. `POST /api/apps/{appId}/microsite-content` — Save generated content
4. `GET /api/apps/{appId}/microsite-content` — Retrieve saved content
5. `PUT /api/apps/{appId}/microsite-content` — Update/edit content

**The flow is:**

- Trigger → Poll → Display → Save → Retrieve

**Asset Flow Engine only needs to do:**

- Generate the 6 sections and return JSON

#### [DPH-608] [4.1-PM] Create a resource group for AssetFlow Engine (Azure Container App)

**Jira:** [DPH-608](https://datacomgroup.atlassian.net/browse/DPH-608) · **Status:** Done

| Field | Value |
|-------|--------|
| **Name** | [4.1-PM] Create a resource group for AssetFlow Engine (Azure Container App) |
| **Description** | See below |
| **Work type** | Task / Bug |
| **Status** | Done |
| **Story point estimate** | — |
| **Priority** | Critical (P1) |
| **Assignee** | Dipesh Trikam |
| **Assignees** (extra) | — |
| **Sprint** | DPH Sprint 2 |
| **Linked work items** | — |

**Description:**

_No description._

#### [DPH-617] [4.1-UX] Design My apps -> Edit Product -> Regenerate Content

**Jira:** [DPH-617](https://datacomgroup.atlassian.net/browse/DPH-617) · **Status:** To Do

| Field | Value |
|-------|--------|
| **Name** | [4.1-UX] Design My apps -> Edit Product -> Regenerate Content |
| **Description** | See below |
| **Work type** | Task / Bug |
| **Status** | To Do |
| **Story point estimate** | — |
| **Priority** | Lowest |
| **Assignee** | Ben Schaumkel |
| **Assignees** (extra) | — |
| **Sprint** | DPH Sprint 2 |
| **Linked work items** | — |

**Description:**

_No description._

#### [DPH-618] [4.1-UX] Edit Product -> accept / save changes 

**Jira:** [DPH-618](https://datacomgroup.atlassian.net/browse/DPH-618) · **Status:** To Do

| Field | Value |
|-------|--------|
| **Name** | [4.1-UX] Edit Product -> accept / save changes  |
| **Description** | See below |
| **Work type** | Task / Bug |
| **Status** | To Do |
| **Story point estimate** | — |
| **Priority** | Lowest |
| **Assignee** | Ben Schaumkel |
| **Assignees** (extra) | — |
| **Sprint** | DPH Sprint 2 |
| **Linked work items** | — |

**Description:**

_No description._

---
---

## Backend Tasks for Product Hub

### Task 1: Create "Trigger Content Generation" Endpoint

cssCopy code

`POST /api/apps/{appId}/generate-content Request: { "appId": "app_xyz123", "contentType": "basic" // or "full" later } Response: { "jobId": "job_abc456", "status": "processing", "estimatedTime": 45 // seconds }`

**What it does:**

1. Get the app's uploaded code/metadata from database
2. Call Asset Flow Engine: `POST /api/asset-flow/submit` with repo_url/zip_file
3. Store the job_id in database (links to this app)
4. Return job_id to frontend for polling

**Database changes:**

sqlCopy code

`-- Add to apps table or create new table CREATE TABLE content_generation_jobs ( jobId UUID PRIMARY KEY, appId UUID, assetFlowSubmissionId VARCHAR,  -- ID returned from Asset Flow Engine status VARCHAR,  -- processing | completed | failed generatedContent JSON,  -- Stores the 6 sections once done createdAt TIMESTAMP, completedAt TIMESTAMP )`

---

### Task 2: Create "Check Generation Status" Endpoint (Polling)

bashCopy code

`GET /api/apps/{appId}/generate-content/status Response: { "jobId": "job_abc456", "status": "completed", // or "processing" | "failed" "progress": 100, "content": { "what_it_is": "...", "who_its_for": "...","why_it_matters": "...", "how_to_use": "...", "examples": "...", "run_it": "..." } }`

**What it does:**

1. Check database for job with this appId
2. If status is "processing", call Asset Flow Engine: `GET /api/asset-flow/submit/{submissionId}`
3. If Asset Flow Engine returns "completed", update database with generated content
4. Return current status + content to frontend

---

### Task 3: Create "Save Generated Content" Endpoint

bashCopy code

`POST /api/apps/{appId}/microsite-content Request: { "appId": "app_xyz123", "sections": { "what_it_is": "...", "who_its_for": "...", "why_it_matters": "...", "how_to_use": "...", "examples": "...", "run_it": "..." }, "source": "generated" // or "manual" } Response: { "success": true, "message": "Content saved","appId": "app_xyz123" }`

**What it does:**

1. Validate all 6 sections present
2. Save to database (microsite_content table or extend apps table)
3. Mark content_generation_job as "saved"
4. Return success response

**Database changes:**

sqlCopy code

`CREATE TABLE microsite_content ( id UUID PRIMARY KEY, appId UUID, whatItIs TEXT, whoItsFor TEXT, whyItMatters TEXT, howToUseIt TEXT, examples TEXT, runIt TEXT, source VARCHAR,  -- "generated" | "manual"savedAt TIMESTAMP, updatedAt TIMESTAMP )`

---

### Task 4: Create "Get Saved Content" Endpoint

bashCopy code

`GET /api/apps/{appId}/microsite-content Response: { "appId": "app_xyz123", "hasSavedContent": true,"content": { "what_it_is": "...", "who_its_for": "...", "why_it_matters": "...", "how_to_use": "...","examples": "...", "run_it": "..." }, "savedAt": "2025-01-15T10:30:00Z", "source": "generated" // or "manual" }`

**What it does:**

1. Query database for microsite_content with this appId
2. Return content if exists
3. Return empty/null if not saved yet

---

### Task 5: Create "Update Content" Endpoint (for manual edits)

bashCopy code

`PUT /api/apps/{appId}/microsite-content Request: { "appId": "app_xyz123", "sections": { "what_it_is": "User edited this...", "who_its_for": "...", ... } } Response: { "success": true, "message": "Content updated" }`

**What it does:**

1. Update microsite_content in database
2. Set source to "manual" (since user edited)
3. Return success

---

## Architecture Diagram

sqlCopy code

`PRODUCT HUB FRONTEND ├─ Click "Generate Basic Content" │ └─ POST /api/apps/{appId}/generate-content │ └─ PRODUCT HUB BACKEND ├─ Get app metadata from database ├─ Call Asset Flow Engine: POST /api/asset-flow/submit ├─ Store jobId in database └─ Return jobId to frontend │ └─ FRONTEND STARTS POLLING │ └─ GET/api/apps/{appId}/generate-content/status │ └─ PRODUCT HUB BACKEND ├─ Call Asset Flow Engine: GET/api/asset-flow/submit/{submissionId} ├─ If completed: fetch content ├─ Update database with content └─ Return to frontend │ └─ FRONTEND DISPLAYS CONTENT │ └─ User clicks "Save" │ └─ POST /api/apps/{appId}/microsite-content │ └─ PRODUCT HUB BACKEND ├─ Validate sections ├─ Save to database └─ Return success`

---

## Implementation Order

### Phase 1: Basic Generation Flow

1. ✅ Task 1: Trigger generation endpoint

        - Fetch app repo_url from database
        - Call Asset Flow Engine
        - Store job tracking
2. ✅ Task 2: Poll status endpoint

        - Check Asset Flow Engine status
        - Fetch results when ready
        - Store in database
3. ✅ Task 4: Get saved content endpoint

        - Retrieve from database
        - Return to frontend

### Phase 2: Saving & Editing

1. ✅ Task 3: Save content endpoint

        - Validate input
        - Store in database
        - Mark as saved
2. ✅ Task 5: Update content endpoint

        - Allow user edits
        - Track source (manual vs generated)

---

## Database Schema (Quick Reference)

sqlCopy code

`-- Extend existing apps table or create new one TABLE apps ( id UUID PRIMARY KEY, name VARCHAR, repoUrl VARCHAR, uploadedAt TIMESTAMP, ...existing fields... ) -- Track generation jobs TABLEcontent_generation_jobs ( jobId UUID PRIMARY KEY, appId UUID FOREIGN KEY, assetFlowSubmissionId VARCHAR, status VARCHAR,  -- processing | completed | failed createdAt TIMESTAMP, completedAt TIMESTAMP, FOREIGN KEY (appId) REFERENCES apps(id) ) -- Store generated/edited content TABLE microsite_content ( id UUID PRIMARYKEY, appId UUID FOREIGN KEY, whatItIs TEXT, whoItsFor TEXT, whyItMatters TEXT, howToUseIt TEXT, examples TEXT, runIt TEXT, source VARCHAR,  -- generated | manual savedAt TIMESTAMP, updatedAt TIMESTAMP, FOREIGN KEY (appId) REFERENCES apps(id) )`

---

## Polling Strategy

**Frontend polls status until completion:**

javascriptRun CodeCopy code

`// Pseudo-code async function pollGenerationStatus(appId, jobId) { let status = "processing" let attempts = 0 const maxAttempts = 60  // 60 * 2sec = 2 minutes max while (status === "processing" && attempts < maxAttempts) { const response = await fetch(`/api/apps/${appId}/generate-content/status`) const data = await response.json() if (data.status === "completed") { // Display content, enable Save buttondisplayGeneratedContent(data.content) break } if (data.status === "failed") { showError("Generation failed, try again") break } // Still processing, wait 2 seconds and try again await sleep(2000) attempts++ } }`

---

## Error Handling

Each endpoint should handle:

yamlCopy code

`POST /api/apps/{appId}/generate-content ├─ 400: appId not found ├─ 400: app has no repoUrl/zipFile (can'textract metadata) ├─ 500: Asset Flow Engine unavailable └─ 200: job created (polling should happen next)GET /api/apps/{appId}/generate-content/status ├─ 400: appId not found ├─ 404: no generation job for thisapp ├─ 500: Asset Flow Engine unavailable └─ 200: current status + content (if completed) POST/api/apps/{appId}/microsite-content ├─ 400: missing required sections ├─ 400: appId not found ├─ 400:sections fail validation (word count, etc) └─ 200: saved GET /api/apps/{appId}/microsite-content ├─ 400:appId not found ├─ 204: no content saved yet └─ 200: return content`

---

## Summary

**You need to build 5 endpoints in Product Hub:**

1. `POST /api/apps/{appId}/generate-content` — Trigger generation
2. `GET /api/apps/{appId}/generate-content/status` — Poll for results
3. `POST /api/apps/{appId}/microsite-content` — Save generated content
4. `GET /api/apps/{appId}/microsite-content` — Retrieve saved content
5. `PUT /api/apps/{appId}/microsite-content` — Update/edit content

**The flow is:**

- Trigger → Poll → Display → Save → Retrieve

**Asset Flow Engine only needs to do:**

- Generate the 6 sections and return JSON

#### [DPH-608] [4.1-PM] Create a resource group for AssetFlow Engine (Azure Container App)

**Jira:** [DPH-608](https://datacomgroup.atlassian.net/browse/DPH-608) · **Status:** Done

| Field | Value |
|-------|--------|
| **Name** | [4.1-PM] Create a resource group for AssetFlow Engine (Azure Container App) |
| **Description** | See below |
| **Work type** | Task / Bug |
| **Status** | Done |
| **Story point estimate** | — |
| **Priority** | Critical (P1) |
| **Assignee** | Dipesh Trikam |
| **Assignees** (extra) | — |
| **Sprint** | DPH Sprint 2 |
| **Linked work items** | — |

**Description:**

_No description._

#### [DPH-617] [4.1-UX] Design My apps -> Edit Product -> Regenerate Content

**Jira:** [DPH-617](https://datacomgroup.atlassian.net/browse/DPH-617) · **Status:** To Do

| Field | Value |
|-------|--------|
| **Name** | [4.1-UX] Design My apps -> Edit Product -> Regenerate Content |
| **Description** | See below |
| **Work type** | Task / Bug |
| **Status** | To Do |
| **Story point estimate** | — |
| **Priority** | Lowest |
| **Assignee** | Ben Schaumkel |
| **Assignees** (extra) | — |
| **Sprint** | DPH Sprint 2 |
| **Linked work items** | — |

**Description:**

_No description._

#### [DPH-618] [4.1-UX] Edit Product -> accept / save changes 

**Jira:** [DPH-618](https://datacomgroup.atlassian.net/browse/DPH-618) · **Status:** To Do

| Field | Value |
|-------|--------|
| **Name** | [4.1-UX] Edit Product -> accept / save changes  |
| **Description** | See below |
| **Work type** | Task / Bug |
| **Status** | To Do |
| **Story point estimate** | — |
| **Priority** | Lowest |
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
---
---
---
---
