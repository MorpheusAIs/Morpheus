const { MetaMaskSDK } = require('@metamask/sdk');

const { ipcRenderer } = require('electron');

// Get the web3 instance from the main process
const web3 = ipcRenderer.sendSync('getWeb3');

// const Web3 = require('electron').remote.require('web3');

// Create a web3 instance with your Infura provider
// const web3 = new Web3('https://goerli.infura.io/v3/9ce2d8d0d000490399f9a8f2b1b2fa42');


// Create a new provider
// Create a provider that communicates with the Goerli test network
// const provider = new HttpProvider('https://goerli.infura.io/v3/9ce2d8d0d000490399f9a8f2b1b2fa42');



// Define the options for the MetaMask SDK
const options = {
    shouldShimWeb3: false, // Whether to shim a web3 instance into the global namespace
    storage: {
      // Options for the storage API
      enabled: true, // Whether to enable the storage API
      state: {
        provider: web3.currentProvider,
      }, // Initial state for the storage API
    },
    dappMetadata: {
      // Metadata about your dapp that will be shown in the MetaMask UI
      name: 'Morpheus', // The name of your dapp
      url: 'https://github.com/morpheusais', // The URL of your dapp
    },
    modals: {
      // Functions that will be called when certain modals are shown in the MetaMask UI
      install: ({ link }) => {
        // This function will be called when the install modal is shown
        // `link` is the link to the MetaMask installation page
        shell.openExternal('https://betterbrand.com');
      },
      otp: () => {
        // This function will be called when the OTP modal is shown
        // It should return an object with an `updateOTPValue` function that will be called with the OTP value
        return {
          updateOTPValue: (otpValue) => {
            // Do something with the OTP value
          },
        };
      },
    },
  };

// Initialize the MetaMask SDK
const sdk = MetaMaskSDK.initialize(options);

// Create a new instance of the MetaMask SDK
const MMSDK = new MetaMaskSDK(options);

// Get the Ethereum provider from the SDK
const ethereum = MMSDK.getProvider(); // You can also access via window.ethereum

module.exports = { MMSDK, ethereum };