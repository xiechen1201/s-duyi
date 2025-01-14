/* 
    触发器
*/
import { TriggerOpTypes, TrackOpTypes, ITERATE_KEY } from "../utils.js";
import { activeEffect, targetMap } from "./effect.js";

// 定义修改数据和触发数据的映射关系
const triggerTypeMap = {
    [TriggerOpTypes.SET]: [TrackOpTypes.GET],
    [TriggerOpTypes.ADD]: [
        TrackOpTypes.GET,
        TrackOpTypes.ITERATE,
        TrackOpTypes.HAS
    ],
    [TriggerOpTypes.DELETE]: [
        TrackOpTypes.GET,
        TrackOpTypes.ITERATE,
        TrackOpTypes.HAS
    ]
};

/**
 * 触发器
 * @param {*} target 目标对象
 * @param {*} type 操作类型
 * @param {*} key 对象的 Key
 */
export default function (target, type, key) {
    // 找到依赖，并执行依赖
    const effectFns = getEffectFns(target, type, key);
    if (!effectFns) return;


    for (const effectFn of effectFns) {
        if (effectFn === activeEffect) continue;
        if (effectFn.options && effectFn.options.shcheduler) {
            // 说明用户传递了回调函数
            effectFn.options.shcheduler(effectFn);
        } else {
            effectFn();
        }
    }
}

/**
 * @description 根据形参找到对应的依赖函数集合
 * @param {*} target
 * @param {*} type
 * @param {*} key
 */
function getEffectFns(target, type, key) {
    const propMap = targetMap.get(target);
    if (!propMap) return;

    // 如果是新增或者删除操作，会涉及到额外触发迭代
    const keys = [key];
    if (type === TriggerOpTypes.ADD || type === TriggerOpTypes.DELETE) {
        keys.push(ITERATE_KEY);
    }

    // 用于存储依赖的函数
    const effectFns = new Set();

    for (const key of keys) {
        const typeMap = propMap.get(key);
        if (!typeMap) continue;

        // 根据 type 找具体的映射
        const trackTypes = triggerTypeMap[type];
        for (const trackType of trackTypes) {
            const dep = typeMap.get(trackType);
            if (!dep) continue;

            for (const effectFn of dep) {
                effectFns.add(effectFn);
            }
        }
    }

    return effectFns;
}
