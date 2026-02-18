#!/usr/bin/env node
/**
 * Fetches Product Hub (DPH) epics 0–7 and their user stories from Jira,
 * then writes docs/product-hub-jira/epic-N-name/ folders with one .md per story.
 * Each .md is named like the Jira ticket (e.g. [US-1.2] Visit Product Catalogue.md)
 * and contains the issue description (user story + acceptance criteria) as markdown.
 *
 * Run from project root: node scripts/sync-product-hub-stories.mjs
 * Requires .env with JIRA_DOMAIN, JIRA_EMAIL, JIRA_API_TOKEN.
 */

import { readFileSync, existsSync, mkdirSync, writeFileSync } from 'fs';
import { dirname, join } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = join(__dirname, '..');
const docsRoot = join(root, 'docs', 'product-hub-jira');

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

async function getIssue(key) {
  const res = await fetch(`${baseUrl}/rest/api/3/issue/${key}`, {
    headers: { Accept: 'application/json', Authorization: `Basic ${auth}` },
  });
  if (!res.ok) throw new Error(`${key}: ${res.status} ${await res.text()}`);
  return res.json();
}

/** Convert Atlassian Document Format (ADF) to Markdown */
function adfToMarkdown(node) {
  if (!node) return '';
  if (typeof node === 'string') return node;
  if (Array.isArray(node)) return node.map(adfToMarkdown).join('');

  const { type, content = [], text, marks } = node;

  if (type === 'doc') return adfToMarkdown(content).trim() + '\n';

  if (type === 'paragraph') {
    return adfToMarkdown(content) + '\n\n';
  }
  if (type === 'hardBreak') return '\n';
  if (type === 'text') {
    let t = text || '';
    if (marks) {
      for (const m of marks) {
        if (m.type === 'strong') t = `**${t}**`;
        else if (m.type === 'em') t = `*${t}*`;
        else if (m.type === 'code') t = `\`${t}\``;
      }
    }
    return t;
  }
  if (type === 'heading') {
    const level = node.attrs?.level || 2;
    const prefix = '#'.repeat(level) + ' ';
    return prefix + adfToMarkdown(content).trim() + '\n\n';
  }
  if (type === 'orderedList') {
    const items = (content || []).filter((c) => c.type === 'listItem');
    return items.map((item, i) => `${i + 1}. ${adfToMarkdown(item).trim()}`).join('\n') + '\n\n';
  }
  if (type === 'bulletList') {
    const items = (content || []).filter((c) => c.type === 'listItem');
    return items.map((item) => '- ' + adfToMarkdown(item).trim()).join('\n') + '\n\n';
  }
  if (type === 'listItem') {
    return adfToMarkdown(content).trim().replace(/\n+/g, ' ');
  }
  if (type === 'blockquote') {
    return content.map((c) => '> ' + adfToMarkdown(c).trim()).join('\n') + '\n\n';
  }
  if (type === 'codeBlock') {
    const code = content.map((c) => (c.content || []).map((t) => t.text || '').join('')).join('');
    return '```\n' + code + '\n```\n\n';
  }
  if (type === 'rule') return '---\n\n';
  return adfToMarkdown(content);
}

function safeFilename(summary) {
  return summary.replace(/[/\\?*|"]/g, '-').trim();
}

const EPIC_FOLDERS = [
  { folder: '[EPIC-0]: App Foundations', keys: ['DPH-15', 'DPH-183', 'DPH-184', 'DPH-185', 'DPH-188', 'DPH-347'] },
  { folder: '[EPIC-1]: Web app core layout', keys: ['DPH-182', 'DPH-189', 'DPH-201', 'DPH-340', 'DPH-241', 'DPH-249'] },
  { folder: '[EPIC-2]: User Authentication & Role Management', keys: ['DPH-237', 'DPH-238', 'DPH-239'] },
  { folder: '[EPIC-3]: Product Upload & Assisted Development', keys: ['DPH-243', 'DPH-248', 'DPH-250', 'DPH-261', 'DPH-262', 'DPH-263'] },
  { folder: '[EPIC-4]: AI Content Generator', keys: ['DPH-398', 'DPH-399', 'DPH-400'] },
  { folder: '[EPIC-5]: Product Approval & Admin Dashboard', keys: ['DPH-256', 'DPH-251', 'DPH-252', 'DPH-253'] },
  { folder: '[EPIC-6]: Assisted Security Testing & Deployment', keys: ['DPH-474', 'DPH-258', 'DPH-475', 'DPH-476'] },
  { folder: '[EPIC-7]: User Reviews, Ratings, & Sharing', keys: ['DPH-259', 'DPH-485', 'DPH-260'] },
];

async function main() {
  if (!email || !token) {
    console.error('Set JIRA_EMAIL and JIRA_API_TOKEN (e.g. in .env).');
    process.exit(1);
  }

  for (const { folder, keys } of EPIC_FOLDERS) {
    const dir = join(docsRoot, folder);
    mkdirSync(dir, { recursive: true });

    for (const key of keys) {
      const issue = await getIssue(key);
      const summary = issue.fields?.summary || key;
      const description = issue.fields?.description;
      const fileName = safeFilename(summary) + '.md';
      const jiraLink = `https://${domain}.atlassian.net/browse/${key}`;

      let body = '';
      if (description && typeof description === 'object' && description.content) {
        body = adfToMarkdown(description).trim();
      } else if (typeof description === 'string') {
        body = description;
      } else {
        body = '_No description in Jira._';
      }

      const md = `# ${summary}

**Jira:** [${key}](${jiraLink})

---

${body}
`;
      writeFileSync(join(dir, fileName), md, 'utf8');
      console.log(`Wrote ${folder}/${fileName}`);
    }
  }
  console.log('Done.');
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
