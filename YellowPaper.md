Skip to content
SmartAgentProtocol
/
SmartAgents

Type / to search

Code
Issues
Pull requests
Actions
Projects
Wiki
Security
Insights
Pane width
Use a value between 10% and 63%

13
Change width
Files
Go to file
t
backend
frontend
talk2web3
ContributorGuidelines.md
Dapps Score.md
Documentation.md
LICENSE
MorpheusWP.md
MorpheusYP.md
OSSTookKit.md
README.md
SDKForAvalancheSmartAgents.md
SDKForBitcoinSmartAgents.md
SDKForCosmosSmartAgents.md
SDKForEthereumSmartAgents.md
SDKForPolygonSmartAgents.md
SmartAgentImprovementProposals(SIPs).md
SmartContractRank.md
Wallet
WeeklyStatus.md
White Paper.md
YellowPaper.md
Documentation • Share feedback
BreadcrumbsSmartAgents
/
MorpheusYP.md
in
main

Edit

Preview
Indent mode

Spaces
Indent size

2
Line wrap mode

Soft wrap
Editing MorpheusYP.md file contents
Selection deleted
1
2
3
4
5
6
7
8
9
10
11
12
13
14
15
16
17
18
19
20
21
22
23
24
25
26
27
28
29
30
31
32
33
34
35
36
37
38
39
40
41
42
43
44
45
46
47
48
49
50
51
52
53
54
55
56
57
58
59
60
61
62
63
64
65
66
67
68
69
70
71
72
73
74
75
76
77
78
79
80
81
82
83
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
![MorpheusSmartContractDiagram4](https://github.com/SmartAgentProtocol/SmartAgents/assets/1563345/e0bb4085-ddb6-4c7e-863e-f28fd2b8c6d6)

### Morpheus MOR Distribution Diagram
![new-buckets](https://github.com/SmartAgentProtocol/SmartAgents/assets/76454555/cd57bae7-2a56-4a55-bf3e-1f810f3fba9c)



### MOR Token Distribution Example of Day 1 and Day 2.
![Untitled spreadsheet - Google Sheets 2023-10-15 13-28-08](https://github.com/MorpheusAIs/Morpheus/assets/76454555/6ff7869d-bbd6-46b5-8673-6a59b75906e1)


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
Use Control + Shift + m to toggle the tab key moving focus. Alternatively, use esc then tab to move to the next interactive element on the page.
No file chosen
Attach files by dragging & dropping, selecting or pasting them.
Editing SmartAgents/MorpheusYP.md at main · SmartAgentProtocol/SmartAgents
