import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";
import "@nomicfoundation/hardhat-foundry";
// import "@nomiclabs/hardhat-etherscan";
import dotenv from 'dotenv'; 
dotenv.config();  

<<<<<<< HEAD
const privateKey = "0x" + process.env.PRIVATE_KEY;
=======
const privateKey = "" + process.env.PRIVATE_KEY;
>>>>>>> fe1acefdd21b2c0f52980d39c86dc6e3035cff1a


const config: HardhatUserConfig = {
  defaultNetwork: "sepolia",
  solidity: "0.8.24",
  networks: {
    sepolia: {
      url : process.env.URI,
      accounts: [privateKey],

    }
  },
  etherscan: {
    apiKey: process.env.ETHERSCAN_KEY
  }
};

export default config;
