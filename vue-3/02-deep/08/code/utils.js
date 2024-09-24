/**
 * @fileoverview 提供工具方法
 */

/**
 * 收集依赖的操作类型
 */
const trackOpTypes = {
  GET: 'get',
  HAS: 'has',
  ITERATE: 'iterate'
};

/**
 * 触发器的操作类型
 */
const triggerOpTypes = {
  SET: 'set',
  ADD: 'add',
  DELETE: 'delete'
};

/**
 * @description 判断是否为对象
 * @param {*} value 要判断的值
 * @returns {Boolean}
 */
function isObject(value) {
  return value !== null && typeof value === 'object';
}

/**
 * @description 判断值是否发生变化
 * @param {*} oldValue
 * @param {*} newValue
 * @returns {Boolean}
 */
function hasChange(oldValue, newValue) {
  // 使用 Object.is 更加的严谨，例如 NaN = NaN
  return !Object.is(oldValue, newValue);
}

export { trackOpTypes, triggerOpTypes, isObject, hasChange };
