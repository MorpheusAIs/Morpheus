import { ethers } from "ethers";
import { WETH_ADDRESS, UniswapV2RouterEth } from "./addresses";
import uniABI from "./abis/UniswapV2RouterABI.json"
import { SDKProvider } from "@metamask/sdk";
import { transactionParams } from "./types";
import { add } from "winston";

const slippage = 0.05

export const isTransactionIntiated = (transaction: transactionParams) => {
    return !(Object.keys(transaction).length === 0);
}

export const buildTransaction = (transaction: transactionParams, account:  string | undefined, gasPrice: string, provider: SDKProvider | undefined) => {
    const transactionType = transaction.type.toLowerCase();
    
    let tx: any
    switch (transactionType) {
        case "transfer":
            tx = buildTransferTransaction(transaction, account, gasPrice);
            break;  
        /*case "buy":
            tx = buildBuyTransaction(transaction, account, gasPrice, provider);
            break;
        case "sell":
            tx = buildSellTransaction(transaction, account, gasPrice, provider)
            break;*/
        default:
            throw Error(`Transaction of type ${transactionType} is not yet supported`);
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
//TODO: get slippage from user
const buildBuyTransaction = async (transaction: transactionParams, account: string | undefined, gasPrice: string, provider: SDKProvider | undefined) => {
    const iface = new ethers.Interface(uniABI);
    const addypath = [WETH_ADDRESS, transaction.tokenAddress];
    
    const to = account?.toString();
    const deadline = Math.floor(Date.now() / 1000) + 60 * 20;

    //console.log("account: "+ to)
    //TODO: get slippage from user, for now next step get reserves from chain and 
    //set default slippage of 5% (10% will just get sandwhiched)
    const amounts = await getAmountsOut(iface, provider, account, transaction, addypath);
    const amountOutMin = BigInt("0").toString(10); 
    const encodeData = iface.encodeFunctionData("swapExactETHForTokensSupportingFeeOnTransferTokens", [amountOutMin, addypath, to, deadline]);

    console.log("account: " +  account?.toString())
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

const getAmountsOut = async (iface :ethers.Interface, provider: SDKProvider | undefined, account: string | undefined, transaction: transactionParams, addypath: string[]) => {
    const ethAmountInWei = ethers.parseUnits(transaction.ethAmount, "ether")
    console.log("wei amount in: " + ethAmountInWei)
    const encodeData = iface.encodeFunctionData("getAmountsOut", [ethAmountInWei, addypath])
    const amountsEncoded = await provider?.request({
        "method": "eth_call",
        "params": [{
            from: account?.toString(),
            to: UniswapV2RouterEth,
            gas: '0xf4240', //doesnt matter since its read only anyway - wont pay gas
            data: encodeData
        }, 'latest']  //get amounts from latest block
    })
    if (amountsEncoded) {
        // Decode the data using the interface
        const amounts = iface.decodeFunctionResult("getAmountsOut", amountsEncoded);
        // `amounts` will be an array of BigNumbers
        console.log("amounts: " + amounts)
        return amounts;
      } else {
        // Handle error or invalid result
        return null;
      }
}

//TODO: get slippage from user
const buildSellTransaction = (transaction: transactionParams, account: string | undefined, gasPrice: any, provider: SDKProvider | undefined) => {
    const iface = new ethers.Interface(uniABI);
    const addypath = [transaction.tokenAddress, WETH_ADDRESS];
    
    const to = account?.toString();
    const deadline = Math.floor(Date.now() / 1000) + 60 * 5;

    const amountIn = transaction.tokenAmount; //put it in correct decimals from query
    //TODO: get slippage from user, for now next step get reserves from chain and 
    //set default slippage of 5% (10% will just get sandwhiched)
    const amountOutMin = BigInt("0").toString(10); 
    const encodeData = iface.encodeFunctionData("swapExactTokensForETHSupportingFeeOnTransferTokens", [amountIn, amountOutMin, addypath, to, deadline]);
    const tx = {
        from: account?.toString(),
        to: UniswapV2RouterEth, //UniswapV2 router
        gas: "0xf4240", //estimate this and pass it in
        gasPrice: gasPrice, 
        value: '0x000',
        data: encodeData
    };

    return tx;
}

//TODO: take chain ID to get arb balance or w/e chain
const formatWalletBalance = (balanceWeiHex: string) => {
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
    //console.log("Gas Limit: " + estimatedGas)
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
    let builtTx = buildTransaction(transaction, account, gasPrice, provider);
    
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

