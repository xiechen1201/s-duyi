/* 
    条件类型和 JS 的三元运算符类似，但是取得的是类型
    前面条件不再是等值的判断，而是使用 extends 关键字
    类型1 extends 类型2 ? 类型3 : 类型4
    如果类型1能够兼容类型2，则返回类型3，否则返回类型4
*/

// 🤔 type T1 = "yes"
type T1 = 1 extends number ? "yes" : "no";
// 🤔 type T2 = "no"
type T2 = "1" extends number ? "yes" : "no";
// 🤔 type T3 = "no"
type T3 = string extends object ? "yes" : "no";
// 🤔 type T4 = "yes"
type T4 = string extends Object ? "yes" : "no";
// 🤔 type T5 = "yes"
type T5 = { a: 1 } extends object ? "yes" : "no";
// 🤔 type T6 = "yes"
type T6 = { a: 1; b: 2 } extends { a: 1 } ? "yes" : "no";
// 🤔 type T8 = "yes"
type T8 = string extends {} ? "yes" : "no";

// 🤔 type T9 = "yes"
type T9 = {} extends object ? "yes" : "no";
// 🤔 type T10 = "yes"
type T10 = object extends {} ? "yes" : "no";

// 🤔 type T11 = "yes"
type T11 = {} extends Object ? "yes" : "no";
// 🤔 type T12 = "yes"
type T12 = Object extends {} ? "yes" : "no";

// 🤔 type T13 = "yes"
type T13 = object extends Object ? "yes" : "no";
// 🤔 type T14 = "yes"
type T14 = Object extends object ? "yes" : "no";

/* 
    为什么 T9 和 T10 都是 "yes" 呢？
    为什么 T11 和 T12 都是 "yes" 呢？
    为什么 T13 和 T14 都是 "yes" 呢？

    都是 TS 底层的一个系统设置，为了更好的表达类型的兼容性，知道这么一个问题就可以了。

    原始字面量类型 "str" < 原始类型 string < 原始类型对应的装箱类型 String < Object
*/

// 🤔 type T15 = "yes"
type T15 = string extends any ? "yes" : "no";
// 🤔 type T16 = "yes"
type T16 = Object extends any ? "yes" : "no";
// 🤔 type T17 = "yes"
type T17 = Object extends unknown ? "yes" : "no";

// 得到的是一个联合类型
// 🤔 type T18 = "yes" | "no"
type T18 = any extends Object ? "yes" : "no";
// 🤔 type T19 = "yes" | "no"
type T19 = any extends "Hello" ? "yes" : "no";

// 🤔 type T20 = "yes"
type T20 = unknown extends any ? "yes" : "no";
// 🤔 type T21 = "yes"
type T21 = any extends unknown ? "yes" : "no";

/* 
    不需要太过的纠结，知道这么一个问题就可以了。
*/

// 🤔 type T22 = "yes"
type T22 = never extends "Hello" ? "yes" : "no";
// 🤔 type T23 = "no"
type T23 = "Hello" extends never ? "yes" : "no";