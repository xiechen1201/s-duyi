# NodeJS 中的模块化

ES模块化仍然处于试验阶段。

模块化要么是 commonjs，要么是 ES 模块化，不能混用。

默认情况下，都是 commonjs。

如果要使用 ESM，最近的 package.json 中的 type 设置为 module。

当使用 ES 模块化运行的时候，需要添加 --experimental-modules

```json
"scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "start": "node --experimental-modules index.js"
}
```

或者文件的后缀名更改为 .mjs

编写 ESM 的导出:

```js
export default 5;
export const a = 1;
```

不能再编写 commonjs 的导出：

```js
module.exports = 15;
// ❌module is not defined in ES module scope
```

不能混用！！！