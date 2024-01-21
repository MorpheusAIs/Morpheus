# Morpheus Papel Amarelo

Este artigo descreve os detalhes técnicos do nó completo Morpheus, do Contrato Inteligente Morpheus e das provas relacionadas. Apresentado conforme escrito no whitepaper contribuído pelos desenvolvedores anônimos Morpheus, Trinity & Neo. Link para o whitepaper aqui: https://github.com/SmartAgentProtocol/SmartAgents/blob/main/MorpheusWP.md 

## A versão local 0.0.5 do Morpheus está disponível em::
---------
**Morpheus Versão 0.0.5 para Mac**
- Download from Google Drive: https://drive.google.com/file/d/1x-wR4HWjKqT_g6VRjrWPXu3rVm9ukOc9/view?usp=sharing
- SHA 256 hash for validation: 9092d543023fb95086cf4a7039d42cbcbbdf5283d670c4de6396b3d89e57b064
- Version: Morpheus-0.0.5-x64.dmg

---------
**Morpheus Versão 0.0.5 para Linux Debian**
- Download: https://drive.google.com/file/d/1PQ3n7LXeJHe_jmkYLDUQ9fWjZQTWbHCB/view?usp=sharing
- Instructions: To install, run this command:
sudo dpkg -i /path/to/your/morpheus.deb
NOTE: In the above command, replace "/path/to/your/morpheus.deb" with your path to the morpheus_0.0.5_amd64.deb file.
- SHA Hash para Verifiction:
b227e7bcb21ec9e8e2b4bf9510a2e1f224953fe5
Versão: morpheus_0.0.5_amd64.deb
---------

Primeira interação com Morpheus 22 de outubro de 2023.
![FirstInteractionWithMorpheus20231022](https://github.com/MorpheusAIs/Morpheus/assets/1563345/35509f3a-4346-4f58-bb60-f7881fd10f7e)

## Contratos inteligentes Morpheus
Ações on-chain que precisam ser validadas pelo contrato inteligente Morpheus.

1. Fork do Contrato Inteligente N2 Yield Redeployed no Arbitrum
- A) Bloquear ETH através da Thorchain, doar yield para Coders + Provedores de Computação.
- B) Calcular a proporção de ETH doada.

2. Destruição Permanentemente Comprovável de MOR:
- A) Endereço de queima ou função de queima para tokens MOR.

3. Contrato Modelo ERC20 Para Emissão de MOR
- A) Cunhar tokens MOR diariamente para Capital + Comunidade na proporção do yield ETH doado.
- B) Cunhar tokens MOR diariamente para Coders + Provedores de Computação na proporção de MOR queimado via taxas.

4. Prova de Morpheus - Demonstrar Privacidade, Código Aberto e Segurança
- A) Publicar lista de Agentes auditados e suas pontuações Smart Rank.
- B) Publicar lista de LLMs auditados e suas pontuações Smart Rank.
- C) Publicar lista de Contratos Inteligentes e suas pontuações Smart Rank.
- D) Publicar lista de Prompts e suas pontuações Smart Rank.

5. Fundos de Proteção
- A) Distribuir MOR & ETH em casos de hacks, erros, bugs ou outros ataques que causem perdas.
- B) Conjunto pré-definido de cenários para pagamentos. Políticas para forks / rollbacks em casos extremos.
- C) Desenvolvedores responsáveis por determinar casos de ataques e suas soluções.
- D) Fundos para recompensas por bugs / hackers éticos.
- E) Fundos para proteção contra atores de Estados-nação.

## Diagramas de contrato inteligente Morpheus
Diagramas mais descrições da criação e queima do MOR.
Descrições dos contratos inteligentes necessários.
Diagramas detalhando a distribuição de ETH.

### Morpheus MOR Smart Contract Distribuição de Recompensas
![new-buckets](https://github.com/SmartAgentProtocol/SmartAgents/assets/76454555/cd57bae7-2a56-4a55-bf3e-1f810f3fba9c)

### Exemplo de distribuição de token MOR do Dia 1 e Dia 2.
![Untitled spreadsheet - Google Sheets 2023-10-15 13-28-08](https://github.com/MorpheusAIs/Morpheus/assets/76454555/6ff7869d-bbd6-46b5-8673-6a59b75906e1)

## Exemplo de cálculo de distribuição para endereço 0x123 colaborador ETH

### Primeiro Passo
![Diagram1ofETHDontator](https://github.com/SmartAgentProtocol/SmartAgents/assets/1563345/fead528c-d628-449e-a3a3-2f53904f4a3d)

### Segundo Passo
![ETHGivenDiagram2](https://github.com/MorpheusAIs/Morpheus/assets/1563345/915020e8-d342-48bc-85ee-367de0325680)

### Terceiro Passo
![Diagram3ForETHGiven](https://github.com/MorpheusAIs/Morpheus/assets/1563345/a3f455af-56de-4c6b-9688-5b9e91673e5a)

## Example Distribution Calculation For Address 0x123 Compute Provider

### Primeiro Passo
![MORForCompute](https://github.com/SmartAgentProtocol/SmartAgents/assets/1563345/bef69c69-0420-441f-97f0-7e8195844f57)

### Segundo Passo
![MORForCompute2](https://github.com/SmartAgentProtocol/SmartAgents/assets/1563345/a6f30da5-5441-4f0a-be80-c5798f5920cd)

### Gráfico de pizza de distribuição de token MOR
![mordist](https://github.com/MorpheusAIs/Morpheus/assets/76454555/4157efe7-6abf-404a-87f9-a8dc76cd4799)

## Ferramentas de desenvolvedor Morpheus e pilha de tecnologia.
- Llama2 - LLM de código aberto robusto, executado localmente.
- Ollama - Empacotamento para instalação fácil do Llama2.
- LangChain - Ferramenta de desenvolvedor para conectar o LLM a armazenamentos Vector e APIs.
- LangSmith Editor - Ferramenta de baixo código para construir agentes na LangChain.
- SmartContractRank Algoritmo - Curadoria de Contratos Inteligentes para o usuário com base na intenção.
- AgentRank Algoritmo - Curadoria de agentes especializados para executar ações para o usuário.
- PromptRank Algoritmo - Curadoria de prompts para os usuários com base na intenção/projeção de ação.
- Filecoin - Provisão de Armazenamento e Computação em Nuvem.
- Akash Network - Rede aberta de computação para executar LLMs/agentes.
- Wallets - Shapeshift, Exodus, e outras opções de código aberto.

## Diagramas de nó completo do Morpheus para o agente / LLMs para ações Web3. 
Auditorias de agentes realizadas por programadores gerando uma "Prova de Agente" que as funções declaradas do agente são conforme apresentadas. E, é claro, não contém código malicioso.

Espaço reservado para a descrição do processo de auditoria, quem pode conduzir as auditorias e como certificar seus resultados. Também, incentivos pagos aos auditores.

Prova de Prompt gerada no momento de uma interação do usuário, mostrando que a intenção expressa corresponde à seleção do contrato inteligente e os valores da transação são confirmados com o usuário.

## Diagrama de Usuário e Colaborador do Morpheus
![Morpheus User   Contributor Diagram](https://github.com/MorpheusAIs/Morpheus/assets/1563345/2cff8d70-c116-472f-a431-8a82bfa22f9b)

### O diagrama mostra o fluxo UX do prompt do usuário para a aprovação da ação Web3.
![UX flow for prompted web3 tasks and ticketing](https://github.com/MorpheusAIs/Morpheus/assets/76454555/942b20fb-d67e-4a57-af2c-cd24a89690a5)

### O diagrama mostra a versão de instalação do Morpheus Local.
![MorpheusLocalDiagram](https://github.com/SmartAgentProtocol/SmartAgents/assets/1563345/a0564914-cddb-42e4-b0f4-8c2310db6a66)

### O diagrama mostra a versão de instalação do Morpheus P2P.
![MorpheusP2PDiagram](https://github.com/SmartAgentProtocol/SmartAgents/assets/1563345/a7eeb31f-3d38-4233-a45f-e9b91ad84ba2)

### Diagrama mostra a versão descentralizada do Morpheus.
![MorpheusDecentralized](https://github.com/SmartAgentProtocol/SmartAgents/assets/1563345/1699f2de-cc18-42e8-a05c-32b3307baa20)

## Comunidade
- Smart Agency - Desenvolvedores freelancers construindo casos de uso/agentes para usuários do Morpheus.
- Comunidade Global de Desenvolvedores - Comunidade em crescimento de desenvolvedores, startups e usuários.
- Comunidade recrutando detentores de ETH para doar rendimento a desenvolvedores Morpheus, computação e à comunidade.
- Grupo de Desenvolvimento Distribuído - Desenvolvedores de contratos inteligentes para codificar contratos inteligentes Morpheus.
- Morpheus Dapps - Marketplace para integrações do Morpheus com o Agente Inteligente do usuário.
