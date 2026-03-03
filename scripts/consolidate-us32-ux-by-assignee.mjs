#!/usr/bin/env node
/**
 * US-3.2 (DPH-248): Put all subtasks assigned to Ben Schaumkel into [3.2-UX] Tasks
 * as a numbered list in the description, then delete those subtasks.
 *
 * Run from project root: node scripts/consolidate-us32-ux-by-assignee.mjs
 * Dry run: node scripts/consolidate-us32-ux-by-assignee.mjs --dry-run
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

const PARENT = 'DPH-248';
const UX_SUMMARY = '[3.2-UX] Tasks';
const ASSIGNEE_NAME = 'Ben Schaumkel';

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

async function getIssue(key, fields = 'summary,project') {
  const res = await request(`/rest/api/3/issue/${key}?fields=${fields}`);
  if (!res.ok) throw new Error(`${key}: ${res.status}`);
  return res.json();
}

async function search(jql, fields = ['summary', 'assignee']) {
  const res = await request('/rest/api/3/search/jql', {
    method: 'POST',
    body: JSON.stringify({ jql, maxResults: 500, fields }),
  });
  if (!res.ok) throw new Error(`Search: ${res.status}`);
  return res.json();
}

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
  const body = {
    fields: {
      project: { key: parent.fields.project.key },
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

async function updateDescription(key, descriptionAdf) {
  const res = await request(`/rest/api/3/issue/${key}`, {
    method: 'PUT',
    body: JSON.stringify({ fields: { description: descriptionAdf } }),
  });
  if (!res.ok) throw new Error(`Update ${key}: ${res.status}`);
}

async function deleteIssue(key) {
  const res = await request(`/rest/api/3/issue/${key}`, { method: 'DELETE' });
  if (!res.ok) throw new Error(`Delete ${key}: ${res.status}`);
}

async function main() {
  if (!email || !token) {
    console.error('Set JIRA_EMAIL and JIRA_API_TOKEN in .env');
    process.exit(1);
  }

  const result = await search(`parent = ${PARENT}`);
  const all = result.issues || [];

  const benSubtasks = all.filter((st) => {
    const assignee = st.fields?.assignee;
    const name = assignee?.displayName || '';
    const summary = (st.fields?.summary || '').trim();
    return name === ASSIGNEE_NAME && summary !== UX_SUMMARY;
  });

  const existingUx = all.find((st) => (st.fields?.summary || '').trim() === UX_SUMMARY);
  const names = benSubtasks.map((st) => (st.fields?.summary || st.key).trim());

  console.log(`Subtasks assigned to ${ASSIGNEE_NAME} to insert into ${UX_SUMMARY}:`, names.length);
  if (names.length === 0) {
    console.log('None found.');
    return;
  }
  names.forEach((n, i) => console.log(`  ${i + 1}. ${n}`));

  if (dryRun) {
    console.log(existingUx ? `[dry-run] Would update ${existingUx.key}` : '[dry-run] Would create [3.2-UX] Tasks');
    console.log('[dry-run] Would delete:', benSubtasks.map((s) => s.key).join(', '));
    return;
  }

  const descriptionAdf = adfOrderedList(names);

  if (existingUx) {
    await updateDescription(existingUx.key, descriptionAdf);
    console.log(`Updated ${existingUx.key} ${UX_SUMMARY} with ${names.length} items`);
  } else {
    const key = await createSubtask(PARENT, UX_SUMMARY, descriptionAdf);
    console.log(`Created ${key} ${UX_SUMMARY} with ${names.length} items`);
  }

  for (const st of benSubtasks) {
    await deleteIssue(st.key);
    console.log('Deleted', st.key);
  }

  console.log('Done.');
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
