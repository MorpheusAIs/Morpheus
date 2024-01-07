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

- stETH Contract: [0xae7ab96520DE3A18E5e111B5EaAb095312D7fE84](https://goerli.etherscan.io/address/0x1643e812ae58766192cf7d2cf9567df2c37e9b7f)

## Part 1: Obtaining goETH
- To start a person should have installed Metamask or another web3 wallet they are comfortable using. You will need to go to network settings which by default is usually set to Ethereum, then choose the Goerli testnet as the network and create a Goerli address/account. 

- The next step is to fund your address with goETH. You may use a website like https://goerli-faucet.pk910.de/#/ to earn goETH if you are using a fresh address.

- There are lots of other faucets that can easily be found for the Goerli testnet but usually require an address that has been active on the main Ethereum network. 

## Part 2: Converting goETH to stETH 

-  Next, you will need to convert your goETH into Goerli stETH. You can do this by visiting https://stake.testnet.fi/. You will be able to load so goETH and swap it for stETH in just a few clicks. (Note: This site is currently very low on stETH at the time of writing this tutorial and might only have dust to exchange. Please leave some for others.)

- You may also be able to find small amounts of stETH on [Uniswap.](https://app.uniswap.org/swap?outputCurrency=0x1643E812aE58766192Cf7D2Cf9567dF2C37e9B7F&chain=goerli) 

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

- Again enter "0" in the `poolId_ (uint256)` field. Enter your address in the `_user (address)` field. Click "write".

## How to withdraw stETH?
- Available for public groups only. Specify the group ID, and the amount to withdraw. Users can withdraw all or part of it. If the withdrawal is partial, the remaining amount must not be less than the minimum amount specified for the group.
- When withdrawing, rewards are automatically credited to the user's wallet.
![SmartContractExample6](https://github.com/jabo38/morpheus-images/assets/10395907/579b7d74-8526-45de-a531-2df4c965c12a)

- In section 13, you will need to enter "0" in the `poolId_ (uint256)` and the amount you want to withdraw in the `_amount (uint256)` field. This will be in WEI again, so feel free to use https://eth-converter.com again. 


## Version Two of the Guide:
https://docs.google.com/document/d/1DbNx-CBpHjFUvIhbKHJSOshCKNTWlng7SeLzzn95AKY/edit?usp=sharing

## Morpheus Smart Contract Testing Guide 2

### How do test the functionality?
In this step-by-step tutorial, we can check:
functionality of the Distribution contract;
Layer Zero bridge;
Arbitrum bridge;
mint of tokens on the Arbitrum network;
transfer of stETH from the Ethereum Sepolia network to the wstETH at the Arbitrum Sepolia network.

Since the stETH test token is not officially deployed on the Sepolia network, we will use a copy of this token with the core functionality that we have deployed.

### How to get stETH?
We need to go to the stETH contract, open the “Contract” tab, then the “Write Contract” tab. Don't forget to connect your wallet, which should have enough native token to pay for gas.

It is necessary to select the mint() function that will mint the required number of stETH. As parameters:
account_: address to which tokens will be credited
amount_: amount of tokens in wei. 1 stETH = 1 * 10^18.

In the example in the picture, 100 stETH is minted to the address 0x19ec...53.

## How to check stETH balance?
We need to go to the stETH contract, open the “Contract” tab, then the “Read Contract” tab. Don't forget to connect your wallet, which should have enough native token to pay for gas.

It is necessary to call the function balanceOf() and specify in the parameters the address where the tokens should be located. As a result, we will find out how many tokens are on the wallet.

In the example on the picture, the 0x19ec...53 address has 6000 * 10^18 stETH in wei, which is equivalent to 6000 stETH.


## How can I find out which pools are available for deposit?
We need to go to the Deposit contract, open the “Contract” tab, then the “Read as Proxy” tab. Don't forget to connect your wallet, which should have enough native token to pay for gas.

It is necessary to call the pools() function and pass the number of the group. All groups are numbered starting from zero. If a group exists, you will get information on this group.

The example shows a group with the following parameters:
payoutStart: timestamp, the time at which MOR rewards begin to be paid. All time fields are set in seconds. You can use this for timestamp calculation;
decreaseInterval: timestamp, the interval during which the MOR reward will be reduced. In the example it is one day, i.e. 86400 seconds;
withdrawLockPeriod: during this period, users will not be able to withdraw the token (stETH) after the distribution begins;
claimLockPeriod: during this period, users will not be able to claim the reward token (MOR) after the distribution begins;
isPublic: true or false, if true, the group is considered public. Users are allowed to deposit stETH in such groups. If false, such groups are closed to external users and the administrator himself specifies to whom to give what share of rewards;
initialReward: the initial amount of the reward in the group (MOR);
rewardDecrease: the amount of reward reduction per interval;
minimalStake: minimum amount of stETH that users can deposit in a group;
isPublic: indicates whether the group is available for deposits by any user. True - available for deposits.

Thus, we need to find an existing group with the isPublic: true parameter.

## How to deposit into a group?
We need to go to the stETH contract, open the “Contract” tab, then the “Write Contract” tab. Don't forget to connect your wallet, which should have enough native token to pay for gas.

It is necessary to select the approve() function that will add allowance for Distribution contracts to transfer our stETH tokens. As parameters:
spender: Distribution contract	    address;
amount: amount of tokens in wei. Should be more or equal to the deposited amount.

Then, we need to go to the Deposit contract, open the “Contract” tab, then the “Write as Proxy” tab. Don't forget to connect your wallet, which should have enough native token to pay for gas.

It is necessary to select the stake() function that will deposit stETH tokens to the smart contract. As parameters:
poolId_: pool identifier, allowed only existed and public pools;
amount_: amount of tokens in wei. (50 stETH in this example).

How can I get information about how much I have deposited? What is the amount of rewards earned?
We need to go to the Deposit contract, open the “Contract” tab, then the “Read as Proxy” tab. Don't forget to connect your wallet, which should have enough native token to pay for gas.

For this purpose we have two functions, the first shows how many rewards have already been earned, the rewards are earned every second.

To check the amount of rewards, you need to call the getCurrentUserReward function, where you need to pass the group number and your address (or the address of the user you want to know about). As a result, we will find out how many rewards there are at the moment.

The second function will show how many tokens have been invested by the user, the parameters are similar to the first function call. The name of the function is usersData().

## How to withdraw from a group?
We need to go to the Deposit contract, open the “Contract” tab, then the “Write as Proxy” tab. Don't forget to connect your wallet, which should have enough native token to pay for gas.

It is necessary to select the withdraw() function that will withdraw the required number of stETH. As parameters:
poolId_: pool identifier;
amount_: amount of tokens in wei. 1 stETH = 1 * 10^18.

## How to claim rewards?
We need to go to the Deposit contract, open the “Contract” tab, then the “Write as Proxy” tab. Don't forget to connect your wallet, which should have enough native token to pay for gas.
The mint of the MOR token takes place on a different network, so we need a Layer Zero bridge to help us do this. 

All the user needs to do is to call the claim() function and specify the following parameters:
claim: here you need to specify the amount of native token that you will send with the transaction and that will be used as payment for the gas for a mint on the destination network. You can specify more, the remainder will be returned to the sender.
poolId_: pool identifier;
user_: the address of the user for whom the tokens will be minted; 

Great, our rewards are now in the form of a MOR token on Arbitrum Sepolia, you can add the token to your list in metamask or check your balance via smart contract.

We need to go to the MOR contract, open the “Contract” tab, then the “Read Contract” tab. Don't forget to connect your wallet, which should have enough native token to pay for gas.


## How do I transfer stETH that has accumulated as rewards?

We need to transfer stETH to the Arbitrum network, for this purpose stETH is turned into wstETH on the current network, then it is sent to the Arbitrum bridge and appears on the other network. 

Overall this may look complicated, but only a couple of transactions are needed. Remember that only the contract administrator can call the transaction to transfer stETH to Arbitrum. 

We need to go to the Deposit contract, open the “Contract” tab, then the “Read as Proxy” tab. Don't forget to connect your wallet, which should have enough native token to pay for gas.

It is necessary to select the overplus() function that will show how many stETH is ready for transfer to Arbitrum Seploia. 

To simulate this process, you need to go to the stETH contract, find out the value of totalPooledEther(), and then increase it in the same contract. In this way you can simulate the increase of overplus.

Then it is necessary to call the function bridgeOverplus() on the Deposit contract, this call will transfer stETH in overplus to the Arbitrum Seploia.
As parameters:
bridgeOverplus: native value for tx payment on L2;
gasLimit_: gas limit for the L2 transaction.
maxFeePerGas_: max fee per gas for the L2 transaction;
maxSubmissionCost: max	 submission cost for the L2 transaction


Here is an address of wstETH receiver on the Arbitrum Sepolia.



## How do test the Uniswap functionality?
To test Uniswap, wstETH and MOR smart contracts were deployed at the test site. We will simulate receiving wstETH on the target contract by normal transfer.

## How to get wstETH?
Just repeat the steps that were in the "How to get stETH?" section for wstETH token. Then perform a transfer to the smart contract address L2TokenReceiver.


## How to increase liquidity on Uniswap?
We need to go to the L2TokenReceiver contract, open the “Contract” tab, then the “Write as Proxy” tab. Don't forget to connect your wallet, which should have enough native token to pay for gas.

Then it is necessary to call the function swap(), this call will exchange wstETH on MOR and send in to the current contract.
As parameters:
amountIn: amount of wstETH to exchange;
amountOutMinimum: minimum amount of MOR that should be exchanged.

Then it is necessary to call the function increaseLiquidity(), this call will increase liquidity for some liquidity pool.
As parameters:
tokenId: liquidity pool ID;
depositTokenAmountAdd_: stETH	 amount to add.
rewardTokenAmountAdd_: MOR 	amount to add.

Deployed contracts:
Ethereum Sepolia
Distribution: 0x0d9e3455d964029796e4b2b921ee27871125c21d;
stETH: 0xe6D01D086a844a61641C75f1BCA572e7aa70e154;
L1Sender: 0x75DA25c267a328B6b5c53e019D09ACEDB566c94F;

Arbitrum Sepolia
MOR: 0xe6d01d086a844a61641c75f1bca572e7aa70e154;
L2MessageReceiver: 0x91867f35c584e2e10b3dc9698be076ca2cf8191a

Polygon Mumbai
wstETH: 0x87584394dC5Eb028EB1A4CeaF5646DB3Fd3B2d26;
MOR: 0xB0b5Fcb5D4Ac4cF35ADbe86060563669D21D2b6E;
L2TokenReceiver: 0x62f66f4f3414672a698b34edf642641829ee211a;

## OLD DOC

## Capital Contribution  token (stETH)
https://docs.lido.fi/guides/lido-tokens-integration-guide/#steth.
 
Used to deposit in pools.

To obtain stETH, you can use the resource https://stake.testnet.fi or find it on Uniswap.

Distribution
To read information from the smart contract and interact with it, you need to go to the Read or Write section and connect your wallet (administrator's wallet in case of editing).

Ownership
A contract has an administrator, he is responsible for creating and editing groups and updating smart contracts.
 
How do I find out the current contract administrator?
Keep in mind that in order to test the administrator functionality, you must have administrator rights.


How do I transfer administrator privileges to another address?


Creation of new groups

Group - a set of rules by which funds will be distributed. The group has the following set of parameters:
payoutStart: timestamp, the time at which MOR rewards begin to be paid. All time fields are set in seconds. You can use this for timestamp calculation;
decreaseInterval: timestamp, the interval during which the MOR reward will be reduced. In your examples it is one day, i.e. 86400 seconds. All time fields are set in seconds;
withdrawLockPeriod: during this period, users will not be able to withdraw rewards in groups. It is set in seconds. For example, if the value is set to 3600 seconds, users will not be able to withdraw rewards after the start for one hour;
claimLockPeriod: during this period, users will not be able to withdraw funds in groups. It is set in seconds. For example, if the value is set to 3600 seconds, users will not be able to withdraw the Capital Contribution token after the start for one hour;
isPublic: true or false, if true, the group is considered public. Users are allowed to deposit stETH in such groups. If false, such groups are closed to external users and the administrator himself specifies to whom to give what share of rewards;
initialReward: the initial amount of the award in the group. From your example it is 3456 MOR;
rewardDecrease: the amount of reward reduction per interval. From your example it is 2.469×0.24 (24%) MOR for the Community group;
minimalStake: minimum amount of stETH that users can deposit in a group;

For example for Community group


Editing of existed groups

You can edit existing groups, change any parameters in them. But we recommend being very careful when changing the type of group (public or private). This can lead to problems if the group was private and became public with users in the private group.
Parameters when editing a group are the same as when creating it, but you must additionally specify the group identifier.


Add users to private groups

This functionality can only be performed by an administrator. The following must be specified:
poolId: the identifier of the private group;
users: addresses of users;
amounts: percentage that users will receive;

For example for Сoders group


Where:
poolId: the identifier of the private group;
users: addresses of users, 0x123 (User A), 0x123 (User B);
amounts: 60% * 10^18 = 60000000000000000000 and 40% * 10^18 = 40000000000000000000;

This function can only be called for private groups. It should be taken into account that if you want to change the proportion of payments for a large number of addresses in one transaction, for example, for 40 users at once, the transaction may simply not fit into the block by gas. In this case it will be necessary to suspend payment in groups, make the change of proportions, and then resume payment.

Depositing in a group
Depositing is available for public groups. The user should specify the amount of tokens to deposit, but not less than the minimum for the group, and then specify the group ID.

Users can also increase the deposited amount by calling this function repeatedly.

How can I find out about the amount of deposited and accrued reward?
To do this, we need to call two functions.

In the first one, specify the user address and group number. As a result, we learn about the records by user, but we are interested in the top line, the volume of deposits.



The second function takes the same parameters as the first, but shows what reward the user currently has and what he can withdraw.

1999999999999999999 / 10^18 = 1,999999999999999999 MOR


How do I get rewards?
The user needs to invoke the reward function, in general anyone else can do it instead and pay the cost of the gas.
The user address and group ID are specified.



How to withdraw funds?
Available for public groups only. Specify the group ID, and the amount to withdraw. User can withdraw all or part of it. If the withdrawal is partial, the remaining amount must not be less than the minimum amount specified for the group.
When withdrawing, rewards are automatically credited to the user's wallet.



How do I know what is available for Uniswap?
To find out if the rewards from stETH are accrued by rebasing, you need to call the overplus function.


If the value is above 0, the rebasing was positive and we can swap stETH -> wstETH -> MOR -> burn().

To do this, the administrator calls the swapAndBurnOverplus function. This function specifies the minimum amount of MOR that will be obtained after swap stETH -> wstETH -> MOR

Result example: here.
