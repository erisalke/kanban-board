var webpack = require('webpack')
var HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    entry: "./src/index.js",
    module: {
      loaders: [
        {
          test: /\.js$/,
          exclude: [__dirname+'/node_modules'],
          loader: 'babel'
        },
        {
          test: /\.css$/,
          loader: "style-loader!css-loader"
        }
      ]
    },
    output: {
      filename: "bundle.js",
      path: __dirname + '/public'
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: __dirname + '/src/index.html',
        filename: './index.html',
        inject: 'body'
      })
    ],
  };
