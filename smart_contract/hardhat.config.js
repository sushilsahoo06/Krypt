require("@nomicfoundation/hardhat-toolbox");


module.exports = {
  solidity: '0.8.0',
  networks: {
    sepolia: {
      url: 'https://eth-sepolia.g.alchemy.com/v2/NOQgDF8gkO6mnrwWW7NLp',
      accounts: ['dbd1509619397f7df6cca74546bd14424856b52f466b5b94f4c21a24cf4e201b'],
    },
  },
};