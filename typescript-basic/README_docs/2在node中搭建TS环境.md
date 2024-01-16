# 2 在 node 中搭建 TS 环境

## 安装 TypeScript

```bash
$ npm install -D typescript
```

如果是全局安装的话，包里包含一个 tcs 的编译工具，这样就可以随时随地的使用了。

编译 TS 文件：

```bash
$ npx tsc ./src/02/index.ts
```

默认情况下，TS 会做出下面几种假设：

- 假设当前的执行环境是 DOM 浏览器

- 如果代码化没有使用模块化语句（import、export），便认为该代码是通过 script 全局执行的。

- 编译的目标代码是 ES3，做到了最大的兼容性

改变上面的假设：

- 使用 TS 命令行的时候加上选项参数

- 使用 TS 的配置文件，来更改编译选项

## TS 的配置文件

1、手动创建一个 tsconfig.json 文件

2、使用 `npx tsc --init` 生成配置文件

使用了配置文件后，使用 tcs 编译文件的时候，不可以跟文件名，否则会忽略配置文件。

因为 lib 属性没有 node 的环境（有 dom 的环境），就导致了 console.log(1); 会报错，因为现在去除了浏览器环境又不是 node 环境，不知道有 console 这个全局对象。

如何处理？

应该加入一些 node 环境的全局变量，但是 lib 不能配置，这个时候就需要安装 @types/node

@types 是一个 ts 官方的类型库，其中包含了很多对 JS 代码的类型描述。

> 就是编写 TS 代码的时候，可能要使用第三方的库（axios、lodash、jquery），但是这些第三方库不是使用 TS 编写的，而是 JS，现在的问题就是 TS 虽然可以使用 JS 的代码，但是使用 JS 库时候没有类型检查，这个时候就可以到 @types/ 下找一下没有对应的 ts 类型库

> 例如 jquery 就是使用 JS 写的，没有类型检查，安装 @types/jquery，为 jquery 添加类型定义，$ 是什么类型...

> node 环境中 node 的代码也是 JS 写的，所以通过 @types/node 添加 node 的类型定义，浏览器环境因为 TS 已经进行了支持所以不需要安装了

## 使用第三方库简化流程

ts-node：将 ts 代码在内存中进行编译，同时完成运行