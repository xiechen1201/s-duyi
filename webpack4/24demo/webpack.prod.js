// 生产环境配置

const { CleanWebpackPlugin } = require("clean-webpack-plugin");

module.exports = {
    mode: "production",
    plugins: [new CleanWebpackPlugin()]
};
