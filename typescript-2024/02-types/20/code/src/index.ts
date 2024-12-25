/* 
  数组类型的声明方式有两种：
  类型[]
  或者
  Array<类型>
*/

/* let a = [1, 2, 3];
var b = ['a', 'b'];
const c: boolean[] = [true, false];
const d: Array<string> = ['a', 'b'];

let e = [1, 'a'];
const f: (number | string)[] = [2, 'b'];

a.push(4);
a.push('a'); // ❌
d.unshift('c');

f.push(3);
f.push(true); // ❌ */

// 一般情况下，数组应该保持同质。
// 也就是说，不要在同一个数组中存储不同类型的值，存数值的，就是存数值的数组，存字符串的，就是存字符串的数组。
// 设计程序时要规划好，保持数组中的每个元素都具有相同的类型。

/* let g = [1, 'a'];
g.map((item) => {
  if (typeof item === 'number') {
    return item * 2;
  }
  return item.toUpperCase();
});
 */

// 对象字面量也可以

/* const users: {
  name: string;
  age: number;
}[] = [
  {
    name: 'John',
    age: 30
  },
  {
    name: 'Jane',
    age: 25
  }
];
 */

// ============================

/* // TS 在默认情况下为 any[]
const arr = [];

// 如何 any[] 的数组中赋值了具体的类型，那么函数外使用的时候，TS 就会认为这个数组是具体的类型
function fn() {
  const arr = []; // any[]
  arr.push(1);
  arr.push('a');
  return arr; // (string | number)[]
}
// 
// 🤔 const myArr: (string | number)[]
const myArr = fn();
myArr.push(true); // ❌ 类型“boolean”的参数不能赋给类型“string | number”的参数
 */

/* // 数组只读
const arr: readonly number[] = [1, 2, 3];
arr[0] = 10; // ❌ 类型“readonly number[]”中的索引签名仅允许读取
arr.push(4); // ❌ 类型“readonly number[]”上不存在属性“push”

// 某些方法是可用的，某些是不可用的
let newArr = arr.concat(4);
arr.sort(); // ❌ 类型“readonly number[]”上不存在属性“sort”
 */

// ===================================

/* // 可以是number数组，可以是string，也可以是number和string类型混合的数组
type ArrType1 = (number | string)[]; 
// 要么是number类型，要么是string类型
type ArrType2 = number[] | string[];

const arr1: ArrType1 = ["a", "b", "c"];
const arr2: ArrType2 = [1, 2, 3];
const arr3: ArrType2 = [1, "a", 3]; // ❌
const arr4: ArrType1 = [1, "a", 3]; */

// =====================================

/* 
  元祖师数组的子类型

  声明元组必须显式注解类型
*/

const pointer1: number[] = [10, 20];
const pointer2: [number, number] = [20, 30];

// 4.0 后加入了具名元祖
const pointer3: [x: number, y: number] = [20, 30];
const user: [name: string, age: number, gender: '男' | '女'] = ['jack', 20, '男'];

// 元祖的类型
pointer3[2] = 40; // ❌ 不能将类型40分配给类型undefined
pointer3.push(40); // ✅ 使用 push 可以添加

// 可以使用只读
const pointer4: readonly [x: number, y: number] = [20, 30];
pointer4.push(40); // ❌
