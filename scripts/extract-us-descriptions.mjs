#!/usr/bin/env node
/**
 * Extracts the full description section (from --- after Story details until ### Subtasks)
 * from each [US-*].md file and writes one combined copy-able text file.
 * Run: node scripts/extract-us-descriptions.mjs
 */

import { readFileSync, readdirSync, writeFileSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = join(__dirname, '..');
const docsRoot = join(root, 'docs', 'product-hub-jira');
const outPath = join(root, 'docs', 'product-hub-jira', 'ALL-USER-STORIES-DESCRIPTIONS.txt');
const statusOutPath = join(root, 'docs', 'product-hub-jira', 'ALL-USER-STORIES-STATUS-AND-DESCRIPTIONS.txt');

const EPIC_FOLDERS = [
  '[EPIC-0]: App Foundations',
  '[EPIC-1]: Web app core layout',
  '[EPIC-2]: User Authentication & Role Management',
  '[EPIC-3]: Product Upload & Assisted Development',
  '[EPIC-4]: AI Content Generator',
  '[EPIC-5]: Product Approval & Admin Dashboard',
  '[EPIC-6]: Assisted Security Testing & Deployment',
  '[EPIC-7]: User Reviews, Ratings, Sharing & Other',
];

function extractJiraKey(content) {
  const m = content.match(/\*\*Jira:\*\*\s*\[(DPH-\d+)\]\(/);
  return m ? m[1] : null;
}

function extractStoryDetails(content) {
  const start = content.indexOf('### Story details');
  if (start === -1) return '';
  const end = content.indexOf('\n---\n', start);
  const end2 = content.indexOf('\n### ', start + 5);
  const last = end !== -1 ? end : (end2 !== -1 ? end2 : content.length);
  return content.slice(start, last).trim();
}

function extractDescription(content) {
  const storyDetailsIdx = content.indexOf('### Story details');
  const searchStart = storyDetailsIdx === -1 ? 0 : storyDetailsIdx;
  const from = content.indexOf('\n---\n', searchStart);
  if (from === -1) return content.includes('---') ? '' : content;
  const start = from + 5;
  const subtasks = content.indexOf('\n### Subtasks\n', start);
  const end = subtasks === -1 ? content.length : subtasks;
  return content.slice(start, end).trimEnd();
}

const lines = [];
const statusLines = [];

lines.push('================================================================================');
lines.push('PRODUCT HUB — EPICS & USER STORIES: FULL DESCRIPTION SECTIONS');
lines.push('(Everything from User Story / AC through to Acceptance Criteria; copy-friendly.)');
lines.push('================================================================================\n');

statusLines.push('================================================================================');
statusLines.push('PRODUCT HUB — USER STORIES: CURRENT STATUS + FULL DESCRIPTIONS');
statusLines.push('(For sharing with Claude / stakeholders: Jira key, status, assignee, priority,');
statusLines.push(' story points, sprint, then full user story + acceptance criteria.)');
statusLines.push('================================================================================\n');

for (const folder of EPIC_FOLDERS) {
  const dir = join(docsRoot, folder);
  try {
    const entries = readdirSync(dir, { withFileTypes: true });
    const mdFiles = entries
      .filter((e) => e.isFile() && e.name.startsWith('[US-') && e.name.endsWith('.md'))
      .map((e) => e.name)
      .sort();
    for (const name of mdFiles) {
      const path = join(dir, name);
      const raw = readFileSync(path, 'utf8');
      const title = name.replace(/\.md$/, '');
      const desc = extractDescription(raw);
      const jiraKey = extractJiraKey(raw);
      const storyDetails = extractStoryDetails(raw);

      lines.push('');
      lines.push('--------------------------------------------------------------------------------');
      lines.push(`EPIC: ${folder}`);
      lines.push(`USER STORY: ${title}`);
      lines.push('--------------------------------------------------------------------------------');
      lines.push(desc || '(No description section.)');
      lines.push('');

      statusLines.push('');
      statusLines.push('--------------------------------------------------------------------------------');
      statusLines.push(`EPIC: ${folder}`);
      statusLines.push(`USER STORY: ${title}`);
      statusLines.push(`JIRA: ${jiraKey || '—'}`);
      statusLines.push('--------------------------------------------------------------------------------');
      statusLines.push(storyDetails || '(No story details.)');
      statusLines.push('');
      statusLines.push('--- Description ---');
      statusLines.push('');
      statusLines.push(desc || '(No description section.)');
      statusLines.push('');
    }
  } catch (e) {
    lines.push(`[Error reading ${folder}: ${e.message}]`);
    statusLines.push(`[Error reading ${folder}: ${e.message}]`);
  }
}

lines.push('');
lines.push('================================================================================');
lines.push('END');
lines.push('================================================================================');

statusLines.push('');
statusLines.push('================================================================================');
statusLines.push('END');
statusLines.push('================================================================================');

writeFileSync(outPath, lines.join('\n'), 'utf8');
writeFileSync(statusOutPath, statusLines.join('\n'), 'utf8');
console.log('Written:', outPath);
console.log('Written:', statusOutPath);
