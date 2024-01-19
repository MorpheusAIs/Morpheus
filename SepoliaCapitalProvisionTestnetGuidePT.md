# Guia de Teste de Contrato Inteligente da Morpheus Capital Providers nas redes Ethereum Sepolia e Arbitrum Sepolia


## Introdução
Para participar nos testes dos Contratos Inteligentes de Provedores de Capital da Morpheus na rede Ethereum Sepolia e na Arbitrum Sepolia, há os seguintes passos principais:
1) Obter SepoliaETH
2) Obter stETH na rede Ethereum Sepolia
3) Depositar stETH no contrato de distribuição na rede Ethereum Sepolia
4) Reivindicar recompensas MOR na Arbitrum Sepolia usando a ponte Layer Zero.


## Endereços de Contratos Inteligentes
Ethereum Sepolia 
- Distribuição: [0x0Ad2fa5D8F420ff6D87192b32d89faf70466b30b](https://sepolia.etherscan.io/address/0x0Ad2fa5D8F420ff6D87192b32d89faf70466b30b#code) 
- stETH: [0x84BE06be19F956dEe06d4870CdDa76AF2e0385f5](https://sepolia.etherscan.io/address/0x84BE06be19F956dEe06d4870CdDa76AF2e0385f5#code)
  
Arbitrum Sepolia 
- MOR: [0xe6d01d086a844a61641c75f1bca572e7aa70e154](https://sepolia.arbiscan.io/address/0xe6d01d086a844a61641c75f1bca572e7aa70e154#code)


## Como obter o Sepolia ETH?
- Para começar, é necessário ter instalado o Metamask ou outra carteira web3. Devemos ir para as configurações de rede, que por padrão geralmente estão definidas como Ethereum, e então escolher a testnet Sepolia como a rede.
- O próximo passo é financiar seu endereço com SepoliaETH. Você pode usar um site como https://sepolia-faucet.pk910.de/# ou https://sepoliafaucet.com/ para obter SepoliaETH se estiver usando um endereço novo.
- Existem muitas outras torneiras (faucets) que podem ser facilmente encontradas para a testnet Sepolia, mas geralmente exigem um endereço que tenha sido ativo na rede principal do Ethereum.


## Como obter o stETH?
Como o token de teste stETH não está oficialmente implantado na rede Sepolia, vamos usar uma cópia desse token com as funcionalidades principais que já implantamos.

Precisamos ir para o contrato [stETH](https://sepolia.etherscan.io/address/0x84BE06be19F956dEe06d4870CdDa76AF2e0385f5#writeContract) abra a aba "Contract" e, em seguida, a aba "Write Contract". Não se esqueça de conectar sua carteira, que deve ter token nativo suficiente para pagar o gás.

![stETHContract](https://github.com/antonbosss/fantastic-bassoon/blob/SepoliaTestnetGuide/stETH-580x648.png)

É necessário selecionar a função 'mint()' que irá cunhar o número necessário de stETH.
Como parâmetros:
- `account_`: Endereço no qual os tokens serão creditados
- `amount_`: quantidade de tokens em WEI, em vez de ETH. Você pode usar este https://eth-converter.com de calculadora conversor de unidade para ajudá-lo. Por exemplo, se você precisar de 0,01 stETH, isso é igual a 10000000000000000 WEI. 

No exemplo da imagem, 100 stETH (indicado em WEI) é cunhado para o endereço 0xa4DB...2259.
E, finalmente, precisamos clicar em "Escrever" e confirmar uma transação na carteira.


## Como verificar o saldo stETH?
Precisamos ir para o contrato [stETH](https://sepolia.etherscan.io/address/0x84BE06be19F956dEe06d4870CdDa76AF2e0385f5#readContract) abra a aba "Contract" e, em seguida, a aba "Read Contract". Não se esqueça de conectar sua carteira, que deve ter token nativo suficiente para pagar o gás.

![stETHContract](https://github.com/antonbosss/fantastic-bassoon/blob/SepoliaTestnetGuide/check-stETH.png)

É necessário chamar a função `balanceOf()` e especificar no campo `account_` o seu endereço. Como resultado, descobriremos quantos tokens estão na carteira.
No exemplo da imagem, o "0xa4DB...2259" tem 1000 stETH indicado em WEI.

Outra maneira de verificar é adicionar o token stETH em sua carteira web3. Para a carteira Metamask, siga os passos deste [guide](https://support.metamask.io/hc/en-us/articles/360015489031-How-to-display-tokens-in-MetaMask#h_01FWH492CHY60HWPC28RW0872H) e preencha o endereço do contrato do token stETH `0x84BE06be19F956dEe06d4870CdDa76AF2e0385f5`


## Como depositar stETH no contrato?
Precisamos ir para o contrato [stETH](https://sepolia.etherscan.io/address/0x84BE06be19F956dEe06d4870CdDa76AF2e0385f5#writeContract) abra a aba "Contract" e, em seguida, a aba "Write Contract". Não se esqueça de conectar sua carteira, que deve ter token nativo suficiente para pagar o gás.

![stETHContract](https://github.com/antonbosss/fantastic-bassoon/blob/SepoliaTestnetGuide/stethapproval.png)

Antes de contribuir, precisamos dar ao contrato de distribuição uma "approval" para transferir nossos tokens stETH. É necessário selecionar a função 'approve()' que adicionará subsídio para o contrato de Distribuição. Como parâmetros:
- `spender`: Endereço do contrato de distribuição - `0x0Ad2fa5D8F420ff6D87192b32d89faf70466b30b`
- `amount`: quantidade de tokens em WEI. Deve ser maior ou igual ao valor depositado. Você pode usar este https://eth-converter.com de calculadora conversor de unidade para ajudá-lo.

Clique em "Write" e confirme uma transação.

Precisamos ir para o contrato [Distribution](https://sepolia.etherscan.io/address/0x0Ad2fa5D8F420ff6D87192b32d89faf70466b30b#writeProxyContract) abra a guia "Contract" e, em seguida, a guia "Write as Proxy". Não se esqueça de conectar sua carteira, que deve ter token nativo suficiente para pagar o gás.

![DistributionContract](https://github.com/antonbosss/fantastic-bassoon/blob/SepoliaTestnetGuide/stake.png)

É necessário selecionar a função `stake()` que depositará tokens stETH no contrato inteligente.
Como parâmetros:
- `poolId_`: identificador de pool, permitido apenas pools existentes e públicos; para efeitos de ensaio, indicar "0";
- `amount_`: quantidade de tokens em WEI. (10 stETH neste exemplo).

Clique em "Write" e confirme uma transação.


## Como posso obter informações sobre quanto depositei? Qual é o valor das recompensas ganhas?
Precisamos ir para o contrato [Distribution](https://sepolia.etherscan.io/address/0x0Ad2fa5D8F420ff6D87192b32d89faf70466b30b#readProxyContract) pene a aba "Contract" e, em seguida, a guia "Read as Proxy". Não se esqueça de conectar sua carteira, que deve ter token nativo suficiente para pagar o gás.

Para isso temos duas funções, a primeira mostra quantas recompensas já foram ganhas, as recompensas são ganhas a cada segundo.

![DistributionContract](https://github.com/antonbosss/fantastic-bassoon/blob/SepoliaTestnetGuide/rewards.png)

Para verificar a quantidade de recompensas, você precisa ligar para a função `getCurrentUserReward`, onde você precisa passar o número do grupo e seu endereço (ou o endereço do usuário que você deseja saber). Como resultado, vamos descobrir quantas recompensas existem no momento. O valor está em WEI e você pode usar esta calculadora conversor de unidade https://eth-converter.com para ajudá-lo.

A segunda função mostrará quantos tokens foram investidos pelo usuário, os parâmetros são semelhantes à primeira chamada de função. O nome da função é `usersData()`.

![DistributionContract](https://github.com/antonbosss/fantastic-bassoon/blob/SepoliaTestnetGuide/stakedamount.png)


## Como retirar o stETH do contrato?
Precisamos ir para o contrato [Distribution](https://sepolia.etherscan.io/address/0x0Ad2fa5D8F420ff6D87192b32d89faf70466b30b#writeProxyContract) abra a guia "Contract" e, em seguida, a guia "Write as Proxy". Não se esqueça de conectar sua carteira, que deve ter token nativo suficiente para pagar o gás.

![DistributionContract](https://github.com/antonbosss/fantastic-bassoon/blob/SepoliaTestnetGuide/withdraw.png)

É necessário selecionar a função `withdraw()` que retirará o número necessário de stETH.
Como parâmetros:
- `poolId_`: identificador de pool; digite "0" para fins de teste;
- `amount_`: quantidade de tokens em WEI.

Clique em "Write" e confirme uma transação.


## Como reivindicar recompensas?
Precisamos ir para o contrato [Distribution](https://sepolia.etherscan.io/address/0x0Ad2fa5D8F420ff6D87192b32d89faf70466b30b#writeProxyContract) abra a guia "Contract" e, em seguida, a guia "Write as Proxy". Não se esqueça de conectar sua carteira, que deve ter token nativo suficiente para pagar o gás.

![DistributionContract](https://github.com/antonbosss/fantastic-bassoon/blob/SepoliaTestnetGuide/claim.png)

A casa da moeda do token MOR ocorre na rede Arbitrum Sepolia, então precisamos de uma ponte Layer Zero para nos ajudar a fazer isso.

Tudo o que o usuário precisa fazer é chamar a função `claim()`.
Como parâmetros:
- `claim`: aqui você precisa especificar a quantidade de token nativo em ETH que você enviará com a transação e que será usado como pagamento pelo gás para uma casa da moeda na rede de destino. Você pode especificar mais, o restante será devolvido ao remetente.
- `poolId_`: identificador de pool; digite "0" para fins de teste;
- `user_`: o endereço do usuário para o qual os tokens serão cunhados.
  
Clique em "Write" e confirme uma transação.

Ótimo, nossas recompensas agora estão na forma de um token MOR no Arbitrum Sepolia, você pode importar o endereço do token `0xe6d01d086a844a61641c75f1bca572e7aa70e154` para sua lista em metamask usando isso [guide](https://support.metamask.io/hc/en-us/articles/360015489031-How-to-display-tokens-in-MetaMask#h_01FWH492CHY60HWPC28RW0872H) ou verifique seu saldo via contrato inteligente como fizemos com o token stETH.


## Como obter o Arbitrum Sepolia ETH?
Para começar, devemos ter instalado Metamask ou outra carteira web3. Então precisamos adicionar Arbitrum Sepolia manualmente ou usando ainlist [Chainlist](https://chainlist.org/?testnets=true&search=arbitrum+sepolia) e clicando em "Add to Metamask"

O próximo passo é financiar seu endereço com a Arbitrum Sepolia ETH. Você pode usar torneiras como https://faucet.quicknode.com/arbitrum/sepolia ou https://faucet.triangleplatform.com/arbitrum/sepolia para obter alguns para pagar taxas.

**Caso você esteja interessado em orientações mais aprofundadas sobre testnet, siga o [link](https://docs.google.com/document/d/1DbNx-CBpHjFUvIhbKHJSOshCKNTWlng7SeLzzn95AKY/edit)** 


