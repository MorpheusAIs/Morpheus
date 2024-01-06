const { spawn } = require('child_process');

function runMorpheusAgent(prompt) {
  return new Promise((resolve, reject) => {
    const python = spawn('python', ['MorphAgent.py', prompt]);

    let result = '';
    python.stdout.on('data', (data) => {
      result += data.toString();
    });

    python.stderr.on('data', (data) => {
      reject(data.toString());
    });

    python.on('close', (code) => {
      if (code !== 0) {
        reject(`Python script exited with code ${code}`);
      } else {
        resolve(result);
      }
    });
  });
}

module.exports = {
  runMorpheusAgent,
};