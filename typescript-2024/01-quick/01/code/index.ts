/* // :number 就是类型标注
let v1: number = '10'; // ❌不能将类型“string”分配给类型“number”

let v2: string;
v2 = 'this is a string';

// 只能是 null 类型
let nullVar:null = null;
nullVar = undefined; // ❌不能将类型“undefined”分配给类型“null” */

// =====================

// 类型推断：TS 能够自动对代码进行类型推断
// 虽然很像 JS 的写法，但是 TS 会推断出类型
// 不能赋值为一个不同类型
/* let v5 = 10;
v5 = '10'; // ❌不能将类型“string”分配给类型“number” */

// 使用 any 类型可以像 JS 赋值任何的类型
/* let v6: any = 10;
v6 = '10'; */

// =====================

/* let v11 = Symbol(); // 类型断言：let v11: symbol

// TS 编译的时候可以指定要编译的 JS 版本，对应编译的 JS 代码，就会引用对应的 JS 类型
let v12 = 123n; // 类型断言：let v12: bigint */

// =====================

// 因为 cosnt 声明的变量不能更改，所以默认类型就是字面量类型，123
const v13 = 123; // 类型推断：const v13: 123
const v14:123 = 123;
const v15:124 = 123; // ❌不能将类型“123”分配给类型“124”