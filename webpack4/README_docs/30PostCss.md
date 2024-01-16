# 30 PostCss

本课程和 Webpack 无关

## 什么是 PostCss？

PostCSS 本身没做什么事，功能都需要插件去处理

流程：

1、PostCSS 解析代码转换为 AST 语法树

2、依次交给 Plugin 进行处理

3、把代码转换为字符串

整个流程类似 Webpack，只做 AST 分析，剩下全部由插件完成。

## 安装

```bash
$ npm i postcss -D
```

```js
// 通过代码的方式使用 postcss
render("cssCode", function (content) {
  content.css; // 编译后的css
});
```

```bash
$ npm i postcss-cli -D
```

它会调用 postcss 中的 api

```bash
$ postcss 源文件 -o 输出文件
```

## 配置文件

和 Webpack 一样拥有自己的配置文件，运行命令的时候会读取配置文件进行编译

## 插件

本身没有什么作用，需使用插件来帮助我们完成某些事情

- postcss-preset-env

1、安装

2、配置

3、配置兼容的浏览器范围

    3.1 不推荐

    3.2 推荐，因为某些插件也会读取这个文件，所以这个文件是通用的表达方式

    3.3 推荐，在 package.json 文件内添加

4、browserlist 是一个数组

- postcss-apply

- postcss-color-function

- postcss-import

```css
@import "./test.pcss";
```

- stylelint