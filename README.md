<img src="https://github.com/antonbosss/Docs/blob/main/Graphics/MOR gradient logo.png" width=100% height=100%>

# Morpheus
## A Network For Powering Smart Agents
### Authored by Morpheus, Trinity, & Neo
Published - September 2nd 2023

---
## Introduction 
The Smart Agent concept of connecting LLMs and AI Agents to wallets, Dapps, & smart contracts promises to open the world of Web3 to everyone. Chatting in normal language with your Smart Agent and having it understand the question or task, is similar to how Google's search engine opened the early internet up to the general public.

To make Smart Agents accessible to everyone and increase decentralization we propose a network & fairly launched token for incentivizing all four of the key contributors to their operation. Namely, the community of users, coders contributing to the Morpheus software / agents, capital providers funding development / operations and those supplying computation, storage and bandwidth. It has been well shown by the history of Bitcoin and Ethereum that free & open competition for scarce digital tokens can provide scalable infrastructure for a public blockchain over long periods of time.

---
## Morpheus Local Smart Agent Install v.0.0.8

## Features
**Current:**
- Fetch price, market cap, and TVL of coins and tokens supported on CoinGecko.
- Web interface (macOS only).
- Wallet integrations for your existing wallets in-browser (macOS only):
   - MetaMask
   - Rainbow
   - Coinbase Wallet
   - WalletConnect
- Web3 swap agent (macOS only).

**Pending:**
- Web interface (Windows)
- Wallet integrations for your existing wallets in-browser (Windows)
- Web3 swap agents (Windows)
- Chat with local files agent (general purpose)

## Example queries

After connecting Morpheus with your web3 wallet, you can test the **Data Smart Agent** with prompts such as:  

- What is my balance?
  
- What is my address?
  
- Send ETH to [Ethereum Address]
  
- What is the price of Ethereum / Price of ETH (or other token listed on Coingecko)
  
- What is the market cap of DOGE / MC of DOGE (or other token listed on Coingecko)
  
- What is the fully diluted valuation of Solana / FDV SOL (or other token listed on Coingecko)
  
- What is the total value locked in Uniswap / TVL of Uniswap (or other token listed on Coingecko)

<img src="/Graphics/Docs%20Graphics/English/README/Data%20agent.png" width=50% height=50%>


For the **Swap Smart Agent**, a typical flow looks like this:

- A user requests a swap, e.g "I want to swap ETH for WBTC".

- The agent requests any missing information, e.g. in this case the amount is missing.

- Once all the information has been collected, the agent looks up the assets on the current chain, retrieves contract addresses and generates a quote if available.

- The quote is shown to the user, who may either proceed or cancel.

- If the user accepts the quote, the swap may proceed. The back-end will generate transactions which will be sent to the front-end to be signed by the user's wallet.

- If the allowance for the token being sold is too low, an approval transaction will be generated first.

<img src="/Graphics/Docs%20Graphics/English/README/agent_clarify3.png" width=80% height=80%>
<img src="/Graphics/Docs%20Graphics/English/README/wallet_integration1.png" width=90% height=90%>
<img src="/Graphics/Docs%20Graphics/English/README/successful_swap2.png" width=90% height=90%>



> [!WARNING]
> Review all transactions before approving them. The LLM makes mistakes, you have human wisdom.  
>
> Seriously, double check all actions in the Metamask interface before sending money. 
> 
> This is an experimental release and the ETH Smart Agent may try and send your money into a black hole.  
>
> Gas costs are high on Ethereum. Consider testing out 0.0.8 using the Sepolia testnet or Arbitrum.


---
## Installs
### Mac OS M1/2/3 etc. (arm64)
>[!Note]
> minimum 16GB RAM

1. Download and install [Docker Desktop](https://www.docker.com/products/docker-desktop/).
   
2. Follow default settings, can skip surveys, then leave docker desktop running. You can minimize it.
   
3. Download [Moragents.zip](https://drive.proton.me/urls/X35VBE3GWW#mtrqT6rAzZbi).
   
4. Open ZIP, and copy MORagents.app to your Applications folder.  
   > SHA256 96c2510e4f7a752c613b322be0a107958ee34814415e3e7b950b426298379a7a MORagents.zip
   
5. Open **MORagents** app. Give it a few minutes the first time and then it should open your browser.  
   If there's an issue, try opening the MORagents app again.

---
### macOS Intel (x86_64)
*coming soon*

---
### Windows (x86_64)
>[!Note]
> minimum 16GB RAM
> 
> Windows version will be updated in the coming days to 0.0.8 (swap agent and price fetching).
>
> Currently, the following is Windows MORagents 0.0.7 (price fetching only)

1. Download [MOR Agent Installer](https://drive.proton.me/urls/CN7HB67ZYM#OcQMLZO8oxC1)
    > SHA256 ae10e62852c2a26608c9d65a719c52e06f33a1c79ecc3ddaf82503910c41ef7c  MOR Agent Installer.zip
    
2. Go to downloaded **MOR Agent Installer(.zip)** file and click to **"Extract All"**.
   
3. Open Extracted Folder **MOR Agent Installer**.
   
4. Click and Run **MOR Agent Setup**.  
   This will auto-install Docker Desktop dependency.

5. Open **MOR Agent** from Desktop.
   
6. Accept Docker's EULA. Surveys are optional, can skip.
    
7. Wait for Docker engine to start...
    
8. Open **MOR Agent** App from Desktop.  
   First time install requires some extra time to load agent's image.

---------
### Linux
*coming soon*

---------
### Build it Yourself
1. [MacOS](https://github.com/MorpheusAIs/Docs/blob/main/Guides/README_MACOS_DEV_BUILD.md)
2. [Windows](https://github.com/MorpheusAIs/Docs/blob/main/Guides/README_WINDOWS_DEV_BUILD.md)

### Troubleshooting
If the app shows connections errors to agent fetcher. Please ensure Docker Desktop is running, then close and reopen **MOR Agent** from desktop.

---------
## Key documents list:
- [Morpheus Fundamentals](https://github.com/MorpheusAIs/Docs/tree/main/!KEYDOCS%20README%20FIRST!/Morpheus%20Fundamentals)
- [Capital Providers](https://github.com/MorpheusAIs/Docs/tree/main/!KEYDOCS%20README%20FIRST!/Capital%20Providers)
- [Compute Providers](https://github.com/MorpheusAIs/Docs/tree/main/!KEYDOCS%20README%20FIRST!/Compute%20Providers)
- [Code Providers](https://github.com/MorpheusAIs/Docs/tree/main/!KEYDOCS%20README%20FIRST!/Code%20Providers)
- [FAQs](https://github.com/MorpheusAIs/Docs/tree/main/!KEYDOCS%20README%20FIRST!/FAQs)
- [White Paper](https://github.com/MorpheusAIs/Docs/blob/main/!KEYDOCS%20README%20FIRST!/WhitePaper.md)
- [Yellow Paper](https://github.com/MorpheusAIs/Docs/blob/main/!KEYDOCS%20README%20FIRST!/YellowPaper.md)
- [Techno Capital Machine](https://github.com/MorpheusAIs/Docs/blob/main/!KEYDOCS%20README%20FIRST!/TechnoCapitalMachineTCM.md)
- [Morpheus Launch Phases](https://github.com/MorpheusAIs/Docs/blob/main/!KEYDOCS%20README%20FIRST!/Morpheus%20Launch%20Phases.md)
- [Morpheus Multisig Account](https://github.com/MorpheusAIs/Docs/blob/main/!KEYDOCS%20README%20FIRST!/Multisig.md)
- [Protection Fund Details](https://github.com/MorpheusAIs/Docs/blob/main/!KEYDOCS%20README%20FIRST!/Protection%20Fund%20Details.md)
- [Morpheus Testing Plan](https://github.com/MorpheusAIs/Docs/blob/main/Security%20Audit%20Reports/Morpheus%20Testing%20Plan.md)
- [Bug Bounty Program](https://github.com/MorpheusAIs/Docs/blob/main/!KEYDOCS%20README%20FIRST!/Bug%20Bounty%20Program.md)
- [Morpheus Meetup Guide](https://github.com/MorpheusAIs/Docs/blob/main/!KEYDOCS%20README%20FIRST!/Morpheus%20Meetup%20Guide.md)

---
## Code:
-	Morpheus Smart Agent Local Install: https://github.com/MorpheusAIs/moragents
-	Smart Contracts: https://github.com/MorpheusAIs/SmartContracts
-	Frontend Dashboard: https://github.com/MorpheusAIs/DashBoard
-  Technical Documentation https://github.com/MorpheusAIs/Docs
-  Morpheus Request for Comments: https://github.com/MorpheusAIs/MRC
-  Morpheus Lumerin (Compute) Node: https://github.com/MorpheusAIs/Morpheus-Lumerin-Node
-  Morpheus MOR20 Contracts: https://github.com/MorpheusAIs/MOR20  

---
## Morpheus Smart Contract addresses:
**Ethereum:**
- Distribution: [0x47176B2Af9885dC6C4575d4eFd63895f7Aaa4790](https://etherscan.io/address/0x47176B2Af9885dC6C4575d4eFd63895f7Aaa4790)
- L1Sender: [0x2Efd4430489e1a05A89c2f51811aC661B7E5FF84](https://etherscan.io/address/0x2Efd4430489e1a05A89c2f51811aC661B7E5FF84)
- Multisig Ethereum: [0x1FE04BC15Cf2c5A2d41a0b3a96725596676eBa1E](https://etherscan.io/address/0x1FE04BC15Cf2c5A2d41a0b3a96725596676eBa1E)
- Multisig ENS: [MOR.ETH](https://etherscan.io/name-lookup-search?id=mor.eth)
  
**Arbitrum:**
- MOR OFT: [0x092baadb7def4c3981454dd9c0a0d7ff07bcfc86](https://arbiscan.io/address/0x092baadb7def4c3981454dd9c0a0d7ff07bcfc86)
- L2TokenReceiverV2: [0x47176b2af9885dc6c4575d4efd63895f7aaa4790](https://arbiscan.io/address/0x47176b2af9885dc6c4575d4efd63895f7aaa4790)
- L2MessageReceiver: [0xd4a8ECcBe696295e68572A98b1aA70Aa9277d427](https://arbiscan.io/address/0xd4a8ECcBe696295e68572A98b1aA70Aa9277d427)
- Multisig  Arbitrum: [0x151c2b49CdEC10B150B2763dF3d1C00D70C90956](https://arbiscan.io/address/0x151c2b49CdEC10B150B2763dF3d1C00D70C90956) 

---
## Morpheus Network Diagram
<img src="https://github.com/antonbosss/Docs/blob/main/Graphics/MOR network diagram.png" width=100% height=100%>
