import type { Configuration } from 'webpack';

import { rules } from './webpack.rules';
import { plugins } from './webpack.plugins';

rules.push({
  test: /\.css$/,
  use: [{ loader: 'style-loader' }, { loader: 'css-loader' }],
});

rules.push({
  test: /\.(woff|woff2|eot|ttf|otf)$/i,
  type: 'asset/resource',
});

rules.push({
  test: /\.svg/,
  issuer: /\.[jt]sx?$/,
  use: [{ loader: '@svgr/webpack' }],
});

rules.push({
  test: /\.png$/,
  type: 'asset/resource',
});

export const rendererConfig: Configuration = {
  module: {
    rules,
  },
  plugins,
  resolve: {
    extensions: ['.js', '.ts', '.jsx', '.tsx', '.css'],
  },
  devtool: 'source-map',
};
