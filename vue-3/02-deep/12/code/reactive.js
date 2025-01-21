/* 
    核心文件，入口文件，会提供一个 reactive API 函数
    方法接收一个对象
*/

import handlers from "./handlers/index.js";
import { isObject } from "./utils.js";

// 映射表，存储原始对象和代理对象之间的映射关系
const proxyMap = new WeakMap();

/**
 * 响应式对象
 * @param {Object} target
 * @returns {Proxy}
 */
export function reactive(target) {

    // 如果 target 不是对象
    if (!isObject(target)) {
        return target;
    }

    // 如果已经是一个 Proxy 对象，直接返回之前的代理对象
    // 通过查询映射表
    if (proxyMap.has(target)) {
        return proxyMap.get(target);
    }

    const proxy = new Proxy(target, handlers);

    // 将原始对象和代理对象存储到映射表中
    proxyMap.set(target, proxy);

    return proxy;
}
