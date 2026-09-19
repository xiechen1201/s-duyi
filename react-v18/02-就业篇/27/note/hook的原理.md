# hook的原理.md

## hook 内部介绍

react 中针对 hook 有三种策略，或者说三种类型的 dispatcher，分别是：

- HooksDispatcherOnMount，复杂初始化工作，让函数组件的一些初始化信息挂载到 Fiber 上

（代码）

- HooksDispatcherOnUpdate，函数组件更新的时候会执行该对象所对应的方法。此时 Fiber 上已经存储了函数组件的相关信息，这些 Hook 需要做的就是去获取或者更新维护这些 Fiber 的信息。

（代码）

- ContextOnlyDispatcher，和报错相关，防止开发者在函数组件外部调用 hook

（代码）

总结：

- mount 阶段，函数组件时进行初始化，那么此时调用的就是 mountXXX 对应的函数；

- update 阶段，函数组件进行状态的更新，调用的就是 updateXXX 对应的函数；

- 其他场景下（函数外调用 hook、if、for 等语句中调用 hook），调用的就是 throw 对应的函数；

当 FC（函数组件）进入到 Render 流程的时候，首先会判断是初次渲染还是更新，代码如下：

（代码）

判断了是 mount 还是 update 之后会给 ReactCurrentDispatcher.current 赋值对应的 dispatcher。赋值了不同的上下文对象，因此就可以根据不同上下文对象调用不同的方法。

假设有嵌套的 hook，那么此时的上下文对象就会指向 ContextOnlyDispatcher，执行 throw 抛出错误。

下面看一下 hook 的数据结构：

（hook 本周也是一个对象）

（代码）

需要注意 memoizedState 字段，因为 FiberNode 上也有这么一个字段，和 hook 对象上面的 memoizedState 存储的内容是不一样的。

- FiberNode.memoizedState：保存的是 Hook 链表里面的第一个链表；

- hook.memoizedState：保存的是某个 hook 自身的数据；

不同的类型的 hook，hook.memoizedState 所存储的内容也是不同的：

（列表）

## Hook 的执行流程

当 FC 进入 Render 阶段时候，首先会被 renderWithHook 函数处理执行：

（代码）

renderWithHook 会在每次函数组件触发时（mount、update），该方法就会清空 workInProgress.memoizedState 字段。

接下来判断这个组件是初始化还是更新，为 ReactCurrentDispatcher.current 赋值不同的上下文对象，之后调用 Component 方法来执行函数组件，组件内部书写的 hook 就会依次执行。

使用 useState 整个 hook 的执行流程：

（代码）

