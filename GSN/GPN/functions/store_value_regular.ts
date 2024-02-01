import { storeValueWithGas } from "smartContractFunctions/contract_functions";

export const storeValueRegular = async (value: number) => {
    try {
        const response = await storeValueWithGas(value);

        return response;
    } catch(e) {
        throw e;
    }
}