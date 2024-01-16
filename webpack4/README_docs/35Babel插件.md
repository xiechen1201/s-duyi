# 35 Babel 插件

@babel/polyfill 已经过时，目前被 core-js 和 regenerator runtime 所代替。

如果同时配置了预设和插件，执行顺序：

- 插件先运行

- 插件是从前往后执行的

- 预设从后往前执行

通常情况下，preset-env 只会转换已经形成标准的语法，对于某些早期阶段的语法要单独使用插件。

```json
{
  "presets": [
    [
      "@babel/preset-env",
      {
        "useBuiltIns": "usage",
        "corejs": 3
      }
    ]
  ],
  "plugins": ["@babel/plugin-transform-runtime"]
}
```
