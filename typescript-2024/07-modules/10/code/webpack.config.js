const path = require("path");

/**
 * @type {import {Configuration}.Configuration}
 */
module.exports = {
    mode: "development",
    entry: path.resolve(__dirname, "./src/index.ts"),

    output: {
        path: path.resolve(__dirname, "./dist"),
        filename: "[name].[fullhash:6].bundle.js",
        clean: true
    },

    module: {
        rules: [
            {
                test: /\.ts$/,
                use: [
                    {
                        loader: "ts-loader",
                        options: {
                            // 仅仅是转换代码
                            transpileOnly: true
                        }
                    }
                ],
                exclude: /node_modules/
            }
        ]
    },

    resolve: {
        extensions: [".ts", ".js"]
    }
};
