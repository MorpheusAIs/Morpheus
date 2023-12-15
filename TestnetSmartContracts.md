# Goerli Testnet Smart Contracts for Morpheus Capital Contributors

## Introduction

To participate in the Morpheus staking contract on the Goerli Testnet, there are roughly the following three parts:
1) Obtaining goETH
2) Converting goETH into Goerli stETH, then finally
3) A multistep process of connecting to the Morpheus contract 

## Smart Contracts Addresses
- New MOR Token: 0x454AE850eE61a98BF16FABA3a73fb0dD02D75C40 
- Link to Smart Contract Code on Etherscan: https://goerli.etherscan.io/address/0x454AE850eE61a98BF16FABA3a73fb0dD02D75C40#code

- Distribution: 0x850A65DA677264bbb7536f8446336C022eCc85Dc
- Link to Smart Contract Code on Etherscan: https://goerli.etherscan.io/address/0x850A65DA677264bbb7536f8446336C022eCc85Dc#code

- stETH Contract: 0x1643E812aE58766192Cf7D2Cf9567dF2C37e9B7F 

## Part 1: Obtaining goETH
To start. A person should have installed Metamask or another web3 wallet they are comfortable using. You will need to go to network settings which by default is usually set to Ethereum, then choose the Goerli testnet as the network and create a Goerli address/account. 

The next step is to fund your address with goETH. You may use a website like https://goerli-faucet.pk910.de/#/ to earn goETH if you are using a fresh address.

There are lots of other faucets that can easily be found for the Goerli testnet but usually require an address that has been active on the main Ethereum network. 

## Part 2: Converting go ETH to stETH 

-  Next, you will need to convert your goETH into Goerli stETH. You can do this by visiting https://stake.testnet.fi/. You will be able to load so goETH and swap it for stETH in just a few clicks. (Note: This site is currently very low on stETH at the time of writing this tutorial and might only have dust to exchange. Please leave some for others.)

- You may also be able to find small amounts of stETH on Uniswap.

## Part 3: Interacting with the Morpheus Smart Contract 

This will be done in multiple steps. We will first approve access to the contract, and next, we will deposit stETH to it. Later we will review how to claim and withdrawal after an account has been staking for some time.   

## Connecting to Contract
To read information from the smart contract and interact with it, you need to go to the Read or Write section and connect your wallet.
![SmartContractExample1](https://github.com/MorpheusAIs/Morpheus/assets/1563345/739127b8-0a44-4112-94d9-2670442b9c09)

## Approval of Contract
- Before contributing, the user needs to give the distribution contract an "approve" that it will be able to transfer the user's funds.
- Example: https://goerli.etherscan.io/address/0x1643E812aE58766192Cf7D2Cf9567dF2C37e9B7F#writeProxyContract
![exampleofapprove](https://github.com/MorpheusAIs/Morpheus/assets/1563345/d51a84da-9f38-42a7-9fb4-2f9dd2edfcff)

- You will need to write in terms of WEI instead of ETH. You can use this unit converter calculator https://eth-converter.com to help you. For instance, if you have 0.01 stETH, that equals 10000000000000000 WEI. This calculated number should be entered into the `_amount (uint256)` field. Also, enter your address in the `_spender (address)` field. Click "write". 

## Capital Contribution 
- Providing capital is available for public groups. 
- The user should specify the amount of tokens to provide, but not less than the minimum for the group, and then specify the group ID.
![SmartContractExample2](https://github.com/MorpheusAIs/Morpheus/assets/1563345/972f94fb-1dc0-4d46-bddd-37cd92e27b5d)

- Again, you will need to write in terms of WEI instead of ETH. You can use this unit converter calculator https://eth-converter.com to help you. For instance, if you have 0.01 stETH, that equals 10000000000000000 WEI which should be entered into the `_amount (uint256)` field. Also enter "0" in the `poolId_ (uint256)` field. Click "write". 

- Users can also increase the investment amount by calling this function repeatedly.

## How do I get rewards?
- After staking for some time a user can claim MOR tokens!
- The user needs to invoke the reward function, in general anyone else can do it instead and pay the cost of the gas.
- The user address and group ID are specified.
![SmartContractExample5](https://github.com/MorpheusAIs/Morpheus/assets/1563345/53db8ba8-62f6-43e3-8602-7774691f496d)

- Again enter "0" in the `poolId_ (uint256)` field. Click "write". Enter your address in the `_user (address)` field. Click "write".

## How to withdraw funds?
- Available for public groups only. Specify the group ID, and the amount to withdraw. User can withdraw all or part of it. If the withdrawal is partial, the remaining amount must not be less than the minimum amount specified for the group.
- When withdrawing, rewards are automatically credited to the user's wallet.
![SmartContractExample6](https://github.com/MorpheusAIs/Morpheus/assets/1563345/89c4e407-d53c-4c37-9ffd-fe42dff00ce0)

- In section 13, you will need to enter "0" in the `poolId_ (uint256)` and the amount you want to withdraw in the `_amount (uint256)` field. This will be in WEI again, so feel free to use https://eth-converter.com again. 

## How can I find out about the amount of tokens and accrued reward?
To do this, we need to call two functions.

In the first one, specify the user address and group number. As a result, we learn about the records by user, but we are interested in the top line, the volume of investments.
![SmartContractExample3](https://github.com/MorpheusAIs/Morpheus/assets/1563345/8137496d-cb1d-40c0-9b0b-1c9675241659)

The second function takes the same parameters as the first, but shows what reward the user currently has and what he can withdraw.

1999999999999999999 / 10^18 = 1,999999999999999999 MOR
![SmartContractExample4](https://github.com/MorpheusAIs/Morpheus/assets/1563345/ecbfa14d-c0ec-4f50-93de-c642b6cab041)


