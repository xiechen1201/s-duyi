# 02 webpack 的安装和使用

Webpack 能帮我把开发时候写的很爽的代码「转换为」运行时很爽的代码

在 Webpack 中一切皆是模块！

通过入口文件 =》 分析依赖关系（import、require） =》解析、压缩、合并 =》生成运行时态的文件

浏览器上运行的就是运行时代码。

Webpack 的特点：

1、为前端工程化而生

2、简单易用

3、强大的生态

4、打包过程基于 NodeJS

5、基于模块化（import、require）打包出来的文件，既不是 CommonJS 也不是 ES6 Module，而是自己实现的函数

## Webpack 的安装

- webpack-cli 运行 webpack 的 CLI 命令，可以调用 webpack 的 api 来完成构建

- webpack 核心包，提供了相关的 api 

推荐使用本地安装，因为每个项目依赖的版本可能不一样

```bash
$ npm i -D webpack@4 webpack-cli@3
```

运行

```bash
$ npx webpack
```

默认把 src/index.js 文件作为入口文件，打包到 dist/main.js 文件中

指定打包模式：

development 开发（方便调试）

production 生产

```bash
$ npx webpack --mode=development
```
