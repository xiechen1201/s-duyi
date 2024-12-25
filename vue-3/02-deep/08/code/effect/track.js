import { trackOpTypes } from '../utils.js';

/**
 * @description 收集器，收集依赖
 * @param {*} target 目标对象
 * @param {*} type 进行的操作类型
 * @param {*} key 属性
 */
export default function (target, type, key) {
  // 如果是遍历操作，没有 key 参数
  if (type === trackOpTypes.ITERATE) {
    console.log(`收集：原始对象为`, target);
    console.log(`收集：代理对象被${type}了`);
  } else {
    console.log(`收集：原始对象为`, target);
    console.log(`收集：代理对象的${key}属性被${type}了`);
  }
}
