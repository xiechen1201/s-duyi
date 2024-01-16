const path = require("path");
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

module.exports = {
  mode: "development",
  devtool: "source-map",
  entry: {
    index: "./src/index.js",
    list: "./src/list.js"
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name].[chunkhash:5].bundle.js"
  },
  module: {
    rules: [
      {
        test: /.css$/,
        use: ["style-loader", "css-loader"]
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./public/index.html",
      filename: "index.html",
      chunks: ["index"]
    }),
    new HtmlWebpackPlugin({
      template: "./public/index.html",
      filename: "list.html",
      chunks: ["list"]
    }),
    new CleanWebpackPlugin({
      // 清空 dist 目录，但是排除 dll 和 dll/* 的内容
      cleanOnceBeforeBuildPatterns: ["**/*", "!dll", "!dll/*"]
    }),
    new webpack.DllReferencePlugin({
      manifest: require("./dll/jquery.manifest.json")
    }),
    new webpack.DllReferencePlugin({
      manifest: require("./dll/lodash.manifest.json")
    })
  ]
};
