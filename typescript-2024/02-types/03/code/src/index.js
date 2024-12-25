"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let a = true;
var b = false;
// 使用 const 定义 boolean 类型会被推到尾 true 的字面量类型。
const c = true;
let d = true;
let e = true;
let f = false;
// 相当于 true 类型只能赋值为 true
let g = false; // ❌不能将类型“false”分配给类型“true”
