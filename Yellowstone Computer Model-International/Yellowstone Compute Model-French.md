![Image1forYellowstone](https://github.com/MorpheusAIs/Morpheus/assets/1563345/80a6c1cf-fe52-42ba-bfd4-91d9faf67f07)

# Modèle de Calcul "Yellowstone" de Morpheus
### Erik Voorhees
### 3 janvier 2024

Une révision suggérée de la structure tokenomique de Morpheus pour l'incitation au calcul sur un réseau d'IA décentralisé.
Voir sur Notion : https://defiant-wolfsbane-830.notion.site/Morpheus-Yellowstone-Compute-Model-2ca9b4e7e1374c898937fdbd1b964cc1


## Résumé
Dans le modèle de calcul Yellowstone, le réseau Morpheus rémunère les fournisseurs uniquement pour le calcul effectivement fourni par le biais d'un processus d'enchères compétitif et attribue la production limitée de tokens de manière proportionnelle aux détenteurs de tokens MOR en fonction de leur solde, plutôt qu'en fonction du paiement. Cela améliore considérablement l'expérience utilisateur tout en minimisant la vulnérabilité Sybil. Yellowstone intègre également des métriques importantes de temps et un test de réussite/échec pour s'assurer que les fournisseurs sont suffisamment rapides et précis. Yellowstone préserve la confidentialité en ne transmettant jamais les demandes ou les résultats par le routeur et minimise les transactions blockchain pour permettre une grande échelle d'opération. Grâce à ce modèle, MOR atteint une valeur fondamentale en permettant un accès perpétuel (bien que non illimité) au calcul sans autorisation, sans nécessiter de transactions par inférence.

Si adopté, ce document remplace la section "Preuve de Calcul, Enregistrement & Récompense" du [Livre Blanc de Morpheus](https://github.com/antonbosss/Morpheus/blob/main/!KEYDOCS%20README%20FIRST!/2.WhitePaper.md)

## Contexte
Morpheus utilise la tokenomie pour inciter au calcul suffisant et scalable en tant que ressource pour l'IA générative décentralisée et sans autorisation. Dans sa conception initiale, Morpheus émettait 24 % des émissions de MOR directement aux fournisseurs de calcul, de manière proportionnelle en fonction des demandes d'inférence reçues, et il donnait la priorité aux demandes d'inférence de ces fournisseurs en fonction du montant de MOR qu'ils détenaient.

### Tiré du livre blanc original :
"Les frais de transaction MOR pro-rata brûlés par chaque fournisseur de calcul servent de preuve du statut des fournisseurs de calcul et leur rapportent une proportion des tokens MOR chaque jour.

Par exemple, s'il y a 100 fournisseurs de calcul le jour 1 du lancement du réseau, chacun d'eux reçoit une récompense pro-rata en fonction de la quantité de MOR qu'ils ont brûlée via les frais. Dans ce cas, en supposant que chacun des 100 fournisseurs de calcul ait brûlé 100 MOR, alors 1 % des 3 456 tokens MOR chaque jour = 34,56 MOR."

### Il y a trois problèmes majeurs avec cette approche :
1) Elle oblige les utilisateurs à payer des frais de transaction par inférence. Même s'ils sont faibles, cela crée une friction importante et entraînera une mauvaise expérience utilisateur ainsi qu'une infériorité constante par rapport à l'expérience utilisateur d'OpenAI. Cela nécessite également au moins une transaction blockchain par inférence, ce qui n'est probablement pas scalable même sur des solutions de couche 2. Chaque événement d'inférence a un coût extrêmement faible, et si une transaction blockchain était requise, l'économie serait irréalisable.
2) Ce modèle est largement exploitable car les revenus attendus pour les fournisseurs de calcul sont bien supérieurs aux coûts réels du calcul. Un adversaire pourrait inonder son propre nœud fournisseur de calcul de demandes d'inférence par spam et gagner une proportion relativement importante de tokens MOR chaque jour, même si aucune valeur économique n'était fournie à personne. Il conduirait probablement à de grandes quantités de calcul précoce (inutilisé), qui disparaissent une fois que l'énorme opportunité de revenus disparaît, et les MOR dépensés pour cette subvention précoce seraient perdus.
3) Si les demandes d'inférence sont priorisées en fonction du montant de MOR détenu par les fournisseurs, alors les performances de ces fournisseurs (temps de réponse) et le coût de leur traitement d'inférence sont ignorés par le réseau, et ce sont précisément ces deux facteurs que le réseau devrait essayer d'optimiser (le temps de réponse et le coût du calcul devraient idéalement être réduits autant que possible). Si le fournisseur détenant le plus de MOR utilisait un GPU de 200 $ de ses jours d'université, les performances d'inférence pour de nombreux utilisateurs seraient extrêmement médiocres. La priorité devrait être basée sur le prix des enchères et les performances, pas sur la détention de MOR.

Ci-dessous est proposé le modèle "Yellowstone" qui modifie la tokenomie de Morpheus pour la fourniture de calcul afin de résoudre les problèmes mentionnés ci-dessus. Ce modèle fonctionne indépendamment de la partie des émissions allouée au calcul, et nous supposerons le statu quo de 24 % du total des émissions.

### Les objectifs sont :
* Permettre aux utilisateurs de ne pas payer par inférence (idéalement, de ne pas payer du tout)
* Atteindre une fourniture efficace, évolutive et durable de ressources de calcul sans autorisation sans payer excessivement
* Inciter à la concurrence sur les temps de réponse et les coûts parmi les fournisseurs de calcul
* Minimiser le nombre de transactions blockchain (que ce soit en couche 2 ou autre)
* Démontrer une demande fondamentale économiquement saine pour MOR

## Modèle Yellowstone
Quatre composants impliqués :

### Utilisateurs
* Ont des requêtes
* Veulent un calcul rapide/précis gratuitement et sans censure/surveillance

### Fournisseurs
* Ont du calcul
* Veulent de l'argent (MOR)

### Routeur
* Moteur de traitement à haut débit
* Peut être relativement centralisé au début, doit éventuellement se décentraliser

### Contrat de Calcul
* Contrat intelligent sans autorisation qui reçoit les émissions de MOR, suit les crédits et débits aux fournisseurs éligibles et paie les fournisseurs lorsque cela est demandé.

## Poids et Mesures Standards

Il existe une unité atomique d'inférences en IA, mesurée en inférences par seconde (IPS). Cela peut être conceptuellement comparé au wei sur la blockchain. Les inférences sont utilisées pour définir les taux dans le routeur Yellowstone. Le poids d'une seule unité IA Morpheus est donc une inférence. En fonction du type de demande, cela peut s'appliquer à n'importe quelle tâche de calcul.

Alors que l'IA et la blockchain fusionnent des points communs, Morpheus cherche à fournir une norme de mesure open source afin de clarifier les termes utilisés par l'IA et la blockchain.

Il existe deux types de demandes, définies par la taille de la réponse renvoyée par un modèle :

**Demandes de longueur déterminée**, où la réponse prend en compte la longueur de la réponse à renvoyer. Des exemples de cela sont :
- Chat/Création d'image
- Diagnostic de maladie
- Reconnaissance d'objets
- Détection de fraude

Les **Demandes de longueur indéterminée** nécessitent des ressources pour répondre qui ne sont connaissables qu'après la création de la réponse. Des exemples de demandes de réponses non déterministes sont :
- Chanter une sonate sur les spaghettis.
- Générer une vidéo d'anniversaire
- Combinez le modèle X avec le modèle Y
- Trancher un modèle 3D en un fichier .stl

Yellowstone se concentre sur les demandes de longueur déterminée. Le routeur décrit sera construit de manière à gérer les demandes indéterminées à l'avenir, mais pas pour les traiter aujourd'hui. Pour ce faire, nous utilisons une mesure normalisée de l'IA décentralisée.

## Taux de l'IA Décentralisée

### Expressions d'inférences par seconde :

| Type | Réponse | Taux |
|------|----------|------|
| Déterminé | Langage | Tokens inférés par seconde (TIPS) |
| Indéterminé - média | Audio | Échantillons inférés par seconde (EIPS) |
| Indéterminé - média | Vidéo | Images inférées par seconde (IIPS) |
| Indéterminé - technologie future | Format futur inconnu | NA |

La première mesure d'inférence pour le routeur Yellowstone sera les tokens. D'autres formats d'inférence suivront.

### Temps

Le temps de bloc pour l'inférence est de 12 secondes, ce qui signifie qu'un bloc de transactions d'inférence est publié et pris en compte 5 fois par minute.
## Définitions

**"Utilisateurs"** : définis comme toute entité ayant une adresse MOR et envoyant des demandes au routeur, utilisant le calcul. Il peut s'agir d'une personne physique envoyant des demandes depuis un nœud de bureau Morpheus, d'un robot, ou d'une entreprise ou d'un site Web tiers interagissant avec le réseau Morpheus au nom de ses utilisateurs finaux (l'utilisation d'inférences par les utilisateurs finaux n'est pas suivie ou prise en compte dans le contrat de calcul, sauf en cas d'échec d'inférence).

**"Fournisseurs"** : définis comme toute entité exploitant un nœud fournissant des ressources de calcul, ayant une adresse MOR et proposant des offres de tokens via le routeur. Lorsqu'un fournisseur remporte l'offre du routeur, il fournit la ressource de calcul (GPUs, etc.) pour divers modèles d'IA à l'utilisateur.

**"Routeur"** : défini comme une application logicielle ayant une adresse MOR et négociant le marché à deux faces entre les utilisateurs et les fournisseurs. Le routeur enregistre et suit les adresses et offres des fournisseurs, traite les demandes des utilisateurs, enregistre les [millisecondes] et les tests de réussite/échec des demandes traitées, et indique au contrat de calcul de créditer les fournisseurs éligibles pour le paiement en MOR. Le routeur n'envoie ni ne reçoit jamais de transactions MOR (ni de transactions sur une blockchain quelconque). Le routeur ne voit jamais le contenu d'une demande ni la réponse.

**"Contrat de Calcul"** : défini comme un contrat intelligent ayant une adresse MOR, recevant toutes les MOR émises allouées au compartiment de calcul, suivant les montants dus aux fournisseurs éligibles et payant en MOR les fournisseurs éligibles lorsqu'ils en font la demande.

**"Token" ("T")** : la plus petite quantité de lettres ou pixels proposée via le routeur. Il s'agit souvent d'environ ~4 caractères de texte, ou 5x5 pixels d'image, etc. Ne pas confondre avec les "tokens" de la blockchain tels que les tokens ERC20 ou le token MOR lui-même.

**"TokenMax"** ci-dessous se réfère au nombre maximum de Tokens acceptés en paiement par le Routeur.

**"RFC"** : signifie "Request for Compute" (demande de calcul). Un utilisateur envoie une RFC au routeur et spécifie le [LLM] auquel l'utilisateur souhaite accéder, ainsi que le [TokenMax], qui est une limite sur le nombre acceptable de T dans la réponse. L'utilisateur voudra limiter cela car des nombres plus élevés = des temps d'attente plus longs pour les réponses, et cela compte davantage vers [UserMax], qui est limité chaque jour.

### Protections du Contrat

Afin d'empêcher une attaque visant à manipuler ou à réduire le nombre de MOR en utilisant un calcul inutilisé, le pool de MOR inutilisé alloué aux fournisseurs de calcul peut être réduit d'au plus 1 % par jour de bloc. Cela équivaut aux émissions normales de calcul + 1 %.

### Incitation au Démarrage du Calcul

Pendant la première année suivant la période de démarrage du Contrat Capital, les 100 premiers fournisseurs de calcul auront droit à une quantité pro rata de 2,4 % des émissions de MOR. Cela est calculé par les routeurs et pris en compte dans le contrat de calcul.

## Flux de Travail
1) Les utilisateurs, les fournisseurs et le routeur créent tous des clés publiques MOR (c'est leur identité, tous les messages signés en tant que tels).
2) Si un utilisateur détient un solde MOR, l'utilisateur peut soumettre une demande de calcul signée "RFC" au routeur. L'utilisateur spécifie [LLM] et [TokenMax].
3) Le routeur donne la priorité aux RFC en fonction du solde MOR de l'utilisateur (résout le problème de sybil).
4) Le routeur sélectionne un fournisseur qui prend en charge le [LLM], priorisé en fonction de l'enchère la plus basse par Token en MOR.
5) Le routeur envoie une vérification de vivacité au fournisseur. Si réussi, alors
6) Le routeur connecte l'utilisateur au fournisseur
7) L'utilisateur envoie une requête ([LLM],[prompt]) au fournisseur
8) Le fournisseur calcule la requête, envoie le résultat à l'utilisateur
9) L'utilisateur signale le temps [millisecondes] entre les étapes 4 et 5, les [Tokens] livrés et la réussite/échec au routeur
10) Le routeur indique au contrat de calcul de créditer le fournisseur en MOR si [millisecondes] par [Token] n'est pas pire que X % en dessous de la moyenne passée de Z requêtes pour ce [LLM] et si l'utilisateur a signalé [Pass].
11) (Plus tard) Le fournisseur demande le paiement de MOR au contrat de calcul et le contrat de calcul envoie le paiement de MOR s'il est valide (première transaction blockchain jusqu'à présent, peut être regroupée).

![ImageContratCalcul2](https://github.com/MorpheusAIs/Morpheus/assets/1563345/e66ea20c-9851-4f9e-9caa-66c6d798c462)

## Résultat
* L'utilisateur reçoit un résultat rapide pour sa requête et ne paie rien (cela conduira à une expérience utilisateur incroyable et donc à l'adoption). **Résout l'objectif 1.**
* Le contrat de calcul a payé le calcul par le biais d'un processus d'enchères compétitif et d'une vérification de qualité/satisfaction de l'utilisateur qui l'a commandé. **Résout l'objectif 2.**
* Le fournisseur a reçu de l'argent (MOR) du contrat de calcul tant que la réponse était assez rapide. Le fournisseur a reçu exactement ce qu'il a demandé pour fournir le calcul. Si sa demande est trop élevée, d'autres soumettront des offres plus basses, ce qui rend le système efficace et fera baisser les prix des fournisseurs vers le coût de l'électricité de base. **Résout l'objectif 3**
* Le nombre de transactions on-chain a été minimisé (des milliers de requêtes peuvent circuler sans une seule transaction on-chain). **Résout l'objectif 4.**
* La possibilité d'obtenir un calcul rapide et gratuit stimule la demande de tokens MOR à détenir par les utilisateurs. **Résout l'objectif 5.**
* Les étapes 6 et 7 fournissent une confidentialité raisonnable (la requête ne touche jamais le routeur, ni la réponse). Les fournisseurs sont sélectionnés de manière quelque peu aléatoire et ne connaissent jamais l'identité de l'utilisateur autre que l'adresse IP. Une meilleure confidentialité peut être obtenue ultérieurement avec TOR + FHE
* Le solde MOR a été réduit par le contrat de calcul. Le contrat sera solvable tant que MOR payé < MOR gagné par période d'émission.
* Si un utilisateur envoie une RFC qui dépasse le UserMax de l'utilisateur, le routeur rejettera la demande.

---

## Budget de Calcul
Le réseau Morpheus doit déterminer combien de MOR il est prêt à dépenser pour le calcul au cours d'une période donnée (comme chaque jour), il s'agit du Budget de Calcul. Chaque période, jusqu'à cette quantité de MOR peut être dépensée par le contrat de calcul. Ce nombre multiplié par le prix MOR donne un budget en dollars pour l'acquisition du calcul chaque jour.

Question ouverte 1 : Comment devrait-on déterminer le Budget de Calcul ? L'idée la plus simple est de fixer le Budget de Calcul = les émissions dans le Contrat de Calcul. De cette façon, le Contrat de Calcul ne manquerait jamais de tokens. Mais que faire des tokens inutilisés, puisque le maximum ne serait jamais utilisé chaque jour ? Ils pourraient peut-être être attribués de manière pro rata aux détenteurs actuels de tokens MOR. Ou bien, ils pourraient être brûlés. Ou bien, ils pourraient rester inutilisés dans le Contrat de Calcul, à dépenser à l'avenir pour le calcul (mais cela ouvre alors plus de questions de gouvernance).

## Taux d'Accès
Le réseau Morpheus attribue la ressource rare de production de T à travers le concept du "Taux d'Accès". Le Taux d'Accès détermine combien de Ts chaque token MOR peut accéder par jour. L'accès inutilisé n'est pas cumulatif. Le Taux d'Accès est toujours affiché en tant que quantité de Ts par 1 token MOR (par exemple, 1 MOR = 15 000 T). Le Taux d'Accès est déterminé en partie par MaxT, qui quantifie le nombre maximum de Ts que le réseau peut acheter par jour.

**Taux d'Accès** = (1/Offre totale de MOR) * MaxT
**MaxT** = ((Budget de Calcul MOR * Prix MOR) / Prix T) * 1000
**UserMax** = MaxT * Solde MOR de l'utilisateur

### Exemples d'Hypothèses :
**Offre totale de MOR** = 10 000 000 tokens MOR
**Budget de Calcul MOR** = 3 000 tokens MOR par jour
**Prix MOR** = 20 $
**Prix T** = 0,002 $ par 1000 Ts
**Solde Utilisateur** = 5 tokens MOR

### Résultat Exemple :
**MaxT** = 30 000 000 000 Ts (c'est le Ts maximum que le réseau peut acheter/produire chaque jour)
**Taux d'Accès** = 3 000 (ainsi chaque token MOR donne accès à 3 000 Ts par jour)
**UserMax** = 15 000 (un utilisateur avec 5 tokens MOR peut accéder jusqu'à 15 000 Ts par jour)

- Chaque période (chaque jour), Morpheus en tant que réseau a suffisamment de fonds pour acheter un certain nombre de Ts aux fournisseurs de calcul. X est une fonction de la quantité de MOR que le Contrat de Calcul est prêt à dépenser (le "Budget de Calcul") multiplié par le prix MOR actuel divisé par le taux de marché des Ts. 
- Si le Budget de Calcul est de 3 000 MOR et que chacun vaut 20 $, alors le réseau peut acheter (produire) jusqu'à 60 000 $ de Ts ce jour-là. Si le taux actuel pour 1 000 Ts est de 0,002 $, alors le réseau peut acheter jusqu'à 30 milliards de Ts (30 millions x 1000 Ts). 
- Cette production potentielle de 30 milliards de Ts est allouée par solde MOR, de manière pro rata. Supposons qu'il y ait 10 000 000 de MOR en circulation. Un utilisateur avec 500 tokens MOR (0,005 % du total) pourrait librement accéder jusqu'à 1,5 million de Ts ce jour-là. 
- Tant que le Budget de Calcul est inférieur ou égal au niveau d'émission, le Contrat de Calcul ne peut pas être à court de MOR.
- En réalité, la plupart des tokens resteront dans les portefeuilles et les échanges, et seule une fraction sera utilisée pour demander la production de T.

## Notes
* La demande fondamentale de MOR provient des utilisateurs qui souhaitent avoir accès à l'IA générative et à d'autres formes de calcul sur le réseau Morpheus.
 
* Le type de matériel du fournisseur est sans importance pour le réseau, tant qu'il satisfait au test de réussite/échec de l'utilisateur. Tout fournisseur soumissionnant sur plus de demandes qu'il ne peut traiter efficacement sera pénalisé en échouant à ce test.

* Le modèle ci-dessus rémunère de manière cruciale les fournisseurs UNIQUEMENT lorsqu'il y a une demande pour leur calcul. Cela empêche la situation où de grandes portions de MOR sont émises prématurément lorsque le réseau n'en a pas besoin. 

* Les fournisseurs doivent prouver qu'ils ont un LLM donné, en signant le hachage du modèle LLM avec leur clé. Cela ne prouve pas qu'ils l'ont utilisé, mais cela prouve qu'ils l'ont téléchargé et installé, ce qui représente un travail, empêchant ainsi certaines formes de fraude sensible aux sybilles. Si les fournisseurs fournissent des résultats médiocres à l'utilisateur, l'utilisateur peut envoyer [Échec] avec [millisecond

* Les fournisseurs doivent prouver qu'ils ont un LLM donné en signant le hachage du modèle LLM avec leur clé. Cela ne prouve pas qu'ils l'ont utilisé, mais cela prouve qu'ils l'ont téléchargé et installé, ce qui représente du travail, prévenant ainsi certaines formes de fraude sensibles aux sybilles. Si les fournisseurs fournissent des résultats médiocres à l'utilisateur, l'utilisateur peut envoyer [Échec] avec [millisecondes] au routeur, et le fournisseur ne sera pas crédité pour ce calcul. Morpheus n'a pas besoin que toutes les réponses soient parfaites... il a seulement besoin que suffisamment de réponses soient assez bonnes, par rapport aux alternatives concurrentes.

* Les attaques Sybil inondant le réseau avec des RFC sont évitées par l'AccessRate. Le "coût" d'envoi d'une RFC est le coût d'acquisition d'un token MOR divisé par le nombre de RFC soumis en son nom. Le coût n'est donc jamais nul, et pourtant un utilisateur ne ressentira pas de perte à chaque RFC effectuée.

* La réussite/échec est déterminée par l'utilisateur, et elle surveille la qualité dans une certaine mesure. L'utilisateur transmet le résultat de réussite/échec ainsi que [millisecondes] au routeur. En cas d'échec, soit aucune récompense, soit un point de pénalité (à déterminer). Il n'y a aucune incitation à faire échouer faussement un fournisseur (aucune incitation monétaire à le faire). Ce mécanisme empêche les fournisseurs d'envoyer des résultats rapides mais inutiles. À envisager : peut-être aucune récompense en cas d'échec uniquement si le MOR de l'utilisateur > MOR du fournisseur. Sinon, juste un point négatif que le routeur peut utiliser dans sa logique de privatisation.

* Les quatre parties (Utilisateur, Fournisseur, Routeur et Contrat de Calcul) ont toutes une adresse MOR unique comme identité. Tous les messages entre les parties nécessitent des signatures (mais la plupart n'ont pas besoin de transactions blockchain).

* Les fournisseurs doivent avoir un solde non nul pour décourager les attaques Sybil du côté des fournisseurs.

* Si le critère [millisecondes] est plus élevé, le réseau sera généralement plus rapide, mais cela découragera les fournisseurs plus petits.

* Il y a un désincitatif à fournir des résultats lents (pas de revenus après le calcul).

* Un routeur centralisé pour commencer est probablement acceptable (décentraliser éventuellement le routeur (IPFS ? Ou consortium de nœuds PoS ?))
