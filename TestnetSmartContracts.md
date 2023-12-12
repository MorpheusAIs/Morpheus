# Goerli Testnet Smart Contracts for Morpheus Capital Contributors

## Smart Contracts Addresses
- New MOR Token: 0x454AE850eE61a98BF16FABA3a73fb0dD02D75C40 
- Distribution: 0x850A65DA677264bbb7536f8446336C022eCc85Dc
- stETH Contract: 0x1643E812aE58766192Cf7D2Cf9567dF2C37e9B7F 

### Capital Contribution Token (stETH)
https://docs.lido.fi/guides/lido-tokens-integration-guide/#steth.
 
Used to add capital to pools.
To obtain stETH, you can use the resource https://stake.testnet.fi or find it on Uniswap.

## Distribution
To read information from the smart contract and interact with it, you need to go to the Read or Write section and connect your wallet.
![SmartContractExample1](https://github.com/MorpheusAIs/Morpheus/assets/1563345/739127b8-0a44-4112-94d9-2670442b9c09)

## Capital Contribution In A Group
Providing capital is available for public groups. The user should specify the amount of tokens to provide, but not less than the minimum for the group, and then specify the group ID.
![SmartContractExample2](https://github.com/MorpheusAIs/Morpheus/assets/1563345/972f94fb-1dc0-4d46-bddd-37cd92e27b5d)

Users can also increase the investment amount by calling this function repeatedly.

## How can I find out about the amount of tokens and accrued reward?
To do this, we need to call two functions.

In the first one, specify the user address and group number. As a result, we learn about the records by user, but we are interested in the top line, the volume of investments.
![SmartContractExample3](https://github.com/MorpheusAIs/Morpheus/assets/1563345/8137496d-cb1d-40c0-9b0b-1c9675241659)

The second function takes the same parameters as the first, but shows what reward the user currently has and what he can withdraw.

1999999999999999999 / 10^18 = 1,999999999999999999 MOR
![SmartContractExample4](https://github.com/MorpheusAIs/Morpheus/assets/1563345/ecbfa14d-c0ec-4f50-93de-c642b6cab041)

## How do I get rewards?
The user needs to invoke the reward function, in general anyone else can do it instead and pay the cost of the gas.
The user address and group ID are specified.
![SmartContractExample5](https://github.com/MorpheusAIs/Morpheus/assets/1563345/53db8ba8-62f6-43e3-8602-7774691f496d)

## How to withdraw funds?
Available for public groups only. Specify the group ID, and the amount to withdraw. User can withdraw all or part of it. If the withdrawal is partial, the remaining amount must not be less than the minimum amount specified for the group.
When withdrawing, rewards are automatically credited to the user's wallet.
![SmartContractExample6](https://github.com/MorpheusAIs/Morpheus/assets/1563345/89c4e407-d53c-4c37-9ffd-fe42dff00ce0)
