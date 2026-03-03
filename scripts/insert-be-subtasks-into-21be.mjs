#!/usr/bin/env node
/**
 * US-2.1 (DPH-237): Insert all subtasks named [DEV BE] or [BE] into the [2.1-BE] Tasks subtask.
 * - Finds subtasks under DPH-237 whose summary starts with [DEV BE] or [BE]
 * - Creates or updates [2.1-BE] Tasks with a numbered list of those names in the description
 * - Deletes the original [DEV BE]/[BE] subtasks (not [2.1-BE] Tasks itself)
 *
 * Run from project root: node scripts/insert-be-subtasks-into-21be.mjs
 * Dry run: node scripts/insert-be-subtasks-into-21be.mjs --dry-run
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

const PARENT = 'DPH-237';
const BE_SUBTASK_SUMMARY = '[2.1-BE] Tasks';

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

async function getIssue(key, fields = 'summary,description,project') {
  const res = await request(`/rest/api/3/issue/${key}?fields=${fields}`);
  if (!res.ok) throw new Error(`${key}: ${res.status}`);
  return res.json();
}

async function search(jql, fields = ['summary']) {
  const res = await request('/rest/api/3/search/jql', {
    method: 'POST',
    body: JSON.stringify({ jql, maxResults: 500, fields }),
  });
  if (!res.ok) throw new Error(`Search: ${res.status}`);
  return res.json();
}

/** True if summary is a BE task to consolidate (excludes [2.1-BE] Tasks itself) */
function isBeSubtaskToConsolidate(summary) {
  if (!summary || summary === BE_SUBTASK_SUMMARY) return false;
  return /^\[DEV BE\]/i.test(summary) || /^\[BE\]/i.test(summary);
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

  const beToConsolidate = all.filter((st) => isBeSubtaskToConsolidate(st.fields?.summary));
  const existing21Be = all.find((st) => (st.fields?.summary || '').trim() === BE_SUBTASK_SUMMARY);

  const names = beToConsolidate.map((st) => (st.fields?.summary || st.key).trim());
  if (names.length === 0) {
    console.log('No [DEV BE] or [BE] subtasks found under', PARENT);
    return;
  }

  console.log('BE subtasks to insert into [2.1-BE] Tasks:', names.length);
  names.forEach((n, i) => console.log(`  ${i + 1}. ${n}`));

  if (dryRun) {
    console.log(existing21Be ? `[dry-run] Would update ${existing21Be.key} description` : '[dry-run] Would create [2.1-BE] Tasks');
    console.log('[dry-run] Would delete:', beToConsolidate.map((s) => s.key).join(', '));
    return;
  }

  const descriptionAdf = adfOrderedList(names);

  if (existing21Be) {
    await updateDescription(existing21Be.key, descriptionAdf);
    console.log('Updated', existing21Be.key, BE_SUBTASK_SUMMARY, 'with', names.length, 'items');
  } else {
    const key = await createSubtask(PARENT, BE_SUBTASK_SUMMARY, descriptionAdf);
    console.log('Created', key, BE_SUBTASK_SUMMARY, 'with', names.length, 'items');
  }

  for (const st of beToConsolidate) {
    await deleteIssue(st.key);
    console.log('Deleted', st.key);
  }

  console.log('Done.');
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
