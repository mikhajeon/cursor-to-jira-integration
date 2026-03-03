#!/usr/bin/env node
/**
 * Syncs the Jira epic "Assetflow Engine" (DPH-166) and its child issues to
 * docs/product-hub-jira/[EPIC]: Assetflow Engine/ with one .md per issue (same structure as other epics).
 *
 * Run from project root: node scripts/sync-assetflow-engine-to-md.mjs
 */

import { readFileSync, existsSync, mkdirSync, writeFileSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = join(__dirname, '..');
const docsRoot = join(root, 'docs', 'product-hub-jira');
const ASSETFLOW_FOLDER = '[EPIC]: Assetflow Engine';
const ASSETFLOW_EPIC_KEY = 'DPH-166';
const ASSETFLOW_ISSUE_KEYS = ['DPH-171', 'DPH-172', 'DPH-173', 'DPH-174', 'DPH-175', 'DPH-176', 'DPH-187'];

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
const baseUrl = `https://${domain}.atlassian.net`;
const email = process.env.JIRA_EMAIL;
const token = process.env.JIRA_API_TOKEN;
const auth = Buffer.from(`${email}:${token}`).toString('base64');

async function getIssue(key) {
  const res = await fetch(`${baseUrl}/rest/api/3/issue/${key}`, {
    headers: { Accept: 'application/json', Authorization: `Basic ${auth}` },
  });
  if (!res.ok) throw new Error(`${key}: ${res.status}`);
  return res.json();
}

function adfToMarkdown(node) {
  if (!node) return '';
  if (typeof node === 'string') return node;
  if (Array.isArray(node)) return node.map(adfToMarkdown).join('');
  const { type, content = [], text, marks } = node;
  if (type === 'doc') return adfToMarkdown(content).trim() + '\n';
  if (type === 'paragraph') return adfToMarkdown(content) + '\n\n';
  if (type === 'hardBreak') return '\n';
  if (type === 'text') {
    let t = text || '';
    if (marks) for (const m of marks) {
      if (m.type === 'strong') t = `**${t}**`;
      else if (m.type === 'em') t = `*${t}*`;
      else if (m.type === 'code') t = `\`${t}\``;
    }
    return t;
  }
  if (type === 'heading') return '#'.repeat(node.attrs?.level || 2) + ' ' + adfToMarkdown(content).trim() + '\n\n';
  if (type === 'orderedList') return (content || []).filter(c => c.type === 'listItem').map((item, i) => `${i + 1}. ${adfToMarkdown(item).trim()}`).join('\n') + '\n\n';
  if (type === 'bulletList') return (content || []).filter(c => c.type === 'listItem').map(item => '- ' + adfToMarkdown(item).trim()).join('\n') + '\n\n';
  if (type === 'listItem') return adfToMarkdown(content).trim().replace(/\n+/g, ' ');
  if (type === 'blockquote') return content.map(c => '> ' + adfToMarkdown(c).trim()).join('\n') + '\n\n';
  if (type === 'rule') return '---\n\n';
  return adfToMarkdown(content);
}

function descToMd(desc) {
  if (!desc) return '_No description._';
  if (typeof desc === 'string') return desc;
  if (desc.content) return adfToMarkdown(desc).trim();
  return '_No description._';
}

function sprintStr(sprintField) {
  if (!sprintField) return '—';
  const arr = Array.isArray(sprintField) ? sprintField : [sprintField];
  const names = arr.map(s => (typeof s === 'object' && s.name) ? s.name : String(s));
  return names.join(', ') || '—';
}

function assigneesStr(extra) {
  if (!extra || !Array.isArray(extra)) return '—';
  return extra.map(u => u.displayName).filter(Boolean).join(', ') || '—';
}

function linkedStrReal(issuelinks) {
  if (!issuelinks || !issuelinks.length) return '—';
  const parts = [];
  for (const link of issuelinks) {
    const type = link.type?.name || link.type?.inward || '';
    const other = link.outwardIssue || link.inwardIssue;
    const key = other?.key;
    if (key) parts.push(`[${key}](${baseUrl}/browse/${key}) (${type})`);
  }
  return parts.length ? parts.join(', ') : '—';
}

function storyDetailsBlock(fields) {
  const workType = fields.issuetype?.name || '—';
  const assignee = fields.assignee?.displayName || '—';
  const assignees = assigneesStr(fields.customfield_24517);
  const priority = fields.priority?.name || '—';
  const points = fields.customfield_12113 != null ? String(fields.customfield_12113) : '—';
  const sprint = sprintStr(fields.customfield_10106);
  const linked = linkedStrReal(fields.issuelinks);
  const status = fields.status?.name || '—';
  return `### Story details

| Field | Value |
|-------|--------|
| **Work type** | ${workType} |
| **Assignee** | ${assignee} |
| **Assignees** (extra) | ${assignees} |
| **Priority** | ${priority} |
| **Story point estimate** | ${points} |
| **Sprint** | ${sprint} |
| **Status** | ${status} |
| **Linked work items** | ${linked} |
`;
}

function subtaskBlock(st) {
  const name = st.fields?.summary || st.key;
  const key = st.key;
  const desc = descToMd(st.fields?.description);
  const assignee = st.fields?.assignee?.displayName || '—';
  const assignees = assigneesStr(st.fields?.customfield_24517);
  const priority = st.fields?.priority?.name || '—';
  const points = st.fields?.customfield_12113 != null ? String(st.fields?.customfield_12113) : '—';
  const sprint = sprintStr(st.fields?.customfield_10106);
  const linked = linkedStrReal(st.fields?.issuelinks);
  const status = st.fields?.status?.name || '—';
  return `
#### [${key}] ${name}

**Jira:** [${key}](${baseUrl}/browse/${key}) · **Status:** ${status}

| Field | Value |
|-------|--------|
| **Description** | See below |
| **Story point estimate** | ${points} |
| **Priority** | ${priority} |
| **Assignee** | ${assignee} |
| **Assignees** (extra) | ${assignees} |
| **Sprint** | ${sprint} |
| **Linked work items** | ${linked} |

**Description:**

${desc}
`;
}

function safeFilename(summary) {
  return summary.replace(/[/\\?*|"]/g, '-').trim();
}

async function main() {
  if (!email || !token) {
    console.error('Set JIRA_EMAIL and JIRA_API_TOKEN (e.g. in .env).');
    process.exit(1);
  }

  const dir = join(docsRoot, ASSETFLOW_FOLDER);
  mkdirSync(dir, { recursive: true });
  console.log('Folder:', dir);

  for (const key of ASSETFLOW_ISSUE_KEYS) {
    try {
      const issue = await getIssue(key);
      const fields = issue.fields || {};
      const summary = fields.summary || key;
      const description = fields.description;
      let body = '';
      if (description && typeof description === 'object' && description.content) {
        body = adfToMarkdown(description).trim();
      } else if (typeof description === 'string') {
        body = description;
      } else {
        body = '_No description in Jira._';
      }

      const subtaskKeys = (fields.subtasks || []).map(s => s.key);
      let subtasksMd = '';
      if (subtaskKeys.length) {
        for (const sk of subtaskKeys) {
          try {
            const st = await getIssue(sk);
            subtasksMd += subtaskBlock(st);
          } catch (e) {
            subtasksMd += `\n#### ${sk}\n_Failed to load._\n`;
          }
        }
      } else {
        subtasksMd = '_No subtasks in Jira._';
      }

      const md = `# ${summary}

**Jira:** [${key}](${baseUrl}/browse/${key})


${storyDetailsBlock(fields).trim()}

---

${body}


### Subtasks

${subtasksMd.trim()}

---
`;
      const fileName = safeFilename(summary) + '.md';
      const filePath = join(dir, fileName);
      writeFileSync(filePath, md, 'utf8');
      console.log('Wrote', fileName);
    } catch (e) {
      console.error(key, e.message);
    }
  }
  console.log('Done.');
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
