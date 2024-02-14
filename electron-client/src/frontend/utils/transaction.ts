import { ethers } from "ethers";
import { WETH_ADDRESS, UniswapV2RouterEth } from "./addresses";
import uniABI from "./abis/UniswapV2RouterABI.json"
import { SDKProvider } from "@metamask/sdk";
import { transactionParams } from "./types";

export const isTransactionIntiated = (transaction: transactionParams) => {
    return !(Object.keys(transaction).length === 0);
}

export const buildTransaction = (transaction: transactionParams, account:  string | undefined, gasPrice: string) => {
    const transactionType = transaction.type.toLowerCase();
    
    let tx: any
    switch (transactionType) {
        case "transfer":
            tx = buildTransferTransaction(transaction, account, gasPrice);
            break;  
        case "buy":
            tx = buildBuyTransaction(transaction, account, gasPrice);
            break;
        case "sell":
            break;
        default:
            console.error(`Transaction of type ${transactionType} not recognsied`);
            break;
    }
    //returned wrapped call with method for metamask with transaction params
    return {
        "method": "eth_sendTransaction",
        "params": [tx]
    }
  }

const buildTransferTransaction = (transaction: transactionParams, account: string | undefined, gasPrice: any) => {
    return {
        from: account,
        to: transaction.targetAddress,
        gas: "0x76c0", //for more complex tasks estimate this from metamast
        gasPrice: gasPrice,
        value: '0x' + ethers.parseEther(transaction.ethAmount).toString(16),
        data: "0x000000"
    }
}

//SwapExactEthForTokens UniswapV2
//TODO: call helper fuction to get contract address depending on chainID
export const buildBuyTransaction = (transaction: transactionParams, account: string | undefined, gasPrice: any) => {
    const iface = new ethers.Interface(uniABI);
    const addypath = [WETH_ADDRESS, transaction.tokenAddress];
    
    const to = account?.toString();
    const deadline = Math.floor(Date.now() / 1000) + 60 * 20;

    console.log("account: "+ to)
    const amountOutMin = BigInt("0").toString(10); //TODO: do math on pool, get slippage from user for now set to 5%
    const encodeData = iface.encodeFunctionData("swapExactETHForTokensSupportingFeeOnTransferTokens", [amountOutMin, addypath, to, deadline]);

    const tx = {
        from: account?.toString(),
        to: UniswapV2RouterEth, //UniswapV2 router
        gas: "0xf4240", //estimate this and pass it in
        gasPrice: gasPrice, 
        value: '0x' + ethers.parseEther(transaction.ethAmount).toString(16),
        data: encodeData
    };

    return tx;
}

//TODO: take chain ID to get arb balance or w/e chain
export const formatWalletBalance = (balanceWeiHex: string) => {
    const balanceBigInt = BigInt(balanceWeiHex)
    const balance = ethers.formatUnits(balanceBigInt, "ether");
    return parseFloat(balance).toFixed(2) + " " + "ETH";
}

export const handleBalanceRequest = async (provider: SDKProvider | undefined, account: string | undefined, response: string) => {
    const blockNumber = await provider?.request({
      "method": "eth_blockNumber",
      "params": []
    });
  
    const balanceWeiHex = await provider?.request({
      "method": "eth_getBalance",
      "params": [
        account,
        blockNumber
      ]
    });
    if(typeof balanceWeiHex === 'string'){
      return response + " " + formatWalletBalance(balanceWeiHex);
    } else {
      console.error('Failed to retrieve a valid balance.');
      throw Error('Invalid Balance Recieved from MetaMask.')
    }
}

const estimateGasWithOverHead = (estimatedGasMaybe: string) => {
    const estimatedGas = parseInt(estimatedGasMaybe, 16);
    console.log("Gas Limit: " + estimatedGas)
    const gasLimitWithOverhead = Math.ceil(estimatedGas * 5);
    return "0x" + gasLimitWithOverhead.toString(16);
}

export const handleTransactionRequest = async (provider: SDKProvider | undefined, transaction: transactionParams, account: string | undefined) => {
    const gasPrice = await provider?.request({
        "method": "eth_gasPrice",
        "params": []
      });
    //Sanity Check
    if(typeof gasPrice !== 'string'){
    console.error('Failed to retrieve a valid gasPrice');
    throw new Error('Invalid gasPrice received');
    }
    let builtTx = buildTransaction(transaction, account, gasPrice);
    
    let estimatedGas = await provider?.request({
    "method": "eth_estimateGas",
    "params": [builtTx]
    });
    //Sanity Check
    if(typeof estimatedGas !== 'string'){
    console.error('Failed to estimate Gas with metamask');
    throw new Error('Invalid gasPrice received');
    }

    const gasLimitWithOverhead = estimateGasWithOverHead(estimatedGas)
    builtTx.params[0].gas = gasLimitWithOverhead; // Update the transaction with the new gas limit in hex
    return builtTx
}

