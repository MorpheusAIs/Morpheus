![Wide but short logo for Morpheus](https://github.com/MorpheusAIs/Morpheus/assets/1563345/be0c5a0f-0766-4e31-8e4a-ab18cd211961)

# Morpheus
## A Network For Powering Smart Agents
### Authored by Morpheus, Trinity, & Neo
Published - September 2nd 2023

---------
**Morpheus Version 0.0.5 for Mac**
- Download from Google Drive: https://drive.google.com/file/d/1x-wR4HWjKqT_g6VRjrWPXu3rVm9ukOc9/view?usp=sharing
- SHA 256 hash for validation: 9092d543023fb95086cf4a7039d42cbcbbdf5283d670c4de6396b3d89e57b064
- Version: Morpheus-0.0.5-x64.dmg

---------
**Morpheus Version 0.0.5 for Linux Debian**
- Download: https://drive.google.com/file/d/1PQ3n7LXeJHe_jmkYLDUQ9fWjZQTWbHCB/view?usp=sharing
- Instructions: To install, run this command:

`sudo dpkg -i /path/to/your/morpheus.deb`

NOTE: In the above command, replace "/path/to/your/morpheus.deb" with your path to the morpheus_0.0.5_amd64.deb file.
- SHA Hash for Verifiction:
b227e7bcb21ec9e8e2b4bf9510a2e1f224953fe5
- Version: morpheus_0.0.5_amd64.deb

Morpheus Linux Debian Guide:
https://docs.google.com/document/d/1PLRxWIKppNHIy461ZeHHP1Lz6ZC7rcbSRyD7SJCkyKg/edit#heading=h.85k2a53a2as

---------
## Introduction 
The Smart Agent concept of connecting LLMs and AI Agents to wallets, Dapps, & smart contracts promises to open the world of Web3 to everyone. Chatting in normal language with your Smart Agent and having it understand the question or task, is similar to how Google's search engine opened the early internet up to the general public.

To make Smart Agents accessible to everyone and increase decentralization we propose a network & fairly launched token for incentivizing all four of the key contributors to their operation. Namely, the community of users, coders contributing to the Morpheus software / agents, capital providers funding development / operations and those suppling computation, storage and bandwidth. It has been well shown by the history of Bitcoin and Ethereum that free & open competition for scarce digital tokens can provide scalable infrastructure for a public blockchain over long periods of time.

## Papers:
- White Paper: https://github.com/MorpheusAIs/Morpheus/blob/main/!KEYDOCS%20README%20FIRST!/2.WhitePaper.md
- Yellow Paper: https://github.com/MorpheusAIs/Morpheus/blob/main/!KEYDOCS%20README%20FIRST!/3.YellowPaper.md
- Yellowstone Compute Model Paper: https://github.com/MorpheusAIs/Morpheus/blob/main/!KEYDOCS%20README%20FIRST!/7.Yellowstone%20Compute%20Model.md
- Techno Capital Machine Paper: https://github.com/MorpheusAIs/Morpheus/blob/main/!KEYDOCS%20README%20FIRST!/4.TechnoCapitalMachineTCM.md

## Code:
-	Morpheus Local Install: https://github.com/MorpheusAIs/Morpheus
-	Smart Contracts: https://github.com/MorpheusAIs/SmartContracts
-	Frontend Dashboard: https://github.com/MorpheusAIs/DashBoard

## Morpheus Network Diagram
![DiagramupdatedwithstETH](https://github.com/MorpheusAIs/Morpheus/assets/1563345/31711e49-0b57-4b41-b231-ee673dbf6664)


## Setting up Morpheus on Mac

Welcome to Morpheus! Follow these steps to get started on your Mac:

### Prerequisites
- Ensure you have Homebrew installed on your Mac. If not, you can install it by running the following command in your terminal:
  ```sh
  /bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
  ```
- Install Node.js and npm (Node Package Manager) using Homebrew:
  ```sh
  brew install node
  ```

### Installation Steps
1. **Install Dependencies**:
   - Navigate to your project directory and install the necessary Node.js dependencies by running:
     ```sh
     npm install
     ```

2. **Download and Install Ollama**:
   - Download the Ollama app for Mac from the official website:
     [Download Ollama for Mac](https://ollama.com/download/mac)
   - Move the downloaded file to your Applications folder and follow the installation prompts.
   - Once the installation is over, verify that the server is running by typing this into a browser window: http://127.0.0.1:11434/ You should see text: "Ollama is running"

3. **Run the Application**:
   - Start Morpheus by running:
     ```sh
     npm run start
     ```
   - You should see the message "Ollama server is running" in your terminal, followed by the Electron window opening with the status "Initializing..."
   - Once the initialization is complete, you'll be able to type messages into the Electron window and see the corresponding logs in the terminal.

### Troubleshooting
If you encounter any issues during the installation or running of Morpheus, please refer to the following resources:
- [Morpheus GitHub Issues](https://github.com/MorpheusAIs/Morpheus/issues) - for common issues and their solutions.
- [Ollama Installation Guide](https://ollama.com/support/mac) - for detailed instructions on installing and troubleshooting Ollama on Mac.

Enjoy exploring Morpheus, and welcome to the community of Smart Agents!