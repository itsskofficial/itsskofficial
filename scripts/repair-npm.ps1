# Repairs corrupted global npm (missing nopt/package.json).
# Must be run as Administrator.

$ErrorActionPreference = "Stop"

if (-not ([Security.Principal.WindowsPrincipal][Security.Principal.WindowsIdentity]::GetCurrent()).IsInRole([Security.Principal.WindowsBuiltInRole]::Administrator)) {
    Write-Error "Run this script as Administrator."
    exit 1
}

$noptDest = "C:\Program Files\nodejs\node_modules\npm\node_modules\nopt"
$tmpdir = "$env:TEMP\nopt-repair"

Write-Host "Downloading nopt@8.1.0..."
New-Item -ItemType Directory -Force -Path $tmpdir | Out-Null
Invoke-WebRequest -Uri "https://registry.npmjs.org/nopt/-/nopt-8.1.0.tgz" -OutFile "$tmpdir\nopt.tgz"
tar -xzf "$tmpdir\nopt.tgz" -C $tmpdir

Write-Host "Restoring nopt to $noptDest..."
if (-not (Test-Path $noptDest)) {
    New-Item -ItemType Directory -Force -Path $noptDest | Out-Null
}

Copy-Item -Path "$tmpdir\package\*" -Destination $noptDest -Recurse -Force

Write-Host "Verifying npm..."
& "C:\Program Files\nodejs\npm.cmd" -v
if ($LASTEXITCODE -ne 0) {
    Write-Error "npm still broken after repair."
    exit 1
}

Write-Host ""
Write-Host "npm repaired successfully. You can now run: npm install"
Remove-Item -Recurse -Force $tmpdir -ErrorAction SilentlyContinue
