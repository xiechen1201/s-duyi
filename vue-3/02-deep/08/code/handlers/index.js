/**
 * @fileoverview Proxy 处理
 */

import getHandler from './behavior/get-handler.js';
import setHandler from './behavior/set-handler.js';
import delHandler from './behavior/del-handler.js';
import hasHandler from './behavior/has-handler.js';
import ownKeysHandler from './behavior/ownkeys-handler.js';

export default {
  get: getHandler,
  set: setHandler,
  deleteProperty: delHandler,
  has: hasHandler,
  ownKeys: ownKeysHandler
};
