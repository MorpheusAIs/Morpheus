# Propozycja Funduszu Ochronnego Morpheus

## Wstęp

Biały księga Morpheus przeznacza 4% wszystkich emisji MOR na cele "Funduszu Ochronnego" i powierza Dostawcom Kodu rolę orakul w przypadku potrzeby wykorzystania jego zasobów.
Typy działań:

- Wypłata nagród za znalezienie błędu w celu uniknięcia ataków.
- Wypłata audytów przed wdrożeniem nowych Smart Contracts.
- Wstrzymanie Smart Contracts w przypadku trwającego ataku.
- Sygnalizacja i mechanizm wypłaty po ataku.
- Plan w przypadku znaczącego zdarzenia stratnego (scenariusz Hard Fork).

## Predefiniowane przypadki wywołujące mniejsze wypłaty

Zanim Smart Contracts zostaną uruchomione w sieci Ethereum, tu zdefiniowane są warunki, w których Fundusz Ochronny wypłaci MOR lub stETH.

## Rodzaje płatności:

1. Odkryte błędy i odpowiedzialnie ujawnione deweloperom Smart Contractów Morpheus Capital, Code, Compute, Community lub Protection Fund.
2. Płatność audytów przed wdrożeniem nowych Smart Contracts w sieci Morpheus.
3. Straty użytkowników MOR lub stETH w przypadku wykorzystania Smart Contractu Morpheus.
4. Wypłacenie dostawcom, którzy nie otrzymali emisji MOR w przypadku awarii Smart Contractu Morpheus.

Wysokość płatności z funduszu ochronnego powinna być proporcjonalna do błędu, straty lub błędu emisji.

## Warunki wstrzymania Smart Contracts

Zanim płatności za szkody zostaną ustalone, powinny istnieć warunki, które wywołają wstrzymanie Smart Contracts w przypadku trwającego ataku.

## Sygnalizacja i mechanizm wypłaty

Dostawcy Kodu będą uczestniczyć w sygnalizacji, kiedy należy wywołać płatność. Najpierw zdarzenie zostanie szczegółowo opisane i opublikowane w repozytorium GitHub dotkniętego Smart Contractu. Będzie to zawierać listę dotkniętych adresów i kwot MOR i / lub stETH.

Jeśli większość Dostawców Kodu (mierzona wagą ich posiadanych tokenów MOR) biorących udział w okresie Sygnalizacji (nie dłużej niż 7 dni) zweryfikuje raport jako PRAWDZIWY, wtedy płatność zostanie wywołana.

Po wywołaniu płatności oprogramowanie powiadomi deweloperów o konieczności autoryzacji płatności na dotknięte adresy w określonych kwotach.

## Plan w przypadku znaczącego zdarzenia stratnego

Znaczące Zdarzenie Stratne definiuje się jako zdarzenie, w którym straty MOR przekraczają łączne zasoby Funduszu Ochronnego. W takim przypadku, zamiast wypłacić MOR, Dostawcy Kodu powinni wdrożyć nowe Smart Contracts i ręcznie poprawić saldo MOR. Spowoduje to efektywnie hardfork w kodzie / saldach MOR, a wszyscy dostawcy, hodlerzy tokenów i inni dostawcy infrastruktury będą musieli zaktualizować swój kod do nowych Smart Contracts.

W przypadku stETH utraconego w Znaczącym Zdarzeniu Stratnym, Fundusz Ochronny wypłaci maksymalnie możliwą kwotę na proporcjonalnej zasadzie do kwoty strat każdej osoby.

## Podsumowanie

Błędy i błędy w oprogramowaniu są rzeczywistością i zaznaczają historię od dwóch niezamierzonych hardforków Bitcoin do The DAO w początkach Ethereum.

Dlatego planowanie różnych scenariuszy i przypadków oraz sposób ich obsługi jest mądrym podejściem do ochrony przed ryzykiem i jego ograniczania. Na szczęście, mając zarezerwowane zasoby z góry w Funduszu Ochronnym, a także część funduszu ochronnego, która generuje nagrody LP w AMM, zasoby przeznaczone na ochronę użytkowników powinny rosnąć z czasem.
