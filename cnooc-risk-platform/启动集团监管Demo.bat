@echo off
setlocal EnableExtensions EnableDelayedExpansion
chcp 65001 >nul
cd /d "%~dp0"

title 集团监管平台 Demo

where node >nul 2>&1
if errorlevel 1 (
  echo.
  echo [错误] 未检测到 Node.js。
  echo 请先安装 Node.js：https://nodejs.org/
  echo 安装完成后重新双击本脚本。
  echo.
  pause
  exit /b 1
)

node scripts\demo-offline-server.cjs --open-edge
if errorlevel 1 (
  echo.
  echo [错误] Demo 服务启动失败。
  pause
  exit /b 1
)

echo.
pause
exit /b 0
