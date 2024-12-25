/* let a: any = 666;
let b: any = ['danger'];
let c = a + b;

console.log(c); */

/*
// unknown 在任何情况下都不会自动推断为 unknown 类型
// 推断类型：let a: any
let a;

 // 只能手动定义
let b: unknown;
b = 123;
b = true;

// unknown 类型只能赋值给 any 和 unknown 类型
let c: number = 123;
c = b; // ❌不能将类型“unknown”分配给类型“number”

let d: any;
let e: unknown;
d = c;
e = c; */

let anyFn:any;
let unknownFn: unknown;

anyFn.foo();
unknownFn.foo(); // ❌“unknownFn”的类型为“未知”
