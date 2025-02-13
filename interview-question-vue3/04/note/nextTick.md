# nextTick

同步代码对响应式数据多次修改会被合并为一次，根据最终的结果异步的去更新 DOM。

DOM 的更新是异步的。

如何解决？获取 DOM 的代码在微任务中执行，（浏览器完成一次渲染后就会立即执行微任务）。

```js
// 创建一个已经解析的 Promise 对象，这个 Promise 会立即被解决，
// 用于创建一个微任务（microtask）。
const resolvedPromise = /*#__PURE__*/ Promise.resolve() as Promise<any>

// 一个全局变量，用于跟踪当前的刷新 Promise。
// 初始状态为 null，表示当前没有刷新任务。
let currentFlushPromise: Promise<void> | null = null

// queueFlush 函数负责将刷新任务（flushJobs）放入微任务队列。
// 这是 Vue 的异步更新机制的核心部分，用于优化性能。
function queueFlush() {
  // 检查是否已经在刷新（isFlushing）或者刷新任务是否已被挂起（isFlushPending）。
  if (!isFlushing && !isFlushPending) {
    // 设置 isFlushPending 为 true，表示刷新任务已被挂起，正在等待执行。
    isFlushPending = true
    // 将 currentFlushPromise 设置为 resolvedPromise.then(flushJobs)
    // 这将创建一个微任务，当 resolvedPromise 被解决时，执行 flushJobs 函数。
    currentFlushPromise = resolvedPromise.then(flushJobs)
  }
}

// nextTick 函数用于在下一个 DOM 更新循环之后执行一个回调函数。
// 它返回一个 Promise，这个 Promise 会在 DOM 更新完成后解决。
export function nextTick<T = void, R = void>(
  this: T,
  fn?: (this: T) => R,  // 可选的回调函数，在 DOM 更新之后执行
): Promise<Awaited<R>> {
  // 如果 currentFlushPromise 不为 null，使用它；否则使用 resolvedPromise。
  // 这样可以确保在 DOM 更新之后再执行回调。
  const p = currentFlushPromise || resolvedPromise

  // 如果传入了回调函数 fn，返回一个新的 Promise，在 p 解决之后执行 fn。
  // 使用 this 绑定来确保回调函数的上下文正确。
  return fn ? p.then(this ? fn.bind(this) : fn) : p
  // 如果没有传入回调函数 fn，直接返回 Promise p，这样外部代码可以使用 await 等待 DOM 更新完成。
}
```

NextTick 本质上就是对 Prmoise 的封装。