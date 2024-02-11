import type { Configuration } from 'webpack';
import CopyWebpackPlugin from 'copy-webpack-plugin';
import path from 'path';

import { rules } from './webpack.rules';
import { plugins } from './webpack.plugins';

const devPlugins = [
  ...plugins,
  new CopyWebpackPlugin({
    patterns: [
      {
        from: path.join(__dirname, 'src/executables'), to: path.join(__dirname, '.webpack/executables'),
        force: true
      }
    ],
  })
];

export const mainConfig: Configuration = {
  entry: './src/backend/index.ts',
  module: {
    rules,
  },
  plugins: [...plugins],
  resolve: {
    extensions: ['.js', '.ts', '.jsx', '.tsx', '.css', '.json'],
  },
};

export const mainDevConfig: Configuration = {
  mode: 'development',
  entry: './src/backend/index.ts',
  module: {
    rules,
  },
  plugins: [...devPlugins],
  resolve: {
    extensions: ['.js', '.ts', '.jsx', '.tsx', '.css', '.json'],
  },
};
