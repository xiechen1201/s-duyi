# Fiber 双缓冲

## 对 Fiber 的理解

可以从三个维度来理解：

1、是一种架构，称为 Fiber 结构

2、是一种数据类型（链表）

3、动态的工作单元

### Fiber 结构

React16 之前使用的是 Stack Reconciler，那个时候的 React 架构被称为 Stack 架构。从 React16 重构了整个架构，引入了 Fiber，因此新的的架构也被称为 Fiber 架构。

各个 FiberNode 之间通过链表的形式进行窜联，

### 数据类型

Fiber 本质上也是一个对象，是在之前 React 元素的基础上的一种升级版本。每个 FiberNode 会包含 React 元素的类型、周围链接的 FiberNode，以及 Node 相关的信息。

（代码）

### 动态工作单元

在每个 FiberNode 中保存了本次更新中该 React 元素变化的数据，还有就是要执行的工作（增删改），以及副作用的信息。

（代码）

> 为什么指向父 FiberNode 是 return 而不是 parent？
> 因为作为一个动态的工作单元，return 指代的是 fiberNode 执行完 completeWork 后返回的下一个 FiberNode，这里会有一个返回的动作，因此使用 return 指代父 FiberNode。

## Fiber 双缓冲？

Fiber 架构中的双缓冲工作原理类似于显卡的工作原理。

显卡分为前缓冲和后缓冲区，前缓冲区会显示图像，之后合成型的图像会被写入到后缓冲区，一旦后缓冲区写入图像完毕后，就会前后缓冲区进行互换。

这种将数据保存在缓冲区再进行互换的技术，被称为双缓冲技术。

Fiber 架构同样使用的是这个技术，在 Fiber 架构中同时存在两颗 Fiber Tree，一棵是真实 UI 对应的 Fiber Tree（类似于前缓冲区），另外一个是内存中构建的 Fiber Tree（类似于后缓冲区）。

源码中很多的方法都接受两颗 Fiber Tree。

（代码）

两颗 FiberNode 会通过 alternate 属性相互指向：

（代码）

接下来我们从首次渲染（mount）和更新（update）来看一下 Fiber Tree 的形成和双缓冲的工作原理。

### 首次渲染（mount）

首先最顶层有一个 FiberNode，称为 FiberRootNode。这个节点会有一些自己的任务：

- Current Fiber Tree（前缓冲区） 与 Wip Fiber Tree（后缓冲区） 之间的切换

- 应用中的过期时间

- 应用的任务调度信息

（代码）

当执行 ReactDOM.createRoot() 方法时，会创建一个 FiberRootNode =current=> HostRootFiber。

FiberRootNode 通过 current 指向 HostRootFiber。

接下来进入 Mount 流程，该流程会遵循深度优先的原则，依次生成 wip FiberNode，并且 wip FiberNode 会链接起来。

（图片）

生成的 wip Fiber Tree 里面的每一个 FiberNode 会和 current FiberTree 里面的 FiberNode 进行关联，关联的方式就是通过 alternate 属性。

但是目前 current FiberTree 里面只有一个 HostRootFiber，因此就只有这个 HostRootFiber 进行了 alternate 的关联。

当 wip Fiber Tree 生成完成后，也就意味着 Render 阶段完成，此时 FiberRootNode 就会被传递给 Renderer（渲染器），接下来就是进行渲染工作。

渲染后，浏览器就显示了对应的 UI，此时 FiberRootNode.current 就会指向 wip FiberTree。曾经的 wip FiberTree 他就会变成 current FiberTree。

完成了双缓冲的工作。

### 更新（update）

点击 P 元素会触发更新，这个操作会开启 update 流程。此时就会生成一颗新的 wip FiberTree，流程和之前是一致的。

（图片）

新的 wip FiberTree 里面的每一个 FiberNode 和 current FiberTree 的每一个 Fiber Node 会通过 alternate 属性进行关联。

当 wip FiberTree 生成完毕后，就会经历和之前一样的流程，FiberRootNode 会被传递给渲染器 Renderer 进行渲染，此时宿主环境所渲染出来的真实 UI 对应的就是左边的这个 wip FiberTree 所对应的 DOM 结构。

FiberRootNode.current 就会指向左边这棵树，右边的树就再次成为新的 wip FiberTree。

（图片）

这个就是 Fiber 双缓冲的工作原理。

另外值得一提的是，开发者可以在一个页面中创建多个应用的。

（代码）

示例代码创建了三个应用，此时就会存在三个 FiberRootNode，以及 6 颗 FiberTree。
