import { MetaMaskSDK } from '@metamask/sdk';

const MMSDK = new MetaMaskSDK({
    dappMetadata: {
      name: "Morpheus",
      url: window.location.href,
    }
    // Other options
  });
  
export const ethereum = MMSDK.getProvider(); 