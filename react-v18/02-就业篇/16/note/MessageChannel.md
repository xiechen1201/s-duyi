# MessageChannel

## 回顾事件循环

## MessageChannel 

MessageChannel 本身是用来做消息通信的，允许我们创建一个消息通道，通过他的两个 messageport 来进行信息的发送和接收。

MessageChannel 和 Scheduler 的关系？

Scheduler 任务需要满足两个条件：

1、JS 暂停，将主线程还给浏览器，浏览器继续渲染页面

2、暂停的 JS（说明还没执行完），需要在下一次接着来执行

这里自然而染就会想到事件循环，将没有执行完成的 JS 放入到任务队列，下一次事件循环继续执行

如何将任务放在队列？

这里就需要产生一个宏任务，这里就可以使用 MessageChannel 来实现，因为 MessageChannel 能够产生宏任务。

为什么其他的手段不行？setTimeout？

之前要创建一个宏任务，可以使用 setTimeout(fn, 0) ，但是 react 团队没有使用这个方案，这是因为 setTimeout 在潜逃层级超过 5 层，timeout（延时时间），如果小于 4ms，则会设置为 4ms。

（代码示例）

为什么不使用 requestAnimationFrame？

不合适，因为只能在重新渲染之前才能执行一次，而如果包装成一个任务，放入到任务队列中，只要没到冲渲染的时候，就可以一直从队列中获取任务来执行。

并且 requestAnimationFrame 还存在一定的兼容问题。

为什么没有包装为一个微任务？

这是因为微任务的执行机制有关系，微任务会在清空整个队列之后才会结束。也就表示微任务会在页面更新前一直执行，直到队列清空，无法实现主线程还给浏览器的目的。

