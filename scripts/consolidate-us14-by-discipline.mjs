#!/usr/bin/env node
/**
 * US-1.4 (DPH-241): Put all subtask names with [UX], [DEV FE], [DEV BE] into
 * [1.4-UX] Tasks, [1.4-FE] Tasks, [1.4-BE] Tasks as numbered lists in their
 * descriptions, then delete the original subtasks.
 *
 * Run from project root: node scripts/consolidate-us14-by-discipline.mjs
 * Dry run: node scripts/consolidate-us14-by-discipline.mjs --dry-run
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

const PARENT = 'DPH-241'; // US-1.4 Visit My Products Page

const DISCIPLINES = [
  { key: 'UX', summary: '[1.4-UX] Tasks', pattern: /^\[UX\]/i },
  { key: 'FE', summary: '[1.4-FE] Tasks', pattern: /^\[DEV FE\]/i },
  { key: 'BE', summary: '[1.4-BE] Tasks', pattern: /^\[DEV BE\]/i },
];

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

async function search(jql, fields = ['summary']) {
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

  for (const disc of DISCIPLINES) {
    const toConsolidate = all.filter((st) => {
      const s = (st.fields?.summary || '').trim();
      return s !== disc.summary && disc.pattern.test(s);
    });
    const generalSubtask = all.find((st) => (st.fields?.summary || '').trim() === disc.summary);

    const names = toConsolidate.map((st) => (st.fields?.summary || st.key).trim());

    console.log(`\n${disc.key}: ${names.length} subtasks to insert into ${disc.summary}`);
    if (names.length === 0) continue;
    names.forEach((n, i) => console.log(`  ${i + 1}. ${n}`));

    if (dryRun) {
      console.log(generalSubtask ? `  [dry-run] Would update ${generalSubtask.key}` : `  [dry-run] Would create ${disc.summary}`);
      console.log('  [dry-run] Would delete:', toConsolidate.map((s) => s.key).join(', '));
      continue;
    }

    const descriptionAdf = adfOrderedList(names);

    if (generalSubtask) {
      await updateDescription(generalSubtask.key, descriptionAdf);
      console.log(`  Updated ${generalSubtask.key} ${disc.summary} with ${names.length} items`);
    } else {
      const key = await createSubtask(PARENT, disc.summary, descriptionAdf);
      console.log(`  Created ${key} ${disc.summary} with ${names.length} items`);
    }

    for (const st of toConsolidate) {
      await deleteIssue(st.key);
      console.log(`  Deleted ${st.key}`);
    }
  }

  console.log('\nDone.');
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
