const loaderUtils = require("loader-utils");

module.exports = function (sourceCode) {
    // sourceCode 为源代码字符串
    console.log("loader 执行了！");

    // 运行 laoder 函数的时候，形成 this 上下文对象
    // this 对象很大，解析参数笔记麻烦，我们可以使用 loader-utils 库
    const options = loaderUtils.getOptions(this);
    console.log(options);

    return sourceCode.replace("变量", options.changeVar);
};
