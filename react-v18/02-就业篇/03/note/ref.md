# ref

## 过时的 API

refs 相当于回归到了 jQuery 时代，命令式编程。现代框架的特点是声明式、响应式。

## createRef API

## ref 转发

函数组件不能使用 ref 属性。

## useRef 和 useImperativeHandle

React.createRef 和 ref 的区别：

函数组件重新渲染的时候会重新创建 ref，而 useRef 不会。

```js
const inputRef1 = React.createRef();
const inputRef2 = useRef();
```

useRef 还可以传递一个初始值，这个初始值在组件的整个生命周期内保持不变。

useImperativeHandle 一般适合 React.fowwardRef 一起使用，用于自定义暴露给父组件的实例值。