import trigger from '../../effect/trigger.js';
import { triggerOpTypes, hasChange } from '../../utils.js';

export default function (target, key, value) {
  console.log('拦截到 set 操作：', key, value);

  // 关于具体的操作类型需要进一步判断
  // 有可能是新增，也可能是修改
  const type = target.hasOwnProperty(key) ? triggerOpTypes.SET : triggerOpTypes.ADD;

  // 获取旧值
  const oldValue = target[key];
  // 先进行设置
  const result = Reflect.set(target, key, value);

  // 要不要派发更新，需要一些判断
  if (hasChange(oldValue, value)) {
    trigger(target, type, key);
  }

  return result;
}
