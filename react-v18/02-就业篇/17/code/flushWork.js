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
