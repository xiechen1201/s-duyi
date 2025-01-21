/**
 * 收集依赖的操作类型
 */
export const TrackOpTypes = {
    GET: "get",
    HAS: "has",
    ITERATE: "iterate"
};

/**
 * 触发器的操作类型
 */
export const TriggerOpTypes = {
    SET: "set",
    ADD: "add",
    DELETE: "delete"
};

/**
 * @description 判断是否是对象
 * @param {*} target
 * @returns {Boolean}
 */
export function isObject(target) {
    return typeof target === "object" && target !== null;
}

/**
 * @description 判断两个值是否相等
 * @param {*} oldVal
 * @param {*} newVal
 * @returns {Boolean}
 */
export function hasChanged(oldVal, newVal) {
    return Object.is(oldVal, newVal);
}

/**
 * @description 原始数据
 */
export const RAW = Symbol("RAW");