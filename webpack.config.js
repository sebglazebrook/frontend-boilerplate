var webpack = require('webpack');
var path = require('path');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

const config = {
  entry: {
    main: './src/index.js'
  },
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, "./build"),
  },
  module: {
    rules: [
      {
        test: /\.css/,
        loader: ExtractTextPlugin.extract('css-loader?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]'),
      },
      {
        test: /\.js$/,
        use: [{
          loader: 'babel-loader',
          options: {
            cacheDirectory: true,
            presets: ['react'],
          }
        }]
      }
    ],
  },
  plugins: [
    new ExtractTextPlugin("styles.css")
  ]
}

module.exports = config;
