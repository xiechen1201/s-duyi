/* 
    核心文件，入口文件，会提供一个 reactive API 函数
    方法接收一个对象
*/

import handlers from "./handlers/index.js";

/**
 * 响应式对象
 * @param {Object} target
 * @returns {Proxy}
 */
export function reactive(target) {
    const proxy = new Proxy(target, handlers);
    return proxy;
}
