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