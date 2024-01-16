const path = require("path");

module.exports = {
    mode: "development",
    module: {
        rules: [
            {
                test: /\.css$/,
                use: "./loaders/style-loader"
            },
            {
                test: /\.(png|jpg|jpeg|gif)$/,
                use: {
                    loader: "./loaders/img-loader",
                    options: {
                        limit: 3000, // 3000字节以内使用 base
                        filename: "[name]-[contenthash:5].[ext]",
                    }
                }
            }
        ]
    }
};
