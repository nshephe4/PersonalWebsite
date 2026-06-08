$ErrorActionPreference = "Stop"

$hostsPath = Join-Path $env:SystemRoot "System32\drivers\etc\hosts"
$entries = @(
  "127.0.0.1 nathanieljshepherd.com",
  "127.0.0.1 www.nathanieljshepherd.com"
)

$content = Get-Content -LiteralPath $hostsPath

foreach ($entry in $entries) {
  $domain = ($entry -split " ")[1]
  $domainPattern = "(^|\s)$([regex]::Escape($domain))(\s|$)"

  if (-not ($content -match $domainPattern)) {
    Add-Content -LiteralPath $hostsPath -Value $entry
  }
}

ipconfig /flushdns
Write-Host "nathanieljshepherd.com now points to 127.0.0.1 on this machine."
