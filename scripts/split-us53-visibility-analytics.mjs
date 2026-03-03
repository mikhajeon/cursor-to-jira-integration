#!/usr/bin/env node
/**
 * Split US-5.3 into two stories in Jira:
 * - DPH-253: Admin Manages Product Visibility (AC 1-7, 10)
 * - New story: Admin Monitors Hub Analytics (AC 8, 9)
 * Run: node scripts/split-us53-visibility-analytics.mjs
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
const baseUrl = `https://${domain}.atlassian.net`;
const auth = Buffer.from(`${process.env.JIRA_EMAIL}:${process.env.JIRA_API_TOKEN}`).toString('base64');

function p(text) {
  return { type: 'paragraph', content: [{ type: 'text', text }] };
}
function li(text) {
  return { type: 'listItem', content: [{ type: 'paragraph', content: [{ type: 'text', text }] }] };
}
function heading(level, text) {
  return { type: 'heading', attrs: { level }, content: [{ type: 'text', text }] };
}

const visibilityDescription = {
  version: 1,
  type: 'doc',
  content: [
    p('As an admin,'),
    p('I want to manage product visibility and featured status,'),
    p('So that I can control what\'s live on the Hub and how it is promoted.'),
    heading(3, 'Acceptance Criteria'),
    {
      type: 'orderedList',
      content: [
        li('Each approved product in the dashboard has a status toggle: Active or Inactive'),
        li('When I set a product to Active, it becomes visible and accessible on the Hub (catalogue, detail page, live demo)'),
        li('When I set a product to Inactive, it is hidden from the catalogue and demo — content remains viewable on the detail page only'),
        li('Each approved product has a Featured checkbox — checking it marks the product as featured and surfaces it in the Featured section on the Hub homepage'),
        li('Only Active products can be marked as Featured — the checkbox is disabled for Inactive products'),
        li('Status and featured changes are logged in an audit trail with my name and a timestamp'),
        li('App-creators are not notified when their product is activated, deactivated, or featured'),
        li('The admin can set an approved product\'s visibility scope to Public from the dashboard — this is the only way a product can be made publicly accessible. Once set to Public, the app-creator cannot change the scope — the scope selector on My Apps is disabled with a note: \'Contact admin to change visibility.\''),
      ],
    },
  ],
};

const analyticsDescription = {
  version: 1,
  type: 'doc',
  content: [
    p('As an admin,'),
    p('I want to view hub analytics,'),
    p('So that I can track overall usage and submission outcomes.'),
    heading(3, 'Acceptance Criteria'),
    {
      type: 'orderedList',
      content: [
        li('The dashboard displays analytics widgets: total submitted, total approved, total rejected, approval rate %, active count, inactive count — updated in real-time'),
        li('Clicking an analytics widget filters the dashboard to show the corresponding products'),
      ],
    },
  ],
};

async function main() {
  const request = (path, options = {}) =>
    fetch(path.startsWith('http') ? path : `${baseUrl}${path}`, {
      ...options,
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        Authorization: `Basic ${auth}`,
        ...options.headers,
      },
    });

  // 1. Update DPH-253 to visibility-only
  const updateRes = await request(`/rest/api/3/issue/DPH-253`, {
    method: 'PUT',
    body: JSON.stringify({
      fields: {
        summary: '[US-5.3]: Admin Manages Product Visibility',
        description: visibilityDescription,
      },
    }),
  });
  if (!updateRes.ok) throw new Error(`DPH-253 update: ${updateRes.status} ${await updateRes.text()}`);
  console.log('Updated DPH-253: [US-5.3]: Admin Manages Product Visibility');

  // 2. Create new story under Epic 5 (DPH-245)
  const createRes = await request('/rest/api/3/issue', {
    method: 'POST',
    body: JSON.stringify({
      fields: {
        project: { key: 'DPH' },
        parent: { key: 'DPH-245' },
        summary: '[US-5.4]: Admin Monitors Hub Analytics',
        issuetype: { name: 'Story' },
        description: analyticsDescription,
      },
    }),
  });
  if (!createRes.ok) throw new Error(`Create: ${createRes.status} ${await createRes.text()}`);
  const created = await createRes.json();
  console.log('Created:', created.key, '[US-5.4]: Admin Monitors Hub Analytics');
  return created.key;
}

main()
  .then((key) => {
    if (key) console.log('\nAdd', key, 'to Epic 5 keys in sync-product-hub-stories.mjs and run sync.');
  })
  .catch((e) => {
    console.error(e.message || e);
    process.exit(1);
  });
