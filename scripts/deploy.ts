import { ethers } from "hardhat";

async function main() {

  const simplyNFT = await ethers.deployContract("SimplyToken", ['0xbffa4029D29F5b0A659196972082dfe17e569937']);

  await simplyNFT.waitForDeployment();
<<<<<<< HEAD

=======
>>>>>>> fe1acefdd21b2c0f52980d39c86dc6e3035cff1a
  console.log(`Address: ${simplyNFT.target}`)
  
}
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
