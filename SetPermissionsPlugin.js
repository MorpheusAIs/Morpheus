const fs = require('fs');
const path = require('path');
const copyfiles = require('copyfiles');

class SetPermissionsPlugin {
  apply(compiler) {
    compiler.hooks.beforeCompile.tapAsync('SetPermissionsPlugin', (params, callback) => {
      const fromPath = path.join(__dirname, 'src/service/ollama/runners/ollama-darwin');
      const toPath = path.join(compiler.outputPath, 'runners');
      
      copyfiles([fromPath, toPath], { up: true }, (err) => {
        if (err) {
          callback(err);
        } else {
          if (fs.existsSync(toPath)) {
            fs.chmodSync(toPath, '755');
          }
          callback();
        }
      });
    });
  }
}

module.exports = SetPermissionsPlugin;