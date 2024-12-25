"use strict";
/* let a = Symbol('a');
let b: symbol = Symbol('a');

console.log(a === b); // false

let obj = {
  name: 'Symbol',
  [a]: 'jack',
  [b]: function () {
    console.log('ts');
  }
};
console.log(obj);

// symbol 的值不可枚举
for (let key in obj) {
  console.log('---', key);
}

Object.keys(obj); */
Object.defineProperty(exports, "__esModule", { value: true });
// 使用 const 定义 symbol
// 推断类型：const c: typeof c
// 相当于 symbol 的字面量类型
const c = Symbol('c');
// 等同于下面的类型，唯一的 symbol 类型
const d = Symbol('d');
console.log(c === d); // ❌此比较似乎是无意的，因为类型“typeof c”和“typeof d”没有重叠
