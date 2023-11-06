const { exec, spawn } = require('child_process');
const sudo = require('sudo-prompt');

"use strict"; 
class Ollama {

    child;
    // Function to check if Ollama is installed and running
    // Could check for updates also
    checkOllama() {
        return new Promise((resolve, reject) => {
            exec('systemctl is-active ollama', (error, stdout, stderr) => {
                console.log('CHECK LLAMA: ', `err:${stderr.toString('utf8')}`, `out: ${stdout.toString('utf8')}`);
                if (error || stdout.toString('utf8').trim() !== 'active') {
                // Ollama is not active, attempt to install it
                
                    this.installOllama().then(resolve).catch(reject);
        
                } else {
                // Ollama is active
                    resolve();
                }
            });
        });
    }
  
    // Function to install Ollama
    installOllama() {
        return new Promise((resolve, reject) => {
            console.log('INSTALLING / UPDATING');
            const installCommand = 'curl https://ollama.ai/install.sh | sh';
            const options = { name: 'Electron' };
            
            sudo.exec(installCommand, options, (error, stdout, stderr) => {
                if (error) {
                    reject(error);
                    return;
                }
                console.log('Ollama installed successfully');
                resolve(stdout);
            });
        });
    }

    startOllama() {
        if(!this.child) this.child = spawn("ollama", ['serve']);

        this.child.stdout.on('data', (data) => {
            console.log('[Ollama Logs]:', data.toString('utf8'));
        })
    }
}

module.exports = {
    OllamaManager: new Ollama() 
}