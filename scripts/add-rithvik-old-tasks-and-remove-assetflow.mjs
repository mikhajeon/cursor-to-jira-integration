#!/usr/bin/env node
/**
 * 1. Create subtask "Rithvik's old tasks" under DPH-399 (US-4.2) with ADF description and assign to Rithvik.
 * 2. Delete Assetflow Engine child issues (DPH-171, 172, 173, 174, 175, 176, 187) then epic DPH-166.
 * Run from project root: node scripts/add-rithvik-old-tasks-and-remove-assetflow.mjs
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
const RITHVIK_ACCOUNT_ID = '712020:cf22feb4-2301-422f-a5e8-c8e1a77bd9f0';

const PARENT_KEY = 'DPH-399';
const ASSETFLOW_ISSUES = ['DPH-171', 'DPH-172', 'DPH-173', 'DPH-174', 'DPH-175', 'DPH-176', 'DPH-187'];
const EPIC_KEY = 'DPH-166';

const DESCRIPTION_ITEMS = [
  '[BE] API skeleton: basic CRUD for submissions, local file storage',
  '[FE] Checkpoint 1 UI: step editor + approval',
  '[FE] Script pipeline: mock LLM, checkpoint 2 UI',
  '[BE] Video pipeline: mock HeyGen with polling + status',
  '[BE] Integration: swap mocks for real services behind env flags',
  '[BE] Hardening: validation, error handling, rate limits, logging',
  '[UX] Refer to Dipesh notes and instructions for researching about Multi-agent flow for generating documentation (for security team and product hub content)',
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

async function getIssue(key) {
  const res = await request(`/rest/api/3/issue/${key}?fields=project`);
  if (!res.ok) throw new Error(`${key}: ${res.status}`);
  return res.json();
}

function adfBulletList(items) {
  return {
    type: 'doc',
    version: 1,
    content: [{
      type: 'bulletList',
      content: items.map((text) => ({
        type: 'listItem',
        content: [{ type: 'paragraph', content: [{ type: 'text', text }] }],
      })),
    }],
  };
}

async function createSubtask(parentKey, summary, descriptionAdf, accountId) {
  const parent = await getIssue(parentKey);
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
  if (accountId) body.fields.assignee = { accountId };
  const res = await request('/rest/api/3/issue', { method: 'POST', body: JSON.stringify(body) });
  if (!res.ok) throw new Error(`Create: ${res.status} ${await res.text()}`);
  const created = await res.json();
  return created.key;
}

async function deleteIssue(key) {
  const res = await request(`/rest/api/3/issue/${key}`, { method: 'DELETE' });
  if (!res.ok) throw new Error(`Delete ${key}: ${res.status} ${await res.text()}`);
}

async function main() {
  if (!email || !token) {
    console.error('JIRA_EMAIL and JIRA_API_TOKEN required.');
    process.exit(1);
  }

  console.log('Creating subtask "Rithvik\'s old tasks" under DPH-399...');
  const newKey = await createSubtask(PARENT_KEY, "Rithvik's old tasks", adfBulletList(DESCRIPTION_ITEMS), RITHVIK_ACCOUNT_ID);
  console.log('Created', newKey);

  console.log('Deleting Assetflow Engine issues...');
  for (const key of ASSETFLOW_ISSUES) {
    await deleteIssue(key);
    console.log('Deleted', key);
  }
  console.log('Deleting Epic DPH-166...');
  await deleteIssue(EPIC_KEY);
  console.log('Deleted', EPIC_KEY);

  console.log('\nNew subtask key for .md:', newKey);
  console.log('Update US-4.2 .md: replace _(to be created)_ with', newKey);
}

main().catch((e) => {
  console.error(e.message || e);
  process.exit(1);
});
