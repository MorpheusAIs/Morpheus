# Morpheus Yellow Paper

Questo documento descrive i dettagli tecnici del nodo completo Morpheus, del contratto intelligente Morpheus e delle prove correlate.
Presentato così come scritto nel whitepaper contribuito dagli sviluppatori anonimi Morpheus, Trinity & Neo. Link al whitepaper qui: https://github.com/SmartAgentProtocol/SmartAgents/blob/main/MorpheusWP.md

## La versione locale 0.0.5 di Morpheus è attiva su:
---------
**Versione Morpheus 0.0.5 per Mac**
- Scarica da Google Drive: https://drive.google.com/file/d/1x-wR4HWjKqT_g6VRjrWPXu3rVm9ukOc9/view?usp=sharing
- SHA 256 hash per la convalida: 9092d543023fb95086cf4a7039d42cbcbbdf5283d670c4de6396b3d89e57b064
- Versione: Morpheus-0.0.5-x64.dmg

---------
**Versione Morpheus 0.0.5 per Linux Debian**
- Scarica: https://drive.google.com/file/d/1PQ3n7LXeJHe_jmkYLDUQ9fWjZQTWbHCB/view?usp=sharing
- Istruzioni: Per installare, esegui questo comando:
sudo dpkg -i /path/to/your/morpheus.deb
NOTA: Nel comando sopra, sostituisci "/path/to/your/morpheus.deb" con il tuo percorso al file morpheus_0.0.5_amd64.deb.
- SHA Hash per la verifica:
b227e7bcb21ec9e8e2b4bf9510a2e1f224953fe5
Versione: morpheus_0.0.5_amd64.deb
---------

Prima interazione con Morpheus il 22 ottobre 2023.
![PrimaInterazioneConMorpheus20231022](https://github.com/MorpheusAIs/Morpheus/assets/1563345/35509f3a-4346-4f58-bb60-f7881fd10f7e)

## Contratti Intelligenti Morpheus
Azioni on-chain che devono essere convalidate dal contratto intelligente Morpheus.

1. Fork del Contratto Intelligente N2 Yield Ridistribuito Su Arbitrum
- A) Blocca ETH attraverso Thorchain, dona rendimento a Coders + Fornitori di Calcolo.
- B) Calcola la proporzione di ETH donata

2. Distruzione Provabile Eterna di MOR:
- A) Indirizzo di burn o funzione di burn per i token MOR.

3. Contratto Modello ERC20 Per l'Emissione di MOR
- A) Emetti token MOR giornalmente a Capital + Comunità in proporzione al rendimento ETH donato.
- B) Emetti token MOR giornalmente a Coders + Fornitori di Calcolo in proporzione a MOR bruciato tramite commissioni.

4. Proof of Morpheus - Dimostrazione di Privacy, Open Source e Sicurezza
- A) Pubblicare l'elenco degli Agenti auditati e i loro punteggi Smart Rank.
- B) Pubblicare l'elenco degli LLM auditati e i loro punteggi Smart Rank.
- C) Pubblicare l'elenco dei Contratti Intelligenti e i loro punteggi Smart Rank.
- D) Pubblicare l'elenco delle Prompts e i loro punteggi Smart Rank.

5. Fondi di Protezione
- A) Distribuire MOR ed ETH in caso di attacchi, errori, bug o altri eventi che causano perdite.
- B) Insieme predefinito di scenari per il pagamento. Politiche per fork/rollbacks nei casi estremi.
- C) Sviluppatori responsabili della determinazione dei casi di attacco e delle relative soluzioni.
- D) Fondi per bug bounty/hacker etici.
- E) Fondi per la protezione da attori di Stati Nazionali.

## Diagrammi dei Contratti Intelligenti Morpheus
Diagrammi più descrizioni della creazione e distruzione di MOR.
Descrizioni dei contratti intelligenti richiesti.
Diagrammi che dettagliano la distribuzione di ETH.

### Distribuzione delle Ricompense dei Contratti Intelligenti Morpheus MOR
![nuovi-secchi](https://github.com/SmartAgentProtocol/SmartAgents/assets/76454555/cd57bae7-2a56-4a55-bf3e-1f810f3fba9c)

### Esempio di Distribuzione dei Token MOR del Giorno 1 e Giorno 2.
![Foglio di calcolo senza titolo - Fogli Google 2023-10-15 13-28-08](https://github.com/MorpheusAIs/Morpheus/assets/76454555/6ff7869d-bbd6-46b5-8673-6a59b75906e1)

## Esempio di Calcolo della Distribuzione Per l'Indirizzo 0x123 Contributore ETH

### Passo Uno
![Diagramma1delDonaETH](https://github.com/SmartAgentProtocol/SmartAgents/assets/1563345/fead528c-d628-449e-a3a3-2f53904f4a3d)

### Passo Due
![DatoETHDiagramma2](https://github.com/MorpheusAIs/Morpheus/assets/1563345/915020e8-d342-48bc-85ee-367de0325680)

### Passo Tre
![Diagramma3PerETHDato](https://github.com/MorpheusAIs/Morpheus/assets/1563345/a3f455af-56de-4c6b-9688-5b9e91673e5a)

## Esempio di Calcolo della Distribuzione Per l'Indirizzo 0x123 Fornitore di Calcolo

### Passo Uno
![MORPerCompute](https://github.com/SmartAgentProtocol/SmartAgents/assets/1563345/bef69c69-0420-441f-97f0-7e8195844f57)

### Passo Due
![MORPerCompute2](https://github.com/SmartAgentProtocol/SmartAgents/assets/1563345/a6f30da5-5441-4f0a-be80-c5798f5920cd)

### Diagramma a Torta della Distribuzione dei Token MOR
![distribuzionemor](https://github.com/MorpheusAIs/Morpheus/assets/76454555/4157efe7-6abf-404a-87f9-a8dc76cd4799)

## Strumenti e Tech Stack dello Sviluppatore Morpheus.
- Llama2 - LLM open source e robusto eseguito in locale.
- Ollama - Confezionamento per un'installazione facile di Llama2.
- LangChain - Strumento per sviluppatori per connettere LLM a store e API di Vector.
- LangSmith Editor - Low code per la creazione di agenti su LangChain.
- Algoritmo SmartContractRank - Curare i contratti intelligenti per l'utente in base all'intento.
- Algoritmo AgentRank - Curare agenti specializzati per eseguire azioni per l'utente.
- Algoritmo PromptRank - Curare le richieste per gli utenti in base all'intento/azione proiettata.
- Filecoin - Provisione di storage e cloud computing.
- Akash Network - Rete di calcolo aperta per eseguire LLM/agenti.
- Portafogli - Shapeshift, Exodus, altre opzioni open source.

## Diagrammi dei Nodi Completi Morpheus per Agenti/LLM per Azioni Web3.
Audit degli Agenti eseguiti da Coders generando una "Prova dell'Agente" che le funzioni dichiarate dell'Agente siano come presentate. E ovviamente, non contenga codice dannoso.

Segnaposto per la descrizione del processo di audit, chi può condurre audit e come certificare i risultati. Incentivi pagati agli auditori.

Prova della Prompt generata al momento di un'interazione dell'utente che mostra l'intento espresso, corrisponde alla selezione del contratto intelligente e i valori della transazione sono confermati con l'utente.

## Diagramma Utente e Collaboratore Morpheus
![Diagramma Utente   Collaboratore Morpheus](https://github.com/MorpheusAIs/Morpheus/assets/1563345/2cff8d70-c116-472f-a431-8a82bfa22f9b)

### Il diagramma mostra il flusso UX dalla richiesta dell'utente all'approvazione dell'azione Web3.
![Flusso UX per compiti Web3 richiesti e gestione dei ticket](https://github.com/MorpheusAIs/Morpheus/assets/76454555/942b20fb-d67e-4a57-af2c-cd24a89690a5)

### Il diagramma mostra la versione di installazione locale di Morpheus.
![Diagramma Morpheus Local](https://github.com/SmartAgentProtocol/SmartAgents/assets/1563345/a0564914-cddb-42e4-b0f4-8c2310db6a66)

### Il diagramma mostra la versione di installazione peer-to-peer di Morpheus.
![Diagramma Morpheus P2P](https://github.com/SmartAgentProtocol/SmartAgents/assets/1563345/a7eeb31f-3d38-4233-a45f-e9b91ad84ba2)

### Il diagramma mostra la versione decentralizzata di Morpheus.
![Morpheus Decentralizzato](https://github.com/SmartAgentProtocol/SmartAgents/assets/1563345/1699f2de-cc18-42e8-a05c-32b3307baa20)

## Community
- Smart Agency - Sviluppatori freelance che creano casi d'uso/agenti per gli utenti di Morpheus.
- Comunità Globale degli Sviluppatori - Crescita della comunità di sviluppatori, startup e utenti.
- Comunità che recluta detentori di ETH per donare rendimenti a sviluppatori Morpheus, calcolo e comunità.
- Gruppo di Sviluppo Distribuito - Sviluppatori di contratti intelligenti per programmare il Contratto Intelligente Morpheus.
- Dapps Morpheus - Marketplace per le integrazioni Morpheus con l'agente intelligente dell'utente.
