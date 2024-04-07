console.log(require('./myModule'));

function myRequire(modulePath) {
  // 1. 将 modulePath 转化为绝对路径
  // 2. 判断模块是否具有缓存 require.cache[modulePath的绝对路径]
  // 3. 如果有直接返回结果
  // 4. 如果没有则去读取文件的内容
  // 5. 包裹到一个函数内
  function _temp(module, exports, require, __dirname, __filename) {
    // 模块内的代码，这就是为什么可以直接使用 __dirname, __filename，因为这些都是函数的参数
  }
  // 6. 创建 module 对象
  // 7. 调用函数
  module.exports = {};
  const exports = module.exports;
  _temp.call(module.exports, module, exports, require, module.path, module.filename);
  // 所以默认的情况下，this===module.exports===exports
}
