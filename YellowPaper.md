# Morpheus Yellow Paper

This paper describes the technical details of the Morpheus full node, Morpheus Smart Contract, and related proofs.
Presented as written in the whitepaper contributed by the anonymous developers Morpheus, Trinity & Neo. Link to the whitepaper here: https://github.com/SmartAgentProtocol/SmartAgents/blob/main/MorpheusWP.md

## Morpheus Smart Contracts & Oracle Descriptions
On chain actions that need to be validated by the Morpheus smart contract.

1. Fork of N2 Yield Smart Contract Redeployed On OP Stack
- A) Lock ETH through Thorchain, donate yield to Coders + Compute Providers.
- B) Calculate pro-rata of ETH donated 

2. Forever Provable Destruction of MOR:
- A) Burn address or burn function for MOR tokens.

3. ERC20 Template Contract For Issuing MOR
- A) Mint MOR tokens daily to Capital + Community pro-rata to ETH yield donated.
- B) Mint MOR tokens daily to Coders + Compute providers pro-rata to MOR burned via fees.

4. Proof of Morpheus - Demonstrate Privacy, Open Source, & Safety
- A) Publish list of audited Agents and their Smart Rank scores.
- B) Publish list of audited LLMs and their Smart Rank scores.
- C) Publish list of Smart Contracts & their Smart Rank scores.
- D) Publish list of Prompts & their Smart Rank scores.

5. Protection Funds
- A) Distribute MOR & ETH in cases of hacks, errors, bugs, or other attacks that cause losses. 
- B) Pre-defined set of scenarios for pay out. Policies for forking / roll backs in extreme cases.
- C) Developers in charge of determining cases of attacks & their remedies. 
- D) Funds for bug bounties / white hat hackers.
- E) Funds for protection from Nation State actors.

## Morpheus Smart Contract Diagrams

Diagrams plus descriptions of the MOR minting & burning.
Descriptions of the smart contracts required.
Diagrams detailing the distribution of ETH. 

### Morpheus MOR Smart Contract Rewards Distribution
![MorpheusRewardsDiagramoffourcs](https://github.com/MorpheusAIs/Morpheus/assets/1563345/3f32f3e7-7440-4c87-bf25-2d49524cc5ae)

### Morpheus MOR Distribution Diagram
![MOR Incentive Structure (buckets)](https://github.com/MorpheusAIs/Morpheus/assets/76454555/c6d17842-ced3-4598-b148-ba752523959f)


### MOR Token Distribution Example of Day 1 and Day 2.
![MORRateDistribution](https://github.com/SmartAgentProtocol/SmartAgents/assets/1563345/d1a81b92-db02-49ed-bd55-80d36b6b43b9)

## Example Distribution Calculation For Address 0x123 ETH Donator

### Step One
![Diagram1ofETHDontator](https://github.com/SmartAgentProtocol/SmartAgents/assets/1563345/fead528c-d628-449e-a3a3-2f53904f4a3d)

### Step Two
![Diagram2ETHPercentage](https://github.com/SmartAgentProtocol/SmartAgents/assets/1563345/50580612-686f-4eaa-bd96-84efe0074838)

### Step Three
![MORForCapitalDiagram](https://github.com/SmartAgentProtocol/SmartAgents/assets/1563345/32dfe643-cee2-411a-b36a-1daa7be668a4)

## Example Distribution Calculation For Address 0x123 Compute Provider

### Step One
![MORForCompute](https://github.com/SmartAgentProtocol/SmartAgents/assets/1563345/bef69c69-0420-441f-97f0-7e8195844f57)

### Step Two
![MORForCompute2](https://github.com/SmartAgentProtocol/SmartAgents/assets/1563345/a6f30da5-5441-4f0a-be80-c5798f5920cd)

### MOR Token Distribution Pie Chart
![MTN Distribution Pie Chart](https://github.com/SmartAgentProtocol/SmartAgents/assets/1563345/cb9d2e6f-2f1f-44ed-8e34-06babab2fa13)

## Morpheus Developer Tools and Tech Stack.
- Llama2 - Robust open source LLM run locally.
- Open Llama - Packaging for easy install of Llama2.
- LangChain - Developer tool for connecting LLM to Vector stores and APIs.
- LangSmith Editor - Low code for building agents on LangChain.
- SmartContractRank Algorithm - Curating Smart Contracts For The User Based On Intent
- AgentRank Algorithm - Curating specialized agents for executing actions for user.
- PromptRank Algorithm - Curating prompts for the users based on projected intent / action.
- Filecoin - Storage & Cloud Compute Provision
- Acash - Open compute network for running LLMs / agents.
- Wallets - Shapeshift, Exodus, other open source options.

## Morpheus Full Node Diagrams for the Agent / LLMs For Web3 Actions. 

### Diagram shows the UX flow from user prompt to approval of Web3 action.
![Morpheus UX Flow For Web3 Task](https://github.com/SmartAgentProtocol/SmartAgents/assets/1563345/f91b3ce5-9ad9-43c1-86ef-289285220952)

### Diagram shows the Morpheus Local install version.
![MorpheusLocalDiagram](https://github.com/SmartAgentProtocol/SmartAgents/assets/1563345/a0564914-cddb-42e4-b0f4-8c2310db6a66)

### Diagram shows the Morpheus P2P install version.
![MorpheusP2PDiagram](https://github.com/SmartAgentProtocol/SmartAgents/assets/1563345/a7eeb31f-3d38-4233-a45f-e9b91ad84ba2)

### Diagram shows the Morpheus Decentralized version.
![MorpheusDecentralized](https://github.com/SmartAgentProtocol/SmartAgents/assets/1563345/1699f2de-cc18-42e8-a05c-32b3307baa20)

## Community
- Smart Agency - Freelance developers building use cases / agents for Morpheus users.
- Global Developer Community - Growing developer, startup & user community.
- Community recruiting ETH holders to donate yield to Morpheus developers, compute & community.
- Distributed Development Group - Smart Contract Developers to code Morpheus Smart Contract.
- Morpheus Dapps - Marketplace for Morpheus integrations with the user's Smart Agent.
