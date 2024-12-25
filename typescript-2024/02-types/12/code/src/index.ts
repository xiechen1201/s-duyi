// JS 中如果要写一个对象，对象的结构不知道什么样子

/* let obj1 = {};
let obj2: {} = { name: 'kobe', age: 18 };
let obj3: {} = 'Hello';

// object 的范围比 {} 要小，object 只能是对象类型，不能接受基本类型
// 只要是个对象都没问题
let obj5: object = { name: 'why', age: 18 };
let obj6: object = [1, 2, 3];
let obj7: object = 123; // ❌不能将类型“number”分配给类型“object” */

/* 
  {} 就相当于装箱类型 Object
  Object 也可以是基本类型
*/

/* const temp1: Object = { name: 'jack' };
const temp2: Object = () => {};
const temp3: Object = [];
const temp4: Object = new String('hello');
const temp5: Object = 'world';
const temp6: Object = 123;
const temp7: Object = true;
const temp8: Object = Symbol('a'); */

// 虽然有装箱类型，但是大多数的情况下使用的都是拆箱类型

/* let str1: string = 'hello';
let str2: String = 'hello';

let str3: String = new String('hello');
let str4: string = new String('hello'); // ❌不能将类型“String”分配给类型“string”

// 装箱类型是包含拆箱类型的
str2 = str1;
str1 = str2; // ❌不能将类型“String”分配给类型“string” */

/* 
  类型字面量就是具体的某一个值的类型，也算是一个具体的子类型
  一样具有这样的兼容性问题
*/

let str2: String = 'hello';
let str4: 'hello' = 'hello';
str2 = str4; // 小的类型赋值给大的类型，没有问题
str4 = str2; // ❌不能将类型“String”分配给类型“'hello'”

/* 
  所以赋值的时候要注意类型直接是否兼容
  父子关系的类型是可以赋值的

  一般不要装箱类型，除非确实有需要
*/