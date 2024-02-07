# Vorschlag des Morpheus Schutzfonds

## Einleitung
Im Whitepaper von Morpheus werden 4% der gesamten MOR-Ausgabe für die Schaffung eines "Schutzfonds" zugewiesen und an Code-Anbieter delegiert, die bei Bedarf als Orakel für seine Ressourcen fungieren.

#### Zu den Arten von Maßnahmen gehören:
- Belohnung für die Entdeckung von Fehlern oder Schwachstellen zur Verhinderung von Angriffen.
- Zahlung für Audits vor der Bereitstellung neuer Smart Contracts.
- Anhalten von Smart Contracts im Falle eines Angriffs.
- Bewertung von Schäden und Implementierung eines Entschädigungsmechanismus nach einem Angriff.
- Planung für erhebliche Verluste (Hard Fork-Szenario).

## Vordefinierte Fälle für kleinere Auszahlungen
Bevor Smart Contracts im Ethereum-Netzwerk gestartet werden, werden die Bedingungen definiert, unter denen der Schutzfonds Zahlungen in MOR oder stETH leisten wird.

## Arten von Zahlungen:
1. Fehler, die entdeckt und verantwortungsvoll den Smart Contract-Entwicklern von Kapital, Berechnung, Code, Gemeinschaft und dem Schutzfonds offenbart wurden.
2. Zahlung für Audits vor der Bereitstellung neuer Smart Contracts im Morpheus-Netzwerk.
3. Verluste von MOR- oder sETH-Nutzern aufgrund von Fehlern in den Smart Contracts von Morpheus.
4. Zahlungen in Fällen, in denen Teilnehmer aufgrund von Fehlern in den Smart Contracts von Morpheus keine MOR-Ausgabe erhalten haben.

Auszahlungen aus dem Schutzfonds sollten proportional zum Fehler, Verlust oder Ausgabefehler sein.

## Bedingungen für das Anhalten von Smart Contracts
Bevor Auszahlungen für Schadensersatz festgelegt werden, müssen die Bedingungen festgelegt werden, die das Anhalten von Smart Contracts im Falle eines laufenden Angriffs auslösen.

## Schadensbewertung und Zahlungsmechanismus
Code-Anbieter werden an der notwendigen Schadensbewertung zur Kompensation teilnehmen. Zuerst wird der Vorfall detailliert beschrieben und im GitHub-Repository des betroffenen Smart Contracts veröffentlicht, einschließlich einer Liste betroffener Adressen und der Beträge von MOR und/oder stETH.

Wenn die Mehrheit der Code-Anbieter (gemessen am Gewicht ihrer gehaltenen MOR-Token), die an der Schadensbewertung teilnehmen (nicht mehr als 7 Tage), den Bericht als WAHR bestätigen, wird eine Auszahlung eingeleitet.

Sobald die Auszahlung eingeleitet ist, sendet die Software eine Nachricht an die Entwickler, in der sie um die Genehmigung der Zahlung an die betroffenen Adressen in den angegebenen Beträgen bittet.

## Plan im Falle erheblicher Schäden
Ein erheblicher Verlust wird als ein Ereignis definiert, bei dem die MOR-Verluste die Gesamtressourcen des Schutzfonds übersteigen. In diesem Fall müssen die Code-Anbieter statt MOR-Zahlungen neue Smart Contracts bereitstellen und die betroffenen MOR-Salden manuell anpassen. Dies wird effektiv einen MOR Code/Balance Hard Fork auslösen, und alle Anbieter, Token-Inhaber und andere Infrastrukturanbieter müssen ihren Code auf die neuen Smart Contracts aktualisieren.

Im Falle eines stETH-Verlusts aufgrund erheblicher Schäden wird der Schutzfonds den maximal möglichen Betrag auf proportionaler Basis unter Berücksichtigung des Schadens jeder Person zahlen.

## Schlussfolgerung
Fehler und Mängel in der Software sind eine Realität, die in der Geschichte von den zwei unbeabsichtigten Hard Forks in Bitcoin bis zu The DAO in den frühen Tagen von Ethereum geprägt ist.

Daher ist die Planung für verschiedene Szenarien und Fälle und wie man im Voraus damit umgeht, ein kluger Ansatz für Schutz und Risikominderung. Glücklicherweise werden dank der im Schutzfonds vorab zugewiesenen Ressourcen sowie eines Teils des Fonds, der Einkommen durch Provisionen für die Bereitstellung von Liquidität in AMMs gener

iert, die für den Schutz der Benutzer zugewiesenen Ressourcen im Laufe der Zeit zunehmen.