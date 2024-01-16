const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");

module.exports = {
    mode: "development",
    entry: {
        index: "./src/index.js",
        a: "./src/a.js"
    },
    output: {
        filename: "js/[name].[chunkhash:5].bundle.js",
    },
    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            filename: "index.html",
            template: "./public/index.html",
            chunks: ["index"]
        }),
        new HtmlWebpackPlugin({
            filename: "a.html",
            template: "./public/index.html",
            chunks: ["a"]
        }),
        new CopyWebpackPlugin({
            patterns: [{ from: "./public/imgs", to: "./imgs" }]
        })
    ],
    devServer: {
        open: true,
        proxy: {
            // "/api": "http://duyi.com"
            "/api": {
                target: "http://duyi.com",
                changeOrigin: true
            }
        }
    },
    module: {
        rules: [
            {
                test: /\.jpeg$/,
                // loader: "file-loader"
                use: [
                    /* {
                        loader: "file-loader",
                        options: {
                            outputPath: "assets/imgs"
                            // name: '[contenthash:5]_[name].[ext]',
                        }
                    } */
                    {
                        loader: "url-loader",
                        options: {
                            outputPath: "assets/imgs"
                            // name: '[contenthash:5]_[name].[ext]',
                        }
                    }
                ]
            }
        ]
    }
};
