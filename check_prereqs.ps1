Write-Host "=== Verification de l'environnement DApp ===" -ForegroundColor Cyan

function Check-Command {
    param([string]$cmd)
    $found = Get-Command $cmd -ErrorAction SilentlyContinue
    if ($found) {
        Write-Host "[OK] $cmd trouve" -ForegroundColor Green
    } else {
        Write-Host "[ERREUR] $cmd manquant" -ForegroundColor Red
    }
}

Check-Command "node"
Check-Command "npm"
Check-Command "npx"
Check-Command "git"

try {
    $hardhat = npx hardhat --version
    Write-Host "[OK] Hardhat version : $hardhat" -ForegroundColor Green
} catch {
    Write-Host "[ERREUR] Hardhat introuvable (npm install ?)" -ForegroundColor Red
}

Write-Host "`n=== Test de compilation ==="
try {
    npx hardhat compile
    Write-Host "[OK] Compilation reussie" -ForegroundColor Green
} catch {
    Write-Host "[ERREUR] Echec de compilation" -ForegroundColor Red
}

Write-Host "`n=== Verification terminee ==="
