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

  const options = {
    name: 'Electron',
  };

  const installCommand = 'curl https://ollama.ai/install.sh | sh';

  sudo.exec(installCommand, options, (error, stdout, stderr) => {
    if (error) {
      throw error; // or handle error as needed
    }
    console.log('Ollama installed successfully');
  });
}

// Run the check
checkOllama();
