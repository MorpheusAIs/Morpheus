# Proposition du Fonds de Protection Morpheus

## Introduction
Dans le livre blanc de Morpheus, 4 % de l'émission totale de MOR sont alloués à la création d'un "Fonds de Protection" et sont délégués aux fournisseurs de code qui agissent comme des oracles lorsque leurs ressources sont nécessaires.

#### Les types d'actions incluent :
- Récompenser la découverte de bugs ou de vulnérabilités pour prévenir les attaques.
- Payer pour des audits avant de déployer de nouveaux contrats intelligents.
- Arrêter les contrats intelligents en cas d'attaque.
- Évaluer les dommages et mettre en place un mécanisme de compensation après une attaque.
- Planifier pour des pertes significatives (scénario de hard fork).

## Cas Prédéfinis pour des Paiements Mineurs
Avant que les contrats intelligents soient lancés sur le réseau Ethereum, les conditions sous lesquelles le Fonds de Protection effectuera des paiements en MOR ou stETH sont définies.

## Types de Paiements :
1. Bugs découverts et divulgués de manière responsable aux développeurs de contrats intelligents de Capital, Calcul, Code, Communauté et du Fonds de Protection.
2. Paiement pour des audits avant de déployer de nouveaux contrats intelligents sur le réseau Morpheus.
3. Pertes des utilisateurs de MOR ou sETH dues à des bugs dans les contrats intelligents de Morpheus.
4. Paiements dans les cas où les participants n'ont pas reçu l'émission de MOR en raison de défaillances des contrats intelligents de Morpheus.

Les paiements du fonds de protection devraient être proportionnels à l'erreur, à la perte ou à l'erreur d'émission.

## Conditions pour Arrêter les Contrats Intelligents
Avant de déterminer les paiements pour la compensation des dommages, les conditions qui déclenchent l'arrêt des contrats intelligents en cas d'attaque en cours doivent être établies.

## Évaluation des Dommages et Mécanisme de Paiement
Les fournisseurs de code participeront à l'évaluation des dommages nécessaire pour la compensation. D'abord, l'incident sera détaillé et publié dans le dépôt GitHub du contrat intelligent affecté, incluant une liste des adresses affectées et les montants de MOR et/ou stETH.

Si la majorité des fournisseurs de code (mesurée par le poids de leurs tokens MOR détenus), participant à l'évaluation des dommages (pas plus de 7 jours), confirme le rapport comme VRAI, un paiement sera initié.

Une fois le paiement initié, le logiciel enverra un message aux développeurs demandant l'autorisation du paiement aux adresses affectées dans les montants spécifiés.

## Plan en Cas de Dommages Substantiels
Une perte substantielle est définie comme un événement où les pertes de MOR dépassent les ressources totales du Fonds de Protection. Dans ce cas, au lieu de paiements en MOR, les fournisseurs de code doivent déployer de nouveaux contrats intelligents et ajuster manuellement les soldes de MOR affectés. Cela déclenchera effectivement un hard fork du code/solde de MOR, et tous les fournisseurs, détenteurs de tokens et autres fournisseurs d'infrastructure devront mettre à jour leur code vers les nouveaux contrats intelligents.

En cas de perte de stETH due à des dommages significatifs, le Fonds de Protection paiera le montant maximal possible sur une base proportionnelle en tenant compte des dommages de chaque personne.

## Conclusion
Les bugs et les erreurs dans les logiciels sont une réalité, marquée dans l'histoire depuis les deux hard forks involontaires dans Bitcoin jusqu'à The DAO dans les premiers jours d'Ethereum.

Ainsi, planifier pour divers scénarios et cas et comment y faire face à l'avance est une approche judicieuse pour la protection et l'atténuation des risques. Heureusement, grâce aux ressources pré-allouées dans le Fonds de Protection, ainsi qu'à une partie du fonds qui génère des revenus à travers des récompenses de commission pour la fourniture de liquidité dans AMM, les ressources allouées pour la protection des utilisateurs augmenteront au fil du temps.