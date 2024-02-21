![Image1forYellowstone](https://github.com/MorpheusAIs/Morpheus/assets/1563345/80a6c1cf-fe52-42ba-bfd4-91d9faf67f07)

# Morpheus "Yellowstone" Számítási Modell
### Erik Voorhees
### 2024. január 3.

Egy javasolt módosítás a Morpheus tokenomics struktúrájához a decentralizált AI hálózaton történő számítási ösztönzéshez. 
Megtekintés a Notion-on: https://defiant-wolfsbane-830.notion.site/Morpheus-Yellowstone-Compute-Model-2ca9b4e7e1374c898937fdbd1b964cc1

## Összefoglaló
A Yellowstone Számítási Modellben a Morpheus hálózat csak az általuk nyújtott számítási kapacitásért fizet a szolgáltatóknak egy versenyképes ajánlati folyamat során, és a Tokenek korlátozott előállítását pro-rata elosztja a MOR token tulajdonosoknak az egyensúly alapján, nem pedig a fizetés alapján. Ez jelentősen javítja a felhasználói élményt, miközben minimalizálja a Sybil sebezhetőséget. A Yellowstone időt és egy Átmeni/Teljesítmény tesztet is belefoglal, hogy biztosítsa a szolgáltatók megfelelő gyorsaságát és pontosságát. A Yellowstone megőrzi a magánéletet azzal, hogy soha nem küld promptokat vagy eredményeket a Router-en keresztül, és minimalizálja a blokklánc tranzakciókat a nagyméretű működés lehetővé tétele érdekében. Ezen a modellen keresztül a MOR alapvető értéket ér el, mivel lehetővé teszi a folyamatos (bár nem korlátlan) hozzáférést a jogosulatlan számításhoz, anélkül, hogy tranzakciók szülnének becslésekért.

Ha elfogadják, ez a dokumentum helyettesíti a Morpheus whitepaper "Számítási Bizonyíték, Regisztráció és Jutalom" szakaszát: [Morpheus whitepaper](https://github.com/antonbosss/Morpheus/blob/main/!KEYDOCS%20README%20FIRST!/2.WhitePaper.md)

## Háttér
A Morpheus a tokenomics segítségével ösztönzi a szükséges és skálázható számítást egy decentralizált és jogosulatlan generatív AI céljából. Eredeti koncepciójában a Morpheus 24% -át bocsátotta ki MOR kibocsátásának, közvetlenül a Számítási Szolgáltatóknak, pro-rata módon a kapott becslési kérések függvényében, és előnyben részesítette azokat a szolgáltatókat, akik mennyiségben több MOR-t tartottak.

### Az eredeti white paperből:
"Az egyes Számítási Szolgáltató által elégetett pro-rata MOR tranzakciós díjak szolgálnak bizonyítékként a Számítási Szolgáltató állapotára, és napi szinten egy részét a MOR tokeneknek keresik meg.
  
Például, ha a hálózat elindulásakor 100 Számítási Szolgáltató van az első napon, akkor mindegyik pro-rata jutalmat kap a MOR elégetett mennyiségének függvényében. Ebben az esetben feltételezve, hogy mindegyik 100 számítási szolgáltató elégetett 100 MOR-t, akkor a napi 3 456 MOR token 1% -a = 34,56 MOR."

### Ezzel a megközelítéssel három fő probléma van:
1) Felhasználóknak per-inferencia tranzakciós díjat kell fizetniük. Még ha alacsony is, ez jelentős súrlódást okoz, és gyenge UX-t és állandóan alacsonyabb színvonalú felhasználói élményt eredményez OpenAI UX-jéhez képest. Ezenkívül legalább egy blokklánc tranzakcióra van szükség minden becslésnél, ami valószínűleg még L2-on is nehezen skálázható. Minden becslési esemény rendkívül alacsony költségű, és ha egy blokklánc tranzakcióra lenne szükség, az gazdasági szempontból nem lenne megvalósítható.
2) Ez a modell jelentős mértékben kihasználható, mert a számítási szolgáltatók számára várható bevétel sokkal magasabb, mint a tényleges számítási költség. Egy ellenfél így eláraszthatná a saját Számítási Szolgáltató csomópontjába spam becslési kéréseket, és viszonylag nagy részét keresné meg a MOR tokeneknek naponta, annak ellenére, hogy senkinek sem nyújtott gazdasági értéket. Valószínűleg nagy mennyiségű korai (nem használt) számításra vezetne, ami eltűnik, amint az hatalmas bevételi lehetőség elvész, és a korai támogatásra fordított MOR elveszne/elveszne.
3) Ha a becslési kéréseket a Szolgáltatók által tartott MOR mennyiségének függvényében prioritizálják, akkor a hálózat figyelmen kívül hagyja a szolgáltatók teljesítményét (válaszidő) és a becslés feldolgozásának költségét, és éppen ezeket a két tényezőt kellene optimalizálnia a hálózatnak (ideális esetben a válaszidőt és a számítási költséget a lehető legalacsonyabb szintre kellene csökkenteni). Ha a legtöbb MOR-t tartó szolgáltató egyetemi napjairól futtatott 200 dolláros GPU-t használt, a becslés teljesítménye sok felhasználó számára rendkívül rossz lenne. A prioritásnak az ajánlati ár és a teljesítmény alapján kellene lennie, nem pedig a MOR-tartás alapján.

Az alábbiakban a "Yellowstone" Modell javasolt, amely módosítja a Morpheus tokenomics-ot a fenti problémák kezelése érdekében. Ez a modell működik függetlenül attól, hogy a kibocsátás milyen részét rendelik hozzá a számításhoz, és feltételezzük a teljes kibocsátás 24%-át.

### A célkitűzések:
* Lehetővé tenni a felhasználóknak, hogy ne fizessenek per becslésért (ideális esetben egyáltalán ne fizessenek)
* Hatékony, skálázható és fenntartható jogosulatlan számítási erőforrás biztosítása túlárazás nélkül
* Ösztönözni az alacsony válaszidőt és költségversenyt a számítási szolgáltatók között
* Minimalizálni a blokklánc tranzakciók számát (legyen az L2 vagy más)
* Bizonyítani a MOR számára gazdaságilag ésszerű alapvető keresletet

## Yellowstone Modell
Négy összetevő van résztvevő:

### Felhasználók
* Lekérdezéseik vannak
* Gyors/pontos számításokat szeretnének ingyenesen és cenzúra/megfigyelés nélkül

### Szolgáltatók
* Számítási kapacitással rendelkeznek
* Pénzt szeretnének (MOR)

### Router
* Nagy áteresztőképességű feldolgozási egység
* Kezdetben viszonylag centralizált lehet, végül decentralizálódni kell

### Számítási Szerződés
* Jogosulatlan okos szerződés, amely MOR kibocsátásokat fogad, nyomon követi a jóváírásokat és terheléseket a Szolgáltatóknak, és fizet a Szolgáltatóknak, amikor meghívják.

## Szabványos Súlyok és Mértékegységek

Van egy atomi egység a mesterséges intelligenciában, amelyet másodpercenkénti lekérdezésekben mérnek (IPS). Ez koncepcionálisan összehasonlítható a blockchainen a wei-val. A lekérdezéseket használják a Yellowstone router tarifák meghatározásához. Egyetlen Morpheus AI egység súlya tehát egy lekérdezés. A kérdés típusától függően ezt bármely számítási feladatra alkalmazni lehet.

Ahogy az AI és a blockchain egyesülnek, a Morpheus azért néz ki, hogy egy nyílt forráskódú mértékegység-standardeket biztosítson, hogy tisztázza mindkét területen használt terminológiát.

Két típusú kérést különböztetünk meg, a modell által visszaadott válasz méretétől függően:

***Megtudható Hosszúságú Kérések***, ahol a válasz hosszát veszi figyelembe. Ilyenek például:
- Chat/Kép készítés
- Betegség diagnózisa
- Tárgyfelismerés
- Csalás észlelése

**Megtudhatatlan Hosszúságú Kérések** olyan erőforrásokat igényelnek a válaszadáshoz, amelyek csak a válasz elkészült után ismerhetők meg. Példa nemdeterminisztikus válaszokra:
- Énekelj egy szonátát a spagettirol.
- Generálj egy Boldog Születésnapot videót
- Kombináld az X modellt az Y modellal
- Vágj ki egy 3D modellt .stl fájlba

A Yellowstone a Megtudható Hosszúságú Kérésekre összpontosít. A leírt router később olyan módon épül fel, hogy kezelje a megtudhatatlan kéréseket is, de nem szolgálja ki azokat ma. Ennek eléréséhez a decentralizált AI standardizált mértékegységét használjuk.

## DeAI Tételek

### Kifejezések másodpercenkénti lekérdezésre:

| Típus | Válasz | Arány |
|------|----------|------|
| Megtudható | Nyelv | Másodpercenként inferált tokenek (TPS)|
| Megtudható - média | Audio | Másodpercenként inferált minták (ISPS) |
| Megtudható - média | Videó | Másodpercenként inferált keretek (IFPS) |
| Megtudható - jövőbeli technológia | Ismeretlen Jövőbeli Formátum | NA |

A Yellowstone router első mértékegysége token lesz. Más inferencia formátumok később következnek.

### Idő

Az inferencia blokk ideje 12 másodperc, ami azt jelenti, hogy egy blokk inferencia tranzakciót öt alkalommal perceként közzétesznek és elszámolnak.

## Definíciók

**"Felhasználók"**: Bármely entitásnak számít, amelynek van egy MOR címe, és kéréseket küld a Routernek, a számítógépet használva. Ez lehet egy konkrét személy, aki Morpheus asztali csomópontjáról küld kéréseket, vagy akár egy bot, vagy egy cég vagy harmadik fél weboldala is, amely a Morpheus hálózattal kölcsönhatásba lép a végfelhasználói nevében (a végfelhasználók inferencia-használata nem követett vagy nem számított a számítási szerződésben, kivéve, ha az inferencia meghibásodik).

**"Szolgáltatók"**: Bármely entitást úgy definiálunk, amely egy olyan csomópontot futtat, amely számítási erőforrásokat biztosít, MOR címmel rendelkezik, és Token ajánlatokat tesz a Routeren keresztül. Amikor egy Szolgáltató megnyeri a Router által tett ajánlatot, a Szolgáltató számítási erőforrásokat biztosít (GPU-k stb.) Különböző AI modellekhez a Felhasználók számára.

**"Router"**: Egy olyan szoftveralkalmazást, amely rendelkezik egy MOR címmel, mint a kétoldalú piac közvetítője a Felhasználók és Szolgáltatók között. A Router regisztrálja és nyomon követi a Szolgáltatók címét és ajánlatait, feldolgozza a Felhasználók kéréseit, rögzíti a feldolgozott kérések [miliszekundum] és ÉS/ VAGY tesztjeit, és utasítja a Számítási Szerződést, hogy jóváírja a jogosult Szolgáltatókat MOR fizetésért. A Router sosem küld vagy fogad MOR tranzakciókat (se tranzakciókat, se tranzakciókat semmilyen blokkláncban). A Router sosem látja a kérés tartalmát vagy a választ.

**"Számítási Szerződés"**: Egy okos szerződést, amely rendelkezik egy MOR címmel, az összes a Számítási készletre kijelölt MOR-t fogadja, nyomon követi a jogosult Szolgáltatóknak tartozó összegeket, és MOR-t fizet a jogosult Szolgáltatóknak, amikor a Szolgáltatók kifizetést kérnek.

**"Token" ("T")**: A legkisebb mennyiségű betű vagy képpont, amelyre az útválasztón keresztül ajánlatokat tehetnek. Gyakran ez körülbelül ~4 karakter szöveget vagy 5x5 képpontot jelent egy képen, stb. Ne keverje össze a blokklánc "tokent" az ERC20 tokennel vagy magával a MOR tokennel.

A "TokenMax" alatt egy olyan maximális Tokenmennyiséget értünk, amelyet az útválasztó elfogad fizetésre.

Az "RFC" a "Request for Compute" rövidítése. Egy felhasználó RFC-t küld a Routernek, és megadja az [LLM]-et, amelyhez hozzáférést szeretne, valamint a [TokenMax]-ot, amely egy elfogadható maximális T-mennyiség a válaszban. A Felhasználónak ezt a számot érdemes korlátoznia, mert a magasabb számok = hosszabb várakozási idők a válaszokhoz, és számítanak a [UserMax]-ra, amely naponta korlátozott. 

### Szerződési Védelem

Annak érdekében, hogy megakadályozzunk egy olyan támadást, amely lerövidíti vagy növeli a MOR számát a felhasználásban, a Számítási Szolgáltatóknak kijelölt fel nem használt MOR medencét legfeljebb 1% -kal lehet csökkenteni naponta. Ez egyenlő a normál számítási kibocsátás + 1%-val.

### Számítási Indításösztönző

A Tőkeszerződés indítási időszavára követő első évben a legjobb 100 Számítási Szolgáltató jogosult lesz az összes MOR-kibocsátás 2,4%-os arányos összegére. Ezt az útválasztók számolják ki és rögzítik a számítási szerződésben.

## Munkafolyamat
1) A Felhasználók, Szolgáltatók és Router mindegyike létrehozza a MOR közzétételi kulcsokat (ez az azonosságuk, minden üzenetet ilyenként írnak alá).
2) Ha a Felhasználó bármilyen MOR egyenleget tart, a Felhasználó elküldhet egy aláírt "Request for Compute" (RFC) üzenetet a Routernek. A Felhasználó megadja az [LLM]-et és a [TokenMax]-ot.
3) A Router az RFC-ket a Felhasználó MOR egyenlegének megfelelően prioritizálja (megoldja a Sybil problémát).
4) A Router kiválasztja a [LLM]-t támogató Szolgáltatót, prioritással a legkisebb ajánlatú Tokenre MOR-ban.
5) A Router az életképes ellenőrzést küldi a Szolgáltatónak. Ha a sikeres, akkor
6) A Router összekapcsolja a Felhasználót a Szolgáltatóval.
7) A Felhasználó elküldi a lekérdezést ([LLM], [prompt]) a Szolgáltatónak.
8) A Szolgáltató kiszámolja a lekérdezést, elküldi az eredményt a Felhasználónak.
9) A Felhasználó jelenti az időt [miliszekundum] a 4. és 5. lépés között, a kézbesített [Tokeneket] és a Siker/Kudarcot a Routernek.
10) A Router utasítja a Számítási Szerződést, hogy jóváírja a Szolgáltatót MOR-val, ha [miliszekundum] / [Token] nem rosszabb, mint az elmúlt Z lekérdezés átlaga X% -kal alatt, és ha a Felhasználó jelentett [Sikert].
11) (Valamikor később) A Szolgáltató kéri a MOR kifizetését a Számítási Szerződéstől, és a Számítási Szerződés MOR kifizetést küld, ha érvényes (eddig az első blokklánc tranzakció, csoportosítva lehet).

![ComputeContractImage2](https://github.com/MorpheusAIs/Morpheus/assets/1563345/e66ea20c-9851-4f9e-9caa-66c6d798c462)

## Eredmény
* A Felhasználó gyors eredményt kap a lekérdezésére, és nem fizet semmit (ez az elképesztő UX-hez vezet, így az elfogadáshoz). **Megoldja az 1. cél.**
* A Számítási Szerződés fizetett a Számításért egy versenyképes licitálási folyamaton keresztül, és ellenőrzést kapott a felhasználótól a minőség / elégedettség tekintetében. **Megoldja a 2. cél.**
* A Szolgáltató pénzt kapott (MOR) a Számítási Szerződéstől, amíg a válasz elég gyors volt. A Szolgáltató pontosan azt kapta, amit kért a számításhoz. Ha a kérése túl magas, mások alacsonyabban licitálnak, így a rendszer hatékony, és a Szolgáltatói árakat a közvetlen elektromos energia költségének irányába vezeti. **Megoldja a 3. cél.**
* A blokklánc tranzakciók számát minimalizálták (sok ezer lekérdezés áramolhat be egyetlen blokklánc tranzakció nélkül). **Megoldja a 4. cél.**
* A gyors és ingyenes számítás lehetősége növeli a MOR tokenek iránti keresletet, amelyeket a Felhasználók megtartanak. **Megoldja az 5. cél.**
* A 6. és 7. lépés elfogadható magánéletet biztosít (a lekérdezés soha nem érinti a Routert, és a válasz sem). A Szolgáltatók valamivel véletlenszerűen vannak kiválasztva, és sosem ismerik fel a Felhasználó azonosságát, csak az IP-címet. A jobb magánéretet később el lehet érni a TOR + FHE használatával.
* A MOR egyenleg csökkent a Számítási Szerződésből. A szerződés likviditása fenntartva lesz, amíg a kifizetések < keresett MOR az emissziós időszak alatt.
* Ha egy Felhasználó olyan RFC-t küld, amely meghaladja a Felhasználó UserMax-át, a Router visszautasítja a kérést.

—-------------

## Számítási Költségvetés
A Morpheus hálózatnak meg kell határoznia, mennyit hajlandó költeni compute-ra egy adott időszakban (például minden nap), ezt hívják Számítási Költségvetésnek. Minden időszakban a Számítási Szerződés ennyi MOR-t költhet. Ezt a mennyiséget megszorozva a MOR árával, napi szinten dollár költségvetést kapunk a Compute megszerzésére.

Nyitott kérdés 1: Hogyan kellene meghatározni a Számítási Költségvetést? A legegyszerűbb ötlet a Számítási Költségvetést a Compute Szerződésbe irányuló kibocsátásra állítani. Így a Compute Szerződés sosem fogy ki a tokensekből. De mit kellene tenni a felhasználatlan tokensekkel, mivel a maximum sosem lenne kihasználva minden nap? Ezeket esetleg arányosan megoszthatnák a jelenlegi MOR token tulajdonosok között. Vagy elégethetők lennének. Vagy inaktívak maradhatnának a Compute Szerződésben, hogy később Compute-ra költsék (de ez több kormányzati kérdést vet fel).

## AccessRate
A Morpheus hálózat kiosztja a T-termelés szűkös erőforrását az „AccessRate” koncepcióján keresztül. Az AccessRate meghatározza, hogy naponta hány Ts-t érhet el minden MOR token. A fel nem használt hozzáférés nem halmozódik fel. Az AccessRate mindig Ts mennyiségként jelenik meg 1 MOR tokenenként (például 1 MOR = 15 000 T). Az AccessRate részben a MaxT által van meghatározva, ami meghatározza a hálózat naponta vásárolható maximális Ts mennyiségét.

**AccessRate** = (1/MOR Kínálat) * MaxT  
**MaxT** = ((MOR Számítási Költségvetés * MOR Ár) / T Ár) * 1000  
**UserMax** = MaxT * Felhasználó MOR egyenleg


### Példa Feltevések:
**MOR Kínálat** = 10 000 000 MOR token  
**MOR Számítási Költségvetés** = 3 000 MOR token naponta  
**MOR Ár** = $20  
**T Ár** = $0,002 per 1000 Ts  
**Felhasználó Egyenleg** = 5 MOR token

### Példa Eredmény:
**MaxT** = 30 000 000 000 Ts (ez a maximális Ts, amit a hálózat naponta vásárolhat/termelhet)  
**AccessRate** = 3 000 (tehát minden MOR token napi szinten hozzáférést biztosít 3 000 Ts-hez)  
**UserMax** = 15 000 (egy 5 MOR tokennal rendelkező felhasználó naponta legfeljebb 15 000 Ts-t érhet el)


- Minden időszakban (minden nap), a Morpheus hálózatnak elegendő pénze van X számú Ts vásárlására a compute-szolgáltatóktól. X a Compute Szerződés által költeni kívánt MOR mennyiség függvénye, a jelenlegi MOR árának elosztva a Ts piaci árával. 
- Ha a Számítási Költségvetés 3 000 MOR, és mindegyik $20, akkor a hálózat (el tudja állítani) akár $60 000 Ts-t aznap. Ha az 1 000 Ts-re vonatkozó ár $0,002, akkor a hálózat akár 30 milliárd Ts-t is megvásárolhat (30 millió x 1000 Ts). 
- Ennek a potenciális 30 milliárd Ts-termelésnek a MOR egyenleg alapján kellene történnie, arányosan. Tegyük fel, hogy 10 000 000 MOR van forgalomban. Egy felhasználó 500 MOR tokennal (a teljes kínálat 0,005%-a) aznap szabadon hozzáférhet akár 1,5 millió Ts-hez. 
- Amíg a Számítási Költségvetés az emisszió szintjén vagy alatt van, a Compute Szerződés nem fogyhat ki a MOR-ból.  
- A valóságban a tokensek túlnyomó többsége pénztárcákban és tőzsdéken fog pihenni, és csak töredékét fogják használni a T-termelés igénylésére.

## Megjegyzések
* A MOR alapvető keresletét a felhasználók adják, akik hozzáférést szeretnének a Morpheus hálózaton működő generatív AI és egyéb számításokhoz.

* Az szolgáltatók hardverterve nem lényeges a hálózat számára, feltéve, hogy megfelelnek a felhasználó által meghatározott bestehet/nem bestehet tesztnek. Bármely szolgáltató, aki több lekérdezést ajánl fel, mint amennyit hatékonyan feldolgozhat, büntetést kap ebben a tesztben.

* A fent említett modell kizárólag akkor fizet szolgáltatóknak, ha szükség van a compute-jukra. Ez megakadályozza azt a helyzetet, amikor a MOR nagy részét feleslegesen bocsátják ki, amikor a hálózatnak erre nincs szüksége.

* A szolgáltatóknak bizonyítaniuk kell, hogy rendelkeznek egy adott LLM-mel, azzal, hogy az LLM modell hash-ét aláírják a kulcsukkal. Ez nem bizonyítja, hogy használták, de bizonyítja, hogy letöltötték és telepítették, ami munkát jelent, és így megakadályozza a Sybil-érzékeny csalás néhány formáját. Ha a szolgáltatók rossz eredményeket küldenek a felhasználónak, a felhasználó visszaküldheti a Routernak a [Fail]-t és a [miliszekundumokat], és a szolgáltatónak nem lesz jóváírva az azon számításért járó díj. A Morpheusnak nem kell, hogy minden válasz tökéletes legyen... csak annyi válaszra van szüksége, hogy elég jó legyen, a versenytársakhoz képest.

* A Sybil-támadásokat, amelyek a hálózatot RFC-kel elárasztják, az AccessRate megakadályozza. Az RFC küldésének „költsége” a MOR token beszerzési költsége osztva az általa benyújtott RFC-k számával. A költség sosem nullával egyenlő, és mégis a felhasználó nem érzi a veszteséget minden egyes RFC létrehozásakor.

* A Pass/Fail-t a felhasználó határozza meg, és bizonyos mértékben szabályozza a minőséget. A felhasználó a Pass/Fail eredményt [miliszekundumok] mellett továbbítja a Routernek. Ha Fail, akkor vagy nincs jutalom, vagy büntetőpont (még tisztázandó). Nincs ösztönző hamisan megbuktatni egy szolgáltatót (nincs pénzügyi ösztönző ilyesmire). Ez a mechanizmus megakadályozza a szolgáltatókat abban, hogy gyors, de haszontalan eredményeket küldjenek.
Fontolja meg: talán a No Reward csak akkor következik be a Fail esetén, ha a felhasználó MOR > szolgáltató MOR. Ellenkező esetben csak egy negatív pont, amit a Router felhasználhat a privatizációs logikájában.

* Mind a négy félnek (Felhasználó, Szolgáltató, Router és Számítási Szerződés) egyedi MOR-címe van az azonosítójukként. Az üzenetek mindegyik fél között aláírást igényelnek (bár a legtöbbjük nem igényel blokklánc-tranzakciót).

* A szolgáltatóknak nem nulla egyenleggel kell rendelkezniük a Sybil-támadások elkerülése érdekében a szolgáltató oldaláról.

* Ha a [miliszekundumos] kritérium magasabb, a hálózat általában gyorsabb lesz, de elriasztja a kisebb szolgáltatókat.

* Van egy ösztönző a lassú eredmények nyújtásának megakadályozására (nincs bevétel a számítás után).
  
* Kezdetben valószínűleg megfelelő a központilag szolgáltatott Router (a Router végülis decentralizálódik (IPFS? Vagy PoS node konzorcium?))
