/**
 * @fileoverview 入口文件，提供一个 reactive API，该方法接收一个对象，返回一个 Proxy 对象。
 */

import handlers from './handlers/index.js';

/**
 * @param {Object} target 目标对象
 * @returns {Proxy} Proxy 对象
 */
function reactive(target) {
  return new Proxy(target, handlers);
}

export { reactive };
