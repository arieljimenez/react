const path  = require('path');
const HtmlWebPackPlugin = require("html-webpack-plugin");

module.exports = {
    module: {
        rules: [
            {
                test: /\.(js)$/,
                use:{
                        loader: "babel-loader"
                    }
            },{
                test: /\.(css)$/,
                use: [
                    { loader : "style-loader" },
                    { loader : "css-loader" },
                ]
            }
        ]
    },
    plugins: [
        new HtmlWebPackPlugin({
            template: "./src/static/index.html",
        })
    ]
};
