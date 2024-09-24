/**
 * @fileoverview 测试文件
 */

import { reactive } from './reactive.js';

const obj = {
  a: 1,
  b: 2,
  c: {
    name: '张三',
    age: 18
  }
};

const state = reactive(obj);
for (const key in state) {
  console.log(key);
}
