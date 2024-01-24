# Guía de prueba de contratos inteligentes de proveedores de Morpheus Capital en las redes Ethereum Sepolia y Arbitrum Sepolia


## Introducción
Para participar en las pruebas de los Contratos Inteligentes de Morpheus Capital Providers en las redes Ethereum Sepolia y Arbitrum Sepolia, hay los siguientes pasos p)principales:
1) Obtener SepoliaETH
2) Obtener stETH en la red Ethereum Sepolia
3) Depositar stETH en el contrato de distribución en la red Ethereum Sepolia
4) Reclamar las recompensas MOR en Arbitrum Sepolia utilizando el puente de Layer Zero.


## Direcciones de contratos inteligentes
Ethereum Sepolia 
- Distribución: [0x0Ad2fa5D8F420ff6D87192b32d89faf70466b30b][(https://sepolia.etherscan.io/address/0x98a8c301f3b168dacd0b054dc06a15c778f12d6e#code)]
- stETH: [0xEE3fc2711cBB17B26747048c177698398c9a95ce](https://sepolia.etherscan.io/address/0xee3fc2711cbb17b26747048c177698398c9a95ce#code)
  
Arbitrum Sepolia 
- MOR: [0xe6d01d086a844a61641c75f1bca572e7aa70e154](https://sepolia.arbiscan.io/address/0xe6d01d086a844a61641c75f1bca572e7aa70e154#code)


## ¿Cómo obtener Sepolia ETH?
- Para empezar, debemos tener instalado Metamask u otra billetera web3. Necesitamos ir a la configuración de la red, que por defecto suele estar establecida en Ethereum. Luego, elegir la red de prueba Sepolia.
- El siguiente paso es financiar tu dirección con SepoliaETH. Puedes utilizar un sitio web como https://sepolia-faucet.pk910.de/# o https://sepoliafaucet.com/ para obtener SepoliaETH si estás utilizando una dirección nueva.
- Hay muchos otros grifos que se pueden encontrar fácilmente para la red de prueba Sepolia, pero suelen requerir una dirección que haya estado activa en la red principal de Ethereum.


## ¿Cómo obtener stETH?
Dado que el token de prueba stETH no está oficialmente desplegado en la red Sepolia, utilizaremos una copia de este token con las funcionalidades principales que hemos implementado.
can
Tenemos que ir al [stETH](https://sepolia.ethers.io/address/0xEE3fc2711cBB17B26747048c177698398c9a95ce#writeContract) contrato, abrir la pestaña "Contract" y luego la pestaña "Write Contract". No olvides conectar tu billetera, la cual debería tener suficientes tokens nativos para cubrir el costo del gas.guide

![stETHContract](https://github.com/antonbosss/fantastic-bassoon/blob/SepoliaTestnetGuide/stETH-580x648.png)

Es necesario seleccionar la función `mint()` que generará la cantidad requerida de stETH. Como parámetros:
- `account_`: dirección a la que se acreditarán los tokens
- `amount_`: cantidad de tokens en WEI, en lugar de ETH. Puedes utilizar una calculadora de conversión de unidades como https://eth-converter.com para ayudarte. Por ejemplo, si necesitas 0.01 stETH, eso equivaldría a 10000000000000000 WEI.

En el ejemplo de la imagen, se están generando 100 stETH (indicados en WEI) para la dirección 0xa4DB...2259.

Y finalmente, debemos hacer clic en "Write" y confirmar una transacción en la billetera.


## ¿Cómo comprobar el saldo de stETH?
A continuación, vaya al contrato [stETH](https://sepolia.etherscan.io/address/0xEE3fc2711cBB17B26747048c177698398c9a95ce#readContract) abrir la pestaña "Contract" y luego la pestaña "Write Contract". No olvides conectar tu billetera, la cual debería tener suficientes tokens nativos para cubrir el costo del gas.

![stETHContract](https://github.com/antonbosss/fantastic-bassoon/blob/SepoliaTestnetGuide/check-stETH.png)

Es necesario llamar a la función `balanceOf()` y especificar en el campo `account_` tu dirección. Como resultado, sabremos cuántos tokens hay en la billetera.
En el ejemplo de la imagen, la dirección 0xa4DB...2259 tiene 1000 stETH indicados en WEI.

Otra forma de comprobarlo es agregar el token stETH en su billetera web3. Para la billetera Metamask, siga los pasos de este [guide](https://support.metamask.io/hc/en-us/articles/360015489031-How-to-display-tokens-in-MetaMask#h_01FWH492CHY60HWPC28RW0872H) y complete la dirección del contrato del token stETH `0xEE3fc2711cBB17B26747048c177698398c9a95ce`


## ¿Cómo depositar stETH en el contrato?
Ahora, ve al contrato [stETH](https://sepolia.etherscan.io/address/0xEE3fc2711cBB17B26747048c177698398c9a95ce#writeContract), abrir la pestaña "Contract", luego la pestaña "Write Contract". No olvides conectar tu billetera, que debería tener suficiente token nativo para pagar la gasolina.

![stETHContract](https://github.com/antonbosss/fantastic-bassoon/blob/SepoliaTestnetGuide/stethapproval.png)

Antes de contribuir, debemos darle una "approval" al contrato de distribución para transferir nuestros tokens stETH. Es necesario seleccionar la función `approve()` que agregará asignación para el contrato de Distribución. Como parámetros:
- `spender`: dirección del contrato de distribución - `0x98a8c301F3B168daCD0B054dc06A15c778F12D6e`
- `amount`: cantidad de tokens en WEI. Debe ser mayor o igual al monto depositado. Puede utilizar esta calculadora de conversión de unidades https://eth-converter.com para ayudarle.

Haga clic en "Write" y confirme una transacción.

Luego, debemos ir al contrato [Distribution](https://sepolia.etherscan.io/address/0x98a8c301F3B168daCD0B054dc06A15c778F12D6e#writeProxyContract), abrir la pestaña "Contract" y luego la pestaña "Write as Proxy". No olvides conectar tu billetera, que debería tener suficiente token nativo para pagar la gasolina.

![DistributionContract](https://github.com/antonbosss/fantastic-bassoon/blob/SepoliaTestnetGuide/stake.png)

Es necesario seleccionar la función `stake()` que depositará tokens stETH en el contrato inteligente. Como parámetros:
- `poolId_`: identificador del grupo, permitido solo grupos existentes y públicos; para fines de prueba ingrese “0”;
- `amount_`: cantidad de tokens en WEI. (10 stETH en este ejemplo).

Haga clic en "Write" y confirme una transacción.


## ¿Cómo puedo obtener información sobre cuánto he depositado? ¿Cuál es la cantidad de recompensas obtenidas?
Necesitamos ir al contrato [Distribution](https://sepolia.etherscan.io/address/0x98a8c301F3B168daCD0B054dc06A15c778F12D6e#readProxyContract) abra la pestaña “Contrato”, luego la pestaña “Leer como proxy”. No olvides conectar tu billetera, que debería tener suficiente token nativo para pagar la gasolina.


Para ello tenemos dos funciones, la primera muestra cuántas recompensas ya se han ganado, las recompensas se ganan cada segundo.

![DistributionContract](https://github.com/antonbosss/fantastic-bassoon/blob/SepoliaTestnetGuide/rewards.png)

Para verificar la cantidad de recompensas, debe llamar a la función `getCurrentUserReward`, donde debe pasar el número de grupo y su dirección (o la dirección del usuario que desea conocer). Como resultado, descubriremos cuántas recompensas hay en este momento. La cantidad está en WEI y puedes usar esta calculadora de conversión de unidades https://eth-converter.com para ayudarte.

La segunda función mostrará cuántos tokens ha invertido el usuario, los parámetros son similares a los de la primera llamada de función. El nombre de la función es `usersData()`.

![DistributionContract](https://github.com/antonbosss/fantastic-bassoon/blob/SepoliaTestnetGuide/stakedamount.png)


## ¿Cómo retirar stETH del contrato?
Necesitamos ir al contrato [Distribution](https://sepolia.etherscan.io/address/0x98a8c301F3B168daCD0B054dc06A15c778F12D6e#writeProxyContract) abra la pestaña "Contract", luego la pestaña "Write as Proxy". No olvides conectar tu billetera, que debería tener suficiente token nativo para pagar la gasolina.

![DistributionContract](https://github.com/antonbosss/fantastic-bassoon/blob/SepoliaTestnetGuide/withdraw.png)

Es necesario seleccionar la función `withdraw()` que retirará la cantidad requerida de stETH. Como parámetros:
- `poolId_`: identificador del grupo; ingrese "0" para fines de prueba;
- `amount_`: cantidad de tokens en WEI.

Haga clic en "Write" y confirme una transacción.


## ¿Cómo reclamar recompensas?
Necesitamos ir al contrato [Distribution](https://sepolia.etherscan.io/address/0x98a8c301F3B168daCD0B054dc06A15c778F12D6e#writeProxyContract), abra la pestaña "Contract", luego la pestaña "Write as Proxy". No olvides conectar tu billetera, que debería tener suficiente token nativo para pagar la gasolina.

![DistributionContract](https://github.com/antonbosss/fantastic-bassoon/blob/SepoliaTestnetGuide/claim.png)

La acuñación del token MOR se lleva a cabo en la red Arbitrum Sepolia, por lo que necesitamos un puente de Capa Cero que nos ayude a hacerlo.

Todo lo que el usuario debe hacer es llamar a la función `claim()` y especificar los siguientes parámetros:
- `claim`: aquí debes especificar la cantidad de token nativo en ETH que enviarás con la transacción y que se utilizará como pago por el gas de una casa de moneda en la red de destino. Puede especificar más, el resto se devolverá al remitente.
- `poolId_`: identificador del grupo; ingrese "0" para fines de prueba;
- `user_`: la dirección del usuario para quien se acuñarán los tokens.
  
Haga clic en "Write" y confirme una transacción.

Genial, nuestras recompensas ahora tienen la forma de un token MOR en Arbitrum Sepolia, puedes importar la dirección del token `0xe6D01D086a844a61641C75f1BCA572e7aa70e154` to your list in metamask using this [guide](https://support.metamask.io/hc/en-us/articles/360015489031-How-to-display-tokens-in-MetaMask#h_01FWH492CHY60HWPC28RW0872H) o verifique su saldo mediante un contrato inteligente como lo hicimos con el token stETH.


## ¿Cómo llegar Arbitrum Sepolia ETH?
Para empezar deberíamos haber instalado Metamask u otra billetera web3. Luego necesitamos agregar Arbitrum Sepolia manualmente o usando [Chainlist](https://chainlist.org/?testnets=true&search=arbitrum+sepolia) y haga clic “Add to Metamask”

El siguiente paso es financiar su dirección con Arbitrum Sepolia ETH. Puedes usar grifos como https://faucet.quicknode.com/arbitrum/sepolia o https://faucet.triangleplatform.com/arbitrum/sepolia conseguir algo para pagar tarifas.

**En caso de que esté interesado en obtener una guía de prueba más detallada, siga el enlace [link](https://docs.google.com/document/d/1DbNx-CBpHjFUvIhbKHJSOshCKNTWlng7SeLzzn95AKY/edit)** 
