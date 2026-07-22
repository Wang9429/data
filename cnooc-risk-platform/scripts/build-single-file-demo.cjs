#!/usr/bin/env node
/**
 * 构建单文件离线集团监管平台 Demo
 * 输出：cnooc-risk-platform/集团监管平台Demo.html
 */
const fs = require('fs');
const path = require('path');

const ROOT = path.join(__dirname, '..');
const OUT = path.join(ROOT, '集团监管平台Demo.html');

function read(p) {
  return fs.readFileSync(path.join(ROOT, p), 'utf8');
}

function build() {
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
    '<title>集团监管平台 Demo</title>'
  );

  const headInject = [
    '<!-- 集团监管平台 Demo Final · 单文件离线版 · 无需 Node.js / 本地服务 / 互联网 -->',
    '<meta name="generator" content="regulatory-single-file-demo-build">',
    '<meta name="application-name" content="集团监管平台 Demo Final">',
    '<script>window.__SINGLE_FILE_DEMO__=true;window.__OFFLINE_DEMO__=true;</script>'
  ].join('\n  ');

  html = html.replace(/<head>/i, `<head>\n  ${headInject}\n`);

  fs.writeFileSync(OUT, html, 'utf8');
  const stat = fs.statSync(OUT);
  return {
    output: OUT,
    bytes: stat.size,
    mb: (stat.size / 1024 / 1024).toFixed(2)
  };
}

if (require.main === module) {
  try {
    const result = build();
    console.log(JSON.stringify({
      success: true,
      file: path.basename(result.output),
      path: result.output,
      bytes: result.bytes,
      sizeMB: result.mb
    }, null, 2));
  } catch (err) {
    console.error(JSON.stringify({ success: false, error: err.message }, null, 2));
    process.exit(1);
  }
}

module.exports = { build, OUT };
