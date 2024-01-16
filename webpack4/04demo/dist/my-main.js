// 合并两个模块
/* 
    src/index.js
    src/a.js
*/

// 该对象保存了所有的模块，和模块对应的代码
(function (modules) {
    // 用于缓存模块的导出结果
    var moduleExports = {
        // 'src/a.js': {num: 1, add: fun}
    };

    // 执行入口模块
    // moduleId 就是模块的路径
    function __webpack_require__require(moduleId) {
        // 检查是否存在缓存
        if (moduleExports[module]) {
            return moduleExports[module];
        }

        var func = modules[moduleId];
        var module = {
            exports: {}
        };

        // 运行模块
        func(module, module.exports, __webpack_require__require);
        // 得到模块的导出结果
        var result = module.exports;
        // 缓存模块导出的结果
        moduleExports[moduleId] = result;

        return result;
    }

    __webpack_require__require("src/index.js");
})({
    "src/a.js": function (module, exports) {
        let num = 0;
        function add() {
            return num++;
        }

        module.exports = {
            num,
            add
        };
    },
    "src/index.js": function (module, exports, require) {
        console.log("index module");

        var a = require("src/a.js");
        console.log(a);
    }
});
