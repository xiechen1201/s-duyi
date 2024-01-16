# 44 TreeShaking

压缩可以移除模块内部无效的代码。

tree shaking 可以移除模块之间的无效代码。

背景：一个模块导出了很多的东西，但是我们只会用到一部分，那么我们就可以通过 tree shaking 移除掉我们没有用到的代码。

```js
import { add } from "./my-math";

console.log(add(1, 2));
```

## 使用

Webpack2 开始就支持了 tree shaking。

只要是生产环境，那么 Webpack 就会默认开启 tree shaking。

## 原理

- 通过入口模块寻找依赖关系。

- 通过 ESModule 的模块导入语句进行判断

- Webpack 为什么选择 ESModule 模块语句进行判断？

  - ESModule 模块语句是静态的，在编译阶段就可以确定模块的依赖关系。

  - ESModule 是顶层模块，没有变量提升。

Webpack 的原则：保证代码正常运行，然后尽量 tree shaking

```js
import math from "./my-math";

console.log(math); // 如果不打印 math 对象就会把 sub 方法移除
console.log(math.add(1, 2));
```

这是因为担心对象内部有一些动态的内容。

## 使用第三方库

某些第三方库可能使用的是 commonJS，例如 lodash

对于这些库是无法使用 tree shaking 的。

```js
import { chunk } from "lodash";
console.log(chunk([1, 2, 3, 4, 5, 6, 7, 8], 3));
```

打包后仍然是把 lodash 的代码打包进来。

## 作用域分析

```js

```

## 副作用

tree shaking 的原则是必须保证代码的正常运行。

在 package.json 文件中有一个 sideEffects 属性，可以指定哪些代码是副作用代码。

可以更加大胆的对代码进行优化，进行 tree shaking

sideEffects 还可以配置问一个数组，数组表示哪些文件是含有副作用的。

```json
{
  // 表示 common 文件没有副作用，其他文件都有副作用
  "sideEffects": ["!src/common.js"]
}
```

## css tree shaking

Webpack 无法对 CSS 进程 tree shaking，因为和 ES6 没有关系

所以需要借助其他的插件来完成 purgecss-webpack-plugin

```js
module.exports = {
  plugins: [
    new PurgeCssPlugin({
      // 和 html 文件中的 CSS 选择器进行对比，没有用到的选择器就删除
      path: [path.resolve(__dirname, "public/index.html")]
    })
  ]
};
```

如何在 JS 中使用呢？

```js
const div = document.createElement("div");
div.className = "box";
```

结果依然会把 div 删除，所以需要把 JS 文件也加入进来

```js
module.exports = {
  plugins: [
    new PurgeCssPlugin({
      // 和 html 文件中的 CSS 选择器进行对比，没有用到的选择器就删除
      path: [
        path.resolve(__dirname, "public/index.html"),
        path.resolve(__dirname, "src/index.js")
      ]
    })
  ]
};
```

如果每个文件都进行匹配就会非常的麻烦，所以我们可以使用 glob 语法

```js
const globAll = require("glob-all");

// 无论多少个层级的 JS 文件都进行匹配
// 匹配 piblic 下面所有的 html 文件
const paths = globAll.sync([
  __dirname + "**/*.js",
  __dirname + "public/*.html"
]);
console.log(paths);
module.exports = {};
```

该库对 CSS module 是无效的，因为 CSS Module 返回的是转换后的类名，无法匹配到正确的内容