# Morpheus Yellow Paper

Ce document décrit les détails techniques du nœud complet Morpheus, du contrat intelligent Morpheus, et des preuves associées.
Présenté tel que rédigé dans le livre blanc contribué par les développeurs anonymes Morpheus, Trinity et Neo. Lien vers le livre blanc ici : https://github.com/SmartAgentProtocol/SmartAgents/blob/main/MorpheusWP.md 

## Version locale 0.0.5 de Morpheus en direct :
---------
**Version Morpheus 0.0.5 pour Mac**
- Téléchargement depuis Google Drive : https://drive.google.com/file/d/1x-wR4HWjKqT_g6VRjrWPXu3rVm9ukOc9/view?usp=sharing
- Hachage SHA 256 pour la validation : 9092d543023fb95086cf4a7039d42cbcbbdf5283d670c4de6396b3d89e57b064
- Version : Morpheus-0.0.5-x64.dmg

---------
**Version Morpheus 0.0.5 pour Linux Debian**
- Téléchargement : https://drive.google.com/file/d/1PQ3n7LXeJHe_jmkYLDUQ9fWjZQTWbHCB/view?usp=sharing
- Instructions : Pour installer, exécutez cette commande :
sudo dpkg -i /chemin/vers/votre/morpheus.deb
NOTE : Dans la commande ci-dessus, remplacez "/chemin/vers/votre/morpheus.deb" par votre chemin vers le fichier morpheus_0.0.5_amd64.deb.
- Hachage SHA pour la vérification :
b227e7bcb21ec9e8e2b4bf9510a2e1f224953fe5
Version : morpheus_0.0.5_amd64.deb
---------

Première interaction avec Morpheus le 22 octobre 2023.
![PremièreInteractionAvecMorpheus20231022](https://github.com/MorpheusAIs/Morpheus/assets/1563345/35509f3a-4346-4f58-bb60-f7881fd10f7e)

## Contrats intelligents Morpheus
Actions on-chain devant être validées par le contrat intelligent Morpheus.

1. Fork du contrat intelligent N2 Yield redéployé sur Arbitrum
- A) Verrouiller l'ETH via Thorchain, faire un don de rendement aux codeurs + fournisseurs de calcul.
- B) Calculer la part pro rata de l'ETH donné 

2. Destruction prouvable à jamais de MOR :
- A) Adresse de destruction ou fonction de destruction pour les jetons MOR.

3. Contrat modèle ERC20 pour l'émission de MOR
- A) Émettre des jetons MOR quotidiennement à Capital + Communauté pro rata de l'ETH donné en rendement.
- B) Émettre des jetons MOR quotidiennement aux codeurs + fournisseurs de calcul pro rata du MOR brûlé via les frais.

4. Preuve de Morpheus - Démontrer la confidentialité, l'open source et la sécurité
- A) Publier une liste d'agents audités et de leurs scores Smart Rank.
- B) Publier une liste de LLM audités et de leurs scores Smart Rank.
- C) Publier une liste de contrats intelligents et de leurs scores Smart Rank.
- D) Publier une liste de prompts et de leurs scores Smart Rank.

5. Fonds de protection
- A) Distribuer MOR & ETH en cas de piratages, erreurs, bugs ou autres attaques causant des pertes. 
- B) Ensemble prédéfini de scénarios pour le paiement. Politiques pour les forks / rollbacks dans des cas extrêmes.
- C) Les développeurs sont chargés de déterminer les cas d'attaques et leurs remèdes. 
- D) Fonds pour les primes de bugs / hackers white hat.
- E) Fonds pour se protéger des acteurs de l'État-nation.

## Diagrammes des contrats intelligents Morpheus

Diagrammes et descriptions de la création (minting) et de la destruction (burning) des MOR.
Descriptions des contrats intelligents requis.
Diagrammes détaillant la distribution de l'ETH.

### Distribution des récompenses du contrat intelligent Morpheus MOR
![new-buckets](https://github.com/SmartAgentProtocol/SmartAgents/assets/76454555/cd57bae7-2a56-4a55-bf3e-1f810f3fba9c)

### Exemple de distribution des jetons MOR du jour 1 et jour 2.
![Untitled spreadsheet - Google Sheets 2023-10-15 13-28-08](https://github.com/MorpheusAIs/Morpheus/assets/76454555/6ff7869d-bbd6-46b5-8673-6a59b75906e1)

## Exemple de calcul de distribution pour l'adresse 0x123, contributeur ETH

### Étape un
![Diagramme1pourDontateurETH](https://github.com/SmartAgentProtocol/SmartAgents/assets/1563345/fead528c-d628-449e-a3a3-2f53904f4a3d)

### Étape deux
![Diagramme2pourETHDonné](https://github.com/MorpheusAIs/Morpheus/assets/1563345/915020e8-d342-48bc-85ee-367de0325680)

### Étape trois
![Diagramme3pourETHDonné](https://github.com/MorpheusAIs/Morpheus/assets/1563345/a3f455af-56de-4c6b-9688-5b9e91673e5a)

## Exemple de calcul de distribution pour l'adresse 0x123, fournisseur de calcul

### Étape un
![MORPourCalcul](https://github.com/SmartAgentProtocol/SmartAgents/assets/1563345/bef69c69-0420-441f-97f0-7e8195844f57)

### Étape deux
![MORPourCalcul2](https://github.com/SmartAgentProtocol/SmartAgents/assets/1563345/a6f30da5-5441-4f0a-be80-c5798f5920cd)

### Diagramme circulaire de distribution des jetons MOR
![mordist](https://github.com/MorpheusAIs/Morpheus/assets/76454555/4157efe7-6abf-404a-87f9-a8dc76cd4799)

## Outils de développement Morpheus et pile technologique.
- Llama2 - Exécution locale robuste de LLM en open source.
- Ollama - Emballage pour une installation facile de Llama2.
- LangChain - Outil de développement pour connecter LLM aux magasins de vecteurs et aux API.
- LangSmith Editor - Low code pour construire des agents sur LangChain.
- Algorithme SmartContractRank - Curateur de contrats intelligents basé sur l'intention de l'utilisateur.
- Algorithme AgentRank - Curateur d'agents spécialisés pour exécuter des actions pour l'utilisateur.
- Algorithme PromptRank - Curateur de prompts pour les utilisateurs basé sur l'intention / action projetée.
- Filecoin - Stockage et provision de calcul en nuage
- Akash Network - Réseau de calcul ouvert pour l'exécution de LLM / agents.
- Portefeuilles - Shapeshift, Exodus, autres options open source.

## Diagrammes du nœud complet Morpheus pour les actions Web3 des agents / LLMs.
Audits des agents effectués par des codeurs générant une "Preuve d'agent" que les fonctions déclarées de l'agent sont telles qu'elles sont présentées. Et bien sûr, ne contient aucun code malveillant.

Espace réservé pour la description du processus d'audit, qui peut effectuer des audits et comment certifier leurs résultats. Également des incitations payées aux auditeurs.

Preuve de prompt générée au moment de l'interaction d'un utilisateur montrant l'intention exprimée, correspond aux contrats intelligents sélectionnés, et les valeurs de transaction sont confirmées avec l'utilisateur.

## Diagramme de l'utilisateur et du contributeur Morpheus
![Diagramme de l'utilisateur   contributeur Morpheus](https://github.com/MorpheusAIs/Morpheus/assets/1563345/2cff8d70-c116-472f-a431-8a82bfa22f9b)

### Le diagramme montre le flux UX de la demande de l'utilisateur à l'approbation de l'action Web3.
![Flux UX pour les tâches Web3 incitées et les tickets](https://github.com/MorpheusAIs/Morpheus/assets/76454555/942b20fb-d67e-4a57-af2c-cd24a89690a5)

### Le diagramme montre la version d'installation locale de Morpheus.
![Diagramme d'installation locale de Morpheus](https://github.com/SmartAgentProtocol/SmartAgents/assets/1563345/a0564914-cddb-42e4-b0f4-8c2310db6a66)

### Le diagramme montre la version d'installation P2P de Morpheus.
![Diagramme d'installation P2P de Morpheus](https://github.com/SmartAgentProtocol/SmartAgents/assets/1563345/a7eeb31f-3d38-4233-a45f-e9b91ad84ba2)

### Le diagramme montre la version décentralisée de Morpheus.
![Décentralisé de Morpheus](https://github.com/SmartAgentProtocol/SmartAgents/assets/1563345/1699f2de-cc18-42e8-a05c-32b3307baa20)

## Communauté
- Smart Agency - Développeurs indépendants construisant des cas d'utilisation / agents pour les utilisateurs de Morpheus.
- Communauté mondiale de développeurs - Communauté croissante de développeurs, de startups et d'utilisateurs.
- Recrutement de la communauté - ETH encourage les détenteurs à faire un don de rendement aux développeurs, calcul et communauté de Morpheus.
- Groupe de développement distribué - Développeurs de contrats intelligents pour coder le contrat intelligent Morpheus.
- Morpheus Dapps - Place de marché pour les intégrations Morpheus avec l'agent intelligent de l'utilisateur.
