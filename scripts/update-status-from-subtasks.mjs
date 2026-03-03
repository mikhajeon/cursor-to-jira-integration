#!/usr/bin/env node
/**
 * Reads Product Hub .md files and sets User Story + Epic status from subtask statuses.
 * Only Stories are updated (Tasks are skipped). Epic status is derived from Story statuses only.
 * - If any subtask is "In Progress" → set US and its Epic to "In Progress"
 * - If all subtasks are "Done" → set US to "Done"
 * - If all User Stories in an Epic are "Done" → set Epic to "Done"
 *
 * Updates only .md files (Story details table + README Epic status). No Jira calls.
 * Run from project root: node scripts/update-status-from-subtasks.mjs
 * Dry run: node scripts/update-status-from-subtasks.mjs --dry-run
 */

import { readFileSync, writeFileSync, readdirSync, existsSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = join(__dirname, '..');
const docsRoot = join(root, 'docs', 'product-hub-jira');
const dryRun = process.argv.includes('--dry-run');

function collectMdFilesByFolder() {
  const byFolder = new Map();
  for (const entry of readdirSync(docsRoot, { withFileTypes: true })) {
    if (!entry.isDirectory()) continue;
    const folderPath = join(docsRoot, entry.name);
    const files = readdirSync(folderPath, { withFileTypes: true })
      .filter((e) => e.isFile() && e.name.endsWith('.md'))
      .map((e) => join(folderPath, e.name));
    if (files.length) byFolder.set(entry.name, files);
  }
  return byFolder;
}

/** Extract subtask statuses only from the ### Subtasks section */
function getSubtaskStatuses(content) {
  const idx = content.indexOf('### Subtasks');
  if (idx === -1) return [];
  const after = content.slice(idx);
  const end = Math.min(
    after.indexOf('\n### ') === -1 ? 1e9 : after.indexOf('\n### '),
    after.indexOf('\n---') === -1 ? 1e9 : after.indexOf('\n---')
  );
  const section = after.slice(0, end);
  const statuses = [];
  const re = /\*\*Status:\*\*\s*([^\n·]+)/g;
  let m;
  while ((m = re.exec(section)) !== null) {
    statuses.push(m[1].trim());
  }
  return statuses;
}

/** Compute desired US status from subtask statuses */
function computeUsStatus(subtaskStatuses) {
  if (subtaskStatuses.length === 0) return 'To Do';
  const lower = subtaskStatuses.map((s) => s.toLowerCase());
  if (lower.some((s) => s === 'in progress')) return 'In Progress';
  if (lower.every((s) => s === 'done')) return 'Done';
  return 'To Do';
}

/** Ensure Story details table has exactly one | **Status** | value | row; add after Sprint if missing, else replace value */
function setStoryDetailsStatus(content, newStatus) {
  const statusRow = `| **Status** | ${newStatus} |`;
  const tableStart = content.indexOf('### Story details');
  if (tableStart === -1) return content;
  const tableEnd = content.indexOf('\n---', tableStart);
  const tableSection = content.slice(tableStart, tableEnd !== -1 ? tableEnd : undefined);
  const hasStatus = /\|\s*\*\*Status\*\*\s*\|\s*[^|]+\s*\|/.test(tableSection);
  let newTable;
  if (hasStatus) {
    newTable = tableSection.replace(/\|\s*\*\*Status\*\*\s*\|\s*[^|]+\s*\|/, statusRow);
  } else {
    newTable = tableSection.replace(
      /\|\s*\*\*Sprint\*\*\s*\|\s*[^|]+\s*\|/,
      (match) => match + '\n| **Status** | ' + newStatus + ' |'
    );
  }
  return content.slice(0, tableStart) + newTable + (tableEnd !== -1 ? content.slice(tableEnd) : '');
}

function main() {
  const byFolder = collectMdFilesByFolder();
  const usStatusByFile = new Map();
  const epicStatusByFolder = new Map();

  /** Skip Task .md (only Stories contribute to status and Epic) */
  function isStoryFile(filePath) {
    const name = filePath.split(/[/\\]/).pop() || '';
    return !name.includes('[TASK-');
  }

  for (const [folderName, files] of byFolder) {
    const usStatuses = [];
    for (const filePath of files) {
      const content = readFileSync(filePath, 'utf8');
      const subtaskStatuses = getSubtaskStatuses(content);
      const usStatus = computeUsStatus(subtaskStatuses);
      usStatusByFile.set(filePath, { content, usStatus, subtaskStatuses });
      if (isStoryFile(filePath)) usStatuses.push(usStatus);
    }
    const anyInProgress = usStatuses.some((s) => s === 'In Progress');
    const allDone = usStatuses.length > 0 && usStatuses.every((s) => s === 'Done');
    epicStatusByFolder.set(folderName, anyInProgress ? 'In Progress' : allDone ? 'Done' : 'To Do');
  }

  const changes = [];
  for (const [filePath, { content, usStatus }] of usStatusByFile) {
    if (!isStoryFile(filePath)) continue;
    const currentMatch = content.match(/\|\s*\*\*Status\*\*\s*\|\s*([^|]+)\s*\|/);
    const current = currentMatch ? currentMatch[1].trim() : null;
    if (current === usStatus) continue;
    changes.push({ type: 'US', file: filePath.replace(root + '/', ''), from: current || '(none)', to: usStatus });
    if (!dryRun) {
      const newContent = setStoryDetailsStatus(content, usStatus);
      writeFileSync(filePath, newContent, 'utf8');
    }
  }

  const readmePath = join(docsRoot, 'README.md');
  let readme = readFileSync(readmePath, 'utf8');
  const epicTable = [
    '',
    '## Epic status (derived from User Story statuses)',
    '',
    '| Epic | Folder | Status |',
    '|------|--------|-------|',
    ...Array.from(epicStatusByFolder.entries()).map(([folder, status]) => {
      const n = folder.match(/\[EPIC-(\d+)\]/);
      return `| ${n ? n[1] : '—' } | ${folder} | ${status} |`;
    }),
    '',
  ].join('\n');

  if (!readme.includes('## Epic status (derived from User Story statuses)')) {
    changes.push({ type: 'README', file: 'docs/product-hub-jira/README.md', from: '(no section)', to: 'Epic status table added' });
    if (!dryRun) {
      readme = readme.replace(/(## Workflow for making changes)/, epicTable + '\n\n$1');
      writeFileSync(readmePath, readme, 'utf8');
    }
  } else {
    const newTable = epicTable.split('\n').slice(2).join('\n');
    const oldTableMatch = readme.match(/\|\s*Epic\s*\|\s*Folder\s*\|\s*Status\s*\|[\s\S]*?(?=\n\n## |$)/);
    if (oldTableMatch) {
      const oldTable = oldTableMatch[0];
      const newTableFull = '| Epic | Folder | Status |\n|------|--------|-------|\n' + Array.from(epicStatusByFolder.entries()).map(([folder, status]) => {
        const n = folder.match(/\[EPIC-(\d+)\]/);
        return `| ${n ? n[1] : '—' } | ${folder} | ${status} |`;
      }).join('\n');
      if (oldTable !== newTableFull) {
        changes.push({ type: 'README', file: 'docs/product-hub-jira/README.md', from: 'Epic table', to: 'updated' });
        if (!dryRun) readme = readme.replace(oldTable, newTableFull);
      }
    }
    if (!dryRun && changes.some((c) => c.type === 'README' && c.to === 'updated')) writeFileSync(readmePath, readme, 'utf8');
  }

  if (dryRun) {
    console.log('Dry run — would apply:\n');
  } else {
    console.log('Applied:\n');
  }
  for (const c of changes) {
    if (c.type === 'US') console.log(`  US: ${c.file}  Status: ${c.from} → ${c.to}`);
    else console.log(`  README: ${c.file}  ${c.to}`);
  }
  if (changes.length === 0) console.log('  (no changes)');
  else console.log('\nEpic statuses:', Object.fromEntries(epicStatusByFolder));
}

main();
