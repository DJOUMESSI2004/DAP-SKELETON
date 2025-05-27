# DApp Voting – Smart Contract on Sepolia

## Contrat déployé
**Adresse :** `0xe7f1725E7734CE288F8367e1Bb143E90bb3F0512`  
Lien Etherscan : https://sepolia.etherscan.io/address/0x...

## Frontend
URL : https://mon-dapp-vote.netlify.app

##  Installation & Lancement

```bash
git clone https://github.com/DJOUMESSI2004/DAP-SKELETON.git
cd dapp-voting
npm install
cp .env.example .env
# Remplis .env avec :
# SEPOLIA_URL=...
# PRIVATE_KEY=...

npx hardhat compile
npx hardhat run scripts/deploy.js --network sepolia

cd frontend-lite
live-server .
