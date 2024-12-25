/* 
    重载在后端语言中比较常见，比如C++

    比如有这样简单的需求：函数有两个参数，要求两个参数如果都是number类型，那么就做乘法操作，返回计算结果，
    如果两个参数都是字符串，就做字符串拼接，并返回字符串拼接结果。其他情况直接抛出异常：参数类型必须相同
*/

/* function combineNumber(a: number, b: number): number {
    return a * b;
}
function combineString(a: string, b: string): string {
    return a + " " + b;
} */

// 万一之后需要添加别的类型还需要继续往下写，比较的麻烦
// 函数内部逻辑大同小异，没必要写重复的代码

/* function combine(
    a: number | string,
    b: number | string
): number | string | Error {
    if (typeof a === "number" && typeof b === "number") {
        return a * b;
    }
    if (typeof a === "string" && typeof b === "string") {
        return a + " " + b;
    }
    return new Error("参数类型必须相同");
}

const result = combine(1, 2);
const result2 = combine("hello", "world");
const result3 = combine(1, "world"); // 仍然是可以传递的，函数是在编译时候才会抛出错误，如何在运行的时候就提示错误呢？ */

/* 
    如何强制的规定让函数的参数类型必须相同呢？
    这种约束就是函数的重载签名，之前说的是调用签名
*/

/* // 相当于是对 combine 实现的约定
function combine(a: number, b: number): number;
function combine(a: string, b: string): string;
// 重载的实现
function combine(a: any, b: any): any {}

combine(1, "tim"); // ❌ 没有与此调用匹配的重载 */

/* 
    重载签名和实现签名必须书写在一起，中间不能有其他代码
*/

// ========================================================

/* function changeType(x: string): number;
function changeType(x: number): string;
function changeType(x: any): any {
    return typeof x === "string" ? parseInt(x, 10) : x.toString();
}
changeType("2"); */

/* function createElement(tag: string):HTMLElement {
    return document.createElement(tag);
}
// 可以随便的写字符串
createElement("123");
// 始终返回的都是 HTMLElement 类型
createElement("a"); */

// 使用重载来解决

/* function createElement(tag: "a"): HTMLAnchorElement;
function createElement(tag: "canvas"): HTMLCanvasElement;
function createElement(tag: any) {
    return document.createElement(tag);
}
createElement("123"); // ❌ 没有与此调用匹配的重载 */

// 如果使用重载，要注意先后顺序（大的类型要写在最后进行兜底）
function createElement(tag: string): HTMLElement;
function createElement(tag: "a"): HTMLAnchorElement;
function createElement(tag: "canvas"): HTMLCanvasElement;
function createElement(tag: any) {
    return document.createElement(tag);
}
createElement("123"); // ✅
 