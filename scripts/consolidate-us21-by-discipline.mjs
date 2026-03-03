#!/usr/bin/env node
/**
 * US-2.1 (DPH-237): Consolidate all existing subtasks into 3 discipline subtasks
 * [2.1-UX] Tasks, [2.1-FE] Tasks, [2.1-BE] Tasks, each with a numbered list of the
 * original task names in the description. Then delete the old subtasks.
 *
 * Run from project root: node scripts/consolidate-us21-by-discipline.mjs
 * Dry run: node scripts/consolidate-us21-by-discipline.mjs --dry-run
 */

import { readFileSync, existsSync } from 'fs';
import { dirname, join } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = join(__dirname, '..');

function loadEnv() {
  const envPath = join(root, '.env');
  if (!existsSync(envPath)) return;
  readFileSync(envPath, 'utf8').split('\n').forEach((line) => {
    const m = line.match(/^\s*([A-Za-z_][A-Za-z0-9_]*)\s*=\s*(.*)$/);
    if (m) process.env[m[1]] = m[2].replace(/^["']|["']$/g, '').trim();
  });
}
loadEnv();

const domain = process.env.JIRA_DOMAIN || 'datacomgroup';
const email = process.env.JIRA_EMAIL;
const token = process.env.JIRA_API_TOKEN;
const baseUrl = `https://${domain}.atlassian.net`;
const auth = Buffer.from(`${email}:${token}`).toString('base64');
const dryRun = process.argv.includes('--dry-run');

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

async function getIssue(key, fields = 'summary,description') {
  const res = await request(`/rest/api/3/issue/${key}?fields=${fields}`);
  if (!res.ok) throw new Error(`${key}: ${res.status}`);
  return res.json();
}

async function search(jql, fields = ['summary', 'description']) {
  const res = await request('/rest/api/3/search/jql', {
    method: 'POST',
    body: JSON.stringify({ jql, maxResults: 500, fields }),
  });
  if (!res.ok) throw new Error(`Search: ${res.status}`);
  return res.json();
}

/** Parse discipline from subtask summary: [UX], [DEV FE], [DEV BE] */
function parseDiscipline(summary) {
  if (!summary) return null;
  if (/^\[UX\]/i.test(summary)) return 'UX';
  if (/^\[DEV FE\]/i.test(summary) || /^\[DEV\]\s*\[FE\]/i.test(summary)) return 'FE';
  if (/^\[DEV BE\]/i.test(summary) || /^\[DEV\]\s*\[BE\]/i.test(summary)) return 'BE';
  return null;
}

/** ADF: ordered list of strings */
function adfOrderedList(items) {
  return {
    type: 'doc',
    version: 1,
    content: [
      {
        type: 'orderedList',
        content: items.map((text) => ({
          type: 'listItem',
          content: [{ type: 'paragraph', content: [{ type: 'text', text }] }],
        })),
      },
    ],
  };
}

async function createSubtask(parentKey, summary, descriptionAdf) {
  const parent = await getIssue(parentKey, 'project');
  const projectKey = parent.fields.project.key;
  const body = {
    fields: {
      project: { key: projectKey },
      parent: { key: parentKey },
      summary,
      issuetype: { name: 'Subtask' },
      description: descriptionAdf,
    },
  };
  const res = await request('/rest/api/3/issue', { method: 'POST', body: JSON.stringify(body) });
  if (!res.ok) throw new Error(`Create: ${res.status} ${await res.text()}`);
  const created = await res.json();
  return created.key;
}

async function deleteIssue(key) {
  const res = await request(`/rest/api/3/issue/${key}`, { method: 'DELETE' });
  if (!res.ok) throw new Error(`Delete ${key}: ${res.status}`);
}

const PARENT = 'DPH-237'; // US-2.1

async function main() {
  if (!email || !token) {
    console.error('Set JIRA_EMAIL and JIRA_API_TOKEN in .env');
    process.exit(1);
  }

  const result = await search(`parent = ${PARENT}`);
  const subtasks = result.issues || [];
  if (subtasks.length === 0) {
    console.log('No subtasks under', PARENT);
    return;
  }

  const byDiscipline = { UX: [], FE: [], BE: [] };
  for (const st of subtasks) {
    const summary = st.fields?.summary || st.key;
    const disc = parseDiscipline(summary);
    if (disc && byDiscipline[disc]) byDiscipline[disc].push(summary);
  }

  console.log('US-2.1 subtasks by discipline:');
  console.log('  UX:', byDiscipline.UX.length, byDiscipline.UX);
  console.log('  FE:', byDiscipline.FE.length, byDiscipline.FE);
  console.log('  BE:', byDiscipline.BE.length, byDiscipline.BE);

  const newKeys = [];
  const toCreate = [
    { summary: '[2.1-UX] Tasks', items: byDiscipline.UX },
    { summary: '[2.1-FE] Tasks', items: byDiscipline.FE },
    { summary: '[2.1-BE] Tasks', items: byDiscipline.BE },
  ];

  for (const { summary, items } of toCreate) {
    if (items.length === 0) {
      console.log('Skipping', summary, '(no items)');
      continue;
    }
    const descriptionAdf = adfOrderedList(items);
    if (dryRun) {
      console.log('[dry-run] Would create', summary, 'with', items.length, 'items');
      continue;
    }
    const key = await createSubtask(PARENT, summary, descriptionAdf);
    newKeys.push(key);
    console.log('Created', key, summary);
  }

  if (dryRun) {
    console.log('[dry-run] Would delete', subtasks.length, 'old subtasks:', subtasks.map((s) => s.key).join(', '));
    return;
  }

  for (const st of subtasks) {
    await deleteIssue(st.key);
    console.log('Deleted', st.key);
  }

  console.log('Done. New subtasks:', newKeys.join(', '));
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
