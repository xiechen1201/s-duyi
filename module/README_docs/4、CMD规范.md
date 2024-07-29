# 4、CMD 规范

CMD 也就是公共模块定义规范

sea.js 实现 CMD 规范

在 CMD 中，导入和导出模块的代码，必须放在 define 函数的内部

```js
define(function (require, exports, module) {
  // 模块代码
});
```

最开始 require.js 没有实现上面的方式，后来 CMD 实现了，CMD 热度提升，后来 require.js 进行了升级，也支持了这样的写法

简单说，就是 AMD 实现了 AMD + CMD

CMD 也是加载了 JS 文件，但是加载完成后立马删除了，把内容都保存了内存中

CMD 中的 require 也是同步执行的，如果想用异步可以 require.async