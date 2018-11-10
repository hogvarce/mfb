const nodeExternals = require('webpack-node-externals');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
  context: __dirname,
  entry: {
    server: `${__dirname}/src/server`,
  },
  mode: "production",
  output: {
    path: `${__dirname}/dist/`,
    publicPath: '/dist/',
  },
  target: 'node',
  node: {
    __dirname: false,
    __filename: false,
  },
  resolve: {
    extensions: ['.js', '.jsx'],
    alias: {
      '@': `${__dirname}/src/shared`,
    },
  },
  module: {
    rules: [
      {
        test: /\.svg$/,
        include: /src/,
        oneOf: [
          { test: /inline/, use: { loader: 'svg-inline-loader', options: { removeSVGTagAttrs: false } } },
          {
            use: { loader: 'url-loader', options: { limit: 10000 } },
          },
        ],
      },
      {
        test: /\.(jpe?g|png|gif|ico|woff2?)$/,
        include: /src/,
        use: { loader: 'url-loader', options: { limit: 10000 } },
      },
    ],
  },
  plugins: [
    new CopyWebpackPlugin([
      { from: `${__dirname}/views`, to: `${__dirname}/dist` },
    ]),
  ],
  externals: nodeExternals(),
};
