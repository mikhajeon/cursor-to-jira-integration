---
name: user-stories-formatting
description: Reference when creating, reviewing, or refining user stories and acceptance criteria. Use for writing/generating user stories, breaking down epics into stories, or formatting for Jira/Confluence.
---

# SKILL: Writing User Stories & Acceptance Criteria

This skill applies to any project. Reference it whenever creating, reviewing, or refining user stories and acceptance criteria.

> **When to use this skill — triggers:**
> - Writing or generating user stories
> - Breaking down an epic into user stories
> - Reviewing, refining, or consolidating existing user stories
> - Creating acceptance criteria for any feature or story

---

## User Story Format

```
## US-[Epic].[Number]: [Actor] [Action]

As a **[actor]**,  
I want [generic goal],  
So that [user outcome].
```

### Rules
- Title must name the **actor and their action** — e.g. `App-Creator Submits for Approval`, not just `Submit for Approval`
- The **user story statement** (`As a... I want... So that...`) must be **generic** — avoid specific feature names, button labels, or implementation detail
- Specifics belong in the **ACs**, not the story statement
- Each line (`As a`, `I want`, `So that`) must be on its own line with **two trailing spaces** for hard line breaks in Markdown
- User stories must be told from the **user's perspective** — never from a developer's perspective. If a developer story is needed, reframe it from the admin's or app-creator's perspective, or drop it as a technical task

### Actors
Define actors based on the project context. Always use the most specific actor relevant to the story — avoid vague terms like "person" or "someone" where a more precise role exists. Common examples: `user`, `admin`, `customer`, `manager`, `reviewer`, `developer`.

---

## Acceptance Criteria Format

```
**Acceptance Criteria:**
1. Plain statement of expected behaviour
2. Another behaviour — with inline code for `button labels`, `statuses`, and `UI elements`
3. When a list of items is needed:
   - 3.1 First item
   - 3.2 Second item
   - 3.3 Third item
```

### Rules
- **No Given/When/Then** — write ACs as direct numbered statements
- Use **indented numbered lists** when an AC contains a list of items — indent with spaces and continue the numbering (e.g. 1. 2. 3. nested under the parent AC). Never use manually written sub-numbers like 3.1, 3.2 or plain bullet points under an AC
- Keep ACs **concise** — one behaviour per point
- Use **inline code** for: button labels, status values, UI element names, URL patterns, field names
- ACs should be **specific** — include the detail that the user story intentionally omits
- Sequence matters — order ACs to follow the user journey

---

## Combining User Stories

When reviewing a set of user stories, consider merging when:
- Two stories have the **same actor and same screen** (e.g. activate/deactivate + analytics → both admin dashboard actions)
- One story is a **sub-flow of another** (e.g. revalidate = just re-running validate → merge into the validate story)
- Two stories are **sequential steps in one session** with no natural break (e.g. refactor + review refactored code)

Keep separate when:
- Stories have **different actors**
- One story is a **distinct user decision point** (e.g. submit for approval is separate from reviewing content)
- The story is **meaty enough** on its own (e.g. approval/rejection workflow)

Target: reduce story count where possible without losing clarity.

---

## Titles

Title format: `[Actor] [Verb] [Object]`

- ✅ `App-Creator Generates Basic Content`
- ✅ `Admin Approves or Rejects a Submission`
- ✅ `Security Team Reviews App via the Hub`
- ❌ `Basic Content Generation`
- ❌ `Approval`

If multiple actors share a story, use the primary beneficiary as the actor in the title.

---

## Pastable Format

When presenting user stories, always present each as a **self-contained fenced code block** so they can be copied directly into Jira or Confluence:

````
**US-X.X: Title**
```markdown
## US-X.X: Title

As a **actor**,  
I want ...,  
So that ...

**Acceptance Criteria:**
1. ...
2. ...
```
````

---

## Project Reference Example: Agent Factory — Product Hub (Datacom)

The following is a project-specific reference. It is not part of the general skill.

### Actors
- `user` — generic (app-creator or app-user)
- `app-creator` — someone submitting a micro-app
- `app-user` — someone browsing/using micro-apps
- `admin` — Datacom admin managing approvals and visibility
- `security team reviewer` — reviewing apps before production release

### Terminology

| Term | Meaning |
|---|---|
| `Product Draft` | In-progress submission workspace (formerly "Development Instance") |
| `app-creator` | User submitting a micro-app |
| `app-user` | User browsing/using micro-apps |
| `AFE` | AssetFlow Engine — standalone Azure Container App handling AI asset generation |
| `UAT — Staging` | Restricted pre-production environment, visible on Hub to UAT group + security team |
| `Active` / `Inactive` | Admin-controlled visibility toggle for published apps |
| `Featured` | Admin checkbox — surfaces app in Featured section on Hub homepage; only available for Active apps |
| Hub | Product Hub — the platform being built |

### Epic Structure

| Epic | Title | Milestone |
|---|---|---|
| Epic 0 | Technical Backbone | M1 |
| Epic 1 | Explore the Hub | M1 |
| Epic 2 | (reserved) | — |
| Epic 3 | Upload, Validate & Refactor | M1–M2 |
| Epic 4 | AI Content Generation | M2 |
| Epic 5 | Product Approval & Admin Dashboard | M3 |
| Epic 6 | Test & Go Live | M4 |
