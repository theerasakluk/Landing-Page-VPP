param(
  [string]$HostName = "187.127.99.54",
  [string]$RemoteUser = "VPowerPlusTH@gmail.com"
)

$ErrorActionPreference = "Stop"
$ProjectRoot = Split-Path -Parent $PSScriptRoot
$Archive = Join-Path $env:TEMP "vpp-catalog-deploy.tar.gz"

Push-Location $ProjectRoot
try {
  if (Test-Path $Archive) {
    Remove-Item -LiteralPath $Archive -Force
  }

  tar `
    --exclude=.git `
    --exclude=node_modules `
    --exclude=dist `
    --exclude=.next `
    --exclude=.vinext `
    --exclude=.wrangler `
    --exclude=.env `
    --exclude=*.log `
    -czf $Archive .

  scp -o "User=$RemoteUser" $Archive "${HostName}:/tmp/vpp-catalog-deploy.tar.gz"
  scp -o "User=$RemoteUser" "scripts/remote-deploy-vps.sh" "${HostName}:/tmp/vpp-catalog-remote-deploy.sh"
  ssh -t -l $RemoteUser $HostName "chmod +x /tmp/vpp-catalog-remote-deploy.sh && /tmp/vpp-catalog-remote-deploy.sh"
}
finally {
  Pop-Location
  if (Test-Path $Archive) {
    Remove-Item -LiteralPath $Archive -Force
  }
}
