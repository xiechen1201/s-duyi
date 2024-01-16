# 26 使用 Webpack 拆分 CSS

CSS 不再放在 public 完全作为静态资源，而是作为一个模块进行导入使用

```js
import banner from "./css/banner.css";
import pager from "./css/pager.css";
```

默认肯定会报错，因为无法对 CSS 代码进行 AST 语法分析

Webpack 本身可以读取 CSS 文件，但是无法当作 JS 来进行 AST 语法分析，导致错误

需要一个 Loader 把 CSS 代码转换为 JS 代码

1、css-loader css 代码转换为 JS 代码

原理简单理解就是把 css 代码当作字符串导出。

可以拿到返回的结果：

```js
import common from "./style/common.css";

console.log(common);
console.log(common.toString());
```

总结 css-loader 做了什么？

1、把 CSS 文件内容作为字符串导出

2、把其他的依赖作为 require 导入，让 Webpack 进行分析

## style-loader

css-loader 导出的字符串有啥用呢？

dist 下新建一个 HTML 文件，导入 main.js 文件发现样式并没有生效

只是导出了 CSS 代码，并没有把 CSS 代码插入到页面中

剩下的工作需要交给其他的 Loader 或者 Plugin 来做

style-loader 可以把 css-loader 的代码进一步处理，加入到页面元素中

```js
{
        test: /\.css$/,
        use: ["style-loader", "css-loader"]
      }
```

先交给 css-loader 再交给 style-loader