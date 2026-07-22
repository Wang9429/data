#!/usr/bin/env node
const http = require('http');
const port = parseInt(process.argv[2], 10);
if (!port) process.exit(1);
const req = http.get({ hostname: '127.0.0.1', port, path: '/', timeout: 2000 }, res => {
  res.resume();
  process.exit(res.statusCode >= 200 && res.statusCode < 500 ? 0 : 1);
});
req.on('error', () => process.exit(1));
req.on('timeout', () => { req.destroy(); process.exit(1); });
