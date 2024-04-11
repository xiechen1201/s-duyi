# 生命周期

## 什么是生命周期？

组件诞生到销毁经历的一系列过程。

生命周期钩子函数是「类组件」独有的东西。

## constructor()

- 主要做一些初始化的状态;

- 内部不要调用 this.setState()，会产生报错；

```jsx
constructor() {
  super();

  this.state = {
    value: ''
  };

  // 错误
  this.setState({
    value: 1
  });
}
```

- 每个组件只执行一次 constructor；

## render()

- 每个组件必须包含一个 render 方法；

- 返回一个虚拟 DOM，挂在到虚拟 DOM 树山，最终解析为真的的 DOM；

- render 不只执行一次，只要数据更改就会重新执行。

- 不要在 render 里面修改 state，会产生无限的递归。

- 

## componentDidMount()

- 类似于 Vue 中的 mounted 钩子函数；

执行顺序：constructor ==> render ==> componentDidMount

- 只会执行一次；

- 内部可以操作 ajax 请求，定时器等等；

## componentWillUnmount()

- 类似于 Vue 中的 beforeDestroy 钩子函数；

- 通常在内部销毁一些组件的依赖资源；

## componentDidUpdate(prevProps, prevState)

- 类似于 Vue 中的 updated 钩子函数；

先执行 render，再执行 componentDidUpdate

- 