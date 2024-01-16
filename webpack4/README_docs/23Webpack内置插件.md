# 23Webpack 内置插件

内置插件就是不需要安装就可以使用的插件

内置插件都是类似的用法

```js
const webpack = require("webpack");
new webpack.plugin(options);
```

## DefinePlugin

全局定义常量

## BannerPlugin

为每个 chunk 文件添加一行注释

## ProvidePlugin

自动加载模块，不需要到处 import 或者 require

把 jquery 模块导入，放在变量 $ 中

```js
new webpack.ProvidePlugin({
    $: "jquery"
});
```
