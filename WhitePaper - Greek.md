![Morpheuslogo](https://github.com/MorpheusAIs/Morpheus/assets/1563345/235b9c04-f3b1-4520-a328-2070c9c890ab)

# Morpheus
## Ένα Δίκτυο Για την Ενίσχυση Έξυπνων Πρακτόρων
### Συντάχθηκε από τον Morpheus, την Trinity και τον Neo
Δημοσιεύτηκε - 2 Σεπτεμβρίου 2023
Σύνδεσμος για Τεχνικές Λεπτομέρειες Κίτρινου Χαρτιού: https://github.com/MorpheusAIs/Morpheus/blob/main/YellowPaper.md

## Εισαγωγή
Ο Morpheus σχεδιάστηκε για να ενθαρρύνει το πρώτο peer-to-peer δίκτυο προσωπικών Τεχνητών Νοημοσύνης, γνωστών ως Smart Agents. Η παροχή στους χρήστες Smart Agents ανοιχτού κώδικα για σύνδεση με τα πορτοφόλια τους, τις Dapps και τα έξυπνα συμβόλαια υπόσχεται να ανοίξει τον κόσμο του Web3 σε όλους.

Τέλος, ο μέσος χρήστης μπορεί να επικοινωνήσει με τον Smart Agent του σε φυσική γλώσσα και να του κατανοήσει την ερώτηση, προχωρώντας σε δράση βάσει της πρόθεσης/έγκρισής του. Αυτή η στιγμή είναι παρόμοια με το πώς ο μηχανισμός αναζήτησης της Google άνοιξε τον πρώιμο διαδίκτυο στο ευρύ κοινό μέσω του εύκολου στη χρήση διαδικτυακού περιβάλλοντος τους στα τέλη της δεκαετίας του 1990.

Για να καταστήσουμε τους Smart Agents προσβάσιμους σε όλους και να αυξήσουμε την αποκεντρωμένη φύση της υποδομής τους, προτείνουμε την ανάπτυξη του δικτύου Morpheus. Το δίκτυο Morpheus θα περιλαμβάνει ένα νόμισμα που θα κυκλοφορήσει δίκαια (το "MOR" token) για να ενθαρρύνει όλους τους τέσσερις βασικούς συνεισφέροντες στο δίκτυο. Δηλαδή, την κοινότητα των δημιουργών που δημιουργούν διεπαφές, τους προγραμματιστές που συνεισφέρουν στο λογισμικό/agents του Morpheus, τους παροχείς κεφαλαίου που προσθέτουν υγρασία και όσους παρέχουν υπολογισμό, αποθήκευση και εύρος ζώνης. Έχει αποδειχθεί από την ιστορία του Bitcoin και του Ethereum ότι ο ανοιχτός και ελεύθερος ανταγωνισμός για περιορισμένα ψηφιακά νομίσματα μπορεί να παρέχει κλιμακούμενη υποδομή για ένα δημόσιο blockchain κατά τη διάρκεια μεγάλων χρονικών περιόδων.


![MorpheusNetworkDiagram](https://github.com/MorpheusAIs/Morpheus/assets/1563345/f0960e25-80e3-42ed-aa1f-ad9792eb672d)

## Συμφραζόμενο & Ιστορία
Οι υφιστάμενοι, όπως η OpenAI, η Microsoft και η Google, λειτουργούν κλειστά μοντέλα γλωσσικών μεγαλέων, χρεώνοντας άδειες χρήσης στους πελάτες και εκμεταλλευόμενοι τα δεδομένα των πελατών. Αυτά τα μοντέλα είναι λογοκριμένα, ευαίσθητα και λειτουργούν σε περιορισμένα περιβάλλοντα. Υπάρχει μεγάλη ζήτηση για ένα ανοιχτού κώδικα μοντέλο γλώσσας μεγάλης κλίμακας που θα είναι διαθέσιμο δωρεάν. Πρόσφατα έχουν κυκλοφορήσει τα Llama, Falcon και άλλα ανοιχτού κώδικα LLMs και πλησιάζουν γρήγορα την ακρίβεια των κλειστών τους ανταγωνιστών.

Αυτά που λείπουν προς το παρόν από αυτά τα ανοιχτού κώδικα LLMs είναι μια προτυποποιημένη γραφική διεπαφή μέσω της οποίας οι χρήστες μπορούν να συνομιλούν μαζί τους, μια API για προγραμματιστές, μια λύση στο cloud για τη μετακίνηση μεταξύ συσκευών και έναν τρόπο διαχείρισης των δεδομένων χρήστη και της διαδικασίας ανάκτησης. Εδώ είναι που εμφανίζεται το Πρωτόκολλο Έξυπνου Πράκτορα, καθώς παρέχει ένα ανοιχτού κώδικα LLM που λειτουργεί τοπικά και διαχειρίζεται από το Web3 πορτοφόλι του χρήστη.

Ωστόσο, η τοπική προσέγγιση εξακολουθεί να λείπει από μια API για προγραμματιστές για να αναπτύξουν, καθώς και από τη λύση στο cloud, όπου ένα δίκτυο χρηστών μπορεί να εκτελεί το λογισμικό σε ισχυρό υλικό για να επιτρέψει περιπτώσεις χρήσης όπως οι light clients, όπου ο χρήστης δεν χρειάζεται να κατεβάσει τον πλήρη κόμβο ή τον Έξυπνο Πράκτορα τοπικά.

## Εισαγωγή του Morpheus
Ο Morpheus θα παρέχει αυτές τις APIs και αποκεντρωμένες λειτουργίες στο cloud με τη δημιουργία ενός δικτύου και ενός ειδικού κέρματος για να ανταμείβει αυτούς που παρέχουν αυτήν τη δημόσια υποδομή blockchain στην κοινότητα των Έξυπνων Πρακτόρων. Ως υλοποίηση του Πρωτοκόλλου Έξυπνου Πράκτορα, ο Morpheus επιδιώκει να συγκεντρώσει τους πόρους που απαιτούνται για να ταιριάξει και ύστερα να υπερβεί τις δυνατότητες των τεχνολογικών εταιρειών που προσφέρουν κλειστά μοντέλα GPT σήμερα.

Ο Morpheus έχει πολλά πλεονεκτήματα από την αρχή. Είναι φυσικό στο Web3, όπου ο χρήστης μπορεί να αγοράσει ή να πουλήσει κρυπτονομίσματα, να στείλει stablecoins, να έχει πρόσβαση σε έξυπνα συμβόλαια, να χρησιμοποιεί Dapps και υπηρεσίες DeFi, κάτι που κανένα LLM δεν είναι συνδεδεμένο με σήμερα. Οι ρυθμιστικοί φραγμοί που αντιμετωπίζουν οι κεντρικές εταιρείες τους εμποδίζουν από το να προσφέρουν αυτά τα εργαλεία στους χρήστες, ώστε τα μοντέλα τους να μπορούν να συζητούν για εργασίες, αλλά όχι να ενεργούν εξ ονόματος του χρήστη σε ένα πλαίσιο Web3. Η λειτουργία σε αποκεντρωμένη δημόσια υποδομή είναι πιο οικονομική από το να πληρώνει κανείς την Chat GPT για άδεια χρήσης για κάθε νέο χρήστη.

Ο Morpheus είναι η εναλλακτική λύση τύπου Linux για προγραμματιστές που θέλουν να μπορούν να δημιουργούν γρήγορα νέους πράκτορες / LLMs χωρίς κόστος. Ο χρήστης μπορεί να διατηρεί την κυριότητα των επιχειρηματικών ή προσωπικών του δεδομένων. Αυτό αποφεύγει διαρροές, επιθέσεις και επιθέσεις από ανταγωνιστές. Ανταμείβοντας τους προγραμματιστές που συνεισφέρουν κώδικα όχι μόνο στον Morpheus, αλλά και για την κατασκευή περισσότερων εξειδικευμένων Πρακτόρων, θα αναπτυχθεί μια εμπειρία τύπου App Store/Agent Store για τους χρήστες. Με τη διατήρηση δεδομένων, προτροπών και ιστορικού που ανήκουν στον χρήστη, το Πρωτόκολλο Έξυπνου Πράκτορα γίνεται η καλύτερη λύση για τη συμβατότητα στον κόσμο των LLMs και των Πρακτόρων.

## Ανταμοιβές Κέρματος & Οικονομία
Η πρότασή μας παρέχει για αυτό με ένα κέρμα Morpheus (σύμβολο "MOR").
Το MOR ανταμείβεται καθημερινά με 24% στην κοινότητα, 24% στο κεφάλαιο, 24% στον υπολογισμό, και 24% στους προγραμματιστές. Το 4% πηγαίνει σε ταμεία προστασίας.

Αυτό αντικατοπτρίζει την πραγματικότητα ότι για την ανάπτυξη του Morpheus, χρειάζεται τα εξής:

Κοινότητα - Οι δημιουργοί δημιουργούν πρόσοψη / εργαλεία και φέρνουν χρήστες στο οικοσύστημα του Morpheus.

Κεφάλαιο - Φέρνει τη χρηματοδότηση για τον υπολογισμό και τον κώδικα.

Υπολογισμός - Παρέχει τον εξοπλισμό και την ισχύ.

Προγραμματιστές - Παρέχουν την ευφυΐα για να χρησιμοποιήσουν τα πρόσοπα, το κεφάλαιο και τον υπολογισμό.

Το Προσφοράς Κερμάτων MOR περιορίζεται σε ένα μέγιστο ποσό των 42.000.000 κερμάτων που θα υπάρξουν ποτέ. Η διανομή θα ξεκινήσει με όλες τις τέσσερις ομάδες να κερδίζουν τα κερμάτα παρέχοντας μορφές απόδειξης εργασίας (εργασία) και απόδειξης στάθμισης (κεφάλαιο) στο δίκτυο. Χωρίς προεξορυξη. Χωρίς προωρή πώληση κερμάτων. Απλά μια δίκαιη έναρξη.

![MOREmissionsCurve2](https://github.com/MorpheusAIs/Morpheus/assets/1563345/3514217c-50ed-4639-8c5d-87ca5cfb5d1b)

Η ανταμοιβή του τετράγωνου θα ξεκινήσει με 14,400 MOR ανά ημέρα και στη συνέχεια θα μειώνεται κατά 2.468994701 MOR κάθε μέρα, μέχρι η ανταμοιβή να φτάσει στο 0 στην 5,833η μέρα. Μέχρι εκείνη τη στιγμή (περίπου 16 χρόνια από τώρα), εφόσον το Morpheus χρησιμοποιείται ευρέως, τα τέλη θα έχουν αναλάβει τον ρόλο του κύριου κινήτρου. Τέλη που καταβάλλονται σε χρήστες για τα δεδομένα τους, τέλη σε παρόχους υπολογισμού, τέλη σε παρόχους κεφαλαίου και τέλη σε προγραμματιστές.

**Ορορά Προσφοράς 42 Εκατομμύρια Κερμάτων MOR.**
14,400 κερμάτα ανά ημέρα κατανέμονται ομοιόμορφα μεταξύ χρηστών της κοινότητας, κεφαλαίου, κώδικα και υπολογισμού.
- 3,456 κερμάτα για τον υπολογισμό. Αποδεικνύεται με συναλλαγές για κλήσεις API που εξυπηρετούνται.
- 3,456 κερμάτα για τον κώδικα. Απόδειξη του κώδικα που δεσμεύεται και ενσωματώνεται στο αποθετήριο του Morpheus.
- 3,456 κερμάτα για το κεφάλαιο. Απόδειξη του αποδόσης stETH, το 50% ανταλλάσσεται για MOR και τα υπόλοιπα κλειδώνονται στο AMM ως Παροχέας Υγρασίας.
- 3,456 κερμάτα για την κοινότητα. Απόδειξη κατασκευής προσόψεων εφαρμογών και εργαλείων που ενεργοποιούν τους χρήστες.
Με το υπόλοιπο να διατηρείται για πόρους προστασίας: 576 κερμάτα ανά ημέρα για αυτόν τον σκοπό.
![5050version3](https://github.com/MorpheusAIs/Morpheus/assets/1563345/c9fe763f-d4e4-4069-b9c9-75e0a777c3ad)

## Η Χρησιμότητα του Κέρματος MOR
Ο στόχος είναι το MOR να παρέχει ευρεία χρησιμότητα σε πολλές από τις λειτουργίες του δικτύου Morpheus. Ως αποτέλεσμα, η χρήση του κερμάτος MOR προσφέρει έναν μηχανισμό λογιστικής on-chain για τον υπολογισμό ανταμοιβών βασισμένο στην πραγματική χρήση του λογισμικού.

Οι προγραμματιστές πληρώνουν MOR σε παρόχους υπολογισμού για λειτουργίες πέρα ​​από αυτό που μπορεί να εκτελέσει το τοπικό υλικό. Το MOR πληρώνει για τις κλήσεις API του Morpheus για εφαρμογές αποκεντρωμένου χρήστη χρησιμοποιώντας το Smart Agent Protocol. Οι χρήστες μπορούν να πληρώ

## Στον Κοντινό Όρος: Κατά την Εκκίνηση
Κεφάλαιο - Το ETH κλειδώνεται σε ένα έξυπνο συμβόλαιο που παράγει απόδοση (για παράδειγμα, ETH σε ένα συμβόλαιο στοίβαξης Lido για stETH). Το 50% της απόδοσης stETH ανταλλάσσεται τακτικά σε MOR μέσω ενός AMM, και το άλλο 50% της απόδοσης stETH κρατείται ως stETH στην πισίνα ως Παροχέας Υγρασίας. Έτσι, οι Συνεισφέροντες Κεφαλαίου προσθέτουν περίπου 50% MOR και 50% stETH για να αυξήσουν τη ρευστότητα της πισίνας AMM MOR / stETH με τον χρόνο.

- Κεφάλαιο, Η αξία της απόδοσης τους από το ETH θα υπολογίζεται σε σχέση με όλη την απόδοση ETH που συνέβαλε και την απόδοση MOR που τους ανταμείβεται αναλογικά.
- Υπολογισμός, Οι παρόχοι υπολογισμού λαμβάνουν MOR για τις οδηγίες χρήστη στις οποίες απαντούν.
- Προγραμματιστές, Οι προγραμματιστές λαμβάνουν MOR για τις συνεισφορές που κάνουν στο λογισμικό του Morpheus που ενσωματώνεται.
- Κοινότητα, Οι δημιουργοί της κοινότητας λαμβάνουν MOR για τις προσόψεις, τα εργαλεία, τη χρήση και την αξία που φέρνουν στο δίκτυο του Morpheus.

## Μεσοπρόθεσμος Όρος: Καθώς το MOR Κερδίζει Ευρύτερη Διακίνηση
- Κεφάλαιο, Αναπτύσσεται ένα ισορροπημένο μεταξύ των ανταμοιβών πλαισίων και των κερδών από τα τέλη.
- Υπολογισμός, Αναπτύσσεται ένα ισορροπημένο μεταξύ των ανταμοιβών πλαισίων και των κερδών από τα τέλη.
- Προγραμματιστές, Αναπτύσσεται ένα ισορροπημένο μεταξύ των ανταμοιβών πλαισίων και των κερδών από τα τέλη.
- Κοινότητα, Αναπτύσσεται ένα ισορροπημένο μεταξύ των ανταμοιβών πλαισίων και των κερδών από τα τέλη.


## Μακροπρόθεσμος Όρος: Όταν το MOR Έχει Βαθιά Ρευστότητα και Δυνατή Οργανική Ζήτηση
- Κεφάλαιο, Τα τέλη για την παροχή ρευστότητας ETH στο κέρμα MOR θα παρέχουν την πλειοψηφία των ανταμοιβών τους.
- Υπολογισμός, Τα τέλη που καταβάλλονται στους παρόχους υπολογισμού θα αποτελούν την πλειοψηφία των ανταμοιβών τους.
- Προγραμματιστές, Τα τέλη που πηγαίνουν στους προγραμματιστές θα αποτελούν την πλειοψηφία των ανταμοιβών τους.
- Κοινότητα, Τα τέλη που καταβάλλονται από τους χρήστες θα παρέχουν την πλειοψηφία των ανταμοιβών τους.

Σημείωση: Αυτό δεν είναι ένα χρονολόγιο. Κάθε φάση αποτελεί μια περιγραφή ενός τμήματος του κύκλου ζωής. Μπορεί να πάρει χρόνια για την κοινότητα να αναπτυχθεί και να ωριμάσει μέσω κάθε φάσης, και η ανταμοιβή του τετράγωνου λήγει περίπου μετά από 16 χρόνια. Ο παρατεταμένος αυτός προγραμματισμός διανομής έχει σκοπό να δώσει χρόνο στα κερμάτα να ανταμειφθούν ευρέως και παγκοσμίως. Επίσης, η ομαλή καθημερινή μείωση των ανταμοιβών πλαισίων για πολλά χρόνια δίνει σε όλους τους συμμετέχοντες τον χρόνο να επιτύχουν κλίμακα και να μεταβούν από τις πρώιμες επιδοτούμενες ανταμοιβές στη λειτουργία αποκλειστικά με τα τέλη που κερδίζουν.

![MOREmissionSchedule](https://github.com/MorpheusAIs/Morpheus/assets/1563345/94c96cb0-b6e4-4c63-be46-39088c91e168)

## Tail Emissions of MOR
Ever since Bitcoin's launch people have argued about "what will happen when the block rewards finally stop?" To avoid this unhelpful debate in the context of Morpheus and to continue aligning new coders, community, compute & capital providers long into the future, we propose a "tail emission" of MOR tokens. This MOR tail emission will start after the last MOR tokens have been emitted on day 5,833 of the distribution schedule.
 
The tail emission will be calculated by reviewing the number of burned MOR tokens in the past 5,833 days and setting the tail emission value to be 50% of the burned amount. This tail emission value will be emitted in the next 5,833 day period. But in no case will the tail emission be greater than 16% of the then in circulation MOR. 
 
For example, if on average 25% of MOR tokens were burned during the first 5,833 days then 10,500,000 MOR would have been burned during the first emission schedule. Then by applying the 50% tail emissions value we calculate 5,250,000 MOR can be rewarded in the second 5,833 day period. Which works out to about 16.6% of the 31,500,000 MOR left in circulation. According this amount would be further reduced to 5,040,000 MOR (16% of tokens in circulation) to be rewarded in the second 5,833 day period or ~864 MOR per day.
 
After the second 5,833 day period is complete, this process will repeat. The tail emission will be calculated again by reviewing the number of burned MOR tokens in the past 5,833 days and setting the tail emission value to be 50% of the burned amount. This tail emission value will be emitted in the next 5,833 day period. But in no case will the tail emission be greater than 16% of the then in circulation MOR. 
 
For example, again if 25% of MOR tokens were burned during the second period, that equals 9,135,000 MOR were burned during the second emission schedule. Then 4,567,500 MOR can be rewarded in the third 5,833 day period. However, since this number is more than 16% of the then 27,405,000 MOR then left in circulation it will be reduced to 4,384,800 MOR to align with the 1% annual rewards (relative to tokens in circulation).
 
This process repeats forever on into the future.
 
Longterm result. About 1% of annual MOR rewards (relative to the number of MOR then in circulation) will be available for future coders, compute, community & capital.

![MaxMORScenario25](https://github.com/SmartAgentProtocol/SmartAgents/assets/1563345/81c7794a-b5bc-4a9e-bb2d-1f28b98ea079)

**IMPORTANT NOTE:** This does not alter the nature of the hard Supply Cap of 42 Million MOR. 
Since the tail emission schedule is by definition only a portion of the MOR tokens which were burned, thus the MOR token can only become ever more scarce with each 5,833 day period.

![MOR25ScenarioV9](https://github.com/SmartAgentProtocol/SmartAgents/assets/1563345/4813cd02-b104-4a0c-893b-a7fd329fe2a3)

Below is shown the unified MOR Supply Curve showing the first 5,833 day period and adding the long tail emissions from year 17 to year 256. Presuming the example of a 25% average burn rate of MOR over the epochs.

![MORSupplyCurve20231019](https://github.com/SmartAgentProtocol/SmartAgents/assets/1563345/8994c389-dad1-4e46-9b63-e048da8ef172)

## Proof of Community, Code, Compute & Capital
The Morpheus full node comes with a wallet or the user can connect their existing wallet. This enables the user to sign and send transactions recommended by their Smart Agent. So users will be able to participate in the proofs through the Morpheus software. However Capital Providers are not required to have a full node for example. They can interact directly with the Smart Contracts on Ethereum / Arbitrum using stETH.

## Capital Proof & Reward:
The definition of a Capital Provider is someone provides stETH yield to the Morpheus network which becomes Protocol Owned Liquidity (PoL). This Capital Provider Smart Contract will provide 50% of the stETH yield produced to the Morpheus swap function. The swap buys the MOR tokens from an Automated Market Maker (AMM) then pairs them with 50% of the stETH yield and lock into the AMM Liquidity Pool as PoL. This will provide liquidity to all those coders, community members and compute providers. The fees earned by liquidity position are re-invested in the pool ensuring steady liquidity growth.

This way all stETH yield earned from your deposit is converted into protocol-owned liquidity (PoL). The yield remains as PoL indefinitely, but you can withdraw your stETH whenever.

As a result, the Capital Provider will receive MOR tokens each day in pro-rata to their total stETH yield contributed. For example, if there are 100 Capital Providers who each contributed 1 stETH of yield on day 1 when the network launches, then each one gets 1% of the 3,456 MOR tokens each day = 34.56 MOR.

It has been proposed to refer to this process of yield contribution, swap and adding liquidity as the "TCM". Short for the "techno-capital machine" in honor of the e/acc philosopher Beff Jezos. 

## Code Proof, Registration & Reward:
The definition of a Coder is someone who has downloaded and run the Morpheus full node, connected their wallet, and contributed an agent, smart contract or other software to the Morpheus Network.

The Coder will send a MOR transaction to the Coder Smart Contract to register their agent / smart contract or software. 
The Coder will include in the memo of the transaction the following metadata. 
- A. An IPFS link to their software's endpoint in the memo field of the MOR transaction when they register. 
- B. A cryptographic signature, similar to how developers sign/authenticate app releases.
- C. The version number of the software.
- D. A hash of the state of the program, so users can check it is a valid and unaltered copy.

The contributors to the Morpheus codebase are rewarded in proportion to all the cumulative development done on the repository as gauged by Full Time Equivalent (FTE) work contributed. For example, if there are 10 coders each having contributed 10% of the FTE time when the network launches, then each one gets 10% of the 3,456 MOR tokens each day = 345.6 MOR. This calculation is updated each month based on the cumulative FTE time contributions of the current mainnet version of the Morpheus software.

Once there are specialized agents or tools or chains (sequence of prompts/calls to an LLM) interoperable with Morpheus, then half (50%) of the rewards will go to their developers. The reward will be calculated in proportion to the usage of those agents. For example, if there are 10 developers who built 10 agents each generating 10% of the agent usage on the Morpheus network. The Morpheus smart contract will calculate those usage statistics via MOR transactions. Then the Morpheus software coders would earn 50% of the MOR reward and each developer of a specialized agent would get 5% of the tokens = 172.8 MOR per developer in this example.

A great deal of the leading research that has been done in this area of "Proof of Contribution" is by the good folks at the TEA Protocol. Including Max Howell the developer of Home Brew. Link to paper with the details. Morpheus may consider leveraging TEA after its launch in 2024.

## Compute Proof, Registration & Reward:
In the Yellowstone Compute Model, the Morpheus network pays Providers only for Compute actually provided through a competitive bid process, and allocates the scarce production of Tokens pro-rata to MOR token holders based on balance, rather than on payment. This drastically improves UX while minimizing Sybil vulnerability. Yellowstone also imbues the important metrics of time and a Pass/Fail test to ensure Providers are adequately prompt and accurate. Yellowstone preserves privacy by never sending prompts or results through the Router, and minimizes blockchain transactions to permit a large scale of operation. Through this model, MOR achieves fundamental value as it enables perpetual (though not unlimited) access to permissionless compute, without requiring transactions per inference.

To qualify to receive Compute requests a Compute Provider's address must HODL MOR tokens. Requests will be routed to the Compute Providers API pro-rata to the MOR they hodl compared to all other registered Compute Providers.

Details are discussed in the Yellowstone Compute Model paper: https://github.com/MorpheusAIs/Morpheus/blob/main/Yellowstone%20Compute%20Model.md 

## Community Builder Proof, Registration & Reward:
The definition of a Community Builder is they have downloaded and run the Morpheus full node, connected their wallet and are using the Morpheus API to provide user front ends & developer tools. Their contributions provided can be calculated by including a signed transaction generated by the Smart Agent with the return of the output from the MOR transaction.

The Community Builder will send a MOR transaction to the Community Builder Smart Contract to register the API endpoint for receiving requests. 
The Community Builder will include in the memo of the transaction the following metadata. 
- A. An IPFS link to their frontend or tool via an endpoint in the memo field of the MOR transaction when they register. 
- B. A cryptographic signature, similar to how developers sign/authenticate app releases.
- C. The version number of the Morpheus software they are using.
- D. A hash of the state of the front end / tool, so users can check it is a valid and unaltered copy.

The pro-rata MOR transaction fees burned by each Community Builder serves as proof of the Community Builder's status and earns a proportion of the MOR tokens each day. 

For example, if there are 100 Community Builders on day 1 when the network launches, then each one gets a pro-rata reward based on the amount of MOR they have burned via fees. In this case, presuming each of the 100 Community Builders burned 100 MOR, then 1% of the 3,456 MOR tokens each day = 34.56 MOR.

## Morpheus User Diagram
![UpdatedDiagram2UserFlow](https://github.com/MorpheusAIs/Morpheus/assets/1563345/a02468a7-9284-4ce5-b7e3-f32f476ff9f1)

## Morpheus Rewards Delivered by Smart Contract On Ethereum Layer 2 
Depositing of stETH for rewards will be made on Ethereum mainnet, when Morpheus Tokens (MOR) will be awarded on the the Ethereum Layer 2 Arbitrum, for the purpose of payments and other MOR utility related actions.

Note that Morpheus does not need to set aside MOR rewards for blockchain consensus or transaction execution on a distributed ledger thanks to building on Ethereum and 2nd layer Arbitrum. 

MOR holders will be able to send a transaction to the MOR Smart Contracts and claim their MOR rewards at any time. They can also withdraw their stETH at any time.

## The Free Market Sets Fees on Morpheus
The best systems pick the least number of magic numbers and instead let the free market decide as many variables as possible. Fees are a great example of this. Rather than picking an arbitrary fee to charge instead, Morpheus leaves these numbers up to users, devs, capital and compute providers. For example, if a compute provider can offer a $0.02 price per 1,000 language tokens for their LLM and a user decides to pay it, then that's what the market is willing to pay. As compute speeds up prices are likely to change and so it's better to leave these and other variables up to those using the Morpheus software.

Fees For Compute
Amount of fee set by users and compute provider. Option to pay compute & burn MOR tokens with each fee. Open market to develop over time. Free marketplace for compute instead of consensus or privileged nodes.

Fees For Code / Agent Intelligence
Amount of fee set by coder and accepted by user. Option to pay fee & burn MOR tokens with each fee. Open market to develop over time. Free marketplace for code instead of consensus on tasks.

Fees For Capital
Amount of fee set by LP & accepted by user. Option to pay fee & burn MOR tokens with each fee. Open market to develop over time. Free marketplace for capital instead of consensus on treasury.

## Fees For User Community
Amount of fee set by users and accepted by data buyer. Option to pay fee & burn MOR tokens with each fee. Open market to develop over time. Free marketplace for data.

All fees are paid in native MOR tokens creating natural demand in the system as usage grows.

## Use of Fees To Incentivize Honest Agents & Repair Losses In Case of Errors
Another important use for MOR & ETH in the Morpheus network will be compensating users in case of Smart Agent / Smart Contract failures. We believe curating and building reputation backed up with economic resources will be key to growing confidence in Smart Agents and having a source of funding to address errors, bugs, and other issues that arise. After a major bug and the resulting hard fork of Bitcoin in 2010, an early core developer named Gavin Andresen stepped up to pay Bitcoin to miners who had lost rewards due to the hard fork. This action was important and quickly resolved the hard fork but it was ad hoc.

Recognizing ahead of time that software is never perfect and setting aside 4% of MOR resources to repay those affected by a bug in the code. The Morpheus developer community will serve as an oracle to recognize when a bug or error has had an economic effect on a user, compute provider, or capital provider. A predefined set of failures will be covered by these resources to include bugs in the Morpheus Smart Contract or local install.

For broader protection, an integration with Nexus Mutual or similar smart contract / decentralized protection network could be considered to cover edge cases with agents / smart contracts that want to be included in a Morpheus Agent Store or better ranked by the SmartContractRank algorithm. 

## Storage For Persistence & Wallets For Recovery
Rather than store personal data in the Morpheus network itself, which would be cost prohibitive and a centralizing force, individuals will hold the private keys controlling access to their data, prompts & wallet. The data itself will be stored using the IPFS standard and the Filecoin network for decentralized long-term storage. Leveraging the Filecoin EVM and DeFi for yield a permanent recurring storage can be arranged. Alternatively, users can pay annually ENS style for storage. The approach and keeping the private Web3 wallet as the key for movement/recovery of this data to different devices as the user changes computers or phones.

## Morpheus Tech Stack, Smart Contract & Development
The Morpheus implementation of the Smart Agent Protocol will be a direct fork of the existing locally run repo. The most significant change will be to update SmartContractRank to include knowledge of the MOR token and its functions in powering a network of Smart Agents.

The Morpheus MOR token is being developed as a Smart Contract on Ethereum via the ERC20 standard for fungible tokens. Most smart contracts are on Ethereum and the Ethereum Virtual Machine has become the lingua franca of the Web3 space. To reduce the cost of gas fees for sending daily rewards we will leverage Ethereum's layer 2 called Arbitrum.

We believe the choice of the Ethereum blockchain is the best starting place given on chain actions such as staking ETH can only be validated by a smart contract running on the same chain. In addition on chain validation of coding via ENS domains or Ethereum public addresses adds another means of connecting code contributed to the wallet of the coder who provided it. A record of which the Morpheus Smart Contract can access daily.

Also, zero-knowledge proofs for scalability and privacy are key to many use cases. So starting with these capabilities day one will put the Smart Agent community in the best position for the future. Arbitrum is in the process of adding ZK tech, much of which is already live.

In the near term, this tech stack selection secures Morpheus directly in Ethereum's layer 1 security with the reduced gas costs of a layer two. In the mid-term, this selection also provides a pathway to expand Morpheus to other Ethereum layer 2s and EVM compatible blockchains.

As interoperability improves between public blockchains Morpheus will seek to serve all Web3 AI Agent builders across the various EVM / solidity compatible developer communities. We recognize strong builder communities on Arbitrum, Polygon, OP Stack, Base, Arbitrum, Avalanche, Polkadot, Solana, Filecoin & Cosmos that share a similar vision and values. Morpheus is only possible today thanks to the tools built by developers across many of these chains.

## User Data Security
To avoid leaking private data when sending prompts to the Morpheus peer-to-peer network of Compute Providers, the software should seek to leverage Fully Homomorphic Encryption (FHE) versions of Large Language Models as they are released. Also with the advent of hardware acceleration for FHE in 2024/2025, it's projected that costs for this computation will reach parity with plain text processing.
 
- LLM example https://huggingface.co/blog/encrypted-llm 
- EVM example https://www.fhenix.io/

## The Network Emerges & a 90 Day Bootstrapping Period

The Morpheus Network begins with the local install version 0.0.1, then continues with the MOR token smart contracts and then full node software.

The smart contracts which calculate the rewards of MOR should be extensively tested via a testnet before deployment onto a mainnet.

Also there will be a one time 90 day delay (known as the bootstrapping period) between when the mainnet begins calculating rewards and when those MOR tokens are claimable / sendable by users. This bootstrapping period will ensure enough MOR tokens are ready for circulation to fulfill the utility functions of the network. 

To boot strap the AMM, the 4% of MOR tokens dedicated to the protection funds (51,444 MOR by day 90) will be leveraged for this purpose. 

These steps will provide that 1,286,111 MOR are claimable at the beginning of day 91 on the mainnet & thus avoid extreme token scarcity like happened with the launch of Zcash, when only a few tokens were first available from mining day 1. This issue took the market weeks to reach an equilibrium and establish rational price discovery. Morpheus avoids this issue with this 90 day boot strapping period, thus preparing the token supply with enough tokens to fulfill its utility and establish rational price discovery.

Once MOR tokens are claimable and sendable then the Morpheus Network can enable MOR transactions to pay for API calls, custom agents and validate the Stake of participants in the network. 

## Conclusion
We are close to an important moment in history. With Morpheus, everyone will have a powerful personal AI capable of thinking with them and taking actions to benefit them. In the same way the personal computer and the search engine empowered the individual, we have the same opportunity with personal AIs today. The Smart Agent Protocol brings together the right mix of capabilities with LLMs, Agents, and Web3. Morpheus extends those capabilities into a public network capable of accelerating the mass distribution and usage of Smart Agents.

We believe the economic alignment of incentives is ultimately how we secure the best outcomes from the coming of AGI. Help us secure an open source, permissionless and free future for everyone. 

_______________________
## Context On Proposal:

I received an email from a developer named Morpheus September 2nd 2023 with the above proposal.

_______________________
David,

Find below a proposal for launching "Morpheus - A Network For Powering Smart Agents".

The paper lays out the token economics, tech stack, and means of calculating proofs for fairly rewarding the community, coders, capital & compute providers with tokens.

This paper is freely given to the Smart Agent community and is available in the public domain.

Free your mind.

Morpheus

--------------------------------------------------------------------
