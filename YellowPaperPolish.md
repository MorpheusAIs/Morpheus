# Morpheus Żółty Papier

W artykule opisano szczegóły techniczne pełnego węzła Morfeusza, smart contractu Morfeusza i powiązanych dowodów. Przedstawione w białej księdze autorstwa anonimowych programistów Morpheus, Trinity & Neo.
Link do artykułu tutaj: https://github.com/SmartAgentProtocol/SmartAgents/blob/main/MorpheusWP.md 

## Lokalna wersja 0.0.5 Morpheus jest dostępna pod adresem:
---------
**Morpheus wersja 0.0.5 dla Mac**
- Pobierz z Google Drive: https://drive.google.com/file/d/1x-wR4HWjKqT_g6VRjrWPXu3rVm9ukOc9/view?usp=sharing
- SHA 256 hash dla walidacji: 9092d543023fb95086cf4a7039d42cbcbbdf5283d670c4de6396b3d89e57b064
- Wersja: Morpheus-0.0.5-x64.dmg

---------
**Morpheus wersja 0.0.5 dla Linux Debian**
- Pobierz: https://drive.google.com/file/d/1PQ3n7LXeJHe_jmkYLDUQ9fWjZQTWbHCB/view?usp=sharing
- Instrukcje: Aby zainstalować, uruchom to polecenie:
sudo dpkg -i /path/to/your/morpheus.deb
Uwaga: w powyższym poleceniu zamień "/path/to/your/morpheus.deb" ścieżką do pliku morpheus_0.0.5_amd64.deb.
- SHA hash do weryfikacji:
b227e7bcb21ec9e8e2b4bf9510a2e1f224953fe5
Wersja: morpheus_0.0.5_amd64.deb
---------

Pierwsza interakcja z Morpheus 22 października 2023 roku.
![FirstInteractionWithMorpheus20231022](https://github.com/MorpheusAIs/Morpheus/assets/1563345/35509f3a-4346-4f58-bb60-f7881fd10f7e)

## Smart Contracty Morpheus
O działaniach łańcuchowych, które muszą zostać zatwierdzone przez smart contract Morfeus.

1. Fork smart contractu N2 Yield wdrożony na  Arbitrum
- A) Blokowanie ETH przez Thorchain, przekaż plon programistom + dostawcom obliczeń.
- B) Obliczanie proporcjonalnie przekazanego ETH.

2. Na zawsze udowodnione zniszczenie MOR:
- A) Adres spalania lub funkcja spalania tokenów MOR.

3. Wzór umowy ERC20 na wydanie MOR.
- A) Mint MOR tokeny codziennie do Capital + społeczności proporcjonalnie do wydajności ETH.
- B) Codzienny mini Token MOR dla koderów + Oblicz dostawców proporcjonalnie do większej liczby spalonych za pośrednictwem opłat.

4. Dowód Morpheus - zademonstruj Prywatność, Open Source i Bezpieczeństwo
- A) Opublikuj listę skontrolowanych Agentów i ich wyniki Smart Rank.
- B) Opublikowanie listy skontrolowanych programów LLM i ich wyników Smart Rank.
- C) Publikowanie listy Smart Contractów i ich wyników Smart Rank.
- D) Publikowanie listy podpowiedzi i ich wyników Smart Rank.

5. Fundusze Ochronne
- A) Dystrybucja MOR i ETH w przypadku włamań, błędów, bugów lub innych ataków, które powodują straty.
- B) Wstępnie zdefiniowany zestaw scenariuszy wypłat. Zasady forkowania / wycofywania w skrajnych przypadkach.
- C) Deweloperzy odpowiedzialni za określanie przypadków ataków i środków zaradczych.
- D) Fundusze na nagrody za błędy / białych hakerów.
- E) Fundusze na ochronę przed podmiotami z państw narodowych.

## Schemat Smart Contractu Morpheus
Schematy i opisy minta i spalania MOR. Opisy wymaganych smart contractów. Schematy szczegółowo opisujące dystrybucję ETH.

### Dystrybucja nagród MOR przez smart contract Morpheus
![new-buckets](https://github.com/SmartAgentProtocol/SmartAgents/assets/76454555/cd57bae7-2a56-4a55-bf3e-1f810f3fba9c)

### Przykład dystrybucji tokenów MOR w Dniu 1 i Dniu 2.
![Untitled spreadsheet - Google Sheets 2023-10-15 13-28-08](https://github.com/MorpheusAIs/Morpheus/assets/76454555/6ff7869d-bbd6-46b5-8673-6a59b75906e1)

## Przykład obliczenia dystrybucji dla uczestnika o adresie 0x123 ETH

### Krok pierwszy
![Diagram1ofETHDontator](https://github.com/SmartAgentProtocol/SmartAgents/assets/1563345/fead528c-d628-449e-a3a3-2f53904f4a3d)

### Krok drugi
![ETHGivenDiagram2](https://github.com/MorpheusAIs/Morpheus/assets/1563345/915020e8-d342-48bc-85ee-367de0325680)

### Krok trzeci
![Diagram3ForETHGiven](https://github.com/MorpheusAIs/Morpheus/assets/1563345/a3f455af-56de-4c6b-9688-5b9e91673e5a)

## Przykład obliczania rozkładu dostawcy obliczeń o adresie 0x123

### Krok pierwszy
![MORForCompute](https://github.com/SmartAgentProtocol/SmartAgents/assets/1563345/bef69c69-0420-441f-97f0-7e8195844f57)

### Krok drugi
![MORForCompute2](https://github.com/SmartAgentProtocol/SmartAgents/assets/1563345/a6f30da5-5441-4f0a-be80-c5798f5920cd)

### Wykres kołowy dystrybucji tokenów MOR
![mordist](https://github.com/MorpheusAIs/Morpheus/assets/76454555/4157efe7-6abf-404a-87f9-a8dc76cd4799)

## Narzędzia deweloperskie i stos technologiczny Morpheus.
- Llama2 - Solidny LLM o otwartym kodzie źródłowym, który działa lokalnie.
- Ollama - pakiet dla łatwej instalacji Llama2.
- LangChain - narzędzie programistyczne do łączenia LLM z magazynami wektorowymi i interfejsami API.
- LangSmith Editor - niskopoziomowy kod do tworzenia agentów w LangChain.
- SmartContractRank Algorithm - wybieranie smart contractów dla użytkownika na podstawie jego intencji.
- AgentRank Algorithm - tworzenie wyspecjalizowanych agentów do wykonywania działań użytkownika.
- PromptRank Algorithm - tworzenie podpowiedzi dla użytkowników na podstawie przewidywanych intencji/działań.
- Filecoin - przechowywanie danych i przetwarzanie w chmurze.
- Akash Network - otwarta sieć obliczeniowa do uruchamiania agentów LLM.
- Wallets - Shapeshift, Exodus, inne opcje open source.

## Schemat kompletnego węzła Morpheus dla agenta / LLM dla akcji Web3.
Audyty agentów przeprowadzane przez koderów generujących "Dowód Agenta", że podane funkcje agenta są zgodne z przedstawionymi. I oczywiście nie zawiera złośliwego kodu.

Miejsce na opis procesu audytu, kto może przeprowadzać audyty i jak certyfikować ich wyniki. Również zachęty wypłacane audytorom.

Prompt Proof generowany w momencie interakcji użytkownika, pokazujący wyrażony zamiar, pasuje do wyboru smart contractu, a wartości transakcji są potwierdzane z użytkownikiem.

## Schemat użytkowników i kontrybutorów Morpheus
![Morpheus User   Contributor Diagram](https://github.com/MorpheusAIs/Morpheus/assets/1563345/2cff8d70-c116-472f-a431-8a82bfa22f9b)

### Diagram pokazujący UX przepływ od żądania użytkownika do potwierdzenia akcji Web3.
![UX flow for prompted web3 tasks and ticketing](https://github.com/MorpheusAIs/Morpheus/assets/76454555/942b20fb-d67e-4a57-af2c-cd24a89690a5)

### Schemat przedstawiający wersję Morpheusa zainstalowaną lokalnie.
![MorpheusLocalDiagram](https://github.com/SmartAgentProtocol/SmartAgents/assets/1563345/a0564914-cddb-42e4-b0f4-8c2310db6a66)

### Schemat przedstawiający zainstalowaną wersję Morpheus P2P.
![MorpheusP2PDiagram](https://github.com/SmartAgentProtocol/SmartAgents/assets/1563345/a7eeb31f-3d38-4233-a45f-e9b91ad84ba2)

### Schemat przedstawiający zdecentralizowaną wersję Morpheus.
![MorpheusDecentralized](https://github.com/SmartAgentProtocol/SmartAgents/assets/1563345/1699f2de-cc18-42e8-a05c-32b3307baa20)

## Wspólnota
- Smart Agency - Niezależni programiści tworzący przypadki użycia / agentów dla użytkowników Morpheus.
- Globalna społeczność deweloperów - Rozwijająca się społeczność deweloperów, startupów i użytkowników.
- Społeczność rekrutuje posiadaczy ETH do przekazywania zysków deweloperom, obliczeniom i społeczności Morpheus.
- Rozproszony zespół programistów - programiści smart contractów do kodowania smart contractu Morpheus.
- Morpheus Dapps - Marketplace dla integracji Morpheus z inteligentnym agentem użytkownika.
