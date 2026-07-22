#!/usr/bin/env node
/**
 * 构建单文件离线集团监管平台 Demo
 * 输出：
 *   - 集团监管平台Demo.html（本地双击）
 *   - offline-demo.html（GitHub Pages: /data/offline-demo.html）
 */
const fs = require('fs');
const path = require('path');

const ROOT = path.join(__dirname, '..');
const OUT_LOCAL = path.join(ROOT, '集团监管平台Demo.html');
const OUT_PAGES = path.join(ROOT, 'offline-demo.html');
const PAGES_URL = 'https://wang9429.github.io/data/offline-demo.html';

function read(p) {
  return fs.readFileSync(path.join(ROOT, p), 'utf8');
}

function buildHtml(options = {}) {
  const { forGitHubPages = false } = options;
  let html = read('index.html');
  const css = read('css/styles.css');
  const dataJs = read('js/data.js');
  const appJs = read('js/app.js');
  const pubJs = read('js/public-regulatory.js');

  if (!html.includes('css/styles.css') || !html.includes('js/data.js')) {
    throw new Error('index.html 结构不符合预期，请确认外链资源路径未变');
  }

  html = html.replace(
    /<link rel="stylesheet" href="css\/styles\.css">\s*/i,
    `<style id="inline-demo-styles">\n${css}\n</style>\n`
  );

  const scripts = [
    { src: 'js/data.js', code: dataJs },
    { src: 'js/app.js', code: appJs },
    { src: 'js/public-regulatory.js', code: pubJs }
  ];
  scripts.forEach(({ src, code }) => {
    const re = new RegExp(`<script src="${src.replace(/\//g, '\\/')}"><\\/script>\\s*`, 'i');
    if (!re.test(html)) throw new Error(`未找到脚本引用: ${src}`);
    html = html.replace(re, `<script data-inline-from="${src}">\n${code}\n</script>\n`);
  });

  html = html.replace(
    /<title>[^<]*<\/title>/i,
    '<title>集团穿透式监管平台</title>'
  );

  const headInject = [
    forGitHubPages
      ? `<!-- 集团穿透式监管平台 · GitHub Pages · ${PAGES_URL} -->`
      : '<!-- 集团穿透式监管平台 · 单文件离线版 -->',
    '<meta name="generator" content="regulatory-single-file-demo-build">',
    '<meta name="application-name" content="集团穿透式监管平台">',
    forGitHubPages
      ? `<link rel="canonical" href="${PAGES_URL}">`
      : '',
    `<script>window.__SINGLE_FILE_DEMO__=true;window.__OFFLINE_DEMO__=true;window.__GITHUB_PAGES_DEMO__=${forGitHubPages};</script>`
  ].filter(Boolean).join('\n  ');

  html = html.replace(/<head>/i, `<head>\n  ${headInject}\n`);
  return html;
}

function writeOutputs() {
  const localHtml = buildHtml({ forGitHubPages: false });
  const pagesHtml = buildHtml({ forGitHubPages: true });
  fs.writeFileSync(OUT_LOCAL, localHtml, 'utf8');
  fs.writeFileSync(OUT_PAGES, pagesHtml, 'utf8');
  const statLocal = fs.statSync(OUT_LOCAL);
  const statPages = fs.statSync(OUT_PAGES);
  return {
    local: { output: OUT_LOCAL, bytes: statLocal.size, mb: (statLocal.size / 1024 / 1024).toFixed(2) },
    pages: { output: OUT_PAGES, bytes: statPages.size, mb: (statPages.size / 1024 / 1024).toFixed(2), url: PAGES_URL }
  };
}

function build() {
  return writeOutputs();
}

if (require.main === module) {
  try {
    const result = build();
    console.log(JSON.stringify({
      success: true,
      files: [
        { file: path.basename(result.local.output), bytes: result.local.bytes, sizeMB: result.local.mb },
        { file: path.basename(result.pages.output), bytes: result.pages.bytes, sizeMB: result.pages.mb, url: result.pages.url }
      ]
    }, null, 2));
  } catch (err) {
    console.error(JSON.stringify({ success: false, error: err.message }, null, 2));
    process.exit(1);
  }
}

module.exports = { build, OUT: OUT_LOCAL, OUT_PAGES, PAGES_URL, buildHtml };
