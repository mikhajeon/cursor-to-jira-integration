#!/usr/bin/env node
/**
 * Refresh PM/BA workspace: generates my-tasks, workload, sprint board, refinement,
 * sprint-health, product backlog, and epics. Run from project root.
 * Schedule: daily 6 AM (see docs/workspace-schedule.md).
 *
 * Env: JIRA_DOMAIN, JIRA_EMAIL, JIRA_API_TOKEN. Optional: JIRA_BOARD_ID (for sprint/backlog).
 */

import { readFileSync, existsSync, mkdirSync, writeFileSync } from 'fs';
import { dirname, join } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = join(__dirname, '..');
const workspaceDir = join(root, 'workspace');

const PROJECT = 'DPH';

function loadEnv() {
  const envPath = join(root, '.env');
  if (!existsSync(envPath)) return;
  const content = readFileSync(envPath, 'utf8');
  for (const line of content.split('\n')) {
    const m = line.match(/^\s*([A-Za-z_][A-Za-z0-9_]*)\s*=\s*(.*)$/);
    if (m) process.env[m[1]] = m[2].replace(/^["']|["']$/g, '').trim();
  }
}
loadEnv();

const domain = process.env.JIRA_DOMAIN || 'datacomgroup';
const email = process.env.JIRA_EMAIL;
const token = process.env.JIRA_API_TOKEN;
const boardId = process.env.JIRA_BOARD_ID;
const baseUrl = `https://${domain}.atlassian.net`;
const auth = Buffer.from(`${email}:${token}`).toString('base64');

function request(path, options = {}) {
  const url = path.startsWith('http') ? path : `${baseUrl}${path}`;
  return fetch(url, {
    ...options,
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      Authorization: `Basic ${auth}`,
      ...options.headers,
    },
  });
}

async function jqlSearch(jql, fields = ['summary', 'status', 'assignee', 'updated'], maxResults = 100) {
  const res = await request('/rest/api/3/search/jql', {
    method: 'POST',
    body: JSON.stringify({ jql, maxResults, fields }),
  });
  if (!res.ok) throw new Error(`JQL: ${res.status} ${await res.text()}`);
  return res.json();
}

async function getMyself() {
  const res = await request('/rest/api/3/myself');
  if (!res.ok) throw new Error(`myself: ${res.status}`);
  return res.json();
}

async function getBoards() {
  const res = await request(`/rest/agile/1.0/board?projectKeyOrId=${PROJECT}`);
  if (!res.ok) return null;
  const data = await res.json();
  return data.values || [];
}

async function getActiveSprint(bid) {
  const res = await request(`/rest/agile/1.0/board/${bid}/sprint?state=active`);
  if (!res.ok) return null;
  const data = await res.json();
  const sprints = data.values || [];
  return sprints[0] || null;
}

async function getSprintIssues(bid, sprintId) {
  const res = await request(`/rest/agile/1.0/board/${bid}/sprint/${sprintId}/issue?maxResults=200`);
  if (!res.ok) return [];
  const data = await res.json();
  return data.issues || [];
}

async function getBacklogIssues(bid, maxResults = 25) {
  const res = await request(`/rest/agile/1.0/board/${bid}/backlog?maxResults=${maxResults}`);
  if (!res.ok) return [];
  const data = await res.json();
  return data.issues || [];
}

function fmtIssue(issue, showParent = false) {
  const key = issue.key;
  const summary = issue.fields?.summary || '(no summary)';
  const status = issue.fields?.status?.name || '—';
  const assignee = issue.fields?.assignee?.displayName || 'Unassigned';
  const parent = issue.fields?.parent?.key;
  let line = `- **${key}** ${summary} — ${status} (${assignee})`;
  if (showParent && parent) line += ` _parent: ${parent}_`;
  return line;
}

function groupByStatus(issues) {
  const byStatus = {};
  for (const i of issues) {
    const s = i.fields?.status?.name || 'Unknown';
    if (!byStatus[s]) byStatus[s] = [];
    byStatus[s].push(i);
  }
  const order = ['To Do', 'In Progress', 'In Review', 'Ready for QA Review', 'Test Failed', 'Done'];
  const rest = Object.keys(byStatus).filter(k => !order.includes(k));
  return [...order.filter(k => byStatus[k]), ...rest];
}

function escapeTableCell(s) {
  return String(s || '').replace(/\|/g, '\\|').replace(/\n/g, ' ');
}

function write(path, content) {
  const dir = dirname(path);
  if (!existsSync(dir)) mkdirSync(dir, { recursive: true });
  writeFileSync(path, content, 'utf8');
  console.log('Wrote', path);
}

function today() {
  const d = new Date();
  return d.toISOString().slice(0, 10);
}

async function main() {
  if (!email || !token) {
    console.error('Set JIRA_EMAIL and JIRA_API_TOKEN (e.g. in .env).');
    process.exit(1);
  }

  const me = await getMyself();
  const accountId = me.accountId;
  const myName = me.displayName || me.emailAddress;

  let board = null;
  let boardIdToUse = boardId;
  if (!boardIdToUse) {
    const boards = await getBoards();
    if (boards && boards.length) boardIdToUse = boards[0].id;
  }
  if (boardIdToUse) {
    const r = await request(`/rest/agile/1.0/board/${boardIdToUse}`);
    if (r.ok) board = await r.json();
  }

  // --- My tasks (assignee = currentUser(), not Done, grouped by status) ---
  const myTasksRes = await jqlSearch(
    `project = ${PROJECT} AND assignee = currentUser() AND status not in (Done, Closed) ORDER BY status, updated DESC`,
    ['summary', 'status', 'assignee', 'updated', 'parent'],
    100
  );
  const myTasks = myTasksRes.issues || [];
  const byStatus = {};
  for (const i of myTasks) {
    const s = i.fields?.status?.name || 'Unknown';
    if (!byStatus[s]) byStatus[s] = [];
    byStatus[s].push(i);
  }
  const statusOrder = groupByStatus(myTasks);
  let myTasksMd = `# My tasks\n\n*Last updated: ${new Date().toISOString()}*\n\n`;
  for (const status of statusOrder) {
    const list = byStatus[status] || [];
    myTasksMd += `## ${status}\n\n`;
    list.forEach((i) => { myTasksMd += fmtIssue(i, true) + '\n'; });
    myTasksMd += '\n';
  }
  if (myTasks.length === 0) myTasksMd += '_No open tasks._\n';
  write(join(root, 'my-tasks.md'), myTasksMd.trimEnd());

  // --- Workload: today's focus (In Progress) + coming up (To Do) ---
  const inProgress = (byStatus['In Progress'] || []).map((i) => fmtIssue(i, true));
  const toDo = (byStatus['To Do'] || []).slice(0, 15).map((i) => fmtIssue(i, true));
  let workloadMd = `# Workload — ${today()}\n\n*Last updated: ${new Date().toISOString()}*\n\n`;
  workloadMd += `## Today's focus\n\n${inProgress.length ? inProgress.join('\n') : '_Nothing in progress._'}\n\n`;
  workloadMd += `## Coming up\n\n${toDo.length ? toDo.join('\n') : '_No To Do items._'}\n`;
  write(join(root, 'workload.md'), workloadMd.trimEnd());

  // --- Sprint board (cached) + current sprint backlog ---
  let sprintBoardMd = `# Sprint board\n\n*Last updated: ${new Date().toISOString()} (cached locally)*\n\n`;
  let sprintBacklogMd = `# Sprint Backlog\n\n*Tasks in the current ongoing sprint only. Last updated: ${new Date().toISOString()}*\n\n`;
  if (boardIdToUse && board) {
    const sprint = await getActiveSprint(boardIdToUse);
    if (sprint) {
      const sprintIssues = await getSprintIssues(boardIdToUse, sprint.id);
      const byCol = {};
      for (const i of sprintIssues) {
        const s = i.fields?.status?.name || 'Unknown';
        if (!byCol[s]) byCol[s] = [];
        byCol[s].push(i);
      }
      const cols = groupByStatus(sprintIssues);
      sprintBoardMd += `## ${sprint.name}\n`;
      if (sprint.goal) sprintBoardMd += `**Goal:** ${sprint.goal}\n\n`;
      for (const col of cols) {
        const list = byCol[col] || [];
        sprintBoardMd += `### ${col}\n\n`;
        list.forEach((i) => { sprintBoardMd += fmtIssue(i, true) + '\n'; });
        sprintBoardMd += '\n';
      }
      // Sprint backlog: table ordered by status, status on the right
      sprintBacklogMd += `## ${sprint.name}\n\n`;
      if (sprint.goal) sprintBacklogMd += `**Goal:** ${sprint.goal}\n\n`;
      sprintBacklogMd += '| Ticket | Summary | Parent | Assignee | Status |\n';
      sprintBacklogMd += '| --- | --- | --- | --- | --- |\n';
      for (const col of cols) {
        const list = byCol[col] || [];
        for (const i of list) {
          const key = i.key;
          const summary = escapeTableCell(i.fields?.summary || '(no summary)');
          const parent = i.fields?.parent?.key || '—';
          const assignee = i.fields?.assignee?.displayName || 'Unassigned';
          const status = i.fields?.status?.name || '—';
          sprintBacklogMd += `| **${key}** | ${summary} | ${parent} | ${escapeTableCell(assignee)} | **${status}** |\n`;
        }
      }
    } else {
      sprintBoardMd += '_No active sprint._\n';
      sprintBacklogMd += '_No active sprint._\n';
    }
  } else {
    sprintBoardMd += '_Board not configured. Set JIRA_BOARD_ID in .env or ensure project has a board._\n';
    sprintBacklogMd += '_Board not configured. Set JIRA_BOARD_ID in .env or ensure project has a board._\n';
  }
  write(join(workspaceDir, '01-sprint-board.md'), sprintBoardMd.trimEnd());
  write(join(workspaceDir, '02-sprint-backlog.md'), sprintBacklogMd.trimEnd());

  // --- Refinement: Draft, stories needing AC, or flagged for clarification ---
  const refinementRes = await jqlSearch(
    `project = ${PROJECT} AND issuetype = Story AND (status = "Draft" OR labels in (needs-AC, clarification) OR (status = "To Do" AND description is EMPTY)) ORDER BY updated DESC`,
    ['summary', 'status', 'assignee', 'labels', 'description', 'updated'],
    50
  );
  const refinementIssues = refinementRes.issues || [];
  let refinementMd = `# Refinement (BA)\n\nStories in **Draft**, needing acceptance criteria, or flagged for clarification.\n\n*Last updated: ${new Date().toISOString()}*\n\n`;
  refinementIssues.forEach((i) => {
    refinementMd += fmtIssue(i) + '\n';
    const labels = (i.fields?.labels || []).filter(l => ['needs-AC', 'clarification'].includes(l));
    if (labels.length) refinementMd += `  - Labels: ${labels.join(', ')}\n`;
  });
  if (refinementIssues.length === 0) refinementMd += '_None._\n';
  write(join(workspaceDir, '05-refinement.md'), refinementMd.trimEnd());

  // --- Sprint health: goal, % done, blocked, at-risk ---
  let sprintHealthMd = `# Sprint health (PO / PM)\n\n*Last updated: ${new Date().toISOString()}*\n\n`;
  if (boardIdToUse && board) {
    const sprint = await getActiveSprint(boardIdToUse);
    if (sprint) {
      const sprintIssues = await getSprintIssues(boardIdToUse, sprint.id);
      const total = sprintIssues.length;
      const done = sprintIssues.filter((i) => (i.fields?.status?.name || '') === 'Done').length;
      const pct = total ? Math.round((done / total) * 100) : 0;
      sprintHealthMd += `## ${sprint.name}\n\n`;
      sprintHealthMd += sprint.goal ? `**Goal:** ${sprint.goal}\n\n` : '';
      sprintHealthMd += `**Progress:** ${done}/${total} done (${pct}%)\n\n`;
      const blocked = sprintIssues.filter((i) => (i.fields?.labels || []).includes('blocked'));
      const atRisk = sprintIssues.filter((i) => (i.fields?.labels || []).includes('at-risk'));
      if (blocked.length) {
        sprintHealthMd += `### Blocked\n\n`;
        blocked.forEach((i) => { sprintHealthMd += fmtIssue(i) + '\n'; });
        sprintHealthMd += '\n';
      }
      if (atRisk.length) {
        sprintHealthMd += `### At risk\n\n`;
        atRisk.forEach((i) => { sprintHealthMd += fmtIssue(i) + '\n'; });
      }
      if (!blocked.length && !atRisk.length) sprintHealthMd += '_No blocked or at-risk items._\n';
    } else {
      sprintHealthMd += '_No active sprint._\n';
    }
  } else {
    sprintHealthMd += '_Board not configured._\n';
  }
  write(join(workspaceDir, '03-sprint-health.md'), sprintHealthMd.trimEnd());

  // --- Product Backlog: backlog only (not in sprint), top 20 ---
  let productBacklogMd = `# Product Backlog\n\n*Backlog only (not in current sprint). Last updated: ${new Date().toISOString()}*\n\n`;
  if (boardIdToUse) {
    const backlogIssues = await getBacklogIssues(boardIdToUse, 20);
    backlogIssues.forEach((i) => { productBacklogMd += fmtIssue(i, true) + '\n'; });
    if (backlogIssues.length === 0) productBacklogMd += '_Product backlog empty or not available._\n';
  } else {
    const fallback = await jqlSearch(
      `project = ${PROJECT} AND status = "To Do" AND type in (Story, Task) ORDER BY rank ASC`,
      ['summary', 'status', 'assignee', 'parent'],
      20
    );
    (fallback.issues || []).forEach((i) => { productBacklogMd += fmtIssue(i, true) + '\n'; });
    if (!(fallback.issues || []).length) productBacklogMd += '_No product backlog items._\n';
  }
  write(join(workspaceDir, '04-product-backlog.md'), productBacklogMd.trimEnd());

  // --- Epics: active with progress counts (PM) ---
  const epicsRes = await jqlSearch(
    `project = ${PROJECT} AND issuetype = Epic AND status not in (Done, Closed) ORDER BY rank ASC`,
    ['summary', 'status', 'assignee'],
    50
  );
  const epics = epicsRes.issues || [];
  let epicsMd = `# Epics (PM) — Active\n\n*Last updated: ${new Date().toISOString()}*\n\n`;
  for (const epic of epics) {
    const key = epic.key;
    const childRes = await jqlSearch(
      `parent = ${key}`,
      ['summary', 'status'],
      500
    );
    const children = childRes.issues || [];
    const done = children.filter((i) => (i.fields?.status?.name || '') === 'Done').length;
    epicsMd += `## ${key} — ${epic.fields?.summary || ''}\n\n`;
    epicsMd += `Progress: ${done}/${children.length} done\n\n`;
  }
  if (epics.length === 0) epicsMd += '_No active epics._\n';
  write(join(workspaceDir, '06-epics.md'), epicsMd.trimEnd());

  console.log('PM workspace refresh done.');
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
