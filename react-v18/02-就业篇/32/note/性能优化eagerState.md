# 性能优化 eagerState

本质上 React 是应用时的框架。调用优化相关的 api 内部是在命中 react 性能优化策略。

- eagerState

- bailout

（代码）

代码渲染结果：

- 首次渲染，父子组件都渲染

- 第一次点击，num = 1，父子组件都渲染

- 第二次点击，只有父组件渲染

- 第三次以及之后的点击，父组件也没有重新渲染

这个案例就涉及到 react 内部两种性能优化策略。

第二次点击的时候，子组件没有重新渲染，是命中了 bailout 策略，命中策略的组件会跳过 reconcil 过程，子组件不会进入 render 阶段。

第三次和之后的点击，父组件也没有重新渲染，是命中了 eagerState 策略，这是一种发生在触发状态更新时的优化策略，如果命中该策略，此次更新不会进入 schedule 阶段，更不会进入 render 阶段。

## eagerState 策略

该策略的逻辑其实很简单，如果某个状态更新前后没有变化，那么就可以跳过后续的更新流程。

state 是基于 update 计算出来的，计算过程发生在 render 的 beginwork，而 eagerState 则是将这个计算过程提前到 schedule 阶段之前执行。

该策略有一个前提条件，当前的 fiberNode 不存在待执行的更新，因为如果不存在待执行的更新，那么当前的更新就是第一个更新。

那么计算出来的 state 即使有变化，也可以作为后续更新的基础 state 来使用。

（示例）

比较奇怪的是第二次点击，在第二次点击之前 num 已经是 1，但是父组件仍然重新渲染了一次，为什么这种情况没有命中 eagerState 策略？

FiberNode 分为 current 和 workInProgress 两种类型。

在代码判断中，实际上会对 current 和 workInProgress 都进行判断，判断条件为两个 Fiber Fiber.lanes 都必须为 NoLanes。