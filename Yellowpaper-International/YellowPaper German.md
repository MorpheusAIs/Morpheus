# Morpheus Gelbes Papier

Dieses Papier beschreibt die technischen Details des Morpheus-Vollknotens, des Morpheus-Smart-Contracts und der zugehörigen Beweise.
Präsentiert wie im Whitepaper der anonymen Entwickler Morpheus, Trinity & Neo geschrieben. Link zum Whitepaper hier: https://github.com/SmartAgentProtocol/SmartAgents/blob/main/MorpheusWP.md 

## Die lokale Version 0.0.5 von Morpheus ist verfügbar unter:
---------
**Morpheus Version 0.0.5 für Mac**
- Herunterladen von Google Drive: https://drive.google.com/file/d/1x-wR4HWjKqT_g6VRjrWPXu3rVm9ukOc9/view?usp=sharing
- SHA 256 hash zur Validierung: 9092d543023fb95086cf4a7039d42cbcbbdf5283d670c4de6396b3d89e57b064
- Die Version: Morpheus-0.0.5-x64.dmg

---------
**Morpheus Version 0.0.5 für Linux Debian**
- Herunterladen: https://drive.google.com/file/d/1PQ3n7LXeJHe_jmkYLDUQ9fWjZQTWbHCB/view?usp=sharing
- Anweisungen: Zur Installation führen Sie diesen Befehl aus:
sudo dpkg -i /path/to/your/morpheus.deb
HINWEIS: Ersetzen Sie im obigen Befehl "/path/to/your/morpheus.deb" mit Ihrem Pfad zum morpheus_0.0.5_amd64.deb Datei.
- SHA Hash für die Verifizierung:
b227e7bcb21ec9e8e2b4bf9510a2e1f224953fe5
Die Version: morpheus_0.0.5_amd64.deb
---------

Erste Interaktion mit Morpheus 22. Oktober 2023.
![FirstInteractionWithMorpheus20231022](https://github.com/MorpheusAIs/Morpheus/assets/1563345/35509f3a-4346-4f58-bb60-f7881fd10f7e)

## Morpheus-Smart-Contracts
Bei Kettenaktionen, die durch den Morpheus-Smart-Contract validiert werden müssen.

1. Fork des N2 Yield Smart Contract wird auf Arbitrum wieder eingesetzt
- A) Sperre ETH durch Thorchain, spende Erlöse an Programmierer + Compute-Anbieter.
- B) Berechnung des Anteils der gespendeten ETH 

2. Endgültig nachweisbare Zerstörung von MOR:
- A) Brennadresse oder Brennfunktion für MOR-Tokens.

3. ERC20 Mustervertrag für die Ausstellung von MOR
- A) Mint MOR Token täglich an Capital + Gemeinschaft anteilig zum gespendeten ETH Ertrag.
- B) Mint MOR-Token täglich an Programmierer + Compute-Anbieter anteilig zu MOR über Gebühren verbrannt.

4. Beweis für Morpheus - Demonstration von Datenschutz, Open Source und Sicherheit
- A) Veröffentlichen Sie eine Liste der geprüften Agenten und ihre Smart Rank-Bewertungen.
- B) Veröffentlichung der Liste der geprüften LLMs und ihrer Smart Rank-Bewertungen.
- C) Veröffentlichen Sie eine Liste von Smart Contracts und deren Smart Rank-Bewertungen.
- D) Veröffentlichen Sie eine Liste der Prompts und ihrer Smart Rank-Bewertungen.

5. Sicherungsfonds
- A) Verteilen Sie MOR & ETH im Falle von Hacks, Fehlern, Bugs oder anderen Angriffen, die Verluste verursachen. 
- B) Vordefinierte Szenarien für die Auszahlung. Richtlinien für Forking/Rollback in extremen Fällen.
- C) Entwickler, die für die Ermittlung von Fällen von Angriffen und deren Abhilfe zuständig sind. 
- D) Mittel für Bug Bounties / weiße Hut-Hacker.
- E) Mittel für den Schutz vor nationalstaatlichen Akteuren.

## Morpheus Smart Contract Diagramme
Diagramme und Beschreibungen der MOR-Prägung und -Brennung.
Beschreibungen der erforderlichen Smart Contract.
Diagramme über die Verteilung der ETH. 

### Morpheus MOR Smart-Contract Rewards Distribution
![new-buckets](https://github.com/SmartAgentProtocol/SmartAgents/assets/76454555/cd57bae7-2a56-4a55-bf3e-1f810f3fba9c)

### MOR-Token-Verteilung am Beispiel von Tag 1 und Tag 2.
![Untitled spreadsheet - Google Sheets 2023-10-15 13-28-08](https://github.com/MorpheusAIs/Morpheus/assets/76454555/6ff7869d-bbd6-46b5-8673-6a59b75906e1)

## Beispiel einer Verteilungsberechnung für Adresse 0x123 ETH Contributor

### Schritt Eins
![Diagram1ofETHDontator](https://github.com/SmartAgentProtocol/SmartAgents/assets/1563345/fead528c-d628-449e-a3a3-2f53904f4a3d)

### Schritt zwei
![ETHGivenDiagram2](https://github.com/MorpheusAIs/Morpheus/assets/1563345/915020e8-d342-48bc-85ee-367de0325680)

### Step Three
![Diagram3ForETHGiven](https://github.com/MorpheusAIs/Morpheus/assets/1563345/a3f455af-56de-4c6b-9688-5b9e91673e5a)

## Beispiel einer Verteilungsberechnung für Adresse 0x123 Compute-Anbieter

### Schritt Eins
![MORForCompute](https://github.com/SmartAgentProtocol/SmartAgents/assets/1563345/bef69c69-0420-441f-97f0-7e8195844f57)

### Schritt zwei
![MORForCompute2](https://github.com/SmartAgentProtocol/SmartAgents/assets/1563345/a6f30da5-5441-4f0a-be80-c5798f5920cd)

### MOR-Token-Verteilung Kreisdiagramm
![mordist](https://github.com/MorpheusAIs/Morpheus/assets/76454555/4157efe7-6abf-404a-87f9-a8dc76cd4799)

## Morpheus Entwickler Tools und Tech Stack.
- Llama2 - Robust open source LLM lokal ausgeführt.
- Ollama - Verpackung für die einfache Installation von Llama2.
- LangChain - Entwicklerwerkzeug für die Verbindung von LLM mit Vector-Speichern und APIs.
- LangSmith Editor - Niedriger Code für den Aufbau von Agenten auf LangChain.
- SmartContractRank Algorithm - Kuratieren von Smart Contracts für den Benutzer auf der Grundlage seiner Intention
- AgentRank Algorithm - Kuratieren spezialisierter Agenten zur Ausführung von Aktionen für den Benutzer.
- PromptRank Algorithm - Kuratieren von Prompts für die Nutzer auf der Grundlage der geplanten Absicht/Aktion.
- Filecoin - Bereitstellung von Speicher und Cloud Compute
- Akash Network - Offenes Rechennetz für den Betrieb von LLMs/Agenten.
- Wallets - Shapeshift, Exodus und andere Open-Source-Optionen.

## Morpheus Vollknotendiagramme für den Agenten / LLMs für Web3-Aktionen. 
Prüfungen von Agenten durch Programmierer, die einen " Agent Proof " erstellen, der belegt, dass die angegebenen Funktionen des Agenten der Beschreibung entsprechen. Und natürlich keinen bösartigen Code enthält.

Platzhalter für die Beschreibung des Auditprozesses, wer Audits durchführen kann und wie die Ergebnisse zu zertifizieren sind. Auch Anreize für Auditoren.

Prompt-Proof, der zum Zeitpunkt einer Benutzerinteraktion generiert wird und die ausgedrückte Absicht zeigt, mit der Auswahl des Smart Contracts übereinstimmt und die Transaktionswerte mit dem Benutzer bestätigt. 

## Morpheus Benutzer- und Mitwirkungsdiagramm
![Morpheus User   Contributor Diagram](https://github.com/MorpheusAIs/Morpheus/assets/1563345/2cff8d70-c116-472f-a431-8a82bfa22f9b)

### Das Diagramm zeigt den UX-Fluss von der Benutzeranfrage bis zur Genehmigung der Web3-Aktion.
![UX flow for prompted web3 tasks and ticketing](https://github.com/MorpheusAIs/Morpheus/assets/76454555/942b20fb-d67e-4a57-af2c-cd24a89690a5)

### Das Diagramm zeigt die lokale Installationsversion von Morpheus.
![MorpheusLocalDiagram](https://github.com/SmartAgentProtocol/SmartAgents/assets/1563345/a0564914-cddb-42e4-b0f4-8c2310db6a66)

### Das Diagramm zeigt die Morpheus P2P Installationsversion.
![MorpheusP2PDiagram](https://github.com/SmartAgentProtocol/SmartAgents/assets/1563345/a7eeb31f-3d38-4233-a45f-e9b91ad84ba2)

### Das Diagramm zeigt die dezentralisierte Version von Morpheus.
![MorpheusDecentralized](https://github.com/SmartAgentProtocol/SmartAgents/assets/1563345/1699f2de-cc18-42e8-a05c-32b3307baa20)

## Gemeinschaft
- Smart Agency - Freiberufliche Entwickler, die Anwendungsfälle / Agenten für Morpheus-Nutzer entwickeln.
- Globale Entwickler-Gemeinschaft - Wachsende Entwickler-, Startup- und Nutzer-Gemeinschaft.
- Die Gemeinschaft rekrutiert ETH-Inhaber, die den Morpheus-Entwicklern, -Rechnern und -Gemeinschaft Erträge spenden.
- Verteilte Entwicklungsgruppe - Smart Contract-Entwickler programmieren Morpheus Smart Contract.
- Morpheus Dapps - Marktplatz für Morpheus-Integrationen mit dem Smart Agent des Nutzers.
