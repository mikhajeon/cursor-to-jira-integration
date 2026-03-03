#!/usr/bin/env node
/**
 * Creates the 3 discipline subtasks for US-1.1 (DPH-189): [1.1-UX] Tasks, [1.1-FE] Tasks, [1.1-BE] Tasks.
 * Sets combined ADF description, assignee, and transitions to Done.
 * Run from project root: node scripts/create-us11-discipline-subtasks.mjs
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

const PARENT_KEY = 'DPH-189';
const BEN_ACCOUNT_ID = '712020:694d99bc-1b50-41a6-bfed-9e17bb6ae66e';
const RITHVIK_ACCOUNT_ID = '712020:cf22feb4-2301-422f-a5e8-c8e1a77bd9f0';

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

function adfParagraph(text) {
  return { type: 'paragraph', content: [{ type: 'text', text }] };
}

function adfBulletList(items) {
  return {
    type: 'bulletList',
    content: items.map((text) => ({
      type: 'listItem',
      content: [{ type: 'paragraph', content: [{ type: 'text', text }] }],
    })),
  };
}

function adfDoc(...blocks) {
  return { type: 'doc', version: 1, content: blocks };
}

const UX_ITEMS = [
  'Define landing page information architecture',
  'Create Navbar & Footer (components across every page)',
  'Discover Section',
  'Featured apps section',
  'Submission section',
  'FAQ Section',
  'Reference & stick to Datacom brand guidelines & Brandhub guidelines',
  'Assist devs in implementation',
  'Track issues and problems for potential automation',
  'Developer handover',
  'Reference the "AI Products Hub" brief',
  'Brainstorming & Ideation',
  'Confirm correct classes, colours and typography styles',
];

const FE_ITEMS = [
  'Implement Global Header Component — Create the Product Hub global header following Figma. Responsive nav, hamburger, cursor rules, button states, accessibility. AC: design system match, responsive, focus trap, aria-labels, reusable.',
  'Implement Global Footer Component — Build global footer with link groups, icons, responsive behavior, theme consistency. AC: Figma match, links/icons correct, responsive, reusable.',
  'Implement Landing Page Structure & Core Sections — Entire landing page (sections 1–10) from Figma. AC: sections match, responsive, backgrounds/transitions, CTA states, content/assets.',
  'Refactor Into Reusable Feature/Card Components — Refactor static sections into reusable components. AC: reusable components, documented props, design parity, consistent use.',
  'Design Asset Integration & Visual Polish — Icons, spacing, brand guidelines, fix inconsistencies. AC: icons match, spacing/CSS variables, visual states, pixel-perfect.',
  'Accessibility & UX Enhancements — Focus management, keyboard, aria, assistive text. AC: focus trap, Escape, aria-labels, keyboard nav, no regressions.',
  'FAQ Section Redesign — New FAQ layout and interaction. AC: layout/specs, typography/spacing, responsive, clean integration.',
  'Write Tests for Components & Page — Unit/integration tests for header, footer, sections, components. AC: core interactions, render, validated, CI.',
  'Code Review, Cleanup & Merge — Cleanup, review comments, code quality, merge. AC: lint/build pass, naming/structure, feedback addressed, merged.',
];

const UX_DESCRIPTION = adfDoc(
  adfParagraph('Consolidated from original UX subtasks:'),
  adfBulletList(UX_ITEMS)
);

const FE_DESCRIPTION = adfDoc(
  adfParagraph('Consolidated from original FE subtasks:'),
  adfBulletList(FE_ITEMS)
);

const BE_DESCRIPTION = adfDoc(
  adfParagraph('No backend-specific subtasks for this story.')
);

async function getIssue(key) {
  const res = await request(`/rest/api/3/issue/${key}?fields=project`);
  if (!res.ok) throw new Error(`${key}: ${res.status} ${await res.text()}`);
  return res.json();
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

async function transitionTo(key, statusName) {
  const tRes = await request(`/rest/api/3/issue/${key}/transitions`);
  if (!tRes.ok) throw new Error(`Transitions: ${tRes.status}`);
  const { transitions } = await tRes.json();
  const match = transitions.find((t) => t.name.toLowerCase() === statusName.toLowerCase());
  if (!match) throw new Error(`No transition "${statusName}" for ${key}. Available: ${transitions.map((t) => t.name).join(', ')}`);
  const res = await request(`/rest/api/3/issue/${key}/transitions`, {
    method: 'POST',
    body: JSON.stringify({ transition: { id: match.id } }),
  });
  if (!res.ok) throw new Error(`Transition: ${res.status} ${await res.text()}`);
}

async function main() {
  if (!email || !token) {
    console.error('JIRA_EMAIL and JIRA_API_TOKEN required (.env in project root).');
    process.exit(1);
  }

  console.log('Creating 3 discipline subtasks under DPH-189...\n');

  const uxKey = await createSubtask(PARENT_KEY, '[1.1-UX] Tasks', UX_DESCRIPTION, BEN_ACCOUNT_ID);
  console.log('Created', uxKey, '[1.1-UX] Tasks → Ben Schaumkel');

  const feKey = await createSubtask(PARENT_KEY, '[1.1-FE] Tasks', FE_DESCRIPTION, RITHVIK_ACCOUNT_ID);
  console.log('Created', feKey, '[1.1-FE] Tasks → Rithvik Sharma');

  const beKey = await createSubtask(PARENT_KEY, '[1.1-BE] Tasks', BE_DESCRIPTION, null);
  console.log('Created', beKey, '[1.1-BE] Tasks (unassigned)');

  console.log('\nTransitioning all to Done...');
  await transitionTo(uxKey, 'Done');
  await transitionTo(feKey, 'Done');
  await transitionTo(beKey, 'Done');
  console.log('Done.\n');

  console.log('New subtask keys (update .md with these links):');
  console.log(`  UX: ${uxKey}  https://${domain}.atlassian.net/browse/${uxKey}`);
  console.log(`  FE: ${feKey}  https://${domain}.atlassian.net/browse/${feKey}`);
  console.log(`  BE: ${beKey}  https://${domain}.atlassian.net/browse/${beKey}`);
}

main().catch((e) => {
  console.error(e.message || e);
  process.exit(1);
});
