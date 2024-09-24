/**
 * @fileoverview 入口文件，提供一个 reactive API，该方法接收一个对象，返回一个 Proxy 对象。
 */

import handlers from './handlers/index.js';
import { isObject } from './utils.js';

// 映射表，存储原始对象和代理对象之间的映射关系
const proxyMap = new WeakMap();

/**
 * @param {Object} target 目标对象
 * @returns {Proxy} Proxy 对象
 */
function reactive(target) {
  // 判断 target 是否为对象，如果不是直接返回
  if (!isObject(target)) {
    return target;
  }

  // 该对象已经被代理过，直接返回
  if (proxyMap.has(target)) {
    return proxyMap.get(target);
  }

  // 创建代理对象
  const proxy = new Proxy(target, handlers);
  // 存储映射关系
  proxyMap.set(target, proxy);
  return proxy;
}

export { reactive };
