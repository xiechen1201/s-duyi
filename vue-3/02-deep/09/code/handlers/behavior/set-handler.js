import trigger from '../../effect/trigger.js';
import { triggerOpTypes, hasChange } from '../../utils.js';

export default function (target, key, value) {
  // console.log('拦截到 set 操作：', key, value);

  // 关于具体的操作类型需要进一步判断
  // 有可能是新增，也可能是修改
  const type = target.hasOwnProperty(key) ? triggerOpTypes.SET : triggerOpTypes.ADD;

  // 获取旧值
  const oldValue = target[key];
  const oldLeng = Array.isArray(target) ? target.length : undefined;

  // 先进行设置
  const result = Reflect.set(target, key, value);

  // 要不要派发更新，需要一些判断
  if (hasChange(oldValue, value)) {
    trigger(target, type, key);

    // 需要判断 length 是否有变化，如果有变化需要对 length 进行派发更新
    if (Array.isArray(target) && oldLeng !== target.length) {
      // 之所以这里要判断一下，是因为 length 显式的改变是会触发派发更新的，但是隐式的改变不会触发派发更新
      if (key !== 'length') {
        // 手动触发 length 的更新
        trigger(target, triggerOpTypes.SET, 'length');
      } else {
        // 进入这里，说了 length 发生了显示的变化
        // 需要处理新的长度小于旧的长度的情况，因为涉及到删除操作
        for (let index = target.length; index < oldLeng; index++) {
          trigger(target, triggerOpTypes.DELETE, index);
        }
      }
    }
  }

  return result;
}
