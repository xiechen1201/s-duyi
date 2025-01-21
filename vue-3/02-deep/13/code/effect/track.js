/* 
    依赖收集器
*/

import { TrackOpTypes, ITERATE_KEY } from "../utils.js";
import { activeEffect, targetMap } from "./effect.js";

/**
 * 控制是否需要进行依赖收集
 */
let shouldTrack = true;

/**
 * @description 暂停依赖收集
 */
export function pauseTracking() {
    shouldTrack = false;
}

/**
 * @description 恢复依赖收集
 */
export function resumeTracking() {
    shouldTrack = true;
}

/**
 * @description 用于收集依赖
 * @param {*} target 原始对象
 * @param {*} type 操作类型
 * @param {*} key 对象 Key
 */
export default function (target, type, key) {
    // 如果不需要收集依赖，直接返回
    if (!shouldTrack || !activeEffect) {
        return;
    }

    // 这里要做的事情很简单，就是一层一层的去寻找，找到就存储
    // 获取 propMap
    let propMap = targetMap.get(target);
    if (!propMap) {
        propMap = new Map();
        targetMap.set(target, propMap);
    }

    // 对 key 进行参数归一化
    // 之前如果是遍历所有的属性，Key 会是 undefined，这里统一处理成 ITERATE_KEY
    if (type === TrackOpTypes.ITERATE) {
        key = ITERATE_KEY;
    }

    // 获取 typeMap
    let typeMap = propMap.get(key);
    if (!typeMap) {
        typeMap = new Map();
        propMap.set(key, typeMap);
    }

    // 根据 type 类型去找对应的 Set
    let depSet = typeMap.get(type);
    if (!depSet) {
        depSet = new Set();
        typeMap.set(type, depSet);
    }

    // 找到 set 集合之后需要存储依赖函数
    if (!depSet.has(activeEffect)) {
        depSet.add(activeEffect);
        // 将集合存储到 deps 数组中
        activeEffect.deps.push(depSet);
    }
}
