#!/usr/bin/env node
/**
 * Local web app to view PM/BA workspace markdown in a browser.
 * Run from project root: node scripts/serve-workspace.mjs
 * Open http://localhost:3847
 */

import { createServer } from 'http';
import { readFileSync, readdirSync, existsSync } from 'fs';
import { join, dirname, resolve } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = resolve(__dirname, '..');
const port = Number(process.env.PORT) || 3847;

const VIEWER_HTML_PATH = join(__dirname, 'workspace-viewer.html');

function isAllowedPath(normalized) {
  if (normalized === 'my-tasks.md' || normalized === 'workload.md') return true;
  if (/^workspace\/\d{2}-[a-z0-9-]+\.md$/.test(normalized)) return true;
  return false;
}

function getWorkspaceFiles() {
  const out = [];
  const workspaceDir = join(root, 'workspace');
  if (existsSync(workspaceDir)) {
    const files = readdirSync(workspaceDir).filter((f) => f.endsWith('.md') && /^\d{2}-/.test(f));
    files.sort();
    for (const f of files) {
      const label = f.replace(/^\d{2}-/, '').replace(/\.md$/, '').replace(/-/g, ' ');
      out.push({ path: `workspace/${f}`, label });
    }
  }
  if (existsSync(join(root, 'my-tasks.md'))) out.push({ path: 'my-tasks.md', label: 'My tasks' });
  if (existsSync(join(root, 'workload.md'))) out.push({ path: 'workload.md', label: 'Workload' });
  return out;
}

const server = createServer((req, res) => {
  const url = new URL(req.url || '/', `http://localhost:${port}`);
  const pathname = url.pathname;

  if (pathname === '/' || pathname === '/index.html') {
    try {
      const html = readFileSync(VIEWER_HTML_PATH, 'utf8');
      res.writeHead(200, { 'Content-Type': 'text/html' });
      res.end(html);
    } catch (e) {
      res.writeHead(500, { 'Content-Type': 'text/plain' });
      res.end('Viewer not found: ' + e.message);
    }
    return;
  }

  if (pathname === '/api/files') {
    const files = getWorkspaceFiles();
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({ files }));
    return;
  }

    if (pathname === '/api/doc') {
      const pathParam = url.searchParams.get('path') || '';
      const normalized = pathParam.replace(/^\/+/, '').replace(/\.\./g, '');
      if (!isAllowedPath(normalized)) {
      res.writeHead(400, { 'Content-Type': 'text/plain' });
      res.end('Invalid path');
      return;
    }
    const fullPath = join(root, normalized);
    if (!existsSync(fullPath)) {
      res.writeHead(404, { 'Content-Type': 'text/plain' });
      res.end('Not found');
      return;
    }
    try {
      const content = readFileSync(fullPath, 'utf8');
      res.writeHead(200, { 'Content-Type': 'text/markdown; charset=utf-8' });
      res.end(content);
    } catch (e) {
      res.writeHead(500, { 'Content-Type': 'text/plain' });
      res.end(e.message);
    }
    return;
  }

  res.writeHead(404, { 'Content-Type': 'text/plain' });
  res.end('Not found');
});

server.listen(port, () => {
  console.log(`Workspace viewer: http://localhost:${port}`);
});
