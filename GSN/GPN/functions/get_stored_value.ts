import {getStoredValue} from 'smartContractFunctions/contract_functions';

export const getStoredValueNumber = async () => {
    try {
        const response = await getStoredValue();


        console.log("Number" , response.toNumber());

        return response.toNumber();
    }
    catch (e) {
        throw e;
    }    
};