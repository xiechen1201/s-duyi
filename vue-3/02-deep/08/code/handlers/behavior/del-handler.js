import trigger from '../../effect/trigger.js';
import { triggerOpTypes } from '../../utils.js';

export default function (target, key) {
  console.log('拦截到 delete 操作：', key);

  // 判断一下目标对象是否存在要删除的属性
  const hasKey = target.hasOwnProperty(key);
  // 进行删除操作
  const result = Reflect.deleteProperty(target, key);

  if (hasKey && result) {
    trigger(target, key, triggerOpTypes.DELETE);
  }

  return result;
}
