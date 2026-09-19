# effect 相关的 hook

React 中定义有副作用的因变量的 hook 有三个：

- useEffect：在 commit 阶段完成会异步执行，不会阻塞视图渲染

- useLayoutEffect：在 commit 阶段的 Layout 子阶段，同步执行，而不是异步。一般用于执行 DOM 相关的操作

- useInsertionEffect：在 commit 阶段的 Mutation 子阶段，同步执行，和 useLayoutEffect 的区别在于，执行的时候无法访问对 DOM 的引用。这个 hook 是专门为 CSS-in-JS 等库设计的，用于插入全局的 style 元素。

## 数据结构

对于三个 effect hook，hook.memoizedState 共同使用同一套数据结构：

（代码）

tag 用来区分 effect 的类型：

- Passive：useEffect 

- Layout：useLayoutEffect

- Insertion：useInsertionEffect

create 和 destroy 分别指代创建和销毁 effect。

next 字段会和当前函数组件的其他 effect 形成环状链表，连接方式是一个单项环状链表。

（代码）


## 工作流程

分为三个阶段：

- 声明阶段

- 调度阶段（useEffect 独有）

- 执行阶段

### 声明阶段

又分为 mount 和 update。

mount 的时候执行的是 mountEffectImpl，代码如下：

（代码）

上面的代码中，首先会生成 hook 对象，拿到依赖，修改 Fiber 的 Flag，将当前的 effect 推到环状列表中，hook.memoizedState 指向该环状列表。

update 的时候执行的是 updateEffectImpl，代码如下：

（代码）

上面的代码中，首先从 updateWorkInProgressHook 中获取 hook 对象，之后会从 hook.memoizedState 中拿到 effect 对象。

进行前后依赖项目比较。如果依赖相同，那就在在 effect 上进行标记，表示不需要重新执行。

如果依赖发生了变化，那么当前的 fiber node 就会打上一个 flags，在 commit 阶段统一执行该 effect。之后会推入新的 effect 到环状列表。

update 的时候即使 effect deps 没有变化，也会创建对应的 effect。因为这样才能保证 effect 数量和顺序是稳定的。

（代码）

### 调度阶段

调度阶段是 useEffect 独有的，因为 useEffect 的回调会在 commit 阶段完成后异步执行，因此需要调度阶段。

在 commit 阶段的三个子阶段开始之前，会执行如下代码：

（代码）

flushPassiveEffects() 会去执行对应的 effects：

（代码）

另外，由于调度阶段的存在，为了保证下一次的 commit 阶段执行前，上一次 commit 所调度的 useEffect 均已执行完成，因此会在 commit 的入口处，也会执行 flushPassiveEffects()，而且是一个循环执行。

（代码）

之所以是 do while 循环，是因为为了保证上一轮调度的 effect 都执行过了。

### 执行阶段

三个 effect 相关的 hook 执行阶段有两个相关的方法：

- 用于遍历 effect 链表，依次遍历 effect.destroy() 方法；

（代码）

- 遍历 effect 链表，依次执行 create 方法，在申明阶段，update 会根据 deps 是否变化打上不同的 tag。之后在执行阶段就会根据是否有 tag，来决定是否要执行该 effect。

