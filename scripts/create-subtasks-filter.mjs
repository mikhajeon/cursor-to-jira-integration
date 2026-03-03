#!/usr/bin/env node
/**
 * Creates a saved Jira filter "DPH - Subtasks only" so the board can show
 * subtask cards instead of user stories. Run from project root.
 *
 * After running: Board settings → General → Filter → choose "DPH - Subtasks only".
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

const JQL = 'project = DPH AND issuetype = Subtask';

async function main() {
  if (!email || !token) {
    console.error('Set JIRA_EMAIL and JIRA_API_TOKEN in .env');
    process.exit(1);
  }

  const res = await fetch(`${baseUrl}/rest/api/3/filter`, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      Authorization: `Basic ${auth}`,
    },
    body: JSON.stringify({
      name: 'DPH - Subtasks only',
      description: 'Board view: show subtask cards instead of parent stories. Use this filter in Board settings → General → Filter.',
      jql: JQL,
    }),
  });

  if (!res.ok) {
    const text = await res.text();
    if (res.status === 400 && /already exists|duplicate/i.test(text)) {
      console.log('A filter with this name may already exist. In Jira: Board settings → General → Filter → edit the filter and set JQL to:');
      console.log(JQL);
      return;
    }
    console.error(res.status, text);
    process.exit(1);
  }

  const filter = await res.json();
  console.log('Created filter:', filter.name, '(id:', filter.id + ')');
  console.log('View URL:', filter.viewUrl);
  console.log('\nTo use on your board: Board settings (gear) → General → Filter → choose "' + filter.name + '".');
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
