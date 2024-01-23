# Morpheus Sárga Könyv

Ez a dokumentum részletezi a Morpheus teljes csomópontjának, a Morpheus Smart Contractnek és a kapcsolódó bizonyítékoknak a technikai részleteit.
Ahogyan azt a Morpheus, Trinity és Neo nevű névtelen fejlesztők a fehér könyvben leírták. A fehér könyv elérhető itt: https://github.com/SmartAgentProtocol/SmartAgents/blob/main/MorpheusWP.md

## A Morpheus 0.0.5 helyi verziója él a következő címeken:
---------
**Morpheus 0.0.5 verzió Mac-hez**
- Letöltés a Google Drive-ról: https://drive.google.com/file/d/1x-wR4HWjKqT_g6VRjrWPXu3rVm9ukOc9/view?usp=sharing
- SHA 256 hash az ellenőrzéshez: 9092d543023fb95086cf4a7039d42cbcbbdf5283d670c4de6396b3d89e57b064
- Verzió: Morpheus-0.0.5-x64.dmg

---------
**Morpheus 0.0.5 verzió Linux Debian-hoz**
- Letöltés: https://drive.google.com/file/d/1PQ3n7LXeJHe_jmkYLDUQ9fWjZQTWbHCB/view?usp=sharing
- Utasítások: A telepítéshez futtasd a következő parancsot:
sudo dpkg -i /path/to/your/morpheus.deb
MEGJEGYZÉS: A fenti parancsban cseréld ki "/path/to/your/morpheus.deb"-t a morpheus_0.0.5_amd64.deb fájl elérési útvonalára.
- SHA hash az ellenőrzéshez:
b227e7bcb21ec9e8e2b4bf9510a2e1f224953fe5
Verzió: morpheus_0.0.5_amd64.deb
---------

Az első interakció a Morpheus-szal 2023. október 22-én.
![ElsőInterakcióMorpheus20231022](https://github.com/MorpheusAIs/Morpheus/assets/1563345/35509f3a-4346-4f58-bb60-f7881fd10f7e)

## Morpheus Smart Contractek
A Morpheus okosszerződéseinek a hálózaton végrehajtott intézkedései, amelyeket a Morpheus okosszerződésnek validálnia kell.

1. Az N2 Yield Smart Contract másolata újraüzemelve az Arbitrumon
- A) ETH zárolása a Thorchain-en keresztül, hozam adományozása kódereknek + számítási szolgáltatóknak.
- B) Az adományozott ETH arányának kiszámítása

2. MOR Örökké Igazolható Megsemmisítése:
- A) MOR tokenek égetése célállomásra vagy égetési funkcióval.

3. ERC20 Sablon Szerződés a MOR kibocsátásához
- A) MOR tokenek napi kibocsátása tőke + közösség arányosan az ETH által adományozott hozamhoz.
- B) MOR tokenek napi kibocsátása kódereknek + számítási szolgáltatóknak arányosan a díjak által elégetett MOR-hoz.

4. Morpheus Bizonyítéka - Adatvédelem, Nyílt Forráskód és Biztonság Igazolása
- A) Közzétenni az ellenőrzött ügynökök listáját és azok Smart Rank pontszámait.
- B) Közzétenni az ellenőrzött LLM-ek listáját és azok Smart Rank pontszámait.
- C) Közzétenni az okosszerződések listáját és azok Smart Rank pontszámait.
- D) Közzétenni a felhívások listáját és azok Smart Rank pontszámait.

5. Védelmi Alapok
- A) MOR és ETH szétosztása hackelések, hibák, bug-ok vagy egyéb támadások esetén keletkezett veszteségek esetén.
- B) Előre meghatározott kifizetési forgatókönyvek. Irányelvek extrém esetekben történő forkoláshoz / visszagördítéshez.
- C) A fejlesztők felelősek az attack-ek és azok jogorvoslati lehetőségeinek meghatározásáért.
- D) Alapok a hibabounty-khoz / white hat hackerekhez.
- E) Alapok az állami szereplők elleni védelemhez.

## Morpheus Smart Contract Diagramok
Diagramok a MOR kibocsátásáról és elégetéséről.
A szükséges okosszerződések leírásai.
Diagramok az ETH elosztásának részletezéséhez.

### Morpheus MOR Okosszerződés Jutalmak Elosztása
![new-buckets](https://github.com/SmartAgentProtocol/SmartAgents/assets/76454555/cd57bae7-2a56-4a55-bf3e-1f810f3fba9c)

### MOR Token Elosztási Példa Az 1. és 2. Napra
![Untitled spreadsheet - Google Sheets 2023-10-15 13-28-08](https://github.com/MorpheusAIs/Morpheus/assets/76454555/6ff7869d-bbd6-46b5-8673-6a59b75906e1)

## Példa Elosztás Számítás Az 0x123 ETH Hozzájáruló Címére

### Első Lépés
![Diagram1ofETHDontator](https://github.com/SmartAgentProtocol/SmartAgents/assets/1563345/fead528c-d628-449e-a3a3-2f53904f4a3d)

### Második Lépés
![ETHGivenDiagram2](https://github.com/MorpheusAIs/Morpheus/assets/1563345/915020e8-d342-48bc-85ee-367de0325680)

### Harmadik Lépés
![Diagram3ForETHGiven](https://github.com/MorpheusAIs/Morpheus/assets/1563345/a3f455af-56de-4c6b-9688-5b9e91673e5a)

## Példa Elosztás Számítás Az 0x123 Számítási Szolgáltató Címére

### Első Lépés
![MORForCompute](https://github.com/SmartAgentProtocol/SmartAgents/assets/1563345/bef69c69-0420-441f-97f0-7e8195844f57)

### Második Lépés
![MORForCompute2](https://github.com/SmartAgentProtocol/SmartAgents/assets/1563345/a6f30da5-5441-4f0a-be80-c5798f5920cd)

### MOR Token Elosztási Körcsokor Diagram
![mordist](https://github.com/MorpheusAIs/Morpheus/assets/76454555/4157efe7-6abf-404a-87f9-a8dc76cd4799)

## Morpheus Fejlesztő Eszközök és Tech Stack.
- Llama2 - Robosztus nyílt forráskódú LLM, helyileg futtatható.
- Ollama - Csomagolás a Llama2 egyszerű telepítéséhez.
- LangChain - Fejlesztőeszköz az LLM összekapcsolásához Vector tárolókkal és API-kkal.
- LangSmith Editor - Kódblokk az ügynökök építéséhez a LangChainen.
- SmartContractRank Algoritmus - Okosszerződések kuratálása a felhasználó szándéka alapján.
- AgentRank Algoritmus - Specializált ügynökök kuratálása felhasználói műveletek végrehajtására.
- PromptRank Algoritmus - Felhasználók számára szánt promptok kuratálása a tervezett szándék / művelet alapján.
- Filecoin - Tárolás és felhőszámítási szolgáltatások.
- Akash Network - Nyílt számítási hálózat LLM-ek / ügynökök futtatásához.
- Tárcák - Shapeshift, Exodus, egyéb nyílt forráskódú lehetőségek.

## Morpheus Teljes Csomópont Diagramok az Ügynökökhöz / LLM-ekhez a Web3 Műveletekhez.
Az ügynökök által végzett auditok egy "Ügynök Bizonyítványt" generálnak, amely igazolja, hogy az ügynök által állított funkciók megfelelnek-e a követelményeknek. És természetesen nem tartalmaz kártékony kódot.

Hely placeholder a vizsgálati folyamat leírásához, hogy ki végezhet el auditokat, és hogyan lehet tanúsítani az eredményeiket. Továbbá ösztönzések az auditoroknak.

A Prompt Proof a felhasználói interakció pillanatában generálódik, amely mutatja az kifejezett szándékot, összeveti az okosszerződés kiválasztását, és a tranzakció értékeit megerősíti a felhasználóval.

## Morpheus Felhasználó és Résztvevő Diagram
![Morpheus User   Contributor Diagram](https://github.com/MorpheusAIs/Morpheus/assets/1563345/2cff8d70-c116-472f-a431-8a82bfa22f9b)

### A diagram bemutatja az UX áramlását a felhasználói prompttól a Web3 művelet jóváhagyásáig.
![UX áramlás a felhasználói promptoktól a Web3 feladatokig és jegyekig](https://github.com/MorpheusAIs/Morpheus/assets/76454555/942b20fb-d67e-4a57-af2c-cd24a89690a5)

### A diagram bemutatja a Morpheus helyi telepítési verzióját.
![MorpheusLocalDiagram](https://github.com/SmartAgentProtocol/SmartAgents/assets/1563345/a0564914-cddb-42e4-b0f4-8c2310db6a66)

### A diagram bemutatja a Morpheus P2P telepítési verzióját.
![MorpheusP2PDiagram](https://github.com/SmartAgentProtocol/SmartAgents/assets/1563345/a7eeb31f-3d38-4233-a45f-e9b91ad84ba2)

### A diagram bemutatja a Morpheus decentralizált verzióját.
![MorpheusDecentralized](https://github.com/SmartAgentProtocol/SmartAgents/assets/1563345/1699f2de-cc18-42e8-a05c-32b3307baa20)

## Közösség
- Smart Agency - Szabadúszó fejlesztők, akik Morpheus felhasználók számára építik a felhasználási eseteket / ügynököket.
- Globális Fejlesztői Közösség - Növekvő fejlesztői, kezdő és felhasználói közösség.
- Közösség toborzása ETH-tartók számára, hogy hozamot ajánljanak fel a Morpheus fejlesztőknek, a számítási kapacitásnak és a közösségnek.
- Elosztott Fejlesztési Csoport - Okosszerződés-Fejlesztők a Morpheus Smart Contract kódolásához.
- Morpheus Dapps - Piac a Morpheus integrációkhoz a felhasználó okos ügynökével.
