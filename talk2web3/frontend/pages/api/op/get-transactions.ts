import { ethers, utils } from 'ethers';
import { ContractFactory, Provider, Wallet } from "zksync-web3";
import type { NextApiRequest, NextApiResponse } from 'next'

type ResponseData = {
  message: string
}

export default async function handler(req: NextApiRequest, res: NextApiResponse<ResponseData>) {

  const ADDRESS = process.env.ADDRESS || "";
  const API_KEY = process.env.ETHERSCAN_API_KEY || "";

  try {

    let requestOptions = {};

    await fetch(`https://api-optimistic.etherscan.io/api?module=account&action=tokentx&address=${ADDRESS}&startblock=0&endblock=999999999&sort=asc&apikey=${API_KEY}`, requestOptions)
      .then(response => response.json())
      .then(json => {
        console.log(json);
        let transactions = json.result.reverse();
        return res.status(200).json(transactions);
      })
      .catch(error => {
        console.error(error);
      });

  } catch (error) {
    console.log(error);
  }

}