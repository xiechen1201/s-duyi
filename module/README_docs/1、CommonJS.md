# CommonJS

CommonJS 是 NodeJS 的模块化规范，所以我们需要安装 NodeJS。

## 浏览器

在浏览器中运行 JS 文件需要使用 html 文件进行引入

在 NodeJS 中可以直接通过 Node 命令运行 JS 文件

```bash
$ node index.js
```

NodeJS 一次智能运行一个 JS 文件，这个文件被称为入口文件。

NodeJS 遵循的依然是 ESCAM 的标准，仍然可以使用 ECMA 的语法或者 API，但是脱离了浏览器的环境，所以不能使用浏览器的对象或者方法。

因为大部分开发者都是从浏览器转换到 NodeJS 中的，所以 NodeJS 提供了一些常用的 API，例如 setTimeout，setInterval，console 等。

开发时候，一个启动文件肯定是不够的，所以需要使用模块化进行多个文件配合使用。

模块化两个重要的概念：模块的导出、模块的导入

## 模块的导出

什么是模块？

就是一个 JS 文件，该文件实现一些功能，并隐藏了自己内部的实现，并暴露出一些功能让其他模块使用

隐藏：自己内部的实现

暴露：希望外部使用的接口

```js
// util.js
let count = 0;

function add() {
  count++;
}

module.exports = {
  add
};
```

# 模块的导入

当需要使用一个模块的时候，使用的是某个模块暴露出来的部分

```js
const module = require("./util");
```

CommonJS 规定使用 exports 导出模块，require 导入模块：

1、JS 文件存在 exports 或者 require，那么该 JS 文件就是一个模块

2、模块内所有代码都说隐藏代码，包括全局变量、全局函数，都不应该对全局的环境造成污染

3、模块要暴露模块需要使用 exports 导出，exports 是一个空对象，为该对象添加属性即位要导出的模块

4、模块的导入使用 require 导入，require 返回的是一个对象，对象中包含 exports 暴露的属性

解决了全局变量污染的问题。

NodeJS 中导入模块，使用相对路径，必须使用 ./ 或者 ../ 开头，如果不使用相对路径，则表示到 node_modules 文件目录中查找

## NodeJS 对 CommonJS 的实现

1、为了保证高效的执行，它只会加载必要的模块。只有执行到 require 函数的时候才会加载并执行模块

简单理解：require 函数执行，寻找路径文件，执行 require 文件，最后暴露返回值为 require 函数

2、CommonJS 是规范，Node 安装这个规范实现了模块化，为了隐藏模块中的代码，NodeJS 执行模块的时候，会把代码放在函数中必须，以此来保证不污染全局变量

```js
(function () {
  // 模块代码
})();
```

3、为了保证导出模块的内容，在模块开始执行的时候，初始化了一个 module.exports={} 的对象，为了方便开发者导出，又声明了一个变量 exports = module.exports

大致逻辑，非真实实现！

```js
(function (module) {
  module.exports = {};
  let exports = module.exports;
  // 模块代码
  return module.exports;
})(module);
```

所以我们可以使用两种方式：exports、module.exports

所以，不能使用 exports 直接赋值为一个对象，这会破坏 exports 和 module.exports 的引用！！！

4、为了避免反复安装一个模块，NodeJS 默认开启了模块缓存，如果加载已经被加载过的模块，则会自动使用之前的导出结果。

假如 a.js 文件导入了 utils.js 文件，utils 文件会执行一次，如果 a 文件再 require , utils 文件将不再执行，而是使用缓存

这个时候 b 文件也导入 util 文件，utils 文件依然不会被执行，也是使用缓存
