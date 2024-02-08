# You can use this guide for direct interaction with the Distribution Contract in case you can't deposit through the website.


## Smart Contracts Addresses
**Ethereum**
- Morpheus Distribution Contract: [0x47176B2Af9885dC6C4575d4eFd63895f7Aaa4790](https://etherscan.io/address/0x47176B2Af9885dC6C4575d4eFd63895f7Aaa4790) 
- stETH: [0xae7ab96520de3a18e5e111b5eaab095312d7fe84](https://etherscan.io/address/0xae7ab96520de3a18e5e111b5eaab095312d7fe84)

## How to deposit stETH into the contract?
We need to go to the [stETH](https://etherscan.io/address/0xae7ab96520de3a18e5e111b5eaab095312d7fe84#writeProxyContract) contract, open the “Contract” tab, then the “Write as Proxy” tab. Don't forget to connect your wallet, which should have enough native token to pay for gas.

![stETHContract](https://github.com/antonbosss/fantastic-bassoon/blob/main/MorpheusGuide/approval.png)

Before contributing, we need to give the distribution contract an "approval" to transfer our stETH tokens. It is necessary to select the `approve()` function that will add allowance for Distribution contract. As parameters:
- `spender`: Distribution contract address - `0x47176B2Af9885dC6C4575d4eFd63895f7Aaa4790`
- `amount`: amount of tokens in WEI. Should be more or equal to the deposited amount. You can use this unit converter calculator https://eth-converter.com to help you. In the example on picture, it's 1ETH.

Click “Write” and confirm a transaction.

Then, we need to go to the [Distribution](https://etherscan.io/address/0x47176B2Af9885dC6C4575d4eFd63895f7Aaa4790#writeProxyContract) contract, open the “Contract” tab, then the “Write as Proxy” tab. Don't forget to connect your wallet, which should have enough native token to pay for gas.

![DistributionContract](https://github.com/antonbosss/fantastic-bassoon/blob/main/MorpheusGuide/deposit.png)

It is necessary to select the `stake()` function that will deposit stETH tokens to the smart contract. 
As parameters:
- `poolId_`: pool identifier, allowed only existed and public pools; enter “0”;
- `amount_`: amount of tokens in WEI. (the same or less than amount you approved)

Click “Write” and confirm a transaction.
