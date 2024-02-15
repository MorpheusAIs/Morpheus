import { ModelResponse } from "./types";

export function parseResponse(jsonString: string){
    // Assert the type of the parsed object.
    const parsed = JSON.parse(jsonString);

    if (isModelResponse(parsed)) {
        return { response: parsed.response, transaction: parsed.transaction };
    } else {
        throw new Error("Invalid ModelResponse format");
    }
}

function isModelResponse(object: any): object is ModelResponse {
    return 'response' in object && 'transaction' in object;
}