# useRef

## useRef 的阶段

ref 表示 reference 引用的缩写。

任何被引用的数据都可以保存到 ref 上，在 react 中出现过 3 种 ref 引用模式：

- String 类型（不推荐使用）

- 函数类型

- 对象类型 {current: T}

目前关于创建 ref，类组件推荐使用 createRef，函数组件推荐使用 useRef。

useRef 基本用法：

（代码）

1、mount 阶段

这个阶段调用的是 mountRef，代码如下：

（代码）

得到 hook 对象，这个对象上的 memoizedState 会缓存键为 current 的对象 {current: initialValue}，之后向外部返回这个对象。


2、update 阶段

## ref 的工作流程

ref 创建之后会挂在 HostComponent 或者 ClassComponent 上，形成 ref props，例如：

（代码）

整个 ref 的工作流程分为两个阶段：

- render：标记 ref flag，

- commit：根据所标记的 ref flag，执行 ref 相关的操作

（图片）

图片中 markRef 表示标记 ref，相关代码如下：

（代码）

有两种情况会进行标记 ref：

- mount 阶段，并且 ref props 不为空

- update 阶段，并且 ref props 发生了变化

标记 ref 后，来到了 commit 阶段，会在 Mutation 子阶段，执行 ref 的删除操作，删除旧的 ref。

（代码）

## 失控

当我们使用 ref 保存对 DOM 的引用时，就有可能会造成 ref 的失控。

所谓 ref 的失控，就是指开发者通过 ref 操作了 DOM，但是这个行为应该是由 react 接管的，两者产生了冲突，这种冲突称为 ref 的失控。

示例：

（代码）

代码中操作 3 是不推荐的。

React 最为一个视图层框架，接管了大部分和视图相关的操作，这样开发者可以专注于业务上面的开发逻辑。

上面的三个操作中，前面两个并没有被 react 接管，所以当产生这样的操作时，可以百分百确定来自于开发者的行为。但是操作 3 并不能确定这个操作究竟是 react的行为还是开发者的行为，甚至两者会产生冲突。

（示例）

## ref 失控的防治

防：

高阶组件内部是无法将 ref 直接指向 ref 的，需要进行 ref 的转发。通过 forwardRef 进行 ref 的转发。将 ref 转发的这个操作，实际上就将 ref 失控的范围控制在了单个组件内，不会出现跨域组件的 ref 失控。

因为是手动的进行 ref 的转发，所以发生 ref 失控的时候能够更加容易的进行错误的定位。

治：

useImperativeHandle 这个 hook 可以向父组件传递自定义的引用值：

（代码）

上面的代码中，我们通过 useImperativeHandle 来定制了 ref 所引用的内容，那么在外部开发者只能拿到提供的内容。

（代码）