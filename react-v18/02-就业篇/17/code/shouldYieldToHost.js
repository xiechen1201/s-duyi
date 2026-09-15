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
