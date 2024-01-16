const path = require("path");
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  // mode: "development",
  mode: "production",
  // devtool: "source-map",
  entry: {
    home: "./src/home.js",
    list: "./src/list.js"
  },
  output: {
    filename: "[name].[chunkhash:5].bundle.js"
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, "css-loader"]
      }
    ]
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: "./public/index.html",
      chunks: ["home"]
    }),
    new MiniCssExtractPlugin({
      // 配置的是 chunk 的名称
      filename: "[name].[chunkhash:5].css",
      // 配置的是分包 chunk 的名称
      chunkFilename: "common.[chunkhash:5].css"
    })
  ],
  // 优化项
  optimization: {
    // 分包配置
    splitChunks: {
      chunks: "all",
      maxSize: 102400,
      cacheGroups: {
        styles: {
          minSize: 0,
          test: /\.css/,
          minChunks: 2
        },
        vendors: {
          test: /[\\/]node_modules[\\/]/,
          priority: -10
        },
        default: {
          minChunks: 2,
          priority: -20,
          reuseExistingChunk: true
        }
      }
    }
  }
};
