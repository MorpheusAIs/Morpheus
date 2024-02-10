const { exec, spawn } = require('child_process');
const sudo = require('sudo-prompt');

// Function to check if Ollama is running
function checkOllama() {
  exec('systemctl is-active ollama', (error, stdout, stderr) => {
    if (error) {
      // Ollama is not running - stdout contains the status 'inactive' or 'failed'
      installOllama();
      return;
    }

    if (stdout.trim() === 'active') {
      console.log('Ollama is running!');
    } else {
      installOllama();
    }
  });
}

// Function to install Ollama
function installOllama() {
  // Prompt user for permission before proceeding

  switch (process.platform) {
    case "win32":
      console.log("Ollama is not installed yet on your local machine");
      console.log("Follow instructions to download and install Ollama via: https://github.com/ollama/ollama?tab=readme-ov-file");
      break;
    case "darwin":
      console.log("Ollama is not installed yet on your local machine");
      console.log("Follow instructions to download and install Ollama via: https://github.com/ollama/ollama?tab=readme-ov-file");
      break;
    case "linux":
      console.log("Trying to install Ollama on Linux");
      const options = {
        name: 'Electron',
      };
      const installCommand = 'curl https://ollama.ai/install.sh | sh';

      sudo.exec(installCommand, options, (error, stdout, stderr) => {
        if (error) {
          console.error('Error installing Ollama:', error);
          throw error; // or handle error as needed
        }
        console.log('Ollama installed successfully');
      });

      break;
    default:
      reject(new Error(`Unsupported platform: ${process.platform}`));
      return;
  }


}

// Run the check
checkOllama();

module.exports = {
  installOllama
};