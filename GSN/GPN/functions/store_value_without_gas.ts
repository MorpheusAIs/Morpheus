import { storeValueWithGas, storeValueWithGasRelay } from "smartContractFunctions/contract_functions";

export const storeValueGasless = async (value: number) => {
    try {
        const response = await storeValueWithGasRelay(value);

        return response;
    } catch(e) {
        throw e;
    }
}