import type { NextApiRequest, NextApiResponse } from 'next'
import { ContractFactory, Provider, utils, Wallet } from "zksync-web3";
import * as ethers from "ethers";
import * as zksync from "zksync-web3";
import { HardhatRuntimeEnvironment } from "hardhat/types";

import { Deployer } from "@matterlabs/hardhat-zksync-deploy";
import erc20 from '../../../utils/MyERC20.json';
import paymaster from '../../../utils/MyPaymaster.json';

require("dotenv").config();

const PAYMASTER_ADDRESS = process.env.PAYMASTER_ADDRESS || "";

const USDC_SENDER_PRIVATE_KEY = process.env.USDC_SENDER_PRIVATE_KEY || "";

const wallet = new Wallet(USDC_SENDER_PRIVATE_KEY);

// Create zkSync Era provider on testnet
const zkSyncProvider = new zksync.Provider("https://testnet.era.zksync.dev");

// Create a zkSync wallet for the sender
const zkSyncWallet = new zksync.Wallet(USDC_SENDER_PRIVATE_KEY, zkSyncProvider);

// Store the L2 token address
const USDC_CONTRACT = "0xcA3e71672Aa060Fe7FFA71664ecc08E41E62B9Eb";

const EMPTY_WALLET_PRIVATE_KEY = process.env.EMPTY_WALLET_PRIVATE_KEY || "";
 
type ResponseData = {
  message: string
}
 
export default async function handler(req: NextApiRequest, res: NextApiResponse<ResponseData>) {

    // Fetch from params
    const query = req.query;
    const { amount, address } = query;

    console.log('amount', amount);
    console.log('address', address);

    var _amount = amount?.toString() || "";
    var _address = address?.toString() || "";

    const provider = new Provider("https://testnet.era.zksync.dev");

    const emptyWallet = new Wallet(EMPTY_WALLET_PRIVATE_KEY, provider);

    const sender_wallet = new ethers.Wallet(USDC_SENDER_PRIVATE_KEY, provider);

    const contract = new ethers.Contract(USDC_CONTRACT, erc20.abi, sender_wallet);

    const gasPrice = await provider.getGasPrice();

    const PaymasterFactory = new ContractFactory(paymaster.abi, paymaster.bytecode, zkSyncWallet);
    const PaymasterContract = PaymasterFactory.attach(PAYMASTER_ADDRESS);

    // Estimate gas fee for the transaction
    const gasLimit = await contract.estimateGas.approve(PAYMASTER_ADDRESS, ethers.constants.MaxUint256, {
        customData: {
            gasPerPubdata: utils.DEFAULT_GAS_PER_PUBDATA_LIMIT,
            paymasterParams: utils.getPaymasterParams(PAYMASTER_ADDRESS, {
                type: "ApprovalBased",
                token: USDC_CONTRACT,
                // Set a large allowance just for estimation
                minimalAllowance: ethers.BigNumber.from(`100000000000000000000`),
                // Empty bytes as testnet paymaster does not use innerInput
                innerInput: new Uint8Array(),
            }),
        },
    });


    // Gas estimation:
    const fee = gasPrice.mul(gasLimit.toString());
    console.log(`Estimated ETH FEE (gasPrice * gasLimit): ${fee}`);

    // Calling the dAPI to get the ETH price:
    const ETHUSD = await PaymasterContract.readDapi("0x28ce555ee7a3daCdC305951974FcbA59F5BdF09b");
    const USDCUSD = await PaymasterContract.readDapi("0x946E3232Cc18E812895A8e83CaE3d0caA241C2AB");

    console.log(`ETH/USD dAPI Value: ${ETHUSD}`);
    console.log(`USDC/USD dAPI Value: ${USDCUSD}`);

    // Calculating the USD fee:
    const usdFee = fee.mul(ETHUSD).div(USDCUSD);
    console.log(`Estimated USD FEE: ${usdFee}`);

    // Encoding the "ApprovalBased" paymaster flow's input

    const paymasterParams = utils.getPaymasterParams(PAYMASTER_ADDRESS, {
        type: "ApprovalBased",
        token: USDC_CONTRACT,
        // set minimalAllowance to the estimated fee in erc20
        minimalAllowance: ethers.BigNumber.from(usdFee),
        // empty bytes as testnet paymaster does not use innerInput
        innerInput: new Uint8Array(),
    });

    //Show the balance of wallets before transferring
    console.log(`FROM this L2 wallet: "${ethers.utils.formatUnits(await zkSyncProvider.getBalance(zkSyncWallet.address, "latest", USDC_CONTRACT), 18)}" USDC`);
    console.log(`TO receiver wallet: "${ethers.utils.formatUnits(await zkSyncProvider.getBalance(_address, "latest", USDC_CONTRACT), 18)}" USDC`);

    await (
        
        await contract.connect(sender_wallet).transfer(address, ethers.utils.parseUnits(_amount, 18), {
          // specify gas values
          maxFeePerGas: gasPrice,
          maxPriorityFeePerGas: 0,
          gasLimit: gasLimit,
          // paymaster info
          customData: {
            paymasterParams: paymasterParams,
            gasPerPubdata: utils.DEFAULT_GAS_PER_PUBDATA_LIMIT,
          },
        })
      ).wait();

    res.status(200).json({ message: 'Transfer successful' });

}
