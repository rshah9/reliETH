const HDWalletProvider = require("truffle-hdwallet-provider");
const infuraKey = "a99d52a2ca9540f395c2bc10a738c5ee";

const mnemonic =
  "detect apple naive snow knee copper company daring scorpion flight short club";

module.exports = {
  contracts_build_directory: "src/abis",
  networks: {
    ropsten: {
      provider: () =>
        new HDWalletProvider(
          mnemonic,
          `https://ropsten.infura.io/v3/${infuraKey}`
        ),
      network_id: 3, // Ropsten's id
      timeoutBlocks: 200, // # of blocks before a deployment times out  (minimum/default: 50)
      skipDryRun: true // Skip dry run before migrations? (default: false for public nets )
    }
  },
  compilers: {
    solc: {
      version: "0.5.8",    // Fetch exact version from solc-bin (default: truffle's version)
      settings: {          // See the solidity docs for advice about optimization and evmVersion
        optimizer: {
          enabled: true,
          runs: 200
        },
      }
    }
  }
};
