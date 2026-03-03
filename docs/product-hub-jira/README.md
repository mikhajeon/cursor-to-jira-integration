# Product Hub Jira — Epics & User Stories

This folder holds epics 0–7 and their user stories from the **Product Hub** Jira project (DPH). Each epic is a **folder**; each user story is a **single .md file** named like the Jira ticket (e.g. `[US-1.2]: Visit Product Catalogue.md`). The content of each .md is the issue **description** from Jira: the user story (As a… I want… So that…) and acceptance criteria.

## Structure

```
docs/product-hub-jira/
  [EPIC-0]: App Foundations/
    [US-0.1]: Platform Foundations (...).md
    [US-0.2]: Email & notifications foundation.md
    [Task-0.1]: Define and create Micro-app database schema.md
    [Task-0.2] Deploy Web app on Azure.md
    [Task-0.3]: Set up internal feature flag system.md
    [Task-0.4]: Create Micro-apps API Endpoint.md
    [Task-0.5]: Set domain name to hub.datacom.com.md
    ...
  [EPIC-1]: Web app core layout/
    [US-1.1]: Visit Landing Page.md
    [US-1.2]: Visit Directory Page.md
    [US-1.3]: Visit App Detail Modal (Microsite).md
    ...
  [EPIC-2]: User Authentication & Role Management/
  [EPIC-3]: Product Upload & Assisted Development/
  [EPIC-4]: AI Content Generator/
  [EPIC-5]: Product Approval & Admin Dashboard/
  [EPIC-6]: Assisted Security Testing & Deployment/
  [EPIC-7]: User Reviews, Ratings, Sharing & Other/
```

## Work types (Jira issuetypes)

In the **DPH** (Datacom Product Hub) Jira project, these work item types are used:

| Work type | Jira issuetype | In this folder |
|-----------|----------------|----------------|
| **Epic** | Epic | One **folder** per epic (e.g. `[EPIC-1]: Web app core layout/`). Epics group stories and tasks. |
| **Story** | Story | One **.md file** per story, named like the ticket (e.g. `[US-1.1]: Visit Landing Page.md`). Status sync and Epic status derivation use **Stories only** (Tasks are skipped). |
| **Task** | Task | One **.md file** per task (e.g. `[TASK-1.1]: Define and create Micro-app database schema.md`). Tasks are not included in status-from-subtasks or sync-status-to-jira. |
| **Subtask** | Subtask | No separate file: subtasks live **inside** the parent story/task .md under **### Subtasks**. Each subtask is a section with Jira link, status, assignee, and description. |

Summary: **Epic** = folder; **Story** / **Task** = one .md each; **Subtask** = section within a story/task .md.

## Epics 0–7

| Epic | Title | Folder |
|------|-------|--------|
| 0 | App Foundations | [[EPIC-0]: App Foundations](./%5BEPIC-0%5D%3A%20App%20Foundations/) |
| 1 | Web app core layout | [[EPIC-1]: Web app core layout](./%5BEPIC-1%5D%3A%20Web%20app%20core%20layout/) |
| 2 | User Authentication & Role Management | [[EPIC-2]: User Authentication & Role Management](./%5BEPIC-2%5D%3A%20User%20Authentication%20%26%20Role%20Management/) |
| 3 | Product Upload & Assisted Development | [[EPIC-3]: Product Upload & Assisted Development](./%5BEPIC-3%5D%3A%20Product%20Upload%20%26%20Assisted%20Development/) |
| 4 | AI Content Generator | [[EPIC-4]: AI Content Generator](./%5BEPIC-4%5D%3A%20AI%20Content%20Generator/) |
| 5 | Product Approval & Admin Dashboard | [[EPIC-5]: Product Approval & Admin Dashboard](./%5BEPIC-5%5D%3A%20Product%20Approval%20%26%20Admin%20Dashboard/) |
| 6 | Assisted Security Testing & Deployment | [[EPIC-6]: Assisted Security Testing & Deployment](./%5BEPIC-6%5D%3A%20Assisted%20Security%20Testing%20%26%20Deployment/) |
| 7 | User Reviews, Ratings, Sharing & Other | [[EPIC-7]: User Reviews, Ratings, Sharing & Other](./%5BEPIC-7%5D%3A%20User%20Reviews%2C%20Ratings%2C%20Sharing%20%26%20Other/) |

Each epic folder contains one .md per user story/task; file names match the Jira ticket (e.g. `[US-1.2]: ...`). Each .md includes the Jira link and the full description (user story + acceptance criteria).


## Epic status (derived from User Story statuses)

| Epic | Folder | Status |
|------|--------|-------|
| 0 | [EPIC-0]: App Foundations | In Progress |
| 1 | [EPIC-1]: Web app core layout | In Progress |
| 2 | [EPIC-2]: User Authentication & Role Management | To Do |
| 3 | [EPIC-3]: Product Upload & Assisted Development | To Do |
| 4 | [EPIC-4]: AI Content Generator | To Do |
| 5 | [EPIC-5]: Product Approval & Admin Dashboard | To Do |
| 6 | [EPIC-6]: Assisted Security Testing & Deployment | To Do |
| 7 | [EPIC-7]: User Reviews, Ratings, Sharing & Other | To Do |


## Workflow for making changes

When you want to change user stories or subtasks:

1. **Edit the .md files here first** — update the relevant file(s) under `docs/product-hub-jira/` (e.g. story text, acceptance criteria, subtask list).
2. **Review** — the agent will list the changes made and ask you to **confirm**.
3. **Sync to Jira** — only after you confirm, the agent will update Jira (via the API scripts) so that Jira matches the .md.

So: **.md is the source of truth for edits**; Jira is updated only after you confirm.

## Re-syncing from Jira

From the project root (so `.env` is loaded):

1. **Stories and descriptions** (epic folders + one .md per story with Jira description):
   ```bash
   node scripts/sync-product-hub-stories.mjs
   ```

2. **Story details and subtasks** (assignee, priority, story points, sprint, linked items, and full subtask list with descriptions):
   ```bash
   node scripts/sync-jira-subtasks-to-md.mjs
   ```

Run (1) to refresh story content from Jira; run (2) to refresh story metadata and subtask details in each .md.

3. **Consolidate ✓ subtasks into [UX] / [Dev FE] / [Dev BE]** (one-off or when you have new ✓ subtasks):
   ```bash
   node scripts/consolidate-checkmark-subtasks.mjs        # run for real
   node scripts/consolidate-checkmark-subtasks.mjs --dry-run   # preview only
   ```
   Finds subtasks whose summary starts with ✓, groups them by role ([UX], [Dev FE], [Dev BE]), creates or updates one subtask per role per story with a bullet-list description of the consolidated names, then deletes the original ✓ subtasks.

4. **Rename role subtasks** to `[X.Y-UX] Tasks`, `[X.Y-FE] Tasks`, `[X.Y-BE] Tasks` (X.Y = user story serial from parent):
   ```bash
   node scripts/rename-role-subtasks.mjs        # run for real
   node scripts/rename-role-subtasks.mjs --dry-run   # preview only
   ```
   Only renames subtasks whose summary is exactly `[UX]`, `[Dev FE]`, or `[Dev BE]`.

5. **Add placeholder discipline subtasks** to user stories that have no subtasks (adds `[X.Y-UX] Tasks`, `[X.Y-FE] Tasks`, `[X.Y-BE] Tasks`):
   ```bash
   node scripts/add-placeholder-subtasks.mjs        # run for real
   node scripts/add-placeholder-subtasks.mjs --dry-run   # preview only
   ```
   Skips stories whose summary has no `[US-X.Y]` or `[TASK-X.Y]` serial.

## Show subtasks on the Jira board (instead of user stories)

To have the **board show subtask cards** (e.g. [7.4-UX] Tasks, [7.4-FE] Tasks) instead of parent stories:

1. **JQL for subtasks only:**  
   `project = DPH AND issuetype = Subtask`

2. **In Jira:** Open your DPH board → **Board settings** (gear) → **General** → under **Filter**, click **Edit** (or the filter name).  
   - Either **edit the existing filter** and set the JQL to the line above, then Save.  
   - Or **create a new filter** with that JQL (e.g. name: "DPH - Subtasks"), Save, then in Board settings set the board to use that filter.

3. **Optional – create the filter via script** (creates a saved filter you can then select for the board):  
   ```bash
   node scripts/create-subtasks-filter.mjs
   ```  
   Then in Board settings → General → Filter, choose the filter created by the script (e.g. "DPH - Subtasks only").
