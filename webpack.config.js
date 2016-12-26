const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {

  entry: {
    main: "./index.js"
  },

  output: {
    path: __dirname + "/dist",
    filename: "[name].js"
  },

  resolve: {
    extensions: ['.js', '.ts']
  },

  module: {
    loaders: [],

  },

  plugins: [
    new HtmlWebpackPlugin({
      template: 'index.html',
      minify: {
        collapseWhitespace: true,
        removeComments: true
      }
    })
  ]
};