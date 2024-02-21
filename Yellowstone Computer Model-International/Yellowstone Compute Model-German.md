![Image1forYellowstone](https://github.com/MorpheusAIs/Morpheus/assets/1563345/80a6c1cf-fe52-42ba-bfd4-91d9faf67f07)

# Morpheus "Yellowstone" Berechnungsmodell
### Erik Voorhees
### 3. Januar 2024

Ein vorgeschlagener Überarbeitungsvorschlag für die Morpheus-Tokenomics-Struktur zur Anreizgebung für Berechnungen in einem dezentralen KI-Netzwerk.
Ansehen auf Notion: https://defiant-wolfsbane-830.notion.site/Morpheus-Yellowstone-Compute-Model-2ca9b4e7e1374c898937fdbd1b964cc1

## Zusammenfassung
Im Yellowstone-Berechnungsmodell zahlt das Morpheus-Netzwerk Anbietern nur für tatsächlich erbrachte Berechnungen im Rahmen eines wettbewerbsfähigen Angebotsverfahrens und verteilt die knappe Produktion von Tokens pro-rata an MOR-Token-Inhaber basierend auf dem Kontostand, anstatt auf Zahlungen. Dies verbessert drastisch die Benutzererfahrung und minimiert die Sybil-Anfälligkeit. Yellowstone integriert auch die wichtigen Metriken Zeit und einen Bestehen/Fehler-Test, um sicherzustellen, dass Anbieter angemessen schnell und genau sind. Yellowstone bewahrt die Privatsphäre, indem es niemals Aufforderungen oder Ergebnisse über den Router sendet, und minimiert Blockchain-Transaktionen, um einen großen Betriebsumfang zu ermöglichen. Durch dieses Modell erreicht MOR einen grundlegenden Wert, da es einen dauerhaften (wenn auch nicht unbegrenzten) Zugang zu berechtigten Berechnungen ermöglicht, ohne Transaktionen pro Inferenz zu erfordern.

Wenn dies angenommen wird, ersetzt dieses Papier den Abschnitt "Berechnungsnachweis, Registrierung & Belohnung" des [Morpheus-Whitepapers](https://github.com/antonbosss/Morpheus/blob/main/!KEYDOCS%20README%20FIRST!/2.WhitePaper.md).

## Hintergrund
Morpheus verwendet Tokenomics, um ausreichende und skalierbare Berechnungen als Ressource für dezentrale und berechtigungslose generative KI zu fördern. In seiner ursprünglichen Konzeption gab Morpheus 24 % der MOR-Emissionen direkt an Berechnungsanbieter aus, pro-rata abhängig von den erhaltenen Inferenzanfragen, und priorisierte Inferenzanfragen an diese Anbieter basierend darauf, wie viel MOR sie besaßen.

### Aus dem ursprünglichen Whitepaper:
"Die pro-rata durch jeden Berechnungsanbieter verbrannten MOR-Transaktionsgebühren dienen als Nachweis für den Status des Berechnungsanbieters und verdienen einen Anteil der MOR-Token jeden Tag.

Zum Beispiel, wenn es am Tag 1 des Netzwerkstarts 100 Berechnungsanbieter gibt, dann erhält jeder von ihnen eine pro-rata Belohnung basierend auf der Menge an MOR, die sie über Gebühren verbrannt haben. In diesem Fall, unter der Annahme, dass jeder der 100 Berechnungsanbieter 100 MOR verbrannt hat, beträgt 1 % der 3.456 MOR-Token jeden Tag = 34,56 MOR."

### Es gibt drei Hauptprobleme mit diesem Ansatz:
1) Es erfordert von Benutzern Gebühren pro Inferenz-Transaktion zu zahlen. Selbst wenn sie niedrig sind, stellt dies eine erhebliche Reibung dar und führt zu einer schlechten Benutzererfahrung sowie einer dauerhaften Unterlegenheit gegenüber der Benutzererfahrung von OpenAI. Es erfordert auch mindestens eine Blockchain-Transaktion pro Inferenz, was wahrscheinlich selbst auf L2s nicht skalierbar ist. Jedes Inferenzereignis ist äußerst kostengünstig, und wenn eine Blockchain-Transaktion erforderlich wäre, wären die ökonomischen Rahmenbedingungen nicht realisierbar.
2) Dieses Modell ist erheblich ausnutzbar, da die erwarteten Einnahmen für Berechnungsanbieter weit höher sind als die tatsächlichen Berechnungskosten. Ein Angreifer könnte also Spam-Inferenzanfragen an seinen eigenen Berechnungsanbieterknoten senden und einen relativ großen Teil der MOR-Token jeden Tag verdienen, obwohl kein wirtschaftlicher Wert für jemanden bereitgestellt wurde. Wahrscheinlich würde es zu großen Mengen früher (unbenutzter) Berechnungen führen, die verschwinden, sobald die riesige Einnahmemöglichkeit verschwindet, und die für diese frühe Subvention ausgegebenen MOR würden verschwendet/verloren gehen.
3) Wenn Inferenzanfragen basierend auf der Menge an MOR priorisiert werden, die von Anbietern gehalten wird, werden die Leistung dieser Anbieter (Reaktionszeit) und die Kosten ihrer Inferenzverarbeitung von Netzwerk ignoriert. Genau diese beiden Faktoren sollten jedoch vom Netzwerk optimiert werden (Reaktionszeit und Berechnungskosten sollten idealerweise so niedrig wie möglich sein). Wenn der oberste MOR-haltende Anbieter eine 200-Dollar-GPU aus seinen Studientagen betreiben würde, wäre die Inferenzleistung für viele Benutzer extrem schlecht. Die Priorität sollte auf dem Gebotspreis und der Leistung basieren, nicht auf dem MOR-Besitz.

Im Folgenden wird das vorgeschlagene "Yellowstone"-Modell präsentiert, das die Morpheus-Tokenomics für die Bereitstellung von Berechnungen modifiziert, um die oben genannten Probleme zu lösen. Dieses Modell funktioniert unabhängig davon, welcher Teil der Emissionen der Berechnung zugeordnet ist, und wir gehen von dem Status quo von 24 % der Gesamtemissionen aus.

### Die Ziele sind:
* Benutzern ermöglichen, nicht pro Inferenz zu zahlen (idealerweise überhaupt nicht zu zahlen)
* Effiziente, skalierbare und nachhaltige Bereitstellung von berechtigter Berechnungsressource ohne Überzahlung dafür
* Anreiz für geringe Reaktionszeit und Kostenwettbewerb unter Berechnungsanbietern
* Minimierung der Anzahl von Blockchain-Transaktionen (egal ob L2 oder anderswo)
* Nachweis einer wirtschaftlich fundierten grundlegenden Nachfrage nach MOR

## Yellowstone-Modell
Vier beteiligte Komponenten:

## Benutzer
* Haben Anfragen
* Möchten schnelle/genaue Berechnungen kostenlos und ohne Zensur/Überwachung

### Anbieter
* Haben Rechenleistung
* Möchten Geld (MOR)

### Router 
* Hochleistungs-Verarbeitungs-Engine
* Kann anfangs relativ zentralisiert sein, muss sich letztendlich dezentralisieren

### Berechnungsvertrag
* Berechtigter Smart Contract, der MOR-Emissionen empfängt, Guthaben und Belastungen für Anbieter verfolgt und Anbieter bei Bedarf bezahlt.

## Standardgewichte und Maße

Es gibt eine atomare Einheit von Inferenzen in KI, gemessen in Inferenzen pro Sekunde (IPS). Dies kann konzeptuell mit Wei auf der Blockchain verglichen werden. Inferenzen werden verwendet, um Raten im Yellowstone-Router zu definieren. Das Gewicht einer einzelnen Morpheus-AI-Einheit ist daher eine Inferenz. Je nach Art der Anfrage kann dies auf jede Berechnungsaufgabe angewendet werden.

Mit dem Verschmelzen von KI und Blockchain sucht Morpheus nach einem Open-Source-Standard für Messungen, um die von KI und Blockchain verwendete Terminologie zu klären.

Es gibt zwei Arten von Aufforderungen, definiert durch die Größe der Antwort, die von einem Modell zurückgegeben wird:

***Aufforderungen mit bestimmter Länge***, bei denen die Antwort die Länge der zurückgegebenen Antwort berücksichtigt. Beispiele hierfür sind:
- Chat-/Bildgenerierung
- Krankheitsdiagnose
- Objekterkennung
- Betrugsentdeckung

**Aufforderungen mit unbestimmter Länge** erfordern Ressourcen zur Antwort, die erst bekannt sind, nachdem die Antwort erstellt wurde. Beispiele für nicht deterministische Reaktionsaufforderungen sind:
- Singe eine Sonate über Spaghetti.
- Generiere ein Geburtstagsvideo
- Kombiniere Modell X mit Modell Y
- Schneide ein 3D-Modell in eine .stl-Datei

Yellowstone konzentriert sich auf Aufforderungen mit bestimmter Länge. Der beschriebene Router wird in Zukunft so konstruiert, dass er mit unbestimmten Aufforderungen umgehen kann, jedoch nicht, um sie heute zu bedienen. Um dies zu erreichen, verwenden wir eine standardisierte Messung von Dezentralisierter KI.

## DeAI-Raten

### Ausdrücke von Inferenzen pro Sekunde:

| Typ | Antwort | Rate |
|------|----------|------|
| Bestimmt | Sprache | Inferierte Token pro Sekunde (TPS)|
| Unbestimmt - Medien | Audio | Inferierte Samples pro Sekunde (ISPS) |
| Unbestimmt - Medien | Video | Inferierte Frames pro Sekunde (IFPS) |
| Unbestimmt - Zukünftige Technologie | Unbekanntes zukünftiges Format | NA |

Die erste Maßeinheit für die Inferenz im Yellowstone-Router wird in Token gemessen. Andere Inferenzformate werden folgen.

### Zeit

Die Blockzeit für die Inferenz beträgt 12 Sekunden, das bedeutet, dass ein Block von Inferenztransaktionen 5 Mal pro Minute veröffentlicht und erfasst wird.

## Definitionen

**"Benutzer"**: Jede Entität, die eine MOR-Adresse hat und Anfragen an den Router sendet, um die Berechnung durchzuführen. Dies kann eine bestimmte Einzelperson sein, die Anfragen von einem Morpheus-Desktop-Knoten aus sendet, oder es könnte ein Bot sein, oder es könnte ein Unternehmen oder eine Website von Dritten sein, die mit dem Morpheus-Netzwerk im Namen ihrer Endbenutzer interagiert (Die Nutzung der Inferenz durch Endbenutzer wird im Berechnungsvertrag nicht verfolgt oder berücksichtigt, außer bei einem Inferenzfehler).

**"Anbieter"**: Jede Entität, die einen Knoten betreibt, der Rechenressourcen bereitstellt, eine MOR-Adresse hat und Token-Gebote über den Router abgibt. Wenn ein Anbieter das Gebot des Routers gewinnt, stellt der Anbieter die Rechenressource (GPUs usw.) für verschiedene KI-Modelle für den Benutzer bereit.

**"Router"**: Eine Softwareanwendung, die eine MOR-Adresse hat und den zweiseitigen Markt zwischen Benutzern und Anbietern verhandelt. Der Router registriert und verfolgt Anbieteradressen und Gebote, verarbeitet Anfragen von Benutzern, zeichnet [Millisekunden] und Pass/Fail-Tests von verarbeiteten Anfragen auf und weist den Berechnungsvertrag an, berechtigte Anbieter für die Zahlung in MOR zu belohnen. Der Router sendet oder empfängt niemals MOR-Transaktionen (noch Transaktionen auf einer beliebigen Blockchain). Der Router sieht niemals den Inhalt einer Anfrage oder die Antwort.

**"Berechnungsvertrag"**: Ein Smart Contract, der eine MOR-Adresse hat, alle an den Berechnungseimer zugeteilten emittierten MOR empfängt, die den berechtigten Anbietern geschuldeten Beträge verfolgt und MOR an berechtigte Anbieter zahlt, wenn Anbieter Zahlung anfordern.

**"Token" ("T")**: Die kleinste Menge an Buchstaben oder Pixeln, die über den Router geboten werden. Dies sind oft ~4 Zeichen Text oder 5x5 Pixel eines Bildes usw. Dies sollte nicht mit blockchain "Tokens" wie ERC20-Token oder dem MOR-Token selbst verwechselt werden.

"TokenMax" bezieht sich unten auf eine maximale Anzahl von Tokens, die vom Router akzeptiert werden.

"RFC": steht für "Request for Compute." Ein Benutzer sendet eine RFC an den Router und gibt die [LLM]-Einheiten an, zu denen der Benutzer Zugang haben möchte, sowie [TokenMax], was eine Obergrenze für die akzeptablen T's in der Antwort darstellt. Der Benutzer wird dies begrenzen wollen, da höhere Zahlen = längere Wartezeiten für Antworten bedeuten und mehr zu [UserMax] beitragen, das jeden Tag begrenzt ist.

### Vertragsabsicherungen

Um einen Angriff zu verhindern, der die Anzahl der MOR durch Manipulation der ungenutzten Berechnung verkürzt oder erhöht, kann der Pool der für Berechnungsanbieter zugewiesenen ungenutzten MOR um höchstens 1% pro Blocktag reduziert werden. Dies entspricht den normalen Berechnungsemittenten + 1%.

### Anreiz für den Start der Berechnung

Im ersten Jahr nach der Bootsrtapping-Periode des Kapitalvertrags haben die Top 100 Berechnungsanbieter Anspruch auf einen pro-rata-Anteil von 2,4% der MOR-Emissionen. Dies wird von den Routern berechnet und im Berechnungsvertrag berücksichtigt.

## Workflow
1) Benutzer, Anbieter und Router erstellen alle MOR-Pub-Keys (dies ist ihre Identität, alle Nachrichten werden als solche signiert).
2) Wenn der Benutzer irgendeinen Betrag an MOR hält, kann der Benutzer eine signierte Anfrage für die Berechnung "RFC" an den Router senden. Der Benutzer gibt [LLM] und [TokenMax] an.
3) Der Router priorisiert RFCs basierend auf dem MOR-Guthaben des Benutzers (löst das Sybil-Problem).
4) Der Router wählt einen Anbieter aus, der das [LLM] unterstützt, priorisiert nach dem niedrigsten Gebot pro Token in MOR.
5) Der Router sendet eine Lebenszeichenüberprüfung an den Anbieter. Wenn diese erfolgreich ist, dann
6) Der Router verbindet den Benutzer mit dem Anbieter.
7) Der Benutzer sendet eine Abfrage ([LLM], [Aufforderung]) an den Anbieter
8) Der Anbieter berechnet die Abfrage und sendet das Ergebnis an den Benutzer
9) Der Benutzer meldet die Zeit [Millisekunden] zwischen Schritt 4 und 5, die gelieferten [Token] und Pass/Fail an den Router.
10) Der Router weist den Berechnungsvertrag an, dem Anbieter MOR gutzuschreiben, wenn [Millisekunden] pro [Token] nicht schlechter sind als X% unter dem Mittelwert der letzten Z-Abfragen für dieses [LLM] und wenn der Benutzer [Pass] gemeldet hat.
11) (Später) Der Anbieter fordert die Zahlung von MOR beim Berechnungsvertrag an, und der Berechnungsvertrag sendet die MOR-Zahlung, wenn sie gültig ist (erste Blockchain-Transaktion bisher, kann zusammengefasst werden).

![ComputeContractImage2](https://github.com/MorpheusAIs/Morpheus/assets/1563345/e66ea20c-9851-4f9e-9caa-66c6d798c462)

## Ergebnis
* Der Benutzer erhält ein schnelles Ergebnis für ihre Anfrage und zahlt nichts (das wird zu einer erstaunlichen UX und damit zu einer Annahme führen). **Löst Ziel 1.**
* Der Berechnungsvertrag bezahlt die Berechnung durch einen Wettbewerbsprozess und eine Überprüfung der Qualität/Zufriedenheit durch den Benutzer, der sie bestellt hat. **Löst Ziel 2.**
* Der Anbieter erhält Geld (MOR) vom Berechnungsvertrag, solange die Antwort schnell genug erfolgt. Der Anbieter erhält genau das, was er gefragt hat, um die Berechnung bereitzustellen. Wenn seine Anfrage zu hoch ist, bieten andere niedriger, und das System ist effizient und wird die Anbieterpreise auf die Kosten der Grundstromerzeugung drücken.  **Löst Ziel 3**
* Die Anzahl der On-Chain-Transaktionen wurde minimiert (viele Tausende von Abfragen können ohne eine einzige On-Chain-Transaktion fließen). **Löst Ziel 4**
* Die Möglichkeit, schnelle, kostenlose Berechnungen zu erhalten, treibt die Nachfrage nach MOR-Token voran, die von Benutzern gehalten werden. **Löst Ziel 5**
* Schritte 6 und 7 bieten eine angemessene Privatsphäre (Die Abfrage berührt niemals den Router, ebenso wenig wie das Ergebnis). Anbieter werden etwas zufällig ausgewählt und kennen niemals die Identität des Benutzers, außer der IP-Adresse. Bessere Privatsphäre kann später mit TOR + FHE erreicht werden.
* Der MOR-Saldo wurde vom Berechnungsvertrag reduziert. Der Vertrag bleibt solvent, solange MOR-Zahlungen < MOR pro Periode aus Emissionen verdient werden.
* Wenn ein Benutzer eine RFC sendet, die UserMax übersteigt, wird der Router die Anfrage ablehnen.

—-------------
## Rechenbudget
Das Morpheus-Netzwerk muss feststellen, wie viel MOR es bereit ist, für Berechnungen in einem bestimmten Zeitraum auszugeben (zum Beispiel jeden Tag). Dies wird als Rechenbudget bezeichnet. In jedem Zeitraum kann das Compute-Vertrags bis zu dieser Menge an MOR ausgeben. Diese Menge multipliziert mit dem MOR-Preis ergibt ein Dollar-Budget für den Erwerb von Berechnungen pro Tag.

Offene Frage 1: Wie sollte das Rechenbudget festgelegt werden? Die einfachste Idee besteht darin, das Rechenbudget auf die Emissionen in den Compute-Vertrag zu setzen. Auf diese Weise würde der Compute-Vertrag nie Tokens ausgehen. Aber was soll mit den nicht verwendeten Tokens passieren, da das Maximum nie jeden Tag genutzt würde? Diese könnten möglicherweise pro-rata an aktuelle MOR-Token-Inhaber vergeben werden. Oder sie könnten verbrannt werden. Oder sie könnten ungenutzt im Compute-Vertrag verbleiben, um in der Zukunft für Berechnungen ausgegeben zu werden (doch dies wirft weitere Governance-Fragen auf).

## Zugriffsrate
Das Morpheus-Netzwerk verteilt die knappe Ressource der T-Produktion durch das Konzept der "Zugriffsrate". Die Zugriffsrate bestimmt, wie viele Ts jedes MOR-Token pro Tag abrufen kann. Ungenutzter Zugriff häuft sich nicht an. Die Zugriffsrate wird immer als Menge von Ts pro 1 MOR-Token angezeigt (wie zum Beispiel 1 MOR = 15.000 T). Die Zugriffsrate wird teilweise durch MaxT bestimmt, das die maximale Anzahl von Ts quantifiziert, die das Netzwerk pro Tag kaufen kann.

**Zugriffsrate** = (1/MOR-Angebot) * MaxT  
**MaxT** = ((MOR Compute Budget * MOR Preis) / T Preis) * 1000  
**UserMax** = MaxT * Benutzer MOR-Guthaben


### Beispielannahmen:
**MOR-Angebot** = 10.000.000 MOR-Token  
**MOR Compute Budget** = 3.000 MOR-Token pro Tag  
**MOR Preis** = $20  
**T Preis** = $0,002 pro 1000 Ts  
**Benutzer-Guthaben** = 5 MOR-Token

### Beispiel-Ergebnis:
**MaxT** = 30.000.000.000 Ts (das ist die maximale Anzahl von Ts, die das Netzwerk jeden Tag kaufen/produzieren kann)  
**Zugriffsrate** = 3.000 (jedes MOR-Token gewährt somit Zugriff auf 3.000 Ts pro Tag)  
**UserMax** = 15.000 (ein Benutzer mit 5 MOR-Token kann bis zu 15.000 Ts pro Tag abrufen)


- In jedem Zeitraum (jeden Tag) hat Morpheus als Netzwerk genug Geld, um X Anzahl von Ts von Compute-Anbietern zu kaufen. X ist eine Funktion der Menge an MOR, die der Compute-Vertrag ausgeben möchte (das "Rechenbudget"), multipliziert mit dem aktuellen MOR-Preis geteilt durch den Marktpreis für Ts. 
- Wenn das Rechenbudget 3.000 MOR beträgt und jedes MOR $20 wert ist, kann das Netzwerk (produzieren) an diesem Tag bis zu $60.000 an Ts kaufen. Wenn der aktuelle Satz für 1.000 Ts $0,002 beträgt, kann das Netzwerk bis zu 30 Milliarden Ts kaufen (30 Millionen x 1000 Ts). 
- Diese potenzielle Produktion von 30 Milliarden Ts wird pro-rata nach MOR-Guthaben verteilt. Nehmen Sie an, es gibt 10.000.000 MOR im Umlauf. Ein Benutzer mit 500 MOR-Token (0,005% des Gesamtsaldos) könnte an diesem Tag frei auf bis zu 1,5 Millionen Ts zugreifen. 
- Solange das Rechenbudget auf oder unter dem Emissionsniveau liegt, kann der Compute-Vertrag nicht ausgehen.  
- In der Realität werden die meisten Tokens in Brieftaschen und Börsen liegen, und nur ein Bruchteil wird verwendet, um die T-Produktion nachzufragen.

## Anmerkungen
* Die fundamentale Nachfrage nach MOR kommt von Benutzern, die Zugang zu generativer KI und anderen Formen von Berechnungen im Morpheus-Netzwerk wünschen.
 
* Die Hardware des Anbieters ist für das Netzwerk irrelevant, solange sie den Bestehens-/Nichtbestehens-Test des Benutzers erfüllen. Jeder Anbieter, der mehr Anfragen abgibt, als er effizient verarbeiten kann, wird durch das Bestehen dieses Tests bestraft.

* Das obige Modell zahlt Anbieter nur dann, wenn Bedarf an ihren Berechnungen besteht. Dies verhindert die Situation, dass große Teile von MOR vorzeitig emittiert werden, wenn das Netzwerk es nicht benötigt.

* Anbieter müssen nachweisen, dass sie eine bestimmte LLM haben, indem sie den Hash des LLM-Modells mit ihrem Schlüssel signieren. Dies beweist nicht, dass sie es verwendet haben, aber es beweist, dass sie es heruntergeladen und installiert haben, was Arbeit darstellt und damit einige Formen von Sybil-sensiblen Betrug verhindert. Wenn Anbieter dem Benutzer Müllergebnisse senden, kann der Benutzer [Fail] zusammen mit [miliseconds] zurück an den Router senden, und der Anbieter wird nicht für diese Berechnung gutgeschrieben. Morpheus benötigt nicht, dass alle Antworten perfekt sind... es benötigt nur genug Antworten, um gut genug zu sein, im Vergleich zu konkurrierenden Alternativen.

* Sybil-Angriffe durch Überfluten des Netzwerks mit RFCs werden durch die Zugriffsrate verhindert. Die "Kosten" für das Senden einer RFC sind die Kosten für den Erwerb eines MOR-Tokens geteilt durch die Anzahl der in seinem Namen eingereichten RFCs. Die Kosten sind also nie null, und doch wird ein Benutzer keinen Verlust bei jeder RFC-Erstellung verspüren.

* Das Bestehen/Nichtbestehen wird vom Benutzer bestimmt und überwacht die Qualität in gewissem Maße. Der Benutzer übermittelt das Bestehen/Nichtbestehen zusammen mit [miliseconds] zurück an den Router. Bei Misserfolg entweder keine Belohnung oder Strafpunkt (noch zu bestimmen). Es besteht kein Anreiz, einen Anbieter falsch zu bestehen (kein finanzieller Anreiz dafür). Dieser Mechanismus verhindert, dass Anbieter schnelle, aber nutzlose Ergebnisse senden.
Erwägen Sie: Möglicherweise tritt bei einem Misserfolg keine Belohnung auf, wenn das Benutzer-MOR > Anbieter-MOR ist. Andernfalls nur ein negativer Punkt, den der Router in seiner Privatisierungslogik verwenden kann.

* Alle vier Parteien (Benutzer, Anbieter, Router und Compute-Vertrag) haben eine eindeutige MOR-Adresse als ihre Identität. Alle Nachrichten zwischen den Parteien erfordern Signaturen (aber die meisten erfordern keine Blockchain-Transaktionen).

* Anbieter müssen ein nicht-Null-Guthaben haben, um Sybil-Angriffe von der Anbieterseite zu entmutigen.

* Wenn die [milisekunden]-Kriterien höher sind, wird das Netzwerk im Allgemeinen schneller, entmutigt jedoch kleinere Anbieter.

* Es gibt einen Anreiz, keine langsamen Ergebnisse zu liefern (keine Einnahmen nach der Berechnung).
  
* Ein zentral gehosteter Router zum Start ist wahrscheinlich in Ordnung (dezentralisieren Sie den Router schließlich (IPFS? Oder PoS-Node-Konsortium?))
