# Руководство по тестированию смарт контрактов для поставщиков капитала в сетях Sepolia и Arbitrum Sepolia


## Вступление
Для тестирования смарт контрактов для поставщиков капитала в сетях 
Sepolia и Arbitrum Sepolia, нужно пройти несколько основных шагов:
1) Получение SepoliaETH
2) Получение stETH в сети Ethereum Sepolia
3) Депозит stETH в контракт распределения наград в сeти Ethereum Sepolia
4) Получение наград в токене MOR в сети Arbitrum Sepolia с использованием Layer Zero bridge


## Адреса смарт контрактов
Ethereum Sepolia 
- Контракт распределения наград: [0x0d9e3455d964029796e4b2b921ee27871125c21d](https://sepolia.etherscan.io/address/0x0d9e3455d964029796e4b2b921ee27871125c21d#code) 
- Контракт токена stETH: [0xe6D01D086a844a61641C75f1BCA572e7aa70e154](https://sepolia.etherscan.io/token/0xe6D01D086a844a61641C75f1BCA572e7aa70e154)
  
Arbitrum Sepolia 
- Контракт токена MOR: [0xe6d01d086a844a61641c75f1bca572e7aa70e154](https://sepolia.arbiscan.io/address/0xe6d01d086a844a61641c75f1bca572e7aa70e154#code)


## Как получить Sepolia ETH?
- Для начала нам необходим установленный Metamask или другой кошелек web3. Нужно перейти к настройкам сети, которые по умолчанию обычно установлены на Ethereum, затем выбрать в качестве сети тестовую сеть Sepolia.
- Следующий шаг это депозит SepoliaETH, для этого вы можете использовать веб-сайты краны, такие как https://sepolia-faucet.pk910.de/# или https://sepoliafaucet.com/.
- Существует множество других кранов, которые можно легко найти, но обычно им требуется чтобы у вас был активный адрес в основной сети Ethereum.


## Как получить stETH?
Поскольку тестовый токен stETH официально не развернут в сети Sepolia, мы будем использовать копию этого токена с необходимыми для тестирования основными функциями.

Для этого необходимо перейти к контракту [stETH](https://sepolia.etherscan.io/address/0xe6D01D086a844a61641C75f1BCA572e7aa70e154#writeContract) и открыть вкладку “Contract”, затем нажать на “Write Contract”. Не забудьте подключить свой кошелек, в котором должен быть достаточный баланс нативного токена для оплаты комиссии.

![stETHContract](https://github.com/antonbosss/fantastic-bassoon/blob/SepoliaTestnetGuide/stETH-580x648.png)

Далее необходимо выбрать функцию `mint()`, с помощью которой мы сможем отчеканить необходимое количество stETH. 
В качестве параметров необходимо указать:
- `account_`: адрес на который будут зачислены токены
- `amount_`: количество токенов в WEI, вместо ETH. Для конвертации, вы можете использовать данный калькулятор https://eth-converter.com to help you. Например, если вам необходиы 0,01 stETH, то эта сумма будет равняться 10000000000000000 WEI.

На примере выше, было отчеканено 100 stETH (отображение в WEI) на адрес 0xa4DB...2259.

После выполнения всех действий нажмите на кнопку “Write” и подтвердите транзакцию в кошельке.


## How to check stETH balance?
We need to go to the [stETH](https://sepolia.etherscan.io/address/0xe6D01D086a844a61641C75f1BCA572e7aa70e154#readContract) contract, open the “Contract” tab, then the “Read Contract” tab. Не забудьте подключить свой кошелек, в котором должен быть достаточный баланс нативного токена для оплаты комиссии.

![stETHContract](https://github.com/antonbosss/fantastic-bassoon/blob/SepoliaTestnetGuide/check-stETH.png)

It is necessary to call the function `balanceOf()` and specify in the `account_` field your address. As a result, we will find out how many tokens are on the wallet.
In the example on the picture, the 0xa4DB...2259 address has 1000 stETH indicated in WEI.

Another way of checking is to add stETH token in your web3 wallet. For Metamask wallet, please follow steps from this [guide](https://support.metamask.io/hc/en-us/articles/360015489031-How-to-display-tokens-in-MetaMask#h_01FWH492CHY60HWPC28RW0872H) and fill stETH token’s contract address `0xe6D01D086a844a61641C75f1BCA572e7aa70e154`

Для отображения информации, нажмите на кнопку "Query"

## How to deposit stETH into the contract?
We need to go to the [stETH](https://sepolia.etherscan.io/address/0xe6D01D086a844a61641C75f1BCA572e7aa70e154#writeContract) contract, open the “Contract” tab, then the “Write Contract” tab. Не забудьте подключить свой кошелек, в котором должен быть достаточный баланс нативного токена для оплаты комиссии.

![stETHContract](https://github.com/antonbosss/fantastic-bassoon/blob/SepoliaTestnetGuide/stethapproval.png)

Before contributing, we need to give the distribution contract an "approval" to transfer our stETH tokens. It is necessary to select the `approve()` function that will add allowance for Distribution contract. As parameters:
- `spender`: Distribution contract address - `0x0d9e3455d964029796e4b2b921ee27871125c21d`
- `amount`: amount of tokens in WEI. Should be more or equal to the deposited amount. You can use this unit converter calculator https://eth-converter.com to help you.

После выполнения всех действий нажмите на кнопку “Write” и подтвердите транзакцию в кошельке.

Then, we need to go to the [Distribution](https://sepolia.etherscan.io/address/0x0d9e3455d964029796e4b2b921ee27871125c21d#writeProxyContract) contract, open the “Contract” tab, then the “Write as Proxy” tab. Не забудьте подключить свой кошелек, в котором должен быть достаточный баланс нативного токена для оплаты комиссии.

![DistributionContract](https://github.com/antonbosss/fantastic-bassoon/blob/SepoliaTestnetGuide/stake.png)

It is necessary to select the `stake()` function that will deposit stETH tokens to the smart contract. As parameters:
- `poolId_`: pool identifier, allowed only existed and public pools; for testing purpose enter “0”;
- `amount_`: amount of tokens in WEI. (10 stETH in this example).

После выполнения всех действий нажмите на кнопку “Write” и подтвердите транзакцию в кошельке.


## How can I get information about how much I have deposited? What is the amount of rewards earned?
We need to go to the [Distribution](https://sepolia.etherscan.io/address/0x0d9e3455d964029796e4b2b921ee27871125c21d#readProxyContract) contract, open the “Contract” tab, then the “Read as Proxy” tab. Не забудьте подключить свой кошелек, в котором должен быть достаточный баланс нативного токена для оплаты комиссии.

For this purpose we have two functions, the first shows how many rewards have already been earned, the rewards are earned every second.

![DistributionContract](https://github.com/antonbosss/fantastic-bassoon/blob/SepoliaTestnetGuide/rewards.png)

To check the amount of rewards, you need to call the `getCurrentUserReward` function, where you need to pass the group number and your address (or the address of the user you want to know about). As a result, we will find out how many rewards there are at the moment. Amount is in WEI and you can use this unit converter calculator https://eth-converter.com to help you.

Для отображения информации, нажмите на кнопку "Query"

The second function will show how many tokens have been invested by the user, the parameters are similar to the first function call. The name of the function is `usersData()`.

![DistributionContract](https://github.com/antonbosss/fantastic-bassoon/blob/SepoliaTestnetGuide/stakedamount.png)


## How to withdraw stETH from the contract?
We need to go to the [Distribution](https://sepolia.etherscan.io/address/0x0d9e3455d964029796e4b2b921ee27871125c21d#writeProxyContract) contract, open the “Contract” tab, then the “Write as Proxy” tab. Не забудьте подключить свой кошелек, в котором должен быть достаточный баланс нативного токена для оплаты комиссии.

![DistributionContract](https://github.com/antonbosss/fantastic-bassoon/blob/SepoliaTestnetGuide/withdraw.png)

It is necessary to select the `withdraw()` function that will withdraw the required number of stETH. As parameters:
- `poolId_`: pool identifier; enter "0" for test purpose;
- `amount_`: amount of tokens in WEI.

После выполнения всех действий нажмите на кнопку “Write” и подтвердите транзакцию в кошельке.


## How to claim rewards?
We need to go to the [Distribution](https://sepolia.etherscan.io/address/0x0d9e3455d964029796e4b2b921ee27871125c21d#writeProxyContract), open the “Contract” tab, then the “Write as Proxy” tab. Не забудьте подключить свой кошелек, в котором должен быть достаточный баланс нативного токена для оплаты комиссии.

![DistributionContract](https://github.com/antonbosss/fantastic-bassoon/blob/SepoliaTestnetGuide/claim.png)

The mint of the MOR token takes place on the Arbitrum Sepolia network, so we need a Layer Zero bridge to help us do this. 

All the user needs to do is to call the `claim()` function and specify the following parameters:
- `claim`: here you need to specify the amount of native token in ETH that you will send with the transaction and that will be used as payment for the gas for a mint on the destination network. You can specify more, the remainder will be returned to the sender.
- `poolId_`: pool identifier; enter "0" for test purpose;
- `user_`: the address of the user for whom the tokens will be minted.
  
После выполнения всех действий нажмите на кнопку “Write” и подтвердите транзакцию в кошельке.

Great, our rewards are now in the form of a MOR token on Arbitrum Sepolia, you can import the token address `0xe6D01D086a844a61641C75f1BCA572e7aa70e154` to your list in metamask using this [guide](https://support.metamask.io/hc/en-us/articles/360015489031-How-to-display-tokens-in-MetaMask#h_01FWH492CHY60HWPC28RW0872H) or check your balance via smart contract as we did with stETH token.


## How to get Arbitrum Sepolia ETH?
To start we should have installed Metamask or another web3 wallet. Then we need to add Arbitrum Sepolia manually or using [Chainlist](https://chainlist.org/?testnets=true&search=arbitrum+sepolia) and clicking “Add to Metamask”

The next step is to fund your address with Arbitrum Sepolia ETH. You may use faucets like https://faucet.quicknode.com/arbitrum/sepolia or https://faucet.triangleplatform.com/arbitrum/sepolia to get some for paying fees.

- Для начала нам необходим установленный Metamask или другой кошелек web3. Нужно перейти к настройкам сети, которые по умолчанию обычно установлены на Ethereum, затем выбрать в качестве сети тестовую сеть Sepolia.
- Следующий шаг это депозит SepoliaETH, для этого вы можете использовать веб-сайты краны, такие как https://sepolia-faucet.pk910.de/# или https://sepoliafaucet.com/.
- Существует множество других кранов, которые можно легко найти, но обычно им требуется чтобы у вас был активный адрес в основной сети Ethereum.

**In case you are interested in more in depth testnet guidance, please follow the [link](https://docs.google.com/document/d/1DbNx-CBpHjFUvIhbKHJSOshCKNTWlng7SeLzzn95AKY/edit)** 
