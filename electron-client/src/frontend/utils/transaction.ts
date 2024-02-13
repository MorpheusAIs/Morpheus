import { ethers } from "ethers";

export function isTransactionIntiated(transaction: any) {
    return !(Object.keys(transaction).length === 0);
  }


export function buildTransaction(transaction: any, account:  string | undefined, gasPrice: any) {
    const transactionType = transaction.type;
    
    let tx: any
    switch (transactionType) {
        case "Transfer":
            tx = buildTransferTransaction(transaction, account, gasPrice)
            break;  
        case "Buy":
            break;
        case "Sell":
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

//get to address from metamask account
function buildTransferTransaction(transaction: any, account: string | undefined, gasPrice: any){
    return {
        from : account,
        to: transaction.targetAddress,
        gas: "0x76c0", //for more complex tasks estimate this from metamast
        gasPrice: gasPrice, //make more dynamic later
        value: '0x' + ethers.parseEther(transaction.ethAmount).toString(16),
        data: "0x000000"
    }
}