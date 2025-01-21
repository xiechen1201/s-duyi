import { effect, cleanup } from "./effect/effect.js";

/**
 * @description watch 监听函数
 * @param {*} source 响应式数据或者 getter 函数（暂不考虑数组的情况）
 * @param {*} cb 要执行的回调函数
 * @param {*} options 选项对象
 */
export function watch(source, cb, options = {}) {
    debugger;
    // 参数归一化
    let getter;
    if (typeof source === "function") {
        // 如果参数是一个函数
        getter = source;
    } else {
        // 如果参数是一个对象
        getter = () => traverse(source);
    }

    // 用于存储 getter 的的上一次值和当前值
    let oldValue, newValue;

    let job = () => {
        newValue = effectFn();
        cb(newValue, oldValue);
        oldValue = newValue;
    };

    const effectFn = effect(() => getter(), {
        lazy: true,
        shcheduler: () => {
            if (options.flush === "post") {
                Promise.resolve().then(job);
            } else {
                job();
            }
        }
    });

    // 处理 options 选项
    if (options.immediate) {
        job();
    } else {
        effectFn();
    }

    // 返回一个可清理的函数
    return () => {
        cleanup();
    };
}

/**
 * @description 遍历对象的所有属性，触发属性的依赖收集
 * @param {*} value
 * @param {*} seen
 */
function traverse(value, seen = new Set()) {
    if (typeof value !== "object" || value === null || seen.has(value)) {
        return value;
    }
    // 用来记录访问过的对象
    seen.add(value);

    for (const key in value) {
        traverse(value[key], seen);
    }

    return value;
}
