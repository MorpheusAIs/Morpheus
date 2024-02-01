import React, { useState, useEffect } from 'react';
import { ethers } from 'ethers';
import { useUserDataContext } from 'context/userDataContext';
import { storeValueRegular } from 'functions/store_value_regular';
import { storeValueGasless } from 'functions/store_value_without_gas';
import { SignInWithWalletButton } from '@/components/SignInWithWallet';
import { getProvider } from 'constants/data';
import { getStoredValueNumber } from 'functions/get_stored_value';
import { storeTransaction } from 'functions/store_transaction';
import { readTransactions } from 'functions/read_transactions';


interface Transaction {
  timestamp: string;
  type: string;
  txHash: string;
  gasUsed: number;
  gasPrice: number;
  gasLimit: number;
  gasFee: number;
  link: string;
}

export default function Example() {
  const [connected, setConnected] = useState(true);
  const [ethAddress, setEthAddress] = useState('');
  const [networkName, setNetworkName] = useState('');
  const { user, setUser, web3modal } = useUserDataContext();
  const [isOpen, setIsOpen] = useState(false);
  const [value, setValue] = useState(0);
  const [txHash, setTxHash] = useState('');
  const [gasUsed, setGasUsed] = useState(0);
  const [gasPrice, setGasPrice] = useState(null);
  const [gasLimit, setGasLimit] = useState(0);
  const [gasFee, setGasFee] = useState(0);
  const [storedValue, setStoredValue] = useState(0);
  const [transactions, setTransactions] = useState<any>([]);


  useEffect(() => {
    if (connected) {
      getWalletInfo();
      readTransactions(ethAddress)
        .then((transactionsData) => setTransactions(transactionsData))
        .catch((error) => console.error('Error reading transactions:', error));
    }
  }, [connected, ethAddress]);
  




  const getWalletInfo = async () => {
    if (typeof window.ethereum !== 'undefined') {
      const provider = getProvider();
      const signer = provider.getSigner();
      const address = await signer.getAddress();
      setEthAddress(address);
      const network = await provider.getNetwork();
      setNetworkName(network.name);
      setStoredValue(await getStoredValueNumber());
    }
  };



  const storeValueWithGas = async () => {
    const res = await storeValueRegular(value);
    console.log(res);

   const val = await storeTransaction({
      from: await getProvider().getSigner().getAddress(),
      gasFee:  res.gasPrice?.toString() ?? '',
      gasLimit:  res.gasLimit.toString() ?? '',
      gasPrice:  res.gasPrice?.toString() ?? '',
      gasUsed: gasUsed.toString(),
      link: `https://goerli.etherscan.io/tx/${res.hash}`,
      timestamp: new Date().toISOString(),
      txHash: res.hash,
      type: 'Typical Web3 Transaction',
    });

    console.log(val);
   
  }

  const storeValueWithoutGas = async () => {
    const res = await storeValueGasless(value);
    console.log(res);
    
    const val = await storeTransaction({
      from: await getProvider().getSigner().getAddress(),
      gasFee:  res.gasPrice?.toString() ?? '',
      gasLimit:  res.gasLimit.toString() ?? '',
      gasPrice:  res.gasPrice?.toString() ?? '',
      gasUsed: gasUsed.toString(),
      link: `https://goerli.etherscan.io/tx/${res.hash}`,
      timestamp: new Date().toISOString(),
      txHash: res.hash,
      type: 'GSN Transaction',
    });
  
  }

  return (
    <>
      <div className="min-h-full">
        <div className="bg-gray-400 pb-32">
          <header className="py-10">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
              <h1 className="text-3xl font-bold tracking-tight text-white">GSN</h1>
            </div>
          </header>
        </div>

        <main className="-mt-32 mx-auto bg-white">
          <div className="mx-auto max-w-7xl px-4 pb-12 sm:px-6 lg:px-8 shadow text-black">


            <div className="px-4 py-5 sm:px-6">
              <p className="text-lg font-medium text-gray-900">Counter : {storedValue}</p>
              <p>This is an example of a web3 gas station.</p>
              <p>Please connect your wallet.</p>
              <SignInWithWalletButton />
              {connected && (
                <>
                  <p>You are connected to the {networkName} network.</p>
                  <p></p>
                  <p>Your wallet address is {ethAddress}    </p>
                  <p>
                    First, change the number shown as it is currently on the
                    blockchain
                  </p>
                  <div>
                    <input
                      className="m-1"
                      type="number"
                      onChange={(e) => setValue(Number(e.target.value))}
                    />
                  </div>

                  {/* this should be shown if the number on the blockchain is different than the number in the input field */}

                  <div>
                    <span>
                      <button
                        className="m-1 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                        onClick={storeValueWithGas}
                      >
                        Typical Web3 Transaction
                      </button>
                    </span>
                    <span>
                      <button
                        className="m-1 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                        onClick={storeValueWithoutGas}
                      >
                        GSN Transaction
                      </button>
                    </span>
                  </div>


                </>
              )}
              <div className='mt-10'>
                <p className=' underline uppercase'>  List of previous transactions</p>
                <table cellPadding={3} >
                  <thead>
                    <tr>
                      <th>Timestamp</th>
                      <th>Transaction Type</th>
                      <th>Transaction Hash</th>
                      <th>Gas Used</th>
                      <th>Gas Price</th>
                      <th>Gas Limit</th>
                      <th>Gas Fee</th>
                      <th>Link</th>
                    </tr>
                  </thead>
                  <tbody>
                    {transactions.map((transaction: Transaction, index: number) => (
                      <tr key={index}>
                        <td>{transaction.timestamp}</td>
                        <td>{transaction.type}</td>
                        <td>{transaction.txHash}</td>
                        <td>{transaction.gasUsed}</td>
                        <td>{transaction.gasPrice}</td>
                        <td>{transaction.gasLimit}</td>
                        <td>{transaction.gasFee}</td>
                        <td>
                          <a href={transaction.link} target="_blank" rel="noopener noreferrer">
                            View on Etherscan
                          </a>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

            </div>
          </div>
        </main>
      </div>
    </>
  )
}
