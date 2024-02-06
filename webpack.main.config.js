const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');
const SetPermissionsPlugin = require('./SetPermissionsPlugin');
const path = require('path');

module.exports = {
  entry: './src/main.js',
  module: {
    rules: [
      ...require('./webpack.rules'),
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[path][name].[ext]',
              publicPath: '..',
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'src/index.html' // path to your HTML file
    }),
    new CopyPlugin({
      patterns: [
        { from: 'src/service/ollama/runners/ollama-darwin', to: 'runners' },
        { from: 'src/public_assets', to: '../renderer/main_window/public_assets' },
      ],
    }),
    new SetPermissionsPlugin(),
  ],
  resolve: {
    extensions: ['.js', '.ts', '.jsx', '.tsx', '.css', '.json'],
  },
};