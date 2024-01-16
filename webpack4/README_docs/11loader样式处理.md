# 11 loader 样式处理

为什么要处理样式？

传统的都是 index 导入 css 文件

实际上，我们使用构建工具，不仅仅希望对 js 有更加优雅的处理方式，例如 ts ，交给 webpack 转换为 js 文件，

同样希望对 css 文件也能有更好的处理方式，例如 css 模块化， css 压缩， css 自动添加前缀

希望 webpack 把样式也当模块进行打包处理

打包的时候是通过入口文件打包的，所以入口文件中需要引入 css 文件

```js
require("./assets/index.css");
```

一般是不能导入 css 文件的，只能导入 js

但是 Webpack 会把这行代码进行解析，认为 index.css 就是一个模块，然后转换为 AST

但是 css 文件不能被解析，所以需要使用 loader 进行解析

loader 把 css 文件文件处理为 JS 代码，返回一个可以被解析为 AST 的 JS 代码