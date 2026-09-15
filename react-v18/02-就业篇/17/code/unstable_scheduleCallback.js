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
  if (typeof options === 'object' && options !== null) {
    var delay = options.delay;
    // 如果设置了延迟执行的时间，startTime 为当前时间 + 延迟执行的时间
    if (typeof delay === 'number' && delay > 0) {
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
    sortIndex: -1, // 用于在小顶堆排序
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
