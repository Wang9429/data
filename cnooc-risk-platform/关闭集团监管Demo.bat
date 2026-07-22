@echo off
setlocal EnableExtensions
chcp 65001 >nul
cd /d "%~dp0"

title 关闭集团监管平台 Demo

set "PID="
if exist ".demo-server.pid" (
  for /f "usebackq delims=" %%P in (".demo-server.pid") do set "PID=%%P"
)

if not defined PID (
  echo 未检测到运行中的 Demo 服务。
  if exist ".demo-server.port" del /f /q ".demo-server.port" 2>nul
  pause
  exit /b 0
)

echo 正在关闭 Demo 服务（PID: %PID%）...
taskkill /PID %PID% /T /F >nul 2>&1
if errorlevel 1 (
  echo 进程可能已结束，正在清理状态文件...
) else (
  echo 已关闭。
)

del /f /q ".demo-server.pid" 2>nul
del /f /q ".demo-server.port" 2>nul
del /f /q ".demo-server.log" 2>nul

echo 完成。
pause
exit /b 0
