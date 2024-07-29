/* 
    知名符号是一些具有特殊含义的共享符号，通过 Symbol 的静态属性得到！

    ES6 延续了 Es5 的思想，尽量为这个语言减少魔法，暴露内部的实现，因此 ES6 用知名符号暴露了某些场景的内部实现。
*/

/* 
    1、Symbol.hasInstance
    该符号用于定义构造函数的静态成员，他将影响 instanceof 的判定

    obj instanceof A
    等效于
    A[Symbol.hasInstance](obj)
*/

/* const s1 = Symbol();
const info = {
  [s1]() {
    return Math.random();
  }
};
console.log(info); */

/* console.dir(Symbol); */

/* function A() {}
const obj = new A();

console.log(obj instanceof A); // true
console.log(A[Symbol.hasInstance](obj)); // true */

/* function A() {}
const obj = new A();

Object.defineProperty(A, Symbol.hasInstance, {
  value: function (obj) {
    console.log(obj);
    return false;
  }
});

obj instanceof A; // flase */

/* 
    2、Symbol.isConcatSpreadable
    该符号会影响数组的 concat 方法

    concat 内部发现参数有下标，并且具有 length 属性，那么就会当作数组进行拆分
*/

/* const arr = [1, 2, 3];
let result = arr.concat(4, [5, 6]);

console.log(result); */

/* const arr = [1, 2, 3];
arr[Symbol.isConcatSpreadable] = false;
let result = arr.concat(4, [5, 6]); // [[1, 2, 3], 4, 5, 6]

console.log(result); */

/* 
    3、Symbol.toPrimitive
    该符号会影响类型转换的结果
*/

/* const obj = {
  a: 1,
  b: 2
};
// obj 首先会调用 .valueOf() 方法，如果返回值不是原始值，那么会继续调用 .toString() 方法得到 [object Object]
console.log(obj + 10); // [object Object]10 */

/* const obj = {
  a: 1,
  b: 2
};
obj[Symbol.toPrimitive] = function () {
  return 100;
};
console.log(obj * 10); // 1000 */

/* 
    4、Symbol.toStringTag
    该符号会影响 Object.prototype.toString 的返回结果
*/

/* const obj = {
  a: 1,
  b: 2,
  c: 3
};
console.log(obj.toString()); // [object Object] */

/* const obj = {
  a: 1,
  b: 2,
  c: 3,
  [Symbol.toStringTag]: 'Person'
};
console.log(obj.toString()); // [object Person] */
