import { SUPPORTED_CHAIN_IDS, getNumericalStrorage } from "constants/data";

export const listenToChainEvents = async () => {
    for (const chainId of SUPPORTED_CHAIN_IDS) {
        
        const numericalStorage = getNumericalStrorage(chainId);

        if (numericalStorage) {
            console.log(
                `Listening to event on chain # ${chainId} : ${numericalStorage.address}, storageValue:${(
                     numericalStorage.storeValue
                ).toString()}`
            );

            numericalStorage.on(numericalStorage.filters.ValueStored(), (oldValue, newValue, event) => {
                
            })
        }
    }}