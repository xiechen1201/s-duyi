# 性能优化 bailout

我们学习 beginWork 的时候知道，主要的作用就是生成 wip FiberNode 的子节点。要达到这个目的存在两种方式：

- 通过 renconcil 生成子 FiberNode

- 通过命中 bailout 策略来复用子 FiberNode

前面我们讲过，所有的变化都是自变量的改变造成的，在 react 中，自变量有哪些：

- state

- props

- context

因此是否命中 bailout 策略，主要也是围绕这三个变量展开的，整体工作流程如下：

（图片）

## 第一次判断

beginWork -> update 确定了是在 update 后，立马就会进行是否能够进行复用的判断。

总结起来有 4 个条件：

（项）

## 第二次判断

如果第一次没有命中 bailout 策略，则会根据不同的 tag 进入不同的处理逻辑，之后还会进行第二次的判断。

第二次判断的时候会有两种命中的可能：

- 开发者使用了性能优化的 API

- 虽然有更新，但是 state 没有变化

### 性能优化的 API

在第一次判断的时候，默认是对 props 进行全等比较。要满足这个条件，实际上是比较苦难的，性能优化这个 api 的工作原理，主要就是改写这个判断条件。

例如 React.memo，通过这个 API 创建的 FC 对应的 FiberNode.tag 为 MemoComponent，在 beginWork 对应的处理逻辑如下：

（代码）

因此，是否命中 bailout 策略的条件就变成了如下三个：

- 不存在更新

- 经过比较（浅比较）后 props 没有变化

- ref 没有发生改变

如果同时满足上面这三个条件，就会命中 bailout 策略。相较于第一次判断，第二次判断 props 采用的是浅比较进行的判断，因此能够更加容易命中 bailout。



### state 没有变化