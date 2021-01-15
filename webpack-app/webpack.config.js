const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'production',
  entry: {
    app: './src/hello.jsx'
  },
  module: {
    rules: [
      { test: /\.(js|jsx)$/, use: ['babel-loader'] }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/hello.html',
      filename: 'index.html'
    })
  ],
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist')
  }
};