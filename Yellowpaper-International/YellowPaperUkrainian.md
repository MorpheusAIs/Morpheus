# Жовта книга Morpheus

Ця стаття описує технічні деталі повної ноди Morpheus, смарт-контракту Morpheus і пов'язані з ними докази. Представлено так, як написано в Білій книзі, наданій анонімними розробниками Morpheus, Trinity & Neo. 
Посилання на документ тут: https://github.com/SmartAgentProtocol/SmartAgents/blob/main/MorpheusWP.md 

## Локальна версія Morpheus 0.0.5 вже доступна на:
---------
**Версія Morpheus 0.0.5 для Mac**
- Завантажити з Google Drive: https://drive.google.com/file/d/1x-wR4HWjKqT_g6VRjrWPXu3rVm9ukOc9/view?usp=sharing
- SHA 256 хеш для перевірки: 9092d543023fb95086cf4a7039d42cbcbbdf5283d670c4de6396b3d89e57b064
- Версія: Morpheus-0.0.5-x64.dmg

---------
**Версія Morpheus 0.0.5 для Linux Debian**
- Завантажити: https://drive.google.com/file/d/1PQ3n7LXeJHe_jmkYLDUQ9fWjZQTWbHCB/view?usp=sharing
- Інструкція: Для встановлення виконайте цю команду:
sudo dpkg -i /path/to/your/morpheus.deb
ПРИМІТКА: У наведеній вище команді замініть "/path/to/your/morpheus.deb" на ваш шлях до файлу morpheus_0.0.5_amd64.deb file.
- SHA хеш для перевірки:
b227e7bcb21ec9e8e2b4bf9510a2e1f224953fe5
Версія: morpheus_0.0.5_amd64.deb
---------

Перша взаємодія з Morpheus 22 жовтня 2023 року.
![FirstInteractionWithMorpheus20231022](https://github.com/MorpheusAIs/Morpheus/assets/1563345/35509f3a-4346-4f58-bb60-f7881fd10f7e)

## Смарт-контракти Morpheus
Ончейн дії, котрі повинні бути підтверджені смарт-контрактом Morpheus.

1. Форк смарт-контракту N2 Yield розгорнутий на Arbitrum
- A) Блокування ETH через Thorchain, пожертвування доходу кодувальникам + провайдерам обчислень.
- B) Розрахунок пропорційний пожертвуваним ETH

2. Вічне доказове знищення MOR:
- A) Адрес спалювання або функція спалювання токенів MOR.

3. ERC20 зразок контракту на випуск MOR
- A) Токени MOR щоденно випускати для Капіталу + Спільноти пропорційно пожертвованому доходу ETH.
- B) Токени MOR щоденно мінтити для Кодерів + Провайдерів обчислень пропорційно спаленим MOR через комісії.

4. Доказ Morpheus - Демонстрація конфіденційності, відкритого коду та безпеки
- A) Публікація списку аудитованих агентів та їхніх Smart Rank оцінок.
- B) Публікація списку аудитованих LLM та їхніх Smart Rank оцінок.
- C) Публікація списку смарт-контрактів та їхніх Smart Rank оцінок.
- D) Публікація списку Prompts та їхніх Smart Rank оцінок.

5. Захисні кошти
- A) Виплата MOR та ETH у випадку зломів, помилок, багів або інших атак, що призводять до збитків. 
- B) Заздалегідь визначений набір сценаріїв для виплат. Політика форків / відкатів в екстремальних випадках.
- C) Розробники відповідають за виявлення випадків атак та їх усунення. 
- D) Фонди для винагород за виправлення помилок / білим хакерам.
- E) Фонди для захисту від національних владних гравців.

## Схеми смарт-контракту Morpheus
Схеми та описи мінту і спалювання MOR. 
Описи необхідних смарт-контрактів. 
Діаграми, що детально описують розподіл ETH. 

### Розподіл винагород MOR смарт-контрактом Morpheus
![new-buckets](https://github.com/SmartAgentProtocol/SmartAgents/assets/76454555/cd57bae7-2a56-4a55-bf3e-1f810f3fba9c)

### Приклад розподілу токенів MOR для 1-го та 2-го дня.
![Untitled spreadsheet - Google Sheets 2023-10-15 13-28-08](https://github.com/MorpheusAIs/Morpheus/assets/76454555/6ff7869d-bbd6-46b5-8673-6a59b75906e1)

## Приклад розрахунку розподілу для вкладника адреси 0x123 ETH

### Перший етап
![Diagram1ofETHDontator](https://github.com/SmartAgentProtocol/SmartAgents/assets/1563345/fead528c-d628-449e-a3a3-2f53904f4a3d)

### Другий етап
![ETHGivenDiagram2](https://github.com/MorpheusAIs/Morpheus/assets/1563345/915020e8-d342-48bc-85ee-367de0325680)

### Третій етап
![Diagram3ForETHGiven](https://github.com/MorpheusAIs/Morpheus/assets/1563345/a3f455af-56de-4c6b-9688-5b9e91673e5a)

## Приклад розрахунку розподілу для провайдера обчислень з адресом 0x123

### Перший етап
![MORForCompute](https://github.com/SmartAgentProtocol/SmartAgents/assets/1563345/bef69c69-0420-441f-97f0-7e8195844f57)

### Другий етап
![MORForCompute2](https://github.com/SmartAgentProtocol/SmartAgents/assets/1563345/a6f30da5-5441-4f0a-be80-c5798f5920cd)

### Кругова діаграма розподілу токенів MOR
![mordist](https://github.com/MorpheusAIs/Morpheus/assets/76454555/4157efe7-6abf-404a-87f9-a8dc76cd4799)

## Інструменти розробника та технічний стек Morpheus
- Llama2 - надійний LLM з відкритим вихідним кодом, що працює локально.
- Ollama - пак для легкого встановлення Llama2.
- LangChain - інструмент розробника для підключення LLM до векторних сховищ та API
- LangSmith Editor - низькорівневий код для створення агентів на LangChain.
- SmartContractRank Algorithm - підбір смарт-контрактів для користувача на основі намірів.
- AgentRank Algorithm - курування спеціалізованих агентів для виконання дій користувача.
- PromptRank Algorithm - ранжування підказок для користувачів на основі прогнозованих намірів / дій.
- Filecoin - сховище даних та хмарні обчислення.
- Akash Network - відкрита обчислювальна мережа для запуску LLM / агентів.
- Wallets - Shapeshift, Exodus, інші варіанти з відкритим кодом.

## Схема повної ноди Morpheus для агента / LLM для дій Web3. 
Аудити агентів, що проводяться кодерами, які генерують "доказ агента", що заявлені функції агента відповідають представленим. І, звісно, не містить шкідливого коду.

Місце для опису процесу аудиту, хто може проводити аудит і як сертифікувати його результати. А також стимули, що виплачуються аудиторам.

Доказ обчислень, що генерується в момент взаємодії з користувачем, який показує виражений намір, що збігається з вибором смарт-контракту, і підтвердження користувачем вартості транзакцій. 

## Схема користувачів та вкладників Morpheus
![Morpheus User   Contributor Diagram](https://github.com/MorpheusAIs/Morpheus/assets/1563345/2cff8d70-c116-472f-a431-8a82bfa22f9b)

### Схема, що показує UX потік від запиту користувача до підтвердження Web3 дії.
![UX flow for prompted web3 tasks and ticketing](https://github.com/MorpheusAIs/Morpheus/assets/76454555/942b20fb-d67e-4a57-af2c-cd24a89690a5)

### Схема, що показує версію Morpheus встановлену локально.
![MorpheusLocalDiagram](https://github.com/SmartAgentProtocol/SmartAgents/assets/1563345/a0564914-cddb-42e4-b0f4-8c2310db6a66)

### Схема, що показує встановлену версію Morpheus P2P.
![MorpheusP2PDiagram](https://github.com/SmartAgentProtocol/SmartAgents/assets/1563345/a7eeb31f-3d38-4233-a45f-e9b91ad84ba2)

### Схема, що показує децентралізовану версію Morpheus.
![MorpheusDecentralized](https://github.com/SmartAgentProtocol/SmartAgents/assets/1563345/1699f2de-cc18-42e8-a05c-32b3307baa20)

## Спільнота
- Смарт-агенство - Розробники-фрілансери,які створюють сценарії використання / агентів для користувачів Morpheus.
- Глобальна спільнота розробників - Зростаюча спільнота розробників, стартапів та користувачів.
- Спільнота, що набирає власників ETH, щоб пожертвувати дохід розробникам, обчислювальній системі та спільноті Morpheus.
- Розподілена група розробки - Розробники смарт-контрактів для кодування смарт-контракту Morpheus.
- Morpheus Dapps - Платформа для інтеграції Morpheus зі смарт-агентом користувача.
