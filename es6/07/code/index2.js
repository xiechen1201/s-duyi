/* 
    根据某个符号描述能够得到同一个符号。
*/

/* const s1 = Symbol('foo');

const obj1 = {
  a: 1,
  b: 2,
  [s1]: 3
};

const obj2 = {
  a: 'a',
  b: 'b',
  [s1]: 'c'
};

console.log(obj1, obj2); */

/* 
    没有任何的问题，因为是两个对象用的同一个符号。
    如果符号在一个其他的地方，对象该如何获取这个符号呢？

    Symbol.for("描述") 获取共享符号
*/

/* const s1 = Symbol.for('foo');
const s2 = Symbol.for('foo');

console.log(s1 === s2); // true

const obj = {
  [Symbol.for('foo')]: 3
};

console.log(obj);
console.log(obj[Symbol.for('foo')]); // 3 */

/* 
    基于这一点，某些时候不想做私有属性，就想让别人访问，这个时候就可以使用共享符号。
*/
