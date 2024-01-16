const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const CompressionWebpackPlugin = require('compression-webpack-plugin');

module.exports = {
  mode: 'production',
  plugins: [new CleanWebpackPlugin(), new CompressionWebpackPlugin()],
};
