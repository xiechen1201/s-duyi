/* 
    ## Reflect
*/

/* 
    1、什么是 Reflect
    Reflect 是一个内置的 JS 对象，它提供了一系列的方法，调用这些方法可以访问 JS 底层的功能。

    由于它类似于其他语言的反射，因此被命名为 Reflect。


    2、他可以做什么？
    使用 Reflect 可以实现例如：属性的赋值与取值、调用普通函数、调用构造函数、判断属性是否存在对象中等等。

    3、这些功能不是已经存在了吗？为什么还要 Reflect 再实现一次呢？
    ES5 提出，减少魔法，让代码更加的纯粹。语言的功能都要以 API 的方式出现，而不是特殊的语法出现。这种理念很大的程度受到函数shi编程的影响。

    ES6 贯彻了这种理念，他认为，对象属性内存的控制、原型链的修改、函数的调用等等，这些都属于底层实现，属于魔法。
    所以，需要将他们提取出来，形成一个正常的 API，并高度聚合到某个对象中，于是就有了 Reflect 对象。
*/

/* 
    4、它里面提供了多少 API？
    - Reflect.set(target, propertyKey, value, receiver) 设置对象的属性值
    - Reflect.get(target, propertyKey, receiver) 获取对象的属性值
    - Reflect.deleteProperty(target, propertyKey) 删除对象的属性
    - Reflect.has(target, propertyKey) 判断对象中是否存在某个属性，类似于 in

    - Reflect.apply(target, thisArgument, argumentsList) 调用函数并绑定 this 和参数列表
    - Reflecr.defineProperty(target, propertyKey, attributes) 定义对象的属性，类似于 Object.defineProperty，区别在于配置出现问题，返回的是 false 而不是 false
    - Reflect.constructor(target, argumentsList) 调用构造函数
    其他的 API，可以参考 MDN，地址：https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Reflect
*/

/* let obj = {};
Reflect.set(obj, 'name', '张三');
console.log(Reflect.get(obj, 'name'));
Reflect.deleteProperty(obj, 'name');

console.log(obj); */

/* function add(num1, num2) {
  console.log(num1 + num2);
}
Reflect.apply(add, null, [1, 2]); */

/* function Test() {
  this.a = 'a';
  this.b = 'b';
}
let res = Reflect.construct(Test, []);
console.log(res); */
