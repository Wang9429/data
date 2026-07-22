#!/usr/bin/env node
/**
 * 集团监管平台 Demo — 离线本地静态服务器
 * 无外部依赖，仅使用 Node.js 内置模块。
 */
const http = require('http');
const fs = require('fs');
const path = require('path');
const net = require('net');

const ROOT = path.join(__dirname, '..');
const PID_FILE = path.join(ROOT, '.demo-server.pid');
const PORT_FILE = path.join(ROOT, '.demo-server.port');
const PREFERRED_PORT = 5173;
const MAX_PORT = 5199;

const MIME = {
  '.html': 'text/html; charset=utf-8',
  '.js': 'application/javascript; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.gif': 'image/gif',
  '.svg': 'image/svg+xml',
  '.ico': 'image/x-icon',
  '.txt': 'text/plain; charset=utf-8',
  '.woff': 'font/woff',
  '.woff2': 'font/woff2'
};

function readPortFile() {
  try {
    const p = parseInt(fs.readFileSync(PORT_FILE, 'utf8').trim(), 10);
    return Number.isFinite(p) ? p : null;
  } catch {
    return null;
  }
}

function readPidFile() {
  try {
    const p = parseInt(fs.readFileSync(PID_FILE, 'utf8').trim(), 10);
    return Number.isFinite(p) ? p : null;
  } catch {
    return null;
  }
}

function isPidAlive(pid) {
  if (!pid || pid <= 0) return false;
  try {
    process.kill(pid, 0);
    return true;
  } catch {
    return false;
  }
}

function probePort(port) {
  return new Promise(resolve => {
    const req = http.get({ hostname: '127.0.0.1', port, path: '/', timeout: 1500 }, res => {
      res.resume();
      resolve(res.statusCode >= 200 && res.statusCode < 500);
    });
    req.on('error', () => resolve(false));
    req.on('timeout', () => { req.destroy(); resolve(false); });
  });
}

function portFree(port) {
  return new Promise(resolve => {
    const srv = net.createServer();
    srv.once('error', () => resolve(false));
    srv.once('listening', () => srv.close(() => resolve(true)));
    srv.listen(port, '127.0.0.1');
  });
}

async function findAvailablePort(start) {
  for (let p = start; p <= MAX_PORT; p++) {
    if (await portFree(p)) return p;
  }
  throw new Error(`无可用端口（${start}-${MAX_PORT}）`);
}

function safePath(urlPath) {
  const decoded = decodeURIComponent((urlPath || '/').split('?')[0]);
  const rel = decoded === '/' ? '/index.html' : decoded;
  const file = path.normalize(path.join(ROOT, rel));
  if (!file.startsWith(ROOT)) return null;
  return file;
}

function serveFile(filePath, res) {
  fs.readFile(filePath, (err, data) => {
    if (err) {
      res.writeHead(err.code === 'ENOENT' ? 404 : 500, { 'Content-Type': 'text/plain; charset=utf-8' });
      res.end(err.code === 'ENOENT' ? 'Not Found' : 'Server Error');
      return;
    }
    const ext = path.extname(filePath).toLowerCase();
    res.writeHead(200, {
      'Content-Type': MIME[ext] || 'application/octet-stream',
      'Cache-Control': 'no-cache'
    });
    res.end(data);
  });
}

function writeState(port) {
  fs.writeFileSync(PID_FILE, String(process.pid), 'utf8');
  fs.writeFileSync(PORT_FILE, String(port), 'utf8');
}

function clearState() {
  try { fs.unlinkSync(PID_FILE); } catch { /* ignore */ }
  try { fs.unlinkSync(PORT_FILE); } catch { /* ignore */ }
}

function printBanner(port) {
  const url = `http://localhost:${port}`;
  console.log('========================================');
  console.log(' 集团监管平台 Demo');
  console.log('========================================');
  console.log('');
  console.log('运行地址：');
  console.log(url);
  console.log('');
  console.log('浏览器：');
  console.log('Microsoft Edge');
  console.log('');
  console.log('离线模式：');
  console.log('Enabled');
  console.log('');
  console.log('请保持此窗口运行。');
  console.log('关闭此窗口将停止 Demo 服务。');
  console.log('========================================');
}

async function checkAlreadyRunning() {
  const savedPort = readPortFile();
  const savedPid = readPidFile();
  if (savedPort && (await probePort(savedPort))) {
    return { running: true, port: savedPort, pid: savedPid };
  }
  if (savedPid && isPidAlive(savedPid)) {
    if (savedPort && (await probePort(savedPort))) {
      return { running: true, port: savedPort, pid: savedPid };
    }
  }
  if (savedPort || savedPid) clearState();
  return { running: false };
}

async function startServer() {
  const openEdge = process.argv.includes('--open-edge');
  const existing = await checkAlreadyRunning();
  if (existing.running) {
    const url = `http://localhost:${existing.port}`;
    console.log('========================================');
    console.log(' 集团监管平台 Demo');
    console.log('========================================');
    console.log('');
    console.log('运行地址：');
    console.log(url);
    console.log('');
    console.log('浏览器：');
    console.log('Microsoft Edge');
    console.log('');
    console.log('离线模式：');
    console.log('Enabled');
    console.log('');
    console.log('[提示] 服务已在运行，未重复启动。');
    console.log('如需停止，请双击「关闭集团监管Demo.bat」');
    console.log('========================================');
    if (openEdge) openMicrosoftEdge(url);
    process.exit(0);
  }

  const port = await findAvailablePort(PREFERRED_PORT);
  const server = http.createServer((req, res) => {
    const file = safePath(req.url);
    if (!file) {
      res.writeHead(403, { 'Content-Type': 'text/plain; charset=utf-8' });
      res.end('Forbidden');
      return;
    }
    fs.stat(file, (err, stat) => {
      if (err || !stat.isFile()) {
        const index = path.join(ROOT, 'index.html');
        return serveFile(index, res);
      }
      serveFile(file, res);
    });
  });

  server.listen(port, '127.0.0.1', () => {
    writeState(port);
    printBanner(port);
    if (openEdge) openMicrosoftEdge(`http://localhost:${port}`);
  });

  const shutdown = () => {
    clearState();
    server.close(() => process.exit(0));
    setTimeout(() => process.exit(0), 500);
  };
  process.on('SIGINT', shutdown);
  process.on('SIGTERM', shutdown);
  process.on('exit', clearState);
}

if (require.main === module) {
  startServer().catch(err => {
    console.error('启动失败:', err.message);
    process.exit(1);
  });
}

module.exports = { checkAlreadyRunning, readPortFile, PID_FILE, PORT_FILE, ROOT };

function openMicrosoftEdge(url) {
  const { execFile } = require('child_process');
  const candidates = [
    'msedge',
    'C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe',
    'C:\\Program Files\\Microsoft\\Edge\\Application\\msedge.exe'
  ];
  const tryOpen = (idx) => {
    if (idx >= candidates.length) {
      console.log(`[提示] 未找到 Microsoft Edge，请手动打开：${url}`);
      return;
    }
    const bin = candidates[idx];
    execFile(bin, [url], err => {
      if (err) tryOpen(idx + 1);
    });
  };
  tryOpen(0);
}
