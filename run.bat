@echo off
setlocal
cd /d "%~dp0"
title Viscose Design - Local Server

echo ========================================
echo        Viscose Design - Run Site
echo ========================================
echo.

where npm >nul 2>&1
if errorlevel 1 (
  echo [ERROR] Node.js / npm is not installed or not available in PATH.
  echo Install Node.js first, then run this file again.
  echo.
  pause
  exit /b 1
)

if not exist "package.json" (
  echo [ERROR] package.json was not found.
  echo Keep run.bat inside the main viscose-store project folder.
  echo.
  pause
  exit /b 1
)

if not exist "node_modules" (
  echo First run detected - installing dependencies...
  echo.
  call npm install
  if errorlevel 1 (
    echo.
    echo [ERROR] npm install failed.
    pause
    exit /b 1
  )
  echo.
)

echo Starting Viscose Design...
echo Your browser will open automatically.
echo Close this window to stop the website.
echo.

call npm run dev -- --open

echo.
echo Website server stopped.
pause
