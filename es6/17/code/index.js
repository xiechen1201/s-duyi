/* 
    Property Descriptor 属性描述符，用于描述一个属性的相关信息。

    属性目前只知道属性的 key 和 value ，还有什么相关的信息呢？

    例如：是否可以在 forin 循环中遍历（可枚举性）、是否修改（可写性）、是否可以删除（可配置性）等等。

    这些被称为属性描述符。

    通过 Object.getOwnPropertyDescriptor(obj, prop) 可以得到一个对象某个属性的属性描述符。

    Object.getOwnPropertyDescriptors(obj); 得到某个对象所有属性的属性描述符。
*/

/* let obj = {
  a: 1,
  b: 2
};

console.log(Object.getOwnPropertyDescriptor(obj, 'a')); 
// {value: 1, writable: true, enumerable: true, configurable: true} */

/* 
    value 属性，表示属性的值
    writable 属性，表示属性是否可写
    enumerable 属性，表示属性是否可以枚举
    configurable 属性，表示属性的描述符是否可以修改
*/

/* let obj = {
    a: 1,
    b: 2
  };
console.log(Object.getOwnPropertyDescriptors(obj)) */

/* 
    如果需要为某个对象添加属性或者修改属性时候，配置其属性描述符，可以使用：
*/

/* let obj = { a: 1, b: 2 };
Object.defineProperty(obj, 'c', {
  value: 3
  // writable: false,
  // enumerable: true,
  // configurable: true
});

console.log(Object.keys(obj));

Object.defineProperty(obj, 'c', {
  value: 4 // Error: Cannot redefine property: c
});

console.log(Object.getOwnPropertyDescriptors(obj)); */

/* 
    定义多个属性的属性描述符：
*/

/* let obj = {};
Object.defineProperties(obj, {
  a: {
    value: 1,
    writable: true,
    enumerable: true,
    configurable: true
  },
  b: {
    value: 2,
    writable: true,
    enumerable: true,
    configurable: true
  }
}); */

// TODO:============================================

/* 
    ## 存取器属性
*/

/* 
    属性描述符中，如果配置了 get 和 set 中的任何一个属性，则该属性不再是一个普通属性，而是一个存取器属性。

    get 和 set 均为函数，若果一个属性是存取器属性，则读取该属性时会运行 get 方法，将 get 方法的返回值作为属性的值。如果给属性赋值，则会运行 set 方法。
*/

/* let obj = {};
Object.defineProperty(obj, 'a', {
  get() {
    console.log('get');
    // return 1;
  },
  set(value) {
    console.log('set', value);
  }
});

console.log(obj);
obj.a; // 运行 get 函数
obj.a = 2; // 运行 set 函数

obj.a  = obj.a + 1;
console.log(obj.a); */

/* 
    无限的死循环
*/

/* let obj = {};
Object.defineProperty(obj, 'a', {
  get() {
    return obj.a;
  },
  set(value) {
    obj.a = value;
  }
}); */

/* 
    正确做法
*/

/* let obj = {};
Object.defineProperty(obj, 'a', {
  get() {
    return obj._a;
  },
  set(value) {
    obj._a = value;
  }
});
obj.a = 10;
console.log(obj); */

/* 
    这样一来，属性 a 就变成了正常的属性，无论是读取还是赋值都会调用函数，在函数内就可以进行操作了。
    这就是存取器函数最大的意义。
*/

/* let obj = {
  name: 'zhansan'
};

Object.defineProperty(obj, 'age', {
  get() {
    return obj._age;
  },
  set(value) {
    if (value < 0) {
      obj._age = 1;
    } else {
      obj._age = value;
    }
  }
});

obj.age = -10;
console.log(obj.age); */

/* 
  配置 get 和 set 的时候，是不能和 value 和 writable 同时配置的，否则会报错。
  因为是矛盾的。
*/