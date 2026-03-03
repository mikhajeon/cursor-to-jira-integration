# Test Planning and Execution Workflow Checklist

> This test plan follows a structured review loop to ensure coverage and validity.  
> **Mark each step [--] with P (Pass) or F (Fail) based on the stated Expected outcome.**

### Phase 1: Pre-Test Review

1. [--] Draft Test Plan against User Story, its ACs and Subtasks. **Expected:** Test plan aligns with US-1.3, all ACs and subtasks covered.
2. [--] Review Test Plan with Developers (BE/FE). **Expected:** Technical scenarios confirmed or feedback captured.
3. [--] Incorporate Developer feedback (if any):
   1. 
4. [--] Review Test Plan with PO/Technical Lead. **Expected:** Test plan approved or feedback captured.
5. [--] Incorporate PO/TL feedback (if any):
   1. 
6. [--] Verify Jira DPH-340 unchanged since Test Plan approval. **Expected:** Story/ACs match; update scenarios if not.

### Phase 2: Test Execution

1. [--] Confirm test environment accessible and latest build deployed. **Expected:** Environment ready for testing.
2. [--] Execute all test scenarios and record results. **Expected:** Each step marked P or F.
3. [--] Log any bugs/issues in Jira. **Expected:** Defects logged with steps and expected vs actual.

### Phase 3: Post-Test Verification

1. [--] Verify test results with Developers. **Expected:** Developers reviewed outcomes.
2. [--] Developers agree with pass/fail and any bugs. **Expected:** Agreement or disputes noted.
3. [--] Resolve any disputed results:
   1. 
4. [--] Sign-off with PO/TL. **Expected:** Test results confirmed.
5. [--] Move Jira story and subtasks to Done. **Expected:** DPH-340 and subtasks transitioned.

---

# Test Case: [US-1.3]: Visit App Detail Modal (Microsite)

**Mark each step [--] with P or F. Every step states the Expected outcome to judge pass/fail.**

---

### User Story

**Jira Key:** DPH-340  
**User Story Summary:** [US-1.3]: Visit App Detail Modal (Microsite)

**User Story:**
> *As an **app-user**,*  
> *I want to view a product's detail page,*  
> *So that I can learn about a micro-app before deciding to use it.*

**Epic:** [EPIC-1]: Web app core layout (DPH-181)  
**Sprint:** DPH Sprint 2  
**Priority:** Critical (P1)  
**Story points:** 6  
**Assignee:** Ben Schaumkel

**Test Status:**  
🔘 NotStarted  🔵 InProgress  🟢 Pass  🔴 Fail  🟡 Blocked  ⚪ Skipped

---

### Acceptance Criteria (source for test steps)

- **AC1:** Clicking a micro-app card from the catalogue or any listing opens the product's detail view (modal).
- **AC2:** The detail page displays: app name, tier, category tags, role tags, creator name, submission date.
- **AC3:** The Introduction, Business Value, and Example Use Case sections (Epic 4) are displayed.
- **AC4:** If a user guide (HTML slideshow) was generated, it is accessible and playable on the page.
- **AC5:** If a video guide (MP4) was generated, it is embedded and playable on the page.
- **AC6:** Launch App button is visible and links to the app's live URL; disabled with tooltip if Unpublished.
- **AC7:** Favourite button allows app-users to save the app to their catalogue filter of faves.
- **AC8:** The product's current lifecycle status is displayed as a badge (App Lifecycle Status Reference Table).
- **AC9:** The app detail modal renders as a scrollable full-width modal, larger than the Agent Library modal.

---

### Subtask Reference

- **DPH-538** — [1.3-FE] Tasks: modal trigger, shell, metadata, content sections, guides, Launch/Favourite, a11y, responsive, backend integration (Rithvik Sharma)
- **DPH-539** — [1.3-BE] Tasks: GET product by ID/slug, metadata/tags, rich content, guide/video URLs, launch URL/status, favourites API, OpenAPI (Gavin Yan)

---

### Part A: BA Functional Test Scenarios

> Steps are written so Expected outcome defines pass (P) or fail (F). Mark [--] with P or F.

---

#### Scenario A1: Open product detail from catalogue or listing (AC1)

**Given:** User is on the Catalogue page or a listing (e.g. search results, favourites).  
**When:** User clicks a micro-app card.  
**Then:** Product detail opens in a modal; correct product is shown.

1. [--] Click a micro-app card on the Catalogue page. **Expected:** Product Detail modal opens; no full-page redirect.
2. [--] Confirm modal header shows app identity. **Expected:** App name in header matches the card clicked.
3. [--] Close modal using the close (X) control. **Expected:** Modal closes; catalogue/listing page remains visible.
4. [--] Click a different micro-app card. **Expected:** Modal opens with that product’s details.
5. [--] From another listing (e.g. search or favourites), click a card. **Expected:** Same detail modal opens for that product.

**Notes / Bugs:**

---

#### Scenario A2: Modal close — X, ESC, click outside (AC1; DPH-538)

**Given:** Product Detail modal is open.  
**When:** User closes the modal.  
**Then:** Modal closes via X, ESC, and (if design allows) click outside; focus returns to page.

1. [--] Click the close (X) button. **Expected:** Modal closes.
2. [--] Re-open modal, then press ESC. **Expected:** Modal closes.
3. [--] Re-open modal, then click backdrop (if design allows). **Expected:** Modal closes.
4. [--] After closing, press Tab. **Expected:** Focus returns to page; no focus trapped in hidden modal.

**Notes / Bugs:**

---

#### Scenario A3: Detail page displays app name, tier, tags, creator, submission date (AC2)

**Given:** Product Detail modal is open for an app with metadata.  
**When:** User views the modal content.  
**Then:** App name, tier, category tags, role tags, creator name, and submission date are displayed.

1. [--] Open detail for an app with full metadata. **Expected:** App name is visible (e.g. in header).
2. [--] Locate tier. **Expected:** Tier is shown (e.g. Business, Enterprise, Standard).
3. [--] Locate category tags. **Expected:** One or more category tags are displayed.
4. [--] Locate role tags. **Expected:** One or more role tags are displayed.
5. [--] Locate creator name. **Expected:** Creator name is displayed.
6. [--] Locate submission date. **Expected:** Submission date is displayed in a readable format.
7. [--] Open detail for an app with minimal metadata. **Expected:** Present fields show; missing ones are empty or omitted; no errors.

**Notes / Bugs:**

---

#### Scenario A4: Introduction, Business Value, Example Use Case sections (AC3)

**Given:** Product has Epic 4 content.  
**When:** User scrolls the modal body.  
**Then:** Introduction, Business Value, and Example Use Case are displayed; missing sections handled without error.

1. [--] Open detail for an app with all three sections. **Expected:** Introduction, Business Value, and Example Use Case are all visible.
2. [--] Check section formatting. **Expected:** Rich text/HTML renders correctly (headings, lists, links).
3. [--] Open detail for an app missing one or more sections. **Expected:** Present sections show; missing sections absent or gentle empty state; no raw errors.
4. [--] Scroll through long content. **Expected:** Modal body scrolls; no layout break.

**Notes / Bugs:**

---

#### Scenario A5: User guide — HTML slideshow (AC4)

**Given:** Product has an HTML slideshow user guide.  
**When:** User views and interacts in the modal.  
**Then:** Guide is accessible and playable; if no guide, section is hidden.

1. [--] Open detail for an app that has an HTML user guide. **Expected:** User guide section is visible.
2. [--] Use next/previous or play controls. **Expected:** Slideshow is playable within the modal.
3. [--] Open detail for an app with no HTML guide. **Expected:** User guide section is hidden or not present.

**Notes / Bugs:**

---

#### Scenario A6: Video guide — MP4 (AC5)

**Given:** Product has an MP4 video guide.  
**When:** User views and plays the video in the modal.  
**Then:** Video is embedded and playable (play, pause, fullscreen if available); if no video, section is hidden.

1. [--] Open detail for an app that has an MP4 video guide. **Expected:** Video section is visible with embedded player.
2. [--] Click play. **Expected:** Video plays.
3. [--] Click pause. **Expected:** Video pauses.
4. [--] Use fullscreen control (if available). **Expected:** Fullscreen works or degrades gracefully.
5. [--] Open detail for an app with no video. **Expected:** Video section is hidden or not present.

**Notes / Bugs:**

---

#### Scenario A7: Launch App button — visible, link, disabled when Unpublished (AC6)

**Given:** Product Detail modal is open.  
**When:** User views or uses the Launch App button.  
**Then:** Button is visible; when Active it opens live URL in new tab; when Unpublished it is disabled with tooltip.

1. [--] Open detail for an Active app. **Expected:** Launch App button is visible and enabled.
2. [--] Click Launch App. **Expected:** App’s live URL opens in a new tab.
3. [--] Open detail for an Unpublished/Inactive app. **Expected:** Launch App button is disabled.
4. [--] Hover or focus the disabled Launch App button. **Expected:** Tooltip explains app is inactive/unpublished.

**Notes / Bugs:**

---

#### Scenario A8: Favourite button (AC7)

**Given:** User is viewing a product in the detail modal.  
**When:** User uses the Favourite control.  
**Then:** App can be saved to favourites and UI reflects state; aligns with catalogue “favourites” filter.

1. [--] Open detail for an app not favourited. **Expected:** Favourite button is visible (e.g. “Favourite” or heart outline).
2. [--] Click Favourite. **Expected:** Button state updates (e.g. filled heart or “Unfavourite”); no error.
3. [--] Close modal and re-open same app (or check My Favourites). **Expected:** App appears as favourited.
4. [--] Click to unfavourite. **Expected:** Favourite is removed; UI updates.

**Notes / Bugs:**

---

#### Scenario A9: Lifecycle status badge (AC8)

**Given:** Product Detail modal is open.  
**When:** User looks at the product’s status.  
**Then:** Current lifecycle status is shown as a badge per App Lifecycle Status Reference Table.

1. [--] Open detail for a Published/Active app. **Expected:** Status badge visible and matches (e.g. Published, Active).
2. [--] Open detail for UAT/Staging app. **Expected:** Environment badge shown (e.g. UAT, Staging) where applicable.
3. [--] Open detail for Unpublished/Inactive app. **Expected:** Status reflects inactive/unpublished.

**Notes / Bugs:**

---

#### Scenario A10: Modal size and scroll — full-width, larger than Agent Library, scrollable (AC9)

**Given:** User opens the Product Detail modal.  
**When:** User compares to Agent Library modal and scrolls.  
**Then:** Detail modal is larger, full-width, and scrollable; background does not scroll.

1. [--] Open Product Detail modal. **Expected:** Modal is visibly larger than Agent Library modal (if present).
2. [--] Check modal width. **Expected:** Modal is full-width per design.
3. [--] Scroll inside the modal body. **Expected:** Body scrolls vertically; background page does not scroll.
4. [--] Scroll to bottom. **Expected:** Launch App and Favourite are reachable (footer or end of scroll).

**Notes / Bugs:**

---

#### Scenario A11: Loading and error states (DPH-538 integration)

**Given:** Backend or mock can simulate load/failure.  
**When:** Detail is loading or fails.  
**Then:** Loading state shown; errors show user-friendly message; no crash.

1. [--] Open a product detail and observe during load. **Expected:** Loading state (skeleton or spinner) is shown.
2. [--] If possible: simulate 404 for product ID. **Expected:** User-friendly “not found” or error message; no raw stack trace.
3. [--] If possible: simulate 500 or timeout. **Expected:** Graceful error message; modal can be closed.

**Notes / Bugs:**

---

### Part B: Technical QA Scenarios

> Mark [--] with P or F. Verify results with developers where indicated.

---

#### Scenario B1: Console — no unexpected errors (DPH-538)

**Given:** DevTools Console is open and cleared.  
**When:** User opens and uses the Product Detail modal.  
**Then:** No new red (unexpected) errors appear.

1. [--] Clear Console; open Product Detail modal from a card. **Expected:** No red errors in console.
2. [--] Scroll modal; use video/slideshow if present; click Launch App; toggle Favourite. **Expected:** No new red errors.
3. [--] Close modal (X, then ESC, then backdrop if applicable). **Expected:** No errors on close.

**Scenario verified by dev:** [--]  
**Test results verified by dev:** [--]  
**Notes / Bugs:**

---

#### Scenario B2: Responsive — tablet (~768px) (DPH-538)

**Given:** Viewport set to ~768px.  
**When:** User opens and uses the Product Detail modal.  
**Then:** Layout adapts; no horizontal overflow; content usable.

1. [--] Set viewport to 768px; open detail modal. **Expected:** Modal fits viewport; no horizontal overflow.
2. [--] Scroll modal body. **Expected:** Content stacks and scrolls correctly.
3. [--] Use Launch App and Favourite. **Expected:** Buttons are tappable and visible.

**Scenario verified by dev:** [--]  
**Test results verified by dev:** [--]  
**Notes / Bugs:**

---

#### Scenario B3: Responsive — mobile (~375px) (DPH-538)

**Given:** Viewport set to ~375px.  
**When:** User opens and uses the Product Detail modal.  
**Then:** Modal is fullscreen or near-fullscreen; content stacks; no horizontal scroll.

1. [--] Set viewport to 375px; open detail modal. **Expected:** Modal is fullscreen or near-fullscreen.
2. [--] Scroll and use Launch App and Favourite. **Expected:** All sections reachable; buttons tappable.
3. [--] Check for horizontal scroll. **Expected:** No horizontal scrollbar.

**Scenario verified by dev:** [--]  
**Test results verified by dev:** [--]  
**Notes / Bugs:**

---

#### Scenario B4: Accessibility — focus trap and keyboard (DPH-538)

**Given:** Product Detail modal is open; keyboard only.  
**When:** User tabs and uses Enter/Space/ESC.  
**Then:** Focus trapped in modal; all controls reachable; ESC closes; focus returns on close.

1. [--] Open modal. **Expected:** Focus moves into modal (e.g. first focusable element or close).
2. [--] Tab through modal. **Expected:** Focus remains inside modal; does not jump to background.
3. [--] Tab to Close, Launch App, Favourite; activate with Enter/Space. **Expected:** Each is focusable and activatable.
4. [--] Press ESC. **Expected:** Modal closes.
5. [--] After close, Tab. **Expected:** Focus returns to trigger or next sensible element.

**Scenario verified by dev:** [--]  
**Test results verified by dev:** [--]  
**Notes / Bugs:**

---

#### Scenario B5: Accessibility — ARIA and tooltips (DPH-538)

**Given:** Product Detail modal is open; DevTools or assistive tech available.  
**When:** User inspects modal and disabled Launch App tooltip.  
**Then:** Modal has appropriate role/aria-modal; title and controls have accessible names; disabled button tooltip is keyboard-accessible.

1. [--] Inspect modal container. **Expected:** Role dialog (or equivalent); aria-modal="true" or equivalent.
2. [--] Inspect modal title/header. **Expected:** Accessible name (e.g. aria-labelledby or aria-label).
3. [--] Inspect close button. **Expected:** Accessible label (e.g. “Close”).
4. [--] Inspect disabled Launch App button. **Expected:** Tooltip accessible (e.g. aria-describedby or title); reachable via keyboard.

**Scenario verified by dev:** [--]  
**Test results verified by dev:** [--]  
**Notes / Bugs:**
