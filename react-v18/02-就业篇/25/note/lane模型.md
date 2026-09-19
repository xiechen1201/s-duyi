# lane 模型

## React 和 Scheduler 优先级的介绍

React 团队打算对 Scheduler 进行独立发布，在 Scheduler 内部还有一个粒度更细的算法，这个就是 lane 模型。

两套优先级模型的转换。

在 Scheduler 内部拥有五种优先级：

（代码）

作为一个独立的包要考虑通用性，Scheduler 和 React 的优先级更不共通，React 内部有 4 种优先级：

（代码）

由于 React 中不同的交互对应的事件回调中产生的 update 会存在不同的优先级，因此优先级和事件有关，因此在 React 内部的优先级也被称为 EventPriority，各种优先级的含义如下：

（列表）

上面的代码中可以观察出，不同的级别的 EventPriority 对应不同的 lane。

既然 React 和 Scheduler 优先级并不互通，那么这里就会涉及到一个转换的问题，这里分为：

- React 优先级转为 Scheduler 的优先级

- Scheduler 的优先级转为 React 的优先级

### React ==> Scheduler

整体会经历两次转换：

1、 首先是将 lane 转化为 eventPriority，涉及到的方法如下

（代码）

2、将 eventPriority 转化为 Scheduler 的优先级，方法如下：

（代码）

### Scheduler ==> React

相关代码如下：

（代码）

这里会涉及到一个问题，同一个世界可能存在很多的更新，究竟先去更新哪一个？

- 从众多的存在优先级的 update 中选出一个优先级最高的；

- 表达批的概念；

React 在表达方式上面实际上经历了两次迭代：

（列表）

## expirationTime 模型

React 早期采用的就是 expirationTime 算法，这一点和 Scheduler 里面的设计是一致的。

在 Scheduler 中设计了 5 种优先级，不同的优先级对应不同的 timeout，最终会对应不同的 expirationTime，然后 task 根据 expirationTime 来进行任务的排序。

早期的时候 React 中延续了这种设计，update 的优先级与触发事件的当前时间以及优先级对应的延迟时间相关，这样的算法实际上是简单易懂的。

每当进入 Schedule 的时候，就会选出优先级最高的 update 进行一个调度。

但是这种算法在表示批的概念的时候不够灵活。
