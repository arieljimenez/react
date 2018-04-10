const path = require('path');
const HtmlWebPackPlugin = require("html-webpack-plugin");
const webpack = require('webpack');

const htmlWebpackPlugin = new HtmlWebPackPlugin({
  template: "./src/static/index.html",
  filename: "index.html",
});

var config = {
  output: {
    publicPath: '/'
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        include: [
          path.resolve(__dirname, "./src/components")
        ],
        use: {
          loader: "babel-loader"
        },
      }, {
        test: /\.(css)$/,
        use: [
          { loader: "style-loader" },
          { loader: "css-loader", options: { minimize: true } },
        ]
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: "html-loader",
            options: { minimize: false }
          }
        ]
      },
    ]
  },
  resolve: {
    extensions: ['.js', '.jsx']
  },
  devServer: {
    historyApiFallback: true,
  },
  plugins: [htmlWebpackPlugin]
};

// if (process.env.NODE_ENV === 'production') {
//   console.log(process.env.NODE_ENV);
//   config.plugins.push(
//     new webpack.DefinePlugin({
//       'process.env': {
//         'NODE_ENV': JSON.stringify(process.env.NODE_ENV)
//       }
//     })
//   )
// }

module.exports = config;
