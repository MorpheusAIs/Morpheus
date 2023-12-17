"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};

const sdk_1 = require("@metamask/sdk");
const qrcode_1 = __importDefault(require("qrcode"));
const buffer_1 = require("buffer");
const fs_1 = require("fs");

// MetaMask SDK
const sdk = new sdk_1.MetaMaskSDK({
    shouldShimWeb3: false,
    storage: {
        enabled: true,
    },
    dappMetadata: {
        name: 'Electron Test Dapp',
        url: 'https://metamask.io/sdk/',
    },
    modals: {
        install: ({ link }) => {
            qrcode_1.default.toCanvas(qrCodeDOM, link, (error) => {
                if (error)
                    console.error(error);
            });
            return {};
        },
        otp: () => {
            return {
                updateOTPValue: (otpValue) => {
                    if (otpValue !== '') {
                        otpDOM.innerText = otpValue;
                    }
                },
            };
        },
    },
});

const msgParams = {
    domain: {
        // Defining the chain aka Rinkeby testnet or Ethereum Main Net
        chainId: '',
        // Give a user-friendly name to the specific contract you are signing for.
        name: 'Ether Mail',
    },
    // ... rest of your code ...

};

// Attach sdk to the window object
window.sdk = sdk;