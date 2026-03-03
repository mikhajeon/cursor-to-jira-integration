#!/usr/bin/env node
/**
 * Exports the entire Product Hub content (epic, user story, subtask details)
 * into one .md file for QA test planning and other use.
 * Run from project root: node scripts/export-full-content-to-md.mjs
 */

import { readFileSync, readdirSync, writeFileSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = join(__dirname, '..');
const docsRoot = join(root, 'docs', 'product-hub-jira');
const outPath = join(docsRoot, 'PRODUCT-HUB-FULL-CONTENT-FOR-QA.md');

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

const parts = [];

parts.push(`# Product Hub — Full Content for QA Test Plans

This document contains the complete content of all Product Hub epics, user stories, and subtasks as recorded in the project (synced from Jira). Use it to derive QA test plans and coverage.

**Contents:** Epic details, story details, user story text, acceptance criteria (AC), and all subtasks with their descriptions and metadata.

---

## Table of contents

`);

// Build TOC and collect story entries
const tocEntries = [];
const storySections = [];

for (const folder of EPIC_FOLDERS) {
  const dir = join(docsRoot, folder);
  let mdFiles = [];
  try {
    const entries = readdirSync(dir, { withFileTypes: true });
    mdFiles = entries
      .filter((e) => e.isFile() && e.name.endsWith('.md'))
      .map((e) => e.name)
      .sort();
  } catch (e) {
    storySections.push({ epic: folder, error: e.message, stories: [] });
    continue;
  }

  for (const name of mdFiles) {
    const filePath = join(dir, name);
    const content = readFileSync(filePath, 'utf8');
    const titleMatch = content.match(/^#\s+(.+)$/m);
    const title = titleMatch ? titleMatch[1].trim() : name.replace(/\.md$/, '');
    const anchor = title.replace(/\s+/g, '-').replace(/[^\w\-.:\[\]]/g, '').toLowerCase();
    tocEntries.push({ epic: folder, title, anchor, name });
    storySections.push({ epic: folder, title, name, content: content.trimEnd() });
  }
}

// Emit TOC by epic
let currentEpic = null;
for (const e of tocEntries) {
  if (e.epic !== currentEpic) {
    currentEpic = e.epic;
    parts.push(`\n### ${currentEpic}\n`);
  }
  parts.push(`- [${e.title}](#${e.anchor})\n`);
}

parts.push('\n---\n\n');

// Emit full content by epic then story
currentEpic = null;
for (const section of storySections) {
  if (section.error) {
    parts.push(`\n## ${section.epic}\n\n[Error: ${section.error}]\n\n`);
    continue;
  }
  if (section.epic !== currentEpic) {
    currentEpic = section.epic;
    parts.push(`\n## ${currentEpic}\n\n`);
  }
  parts.push(`\n### ${section.title}\n\n`);
  parts.push(section.content);
  parts.push('\n\n---\n\n');
}

parts.push('\n*End of document.*\n');

writeFileSync(outPath, parts.join(''), 'utf8');
console.log('Written:', outPath);
