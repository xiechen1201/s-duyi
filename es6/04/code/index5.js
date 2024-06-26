/* 
    ES5 的 this 指向取决于函数的调用方式：
    1、通过对象调用函数，this 指向该对象
    2、直接调用函数，this 指向全局对象
    3、通过 new 调用函数，this 指向新创建的对象
    4、通过 call、apply、bind 调用函数，this 指向指定的对象
    5、DOM 事件中 this 指向事件源
*/

/* var obj = {
    count: 0,
    start: function () {
        setInterval(function () {
            // 这里的 this 指向全局对象 window
            // 因为这里的 function 是在底层直接调用的
            this.count++;
            console.log(this.count); // NaN
        }, 1000);
    }
};
obj.start(); */

/* 
    ES6 提供了箭头函数
    箭头函数是一个函数表达式，理论上任何函数表达式的情况下都可以使用箭头函数
    完整的写法：
        (参数1, 参数2) => { 函数体 }
*/

/* var obj = {
    count: 0,
    start: function () {
        setInterval(() => {
            // this 的指向变正确了
            this.count++;
            console.log(this.count);
        }, 1000);
    }
};
obj.start(); */

/* 
    如果参数只有一个，可以省略小括号，没有参数或者具有多个参数均不可省略
    参数 => {}
*/

/* const print = (num) => {
    console.log(num);
};
print(100); */

/* 
    如果函数体只有一行代码，可以省略花括号，并且可以省略 return 关键字
    参数 => 返回值
*/

/* const print = (num) => num % 2 !== 0;
console.log(print(100)); // false
console.log(print(99)); // true */

/* 
    如果返回的是一个对象，必须使用()进行包裹
    参数 => ({ 返回值 })
*/

/* const sum = (num1, num2) => ({
    sum: num1 + num2,
    sub: num1 - num2
}); */

// TODO:=======================

/* 
    注意细节：
    1、箭头函数中的 this 取决于箭头函数定义的位置的 this 指向，和如何调用无关
        理解把箭头函数替换为 this: setInterval(this, 1000);
*/

/* var obj = {
    count: 0,
    print: () => {
        console.log(this.count);
    }
};
obj.print(); // undefined */

/* 
    把这个问题进行拆分，还是那句话，箭头函数的 this 指向的是定义时候的 this
    this 书写在函数外部的时候，this 指向的是 window

    var obj = {
        count: 0,
        print: this // 这里的this指向的是 window
    };
*/

/* 
    箭头函数没有自己的 this、arguments、new.target
    如果使用了，则实际使用的是箭头函数外层的 this、arguments、new.target
*/

/* const func = () => console.log(this); // window
func();

const obj = {
    method: func
};
obj.method(); // window，因为箭头函数没有 this */

/* const obj = {
    method: function () {
        const func = () => {
            console.log(this); // obj
            console.log(arguments); // [100]
        };
        func()
    }
};
obj.method(100); */

/* 
    2、箭头函数没有原型，所以箭头函数不能当作构造函数进行使用
*/

/* const func = () => {};
console.log(func.prototype); // undefined
console.dir(func);

new func(); // func is not a constructor */

// TODO:=======================

/* 
    箭头函数的应用场景：
    1、临时性使用的函数，并不会刻意进行调用
        例如事件处理函数 dom.addEventListener('click', () => {})
        例如异步处理函数 setInterval(() => {}, 1000)
        例如其他临时性的函数
    2、为了绑定外层 this 的函数
    3、在不影响其他代码的情况下，保持代码的简洁
        例如数组方法中的回调函数
*/

/* [1, 2, 3].map((el) => el * 2); */
