![Image1forYellowstone](https://github.com/MorpheusAIs/Morpheus/assets/1563345/80a6c1cf-fe52-42ba-bfd4-91d9faf67f07)

# Модель Вычислений Морфеус “Yellowstone” 
### Erik Voorhees
### 3е января 2023

Предложенная редакция структуры токеномики Morpheus для стимулирования вычислений в децентрализованной сети ИИ
Просмотр в Notion: https://defiant-wolfsbane-830.notion.site/Morpheus-Yellowstone-Compute-Model-2ca9b4e7e1374c898937fdbd1b964cc1


## Краткое содержание
В модели вычислений Yellowstone сеть Morpheus выплачивает провайдерам вознаграждение только за фактически предоставленные вычислительные мощности через конкурентный процесс торгов, а также выделяет ограниченный выпуск Токенов пропорционально количеству удерживаемых токенов MOR, а не на основе платежей. Это существенно улучшает пользовательский опыт, минимизируя при этом уязвимость к атакам типа Sybil. Yellowstone также вводит важные метрики времени и прохождения теста "Пройдено/Не пройдено", чтобы гарантировать, что поставщики вычислений действуют достаточно оперативно и точно. Yellowstone сохраняет конфиденциальность, не направляя запросы или результаты через маршрутизатор, и минимизирует транзакции в блокчейне для обеспечения масштабируемости. С помощью этой модели MOR приобретает фундаментальную ценность, предоставляя постоянный (но ограниченный) доступ к вычислениям без необходимости проведения транзакций на каждую операцию вывода.

Если данное предложение будет принято, оно заменит раздел "Compute Proof, Registration & Reward" в белой книге Morpheus (https://github.com/MorpheusAIs/Morpheus/blob/main/WhitePaper%20Russian.md)

## Контекст
Morpheus использует токеномику для стимулирования предоставления достаточного и масштабируемого вычислительного ресурса для децентрализованного и неограниченного генеративного ИИ. В первоначальной концепции Morpheus выделял 24% эмиссии MOR напрямую провайдерам вычислительных мощностей, пропорционально полученным запросам, и отдавал приоритет в запросах тем провайдерам, у которых было больше MOR.

### Из оригинальной белой книги:
"MOR-комиссии за транзакции, сжигаемые каждым провайдером вычислений, служат доказательством его статуса и приносят ему пропорциональную долю токенов MOR каждый день.

Например, если существует 100 провайдеров вычислений в день запуска сети, то каждый из них получит пропорциональное вознаграждение в зависимости от количества MOR, которое он сжег через комиссии. В данном случае, предположим, что каждый из 100 провайдеров вычислений сжег 100 MOR, тогда 1% из 3 456 MOR ежедневно = 34.56 MOR".

### Однако у этого подхода есть три основных проблемы:
- Он требует от пользователей оплаты комиссии за каждую операцию вывода. Даже если это дешево, это существенное препятствие, которое вызовет плохой пользовательский опыт и постоянное отставание от OpenAI. Кроме того, требуется как минимум одна транзакция в блокчейне на каждую операцию, что, вероятно, не сможет масштабироваться даже на L2. Каждая операция имеет чрезвычайно низкую стоимость и если будет необходима транзакция в блокчейне, то операции станут экономчески нецелесообразными.  
- Эта модель существенно подвержена уязвимостям, потому что ожидаемые доходы для провайдеров вычислений гораздо выше фактических затрат на вычисления. Таким образом, злоумышленник может засыпать свой собственный узел провайдера запросами на операции, зарабатывая относительно большую часть токенов MOR каждый день, даже если никакой экономической ценности никому не предоставлено. Это, вероятно, приведет к большим объемам неиспользуемых вычислений, которые исчезнут, как только исчезнет огромная возможность дохода, а потраченные за этот период MOR будут потеряны.
- Если запросы на операции вывода распределяются в зависимости от количества MOR, удерживаемого провайдерами, то сеть игнорирует производительность этих провайдеров (время отклика) и стоимость их вычислительной обработки. Именно эти два фактора сеть должна пытаться оптимизировать (время отклика и стоимость вычислений должны стремиться быть минимальными). Если провайдер с наибольшим количеством MOR использует GPU за 200 долларов, выпущенную когда он еще учился в колледже, производительность операций для многих пользователей будет чрезвычайно низкой. Приоритет должен базироваться на цене предложения вычислений и производительности, а не количестве удерживаемых MOR. 

Ниже представлена модель "Yellowstone", которая модифицирует токеномику Morpheus для предоставления вычислительных ресурсов, чтобы решить указанные выше проблемы. Эта модель работает независимо от того, какая часть эмиссии выделена на вычисления, и мы будем предполагать сохранение текущего статуса, где 24% общей эмиссии выделено на вычисления.

### Цели:
- Позволить пользователям не платить за каждую операцию вывода (в идеале, вообще не платить)
- Достигнуть эффективного, масштабируемого и устойчивого предоставления вычислительных ресурсов без переплаты
- Стимулировать конкуренцию по времени отклика и стоимости среди поставщиков вычислительных ресурсов
- Минимизировать количество блокчейн-транзакций (будь то L2 или другие)
- Продемонстрировать экономически обоснованный фундаментальный спрос на MOR

## Модель Yellowstone
Включает в себя четыре компонента:

### Пользователи
- Имеют запросы
- Хотят быстрого/точного вычисления бесплатно и без цензуры/наблюдения
  
### Провайдеры
- Имеют вычислительные ресурсы
- Хотят денег (MOR)

### Маршрутизатор
- Имеет высокую пропускную способностью
- В начале может быть относительно централизованным, в конечном итоге должен децентрализоваться

## Стандартные весы и меры
В ИИ есть атомная единица операций выводов измеряемая в выводах в секунду (inferences/second IPS). Это можно концептуально сравнить с WEI на блокчейне. Выводы используются для определения тарифов в маршрутизаторе Yellowstone. Вес одной единицы искусственного интеллекта Morpheus, следовательно, представляет собой вывод. В зависимости от типа запроса это может быть применено к любой вычислительной задаче.

По мере слияния ИИ и блокчейна, Morpheus стремится предоставить открытый стандарт измерений, чтобы уточнить терминологию, используемую как ИИ, так и блокчейном.

Существует два типа запросов, определенных размером возвращаемого моделью ответа:  

**Запросы с определенной длиной**, где ответ учитывает длину возвращаемого ответа. Примеры включают:
- Чат/Создание изображения
- Диагностика болезней
- Распознавание объектов
- Выявление мошенничества

  **Запросы с неопределенной длиной** требуют ресурсов для ответа, которые можно узнать только после создания ответа. Примеры таких запросов:
- Спой сонату о спагетти
- Создай видеопоздравление С днем рождения
- Совмести модель X с моделью Y
- Разрежь 3D-модель в файл .stl

Yellowstone фокусируется на запросах с определенной длиной. Описанный маршрутизатор будет построен так, чтобы в будущем обрабатывать также и запросы с неопределенной длиной, но не для обслуживания их сегодня. Для достижения этого мы используем стандартизированное измерение децентрализованного ИИ (DeAI).

## Тарифы децентрализованного ИИ

### Выражения вывода в секунду:

| Тип | Ответ | Тариф |
|------|----------|------|
| Определенный | Язык | Выведенные Токены в секунду (TPS) |
| Неопределенный - медиа | Аудио | Выведенные образцы в секунду (ISPS) |
| Неопределенный - медиа | Видео | Выведенные кадры в секунду (IFPS) |
| Неопределенный - будущие технологии | Неизвестный будущий формат | Н/Д |

Первая единица измерения операций вывода для маршрутиризатора Yellowstone это Токены. Форматы других выводов будут представлены далее.

### Время

Время блока для вывода составляет 12 секунд, что означает, что блок вывода транзакций публикуется и учитывается 5 раз в минуту.

### Compute Contract
*Permissionless smart contract which receives emissions of MOR, tracks credits and debits to Providers, and pays Providers when called.

“Users”: defined as any entity that has a MOR address and sends Requests to the Router, using the compute. This can be a specific individual person sending Requests from a Morpheus desktop node, or it could be a bot, or it could be a company or 3rd party website which interacts with the Morpheus network on behalf of its end-users (end-users' use of inference aren't tracked or  considered in the compute contract, except when there is an inference failure). 

“Providers”: defined as any entity, running a node that provides compute resources, has a MOR address and offers Token bids through the Router. When a Provider wins the bid from the Router, Provider provides the compute resource (GPUs, etc) for various AI models to the User. 

“Router”:  defined as a software application that has a MOR address and negotiates the 2-sided market between Users and Providers. The Router registers and tracks Provider addresses and bids, processes Requests from Users, records [miliseconds] and Pass/Fail tests of processed Requests, and instructs the Compute Contract to credit eligible Providers for payment in MOR. The Router never sends or receives MOR transactions (nor transactions on any blockchain). The Router never sees the content of a Request, nor the response. 

“Compute Contract”: defined as a smart contract that has a MOR address, receives all emitted MOR allocated to the Compute bucket, tracks amounts owed to eligible Providers, and pays MOR to eligible Providers when Providers request payment.

“Token” (“T”): is the smallest amount of letters or pixels bid on vi the router. Often this is ~4 characters of text, or 5x5 pixels of image, etc. This is not to be confused with blockchain “tokens” such as ERC20 tokens or the MOR token itself. 

“TokenMax” below refers to a maximum number of Tokens accepted for payment by the Router. 

“RFC”: stands for “Request for Compute.” A user sends an RFC to the Router, and specifies the [LLM] User desires access to as well as the [TokenMax], which is a cap on the acceptable LT’s in response. User will want to cap this because higher numbers = longer wait times for answers, and count more toward UserMax, which is limited each day. 


### Contract Protections

In order to prevent an attack that shorts or runs the number of MOR by manipulating  using any unused compute, the pool of unused MOR allocated to Compute Providers can be reduced by no more than 1% per block day. This is equal to normal compute emisions + 1%.

### Compute Bootstrapping Incentive

For the first year following the Capital Contract's bootsrtapping period, the top 100 Compute providers will be entitled to a pro-rata amount of 2.4% of MOR emissions.  This is calculated by the routers and accounted for in the compute contract.

## Workflow
1) Users, Providers, and Router all create MOR pub keys (this is their identity, all messages signed as such). 
2) If User hodls any balance of MOR, User may submit a signed Request for Processing “RFP” message to the Router. User specifies [LLM] and [TokenMax].
3) Router prioritizes RFPs based on User’s MOR balance (solves sybil issue)
4) Router selects Provider that supports the [LLM], prioritized based on lowest Bid per Token in MOR. 
5) Router sends liveness check to Provider. If Pass, then
6) Router connects User to the Provider
7) User sends Query ([LLM],[prompt]) to Provider 
8) Provider computes Query, sends Result to User
9) User reports Time [milliseconds] between Step 4 & 5, [Tokens] delivered, and Pass/Fail to Router
10) Router instructs Compute Contract to credit Provider with MOR if [milliseconds] per [oken] is no worse than X% below mean of past Z queries for that [LLM] and if User reported [Pass]. 
(11) (Some time later) Provider requests payment of MOR from Compute Contract and Compute Contract sends MOR payment if valid (first blockchain TX so far, can be batched).

![ComputeContractImage2](https://github.com/MorpheusAIs/Morpheus/assets/1563345/e66ea20c-9851-4f9e-9caa-66c6d798c462)

## Outcome
* User received fast Result for her Query, and paid nothing (this will lead to amazing UX and thus adoption). Solves Goal 1.
* Compute Contract paid for Compute through a competitive bidding process, and a check for quality/satisfaction from the User who ordered it. Solves Goal 2.
* Provider received money (MOR) from Compute Contract so long as response was fast enough. Provider received exactly what she asked for to provide the compute. If her ask is too high, others will bid lower, thus the system is efficient and will drive down Provider prices toward the cost of base electricity.  Solves Goal 3
* Number of on-chain transactions was minimized (many thousands of Queries can flow without a single on-chain TX). Solves Goal 4
* The ability to get fast, free compute drives the demand for MOR tokens to be held by Users. Solves Goal 5
* Step 6 & 7 provide reasonable privacy (Query never touches the Router, nor does Result). Providers are selected somewhat randomly, and never know identity of User other than IP address. Better privacy can be later achieved with TOR + FHE
* MOR balance was reduced from Compute Contract. Contract will be solvent so long as MOR paid < MOR earned per period from emissions.
* If User sends an RFC which exceeds User’s UserMax, the Router will reject the request.

—-------------

## Compute Budget
The Morpheus network needs to determine how much MOR it is willing to spend on compute in a given period (such as each day), this is referred to as the Compute Budget. Each period, up to this amount of MOR may be spent by the Compute Contract. This number multiplied by the MOR price gives us a dollar budget for acquisition of Compute each day. 


Open question 1: How should the Compute Budget be determined? The simplest idea is to set Compute Budget = emissions into the Compute Contract. This way, Compute Contract would never run out of tokens. But then what to do with the unused tokens, since the maximum would never be utilized each day? These could, perhaps, be granted pro-rata to current MOR token holders. Or, they could be burned. Or, they could remain unused in the Compute Contract, to be spent in the future on Compute (but then this opens more governance questions). 


## AccessRate
The Morpheus network allocates the scarce resource of LT production through the concept of the “AccessRate”. The AccessRate determines how many LTs each MOR token can access per day. Unused access does not accrue. AccessRate is always displayed as a quantity of LTs per 1 MOR token (such as 1 MOR = 15,000 LT). AccessRate is determined in part by MaxLT, which quantifies the maximum number of LTs the network can purchase per day.

AccessRate = (1/MOR Supply) * MaxLT
MaxLT = ((MOR Compute Budget * MOR Price) / LT Price) * 1000
UserMax = MaxLT * User MOR balance


### Example Assumptions: 
MOR Supply = 10,000,000 MOR tokens
MOR Compute Budget = 3,000 MOR tokens per day
MOR Price = $20
LT Price = $0.002 per 1000 LTs
User Balance = 5 MOR tokens

### Example Result:
MaxLT = 30,000,000,000 LTs (this is the maximum LTs the network can buy/produce each day)
AccessRate = 3,000 (thus each MOR token grants access to 3,000 LTs per day)
UserMax = 15,000 (a User with 5 MOR tokens can access up to 15,000 LT’s per day)


Each period (each day), Morpheus as a network has enough funds to buy X number of LTs from compute Providers. X is a function of the amount of MOR the Compute Contract is willing to spend (the “Compute Budget”) multiplied by the current MOR price divided by the market rate for LTs. 
If the Compute Budget is 3,000 MOR, and each is worth $20, then the network can buy (produce) up to $60,000 of LTs that day. If the going rate for 1,000 LTs is $0.002, then the network can buy up to 30 billion LTs (30m x 1000 LTs). 
That potential production of 30 billion LT’s is allocated by MOR balance, pro rata. Assume there are 10,000,000 MOR in existence. A user with 500 MOR tokens (0.005% of total) could freely access up to 1.5m LTs that day. 
So long as Compute Budget is at or below the emissions level, the Compute Contract cannot run out of MOR.  
In reality, most tokens will sit in wallets and exchanges, and only a fraction will be used to demand the LT production.

## Notes
* Fundamental demand for MOR comes from Users who wish to have access to generative AI and other forms of compute on the Morpheus network. 
 
* Provider’s hardware type is irrelevant to the network, so long as they satisfy the User’s pass/fail test. Any Provider bidding on more Queries than they can efficiently process will be penalized by failing this test.

* The above model importantly pays Providers ONLY when there is demand for their compute. This prevents the situation where large portions of MOR are emitted prematurely when the network doesn’t need it. 

* Providers should need to prove they have a given LLM, by signing hash of LLM model with their key. This doesn’t prove they used it, but it proves they downloaded and installed it, which represents work, thus preventing some forms of sybil-sensitive fraud. If Providers provide garbage results to User, User can send [Fail] along with [miliseconds] back to Router, and Provider won’t be credited for that compute. Morpheus doesn’t need all answers to be perfect… it only needs enough answers to be good enough, relative to competing alternatives. 

* Sybil attacks of flooding the network with RFCs is prevented by the AccessRate. The “cost” of sending and RFC is the cost of acquiring a MOR token divided by the number of RFCs submitted on its behalf. Cost is thus never zero, and yet a user won’t feel a loss each time an RFC is made. 

* Pass/Fail is determined by User, and polices quality to some degree. User conveys Pass/Fail result alongside [miliseconds] back to Router. If Fail, either no reward or penalty point (TBD). There is no incentive to falsely Fail a Provider (no monetary incentive in doing so). This mechanism prevents Providers from sending fast but useless Results.
Consider: perhaps No Reward occurs on Fail only if User MOR > Provider MOR. Otherwise, just a negative point which Router can use in its privatization logic.

* All four parties (User, Provider, Router, and Compute Contract) have unique MOR address as their identity. All messages between the parties require signatures (but most don’t require blockchain txs)

* Providers must have non-zero balance to discourage Sybil attack from Provider side.

* If [milisecond] criteria is higher, network will be generally faster, but discourages smaller Providers

* There is a disincentive to provide slow Results (no revenue after computation)
  
* Centrally hosted Router to start is probably fine (decentralize Router eventually (IPFS? Or PoS node consortium?))
