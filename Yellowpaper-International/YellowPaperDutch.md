# Morpheus Yellow Paper

Dit artikel beschrijft de technische details van de Morpheus full node, het Morpheus Smart Contract en gerelateerde "proofs".
Gepresenteerd zoals geschreven in de whitepaper bijgedragen door de anonieme ontwikkelaars Morpheus, Trinity & Neo. Link naar de whitepaper hier: https://github.com/SmartAgentProtocol/SmartAgents/blob/main/MorpheusWP.md 

## Lokale versie 0.0.5 van Morpheus is live voor :
---------
**Versie 0.0.5 van Morpheus voor Mac**
- Downloaden van Google Drive: https://drive.google.com/file/d/1x-wR4HWjKqT_g6VRjrWPXu3rVm9ukOc9/view?usp=sharing
- SHA 256 hash voor validatie: 9092d543023fb95086cf4a7039d42cbcbbdf5283d670c4de6396b3d89e57b064
- Versie: Morpheus-0.0.5-x64.dmg

---------
**Morpheus versie 0.0.5 voor Linux Debian**
- Downloaden: https://drive.google.com/file/d/1PQ3n7LXeJHe_jmkYLDUQ9fWjZQTWbHCB/view?usp=sharing
- Instructies: Om te installeren, voer dit commando uit:
sudo dpkg -i /path/to/your/morpheus.deb
OPMERKING: Vervang in de bovenstaande opdracht "/path/to/your/morpheus.deb" door het pad naar het morpheus_0.0.5_amd64.deb bestand.
- SHA-hash voor verificatie:
b227e7bcb21ec9e8e2b4bf9510a2e1f224953fe5
Versie: morpheus_0.0.5_amd64.deb
---------

Eerste interactie met Morpheus 22 oktober 2023.
![FirstInteractionWithMorpheus20231022](https://github.com/MorpheusAIs/Morpheus/assets/1563345/35509f3a-4346-4f58-bb60-f7881fd10f7e)

## Smart contracts van Morpheus
Onchain acties die gevalideerd moeten worden door het Morpheus smart contract.

1. Fork van N2 Yield Smart Contract uitgevoerd op Arbitrum
- A) ETH vergrendelen via Thorchain, opbrengst doneren aan programmeurs + computerproviders.
- B) Bereken pro-rata van gedoneerde ETH. 

2. Voor altijd aantoonbare vernietiging van MOR:
- A) Verbrand adres of verbrand functie voor MOR tokens.

3. ERC20 sjablooncontract voor uitgifte van MOR
- A) Mint dagelijks MOR tokens aan Kapitaal + Gemeenschap pro-rata aan gedoneerde ETH opbrengst.
- B) Mint dagelijks MOR tokens aan Coders + Compute providers pro-rata tot MOR verbrand via vergoedingen.

4. Proof of Morpheus - Demonstreer Privacy, Open Source, & Veiligheid
- A) Publiceer een lijst van gecontroleerde Agenten en hun Smart Rank scores.
- B) Lijst publiceren van gecontroleerde LLM's en hun Smart Rank scores.
- C) Lijst van Smart Contracts en hun Smart Rank scores publiceren.
- D) Publiceer lijst van Prompts & hun Smart Rank scores.

5. Beschermingsfondsen
- A) MOR & ETH uitbetalen in geval van hacks, fouten, bugs of andere aanvallen die verliezen veroorzaken. 
- B) Vooraf gedefinieerde reeks scenario's voor uitbetaling. Beleid voor forking / roll backs in extreme gevallen.
- C) Ontwikkelaars die verantwoordelijk zijn voor het bepalen van aanvallen en hun oplossingen. 
- D) Fondsen voor bug bounties / white hat hackers.
- E) Fondsen voor bescherming tegen statelijke actoren.

## Morpheus Smart Contract Diagrammen
Diagrammen plus beschrijvingen van de MOR-minting en -verbranding.
Beschrijvingen van de benodigde smart contracts.
Diagrammen met de verdeling van ETH. 

### Morpheus MOR Smart Contract Beloningen Distributie
![new-buckets](https://github.com/SmartAgentProtocol/SmartAgents/assets/76454555/cd57bae7-2a56-4a55-bf3e-1f810f3fba9c)

### MOR Token Verdeling Voorbeeld van Dag 1 en Dag 2.
![Untitled spreadsheet - Google Sheets 2023-10-15 13-28-08](https://github.com/MorpheusAIs/Morpheus/assets/76454555/6ff7869d-bbd6-46b5-8673-6a59b75906e1)

## Voorbeeld distributieberekening voor adres 0x123 ETH-bijdrager

### Stap Een
![Diagram1ofETHDontator](https://github.com/SmartAgentProtocol/SmartAgents/assets/1563345/fead528c-d628-449e-a3a3-2f53904f4a3d)

### Stap Twee
![ETHGivenDiagram2](https://github.com/MorpheusAIs/Morpheus/assets/1563345/915020e8-d342-48bc-85ee-367de0325680)

### Stap Drie
![Diagram3ForETHGiven](https://github.com/MorpheusAIs/Morpheus/assets/1563345/a3f455af-56de-4c6b-9688-5b9e91673e5a)

## Voorbeeld distributieberekening voor adres 0x123 Compute Provider

### Stap een
![MORForCompute](https://github.com/SmartAgentProtocol/SmartAgents/assets/1563345/bef69c69-0420-441f-97f0-7e8195844f57)

### Stap twee
![MORForCompute2](https://github.com/SmartAgentProtocol/SmartAgents/assets/1563345/a6f30da5-5441-4f0a-be80-c5798f5920cd)

### MOR Token Distributie Taartdiagram
![mordist](https://github.com/MorpheusAIs/Morpheus/assets/76454555/4157efe7-6abf-404a-87f9-a8dc76cd4799)

## Morpheus Developer Tools en Tech Stack.
- Llama2 - Robuuste open source LLM die lokaal draait.
- Ollama - Packaging voor eenvoudige installatie van Llama2.
- LangChain - Ontwikkelaarstool voor het verbinden van LLM met Vector stores en API's.
- LangSmith Editor - Lage code voor het bouwen van agents op LangChain.
- SmartContractRank Algorithm - Smart Contracts samenstellen voor de gebruiker op basis van intentie.
- AgentRank Algorithm - Het samenstellen van gespecialiseerde agenten voor het uitvoeren van acties voor de gebruiker.
- PromptRank-algoritme - Het samenstellen van prompts voor de gebruiker op basis van de geprojecteerde intentie / actie.
- Filecoin - Opslag en cloudcomputing
- Akash Network - Open computernetwerk voor het uitvoeren van LLM's / agents.
- Portemonnees - Shapeshift, Exodus, andere open source opties.

## Morpheus Full Node Diagrams voor de agent / LLM's voor Web3-acties. 
Audits van Agents uitgevoerd door Coders die een "Agent Proof" genereren dat de vermelde functies van de Agent zijn zoals gepresenteerd. En natuurlijk geen kwaadaardige code bevat.

Plaatshouder voor beschrijving van auditproces, wie audits kan uitvoeren en hoe de resultaten kunnen worden gecertificeerd. Ook incentives betaald aan auditors.

Prompt Proof gegenereerd op het moment van een gebruikersinteractie die de geuite intentie toont, overeenkomt met de selectie van het slimme contract en de transactiewaarden worden bevestigd met de gebruiker. 

## Morpheus Gebruiker & Bijdrager Diagram
![Morpheus User   Contributor Diagram](https://github.com/MorpheusAIs/Morpheus/assets/1563345/2cff8d70-c116-472f-a431-8a82bfa22f9b)

### Diagram toont de UX flow van gebruikersprompt tot goedkeuring van Web3 actie.
![UX flow for prompted web3 tasks and ticketing](https://github.com/MorpheusAIs/Morpheus/assets/76454555/942b20fb-d67e-4a57-af2c-cd24a89690a5)

### Diagram toont de Morpheus Lokale installatieversie.
![MorpheusLocalDiagram](https://github.com/SmartAgentProtocol/SmartAgents/assets/1563345/a0564914-cddb-42e4-b0f4-8c2310db6a66)

### Het diagram toont de Morpheus P2P installatieversie.
![MorpheusP2PDiagram](https://github.com/SmartAgentProtocol/SmartAgents/assets/1563345/a7eeb31f-3d38-4233-a45f-e9b91ad84ba2)

### Het diagram toont de gedecentraliseerde versie van Morpheus.
![MorpheusDecentralized](https://github.com/SmartAgentProtocol/SmartAgents/assets/1563345/1699f2de-cc18-42e8-a05c-32b3307baa20)

## Gemeenschap
- Smart Agency - Freelance ontwikkelaars die use cases / agents bouwen voor Morpheus-gebruikers.
- Wereldwijde gemeenschap van ontwikkelaars - Groeiende gemeenschap van ontwikkelaars, startups en gebruikers.
- Community rekruteert ETH-houders om opbrengst te doneren aan Morpheus-ontwikkelaars, compute & community.
- Gedistribueerde Ontwikkelingsgroep - Smart Contract Ontwikkelaars om Morpheus Smart Contract te coderen.
- Morpheus Dapps - Marktplaats voor Morpheus-integraties met de Smart Agent van de gebruiker.
