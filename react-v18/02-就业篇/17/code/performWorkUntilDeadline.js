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