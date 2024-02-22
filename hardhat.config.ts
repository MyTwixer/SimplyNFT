import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";
import "@nomicfoundation/hardhat-foundry";
// import "@nomiclabs/hardhat-etherscan";
import dotenv from 'dotenv'; 
dotenv.config();  

const privateKey = "0x" + process.env.API_URL;


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
