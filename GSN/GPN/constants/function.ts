import { ethers, providers } from "ethers";
import { GSNConfig, RelayProvider, NpmLogLevel } from '@opengsn/provider';
import { paymasterAddresses } from "./data";


export const getProvider = () => {
    return new ethers.providers.Web3Provider(window.ethereum);
};


  



export const getRelayProvider = async ()  => {

   const paymasterAddress = paymasterAddresses[await getProvider().getSigner().getChainId()]

   const config: Partial<GSNConfig> = { 
    paymasterAddress,
    loggerConfiguration: {
        logLevel: 'debug'
    }
    };

    const provider = RelayProvider.newProvider({ provider: getProvider(), config })

    await provider.init();

    return provider;
}

