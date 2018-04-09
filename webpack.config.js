const path = require('path');
const HtmlWebPackPlugin = require("html-webpack-plugin");

module.exports = {
  output: {
    publicPath: '/',
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        use: {
          loader: "babel-loader"
        }
      }, {
        test: /\.(css)$/,
        use: [
          { loader: "style-loader" },
          { loader: "css-loader" },
        ]
      }
    ]
  },
  resolve: {
    extensions: ['.jsx', '.js']
  },
  devServer: {
    historyApiFallback: true,
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: "./src/static/index.html",
    })
  ]
};
