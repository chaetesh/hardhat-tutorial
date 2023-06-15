require("@nomicfoundation/hardhat-toolbox");
require("hardhat-gas-reporter");
require("solidity-coverage"); // Will display which lines are not covered in checks

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  defaultNetwork: "hardhat",
  networks: {
    goerli: {
      url: "https://eth-goerli.g.alchemy.com/v2/lFlEqs4A-_jmelDXJeTXPhDK15PBnFL9",
      accounts: [
        "0x36e81a7c346508f7f67acff5338dec1c50b7d3953e0832e61f5f9b2b354d412c",
      ],
    },
    localhost: {
      url: "http://127.0.0.1:8545/",
      // accounts hardhat will place by default when running hardhat on localhost
    },
  },
  etherscan: {
    apiKey: "Y1KDYSC31H5GJGDGRMUTEP1BT4FF1NDHGX",
  },
  solidity: "0.8.18",
  gasReporter: {
    enabled: true,
    currency: "USD",
    coinmarketcap: "1b944536-a5ba-4c34-a787-53910214761b",
    token:'matic',
  },
};
