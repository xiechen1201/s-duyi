# 参数装饰器

多个文件存在关系就会涉及到模块化，TS 的模块和 JS 的模块化区别不是很大。

ts 配置的文件：

- target 输出后文件 ES 的版本。默认为 ES5。

- module 模块化方案。如何 target 是 ES5，默认是 commonjs。否则是 ESM。详见：https://www.typescriptlang.org/tsconfig/#module