const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");

module.exports = {
    mode: "development",
    output: {
        filename: "js/[name].[chunkhash:5].bundle.js",
        // publicPath: "../"
    },
    module: {
        rules: [
            {
                test: /\.jpeg$/,
                use: [
                    {
                        loader: "url-loader",
                        options: {
                            name: "imgs/[name].[hash:5].[ext]",
                            limit: 1 * 1024,
                            publicPath: "../"
                        }
                    }
                ]
            }
        ]
    },
    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            template: "./public/index.html",
            filename: "html/index.html"
        })
    ]
};
