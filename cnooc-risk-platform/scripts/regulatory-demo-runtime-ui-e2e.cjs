#!/usr/bin/env node
/**
 * 运行时 UI E2E — 验证系统品牌渲染与「战略方向匹配分析」无页面跳转
 */
const fs = require('fs');
const path = require('path');
const http = require('http');
const { build, OUT_PAGES } = require('./build-single-file-demo.cjs');

const ROOT = path.join(__dirname, '..');
const SYSTEM_NAME = '集团穿透式监管平台';
const FORBIDDEN = ['投资管理领域', '投资管理领域运行', '投资管理专题监管', '集团监管平台 Demo', '集团穿透式监管 Demo'];

function contentType(filePath) {
  const ext = path.extname(filePath).toLowerCase();
  const map = {
    '.html': 'text/html; charset=utf-8',
    '.js': 'application/javascript; charset=utf-8',
    '.css': 'text/css; charset=utf-8'
  };
  return map[ext] || 'application/octet-stream';
}

function startServer(rootDir) {
  return new Promise((resolve, reject) => {
    const server = http.createServer((req, res) => {
      const urlPath = decodeURIComponent((req.url || '/').split('?')[0]);
      const rel = urlPath === '/' ? '/offline-demo.html' : urlPath;
      const filePath = path.join(rootDir, rel.replace(/^\//, ''));
      if (!filePath.startsWith(rootDir)) {
        res.writeHead(403); res.end('Forbidden'); return;
      }
      fs.readFile(filePath, (err, data) => {
        if (err) {
          res.writeHead(404); res.end('Not Found'); return;
        }
        res.writeHead(200, { 'Content-Type': contentType(filePath) });
        res.end(data);
      });
    });
    server.listen(0, '127.0.0.1', () => {
      const { port } = server.address();
      resolve({ server, baseUrl: `http://127.0.0.1:${port}` });
    });
    server.on('error', reject);
  });
}

async function loadPlaywright() {
  try {
    return require('playwright');
  } catch {
    return null;
  }
}

async function run() {
  if (!fs.existsSync(OUT_PAGES) || process.argv.includes('--rebuild')) {
    build();
  }

  const playwright = await loadPlaywright();
  if (!playwright) {
    return {
      skipped: true,
      reason: 'playwright_not_installed',
      message: 'Run: npm install --no-save playwright && npx playwright install chromium'
    };
  }

  const { server, baseUrl } = await startServer(ROOT);
  const browser = await playwright.chromium.launch({ headless: true });
  const page = await browser.newPage();
  const result = {
    deployFile: 'cnooc-risk-platform/offline-demo.html',
    deployBranch: 'master',
    deploySource: 'GitHub Pages uploads cnooc-risk-platform/ directory on master push',
    testedUrl: `${baseUrl}/offline-demo.html`,
    actualRenderedSystemName: '',
    noDomainLabelBesideRenderedSystemName: false,
    strategicDirectionAnalysisPageBefore: '',
    strategicDirectionAnalysisPageAfter: '',
    strategicDirectionAnalysisNoNavigation: false,
    navigateCallsDuringStrategicClick: -1,
    allPass: false,
    failures: []
  };

  try {
    await page.goto(`${baseUrl}/offline-demo.html`, { waitUntil: 'domcontentloaded' });
    await page.waitForFunction(() => window.App && typeof App.syncSystemBrand === 'function');

    await page.evaluate(() => {
      const gateway = document.getElementById('domainGateway');
      if (gateway) gateway.style.display = 'none';
      App.enterDomain('investment', false);
    });

    const brand = await page.evaluate(() => App.getRenderedSystemBrandSnapshot());
    result.actualRenderedSystemName = brand.actualRenderedSystemName;
    result.pageHeaderSystemName = brand.pageHeaderSystemName;
    result.documentTitle = brand.documentTitle;
    result.noDomainLabelBesideRenderedSystemName = brand.noDomainLabelBesideRenderedSystemName
      && brand.actualRenderedSystemName === SYSTEM_NAME
      && brand.pageHeaderSystemName === SYSTEM_NAME
      && brand.documentTitle === SYSTEM_NAME;

    await page.evaluate(() => App.navigate('portfolio'));
    await page.waitForSelector('#page-portfolio.active');

    const before = await page.evaluate(() => App.currentPage);
    result.strategicDirectionAnalysisPageBefore = before;

    const clickMeta = await page.evaluate(() => {
      let navigateCalls = 0;
      const originalNavigate = App.navigate.bind(App);
      App.navigate = (...args) => {
        navigateCalls += 1;
        return originalNavigate(...args);
      };
      const card = Array.from(document.querySelectorAll('.analysis-card')).find((el) => (el.textContent || '').includes('战略方向匹配分析'));
      if (!card) return { error: 'card_not_found', navigateCalls };
      card.click();
      return {
        tagName: card.tagName,
        hasOnclick: !!card.getAttribute('onclick'),
        navigateCalls,
        pageAfter: App.currentPage
      };
    });

    result.strategicDirectionAnalysisPageAfter = clickMeta.pageAfter || before;
    result.navigateCallsDuringStrategicClick = clickMeta.navigateCalls;
    result.strategicDirectionCardTag = clickMeta.tagName;
    result.strategicDirectionCardHasOnclick = clickMeta.hasOnclick;
    result.strategicDirectionAnalysisNoNavigation = !clickMeta.error
      && clickMeta.tagName === 'DIV'
      && !clickMeta.hasOnclick
      && clickMeta.navigateCalls === 0
      && result.strategicDirectionAnalysisPageBefore === 'portfolio'
      && result.strategicDirectionAnalysisPageAfter === 'portfolio';

    const portfolioStillActive = await page.evaluate(() => document.getElementById('page-portfolio')?.classList.contains('active') === true);
    result.strategicDirectionAnalysisNoNavigation = result.strategicDirectionAnalysisNoNavigation && portfolioStillActive;

    if (result.actualRenderedSystemName !== SYSTEM_NAME) {
      result.failures.push(`actualRenderedSystemName=${result.actualRenderedSystemName}`);
    }
    if (!result.noDomainLabelBesideRenderedSystemName) {
      result.failures.push('noDomainLabelBesideRenderedSystemName=false');
    }
    FORBIDDEN.forEach((label) => {
      if ((result.actualRenderedSystemName || '').includes(label)) result.failures.push(`forbidden_in_sidebar:${label}`);
    });
    if (!result.strategicDirectionAnalysisNoNavigation) {
      result.failures.push('strategicDirectionAnalysisNoNavigation=false');
    }
    if (clickMeta.error) result.failures.push(clickMeta.error);

    result.allPass = result.failures.length === 0;
  } finally {
    await browser.close();
    await new Promise((resolve) => server.close(resolve));
  }

  return result;
}

if (require.main === module) {
  run().then((result) => {
    console.log(JSON.stringify(result, null, 2));
    process.exit(result.skipped ? 0 : (result.allPass ? 0 : 1));
  }).catch((err) => {
    console.error(err);
    process.exit(1);
  });
}

module.exports = { run };
