/* let name: string;
name = "Joe";
name = 123; // ❌不能将类型“number”分配给类型“string” */

// ===

/* function sum(a: number, b: number): number {
  return a + b;
}
sum(1, "abc"); // ❌类型“string”的参数不能赋给类型“number”的参数 */

// ===

/* function sum(a: number, b: number): number {
  return a + b;
}
let num: string = sum(1, 123); // ❌不能将类型“number”分配给类型“string” */

// ====

/* // 推导为：function sum(a: number, b: number): number
function sum(a: number, b: number) {
  return a + b;
} */

/* // 推导为：let name: string
let name = "Joe"; */

// ====

/* let age;
age = 12; */

// ====

/* let nums: number[] = [1, 2, 3]; */

/* let nums: Array<number> = [3, 4, 5]; */

/* // 推断为：let strs: string[]
let strs = ["a", "b", "c"]; */

// =====

/* let u: object;
u = {}; */

/* function printValues(obj: object) {
  let values = Object.values(obj);
  values.forEach((el) => console.log(el));
} */

// ====

/* let n: string = null;
let s: number = undefined;

n.toLocaleUpperCase(); // 错误 */

// =====

/* let name: string | number = "Joe";
name = 123;
if(typeof name === "string"){
    name.toLocaleLowerCase()
} */

// =====

/* function printMenu(): void {
  console.log("1.登录");
  console.log("2.注册");
} */

// ====

/* function throwError(msg: string): never {
  throw new Error(msg);
  console.log("abc"); // 检测到无法访问的代码
} */

/* function alwaysDoSomething(msg: string): never {
  // 死循环
  while (true) {
    // ...
  }
} */

// ====

/* let str: "A" | "B" | "C";
str = "D"; // ❌不能将类型“"D"”分配给类型“"A" | "B" | "C"”

let num: 10 | 20 | 30;
num = 30; */

/* let arr: [] = [1, "a"]; */

/* let user: {
  name: string;
  age: number;
};

user = {
  name: "xiechen",
  age: 34
}; */

// ======

/* let tu: [string, number] = ["a", 1];
tu = ["b", 2];
tu = []; // ❌不能将类型“[]”分配给类型“[string, number]” */

// =====

/* let data: any = "abc";
let num: number = data; */

// =======

/* let u: { name: string; age: number; gender: "男" | "女" };

function getUsers(): { name: string; age: number; gender: "男" | "女" }[] {
  return [];
} */

/* type TypeUser = { name: string; age: number; gender: "男" | "女" };

let u: TypeUser = {
  name: "xiechen",
  age: 34,
  gender: "男"
};

function getUsers(): TypeUser[] {
  return [];
} */

/* type TypeGender = "男" | "女";
type TypeUser = { name: string; age: number; gender: TypeGender };

let u: TypeUser = {
  name: "xiechen",
  age: 34,
  gender: "男"
};

function getUsers(gender: TypeGender): TypeUser[] {
  return [];
} */

// =======

/* // ❌函数缺少结束 return 语句，返回类型不包括 "undefined"
// 因为可能 a：string b：number 就不会执行 if 语句了
function combine(a: number | string, b: number | string): number | string {
  if (typeof a === "number" && typeof b === "number") {
    return a * b;
  } else if (typeof a === "string" && typeof b === "string") {
    return a.toString() + b.toString();
  }
} */

// 最好的做法是要么全部都是字符串，要么全部都是数字，要定下来一个准确的类型
/* function combine(a: number | string, b: number | string): number | string {
  if (typeof a === "number" && typeof b === "number") {
    return a * b;
  } else if (typeof a === "string" && typeof b === "string") {
    return a.toString() + b.toString();
  }
  throw new Error("a和b必须是相同的类型");
}
const result = combine(1, "b"); */

/* 
  告诉 TS 这个函数只能有两种情况
  都是 string 类型
  都是 number 类型
*/

/* function combine(a: number, b: number): number;
function combine(a: string, b: string): string;

function combine(a: number | string, b: number | string): number | string {
  if (typeof a === "number" && typeof b === "number") {
    return a * b;
  } else if (typeof a === "string" && typeof b === "string") {
    return a.toString() + b.toString();
  }
  throw new Error("a和b必须是相同的类型");
}
combine(1, 2);
combine("a", "b");
combine(1, "b"); // ❌没有与此调用匹配的重载 */

// ==========

/* function sum(a: number, b: number, c?: number): number {
  if (c) {
    return a + b + c;
  }
  return a + b;
}
sum(1, 2, 3);
sum(1, 2); */

function sum(a: number, b: number, c: number = 0): number {
  return a + b + c;
}
sum(1, 2, 3);
sum(1, 2);
