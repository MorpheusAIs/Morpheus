const { MetaMaskSDK } = require("@metamask/sdk");

const QRCode = require("qrcode");
const { Buffer } = require("buffer");
const { existsSync } = require("fs");

// MetaMask SDK
const sdk = new MetaMaskSDK({
  shouldShimWeb3: false,
  storage: {
    enabled: true
  },
  dappMetadata: {
    name: "Morpheus",
    url: "https://metamask.io/sdk/"
  },
  modals: {
    install: ({ link }) => {
      QRCode.toCanvas(qrCodeDOM, link, error => {
        if (error) console.error(error);
      });
      return {};
    },
    otp: () => {
      return {
        updateOTPValue: otpValue => {
          if (otpValue !== "") {
            otpDOM.innerText = otpValue;
          }
        }
      };
    }
  }
});

const msgParams = {
  domain: {
    // Defining the chain aka Rinkeby testnet or Ethereum Main Net
    chainId: "",
    // Give a user-friendly name to the specific contract you are signing for.
    name: "Ether Mail",
    // If name isn't enough add verifying contract to make sure you are establishing contracts with the proper entity
    verifyingContract: "0xCcCCccccCCCCcCCCCCCcCcCccCcCCCcCcccccccC",
    // Just lets you know the latest version. Definitely make sure the field name is correct.
    version: "1"
  },

  message: {
    contents: "Hello, Bob!",
    attachedMoneyInEth: 4.2,
    from: {
      name: "Cow",
      wallets: [
        "0xCD2a3d9F938E13CD947Ec05AbC7FE734Df8DD826",
        "0xDeaDbeefdEAdbeefdEadbEEFdeadbeEFdEaDbeeF"
      ]
    },
    to: [
      {
        name: "Bob",
        wallets: [
          "0xbBbBBBBbbBBBbbbBbbBbbbbBBbBbbbbBbBbbBBbB",
          "0xB0BdaBea57B0BDABeA57b0bdABEA57b0BDabEa57",
          "0xB0B0b0b0b0b0B000000000000000000000000000"
        ]
      }
    ]
  },
  // Refers to the keys of the *types* object below.
  primaryType: "Mail",
  types: {
    EIP712Domain: [
      { name: "name", type: "string" },
      { name: "version", type: "string" },
      { name: "chainId", type: "uint256" },
      { name: "verifyingContract", type: "address" }
    ],
    // Not an EIP712Domain definition
    Group: [
      { name: "name", type: "string" },
      { name: "members", type: "Person[]" }
    ],
    // Refer to PrimaryType
    Mail: [
      { name: "from", type: "Person" },
      { name: "to", type: "Person[]" },
      { name: "contents", type: "string" }
    ],
    // Not an EIP712Domain definition
    Person: [
      { name: "name", type: "string" },
      { name: "wallets", type: "address[]" }
    ]
  }
}

// DOM Elements
const qrCodeDOM = document.getElementById("qrCode")
const otpDOM = document.getElementById("otp")
const signButtonDOM = document.getElementById("personalSignButton")
const signTypedDataButtonDOM = document.getElementById("signTypedDataButton")
const connectButtonDOM = document.getElementById("connectButton")
const switchChainDOM = document.getElementById("switchChainButton")
const addPolygonDOM = document.getElementById("addChainButton")
const addArbitrumDOM = document.getElementById("addArbitrumChainButton")
const switchPolygonDOM = document.getElementById("switchPolygonButton")
const switchArbitrumDOM = document.getElementById("switchArbitrumButton")
const terminateButtonDOM = document.getElementById("terminateButton")
const responseDOM = document.getElementById("response")
const accountsDOM = document.getElementById("account")
const chainDOM = document.getElementById("chain")

// App State
let account = ""
let chainId = ""
let ethereum

// SDK Functions

// Connect
const connect = async () => {
    try {
      const accounts = await ethereum.request({ method: "eth_requestAccounts" });
      account = accounts?.[0];
      updateDOM(accountsDOM, account);
      connectButtonDOM.textContent = "Connected";
      qrCodeDOM.style.display = "none";
      chainId = ethereum.chainId;
      updateDOM(chainDOM, chainId);
      signButtonDOM.style.display = "inline";
      signTypedDataButtonDOM.style.display = "none";
      addPolygonDOM.style.display = "none";
      switchPolygonDOM.style.display = "none";
      switchArbitrumDOM.style.display = "inline";
      addArbitrumDOM.style.display = "inline";
      switchChainDOM.style.display = "none";
    } catch (error) {
      console.error(error);
    }
  };
  
  // Personal Sign
  const personal_sign = async () => {
    const from = ethereum.selectedAddress;
    const message = "Hello from Morpheus!";
    const hexMessage = "0x" + Buffer.from(message, "utf8").toString("hex");
    try {
      const result = await ethereum.request({
        method: "personal_sign",
        params: [hexMessage, from, "Example password"]
      });
      response = result;
      updateDOM(responseDOM, result.toString());
      console.log("sign", result);
    } catch (e) {
      console.log("sign ERR", e);
    }
  };
  
  

// eth_signTypedData_v4
const eth_signTypedData_v4 = async () => {
  let from = ethereum.selectedAddress
  try {
    if (!from) {
      alert(`Invalid account -- please connect using eth_requestAccounts first`)
      return
    }

    msgParams.domain.chainId = ethereum.chainId
    const params = [from, JSON.stringify(msgParams)]
    const method = "eth_signTypedData_v4"
    console.debug(`ethRequest ${method}`, JSON.stringify(params, null, 4))
    console.debug(`sign params`, params)
    const result = await ethereum?.request({ method, params })
    updateDOM(responseDOM, result.toString())
  } catch (e) {
    console.log(e)
    return "Error: " + e.message
  }
}

// Chain Switch
const switchChain = async () => {
  const currentChainId = ethereum.chainId
  const chainToSwitchTo = currentChainId === "0x1" ? "0xa4b1" : "0x1"
  await ethereum.request({
    method: "wallet_switchEthereumChain",
    params: [{ chainId: chainToSwitchTo }]
  })
}

// Switch to Polygon
const switchToPolygon = async () => {
  const chainToSwitchTo = "0x89"
  await ethereum.request({
    method: "wallet_switchEthereumChain",
    params: [{ chainId: chainToSwitchTo }]
  })
}

// Switch to Arbitrum
const switchToArbitrum = async () => {
  const chainToSwitchTo = "0xa4b1"
  await ethereum.request({
    method: "wallet_switchEthereumChain",
    params: [{ chainId: chainToSwitchTo }]
  })
}

// Add Polygon Chain
const addPolygonChain = async () => {
  ethereum
    .request({
      method: "wallet_addEthereumChain",
      params: [
        {
          chainId: "0x89",
          chainName: "Polygon",
          blockExplorerUrls: ["https://polygonscan.com"],
          nativeCurrency: { symbol: "MATIC", decimals: 18 },
          rpcUrls: ["https://polygon-rpc.com/"]
        }
      ]
    })
    .then(res => console.log("add", res))
    .catch(e => console.log("ADD ERR", e))
}

// Add Arbitrum Chain
const addArbitrumChain = async () => {
  ethereum
    .request({
      method: "wallet_addEthereumChain",
      params: [
        {
          chainId: "0xa4b1",
          chainName: "Arbitrum One",
          blockExplorerUrls: ["https://arbiscan.io"],
          nativeCurrency: { symbol: "AETH", decimals: 18 },
          rpcUrls: ["https://arb1.arbitrum.io/rpc"]
        }
      ]
    })
    .then(res => console.log("add", res))
    .catch(e => console.log("ADD ERR", e))
}

// Terminate
const terminate = () => {
  sdk.terminate()
  connectButtonDOM.textContent = "Connect"
  signButtonDOM.style.display = "none"
  signTypedDataButtonDOM.style.display = "none"
  switchChainDOM.style.display = "none"
  addPolygonDOM.style.display = "none"
  switchPolygonDOM.style.display = "none"
  switchArbitrumDOM.style.display = "none";
  addArbitrumDOM.style.display = "none";
  accountsDOM.innerText = ""
  chainDOM.innerText = ""
  qrCodeDOM.innerText = ""
  otpDOM.innerText = ""
  responseDOM.innerText = ""
}

// Event listeners
connectButtonDOM.onclick = connect
connectButtonDOM.addEventListener("click", connect)
signButtonDOM.addEventListener("click", personal_sign)
signTypedDataButtonDOM.addEventListener("click", eth_signTypedData_v4)
switchChainDOM.addEventListener("click", switchChain)
addPolygonDOM.addEventListener("click", addPolygonChain)
addArbitrumDOM.addEventListener("click", addArbitrumChain)
switchPolygonDOM.addEventListener("click", switchToPolygon)
switchArbitrumDOM.addEventListener("click", switchToArbitrum)
terminateButtonDOM.addEventListener("click", terminate)

// Entry point
window.onload = async () => {
  await sdk.init()
  ethereum = sdk.getProvider()
  setEventListeners()
  if (hasSessionStored()) {
    connectButtonDOM.innerText = "Reconnecting..."
    await connect()
  }
}

const setEventListeners = () => {
  ethereum.on("chainChanged", chain => {
    console.log(`chainChanged ${chain}`)
    chainId = chain
    updateDOM(chainDOM, chain)
  })

  ethereum.on("accountsChanged", accounts => {
    if (accounts.length === 0) {
      updateDOM(accountsDOM, "Accounts disconnected!")
      return
    }
    console.log(`accountsChanged ${accounts}`)
    account = accounts[0]
    updateDOM(accountsDOM, accounts[0])
  })

  ethereum.on("connect", () => {
    qrCodeDOM.innerText = ""
    signButtonDOM.style.display = "inline"
    if (account !== "") {
      updateDOM(otpDOM, "")
    }
  })
}

// Helper functions
function updateDOM(domElement, value) {
  domElement.innerText = value
}

function hasSessionStored() {
  return existsSync(".sdk-comm")
}
