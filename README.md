![Wide but short logo for Morpheus](https://github.com/MorpheusAIs/Morpheus/assets/1563345/be0c5a0f-0766-4e31-8e4a-ab18cd211961)

# Morpheus
## A Network For Powering Smart Agents
### Authored by Morpheus, Trinity, & Neo
Published - September 2nd 2023

## Introduction 
The Smart Agent concept of connecting LLMs and AI Agents to wallets, Dapps, & smart contracts promises to open the world of Web3 to everyone. Chatting in normal language with your Smart Agent and having it understand the question or task, is similar to how Google's search engine opened the early internet up to the general public.

To make Smart Agents accessible to everyone and increase decentralization we propose a network & fairly launched token for incentivizing all four of the key contributors to their operation. Namely, the community of users, coders contributing to the Morpheus software / agents, capital providers funding development / operations and those supplying computation, storage and bandwidth. It has been well shown by the history of Bitcoin and Ethereum that free & open competition for scarce digital tokens can provide scalable infrastructure for a public blockchain over long periods of time.

## Morpheus 0.0.6 Version Release Notes: Mac + Linux + Windows Installs
This is the first version of Morpheus that brings together an open source LLM (defaults to Llama2) + connecting a user's Metamask wallet + executing on chain transactions via a ETH focused Smart Agent.

After connecting Morpheus to your Meta Mask, you can test it by taking basic actions such as:  
"What is my balance?"  
"What is my address?"  
"Send ETH to Ethereum Address"

Morpheus doesn't have a connection to a block explorer or price oracles yet, so it can't answer general transactions questions. It just answers the above examples based on info from the Meta Mask wallet you connect.

> [!WARNING]
> Review all transactions before approving them. The LLM makes mistakes, you have human wisdom.  
Seriously, double check all actions in the Metamask interface before sending money.  
This is an experimental release and the ETH Smart Agent may try and send your money into a black hole.  
Gas costs are high on Ethereum. Consider testing out 0.0.6 using the Sepolia testnet or Arbitrum.

---------
**Linux: There are now two linux builds (RPM and DEB)**
- Download RPM: https://storage.googleapis.com/get-morpheus/Morpheus-0.0.6-rpm.zip
- SHA 256 hash for validation: fa811b823f80c6afc537b608edff99feb1bc68451c0bba9d22f7abedf5e66c0a
- Version: Morpheus-0.0.6-rpm


- Download DEB: https://storage.googleapis.com/get-morpheus/Morpheus-0.0.6-deb.zip
- SHA 256 hash for validation: 04044442119e4ab296ffa6c5d3ae297b178197b4855e42dcbd8a4634e2d8d8ad
- Version: Morpheus-0.0.6-deb

---------
**Mac OS: For Intel & Apple M Series Silicon Chips**
- Download: https://storage.googleapis.com/get-morpheus/morpheus-0.0.6-x64.dmg
- SHA 256 hash for validation: 004948f4dcc3702ea41f6050d0d3a86db2198e1ebfd599aca20a9a6cdefcd8e3  
- Version: morpheus-0.0.6-x64.dmg

- Download: https://storage.googleapis.com/get-morpheus/morpheus-0.0.6-arm64.dmg
- SHA 256 hash for validation: 2179c229c8f1acca5b8c3e9a813d75f5a42b971c8aff555ad30f0a8ada9dbb1c  
- Version: morpheus-0.0.6-arm64.dmg

---------
**Windows:**
- Download: https://storage.googleapis.com/get-morpheus/morpheus-0.0.6_x86_64_win.zip
- SHA 256 hash for validation: 37cb37a7a8443da87541fb1896d9f23112fecff650e3cfc053d51938a1e326a3
- Version: morpheus-0.0.6_x86_64_win

---------
## Key documents list:
- [White Paper](https://github.com/MorpheusAIs/Docs/blob/main/!KEYDOCS%20README%20FIRST!/WhitePaper.md)
- [Yellow Paper](https://github.com/MorpheusAIs/Docs/blob/main/!KEYDOCS%20README%20FIRST!/YellowPaper.md)
- [Yellowstone Compute Model](https://github.com/MorpheusAIs/Docs/blob/main/!KEYDOCS%20README%20FIRST!/Yellowstone%20Compute%20Model.md)
- [Techno Capital Machine](https://github.com/MorpheusAIs/Docs/blob/main/!KEYDOCS%20README%20FIRST!/TechnoCapitalMachineTCM.md)
- [Code Contributions Best Practices](https://github.com/MorpheusAIs/Docs/blob/main/!KEYDOCS%20README%20FIRST!/Code%20Contributor%20Best%20Practices.md)
- [Coder Guide](https://github.com/MorpheusAIs/Docs/blob/main/!KEYDOCS%20README%20FIRST!/Coder%20Guide.md)
- [Fair Launch](https://github.com/MorpheusAIs/Docs/blob/main/!KEYDOCS%20README%20FIRST!/Fair%20Launch.md)
- [Multisig](https://github.com/MorpheusAIs/Docs/blob/main/!KEYDOCS%20README%20FIRST!/Multisig.md)
- [Protection Fund Details](https://github.com/MorpheusAIs/Docs/blob/main/!KEYDOCS%20README%20FIRST!/Protection%20Fund%20Details.md)
- [TestingPlan](https://github.com/MorpheusAIs/Docs/blob/main/!KEYDOCS%20README%20FIRST!/TestingPlan.md)
- [Mastery of Tokenomics](https://github.com/MorpheusAIs/Docs/blob/main/!KEYDOCS%20README%20FIRST!/Mastery%20of%20Tokenomics.md)
- [Morpheus Meetup Guide](https://github.com/MorpheusAIs/Docs/blob/main/!KEYDOCS%20README%20FIRST!/Morpheus%20Meetup%20Guide.md)
- [Phased AMM Deployment and Fair Price Discovery](https://github.com/MorpheusAIs/Docs/blob/main/!KEYDOCS%20README%20FIRST!/Phased%20AMM%20Deployment%20and%20Fair%20Price%20Discovery.md)
- [Morpheus Asset Integration Framework](https://github.com/MorpheusAIs/Docs/blob/main/!KEYDOCS%20README%20FIRST!/The%20Morpheus%20Asset%20Integration%20Framework.md)
- [Morpheus Lumerin Compute Model](https://github.com/MorpheusAIs/Docs/blob/main/!KEYDOCS%20README%20FIRST!/Morpheus%20Lumerin%20Model.md)
- [Bug Bounty Program](https://github.com/MorpheusAIs/Docs/blob/main/!KEYDOCS%20README%20FIRST!/Bug%20Bounty%20Program.md)
- [FAQs](https://github.com/MorpheusAIs/Docs/blob/main/!KEYDOCS%20README%20FIRST!/FAQs.md)

## Code:
-	Morpheus Local Install: https://github.com/MorpheusAIs/Node
-	Smart Contracts: https://github.com/MorpheusAIs/SmartContracts
-	Frontend Dashboard: https://github.com/MorpheusAIs/DashBoard
- Technical Documentation https://github.com/MorpheusAIs/Docs
- Morpheus Request for Comments: https://github.com/MorpheusAIs/MRC
- Morpheus Lumerin (Compute) Node: https://github.com/MorpheusAIs/Morpheus-Lumerin-Node

## Morpheus Network Diagram
![DiagramupdatedwithstETH](https://github.com/MorpheusAIs/Morpheus/assets/1563345/31711e49-0b57-4b41-b231-ee673dbf6664)
