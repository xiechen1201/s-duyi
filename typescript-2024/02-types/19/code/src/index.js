"use strict";
/* let str = 'Hello';
// const 声明的变量类型就是 World 的字面量类型。
const str1 = 'World';

// TS 还可以根据 if else 的判断来推断类型

type MyTypes = number | string | boolean | null | undefined;

function parse(value: MyTypes) {
  // 当 value 进行 if 判断的时候，TS 会根据判断条件推断出 value 的类型
  // 没经过一个 if 判断，value 的类型就会缩小一次
  if (typeof value === 'string') {
    return value;
  } else if (typeof value === 'number') {
    return value * 2;
  } else if (typeof value === 'boolean') {
    return value;
  }else{
    // 🤔 value: null | undefined
    return value;
  }
} */
Object.defineProperty(exports, "__esModule", { value: true });
/*
  typeof 在 JS 用于判断一个值的类型
  在 TS 也具有这些功能，但是添加了更加强大的功能，类型查询
*/
let temp1 = 'Hello';
const temp2 = "World";
