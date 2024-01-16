const path = require("path");

module.exports = {
    mode: "development",
    // entry: "./src/index.js" 会转换为下面的对象形式
    entry: {
        // 默认的配置
        // key 是 chunk 的名称
        // value 是入口模块（启动模块）
        main: "./src/index.js",
        // 可以配置多个 chunk
        login: "./src/login.js",
        // 配置 chunk 的多个入口模块，这两个模块都是启动模块
        // 最终生成的还是一个 bundle
        a: ["./src/a.js", "./src/index.js"]
    },
    output: {
        // path 必须是一个绝对路径，表示资源要放置的文件夹，默认是 /路径/xxx/dist
        path: path.resolve(__dirname, "target"),
        // filename 配置的是资源的文件名，资源非常多到底配置的是哪个资源的名字呢？
        // 资源来自于多个 chunk 的合并，chunk 的资源来自于模块合并的结果
        // 配置的是合并的 JS 的规则
        // 静态写法 "bundle.js" "js/bundle.js"
        // 动态写法 [name].bundle.js 如果 entry 有多个， filename 必须是动态的
        filename: "[name].bundle.[chunkhash].js"
    }
};
