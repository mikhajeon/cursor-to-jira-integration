# Cursor to Jira Integration

Use Jira from Cursor chat: list your tasks, open issue details, create subtasks, change status, assign work, and add comments without leaving the editor. A small Node script and a Cursor rule call the Jira Cloud API using your own API token — no MCP server and no admin-approved app.

**Two ways to set up:** either add this integration into an existing project (clone and copy the files in), or use this repo as a standalone project (clone and go). Both paths use the same **Create your `.env`** and **Test it** steps below.

## Setup

Pick the use case that matches how you’re using the integration.

---

### Use case A: Add Jira to an existing project

You have a project (e.g. an app) and want to add Jira integration to it.

**Step 1. Get the files into your project**

Run these from your project root, one at a time:

```bash
cd your-project
```

```bash
git clone https://github.com/your-org/cursor-to-jira-integration.git
```

```bash
cp -r cursor-to-jira-integration/scripts ./scripts
```

```bash
cp cursor-to-jira-integration/.env.example ./.env.example
```

```bash
mkdir -p .cursor/rules
```

```bash
cp cursor-to-jira-integration/.cursor/rules/jira-tasks.mdc .cursor/rules/
```

After step 1, your project root should look like this:

```
your-project/
  scripts/jira-api.mjs
  .cursor/rules/jira-tasks.mdc
  .env.example
```

**Step 2. Create your `.env`** → see [Create your `.env`](#create-your-env) below.

**Step 3. Test it** → see [Test it](#test-it) below.

---

### Use case B: Use this repo as your project

You’re using this repo as-is (no other app). The repo root is your project root.

**Step 1. Clone the repo**

Run these one at a time:

```bash
git clone https://github.com/your-org/cursor-to-jira-integration.git
```

```bash
cd cursor-to-jira-integration
```

The layout (scripts, `.env.example`, `.cursor/rules`) is already in place.

**Step 2. Create your `.env`** → see [Create your `.env`](#create-your-env) below.

**Step 3. Test it** → see [Test it](#test-it) below.

---

### Create your `.env`

*(Same for both use cases. Run from your project root — the folder that contains `scripts/`.)*

Copy the template to a local `.env` (so you can edit it without touching the example), then fill in your values:

```bash
cp .env.example .env
```

Open `.env` and set:

- **JIRA_DOMAIN** — your Jira org name (e.g. `yourcompany` for `yourcompany.atlassian.net`).
- **JIRA_EMAIL** — your Atlassian account email (e.g. `email.address@domainname.com`).
- **JIRA_API_TOKEN** — paste the token from the link below.

```
JIRA_DOMAIN=jiraorgname
JIRA_EMAIL=email.address@domainname.com
JIRA_API_TOKEN=paste-your-token-here
```

Get your API token here: https://id.atlassian.com/manage-profile/security/api-tokens

Make sure `.env` is in your `.gitignore` — never commit your token.

### Test it

```bash
node scripts/jira-api.mjs me
```

If you see your Jira profile, you’re set.

## Usage

Just ask Cursor things like:

- "What are my Jira tasks?"
- "Show details for DPH-123"
- "Create a subtask under DPH-123"
- "Move DPH-123 to In Progress"
- "Update the summary on DPH-123"
- "Assign DPH-123 to me"
- "Add a comment to DPH-123"

The Cursor rule handles the rest.

## Available commands

| Command | What it does |
|---------|-------------|
| `me` | Show current user |
| `search "JQL"` | Search issues by JQL |
| `get DPH-123` | Get full issue details |
| `assign DPH-123 <accountId>` | Assign an issue |
| `create-subtask DPH-123 "summary" [accountId]` | Create a subtask |
| `update DPH-123 '{"summary":"..."}'` | Edit issue fields |
| `transition DPH-123 "In Progress"` | Change issue status |
| `comment DPH-123 "text"` | Add a comment |

## Customizing

The rule uses **DPH** as the default project key. For a different project, edit `.cursor/rules/jira-tasks.mdc` and replace `DPH` with your project key.

## Requirements

- Node 18+
- Jira Cloud (e.g. `yourcompany.atlassian.net`)
