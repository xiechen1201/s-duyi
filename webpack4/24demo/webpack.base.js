// 公共配置

const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");

module.exports = {
    stats: {
        modules: false,
        colors: true
    },
    entry: {
        list: "./src/list/index.js",
        detail: "./src/detail/index.js"
    },
    output: {
        filename: "scripts/[name].bundle.[chunkhash:5].js"
    },
    resolve: {
        alias: {
            "@": path.resolve(__dirname, "src")
        }
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "./public/list.html",
            filename: "list.html",
            chunks: ["list"]
        }),
        new HtmlWebpackPlugin({
            template: "./public/detail.html",
            filename: "detail.html",
            chunks: ["detail"]
        }),
        new CopyWebpackPlugin({
            patterns: [
                { from: "./public/img", to: "./img" },
                { from: "./public/css", to: "./css" }
            ]
        })
    ]
};
