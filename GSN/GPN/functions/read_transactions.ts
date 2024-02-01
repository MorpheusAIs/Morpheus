// read_transactions.ts
import axios from 'axios';

const API_URL = 'https://gpn-be.herokuapp.com/graphql';

export const readTransactions = async (address: string) => {
  const query = `
    query Transactions($address: String!) {
      transactions(address: $address) {
        from
        gasFee
        gasLimit
        gasPrice
        gasUsed
        id
        link
        timestamp
        txHash
        type
      }
    }
  `;

  try {
    const response = await axios.post(API_URL, {
      query: query,
      variables: { address },
    });

    return response.data.data.transactions;
  } catch (error) {
    console.error('Error fetching transactions:', error);
    throw error;
  }
};
