/* 
    TS 是一个编译时、静态的、强类型的语言
    报错都是编译时的报错，还是可以进行编译的，有输出结果的
    对 JS 是没有影响的，TS 只是负责类型上的错误
*/

// 函数
// JS 怎么写 TS 还是怎么写
// 如果不写类型严格模式下会报错
/* function add(a, b) { // ❌参数“a”隐式具有“any”类型
  return a + b;
} */

// 手动指定参数、返回值的类型
/* function add(a: number, b: number): number {
  return a + b;
}
const r: number = add(10, 20);
console.log(r); */

// 可选参数
// 可以在某些参数后面加一个问号，表示参数是可选的
/* function add(a: number, b?: number): number {
  return a + (b ?? 0);
} */

// 如果参数具有默认值，本身就是一个可选的参数
// 类型推断：function add(a: number, b?: number): number
/* function add(a: number, b: number = 0): number {
  return a + b;
} */

// 剩余参数
/* function add(a: number, ...rest: number[]): number {
  return a + rest.reduce((pre, cur) => pre + cur, 0);
}
const result = add(10, 20, 30, 40);
console.log(result); */

// 如果函数没有返回值类型，默认返回类型为 void

// 泛型参数，简称泛型
// 不确定 T 的类型是什么，所以用 T 来代替
// T 是一个占位类型，在调用的时候会传入具体的类型

/* function identify<T>(value: T): T {
  return value;
}
// function identify<"string">(value: "string"): "string"
let res1: string = identify<string>('hello');
// function identify<number>(value: number): number
let res2: number = identify<number>(123);
// 自动推断为一个字面量类型
// function identify<true>(value: true): true
let res3 = identify(true); */

// 泛型+元祖
/* function identify<T>(value: T): [T, T] {
  return [value, value];
} */

/* // 多泛型
function print<T, U>(value1: T, value2: U): [T, U] {
  return [value1, value2];
}
// 推断：function print<number, string>(value1: number, value2: string): [number, string]
let res = print(10, 'hello'); */

// 更加复杂的案例

/* function myNumbersFilter(
  arr: number[],
  callback: (item: number, index: number) => boolean
) {
  const result = [];
  for (let i = 0; i < arr.length; i++) {
    let res = callback(arr[i], i);
    res && result.push(arr[i]);
  }
  return result;
}

let res = myNumbersFilter([1, 2, 3, 4, 5], (item) => {
  return item % 2 === 0;
});
console.log(res); */

// 想把 arr 的类型拓展

function myNumbersFilter<T>(arr: T[], callback: (item: T, index: number) => boolean) {
  const result = [];
  for (let i = 0; i < arr.length; i++) {
    let res = callback(arr[i], i);
    res && result.push(arr[i]);
  }
  return result;
}
let res = myNumbersFilter<number>([1, 2, 3, 4, 5], (item) => {
  return item % 2 === 0;
});
let res2 = myNumbersFilter<string>(['1', '22', '333', '4444', '55555'], (item) => {
  return item.length % 2 === 0;
});
console.log(res, res2);
