import { JsonRpcPayload, JsonRpcResponse, RelayProvider } from "@opengsn/provider";
import { ethers, providers } from "ethers";
import { GasPassNetwork, GasPassNetwork__factory, NumericalStorage, NumericalStorage__factory } from "typechain";

export const getProvider = () => {
    return new ethers.providers.Web3Provider(window.ethereum);
};

interface RPCEndpoints {
    [key: number]: {
        url: string;
        isSocket: boolean;
    }[];
}

export const paymasterAddresses: { [key: number]: string } = {
    [5] : '0x7e4123407707516bD7a3aFa4E3ebCeacfcbBb107'
  };

export const numericalAddresses: { [key: number]: string } = {
        [5] : '0x7c01B8808E3A85B81093304c8404Fc1B96FeFBa3'
}

export const rpcEndPoints: RPCEndpoints = {
    [1] : [{ url: "https://mainnet.infura.io/v3/6b2f6b0c8b9a4b6e8b0b3b0b0b0b0b0b", isSocket: false }],
    [5] : [{url : "https://goerli.infura.io/v3/6b2f6b0c8b9a4b6e8b0b3b0b0b0b0b0b", isSocket: false}]
};

export const SUPPORTED_CHAIN_IDS = new Set([56, 97, 43113, 80001, 1313161555, 31337, 5, 1]);

export const getPaymaster = (chainId: number): GasPassNetwork | undefined => {
    const provider = getRpcProvider(chainId);
    const paymasterAddress = paymasterAddresses[chainId];

    if (provider && paymasterAddress) {
        return GasPassNetwork__factory.connect(paymasterAddress, provider);
    }

    return undefined;
};

export const getNumericalStrorage = (chainId: number): NumericalStorage | undefined => {
    const provider = getRpcProvider(chainId);
    const numericalAddress = numericalAddresses[chainId];

    if (provider && numericalAddress) {
        return NumericalStorage__factory.connect(numericalAddress, provider);
    }

    return undefined;
};

export const getRpcProvider = (chainId: number): ethers.providers.Provider | undefined => {
    const endPoints = rpcEndPoints[chainId] ?? [];

    const providers = endPoints.map((it, index) => {
        const provider = it.isSocket
            ? new ethers.providers.WebSocketProvider(it.url)
            : new ethers.providers.JsonRpcProvider(
                  {
                      url: it.url,
                      timeout: 10000,
                  },
                  {
                      name: "mainnet",
                      chainId: chainId,
                  }
              );

        return {
            provider: provider,
            priority: 1,
            stallTimeout: 10000,
            weight: it.isSocket ? 1 : undefined,
        };
    });

    if (providers.length > 0) {
        return new ethers.providers.FallbackProvider(providers);
    }

    return undefined;
};

interface EthersJsonRpcRequest {
    jsonrpc: string;
    id: number;
    method: string;
    params: any[];
  }

  
  export class RelayProviderAdapter extends providers.JsonRpcProvider {
    private relayProvider: RelayProvider;
  
    constructor(relayProvider: RelayProvider) {
      super();
      this.relayProvider = relayProvider;
    }
  
    // Override perform method to use relayProvider
    async perform(method: string, params: any): Promise<any> {
      const requestId = 1; // You can use an incremental counter or any unique integer value for this.
      const request: EthersJsonRpcRequest = {
        jsonrpc: "2.0",
        id: requestId,
        method: method,
        params: [params],
      };
  
      return new Promise((resolve, reject) => {
        const payload: JsonRpcPayload = {
          jsonrpc: request.jsonrpc,
          id: request.id,
          method: request.method,
          params: request.params,
        };
  
        this.relayProvider.send(payload, (error: Error | null, result?: JsonRpcResponse) => {
          if (error) {
            reject(error);
          } else {
            resolve(result?.result);
          }
        });
      });
    }
  }