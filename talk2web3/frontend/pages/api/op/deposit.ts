import { ethers, utils } from 'ethers';
import type { NextApiRequest, NextApiResponse } from 'next'

// THORCHAIN_Router ABI
const abi = `[{"inputs":[{"internalType":"address","name":"rune","type":"address"}],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":true,"internalType":"address","name":"asset","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"},{"indexed":false,"internalType":"string","name":"memo","type":"string"}],"name":"Deposit","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"oldVault","type":"address"},{"indexed":true,"internalType":"address","name":"newVault","type":"address"},{"indexed":false,"internalType":"address","name":"asset","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"},{"indexed":false,"internalType":"string","name":"memo","type":"string"}],"name":"TransferAllowance","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"vault","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":false,"internalType":"address","name":"asset","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"},{"indexed":false,"internalType":"string","name":"memo","type":"string"}],"name":"TransferOut","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"oldVault","type":"address"},{"indexed":true,"internalType":"address","name":"newVault","type":"address"},{"components":[{"internalType":"address","name":"asset","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"indexed":false,"internalType":"struct THORChain_Router.Coin[]","name":"coins","type":"tuple[]"},{"indexed":false,"internalType":"string","name":"memo","type":"string"}],"name":"VaultTransfer","type":"event"},{"inputs":[],"name":"RUNE","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address[]","name":"recipients","type":"address[]"},{"components":[{"internalType":"address","name":"asset","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"internalType":"struct THORChain_Router.Coin[]","name":"coins","type":"tuple[]"},{"internalType":"string[]","name":"memos","type":"string[]"}],"name":"batchTransferOut","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"address payable","name":"vault","type":"address"},{"internalType":"address","name":"asset","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"},{"internalType":"string","name":"memo","type":"string"}],"name":"deposit","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"address payable","name":"vault","type":"address"},{"internalType":"address","name":"asset","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"},{"internalType":"string","name":"memo","type":"string"},{"internalType":"uint256","name":"expiration","type":"uint256"}],"name":"depositWithExpiry","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"address","name":"router","type":"address"},{"internalType":"address payable","name":"asgard","type":"address"},{"components":[{"internalType":"address","name":"asset","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"internalType":"struct THORChain_Router.Coin[]","name":"coins","type":"tuple[]"},{"internalType":"string","name":"memo","type":"string"}],"name":"returnVaultAssets","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"address","name":"router","type":"address"},{"internalType":"address","name":"newVault","type":"address"},{"internalType":"address","name":"asset","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"},{"internalType":"string","name":"memo","type":"string"}],"name":"transferAllowance","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address payable","name":"to","type":"address"},{"internalType":"address","name":"asset","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"},{"internalType":"string","name":"memo","type":"string"}],"name":"transferOut","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"},{"internalType":"address","name":"","type":"address"}],"name":"vaultAllowance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"}]`;

type ResponseData = {
    message: string
  }

// Deposit ETH to the THORChain Router contract...

export default async function handler(req: NextApiRequest, res: NextApiResponse<ResponseData>) {

    var token = req.headers.authorization;
    var amount = req.body.amount;

    const provider = new ethers.providers.InfuraProvider(10, process.env.INFURA_PROJECT_ID);

    const THORCHAIN_ROUTER_OPTIMISM_CONTRACT = ""; // Deployed Contract Address

    const DEPOSITOR_WALLET_PRIVATE_KEY =  ""; // Need to move to client side...

    const depositor_wallet = new ethers.Wallet(DEPOSITOR_WALLET_PRIVATE_KEY, provider);

    const value = ethers.utils.parseUnits(amount, 6)

    try {

        // Load up the contract...
        const contract = new ethers.Contract(THORCHAIN_ROUTER_OPTIMISM_CONTRACT, abi, depositor_wallet)

        // Asgard Vault address...
        const vault = "0x000000";

        /*  {
            "address": "0x3e7ef720190b5c098cdde018eb26567ef6e27686",
            "chain": "ETH",
        } */

        const asset = "0x0000000000000000000000000000000000000000"; // ETH
        const amount = value;
        const memo = "Deposit ETH to THORChain Router";

        // Set the expirary to 1 hour from now...
        const expirary = Math.floor(Date.now() / 1000) + 3600;

        const transaction = await contract.depositWithExpirary(vault, asset, amount, memo, expirary);

        console.log(transaction);

        console.log(`Deposited ${ethers.utils.formatUnits(value, 6)} ETH`);

        return res.status(200).json({ message: `Sent ${ethers.utils.formatUnits(value, 6)} ETH to the vault` })

    }

    catch (error) {
        console.log(error);
    }

}