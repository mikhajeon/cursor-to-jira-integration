#!/usr/bin/env node
/**
 * Consolidates Jira subtasks whose summary starts with "✓":
 * - Groups them by role: [UX], [Dev FE], [Dev BE] (from "[UX]", "[Dev] [FE]", "[Dev] [BE]" in the name).
 * - For each user story (parent) that has ✓ subtasks: ensures one [UX], one [Dev FE], one [Dev BE] subtask
 *   exist; sets or appends their description to a bullet list of the ✓ subtask names (✓ removed).
 * - Deletes the original ✓ subtasks.
 *
 * Run from project root: node scripts/consolidate-checkmark-subtasks.mjs
 * Dry run (no create/update/delete): node scripts/consolidate-checkmark-subtasks.mjs --dry-run
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

async function search(jql, fields = ['summary', 'status', 'parent', 'description']) {
  const res = await request('/rest/api/3/search/jql', {
    method: 'POST',
    body: JSON.stringify({ jql, maxResults: 500, fields }),
  });
  if (!res.ok) throw new Error(`Search: ${res.status} ${await res.text()}`);
  return res.json();
}

/** Parse role from ✓ subtask summary: "[UX]", "[Dev] [FE]", "[Dev] [BE]" */
function parseRole(summary) {
  const s = summary.replace(/^\s*✓\s*/, '').trim();
  if (/^\[UX\]/i.test(s)) return 'UX';
  if (/^\[Dev\]\s*\[FE\]/i.test(s) || /^\[DEV FE\]/i.test(s) || /^\[Dev FE\]/i.test(s)) return 'Dev FE';
  if (/^\[Dev\]\s*\[BE\]/i.test(s) || /^\[DEV BE\]/i.test(s) || /^\[Dev BE\]/i.test(s)) return 'Dev BE';
  return null;
}

/** Strip leading ✓ and trim for bullet text */
function stripCheckmark(summary) {
  return summary.replace(/^\s*✓\s*/, '').trim();
}

/** Build ADF document for a bullet list of strings */
function adfBulletList(items) {
  return {
    type: 'doc',
    version: 1,
    content: [
      {
        type: 'bulletList',
        content: items.map((text) => ({
          type: 'listItem',
          content: [{ type: 'paragraph', content: [{ type: 'text', text }] }],
        })),
      },
    ],
  };
}

/** Append bullets to existing ADF description and return new ADF */
function appendBulletsToAdf(existingAdf, newBullets) {
  if (!existingAdf || !existingAdf.content) return adfBulletList(newBullets);
  const newList = {
    type: 'bulletList',
    content: newBullets.map((text) => ({
      type: 'listItem',
      content: [{ type: 'paragraph', content: [{ type: 'text', text }] }],
    })),
  };
  return {
    type: 'doc',
    version: 1,
    content: [...existingAdf.content, { type: 'paragraph', content: [] }, newList],
  };
}

async function createSubtask(parentKey, summary, descriptionAdf) {
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

const ROLE_SUMMARY = { 'UX': '[UX]', 'Dev FE': '[Dev FE]', 'Dev BE': '[Dev BE]' };

function matchRoleSubtask(subtask, role) {
  const summary = (subtask.fields && subtask.fields.summary) || '';
  if (role === 'UX' && /^\[UX\]/i.test(summary)) return true;
  if (role === 'Dev FE' && (/^\[DEV FE\]/i.test(summary) || /^\[Dev FE\]/i.test(summary))) return true;
  if (role === 'Dev BE' && (/^\[DEV BE\]/i.test(summary) || /^\[Dev BE\]/i.test(summary))) return true;
  return false;
}

async function main() {
  if (!email || !token) {
    console.error('Set JIRA_EMAIL and JIRA_API_TOKEN in .env');
    process.exit(1);
  }

  const allSubtasks = [];
  for (const parent of STORY_KEYS) {
    const result = await search(`parent = ${parent}`);
    (result.issues || []).forEach((i) => {
      allSubtasks.push({
        parent,
        key: i.key,
        summary: (i.fields && i.fields.summary) || '',
        fields: i.fields,
      });
    });
  }

  const checkmarkSubtasks = allSubtasks.filter(
    (s) => s.summary.charCodeAt(0) === 10003 || s.summary.trimStart().startsWith('✓')
  );

  const byParentAndRole = new Map();
  for (const s of checkmarkSubtasks) {
    const role = parseRole(s.summary);
    if (!role) {
      console.warn('Skip (no role):', s.key, s.summary.slice(0, 60));
      continue;
    }
    const k = `${s.parent}:${role}`;
    if (!byParentAndRole.has(k)) byParentAndRole.set(k, []);
    byParentAndRole.get(k).push({ key: s.key, name: stripCheckmark(s.summary) });
  }

  const parentsWithCheckmarks = [...new Set(checkmarkSubtasks.map((s) => s.parent))];

  for (const parentKey of parentsWithCheckmarks) {
    const parentSubtasks = allSubtasks.filter((s) => s.parent === parentKey);

    for (const role of ['UX', 'Dev FE', 'Dev BE']) {
      const k = `${parentKey}:${role}`;
      const items = byParentAndRole.get(k);
      if (!items || items.length === 0) continue;

      const bulletNames = items.map((i) => i.name);
      const existing = parentSubtasks.find((s) => matchRoleSubtask(s, role));

      if (existing) {
        const currentDesc = existing.fields && existing.fields.description;
        const newDesc = appendBulletsToAdf(currentDesc, bulletNames);
        if (dryRun) {
          console.log(`[dry-run] Would update ${existing.key} ([${role}]) description with ${items.length} bullets`);
        } else {
          await updateDescription(existing.key, newDesc);
          console.log(`Updated ${existing.key} ([${role}]) with ${items.length} consolidated items`);
        }
      } else {
        const summary = ROLE_SUMMARY[role];
        const descAdf = adfBulletList(bulletNames);
        if (dryRun) {
          console.log(`[dry-run] Would create [${role}] under ${parentKey} with ${items.length} bullets`);
        } else {
          const newKey = await createSubtask(parentKey, summary, descAdf);
          console.log(`Created ${newKey} [${role}] under ${parentKey} with ${items.length} items`);
        }
      }
    }

    if (!dryRun) {
      for (const s of checkmarkSubtasks.filter((s) => s.parent === parentKey)) {
        await deleteIssue(s.key);
        console.log(`Deleted ✓ subtask ${s.key}`);
      }
    } else {
      checkmarkSubtasks.filter((s) => s.parent === parentKey).forEach((s) => console.log(`[dry-run] Would delete ${s.key}`));
    }
  }

  console.log('Done.');
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
