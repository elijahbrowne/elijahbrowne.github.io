# ------------------------------------------------------------------
# Builds privacy-rounds-scorm.zip: the package you upload to the LMS.
#
# The three files must sit at the ROOT of the archive, not inside a
# folder. An LMS looks for imsmanifest.xml at the top level and will
# reject the package if it is one folder down. Compress-Archive with a
# list of files (rather than a folder) gives us exactly that.
#
# config.local.js is deliberately left out: it is the rehearsal address,
# and the real package must read config.js.
#
# Run it from anywhere:
#     powershell -ExecutionPolicy Bypass -File .\zip.ps1
# ------------------------------------------------------------------

$ErrorActionPreference = 'Stop'

$here = Split-Path -Parent $MyInvocation.MyCommand.Path
$zip  = Join-Path $here 'privacy-rounds-scorm.zip'

$files = @(
  (Join-Path $here 'imsmanifest.xml'),
  (Join-Path $here 'index.html'),
  (Join-Path $here 'config.js')
)

# Fail loudly if something is missing, rather than shipping a broken package.
foreach ($f in $files) {
  if (-not (Test-Path $f)) { throw "Missing required file: $f" }
}

# Say so before the upload, not after the LMS shows an empty frame.
$configText = Get-Content (Join-Path $here 'config.js') -Raw
if ($configText -match 'REPLACE_WITH') {
  Write-Output ""
  Write-Output "WARNING: config.js still has the REPLACE_WITH placeholder."
  Write-Output "Put the address of your hosted activity in it first, or the LMS will open an empty frame."
  Write-Output ""
}

if (Test-Path $zip) { Remove-Item $zip -Force }

Compress-Archive -Path $files -DestinationPath $zip -CompressionLevel Optimal

# Show what actually landed inside, so you can see the files are at the root.
Add-Type -AssemblyName System.IO.Compression.FileSystem
$archive = [System.IO.Compression.ZipFile]::OpenRead($zip)
try {
  Write-Output ""
  Write-Output "Built: $zip"
  Write-Output "Entries (these must have no folder prefix):"
  foreach ($e in $archive.Entries) {
    Write-Output ("  {0,-20} {1,8} bytes" -f $e.FullName, $e.Length)
  }
  Write-Output ""
  $manifest = $archive.Entries | Where-Object { $_.FullName -eq 'imsmanifest.xml' }
  if ($manifest) {
    Write-Output "OK: imsmanifest.xml is at the archive root."
  } else {
    Write-Output "PROBLEM: imsmanifest.xml is not at the archive root. The LMS will reject this."
  }
}
finally {
  $archive.Dispose()
}
