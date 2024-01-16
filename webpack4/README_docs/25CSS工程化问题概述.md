# 25 CSS 工程化问题概述

## CSS 的问题

项目大了之后不仅 有 JS 代码需要细分，CSS 代码也需要细分

CSS 没有太多的演化（本章和 Webpack 无关）。

### 类名冲突

```css
.xxx .xxx .xxx > .test {
}
```

书写 CSS 样式的时候，如果结构太深，就需要一级一级的选择器

问题：

1、层级太深不利于编写、阅读、压缩、复用

2、太浅的层级容易导致类名冲突

一旦样式多了，问题就越来越严重

### 重复样式

```css
.page1 .box {
    background: #f40;
}

.page2 .box {
    background: #f40;
}
```

颜色的值到处重复，如果更改就需要到处更改

### CSS 文件细分的问题

导致 CSS 文件拆分的太细

真实运行环境下，希望文件越少越好（减少网络请求）

## 如何解决？

### 类名冲突

1、命名约定

2、css in js

```js
var styles = {
    color: "#f40",
    backgroundColor: "#d30",
    fontSize: "14px"
};

module.exports = styles
```

完全打破对传统 CSS 开发的感觉。

3、css module

### 解决重复样式问题

1、css in js

2、预编译器

一套新的 CSS 语法，支持变量、函数等高级语法。然后编译为标准的 CSS 代码。

例如 less、sass

### 解决 css 文件细分的问题

