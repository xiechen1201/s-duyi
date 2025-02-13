# computed 面试题

computed 依赖 effect 函数。

- track：依赖收集

- trigger：触发更新

```js
computed(() => {
  return obj.foo + obj.bar
})
```

## computed 核心实现

1、参数归一化，统一为对象的形式，最终返回一个存取器对象

2、