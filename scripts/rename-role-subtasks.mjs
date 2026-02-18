#!/usr/bin/env node
/**
 * Renames [UX], [Dev FE], [Dev BE] subtasks to [X.Y-UX] Tasks, [X.Y-FE] Tasks, [X.Y-BE] Tasks
 * where X.Y is the user story serial number from the parent (e.g. [US-2.3]: ... -> 2.3).
 *
 * Run from project root: node scripts/rename-role-subtasks.mjs
 * Dry run: node scripts/rename-role-subtasks.mjs --dry-run
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

async function updateSummary(key, summary) {
  const res = await request(`/rest/api/3/issue/${key}`, {
    method: 'PUT',
    body: JSON.stringify({ fields: { summary } }),
  });
  if (!res.ok) throw new Error(`Update ${key}: ${res.status}`);
}

/** Extract user story serial from parent summary, e.g. "[US-2.3]: ..." -> "2.3", "[US-1.1b]: ..." -> "1.1b" */
function parseSerial(parentSummary) {
  if (!parentSummary) return null;
  const m = parentSummary.match(/\[?US-([\d.]+[a-z]?)\]?/i);
  return m ? m[1] : null;
}

/** Map our role subtask summary to discipline suffix */
function disciplineSuffix(summary) {
  if (/^\[UX\]$/i.test(summary)) return 'UX';
  if (/^\[Dev FE\]$/i.test(summary) || /^\[DEV FE\]$/i.test(summary)) return 'FE';
  if (/^\[Dev BE\]$/i.test(summary) || /^\[DEV BE\]$/i.test(summary)) return 'BE';
  return null;
}

const STORY_KEYS = [
  'DPH-15', 'DPH-183', 'DPH-184', 'DPH-185', 'DPH-188', 'DPH-347',
  'DPH-182', 'DPH-189', 'DPH-201', 'DPH-340', 'DPH-241', 'DPH-249',
  'DPH-237', 'DPH-238', 'DPH-239',
  'DPH-243', 'DPH-248', 'DPH-250', 'DPH-261', 'DPH-262', 'DPH-263',
  'DPH-398', 'DPH-399', 'DPH-400',
  'DPH-256', 'DPH-251', 'DPH-252', 'DPH-253',
  'DPH-474', 'DPH-258', 'DPH-475', 'DPH-476',
  'DPH-259', 'DPH-485', 'DPH-260',
];

async function main() {
  if (!email || !token) {
    console.error('Set JIRA_EMAIL and JIRA_API_TOKEN in .env');
    process.exit(1);
  }

  const toRename = [];
  for (const parentKey of STORY_KEYS) {
    const result = await search(`parent = ${parentKey}`);
    for (const issue of result.issues || []) {
      const summary = (issue.fields && issue.fields.summary) || '';
      const suffix = disciplineSuffix(summary);
      if (!suffix) continue;
      toRename.push({ key: issue.key, parentKey, summary, suffix });
    }
  }

  for (const { key, parentKey, suffix } of toRename) {
    const parent = await getIssue(parentKey);
    const parentSummary = parent.fields && parent.fields.summary;
    const serial = parseSerial(parentSummary);
    if (!serial) {
      console.warn(`Skip ${key}: could not parse serial from parent "${(parentSummary || '').slice(0, 50)}"`);
      continue;
    }
    const newSummary = `[${serial}-${suffix}] Tasks`;
    if (dryRun) {
      console.log(`[dry-run] ${key} -> "${newSummary}"`);
    } else {
      await updateSummary(key, newSummary);
      console.log(`Renamed ${key} to "${newSummary}"`);
    }
  }
  console.log('Done.');
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
