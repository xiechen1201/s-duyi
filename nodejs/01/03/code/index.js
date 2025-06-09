/* require('./a'); */

/* console.log(require); */

// 检查模块是否存在
/* console.log(require.resolve("./a")) */

/* require('./a');
console.log(require.cache); */

console.log(require('./myModule'));

/* console.log(require.extensions('/03/code/myModule.js')); */

/* // 模拟写法
function require(mdulePath) {
    // 1、将 modulePath 转换为绝对路径，/Users/xiechen/Documents/code-personal/s-duyi/nodejs/03/code/myModule.js

    // 2、判断是否该模块已存在缓存，也就是 require.cache['模块的 ID']
    if (require.cache['模块的 ID']) {
        return require.cache['模块的 ID'];
    }

    // 3、读取文件的内容

    // 4、包裹到一个函数内，这就是为什么可以直接使用这些变量
    function __temp(module, exports, require, __dirname, __filename) {
        console.log('当前模块的路径', __dirname);
        console.log('当前模块的文件', __filename);

        this.m = 5;

        exports.c = 3;
        module.exports = {
            a: 1,
            b: 2
        };
    }

    // 5、创建 module 对象
    module.exports = {};
    const exports = module.exports;
    __temp.call(module.exports, module, exports, require, __dirname, __filename);
}
*/
