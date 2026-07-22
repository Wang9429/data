#!/usr/bin/env node
/**
 * 运行时 UI E2E — 对最终生成的 offline-demo.html 验收
 */
const fs = require('fs');
const path = require('path');
const http = require('http');
const crypto = require('crypto');
const { build, OUT_PAGES } = require('./build-single-file-demo.cjs');

const ROOT = path.join(__dirname, '..');
const SYSTEM_NAME = '集团穿透式监管平台';
const BUSINESS_DASHBOARD_TITLE = '投资管理驾驶舱';
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

function normalizeInlineSource(code) {
  return code.replace(/\r\n/g, '\n').trim();
}

function extractInlineScript(html, from) {
  const re = new RegExp(`<script[^>]*data-inline-from="${from.replace(/\//g, '\\/')}"[^>]*>([\\s\\S]*?)<\\/script>`, 'i');
  const m = html.match(re);
  return m ? m[1] : '';
}

function verifyOfflineDemoBuild() {
  const offlineHtml = fs.readFileSync(OUT_PAGES, 'utf8');
  const appSource = fs.readFileSync(path.join(ROOT, 'js/app.js'), 'utf8');
  const pubSource = fs.readFileSync(path.join(ROOT, 'js/public-regulatory.js'), 'utf8');
  const indexHtml = fs.readFileSync(path.join(ROOT, 'index.html'), 'utf8');
  const inlineApp = extractInlineScript(offlineHtml, 'js/app.js');
  const inlinePub = extractInlineScript(offlineHtml, 'js/public-regulatory.js');
  const normAppSource = normalizeInlineSource(appSource);
  const normPubSource = normalizeInlineSource(pubSource);
  const normInlineApp = normalizeInlineSource(inlineApp);
  const normInlinePub = normalizeInlineSource(inlinePub);

  const appHash = crypto.createHash('sha256').update(normAppSource).digest('hex');
  const pubHash = crypto.createHash('sha256').update(normPubSource).digest('hex');
  const inlineAppHash = crypto.createHash('sha256').update(normInlineApp).digest('hex');
  const inlinePubHash = crypto.createHash('sha256').update(normInlinePub).digest('hex');

  const strategicBlock = pubSource.match(/\{ title: '战略方向匹配分析'[\s\S]*?\}/);
  const inlineStrategicBlock = inlinePub.match(/\{ title: '战略方向匹配分析'[\s\S]*?\}/);

  return {
    offlineDemoPath: OUT_PAGES,
    offlineDemoSizeBytes: fs.statSync(OUT_PAGES).size,
    appSourceHash: appHash,
    inlineAppHash,
    pubSourceHash: pubHash,
    inlinePubHash,
    sourceMatchesInlineApp: normAppSource === normInlineApp,
    sourceMatchesInlinePub: normPubSource === normInlinePub,
    offlineDemoContainsSyncSystemBrand: inlineApp.includes('syncSystemBrand()') && inlineApp.includes('syncPageTitle('),
    offlineDemoSeparatesBrandFromPageTitle: inlineApp.includes('syncPageTitle(pageId)')
      && !/syncSystemBrand\(\)[\s\S]{0,500}pageTitle\.textContent = systemName/.test(inlineApp),
    offlineDemoContainsStaticStrategicCard: !!(strategicBlock && strategicBlock[0].includes('staticOnly: true')
      && inlineStrategicBlock && inlineStrategicBlock[0].includes('staticOnly: true')),
    indexUsesBusinessPageTitle: indexHtml.includes('id="pageTitle">投资管理驾驶舱</div>'),
    offlineDemoContainsLatestRuntimeFix: normAppSource === normInlineApp
      && normPubSource === normInlinePub
      && normInlineApp.includes('syncPageTitle(')
      && normInlineApp.includes('actualBusinessPageTitle')
      && !!(strategicBlock && strategicBlock[0].includes('staticOnly: true'))
  };
}

async function loadPlaywright() {
  try {
    return require('playwright');
  } catch {
    return null;
  }
}

async function run() {
  build();

  const buildCheck = verifyOfflineDemoBuild();
  const playwright = await loadPlaywright();
  if (!playwright) {
    return {
      skipped: true,
      reason: 'playwright_not_installed',
      message: 'Run: npm install --no-save playwright && npx playwright install chromium',
      ...buildCheck
    };
  }

  const { server, baseUrl } = await startServer(ROOT);
  const browser = await playwright.chromium.launch({ headless: true });
  const page = await browser.newPage();
  const result = {
    deployFile: 'cnooc-risk-platform/offline-demo.html',
    deployBranch: 'master',
    deploySource: 'index.html + js/app.js + js/public-regulatory.js -> build-single-file-demo.cjs -> offline-demo.html -> GitHub Pages',
    testedUrl: `${baseUrl}/offline-demo.html`,
    ...buildCheck,
    actualRenderedSystemBrand: '',
    actualBusinessPageTitle: '',
    noDomainLabelBesideSystemBrand: false,
    strategicDirectionAnalysisPageBefore: '',
    strategicDirectionAnalysisPageAfter: '',
    strategicDirectionAnalysisNoNavigation: false,
    navigateCallsDuringStrategicClick: -1,
    allPass: false,
    failures: []
  };

  try {
    await page.goto(`${baseUrl}/offline-demo.html`, { waitUntil: 'domcontentloaded' });
    await page.waitForFunction(() => window.App && typeof App.syncSystemBrand === 'function' && typeof App.syncPageTitle === 'function');

    await page.evaluate(() => {
      const gateway = document.getElementById('domainGateway');
      if (gateway) gateway.style.display = 'none';
      App.enterDomain('investment', false);
    });

    const brand = await page.evaluate(() => App.getRenderedSystemBrandSnapshot());
    result.actualRenderedSystemBrand = brand.actualRenderedSystemBrand;
    result.actualBusinessPageTitle = brand.actualBusinessPageTitle;
    result.documentTitle = brand.documentTitle;
    result.noDomainLabelBesideSystemBrand = brand.noDomainLabelBesideSystemBrand === true
      && brand.actualRenderedSystemBrand === SYSTEM_NAME
      && brand.documentTitle === SYSTEM_NAME
      && brand.actualBusinessPageTitle === BUSINESS_DASHBOARD_TITLE
      && brand.actualBusinessPageTitle !== SYSTEM_NAME;

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

    if (!result.offlineDemoContainsLatestRuntimeFix) result.failures.push('offlineDemoContainsLatestRuntimeFix=false');
    if (!result.sourceMatchesInlineApp) result.failures.push('sourceMatchesInlineApp=false');
    if (!result.sourceMatchesInlinePub) result.failures.push('sourceMatchesInlinePub=false');
    if (result.actualRenderedSystemBrand !== SYSTEM_NAME) {
      result.failures.push(`actualRenderedSystemBrand=${result.actualRenderedSystemBrand}`);
    }
    if (result.actualBusinessPageTitle !== BUSINESS_DASHBOARD_TITLE) {
      result.failures.push(`actualBusinessPageTitle=${result.actualBusinessPageTitle}`);
    }
    if (!result.noDomainLabelBesideSystemBrand) {
      result.failures.push('noDomainLabelBesideSystemBrand=false');
    }
    FORBIDDEN.forEach((label) => {
      if ((result.actualRenderedSystemBrand || '').includes(label)) result.failures.push(`forbidden_in_sidebar:${label}`);
    });
    if (!result.strategicDirectionAnalysisNoNavigation) {
      result.failures.push('strategicDirectionAnalysisNoNavigation=false');
    }
    if (result.navigateCallsDuringStrategicClick !== 0) {
      result.failures.push(`navigateCallsDuringStrategicClick=${result.navigateCallsDuringStrategicClick}`);
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

module.exports = { run, verifyOfflineDemoBuild };
