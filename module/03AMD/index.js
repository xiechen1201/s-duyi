console.log("index.js");

// 相对于入口文件的路径
define(["a"], function (ModuleA) {
  // 当 a.js 文件加载完成后再运行该函数
  // 也解决了污染全局变量的问题
  console.log(ModuleA);
});
