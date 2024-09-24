import track from '../../effect/track.js';
import { trackOpTypes, isObject } from '../../utils.js';
import { reactive } from '../../reactive.js';

export default function (target, key) {
  console.log('拦截到 get 操作：', key);

  // 拦截到 get 之后要进行依赖收集
  track(target, trackOpTypes.GET, key);

  const result = Reflect.get(target, key);

  // 如果获取到的成员是一个对象，那么需要递归进行依赖收集
  if (isObject(result)) {
    return reactive(result);
  }

  return result;
}