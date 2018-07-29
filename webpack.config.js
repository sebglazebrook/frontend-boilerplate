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
        test: /\.scss/,
        loader: ExtractTextPlugin.extract('css-loader?modules&localIdentName=[name]__[local]___[hash:base64:5]&importLoaders=2!sass-loader'),
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
