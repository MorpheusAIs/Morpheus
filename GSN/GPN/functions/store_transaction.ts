// store_transaction.ts
import axios, { AxiosError } from 'axios';

const API_URL = 'https://gpn-be.herokuapp.com/graphql';



interface TransactionData {
  from: string;
  gasFee: string;
  gasLimit: string;
  gasPrice: string;
  gasUsed: string;
  link: string;
  timestamp: string;
  txHash: string;
  type: string;
}


interface TransactionResponse {
  id: string;
}

export const storeTransaction = async (transactionData: TransactionData): Promise<TransactionResponse> => {
  console.log("Transaction data:", transactionData);

  const mutation = `
  mutation CreateTransaction($from: String!, $gasFee: String!, $gasLimit: String!, $gasPrice: String!, $gasUsed: String!, $link: String!, $timestamp: String!, $txHash: String!, $type: String!) {
    createTransaction(from: $from, gasFee: $gasFee, gasLimit: $gasLimit, gasPrice: $gasPrice, gasUsed: $gasUsed, link: $link, timestamp: $timestamp, txHash: $txHash, type: $type) {
      id
    }
  }
`;

  try {
    const response = await axios.post(API_URL, {
      query: mutation,
      variables: transactionData,
    });

    console.log('Transaction stored:', response);

    return response.data.data.createTransaction;
  } catch (error) {
    const axiosError = error as AxiosError;
    console.error('Error storing transaction:', axiosError.response?.data || axiosError.message);

    throw error;
  }
};


