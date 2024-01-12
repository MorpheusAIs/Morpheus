# Morpheus Capital Providers Smart Contract Testing Guide on Ethereum Sepolia and Arbitrum Sepolia networks


## Introduction
To participate in the testing of Morpheus Capital Providers Smart Contracts on the Ethereum Sepolia and Arbitrum Sepolia, there are following main steps:
1) Obtaining SepoliaETH
2) Obtaining stETH on the Ethereum Sepolia network
3) Depositing stETH into Distribution contract on the Ethereum Sepolia network
4) Claiming MOR rewards on Arbitrum Sepolia using Layer Zero bridge


## Smart Contracts Addresses
Ethereum Sepolia 
- Distribution: [0x98a8c301F3B168daCD0B054dc06A15c778F12D6e](https://sepolia.etherscan.io/address/0x98a8c301f3b168dacd0b054dc06a15c778f12d6e#code) 
- stETH: [0xEE3fc2711cBB17B26747048c177698398c9a95ce](https://sepolia.etherscan.io/address/0xee3fc2711cbb17b26747048c177698398c9a95ce#code)
  
Arbitrum Sepolia 
- MOR: [0xe6d01d086a844a61641c75f1bca572e7aa70e154](https://sepolia.arbiscan.io/address/0xe6d01d086a844a61641c75f1bca572e7aa70e154#code)


## How to get Sepolia ETH?
- To start we should have installed Metamask or another web3 wallet. We need to go to network settings which by default are usually set to Ethereum, then choose the Sepolia testnet as the network.
- The next step is to fund your address with SepoliaETH. You may use a website like https://sepolia-faucet.pk910.de/# or https://sepoliafaucet.com/ to earn SepoliaETH if you are using a fresh address.
- There are lots of other faucets that can easily be found for the Sepolia testnet but usually require an address that has been active on the main Ethereum network.


## How to get stETH?
Since the stETH test token is not officially deployed on the Sepolia network, we will use a copy of this token with the core functionality that we have deployed.

We need to go to the [stETH](https://sepolia.etherscan.io/address/0xEE3fc2711cBB17B26747048c177698398c9a95ce#writeContract) contract, open the “Contract” tab, then the “Write Contract” tab. Don't forget to connect your wallet, which should have enough native token to pay for gas.

![stETHContract](https://github.com/antonbosss/fantastic-bassoon/blob/SepoliaTestnetGuide/stETH-580x648.png)

It is necessary to select the `mint()` function that will mint the required number of stETH. 
As parameters:
- `account_`: address to which tokens will be credited
- `amount_`: amount of tokens in WEI, instead of ETH. You can use this unit converter calculator https://eth-converter.com to help you. For instance, if you need 0.01 stETH, that equals 10000000000000000 WEI. 

In the example in the picture, 100 stETH (indicated in WEI) is minted to the address 0xa4DB...2259.

And finally we need to click “Write” and confirm a transaction in the wallet.


## How to check stETH balance?
We need to go to the [stETH](https://sepolia.etherscan.io/address/0xEE3fc2711cBB17B26747048c177698398c9a95ce#readContract) contract, open the “Contract” tab, then the “Read Contract” tab. Don't forget to connect your wallet, which should have enough native token to pay for gas.

![stETHContract](https://github.com/antonbosss/fantastic-bassoon/blob/SepoliaTestnetGuide/check-stETH.png)

It is necessary to call the function `balanceOf()` and specify in the `account_` field your address. As a result, we will find out how many tokens are on the wallet.
In the example on the picture, the 0xa4DB...2259 address has 1000 stETH indicated in WEI.

Another way of checking is to add stETH token in your web3 wallet. For Metamask wallet, please follow steps from this [guide](https://support.metamask.io/hc/en-us/articles/360015489031-How-to-display-tokens-in-MetaMask#h_01FWH492CHY60HWPC28RW0872H) and fill stETH token’s contract address `0xEE3fc2711cBB17B26747048c177698398c9a95ce`


## How to deposit stETH into the contract?
We need to go to the [stETH](https://sepolia.etherscan.io/address/0xEE3fc2711cBB17B26747048c177698398c9a95ce#writeContract) contract, open the “Contract” tab, then the “Write Contract” tab. Don't forget to connect your wallet, which should have enough native token to pay for gas.

![stETHContract](https://github.com/antonbosss/fantastic-bassoon/blob/SepoliaTestnetGuide/stethapproval.png)

Before contributing, we need to give the distribution contract an "approval" to transfer our stETH tokens. It is necessary to select the `approve()` function that will add allowance for Distribution contract. As parameters:
- `spender`: Distribution contract address - `0x98a8c301F3B168daCD0B054dc06A15c778F12D6e`
- `amount`: amount of tokens in WEI. Should be more or equal to the deposited amount. You can use this unit converter calculator https://eth-converter.com to help you.

Click “Write” and confirm a transaction.

Then, we need to go to the [Distribution](https://sepolia.etherscan.io/address/0x98a8c301F3B168daCD0B054dc06A15c778F12D6e#writeProxyContract) contract, open the “Contract” tab, then the “Write as Proxy” tab. Don't forget to connect your wallet, which should have enough native token to pay for gas.

![DistributionContract](https://github.com/antonbosss/fantastic-bassoon/blob/SepoliaTestnetGuide/stake.png)

It is necessary to select the `stake()` function that will deposit stETH tokens to the smart contract. As parameters:
- `poolId_`: pool identifier, allowed only existed and public pools; for testing purpose enter “0”;
- `amount_`: amount of tokens in WEI. (10 stETH in this example).

Click “Write” and confirm a transaction.


## How can I get information about how much I have deposited? What is the amount of rewards earned?
We need to go to the [Distribution](https://sepolia.etherscan.io/address/0x98a8c301F3B168daCD0B054dc06A15c778F12D6e#readProxyContract) contract, open the “Contract” tab, then the “Read as Proxy” tab. Don't forget to connect your wallet, which should have enough native token to pay for gas.

For this purpose we have two functions, the first shows how many rewards have already been earned, the rewards are earned every second.

![DistributionContract](https://github.com/antonbosss/fantastic-bassoon/blob/SepoliaTestnetGuide/rewards.png)

To check the amount of rewards, you need to call the `getCurrentUserReward` function, where you need to pass the group number and your address (or the address of the user you want to know about). As a result, we will find out how many rewards there are at the moment. Amount is in WEI and you can use this unit converter calculator https://eth-converter.com to help you.

The second function will show how many tokens have been invested by the user, the parameters are similar to the first function call. The name of the function is `usersData()`.

![DistributionContract](https://github.com/antonbosss/fantastic-bassoon/blob/SepoliaTestnetGuide/stakedamount.png)


## How to withdraw stETH from the contract?
We need to go to the [Distribution](https://sepolia.etherscan.io/address/0x98a8c301F3B168daCD0B054dc06A15c778F12D6e#writeProxyContract) contract, open the “Contract” tab, then the “Write as Proxy” tab. Don't forget to connect your wallet, which should have enough native token to pay for gas.

![DistributionContract](https://github.com/antonbosss/fantastic-bassoon/blob/SepoliaTestnetGuide/withdraw.png)

It is necessary to select the `withdraw()` function that will withdraw the required number of stETH. As parameters:
- `poolId_`: pool identifier; enter "0" for test purpose;
- `amount_`: amount of tokens in WEI.

Click “Write” and confirm a transaction.


## How to claim rewards?
We need to go to the [Distribution](https://sepolia.etherscan.io/address/0x98a8c301F3B168daCD0B054dc06A15c778F12D6e#writeProxyContract), open the “Contract” tab, then the “Write as Proxy” tab. Don't forget to connect your wallet, which should have enough native token to pay for gas.

![DistributionContract](https://github.com/antonbosss/fantastic-bassoon/blob/SepoliaTestnetGuide/claim.png)

The mint of the MOR token takes place on the Arbitrum Sepolia network, so we need a Layer Zero bridge to help us do this. 

All the user needs to do is to call the `claim()` function and specify the following parameters:
- `claim`: here you need to specify the amount of native token in ETH that you will send with the transaction and that will be used as payment for the gas for a mint on the destination network. You can specify more, the remainder will be returned to the sender.
- `poolId_`: pool identifier; enter "0" for test purpose;
- `user_`: the address of the user for whom the tokens will be minted.
  
Click “Write” and confirm a transaction.

Great, our rewards are now in the form of a MOR token on Arbitrum Sepolia, you can import the token address `0xe6D01D086a844a61641C75f1BCA572e7aa70e154` to your list in metamask using this [guide](https://support.metamask.io/hc/en-us/articles/360015489031-How-to-display-tokens-in-MetaMask#h_01FWH492CHY60HWPC28RW0872H) or check your balance via smart contract as we did with stETH token.


## How to get Arbitrum Sepolia ETH?
To start we should have installed Metamask or another web3 wallet. Then we need to add Arbitrum Sepolia manually or using [Chainlist](https://chainlist.org/?testnets=true&search=arbitrum+sepolia) and clicking “Add to Metamask”

The next step is to fund your address with Arbitrum Sepolia ETH. You may use faucets like https://faucet.quicknode.com/arbitrum/sepolia or https://faucet.triangleplatform.com/arbitrum/sepolia to get some for paying fees.

**In case you are interested in more in depth testnet guidance, please follow the [link](https://docs.google.com/document/d/1DbNx-CBpHjFUvIhbKHJSOshCKNTWlng7SeLzzn95AKY/edit)** 


