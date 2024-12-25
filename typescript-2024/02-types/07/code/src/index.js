"use strict";
/* let temp1: undefined = undefined;
let temp2: null = null;

// 在 TS 中 null 和 string 不是一种类型
// null 和 undefined 都是独立的类型
// 在 "strictNullChecks": false 下是成立的
const temp3: string = null; // ❌不能将类型“null”分配给类型“string”
const temp4: string = undefined; // ❌不能将类型“undefined”分配给类型“string” */
Object.defineProperty(exports, "__esModule", { value: true });
let temp5 = null;
// let temp6: string
let temp6 = 'hello';
// 使用 let 声明变量时，如果没有初始化，那么它的类型就是 any
// null 会被类型拓宽为 any 类型
// let temp7: any
let temp7 = null;
temp7 = 123;
function getStr() {
    // 可能返回一个字符串，或者 null undefined
    if (Math.random() > 0.5) {
        return 'hello';
    }
    return undefined; // ❌不能将类型“undefined”分配给类型“string”
}
