const path = require("path");

module.exports = {
    mode: "development",
    output: {
        library: "abc",
        libraryTarget: "umd"
    },
    target: "node",
    module: {
        noParse: /jquery/
    },
    resolve: {
        modules: ["node_modules", "abc"],
        extensions: [".js", ".jsx", ".ts", ".tsx"],
        alias: {
            "@": path.resolve(__dirname, "./src")
        }
    },
    externals: {
        jquery: "$",
        lodash: "_"
    },
    stats: {
        colors: true
    }
};
