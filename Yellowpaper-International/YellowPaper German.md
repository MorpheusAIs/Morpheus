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
![new-buckets](https://github.com/0xgroundfloor/Morpheus-Images/blob/main/Yellowpaper-Images/img1-German-YP.png)

### MOR-Token-Verteilung am Beispiel von Tag 1 und Tag 2.
![Untitled spreadsheet - Google Sheets 2023-10-15 13-28-08](https://github.com/0xgroundfloor/Morpheus-Images/blob/main/Yellowpaper-Images/img2-German-YP.png)

## Beispiel einer Verteilungsberechnung für Adresse 0x123 ETH Contributor

### Schritt Eins
![Diagram1ofETHDontator](https://github.com/0xgroundfloor/Morpheus-Images/blob/main/Yellowpaper-Images/img3-German-YP.png)

### Schritt zwei
![ETHGivenDiagram2](https://github.com/0xgroundfloor/Morpheus-Images/blob/main/Yellowpaper-Images/img4-German-YP.png)

### Step Three
![Diagram3ForETHGiven](https://github.com/0xgroundfloor/Morpheus-Images/blob/main/Yellowpaper-Images/img5-German-YP.png)

## Beispiel einer Verteilungsberechnung für Adresse 0x123 Compute-Anbieter

### Schritt Eins
![MORForCompute](https://github.com/0xgroundfloor/Morpheus-Images/blob/main/Yellowpaper-Images/img6-German-YP.png)

### Schritt zwei
![MORForCompute2](https://github.com/0xgroundfloor/Morpheus-Images/blob/main/Yellowpaper-Images/img7-German-YP.png)

### MOR-Token-Verteilung Kreisdiagramm
![mordist](https://github.com/0xgroundfloor/Morpheus-Images/blob/main/Yellowpaper-Images/img8-German-YP.png)

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
![Morpheus User   Contributor Diagram](https://github.com/0xgroundfloor/Morpheus-Images/blob/main/Yellowpaper-Images/img9-German-YP.png)

### Das Diagramm zeigt den UX-Fluss von der Benutzeranfrage bis zur Genehmigung der Web3-Aktion.
![UX flow for prompted web3 tasks and ticketing](https://github.com/0xgroundfloor/Morpheus-Images/blob/main/Yellowpaper-Images/img10-German-YP.png)

### Das Diagramm zeigt die lokale Installationsversion von Morpheus.
![MorpheusLocalDiagram](https://github.com/0xgroundfloor/Morpheus-Images/blob/main/Yellowpaper-Images/img11-German-YP.png)

### Das Diagramm zeigt die Morpheus P2P Installationsversion.
![MorpheusP2PDiagram](https://github.com/0xgroundfloor/Morpheus-Images/blob/main/Yellowpaper-Images/img12-German-YP.png)

### Das Diagramm zeigt die dezentralisierte Version von Morpheus.
![MorpheusDecentralized](https://github.com/0xgroundfloor/Morpheus-Images/blob/main/Yellowpaper-Images/img13-German-YP.png)

## Gemeinschaft
- Smart Agency - Freiberufliche Entwickler, die Anwendungsfälle / Agenten für Morpheus-Nutzer entwickeln.
- Globale Entwickler-Gemeinschaft - Wachsende Entwickler-, Startup- und Nutzer-Gemeinschaft.
- Die Gemeinschaft rekrutiert ETH-Inhaber, die den Morpheus-Entwicklern, -Rechnern und -Gemeinschaft Erträge spenden.
- Verteilte Entwicklungsgruppe - Smart Contract-Entwickler programmieren Morpheus Smart Contract.
- Morpheus Dapps - Marktplatz für Morpheus-Integrationen mit dem Smart Agent des Nutzers.
