/* 
    Object 是一个构造函数，函数中新增了一些静态的 API

    ## Object.is() 用来判断两个数据是否相等，基本上和严格相等是一致的，除了下面的两点：
        1. NaN === NaN // false
        2. +0 === -0 // true

    之前判断相等使用 === 会产生一些怪异的问题，例如一些违反常理的问题
*/

/* console.log(NaN === NaN); // false
console.log(+0 === -0); // true */

/* console.log(Object.is(NaN, NaN)); // true
console.log(Object.is(+0, -0)); // false */

// TODO:====================

/* 
    ## Object.assign() 用来混合对象

*/

/* const obj1 = {
    a: 123,
    b: 345,
    c: 678
};
const obj2 = {
    a: 'abc',
    b: 'efg'
};

// 会 obj2 的值会覆盖到 obj1 ，并且会对 obj1 产生改动，然后返回 obj1
const obj3 = Object.assign(obj1, obj2);
console.log(obj3, obj1, obj3 === obj1); // { a: 'abc', b: 'efg', c: 678 } true

// 进行巧妙的处理，避免改动 obj1 对象,改动的是 {} 空对象
const obj4 = Object.assign({}, obj1, obj2);
console.log(obj4);

// 最简单的方式就是使用展开运算符
const obj5 = { ...obj1, ...obj2 };
console.log(obj5); // { a: 'abc', b: 'efg', c: 678 } */

// TODO:====================

/* 
    ## Object.getOwnPropertyNames() 获取枚举顺序

    并不是ES6新增的，只不过官方没有明确要求如何对属性进行排序
    如何排序完全由浏览器厂商来决定，ES6只是规定了该方法数组的排序方式如下：
        1 先排数字在排字母
        2 其他的字母按照书写顺序进行排序
    用来获取非原型莲上的属性

*/

/* const obj = {
    a: 1,
    b: 2,
    c: 3
};

let names = Object.getOwnPropertyNames(obj);
console.log(names); */

/* const obj = {
    b: 2,
    a: 1,
    c: 3,
    0: 6,
    5: 2,
    4: 1
};
console.log(Object.getOwnPropertyNames(obj)); // ['0', '4', '5', 'b', 'a', 'c'] */

// TODO:====================

/*
    ## Object.setPropertyOf() 设置某个对象的隐式原型链 
    Object.setPropertyOf(obj, proto);
    等同于 obj.__proto__ = proto;
*/

/* const user = {
    name: '张三',
    age: 20
};
Object.setPrototypeOf(user, {
    say() {
        console.log('hello');
    }
});
console.log(user); */
