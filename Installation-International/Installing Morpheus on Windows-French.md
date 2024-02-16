## Guide d'installation de Morpheus sur Windows

<img src="/Asset/Installation-Graphics/French/Installation-Guide-French.jpeg" width=50% height=50%>

> [!NOTE]
> Ce guide détaillé vous accompagne pas à pas dans l'installation de Morpheus.

### Étape 1 : Installation de WSL2
Ouvrez une invite de commandes en mode administrateur. \
Exécutez la commande suivante : `wsl --install` \
Une fois l'installation terminée, lancez WSL2 en tapant `wsl` dans l'invite de commandes, puis suivez les étapes de configuration indiquées.

### Étape 2 : Installation d'Ollama
Dans l'interface de WSL2, exécutez la commande suivante pour installer Ollama : `curl https://ollama.ai/install.sh | sh`

### Étape 3 : Installation de Python

Mettez à jour la liste des paquets avec la commande : `sudo apt-get update` \
Installez Python en exécutant : `sudo apt-get install python3`

### Étape 4 : Installation de gdown
Installez gdown à l'aide de pip3 : `pip3 install gdown`.

### Étape 5 : Téléchargement de Morpheus
Téléchargez le paquet Morpheus en exécutant : `gdown https://drive.google.com/uc?id=1PQ3n7LXeJHe_jmkYLDUQ9fWjZQTWbHCB`

### Étape 6 : Vérification de l'intégrité de Morpheus
Vérifiez l'intégrité du téléchargement avec la commande : `sha1sum morpheus_0.0.5_amd64.deb` \
Assurez-vous que le hachage correspond à `b227e7bcb21ec9e8e2b4bf9510a2e1f224953fe5` \
Si le hachage ne correspond pas, interrompez le processus d'installation.

### Étape 7 : Installation de Morpheus
Installez Morpheus avec la commande : `sudo dpkg -i morpheus_0.0.5_amd64.deb` \
Si l'installation échoue initialement en raison de dépendances manquantes, installez les dépendances nécessaires et réessayez.

### Étape 8 : Lancement de Morpheus et Ollama
Ouvrez deux fenêtres WSL2 en tapant `wsl` dans deux fenêtres d'invite de commandes différentes. \
Dans l'une d'elles, lancez Ollama avec la commande : `ollama serve` \
Dans l'autre, exécutez Morpheus avec la commande : `morpheus` une fois que le processus `ollama serve` est actif.