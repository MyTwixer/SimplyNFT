import { ethers } from "hardhat";

async function main() {

  const simplyNFT = await ethers.deployContract("SimplyToken");

  await simplyNFT.waitForDeployment();

  console.log(`Address: ${simplyNFT.target}`)
  
}
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
