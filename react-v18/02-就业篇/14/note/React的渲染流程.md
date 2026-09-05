# React的渲染流程

现代前端框架总结为一个公式：

UI = f(state)

这里的 UI 是指虚拟 DOM 对 UI 的描述。

上面的公式还可以进行拆分：

- 根据自变量 state 变化酸楚 UI 的变化；

- 根据 UI 的变化执行具体的宿主环境 API；

对应的公式：

```js
const state = reconcile(update); // 通过 reconcile 计算出最新的状态
const ui = commit(state); // 根据 state 计算出的结果渲染 UI
```

对应到 React 中就是两个大阶段：

- render 阶段：调和虚拟 DOM ，计算出要渲染的虚拟 DOM

- commit 阶段：根据虚拟 DOM 渲染具体的 UI

每个阶段对应不同的组件：

（图片）

- 调度器 Scheduler：调度任务，对任务进行排序优先级，优先级高的任务线进入到 Reconciler 中；

- 协调器 Reconciler：生成 Fiber 对象，收集副作用，找出哪些节点发生了变化，打上不同的 flags，著名的 diff 算法也是在这个架构组件中执行的；

- 渲染器 Renderer：根据协调器计算出的虚拟 DOM，同步的渲染节点到视图上；

（示例）

当用户点击按钮时，首先 Scheduler 进行任务的协调，Render 阶段中的工作流程是可以被随时中断的，例如：

- 更高优先级的任务

- 当前的 time slice 没有剩余的时间

- 发生了其他的错误

Render 阶段的工作是在内存中进行的，不会更新宿主环境 UI，因此这个阶段即使工作流程反复被中断，用户也不会察觉不完整的 UI。

当 Scheduler 调度完成后，把任务交给 Reconciler，Reconciler 就需要计算出新的 UI，最后就由 Renderer 同步渲染更新操作。

（图片）

## 调度器

React16 之前采用后的是 Stack 结构，所有任务只能进行同步执行，无法被中断，这就导致浏览器可能会出现掉帧的现象，表现出卡顿。

React 为了解决这个问题，从 React16 版本开始在架构上进行了两个大更新：

1、引入 Fiber，使用链表描述 UI

2、新增了 Scheduler，有了优先级的概念

Scheduler 在浏览器原生 API 实际上是存在类似实现的，那就是 requestIdleCallback。

虽然浏览器有类似的 API，但是 React 团队没有使用这个 API，因为这个 API 存在兼容性问题。因此 React 团队自行实现了一套机制，这个就是 Scheduler。

[github](https://github.com/react/react/blob/main/packages/scheduler/README.md)

## 协调器

协调器是 Render 阶段中的第二个阶段，类组件或者函数组件就是在这个阶段被调用的。

根据 Scheduler 的调度结果不同，协调器的起点可能是不同的：

- performSyncWorkOnRoot 同步更新流程

- performConcurrentWorkOnRoot 并发更新流程

（代码片段）

新的架构使用 Fiber（本质是对象）来描述 DOM 结构，最终要形成一棵 Fiber tree，只不过是链表描述的树结构。

WorkInProgress 指的是当前的 FiberNode。

performUnitOfWork() 会创建下一个 FiberNode，并且还会将已创建的 FiberNode 连接起来（child、return、sibling 属性），从而形成一个链表结构的 Fiber tree。

如果 WorkInProgress 为 null，说明已经没有下一个 FiberNode，也就是说吗整棵树 Fiber Tree 构建完成。

上面两个方法唯一的差异就是是否掉用了 shoudleYield，该方法表示是否可以中断。

performUnitOfWork 在创建下一个 FiberNode 的时候整体的工作流程分为两个大块：

- 递阶段

- 归阶段

递阶段：

从 hostRootFiber 开始向下，以深度优先为原则进行遍历，遍历到的每一个 FiberNode 执行 beginWork() 方法。beginWork() 方法会根据传入的 FiberNode 创建下一级的 FiberNode。

存在两种情况：

- 下一级只有一个元素，beginWork() 方法会创建对应的 FiberNode，并于 workInProgress 链接；

（代码片段）

- 下一级存在多个元素，此时 beginWork() 方法会依次创建所有的子 FiberNode，通过 sibling 链接到一起，每个子 FiberNode 也会和 workInProgress 链接；

（代码片段）

由于采用的是深度优先的原则，因此无法再往下执行的时候，会进入到归阶段。

归阶段：

调用 completeWork() 方法，来处理 FiberNode，做一些副作用的收集。

当某个 FiberNode 执行 completeWork() 后，如果存在兄弟元素，就会进入到兄弟元素的递阶段。如果不存在兄弟元素，就会进入父 FiberNode 的归阶段。

（代码片段）

## 渲染器

Renderer 工作的阶段是 commit 阶段，这个阶段会把各种副作用，commit 到宿主环境的 UI 中。

相较于之前的 Render 阶段可以被打断，commit 阶段一旦开始就会同步执行，直到完成渲染工作。

整个渲染过程可以分为3个子阶段：

（图片）