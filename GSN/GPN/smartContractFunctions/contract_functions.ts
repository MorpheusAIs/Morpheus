import { JsonRpcPayload, JsonRpcResponse, RelayProvider } from "@opengsn/provider";
import { RelayProviderAdapter, numericalAddresses } from "constants/data";
import { getProvider, getRelayProvider } from "constants/function";
import { ethers, providers } from "ethers";

import { NumericalStorage} from "typechain/contracts";
import { NumericalStorage__factory } from "typechain/factories/contracts/NumericalStorage__factory";

export const storeValueWithGas = async (value: number) => {
    try {
        
        const storage : NumericalStorage = NumericalStorage__factory.connect(
            numericalAddresses[await getProvider().getSigner().getChainId()],
            getProvider().getSigner()) as NumericalStorage;
        
        const res = await storage.storeValue(value);

        return res;
        
    } catch(e) {
        throw e;
    }
};

export const storeValueWithGasRelay = async (value: number) => {
  try {
    const provider = getProvider();
    const signer = provider.getSigner();
    const chainId = await signer.getChainId();

    provider.getGasPrice().then(price => console.log('== gas price=', price.toString()))

    const gsnProvider = await getRelayProvider();

    const gasFees = await gsnProvider.calculateGasFees()
    gasFees.maxPriorityFeePerGas = gasFees.maxFeePerGas
    console.log('gas fees=', gasFees)
    const gasLimit = 1e8

    const provider2 = new ethers.providers.Web3Provider(gsnProvider as any as providers.ExternalProvider)


    const storage: NumericalStorage = NumericalStorage__factory.connect(
      numericalAddresses[chainId],
      provider2.getSigner()
    ) as NumericalStorage;


    const res = await storage.storeValue(value);

    return res;
  } catch (e) {
    throw e;
  }
};



export const getStoredValue = async () => {{
    try {

        const storage : NumericalStorage = NumericalStorage__factory.connect(
            numericalAddresses[await getProvider().getSigner().getChainId()],
            getProvider().getSigner()) as NumericalStorage;
        
        const res = await storage.storedValue();

        return res;
    } catch(e) {
        throw e;
    }
}};
  
  