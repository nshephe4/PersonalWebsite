$ErrorActionPreference = "Stop"

$repoRoot = Resolve-Path (Join-Path $PSScriptRoot "..\..")
$nodePath = "C:\Program Files\nodejs"
$backendPython = Join-Path $repoRoot "backend\.venv\Scripts\python.exe"
$npm = Join-Path $nodePath "npm.cmd"

if (-not (Test-Path -LiteralPath $backendPython)) {
  throw "Backend virtual environment not found at $backendPython"
}

if (-not (Test-Path -LiteralPath $npm)) {
  throw "npm not found at $npm"
}

& (Join-Path $PSScriptRoot "local-domain.ps1")

$env:PATH = "$nodePath;$env:PATH"

Start-Process `
  -FilePath $backendPython `
  -ArgumentList @("-m", "uvicorn", "app.main:app", "--host", "127.0.0.1", "--port", "8000") `
  -WorkingDirectory (Join-Path $repoRoot "backend") `
  -WindowStyle Hidden `
  -RedirectStandardOutput (Join-Path $repoRoot "backend-dev.out.log") `
  -RedirectStandardError (Join-Path $repoRoot "backend-dev.err.log")

Start-Process `
  -FilePath $npm `
  -ArgumentList @("run", "dev", "--", "--host", "127.0.0.1", "--port", "80") `
  -WorkingDirectory (Join-Path $repoRoot "frontend") `
  -WindowStyle Hidden `
  -RedirectStandardOutput (Join-Path $repoRoot "frontend-domain.out.log") `
  -RedirectStandardError (Join-Path $repoRoot "frontend-domain.err.log")

Write-Host "Local domain dev server starting at http://nathanieljshepherd.com/"
