# beginWork 工作流程

Reconciler 协调器是 Render 阶段的第二阶段工作，整个工作可以分为递和归两个部分。

递：beginWork

归：completeWork

beginWork 方法主要是根据传入的 fiberNode 创建下一级的 fiberNode。

整个 beginWork 方法的执行流程如下：

（图片）

首先在 beginwork 中会判断当前的流程是 mount（初次渲染）还是 update 更新，判断的依据就是 currentFiberNode 是否存在。

（代码）

如果是 update，接下来会判断 wipFiberNode（后缓冲区）是否可以复用，如果不可以复用，那么 update 和 mount 的流程大体上一致：

- 根据 wip.tag (workInProgress.tag) 进行不同的分支处理；

- 根据 reconcil 算法，生成下一级的 FiberNode（Diff 算法）

- 无法复用的 update 流程和 mount 流程基本一致，主要的区别是是否会生成带副作用标记的 flags 的 FiberNode。

beginWork 方法的代码结构如下：

（代码）

关于 tag 在源码中定义了 28 种 tag：

（代码）

不同的 FiberNode 节点有不用的 tag。

根据不同的 tag，处理完 FiberNode 之后，根据是 mount 还是 update，进行不同的方法处理。

- mount：mountChildFibers

- update：reconcileChildFibers

上面两个方法实际上都是一个名为 ChildReconciler 的方法的返回值：

（代码）

也就说在 ChildReconciler 方法内，shouleTrackSideEffects 是一个布尔值。

- false 表示不追踪副作用，不做 flags 标记，因为是 mount 标记；

- true 表示追踪副作用，做 flags 标记，因为是 update 标记；

ChildReconciler 方法内部就会根据 shouleTrackSideEffects 来做一些不同的处理：

（代码）

可以看到在 beginWork 方法内部也会做一些 flags 标记，这些标记主要和元素的位置有关系。

- 标记 childDeletion，表示删除；

- 标记 Placement，表示插入/移动；