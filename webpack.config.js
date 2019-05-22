var path = require("path");
var HtmlWebpackPlugin = require('html-webpack-plugin');

var config = {
    mode: 'development',
    entry : "./src/index.js",
    output : {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    plugins: [new HtmlWebpackPlugin({
        template: __dirname+"/src/index.html",
        filename: 'index.html',
        inject: "body"
      })],
    module: {
        rules: [
            {
              test: /\.(js|jsx)$/,
              // exclude: /(node_modules)/,
              use: 'babel-loader'
              
            },
            {
              test: /\.css$/,
              use: ['style-loader', 'css-loader']
            }
          ]
    }
  

}

module.exports = config;

 