import { ethers } from "ethers";
import { WETH_ADDRESS, UniswapV2RouterEth } from "./addresses";
import uniABI from "./abis/UniswapV2RouterABI.json"
import { SDKProvider } from "@metamask/sdk";
import { transactionParams } from "./types";

export const isTransactionIntiated = (transaction: any) => {
    return !(Object.keys(transaction).length === 0);
}

export const buildTransaction = (transaction: any, account:  string | undefined, gasPrice: any) => {
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

const buildTransferTransaction = (transaction: any, account: string | undefined, gasPrice: any) => {
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
export const buildBuyTransaction = (transaction: any, account: string | undefined, gasPrice: any) => {
    const iface = new ethers.Interface(uniABI);
    const addypath = [WETH_ADDRESS, transaction.tokenAddress];
    
    const to = account?.toString(); //reciepient of tokens
    if(to === undefined){
        console.error('Could not retrieve account') //need better error handling/notifications for the user
    }
    //const to = '0x2DDc1600b248D9A24d11bE858fb8388a1e9EAD92'
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
  
    console.log("blockNumber: " + blockNumber)
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
      throw Error("Wallet Balance Retrievel Failed")
    }
}

export const handleTransactionRequest = async (provider: SDKProvider | undefined, transaction: transactionParams, account: string | undefined) => {
    const gasPrice = await provider?.request({
        "method": "eth_gasPrice",
        "params": []
      });
      let builtTx = buildTransaction(transaction, account, gasPrice);
      
      let estimatedGasMaybe = await provider?.request({
        "method": "eth_estimateGas",
        "params": [builtTx]
      });

      if(typeof estimatedGasMaybe === 'string'){
        const estimatedGas = parseInt(estimatedGasMaybe, 16);
        console.log("Gas Limit: " + estimatedGas)
        const gasLimitWithOverhead = Math.ceil(estimatedGas * 5);
        const gasLimitWithOverheadHex = "0x" + gasLimitWithOverhead.toString(16);
        console.log("Gas Limit With Overhead: " + gasLimitWithOverhead)
        builtTx.params[0].gas = gasLimitWithOverheadHex; // Update the transaction with the new gas limit in hex
      } else {
        builtTx.params[0].gas = estimatedGasMaybe;
      }
      await provider?.request(builtTx)
}

