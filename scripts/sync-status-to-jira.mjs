#!/usr/bin/env node
/**
 * Reads status from Product Hub .md (US Story details + README Epic status table)
 * and transitions Jira issues to match. Only transitions Stories and Epics — skips Tasks.
 * Run from project root after update-status-from-subtasks.mjs.
 *
 * node scripts/sync-status-to-jira.mjs
 */

import { readFileSync, readdirSync, existsSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = join(__dirname, '..');
const docsRoot = join(root, 'docs', 'product-hub-jira');

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

async function request(path, options = {}) {
  const url = path.startsWith('http') ? path : `${baseUrl}${path}`;
  const res = await fetch(url, {
    ...options,
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      Authorization: `Basic ${auth}`,
      ...options.headers,
    },
  });
  return res;
}

async function getIssue(key, fields = 'status') {
  const res = await request(`/rest/api/3/issue/${key}?fields=${fields}`);
  if (!res.ok) throw new Error(`${key}: ${res.status}`);
  return res.json();
}

async function transitionTo(key, statusName) {
  const tRes = await request(`/rest/api/3/issue/${key}/transitions`);
  if (!tRes.ok) throw new Error(`Transitions ${key}: ${tRes.status}`);
  const { transitions } = await tRes.json();
  const match = transitions.find((t) => t.name.toLowerCase() === statusName.toLowerCase());
  if (!match) throw new Error(`No transition "${statusName}" for ${key}. Available: ${transitions.map((t) => t.name).join(', ')}`);
  const res = await request(`/rest/api/3/issue/${key}/transitions`, {
    method: 'POST',
    body: JSON.stringify({ transition: { id: match.id } }),
  });
  if (!res.ok) throw new Error(`Transition ${key}: ${res.status} ${await res.text()}`);
}

function isStoryFile(filePath) {
  const name = filePath.split(/[/\\]/).pop() || '';
  return !name.includes('[TASK-');
}

function collectUsStatuses() {
  const list = [];
  for (const folder of readdirSync(docsRoot, { withFileTypes: true })) {
    if (!folder.isDirectory()) continue;
    const dir = join(docsRoot, folder.name);
    for (const f of readdirSync(dir)) {
      if (!f.endsWith('.md')) continue;
      const filePath = join(dir, f);
      if (!isStoryFile(filePath)) continue;
      const content = readFileSync(filePath, 'utf8');
      const keyMatch = content.match(/\*\*Jira:\*\*\s*\[(DPH-\d+)\]\(/);
      const statusMatch = content.match(/\|\s*\*\*Status\*\*\s*\|\s*([^|]+)\s*\|/);
      if (keyMatch && statusMatch) list.push({ key: keyMatch[1], status: statusMatch[1].trim() });
    }
  }
  return list;
}

function collectEpicStatuses() {
  const readme = readFileSync(join(docsRoot, 'README.md'), 'utf8');
  const table = readme.match(/\|\s*Epic\s*\|\s*Folder\s*\|\s*Status\s*\|[\s\S]*?(?=\n\n## |$)/);
  if (!table) return [];
  const epicByNum = {
    '0': 'DPH-162',
    '1': 'DPH-181',
    '2': 'DPH-236',
    '3': 'DPH-242',
    '4': 'DPH-244',
    '5': 'DPH-245',
    '6': 'DPH-246',
    '7': 'DPH-247',
  };
  const rows = table[0].split('\n').filter((r) => /^\|\s*\d+\s*\|/.test(r));
  const list = [];
  for (const row of rows) {
    const m = row.match(/\|\s*(\d+)\s*\|[^|]*\|\s*([^|]+)\s*\|/);
    if (m) {
      const key = epicByNum[m[1]];
      if (key) list.push({ key, status: m[2].trim() });
    }
  }
  return list;
}

async function main() {
  if (!email || !token) {
    console.error('JIRA_EMAIL and JIRA_API_TOKEN required (.env).');
    process.exit(1);
  }

  const usList = collectUsStatuses();
  const epicList = collectEpicStatuses();

  let done = 0;
  let skipped = 0;
  let errs = 0;

  for (const { key, status } of [...usList, ...epicList]) {
    try {
      const issue = await getIssue(key, 'status,issuetype');
      const issuetype = issue.fields?.issuetype?.name || '';
      if (issuetype === 'Task') {
        skipped++;
        continue;
      }
      const current = issue.fields?.status?.name || '';
      if (current === status) {
        skipped++;
        continue;
      }
      await transitionTo(key, status);
      console.log(`Transitioned ${key} (${issuetype}) → ${status}`);
      done++;
    } catch (e) {
      console.error(`${key}: ${e.message}`);
      errs++;
    }
  }

  console.log(`\nDone: ${done} transitioned, ${skipped} already correct, ${errs} errors.`);
  if (errs) process.exit(1);
}

main();
