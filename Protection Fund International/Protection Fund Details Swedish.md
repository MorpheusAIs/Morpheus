# Propunere Fond de Protecție Morpheus

## Introducere

Documentul alb Morpheus aloca 4% din toate emisiile de MOR în scopul unui "Fond de Protecție" și delegă Furnizorilor de Cod să acționeze ca oracole în cazul în care resursele sale sunt necesare.
Tipuri de acțiuni:

- Plata recompenselor pentru găsirea de bug-uri pentru a evita atacurile.
- Plata auditurilor înainte ca noi Smart Contracts să fie implementate.
- Suspendarea Smart Contracts în cazul unui atac în desfășurare.
- Semnalizarea și mecanismul de plată după un atac.
- Plan în cazul unui eveniment de pierdere semnificativă (Scenariu de bifurcare dură)

## Cazuri Predefinite Care Declanșează Plăți Minore

Înainte ca Smart Contracts să fie lansate pe rețeaua Ethereum, sunt definite condițiile în care Fondul de Protecție va plăti MOR sau stETH.

## Tipuri de Plăți:

1. Bug-uri descoperite și divulgate responsabil dezvoltatorilor unui Smart Contract Morpheus Capital, Cod, Compute, Comunitate sau Fond de Protecție.
2. Plata auditurilor înainte ca noi Smart Contracts să fie implementate pe rețeaua Morpheus.
3. Pierderi ale utilizatorilor de MOR sau stETH în cazul unui Smart Contract Morpheus exploatat.
4. Facerea întregilor furnizori care nu au primit emisii MOR în cazul unei defecțiuni a Smart Contractului Morpheus.

Suma plăților din fondul de protecție ar trebui să fie proporțională cu bug-ul, pierderea sau eroarea de emisie.

## Condiții de Suspendare a Smart Contracts

Înainte ca plățile pentru daune să poată fi stabilite, trebuie să existe condiții care să declanșeze o suspendare a Smart Contracts în cazul unui atac în desfășurare.

## Semnalizare și Mecanism pentru Plăți

Furnizorii de Cod vor participa la semnalizarea când ar trebui să fie declanșată o plată. Mai întâi, un incident va fi detaliat și postat pe depozitul GitHub al Smart Contractului afectat. Incluzând o listă de adrese afectate și sume de MOR și / sau stETH.

Dacă o majoritate a Furnizorilor de Cod (măsurată în funcție de ponderea token-urilor MOR deținute) care participă la perioada de Semnalizare (nu mai mult de 7 zile) validează raportul ca ADEVĂRAT, atunci o plată va fi declanșată.

Odată ce o plată este declanșată, software-ul va trimite un mesaj dezvoltatorilor pentru a autoriza o plată către adresele afectate în sumele specificate.

## Plan în Cazul unui Eveniment Semnificativ de Pierdere

Un Eveniment Semnificativ de Pierdere este definit ca un eveniment în care pierderile MOR depășesc resursele totale ale Fondului de Protecție. În acest caz, în loc să facă o plată de MOR, Furnizorii de Cod ar trebui să implementeze noi Smart Contracts și să corecteze manual balanțele MOR afectate. Aceasta ar provoca efectiv o bifurcare dură în cod / balanțele MOR și toți furnizorii, deținătorii de token-uri și alți furnizori de infrastructură ar trebui să-și actualizeze codul la noile Smart Contracts.

În cazul stETH pierdut într-un Eveniment Semnificativ de Pierdere, Fondul de Protecție va plăti în măsura maximă posibilă în mod proporțional cu suma pierderilor fiecărei persoane.

## Concluzie

Bug-urile și erorile din software sunt o realitate și marchează istoria de la cele două bifurcări accidentale ale Bitcoin la The DAO în primele zile ale Ethereum.

Așadar, planificarea pentru diferite scenarii și cazuri și modul de gestionare a acestora este o abordare inteligentă pentru protejarea împotriva riscurilor și reducerea acestora. Din fericire, având resurse alocate în avans cu Fondul de Protecție, și, de asemenea, o parte din fondul de protecție câștigând recompense LP în AMM, resursele dedicate protecției utilizatorilor ar trebui să crească în timp.
