/**
 * @description 触发器
 * @param {*} target 原始对象
 * @param {*} type 操作类型
 * @param {*} key 属性
 */
export default function trigger(target, type, key) {
  console.log(`触发器：原始对象为`, target);
  console.log(`触发器：代理对象的${key}属性被${type}了`);
}