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

const arr = [1, obj, 3];
const arrState = reactive(arr);

// 读取行为
// arrState[1];
// arrState.length;
// for (const key in arrState) {
//   console.log(key);
// }
// arrState.includes(1);
// console.log(arrState.indexOf(1));
// console.log(arrState.includes(obj));

// 写入行为
// arrState[0] = 100;
// arrState[5] = 400; // 这里会涉及到隐式的改变长度
// arrState.length = 100;
// arrState.length = 1;

arrState.push(4);
