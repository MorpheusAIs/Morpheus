/**
 * Wallets for the app
 */
export const wallets = {
  // Example wallet:
  // walletconnect: {
  //   options: walletsOptions,
  //   connector: async (options) => {
  //     const { WalletConnectConnector } = await import("@web3-react/walletconnect-connector");
  //     return new WalletConnectConnector({
  //       rpc: options.chains,
  //       qrcode: true,
  //       pollingInterval: options.pollingInterval,
  //     });
  //   },
  // },
};

/**
 * wagmi connectors for the wagmi context
 */
export const wagmiConnectors = Object.freeze([
  {
    groupName: "Supported Wallets",
    wallets,
  },
]);
