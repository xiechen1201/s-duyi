const webpack = require("webpack");
const path = require("path");

module.exports = {
  mode: "production",
  // 配置公共模块进行的入口
  entry: {
    jquery: ["jquery"],
    lodash: ["lodash"]
  },
  // 配置公共模块的输出位置
  output: {
    filename: "dll/[name].js",
    library: "[name]" // 每个 bundle 暴露的全局变量名
  },
  plugins: [
    new webpack.DllPlugin({
      path: path.resolve(__dirname, "dll", "[name].manifest.json"),
      name: "[name]"
    })
  ]
};
