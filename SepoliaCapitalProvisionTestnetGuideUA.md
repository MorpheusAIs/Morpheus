# Посібник з тестування смарт-контрактів для постачальників капіталу в мережах Ethereum Sepolia та Arbitrum Sepolia

## Вступ
Для тестування смарт-контрактів для постачальників капіталу в мережах Ethereum Sepolia та Arbitrum Sepolia, слід пройти кілька основних кроків:
1) Отримання SepoliaETH
2) Отримання stETH в мережі Ethereum Sepolia
3) Депозит stETH в контракт розподілу нагород в мережі Ethereum Sepolia
4) Отримання нагород у токені MOR в мережі Arbitrum Sepolia за допомогою моста Layer Zero


## Адреси смарт контрактів
Ethereum Sepolia 
- Контракт розподілу нагород: [0x0d9e3455d964029796e4b2b921ee27871125c21d](https://sepolia.etherscan.io/address/0x0d9e3455d964029796e4b2b921ee27871125c21d#code) 
- Контракт токену stETH: [0xe6D01D086a844a61641C75f1BCA572e7aa70e154](https://sepolia.etherscan.io/token/0xe6D01D086a844a61641C75f1BCA572e7aa70e154)
  
Arbitrum Sepolia 
- Контракт токену MOR: [0xe6d01d086a844a61641c75f1bca572e7aa70e154](https://sepolia.arbiscan.io/address/0xe6d01d086a844a61641c75f1bca572e7aa70e154#code)


## Як отримати Sepolia ETH?
- Спочатку нам необхідно мати встановлений Metamask або інший гаманець web3. Потрібно перейти до налаштувань мережі, які за замовчуванням зазвичай встановлені на Ethereum, а потім вибрати тестову мережу Sepolia.
- Наступний крок - це депозит SepoliaETH, для цього ви можете використовувати веб-сайти кранів, такі як https://sepolia-faucet.pk910.de/# або https://sepoliafaucet.com/.
- Існує безліч інших кранів, які можна легко знайти, але зазвичай для їх використання потрібно, щоб ваш адрес був активний в основній мережі Ethereum.

## Як отримати stETH?
Оскільки тестовий токен stETH офіційно не розгорнутий в мережі Sepolia, ми будемо використовувати копію цього токена з необхідними для тестування основними функціями. 
Для цього потрібно перейти до контракту [stETH](https://sepolia.etherscan.io/address/0xe6D01D086a844a61641C75f1BCA572e7aa70e154#writeContract) і відкрити вкладку "Contract", а потім натиснути на "Write Contract". 
Не забудьте підключити свій гаманець, в якому повинен бути достатній баланс нативного токена для оплати комісії.

![stETHContract](https://github.com/antonbosss/fantastic-bassoon/blob/SepoliaTestnetGuide/stETH-580x648.png)

Після цього потрібно вибрати функцію `mint()`, за допомогою якої ми зможемо викарбувати необхідну кількість stETH.  
В якості параметрів необхідно вказати:
- `account_`: адреса, на яку будуть зараховані токени;
- `amount_`: кількість токенів в WEI, замість ETH. Для конвертації ви можете використовувати калькулятор за [цим посиланням](https://eth-converter.com). Наприклад, якщо вам потрібно 0,01 stETH, то ця сума буде дорівнювати 10000000000000000 WEI. 
На прикладі вище, було викарбувано 100 stETH (відображення в WEI) на адресу 0xa4DB...2259.

Після виконання усіх дій натисніть на кнопку "Write" та підтвердіть транзакцію в гаманці.


## Як перевірити баланс stETH?
Необхідно перейти до контракту [stETH](https://sepolia.etherscan.io/address/0xe6D01D086a844a61641C75f1BCA572e7aa70e154#readContract), перейти до вкладки “Contract”, потім “Read Contract”. 
Не забудьте підключити свій гаманець, в якому повинен бути достатній баланс нативного токена для оплати комісії.

![stETHContract](https://github.com/antonbosss/fantastic-bassoon/blob/SepoliaTestnetGuide/check-stETH.png)

Перейдіть до функції `balanceOf()` та у якості параметру, в полі `account_`, вкажіть вашу адресу та натисніть на кнопку "Query". У результаті ви отримаєте значення в WEI, що показує кількість stETH на вашій адресі. На прикладі вище, у адреси 0xa4DB...2259 є 1000 stETH, відображені в WEI.

Ще один спосіб перевірити баланс - це додавання токена до вашого web3 гаманця. Як це зробити у гаманці Metamask, ви можете дізнатися з [цього посібника](https://support.metamask.io/hc/en-us/articles/360015489031-How-to-display-tokens-in-MetaMask#h_01FWH492CHY60HWPC28RW0872H). В якості адреси токена stETH введіть `0xe6D01D086a844a61641C75f1BCA572e7aa70e154`.


## Як додати stETH до контракту розподілення нагород?
Перейдіть до контракту [stETH](https://sepolia.etherscan.io/address/0xe6D01D086a844a61641C75f1BCA572e7aa70e154#writeContract), спочатку відкрийте вкладку “Contract”, потім вкладку “Write Contract”. 
Не забудьте підключити свій гаманець, в якому повинен бути достатній баланс нативного токена для оплати комісії.

![stETHContract](https://github.com/antonbosss/fantastic-bassoon/blob/SepoliaTestnetGuide/stethapproval.png)

Перед внесенням коштів, нам необхідно надати дозвіл контракту на відправлення stETH з вашого гаманця. Для цього ми використовуватимемо функцію approve().
В якості параметрів вкажіть:
- spender: адреса контракту розподілу нагород - 0x0d9e3455d964029796e4b2b921ee27871125c21d;
- amount: суму токенів, на які ви даєте дозвіл, відображену в WEI. Сума повинна дорівнювати або бути більшою за ту, яку ви плануєте внести в контракт. Для зручності обчислень ви можете скористатися калькулятором за цим посиланням.

Після виконання усіх дій натисніть на кнопку "Write" та підтвердіть транзакцію в гаманці.

Далі необхідно відкрити контракт [розподілення нагород](https://sepolia.etherscan.io/address/0x0d9e3455d964029796e4b2b921ee27871125c21d#writeProxyContract), та відкрити вкладку “Contract”, а потім “Write as Proxy”. 
Не забудьте підключити свій гаманець, в якому повинен бути достатній баланс нативного токена для оплати комісії.

![DistributionContract](https://github.com/antonbosss/fantastic-bassoon/blob/SepoliaTestnetGuide/stake.png)

Необхідна функція для внесення stETH в контракт називається `stake()`.  
В якості параметрів вкажіть:
- `poolId_`: ідентифікатор групи (пула); для тестування створено пул з номером "0";
- `amount_`: суму токенів в WEI (10 stETH у цьому прикладі).

Після виконання усіх дій натисніть на кнопку "Write" та підтвердіть транзакцію в гаманці.


## Як отримати інформацію про суму депозиту та суму нагород?
Цю інформацію можна отримати через взаємодію з контрактом [розподілу нагород](https://sepolia.etherscan.io/address/0x0d9e3455d964029796e4b2b921ee27871125c21d#readProxyContract). Відкрийте вкладку "Contract", а потім "Read as Proxy". Не забудьте підключити свій гаманець, в якому повинен бути достатній баланс нативного токена для оплати комісії.

Для наших цілей ми використовуватимемо дві функції. Перша показує кількість токенів MOR, отриманих в якості нагороди за депозит stETH в контракт. Нагороди нараховуються кожну секунду.

![DistributionContract](https://github.com/antonbosss/fantastic-bassoon/blob/SepoliaTestnetGuide/rewards.png)

Виберіть функцію `getCurrentUserReward` і в якості параметрів вкажіть:
- `poolId_` номер пула, у нашому випадку це "0";
- `user_` адреса вашого гаманця.  
Для відображення інформації натисніть на кнопку "Query".

Як результат, ви побачите значення, яке показує кількість нарахованих токенів в якості нагороди. Відображення токенів в WEI.

Друга функція, `usersData()` покаже суму вашого депозиту. Параметри аналогічні першій функції.

![DistributionContract](https://github.com/antonbosss/fantastic-bassoon/blob/SepoliaTestnetGuide/stakedamount.png)


## Как зняти stETH з контракту?
Необхідно перейти до контракту [розподілу нагород](https://sepolia.etherscan.io/address/0x0d9e3455d964029796e4b2b921ee27871125c21d#writeProxyContract), у вкладку "Contract", а потім вкладку "Write as Proxy". Не забудьте підключити свій гаманець, в якому повинен бути достатній баланс нативного токена для оплати комісії.

![DistributionContract](https://github.com/antonbosss/fantastic-bassoon/blob/SepoliaTestnetGuide/withdraw.png)

Виберіть функцію `withdraw()` і вкажіть в якості параметрів:
- `poolId_`: номер пула, у нашому випадку це "0";
- `amount_`: суму токенів, вказану в WEI.

Після виконання усіх дій натисніть на кнопку "Write" та підтвердіть транзакцію в гаманці.


## Як отримати нагороди?
Для цього нам знову потрібен контракт [розподілу винагород](https://sepolia.etherscan.io/address/0x0d9e3455d964029796e4b2b921ee27871125c21d#writeProxyContract). Потрібна функція розташована в розділі “Contract” і “Write as Proxy”. Не забудьте підключити свій гаманець, в якому повинен бути достатній баланс нативного токена для оплати комісії.

![DistributionContract](https://github.com/antonbosss/fantastic-bassoon/blob/SepoliaTestnetGuide/claim.png)

Карбування та отримання токенів MOR відбувається в мережі Arbitrum Sepolia, тому нам потрібно скористатися мостом Layer Zero.

Все, що вам потрібно зробити, це скористатися функцією `claim()` та вказати наступні параметри:
- `claim`: тут вказується сума нативних токенів в мережі-відправнику, які будуть використані в якості комісії за випуск токенів в мережі Arbitrum Sepolia. Ви можете вказати більшу суму, різниця буде вам повернута;
- `poolId_`: номер пула, у нашому випадку це "0";
- `user_`: адреса в мережі Arbitrum Sepolia, на яку будуть зараховані токени.

Після виконання усіх дій натисніть на кнопку “Write” та підтвердіть транзакцію в гаманці.

Вітаємо, ваша винагорода у вигляді токенів MOR тепер в мережі Arbitrum Sepolia. Ви можете імпортувати адресу токена `0xe6D01D086a844a61641C75f1BCA572e7aa70e154` у свій гаманець Мetamask, скориставшись цим [посібником](https://support.metamask.io/hc/en-us/articles/360015489031-How-to-display-tokens-in-MetaMask#h_01FWH492CHY60HWPC28RW0872H), або перевірити баланс за допомогою смарт-контракту за прикладом з токеном stETH.

## Як отримати ETH в мережі Arbitrum Sepolia?
- Спочатку нам потрібен встановлений Metamask або інший гаманець web3. Потім слід додати мережу Arbitrum Sepolia вручну або скористатися веб-сайтом [Chainlist](https://chainlist.org/?testnets=true&search=arbitrum+sepolia), де натиснути кнопку "Add to Metamask".
- Наступний крок - це депозит Arbitrum Sepolia ETH. Для цього ви можете використовувати вебсайти-крани, такі як [https://faucet.quicknode.com/arbitrum/sepolia](https://faucet.quicknode.com/arbitrum/sepolia) або [https://faucet.triangleplatform.com/arbitrum/sepolia](https://faucet.triangleplatform.com/arbitrum/sepolia).

**Якщо вас цікавить більш детальний посібник, із описом функцій контрактів, ви можете знайти його за [посиланням](https://docs.google.com/document/d/1DbNx-CBpHjFUvIhbKHJSOshCKNTWlng7SeLzzn95AKY/edit)**
