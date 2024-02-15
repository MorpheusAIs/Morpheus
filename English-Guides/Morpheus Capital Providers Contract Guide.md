# The purpose of the guide is to pass you through the process of direct interaction with the Morpheus Capital Providers Distribution Contract 

## Table of contents
1) Smart Contracts Addresses (Ethereum mainnet).
2) How to get stETH?
3) How to deposit stETH into the contract?
4) What is the amount of MOR rewards earned? 
5) How can I get information about how much I have deposited?
6) How to withdraw stETH from the contract?


## Smart Contracts Addresses (Ethereum mainnet)
- Morpheus Distribution Contract: [0x47176B2Af9885dC6C4575d4eFd63895f7Aaa4790](https://etherscan.io/address/0x47176B2Af9885dC6C4575d4eFd63895f7Aaa4790) 
- stETH Contract: [0xae7ab96520de3a18e5e111b5eaab095312d7fe84](https://etherscan.io/address/0xae7ab96520de3a18e5e111b5eaab095312d7fe84)

## How to get stETH?
First a user must get staked ETH from [Lido](https://lido.fi/). You can easily get this by swapping ETH for stETH on the Ethereum mainnet by following instructions at their website.  

A user may also buy stETH on different exchanges that support it.  

## How to deposit stETH into the contract?
You need to go to the [stETH](https://etherscan.io/address/0xae7ab96520de3a18e5e111b5eaab095312d7fe84#writeProxyContract) contract, open the “Contract” tab, then the “Write as Proxy” tab. Don't forget to connect your wallet, which should have enough native token to pay for gas.

![stETHContract](https://github.com/antonbosss/fantastic-bassoon/blob/main/MorpheusGuide/approval.png)

Before contributing, you need to give the distribution contract an "approval" to transfer your stETH tokens. It is necessary to select the `approve()` function that will add allowance for Distribution contract.  
As parameters:
- `spender`: **Distribution contract** address - `0x47176B2Af9885dC6C4575d4eFd63895f7Aaa4790`
- `amount`: amount of tokens in WEI. Should be more or equal to the deposited amount. You can use this unit converter calculator https://eth-converter.com to help you. In the example on picture, it's 1ETH in WEI.

Click “**Write**” and confirm a transaction.

Then, you need to go to the [Distribution](https://etherscan.io/address/0x47176B2Af9885dC6C4575d4eFd63895f7Aaa4790#writeProxyContract) contract, open the “Contract” tab, then the “Write as Proxy” tab.   
Don't forget to connect your wallet, which should have enough native token to pay for gas.

![DistributionContract](https://github.com/antonbosss/fantastic-bassoon/blob/main/MorpheusGuide/deposit.png)

It is necessary to select the `stake()` function that will deposit stETH tokens to the smart contract.   
As parameters:
- `poolId_`: pool identifier, allowed only existed and public pools; enter `“0”`;
- `amount_`: amount of tokens in WEI. (the same or less than amount you approved)

Click “**Write**” and confirm a transaction.


## What is the amount of MOR rewards earned? 
You need to go to the [Distribution](https://etherscan.io/address/0x47176B2Af9885dC6C4575d4eFd63895f7Aaa4790#readProxyContract) contract, open the “Contract” tab, then the “Read as Proxy” tab. Don't forget to connect your wallet, which should have enough native token to pay for gas.

![DistributionContract](https://github.com/antonbosss/fantastic-bassoon/blob/main/MorpheusGuide/rewards.png)

The rewards are earned every block and to check the amount, you need to call the `getCurrentUserReward` function, where you need to enter pool number (`0`) and your address (or the address of the user you want to know about). Click "**Query**". As a result, you will find out how many rewards there are at the moment. Amount is in WEI and you can use this unit converter calculator https://eth-converter.com to help you. 


## How can I get information about how much I have deposited? 
The second function will show how many tokens have been invested by the user, the parameters are similar to the previous function call. The name of the function is `usersData()`. Click "**Query**". Your deposited amount is indicated in WEI next to `deposited` line.

![DistributionContract](https://github.com/antonbosss/fantastic-bassoon/blob/main/MorpheusGuide/deposited.png)


## How to withdraw stETH from the contract?
`Reminder: you can withdraw funds no earlier than 7 days after the deposit`  

You need to go to the [Distribution](https://etherscan.io/address/0x47176B2Af9885dC6C4575d4eFd63895f7Aaa4790#writeProxyContract) contract, open the “Contract” tab, then the “Write as Proxy” tab. Don't forget to connect your wallet, which should have enough native token to pay for gas.

![DistributionContract](https://github.com/antonbosss/fantastic-bassoon/blob/main/MorpheusGuide/withdraw.png)

It is necessary to select the `withdraw()` function that will withdraw the required number of stETH. 
As parameters:
- `poolId_`: pool identifier; enter "0" for test purpose;
- `amount_`: amount of tokens in WEI. You can use this unit converter calculator https://eth-converter.com. In the example on the picture, 0.1 stETH indicated in WEI.

Click “**Write**” and confirm a transaction.
