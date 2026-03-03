#!/usr/bin/env node
/**
 * Finds DPH user stories (from the known list) that have no subtasks, and adds
 * 3 placeholder subtasks per discipline: [X.Y-UX] Tasks, [X.Y-FE] Tasks, [X.Y-BE] Tasks.
 *
 * Run from project root: node scripts/add-placeholder-subtasks.mjs
 * Dry run: node scripts/add-placeholder-subtasks.mjs --dry-run
 */

import { readFileSync, existsSync } from 'fs';
import { dirname, join } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = join(__dirname, '..');

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

async function getIssue(key) {
  const res = await request(`/rest/api/3/issue/${key}`);
  if (!res.ok) throw new Error(`${key}: ${res.status}`);
  return res.json();
}

async function search(jql, fields = ['summary', 'parent']) {
  const res = await request('/rest/api/3/search/jql', {
    method: 'POST',
    body: JSON.stringify({ jql, maxResults: 500, fields }),
  });
  if (!res.ok) throw new Error(`Search: ${res.status}`);
  return res.json();
}

async function createSubtask(parentKey, summary, parentIssue) {
  const parent = parentIssue || await getIssue(parentKey);
  const projectKey = parent.fields.project.key;
  const body = {
    fields: {
      project: { key: projectKey },
      parent: { key: parentKey },
      summary,
      issuetype: { name: 'Subtask' },
    },
  };
  const res = await request('/rest/api/3/issue', { method: 'POST', body: JSON.stringify(body) });
  if (!res.ok) throw new Error(`Create: ${res.status} ${await res.text()}`);
  const created = await res.json();
  return created.key;
}

/** Extract serial from parent summary: [US-2.3]: ... -> 2.3, [TASK-1.1]: ... -> 1.1 */
function parseSerial(parentSummary) {
  if (!parentSummary) return null;
  const m = parentSummary.match(/\[?(?:US|TASK)-([\d.]+[a-z]?)\]?/i);
  return m ? m[1] : null;
}

const STORY_KEYS = [
  'DPH-15', 'DPH-183', 'DPH-184', 'DPH-185', 'DPH-188', 'DPH-347',
  'DPH-189', 'DPH-201', 'DPH-340', 'DPH-241', 'DPH-249',
  'DPH-237', 'DPH-238', 'DPH-239',
  'DPH-243', 'DPH-248', 'DPH-250', 'DPH-261', 'DPH-262', 'DPH-263',
  'DPH-398', 'DPH-399', 'DPH-400',
  'DPH-256', 'DPH-251', 'DPH-252', 'DPH-253',
  'DPH-474', 'DPH-258', 'DPH-475', 'DPH-476',
  'DPH-259', 'DPH-485', 'DPH-260', 'DPH-553',
];

const DISCIPLINES = ['UX', 'FE', 'BE'];

async function main() {
  if (!email || !token) {
    console.error('Set JIRA_EMAIL and JIRA_API_TOKEN in .env');
    process.exit(1);
  }

  const noSubtasks = [];
  for (const parentKey of STORY_KEYS) {
    const result = await search(`parent = ${parentKey}`);
    const count = (result.issues || []).length;
    if (count === 0) noSubtasks.push(parentKey);
  }

  console.log(`Found ${noSubtasks.length} user stories with no subtasks: ${noSubtasks.join(', ')}`);

  for (const parentKey of noSubtasks) {
    const parent = await getIssue(parentKey);
    const parentSummary = parent.fields && parent.fields.summary;
    const serial = parseSerial(parentSummary);
    if (!serial) {
      console.warn(`Skip ${parentKey}: no serial in "${(parentSummary || '').slice(0, 50)}"`);
      continue;
    }

    for (const disc of DISCIPLINES) {
      const summary = `[${serial}-${disc}] Tasks`;
      if (dryRun) {
        console.log(`[dry-run] Would create under ${parentKey}: ${summary}`);
      } else {
        const newKey = await createSubtask(parentKey, summary, parent);
        console.log(`Created ${newKey} ${summary} under ${parentKey}`);
      }
    }
  }
  console.log('Done.');
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
