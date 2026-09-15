# compleWork 工作流程

beginWork 的工作处理完成后就会进入到 compleWork 阶段，这个阶段属于归阶段。

和 beginWork 类似，compleWork 也会根据 wip.tag 区分对待，流程上面主要包括两个步骤：

- 创建元素或者标记元素的更新；

- flags 冒泡；

整体流程图如下：

（图片）

## mount 阶段

mount 流程中首先会通过 createInstance 创建 FiberNode 所对应的 DOM 元素：

（代码）

接下来会执行 appleAllChildren，这个方法的作用是将下一层的 DOM 元素插入到通过 createInstance 方法所创建的 DOM 元素中。

> appleAllChildren 创建子元素

（代码）

appleAllChildren 方法实际上就是在处理下一级的 DOM 元素，而且 appleAllChildren 里面的遍历过程，会更加复杂一些，会多一些判断，因为 FiberNode 最终形成的 FiberTree 的层次和最终的 DOMTree 的层次可能是存在区别的：

（代码）

在上面的代码中，从 FiberNode 的角度来看，Hello 和 Workd 是同层级的的，但是从 DOM 的角度来看，Hello 和 Span 是同层级的。因此从 FiberNode 中查找同层级 DOM 元素的时候，经常会涉及到跨 FiberNode 层级的查找。

接下来 completeWork 会执行 finalizeInitialChildren 方法，完成属性的初始化，主要包含以下几类属性：

该方法执行完成后，最终进行 flags 冒泡。

总结：mount 阶段执行的工作的流程如下：

## update 阶段

mount 完成的事属性的初始化，那么 update 完成的是对属性的更新标记。

hostcomponent 为例，原生元素，例如 div、span

updateHostComponent 的主要逻辑是在 diffProperties 方法中，这个方法会包含两次遍历：

- 第一次遍历主要是标记更新前有，更新后没有的属性，实际上也就是标记删除了的属性；

- 第二次遍历主要是标记更新前后存在变化的刷新，实际上也就是标记了更新了的属性；

（代码）

所有更新了的属性的 key 和 value 会保存在当前 FiberNode.updateQueue 里面，数据是以 key、value 作为数组相邻的两项进行保存的。

（代码）

## flags 冒泡

当整个 Renconciler 完成后会得到一颗完整的 WorkInProgress FiberTree，这颗 wipFiberTree 是由一颗一颗 FiberNode 组成的，这写 FiberNode 中有一些标记了 flags，有一些没有标记。

现在存在一个问题，如何高效的找到散落在 tree 中存在 flags 标记的 FiberNode？

那么此时就可以通过 flags 冒泡。

我们知道 completeWork 属于归阶段，整体流程是自下往上的，就非常适合用来收集副作用。

相关代码如下：

（代码）

这样的收集方式有一个好处，在渲染阶段听过任意一层级的 FiberNode.subtreeFlags 都可以快速确定该 FiberNode 以及子树是否存在副作用。

从而判断是否需要执行和副作用相关的操作。

早期 React 实际并没有使用 subtreeFlags 来通过 flags 冒泡来收集副作用，而是使用 EffectList（链表）来收集。

使用 subtreeFlags 有一个好处，就是能够确定某一个 FiberNode 它的子树的副作用。