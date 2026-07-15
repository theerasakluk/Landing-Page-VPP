@echo off
setlocal
cd /d "%~dp0.."
set CI=true
"C:\Users\Theerasak\.cache\codex-runtimes\codex-primary-runtime\dependencies\node\bin\node.exe" "node_modules\vinext\dist\cli.js" dev --host 127.0.0.1
