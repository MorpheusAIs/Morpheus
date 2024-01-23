# Morpheus sariq qog'ozi

Ushbu maqolada Morpheus to'liq tugunining texnik tafsilotlari, Morpheus Smart Contract va tegishli dalillar tasvirlangan.
Anonim ishlab chiquvchilar Morpheus, Trinity & Neo tomonidan taqdim etilgan oq qog'ozda yozilganidek taqdim etilgan. Oq qog'ozga havola: https://github.com/SmartAgentProtocol/SmartAgents/blob/main/MorpheusWP.md

## Morpheusning 0.0.5 mahalliy versiyasi jonli efirda:
---------
**Mac uchun Morpheus 0.0.5 versiyasi**
- Google Drive'dan yuklab oling: https://drive.google.com/file/d/1x-wR4HWjKqT_g6VRjrWPXu3rVm9ukOc9/view?usp=sharing
- Tasdiqlash uchun SHA 256 xesh: 9092d543023fb95086cf4a7039d42cbcbbdf5283d670c4de6396b3d89e57b064
- Versiya: Morpheus-0.0.5-x64.dmg

---------
**Linux Debian uchun Morpheus versiyasi 0.0.5**
- Yuklab olish: https://drive.google.com/file/d/1PQ3n7LXeJHe_jmkYLDUQ9fWjZQTWbHCB/view?usp=sharing
- Ko'rsatmalar: O'rnatish uchun ushbu buyruqni bajaring:
sudo dpkg -i /path/to/your/morpheus.deb
QAYD: Yuqoridagi buyruqda "/path/to/your/morpheus.deb" ni morpheus_0.0.5_amd64.deb fayliga yo'lingiz bilan almashtiring.
- Tasdiqlash uchun SHA hash:
b227e7bcb21ec9e8e2b4bf9510a2e1f224953fe5
Versiya: morpheus_0.0.5_amd64.deb
---------

Morpheus bilan birinchi muloqot 2023 yil 22 oktyabr.
![FirstInteractionWithMorpheus20231022](https://github.com/MorpheusAIs/Morpheus/assets/1563345/35509f3a-4346-4f58-bb60-f7881fd10f7e)

## Morpheus aqlli shartnomalari
Morpheus aqlli shartnomasi tomonidan tasdiqlanishi kerak bo'lgan zanjirli harakatlar haqida.

1. Arbitrumda qayta joylashtirilgan N2 Yield Smart Contract vilkalari
- A) Thorchain orqali ETHni qulflang, daromadni Coders + Compute Provayderlariga topshiring.
- B) Xayriya qilingan ETH pro-ratasini hisoblang

2. MORning abadiy yo'q qilinishi:
- A) MOR tokenlari uchun yoqish manzili yoki yoqish funksiyasi.

3. MOR chiqarish uchun ERC20 shablon shartnomasi
- A) Mint MOR tokenlari har kuni Capital + Jamiyatga berilgan ETH daromadiga mutanosib ravishda.
- B) Mint MOR tokenlari har kuni Coders + Compute provayderlariga to'lovlar orqali yondirilgan MORga mutanosib ravishda.

4. Morpheusyning isboti - Maxfiylik, ochiq manba va xavfsizlikni namoyish eting
- A) Tekshirilgan agentlar roʻyxatini va ularning Smart Rank ballarini eʼlon qilish.
- B) Auditdan o'tgan LLMlar ro'yxatini va ularning Smart Rank ballarini e'lon qilish.
- C) Smart kontraktlar roʻyxati va ularning Smart Rank ballarini eʼlon qilish.
- D) Ko'rsatmalar ro'yxatini va ularning Smart Rank ballarini e'lon qilish.

5. Himoya fondlari
- A) MOR va ETH-ni buzishlar, xatolar, xatolar yoki yo'qotishlarga olib keladigan boshqa hujumlar holatlarida tarqating.
- B) To'lov uchun oldindan belgilangan stsenariylar to'plami. Haddan tashqari holatlarda vilkalar / orqaga qaytarish qoidalari.
- C) Hujum holatlari va ularni bartaraf etish usullarini aniqlash uchun mas'ul ishlab chiquvchilar.
- D) Xatolar uchun mukofotlar / oq shapkali xakerlar.
- E) Milliy davlat ishtirokchilaridan himoya qilish fondlari.

## Morpheus aqlli shartnoma diagrammalari
Diagrammalar va MOR zarb qilish va yoqishning tavsiflari.
Kerakli aqlli shartnomalar tavsifi.
ETH taqsimotini batafsil tavsiflovchi diagrammalar.

### Morpheus MOR aqlli shartnoma mukofotlarini taqsimlash
![new-buckets](https://github.com/SmartAgentProtocol/SmartAgents/assets/76454555/cd57bae7-2a56-4a55-bf3e-1f810f3fba9c)

### 1-kun va 2-kunning MOR tokenini taqsimlash misoli.
![Nomsiz elektron jadval - Google Sheets 2023-10-15 13-28-08](https://github.com/MorpheusAIs/Morpheus/assets/76454555/6ff7869d-bbd6-46b5-8673-6059b15)

## 0x123 ETH Contributor manzili uchun tarqatish hisobiga misol

### Birinchi qadam
![Diagram1ofETHDontator](https://github.com/SmartAgentProtocol/SmartAgents/assets/1563345/fead528c-d628-449e-a3a3-2f53904f4a3d)

### Ikkinchi qadam
![ETHGivenDiagram2](https://github.com/MorpheusAIs/Morpheus/assets/1563345/915020e8-d342-48bc-85ee-367de0325680)

### Uchinchi qadam
![Diagram3ForETHGiven](https://github.com/MorpheusAIs/Morpheus/assets/1563345/a3f455af-56de-4c6b-9688-5b9e91673e5a)

## Hisoblash provayderi 0x123 manzili uchun tarqatish hisobiga misol

### Birinchi qadam
![MORForCompute](https://github.com/SmartAgentProtocol/SmartAgents/assets/1563345/bef69c69-0420-441f-97f0-7e8195844f57)

### Ikkinchi qadam
![MORForCompute2](https://github.com/SmartAgentProtocol/SmartAgents/assets/1563345/a6f30da5-5441-4f0a-be80-c5798f5920cd)

### MOR tokeni taqsimoti diagrammasi
![mordist](https://github.com/MorpheusAIs/Morpheus/assets/76454555/4157efe7-6abf-404a-87f9-a8dc76cd4799)

## Morpheus Developer Tools and Tech Stack.
- Llama2 - mustahkam ochiq manba LLM mahalliy darajada ishlaydi.
- Ollama - Llama2 ni oson o'rnatish uchun qadoqlash.
- LangChain - LLMni vektor do'konlari va API-larga ulash uchun dasturchi vositasi.
- LangSmith Editor - LangChain-da agentlarni qurish uchun past kod.
- SmartContractRank algoritmi - maqsad asosida foydalanuvchi uchun aqlli shartnomalarni tuzish
- AgentRank algoritmi - foydalanuvchi uchun amallarni bajarish uchun maxsus agentlarni tanlash.
- PromptRank algoritmi - prognoz qilingan niyat/harakat asosida foydalanuvchilar uchun so'rovlar.
- Filecoin - Saqlash va bulutli hisoblashni ta'minlash
- Akash Network - LLM / agentlarni ishga tushirish uchun ochiq hisoblash tarmog'i.
- Hamyonlar - Shapeshift, Exodus, boshqa ochiq manba variantlari.

## Web3 harakatlari uchun agent / LLM uchun Morpheus to'liq tugun diagrammalari.
Koderlar tomonidan oldindan o'tkazilgan agentlar auditi Agentning ko'rsatilgan funktsiyalari taqdim etilganidek "Agent isboti" ni yaratadi. Va, albatta, hech qanday zararli kod mavjud emas.

Audit jarayonining tavsifi, auditni kim o'tkazishi va ularning natijalarini qanday tasdiqlashi uchun joy egasi. Shuningdek, auditorlarga rag'batlantirish to'lanadi.

Foydalanuvchi bilan o'zaro munosabatda bo'lgan vaqtda yaratilgan, bildirilgan niyatni ko'rsatadigan, aqlli shartnoma tanloviga mos keladigan va tranzaksiya qiymatlari foydalanuvchi bilan tasdiqlangan.

## Morpheus foydalanuvchi va hissa qo'shuvchilar diagrammasi
![Morpheus User Contributor Diagrammasi](https://github.com/MorpheusAIs/Morpheus/assets/1563345/2cff8d70-c116-472f-a431-8a82bfa22f9b)

### Diagramma foydalanuvchi soʻrovidan Web3 harakatini tasdiqlashgacha boʻlgan UX oqimini koʻrsatadi.
![Soʻralgan web3 vazifalari va chiptalar uchun UX oqimi](https://github.com/MorpheusAIs/Morpheus/assets/76454555/942b20fb-d67e-4a57-af2c-cd24a89690a5)

### Diagrammada Morpheus Local o'rnatish versiyasi ko'rsatilgan.
![MorpheusLocalDiagram](https://github.com/SmartAgentProtocol/SmartAgents/assets/1563345/a0564914-cddb-42e4-b0f4-8c2310db6a66)

### Diagrammada Morpheus P2P o'rnatish versiyasi ko'rsatilgan.
![MorpheusP2PDiagram](https://github.com/SmartAgentProtocol/SmartAgents/assets/1563345/a7eeb31f-3d38-4233-a45f-e9b91ad84ba2)

### Diagrammada Morpheusning markazlashtirilmagan versiyasi ko'rsatilgan.
![MorpheusDecentralized](https://github.com/SmartAgentProtocol/SmartAgents/assets/1563345/1699f2de-cc18-42e8-a05c-32b3307baa20)

## Hamjamiyat
- Smart Agency - Freelance dasturchilar Morpheus foydalanuvchilari uchun foydalanish holatlari / agentlarini yaratadilar.
- Global Developer hamjamiyati - Rivojlanayotgan dasturchilar, startaplar va foydalanuvchilar hamjamiyati.
- Hamjamiyat ETH egalarini Morpheus ishlab chiquvchilari, hisoblash va hamjamiyatga daromad keltirish uchun yollaydi.
- Taqsimlangan rivojlanish guruhi - Morpheus Smart Contractni kodlash uchun aqlli kontrakt ishlab chiquvchilari.
- Morpheus Dapps - Morpheusning foydalanuvchining Smart Agenti bilan integratsiyalashuvi uchun bozor.
