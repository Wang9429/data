@echo off
setlocal EnableExtensions
chcp 65001 >nul
cd /d "%~dp0"

set "HTML=%~dp0集团监管平台Demo.html"
if not exist "%HTML%" (
  echo [错误] 未找到「集团监管平台Demo.html」
  echo 请先运行：node scripts\build-single-file-demo.cjs
  pause
  exit /b 1
)

set "URL=file:///%HTML:\=/%"

where msedge >nul 2>&1
if not errorlevel 1 (
  start "" msedge "%URL%"
  exit /b 0
)
if exist "C:\Program Files (x86)\Microsoft\Edge\Application\msedge.exe" (
  start "" "C:\Program Files (x86)\Microsoft\Edge\Application\msedge.exe" "%URL%"
  exit /b 0
)
if exist "C:\Program Files\Microsoft\Edge\Application\msedge.exe" (
  start "" "C:\Program Files\Microsoft\Edge\Application\msedge.exe" "%URL%"
  exit /b 0
)

echo [提示] 未找到 Edge，使用系统默认浏览器打开...
start "" "%HTML%"
exit /b 0
