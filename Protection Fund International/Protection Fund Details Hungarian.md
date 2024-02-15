# Morpheus Védelmi Alapjavaslat

## Bevezetés

A Morpheus fehér könyv 4%-át minden MOR kibocsátás céljára "Védelmi Alapnak" szánja, és feladata a Kód Szolgáltatóknak, hogy az eszközeik szükség esetén szerepeljenek az oracle-ként.
Cselekvéstípusok:

- Buggelvédelmi jutalom kifizetése a támadások elkerülése érdekében.
- Auditok kifizetése az új Smart Contracts telepítése előtt.
- A Smart Contracts leállítása, ha folyamatban van egy támadás.
- Jelzés és Kifizetési mechanizmus egy támadás után.
- Terv jelentős veszteség esetén (Hard Fork Szcenárió)

## Előre meghatározott esetek, amelyek kisebb kifizetéseket indítanak

Mielőtt a Smart Contracts élővé válnának az Ethereum hálózaton, itt vannak a Védelmi Alapnak a MOR vagy stETH kifizetéseiről szóló feltételek.

## Fizetés típusai:

1. Buggok felfedezése és felelős módon történő közzététele a Morpheus Capital, Kód, Számítás, Közösség vagy Védelmi Alap Smart Contract fejlesztői számára.
2. Auditok kifizetése az új Smart Contracts telepítése előtt a Morpheus hálózaton.
3. Felhasználói veszteségek MOR vagy stETH esetén egy kihasznált Morpheus Smart Contract esetén.
4. A szolgáltatók teljes mértékben történő kifizetése, akik nem kaptak MOR kibocsátást a Morpheus Smart Contract meghibásodása esetén.

A védelmi alapból történő kifizetések összegei arányosak legyenek a hibák, veszteségek vagy kibocsátási hibák mértékével.

## Smart Contracts leállítási feltételek

Mielőtt a kártérítési összegeket megállapítanák, olyan feltételeknek kell lenniük, amelyek leállítják a Smart Contracteket egy folyamatban lévő támadás esetén.

## Jelzés és Kifizetési mechanizmus

A Kód Szolgáltatók részt vesznek a jelzésben, amikor a kifizetésnek jelzettnek kell lennie. Először egy incidensről részletes leírást és posztot tesznek közzé az érintett Smart Contract GitHub tárolójában. Tartalmaz egy érintett címek és MOR és / vagy stETH összegek listáját.

Ha a Kód Szolgáltatók többsége (a birtokolt MOR tokenek súlya által mérve), akik részt vesznek a Jelző időszakban (legfeljebb 7 napig) megerősítik a jelentést IGAZNAK, akkor a kifizetés megtörténik.

Amint a kifizetés megtörténik, a szoftver üzenetet küld a fejlesztőknek a megfelelő összegekkel rendelkező érintett címekre történő kifizetéshez.

## Terv jelentős veszteség esetén

Egy Jelentős Veszteség Eseményt úgy határoztak meg, hogy az MOR vesztesége meghaladja a Védelmi Alap összes erőforrását. Ebben az esetben a Kód Szolgáltatóknak nem az MOR kifizetése lesz a cél, hanem új Smart Contractsokat kell telepíteniük és a MOR egyenlegeket kézzel kell helyreállítaniuk. Ez gyakorlatilag egy hard forkot okozna a kódban / MOR egyenlegekben, és az összes Szolgáltató, token tulajdonos és egyéb infrastruktúra szolgáltatóknak frissíteniük kellene a kódjukat az új Smart Contractsokhoz.

Ha a stETH elveszik egy Jelentős Vesztési Eseményben, akkor a Védelmi Alapnak a lehető legnagyobb mértékben kifizetnie kell pro-rata alapon minden személy veszteségének összegét.

## Következtetés

A szoftverekben található hibák és hibák valóságot képviselnek, és megjelölik a történelmet a Bitcoin két szándéktalan hard forkjától az Ethereum kezdeti napjaiban lévő The DAO-ig.

Ezért előre tervezni a különböző forgatókönyveket és eseteket, valamint azt, hogyan kell kezelni őket, bölcs megközelítés a védekezés és a kockázatok egyéb csökkentése érdekében. Szerencsére előre elkülönített erőforrások állnak rendelkezésre a Védelmi Alapban, és a védelmi alap egy része LP jutalmakat is kap az AMM-ben, az idő múlásával a felhasználók védelmére szolgáló erőforrásoknak növekednie kellene.
