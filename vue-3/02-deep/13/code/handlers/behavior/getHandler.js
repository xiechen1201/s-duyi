import track, { pauseTracking, resumeTracking } from "../../effect/track.js";
import { TrackOpTypes, isObject, RAW } from "../../utils.js";
import { reactive } from "../../reactive.js";

const arrayInstrumentations = {};

["includes", "indexOf", "lastIndexOf"].forEach((methodKey) => {
    // 重写数组的方法
    arrayInstrumentations[methodKey] = function (...args) {
        // 1、先正常查找
        // this 指向代理对象
        const result = Array.prototype[methodKey].apply(this, args);

        // 2、如果找不到
        if (result < 0 || result === false) {
            // Proxy 返回原始的对象
            // this[RAW] 得到的就是原始对象
            return Array.prototype[methodKey].apply(this[RAW], args);
        }

        return result;
    };
});

// 重写 push、pop、shift、unshift、splice
// 调用这些方法的时候需要暂停依赖收集，调用完毕后再恢复
["push", "pop", "shift", "unshift", "splice"].forEach((methodKey) => {
    arrayInstrumentations[methodKey] = function (...args) {
        pauseTracking();
        const result = Array.prototype[methodKey].apply(this, args);
        resumeTracking();
        return result;
    };
});

export default function (target, key) {
    // console.log(`>>> 触发 get 操作，Key 为 ${key}`);

    // 返回原始对象，而不是代理对象
    if (key === RAW) {
        return target;
    }

    // 拦截到数据后要进行依赖收集
    track(target, TrackOpTypes.GET, key);

    // 如果是数组的某些方法，需要对数组方法进行一个重写
    // 例如 includes indexOf lastIndexOf
    if (arrayInstrumentations.hasOwnProperty(key) && Array.isArray(target)) {
        return arrayInstrumentations[key];
    }

    const result = Reflect.get(target, key);

    // 如果得到的值是对象，则递归转换为响应式数据
    if (isObject(result)) {
        return reactive(result);
    }

    return result;
}
