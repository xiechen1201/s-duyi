/* 
    属性装饰器和类装饰器差不多，本身也是一个函数，只是函数的描述不同
    这个函数至少需要两个参数
    参数1: 如果是实例属性，参数1是类的原型，如果是静态属性，参数1是类本身
    参数2: 字符串，属性名
*/

/* function point(target: any, key: string) {
    console.log(target, key);
}

class A {
    @point 
    public name: string = "zhangsan";

    @point 
    static age: number = 18;
} */

/* 
    属性装饰器也可以使用工厂模式
*/

/* function point(value: string) {
    return function (target: any, key: string) {
        // 如果是实例属性 value 给到原型对象，如果是静态属性 value 给到类本身
        target[key] = value;
    };
}

class A {
    @point("hello")
    public name: string = "zhangsan";

    @point("world")
    static age: number = 18;
}

console.log(A.prototype);
console.log(A); */

/* 
    实现装饰器将值赋值给实例对象的属性
*/

function d(value: string) {
    return function (target: any, key: string) {
        if (!target.__initProperties__) {
            target.__initProperties__ = function () {
                for (let prop in target.__props) {
                    this[prop] = target.__props[prop];
                }
            };
            target.__props = {};
        }
        target.__props[key] = value;
    };
}

class A {
    @d("hello")
    public name: string = "zhangsan";
    constructor() {
        // 判断有没有自己写的某个函数
        if (typeof this["__initProperties__"] === "function") {
            this["__initProperties__"]();
        }
    }

    @d("world")
    static age: number = 18;
}
