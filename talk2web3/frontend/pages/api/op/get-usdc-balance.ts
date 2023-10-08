import { ethers, utils } from 'ethers';
import { ContractFactory, Provider, Wallet } from "zksync-web3";
import type { NextApiRequest, NextApiResponse } from 'next'

type ResponseData = {
    usdc_balance: string
  }

export default async function handler(req: NextApiRequest, res: NextApiResponse<ResponseData>) {

var token = req.headers.authorization; 
var address = req.body.address;

const provider = new ethers.providers.InfuraProvider(10, process.env.INFURA_PROJECT_ID);

const USDC_OPTIMISM_CONTRACT = "0x7f5c764cbc14f9669b88837ca1490cca17c31607";

const USDC_SENDER_PRIVATE_KEY = process.env.USDC_SENDER_PRIVATE_KEY || "";

const getUSDCBalance = async (wallet: any) => {
    const abi = [
      {
        name: 'balanceOf',
        type: 'function',
        inputs: [
          {
            name: '_owner',
            type: 'address',
          },
        ],
        outputs: [
          {
            name: 'balance',
            type: 'uint256',
          },
        ],
        constant: true,
        payable: false,
      },
    ];

    const contract = new ethers.Contract(USDC_OPTIMISM_CONTRACT, abi, wallet);
    const balance = await contract.balanceOf(wallet.address);

    return balance
  }

// Get the USDC balance for an account...

try {
    
const receiver_wallet = new ethers.Wallet(USDC_SENDER_PRIVATE_KEY, provider);
const receiver_balance = await getUSDCBalance(receiver_wallet);

console.log(receiver_balance);

var number = receiver_balance.toNumber();
var formatted_number = number / 1000000;
var float_number = formatted_number.toFixed(2);

return res.status(200).json({ usdc_balance: `${float_number}`})

}

catch (error) {
    console.log(error);
  };

}