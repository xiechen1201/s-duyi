// 推断为 number 类型
let a = 123;
let b = Infinity * 0.1;

// 推断为 567 的字面量类型
// const c: 567
const c = 567;

// 逻辑运算符会返回 boolean 类型
let d = a < b;

// 类型标注
let e: number = 100;
let f: 26.218 = 26.218;
let g: 26.218 = 10; // ❌不能将类型 10 分配给类型 26.218

// bigint 类型
// 推断类型：let a1: bigint
let a1 = 1234n;

// const + 函数的形式类型依然是 bigint
const b1 = BigInt(1234);

// 推断类型 1234n 的字面量类型
const b2 = 1234n;
let d1 = a < a1;

let e1 = 1234.5n; // ❌bigint字面量必须是整数
let f1: bigint = 1234; // ❌不能将类型number分配给类型bigint
let g1: bigint = 100n;
let h1: 100n = 100n;

let s1 = 'hello';
let s2: 'hello' = 'hello';
s2 = `hello`;
