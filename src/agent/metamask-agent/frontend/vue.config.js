const { defineConfig } = require('@vue/cli-service');
module.exports = defineConfig({
  transpileDependencies: true,
  pluginOptions: {
    electronBuilder: {
      preload: 'public/preload.js', 
      mainProcessFile: 'src/background/background.js',
      rendererProcessFile: 'src/renderer/main.js'
    },
  },
});
