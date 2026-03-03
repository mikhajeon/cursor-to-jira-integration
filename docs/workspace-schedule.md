# PM/BA workspace — daily 6 AM refresh

The workspace is tailored for **Product Manager / Business Analyst** and is refreshed daily at **6:00 AM**.

## Files

| File | Audience | Content |
|------|----------|--------|
| `my-tasks.md` | Everyone | Your open tasks, grouped by status |
| `workload.md` | Everyone | Today's focus + what's coming up |
| `workspace/01-sprint-board.md` | Everyone | Full sprint board (cached locally) |
| `workspace/02-sprint-backlog.md` | Everyone | Sprint backlog — tasks in the current ongoing sprint only |
| `workspace/03-sprint-health.md` | PO / PM | Sprint goal, % done, blocked & at-risk items |
| `workspace/04-product-backlog.md` | PO | Product Backlog — backlog only (not in sprint), top 20 |
| `workspace/05-refinement.md` | BA | Stories needing AC, flagged for clarification |
| `workspace/06-epics.md` | PM | Active epics with progress counts |

## View in browser

Run the local workspace viewer (from project root):

```bash
node scripts/serve-workspace.mjs
```

Then open **http://localhost:3847** for a sidebar view of all workspace docs and My tasks / Workload. Use `PORT=3000 node scripts/serve-workspace.mjs` to use a different port.

## Manual refresh

From project root:

```bash
node scripts/refresh-pm-workspace.mjs
```

## Schedule (6 AM daily)

### Option A: cron (macOS / Linux)

1. Open crontab: `crontab -e`
2. Add (replace the path with your project root):

```cron
0 6 * * * cd /Users/mikha.jeon/Projects/cursor-to-jira-integration && /usr/bin/env node scripts/refresh-pm-workspace.mjs >> workspace/refresh.log 2>&1
```

### Option B: launchd (macOS, runs when logged in)

A launchd plist is provided so the job runs at 6:00 AM every day. Install once:

```bash
# Copy plist and replace YOUR_USERNAME with your macOS username
cp docs/com.cursor-pm-workspace.refresh.plist ~/Library/LaunchAgents/
# Edit the plist: replace YOUR_USERNAME in both WorkingDirectory and StandardOutPath
sed -i '' 's/YOUR_USERNAME/'"$(whoami)"'/g' ~/Library/LaunchAgents/com.cursor-pm-workspace.refresh.plist
# Load and enable
launchctl load ~/Library/LaunchAgents/com.cursor-pm-workspace.refresh.plist
```

To disable later: `launchctl unload ~/Library/LaunchAgents/com.cursor-pm-workspace.refresh.plist`

## Requirements

- `.env` in project root with `JIRA_EMAIL`, `JIRA_API_TOKEN`, and optionally `JIRA_BOARD_ID` (see `.env.example`).
- For sprint board and backlog: a Jira Software board for project DPH (or set `JIRA_BOARD_ID`).

## Refinement rules

Stories appear in `05-refinement.md` if they are **Story** type and any of:

- **Status = Draft**
- Label `needs-AC` or `clarification`
- Status **To Do** and **empty description**

Add these labels in Jira for BA follow-up.

## Sprint health labels

- **Blocked:** issues with label `blocked` appear under "Blocked".
- **At risk:** issues with label `at-risk` appear under "At risk".
