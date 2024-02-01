// setPermissions.js
const { exec } = require('child_process');
const path = require('path');

module.exports = function setPermissions(buildPath, electronVersion, platform, arch, callback) {
// Hardcoded buildPath
  buildPath = '.webpack/arm64/main/runners'; 
  console.log('buildPath:', buildPath);
  
  if (platform === 'darwin') {
    const filePath = path.join(buildPath, 'ollama-darwin');
    exec(`chmod +x ${filePath}`, callback);
  } else {
    callback();
  }
};