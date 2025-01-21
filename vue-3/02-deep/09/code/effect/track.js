/* 
    依赖收集器
*/

import { TrackOpTypes } from "../utils.js";

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
    if (!shouldTrack) {
        return;
    }

    // 如果是 ITERATE 操作，这个时候没有 key
    if (type === TrackOpTypes.ITERATE) {
        console.log(
            `>>> 依赖收集器：${JSON.stringify(target)} >>> Type：${type}`
        );
    } else {
        console.log(
            `>>> 依赖收集器：${JSON.stringify(
                target
            )} >>> Type：${type} >>> Key：${key}`
        );
    }
}
