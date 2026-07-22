集团监管平台 Demo — 离线运行说明
================================

【推荐】单文件版（无需 Node.js）
--------------------------------
1. 找到文件：集团监管平台Demo.html
2. 双击该文件（或双击「打开集团监管平台Demo.bat」用 Edge 打开）
3. 断开网络也可正常运行
4. 左侧菜单进入「集团监管总览」→「集团监管平台 Demo Final」面板开始演示

文件大小约 1.7 MB，可复制到 U 盘直接使用。

GitHub Pages 在线版（无需下载）
--------------------------------
浏览器直接访问：

https://wang9429.github.io/data/offline-demo.html

推送代码后 GitHub Actions 自动部署，约 1-3 分钟生效。
使用 Microsoft Edge 或 Chrome 打开即可演示。

Node.js 本地服务版（备选）
--------------------------
1. 确保电脑已安装 Node.js（建议 18 或更高版本）
   下载地址：https://nodejs.org/
2. 将整个 cnooc-risk-platform 文件夹复制到目标 Windows 电脑
3. 双击「启动集团监管Demo.bat」
4. 等待 Microsoft Edge 自动打开
5. 进入集团监管平台 Demo

二、访问地址
------------
默认地址：
http://localhost:5173

若 5173 端口被占用，系统会自动选择其他可用端口（如 5174、5175…），
请以启动窗口中显示的地址为准。

三、关闭方式
------------
方式 1：直接关闭「启动集团监管Demo.bat」黑色窗口
方式 2：双击「关闭集团监管Demo.bat」

四、演示路径（6 条）
--------------------
进入方式：左侧菜单「集团监管总览」→ 页面中「集团监管平台 Demo Final」面板

DEMO-01  集团领导发现重大风险
DEMO-02  数据质量影响监管决策
DEMO-03  监管规则变更闭环（simulationOnly）
DEMO-04  跨法人/跨领域协同监管
DEMO-05  持续改进闭环（requiresHumanDecision）
DEMO-06  集团监管运营周期（INSUFFICIENT_HISTORY）

也可从「集团监管统一工作台」进入 Demo 工作台视图。

五、离线说明
------------
本 Demo 为纯静态页面 + 本地 Node 静态服务器：
- 不依赖互联网
- 不使用外部 CDN
- 不调用外部 API
- 数据全部来自本地 js/data.js

断开互联网后，只要 Node.js 可用，即可正常演示。

六、注意事项
------------
本 Demo 为集团监管平台演示版本，不代表生产系统。

部分状态基于当前本地演示数据，数据不足时按真实状态展示：
- DATA_REQUIRED
- PARTIAL_CLOSED_LOOP
- READY_WITH_GAPS
- INSUFFICIENT_HISTORY

系统不会伪造：
- VERIFIED
- 完整历史趋势
- 完整监管闭环

七、文件夹说明
--------------
启动集团监管Demo.bat    启动本地服务并打开 Edge
关闭集团监管Demo.bat    安全关闭本地服务
index.html              Demo 主入口（建议通过 bat 启动）
js/                     业务脚本与本地演示数据
css/                    样式文件
scripts/                本地服务器与验收脚本

八、常见问题
------------
Q: 提示未检测到 Node.js？
A: 请先安装 Node.js 并重启电脑后再试。

Q: Edge 没有自动打开？
A: 请手动打开启动窗口中显示的 http://localhost:端口 地址。

Q: 页面空白？
A: 请勿直接双击 index.html，必须通过 bat 启动本地服务访问。

版本：Demo Final
更新：2026-07-22
