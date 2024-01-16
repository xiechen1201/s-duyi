const webpack = require("webpack");

module.exports = {
    mode: "development",
    devtool: "source-map",
    plugins: [
        // 定义常量
        new webpack.DefinePlugin({
            PI: "Math.PI",
            VERSION: "'1.0.0'",
            DOMAIN: JSON.stringify("duyi.com")
        }),
        new webpack.BannerPlugin({
            banner: `hash:[hash]
            chunk:[chunkhash]
            name:[name]
            auther:xiechen`
        }),
        new webpack.ProvidePlugin({
            $: "jquery"
        })
    ]
};
