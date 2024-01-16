class MyPlugin {
    apply(compiler) {
        // console.log("插件运行了！")
        // 名称随便写，主要是为了调试
        compiler.hooks.done.tap("MyPluginTest", function (compilation) {
            console.log(compilation)
        });
    }
}

module.exports = MyPlugin;
