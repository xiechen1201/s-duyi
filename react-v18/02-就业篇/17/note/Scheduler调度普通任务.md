# Scheduler调度普通任务

https://github.com/react/react/blob/main/packages/scheduler/src/forks/Scheduler.js

## scheduleCallback

该函数的主要目的就是调度任务。

```js
// timeot 对应的值
var maxSigned31BitInt = 1073741823;
var IMMEDIATE_PRIORITY_TIMEOUT = -1;
var USER_BLOCKING_PRIORITY_TIMEOUT = 250;
var NORMAL_PRIORITY_TIMEOUT = 5000;
var LOW_PRIORITY_TIMEOUT = 10000;
var IDLE_PRIORITY_TIMEOUT = maxSigned31BitInt;

// 两个队列，分别存储普通任务和延迟任务
// 里面采用小顶堆的算法，保证每次从队列中取出的都是时间即将过期的任务
var taskQueue = [];
var timerQueue = [];

/**
 * @param {*} priorityLevel 优先级等级
 * @param {*} callback 具体要做的任务
 * @param {*} options {delay: number} 任务延迟执行的时间
 * @returns
 */
function unstable_scheduleCallback(priorityLevel, callback, options) {
  // 获取当前时间
  var currentTime = getCurrentTime();

  var startTime;
  // 整个 if 就是在设置开始时间
  if (typeof options === "object" && options !== null) {
    var delay = options.delay;
    // 如果设置了延迟执行的时间，startTime 为当前时间 + 延迟执行的时间
    if (typeof delay === "number" && delay > 0) {
      startTime = currentTime + delay;
    } else {
      startTime = currentTime;
    }
  } else {
    startTime = currentTime;
  }

  // 根据传入优先级等级来设置 timeout 时间
  var timeout;
  switch (priorityLevel) {
    case ImmediatePriority:
      timeout = IMMEDIATE_PRIORITY_TIMEOUT;
      break;
    case UserBlockingPriority:
      timeout = USER_BLOCKING_PRIORITY_TIMEOUT;
      break;
    case IdlePriority:
      timeout = IDLE_PRIORITY_TIMEOUT;
      break;
    case LowPriority:
      timeout = LOW_PRIORITY_TIMEOUT;
      break;
    case NormalPriority:
    default:
      timeout = NORMAL_PRIORITY_TIMEOUT;
      break;
  }

  // 计算任务过期时间（开始时间 + timeout 时间）
  // 计算出的时间有些比当前时间要早，绝大多数比当前时间要晚
  // （小于当前时间说明任务比较紧急，需要立即执行）
  var expirationTime = startTime + timeout;

  // 创建一个新的任务
  var newTask = {
    id: taskIdCounter++, // 任务id
    callback, // 具体要做的任务
    priorityLevel, // 优先级
    startTime, // 开始时间
    expirationTime, // 过期时间
    sortIndex: -1 // 用于在小顶堆排序
  };

  if (enableProfiling) {
    newTask.isQueued = false;
  }

  // 如果开始时间大于当前时间，说明任务延迟执行
  if (startTime > currentTime) {
    // 这是一个延迟任务
    newTask.sortIndex = startTime;

    // 将任务加入延迟任务队列
    push(timerQueue, newTask);

    if (peek(taskQueue) === null && newTask === peek(timerQueue)) {
      // 进入这个 if，说明 taskQueue 里面的任务执行完毕了，并且从 timerQueue 取出一个最新的任务又是当前任务

      // isHostTimeoutScheduled 是一个开关，表示是否存在正在调度的任务
      if (isHostTimeoutScheduled) {
        // Cancel an existing timeout.
        cancelHostTimeout();
      } else {
        isHostTimeoutScheduled = true;
      }

      // 如果是延时任务，调用 requestHostTimeout 进行任务的调度
      requestHostTimeout(handleTimeout, startTime - currentTime);
    }
  } else {
    // 进入 else 说明不是延时任务

    // 设置了 sortIndex 可以在任务队列中进行排序
    newTask.sortIndex = expirationTime;

    // 推入到 taskQueue 队列
    push(taskQueue, newTask);
    if (enableProfiling) {
      markTaskStart(newTask, currentTime);
      newTask.isQueued = true;
    }

    // Schedule a host callback, if needed. If we're already performing work,
    // wait until the next time we yield.
    // 最终调用 requestHostCallback 进行任务的调度
    if (!isHostCallbackScheduled && !isPerformingWork) {
      isHostCallbackScheduled = true;
      requestHostCallback(flushWork);
    }
  }

  // 返回任务
  return newTask;
}
```

unstable_scheduleCallback 注意几个关键点：

1、关于任务队列有两个，一个是 taskQueue 存放普通任务。一个是 timerQueue 存放延迟任务。任务队列内部使用小顶堆的算法，保证始终放进去（push）的任务能够进行正常的排序，回头通过 peek 取出任务的时候，始终取出的是优先级最高的任务

2、根据传入的不同的 priorityLevel 优先级等级会进行不同的 timeout 的设置。有的比当前时间还要小，表示需要立即执行。绝大多数时间比当前时间大。

3、不同的任务最终调用的函数不一样，如果是普通任务，调用 requestHostCallback，延时任务调用 requestHostTimeout

## requestHostCallback() && schedulePerformWorkUntilDeadline()

```js
/**
 *
 * @param {*} callback 调用的时候传入的 flushWork 函数
 * requestHostCallback 这个函数没有做什么事情，主要就是调用 schedulePerformWorkUntilDeadline
 */
function requestHostCallback(callback) {
  scheduledHostCallback = callback;

  // isMessageLoopRunning 是一个开关，表示是否存在正在调度的任务
  if (!isMessageLoopRunning) {
    isMessageLoopRunning = true;

    // 实例化 MessageChannel 进行后面的调度
    schedulePerformWorkUntilDeadline();
  }
}

let schedulePerformWorkUntilDeadline; // undefined
if (typeof localSetImmediate === "function") {
  // Node.js and old IE.
  // There's a few reasons for why we prefer setImmediate.
  //
  // Unlike MessageChannel, it doesn't prevent a Node.js process from exiting.
  // (Even though this is a DOM fork of the Scheduler, you could get here
  // with a mix of Node.js 15+, which has a MessageChannel, and jsdom.)
  // https://github.com/facebook/react/issues/20756
  //
  // But also, it runs earlier which is the semantic we want.
  // If other browsers ever implement it, it's better to use it.
  // Although both of these would be inferior to native scheduling.
  schedulePerformWorkUntilDeadline = () => {
    localSetImmediate(performWorkUntilDeadline);
  };
} else if (typeof MessageChannel !== "undefined") {
  // 多数情况下使用的是 MessageChannel
  // DOM and Worker environments.
  // We prefer MessageChannel because of the 4ms setTimeout clamping.
  const channel = new MessageChannel();
  const port = channel.port2;
  channel.port1.onmessage = performWorkUntilDeadline;
  schedulePerformWorkUntilDeadline = () => {
    port.postMessage(null);
  };
} else {
  // 其他情况下使用 setTimeout 进行兜底
  // We should only fallback here in non-browser environments.
  schedulePerformWorkUntilDeadline = () => {
    localSetTimeout(performWorkUntilDeadline, 0);
  };
}
```

requestHostCallback 主要就是调用了 schedulePerformWorkUntilDeadline 函数。

schedulePerformWorkUntilDeadline 最开始是 undefined，后面根据不同的环境，生成宏任务的方式。

## performWorkUntilDeadline

```js
let startTime = -1;

const performWorkUntilDeadline = () => {
  // scheduledHostCallback ==> unstable_scheduleCallback ==> requestHostCallback(flushWork); ==> flushWork
  // scheduledHostCallback === flushWork
  if (scheduledHostCallback !== null) {
    // 获取当前的时间
    const currentTime = getCurrentTime();
    // Keep track of the start time so we can measure how long the main thread
    // has been blocked.

    // 这里的 startTime 并非 unstable_scheduleCallback 中的 startTime，而是一个全局变量，默认值为 -1
    // 这个属性的作用是记录任务的执行时间，从而知道主线程被阻塞了多久
    startTime = currentTime;

    // 默认还有剩余时间
    const hasTimeRemaining = true;

    // If a scheduler task throws, exit the current browser task so the
    // error can be observed.
    //
    // Intentionally not using a try-catch, since that makes some debugging
    // techniques harder. Instead, if `scheduledHostCallback` errors, then
    // `hasMoreWork` will remain true, and we'll continue the work loop.

    // 默认还有需要做的任务
    let hasMoreWork = true;

    try {
      // flushWork(true, 开始时间) 返回一个 boolean
      // 如果为 true 表示工作未完成，false 表示没有任务了
      hasMoreWork = scheduledHostCallback(hasTimeRemaining, currentTime);
    } finally {
      if (hasMoreWork) {
        // If there's more work, schedule the next message event at the end
        // of the preceding one.
        // 使用 MessageChannel 进行一个 message 的事件调度，将任务放入队列中
        schedulePerformWorkUntilDeadline();
      } else {
        // 说明任务都处理完了
        //
        isMessageLoopRunning = false;

        // 把 flushWork 函数设置为 null
        scheduledHostCallback = null;
      }
    }
  } else {
    isMessageLoopRunning = false;
  }
  // Yielding to the browser will give it a chance to paint, so we can
  // reset this.
  needsPaint = false;
};
```

这个方法实际是主要就是调用 scheduledHostCallback（flushWork）,调用后返回一个 boolean，根据这个结果来判断是否还有剩余的任务。

如果还有就使用 message channel 进行宏任务的包装，放入任务队列。

## flushWork && workLoop

```js
/**
 *
 * @param {*} hasTimeRemaining 是否有剩余的时间
 * @param {*} initialTime 做这个任务开始执行的时间
 * @returns
 */
function flushWork(hasTimeRemaining, initialTime) {
  // ...

  try {
    if (enableProfiling) {
      try {
        // 核心实际上是这一句，调用 workLoop
        return workLoop(hasTimeRemaining, initialTime);
      } catch (error) {
        // ...
      }
    } else {
      /// 核心实际上是这一句，调用 workLoop
      return workLoop(hasTimeRemaining, initialTime);
    }
  } finally {
    // ...
  }
}

/**
 *
 * @param {*} hasTimeRemaining 是否有剩余的时间
 * @param {*} initialTime 做这个任务开始执行的时间
 * @returns
 */
function workLoop(hasTimeRemaining, initialTime) {
  let currentTime = initialTime;

  // 该方法实际上是用来遍历 timerQueue 中的任务的
  // 判断是否有已经到期的任务
  // 如果有将这个任务放入到 taskQueue 中
  advanceTimers(currentTime);

  // 从 taskQueue 中取出第一个任务
  currentTask = peek(taskQueue);

  while (
    currentTask !== null &&
    !(enableSchedulerDebugging && isSchedulerPaused)
  ) {
    if (
      currentTask.expirationTime > currentTime &&
      (!hasTimeRemaining || shouldYieldToHost())
    ) {
      // currentTask.expirationTime > currentTime 判断表示任务还没有过期
      // hasTimeRemaining 判断表示是否有剩余的时间
      // shouldYieldToHost() 任务是否应该暂停，归还主线程
      // 那么就跳出 while 循环

      // This currentTask hasn't expired, and we've reached the deadline.
      break;
    }

    // 如果没有进入到上面的 if 判断，说明这个任务已经过期，并且有剩余时间来执行，没有到达浏览器需要渲染的时机
    // 那就执行任务即可
    const callback = currentTask.callback;

    // 如果当前任务是一个函数，则进行函数
    if (typeof callback === "function") {
      currentTask.callback = null;
      currentPriorityLevel = currentTask.priorityLevel;
      const didUserCallbackTimeout = currentTask.expirationTime <= currentTime;
      if (enableProfiling) {
        markTaskRun(currentTask, currentTime);
      }

      // 任务的执行实际上就是这一句
      const continuationCallback = callback(didUserCallbackTimeout);
      currentTime = getCurrentTime();
      if (typeof continuationCallback === "function") {
        currentTask.callback = continuationCallback;
        if (enableProfiling) {
          markTaskYield(currentTask, currentTime);
        }
      } else {
        if (enableProfiling) {
          markTaskCompleted(currentTask, currentTime);
          currentTask.isQueued = false;
        }
        if (currentTask === peek(taskQueue)) {
          pop(taskQueue);
        }
      }
      advanceTimers(currentTime);
    } else {
      // 如果不是函数
      pop(taskQueue);
    }
    // 再从 taskQueue 中取出下一个任务
    currentTask = peek(taskQueue);
  }

  // 如果不为空，说明还有更多的任务，那么外部的 hasMoreWork 得到的就是 true
  // Return whether there's additional work
  if (currentTask !== null) {
    return true;
  } else {
    // 说明 taskQueue 中没有任务了，那么就从 timerQueue 中取出一个延时任务
    const firstTimer = peek(timerQueue);
    if (firstTimer !== null) {
      requestHostTimeout(handleTimeout, firstTimer.startTime - currentTime);
    }
    // 没有进入上面的 if ，说明 timerQueue 中也没有任务了，那么就返回 false
    return false;
  }
}
```

- flushWork 主要就是调用 workLoop 方法

- workLoop 首先有一个 while 循环，这个循环保证了能够从任务队列中能够不停的取出任务执行

```js
while (
  currentTask !== null &&
  !(enableSchedulerDebugging && isSchedulerPaused)
) {}
```

当然不是说一直从任务队列中取出任务就完事了，每次取出任务后还需要一系列的判断

```js
if (
  currentTask.expirationTime > currentTime &&
  (!hasTimeRemaining || shouldYieldToHost())
) {
}
```

- currentTask.expirationTime > currentTime 判断表示任务还没有过期

- hasTimeRemaining 判断表示是否有剩余的时间

- shouldYieldToHost() 任务是否应该暂停，归还主线程

- 那么就跳出 while 循环

## shouldYieldToHost

```js
function shouldYieldToHost() {
  // 获取当前时间
  // startTime 是任务开始的时间，一开始是 -1，之后任务开始时，将任务开始时的时间赋值给 startTime
  const timeElapsed = getCurrentTime() - startTime;

  // frameInterval 默认设置的是 5ms
  if (timeElapsed < frameInterval) {
    // 主线程只被阻塞了很短的时间，小于一帧的时间，不归还主线程
    // The main thread has only been blocked for a really short amount of time;
    // smaller than a single frame. Don't yield yet.
    return false;
  }

  // 如果没有进入上面的 if，说明主线程已经被阻塞一段时间了，需要归还主线程
  if (enableIsInputPending) {
    if (needsPaint) {
      // There's a pending paint (signaled by `requestPaint`). Yield now.
      return true;
    }
    if (timeElapsed < continuousInputInterval) {
      // We haven't blocked the thread for that long. Only yield if there's a
      // pending discrete input (e.g. click). It's OK if there's pending
      // continuous input (e.g. mouseover).
      if (isInputPending !== null) {
        return isInputPending();
      }
    } else if (timeElapsed < maxInterval) {
      // Yield if there's either a pending discrete or continuous input.
      if (isInputPending !== null) {
        return isInputPending(continuousOptions);
      }
    } else {
      // We've blocked the thread for a long time. Even if there's no pending
      // input, there may be some other scheduled work that we don't know about,
      // like a network event. Yield now.
      return true;
    }
  }

  // `isInputPending` isn't available. Yield now.
  return true;
}

```

- 首先计算 timeElapsed，判断是否超时，没有的话返回 false，表示不需要归还，否则就返回 true，表示需要归还主线程

- frameInterval 默认设置的是 5ms

## advanceTimers

```js
function advanceTimers(currentTime) {
  // Check for tasks that are no longer delayed and add them to the queue.
  // 从 timerQueue 中取出第一个任务
  let timer = peek(timerQueue);

  // 遍历整个 timerQueue
  while (timer !== null) {
    if (timer.callback === null) {
      // 这个任务没有要执行的 callback，直接从 timerQueue 中移除
      pop(timerQueue);
    } else if (timer.startTime <= currentTime) {
      // 进入这个分支，说明当前任务已经不是延时任务
      // 需要将这个任务转移到 taskQueue 中
      pop(timerQueue);
      timer.sortIndex = timer.expirationTime;
      push(taskQueue, timer);
      // ...
    } else {
      return;
    }
    // 从 timerQueue 中再次取出下一个任务，进行判断
    timer = peek(timerQueue);
  }
} 
```

该方法就是遍历整个 timerQueue，查看是否已经有过期的方法，如果有不是说直接执行，而是将过期的方法添加到 taskQueue 中