import "uniswap-v3-deploy-plugin";

module.exports = {
  defaultNetwork: "rinkeby",
  networks: {
    hardhat: {
    },
    rinkeby: {
      url: "https://rinkeby.infura.io/v3/fd85c624861640c783824742b15605b1",
      accounts: ['4c5z2c021f1e21014c5b0e4c5a2a5453d0232518cb7fba64e7eaffc72f603199']
    },
    // kovan: {
    //   url: "https://kovan.infura.io/v3/fd85c624861640c783824742b15605b1",
    //   accounts: ['4c5z2c021f1e21014c5b0e4c5a2a5453d0232518cb7fba64e7eaffc72f603199']
    // }
  },
  solidity: {
    version: "^0.8.0",
    settings: {
      optimizer: {
        enabled: true,
        runs: 200
      }
    }
  },
  paths: {
    sources: "./contracts",
    tests: "./test",
    cache: "./cache",
    artifacts: "./artifacts"
  },
  mocha: {
    timeout: 40000
  }
}