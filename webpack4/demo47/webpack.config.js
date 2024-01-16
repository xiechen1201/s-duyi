const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const webpackBundleAnalyzer = require('webpack-bundle-analyzer');
const CompressionWebpackPlugin = require('compression-webpack-plugin');

module.exports = {
  mode: 'production',
  plugins: [
    new CleanWebpackPlugin(),
    new webpackBundleAnalyzer.BundleAnalyzerPlugin({
      analyzerMode: 'static',
    }),
    new CompressionWebpackPlugin({
      // filename: ""
      // test: /main\.js/ // 只针对哪些文件进行压缩
    }),
  ],
};
