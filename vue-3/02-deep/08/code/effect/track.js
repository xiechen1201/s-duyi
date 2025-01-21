import { TrackOpTypes } from "../utils.js";

/* 
    依赖收集器
*/

/**
 * @description 用于收集依赖
 * @param {*} target 原始对象
 * @param {*} type 操作类型
 * @param {*} key 对象 Key
 */
export default function (target, type, key) {
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
