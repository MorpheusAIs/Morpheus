# Morpheus Yellow Paper

This paper describes the technical details of the Morpheus full node, Morpheus Smart Contract, and related proofs.
Presented as written in the whitepaper contributed by the anonymous developers Morpheus, Trinity & Neo. Link to the whitepaper here: https://github.com/SmartAgentProtocol/SmartAgents/blob/main/MorpheusWP.md 

## Local Version 0.0.5 of Morpheus is live at:
---------
**Morpheus Version 0.0.5 for Mac**
- Download from Google Drive: https://drive.google.com/file/d/1x-wR4HWjKqT_g6VRjrWPXu3rVm9ukOc9/view?usp=sharing
- SHA 256 hash for validation: 9092d543023fb95086cf4a7039d42cbcbbdf5283d670c4de6396b3d89e57b064
- Version: Morpheus-0.0.5-x64.dmg

---------
**Morpheus Version 0.0.5 for Linux Debian**
- Downalod: https://drive.google.com/file/d/1PQ3n7LXeJHe_jmkYLDUQ9fWjZQTWbHCB/view?usp=sharing
- Instructions: To install, run this command:
sudo dpkg -i /path/to/your/morpheus.deb
NOTE: In the above command, replace "/path/to/your/morpheus.deb" with your path to the morpheus_0.0.5_amd64.deb file.
- SHA Hash for Verifiction:
b227e7bcb21ec9e8e2b4bf9510a2e1f224953fe5
Version: morpheus_0.0.5_amd64.deb
---------

First interaction with Morpheus October 22nd 2023.
![FirstInteractionWithMorpheus20231022](https://github.com/MorpheusAIs/Morpheus/assets/1563345/35509f3a-4346-4f58-bb60-f7881fd10f7e)

## Morpheus Smart Contracts
On chain actions that need to be validated by the Morpheus smart contract.

1. Fork of N2 Yield Smart Contract Redeployed On Arbitrum
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
![new-buckets](https://github.com/SmartAgentProtocol/SmartAgents/assets/76454555/cd57bae7-2a56-4a55-bf3e-1f810f3fba9c)

### MOR Token Distribution Example of Day 1 and Day 2.
![Untitled spreadsheet - Google Sheets 2023-10-15 13-28-08](https://github.com/MorpheusAIs/Morpheus/assets/76454555/6ff7869d-bbd6-46b5-8673-6a59b75906e1)

## Example Distribution Calculation For Address 0x123 ETH Contributor

### Step One
![Diagram1ofETHDontator](https://github.com/SmartAgentProtocol/SmartAgents/assets/1563345/fead528c-d628-449e-a3a3-2f53904f4a3d)

### Step Two
![ETHGivenDiagram2](https://github.com/MorpheusAIs/Morpheus/assets/1563345/915020e8-d342-48bc-85ee-367de0325680)

### Step Three
![Diagram3ForETHGiven](https://github.com/MorpheusAIs/Morpheus/assets/1563345/a3f455af-56de-4c6b-9688-5b9e91673e5a)

## Example Distribution Calculation For Address 0x123 Compute Provider

### Step One
![MORForCompute](https://github.com/SmartAgentProtocol/SmartAgents/assets/1563345/bef69c69-0420-441f-97f0-7e8195844f57)

### Step Two
![MORForCompute2](https://github.com/SmartAgentProtocol/SmartAgents/assets/1563345/a6f30da5-5441-4f0a-be80-c5798f5920cd)

### MOR Token Distribution Pie Chart
![mordist](https://github.com/MorpheusAIs/Morpheus/assets/76454555/4157efe7-6abf-404a-87f9-a8dc76cd4799)

## Morpheus Developer Tools and Tech Stack.
- Llama2 - Robust open source LLM run locally.
- Ollama - Packaging for easy install of Llama2.
- LangChain - Developer tool for connecting LLM to Vector stores and APIs.
- LangSmith Editor - Low code for building agents on LangChain.
- SmartContractRank Algorithm - Curating Smart Contracts For The User Based On Intent
- AgentRank Algorithm - Curating specialized agents for executing actions for user.
- PromptRank Algorithm - Curating prompts for the users based on projected intent / action.
- Filecoin - Storage & Cloud Compute Provision
- Acash - Open compute network for running LLMs / agents.
- Wallets - Shapeshift, Exodus, other open source options.

## Morpheus Full Node Diagrams for the Agent / LLMs For Web3 Actions. 
Audits of Agents preformed by Coders generating an "Agent Proof" that the stated functions of the Agent are as presented. And of course contains no malicous code.

Placeholder for description of audit process, who can conduct audits and how to certify their outcomes. Also incentives paid to auditors.

Prompt Proof generated at the time of a user interaction showing the intent expressed, matches the smart contract selection and transaction values are confirmed with the user. 

## Morpheus User & Contributor Diagram
![Morpheus User   Contributor Diagram](https://github.com/MorpheusAIs/Morpheus/assets/1563345/2cff8d70-c116-472f-a431-8a82bfa22f9b)

### Diagram shows the UX flow from user prompt to approval of Web3 action.
![UX flow for prompted web3 tasks and ticketing](https://github.com/MorpheusAIs/Morpheus/assets/76454555/942b20fb-d67e-4a57-af2c-cd24a89690a5)

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
