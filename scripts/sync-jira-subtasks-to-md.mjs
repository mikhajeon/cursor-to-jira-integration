#!/usr/bin/env node
/**
 * Fetches from Jira each story/task issue and updates the corresponding .md
 * under docs/product-hub-jira with:
 * - Epic details (parent): name, description, work type, status, assignee, priority, linked items.
 * - Story/Task details: name, description, work type, assignee, assignees, priority,
 *   story points, sprint, status, linked work items.
 * - Subtasks: for each, name, description, work type, status, and the same fields as above.
 * Run from project root: node scripts/sync-jira-subtasks-to-md.mjs
 */

import { readFileSync, existsSync, readdirSync, writeFileSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = join(__dirname, '..');
const docsRoot = join(root, 'docs', 'product-hub-jira');
const domain = process.env.JIRA_DOMAIN || 'datacomgroup';
const baseUrl = `https://${domain}.atlassian.net`;

function loadEnv() {
  const envPath = join(root, '.env');
  if (!existsSync(envPath)) return;
  readFileSync(envPath, 'utf8').split('\n').forEach((line) => {
    const m = line.match(/^\s*([A-Za-z_][A-Za-z0-9_]*)\s*=\s*(.*)$/);
    if (m) process.env[m[1]] = m[2].replace(/^["']|["']$/g, '').trim();
  });
}
loadEnv();

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

/** listIndent: indent string for nested lists so AC sub-items render with correct indentation */
function adfToMarkdown(node, listIndent = '') {
  if (!node) return '';
  if (typeof node === 'string') return node;
  if (Array.isArray(node)) return node.map((n) => adfToMarkdown(n, listIndent)).join('');
  const { type, content = [], text, marks } = node;
  if (type === 'doc') return adfToMarkdown(content, listIndent).trim() + '\n';
  if (type === 'paragraph') return adfToMarkdown(content, listIndent) + '\n\n';
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
  if (type === 'heading') return '#'.repeat(node.attrs?.level || 2) + ' ' + adfToMarkdown(content, listIndent).trim() + '\n\n';
  if (type === 'orderedList') {
    const items = (content || []).filter(c => c.type === 'listItem');
    const nested = listIndent + '    ';
    return items.map((item, i) => listIndent + `${i + 1}. ` + adfToMarkdown(item, nested).trimEnd()).join('\n') + '\n\n';
  }
  if (type === 'bulletList') {
    const items = (content || []).filter(c => c.type === 'listItem');
    const nested = listIndent + '    ';
    return items.map((item) => listIndent + '- ' + adfToMarkdown(item, nested).trimEnd()).join('\n') + '\n\n';
  }
  if (type === 'listItem') {
    const nested = listIndent + '    ';
    const parts = (content || []).map((c) => {
      if (c.type === 'orderedList' || c.type === 'bulletList') return adfToMarkdown(c, nested);
      return adfToMarkdown(c, listIndent);
    });
    return parts.join('').trimEnd();
  }
  if (type === 'blockquote') return content.map(c => '> ' + adfToMarkdown(c, listIndent).trim()).join('\n') + '\n\n';
  if (type === 'rule') return '---\n\n';
  return adfToMarkdown(content, listIndent);
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

function epicDetailsBlock(epicKey, fields) {
  const name = fields.summary || '—';
  const description = descToMd(fields.description);
  const workType = fields.issuetype?.name || '—';
  const assignee = fields.assignee?.displayName || '—';
  const assignees = assigneesStr(fields.customfield_24517);
  const priority = fields.priority?.name || '—';
  const status = fields.status?.name || '—';
  const linked = linkedStrReal(fields.issuelinks);
  return `### Epic details

**Jira:** [${epicKey}](${baseUrl}/browse/${epicKey})

| Field | Value |
|-------|--------|
| **Name** | ${name} |
| **Description** | See below |
| **Work type** | ${workType} |
| **Status** | ${status} |
| **Assignee** | ${assignee} |
| **Assignees** (extra) | ${assignees} |
| **Priority** | ${priority} |
| **Linked work items** | ${linked} |

**Description:**

${description}
`;
}

function storyDetailsBlock(fields) {
  const name = fields.summary || '—';
  const description = 'See below';
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
| **Name** | ${name} |
| **Description** | ${description} |
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
  const workType = st.fields?.issuetype?.name || '—';
  const assignee = st.fields?.assignee?.displayName || '—';
  const assignees = assigneesStr(st.fields?.customfield_24517);
  const priority = st.fields?.priority?.name || '—';
  const points = st.fields?.customfield_12113 != null ? String(st.fields.customfield_12113) : '—';
  const sprint = sprintStr(st.fields?.customfield_10106);
  const linked = linkedStrReal(st.fields?.issuelinks);
  const status = st.fields?.status?.name || '—';
  return `
#### [${key}] ${name}

**Jira:** [${key}](${baseUrl}/browse/${key}) · **Status:** ${status}

| Field | Value |
|-------|--------|
| **Name** | ${name} |
| **Description** | See below |
| **Work type** | ${workType} |
| **Status** | ${status} |
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

function collectMdFiles(dir, list = []) {
  const entries = readdirSync(dir, { withFileTypes: true });
  for (const e of entries) {
    const full = join(dir, e.name);
    if (e.isDirectory()) collectMdFiles(full, list);
    else if (e.name.endsWith('.md') && e.name !== 'README.md') list.push(full);
  }
  return list;
}

function extractJiraKey(content) {
  const m = content.match(/\*\*Jira:\*\*\s*\[(DPH-\d+)\]\(/);
  return m ? m[1] : null;
}

function insertOrReplaceEpicDetails(content, block) {
  const heading = '### Epic details';
  if (!block) {
    if (content.includes(heading)) return content.replace(/\n*### Epic details\n[\s\S]*?(?=\n### Story details|\n### Subtasks|\n---|\n#)/, '\n\n');
    return content;
  }
  if (content.includes(heading)) {
    return content.replace(/### Epic details\n[\s\S]*?(?=\n### Story details|\n### Subtasks|\n---|\n#)/, block.trimEnd() + '\n\n');
  }
  return content.replace(/(\*\*Jira:\*\* \[DPH-\d+\][^\n]+\n)\n+(### Story details)/, `$1\n\n${block.trimEnd()}\n\n$2`);
}

function insertOrReplaceStoryDetails(content, block) {
  if (content.includes('### Story details')) {
    return content.replace(/### Story details\n[\s\S]*?(?=\n### |\n---|\n#)/, block.trimEnd() + '\n\n');
  }
  return content.replace(/(\*\*Jira:\*\*[^\n]+\n)\n(---)/, `$1\n\n${block.trimEnd()}\n\n$2`);
}

function replaceSubtasksSection(content, newSubtasks) {
  const heading = '### Subtasks';
  const newSection = heading + '\n\n' + newSubtasks.trim() + '\n\n---';
  if (content.includes(heading)) {
    const regex = /(### Subtasks)\n[\s\S]*?(\n---)/;
    const match = content.match(regex);
    if (match) return content.replace(regex, newSection + '$2');
    return content.replace(/(### Subtasks)\n[\s\S]*/, newSection);
  }
  const acIdx = content.indexOf('### AC');
  const afterAc = acIdx >= 0 ? content.indexOf('\n---', acIdx) : -1;
  if (afterAc !== -1) return content.slice(0, afterAc + 5) + '\n\n' + newSection + content.slice(afterAc + 5);
  return content + '\n\n' + newSection + '\n';
}

function escapeTableCell(s) {
  if (s == null || s === '') return '—';
  const t = String(s).replace(/\|/g, '\\|').replace(/\n/g, ' ');
  return t.length > 80 ? t.slice(0, 77) + '...' : t;
}

async function main() {
  if (!email || !token) {
    console.error('Set JIRA_EMAIL and JIRA_API_TOKEN (e.g. in .env).');
    process.exit(1);
  }

  const files = collectMdFiles(docsRoot);
  const results = [];

  for (const filePath of files) {
    const relativePath = filePath.replace(root + '/', '');
    const content = readFileSync(filePath, 'utf8');
    const key = extractJiraKey(content);
    if (!key) {
      console.log('Skip (no Jira key):', relativePath);
      results.push({ file: relativePath, key: '—', status: 'Skipped', summary: 'No Jira key in file', subtasks: '—' });
      continue;
    }

    let issue;
    try {
      issue = await getIssue(key);
    } catch (e) {
      console.warn('Fetch failed', key, e.message);
      results.push({ file: relativePath, key, status: 'Failed', summary: e.message, subtasks: '—' });
      continue;
    }

    const fields = issue.fields || {};
    const subtaskKeys = (fields.subtasks || []).map(s => s.key);
    const storySummary = fields.summary || key;

    let newContent = content;
    const parent = fields.parent;
    if (parent?.key) {
      try {
        const parentIssue = await getIssue(parent.key);
        if (parentIssue.fields?.issuetype?.name === 'Epic') {
          newContent = insertOrReplaceEpicDetails(newContent, epicDetailsBlock(parent.key, parentIssue.fields || {}));
        } else {
          newContent = insertOrReplaceEpicDetails(newContent, null);
        }
      } catch (e) {
        console.warn('Could not fetch parent Epic', parent.key, e.message);
        newContent = insertOrReplaceEpicDetails(newContent, null);
      }
    } else {
      newContent = insertOrReplaceEpicDetails(newContent, null);
    }
    newContent = insertOrReplaceStoryDetails(newContent, storyDetailsBlock(fields));

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
      newContent = replaceSubtasksSection(newContent, subtasksMd.trim());
    } else {
      newContent = replaceSubtasksSection(newContent, '_No subtasks in Jira._');
    }

    const changed = content !== newContent;
    writeFileSync(filePath, newContent, 'utf8');
    console.log('Updated', relativePath);
    results.push({
      file: relativePath,
      key,
      status: changed ? 'Updated' : 'Unchanged',
      summary: storySummary,
      subtasks: String(subtaskKeys.length),
    });
  }

  // Print summary table
  console.log('\n---\n## Sync summary\n');
  console.log('| File | Jira Key | Status | Story / Task | Subtasks |');
  console.log('|------|----------|--------|--------------|----------|');
  for (const r of results) {
    console.log(`| ${escapeTableCell(r.file)} | ${escapeTableCell(r.key)} | ${escapeTableCell(r.status)} | ${escapeTableCell(r.summary)} | ${escapeTableCell(r.subtasks)} |`);
  }
  console.log('\nDone.');
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
