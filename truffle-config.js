// const HDWalletProvider = require('@truffle/hdwallet-provider');

require('dotenv').config();  // VOH added on 26/03/2022

//VOH not sure if the next line is required 26/03/2022
// npm install @truffle/hdwallet-provider or npm install @truffle/hdwallet-provider@next as required
// const HDWalletProvider = require('truffle-hdwallet-provider'); // VOH added on 26/03/2022
// const HDWalletProvider = require('truffle-hdwallet-provider'); // VOH added on 26/03/2022
// const HDWalletProvider = require('@truffle/hdwallet-provider'); // VOH added on 26/03/2022

// Access the wallet object of Truffle - used to sign transactions etc.
const HDWalletProvider = require('@truffle/hdwallet-provider')
const mnemonic = require("./secrets.json").mnemonic;

require('babel-register');
require('babel-polyfill');

// development network configuration section
// Note - only have one network configuration active at a time (comment the others out).


module.exports = {
  networks: {
    /*
    development: {
      host: "127.0.0.1",
      port: 7545,  //Note, default For Ganache (Dev environment) use port 8545 as a possible alternative to port 7545, if required
      network_id: "5777" // Default is "*" Match any network id - However the actual ID can be got from Ganache User Interface
    },
    */

    // VOH added rinkeby (test network) configuration section on 26/03/2022
    // Connect via 'ethereum node provider' infura, to deploy the contract)
    // Powershell command truffle migrate --reset --network rinkeby
    /*
    rinkeby: {
      provider: function() {
        return new HDWalletProvider(
          process.env.MNEMONIC, `https://rinkeby.infura.io/v3/c24a2ba639a54fd698896bf1f7b71118`
          // produces first of 10 accounts: 0xe183BBa04596930B6Ff5b28f47Bc3317368815D1   -- sender address
          // produces first of 10 accounts: 0xe183BBa04596930B6Ff5b28f47Bc3317368815D1  (Backup copy)
          // deployed contract address:  '0x88713bFA0894D30a4218Eefa582edf64424924a2'  - rinkeby test net
          // deployed contract address:  '0x88713bFA0894D30a4218Eefa582edf64424924a2'  - rinkeby test net (Backup copy)
        )
      },
      network_id: "4",  // Kovan network Id and additional parameters / on Binance smart chain = 97
      gas: 5000000,
      gasPrice: 25000000000,
      confirmations: 2,  // If using Binance smart chain, increase this to say, 10 (Blocks are faster on bsc)
      timeoutBlocks: 200,
      skipDryRun: true
    },
    */
    
    mainnet: {
      provider: function() {
      return new HDWalletProvider(
        // process.env.MNEMONIC,  `https://mainnet.infura.io/v3/${process.env.INFURA_API_KEY}`
        process.env.MNEMONIC, `https://mainnet.infura.io/v3/${process.env.INFURA_API_KEY}`
        )
      },
      network_id: 1,   // Ethereun main network
      gas: 2300000,   // Amount of Gas consumed - Taken from Rinkeby testnet for figure 'usage by (first) transaction'
      gasPrice: 40000000000,  // 40Gwei, look up current gas price at https://etherscan.io/gastracker
      
      // 'Upfront cost is gas x gasPrice e.g. 3,000,000 units of gas consumed in deployment x 70000000000 = 240000000000000000

      confirmations: 2,
      timeoutBlocks: 200
      // skipDryRun: true   // ---- is commented out which means that a dry run will take place (aka simulation)
    },
    
  },

  compilers: {
    solc: {
      version: '0.8.9',
      optimizer: {
        enabled: true,
        runs: 200
      }
    }
  },
};