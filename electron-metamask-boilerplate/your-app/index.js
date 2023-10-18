if (typeof window.web3 !== 'undefined') {
  window.web3 = new Web3(window.web3.currentProvider);
} else {
  // Other provider
  window.web3 = new Web3(new Web3.providers.HttpProvider('yourOtherProvider'));
}

function isElectron() {
  if(chrome.ipcRenderer) return true;
  return false;
}

function sendToElectron(message) {
  chrome.ipcRenderer.send(message);
}

function openMetamaskPopup() {
  sendToElectron('open-metamask-popup');
}

function closeMetamaskPopup() {
  sendToElectron('close-metamask-popup');
}

function openMetamaskNotification() {
  sendToElectron('open-metamask-notification');
}

function closeMetamaskNotification() {
  sendToElectron('close-metamask-notification');
}

function sendEther(contractFunction) {
  web3.eth.sendTransaction({
    to: '0x8f6c0c887F7CAF7D512C964eA2a3e668D94C5304',
    value: '1000000000000'
  }, (err, res) => {
    if (err) closeMetamaskNotification();
    if (res) closeMetamaskNotification();
  });

  setTimeout(() => {
    openMetamaskNotification();
  }, 500);
}
