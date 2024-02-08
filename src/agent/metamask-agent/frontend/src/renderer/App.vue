<template>
  <div id="app-container">
    <div class="content">
      <div>
        <img alt="MOR logo" src="./assets/128x128_mor.png" class="logo">
      </div>
      <div class="chat-container">
        <ChatBox :messages="messages" class="chatbox"></ChatBox>
        <TextInput @newlog="handleNewMessage"></TextInput>
      </div>
    </div>
    <div class="metamask-button-container">
      <MetaMaskButton @click="connectToMetamask"></MetaMaskButton>
    </div>
   <!-- <button @click="sendTransaction"></button>-->
  </div>
</template>


<script>
import ChatBox from './components/ChatBox.vue';
import TextInput from './components/TextInput.vue';
import MetaMaskButton from './components/MetamaskButton.vue'
import { MetaMaskSDK } from "@metamask/sdk";
//import QRCode from "qrcode";
//import { Buffer } from "buffer";

export default {
  name: 'App',
  components: {
    ChatBox,
    TextInput,
    MetaMaskButton
  },
  data() {
    return{
      messages: [],
      sdk: null,
      ethereum: null,
      account: "",
      chainId: "",
      response: ""
    }
  },
  mounted() {
    this.initializeMetaMaskSDK();
  },
  methods: {
    handleNewMessage(newMessage) {
      if(newMessage.message){
        this.messages.push({ text: newMessage.message, id: this.messages.length });
      } else {
        this.messages.push({ text: newMessage, id: this.messages.length });
      }
      console.log(this.messages)
      this.$nextTick(() => {
        this.scrollToBottom();
      });
      if(newMessage.executeTransactionBool){
        console.log('TxParam: ' + this.safeStringify(newMessage.transactionRequest))
        this.sendTransaction(newMessage.transactionRequest)
      }
    },
    scrollToBottom() {
      const chatContainer = this.$el.querySelector(".chatbox");
      chatContainer.scrollTop = chatContainer.scrollHeight;
    },
    async initializeMetaMaskSDK() {
      this.sdk = new MetaMaskSDK({
        shouldShimWeb3: false,
        storage: {
        enabled: true
      },
        dappMetadata: {
          name: "Morpheus",
          url: "https://metamask.io/sdk/"
        },
      });
      await this.sdk.init();
      this.ethereum = this.sdk.getProvider();
    },
    safeStringify(obj, indent = 2) {
      let cache = [];
      const retVal = JSON.stringify(obj, (key, value) => {
      if (typeof value === "object" && value !== null) {
        if (cache.includes(value)) return;
          cache.push(value);
        }
        return value;
      }, indent);
      cache = null; // Enable garbage collection
      return retVal;
    },
    async connectToMetamask() {
      try {
        let accounts = await this.ethereum.request({ method: "eth_requestAccounts" });
        this.account = accounts?.[0];
      } catch {
        console.log("Nada")
      }
    },
    async sendTransaction(txRequest){
       txRequest = {
          "method": "eth_sendTransaction",
          "params": [{
            "from": "0x0",
            "to": "0x2DDc1600b248D9A24d11bE858fb8388a1e9EAD92",
            "gas": "0x76c0", // 30400, keeping the gas limit the same
            "gasPrice": "0x4a817c800", // 20 Gwei in Wei (20 * 1e9)
            "value": "0x00000000", // 2441406250
            "data": "0x000000"
          }],
          }
      try {
        txRequest.params[0].from = this.account;
        let txHash = await this.ethereum.request(txRequest)
        console.log('Transaction Hash:', txHash);
        return txHash
      } catch(error) {
        console.error('Transaction Error:', error);
      }
    },
    async personalSign() {
      // Adapt the personal_sign function to work with Vue
    },
    async ethSignTypedDataV4() {
      // Adapt the eth_signTypedData_v4 function to work with Vue
    },
  },
}
</script>

<style>
#app-container {
  display: flex;
  background-color: #2F4F4F;
  justify-content: center;
  align-items: center;
  height: auto;
  min-height: 100vh;
}

body {
    display: block;
    margin: 0;
}


.chat-container {
  margin: 5%;
  border-radius: 30px;
  border: 2px solid #FF7F50;
}

.content {
  text-align: center;
  max-width: 100vh; 
  width: 100vh;
}

.logo {
  width: 20%;
  height: 20%;
  margin-bottom: 1px; 
}

.chatbox {
  background-color: #2F4F4F;
  padding: 1%;
  max-height: 50vh;
  overflow-y: auto;
}

.metamask-button-container {
  position: absolute; 
  top: 5%;
  right: 5%; 
}
</style>
