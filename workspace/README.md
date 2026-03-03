# PM/BA workspace

This folder is populated by `scripts/refresh-pm-workspace.mjs` (run manually or daily at 6 AM).

Files are numbered in logical order (current sprint → backlog → refinement → epics).

| File | Audience | Content |
|------|----------|--------|
| `01-sprint-board.md` | Everyone | Full sprint board (cached) |
| `02-sprint-backlog.md` | Everyone | Sprint backlog — current sprint tasks only |
| `03-sprint-health.md` | PO / PM | Sprint goal, % done, blocked & at-risk |
| `04-product-backlog.md` | PO | Product Backlog — backlog only (not in sprint) |
| `05-refinement.md` | BA | Stories needing AC / clarification |
| `06-epics.md` | PM | Active epics with progress |

See **docs/workspace-schedule.md** for refresh schedule and setup.
