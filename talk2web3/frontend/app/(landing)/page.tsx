"use client"

import React, { useEffect, useState } from 'react';
import SDKContainer from './sdk';
import { Balance } from '@/components/wallet/Balance';
import { createPublicClient, http } from 'viem'
import { mainnet, optimism } from 'viem/chains'

const LandingPage = () => {

  const [inputValue, setInputValue] = useState('');
  const [response, setResponse] = useState(null);
  const [blockNumber, setBlockNumber] = useState(BigInt(0));
  

  const handleInputChange = (e: any) => {
    setInputValue(e.target.value);
  };

  async function query(data: any) {
    const response = await fetch(
      "https://flowise-oi6s.onrender.com/api/v1/prediction/b6d8a4dc-a379-4e5b-b3da-9e881657f42a",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
      }
    );
    const result = await response.json();
    return result;
  };

  async function getBlockHeight() {

    const client = createPublicClient({
      chain: optimism,
      transport: http(),
    })

    const blockNumber = await client.getBlockNumber();

    console.log('Optimism BlockHeight:', blockNumber);

    setBlockNumber(blockNumber);

  };

  useEffect(() => {
    getBlockHeight();
  }, []);

  const handleButtonClick = async (e: any) => {
    e.preventDefault();

    try {
      const result = await query({ "question": inputValue });
      setResponse(result);
      console.log(result);
    } catch (error) {
      console.error(error);
    }
  };


  return (
    <div className="h-full">
      <div className="flex flex-col items-center justify-center">
      <p className="items-center">Optimism Blockheight: {blockNumber}</p>
        <SDKContainer />
        <img
          className="absolute inset-0 w-full h-full object-cover"
          src="/images/Talk2Web3LogoZoomedin.png"
        />
        <br />
        <br />
        <input
          className="w-full"
          type="text"
          placeholder="Enter your question"
          value={inputValue}
          onChange={handleInputChange}
        />
        <button onClick={handleButtonClick}>Query</button>
        {response && (
          <div>
            <h2>Response:</h2>
            <pre>{JSON.stringify(response, null, 2)}</pre>
          </div>
        )}
      </div>
      <div className="flex flex-col items-center justify-center">
      </div>
    </div>
  );
};

export default LandingPage;
