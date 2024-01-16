# 33 Babel 的安装和使用

本文和 Webpack 无关。

## 简介

不同版本的浏览器对 ES 的兼容程度是不一样的，导致了要针对不同的浏览器进行兼容写法。

Babel 是一个编译器，可以把不同标准书写的代码，编译为统一的，能够兼容的代码。

本身就是分析语法，依托于插件进行转换。

## 安装

npm i -D @babel/core @babel/cli @babel/preset-env

## 使用

```bash
# 按照文件进行编译
$ npx babel js/index.js -o js/bundle.js

# 按照文件夹进行编译
$ npx babel js -d dist

# 监听文件
$ npx babel js -d -w dist
```

## 配置文件

本身没有任何操作，需要插件和预设进行转换

配置文件 .babelrc

```json
{
  "presets": [],
  "plugins": []
}
```
