#!/usr/bin/env node
/**
 * 离线 Demo 启动包验收
 */
const fs = require('fs');
const path = require('path');
const { execSync, spawn } = require('child_process');
const http = require('http');
const vm = require('vm');

const ROOT = path.join(__dirname, '..');
const fails = [];

const check = (ok, msg) => { if (!ok) fails.push(msg); };

// 1. 启动包文件
['启动集团监管Demo.bat', '关闭集团监管Demo.bat', 'README-离线Demo.txt', 'scripts/demo-offline-server.cjs', 'scripts/demo-offline-check.cjs'].forEach(f => {
  check(fs.existsSync(path.join(ROOT, f)), `missing:${f}`);
});

// 2. 外部依赖扫描
const scanExt = (dir, acc = []) => {
  for (const name of fs.readdirSync(dir)) {
    if (name === 'node_modules' || name.startsWith('.')) continue;
    const p = path.join(dir, name);
    const st = fs.statSync(p);
    if (st.isDirectory()) scanExt(p, acc);
    else if (/\.(html|css|js|json)$/i.test(name)) acc.push(p);
  }
  return acc;
};
const patterns = [/https?:\/\//i, /cdn\./i, /googleapis/i, /unpkg\.com/i, /jsdelivr/i];
let externalHits = [];
scanExt(ROOT).forEach(file => {
  const rel = path.relative(ROOT, file);
  if (rel.startsWith('scripts' + path.sep) && /regulatory-|demo-offline|public-regulatory/.test(rel)) return;
  const text = fs.readFileSync(file, 'utf8');
  patterns.forEach(re => {
    if (re.test(text)) externalHits.push(`${rel}:${re}`);
  });
});
check(externalHits.length === 0, `external:${externalHits.slice(0, 5).join(';')}`);

// 3. 平台状态（不启动网络）
const dataCode = fs.readFileSync(path.join(ROOT, 'js/data.js'), 'utf8');
const pubCode = fs.readFileSync(path.join(ROOT, 'js/public-regulatory.js'), 'utf8');
const appCode = fs.readFileSync(path.join(ROOT, 'js/app.js'), 'utf8');
const sandbox = { console, document: { getElementById: () => null }, window: {} };
vm.runInNewContext(dataCode + '\n;this.APP_DATA = APP_DATA;', sandbox);
vm.runInNewContext('var App = {};\n' + pubCode, sandbox);
['finalizeRegulatoryPlatform', 'initializeDataAdaptation', 'initializeBatchAdaptation', 'initializeDomainClosure', 'initializeClosureVerification', 'initializeRegulatoryOperatingCycle', 'initializeRegulatoryOperatingRuntime', 'initializeRegulatoryCoordination', 'initializeRegulatoryOperationalScenarios', 'initializeRegulatoryFinalAcceptance', 'initializeRegulatoryFinalRemediation', 'initializeRegulatoryDeliveryReadiness', 'initializeRegulatoryDemoScenarios', 'finalizeRegulatoryDemoFreeze'].forEach(fn => {
  if (sandbox.App[fn]) sandbox.App[fn]();
});
const App = sandbox.App;
const D = sandbox.APP_DATA;
const pageCount = (App.publicRegulatoryPages || []).length;
const penetrate = (appCode.match(/navigate\(['"]penetration['"]/g) || []).length;
check(pageCount === 70, `publicPageCount=${pageCount}`);
check(penetrate === 3, `penetrate=${penetrate}`);

const codes = ['DEMO-01', 'DEMO-02', 'DEMO-03', 'DEMO-04', 'DEMO-05', 'DEMO-06'];
const demoResults = {};
codes.forEach(code => {
  const reach = App.validateDemoScenarioReachability(code);
  const trace = App.validateDemoScenarioTraceability(code);
  demoResults[code] = { reachable: reach.reachable, traceable: trace.hitCount > 0, status: trace.traceabilityStatus };
  check(reach.reachable, `reach:${code}`);
  check(trace.hitCount > 0, `trace:${code}`);
});
check((D.regulatoryDemoScenarioIndexes || []).find(s => s.demoCode === 'DEMO-03')?.simulationOnly === true, 'simulationOnly');
check((D.regulatoryDemoScenarioIndexes || []).find(s => s.demoCode === 'DEMO-05')?.requiresHumanDecision === true, 'humanDecision');
check((D.regulatoryDemoScenarioMetrics || {}).noFakeHistory === true, 'noFakeHistory');
check((D.regulatoryDemoScenarioMetrics || {}).noFakeClosedLoop === true, 'noFakeClosedLoop');
check((D.regulatoryDemoFinalFreezeIndex || {}).investmentFreeze === true, 'investmentFreeze');

// 4. 本地服务器离线探测
function httpGet(port) {
  return new Promise((resolve, reject) => {
    const req = http.get({ hostname: '127.0.0.1', port, path: '/index.html', timeout: 3000 }, res => {
      let body = '';
      res.on('data', c => { body += c; });
      res.on('end', () => resolve({ status: res.statusCode, body }));
    });
    req.on('error', reject);
    req.on('timeout', () => { req.destroy(); reject(new Error('timeout')); });
  });
}

async function testServer() {
  const child = spawn(process.execPath, [path.join(ROOT, 'scripts/demo-offline-server.cjs')], {
    cwd: ROOT,
    stdio: ['ignore', 'pipe', 'pipe']
  });
  let port = null;
  const timer = setTimeout(() => { child.kill(); }, 15000);
  await new Promise((resolve, reject) => {
    const onData = buf => {
      const m = buf.toString().match(/http:\/\/localhost:(\d+)/);
      if (m) port = parseInt(m[1], 10);
      if (port) resolve();
    };
    child.stdout.on('data', onData);
    child.stderr.on('data', onData);
    child.on('error', reject);
    child.on('exit', code => { if (!port) reject(new Error(`server exit ${code}`)); });
  });
  try {
    const res = await httpGet(port);
    check(res.status === 200, 'index status');
    check(res.body.includes('集团穿透式监管平台'), 'index content');
    check(res.body.includes('js/data.js'), 'local js');
    check(!/https?:\/\//.test(res.body), 'index external url');
    const css = await httpGet(port).then(() => httpGet(port)); // noop
    void css;
    const cssRes = await new Promise((resolve, reject) => {
      http.get({ hostname: '127.0.0.1', port, path: '/css/styles.css', timeout: 3000 }, r => {
        let b = ''; r.on('data', c => b += c); r.on('end', () => resolve({ status: r.statusCode, body: b }));
      }).on('error', reject);
    });
    check(cssRes.status === 200, 'css status');
    check(cssRes.body.length > 100, 'css content');
  } finally {
    clearTimeout(timer);
    child.kill('SIGTERM');
    try { fs.unlinkSync(path.join(ROOT, '.demo-server.pid')); } catch { /* */ }
    try { fs.unlinkSync(path.join(ROOT, '.demo-server.port')); } catch { /* */ }
  }
  return port;
}

(async () => {
  let serverPort = null;
  try {
    serverPort = await testServer();
  } catch (e) {
    fails.push(`server:${e.message}`);
  }

  const result = {
    phase: '离线 Demo 启动包验收',
    startupScript: '启动集团监管Demo.bat',
    stopScript: '关闭集团监管Demo.bat',
    readme: 'README-离线Demo.txt',
    defaultUrl: 'http://localhost:5173',
    testedUrl: serverPort ? `http://localhost:${serverPort}` : null,
    browser: 'Microsoft Edge',
    externalApi: externalHits.length ? '存在' : '无',
    externalCdn: externalHits.length ? '存在' : '无',
    remoteResources: externalHits.length ? '存在' : '无',
    offlineRun: fails.filter(f => f.startsWith('server:') || f.startsWith('external:')).length === 0 ? '通过' : '未通过',
    publicPageCount: pageCount,
    navigatePenetration: penetrate,
    investmentModule: '未修改（仅启动包）',
    demoPaths: demoResults,
    regressionHint: '请另行运行 regulatory-demo-final-freeze-validate.cjs',
    allPass: fails.length === 0,
    failures: fails
  };
  console.log(JSON.stringify(result, null, 2));
  process.exit(result.allPass ? 0 : 1);
})();
