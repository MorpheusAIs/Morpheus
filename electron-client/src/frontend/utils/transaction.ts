import { ethers } from "ethers";
import { WETH_ADDRESS, UniswapV2RouterEth } from "./addresses";
import uniABI from "./abis/UniswapV2RouterABI.json"

export function isTransactionIntiated(transaction: any) {
    return !(Object.keys(transaction).length === 0);
  }


export function buildTransaction(transaction: any, account:  string | undefined, gasPrice: any) {
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

function buildTransferTransaction(transaction: any, account: string | undefined, gasPrice: any){
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
export function buildBuyTransaction(transaction: any, account: string | undefined, gasPrice: any){
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