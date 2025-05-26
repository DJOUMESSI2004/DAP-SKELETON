const hre = require("hardhat");

async function main() {
  const Voting = await hre.ethers.getContractFactory("Voting");
  const voting = await Voting.deploy();

  // Avec ethers v6, on attend le déploiement ainsi :
  await voting.waitForDeployment();

  console.log("Voting deployed at:", await voting.getAddress());
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
