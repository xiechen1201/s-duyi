# 3、AMD 规范

AMD 异步模块加载机制。

要依赖 require.js 文件

在 AMD 中，导入和导出模块的代码，都必须放在 define 函数中

```js
define([依赖模块列表], function(模块名称列表){
    // 模块代码
    return 导出的内容;
}
```

定义模块使用 define 函数，导入模块也使用 define 函数

AMD 还提供了类似 CommonJS 规范的写法：

```js
define(function(require, exports, module){
    const util = require("./util");
    // 模块代码
    module.exports = 导出的内容;
}
```
