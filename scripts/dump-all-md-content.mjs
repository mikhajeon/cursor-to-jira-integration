#!/usr/bin/env node
/**
 * Reads every .md in docs/product-hub-jira (except README) and writes
 * one file with the entire content of each, separated by clear headers.
 * Run: node scripts/dump-all-md-content.mjs
 */

import { readFileSync, readdirSync, writeFileSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = join(__dirname, '..');
const docsRoot = join(root, 'docs', 'product-hub-jira');
const outPath = join(root, 'docs', 'product-hub-jira', 'ALL-EPICS-AND-USER-STORIES-FULL-CONTENT.txt');

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

const sep = '\n\n' + '='.repeat(80) + '\n';
const fileSep = '\n\n' + '-'.repeat(80) + '\n';

const parts = [];
parts.push('PRODUCT HUB — EPICS AND USER STORIES: FULL CONTENT OF ALL .MD FILES');
parts.push('(Each section below is the complete content of one story/task .md file.)');
parts.push('\n');

for (const folder of EPIC_FOLDERS) {
  const dir = join(docsRoot, folder);
  try {
    const entries = readdirSync(dir, { withFileTypes: true });
    const mdFiles = entries
      .filter((e) => e.isFile() && e.name.endsWith('.md'))
      .map((e) => e.name)
      .sort();
    for (const name of mdFiles) {
      const filePath = join(dir, name);
      const content = readFileSync(filePath, 'utf8');
      parts.push(sep);
      parts.push(`EPIC: ${folder}\n`);
      parts.push(`FILE: ${name}\n`);
      parts.push(fileSep);
      parts.push(content.trimEnd());
    }
  } catch (e) {
    parts.push(sep + `[Error reading ${folder}: ${e.message}]`);
  }
}

parts.push(sep);
parts.push('END OF DOCUMENT');
parts.push('');

writeFileSync(outPath, parts.join(''), 'utf8');
console.log('Written:', outPath);
