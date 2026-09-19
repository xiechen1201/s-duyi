# Update

React 中的 updateQueue？

React 中有很多触发状态更新的方法，例如：

（列表）

虽然这些方法执行的场景不同，但是都可以接入同样的更新流程，原因是因为它们使用同一种数据结构来表示更新，这种数据结构就是 update。

## Update 数据结构

在 React 中更新实际上是存在优先级的，这一点有一些类似“代码版本管理工具”。


## UpdateQueue