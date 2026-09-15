const localSetTimeout = typeof setTimeout === "function" ? setTimeout : null;

/**
 *
 * @param {*} callback 传入的 handleTimeout
 * @param {*} ms 延时时间
 */
function requestHostTimeout(callback, ms) {
  // localSetTimeout 在浏览器环境就是 setTimeout
  // 因此这里就表示使用延时器调度任务
  taskTimeoutID = localSetTimeout(() => {
    callback(getCurrentTime());
  }, ms);
}

/**
 *
 * @param {*} currentTime 当前时间
 */
function handleTimeout(currentTime) {
  isHostTimeoutScheduled = false;

  // 遍历 timerQueue，将时间已经到的延时任务放入 taskQueue
  advanceTimers(currentTime);

  if (!isHostCallbackScheduled) {
    // 从普通任务队列中取一个任务
    if (peek(taskQueue) !== null) {
      isHostCallbackScheduled = true;
      // 采用调度普通任务的方式进行调度
      requestHostCallback(flushWork);
    } else {
      // taskQueue 中没有任务，从 timerQueue 中取一个任务
      // peek 是小顶堆中提供的一个方法
      const firstTimer = peek(timerQueue);
      if (firstTimer !== null) {
        // 取出的延时任务，仍然使用 requestHostTimeout 进行调度
        requestHostTimeout(handleTimeout, firstTimer.startTime - currentTime);
      }
    }
  }
}
