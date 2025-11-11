@echo off
title Git Repo Identity Fixer - by Anishta
echo.
echo ===============================================
echo   🔧  Cleaning Git identity in this repository
echo ===============================================
echo.

REM Step 1: Verify we are inside a git repo
git rev-parse --is-inside-work-tree >nul 2>&1
if errorlevel 1 (
    echo ❌  Not a git repository. Please run this inside your project folder.
    pause
    exit /b
)

REM Step 2: Set correct local identity
echo ✅  Setting correct username and email...
git config user.name "Anishta Fernando"
git config user.email "147255153+Anishtaa@users.noreply.github.com"

REM Step 3: Run git-filter-repo to replace old author and email
echo 🔄  Rewriting history... (this may take a moment)
git filter-repo --force ^
--name-callback "if name == b'Souvik Ruhidas': return b'Anishta Fernando'; return name" ^
--email-callback "if email == b'102573237+Souvik8426@users.noreply.github.com': return b'147255153+Anishtaa@users.noreply.github.com'; return email"

REM Step 4: Verify result
echo.
echo ✅  Authors after cleanup:
git log --format="%%an <%%ae>" | sort | uniq

REM Step 5: Push rewritten history
echo.
echo 🚀  Pushing cleaned history to GitHub...
git push --force --all origin
git push --force --tags origin

echo.
echo 🎉  Cleanup complete for: %cd%
pause
