const path = require("path");

module.exports = {
    mode: "development",
    // 模块
    module: {
        // 模块的匹配规则
        rules: [
            // 规则1
            // 规则2，从下往上看，先看规则2
            {
                // 正则表达式，匹配模块的路径，如果匹配成功，就要使用对应的 loader
                test: /index\.js$/,
                // 要使用哪些加载器
                use: [
                    // 每一个加载器的使用是一个对象或者字符串
                    // loader 的执行顺序也是从下到上执行的，也就是先执行 test3 最后执行 test1
                    {
                        // 表示加载器的loader, webpack 会自动加载
                        loader: "./loader/test-loader",
                        // 给加载器传参,自行规定
                        // 还可以通过路径传递参数 ?testParams=123(我没成功)
                        options: {
                            changeVar: "var"
                        }
                    }
                    // loader 没有参数，可以直接写为一个字符串
                    // "./loader/test2-loader"
                    // "./loader/test3-loader"
                ]
            }
        ]
        // 是否不要解析某个配置
        // noParse:
    }
};
