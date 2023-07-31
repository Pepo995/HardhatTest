import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";

const config: HardhatUserConfig = {
  solidity: "0.8.19",
  networks: {
    // hardhat: {
    //   forking: {
    //     url: "YOUR_MAINNET_NODE_URL",
    //   },
    // },
    localhost: {
      url: "http://localhost:8545", // Replace this with the URL of your local node (if using hardhat node)
    },
  },
};

export default config;
