# Goerli Тестнет Смарт Контракты для поставщиков капитала в Morpheus

## Введение

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
- To start a person should have installed Metamask or another web3 wallet they are comfortable using. You will need to go to network settings which by default is usually set to Ethereum, then choose the Goerli testnet as the network and create a Goerli address/account. 

- The next step is to fund your address with goETH. You may use a website like https://goerli-faucet.pk910.de/#/ to earn goETH if you are using a fresh address.

- There are lots of other faucets that can easily be found for the Goerli testnet but usually require an address that has been active on the main Ethereum network. 

## Part 2: Converting goETH to stETH 

-  Next, you will need to convert your goETH into Goerli stETH. You can do this by visiting https://stake.testnet.fi/. You will be able to load so goETH and swap it for stETH in just a few clicks. (Note: This site is currently very low on stETH at the time of writing this tutorial and might only have dust to exchange. Please leave some for others.)

- You may also be able to find small amounts of stETH on Uniswap.

## Part 3: Interacting with the Morpheus Smart Contract 

- This will be done in multiple steps. We will first approve access to the contract, and next, we will deposit stETH to it. Later we will review how to claim and withdraw after an account has been staking for some time.   

## Connecting to Contract
To read information from the smart contract and interact with it, you need to go to the Read or Write section and connect your wallet.
![SmartContractExample1](https://github.com/MorpheusAIs/Morpheus/assets/1563345/739127b8-0a44-4112-94d9-2670442b9c09)
In this example we are going to "Contract", then to "Write as Proxy", and then to "Connect to Web3" to connect our web3 wallet. When connected the red indicator will turn green. Make sure the wallet address shown is the same as your Goerli testnet address. 

## Approval of Contract
- Before contributing, the user needs to give the distribution contract an "approval" that it will be able to transfer the user's funds.
- Example: https://goerli.etherscan.io/address/0x1643E812aE58766192Cf7D2Cf9567dF2C37e9B7F#writeProxyContract
![exampleofapprove](https://github.com/MorpheusAIs/Morpheus/assets/1563345/d51a84da-9f38-42a7-9fb4-2f9dd2edfcff)

- You will need to write in terms of WEI instead of ETH. You can use this unit converter calculator https://eth-converter.com to help you. For instance, if you have 0.01 stETH, that equals 10000000000000000 WEI. This calculated number should be entered into the `_amount (uint256)` field. Also, enter the Morpheus smart contract address 0x850A65DA677264bbb7536f8446336C022eCc85Dc in `_spender (address)` field. Click "write". 

## Capital Contribution 
- Providing capital is available for public groups. 
- The user should specify the amount of tokens to provide, but not less than the minimum for the group, and then specify the group ID.
- Example: https://goerli.etherscan.io/address/0x850A65DA677264bbb7536f8446336C022eCc85Dc#code
![SmartContractExample2](https://github.com/jabo38/morpheus-images/assets/10395907/b47c571b-e858-4c19-b73a-8ca8ef4acf8d) 


- Again, you will need to write in terms of WEI instead of stETH. You can use this unit converter calculator https://eth-converter.com to help you. For instance, if you have 0.01 stETH, that equals 10000000000000000 WEI which should be entered into the `_amount (uint256)` field. Also, enter "0" in the `poolId_ (uint256)` field. Click "write". 

- Users can also increase the investment amount by calling this function repeatedly.

## How do I get rewards?
- After staking for some time a user can claim MOR tokens!
- The user needs to invoke the reward function, in general anyone else can do it instead and pay the cost of the gas.
- The user address and group ID are specified.
![SmartContractExample5](https://github.com/jabo38/morpheus-images/assets/10395907/eeb443a5-d28a-460e-9fd0-477dcc663789)

- Again enter "0" in the `poolId_ (uint256)` field. Click "write". Enter your address in the `_user (address)` field. Click "write".

## How to withdraw stETH?
- Available for public groups only. Specify the group ID, and the amount to withdraw. Users can withdraw all or part of it. If the withdrawal is partial, the remaining amount must not be less than the minimum amount specified for the group.
- When withdrawing, rewards are automatically credited to the user's wallet.
![SmartContractExample6](https://github.com/jabo38/morpheus-images/assets/10395907/579b7d74-8526-45de-a531-2df4c965c12a)

- In section 13, you will need to enter "0" in the `poolId_ (uint256)` and the amount you want to withdraw in the `_amount (uint256)` field. This will be in WEI again, so feel free to use https://eth-converter.com again. 
