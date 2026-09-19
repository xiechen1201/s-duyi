# commit 工作流程

整个 React的工作流程可以分为两大阶段，render 阶段、commit 阶段。

render 阶段又分为 schedule、reconcile，render 阶段的行为是在内存中运行的，这意味着可能被打断，也可以被打断。

commit 阶段则是一旦开始就会同步执行，直到完成。

commit 阶段又分为三个阶段：

1、commitXXXEffects

每个子阶段的入口函数，finishedWork 或作为 firstChild 参数传入进去。

（代码）

这个函数的主要的工作就是将 firstChild 赋值给全局变量， nextEffect ，然后执行 commitXXXEffect_begin 方法。

2、commitXXXEffect_begin

向下遍历 FiberNode。遍历的时候会遍历直到第一个满足如下条件之一的 FiberNode：

- 当前 FiberNode 的子 FiberNode 不包含该子阶段对应的 flags 标记。

- 当前 FiberNode 不存在子 FiberNode。

接下来会对目标 FiberNode 执行 commitXXXEffect_complete 方法。

3、commitXXXEffect_complete

这个方法主要就是针对 flags 做具体的操作，主要包含以下三个步骤：

总结：每个子阶段都会以 DFS 原则来进行遍历，最终会在 commitXXXEffectOnFiber 中针对不同的 flags 进行不同的处理。

## BeforeMutation 阶段

BeforeMutation 阶段的主要工作发生在 commitBeforeMutationEffect_complete 中的 commitBeforeMutationEffectOnFiber 方法中。

相关代码如下：

（代码）

整个过程中主要出处理如下两种类型的 FiberNode：

- ClassComponent

- HostRoot

## mutation 阶段

对于 HostComponent，这个阶段主要就是对 DOM 元素进行增删改。

### 删除

删除 DOM 元素的操作发生在 commitMutationEffect_begin 方法中。首先会拿到 deletions 数组，然后遍历数组，删除每个元素。

DFS 向下遍历。

### 插入、移动

上面的删除操作是在 commitMutationEffect_begin 方法中进行的。而这个插入和移动则是在 commitMutationEffect_complete 方法中进行的。

### 更新

更新 DOM 元素最主要的工作就是更新对应的属性。执行的方法是 commitWork，相关代码如下：

（代码）

之前有讲过，变化的属性会以 key value 的相邻的形式保存在 fibernode.updateQueue 中，最终在 fibernode.updatequeue 里面所保存的要变化的属性就会在一个名为 updateDOMProperties 方法中被遍历，然后进行处理。

这里的处理主要是处理如下的四种数据：

当 mutation 阶段完成后，在进入 layout 阶段之前会执行如下的代码来完成 FiberTree 的切换：

（代码）

## Layout 阶段

有关 DOM 元素的操作，在 Mutation 阶段已经完成了。

在 layoput 阶段主要的工作集中在 commitLayoutEffectOnFiber 方法中，这个方法内部会针对不同类型的 FiberNode 执行不同的操作。

- 对于 classComponent，这个阶段会执行 componentDidMount/Update。

- 对于 FunctionComponent，这个阶段会执行 useLayoutEffect 的回调函数。

