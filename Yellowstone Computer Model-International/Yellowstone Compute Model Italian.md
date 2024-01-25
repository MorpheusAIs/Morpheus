![Immagine1perYellowstone](https://github.com/MorpheusAIs/Morpheus/assets/1563345/80a6c1cf-fe52-42ba-bfd4-91d9faf67f07)

# Morpheus Modello di Calcolo "Yellowstone"
### Erik Voorhees
### 3 gennaio 2024

Una revisione suggerita della struttura tokenomica di Morpheus per l'incentivazione del calcolo su una rete AI decentralizzata. 
Visualizza su Notion: https://defiant-wolfsbane-830.notion.site/Morpheus-Yellowstone-Compute-Model-2ca9b4e7e1374c898937fdbd1b964cc1

## Riassunto
Nel Modello di Calcolo Yellowstone, la rete Morpheus paga i Provider solo per il Calcolo effettivamente fornito attraverso un processo di offerta competitiva e assegna la produzione scarsa di Token pro-rata ai detentori di token MOR in base al saldo, anziché al pagamento. Ciò migliora drasticamente l'esperienza utente riducendo al minimo la vulnerabilità Sybil. Yellowstone conferisce anche metriche importanti come il tempo e un test Pass/Fail per garantire che i Provider siano sufficientemente rapidi e precisi. Yellowstone preserva la privacy evitando di inviare mai prompt o risultati attraverso il Router e minimizza le transazioni blockchain per consentire una scala operativa ampia. Attraverso questo modello, MOR raggiunge un valore fondamentale poiché consente l'accesso perpetuo (sebbene non illimitato) a un calcolo senza permessi, senza richiedere transazioni per inferenza.

Se adottato, questo documento sostituisce la sezione "Prova di Calcolo, Registrazione e Ricompensa" del [Whitepaper di Morpheus](https://github.com/MorpheusAIs/Morpheus/blob/main/WhitePaper.md)

## Contesto
Morpheus utilizza la tokenomia per incentivare un calcolo sufficiente e scalabile come risorsa per l'IA generativa decentralizzata e senza permessi. Nella sua concezione originale, Morpheus emetteva il 24% delle emissioni di MOR direttamente ai Provider di Calcolo, pro-rata in base alle richieste di inferenza ricevute, e privilegiava le richieste di inferenza a quei provider in base alla quantità di MOR che possedevano. 

### Dal white paper originale:
“Le commissioni di transazione MOR pro-rata bruciate da ciascun Provider di Calcolo fungono da prova dello stato del Provider di Calcolo e guadagnano una proporzione dei token MOR ogni giorno.
 
Ad esempio, se ci sono 100 Provider di Calcolo il giorno 1 al lancio della rete, ognuno riceve una ricompensa pro-rata in base alla quantità di MOR che ha bruciato tramite commissioni. In questo caso, presumendo che ciascuno dei 100 provider di calcolo abbia bruciato 100 MOR, allora l'1% dei 3.456 token MOR ogni giorno = 34,56 MOR.”

### Ci sono tre problemi principali con questo approccio:
1) Richiede agli utenti di pagare commissioni per transazione per inferenza. Anche se basse, questa è una frizione sostanziale e provocherà una scarsa esperienza utente e un'eterna inferiorità rispetto all'UX di OpenAI. Richiede anche almeno una transazione blockchain per inferenza, che probabilmente non è scalabile nemmeno su L2. Ogni evento di inferenza ha un costo estremamente basso, e se fosse richiesta una transazione blockchain, l'economia sarebbe impraticabile. 
2) Questo modello è notevolmente sfruttabile perché il ricavo previsto per i provider di calcolo è molto più alto dei costi effettivi del calcolo. Un avversario potrebbe quindi inondare richieste di inferenza di spam al proprio nodo di Provider di Calcolo e guadagnare una porzione relativamente grande di token MOR ogni giorno, anche se non è stato fornito alcun valore economico a nessuno. Probabilmente, ciò porterebbe a grandi quantità di calcolo iniziale (non utilizzato), che scompare una volta che l'enorme opportunità di ricavo si dissipa, e i MOR spesi per quel sussidio iniziale sarebbero stati sprecati/persi.  
3) Se le richieste di inferenza sono prioritarie in base alla quantità di MOR detenuta dai Provider, allora le prestazioni di quei provider (tempo di risposta) e il costo del loro elaborazione delle inferenze sono ignorati dalla rete, ed è proprio su questi due fattori che la rete dovrebbe cercare di ottimizzare (il tempo di risposta e il costo del calcolo dovrebbero idealmente essere ridotti al minimo possibile). Se il provider con la maggior quantità di MOR utilizzava una GPU da $200 dai tempi del college, le prestazioni di inferenza per molti utenti sarebbero estremamente scadenti. La priorità dovrebbe essere basata sul prezzo dell'offerta e sulle prestazioni, non sul possesso di MOR.

Di seguito viene proposto il Modello "Yellowstone" che modifica la tokenomia di Morpheus per la fornitura di calcolo per affrontare i problemi sopra elencati. Questo modello funziona indipendentemente da quale parte delle emissioni sia allocata al calcolo, e supporremo lo status quo del 24% delle emissioni totali.

### Gli obiettivi sono:
* Consentire agli utenti di non pagare per inferenza (idealmente, di non pagare affatto)
* Ottenere un approvvigionamento efficiente, scalabile e sostenibile di risorse di calcolo senza permessi senza pagare eccessivamente per esse
* Incentivare bassi tempi di risposta e concorrenza sui costi tra i fornitori di calcolo
* Minimizzare il numero di transazioni blockchain (sia L2 che altro)
* Dimostrare una domanda fondamentale economicamente valida per MOR

## Modello Yellowstone
Quattro componenti coinvolti:

### Utenti
* Hanno richieste
* Vogliono calcolo veloce/accurato gratuitamente e senza censura/sorveglianza

### Fornitori
* Hanno calcolo
* Vogliono denaro (MOR)

### Router 
* Motore di elaborazione ad alto throughput
* Può essere relativamente centralizzato inizialmente, alla fine deve decentralizzarsi

### Contratto di Calcolo
* Contratto intelligente senza permessi che riceve emissioni di MOR, tiene traccia di crediti e addebiti ai fornitori, e paga i fornitori quando viene chiamato.

## Standard di Pesi e Misure

C'è un'unità atomica di inferenze in AI, misurata in inferenze al secondo (IPS). Ciò può essere concettualmente paragonato al wei sulla blockchain. Le inferenze vengono utilizzate per definire i tassi nel router di Yellowstone. Il peso di un'unità AI singola di Morpheus è quindi un'infrazione. A seconda del tipo di richiesta, ciò può essere applicato a qualsiasi attività di calcolo.  

Con il merge tra AI e blockchain, Morpheus cerca di fornire uno standard open-source di misurazioni al fine di chiarire la terminologia utilizzata sia dall'AI che dalla Blockchain.

Ci sono due tipi di prompt, definiti dalle dimensioni della risposta restituita da un modello:  

***Prompt di Lunghezza Determinata***, dove la risposta tiene conto della lunghezza della risposta da restituire. Esempi di questo sono:
- Chat/Creazione di immagini
- Diagnosi di malattie
- Riconoscimento oggetti
- Rilevamento frodi

I **Prompt di Lunghezza Non Determinata** richiedono risorse per rispondere che sono conosciute solo dopo la creazione della risposta. Esempi di prompt con risposte non deterministiche sono:
- Cantare una sonata su degli spaghetti.
- Generare un video di Buon Compleanno
- Combinare il modello X con il modello Y
- Tagliare un modello 3D in un file .stl

Yellowstone si concentra su Prompt di Lunghezza Determinata. Il router descritto sarà costruito in modo da gestire prompt indeterminati in futuro, ma non per servirli oggi. Per realizzare ciò, utilizziamo una misura standardizzata di Intelligenza Artificiale Decentralizzata (DeAI).

## Tariffe DeAI

### Espressioni di inferenza al secondo:

| Tipo | Risposta | Tariffa |
|------|----------|------|
| Determinato | Linguaggio | Token Inferiti per secondo (TPS)|
| Non Determinato - media | Audio | Campioni Inferiti per secondo (ISPS) |
| Non Determinato - media | Video | Fotogrammi Inferiti per secondo (IFPS) |
| Non Determinato - tecnologia futura | Formato Futuro Sconosciuto | NA |

La prima misura di inferenza per il router di Yellowstone sarà in token. Altre forme di inferenza seguiranno.

### Tempo

Il tempo di blocco per l'inferenza è di 12 secondi, il che significa che un blocco di transazioni di inferenza viene pubblicato e contabilizzato 5 volte al minuto.

## Definizioni

**"Utenti"**: definiti come qualsiasi entità che ha un indirizzo MOR ed invia Richieste al Router, utilizzando il calcolo. Questo può essere una persona specifica che invia Richieste da un nodo desktop Morpheus, o potrebbe essere un bot, o potrebbe essere un'azienda o un sito web di terze parti che interagisce con la rete Morpheus per conto dei propri utenti finali (l'uso delle inferenze degli utenti finali non viene tracciato o considerato nel contratto di calcolo, tranne quando si verifica un errore di inferenza).

**"Fornitori"**: definiti come qualsiasi entità, in esecuzione di un nodo che fornisce risorse di calcolo, ha un indirizzo MOR e offre offerte di Token attraverso il Router. Quando un Fornitore vince l'offerta dal Router, il Fornitore fornisce la risorsa di calcolo (GPU, ecc.) per vari modelli di intelligenza artificiale all'Utente.

**"Router"**: definito come un'applicazione software che ha un indirizzo MOR e negozia il mercato bilaterale tra Utenti e Fornitori. Il Router registra e tiene traccia degli indirizzi e delle offerte dei Fornitori, elabora le Richieste degli Utenti, registra [millisecondi] e test Pass/Fail delle Richieste elaborate, e istruisce il Contratto di Calcolo ad accreditare i Fornitori idonei per il pagamento in MOR. Il Router non invia né riceve transazioni MOR (né transazioni su alcuna blockchain). Il Router non vede mai il contenuto di una Richiesta, né la risposta.

**"Contratto di Calcolo"**: definito come un contratto intelligente che ha un indirizzo MOR, riceve tutte le emissioni MOR assegnate al bucket di calcolo, tiene traccia degli importi dovuti ai Fornitori idonei e paga MOR ai Fornitori idonei quando richiesto.

**"Token" ("T")**: è la quantità più piccola di lettere o pixel offerti attraverso il router. Spesso si tratta di ~4 caratteri di testo o 5x5 pixel di immagine, ecc. Questo non deve essere confuso con i "token" delle blockchain come i token ERC20 o il token MOR stesso.

**"TokenMax"** di seguito si riferisce al numero massimo di Token accettati come pagamento dal Router.

**"RFC"**: sta per "Richiesta di Calcolo". Un utente invia un RFC al Router e specifica l'[LLM] a cui l'Utente desidera accedere, così come il [TokenMax], che è un limite sui T accettabili nella risposta. L'Utente vorrà limitarlo perché numeri più alti = tempi di attesa più lunghi per le risposte e contano di più verso [UserMax], che è limitato ogni giorno.

### Protezioni del Contratto

Al fine di prevenire un attacco che sviluppa o aumenta il numero di MOR manipolando l'uso di qualsiasi calcolo inutilizzato, il pool di MOR inutilizzato assegnato ai Fornitori di Calcolo può essere ridotto di non più del 1% per ogni blocco giornaliero. Questo è equivalente alle normali emissioni di calcolo + 1%.

### Incentivo all'Avvio del Calcolo

Nel primo anno successivo al periodo di avvio del Contratto di Capitale, i primi 100 Fornitori di Calcolo avranno diritto a una quantità pro-quota del 2,4% delle emissioni MOR. Questo viene calcolato dai router e registrato nel contratto di calcolo.

## Workflow
1) Utenti, Fornitori e Router creano tutti le chiavi pubbliche MOR (questa è la loro identità, tutti i messaggi firmati come tali).
2) Se un Utente detiene un saldo di MOR, l'Utente può inviare al Router un messaggio RFC (Richiesta di Calcolo) firmato. L'Utente specifica [LLM] e [TokenMax].
3) Il Router dà priorità alle RFC in base al saldo MOR dell'Utente (risolve il problema di sybil).
4) Il Router seleziona il Fornitore che supporta l'[LLM], con priorità in base alla più bassa offerta per Token in MOR.
5) Il Router invia un controllo di vitalità al Fornitore. Se superato, quindi
6) Il Router connette l'Utente al Fornitore
7) L'Utente invia una Query ([LLM],[prompt]) al Fornitore
8) Il Fornitore elabora la Query, invia il Risultato all'Utente
9) L'Utente segnala il tempo [millisecondi] tra il passaggio 4 e 5, [Token] consegnati e Pass/Fail al Router
10) Il Router istruisce il Contratto di Calcolo ad accreditare il Fornitore con MOR se [millisecondi] per [Token] non è peggiore del X% sotto la media delle passate Z richieste per quel [LLM] e se l'Utente ha segnalato [Pass].
11) (In un secondo momento) Il Fornitore richiede il pagamento di MOR dal Contratto di Calcolo e il Contratto di Calcolo invia il pagamento di MOR se valido (prima transazione blockchain finora, può essere raggruppata).

![ComputeContractImage2](https://github.com/MorpheusAIs/Morpheus/assets/1563345/e66ea20c-9851-4f9e-9caa-66c6d798c462)

## Risultato
* L'Utente riceve un Risultato rapido per la sua Query e non paga nulla (ciò porterà a un'ottima esperienza utente e quindi adozione). **Risolve Obiettivo 1.**
* Il Contratto di Calcolo paga per il Calcolo attraverso un processo di offerta competitiva e un controllo di qualità/soddisfazione dall'Utente che lo ha ordinato. **Risolve Obiettivo 2.**
* Il Fornitore riceve denaro (MOR) dal Contratto di Calcolo fintanto che la risposta è abbastanza veloce. Il Fornitore riceve esattamente ciò che ha chiesto per fornire il calcolo. Se la sua richiesta è troppo alta, altri offriranno meno, quindi il sistema è efficiente e guiderà i prezzi dei Fornitori verso il costo dell'elettricità di base.  **Risolve Obiettivo 3**
* Il numero di transazioni in blockchain è stato minimizzato (migliaia di richieste possono fluire senza una singola transazione in blockchain). **Risolve Obiettivo 4**
* La capacità di ottenere calcoli veloci e gratuiti stimola la domanda di token MOR detenuti dagli Utenti. **Risolve Obiettivo 5**
* Il passaggio 6 e 7 forniscono una privacy ragionevole (la Query non tocca mai il Router, né la Risposta). I Fornitori sono selezionati in modo un po' casuale e non conoscono mai l'identità dell'Utente se non l'indirizzo IP. Una migliore privacy può essere raggiunta successivamente con TOR + FHE
* Il saldo MOR è stato ridotto dal Contratto di Calcolo. Il contratto sarà solvente fintanto che il MOR pagato < MOR guadagnato per periodo dalle emissioni.
* Se un Utente invia un RFC che supera il [UserMax] dell'Utente, il Router rifiuterà la richiesta.

---

## Budget di Calcolo
La rete Morpheus deve determinare quanto MOR è disposta a spendere per il calcolo in un periodo dato (come ogni giorno), questo è chiamato Budget di Calcolo. Ogni periodo, fino a questa quantità di MOR può essere speso dal Contratto di Calcolo. Questo numero moltiplicato per il prezzo MOR ci dà un budget in dollari per l'acquisizione di Calcolo ogni giorno.

Domanda aperta 1: come dovrebbe essere determinato il Budget di Calcolo? L'idea più semplice è impostare il Budget di Calcolo = emissioni nel Contratto di Calcolo. In questo modo, il Contratto di Calcolo non esaurirebbe mai i token. Ma cosa fare con i token inutilizzati, dato che il massimo non verrebbe mai utilizzato ogni giorno? Questi potrebbero, forse, essere concessi pro-quota agli attuali detentori di token MOR. Oppure potrebbero essere bruciati. Oppure potrebbero rimanere inutilizzati nel Contratto di Calcolo, da spendere in futuro per il Calcolo (ma questo apre più domande di governance).

## Tasso di Accesso
La rete Morpheus assegna la risorsa scarsa della produzione di T attraverso il concetto di "Tasso di Accesso". Il Tasso di Accesso determina quanti T ogni token MOR possono accedere al giorno. L'accesso inutilizzato non si accumula. Il Tasso di Accesso è sempre visualizzato come una quantità di T per 1 token MOR (come ad esempio 1 MOR = 15.000 T). Il Tasso di Accesso è determinato in parte da MaxT, che quantifica il numero massimo di T che la rete può acquistare al giorno.

**Tasso di Accesso** = (1/Offerta di MOR) * MaxT  
**MaxT** = ((Budget di Calcolo MOR * Prezzo MOR) / Prezzo T) * 1000  
**UserMax** = MaxT * Saldo MOR dell'Utente
### Esempio di Presupposti:
**Offerta MOR** = 10.000.000 token MOR  
**Budget di Calcolo MOR** = 3.000 token MOR al giorno  
**Prezzo MOR** = $20  
**Prezzo T** = $0,002 per 1000 Ts  
**Saldo Utente** = 5 token MOR

### Risultato di Esempio:
**MaxT** = 30.000.000.000 Ts (questo è il massimo di Ts che la rete può acquistare/produrre ogni giorno)  
**Tasso di Accesso** = 3.000 (quindi ogni token MOR garantisce l'accesso a 3.000 Ts al giorno)  
**UserMax** = 15.000 (un Utente con 5 token MOR può accedere fino a 15.000 Ts al giorno)

- Ogni periodo (ogni giorno), Morpheus come rete ha abbastanza fondi per acquistare un certo numero di Ts dai fornitori di calcolo. X è una funzione della quantità di MOR che il Contratto di Calcolo è disposto a spendere (il "Budget di Calcolo") moltiplicato per il prezzo MOR corrente diviso dal tasso di mercato per Ts.
- Se il Budget di Calcolo è di 3.000 MOR e ognuno vale $20, quindi la rete può acquistare (produrre) fino a $60.000 di Ts quel giorno. Se il tasso per 1.000 Ts è di $0,002, allora la rete può acquistare fino a 30 miliardi di Ts (30m x 1000 Ts).
- Quella produzione potenziale di 30 miliardi di Ts è allocata in base al saldo MOR, pro rata. Supponiamo che ci siano 10.000.000 di MOR in circolazione. Un utente con 500 token MOR (0,005% del totale) potrebbe liberamente accedere fino a 1,5 milioni di Ts quel giorno.
- Finché il Budget di Calcolo è al di sotto del livello delle emissioni, il Contratto di Calcolo non può esaurire il MOR.
- In realtà, la maggior parte dei token si troverà in portafogli e scambi, e solo una frazione sarà utilizzata per richiedere la produzione di T.

## Note
* La domanda fondamentale di MOR proviene dagli Utenti che desiderano avere accesso all'intelligenza artificiale generativa e ad altre forme di calcolo sulla rete Morpheus.
 
* Il tipo di hardware del Fornitore è irrilevante per la rete, fintanto che soddisfano il test di pass/fail dell'Utente. Qualsiasi Fornitore che fa offerte su più Query di quante può elaborare efficientemente sarà penalizzato non superando questo test.

* Il modello sopra paga in modo importante i Fornitori SOLO quando c'è domanda per il loro calcolo. Questo impedisce la situazione in cui grandi porzioni di MOR vengono emesse prematuramente quando la rete non ne ha bisogno.

* I Fornitori dovrebbero dimostrare di avere un dato LLM, firmando l'hash del modello LLM con la loro chiave. Ciò non dimostra che lo hanno usato, ma dimostra che l'hanno scaricato e installato, il che rappresenta un lavoro, impedendo così alcune forme di frode sensibili a sybil. Se i Fornitori forniscono risultati inutili all'Utente, l'Utente può inviare [Fail] insieme a [milisecondi] al Router, e il Fornitore non verrà accreditato per quel calcolo. Morpheus non ha bisogno che tutte le risposte siano perfette... ha solo bisogno che abbastanza risposte siano abbastanza buone, rispetto alle alternative concorrenti. 

* Gli attacchi sybil che allagano la rete con RFC sono impediti dal Tasso di Accesso. Il "costo" di inviare un RFC è il costo di acquisizione di un token MOR diviso per il numero di RFC inviati per suo conto. Il costo non è mai zero eppure un utente non sentirà una perdita ogni volta che viene fatta un'RFC. 

* Il Pass/Fail è determinato dall'Utente e controlla la qualità in qualche misura. L'Utente comunica il risultato Pass/Fail insieme a [milisecondi] al Router. Se Fail, né ricompensa né punto penalità (da determinare). Non c'è incentivo a fallire falsamente un Fornitore (nessun incentivo monetario a farlo). Questo meccanismo impedisce ai Fornitori di inviare risultati veloci ma inutili.
Considerazione: forse la mancanza di Ricompensa avviene solo su Fail se il MOR dell'Utente > MOR del Fornitore. Altrimenti, solo un punto negativo che il Router può utilizzare nella sua logica di privatizzazione.

* Tutte e quattro le parti (Utente, Fornitore, Router e Contratto di Calcolo) hanno un indirizzo MOR unico come loro identità. Tutti i messaggi tra le parti richiedono firme (ma la maggior parte non richiede transazioni blockchain)

* I Fornitori devono avere un saldo non nullo per scoraggiare un attacco sybil dal lato del Fornitore.

* Se il criterio [millisecond] è più alto, la rete sarà in generale più veloce, ma scoraggerà i fornitori più piccoli.

* C'è un disincentivo a fornire risultati lenti (nessun guadagno dopo il calcolo)
  
* Un Router ospitato centralmente per iniziare va bene probabilmente (decentralizzare il Router eventualmente (IPFS? O consorzio di nodi PoS?))
