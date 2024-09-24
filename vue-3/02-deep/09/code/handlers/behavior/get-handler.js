import track, { pauseTracking, resumeTracking } from '../../effect/track.js';
import { trackOpTypes, isObject, RAW } from '../../utils.js';
import { reactive } from '../../reactive.js';

const arrayInstrumentations = {};

// 以下方法需要拦截器返回原始的对象
['includes', 'indexOf', 'lastIndexOf'].forEach((method) => {
  // 重写数组方法
  arrayInstrumentations[method] = function (...args) {
    // 正常寻找，此时 this 指向代理对象
    const res = Array.prototype[method].apply(this, args);

    if (res < 0 || res === false) {
      // 需要拦截器返回原始的对象
      // this[RAW] 拿到的就是原始对象
      return Array.prototype[method].apply(this[RAW], args);
    }
    return res;
  };
});

// 以下方法需要暂停依赖的收集
['push', 'pop', 'shift', 'unshift', 'splice'].forEach((method) => {
  // 重写数组方法
  arrayInstrumentations[method] = function (...args) {
    pauseTracking();
    const res = Array.prototype[method].apply(this, args);
    resumeTracking();
    return res;
  };
})

export default function (target, key) {
  // console.log('拦截到 get 操作：', key);

  // 这里的 RAW 是一个 Symbol，用来标识原始对象
  // 这个标识不能和已有的属性重复
  if (key === RAW) {
    return target;
  }

  // 拦截到 get 之后要进行依赖收集
  track(target, trackOpTypes.GET, key);

  if (arrayInstrumentations.hasOwnProperty(key) && Array.isArray(target)) {
    return arrayInstrumentations[key];
  }

  const result = Reflect.get(target, key);

  // 如果获取到的成员是一个对象，那么需要递归进行依赖收集
  if (isObject(result)) {
    return reactive(result);
  }

  return result;
}
