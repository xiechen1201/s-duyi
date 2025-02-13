# Vue 运行机制

如何描述 UI？

UI 的信息：DOM 元素、属性、事件、层级关系。

如何使用 JS 描述这些信息？

使用 JS 对象描述。

```js
const obj = {
    tag: "h1",
    props: {
        id: "title",
        onClick: handler
    },
    children: [
        {
            tag: "span",
            children: "hello"
        }
    ]
};
```

这种方式虽然可以描述，但是比较麻烦。

用户书写模块 -》编辑器-》渲染函数-》得到 JS 对象（虚拟 DOM）

大多数情况模块比 JS 更加直观，但是某些时候 JS 的方式会更加灵活。

```html
<h1 v-if="level == 1"></h1>
<h2 v-if="level == 2"></h2>
<h3 v-if="level == 3"></h3>
```

```js
let level = 1;

const title = {
    tag: `h${level}`
};
```

## 编译器

将模版转化为渲染函数。

执行渲染函数得到 JS 对象形式的 UI 表达。

编译器的过程：

- 解析器

- 转换器

- 生成器

Vue3 除了基本的编译后，还做了很多优化。

## 渲染器

将虚拟 DOM 转换为真实的 DOM。

（伪代码的实现）

## 组件的本质

是一组 DOM 元素的封装。

## 响应式系统
