const { resolve, join } = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './client/index.js',
  output: {
    path: resolve(__dirname, 'build'),
    filename: "bundle.js"
  },
  devServer: {
    host: 'localhost',
    static: {
      publicPath: '/',
      directory: resolve(__dirname, 'client') //keep an eye on this
    },
    port: 3000,
    open: true,
    hot: true,
    proxy: {}
  },
  module: {
    rules: [
      {
        test: /.(js|jsx)$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader',
            presets: [
              '@babel/preset-env',
              '@babel/preset-react'
            ]
          }
        ]
      },
      {
        test: /.(css|scss)$/,
        exclude: /node_modules/,
        use: [
          'style-loader',
          'css-loader',
          'postcss-loader',
          'sass-loader'
        ]
      },
    ]
  },
  plugins: [
    new HTMLWebpackPlugin({ template: './client/index.html' })
  ]
}
